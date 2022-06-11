import styled from 'styled-components';

const Paragraph = styled.p`
font-size: ${({ theme }) => theme.fsize.l};
font-weight: ${({ theme }) => theme.fweight.norm};
`;

export default Paragraph