import React from "react";
import Input from "./ui/components/Input";
import Field from "./core/components/Field";
import Form from "./core/components/Form";

const App: React.FC = () => {
  return (
    <div className="App">
      <Form idMeta={"test"}>
        {({ valueComponents, idMeta }: any) => {
          return (
            <>
              <Field
                component={Input}
                name={"name"}
                disabled={false}
                required={true}
                label={"Name"}
              />
              <Field
                component={Input}
                name={"lastName"}
                disabled={false}
                required={false}
                label={"LastName"}
              />
              <Field component={Input} name={"test.prop"} label={"Test"} />
            </>
          );
        }}
      </Form>
    </div>
  );
};

export default App;
