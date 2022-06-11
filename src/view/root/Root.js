import React from 'react';
import GlobalStyle from '../../theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import Button from '../../components/atoms/button/Button';
import Input from '../../components/atoms/input/Input';
import {theme} from "../../theme/mainTtheme"; 




function Root() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>
          <h1> Mój pierwszy projekt w metodzie Styled components </h1>
          <Button>Close / save</Button>
          <Button secondary>rEMOVE</Button>
          <br></br>
          <br></br>
          <Input></Input>
          <Input search></Input>
        </>
      </ThemeProvider>
    </>
  );
}

export default Root;
