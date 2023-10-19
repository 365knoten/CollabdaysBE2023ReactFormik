import * as React from "react";
import { DatePicker } from "@fluentui/react";
import { useField, useFormikContext } from "formik";


export const DateField = (props: { fieldname: string, label: string }) => {
    const [field, meta] = useField(props.fieldname);
    const { setFieldValue } = useFormikContext();

    React.useEffect(() => {
        if (field.value === null) {
            setFieldValue(field.name, new Date());
        }
    }, [field.value])

    return (<>
        <DatePicker
            value={field.value}
            label={props.label}
            onSelectDate={(date) => setFieldValue(field.name, date)} />
        {meta.error && meta.error.length > 0 && <div style={{ color: "red" }}>{meta.error}</div>}
    </>
    );
};
