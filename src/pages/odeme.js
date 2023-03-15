import Layout from "@/components/Layout";
import Link from "next/link";
import OdemeDetails from "../components/OdemeDetails";
import { useDispatch, useSelector } from 'react-redux'
import { selectItems, selectTotal } from '../GlobalRedux/basket/basketSlice'
import { useState, useEffect } from 'react';
import axios from 'axios';
import turkiye from "../lib/turkiye.json"


function Odeme() {
  // const dispatch = useDispatch()
  const [email, setEmail] = useState("");
  const [ad, setAd] = useState("");
  const [soyad, setSoyad] = useState("");
  const [tc, setTc] = useState(11111111111);
  const [vergiDaire, setVergiDaire] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [tel, setTel] = useState("");
  const [address, setAddress] = useState("");
  const [isPaid, setIsPaid] = useState(false)
  const [shippingPrice, setShippingPrice] = useState(100)
  const items = useSelector(selectItems);
  const total = Number(useSelector(selectTotal));
  const [checked, setChecked] = useState(false)
  const [checkedTeslimat, setCheckedTeslimat] = useState(false)

  useEffect(() => {
    async function fetchCities() {
      try {
        const response = turkiye.data.map(item => item.name)
        setCities(response);
      } catch (error) {
        console.error(error);
      }
    }
    fetchCities();
  }, []);

  useEffect(() => {
    async function fetchDistricts() {
      if (selectedCity) {
        try {
          const response = turkiye.data.filter(item => item.name === selectedCity)
          const res = response[0].districts.map(item => item.name)
          setDistricts(res)
        } catch (error) {
          console.error(error);
        }
      }
    }
    fetchDistricts();
  }, [selectedCity]);






  const checkoutSession = async (e) => {
    e.preventDefault();
    try {

      const response = await axios.post(`api/orderList`, {
        orderItems: items.map((item) => ({
          product: item.product._id,
          name: item.product.name,
          price: ((item.product.price) * (item.dolar)),
          image: item.product.image,
          quantity: item.quantity
        })),
        user: {
          ad: ad,
          soyad: soyad,
          email: email,
          tel: tel,
          tc: tc,
          vergiDaire: vergiDaire
        },
        shippingAddress: {
          address: address,
          city: selectedCity,
          district: selectedDistrict
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

  function handleCityChange(event) {
    setSelectedCity(event.target.value);
    setSelectedDistrict('');
  }

  function handleDistrictChange(event) {
    setSelectedDistrict(event.target.value);
  }

  function handleChecked(e) {
    if (checked === false) {
      setChecked(true)
    } else {
      setChecked(false)
    }

  }

  function handleCheckedTeslimat(e) {
    if (checkedTeslimat === false) {
      setCheckedTeslimat(true)
    } else {
      setCheckedTeslimat(false)
    }

  }
  return (
    <Layout>
      <div className="boxed_wrapper">

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
                    {items.length===0 && <h3 style={{padding:"20px"}}>Sepetinizde ürün bulunmamaktadır</h3>}
                  </div>
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
                      <span className="col">{total.toFixed(2) > 1000 ? (total.toFixed(2)) : (Number(total.toFixed(2)) + 100)} ₺</span>
                    </li>
                  </ul>
                
                </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                  <div className="form billing-info">
                    <div className="shop-title-box">
                      <h3>Fatura Adresi</h3>
                    </div>
                    <form>
                      <div className="row">

                        <div className="col-md-6">
                          <div className="field-label">Ad*</div>
                          <div className="field-input">
                            <input type="text" name="ad" required placeholder="" value={ad} onChange={(event) => setAd(event.target.value)} />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="field-label">Soyad*</div>
                          <div className="field-input">
                            <input type="text" name="soyad" required placeholder="" value={soyad} onChange={(event) => setSoyad(event.target.value)} />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="field-label">TC Kimlik No veya Vergi No*</div>
                          <div className="field-input">
                            <input type="text" name="tcNo" required placeholder="" value={tc} onChange={(event) => setTc(event.target.value)} />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="field-label">Vergi Dairesi</div>
                          <div className="field-input">
                            <input type="text" name="vergiDairesi" placeholder="" value={vergiDaire} onChange={(event) => setVergiDaire(event.target.value)} />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="field-label">Adres*</div>
                          <div className="field-input">
                            <input type="text" required name="address" placeholder="" value={address} onChange={(event) => setAddress(event.target.value)} />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="field-label">İl*</div>
                          <div className="field-input">
                            <select id="city" value={selectedCity} onChange={handleCityChange}>
                              <option value="">Seçiniz</option>
                              {cities.map((city, i) => (
                                <option key={i} value={city}>{city}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="field-label">İlçe*</div>
                          <div className="field-input">
                            {/* <input type="text" name="selectedCity" placeholder="" value={selectedCity} onChange={(event) => setSelectedCity(event.target.value)} /> */}
                            <select id="district" value={selectedDistrict} onChange={handleDistrictChange}>
                              <option value="">Seçiniz</option>
                              {districts.map((city, i) => (
                                <option key={i} value={city}>{city}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="field-label">İletişim*</div>
                          <div className="field-input">
                            <input
                              required
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
                              required
                              type="text"
                              name="tel"
                              placeholder="Telefon Numarası"
                              value={tel} onChange={(event) => setTel(event.target.value)}
                            />
                          </div>
                        </div>
                        <div className="form shipping-info">
                  <div className="shop-title-box">
                    <h3>
                      Teslimat Adresi Farklı Olsun
                      <input type="checkbox" onChange={handleCheckedTeslimat} />
                    </h3>
                  </div>
                  {checkedTeslimat ?
                    <form method="post" action="checkout.html">
                      <div className="row">

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
                        <div className="col-md-6">
                          <div className="field-label">İl*</div>
                          <div className="field-input">
                            <select id="city" value={selectedCity} onChange={handleCityChange}>
                              <option value="">Seçiniz</option>
                              {cities.map((city, i) => (
                                <option key={i} value={city}>{city}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="field-label">İlçe*</div>
                          <div className="field-input">
                            {/* <input type="text" name="selectedCity" placeholder="" value={selectedCity} onChange={(event) => setSelectedCity(event.target.value)} /> */}
                            <select id="district" value={selectedDistrict} onChange={handleDistrictChange}>
                              <option value="">Seçiniz</option>
                              {districts.map((city, i) => (
                                <option key={i} value={city}>{city}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                    </form> : ""
                  }
                </div>

                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            
              
              <div className="text-center">
               
                <div className="col-md-12">
                          <div className="create-acc">
                            <div className="checkbox">
                              <label>
                                <input type="checkbox" name="ship-address" onChange={handleChecked} />
                                <span> <Link href={"/kvkk"}>Mesafeli Satış Sözleşmesini</Link> okudum, kabul ediyorum.</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        {
                          (!ad || !soyad || !tc || !address || !city || !districts || !email || !tel || !checked) ?
                            <div><p style={{ color: "red" }}>Lütfen bütün alanları doldurunuz ve Sözleşmeyi işaretleyiniz</p>
                              <button className="btn-three" disabled={true}>
                                ÖDEME YAP
                                <span className="icon-null" />
                              </button></div> :

                            <button className="btn-three" onClick={checkoutSession} >
                              ÖDEME YAP
                              <span className="icon-null" />
                            </button>
                        }
              </div>
            
          </div>
        </section>
        {/*End Checkout area*/}

      </div>
    </Layout>
  )
}

export default Odeme