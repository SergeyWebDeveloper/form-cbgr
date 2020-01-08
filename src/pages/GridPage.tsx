import React from "react";
import Form from "../core/components/Form";
import Table from "../core/components/Table";
import InputField from "../core/components/InputField";

const GridPage = () => {
  return (
    <div>
      <div>Фильтр</div>
      <hr />
      <hr />
      <Form idMeta={"grid-list"}>
        {({ value }) => {
          return (
            // @ts-ignore
            <Table
              name={"rowsValue"}
              label={"Table Label"}
              columns={[{ label: "111", id: 1 }, { label: "22222", id: 2 }]}
            >
              {(value: any) => {
                return value.map((obj: any, idx: any) => {
                  // TODO: isCell flag
                  return (
                    <>
                      <InputField name={`rowsValue[${idx}].name`} />
                      <InputField name={`rowsValue[${idx}].population`} />
                    </>
                  );
                });
              }}
            </Table>
          );
        }}
      </Form>
    </div>
  );
};

export default GridPage;
