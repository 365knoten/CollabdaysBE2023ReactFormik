import * as React from "react";
import { Toggle } from "@fluentui/react";
import { ErrorMessage, useField, useFormikContext } from "formik";


export const ToggleField = (props: {fieldname:string,label:string}) => {
  const [field] = useField(props.fieldname);
  const { setFieldValue } = useFormikContext();

  return (
    <>
      <Toggle
        defaultValue={field.value}                
        checked={field.value}
        label={props.label}
        onChange={(_, checked) => setFieldValue(field.name, checked)}
      />
      <ErrorMessage component="div" name={props.fieldname} />
    </>
  );
};
