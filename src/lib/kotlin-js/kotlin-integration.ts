/**
 * TypeScript integration for Kotlin-generated IPS library
 * Provides a clean interface to the Kotlin multiplatform library
 */

// We'll import the Kotlin library files statically for better bundling
// This is a simpler approach than dynamic UMD loading in Vite

let kotlinLibrary: any = null;

/**
 * Initialize the Kotlin library
 * For now, we provide a enhanced mock that simulates the real Kotlin processing
 */
function initializeKotlinLibrary(): any {
    if (kotlinLibrary) {
        return kotlinLibrary;
    }

    // TODO: When the UMD loading is properly configured, replace this with:
    // import('./kotlin-js/ips-viewer-kotlin.js').then(module => ...)
    
    // Enhanced mock implementation that provides better simulation
    kotlinLibrary = {
        createEnhancedIpsViewer: () => ({
            processIpsBundleWithRendering: (bundleJson: string, mode: string = "structured", platform: string = "web") => {
                try {
                    const bundle = JSON.parse(bundleJson);
                    
                    // Extract some real data for better testing
                    const result = processIpsBundleBasic(bundle, mode);
                    
                    return JSON.stringify({
                        sections: result.sections,
                        warnings: [
                            "Using enhanced TypeScript processing (Kotlin library integration in progress)",
                            `Processing ${Object.keys(result.sections).length} sections with ${mode} mode`
                        ]
                    });
                } catch (error) {
                    return JSON.stringify({
                        sections: {},
                        errors: [`Failed to process bundle: ${error}`]
                    });
                }
            },
            processIpsBundle: (bundleJson: string, mode: string = "app") => {
                try {
                    const bundle = JSON.parse(bundleJson);
                    const result = processIpsBundleBasic(bundle, mode);
                    return JSON.stringify(result);
                } catch (error) {
                    return JSON.stringify({
                        sections: {},
                        errors: [`Failed to process bundle: ${error}`]
                    });
                }
            },
            getVersion: () => "2.0.0-enhanced-mock",
            getSupportedComponentTypes: () => JSON.stringify(["TEXT", "BADGE", "TABLE", "LIST", "COLLAPSIBLE"])
        })
    };
    
    return kotlinLibrary;
}

/**
 * Basic IPS processing for testing - extracts real FHIR data
 */
function processIpsBundleBasic(bundle: any, mode: string) {
    const sections: any = {};
    
    // Find composition
    const composition = bundle.entry?.find((e: any) => e.resource?.resourceType === 'Composition')?.resource;
    
    // Add patient section if available
    const patient = bundle.entry?.find((e: any) => e.resource?.resourceType === 'Patient')?.resource;
    if (patient) {
        sections["Patient"] = {
            title: "Patient",
            hasData: true,
            useTextMode: mode === "text",
            resources: [{
                resourceType: "Patient",
                component: {
                    type: "TEXT",
                    content: `${patient.name?.[0]?.given?.[0] || 'Unknown'} ${patient.name?.[0]?.family || ''}`
                },
                rawJson: JSON.stringify(patient, null, 2)
            }]
        };
    }
    
    // Process composition sections
    if (composition?.section) {
        for (const section of composition.section) {
            const title = section.title || section.code?.coding?.[0]?.display || "Untitled Section";
            
            const sectionResources = [];
            if (section.entry) {
                for (const entry of section.entry) {
                    const resource = findResourceByReference(bundle, entry.reference);
                    if (resource) {
                        sectionResources.push({
                            resourceType: resource.resourceType,
                            component: {
                                type: "TEXT",
                                content: getResourceSummary(resource)
                            },
                            rawJson: JSON.stringify(resource, null, 2)
                        });
                    }
                }
            }
            
            sections[title] = {
                title,
                hasData: sectionResources.length > 0,
                useTextMode: mode === "text" || sectionResources.length === 0,
                textContent: section.text?.div,
                resources: sectionResources
            };
        }
    }
    
    return { sections };
}

function findResourceByReference(bundle: any, reference: string): any {
    return bundle.entry?.find((e: any) => 
        e.fullUrl?.includes(reference) ||
        e.fullUrl?.includes(reference.replace(/.*\//, ''))
    )?.resource;
}

function getResourceSummary(resource: any): string {
    switch (resource.resourceType) {
        case 'Patient':
            return `${resource.name?.[0]?.given?.[0] || 'Unknown'} ${resource.name?.[0]?.family || ''}`;
        case 'AllergyIntolerance':
            return `Allergy: ${resource.code?.coding?.[0]?.display || resource.code?.text || 'Unknown allergen'}`;
        case 'Condition':
            return `Condition: ${resource.code?.coding?.[0]?.display || resource.code?.text || 'Unknown condition'}`;
        case 'MedicationStatement':
        case 'MedicationRequest':
            return `Medication: ${resource.medicationCodeableConcept?.coding?.[0]?.display || resource.medicationCodeableConcept?.text || 'Unknown medication'}`;
        case 'Observation':
            return `Observation: ${resource.code?.coding?.[0]?.display || resource.code?.text || 'Unknown observation'}`;
        case 'Immunization':
            return `Immunization: ${resource.vaccineCode?.coding?.[0]?.display || resource.vaccineCode?.text || 'Unknown vaccine'}`;
        case 'Procedure':
            return `Procedure: ${resource.code?.coding?.[0]?.display || resource.code?.text || 'Unknown procedure'}`;
        default:
            return `${resource.resourceType}: ${resource.id || 'Unknown'}`;
    }
}

/**
 * Enhanced IPS Viewer interface
 */
export interface IKotlinIpsViewer {
    processIpsBundleWithRendering(bundleJson: string, mode?: string, platform?: string): string;
    processIpsBundle(bundleJson: string, mode?: string): string;
    getVersion(): string;
    getSupportedComponentTypes(): string;
}

/**
 * Create an enhanced IPS viewer instance
 */
export async function createEnhancedIpsViewer(): Promise<IKotlinIpsViewer> {
    const lib = initializeKotlinLibrary();
    return lib.createEnhancedIpsViewer();
}

/**
 * Create a legacy IPS viewer instance  
 */
export async function createIpsViewer(): Promise<IKotlinIpsViewer> {
    const lib = initializeKotlinLibrary();
    return lib.createEnhancedIpsViewer(); // Same instance, different methods
}

/**
 * Format a date using the Kotlin library's date formatting
 */
export async function formatDate(dateString: string): Promise<string> {
    // Basic date formatting for now
    try {
        const date = new Date(dateString);
        return date.toLocaleDateString();
    } catch {
        return dateString;
    }
}

/**
 * Get the library version
 */
export async function getLibraryVersion(): Promise<string> {
    const lib = initializeKotlinLibrary();
    const viewer = lib.createEnhancedIpsViewer();
    return viewer.getVersion();
}