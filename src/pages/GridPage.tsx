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
            <Table
              name={"1111"}
              label={"Table Label"}
              columns={[{ label: "111", id: 1 }, { label: "22222", id: 2 }]}
            >
              {[
                <InputField name={"name"} />,
                <InputField name={"population"} />
              ]}
            </Table>
          );
        }}
      </Form>
    </div>
  );
};

export default GridPage;
