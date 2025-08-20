package com.moreinformatics.ipsviewer.platform

import com.moreinformatics.ipsviewer.core.*
import com.moreinformatics.ipsviewer.fhir.Bundle
import kotlinx.serialization.json.Json
import kotlinx.serialization.decodeFromString

/**
 * JVM/Android platform interface for IPS processing
 * Provides Android-friendly API for integration with Android apps
 */
class IpsViewerAndroid {
    private val processor = IpsProcessor()
    private val json = Json { ignoreUnknownKeys = true }
    
    /**
     * Process IPS bundle from JSON string
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
     * Process IPS bundle from Bundle object
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
     * Format date using IPS date formatting
     */
    fun formatDate(dateString: String): String {
        return com.moreinformatics.ipsviewer.utils.formatDate(dateString)
    }
    
    /**
     * Get library version
     */
    fun getVersion(): String = "1.0.0"
    
    /**
     * Create processing configuration
     */
    fun createConfig(
        mode: ProcessingMode = ProcessingMode.APP,
        includeRawJson: Boolean = true,
        dateFormat: String = "dd-MMM-yyyy"
    ): IpsProcessingConfig {
        return IpsProcessingConfig(mode, includeRawJson, dateFormat)
    }
}