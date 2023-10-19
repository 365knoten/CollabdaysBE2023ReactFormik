import { PrimaryButton, Stack } from "@fluentui/react";
import { useFormikContext } from "formik";

import * as React from "react";

/**
 * A component that contains the "cancel" and "save" buttons on the right side of the screen
 */
export default (props: { onCancel: () => any }) => {
  const { isSubmitting,isValid } = useFormikContext();

  return (
    <div style={{ display: "flex", justifyContent: "flex-end", padding:"10px" }}>
      <Stack horizontal tokens={{ childrenGap: 40 }}>
        <PrimaryButton
          disabled={isSubmitting}
          text="Cancel"
          onClick={() => props.onCancel()}
        />
        <PrimaryButton disabled={isSubmitting || !isValid} type="submit" text="Save" />
      </Stack>
    </div>
  );
};
