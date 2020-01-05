import React from "react";

export interface IFieldCondition {
  disabled?: boolean;
  required?: boolean;
}

export interface IHandlerComponentProps {
  onChange?(data: any): void;
}

export interface IComponentBaseProps<T = string>
  extends IFieldCondition,
    IHandlerComponentProps {
  value?: T;
  initialValue?: T;
  label?: string;
  placeholder?: string;
  formatValue?(value: T): T;
  name: string;
}

export interface IFieldProps<T> extends IComponentBaseProps<T> {
  component: any;
}

export interface ITextareaProps extends IComponentBaseProps {
  rows?: number;
}
