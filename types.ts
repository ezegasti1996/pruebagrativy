import React from 'react';

export interface BenefitProps {
  icon: React.ElementType;
  title: string;
  description: string;
  borderColor: string;
  iconBg: string;
}

export interface StatProps {
  label: string;
  value: string;
  subtext?: string;
  trend?: string;
  type: 'chart' | 'payment' | 'simple' | 'gradient';
}