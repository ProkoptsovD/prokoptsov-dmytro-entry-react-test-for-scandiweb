import styled from 'styled-components';
import Controls from './Controls/';

export const Wrapper = styled.div`
    position: relative;

    width: 200px;
    height: 150px;

    overflow: hidden;

`;
export const PictureList = styled.ul`
    position: relative;
    display: flex;
`;
export const ListItem = styled.li`
    position: absolute;
    inset: 0;

    opacity: ${props => props.isVisible ? '1' : '0'};
    visibility: ${props => props.isVisible ? 'visible' : 'hidden'};

    transition: ${props => props.theme.setTransition(null, 'opacity', 'visibility')};

    &__item:not(:last-child) {
        margin-bottom: 2px;
    }
`;
export const Picture = styled.img`
    
`;
export const StyledControls = styled(Controls)`
    position: absolute;
            
    right: 16px;
    bottom: 16px;
`;