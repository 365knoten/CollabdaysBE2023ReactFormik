import * as React from 'react';
import { TextField } from './formik/TextField';
import { ToggleField } from './formik/ToggleField';
import { DateField } from './formik/DateField';
import { Pivot, PivotItem, Stack, IStackStyles, IStackTokens } from '@fluentui/react';
import { MultilineTextField } from './formik/MultilineTextField';


const stackStyles: IStackStyles = {
    root: {
        padding: 10
    },
};
const containerStackTokens: IStackTokens = { childrenGap: 5 };


export default () => {

    return (
        <Stack styles={stackStyles}>
            <Pivot>
                <PivotItem headerText="Task Info">
                    <TextField fieldname="Title" label="Task Name" />
                    <MultilineTextField fieldname="Description" label="Description" />
                </PivotItem>
                <PivotItem headerText="States and Dates">
                    <Stack horizontal tokens={containerStackTokens} styles={stackStyles}>
                        <ToggleField fieldname="Status" label="Status" />
                        <ToggleField fieldname="Important" label="Important" />
                    </Stack>
                    <DateField fieldname="DueDate" label="Due Date" />
                </PivotItem>
            </Pivot>
        </Stack>
    )

}