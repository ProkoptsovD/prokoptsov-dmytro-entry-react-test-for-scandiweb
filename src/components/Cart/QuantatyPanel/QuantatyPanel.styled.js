import styled, {css} from 'styled-components';
import IconButton from '../../common/IconButton';

const commonButtonCSS = css`
    width: ${({ common }) => common?.width || '45px'};
    height: ${({ common }) => common?.height || '45px'};

    border: 1px solid ${({ theme }) => theme.colors.dark['300']};

    & > svg {
        width: 75%;
        height: 75%;
        
        fill: ${({ theme }) => theme.colors.dark['300']};
    }

    &:active {
        transform: scale(1);
        box-shadow: inset 0px 0px 7px #c1c1c1;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${props => props.vertical && css`
        flex-direction: column;
    `}
`;
export const IncreaseButton = styled(IconButton)`
    ${commonButtonCSS}
`;
export const DecreaseButton = styled(IconButton)`
    ${commonButtonCSS}

    & > svg {
        width: 50%;
    }
`;
export const DisplayedQuantaty = styled.span`
    display: block;

    font-weight: ${({ theme, fontWeight }) => fontWeight || theme.typography.fontWeight['500']};
    font-size: ${({ theme, fontSize }) => fontSize || theme.typography.fontSize['600']};
    line-height: ${({ theme, lineHeight }) => lineHeight || theme.typography.lineHeight['1.6']};
    text-align: center;
    `;