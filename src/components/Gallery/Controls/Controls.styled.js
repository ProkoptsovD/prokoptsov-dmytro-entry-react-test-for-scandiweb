import styled from 'styled-components';
import IconButton from '../../common/IconButton';

export const Wrapper = styled.div`
    display: inline-flex;
    min-width: min-content;
`;
const StyledIconButton = styled(IconButton)`
    width: ${props => props.theme.sizes.btn.xss};
    height: ${props => props.theme.sizes.btn.xss};

    padding: 2px;

    background-color: ${props => props.theme.colors.dark['400']};

    & > svg {
        width: 75%;
        height: 75%;

        color: ${props => props.theme.colors.light['100']};
    }
`;
export const PrevButton = styled(StyledIconButton)`
    margin-right: ${props => props.theme.spacing(2)};
    transform: rotate(270deg);
    
    &:active {
        filter: brightness(50);
        transform: rotate(270deg);
    }
`;
export const NextButton = styled(StyledIconButton)`
    transform: rotate(90deg);
    
    &:active {
        filter: brightness(50);
        transform: rotate(90deg);
    }
`;