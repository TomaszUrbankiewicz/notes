import React from "react";
import styled, {css} from "styled-components";
import { Link } from "react-router-dom";
import ButtonIcon from "../../components/atoms/button/ButtonIcon";
import icon1 from '../../assets/back.svg'
import icon2 from '../../assets/pen.svg';
import icon3 from '../../assets/light_bulb.svg';
import icon4 from '../../assets/twitter.svg';
import icon5 from '../../assets/home.svg';

const ContainerWrapper = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    background-color:${({theme}) => theme.article};
    height: 100vh;
    width: 150px;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: space-around;
`; 
const LogoWrapper = styled.div`
    width: 350px;
    height: 100px;
    background-image: url(${({icon})=>icon});
    background-repeat: no-repeat;
    background-position: 50% 50%;
`; 
const ButtonBoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-between;
`; 

const Sidebar = () => {
    return(
        <ContainerWrapper>
            <LogoWrapper icon={icon5}/>
            <ButtonBoxWrapper>
                <Link to="/notes"> <ButtonIcon icon={icon2} activeclass="active"></ButtonIcon> </Link> 
                <Link to="/article"> <ButtonIcon icon={icon3} activeclass="active"></ButtonIcon> </Link> 
                <Link to="/twitter"> <ButtonIcon icon={icon4} activeclass="active"></ButtonIcon> </Link> 
            </ButtonBoxWrapper>
            <ButtonIcon icon={icon1}></ButtonIcon>
        </ContainerWrapper>
    );
};

export default Sidebar; 