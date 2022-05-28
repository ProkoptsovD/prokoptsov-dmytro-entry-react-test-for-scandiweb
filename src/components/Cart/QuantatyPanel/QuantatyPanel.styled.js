import styled, {css} from 'styled-components';
import IconButton from '../../common/IconButton';

const commonButtonCSS = css`
    width: ${({ width }) => width || '45px'};
    height: ${({ height }) => height || '45px'};

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

export const Wrapper = styled.div``;
export const IncreaseButton = styled(IconButton)`
    ${commonButtonCSS}
`;
export const DecreaseButton = styled(IconButton)`
    ${commonButtonCSS}

    & > svg {
        width: 50%;
    }
`;
export const Quantaty = styled.span``;