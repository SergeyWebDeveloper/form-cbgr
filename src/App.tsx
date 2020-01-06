import React from "react";
import Input from "./ui/components/Input";
import Field from "./core/components/Field";
import Form from "./core/components/Form";
import InputField from "./core/components/InputField";
import Textarea from "./ui/components/Textarea";
import TextareaField from "./core/components/TextareaField";

const App: React.FC = () => {
  return (
    <div className="App">
      <Form idMeta={"test"}>
        {({ valueComponents, idMeta }: any) => {
          return (
            <>
              <InputField
                name={"name"}
                disabled={false}
                required={true}
                label={"Name"}
              />
              <InputField
                name={"lastName"}
                disabled={false}
                required={false}
                label={"LastName"}
              />
              <TextareaField
                name={"textarea.path"}
                label={"4444"}
                breakpointGridLabel={{
                  xs: 12
                }}
                breakpointGridComponent={{
                  xs: 12
                }}
              />
            </>
          );
        }}
      </Form>
    </div>
  );
};

export default App;
