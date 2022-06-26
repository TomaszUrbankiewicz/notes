import React from 'react';
import Card from '../../components/molecules/cards/Card';
import MainTemplate from '../../templates/MainTemplate';


function Twitters() {
  return (
    <MainTemplate  pageType="twitter">
        <h1>Twoje wybrane wpisy Twitter</h1>
        <br></br>
        <Card cardType="twitter"></Card>
    </MainTemplate>
  );
}

export default Twitters;
