import {DefaultTheme} from 'styled-components/native';

enum BrandColors {
  Primary = '#E35205',
  Secondary = '#F98E20',
}

enum Grey {
  Black = '#333333',
  G800 = '#5C5C5C',
  G600 = '#858585',
  G400 = '#ADADAD',
  G200 = '#D6D6D6',
  G100 = '#EBEBEB',
  Light = '#F8F8F8',
  White = '#FFFFFF',
}

export const CommonTheme: DefaultTheme = {
  color: {
    primary: BrandColors.Primary,
    secondary: BrandColors.Secondary,
    black: Grey.Black,
    g800: Grey.G800,
    g600: Grey.G600,
    g400: Grey.G400,
    g200: Grey.G200,
    g100: Grey.G100,
    light: Grey.Light,
    white: Grey.White,
  },
};
