import styled, {css} from 'styled-components'

const ButtonIcon = styled.button`
    width: 65px;
    height: 65px;
    background-color: white;
    border-radius: 20px;
    background-image: url(${({icon})=>icon});
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 40%;
    border: none;
    &:hover{
        background-color: ${({ theme }) => theme.tertiary};
    }
`;

export default ButtonIcon;