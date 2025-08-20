package com.moreinformatics.ipsviewer.rendering

import com.moreinformatics.ipsviewer.fhir.*
import com.moreinformatics.ipsviewer.utils.*
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.jsonObject
import kotlinx.serialization.decodeFromString
import kotlinx.serialization.encodeToString

/**
 * Enhanced IPS processor that creates component-based rendering output
 * This replaces the simple data processing with full rendering logic
 */
class EnhancedIpsProcessor(
    private val config: RenderingConfig = RenderingConfig()
) {
    
    private val json = Json { 
        ignoreUnknownKeys = true
        prettyPrint = true
    }
    
    fun processBundle(bundle: Bundle): IpsRenderingResult {
        val sections = mutableMapOf<String, EnhancedSectionContent>()
        val errors = mutableListOf<String>()
        val warnings = mutableListOf<String>()
        
        try {
            // Find compositions
            val compositions = bundle.entry?.filter { it.resource?.resourceType == "Composition" }
            if (compositions.isNullOrEmpty()) {
                errors.add("No Composition resource found in bundle")
                return IpsRenderingResult(emptyMap(), emptyList(), errors, warnings)
            }
            
            // Process patient information first
            val patients = bundle.entry?.filter { it.resource?.resourceType == "Patient" }
            if (!patients.isNullOrEmpty()) {
                sections["Patient"] = processPatientSection(patients)
            }
            
            // Process composition sections
            val composition = compositions.first().resource
            if (composition != null) {
                val compositionData = parseComposition(composition)
                compositionData.section?.forEach { section ->
                    val title = section.title 
                        ?: section.code?.coding?.firstOrNull()?.display 
                        ?: "[Untitled section]"
                    
                    sections[title] = processSection(section, bundle, title)
                }
            }
            
        } catch (e: Exception) {
            errors.add("Error processing bundle: ${e.message}")
        }
        
        return IpsRenderingResult(sections, emptyList(), errors, warnings)
    }
    
    private fun processPatientSection(patientEntries: List<BundleEntry>): EnhancedSectionContent {
        val patientResources = patientEntries.mapNotNull { entry ->
            entry.resource?.let { resource ->
                try {
                    val patient = parsePatient(resource)
                    if (patient != null) {
                        val renderer = PatientRenderer()
                        val component = renderer.render(patient, config)
                        EnhancedResourceDisplay(
                            resourceType = "Patient",
                            id = resource.id,
                            component = component,
                            rawJson = if (config.includeRawJson) json.encodeToString(Resource.serializer(), resource) else null
                        )
                    } else null
                } catch (e: Exception) {
                    null
                }
            }
        }
        
        return EnhancedSectionContent(
            title = "Patient",
            hasData = patientResources.isNotEmpty(),
            useTextMode = false,
            resources = patientResources
        )
    }
    
    private fun processSection(
        section: CompositionSection, 
        bundle: Bundle, 
        title: String
    ): EnhancedSectionContent {
        
        val sectionResources = section.entry?.mapNotNull { reference ->
            reference.reference?.let { ref ->
                getEntry(bundle.entry ?: emptyList(), ref)?.let { entry ->
                    processResourceEntry(entry)
                }
            }
        } ?: emptyList()
        
        val hasStructuredData = sectionResources.isNotEmpty()
        val useTextMode = config.mode == RenderingMode.TEXT || 
                         (!hasStructuredData && section.text?.div != null)
        
        return EnhancedSectionContent(
            title = title,
            hasData = hasStructuredData || section.text?.div != null,
            useTextMode = useTextMode,
            textContent = section.text?.div,
            resources = sectionResources
        )
    }
    
    private fun processResourceEntry(entry: BundleEntry): EnhancedResourceDisplay? {
        val resource = entry.resource ?: return null
        
        val component = when (resource.resourceType) {
            "Patient" -> {
                parsePatient(resource)?.let { patient ->
                    PatientRenderer().render(patient, config)
                }
            }
            "AllergyIntolerance" -> {
                parseAllergyIntolerance(resource)?.let { allergy ->
                    AllergyIntoleranceRenderer().render(allergy, config)
                }
            }
            "Condition" -> {
                parseCondition(resource)?.let { condition ->
                    ConditionRenderer().render(condition, config)
                }
            }
            "MedicationRequest", "MedicationStatement" -> {
                parseMedication(resource)?.let { medication ->
                    MedicationRenderer().render(medication, config)
                }
            }
            else -> {
                // Create a generic component for unsupported types
                createGenericResourceComponent(resource)
            }
        } ?: createGenericResourceComponent(resource)
        
        return EnhancedResourceDisplay(
            resourceType = resource.resourceType,
            id = resource.id,
            component = component,
            rawJson = if (config.includeRawJson) json.encodeToString(Resource.serializer(), resource) else null
        )
    }
    
    private fun createGenericResourceComponent(resource: Resource): ComponentView {
        return ComponentView(
            type = ComponentType.CONTAINER,
            props = ComponentProps(),
            children = listOf(
                ComponentView(
                    type = ComponentType.BADGE,
                    props = ComponentProps(
                        text = resource.resourceType,
                        color = "light"
                    )
                ),
                ComponentView(
                    type = ComponentType.TEXT,
                    props = ComponentProps(
                        text = "Unsupported resource type: ${resource.resourceType}"
                    )
                )
            )
        )
    }
    
    // Resource parsing methods
    private fun parseComposition(resource: Resource): Composition {
        return try {
            // Convert the generic resource to JsonObject and parse as Composition
            val jsonString = json.encodeToString(Resource.serializer(), resource)
            json.decodeFromString<Composition>(jsonString)
        } catch (e: Exception) {
            Composition()
        }
    }
    
    private fun parsePatient(resource: Resource): Patient? {
        return try {
            val jsonString = json.encodeToString(Resource.serializer(), resource)
            json.decodeFromString<Patient>(jsonString)
        } catch (e: Exception) {
            null
        }
    }
    
    private fun parseAllergyIntolerance(resource: Resource): AllergyIntolerance? {
        return try {
            val jsonString = json.encodeToString(Resource.serializer(), resource)
            json.decodeFromString<AllergyIntolerance>(jsonString)
        } catch (e: Exception) {
            null
        }
    }
    
    private fun parseCondition(resource: Resource): Condition? {
        return try {
            val jsonString = json.encodeToString(Resource.serializer(), resource)
            json.decodeFromString<Condition>(jsonString)
        } catch (e: Exception) {
            null
        }
    }
    
    private fun parseMedication(resource: Resource): JsonObject? {
        return try {
            val jsonString = json.encodeToString(Resource.serializer(), resource)
            val jsonElement = json.parseToJsonElement(jsonString)
            jsonElement.jsonObject
        } catch (e: Exception) {
            null
        }
    }
}