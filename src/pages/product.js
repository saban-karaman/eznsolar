import Layout from '@/components/Layout';
import ProductDetails from '../components/ProductDetails';
import { useSelector } from "react-redux";
import { selectAllProducts } from "@/GlobalRedux/basket/basketSlice";
import { useSearchParams } from "next/navigation";



function Products() {
  const searchParams = useSearchParams();
  const urlValue = searchParams.get('id')
  const ürünler = useSelector(selectAllProducts)
  
  const product = ürünler.filter((item)=>item._id === urlValue)




  return (
    <Layout>
    {product && 
    <ProductDetails
      product={product[0]}
    />}
    </Layout>
  )
}

export default Products

