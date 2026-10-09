export type ThemeMode = 'light' | 'dark' | 'system';

export type ChallengeCategory = 'climate' | 'soil' | 'water' | 'variety' | 'labor' | 'capital';

export interface SolutionStep {
  stepNum: number;
  title: string;
  detail: string;
  toolOrMaterial?: string;
  checkNote?: string;
}

export interface CoreSolution {
  id: string;
  orderNumber: string;
  target: string;
  coreTech: string;
  headline: string;
  badge: string;
  impactHighlight: string;
  impactMetrics: { label: string; value: string }[];
  steps: SolutionStep[];
  practicalTips: string[];
  equipmentNeeded: string[];
  icon: string;
}

export interface FieldCondition {
  id: string;
  factor: string;
  icon: string;
  chiengLaoCurrent: string;
  coffeeRequirement: string;
  severity: 'high' | 'medium' | 'critical';
  severityLabel: string;
  technicalPrinciple: string;
  keyActions: string[];
}

export interface PillarStrategy {
  id: string;
  title: string;
  category: 'von' | 'lao-dong' | 'nang-suat' | 'chat-luong';
  subtitle: string;
  description: string;
  strategicSolutions: string[];
  expectedImpact: string;
  kpis: { label: string; target: string }[];
}

export interface SlopeCalcInput {
  areaM2: number;
  slopeDegree: number; // 15 to 35
  treeDensity: number; // trees per ha (usually 3300 - 4000)
}

export interface SlopeCalcOutput {
  vetiverMeters: number;
  fishScalePits: number;
  dolomiteKgPerYear: number;
  fertilizerSavedKg: number;
  laborDaysSavedByCable: number;
  runoffReducedPercent: number;
  estimatedCostVND: number;
  paybackPeriodMonths: number;
}
