import React from "react";
import Field from "./Field";
import SimpleTable from "../../ui/components/table";
import { ITableProps } from "../../ui/interfaces/components";

const Table = (props: ITableProps) => {
  return (
    <Field component={SimpleTable} {...props} isTable={true}>
      {props.children}
    </Field>
  );
};

export default Table;
