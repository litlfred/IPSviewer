<script lang="ts">
  import {
    Accordion,
    AccordionItem,
    Button,
    ButtonGroup,
    Card,
    CardBody,
    Col,
    Icon,
    Offcanvas,
    Row,
  } from 'sveltestrap';
  import type { Bundle } from "fhir/r4";
  import { download } from '$lib/utils/util.js';
  import type { IpsRenderingResult, EnhancedSectionContent } from './types';
  import ComponentRenderer from './ComponentRenderer.svelte';

  export let bundle: Bundle;
  export let mode: string = "structured";

  let ipsResult: IpsRenderingResult = { sections: {} };
  let isLoading = false;
  let error: string | null = null;

  // Enhanced IPS processing
  $: {
    if (bundle) {
      processBundle();
    }
  }

  async function processBundle() {
    isLoading = true;
    error = null;
    
    try {
      // This would call the Kotlin library's enhanced processing
      // For now, we'll simulate the enhanced structure
      ipsResult = await processWithEnhancedLibrary(bundle, mode);
    } catch (e) {
      error = e instanceof Error ? e.message : 'Unknown error occurred';
      ipsResult = { 
        sections: {},
        errors: [error]
      };
    } finally {
      isLoading = false;
    }
  }

  // Simulate enhanced library call - this would be replaced with actual Kotlin JS interop
  async function processWithEnhancedLibrary(bundle: Bundle, mode: string): Promise<IpsRenderingResult> {
    // TODO: Replace with actual Kotlin library call
    // const ipsViewer = createEnhancedIpsViewer();
    // const resultJson = ipsViewer.processIpsBundleWithRendering(JSON.stringify(bundle), mode, "web");
    // return JSON.parse(resultJson);
    
    // For now, return mock enhanced structure
    return {
      sections: {
        "Patient": {
          title: "Patient",
          hasData: true,
          useTextMode: false,
          resources: []
        }
      },
      warnings: ["Enhanced processing not yet integrated - showing placeholder"]
    };
  }

  // JSON viewer state
  let json = "";
  let resourceType = "";
  let isOpen = false;

  function showJson(jsonData: string, type: string = "Resource") {
    json = jsonData;
    resourceType = type;
    isOpen = true;
  }

  function handleJsonView(jsonData: string) {
    showJson(jsonData);
  }

  function toggle() {
    isOpen = !isOpen;
  }
</script>

<Offcanvas
  {isOpen}
  {toggle}
  scroll={false}
  header={resourceType + " JSON"}
  placement="end"
  title={resourceType + " JSON"}
  style="display: flex; overflow-y:hidden; height: 100dvh;"
>
  <Row class="d-flex" style="height: 100%">
    <Row class="d-flex pe-0" style="height:calc(100% - 50px)">
      <Col class="d-flex pe-0" style="height:100%">
        <div class="d-flex pe-0 pb-0 code-container">
          <pre class="code"><code>{json}</code></pre>
        </div>
      </Col>
    </Row>
    <Row class="d-flex pe-0" style="height:50px">
      <Col class="d-flex justify-content-start align-items-end" style="padding-top: 1rem">
        <ButtonGroup>
          <Button
            size="sm"
            color="primary"
            on:click={() => navigator.clipboard.writeText(json)}
          ><Icon name="clipboard" /> Copy</Button>
          <Button
            size="sm"
            outline
            color="secondary"
            on:click={() => download(resourceType + ".json", json)}
          ><Icon name="download" /> Download</Button>
        </ButtonGroup>
      </Col>
    </Row>
  </Row>
</Offcanvas>

{#if isLoading}
  <Row class="mx-0">
    <div class="text-center p-3">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <p class="mt-2">Processing IPS bundle...</p>
    </div>
  </Row>
{:else if error}
  <Row class="mx-0">
    <div class="alert alert-danger" role="alert">
      <h6>Error processing bundle:</h6>
      <p>{error}</p>
    </div>
  </Row>
{:else}
  <!-- Show errors if any -->
  {#if ipsResult.errors && ipsResult.errors.length > 0}
    <Row class="mx-0">
      <div class="alert alert-danger" role="alert">
        <h6>Processing Errors:</h6>
        <ul class="mb-0">
          {#each ipsResult.errors as error}
            <li>{error}</li>
          {/each}
        </ul>
      </div>
    </Row>
  {/if}

  <!-- Show warnings if any -->
  {#if ipsResult.warnings && ipsResult.warnings.length > 0}
    <Row class="mx-0">
      <div class="alert alert-warning" role="alert">
        <h6>Warnings:</h6>
        <ul class="mb-0">
          {#each ipsResult.warnings as warning}
            <li>{warning}</li>
          {/each}
        </ul>
      </div>
    </Row>
  {/if}

  <!-- Render sections using enhanced components -->
  {#each Object.entries(ipsResult.sections) as [title, sectionContent]}
    <Row class="mx-0">
      <Accordion class="mt-3">
        <AccordionItem active class="ips-section">
          <h6 slot="header" class="my-2">{title}</h6>
          
          {#if sectionContent.useTextMode && sectionContent.textContent}
            {@html sectionContent.textContent}
          {:else if sectionContent.resources.length > 0}
            <Card style="width: 100%; max-width: 100%" class="mb-2">
              {#each sectionContent.resources as resource, index}
                <CardBody class={index > 0 ? "border-top" : ""}>
                  <Row style="overflow:hidden" class="d-flex justify-content-end align-content-center">
                    <Col class="flex-grow-1" style="overflow:hidden">
                      <ComponentRenderer 
                        component={resource.component} 
                        onJsonView={handleJsonView}
                      />
                    </Col>
                    <Col class="d-flex flex-row-reverse justify-content-end align-items-start" style="max-width: max-content">
                      {#if resource.rawJson}
                        <Button
                          size="sm"
                          color="secondary"
                          outline
                          on:click={() => showJson(resource.rawJson, resource.resourceType)}
                        >
                          View
                        </Button>
                      {/if}
                    </Col>
                  </Row>
                </CardBody>
              {/each}
            </Card>
          {:else}
            <div class="text-muted p-3">
              <em>No data available for this section</em>
            </div>
          {/if}
        </AccordionItem>
      </Accordion>
    </Row>
  {/each}
{/if}

<style>
  /* Inherit styles from original IPSContent.svelte */
  :global(.ips-section table) {
    border-collapse: collapse !important;
    width: 100% !important;
  }

  :global(.ips-section th) {
    border: 1px solid lightgray !important;
    padding: 0 7px !important;
    text-align: center !important;
  }

  :global(.ips-section td) {
    margin-left: 2em !important;
  }

  :global(.ips-section thead) {
    background-color: #0c63e4;
    color: white;
  }

  :global(.ips-section tbody tr:nth-child(odd)) {
    background-color: #fff;
    border: 1px solid lightgray;
  }
  
  :global(.ips-section tbody tr:nth-child(even)) {
    background-color: #e7f1ff;
    border: 1px solid lightgray;
  }
  
  :global(.ips-section th) {
    background: #0c63e4;
    position: sticky;
    top: -17px;
  }

  :global(.ips-section td:first-child) {
    font-weight: bold;
  }

  :global(.ips-section > .accordion-collapse > .accordion-body) {
    overflow: auto !important;
    max-height: 50rem !important;
  }

  .code {
    overflow: auto;
    margin: 0;
    padding: 10px;
  }
  
  .code-container {
    background-color: #f5f5f5;
    border-radius: 10px;
    border: 1px solid rgb(200, 200, 200);
    overflow: hidden;
  }
  
  :global(div.offcanvas-body) {
    overflow-y: hidden !important;
  }
</style>