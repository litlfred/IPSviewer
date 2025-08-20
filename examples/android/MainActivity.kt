/**
 * Android Example: Using the IPS Viewer Kotlin Library
 * 
 * This example shows how to integrate the IPS Viewer library into an Android application.
 * 
 * Add to your app's build.gradle:
 * 
 * dependencies {
 *     implementation project(':kotlin-library') // If using as module
 *     // OR
 *     implementation 'com.moreinformatics.ipsviewer:ips-viewer-kotlin:1.0.0' // If using published version
 * }
 */

package com.example.ipsviewerapp

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import com.moreinformatics.ipsviewer.platform.IpsViewerAndroid
import com.moreinformatics.ipsviewer.core.*

class MainActivity : ComponentActivity() {
    private val ipsViewer = IpsViewerAndroid()
    
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        
        setContent {
            IpsViewerTheme {
                IpsViewerScreen(ipsViewer)
            }
        }
    }
}

@Composable
fun IpsViewerScreen(ipsViewer: IpsViewerAndroid) {
    var ipsResult by remember { mutableStateOf<IpsProcessingResult?>(null) }
    var isLoading by remember { mutableStateOf(false) }
    var errorMessage by remember { mutableStateOf<String?>(null) }
    
    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp)
    ) {
        Text(
            text = "IPS Viewer Android Example",
            style = MaterialTheme.typography.headlineMedium,
            modifier = Modifier.padding(bottom = 16.dp)
        )
        
        // Load sample IPS button
        Button(
            onClick = {
                loadSampleIps(ipsViewer) { result, error ->
                    ipsResult = result
                    errorMessage = error
                    isLoading = false
                }
                isLoading = true
            },
            modifier = Modifier.fillMaxWidth()
        ) {
            if (isLoading) {
                CircularProgressIndicator(
                    modifier = Modifier.size(20.dp),
                    color = Color.White
                )
            } else {
                Text("Load Sample IPS")
            }
        }
        
        Spacer(modifier = Modifier.height(16.dp))
        
        // Display results
        when {
            errorMessage != null -> {
                Card(
                    colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.errorContainer),
                    modifier = Modifier.fillMaxWidth()
                ) {
                    Text(
                        text = "Error: $errorMessage",
                        modifier = Modifier.padding(16.dp),
                        color = MaterialTheme.colorScheme.onErrorContainer
                    )
                }
            }
            
            ipsResult != null -> {
                IpsContentDisplay(ipsResult!!)
            }
        }
    }
}

@Composable
fun IpsContentDisplay(result: IpsProcessingResult) {
    LazyColumn {
        // Show errors if any
        if (result.errors.isNotEmpty()) {
            item {
                Card(
                    colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.errorContainer),
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(bottom = 8.dp)
                ) {
                    Column(modifier = Modifier.padding(16.dp)) {
                        Text(
                            text = "Errors:",
                            fontWeight = FontWeight.Bold,
                            color = MaterialTheme.colorScheme.onErrorContainer
                        )
                        result.errors.forEach { error ->
                            Text(
                                text = "• $error",
                                color = MaterialTheme.colorScheme.onErrorContainer
                            )
                        }
                    }
                }
            }
        }
        
        // Show sections
        items(result.sections.toList()) { (sectionName, content) ->
            IpsSectionCard(sectionName, content)
        }
    }
}

@Composable
fun IpsSectionCard(sectionName: String, content: IpsContent) {
    Card(
        modifier = Modifier
            .fillMaxWidth()
            .padding(bottom = 8.dp)
    ) {
        Column(modifier = Modifier.padding(16.dp)) {
            Text(
                text = sectionName,
                style = MaterialTheme.typography.titleLarge,
                fontWeight = FontWeight.Bold,
                modifier = Modifier.padding(bottom = 8.dp)
            )
            
            if (content.useText && content.section.text?.div != null) {
                // Display narrative text (would need HTML parsing for full support)
                Text(
                    text = content.section.text.div,
                    style = MaterialTheme.typography.bodyMedium
                )
            } else {
                // Display structured entries
                content.entries.forEach { entry ->
                    ResourceEntryCard(entry)
                }
            }
        }
    }
}

