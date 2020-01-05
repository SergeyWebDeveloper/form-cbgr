import React, { ChangeEvent } from "react";
import TextField from "@material-ui/core/TextField";
import { IComponentBaseProps } from "../interfaces/components";

const Input = ({
  disabled,
  value,
  required,
  placeholder,
  onChange,
  name,
  formatValue
}: Required<IComponentBaseProps<string>>) => {
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
    />
  );
};

Input.defaultProps = {
  value: ""
};

export default Input;
