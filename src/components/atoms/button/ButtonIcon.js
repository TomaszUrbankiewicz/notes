import styled, {css} from 'styled-components';

const ButtonIcon = styled.button`
    width: 65px;
    height: 65px;

    border-radius: 20px;
    background-image: url(${({icon})=>icon});
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 40%;
    border: none;
    background-color: ${({activeColor,theme}) => (activeColor ? theme[activeColor] : theme.note)};
    :hover{
        background-color: white;
        cursor: pointer;
    }
`;

export default ButtonIcon