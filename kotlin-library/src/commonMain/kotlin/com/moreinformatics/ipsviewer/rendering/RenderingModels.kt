package com.moreinformatics.ipsviewer.rendering

import kotlinx.serialization.Serializable

/**
 * Enhanced models for unified rendering across platforms
 * These models describe UI components in a platform-agnostic way
 */

@Serializable
data class ComponentView(
    val type: ComponentType,
    val props: ComponentProps,
    val children: List<ComponentView> = emptyList()
)

@Serializable
enum class ComponentType {
    // Layout components
    CONTAINER, ROW, COLUMN, CARD, ACCORDION, ACCORDION_ITEM,
    
    // Content components  
    TEXT, HEADING, BADGE, BUTTON, ICON, TABLE, LIST,
    
    // Interactive components
    COLLAPSIBLE_SECTION, TOGGLE_BUTTON, VIEW_JSON_BUTTON,
    
    // IPS-specific components
    PATIENT_SUMMARY, ALLERGY_ITEM, CONDITION_ITEM, MEDICATION_ITEM,
    OBSERVATION_ITEM, PROCEDURE_ITEM, IMMUNIZATION_ITEM
}

@Serializable
data class ComponentProps(
    // Common props
    val text: String? = null,
    val color: String? = null,
    val size: String? = null,
    val variant: String? = null,
    val className: String? = null,
    val style: Map<String, String> = emptyMap(),
    
    // Interactive props
    val onClick: String? = null,
    val isCollapsed: Boolean = false,
    val isActive: Boolean = false,
    
    // Content props
    val title: String? = null,
    val subtitle: String? = null,
    val icon: String? = null,
    val data: Map<String, String> = emptyMap(),
    val rawJson: String? = null,
    
    // Table props
    val headers: List<String> = emptyList(),
    val rows: List<List<String>> = emptyList(),
    
    // Custom props for platform-specific features
    val custom: Map<String, String> = emptyMap()
)

/**
 * Enhanced resource display that includes full UI component tree
 */
@Serializable
data class EnhancedResourceDisplay(
    val resourceType: String,
    val id: String? = null,
    val component: ComponentView,
    val rawJson: String? = null
)

/**
 * Enhanced section content with component-based rendering
 */
@Serializable
data class EnhancedSectionContent(
    val title: String,
    val hasData: Boolean,
    val useTextMode: Boolean,
    val textContent: String? = null,
    val components: List<ComponentView> = emptyList(),
    val resources: List<EnhancedResourceDisplay> = emptyList()
)

/**
 * Complete IPS rendering result with component trees
 */
@Serializable
data class IpsRenderingResult(
    val sections: Map<String, EnhancedSectionContent>,
    val globalComponents: List<ComponentView> = emptyList(),
    val errors: List<String> = emptyList(),
    val warnings: List<String> = emptyList()
)

/**
 * Rendering configuration for different platforms and modes
 */
@Serializable
data class RenderingConfig(
    val mode: RenderingMode = RenderingMode.STRUCTURED,
    val platform: TargetPlatform = TargetPlatform.WEB,
    val theme: RenderingTheme = RenderingTheme.DEFAULT,
    val includeRawJson: Boolean = true,
    val enableInteractivity: Boolean = true,
    val maxTableRows: Int = 100,
    val dateFormat: String = "dd-MMM-yyyy"
)

@Serializable
enum class RenderingMode {
    STRUCTURED, // Use component-based rendering
    TEXT,       // Use narrative text only
    HYBRID      // Mix of structured and text
}

@Serializable
enum class TargetPlatform {
    WEB,        // TypeScript/HTML
    ANDROID,    // Jetpack Compose
    IOS         // Future SwiftUI support
}

@Serializable
enum class RenderingTheme {
    DEFAULT,
    COMPACT,
    DETAILED,
    ACCESSIBILITY_FOCUSED
}