import React from "react";
import { t } from "ttag";

import Button from "metabase/core/components/Button";

import CustomFormMessage from "../CustomFormMessage";
import CustomFormSubmit from "../CustomFormSubmit";
import { CustomFormFooterStyled } from "./CustomFormFooter.styled";

export interface CustomFormFooterProps {
  submitTitle?: string;
  cancelTitle?: string;
  fullWidth?: boolean;
  isModal?: boolean;
  footerExtraButtons?: React.ReactElement[];
  onCancel?: () => void;
}

function CustomFormFooter({
  submitTitle = t`Submit`,
  cancelTitle = t`Cancel`,
  onCancel,
  footerExtraButtons,
  fullWidth,
  isModal,
}: CustomFormFooterProps) {
  return (
    <CustomFormFooterStyled shouldReverse={isModal}>
      <CustomFormSubmit fullWidth={fullWidth}>{submitTitle}</CustomFormSubmit>
      {onCancel && (
        <Button className="mx1" type="button" onClick={onCancel}>
          {cancelTitle}
        </Button>
      )}
      <CustomFormMessage className="mt1" />
      {footerExtraButtons}
    </CustomFormFooterStyled>
  );
}

export default CustomFormFooter;
