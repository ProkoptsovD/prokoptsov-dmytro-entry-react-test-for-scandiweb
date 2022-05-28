import styled from 'styled-components';

export const OuterWrapper = styled.div`
    display: flex;
`;
export const InnerWrapper = styled.div``;

export const BrandName = styled.p`
    margin-bottom: ${props => props.theme.spacing(4)};
    font-weight: ${props => props.theme.typography.fontWeight['600']};
`;
export const ProductName = styled.h2`
    margin-bottom: ${props => props.theme.spacing(10)};  
    font-weight: ${props => props.theme.typography.fontWeight['400']};
`;
export const Price = styled.strong`
    display: block;

    font-size: ${({ theme }) => theme.typography.fontSize['600']};
    line-height: 0.75;
    
    text-transform: uppercase;
`;
