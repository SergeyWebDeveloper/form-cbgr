import React from "react";
import Field from "./Field";
import Input from "../../ui/components/Input";
import { IComponentBaseProps } from "../../ui/interfaces/components";

const InputField = (props: IComponentBaseProps) => {
  return <Field component={Input} {...props} />;
};

export default InputField;
