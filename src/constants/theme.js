export const theme = {
    colors: {
        accent: {
            '100': '#5ECE7B',
        },
        dark: {
            '100': '#8D8F9A',
            '200': '#43464E',
            '300': '#1D1F22',
            '400': '#000000ba',
        },
        light: {
            '100': '#ffffff',
            '200': '#ffffff80',
        },
        neutral: {
            '300': '#39374838',
            '400': '#E5E5E5',
            '500': '#EEEEEE',
            '600': '#C4C4C4',
        },
    },
    typography: {
        fontFamily: {
            '1': 'Raleway, sans-serif',
            '2': 'Roboto Condensed, sans-serif',
            '3': 'Source Sans Pro, sans-serif',
            '4': 'Roboto, sans-serif',
        },
        fontWeight: {
            '300': 300,
            '400': 400,
            '500': 500,
            '600': 600,
            '700': 700,
        },
        fontSize: {
            '300': '14px',
            '400': '16px',
            '500': '18px',
            '600': '24px',
            '700': '30px',
            '750': '32px',
            '800': '42px',
        },
        lineHeight: {
            '1': 1,
            '1.2': 1.2,
            '1.6': 1.6,
        },
        letterSpacing: {
            '5': '5%',
        }
    },
    shadows: {
        v1: '0px 4px 35px rgba(168, 172, 176, 0.19)',
    },
    transitions: {
        duration: {
            normal: '250ms',
            fast: '150ms',
        },
        function: {
            normal: 'cubic-bezier(0.4, 0, 0.2, 1)',
        },
    },
    setTransition: (flag, ...cssPropNames) => {
        let duration = '';
        switch (flag) {
            case 'fast':
                duration = '150';
                break;
            default:
                duration = '250';
                return;
        }

        return cssPropNames.map(propName => `${propName} ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`).join`, `;
    },
    sizes: {
        header: {
            height: '80px',
        },
        actionBar: {
            btn: {
                w: '38px',
                h: '29px',
            },
        },
        currencySwitcher: {
            list: {
                width: '114px',
            },
            arrow: {
                w: '6px',
                h: '3px',
            }
        },
        btn: {
            xs: '20px',
            sm: '32px',
            m: '40px',
            lg: '52px',
        }
    },
    spacing: (value) => `${4 * value}px`,
}