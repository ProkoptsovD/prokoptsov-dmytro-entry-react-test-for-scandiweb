import styled from 'styled-components';

export const Wrapper = styled.div`
    position: fixed;
    inset: ${props => props.theme.sizes.header.height} 0 0 0;

    padding-right: ${props => props.theme.spacing(18)};
    padding-bottom: ${props => props.theme.spacing(5)};

    background-color: ${props => props.theme.colors.neutral['300']};

    overflow-y: scroll;
    scroll-behavior: smooth;
`;
export const Modal = styled.div`
    width: ${props => props.theme.sizes.modal.w};

    margin-left: auto;
    padding: ${props => props.theme.spacing(8)} ${props => props.theme.spacing(4)};

    background-color: ${props => props.theme.colors.light['100']};

    pointer-events: all;
`;
