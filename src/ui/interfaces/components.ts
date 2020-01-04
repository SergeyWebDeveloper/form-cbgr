import React from "react";

export interface IComponentBaseProps {
  value?: any;
  name: string;
  disabled?: boolean;
  required?: boolean;
  label?: string;
  component: React.ReactElement;
}
