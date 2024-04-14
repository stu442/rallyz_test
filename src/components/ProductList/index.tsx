import ProductCard from "../ProductCard";
import { MoreBtn, ProdcutWrapper } from "./style";
import { useRecoilState } from "recoil";
import { Product } from "../../types/productType";
import { pageState, productState, totalProductsState } from "../../atoms/productState";
import { useParams } from "react-router-dom";
import useFetchProducts from "../../hooks/useFetchProducts";

export default function ProductList() {
  // TODO : 모든 API 호출에 Loading 붙이기
  const [products, setProducts] = useRecoilState<Product[]>(productState);
  const [page, setPage] = useRecoilState<number>(pageState);
  const [totalProducts, setTotalProducts] = useRecoilState<number>(totalProductsState);
  const LIMIT = 10;
  const { keyword } = useParams();
  useFetchProducts(keyword ? `https://dummyjson.com/products/search?q=${keyword}&limit=${LIMIT}&skip=${page * LIMIT}` : `https://dummyjson.com/products?limit=${LIMIT}&skip=${page * LIMIT}`);

  function fetchMoreProducts(url:string) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPage((prevPage) => prevPage + 1);
        setProducts((prev) => [...prev, ...data.products]);
        setTotalProducts(data.total);
      })
      // TODO : 에러 처리
      .catch((err) => console.log(err));
  }

  const loadMore = () => {
    if(keyword) {
      fetchMoreProducts(`https://dummyjson.com/products/search?q=${keyword}&limit=${LIMIT}&skip=${(page + 1) * LIMIT}`)
      return
    }
    fetchMoreProducts(`https://dummyjson.com/products?limit=${LIMIT}&skip=${(page + 1) * LIMIT}`)
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
        <MoreBtn onClick={loadMore}>더보기</MoreBtn>
      )}
    </>
  );
}
