import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset-advanced';
import { darken, lighten } from 'polished';

const mainBrandColor = '#00D1B2';
const lightShades = '#487C93';
const darkAccent = '#3173DC';
const darkShades = '#274550';

export const theme = {
  // It can be liberally applied to your layout as its main identity.
  mainBrandColor,
  // Accent colors can be used to bring attention to design elements
  // by contrasting with the rest of the palette.
  lightAccent: '#FFDC57',
  // Use this color as the background for your dark-on-light designs,
  // or the text color of an inverted design.
  lightShades,
  // Another accent color to consider. Not all colors have to be used -
  // sometimes a simple color scheme works best.
  darkAccent,
  // Use as the text color for dark-on-light designs,
  // or as the background for inverted designs.
  darkShades,
  dangerColor: '#f44336',
  primaryColor: mainBrandColor,
  secondryColor: lightShades,
  borderColor: '#e0e6ef',
  backgroundColor: '#eef3f6',
  backgroundInputColor: lightShades,
  backgroundInputColorDark: darkShades,
  fontSize: 16,
  fontSizeSmall: 14,
  fontSizeExtraSmall: 12,
  fontSizeMedium: 18,
  fontSizeLarge: 22,
  textColor: darkShades, // '#0A0B11',
  textColorInverse: lightShades,
  textColorLite: '#3b3b3b',
  menuTintColor: darkAccent,
  primaryFontFamily: "'Avenir Next',sans-serif",
  secondaryFontFamily: "'BebasNeueRegular', sans-serif",
  boxShadow: 'rgba(0,0,0,0.08) 0px 7px 18px',
};

const GlobalStyle = createGlobalStyle`
  ${reset};

  @font-face {
    font-family: Avenir Next ;
    src: url("../fonts/AvenirNextLTPro-It.otf") format("opentype");
}

@font-face {
  font-family: Avenir Next ;
  src: url("../fonts/AvenirNextLTPro-Bold.otf") format("opentype");
}

@font-face {
  font-family: Avenir Next ;
  src: url("../fonts/AvenirNextLTPro-Regular.otf") format("opentype");
}

  body {
    color: ${theme.textColor};
    letter-spacing: 0.03rem !important;
    font-size: 17px;
  }
  .title {
    font-family: ${theme.secondaryFontFamily};
    line-height: 2.25rem !important;
  }
  .title.is-1 {
    letter-spacing: 0.3rem !important;
  }
  .button {
    font-family: ${theme.secondaryFontFamily}
  }
  p {
    font-family: ${theme.primaryFontFamily};
    line-height: 1.5rem;
  }
  p, .title, .box {
    color: ${theme.textColor};
  }
  .subtitle {
    font-family: ${theme.primaryFontFamily};
    color: ${lighten(0.06, theme.textColor)} !important;
  }
  .button.is-primary {
    background-color: ${theme.mainBrandColor};
    transition: background-color 0.2s ease;
    :hover {
      background-color: ${darken(0.06, theme.mainBrandColor)};
    }
  }
  .button.is-secondary {
    background-color: ${theme.lightAccent};
    transition: background-color 0.2s ease;
    color: #ffffff;
    :hover {
      background-color: ${darken(0.06, theme.lightAccent)};
    }
  }
  .button.is-link {
    background-color: ${theme.backgroundInputColor};
    transition: background-color 0.2s ease;
    letter-spacing: 0.1rem !important;
    :hover {
      background-color: ${darken(0.06, theme.darkAccent)};
    }
  }
  .button, .input, .card {
    box-shadow: ${theme.boxShadow};
  }
  .has-text-warning {
    color: ${theme.lightAccent} !important;
  }
  .has-text-info{
    color:${theme.backgroundInputColor} !important;
  }
  .has-text-right{
    font-weight: 100 !important;
  }
`;

export default GlobalStyle;
