package com.moreinformatics.ipsviewer.rendering

import com.moreinformatics.ipsviewer.fhir.*
import com.moreinformatics.ipsviewer.utils.*
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.jsonObject
import kotlinx.serialization.json.jsonPrimitive

/**
 * Renderers for specific FHIR resource types
 * These extract the rendering logic from the original Svelte components
 */

abstract class ResourceRenderer<T> {
    abstract fun render(resource: T, config: RenderingConfig): ComponentView
    
    protected fun createBadge(
        text: String, 
        color: String = "primary", 
        variant: String = "solid"
    ): ComponentView {
        return ComponentView(
            type = ComponentType.BADGE,
            props = ComponentProps(
                text = text,
                color = color,
                variant = variant
            )
        )
    }
    
    protected fun createText(text: String, isBold: Boolean = false): ComponentView {
        return ComponentView(
            type = ComponentType.TEXT,
            props = ComponentProps(
                text = text,
                style = if (isBold) mapOf("font-weight" to "bold") else emptyMap()
            )
        )
    }
    
    protected fun createContainer(children: List<ComponentView>): ComponentView {
        return ComponentView(
            type = ComponentType.CONTAINER,
            props = ComponentProps(),
            children = children
        )
    }
}

/**
 * Patient renderer - extracts logic from Patient.svelte
 */
class PatientRenderer : ResourceRenderer<Patient>() {
    override fun render(resource: Patient, config: RenderingConfig): ComponentView {
        val components = mutableListOf<ComponentView>()
        
        // Name
        val name = formatPatientName(resource)
        if (name.isNotBlank()) {
            components.add(createText(name, isBold = true))
        }
        
        // Birth date
        resource.birthDate?.let { birthDate ->
            components.add(createText("Birth Date: ${formatDate(birthDate)}"))
        }
        
        // Gender
        resource.gender?.let { gender ->
            components.add(createText("Gender: $gender"))
        }
        
        // Contact information (collapsible)
        if (resource.telecom != null || resource.address != null || resource.contact != null) {
            components.add(createContactSection(resource, config))
        }
        
        return createContainer(components)
    }
    
    private fun formatPatientName(patient: Patient): String {
        val name = patient.name?.firstOrNull() ?: return ""
        return listOfNotNull(
            name.prefix?.joinToString(" "),
            name.given?.joinToString(" "),
            name.family
        ).joinToString(" ").trim()
    }
    
    private fun createContactSection(patient: Patient, config: RenderingConfig): ComponentView {
        val contactComponents = mutableListOf<ComponentView>()
        
        // Telecom
        patient.telecom?.let { telecoms ->
            if (telecoms.isNotEmpty()) {
                contactComponents.add(createTelecomTable(telecoms))
            }
        }
        
        // Address
        patient.address?.let { addresses ->
            if (addresses.isNotEmpty()) {
                contactComponents.add(createAddressTable(addresses))
            }
        }
        
        return ComponentView(
            type = ComponentType.COLLAPSIBLE_SECTION,
            props = ComponentProps(
                title = "Contact Information",
                isCollapsed = true
            ),
            children = contactComponents
        )
    }
    
    private fun createTelecomTable(telecoms: List<ContactPoint>): ComponentView {
        val headers = listOf("System", "Use", "Value")
        val rows = telecoms.map { telecom ->
            listOf(
                telecom.system ?: "",
                telecom.use ?: "",
                telecom.value ?: ""
            )
        }
        
        return ComponentView(
            type = ComponentType.TABLE,
            props = ComponentProps(
                title = "Contact Details",
                headers = headers,
                rows = rows
            )
        )
    }
    
    private fun createAddressTable(addresses: List<Address>): ComponentView {
        // This would be implemented similar to telecom table
        // For now, returning a simple text representation
        val addressText = addresses.joinToString("\n") { address ->
            listOfNotNull(
                address.line?.joinToString(", "),
                address.city,
                address.state,
                address.postalCode,
                address.country
            ).joinToString(", ")
        }
        
        return createText("Address: $addressText")
    }
}

/**
 * AllergyIntolerance renderer - extracts logic from AllergyIntolerance.svelte
 */
class AllergyIntoleranceRenderer : ResourceRenderer<AllergyIntolerance>() {
    override fun render(resource: AllergyIntolerance, config: RenderingConfig): ComponentView {
        val components = mutableListOf<ComponentView>()
        
        // Status badges
        if (resource.clinicalStatus != null || resource.verificationStatus != null) {
            val statusText = buildString {
                resource.clinicalStatus?.coding?.firstOrNull()?.code?.let { append(it) }
                if (resource.clinicalStatus != null && resource.verificationStatus != null) {
                    append("/")
                }
                resource.verificationStatus?.coding?.firstOrNull()?.code?.let { append(it) }
            }
            if (statusText.isNotBlank()) {
                components.add(createBadge(statusText, "primary"))
            }
        }
        
        // Criticality badge
        val criticalityColor = when (resource.criticality) {
            "high" -> "danger"
            "low" -> "primary"
            else -> "secondary"
        }
        val criticalityText = buildString {
            resource.type?.let { append("$it - ") }
            append("criticality: ${resource.criticality ?: "unknown"}")
        }
        components.add(createBadge(criticalityText, criticalityColor))
        
        // Code/system badge and display
        resource.code?.let { code ->
            code.coding?.firstOrNull()?.let { coding ->
                if (coding.system != null && coding.code != null) {
                    components.add(createBadge("${coding.system} : ${coding.code}", "primary"))
                }
                
                val displayText = coding.display ?: code.text
                if (displayText != null) {
                    components.add(createText(displayText, isBold = true))
                }
            } ?: code.text?.let { text ->
                components.add(createText(text, isBold = true))
            }
        }
        
        // Note
        resource.note?.firstOrNull()?.text?.let { note ->
            components.add(createText("Note: $note"))
        }
        
        // Reactions
        if (!resource.reaction.isNullOrEmpty()) {
            components.add(createReactionSection(resource.reaction))
        }
        
        return createContainer(components)
    }
    
