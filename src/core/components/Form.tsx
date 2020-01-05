import React from "react";
import get from "lodash/get";
import { useSelector } from "react-redux";

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
  return <Provider value={{ idMeta }}>{children(data)}</Provider>;
};

export default Form;
