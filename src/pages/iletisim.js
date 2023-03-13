import Layout from "@/components/Layout"
// import React, { useState } from 'react'
import Link from "next/link"


function iletisim() {
  // const [discuss, setDiscuss] = useState("")
  // const changeDiscuss = (newDiscuss) => {
  //   setDiscuss(newDiscuss)
  // }
  return (
    <Layout>
    <div className="boxed_wrapper">
  <div/>
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
              <h1>Bize Ulaşın</h1>
            </div>
            <div className="breadcrumb-menu float-right">
              <ul className="clearfix">
                <li>
                  <Link href="/">Anasayfa</Link>
                </li>
                <li className="active">İletişim</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*End breadcrumb area*/}
  {/*Start Contact Details Area*/}
  <section className="contact-details-area">
    <div className="container">
      <div className="row">
        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
          <div className="single-contact-details-box text-center">
            <div className="image-box">
              <img
                src="images/resources/contact-details-1.jpg"
                alt="Awesome Image"
              />
            </div>
            <div className="text">
              <p>
                Tel: (+90) 555 091 10 60
                <br /> Email: info@ezngroup.com
              </p>
              <Link className="btn-two" href="tel:0090-555-091-10-60">
                İLETİŞİME GEÇ
                <span className="icon-null" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
          <div className="single-contact-details-box text-center">
            {/* <div className="google-map-box">
              <div
                className="google-map"
                id="contact-google-map"
                data-map-lat="40.58960"
                data-map-lng="36.94425"
                data-icon-path="images/resources/map-marker.png"
                data-map-title="Niksar, Tokat, Türkiye"
                data-map-zoom={12}
                data-markers='{
                          "marker-1": [40.58960, 36.94425, "<h4>Karadeniz Bölgesi Ofis</h4><p>Niksar, Tokat</p>"],
                          "marker-2": [41.15716, 28.60951, "<h4>Marmara Bölgesi Ofis</h4><p>Arnavutköy, İstanbul</p>"]

                      }'
              ></div> */}
            {/* </div> */}
            <div className="text">
              <p>
                Karadeniz Bölgesi: Niksar, Tokat, Türkiye
                <br /> Marmara Bölgesi: İstanbul, Türkiye
                <br /> İç Anadolu Bölgesi: Ankara, Türkiye
              </p>
              <Link className="btn-two" href="https://www.google.com/maps/place/EzN+Solar+G%C3%BCne%C5%9F+Enerji+Sistemleri/@41.1570714,28.6073647,17z/data=!3m1!4b1!4m6!3m5!1s0x14b5571efcd3a5bf:0x38db20d19e846837!8m2!3d41.1570714!4d28.6095534!16s%2Fg%2F11k583lmpt">
                BÜYÜK HARİTADA GÖSTER
                <span className="icon-null" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
          <div className="single-contact-details-box text-center">
            <div className="image-box">
              <img
                src="images/resources/contact-details-2.jpg"
                alt="Awesome Image"
              />
            </div>
            <div className="text">
              <p>
              Görüş ve önerilerinizi
                <br /> 7/24 yazabilirsiniz.
              </p>
              <Link className="btn-two" href="/yorumlar">
                SİZDEN GELENLER
                <span className="icon-null" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12">
          <div
            className="emergency-call wow slideInUp"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <h6>
              Destek, talep ve şikayetleriniz için 7/24 arayabilirsiniz.
              <span>+90 555 091 10 60</span>
            </h6>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*End Contact Details Area*/}
  {/*Start contact form area*/}
  <section className="contact-info-area">
    <div className="container">
      <div className="row">
        <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
          <div className="contact-form-text-box">
            <div className="inner">
              <div
                className="icon-holder wow slideInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <span className="flaticon-envelope" />
              </div>
              <div className="sec-title">
                <p>Mail adresinizi bırakabilirsiniz</p>
                <div className="title">Mesaj Gönder</div>
                <div className="border-box" />
              </div>
              <div className="inner-content">
                <h2>
                  Bilgilerinizi bırakarak
                  <br /> en kısa zamanda 
                  <br /> geri dönüş yapalım 
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
          <div className="contact-form">
            <div className="inner">
              <form
                id="contact-form"
                name="contact_form"
                className="default-form"
                // action="inc/sendmail.php"
                method="post"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-box">
                      <select 
                      className="input-box"
                      // data-width="100%"
                      // onChange={(event) => changeDiscuss(event.target.value)}
                      // value={discuss}
                      >
                        <option value="Genel" >Başlık Seçiniz</option>
                        <option value="Kurulum">Kurulum</option>
                            <option value="Bakım">Bakım</option>
                            <option value="İzleme">İzleme</option>
                            <option value="Discuss About">Discuss About</option>
                            <option value="Danışma">Danışma</option>
                            <option value="Çatı Çözümleri">Çatı Çözümleri</option>
                            <option value="İnventör Onarımı">İnventör Onarımı</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-box">
                      <input
                        type="text"
                        name="form_phone"
                        defaultValue=""
                        placeholder="Telefon"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-box">
                      <input
                        type="text"
                        name="form_name"
                        defaultValue=""
                        placeholder="İsim veya Firma İsmi"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-box">
                      <input
                        type="email"
                        name="form_email"
                        defaultValue=""
                        placeholder="Email Adresiniz"
                        required=""
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="input-box">
                      <textarea
                        name="form_message"
                        placeholder="Mesajınız..."
                        required=""
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="button-box">
                      <input
                        id="form_botcheck"
                        name="form_botcheck"
                        className="form-control"
                        type="hidden"
                        defaultValue=""
                      />
                      <button
                        className="btn-three"
                        type="submit"
                        data-loading-text="Lütfen Bekleyiniz..."
                      >
                        Mesaj Gönder
                        <span className="icon-null" />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*End contact form area*/}
  {/*Start Branches section*/}
  <section className="branches-section">
    <div className="container inner-content">
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div className="branches-carousel owl-carousel owl-theme">
            {/*Start Single Branches Box*/}
            <div className="single-branches-box text-center">
              <div className="title-box">
                <h3>Arnavutköy/İstanbul</h3>
              </div>
              <ul>
                <li>(+90) 539 366 09 04</li>
                <li>info@ezngroup.com</li>
              </ul>
              <div className="text">
                <p>
                  Hastane Mah. Nallı Sok. No:24,
                  <br /> Arnavutköy/İstanbul
                </p>
              </div>
            </div>
            {/*End Single Branches Box*/}
            {/*Start Single Branches Box*/}
            <div className="single-branches-box text-center">
              <div className="title-box">
                <h3>Niksar/Tokat</h3>
              </div>
              <ul>
                <li>+90 555 091 10 60</li>
                <li>info@ezngroup.com</li>
              </ul>
              <div className="text">
                <p>
                  Bengiler Mah. Atatürk Bul. No:27
                  <br /> Niksar/Tokat
                </p>
              </div>
            </div>
            {/*End Single Branches Box*/}
            {/*Start Single Branches Box*/}
            <div className="single-branches-box text-center">
              <div className="title-box">
                <h3>Silivri/İstanbul</h3>
              </div>
              <ul>
                <li>+90 553 768 22 37</li>
                <li>info@ezngroup.com</li>
              </ul>
              <div className="text">
                <p>
                  Yeni Mah. Ece Sok.  No:7/A
                  <br /> Silivri/İstanbul
                </p>
              </div>
            </div>
            {/*End Single Branches Box*/}
          
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12">
          <div
            className="our-all-branches wow slideInUp"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <h6>
              Marmara ve Karadeniz Bölgesinde  <span>3 Şube</span> ile
              hizmet vermekteyiz.
            </h6>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*End Branches section*/}
  {/*Start Google Map Area*/}
  <section className="google-map-area">
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-12"></div>
      </div>
    </div>
  </section>
  {/*End Google Map Area*/}
  
</div>
</Layout>
  )
}

export default iletisim