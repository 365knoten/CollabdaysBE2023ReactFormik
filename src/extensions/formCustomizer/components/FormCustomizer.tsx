import * as React from 'react';
import { FormDisplayMode } from '@microsoft/sp-core-library';
import { FormCustomizerContext } from '@microsoft/sp-listview-extensibility';
import SPFormikForm from './formik/SPFormikForm';
import ToDoFormValidator from './ToDoFormValidator';
import ToDoForm from './ToDoForm';


export interface IFormCustomizerProps {
  context: FormCustomizerContext;
  displayMode: FormDisplayMode;
  onSave: (item: any) => Promise<void>;
  onClose: () => void;
  item: any; //<-- New  
}

export const FormCustomizer = (props: IFormCustomizerProps) => {

  return <SPFormikForm
    initialValues={props.item}
    onSave={props.onSave}
    onCancel={props.onClose}
    validator={ToDoFormValidator}
  >
    <ToDoForm />
  </SPFormikForm>
}

export default FormCustomizer;
