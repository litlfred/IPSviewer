package com.moreinformatics.ipsviewer.platform

import com.moreinformatics.ipsviewer.core.*
import com.moreinformatics.ipsviewer.fhir.Bundle
import com.moreinformatics.ipsviewer.rendering.*
import kotlinx.serialization.json.Json
import kotlinx.serialization.decodeFromString

/**
 * JVM/Android platform interface for IPS processing
 * Provides Android-friendly API for integration with Android apps
 */
class IpsViewerAndroid {
    private val processor = IpsProcessor()
    private val enhancedProcessor = EnhancedIpsProcessor()
    private val json = Json { ignoreUnknownKeys = true }
    
    /**
     * Process IPS bundle from JSON string (legacy method)
     * @param bundleJson JSON string containing FHIR Bundle  
     * @param config Processing configuration
     * @return Processed IPS content result
     */
    fun processIpsBundle(bundleJson: String, config: IpsProcessingConfig = IpsProcessingConfig()): IpsProcessingResult {
        return try {
            val bundle = json.decodeFromString<Bundle>(bundleJson)
            val processorWithConfig = IpsProcessor(config)
            processorWithConfig.processBundle(bundle)
        } catch (e: Exception) {
            IpsProcessingResult(
                sections = emptyMap(),
                errors = listOf("Failed to process bundle: ${e.message}")
            )
        }
    }
    
    /**
     * Process IPS bundle from Bundle object (legacy method)
     * @param bundle FHIR Bundle object
     * @param config Processing configuration
     * @return Processed IPS content result
     */
    fun processIpsBundle(bundle: Bundle, config: IpsProcessingConfig = IpsProcessingConfig()): IpsProcessingResult {
        return try {
            val processorWithConfig = IpsProcessor(config)
            processorWithConfig.processBundle(bundle)
        } catch (e: Exception) {
            IpsProcessingResult(
                sections = emptyMap(),
                errors = listOf("Failed to process bundle: ${e.message}")
            )
        }
    }
    
    /**
     * Process IPS bundle with enhanced rendering from JSON string
     * @param bundleJson JSON string containing FHIR Bundle
     * @param config Rendering configuration
     * @return Enhanced rendering result with component trees
     */
    fun processIpsBundleWithRendering(
        bundleJson: String, 
        config: RenderingConfig = RenderingConfig(platform = TargetPlatform.ANDROID)
    ): IpsRenderingResult {
        return try {
            val bundle = json.decodeFromString<Bundle>(bundleJson)
            val processorWithConfig = EnhancedIpsProcessor(config)
            processorWithConfig.processBundle(bundle)
        } catch (e: Exception) {
            IpsRenderingResult(
                sections = emptyMap(),
                errors = listOf("Failed to process bundle: ${e.message}")
            )
        }
    }
    
    /**
     * Process IPS bundle with enhanced rendering from Bundle object
     * @param bundle FHIR Bundle object
     * @param config Rendering configuration
     * @return Enhanced rendering result with component trees
     */
    fun processIpsBundleWithRendering(
        bundle: Bundle, 
        config: RenderingConfig = RenderingConfig(platform = TargetPlatform.ANDROID)
    ): IpsRenderingResult {
        return try {
            val processorWithConfig = EnhancedIpsProcessor(config)
            processorWithConfig.processBundle(bundle)
        } catch (e: Exception) {
            IpsRenderingResult(
                sections = emptyMap(),
                errors = listOf("Failed to process bundle: ${e.message}")
            )
        }
    }
    
    /**
     * Format date using IPS date formatting
     */
    fun formatDate(dateString: String): String {
        return com.moreinformatics.ipsviewer.utils.formatDate(dateString)
    }
    
    /**
     * Get library version
     */
    fun getVersion(): String = "2.0.0"
    
    /**
     * Create processing configuration (legacy)
     */
    fun createConfig(
        mode: ProcessingMode = ProcessingMode.APP,
        includeRawJson: Boolean = true,
        dateFormat: String = "dd-MMM-yyyy"
    ): IpsProcessingConfig {
        return IpsProcessingConfig(mode, includeRawJson, dateFormat)
    }
    
    /**
     * Create rendering configuration
     */
    fun createRenderingConfig(
        mode: RenderingMode = RenderingMode.STRUCTURED,
        theme: RenderingTheme = RenderingTheme.DEFAULT,
        includeRawJson: Boolean = true,
        enableInteractivity: Boolean = true,
        dateFormat: String = "dd-MMM-yyyy"
    ): RenderingConfig {
        return RenderingConfig(
            mode = mode,
            platform = TargetPlatform.ANDROID,
            theme = theme,
            includeRawJson = includeRawJson,
            enableInteractivity = enableInteractivity,
            dateFormat = dateFormat
        )
    }
    
    /**
     * Get supported component types for this platform
     */
    fun getSupportedComponentTypes(): List<ComponentType> {
        return ComponentType.values().toList()
    }
}