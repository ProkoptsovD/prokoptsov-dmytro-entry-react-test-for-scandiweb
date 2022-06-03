import styled, { css } from 'styled-components';

export const GalleryWrapper = styled.div`
    ${({ galleryType }) => {
        if (galleryType === 'mini') {
            return css`
                width: 200px;
                height: 300px;
                
                overflow: hidden;
            `
        };
    }}
`;
export const InnerWrapper = styled.div`
    height: 100%;

    ${({ galleryType}) => {
                if (galleryType === 'mini') {
                    return css`
                        position: relative;
                
                        & div:last-child {
                            position: absolute;
                            
                            right: 16px;
                            bottom: 16px;
                    }`
                };
                if (galleryType === 'default') {
                    return css`
                        display: flex;
                `};
            }
        }
    }
`;

export const PictureList = styled.ul`
    height: 100%;

    ${({ galleryType, theme}) => {
            if (galleryType === 'mini') {
                return css`
                    position: absolute;
                    inset: 0;
            
                    display: flex;
                }`
            };
            if (galleryType === 'default') {
                return css`
                    margin-right: ${theme.spacing(10)};
                `
            };
        }
    }
`;
export const ListItem = styled.li`
    transition: ${({ theme }) => theme.setTransition(null, 'opacity', 'visibility')};

    ${({ galleryType, theme, isVisible }) => {
            if (galleryType === 'mini') {
                return css`
                    position: absolute;
                    inset: 0;
            
                    opacity: ${isVisible ? '1' : '0'};
                    visibility: ${isVisible ? 'visible' : 'hidden'};
                `
            };
            if (galleryType === 'default') {
                return css`
                    width: 80px;
                    height: 80px;
            
                    & > img {
                        width: 100%;
                        height: 100%;
                    }
                    &:not(:last-child) {
                        margin-bottom: ${theme.spacing(10)};
                    }
                    &:hover {
                        cursor: pointer;
                    }
                `
            };
        }
    }
`;
export const Picture = styled.img`
    object-fit: contain;
    object-position: top;
`;

export const ViewPort = styled.div`
    ${({ galleryType, theme }) => {
            if (galleryType === 'mini') {
                return css`
                    position: absolute;
                    inset: 0;
                `
            };
            if (galleryType === 'default') {
                return css`
                    width: 610px;
                    height: 498px;
            
                    margin-top: ${theme.spacing(4)};
            
                    & > img {
                        width: 100%;
                        height: 100%;
                    }
                `
            };
        }
    }
`;