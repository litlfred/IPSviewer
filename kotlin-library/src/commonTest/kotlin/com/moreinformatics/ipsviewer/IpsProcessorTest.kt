package com.moreinformatics.ipsviewer

import com.moreinformatics.ipsviewer.core.*
import com.moreinformatics.ipsviewer.fhir.*
import com.moreinformatics.ipsviewer.utils.*
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNotNull
import kotlin.test.assertTrue

class IpsProcessorTest {
    
    @Test
    fun testEmptyBundleProcessing() {
        val processor = IpsProcessor()
        val emptyBundle = Bundle(entry = emptyList())
        
        val result = processor.processBundle(emptyBundle)
        
        assertTrue(result.errors.isNotEmpty())
        assertTrue(result.sections.isEmpty())
    }
    
    @Test
    fun testBundleWithComposition() {
        val processor = IpsProcessor()
        val bundle = Bundle(
            entry = listOf(
                BundleEntry(
                    fullUrl = "urn:uuid:composition-1",
                    resource = Resource(
                        resourceType = "Composition",
                        id = "composition-1"
                    )
                )
            )
        )
        
        val result = processor.processBundle(bundle)
        
        assertTrue(result.errors.isEmpty())
        assertNotNull(result.sections)
    }
    
    @Test
    fun testBundleWithPatient() {
        val processor = IpsProcessor()
        val bundle = Bundle(
            entry = listOf(
                BundleEntry(
                    fullUrl = "urn:uuid:composition-1",
                    resource = Resource(
                        resourceType = "Composition",
                        id = "composition-1"
                    )
                ),
                BundleEntry(
                    fullUrl = "urn:uuid:patient-1",
                    resource = Resource(
                        resourceType = "Patient",
                        id = "patient-1"
                    )
                )
            )
        )
        
        val result = processor.processBundle(bundle)
        
        assertTrue(result.errors.isEmpty())
        assertTrue(result.sections.containsKey("Patient"))
        assertEquals(1, result.sections["Patient"]?.entries?.size)
    }
}

class UtilsTest {
    
    @Test
    fun testFormatDate() {
        val dateStr = "2023-12-25T00:00:00Z"
        val formatted = formatDate(dateStr)
        assertEquals("25-Dec-2023", formatted)
    }
    
    @Test
    fun testFormatDateInvalid() {
        val invalidDate = "invalid-date"
        val formatted = formatDate(invalidDate)
        assertEquals("invalid-date", formatted) // Should return original string
    }
    
    @Test
    fun testGetEntry() {
        val entries = listOf(
            BundleEntry(
                fullUrl = "urn:uuid:patient-1",
                resource = Resource(resourceType = "Patient", id = "patient-1")
            ),
            BundleEntry(
                fullUrl = "urn:uuid:condition-1", 
                resource = Resource(resourceType = "Condition", id = "condition-1")
            )
        )
        
        val foundEntry = getEntry(entries, "patient-1")
        assertNotNull(foundEntry)
        assertEquals("Patient", foundEntry.resource?.resourceType)
    }
    
    @Test
    fun testJoinNonEmpty() {
        val result = joinNonEmpty("John", null, "Doe", "", "MD")
        assertEquals("John Doe MD", result)
    }
    
    @Test
    fun testJoinNonEmptyWithSeparator() {
        val result = joinNonEmpty("Apple", "Banana", "Cherry", separator = ", ")
        assertEquals("Apple, Banana, Cherry", result)
    }
}