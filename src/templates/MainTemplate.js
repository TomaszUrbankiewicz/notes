import React from 'react';
import PropType from 'prop-types'; 
import GlobalStyle from '../theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import {theme} from "../theme/mainTtheme"; 
import Sidebar from '../components/organisms/Sidebar'


function MainTemplate({children,pageType }) {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <>
                    <Sidebar pageType={pageType}/>
                    {children}
                </>
            </ThemeProvider>
        </>
    );
}

MainTemplate.PropType = {
    children: PropType.element.isRequired,
}

export default MainTemplate;
