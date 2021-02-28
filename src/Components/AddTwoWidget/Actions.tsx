import React from "react";
import styled from 'styled-components';

import Button from '../Button';

export interface WidgetActionProps {
  resetTitle: string;
  submitTitle: string;
  resetDisabled: boolean;
  submitDisabled: boolean;
  onReset: () => void;
  onSubmit: () => void;
}

export default function WidgetActions({ resetTitle, submitTitle, resetDisabled, submitDisabled, onReset, onSubmit }: WidgetActionProps): React.ReactElement {
  return (
    <ButtonFlexContainer>
      <Button isDisabled={resetDisabled} value={resetTitle} onPress={onReset} />
      <Button isDisabled={submitDisabled} value={submitTitle} onPress={onSubmit} />
    </ButtonFlexContainer>
  );
}

const ButtonFlexContainer = styled.div`
  min-width: 320px;
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  justify-self: flex-end;
  justify-content: space-between;
`;
