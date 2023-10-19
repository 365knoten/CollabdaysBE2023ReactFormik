import * as React from "react";
import { TextField as FabricTextField } from "@fluentui/react";
import { ErrorMessage, useField } from "formik";


export const TextField = (props: {fieldname:string,label:string}) => {
  const [field] = useField(props.fieldname);

  return (
    <>
      <FabricTextField
        name={props.fieldname}      
        value={field.value}
        label={props.label}
        onChange={(e) => {
          field.onChange(e);
        }}
      />
      <ErrorMessage component="div" name={props.fieldname} />
    </>
  );
};
