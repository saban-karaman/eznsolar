import Layout from "@/components/Layout"
import Link from "next/link"

function Bakım() {
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
              <h1>Bakım ve Onarım</h1>
            </div>
            <div className="breadcrumb-menu float-right">
              <ul className="clearfix">
                <li>
                  <Link href="/">Anasayfa</Link>
                </li>
                <li>
                  <Link href="/servisler">Hizmetler</Link>
                </li>
                <li className="active">Bakım</li>
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
            <h1>Bakım ve Servis</h1>
            <div className="text">
              <p>
Solar Panel Bakım, Onarım, Teknik Servis
Fotovoltaik panellerden elde edilen maximum verimin korunması bakımsızlık ve çeşitli koşullardan oluşabilecek tahribatların engellenebilmesi için güneş panelleri bakımlarının düzenli periyotlarla yapılması önemlidir. 
EZN Solar olarak bünyemizde satış ve kurulumunu gerçekleştirdiğimiz, aynı zamanda mevcut panellerinizin bakım ve servis hizmetlerini titizlikle gerçekleştirmekteyiz. Oluşabilecek arıza durumlarını önceden tespit ederek herhangi bir maddi hasara sebep olmadan tadilatını gerçekleştirmekteyiz.
              </p>
              <p>
              Enerji verimliliğini arttırmak ve çevresel sürdürülebilirliği korumak amacıyla yönettiğimiz programlar doğrultusunda yenilenebilir enerjiyi geliştirmek ve sizleri inovasyona taşımayı hedef edindik. Doğal enerji kaynaklarını önemsiyor ve maksimum verim ile çalışmasını sağlıyoruz.
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
                  SİSTEMİNİZİN BAKIMINI ŞİMDİ YAPTIRIN
                    <span className="icon-null" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="text-holder">
                  <h2>Çalışma Kapsamımız</h2>
                  <p>
                  Solar panellerinizin performans ölçümleri, arıza tespiti, bakım ve tadilat hizmetleri EZN Solar sorumluluğundadır.
                  </p>
                  <div className="inner-content">
                    <h5>BAKIM VE SERVİS KAPSAMINDA</h5>
                    <ul>
                      <li>Panel onarımı, enerji analizi</li>
                      <li>Performans iyileştirme</li>
                      <li>Koruyucu ve düzeltici bakım onarım</li>
                      <li>Teknik servis hizmetleri</li>
                      <li>Önleyici bakım onarım</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="services-include-box">
            <div className="title">
              <h2>Ürün Garanti Süreleri</h2>
              <p>
              EZN Solar bünyesinde satışa sunulan tüm ürünler garantili kapsamındadır.
               Ürünler temel olarak 2 yıl garanti ve teknik servis desteğine sahiptir.
                Satın aldığınız üründe oluşan arıza, teknik sorun ve üründen kaynaklı bir donanım sorununda bize ulaşarak 2 yıl garanti süresinden yararlanabilirsiniz.
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
                      Operasyonlar
                      <br /> &amp; Bakım
                    </h3>
                    <div className="button">
                      <Link className="readmore1" href="#">
                        <span className="icon-null" />
                      </Link>
                    </div>
                    <div className="overlay-content">
                      <h3>
                        Operasyonlar
                        <br /> &amp; Bakım
                      </h3>
                      <p>
                      Düzenli bakım yaptırarak yüksek verimlilik ile enerji üretmeye devam edebilirsiniz.
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
                    Enerji Analizi
                        <br /> &amp; Kontrol
                    </h3>
                    <div className="button">
                      <Link className="readmore1" href="/iletisim">
                        <span className="icon-null" />
                      </Link>
                    </div>
                    <div className="overlay-content">
                      <h3>
                        Enerji Analizi
                        <br /> &amp; Kontrol
                      </h3>
                      <p>
                        Ücretsiz Keşif hizmetimiz ile verimliiği düşen panelinizin kontrolünü yapabiliriz
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
                      Tamir &amp;
                      <br /> Denetleme
                    </h3>
                    <div className="button">
                      <Link className="readmore1" href="/iletisim">
                        <span className="icon-null" />
                      </Link>
                    </div>
                    <div className="overlay-content">
                      <h3>
                      Tamir &amp;
                      <br /> Denetleme
                      </h3>
                      <p>
                      Teknik servis hizmetimiz oluşacak arıza, hata, geliştirme, kurulum vb. faaliyetleri kapsamaktadır.
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
          {/* <div className="flexible-pricing-box">
            <div className="title">
              <h2>Bakım ve Onarım Fiyatları</h2>
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
                          <h3>Bakım</h3>
                          <span>
                            <b>*</b>Ortalama mesken çatılar için  <br />
                            güneş panelleri bakımı
                          </span>
                        </div>
                        <div className="package">
                          <h1>
                            <span>₺</span>500<b>/ Watt</b>
                          </h1>
                        </div>
                        <div className="overlay-content">
                          <div className="list-items">
                            <ul>
                              <li>Panel Kontrolü</li>
                              <li>Sistem Checkup</li>
                              <li>Enerji analizi</li>
                              <li>Inverter Bakımı</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="button">
                        <Link href="/iletisim">Randevu AL</Link>
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
                          <h3>Tamir</h3>
                          <span>
                          <b>*</b>Ortalama mesken çatılar için  <br />
                            güneş panelleri tamiri
                          </span>
                        </div>
                        <div className="package">
                          <h1>
                            <span>₺</span>1000<b>/ Watt</b>
                          </h1>
                        </div>
                        <div className="overlay-content">
                          <div className="list-items">
                            <ul>
                              <li>Sistem Checkup</li>
                              <li>Panel Tamiri</li>
                              <li>Koruyucu ve düzeltici bakım onarım</li>
                              <li>Inverter Tamiri</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="button">
                        <Link href="/iletisim">Randevu AL</Link>
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
                <li className="active">
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
                      <h3>İnventör Onarımı</h3>
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

export default Bakım