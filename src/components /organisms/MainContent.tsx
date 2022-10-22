import React from 'react';
import Flex from "../atoms/Flex";

import styled from "styled-components";

const MainContentStyled = styled(Flex)`
  background-color: rgba(105, 105, 105, 0.1);
  align-items: center;
`

const MainContent = () => {
    return (
        <MainContentStyled>
            <h2>Для кого розроблена програма</h2>
        </MainContentStyled>
    );
};

export default MainContent;
