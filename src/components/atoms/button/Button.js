import styled, {css} from 'styled-components'

const Button = styled.button`
    background-color: ${(props)=>props.theme.note};
    width: 220px;
    height: 47px;
    border: none;
    border-radius: 50px;
    font-family: "Montserrat";
    font-weight: 600;
    font-size: 16px;
    text-transform: uppercase;
    
    

    ${({secondary}) => ( 
    secondary && css`
    background-color: ${(props)=>props.theme.gray};
    width: 105px;
    height:30px;
    border-radius: 50px;
    font-size: 10px;
    ` )}

    :hover{
        cursor: pointer;
    }
`;

export default Button;