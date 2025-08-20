package com.moreinformatics.ipsviewer.core

import com.moreinformatics.ipsviewer.fhir.*
import com.moreinformatics.ipsviewer.utils.*
import kotlinx.serialization.json.Json
import kotlinx.serialization.encodeToString

/**
 * Main IPS processor that converts FHIR Bundle to structured IPS content
 * Ported from IPSContent.svelte getIpsContent function
 */
class IpsProcessor(
    private val config: IpsProcessingConfig = IpsProcessingConfig()
) {
    
    private val json = Json { 
        ignoreUnknownKeys = true
        prettyPrint = true
    }
    
    /**
     * Process a FHIR Bundle and extract IPS content
     */
    fun processBundle(bundle: Bundle): IpsProcessingResult {
        val content = mutableMapOf<String, IpsContent>()
        val errors = mutableListOf<String>()
        val warnings = mutableListOf<String>()
        
        try {
            // Find compositions
            val compositions = bundle.entry?.filter { it.resource?.resourceType == "Composition" }
            if (compositions.isNullOrEmpty()) {
                errors.add("No Composition resource found in bundle")
                return IpsProcessingResult(emptyMap(), errors, warnings)
            }
            
            // Process patient information
            val patients = bundle.entry?.filter { it.resource?.resourceType == "Patient" }
            if (!patients.isNullOrEmpty()) {
                content["Patient"] = IpsContent(
                    section = CompositionSection(),
                    entries = patients.mapNotNull { processPatientResource(it) },
                    useText = false
                )
            }
            
            // Process composition sections
            val composition = compositions.first().resource as? Composition
            composition?.section?.forEach { section ->
                val title = section.title 
                    ?: section.code?.coding?.firstOrNull()?.display 
                    ?: "[Untitled section]"
                
                val sectionEntries = section.entry?.mapNotNull { reference ->
                    reference.reference?.let { ref ->
                        getEntry(bundle.entry ?: emptyList(), ref)?.let { entry ->
                            processResourceEntry(entry)
                        }
                    }
                } ?: emptyList()
                
                content[title] = IpsContent(
                    section = section,
                    entries = sectionEntries,
                    useText = config.mode == ProcessingMode.TEXT || sectionEntries.isEmpty()
                )
            }
            
        } catch (e: Exception) {
            errors.add("Error processing bundle: ${e.message}")
        }
        
        return IpsProcessingResult(content, errors, warnings)
    }
    
    /**
     * Process a Patient resource entry
     */
    private fun processPatientResource(entry: BundleEntry): ProcessedResource? {
        val resource = entry.resource ?: return null
        if (resource.resourceType != "Patient") return null
        
        // Parse patient data from the resource
        val patient = parsePatientFromResource(resource)
        
        val displayData = ResourceDisplayData(
            title = formatPatientName(patient),
            details = buildPatientDetails(patient),
            rawJson = if (config.includeRawJson) json.encodeToString(resource) else null
        )
        
        return ProcessedResource(
            resourceType = "Patient",
            id = resource.id,
            displayData = displayData
        )
    }
    
    /**
     * Process a general resource entry
     */
    private fun processResourceEntry(entry: BundleEntry): ProcessedResource? {
        val resource = entry.resource ?: return null
        
        val displayData = when (resource.resourceType) {
            "AllergyIntolerance" -> processAllergyIntolerance(resource)
            "Condition" -> processCondition(resource)
            "MedicationRequest" -> processMedicationRequest(resource)
            "MedicationStatement" -> processMedicationStatement(resource)
            "Observation" -> processObservation(resource)
            "Procedure" -> processProcedure(resource)
            "Immunization" -> processImmunization(resource)
            else -> processGenericResource(resource)
        }
        
        return ProcessedResource(
            resourceType = resource.resourceType,
            id = resource.id,
            displayData = displayData
        )
    }
    
    /**
     * Format patient name from Patient resource
     */
    private fun formatPatientName(patient: Patient?): String {
        val name = patient?.name?.firstOrNull()
        if (name == null) return "Unknown Patient"
        
        return joinNonEmpty(
            name.prefix?.joinToString(" "),
            name.given?.joinToString(" "),
            name.family
        )
    }
    
    /**
     * Build patient details map
     */
    private fun buildPatientDetails(patient: Patient?): Map<String, String> {
        val details = mutableMapOf<String, String>()
        
        patient?.birthDate?.let { birthDate ->
            details["Birth Date"] = formatDate(birthDate)
        }
        
        patient?.gender?.let { gender ->
            details["Gender"] = gender
        }
        
        return details
    }
    
    /**
     * Process AllergyIntolerance resource
     */
    private fun processAllergyIntolerance(resource: Resource): ResourceDisplayData {
        // This would parse the actual AllergyIntolerance from the resource
        // For now, returning basic structure
        val badges = mutableListOf<Badge>()
        
        // Add status badges, criticality, etc.
        badges.add(Badge("Allergy", BadgeColor.WARNING))
        
        return ResourceDisplayData(
            title = "Allergy/Intolerance",
            badges = badges,
            rawJson = if (config.includeRawJson) json.encodeToString(resource) else null
        )
    }
    
    /**
     * Process Condition resource
     */
    private fun processCondition(resource: Resource): ResourceDisplayData {
        val badges = mutableListOf<Badge>()
        badges.add(Badge("Condition", BadgeColor.INFO))
        
        return ResourceDisplayData(
            title = "Medical Condition",
            badges = badges,
            rawJson = if (config.includeRawJson) json.encodeToString(resource) else null
        )
    }
    
    /**
     * Process MedicationRequest resource
     */
    private fun processMedicationRequest(resource: Resource): ResourceDisplayData {
        val badges = mutableListOf<Badge>()
        badges.add(Badge("Medication", BadgeColor.PRIMARY))
        
        return ResourceDisplayData(
            title = "Medication Request",
            badges = badges,
            rawJson = if (config.includeRawJson) json.encodeToString(resource) else null
        )
    }
    
    /**
     * Process MedicationStatement resource
     */
    private fun processMedicationStatement(resource: Resource): ResourceDisplayData {
        val badges = mutableListOf<Badge>()
        badges.add(Badge("Medication", BadgeColor.PRIMARY))
        
        return ResourceDisplayData(
            title = "Medication Statement",
            badges = badges,
            rawJson = if (config.includeRawJson) json.encodeToString(resource) else null
        )
    }
    
    /**
     * Process Observation resource
     */
    private fun processObservation(resource: Resource): ResourceDisplayData {
        val badges = mutableListOf<Badge>()
        badges.add(Badge("Observation", BadgeColor.SUCCESS))
        
        return ResourceDisplayData(
            title = "Observation",
            badges = badges,
            rawJson = if (config.includeRawJson) json.encodeToString(resource) else null
        )
    }
    
    /**
     * Process Procedure resource
     */
    private fun processProcedure(resource: Resource): ResourceDisplayData {
        val badges = mutableListOf<Badge>()
        badges.add(Badge("Procedure", BadgeColor.SECONDARY))
        
        return ResourceDisplayData(
            title = "Procedure",
            badges = badges,
            rawJson = if (config.includeRawJson) json.encodeToString(resource) else null
        )
    }
    
    /**
     * Process Immunization resource
     */
    private fun processImmunization(resource: Resource): ResourceDisplayData {
        val badges = mutableListOf<Badge>()
        badges.add(Badge("Immunization", BadgeColor.SUCCESS))
        
        return ResourceDisplayData(
            title = "Immunization",
            badges = badges,
            rawJson = if (config.includeRawJson) json.encodeToString(resource) else null
        )
    }
    
    /**
     * Process generic/unknown resource types
     */
    private fun processGenericResource(resource: Resource): ResourceDisplayData {
        val badges = mutableListOf<Badge>()
        badges.add(Badge(resource.resourceType, BadgeColor.LIGHT))
        
        return ResourceDisplayData(
            title = resource.resourceType,
            badges = badges,
            rawJson = if (config.includeRawJson) json.encodeToString(resource) else null
        )
    }
    
    /**
     * Parse Patient data from generic Resource
     * This is a simplified parser - in a full implementation, 
     * we'd need proper FHIR resource deserialization
     */
    private fun parsePatientFromResource(resource: Resource): Patient? {
        return try {
            // This would involve proper JSON parsing of the resource content
            // For now, returning null as we need proper FHIR parsing
            null
        } catch (e: Exception) {
            null
        }
    }
}