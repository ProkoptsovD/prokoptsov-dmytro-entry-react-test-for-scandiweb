import styled from 'styled-components';

export const OuterWrapper = styled.div`
    display: flex;
`;
export const InnerWrapper = styled.div`
    display: flex;
    margin-top: ${props => props.theme.spacing(4)};
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
    }
};