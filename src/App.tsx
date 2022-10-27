import React from 'react';
import Flex from "./components /atoms/Flex";
import Header from "./components /organisms/Header";
import MainContent from "./components /organisms/MainContent";
import Template from "./components /Template";
import Studying from "./components /organisms/Studying";

function App() {
  return (
      <Flex>
          <Header />
          <MainContent header={'Для кого розроблена програма'}/>
          <Template header={'Як проходить навчання'}>
                <Studying />
          </Template>
      </Flex>
  );
}

export default App;
