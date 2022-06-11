import styled from 'styled-components';

const Heading = styled.h1`
font-size: ${({ theme,big }) => (big ? theme.fsize.xl : theme.fsize.l)};
font-weight: ${({ theme }) => theme.fweight.norm};
`;

export default Heading