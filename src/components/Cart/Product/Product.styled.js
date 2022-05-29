import styled from 'styled-components';

export const OuterWrapper = styled.div`
    display: flex;
`;
export const InnerWrapper = styled.div`
    margin-right: ${({ marginRight }) => marginRight || 'auto'};

    & > div:not(:last-child) {
        margin-bottom: ${({ theme, marginBottom }) => marginBottom || theme.spacing(4)};
    }
`;

export const BrandName = styled.p`
    margin-bottom: ${({ theme, marginBottom }) => marginBottom || theme.spacing(4)};
    font-weight: ${({ theme, fontWeight }) => fontWeight || theme.typography.fontWeight['600']};
    font-size: ${({ fontSize }) => fontSize};
    line-height: 0.9;
`;
export const ProductName = styled.h2`
    margin-bottom: ${({ theme, marginBottom }) => marginBottom || theme.spacing(10)};  
    font-weight: ${({ theme, fontWeight }) => fontWeight || theme.typography.fontWeight['400']};

    font-size: ${({ fontSize }) => fontSize};
    line-height: 0.9;
    `;
export const Price = styled.strong`
    display: block;

    margin-bottom: ${({ theme, marginBottom }) => marginBottom || theme.spacing(4)};

    font-size: ${({ theme, fontSize }) => fontSize || theme.typography.fontSize['600']};
    line-height: 0.75;
    
    text-transform: uppercase;
`;
