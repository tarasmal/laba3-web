import React from 'react';
import Flex from "../atoms/Flex";

import styled from "styled-components";
import ForWhoSection from "./ForWhoSection";

interface MainContentProps {
    header: string,
}

const MainContentStyled = styled(Flex)`
  background-color: rgba(105, 105, 105, 0.1);
  align-items: center;
  padding: 30px;
`

const MainContent = ({header}: MainContentProps) => {

    return (
        <MainContentStyled>
            <h2>{header}</h2>
            <ForWhoSection />
        </MainContentStyled>
    );
};

export default MainContent;
