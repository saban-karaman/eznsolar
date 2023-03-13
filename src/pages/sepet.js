import Layout from '@/components/Layout';
import { useSelector } from 'react-redux'
import { selectItems, selectTotal } from '../GlobalRedux/basket/basketSlice';
import SepetDetail from "../components/SepetDetail";
import Link from 'next/link';


function Sepet() {
  
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const tutar=Number(total.toFixed(2))

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
                  <h1>Sepetim</h1>
                </div>
                <div className="breadcrumb-menu float-right">
                  <ul className="clearfix">
                    <li>
                      <Link href="/">Anasayfa</Link>
                    </li>
                    <li className="active">Sepetim</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End breadcrumb area*/}
      <section className="cart-area">
        {items.length === 0 ? <h3 >Sepetinizde Ürün Bulunmamaktadır.</h3> :
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">

                <div className="table-outer">
                  <table className="cart-table">
                    <thead className="cart-header">
                      <tr>
                        <th className="prod-column">Ürünler</th>
                        <th>&nbsp;</th>
                        <th>Adet</th>
                        <th className="availability">Stok Durumu</th>
                        <th className="price">Fiyat</th>
                        <th>Toplam</th>
                        <th>Sil</th>
                      </tr>
                    </thead>
                    {items.map((item, i) => (
                      <SepetDetail
                        key={i}
                        _id={item.product._id}
                        name={item.product.name}
                        price={item.product.price}
                        description={item.product.description}
                        countInStock={item.product.countInStock}
                        image={item.product.image}
                        category={item.product.category}
                        quantity={item.quantity}
                        dolar={item.dolar}
                        detail={item.product.detail}
                      />
                    ))}
                  </table>
                </div>
              </div>
            </div>
            <div className="row cart-bottom">
              {/*Start cart total */}
              <div className="col-xl-6 col-lg-7 col-md-12 col-sm-12">
                <div className="cart-total">
                  <div className="shop-title-box">
                    <h3>TOPLAM</h3>
                  </div>
                  <ul className="cart-total-table">
                    <li className="clearfix">
                      <span className="col col-title">Ürün Toplamı</span>
                      <span className="col">{tutar} ₺</span>
                    </li>
                    <li className="clearfix">
                      <span className="col col-title">Kargo</span>
                      <span className="col">{tutar > 1000 ? 0 : 100} ₺</span>
                    </li>
                    <li className="clearfix">
                      <span className="col col-title">Sipariş Toplamı</span>
                      <span className="col">{tutar > 1000 ? (tutar) :(tutar + 100) } ₺</span>
                    </li>
                  </ul>
                  <Link href="/odeme">
                    <div className="row cart-middle">
                      <div className="update-cart pull-right">
                        <button className="btn-three" type="button">
                          SEPETİ ONAYLA
                          <span className="icon-null" />
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              {/*End cart total */}
            </div>
          </div>
        }
      </section>
    </div>
    </Layout>
  )
}

export default Sepet;