@Composable
fun ResourceEntryCard(entry: ProcessedResource) {
    Card(
        modifier = Modifier
            .fillMaxWidth()
            .padding(vertical = 4.dp),
        colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surfaceVariant)
    ) {
        Column(modifier = Modifier.padding(12.dp)) {
            // Resource type and title
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Text(
                    text = entry.displayData.title ?: entry.resourceType,
                    style = MaterialTheme.typography.titleMedium,
                    fontWeight = FontWeight.Medium
                )
                
                Text(
                    text = entry.resourceType,
                    style = MaterialTheme.typography.labelSmall,
                    color = MaterialTheme.colorScheme.primary
                )
            }
            
            // Subtitle
            entry.displayData.subtitle?.let { subtitle ->
                Text(
                    text = subtitle,
                    style = MaterialTheme.typography.bodySmall,
                    modifier = Modifier.padding(top = 4.dp)
                )
            }
            
            // Badges
            if (entry.displayData.badges.isNotEmpty()) {
                Row(
                    modifier = Modifier.padding(top = 8.dp),
                    horizontalArrangement = Arrangement.spacedBy(4.dp)
                ) {
                    entry.displayData.badges.forEach { badge ->
                        AssistChip(
                            onClick = { },
                            label = { Text(badge.text) }
                        )
                    }
                }
            }
            
            // Details
            if (entry.displayData.details.isNotEmpty()) {
                Column(modifier = Modifier.padding(top = 8.dp)) {
                    entry.displayData.details.forEach { (key, value) ->
                        Row {
                            Text(
                                text = "$key: ",
                                fontWeight = FontWeight.Medium,
                                style = MaterialTheme.typography.bodySmall
                            )
                            Text(
                                text = value,
                                style = MaterialTheme.typography.bodySmall
                            )
                        }
                    }
                }
            }
        }
    }
}

// Sample function to load and process IPS data
private fun loadSampleIps(
    ipsViewer: IpsViewerAndroid,
    callback: (IpsProcessingResult?, String?) -> Unit
) {
    // In a real app, you would load this from a file, network, or user input
    val sampleBundleJson = """
    {
        "resourceType": "Bundle",
        "id": "sample-ips",
        "entry": [
            {
                "fullUrl": "urn:uuid:composition-1",
                "resource": {
                    "resourceType": "Composition",
                    "id": "composition-1",
                    "section": [
                        {
                            "title": "Allergies and Intolerances",
                            "code": {
                                "coding": [
                                    {
                                        "system": "http://loinc.org",
                                        "code": "48765-2",
                                        "display": "Allergies and adverse reactions Document"
                                    }
                                ]
                            },
                            "text": {
                                "status": "generated",
                                "div": "<div>No known allergies</div>"
                            }
                        }
                    ]
                }
            },
            {
                "fullUrl": "urn:uuid:patient-1",
                "resource": {
                    "resourceType": "Patient",
                    "id": "patient-1",
                    "name": [
                        {
                            "given": ["John"],
                            "family": "Doe"
                        }
                    ],
                    "birthDate": "1980-01-01",
                    "gender": "male"
                }
            }
        ]
    }
    """.trimIndent()
    
    try {
        val config = ipsViewer.createConfig(
            mode = ProcessingMode.APP,
            includeRawJson = false
        )
        val result = ipsViewer.processIpsBundle(sampleBundleJson, config)
        callback(result, null)
    } catch (e: Exception) {
        callback(null, e.message)
    }
}

@Composable
fun IpsViewerTheme(content: @Composable () -> Unit) {
    MaterialTheme {
        Surface(
            modifier = Modifier.fillMaxSize(),
            color = MaterialTheme.colorScheme.background
        ) {
            content()
        }
    }
}