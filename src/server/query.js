export const query = {
	query: `
        query {
 categories {
  name,
  products {
    id,
    name,
    inStock,
    gallery,
    description,
    attributes {
      id,
      name,
      type,
      items {
        displayValue,
        value,
        id,
      }
    },
    brand,
    prices {
      currency {
        label,
        symbol
      },
      amount,
    }
  }

}
}
      `,
};
