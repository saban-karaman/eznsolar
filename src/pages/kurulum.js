import Layout from "@/components/Layout";
import Link from "next/link";
function Kurulum() {
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
              <h1>Kurulum</h1>
            </div>
            <div className="breadcrumb-menu float-right">
              <ul className="clearfix">
                <li>
                  <Link href="/">Anasayfa</Link>
                </li>
                <li>
                  <Link href="/servisler">Hizmetler</Link>
                </li>
                <li className="active">Kurulum</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*End breadcrumb area*/}
  {/*Start Single Service Area*/}
  <section className="single-service-area">
    <div className="container">
      <div className="row">
        <div className="col-xl-8 col-lg-12 col-md-12 col-sm-12">
          <div className="single-service-top">
            <h1>Kurulum Hizmeti</h1>
            <div className="text">
              <p>
              Ekiplerimiz öncelikle işletmenize gelerek bir saha ziyareti ve ön analiz gerçekleştiriyor. Sonrasında size özel çözümler geliştiriyor, projelendiriyor, performansı referans alan iş modelleri ile teklif sunuyor. Teklifi kabul ettiğinizde de tasarlanan projeyi uzmanlık ve hassasiyetle uyguluyor. Üstelik EzN Solar güvencesiyle, sözleşme boyunca santralinizin bakımını da ekstra bir maliyet talep etmeden biz üstleniyoruz.
              </p>
              
            </div>
          </div>
          <div className="scope-of-work">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="img-holder">
                  <img
                    src="images/services/service-single/single-service-1.jpg"
                    alt="Awesome Image"
                  />
                </div>
                <div className="button">
                  <Link className="btn-three" href="/iletisim">
                    KURULUM İÇİN BAŞVURU YAPIN
                    <span className="icon-null" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="text-holder">
                  <h2>Kurulum Aşamaları</h2>
                  <p>
                    Tüm aşamalarda profesyonel ekiplerle çalışıyoruz.
                  </p>
                  <div className="inner-content">
                  <h5>Aşamalar</h5>
                    <ul>
                      <li>Keşif</li>
                      <li>Teklif</li>
                      <li>Tedarik</li>
                      <li>Kurulum</li>
                      <li>Test ve Onay</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="services-include-box">
            <div className="title">
              <h2>Aşamaların Detayları</h2>
              <p>
              Kurulum detaylarına ulaşmak için bu bölümden faydalanabilirsiniz.
              </p>
            </div>
            <div className="inner-content">
              <div className="row">
                {/*Start Single Service Include*/}
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                  <div
                    className="single-service-include wow fadeInUp"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="icon">
                      <span className="icon-plug" />
                    </div>
                    <h3>
                      Keşif
                      <br /> &amp; Teklif
                    </h3>
                    <div className="button">
                      <Link className="readmore1" href="/iletisim">
                        <span className="icon-null" />
                      </Link>
                    </div>
                    <div className="overlay-content">
                      <h3>
                        Keşif
                        <br /> &amp; Teklif
                      </h3>
                      <p>
                      Keşif aşamasında işletmenizin bulunduğu bölgenin ne kadar güneş ışığı aldığı...
                      </p>
                      <Link className="readmore2" href="/iletisim">
                        Ranevu AL
                        <span className="icon-null" />
                      </Link>
                    </div>
                  </div>
                </div>
                {/*End Single Service Include*/}
                {/*Start Single Service Include*/}
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                  <div
                    className="single-service-include wow fadeInUp"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="icon">
                      <span className="icon-ecology-and-environment" />
                    </div>
                    <h3>
                      Tedarik
                      <br /> &amp; Kurulum
                    </h3>
                    <div className="button">
                      <Link className="readmore1" href="/iletisim">
                        <span className="icon-null" />
                      </Link>
                    </div>
                    <div className="overlay-content">
                    <h3>
                      Tedarik
                      <br /> &amp; Kurulum
                    </h3>
                      <p>
                      En kısa zamanda en yüksek kalite/maliyet oranına sahip ürünlerle ...
                      </p>
                      <Link className="readmore2" href="/iletisim">
                      Randevu Al
                        <span className="icon-null" />
                      </Link>
                    </div>
                  </div>
                </div>
                {/*End Single Service Include*/}
                {/*Start Single Service Include*/}
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                  <div
                    className="single-service-include wow fadeInUp"
                    data-wow-delay="400ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="icon">
                      <span className="icon-wrench" />
                    </div>
                    <h3>
                    Test &amp;
                      <br /> Onay
                    </h3>
                    <div className="button">
                      <Link className="readmore1" href="/iletisim">
                        <span className="icon-null" />
                      </Link>
                    </div>
                    <div className="overlay-content">
                      <h3>
                      Test &amp;
                        <br /> Onay
                      </h3>
                      <p>
                      Kurulan sistemin beklenen oranda verimlilik sağladığının testi...
                      </p>
                      <Link className="readmore2" href="/iletisim">
                      Randevu AL
                        <span className="icon-null" />
                      </Link>
                    </div>
                  </div>
                </div>
                {/*End Single Service Include*/}
              </div>
            </div>
          </div>
          {/* <div className="flexible-pricing-box"> */}
            {/* <div className="title">
              <h2>Esnek Fiyatlandırma Planları</h2>
            </div>
            <div className="inner-content">
              <div className="row"> */}
                {/*Start Single Flexible box*/}
                {/* <div className="col-xl-6">
                  <div className="single-flexible-box">
                    <div className="static-content text-center">
                      <div className="discount-box">
                        <h5>
                          10%
                          <br />
                          İndirim
                        </h5>
                      </div>
                      <div className="table-header">
                        <div className="top">
                          <h3>Aylık</h3>
                          <span>
                            <b>*</b>Ticari güneş paneli sisteminin  <br />
                            ortalama maliyeti
                          </span>
                        </div>
                        <div className="package">
                          <h1>
                            <span>$</span>2.25<b>/ Watt</b>
                          </h1>
                        </div>
                        <div className="overlay-content">
                          <div className="list-items">
                            <ul>
                              <li>Modül Temizleme</li>
                              <li>Sistem Kontrolü</li>
                              <li>Aşınma ve Yıpranma Onarımları</li>
                              <li>İnverter Servisi</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="button">
                        <Link href="/iletisim">RANDEVU AL</Link>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/*End Single Flexible box*/}
                {/*Start Single Flexible box*/}
                {/* <div className="col-xl-6">
                  <div className="single-flexible-box">
                    <div className="static-content text-center">
                      <div className="discount-box">
                        <h5>
                          20%
                          <br />
                          İndirim
                        </h5>
                      </div>
                      <div className="table-header">
                        <div className="top">
                          <h3>Yıllık</h3>
                          <span>
                            <b>*</b>Ticari güneş paneli sisteminin <br />
                            ortalama maliyeti
                          </span>
                        </div>
                        <div className="package">
                          <h1>
                            <span>$</span>5.20<b>/ Watt</b>
                          </h1>
                        </div>
                        <div className="overlay-content">
                          <div className="list-items">
                            <ul>
                            <li>Modül Temizleme</li>
                              <li>Sistem Kontrolü</li>
                              <li>Aşınma ve Yıpranma Onarımları</li>
                              <li>İnverter Servisi</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="button">
                        <Link href="/iletisim">RANDEVU AL</Link>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/*End Single Flexible box*/}
              {/* </div>
            </div>
          </div> */}
        </div>
        <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12">
          <div className="single-service-sidebar">
            {/*Start Single sidebar*/}
            <div className="single-sidebar">
              <ul className="service-pages">
                <li className="active">
                  <Link href="/kurulum">
                    <div className="icon">
                      <span className="icon-drill" />
                    </div>
                    <div className="title">
                      <h3>Kurulum</h3>
                    </div>
                  </Link>
                </li>
                <li >
                  <Link href="/bakim">
                    <div className="icon">
                      <span className="icon-gear" />
                    </div>
                    <div className="title">
                      <h3>Bakım</h3>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/izleme">
                    <div className="icon">
                      <span className="icon-cctv" />
                    </div>
                    <div className="title">
                      <h3>İzleme ve Analiz</h3>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/danisma">
                    <div className="icon">
                      <span className="icon-chat-1" />
                    </div>
                    <div className="title">
                      <h3>Danışma</h3>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/cati-cozumleri">
                    <div className="icon">
                      <span className="icon-roof" />
                    </div>
                    <div className="title">
                      <h3>Çatı Çözümleri</h3>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/inventor-onarimi">
                    <div className="icon">
                      <span className="icon-triangular" />
                    </div>
                    <div className="title">
                      <h3>İnventer Onarımı</h3>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            {/*End Single sidebar*/}
            <div className="sidebar-contact-box text-center">
              <div className="img-holder">
                <img src="images/sidebar/contact-bg.jpg" alt="Awesome Image" />
              </div>
              <div className="inner-content">
                <div className="icon-holder">
                  <span className="icon-question-2" />
                </div>
                <h3>Soru ve Görüşleriniz için</h3>
                <div className="bottom-box">
                  <h2>+90 555 091 10 60</h2>
                  <span>Email: info@ezngroup.com</span>
                </div>
                <div className="button">
                  <Link
                    className="btn-three wow slideInUp"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                    href="/iletisim"
                  >
                    İLETİŞİME GEÇ
                    <span className="icon-null" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*End Single Service Area*/}
 
</div>
</Layout>
  )
}

export default Kurulum