# Enhanced IPS Rendering Architecture

This document describes the enhanced rendering architecture that provides unified IPS rendering capabilities across TypeScript and Android platforms.

## Overview

The enhanced architecture moves the rendering logic from platform-specific components (Svelte, Android Views) into the shared Kotlin library. This provides:

- **Unified Business Logic**: All decisions about what to display and how to format data are made in one place
- **Platform-Agnostic Components**: The library generates component trees that can be rendered by any platform
- **Reduced Maintenance**: Changes to display logic only need to be made in the Kotlin library
- **Consistency**: Both platforms render identical information in the same way

## Architecture

### 1. Shared Rendering Models (`RenderingModels.kt`)

The library defines platform-agnostic UI components:

```kotlin
@Serializable
data class ComponentView(
    val type: ComponentType,
    val props: ComponentProps,
    val children: List<ComponentView> = emptyList()
)

enum class ComponentType {
    CONTAINER, ROW, BADGE, TEXT, TABLE, COLLAPSIBLE_SECTION, // etc.
}
```

### 2. Resource Renderers (`ResourceRenderers.kt`)

Business logic extracted from original Svelte components:

```kotlin
class PatientRenderer : ResourceRenderer<Patient>() {
    override fun render(resource: Patient, config: RenderingConfig): ComponentView {
        // Logic from Patient.svelte moved here
        val components = mutableListOf<ComponentView>()
        
        // Name formatting
        val name = formatPatientName(resource)
        if (name.isNotBlank()) {
            components.add(createText(name, isBold = true))
        }
        
        // Birth date, gender, contact info...
        return createContainer(components)
    }
}
```

### 3. Enhanced Processor (`EnhancedIpsProcessor.kt`)

Processes FHIR bundles into component trees:

```kotlin
class EnhancedIpsProcessor(private val config: RenderingConfig) {
    fun processBundle(bundle: Bundle): IpsRenderingResult {
        // Process each section and resource
        // Generate component trees for each resource
        // Return structured rendering result
    }
}
```

## Platform Implementations

### TypeScript/Svelte Integration

The `ComponentRenderer.svelte` component recursively renders component trees:

```svelte
<script lang="ts">
  export let component: ComponentView;
</script>

{#if component.type === 'BADGE'}
  <Badge color={component.props.color}>
    {component.props.text}
  </Badge>
{:else if component.type === 'TEXT'}
  <span style={component.props.style}>
    {component.props.text}
  </span>
<!-- etc. -->
{/if}
```

Usage in TypeScript:
```typescript
import { createEnhancedIpsViewer } from './kotlin-library-output';

const ipsViewer = createEnhancedIpsViewer();
const resultJson = ipsViewer.processIpsBundleWithRendering(
  JSON.stringify(bundle), 
  "structured", 
  "web"
);
const result: IpsRenderingResult = JSON.parse(resultJson);
```

### Android/Jetpack Compose Integration

The `IpsComposeComponents.kt` provides native Compose components:

```kotlin
@Composable
fun ComponentRenderer(component: ComponentView) {
    when (component.type) {
        ComponentType.BADGE -> {
            Badge(
                text = component.props.text ?: "",
                color = component.props.color ?: "primary"
            )
        }
        ComponentType.TEXT -> {
            Text(
                text = component.props.text ?: "",
                fontWeight = if (component.props.style["font-weight"] == "bold") 
                    FontWeight.Bold else FontWeight.Normal
            )
        }
        // etc.
    }
}
```

Usage in Android:
```kotlin
val ipsViewer = IpsViewerAndroid()
val result = ipsViewer.processIpsBundleWithRendering(bundleJson)

// In Compose UI:
IpsViewer(result = result)
```

## Migration Guide

### From Existing Svelte Components

1. **Extract rendering logic** from Svelte components into corresponding Kotlin renderers
2. **Move formatting functions** (like `formatDate`, badge color logic) to shared utilities
3. **Replace direct Svelte components** with `ComponentRenderer` calls
4. **Update imports** to use enhanced types and interfaces

### Example: Migrating AllergyIntolerance.svelte

**Before (Svelte component):**
```svelte
<script lang="ts">
  import { Badge } from 'sveltestrap';
  export let content: ResourceTemplateParams<AllergyIntolerance>;
  
  function badgeColor(criticality: string) {
    if (criticality == 'high') return 'danger';
    return 'primary';
  }
</script>

<Badge color={badgeColor(resource.criticality)}>
  criticality: {resource.criticality ?? 'unknown'}
</Badge>
```

**After (Kotlin renderer + Svelte renderer):**

Kotlin renderer:
```kotlin
class AllergyIntoleranceRenderer : ResourceRenderer<AllergyIntolerance>() {
    override fun render(resource: AllergyIntolerance, config: RenderingConfig): ComponentView {
        val criticalityColor = when (resource.criticality) {
            "high" -> "danger"
            else -> "primary"
        }
        return createBadge("criticality: ${resource.criticality ?: "unknown"}", criticalityColor)
    }
}
```

Svelte usage:
```svelte
<ComponentRenderer component={resourceDisplay.component} />
```

## Benefits

### For TypeScript Applications
- **Simplified Components**: No more complex business logic in Svelte files
- **Automatic Updates**: Rendering improvements in Kotlin library automatically benefit TypeScript
- **Better Testing**: Business logic can be unit tested in Kotlin

### For Android Applications  
- **Native Performance**: Jetpack Compose components optimized for Android
- **Material Design**: Easy to customize with Material Design 3 theming
- **Consistent Data**: Same processed data structure as web application

### For Maintenance
- **Single Source of Truth**: All rendering logic in one place
- **Easier Updates**: Add new FHIR resource types once, works on both platforms
- **Consistent Behavior**: Identical rendering logic ensures identical output

## Next Steps

1. **Complete Resource Renderers**: Implement renderers for all FHIR resource types
2. **Enhanced FHIR Parsing**: Add proper deserialization for complex FHIR resources
3. **Theme Support**: Implement different themes (compact, detailed, accessibility)
4. **Performance Optimization**: Optimize component tree generation for large bundles
5. **Testing**: Add comprehensive tests for rendering logic