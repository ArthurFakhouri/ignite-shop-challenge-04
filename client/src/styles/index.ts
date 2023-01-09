import { createStitches } from '@stitches/react';

export const {
    config, 
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme
} = createStitches({
    theme: {
        colors: {
            white: '#FFF',
            gray900: '#121214',
            gray800: '#202024',
            gray700: '#2e2e31',
            gray600: '#8d8d99',
            gray300: '#c4c4cc',
            gray100: '#e1e1e6',

            green500: '#00b37e',
            green300: '#00875f',

            red: '#d02836',
        },

        fontSizes: {
            sm: '.875rem',
            md: '1.125rem',
            lg: '1.25rem',
            xl: '1.5rem',
            '2xl': '2rem',
        },
    }
})