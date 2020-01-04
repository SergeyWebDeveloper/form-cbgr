import React, { ChangeEvent } from "react";
import TextField from "@material-ui/core/TextField";

const Input = ({ disabled, value, required, label, onChange, name }: any) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const data = {
      name,
      value: e.target.value
    };
    onChange(data);
  };
  return (
    <TextField
      disabled={disabled}
      value={value}
      required={required}
      label={label}
      onChange={handleChange}
    />
  );
};

export default Input;