    private fun createReactionSection(reactions: List<AllergyIntoleranceReaction>): ComponentView {
        val reactionComponents = reactions.map { reaction ->
            val reactionDetails = mutableListOf<ComponentView>()
            
            reaction.manifestation?.forEach { manifestation ->
                manifestation.coding?.firstOrNull()?.display?.let { display ->
                    reactionDetails.add(createText("• $display"))
                }
            }
            
            reaction.severity?.let { severity ->
                reactionDetails.add(createBadge("Severity: $severity", "warning"))
            }
            
            createContainer(reactionDetails)
        }
        
        return ComponentView(
            type = ComponentType.COLLAPSIBLE_SECTION,
            props = ComponentProps(
                title = "Reactions",
                isCollapsed = false
            ),
            children = reactionComponents
        )
    }
}

/**
 * Condition renderer - extracts logic from Condition.svelte
 */
class ConditionRenderer : ResourceRenderer<Condition>() {
    override fun render(resource: Condition, config: RenderingConfig): ComponentView {
        val components = mutableListOf<ComponentView>()
        
        // Clinical status badge
        resource.clinicalStatus?.coding?.firstOrNull()?.code?.let { status ->
            val color = when (status.lowercase()) {
                "active" -> "danger"
                "inactive" -> "secondary"
                "resolved" -> "success"
                else -> "primary"
            }
            components.add(createBadge(status, color))
        }
        
        // Verification status
        resource.verificationStatus?.coding?.firstOrNull()?.code?.let { verification ->
            components.add(createBadge(verification, "info"))
        }
        
        // Condition code and display
        resource.code?.let { code ->
            code.coding?.firstOrNull()?.let { coding ->
                if (coding.system != null && coding.code != null) {
                    components.add(createBadge("${coding.system} : ${coding.code}", "primary"))
                }
                
                val displayText = coding.display ?: code.text
                if (displayText != null) {
                    components.add(createText(displayText, isBold = true))
                }
            } ?: code.text?.let { text ->
                components.add(createText(text, isBold = true))
            }
        }
        
        // Onset information
        resource.onsetDateTime?.let { onset ->
            components.add(createText("Onset: ${formatDate(onset)}"))
        }
        
        // Severity
        resource.severity?.coding?.firstOrNull()?.display?.let { severity ->
            components.add(createBadge("Severity: $severity", "warning"))
        }
        
        return createContainer(components)
    }
}

/**
 * Medication renderer - for MedicationRequest and MedicationStatement
 */
class MedicationRenderer : ResourceRenderer<JsonObject>() {
    override fun render(resource: JsonObject, config: RenderingConfig): ComponentView {
        val components = mutableListOf<ComponentView>()
        
        // Status badge
        resource["status"]?.jsonPrimitive?.content?.let { status ->
            val color = when (status.lowercase()) {
                "active" -> "success"
                "stopped" -> "danger"
                "completed" -> "secondary"
                else -> "primary"
            }
            components.add(createBadge(status, color))
        }
        
        // Medication name
        getMedicationName(resource)?.let { name ->
            components.add(createText(name, isBold = true))
        }
        
        // Dosage information
        resource["dosageInstruction"]?.let { dosage ->
            components.add(createText("See dosage instructions"))
        }
        
        return createContainer(components)
    }
    
    private fun getMedicationName(resource: JsonObject): String? {
        // Try to get medication name from various possible fields
        return resource["medicationCodeableConcept"]?.jsonObject
            ?.get("coding")?.let { coding ->
                // Parse coding array to get display name
                "Medication" // Placeholder
            } ?: resource["medicationReference"]?.jsonObject
            ?.get("display")?.jsonPrimitive?.content
    }
}

/**
 * Factory for creating appropriate renderers
 */
object ResourceRendererFactory {
    fun createRenderer(resourceType: String): ResourceRenderer<*>? {
        return when (resourceType) {
            "Patient" -> PatientRenderer()
            "AllergyIntolerance" -> AllergyIntoleranceRenderer()
            "Condition" -> ConditionRenderer()
            "MedicationRequest", "MedicationStatement" -> MedicationRenderer()
            else -> null
        }
    }
}