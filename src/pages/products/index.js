import Layout from "@/components/Layout";
import Link from "next/link";
import ProductsShow from "../../components/ProductsShow";
// import { selectAllProducts } from '@/GlobalRedux/basket/basketSlice'
// import { useSelector } from 'react-redux'


// async function getCurrencyRate() {
//   return await (await fetch(`https://api.genelpara.com/embed/doviz.json`, { cache: 'force-cache' })).json()

// }


function Products() {
  // const ürünler = useSelector(selectAllProducts)


  // const döviz = await getCurrencyRate();

  return (
    <Layout>
      <div className="boxed_wrapper">
        <div />

        {/*Start breadcrumb area*/}
        <section
          className="breadcrumb-area"
        // style={{ backgroundImage: "url(images/resources/breadcrumb-bg.jpg)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="inner-content clearfix">
                  <div className="title float-left">
                    <h1>Ürünlerimiz</h1>
                  </div>
                  <div className="breadcrumb-menu float-right">
                    <ul className="clearfix">
                      <li>
                        <Link href="/">Anasayfa</Link>
                      </li>
                      <li className="active">Ürünlerimiz</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End breadcrumb area*/}
        {/*Start Shop area*/}
        <ProductsShow
          // ürünler={ürünler}
        // dolar={dolar}
        />
        {/*End Shop area*/}

      </div>
      </Layout>
  )
}



export default Products