import React, { useContext } from "react";
import Input from "./ui/components/Input";
import { changeField } from "./core/features/formSlice";
import { useDispatch, useSelector } from "react-redux";
import get from "lodash/get";
import { IComponentBaseProps } from "./ui/interfaces/components";

const idContext = React.createContext<any>(null);

const Form = ({ children, id }: any) => {
  const Provider = idContext.Provider;
  const value = useSelector(state => get(state, `form.${id}.values`));
  return <Provider value={{ id }}>{children(value)}</Provider>;
};

const Field = ({ component: Component, ...rest }: IComponentBaseProps<any>) => {
  const ctx = useContext(idContext);
  const valueComponent = useSelector(state => {
    return get(state, `form.${ctx.id}.values.${rest.name}`);
  });
  const dispatch = useDispatch();
  const handleChange = (value: any) => {
    dispatch(changeField({ ...value, id: ctx.id }));
  };
  return (
    <div>
      <label htmlFor={rest.name}>{rest.label}</label>
      <Component {...rest} onChange={handleChange} value={valueComponent} />
    </div>
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
                value={"111111"}
              />
              <Field
                component={Input}
                name={"lastName"}
                disabled={false}
                required={false}
                label={"LastName"}
              />
              <Field component={Input} name={"test"} label={"Test"} />
            </>
          );
        }}
      </Form>
    </div>
  );
};

export default App;
