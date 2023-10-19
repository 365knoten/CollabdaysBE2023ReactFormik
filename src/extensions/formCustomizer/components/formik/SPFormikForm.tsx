import * as React from "react";
import { Formik } from "formik";
import FormButtons from "./FormButtons";
import { ISPFormikFormProps } from "./ISPFormikFormProps";


export default (props: ISPFormikFormProps) => {
    return (
        <Formik
            onSubmit={async (values: any, { setSubmitting }) => {
                setSubmitting(true);
                await props.onSave(values);
                setSubmitting(false);
            }}
            initialValues={props.initialValues}
            validate={props.validator}
        >
            {({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>                  
                    {props.children}
                    <FormButtons onCancel={props.onCancel} />
                </form>
            )}
        </Formik>
    );
};
