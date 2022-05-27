import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    position: relative;

    overflow: hidden;

    ${({ small, width, height }) => small && css`
        width: ${ width || '200px' };
        height: ${ height || '300px' };

        & > div {
            position: absolute;

            bottom: 16px;
            right: 16px;
        }
    `}
`;
export const PictureList = styled.ul`
    position: relative;
    display: ${({ small }) => small ? 'flex' : 'block'};

    height: 100%;
`;
export const ListItem = styled.li`
    transition: ${props => props.theme.setTransition(null, 'opacity', 'visibility')};

    ${({ small }) => small && css`
        position: absolute;
        inset: 0;

        opacity: ${props => props.isVisible ? '1' : '0'};
        visibility: ${props => props.isVisible ? 'visible' : 'hidden'};

        &:not(:last-child) {
            margin-bottom: 2px;
        }
    `}

    ${({ large, width, height, imageList }) => large && css`
        &:first-child {
            width: ${ width || '610px' };
            height: ${ height || '498px' };
        }
        ${() => {
            const step = 80;
            let num = 1;
            let pos = 0;

            return imageList.map((im) => {
                return (
                `
                &:nth-child(${num += 1}) {
                    position: absolute;
        
                    left: 0;
                    top: ${pos += step}px;
        
                    width: 80px;
                    height: 80px;
                }
                `
            )
        })}}
    `}
`;
export const Picture = styled.img`
    object-fit: contain;
    object-position: center;
`;