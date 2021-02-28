import React from 'react';
import styled from 'styled-components';

export interface ButtonProps {
  className?: string;
  value: string;
  isDisabled: boolean;
  onPress: () => void;
}

function Button({ value, onPress, className, isDisabled = false }: ButtonProps): React.ReactElement {
  return <button disabled={isDisabled} className={className} onClick={onPress}>{value}</button>
}

export default styled(Button)`
  color: #f1f1f1;
  background-color: #202020;
  text-decoration: none;
  padding: 15px 20px;
  width: 135px;
  font-size: 22px;
  font-weight: 400;
  border: none;
  border-radius: 30px;
  box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.14);
  cursor: pointer;
  outline: none;
  transition: 0.2s all; 

  &:active {
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.14); 
  }

  &:disabled{
    cursor: not-allowed;
  }
`;
