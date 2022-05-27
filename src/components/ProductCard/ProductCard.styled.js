import styled from 'styled-components';
import TextButton from '../common/TextButton';

export const OuterWrapper = styled.div`
    display: flex;
`;
export const InnerWrapper = styled.div`
    width: 292px; 

    margin-top: ${({ theme }) => theme.spacing(4)};

    & ul:not(:last-child) {
        margin-bottom: ${({ theme }) => theme.spacing(5)};
    }
    & ul:last-child {
        margin-bottom: ${({ theme }) => theme.spacing(10)};
    }
    & strong:last-of-type {
        margin-bottom: ${({ theme }) => theme.spacing(5)};
    }
    & :last-child {
        font-family: ${({ theme }) => theme.typography.fontFamily['4']};
        line-height: ${({ theme }) => theme.typography.lineHeight['1.6']};
    }
`;

export const AddToCartButton = styled(TextButton)`
    width: 100%;
    min-height: 52px;

    margin-bottom: ${({ theme }) => theme.spacing(9)};
    text-transform: uppercase;

    background-color: ${({ theme }) => theme.colors.accent['100']};
    color: ${({ theme }) => theme.colors.light['100']};

    transition: ${({ theme }) => theme.setTransition('fast', 'background-color', 'color', 'transform')};
    
    &:active {
        transform: scale(0.95);
    }
`;

export const OptionPickerStyles = {
    optionName: {
        textTransform: 'uppercase',
    },
    optionButton: {
        typeTextSize: {
            minWidth: '63px',
            minHeight: '44px',
        },
        typeSwatchSize: {
            minWidth: '34px',
            minHeight: '34px',
        },
    },
};