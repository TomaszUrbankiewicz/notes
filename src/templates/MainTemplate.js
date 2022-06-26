import React from 'react';
import PropType from 'prop-types'; 
import GlobalStyle from '../theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import {theme} from "../theme/mainTtheme"; 


function MainTemplate({children}) {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </>
    );
}

MainTemplate.PropType = {
    children: PropType.element.isRequired,
}

export default MainTemplate;
