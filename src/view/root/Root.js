import React from 'react';
import MainTemplate from '../../templates/MainTemplate';
import Button from '../../components/atoms/button/Button';
import Input from '../../components/atoms/input/Input';
import ButtonIcon from "../../components/atoms/button/ButtonIcon";
import Card from '../../components/molecules/cards/Card';
import { BrowserRouter } from 'react-router-dom';
import icon1 from '../../assets/back.svg'
import icon2 from '../../assets/pen.svg';
import icon3 from '../../assets/light_bulb.svg';
import icon4 from '../../assets/plus.svg';
import icon5 from '../../assets/twitter.svg';

function Root() {
  return (
    <MainTemplate>
      <BrowserRouter>
        <Button>Notes</Button>
        <Button>Twitter</Button>
        <Button>Article</Button>
      </BrowserRouter>
    </MainTemplate>
  );
}

export default Root;
{/* <h1> Mój pierwszy projekt w metodzie Styled components </h1>
        <Button>Close / save</Button>
        <Button secondary>rEMOVE</Button>
        <br></>
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
        <Card></Card>
        <br></br>
        <Card cardType="twitter"></Card>
        <br></br>
        <Card cardType="article"></Card> */}