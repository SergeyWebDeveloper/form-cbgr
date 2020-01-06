import React from "react";
import get from "lodash/get";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";

import { contextForm } from "../context/form";

const Form = ({ children, idMeta }: any) => {
  const { Provider } = contextForm;
  const valueComponents = useSelector(state =>
    get(state, `form.${idMeta}.values`)
  );
  const data = {
    valueComponents,
    idMeta
  };
  return (
    <Provider value={{ idMeta }}>
      <Grid container={true} spacing={1}>
        {children(data)}
      </Grid>
    </Provider>
  );
};

export default Form;
