import React from "react";
import Form from "./core/components/Form";
import InputField from "./core/components/InputField";
import TextareaField from "./core/components/TextareaField";
import { request } from "./core/features/request";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GridPage from "./pages/GridPage";

request({
  method: "GET",
  url: "/todos/1",
  baseURL: "https://jsonplaceholder.typicode.com",
  beforeSend: function(data: any) {
    data.id = 1111;
    return data;
  }
}).then(data => console.log(data));

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/grid" exact={true}>
            <GridPage />
          </Route>
        </Switch>
      </Router>
      {/*<Form idMeta={"test"}>*/}
      {/*  {({ valueComponents, idMeta }: any) => {*/}
      {/*    return (*/}
      {/*      <>*/}
      {/*        <InputField*/}
      {/*          name={"name"}*/}
      {/*          disabled={false}*/}
      {/*          required={true}*/}
      {/*          label={"Name"}*/}
      {/*        />*/}
      {/*        <InputField*/}
      {/*          name={"lastName"}*/}
      {/*          disabled={false}*/}
      {/*          required={false}*/}
      {/*          label={"LastName"}*/}
      {/*        />*/}
      {/*        <TextareaField*/}
      {/*          name={"textarea.path"}*/}
      {/*          label={"4444"}*/}
      {/*          breakpointGridLabel={{*/}
      {/*            xs: 12*/}
      {/*          }}*/}
      {/*          breakpointGridComponent={{*/}
      {/*            xs: 12*/}
      {/*          }}*/}
      {/*        />*/}
      {/*      </>*/}
      {/*    );*/}
      {/*  }}*/}
      {/*</Form>*/}
    </div>
  );
};

export default App;
