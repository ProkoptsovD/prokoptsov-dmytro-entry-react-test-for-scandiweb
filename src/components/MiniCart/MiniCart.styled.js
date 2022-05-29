import styled from 'styled-components';
import TextButton from '../common/TextButton';

export const OuterWrapper = styled.div`
    
`;
export const MiniCartNameWrapper = styled.div`
    margin-bottom: ${props => props.theme.spacing(8)};
    line-height: ${props => props.theme.typography.lineHeight['1.6']};
`;
export const MiniCartName = styled.b`
`;
export const TotalNumberOfItems = styled.span`
    font-weight: ${props => props.theme.typography.fontWeight['500']};
`;
export const ItemWord = styled(TotalNumberOfItems)`
`;
export const TotalPriceWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: ${props => props.theme.spacing(8)};
    margin-bottom: ${props => props.theme.spacing(8)};
`;
export const Total = styled.b`
    font-family: ${props => props.theme.typography.fontFamily['4']};
    font-weight: ${props => props.theme.typography.fontWeight['500']};
    line-height: 1.12;
`;
export const Price = styled.strong`
    line-height: ${props => props.theme.typography.lineHeight['1.6']};
`;
const StyledTextButton = styled(TextButton)`
    width: 140px;
    height: 43px;

    text-transform: uppercase;

    border: 1px solid;
    border-color: ${props => props.theme.colors.dark['300']};

    background-color: ${props => props.theme.colors.light['100']};
    color: ${props => props.theme.colors.dark['300']};

    transition: ${props => props.theme.setTransition(null, 'background-color', 'color', 'border-color', 'transform')};

    &:hover {
        border-color: ${props => props.theme.colors.accent['100']};
        background-color: ${props => props.theme.colors.accent['100']};
        color: ${props => props.theme.colors.light['100']};
    }

    &:active {
        transform: scale(0.97);
    }
`;
export const ViewBagButton = styled(StyledTextButton)`
    margin-right: ${props => props.theme.spacing(3)};
`;
export const CheckOutButton = styled(StyledTextButton)`
`;

export const CartStyles = {
    productStyles: {
        brand: {
            marginBottom: '0',
            fontSize: '16px',
            lineHeight: '1.6',
        },
        name: {
            marginBottom: '4px',
            fontSize: '16px',
            lineHeight: '1.2',
        },
        price: {
            fontWeight: '500',
            fontSize: '16px',
            lineHeight: '1.6',
            marginBottom: '8px',
        }
    },
    optionPicker: {
        optionName: {
            fontWeight: '400',
            fontSize: '14px',
        },
        typeTextSize: {
            minWidth: '24px',
            minHeight: '24px',

            fontWeight: '400',
            fontSize: '14px',
        },
        typeSwatchSize: {
            minWidth: '20px',
            minHeight: '20px',
        }
    },
}