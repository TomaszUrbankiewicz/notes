import React from 'react';
import Card from '../../components/molecules/cards/Card';

function Twitters() {
  return (
    <MainTemplate>
        <h1>Twoje wybrane wpisy Twitter</h1>
        <br></br>
        <Card cardType="twitter"></Card>
    </MainTemplate>
  );
}

export default Twitters;
