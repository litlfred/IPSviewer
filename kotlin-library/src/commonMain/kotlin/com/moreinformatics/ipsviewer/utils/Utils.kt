package com.moreinformatics.ipsviewer.utils

import com.moreinformatics.ipsviewer.fhir.BundleEntry
import kotlinx.datetime.Instant
import kotlinx.datetime.TimeZone
import kotlinx.datetime.toLocalDateTime

/**
 * Utility functions for IPS processing, ported from TypeScript utils
 */

/**
 * Format date string to human-readable format (dd-MMM-yyyy)
 * Ported from util.ts formatDate function
 */
fun formatDate(dateStr: String): String {
    return try {
        val instant = Instant.parse(dateStr)
        val localDateTime = instant.toLocalDateTime(TimeZone.UTC)
        
        val day = localDateTime.dayOfMonth.toString().padStart(2, '0')
        val month = getMonthAbbreviation(localDateTime.monthNumber)
        val year = localDateTime.year
        
        "$day-$month-$year"
    } catch (e: Exception) {
        dateStr // Return original string if parsing fails
    }
}

/**
 * Get month abbreviation for month number (1-12)
 */
private fun getMonthAbbreviation(monthNumber: Int): String {
    return when (monthNumber) {
        1 -> "Jan"
        2 -> "Feb" 
        3 -> "Mar"
        4 -> "Apr"
        5 -> "May"
        6 -> "Jun"
        7 -> "Jul"
        8 -> "Aug"
        9 -> "Sep"
        10 -> "Oct"
        11 -> "Nov"
        12 -> "Dec"
        else -> "???"
    }
}

/**
 * Find a resource entry by reference
 * Ported from util.ts getEntry function
 */
fun getEntry(entries: List<BundleEntry>, reference: String): BundleEntry? {
    if (entries.isEmpty()) {
        return null
    }
    
    // First try direct fullUrl match
    entries.forEach { entry ->
        if (entry.fullUrl?.contains(reference) == true) {
            return entry
        }
    }
    
    // Try to match based on resource type and UUID
    val splitReference = reference.split('/')
    val referenceId = splitReference.lastOrNull()
    val referenceResourceType = if (splitReference.size >= 2) splitReference[splitReference.size - 2] else null
    
    if (referenceResourceType != null && referenceId != null) {
        entries.forEach { entry ->
            if (entry.resource?.resourceType == referenceResourceType && 
                entry.fullUrl?.contains(referenceId) == true) {
                return entry
            }
        }
    }
    
    println("Missing reference: $reference")
    return null
}

/**
 * Safe string concatenation with separator
 */
fun joinNonEmpty(vararg strings: String?, separator: String = " "): String {
    return strings.filterNotNull().filter { it.isNotBlank() }.joinToString(separator)
}

/**
 * Extract display text from CodeableConcept
 */
fun getDisplayText(codeableConcept: com.moreinformatics.ipsviewer.fhir.CodeableConcept?): String? {
    return codeableConcept?.coding?.firstOrNull()?.display 
        ?: codeableConcept?.text
}

/**
 * Extract code from CodeableConcept  
 */
fun getCode(codeableConcept: com.moreinformatics.ipsviewer.fhir.CodeableConcept?): String? {
    return codeableConcept?.coding?.firstOrNull()?.code
}

/**
 * Extract system from CodeableConcept
 */
fun getSystem(codeableConcept: com.moreinformatics.ipsviewer.fhir.CodeableConcept?): String? {
    return codeableConcept?.coding?.firstOrNull()?.system
}