package com.moreinformatics.ipsviewer.core

import com.moreinformatics.ipsviewer.fhir.*
import kotlinx.serialization.Serializable

/**
 * Core models representing processed IPS content
 */

@Serializable
data class IpsContent(
    val section: CompositionSection,
    val entries: List<ProcessedResource>,
    val useText: Boolean
)

@Serializable
data class ProcessedResource(
    val resourceType: String,
    val id: String? = null,
    val displayData: ResourceDisplayData
)

@Serializable
data class ResourceDisplayData(
    val title: String? = null,
    val subtitle: String? = null,
    val badges: List<Badge> = emptyList(),
    val details: Map<String, String> = emptyMap(),
    val additionalInfo: List<String> = emptyList(),
    val rawJson: String? = null
)

@Serializable
data class Badge(
    val text: String,
    val color: BadgeColor = BadgeColor.PRIMARY,
    val variant: BadgeVariant = BadgeVariant.SOLID
)

@Serializable
enum class BadgeColor {
    PRIMARY, SECONDARY, SUCCESS, DANGER, WARNING, INFO, LIGHT, DARK
}

@Serializable
enum class BadgeVariant {
    SOLID, OUTLINE
}

/**
 * Result of IPS processing containing organized content
 */
@Serializable
data class IpsProcessingResult(
    val sections: Map<String, IpsContent>,
    val errors: List<String> = emptyList(),
    val warnings: List<String> = emptyList()
)

/**
 * Configuration for IPS processing
 */
@Serializable
data class IpsProcessingConfig(
    val mode: ProcessingMode = ProcessingMode.APP,
    val includeRawJson: Boolean = true,
    val dateFormat: String = "dd-MMM-yyyy"
)

@Serializable
enum class ProcessingMode {
    APP, TEXT
}