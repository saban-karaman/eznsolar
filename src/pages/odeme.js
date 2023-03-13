import Layout from "@/components/Layout";
import Link from "next/link";
import OdemeDetails from "../components/OdemeDetails";
import { useDispatch, useSelector } from 'react-redux'
import { selectItems, selectTotal } from '../GlobalRedux/basket/basketSlice'
import { useState } from 'react';
import axios from 'axios';


function Odeme() {
  // const dispatch = useDispatch()
  const [email, setEmail] = useState("");
  const [ad, setAd] = useState("");
  const [soyad, setSoyad] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [tel, setTel] = useState("");
  const [address, setAddress] = useState("");
  const [isPaid, setIsPaid] = useState(false)
  const [shippingPrice, setShippingPrice] = useState(100)
  const items = useSelector(selectItems);
  const total = Number(useSelector(selectTotal));





  const checkoutSession = async (e) => {
    // e.preventDefault();


    try {

      const response = await axios.post(`${process.env.API_URL}/orderList`, {
        orderItems: items.map((item) => ({
          product: item.product._id,
          name: item.product.name,
          price: item.product.price*item.dolar,
          image: item.product.image,
          quantity:item.quantity
        })),
        user: {
          ad: ad,
          soyad: soyad,
          email: email,
          tel: tel
        },
        shippingAddress: {
          address: address,
          city: city,
          country: country
        },
        shippingPrice: shippingPrice,
        totalPrice: total,
        paymentMethod: "PayTr",
        isPaid: isPaid,
        paidAt: Date()
      });
      console.log(response.data);
    } catch (error) {
      console.log(error)
    }
  }


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
                <h1>Ödeme</h1>
              </div>
              <div className="breadcrumb-menu float-right">
                <ul className="clearfix">
                  <li>
                    <Link href="/">Anasayfa</Link>
                  </li>
                  <li className="active">Ödeme</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*End breadcrumb area*/}
    
    {/*Start Checkout area*/}
    <section className="checkout-area">
    <div className="bottom">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="table">
                <div className="shop-title-box">
                  <h3>Sipariş özeti</h3>
                </div>
                <table className="cart-table">
                  <thead className="cart-header">
                    <tr>
                      <th className="product-column">Ürünler</th>
                      <th>&nbsp;</th>
                      <th>Miktar</th>
                      <th className="price">Toplam</th>
                    </tr>
                  </thead>
                  {items.map((item, i) => (
                    <OdemeDetails
                      key={i}
                      _id={item.product._id}
                      name={item.product.name}
                      price={item.product.price}
                      description={item.product.description}
                      countInStock={item.product.countInStock}
                      image={item.product.image}
                      category={item.product.category}
                      subCategory={item.product.subCategory}
                      quantity={item.quantity}
                      dolar={item.dolar}
                      detail={item.product.detail}
                    />
                  ))}
                </table>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="cart-total">
                <div className="shop-title-box">
                  <h3>Sepet</h3>
                </div>
                <ul className="cart-total-table">
                  <li className="clearfix">
                    <span className="col col-title">Sepet Ara Toplam</span>
                    <span className="col">{total.toFixed(2)} ₺</span>
                  </li>
                  <li className="clearfix">
                    <span className="col col-title">Kargo</span>
                    <span className="col">{total.toFixed(2) > 1000 ? 0 : 100} ₺</span>
                  </li>
                  <li className="clearfix">
                    <span className="col col-title">Toplam</span>
                    <span className="col">{total.toFixed(2) > 1000 ? (total.toFixed(2)) :(Number(total.toFixed(2)) + 100) } ₺</span>
                  </li>
                </ul>
                <div className="payment-options">
                  <div className="option-block">
                    <div className="checkbox">
                      <label>
                        <input name="pay-us" type="checkbox" />
                        <span>Direct Bank Transfer</span>
                      </label>
                    </div>
                    <div className="text">
                      <p>
                        Please send a check to Store Name, Store Street, Store
                        Town, Store State / County, Store Postcode.
                      </p>
                    </div>
                  </div>
                  <div className="option-block">
                    <div className="radio-block">
                      <div className="checkbox">
                        <label>
                          <input name="pay-us" type="checkbox" />
                          <span>
                            Paypal <b>What is Paypal</b>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="placeorder-button text-left">
                    <button className="btn-three" type="submit" >
                      Place Order
                      <span className="icon-null" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="form billing-info">
              <div className="shop-title-box">
                <h3>Fatura Adresi</h3>
              </div>
              <form>
                <div className="row">
                  <div className="col-md-12">
                    <div className="field-label">Ülke*</div>
                    <div className="field-input">
                      <input type="text" name="country" placeholder="" value={country} onChange={(event) => setCountry(event.target.value)} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="field-label">Ad*</div>
                    <div className="field-input">
                      <input type="text" name="ad" placeholder="" value={ad} onChange={(event) => setAd(event.target.value)} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="field-label">Soyad*</div>
                    <div className="field-input">
                      <input type="text" name="soyad" placeholder="" value={soyad} onChange={(event) => setSoyad(event.target.value)} />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="field-label">Adres*</div>
                    <div className="field-input">
                      <input type="text" name="address" placeholder="" value={address} onChange={(event) => setAddress(event.target.value)} />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="field-input">
                      <input type="text" name="address" placeholder="" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="field-label">Şehir *</div>
                    <div className="field-input">
                      <input type="text" name="city" placeholder="" value={city} onChange={(event) => setCity(event.target.value)} />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="field-label">İletişim *</div>
                    <div className="field-input">
                      <input
                        type="text"
                        name="email"
                        placeholder="Email Adresi"
                        value={email} onChange={(event) => setEmail(event.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="field-input">
                      <input
                        type="text"
                        name="tel"
                        placeholder="Telefon Numarası"
                        value={tel} onChange={(event) => setTel(event.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="create-acc">
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" name="ship-same-address" />
                          <span>Hesap Oluştur</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <button className="btn-three" onClick={checkoutSession} >
                      ÖDEME YAP
                      <span className="icon-null" />
                    </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="form shipping-info">
              <div className="shop-title-box">
                <h3>
                  Teslimat Adresi Farklı Olsun
                  <input type="checkbox" />
                </h3>
              </div>
              <form method="post" action="checkout.html">
                <div className="row">
                  <div className="col-md-12">
                    <div className="field-label">Ülke*</div>
                    <div className="field-input">
                      <input type="text" name="country" placeholder="" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="field-label">Ad*</div>
                    <div className="field-input">
                      <input type="text" name="fname" placeholder="" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="field-label">Soyad*</div>
                    <div className="field-input">
                      <input type="text" name="lname" placeholder="" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="field-label">Adres*</div>
                    <div className="field-input">
                      <input type="text" name="address" placeholder="" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="field-input">
                      <input type="text" name="address" placeholder="" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="field-label">Şehir*</div>
                    <div className="field-input">
                      <input type="text" name="town-city" placeholder="" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="field-label">Notlar</div>
                    <div className="field-input">
                      <textarea
                        name="other-notes"
                        placeholder="Siparişiniz için ek notlar..."
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*End Checkout area*/}

    </div>
</Layout>
  )
}

export default Odeme