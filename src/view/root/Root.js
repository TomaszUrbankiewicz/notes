import React from 'react';
import GlobalStyle from '../../theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import Button from '../../components/atoms/button/Button';
import Input from '../../components/atoms/input/Input';
import ButtonIcon from "../../components/atoms/button/ButtonIcon";
import Carts from '../../components/molecules/cards/Cards';
import {theme} from "../../theme/mainTtheme"; 
import icon1 from '../../assets/back.svg'
import icon2 from '../../assets/pen.svg';
import icon3 from '../../assets/light_bulb.svg';
import icon4 from '../../assets/plus.svg';
import icon5 from '../../assets/twitter.svg';

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
          <br></br>
          <br></br>
          <ButtonIcon icon={icon1}></ButtonIcon>
          <br></br>
          <ButtonIcon icon={icon2}></ButtonIcon>
          <br></br>
          <ButtonIcon icon={icon3}></ButtonIcon>
          <br></br>
          <ButtonIcon icon={icon4}></ButtonIcon>
          <br></br>
          <ButtonIcon icon={icon5}></ButtonIcon>
          <br></br>
          <br></br>
          <br></br>
          <Carts></Carts>
        </>
      </ThemeProvider>
    </>
  );
}

export default Root;
