import React from "react";

export interface IFieldCondition {
  disabled?: boolean;
  required?: boolean;
}

export interface IHandlerComponentProps {
  onChange?(data: any): void;
}

export interface IComponentBaseProps<T>
  extends IFieldCondition,
    IHandlerComponentProps {
  value?: T;
  initialValue?: T;
  name: string;
  label?: string;
  component: any;
  placeholder?: string;
  formatValue?(value: T): T;
}
