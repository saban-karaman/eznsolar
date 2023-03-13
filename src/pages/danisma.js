import Layout from "@/components/Layout"
import Link from "next/link"

function Danisma() {
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
              <h1>Danışma</h1>
            </div>
            <div className="breadcrumb-menu float-right">
              <ul className="clearfix">
                <li>
                  <Link href="/">Anasayfa</Link>
                </li>
                <li>
                  <Link href="/servisler">Hizmetler</Link>
                </li>
                <li className="active">Danışma</li>
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
            <h1>Danışma Hizmeti</h1>
            <div className="text">
              <p>
              Giderek azalan konvansiyonel enerji kaynakları günümüz dünyasında savaşlara, ekonomik krizlere, küresel ısınmaya sebep olan çevre ve hava kirliliğine ve daha birçok trajediye sebep olmaktadır. Dolayısıyla insanlık enerji ihtiyacını karşılamak için yenilenebilir ve doğal enerji kaynaklarına yönelmek zorundadır. Güneş enerjisi ise bu kaynaklar arasında ulaşılabilirliği, sürdürülebilirliği ve verimliliğiyle en önde gelen yenilenebilir enerji kaynakları arasında yeralmaktadır.
              </p>
              <p>
              Tüm bu sebeplerden dolayı siz de ihtiyacınız olan güneş enerjisi uygulaması hakkında bilgi ve tavsiye almak, ücretsiz keşif ve danışmanlık hizmetimizden faydalanmak veya sadece bu konuda merakınızı gidermek için bizimle iletişime geçebilirsiniz.
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
                  <Link className="btn-three" href="tel:0090-555-091-10-60">
                    HEMEN ARAYIN
                    <span className="icon-null" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="text-holder">
                  <h2>Çalışma Kapsamımız</h2>
                  <p>
                  Uzmanlarımız tarafından ücretsiz keşif talep edebilir, Müşteri temsilcimize 7/24 yazabilir veya arayabilirsiniz.
                  </p>
                  <div className="inner-content">
                    <h5>Danışma Konuları</h5>
                    <ul>
                      <li>SOLAR Enerji</li>
                      <li>Hizmetlerimiz</li>
                      <li>Projelerimiz</li>
                      <li>Ürünlerimiz</li>
                      <li>Firmamız</li>
                    </ul>
                  </div>
                </div>
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
                <li>
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
                      <h3>İzleme</h3>
                    </div>
                  </Link>
                </li>
                <li className="active">
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

export default Danisma