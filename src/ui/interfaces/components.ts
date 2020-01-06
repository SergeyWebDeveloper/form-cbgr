import React from "react";
import { GridSize } from "@material-ui/core/Grid";
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";

export type IBreakpointGrid = {
  [key in Breakpoint]?: GridSize;
};

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
  breakpointGridLabel?: IBreakpointGrid;
  breakpointGridComponent?: IBreakpointGrid;
}

export interface IFieldProps<T> extends IComponentBaseProps<T> {
  component: any;
  children?: React.ReactNode
}

export interface ITextareaProps extends IComponentBaseProps {
  rows?: number;
}

export interface ITableProps extends IComponentBaseProps {
  columns: any[];
  children: React.ReactElement<IComponentBaseProps>[]
}
