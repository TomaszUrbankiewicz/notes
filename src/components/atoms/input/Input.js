import styled, {css} from 'styled-components';
import lupa from '../../../assets/lupa.svg';

const Input = styled.input`
padding: 15px 30px;
font-size: ${({ theme }) => theme.fsize.xl};
font-weight: ${({ theme }) => theme.fweight.norm};
background-color: ${({ theme }) => theme.gray};
border: none;
border-radius: 50px;

::placeholder{
    text-transform: uppercase;
    letter-spacing: 1px;
    color:${({ theme }) => theme.fweight.gray};
}

${({search}) => 
    search && css`
        font-size: ${({ theme }) => theme.fsize.s};
        padding: 10px 20px 10px 40px;
        background-image: url(${lupa});
        background-size: 15px;
        background-position: 10px 50%;
        background-repeat: no-repeat;
    `
}
`;

export default Input