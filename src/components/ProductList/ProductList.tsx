import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { ProdcutWrapper } from "./style";
import { useRecoilState } from "recoil";
import { Product } from "../../types/productType";
import { productState } from "../../atoms/productState";
import { useParams } from "react-router-dom";

export default function ProductList() {
  const [products, setProducts] = useRecoilState<Product[]>(productState);
  const [page, setPage] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const LIMIT = 10;
  const { keyword } = useParams();

  useEffect(() => {
    console.log(keyword);
    fetch(`https://dummyjson.com/products?limit=${LIMIT}&skip=${page * LIMIT}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts((prev) => [...prev, ...data.products]);
        setTotalProducts(data.total);
      })
      .catch((err) => console.log(err));
  }, [page]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <ProdcutWrapper>
        {products.map((product: Product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            id={product.id}
            image={product.thumbnail}
            brand={product.brand}
            price={product.price}
          />
        ))}
      </ProdcutWrapper>
      {products.length < totalProducts && (
        <button onClick={loadMore}>더보기</button>
      )}
    </>
  );
}
