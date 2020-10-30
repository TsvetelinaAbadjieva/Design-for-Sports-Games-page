import React from 'react';
import styled, {
    createGlobalStyle,
    ThemeProvider
} from 'styled-components';
import backgroundCircles from './styled_components/assets/background-circles.jpg';

import footballImage from './styled_components/assets/football.jpg';
import casinoImage from './styled_components/assets/casino.jpg';
import iconCategory1 from './styled_components/assets/icon-category1.jpg';
import iconCategory2 from './styled_components/assets/icon-category2.jpg';
import promo1 from './styled_components/assets/promotion1.jpg';
import promo2 from './styled_components/assets/promotion2.jpg';
import provider from './styled_components/assets/games-provider.jpg';

// const GlobalStyle = createGlobalStyle `
//     $main-color: #282c34;
//     $navigation-background:darken($main-color, 20%);
//     $base-font-color:#a2a2a2;
//     $accent-font-color:white;

// `
const theme = {
    games: {
        background: backgroundCircles,
        footballImage:footballImage,
        casinoImage:casinoImage
    },
    categories:{
        src1:iconCategory1,
        src2:iconCategory2,
    },
    promotions:{
        promo1:promo1,
        promo2:promo2
    },
    providers:{
        provider:provider
    }
}
export default theme;