import styled, { css } from 'styled-components';
import TextButton from '../common/TextButton';

export const Wrapper = styled.div`
    display: block;
`;

export const OptionName = styled.b`
    display: inline-block;
    ${({ optionPickerType }) => {
        if (optionPickerType === 'default') {
            return css`
                ${({ theme }) => `
                    margin-bottom: ${theme.spacing(2)};
                    font-family: ${theme.typography.fontFamily['2']};
                    font-size: ${theme.typography.fontSize['500']};
                    font-weight: ${theme.typography.fontSize['500']};
                    text-transform: 'capitalize';
                `}
            `
        }
        if (optionPickerType === 'mini') {
            return css`
                ${({ theme }) => `
                    margin-bottom: ${theme.spacing(2)};
                    font-family: ${theme.typography.fontFamily['2']};
                    font-size: ${theme.typography.fontSize['500']};
                    font-weight: ${theme.typography.fontSize['500']};
                    text-transform: 'capitalize';
                `}
            `
        }
    }}
`;
export const OptionList = styled.ul`  
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    margin: calc(-1 * ${({ margin }) => margin || '4px'});
    & > li {
        margin: ${({ margin }) => margin || '4px'};
    }
`;
export const ListItem = styled.li`   
`;

//================== option button styles =============//
export const OptionButton = styled(TextButton)`
    ${({ optionPickerType, theme }) => {
        if (optionPickerType === 'default') {
            return css`
                font-family: ${theme.typography.fontFamily['3']};
                line-height: '1.12';
                letter-spacing: ${theme.typography.letterSpacing['5']};

                transition: ${theme.setTransition(null, 'background-color', 'color', 'outline-color')};

                ${({ optionType, theme, selected }) => {
                    if (optionType === 'text') {
                        return css`
                        min-width: '20px';
                        min-height: '20px';
                        
                        font-weight: ;
                        font-size: ${theme.typography.fontSize['500']};
        
                        border: 1px solid ${theme.colors.dark['300']};
                        cursor: initial;
                        
                        &:not(:disabled):hover {
                            cursor: pointer;
                        }
                        
                        ${selected && css`
                            background-color: ${theme.colors.dark['300']};
                            color: ${theme.colors.light['100']};
                        `}
                    `};
                    if (optionType === 'swatch') {
                        return css`
                            width: '20px';
                            height: '20px';
                            padding: 2px;
                
                            background-color: ${({value}) => value};
                            background-clip: content-box;
            
                            outline: 1px solid;
                            outline-color: transparent;
                            
                            border: none;
                            cursor: initial;
                            
                            &:not(:disabled):hover,
                            &:not(:disabled):focus,
                            &:not(:disabled):active {
                                outline-color: ${theme.colors.accent['100']};
            
                                cursor: pointer;
                            }
                            
                            ${({ selected }) => selected && css`
                                outline-color: ${theme.colors.accent['100']};
                            `}
                        `;
                    };
                }
            }
            `
        }
        if (optionPickerType === 'mini') {
            return css`
                font-family: ${theme.typography.fontFamily['3']};
                line-height: '1.12';
                letter-spacing: ${theme.typography.letterSpacing['5']};

                transition: ${theme.setTransition(null, 'background-color', 'color', 'outline-color')};

                ${({ optionType, theme, selected }) => {
                    if (optionType === 'text') {
                        return css`
                        min-width: '20px';
                        min-height: '20px';
                        
                        font-weight: ;
                        font-size: ${theme.typography.fontSize['500']};
        
                        border: 1px solid ${theme.colors.dark['300']};
                        cursor: initial;
                        
                        &:not(:disabled):hover {
                            cursor: pointer;
                        }
                        
                        ${selected && css`
                            background-color: ${theme.colors.dark['300']};
                            color: ${theme.colors.light['100']};
                        `}
                    `};
                    if (optionType === 'swatch') {
                        return css`
                            width: '20px';
                            height: '20px';
                            padding: 2px;
                
                            background-color: ${({value}) => value};
                            background-clip: content-box;
            
                            outline: 1px solid;
                            outline-color: transparent;
                            
                            border: none;
                            cursor: initial;
                            
                            &:not(:disabled):hover,
                            &:not(:disabled):focus,
                            &:not(:disabled):active {
                                outline-color: ${theme.colors.accent['100']};
            
                                cursor: pointer;
                            }
                            
                            ${({ selected }) => selected && css`
                                outline-color: ${theme.colors.accent['100']};
                            `}
                        `;
                    };
                }
            }
            `
        }
    }}`