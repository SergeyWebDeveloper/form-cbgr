import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import get from "lodash/get";

import { IFieldProps } from "../../ui/interfaces/components";
import { useDispatch, useSelector } from "react-redux";
import { changeField } from "../features/formSlice";
import { contextForm } from "../context/form";

const Field = ({
  component: Component,
  breakpointGridComponent,
  breakpointGridLabel,
  ...rest
}: IFieldProps<any>) => {
  const { idMeta } = useContext(contextForm);
  const { name, label, isCell } = rest;
  const valueComponent = useSelector(state => {
    return get(state, `form.${idMeta}.values.${name}`);
  });
  const dispatch = useDispatch();
  const handleChange = (value: any) => {
    dispatch(changeField({ ...value, idMeta }));
  };
  if (isCell) {
    return (
      <Component {...rest} onChange={handleChange} value={valueComponent} />
    );
  }
  return (
    <Grid container={true} spacing={1} alignItems={"center"}>
      <Grid item={true} {...breakpointGridLabel}>
        <label htmlFor={name}>{label}</label>
      </Grid>
      <Grid item={true} {...breakpointGridComponent}>
        <Component {...rest} onChange={handleChange} value={valueComponent} />
      </Grid>
    </Grid>
  );
};

Field.defaultProps = {
  breakpointGridLabel: {
    xs: 3
  },
  breakpointGridComponent: {
    xs: 9
  }
};

export default Field;
