/**
 * TypeScript types for the enhanced rendering system
 * These match the Kotlin models for seamless integration
 */

export type ComponentType = 
  | 'CONTAINER' | 'ROW' | 'COLUMN' | 'CARD' | 'ACCORDION' | 'ACCORDION_ITEM'
  | 'TEXT' | 'HEADING' | 'BADGE' | 'BUTTON' | 'ICON' | 'TABLE' | 'LIST'
  | 'COLLAPSIBLE_SECTION' | 'TOGGLE_BUTTON' | 'VIEW_JSON_BUTTON'
  | 'PATIENT_SUMMARY' | 'ALLERGY_ITEM' | 'CONDITION_ITEM' | 'MEDICATION_ITEM'
  | 'OBSERVATION_ITEM' | 'PROCEDURE_ITEM' | 'IMMUNIZATION_ITEM';

export interface ComponentProps {
  text?: string;
  color?: string;
  size?: string;
  variant?: string;
  className?: string;
  style?: Record<string, string>;
  onClick?: string;
  isCollapsed?: boolean;
  isActive?: boolean;
  title?: string;
  subtitle?: string;
  icon?: string;
  data?: Record<string, string>;
  rawJson?: string;
  headers?: string[];
  rows?: string[][];
  custom?: Record<string, string>;
}

export interface ComponentView {
  type: ComponentType;
  props: ComponentProps;
  children?: ComponentView[];
}

export interface EnhancedResourceDisplay {
  resourceType: string;
  id?: string;
  component: ComponentView;
  rawJson?: string;
}

export interface EnhancedSectionContent {
  title: string;
  hasData: boolean;
  useTextMode: boolean;
  textContent?: string;
  components?: ComponentView[];
  resources: EnhancedResourceDisplay[];
}

export interface IpsRenderingResult {
  sections: Record<string, EnhancedSectionContent>;
  globalComponents?: ComponentView[];
  errors?: string[];
  warnings?: string[];
}

export type RenderingMode = 'STRUCTURED' | 'TEXT' | 'HYBRID';
export type TargetPlatform = 'WEB' | 'ANDROID' | 'IOS';
export type RenderingTheme = 'DEFAULT' | 'COMPACT' | 'DETAILED' | 'ACCESSIBILITY_FOCUSED';

export interface RenderingConfig {
  mode?: RenderingMode;
  platform?: TargetPlatform;
  theme?: RenderingTheme;
  includeRawJson?: boolean;
  enableInteractivity?: boolean;
  maxTableRows?: number;
  dateFormat?: string;
}