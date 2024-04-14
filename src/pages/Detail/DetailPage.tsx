import { useParams } from "react-router-dom";
import DetailHeader from "../../components/DetailHeader";
import { useEffect, useState } from "react";
import DetailProductCard from "../../components/DetailProductCard";
import { Product } from "../../types/productType";

function Detail() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | undefined>();

  useEffect(() => {
      fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
    //   TODO : 에러 처리
      .catch(err => console.log(err));
  }, [id])

    return (
        <>
            <DetailHeader />
            <DetailProductCard product={product} />
        {/* thumbnail_image, brand, title, price, description과 images 배열의 image가 표시된다. */}
        </>
    )
}

export default Detail;