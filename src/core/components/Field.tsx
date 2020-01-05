import React, { useContext } from "react";
import get from "lodash/get";

import { IComponentBaseProps } from "../../ui/interfaces/components";
import { useDispatch, useSelector } from "react-redux";
import { changeField } from "../features/formSlice";
import { contextForm } from "../context/form";

const Field = ({ component: Component, ...rest }: IComponentBaseProps<any>) => {
  const ctx = useContext(contextForm);
  const valueComponent = useSelector(state => {
    return get(state, `form.${ctx.idMeta}.values.${rest.name}`);
  });
  const dispatch = useDispatch();
  const handleChange = (value: any) => {
    dispatch(changeField({ ...value, id: ctx.idMeta }));
  };
  return (
    <div>
      <label htmlFor={rest.name}>{rest.label}</label>
      <Component {...rest} onChange={handleChange} value={valueComponent} />
    </div>
  );
};

export default Field;
