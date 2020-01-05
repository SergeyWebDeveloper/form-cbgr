import React from "react";
import Field from "./Field";

import { ITextareaProps } from "../../ui/interfaces/components";
import Textarea from "../../ui/components/Textarea";

const TextareaField = (props: ITextareaProps) => {
  return <Field component={Textarea} {...props} />;
};

export default TextareaField;
