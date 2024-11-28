import { getProductById, ProductsProps } from "@/app/data/products";
import Link from "next/link";

type ProductDetailsPageParam = {
  id: number;
};

type ProductDetailsPageProp = {
  params: ProductDetailsPageParam;
};

const ProductDetailsPage = (props: ProductDetailsPageProp) => {
  const { id } = props.params;
  const product = getProductById(Number(id));

  // Check if the product exists
  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="flex flex-col justify-center items-center p-8">
      <p className="text-5xl">{product.image}</p>
      <p>{product.name}</p>
      <p className="my-3">{product.details}</p>
      <Link className="bg-black text-white px-1 rounded" href={`/products/${id}/checkout`}>
        Buy It
      </Link>
    </div>
  );
};

export default ProductDetailsPage;
