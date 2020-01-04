import React, { useContext } from "react";
import Input from "./ui/components/Input";
import { changeField } from "./core/features/formSlice";
import { useDispatch, useSelector } from "react-redux";
import get from "lodash/get";

const idContext = React.createContext<any>(null);

const Form = ({ children, id }: any) => {
  const Provider = idContext.Provider;
  const value = useSelector(state => get(state, `form.${id}.values`));
  return <Provider value={{ id }}>{children(value)}</Provider>;
};

const Field = ({ component: Component, ...rest }: any) => {
  const ctx = useContext(idContext);
  const valueComponent = useSelector(state => {
    return get(state, `form.${ctx.id}.values.${rest.name}`);
  });
  const dispatch = useDispatch();
  const handleChange = (value: any) => {
    dispatch(changeField({ ...value, id: ctx.id }));
  };
  return (
    <Component
      {...rest}
      initialValue={rest.value}
      onChange={handleChange}
      value={valueComponent}
    />
  );
};

const App: React.FC = () => {
  return (
    <div className="App">
      <Form id={"test"}>
        {(value: any) => {
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
            </>
          );
        }}
      </Form>
    </div>
  );
};

export default App;
