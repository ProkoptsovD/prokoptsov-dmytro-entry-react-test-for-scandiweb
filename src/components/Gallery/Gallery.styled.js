import styled, { css } from 'styled-components';

export const GalleryWrapper = styled.div`
    ${({ small, galleryWrapper }) => small && css`
        overflow: hidden;

        width: ${ galleryWrapper?.width || '200px' };
        height: ${ galleryWrapper?.height || '300px' };
    `}
`;
export const InnerWrapper = styled.div`
    height: 100%;

    ${({ small, innerWrapper }) => small && css`
        position: relative;

        & div:last-child {
            position: absolute;
            
            right: ${ innerWrapper?.right || '16px' };
            bottom: ${ innerWrapper?.bottom || '16px' };
        }
    `}

    ${({ large }) => large && css`
        display: flex;
    `}
`;

export const PictureList = styled.ul`
    height: 100%;
    
    ${({ small }) => small && css`
        position: absolute;
        inset: 0;

        display: flex;
    `}

    ${({ large, pictureList, theme }) => large && css`
        margin-right: ${ pictureList?.marginRight || theme.spacing(10)};
    `}
`;
export const ListItem = styled.li`
    transition: ${props => props.theme.setTransition(null, 'opacity', 'visibility')};

    ${({ small }) => small && css`
        position: absolute;
        inset: 0;

        opacity: ${props => props.isVisible ? '1' : '0'};
        visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
    `}

    ${({ large, listItem, theme }) => large && css`
        width: ${ listItem?.width || '80px'};
        height: ${ listItem?.height || '80px'};

        &:not(:last-child) {
            margin-bottom: ${ listItem?.marginBottom || theme.spacing(10)};
        }

        &:hover {
            cursor: pointer;
        }
`}
`;
export const Picture = styled.img`
    object-fit: contain;
    object-position: top;

    ${({ large }) => large && css`
        width: 100%;
        height: 100%;
    `}
`;

export const ViewPort = styled.div`
    ${({ small }) => small && css`
    position: absolute;
    inset: 0;
`}

    ${({ large, viewPort, theme }) => large && css`
        width: ${ viewPort?.width || '610px' };
        height: ${ viewPort?.height || '498px' };

        margin-top: ${ viewPort?.marginTop || theme.spacing(4)};

        & > img {
            width: 100%;
            height: 100%;
        }
    `}
`;