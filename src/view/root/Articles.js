import React from 'react';
import Card from '../../components/molecules/cards/Card';
import MainTemplate from '../../templates/MainTemplate';

function Articles() {
return (
    <MainTemplate  pageType='article'>
        <h1> Twoje wybrane Articles </h1>
        <br></br>
        <Card cardType="article"></Card>
    </MainTemplate>
    )
}

export default Articles;
