import React from 'react';
import PropType from 'prop-types'; 
import GlobalStyle from '../theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import {theme} from "../theme/mainTtheme"; 
import Sidebar from '../components/organisms/Sidebar'


function MainTemplate({children}) {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <>
                {children}
                <Sidebar/>
                </>
            </ThemeProvider>
        </>
    );
}

MainTemplate.PropType = {
    children: PropType.element.isRequired,
}

export default MainTemplate;
