import React from "react";
import styled, {css} from "styled-components";
import PropType from "prop-types";
import Button from "../../atoms/button/Button";
import Heading from "../../atoms/heading/Heading";
import Paragraph from "../../atoms/paragraph/Paragraph";
import link from '../../../assets/link.svg';

const StyledWrapper = styled.div`
    min-height: 380px;
    box-shadow: 0 10px 30px -10px hsla(0,0%,0%,0.1);
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction:column;
`;
const InnerWrapper = styled.div`
    padding:17px 30px; 
    background-color: ${({activeColor,theme}) => (activeColor ? theme[activeColor] : 'white')};
    position: relative;
`;
const InnerWrapper2 = styled.div`
    padding:17px 30px; 
    width: 80%;
    display: flex;
    flex-grow: 3;
    flex-direction: column;
    justify-content: space-between;
`;
const DataInfo = styled(Paragraph)`
    margin: 0;
    font-weight: 600;
    font-size: 14px;
`
const StyledAvatar = styled.img`
    width: 86px;
    height: 86px;
    border: 5px solid ${({theme}) => theme.twitter};
    border-radius: 50%;
    position: absolute;
    right: 25px;
    top:35px;
    z-index: 2;
`
const StyledLink = styled.a`
    width: 75px;
    height: 75px;
    border-radius: 50%;
    background:white url(${link});
    position: absolute;
    right: 32px;
    top:20px;
`

const Card = ({cardType}) => {
    return(
        <StyledWrapper>
            <InnerWrapper activeColor={cardType} >
                <Heading big>Tomek Urbankiewicz</Heading>
                <DataInfo>12.06.2022</DataInfo>
                {cardType==='twitter' && <StyledAvatar src="https://zaira.pl/userdata/public/news/images/177.jpg" />}
                {cardType==='article' && <StyledLink href="https://github.com/TomaszUrbankiewicz" />}
            </InnerWrapper>
            <InnerWrapper2 flex>
                <Paragraph>Testowy paragraw, w projekcie gdzie używam styled components.</Paragraph>
                <Button secondary >Remove</Button>
            </InnerWrapper2>
        </StyledWrapper>
    );
};

Card.propType={
    cardType: PropType.oneOf(["note","twitter","article"]),
};

Card.defaultProps = {
    cardType: "note",
};

export default Card; 