import React from "react";
import PropTypes from "prop-types";
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
  isContextModal?: boolean;
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
  isContextModal,
}: CustomFormFooterProps) {
  return (
    <CustomFormFooterStyled shouldReverse={isModal || isContextModal}>
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
interface LegacyContextProps {
  isModal?: boolean;
}

// Modal components uses legacy React context to pass `isModal` prop
const CustomFormFooterLegacyContext = (
  props: CustomFormFooterProps,
  { isModal }: LegacyContextProps,
) => <CustomFormFooter {...props} isContextModal={isModal} />;

CustomFormFooterLegacyContext.contextTypes = {
  isModal: PropTypes.bool,
};

export default CustomFormFooterLegacyContext;
