<script lang="ts">
  import { Accordion, AccordionItem, Badge, Button, Card, CardBody, Col, Row, Table } from 'sveltestrap';
  import type { ComponentView, ComponentProps, EnhancedResourceDisplay } from './types';
  
  export let component: ComponentView;
  export let onJsonView: ((json: string) => void) | undefined = undefined;
  
  let isCollapsed = component.props.isCollapsed ?? false;
  
  function handleToggle() {
    isCollapsed = !isCollapsed;
  }
  
  function handleJsonView(resource: EnhancedResourceDisplay) {
    if (resource.rawJson && onJsonView) {
      onJsonView(resource.rawJson);
    }
  }
  
  function getBadgeColor(color: string = 'primary'): string {
    const colorMap: Record<string, string> = {
      'primary': 'primary',
      'secondary': 'secondary', 
      'danger': 'danger',
      'warning': 'warning',
      'success': 'success',
      'info': 'info',
      'light': 'light',
      'dark': 'dark'
    };
    return colorMap[color.toLowerCase()] || 'primary';
  }
</script>

{#if component.type === 'CONTAINER'}
  <div class={component.props.className || ''} style={component.props.style ? Object.entries(component.props.style).map(([k,v]) => `${k}: ${v}`).join('; ') : ''}>
    {#if component.children}
      {#each component.children as child}
        <svelte:self component={child} {onJsonView} />
      {/each}
    {/if}
  </div>

{:else if component.type === 'ROW'}
  <Row class={component.props.className || ''}>
    {#if component.children}
      {#each component.children as child}
        <Col>
          <svelte:self component={child} {onJsonView} />
        </Col>
      {/each}
    {/if}
  </Row>

{:else if component.type === 'CARD'}
  <Card class={component.props.className || ''}>
    <CardBody>
      {#if component.children}
        {#each component.children as child}
          <svelte:self component={child} {onJsonView} />
        {/each}
      {/if}
    </CardBody>
  </Card>

{:else if component.type === 'TEXT'}
  <span 
    class={component.props.className || ''}
    style={component.props.style ? Object.entries(component.props.style).map(([k,v]) => `${k}: ${v}`).join('; ') : ''}
  >
    {component.props.text || ''}
  </span>
  {#if component.children && component.children.length > 0}<br />{/if}

{:else if component.type === 'HEADING'}
  <h6 class={component.props.className || ''} style="font-weight: bold;">
    {component.props.text || ''}
  </h6>

{:else if component.type === 'BADGE'}
  <Badge color={getBadgeColor(component.props.color)} class="me-1">
    {component.props.text || ''}
  </Badge>

{:else if component.type === 'BUTTON'}
  <Button 
    color={component.props.color || 'primary'}
    size={component.props.size || 'sm'}
    outline={component.props.variant === 'outline'}
    class={component.props.className || ''}
    on:click={() => {
      // Handle button clicks based on props
      if (component.props.onClick === 'view-json' && component.props.rawJson && onJsonView) {
        onJsonView(component.props.rawJson);
      }
    }}
  >
    {component.props.text || ''}
  </Button>

{:else if component.type === 'TABLE'}
  <Table bordered size="sm" class={component.props.className || ''}>
    {#if component.props.headers && component.props.headers.length > 0}
      <thead>
        <tr>
          {#each component.props.headers as header}
            <th>{header}</th>
          {/each}
        </tr>
      </thead>
    {/if}
    {#if component.props.rows && component.props.rows.length > 0}
      <tbody>
        {#each component.props.rows as row}
          <tr>
            {#each row as cell}
              <td>{cell}</td>
            {/each}
          </tr>
        {/each}
      </tbody>
    {/if}
  </Table>

{:else if component.type === 'COLLAPSIBLE_SECTION'}
  <div class="mt-2">
    <Button
      size="sm"
      color={isCollapsed ? "secondary" : "primary"}
      outline
      on:click={handleToggle}
      class="mb-2"
    >
      {isCollapsed ? 'Show' : 'Hide'} {component.props.title || 'Section'}
      <i class="fa fa-caret-{isCollapsed ? 'down' : 'up'}" style="font-size: x-small; margin-left: 4px;"></i>
    </Button>
    
    {#if !isCollapsed}
      <div class="ms-3">
        {#if component.children}
          {#each component.children as child}
            <svelte:self component={child} {onJsonView} />
          {/each}
        {/if}
      </div>
    {/if}
  </div>

{:else if component.type === 'ACCORDION'}
  <Accordion class={component.props.className || ''}>
    {#if component.children}
      {#each component.children as child}
        <svelte:self component={child} {onJsonView} />
      {/each}
    {/if}
  </Accordion>

{:else if component.type === 'ACCORDION_ITEM'}
  <AccordionItem active={component.props.isActive !== false}>
    <h6 slot="header" class="my-2">{component.props.title || 'Section'}</h6>
    {#if component.children}
      {#each component.children as child}
        <svelte:self component={child} {onJsonView} />
      {/each}
    {/if}
  </AccordionItem>

{:else}
  <!-- Fallback for unsupported component types -->
  <div class="alert alert-warning" role="alert">
    <small>Unsupported component type: {component.type}</small>
  </div>
{/if}