import React from 'react';
import Flex from "./components /atoms/Flex";
import Header from "./components /organisms/Header";
import MainContent from "./components /organisms/MainContent";

function App() {
  return (
      <Flex>
          <Header />
          <MainContent />
      </Flex>
  );
}

export default App;
