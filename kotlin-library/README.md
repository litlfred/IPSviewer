# IPS Viewer Kotlin Library

A Kotlin multiplatform library for processing and viewing FHIR IPS (International Patient Summary) documents. This library provides the core functionality from the IPSContent.svelte component in a platform-agnostic way that can be used in both TypeScript applications and Android apps.

## Features

- Parse FHIR Bundle resources containing IPS data
- Extract and organize patient information, allergies, medications, conditions, and other clinical data
- Support for multiple FHIR resource types (Patient, AllergyIntolerance, Condition, MedicationRequest, etc.)
- Platform-specific interfaces for TypeScript/JavaScript and Android/JVM
- Configurable processing modes (app mode vs text mode)
- Date formatting utilities
- Comprehensive error handling

## Supported Platforms

- **JavaScript/TypeScript**: For web applications and Node.js
- **JVM/Android**: For Android apps and server-side applications

## Installation

### For TypeScript/JavaScript Projects

Add the JavaScript output to your project and import:

```typescript
import { createIpsViewer } from './path-to-kotlin-js-output';

const ipsViewer = createIpsViewer();
```

### For Android Projects

Add the JVM JAR to your Android project dependencies:

```kotlin
import com.moreinformatics.ipsviewer.platform.IpsViewerAndroid

val ipsViewer = IpsViewerAndroid()
```

## Usage

### TypeScript/JavaScript

```typescript
import { createIpsViewer } from './ips-viewer-kotlin';

const ipsViewer = createIpsViewer();

// Process an IPS bundle from JSON
const bundleJson = '{"resourceType": "Bundle", ...}';
const resultJson = ipsViewer.processIpsBundle(bundleJson, "app");
const result = JSON.parse(resultJson);

console.log(result.sections); // Processed IPS sections
console.log(result.errors);   // Any processing errors
```

### Android/Kotlin

```kotlin
import com.moreinformatics.ipsviewer.platform.IpsViewerAndroid
import com.moreinformatics.ipsviewer.core.ProcessingMode

val ipsViewer = IpsViewerAndroid()

// Process an IPS bundle from JSON string
val bundleJson = """{"resourceType": "Bundle", ...}"""
val config = ipsViewer.createConfig(
    mode = ProcessingMode.APP,
    includeRawJson = true
)

val result = ipsViewer.processIpsBundle(bundleJson, config)

result.sections.forEach { (sectionName, content) ->
    println("Section: $sectionName")
    content.entries.forEach { entry ->
        println("  Resource: ${entry.resourceType} - ${entry.displayData.title}")
    }
}
```

## API Reference

### Core Models

#### `IpsProcessingResult`
```kotlin
data class IpsProcessingResult(
    val sections: Map<String, IpsContent>,
    val errors: List<String> = emptyList(),
    val warnings: List<String> = emptyList()
)
```

#### `IpsContent`
```kotlin
data class IpsContent(
    val section: CompositionSection,
    val entries: List<ProcessedResource>,
    val useText: Boolean
)
```

#### `ProcessedResource`
```kotlin
data class ProcessedResource(
    val resourceType: String,
    val id: String? = null,
    val displayData: ResourceDisplayData
)
```

#### `ResourceDisplayData`
```kotlin
data class ResourceDisplayData(
    val title: String? = null,
    val subtitle: String? = null,
    val badges: List<Badge> = emptyList(),
    val details: Map<String, String> = emptyMap(),
    val additionalInfo: List<String> = emptyList(),
    val rawJson: String? = null
)
```

### Platform Interfaces

#### JavaScript/TypeScript Interface

```typescript
interface IpsViewerJS {
    processIpsBundle(bundleJson: string, mode?: string): string;
    formatDate(dateString: string): string;
    getVersion(): string;
}
```

#### Android/JVM Interface

```kotlin
class IpsViewerAndroid {
    fun processIpsBundle(bundleJson: String, config: IpsProcessingConfig = IpsProcessingConfig()): IpsProcessingResult
    fun processIpsBundle(bundle: Bundle, config: IpsProcessingConfig = IpsProcessingConfig()): IpsProcessingResult
    fun formatDate(dateString: String): String
    fun getVersion(): String
    fun createConfig(mode: ProcessingMode = ProcessingMode.APP, includeRawJson: Boolean = true, dateFormat: String = "dd-MMM-yyyy"): IpsProcessingConfig
}
```

## Processing Modes

- **APP Mode**: Processes resources into structured data for application display
- **TEXT Mode**: Uses narrative text content from FHIR resources when available

## Supported FHIR Resource Types

- Patient
- Composition
- AllergyIntolerance
- Condition
- MedicationRequest
- MedicationStatement
- Observation
- Procedure
- Immunization
- And more...

## Building from Source

### Prerequisites

- JDK 11 or higher
- Gradle 8.4 or higher

### Build Commands

```bash
# Build all targets
./gradlew build

# Build JavaScript target only
./gradlew jsMainClasses

# Build JVM target only  
./gradlew jvmMainClasses

# Run tests
./gradlew allTests

# Publish to local repository
./gradlew publishToMavenLocal
```

## Integration with Existing TypeScript Application

This library is designed to work alongside the existing IPSviewer TypeScript/Svelte application. You can:

1. Use the Kotlin library for core IPS processing logic
2. Keep the existing Svelte components for UI rendering
3. Replace the TypeScript processing functions with calls to the Kotlin library

Example integration:

```typescript
// Replace the existing getIpsContent function in IPSContent.svelte
import { createIpsViewer } from './kotlin-library-output';

const ipsViewer = createIpsViewer();

function getIpsContent(bundle: Bundle): Record<string, IpsContent> {
    const bundleJson = JSON.stringify(bundle);
    const resultJson = ipsViewer.processIpsBundle(bundleJson, mode);
    const result = JSON.parse(resultJson);
    return result.sections;
}
```

## License

Apache License 2.0 - see the parent project's LICENSE file for details.