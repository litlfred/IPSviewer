# IPS Viewer Kotlin Library - Quick Start Guide

This document provides quick examples of how to use the IPS Viewer Kotlin Library in both TypeScript and Android applications.

## Prerequisites

### For TypeScript/JavaScript Projects
1. Build the JavaScript target:
   ```bash
   cd kotlin-library
   ./gradlew jsJar
   ```
2. The output will be in `build/libs/ips-viewer-kotlin-js-1.0.0.klib`

### For Android Projects  
1. Build the JVM target:
   ```bash
   cd kotlin-library
   ./gradlew jvmJar
   ```
2. The output will be in `build/libs/ips-viewer-kotlin-jvm-1.0.0.jar`

## Quick Examples

### TypeScript Usage

```typescript
// Import the Kotlin JS library (exact path depends on your build setup)
import { createIpsViewer } from './path-to-kotlin-js-output';

const ipsViewer = createIpsViewer();

// Sample FHIR Bundle JSON
const bundleJson = `{
  "resourceType": "Bundle",
  "entry": [
    {
      "fullUrl": "urn:uuid:composition-1",
      "resource": {
        "resourceType": "Composition",
        "section": [
          {
            "title": "Allergies",
            "text": {"div": "<div>No known allergies</div>"}
          }
        ]
      }
    },
    {
      "fullUrl": "urn:uuid:patient-1", 
      "resource": {
        "resourceType": "Patient",
        "name": [{"given": ["John"], "family": "Doe"}],
        "birthDate": "1980-01-01"
      }
    }
  ]
}`;

// Process the bundle
const resultJson = ipsViewer.processIpsBundle(bundleJson, "app");
const result = JSON.parse(resultJson);

// Use the processed sections
console.log("IPS Sections:", result.sections);
console.log("Processing errors:", result.errors);
```

### Android/Kotlin Usage

```kotlin
import com.moreinformatics.ipsviewer.platform.IpsViewerAndroid
import com.moreinformatics.ipsviewer.core.ProcessingMode

// Create the IPS viewer
val ipsViewer = IpsViewerAndroid()

// Sample FHIR Bundle JSON (same as above)
val bundleJson = """
{
  "resourceType": "Bundle",
  "entry": [
    {
      "fullUrl": "urn:uuid:composition-1",
      "resource": {
        "resourceType": "Composition",
        "section": [
          {
            "title": "Allergies",
            "text": {"div": "<div>No known allergies</div>"}
          }
        ]
      }
    },
    {
      "fullUrl": "urn:uuid:patient-1", 
      "resource": {
        "resourceType": "Patient",
        "name": [{"given": ["John"], "family": "Doe"}],
        "birthDate": "1980-01-01"
      }
    }
  ]
}
""".trimIndent()

// Configure processing
val config = ipsViewer.createConfig(
    mode = ProcessingMode.APP,
    includeRawJson = false
)

// Process the bundle
val result = ipsViewer.processIpsBundle(bundleJson, config)

// Use the processed sections
result.sections.forEach { (sectionName, content) ->
    println("Section: $sectionName")
    content.entries.forEach { entry ->
        println("  - ${entry.resourceType}: ${entry.displayData.title}")
    }
}

// Handle any errors
if (result.errors.isNotEmpty()) {
    println("Processing errors: ${result.errors}")
}
```

### Integration with Existing Svelte Component

You can replace the existing `getIpsContent` function in `IPSContent.svelte` with the Kotlin library:

```typescript
// In IPSContent.svelte
import { createIpsViewer } from './path-to-kotlin-js-output';

const ipsViewer = createIpsViewer();

// Replace the existing getIpsContent function
function getIpsContent(ips: Bundle): Record<string, IpsContent> {
    const bundleJson = JSON.stringify(ips);
    const resultJson = ipsViewer.processIpsBundle(bundleJson, mode);
    const result = JSON.parse(resultJson);
    
    if (result.errors?.length > 0) {
        console.warn('IPS processing errors:', result.errors);
    }
    
    return result.sections || {};
}
```

## Key Benefits

1. **Consistent Logic**: Same processing logic across TypeScript and Android platforms
2. **Type Safety**: Strong typing for all data models and interfaces
3. **Error Handling**: Comprehensive error reporting and validation
4. **Performance**: Compiled Kotlin code for optimal performance
5. **Maintainability**: Single codebase for core IPS processing logic

## Next Steps

1. **For TypeScript**: Integrate the library into your existing Svelte components
2. **For Android**: Use the library with Jetpack Compose for modern Android UI
3. **Customization**: Extend the resource processors for additional FHIR resource types
4. **Testing**: Add platform-specific tests using your preferred testing frameworks

For complete examples, see:
- `src/lib/integration/KotlinIpsIntegration.ts` (TypeScript integration)
- `examples/android/MainActivity.kt` (Android Compose example)