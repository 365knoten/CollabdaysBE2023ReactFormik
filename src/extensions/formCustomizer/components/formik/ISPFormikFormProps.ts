
/**
 *  The props for the SharePoint formik form
 */
export interface ISPFormikFormProps {
    /**
     * The children to render in the form
     */
    children: React.ReactNode;
    /**
     * The initial values of the form components
     */
    initialValues: any;
    /**
     *  the on cancel handler
     * @returns 
     */
    onCancel: () => void;
    /**
     *  the on save handler
     * @returns 
     */
    onSave: (item: any) => Promise<void>;

    validator: (item:any)=>any;
}