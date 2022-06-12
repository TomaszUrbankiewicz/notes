import React from "react";
import styled, {css} from "styled-components";
import PropType from "prop-types";
import Button from "../../atoms/button/Button";
import Heading from "../../atoms/heading/Heading";
import Paragraph from "../../atoms/paragraph/Paragraph";

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

const Card = ({cardType}) => {
    return(
        <StyledWrapper>
            <InnerWrapper activeColor={cardType} >
                <Heading big>Tomek Urbankiewicz</Heading>
                <DataInfo>12.06.2022</DataInfo>
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