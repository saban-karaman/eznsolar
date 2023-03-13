import Layout from "@/components/Layout";
import Link from "next/link";
function Inverter() {
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
              <h1>İnverter Onarımı</h1>
            </div>
            <div className="breadcrumb-menu float-right">
              <ul className="clearfix">
                <li>
                  <Link href="/">Anasayfa</Link>
                </li>
                <li>
                  <Link href="/servisler">Hizmetler</Link>
                </li>
                <li className="active">İnverter Onarımı</li>
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
            <h1>İnverter Onarım Hizmeti</h1>
            <div className="text">
              <p>
              Zaman zaman tasarım hataları, aşırı ısınma, şebeke gerilimindeki harmonik bozulmalar, Solar Akü grubunda ve Solar Panellerde meydana gelen kısadevreler, yükteki dengesizlik, ani gerilim düşümü ve yükselmesi gibi sebeplerle Solar Inverter’ler arızalanmaktadır. Kısa devre ve aşırı yük gibi durumlarda genelikle IGBT kartında arıza meydana gelmekle birlikte gerilim düşümü ve ani gerilim yükselmesi gibi bazı durumlarda IGBT’ leri tetiklenen kontrol kartında da arıza oluşabilmektedir.
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
                    İNVERTER ONARIMINI ŞİMDİ YAPTIRIN
                    <span className="icon-null" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="text-holder">
                  <h2>İNVERTER</h2>
                  <p>
                  İnverter, güneş panellerinin ürettiği DC akımı bizim kullanabileceğimiz AC akıma dönüştürmeye yarayan aletlerdir.
                  </p>
                  <div className="inner-content">
                  <h5>İNVERTER ÇEŞİTLERİ</h5>
                    <ul>
                      <li>Off-Grid İnverter</li>
                      <li>On-Grid İnverter</li>
                      <li>Hybrid İnverter</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="services-include-box">
            <div className="title">
              <h2>Onarım Aşamaları</h2>
              <p>
              İnverter onarımının tüm aşamalarında en kaliteli hizmeti vermekteyiz.
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
                      Teşhis
                      <br /> &amp; Teklif
                    </h3>
                    <div className="button">
                      <Link className="readmore1" href="/iletisim">
                        <span className="icon-null" />
                      </Link>
                    </div>
                    <div className="overlay-content">
                      <h3>
                        Teşhis
                        <br /> &amp; Teklif
                      </h3>
                      <p>
                        Problemin ana kaynağı için araştırma yapılır.
                      </p>
                      <Link className="readmore2" href="/iletisim">
                        Randevu AL
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
                      Onarım
                      <br /> &amp; Değişim
                    </h3>
                    <div className="button">
                      <Link className="readmore1" href="/iletisim">
                        <span className="icon-null" />
                      </Link>
                    </div>
                    <div className="overlay-content">
                      <h3>
                      Onarım
                        <br /> &amp; Değişim
                      </h3>
                      <p>
                      Onarım işlemi en kısa zamanda uygulanarak faailiyet sağlanır.
                      </p>
                      <Link className="readmore2" href="/iletisim">
                      Randevu AL
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
                      <br /> Teslim
                    </h3>
                    <div className="button">
                      <Link className="readmore1" href="/iletisim">
                        <span className="icon-null" />
                      </Link>
                    </div>
                    <div className="overlay-content">
                      <h3>
                      Test &amp;
                        <br /> Teslim
                      </h3>
                      <p>
                      Sistem faaliyeti test edilerek kullanıcıya teslim edilir.
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
          <div className="flexible-pricing-box">
            <div className="title">
              <h2>Faydalı Bilgiler</h2>
            </div>
            <div className="inner-content">
              <div className="row">
                {/*Start Single Flexible box*/}
                <div className="col-xl-6">
                  <div className="single-flexible-box">
                    <div className="static-content text-center">
                      
                      <div className="table-header">
                        <div className="top">
                          <h3>İnverter kullanırken <br /><br />dikkat edilmesi <br /><br />gereken unsurlar</h3>
                        </div>
                        
                        <div className="overlay-content">
                          <p> Isıdan etkilenebilme özelliğine sahiptir. Bu nedenle yanıcı maddelerden uzak tutulmalı ve yanına konulmamalıdır. Bakımının yapılması sayesinde daha uzun ömre sahip olabilir.</p>
                        </div>
                      </div>
                      <div className="button">
                        <Link href="/inverter-onarimi">DETAYLI BİLGİ</Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/*End Single Flexible box*/}
                {/*Start Single Flexible box*/}
                <div className="col-xl-6">
                  <div className="single-flexible-box">
                    <div className="static-content text-center">
                      
                      <div className="table-header">
                        <div className="top">
                          <h3><br /><br />İnverter Çeşitleri<br /><br /><br /></h3>                          
                        </div>                        
                        <div className="overlay-content">
                          <div className="list-items">
                            <ul>
                            <li>OFF-GRİD İnverterler</li>
                              <li>ON-GRİD İnverterler</li>
                              <li>HYBRID İnverterler</li>                          
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="button">
                        <Link href="/inverter-onarimi">DETAYLI BİLGİ</Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/*End Single Flexible box*/}
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12">
          <div className="single-service-sidebar">
            {/*Start Single sidebar*/}
            <div className="single-sidebar">
              <ul className="service-pages">
                <li>
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
                <li className="active">
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

export default Inverter