const products = [
  {
    id: 1,
    image: "⌚",
    name: "watch",
    details: "But this watch for 156 INR",
  },
  {
    id: 2,
    image: "🥒",
    name: "Cucumber",
    details: "2 kgs for 56 INR",
  },
  {
    id: 3,
    image: "💻",
    name: "laptop",
    details: "But this laptop for 1156 INR",
  },
];

export interface ProductsProps {
    id: number;
    image: string;
    name: string;
    details: string;
}

export const getAllProducts = () => {
  return products;
};

export const getProductById = (id: number):ProductsProps | undefined => {
  const found = products.find((product) => product.id === id);
  return found;
};
