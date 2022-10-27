import React from 'react';
import Img from "../atoms/Img";
import Text from "../atoms/Text";
import styled from "styled-components";

interface ForWhoCreatedProps extends ForWhoCreatedStyledProps{
    header: string,
    description: string,
    img: any,
}

interface ForWhoCreatedStyledProps {
    flexDirection?: string,
}

const ForWhoCreatedStyled = styled.div<ForWhoCreatedStyledProps>`
  display: flex;
  flex-direction: ${props => props.flexDirection };
  align-items: center;
  padding: 30px;
  background-color: #ffffff;
  text-align: center;
  
`


const ForWhoCreated = ({header, description, img, flexDirection='column'}: ForWhoCreatedProps) => {
    return (
        <ForWhoCreatedStyled
            flexDirection={flexDirection}
        >
            <h3>{header}</h3>
            <Text fontSize={'16px'} color={'grey'}>{description}</Text>
            <Img src={img} alt={'photo'} />
        </ForWhoCreatedStyled>
    );
};

export default ForWhoCreated;
