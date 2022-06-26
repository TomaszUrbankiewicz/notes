import React from 'react';
import Card from '../../components/molecules/cards/Card';
import MainTemplate from '../../templates/MainTemplate';

function Notes() {
  return (
    <MainTemplate pageType="note">
        <h1>Twoje notatki</h1>
        <br></br>
        <Card></Card>
    </MainTemplate>
  );
}

export default Notes;
