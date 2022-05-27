export const makeOptionGrid = (marginSize) => {
    return `
        display: flex;
        flex-wrap: wrap;
        align-items: center;

        margin: calc(-1 * ${marginSize});

        & > li {
            margin: ${marginSize};
        }
    `;
}