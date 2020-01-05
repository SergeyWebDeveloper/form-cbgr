import React from "react";

export interface IFormContext {
  idMeta: string;
}

export const contextForm = React.createContext<IFormContext>({
  idMeta: ""
});
