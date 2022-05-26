import styled from 'styled-components';

export const OuterWrapper = styled.div`
    display: flex;
`;
export const InnerWrapper = styled.div`
    display: flex;
    margin-top: ${props => props.theme.spacing(4)};
`;