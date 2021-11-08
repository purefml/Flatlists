import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {

    //Primary / Secondary Colors
    backgroundColor: "black",
    brownishRed: "#c72b16",
    red: "#f54949",
    yellow: '#f4a202',
    green: '#1db954',
    blue: "#4096FE",

    //White Shades
    white: "#fff",
    white2: '#F9F9F9',

    black: "#020202",
    lightBlack: "#0e1111",
    softBlack : "#191919",

    //Gray / Grey Shades
    gray: "#777777",
    gray2: '#F8F8F8',
    gray3: '#707070',
    lightGray: "#F5F6FB",
    lightGray2: '#ebebeb',

    //Transparents
    transparent: 'transparent',
    transparentGray: 'rgba(77,77,77, 0.8)',
    transparentBlack1: 'rgba(2, 2, 2, 0.1)',
    transparentBlack3: 'rgba(2, 2, 2, 0.3)',
    transparentBlack5: 'rgba(2, 2, 2, 0.5)',
    transparentBlack7: 'rgba(2, 2, 2, 0.7)',
    transparentBlack9: 'rgba(2, 2, 2, 0.9)',
    transparentDarkGray: 'rgba(20,20,20, 0.9)',
};
export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    // font sizes
    largeTitle: 40,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};

export const FONTS = {
    light: "Montserrat-Light",
    regular: "Alata-Regular",
    bold: "Montserrat-Bold",
    lightItalic: "Montserrat-LightItalic",
    italic: "Sarina-Regular",
    boldItalic: "Montserrat-BoldItalic",
    cursive: 'Streetwear'
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
