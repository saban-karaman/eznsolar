import Layout from '@/components/Layout';
import ProductDetails from '../components/ProductDetails';
import { useSelector } from "react-redux";
import { selectAllProducts } from "@/GlobalRedux/basket/basketSlice";
import { useSearchParams } from "next/navigation";



function Products({data}) {
  const searchParams = useSearchParams();
  const urlValue = searchParams.get('id')
  const ürünler = useSelector(selectAllProducts)
  
  const product = ürünler.filter((item)=>item._id === urlValue)
  const dolar = data.USD.satis



  return (
    <Layout> 
    <ProductDetails
      product={product[0]}
      dolar={dolar}
    />
    </Layout>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://api.genelpara.com/embed/doviz.json`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default Products

