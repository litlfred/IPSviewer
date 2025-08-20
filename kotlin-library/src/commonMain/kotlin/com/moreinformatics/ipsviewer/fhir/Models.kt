package com.moreinformatics.ipsviewer.fhir

import kotlinx.serialization.Serializable
import kotlinx.serialization.json.JsonElement

/**
 * Core FHIR data models for IPS processing
 * These are simplified models focusing on the fields used by the IPS viewer
 */

@Serializable
data class Bundle(
    val resourceType: String = "Bundle",
    val id: String? = null,
    val entry: List<BundleEntry>? = null
)

@Serializable
data class BundleEntry(
    val fullUrl: String? = null,
    val resource: Resource? = null
)

@Serializable
data class Resource(
    val resourceType: String,
    val id: String? = null,
    // Using JsonElement to handle the dynamic nature of FHIR resources
    val content: JsonElement? = null
)

@Serializable
data class Composition(
    val resourceType: String = "Composition",
    val id: String? = null,
    val subject: Reference? = null,
    val custodian: Reference? = null,
    val section: List<CompositionSection>? = null
)

@Serializable
data class CompositionSection(
    val title: String? = null,
    val code: CodeableConcept? = null,
    val text: Narrative? = null,
    val entry: List<Reference>? = null
)

@Serializable
data class Reference(
    val reference: String? = null,
    val display: String? = null
)

@Serializable
data class CodeableConcept(
    val coding: List<Coding>? = null,
    val text: String? = null
)

@Serializable
data class Coding(
    val system: String? = null,
    val code: String? = null,
    val display: String? = null
)

@Serializable
data class Narrative(
    val status: String? = null,
    val div: String? = null
)

@Serializable
data class Patient(
    val resourceType: String = "Patient",
    val id: String? = null,
    val name: List<HumanName>? = null,
    val birthDate: String? = null,
    val gender: String? = null,
    val telecom: List<ContactPoint>? = null,
    val address: List<Address>? = null,
    val contact: List<PatientContact>? = null
)

@Serializable
data class HumanName(
    val prefix: List<String>? = null,
    val given: List<String>? = null,
    val family: String? = null
)

@Serializable
data class ContactPoint(
    val system: String? = null,
    val use: String? = null,
    val value: String? = null
)

@Serializable
data class Address(
    val use: String? = null,
    val line: List<String>? = null,
    val city: String? = null,
    val state: String? = null,
    val postalCode: String? = null,
    val country: String? = null
)

@Serializable
data class PatientContact(
    val relationship: List<CodeableConcept>? = null,
    val name: HumanName? = null,
    val telecom: List<ContactPoint>? = null,
    val address: Address? = null
)

@Serializable
data class AllergyIntolerance(
    val resourceType: String = "AllergyIntolerance",
    val id: String? = null,
    val clinicalStatus: CodeableConcept? = null,
    val verificationStatus: CodeableConcept? = null,
    val type: String? = null,
    val criticality: String? = null,
    val code: CodeableConcept? = null,
    val onsetDateTime: String? = null
)

@Serializable
data class Condition(
    val resourceType: String = "Condition",
    val id: String? = null,
    val clinicalStatus: CodeableConcept? = null,
    val verificationStatus: CodeableConcept? = null,
    val code: CodeableConcept? = null,
    val onsetDateTime: String? = null
)

@Serializable
data class MedicationRequest(
    val resourceType: String = "MedicationRequest",
    val id: String? = null,
    val status: String? = null,
    val intent: String? = null,
    val medicationCodeableConcept: CodeableConcept? = null,
    val medicationReference: Reference? = null,
    val authoredOn: String? = null,
    val dosageInstruction: List<Dosage>? = null,
    val dispenseRequest: DispenseRequest? = null,
    val contained: List<JsonElement>? = null
)

@Serializable
data class Dosage(
    val text: String? = null,
    val timing: JsonElement? = null
)

@Serializable
data class DispenseRequest(
    val validityPeriod: Period? = null
)

@Serializable
data class Period(
    val start: String? = null,
    val end: String? = null
)

@Serializable
data class Medication(
    val resourceType: String = "Medication",
    val id: String? = null,
    val code: CodeableConcept? = null
)