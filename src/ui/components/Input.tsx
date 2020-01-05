import React, { memo } from "react";
import { IComponentBaseProps } from "../interfaces/components";
import BaseInput from "./BaseInput";

const Input = (props: Required<IComponentBaseProps>) => (
  <BaseInput {...props} />
);

export default memo(Input);
