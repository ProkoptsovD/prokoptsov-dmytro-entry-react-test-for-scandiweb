import styled, {css} from 'styled-components';
import TextButton from '../common/TextButton';

const textTypeMixin = css`

`;
const swatchTypeMixin = css`
    
`;

export const Wrapper = styled.div`
    display: inline-block;
`;
export const OptionName = styled.b`
    display: inline-block;
    margin-bottom: 8px;

    font-family: ${props => props.theme.typography.fontFamily['2']};
    font-size: ${props => props.theme.typography.fontSize['500']};

    text-transform: uppercase;
`;
export const OptionList = styled.ul`
    ${props => props.theme.optionGrid('4px')}
`;
export const ListItem = styled.li`
    
`;
export const OptionButton = styled(TextButton)`
    min-width: ${props => props.sizeW || '20px'};
    min-height: ${props => props.sizeH || '20px'};
`;