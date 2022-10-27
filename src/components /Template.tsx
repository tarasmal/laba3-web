import React, {ReactNode} from 'react';
import Flex from "./atoms/Flex";
import styled from "styled-components";

interface TemplateProps {
    header: string,
    children: ReactNode
}

const TemplateStyled = styled(Flex)`
  background-color: rgba(105, 105, 105, 0.1);
  align-items: center;
  padding: 30px;
`

const Template = ({header, children}: TemplateProps) => {
    return (
        <TemplateStyled>
            <h2>{header}</h2>
            {children}
        </TemplateStyled>
    );
};

export default Template;
