import styled from "styled-components";
import IconButton from "../../common/IconButton";
import TextButton from "../../common/TextButton";

export const Wrapper = styled.div`
    position: relative;

    display: flex;
    align-items: center;
    flex-direction: column;

    width: ${props => props.theme.sizes.actionBar.btn.w};
    height: ${props => props.theme.sizes.actionBar.btn.h};

    padding: 0;
`;

export const CurrencyList = styled.ul`
    width: ${props => props.theme.sizes.currencySwitcher.list.width};
`;

export const ListItem = styled.li`
    position: relative;

    width: 100%;
    height: 100%;
`;

//====================== switcher button =================//

export const OpenCloseSwitcherBtn = styled(IconButton)`
    display: flex;
    align-items: baseline;
    justify-content: space-between;

    width: 100%;
    height: 100%;

    font-family: inherit;
    font-weight: ${props => props.theme.typography.fontWeight['500']};
    font-size: ${props => props.theme.typography.fontSize['500']};
    text-align: center;

    outline: 1px solid red;

    & > svg {
        width:  ${props => props.theme.sizes.currencySwitcher.arrow.w};
        height:  ${props => props.theme.sizes.currencySwitcher.arrow.h};

        margin-top:  ${props => props.theme.spacing(2)};

        transition: ${props => props.theme.setTransition(null, 'transform')};
        transform: ${props => props.isOpened ? 'rotateX(0deg)' : 'rotateX(180deg)'};
    }
`;

export const ActualCurrency = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
`;

export const CurrencySellectionBtn = styled(TextButton)`
    width: 100%;
    height: 100%;

    padding: 17px 17px 11px 17px;;

    font-weight: ${props => props.theme.typography.fontWeight['500']};
    font-size: ${props => props.theme.typography.fontSize['500']};

    cursor: pointer;
    transition: background-color ${props => props.theme.transitions.duration.normal}
                                ${props => props.theme.transitions.function.normal};

    &:hover, &:focus {
        background-color: ${props => props.theme.colors.neutral['500']};
    }
`;