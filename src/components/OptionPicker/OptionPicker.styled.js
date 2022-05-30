import styled, {css} from 'styled-components';
import TextButton from '../common/TextButton';

export const Wrapper = styled.div`
    display: ${({ display }) => display || 'block'};
`;
export const OptionName = styled.b`
    display: inline-block;
    margin-bottom: ${({ theme, marginBottom }) => marginBottom || theme.spacing(2)};

    font-family: ${({ theme, fontFamily }) => fontFamily || theme.typography.fontFamily['2']};
    font-size: ${({ theme, fontSize }) => fontSize || theme.typography.fontSize['500']};
    font-weight: ${({ theme, fontWeight }) => fontWeight || theme.typography.fontSize['500']};

    text-transform: ${({ textTransform }) => textTransform || 'capitalize'};
`;
export const OptionList = styled.ul`
    display: ${({ display }) => display || 'flex'};
    flex-wrap: ${({ flexWrap} ) => flexWrap || 'wrap'};
    align-items: ${({ alignItems }) => alignItems || 'center'};

    margin: calc(-1 * ${({ margin }) => margin || '4px'});

    & > li {
        margin: ${({ margin }) => margin || '4px'};
    }
`;
export const ListItem = styled.li`   
`;

//================== option button styles =============//
export const OptionButton = styled(TextButton)`
    font-family: ${({ theme, fontFamily }) => fontFamily || theme.typography.fontFamily['3']};
    line-height: ${({ lineHeight }) => lineHeight || '1.12'};
    letter-spacing: ${({ theme, letterSpacing }) => letterSpacing || theme.typography.letterSpacing['5']};

    transition: ${({ theme }) => theme.setTransition(null, 'background-color', 'color', 'outline-color')};

    ${({optionType}) => {
        if (optionType === 'text') {
            return css`
                min-width: ${({ typeTextSize }) => typeTextSize?.minWidth || '20px'};
                min-height: ${({ typeTextSize }) => typeTextSize?.minHeight || '20px'};
                
                font-weight: ${({ typeTextSize }) => typeTextSize?.fontWeight};
                font-size: ${({ typeTextSize }) => typeTextSize?.fontSize};

                border: 1px solid ${({ theme }) => theme.colors.dark['300']};
                cursor: initial;

                &:not(:disabled) &:focus,
                &:not(:disabled) &:active {
                    background-color: ${({ theme }) => theme.colors.dark['300']};
                    color: ${({ theme }) => theme.colors.light['100']};

                    cursor: pointer;
                }
                
                ${({ selected }) => selected && css`
                    background-color: ${({ theme }) => theme.colors.dark['300']};
                    color: ${({ theme }) => theme.colors.light['100']};
                `}
            `;
        };
        if (optionType === 'swatch') {
            return css`
                min-width: ${({ typeSwatchSize }) => typeSwatchSize?.minWidth || '20px'};
                min-height: ${({ typeSwatchSize}) => typeSwatchSize?.minHeight || '20px'};

                padding: 2px;
    
                background-color: ${({value}) => value};
                background-clip: content-box;

                outline: 1px solid;
                outline-color: transparent;
                
                border: none;
                cursor: initial;
                
                &:not(:disabled) &:focus,
                &:not(:disabled) &:active {
                    outline-color: ${({ theme }) => theme.colors.accent['100']};

                    cursor: pointer;
                }
                
                ${({ selected }) => selected && css`
                    outline-color: ${({ theme }) => theme.colors.accent['100']};
                `}
            `;
        };
    }}
`;
