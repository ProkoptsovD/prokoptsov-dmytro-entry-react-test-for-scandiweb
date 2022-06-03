import styled from 'styled-components';
import { AddToCartButton } from '../ProductCard/ProductCard.styled';

export const CartWrapper = styled.div``;
export const AddedProductList = styled.ul`
`;
export const ListItem = styled.li`
    position: relative;

    padding-top: ${({ theme }) => theme.spacing(6)};
    padding-bottom: ${({ theme }) => theme.spacing(8)};

    &:first-child {
        border-top: 1px solid  ${({ theme }) => theme.colors.neutral['400']};
        border-bottom: 1px solid  ${({ theme }) => theme.colors.neutral['400']};
    }
    &:not(:first-child) {
        border-bottom: 1px solid  ${({ theme }) => theme.colors.neutral['400']};
    }
    &:last-child {
        margin-bottom: ${({ theme }) => theme.spacing(8)};
    }
`;
export const OrderButton = styled(AddToCartButton)`
    min-width: ${({ minWidth }) => minWidth || '280px'};
    min-height: ${({ minHeight }) => minHeight || '43px'};
    
    width: 0;

    margin-top: ${({ theme }) => theme.spacing(4)};
`;

// ================== product styles =========================//

export const OptionPickerStyles = {
    typeTextSize: {
        minWidth: '63px',
        minHeight: '45px',
    },
    typeSwatchSize: {
        minWidth: '36px',
        minHeight: '36px',
    }
}

export const ProductStyles = {
    brand: {
        marginBottom: '16px',
        fontSize: '30px',
    },
    name: {
        marginBottom: '20px',
        fontSize: '30px',
    },
    price: {
        marginBottom: '20px',
    }
}