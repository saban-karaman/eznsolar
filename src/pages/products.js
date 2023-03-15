import Layout from "@/components/Layout";
import Link from "next/link";
import ProductsShow from "../components/ProductsShow";




function Products({data}) {
 

const dolar = data.USD.satis

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
        dolar={dolar}
        />
        {/*End Shop area*/}

      </div>
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