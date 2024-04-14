import { useRecoilState } from "recoil";
import { productState, totalProductsState } from "../atoms/productState";
import { Product } from "../types/productType";
import { useEffect, useState } from "react";

function useFetchProducts(url:string) {
  const [products, setProducts] = useRecoilState<Product[]>(productState);
  const [totalProducts, setTotalProducts] = useRecoilState<number>(totalProductsState);

  useEffect(() => {
      if (products.length > 0) {
          return;
      }
      fetch(url)
          .then((res) => res.json())
          .then((data) => {
              setProducts(data.products);
              setTotalProducts(data.total);
          })
          // TODO : 에러 처리
          .catch((err) => console.log(err));
  }, [url])
}

export default useFetchProducts