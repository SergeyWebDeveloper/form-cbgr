import React, { ChangeEvent, memo } from "react";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import { IComponentBaseProps } from "../interfaces/components";

const BaseInput = ({
  disabled,
  value,
  required,
  placeholder,
  onChange,
  name,
  formatValue,
  label,
  ...rest
}: Required<IComponentBaseProps> & TextFieldProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const data = {
      name,
      value: e.target.value
    };
    onChange(data);
  };
  const formatValueComponent = formatValue ? formatValue(value) : value;
  return (
    <TextField
      disabled={disabled}
      id={name}
      value={formatValueComponent}
      required={required}
      onChange={handleChange}
      placeholder={placeholder}
      {...rest}
    />
  );
};

BaseInput.defaultProps = {
  value: ""
};

export default memo(BaseInput);
