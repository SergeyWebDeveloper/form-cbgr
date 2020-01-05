import React from "react";
import { ITextareaProps } from "../interfaces/components";
import BaseInput from "./BaseInput";

const Textarea = (props: Required<ITextareaProps>) => (
  <BaseInput {...props} multiline={true} />
);

Textarea.defaultProps = {
  rows: 4
};

export default Textarea;
