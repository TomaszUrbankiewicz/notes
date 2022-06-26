import React from 'react';
import PropType from 'prop-types'; 
import GlobalStyle from '../theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import {theme} from "../theme/mainTtheme"; 


function MainTemplateLogin({children}) {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <>
                {children}
                </>
            </ThemeProvider>
        </>
    );
}

MainTemplateLogin.PropType = {
    children: PropType.element.isRequired,
}

export default MainTemplateLogin;
