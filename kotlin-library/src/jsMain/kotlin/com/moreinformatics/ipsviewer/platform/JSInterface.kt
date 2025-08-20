package com.moreinformatics.ipsviewer.platform

import com.moreinformatics.ipsviewer.core.*
import com.moreinformatics.ipsviewer.fhir.Bundle
import kotlinx.serialization.json.Json
import kotlinx.serialization.decodeFromString

/**
 * JavaScript/TypeScript platform interface for IPS processing
 * Provides JS-friendly methods that can be called from TypeScript
 */
@JsExport
class IpsViewerJS {
    private val processor = IpsProcessor()
    private val json = Json { ignoreUnknownKeys = true }
    
    /**
     * Process IPS bundle from JSON string
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
     * Format date using IPS date formatting
     */
    fun formatDate(dateString: String): String {
        return com.moreinformatics.ipsviewer.utils.formatDate(dateString)
    }
    
    /**
     * Get version information
     */
    fun getVersion(): String = "1.0.0"
}

/**
 * Global function for easy access from JavaScript
 */
@JsExport
@JsName("createIpsViewer")
fun createIpsViewer(): IpsViewerJS = IpsViewerJS()