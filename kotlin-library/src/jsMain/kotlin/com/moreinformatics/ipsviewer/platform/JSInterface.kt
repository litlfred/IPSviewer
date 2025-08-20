package com.moreinformatics.ipsviewer.platform

import com.moreinformatics.ipsviewer.core.*
import com.moreinformatics.ipsviewer.fhir.Bundle
import com.moreinformatics.ipsviewer.rendering.*
import kotlinx.serialization.json.Json
import kotlinx.serialization.decodeFromString
import kotlinx.serialization.builtins.ListSerializer
import kotlinx.serialization.builtins.serializer

/**
 * JavaScript/TypeScript platform interface for IPS processing
 * Provides JS-friendly methods that can be called from TypeScript
 */
@JsExport
class IpsViewerJS {
    private val processor = IpsProcessor()
    private val enhancedProcessor = EnhancedIpsProcessor()
    private val json = Json { ignoreUnknownKeys = true }
    
    /**
     * Process IPS bundle from JSON string (legacy method)
     * @param bundleJson JSON string containing FHIR Bundle
     * @param mode Processing mode: "app" or "text"
     * @return JSON string containing processed IPS content
     */
    fun processIpsBundle(bundleJson: String, mode: String = "app"): String {
        return try {
            val bundle = json.decodeFromString<Bundle>(bundleJson)
            val config = IpsProcessingConfig(
                mode = if (mode == "text") ProcessingMode.TEXT else ProcessingMode.APP
            )
            val processorWithConfig = IpsProcessor(config)
            val result = processorWithConfig.processBundle(bundle)
            json.encodeToString(IpsProcessingResult.serializer(), result)
        } catch (e: Exception) {
            val errorResult = IpsProcessingResult(
                sections = emptyMap(),
                errors = listOf("Failed to process bundle: ${e.message}")
            )
            json.encodeToString(IpsProcessingResult.serializer(), errorResult)
        }
    }
    
    /**
     * Process IPS bundle with enhanced rendering (new method)
     * @param bundleJson JSON string containing FHIR Bundle
     * @param mode Rendering mode: "structured", "text", or "hybrid"
     * @param platform Target platform: "web", "android", or "ios" 
     * @return JSON string containing enhanced rendering result with components
     */
    fun processIpsBundleWithRendering(
        bundleJson: String, 
        mode: String = "structured",
        platform: String = "web"
    ): String {
        return try {
            val bundle = json.decodeFromString<Bundle>(bundleJson)
            val renderingMode = when (mode.lowercase()) {
                "text" -> RenderingMode.TEXT
                "hybrid" -> RenderingMode.HYBRID
                else -> RenderingMode.STRUCTURED
            }
            val targetPlatform = when (platform.lowercase()) {
                "android" -> TargetPlatform.ANDROID
                "ios" -> TargetPlatform.IOS
                else -> TargetPlatform.WEB
            }
            val config = RenderingConfig(
                mode = renderingMode,
                platform = targetPlatform
            )
            val result = enhancedProcessor.processBundle(bundle)
            json.encodeToString(IpsRenderingResult.serializer(), result)
        } catch (e: Exception) {
            val errorResult = IpsRenderingResult(
                sections = emptyMap(),
                errors = listOf("Failed to process bundle: ${e.message}")
            )
            json.encodeToString(IpsRenderingResult.serializer(), errorResult)
        }
    }
    
    /**
     * Format date using IPS date formatting
     */
    fun formatDate(dateString: String): String {
        return com.moreinformatics.ipsviewer.utils.formatDate(dateString)
    }
    
    /**
     * Get version information
     */
    fun getVersion(): String = "2.0.0"
    
    /**
     * Get supported component types for rendering
     */
    fun getSupportedComponentTypes(): String {
        val types = ComponentType.values().map { it.name }
        return json.encodeToString(ListSerializer(String.serializer()), types)
    }
}

/**
 * Global function for easy access from JavaScript (legacy)
 */
@JsExport
@JsName("createIpsViewer")
fun createIpsViewer(): IpsViewerJS = IpsViewerJS()

/**
 * Global function for enhanced rendering
 */
@JsExport
@JsName("createEnhancedIpsViewer")
fun createEnhancedIpsViewer(): IpsViewerJS = IpsViewerJS()