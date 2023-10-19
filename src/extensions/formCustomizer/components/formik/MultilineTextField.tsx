import * as React from "react";
import { TextField as FabricTextField } from "@fluentui/react";
import { ErrorMessage, useField } from "formik";

/**
 * A ui fabric MultilineTextField
 * @param props 
 * @returns 
 */
export const MultilineTextField = (props: {fieldname:string,label:string}) => {
  const [field, meta] = useField(props.fieldname);

  return (
    <>
      <FabricTextField
        name={props.fieldname}
        autoAdjustHeight
        multiline
        errorMessage={meta.error}
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
