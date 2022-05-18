export const getAllCategories = {
	query: `
        query {
      categories {
    name
  }
}
  `,
};
export const getDataToInitApp = {
	query: `
        query getDataToInitApp {
          categories {
            name
          }
          currencies {
          label,
          symbol,
        }
      }
  `,
};

export const getProductById = {
	query: `
        query getProductById($id: String!) {
          product(id: $id) {
            id,
            brand,
            name,
            inStock,
            gallery,
            description,
            prices {
              amount,
              currency {
                label,
                symbol
              }
            }
            attributes{
              id,
              name,
              type,
              items {
                id,
                displayValue,
                value
              }
            }
          } 
        }
    `,
};
export const id = JSON.stringify({ id: 'huarache-x-stussy-le' });

export const getCategoryByName = `
        query getCategoryByName($category:CategoryInput) {
          category(input:$category) {
            name,
            products {
              id,
              brand,
              name,
              inStock,
              gallery,
              prices {
                amount,
                currency {
                  label,
                  symbol
                }
              }
            }
          }
        }
`;

export const category = {
	title: { title: 'tech' },
};

export const getCurrencies = {
	query: `
      query getCurrencies {
        currencies {
          label,
          symbol,
        }
      }
`,
};
// export const query1 = {
// 	query: `
//         query {
//  categories {
//   name,
//   products {
//     id,
//     name,
//     inStock,
//     gallery,
//     description,
//     attributes {
//       id,
//       name,
//       type,
//       items {
//         displayValue,
//         value,
//         id,
//       }
//     },
//     brand,
//     prices {
//       currency {
//         label,
//         symbol
//       },
//       amount,
//     }
//   }

// }
// }
//       `,
// };