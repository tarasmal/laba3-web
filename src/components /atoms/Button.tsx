import React from 'react';
import styled from "styled-components";
import Text from "./Text";

interface Button  {
    children: string | React.ReactNode,
    onClick?: any,
}

interface StyledButton {
    width?: string ,
    height?: string,
    justifyContent?: string,
    alignItems?: string,
    backgroundColor?: string,
}
const StyledButton = styled.button<StyledButton>`
  display: flex;
  justify-content: ${props => props.justifyContent || 'center'};
  align-items: ${props => props.alignItems || 'center'};
  width: ${props => props.width || 'fit-content'};
  height: ${props => props.height || '32px'};
  background-color: black;
  color: white;
  border: hidden;
  &:hover{
    opacity: 0.5;
    cursor: pointer;
  }
`

const Button = (
    {
        children,
        onClick,
        ...props

    }: Button
) => {
    return (
        <StyledButton
            onClick={onClick}
            {...props}
        >
            <Text
                fontWeight={'500'}
                overflowWrap={'hidden'}
            >
                {children}
            </Text>
        </StyledButton>
    );
};

export default Button;
