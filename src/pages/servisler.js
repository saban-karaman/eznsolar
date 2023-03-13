import Layout from "@/components/Layout"
import Link from "next/link"

function Servisler() {
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
              <h1>Hizmetlerimiz</h1>
            </div>
            <div className="breadcrumb-menu float-right">
              <ul className="clearfix">
                <li>
                  <Link href="/">Anasayfa</Link>
                </li>
                <li className="active">Hizmetler</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*End breadcrumb area*/}
  {/*Start services style1 area*/}
  <section className="services-style1-area service-page">
    <div className="container">
      <div className="row">
        {/*Start single solution style1*/}
        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
          <div
            className="single-service-style1 wow fadeInUp"
            data-wow-delay="0ms"
            data-wow-duration="1200ms"
          >
            <div className="img-holder">
              <img src="images/services/1.jpg" alt="Awesome Image" />
              <div className="overlay-style-two" />
              <div className="overlay-content-box">
                <div className="icon">
                  <span className="icon-drill" />
                </div>
                <div className="title">
                  <h3>Kurulum</h3>
                </div>
              </div>
            </div>
            <div className="text-holder">
              <p>
              Ücretsiz Keşif hizmetimiz ile uzman personelimizin analizleri doğrultusunda projenizi elde edebilir...
              </p>
              <div className="button">
                <Link className="btn-two" href="/kurulum">
                  DETAYLI BİLGİ
                  <span className="icon-null" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*End single solution style1*/}
        {/*Start single solution style1*/}
        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
          <div
            className="single-service-style1 wow fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1200ms"
          >
            <div className="img-holder">
              <img src="images/services/2.jpg" alt="Awesome Image" />
              <div className="overlay-style-two" />
              <div className="overlay-content-box">
                <div className="icon">
                  <span className="icon-gear" />
                </div>
                <div className="title">
                  <h3>Bakım</h3>
                </div>
              </div>
            </div>
            <div className="text-holder">
              <p>
              Ezn Solar olarak bünyemizde satış ve kurulumunu gerçekleştirdiğimiz, bakım ve servis hizmetlerini gerçekleştirmekteyiz...
              </p>
              <div className="button">
                <Link className="btn-two" href="/bakim">
                  DETAYLI BİLGİ
                  <span className="icon-null" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*End single solution style1*/}
        {/*Start single solution style1*/}
        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
          <div
            className="single-service-style1 wow fadeInUp"
            data-wow-delay="400ms"
            data-wow-duration="1200ms"
          >
            <div className="img-holder">
              <img src="images/services/1.jpg" alt="Awesome Image" />
              <div className="overlay-style-two" />
              <div className="overlay-content-box">
                <div className="icon">
                  <span className="icon-cctv" />
                </div>
                <div className="title">
                  <h3>İzleme</h3>
                </div>
              </div>
            </div>
            <div className="text-holder">
              <p>
              Kurulumu gerçekleşen projelerin verimliliğini sürekli analiz ederek perfomanslarını takip ediyoruz...
              </p>
              <div className="button">
                <Link className="btn-two" href="/izleme">
                  DETAYLI BİLGİ
                  <span className="icon-null" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*End single solution style1*/}
        {/*Start single solution style1*/}
        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
          <div
            className="single-service-style1 wow fadeInUp"
            data-wow-delay="0ms"
            data-wow-duration="1200ms"
          >
            <div className="img-holder">
              <img src="images/services/4.jpg" alt="Awesome Image" />
              <div className="overlay-style-two" />
              <div className="overlay-content-box">
                <div className="icon">
                  <span className="icon-chat-1" />
                </div>
                <div className="title">
                  <h3>Danışma</h3>
                </div>
              </div>
            </div>
            <div className="text-holder">
              <p>
                When our power of choice untrammelled and when nothing prevents
                being able to do what we like best work...
              </p>
              <div className="button">
                <Link className="btn-two" href="/danisma">
                  DETAYLI BİLGİ
                  <span className="icon-null" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*End single solution style1*/}
        {/*Start single solution style1*/}
        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
          <div
            className="single-service-style1 wow fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1200ms"
          >
            <div className="img-holder">
              <img src="images/services/5.jpg" alt="Awesome Image" />
              <div className="overlay-style-two" />
              <div className="overlay-content-box">
                <div className="icon">
                  <span className="icon-roof" />
                </div>
                <div className="title">
                  <h3>Çatı Çözümleri</h3>
                </div>
              </div>
            </div>
            <div className="text-holder">
              <p>
              İhtiyaçlarınıza ve isteklerinize göre en iyi hizmeti sunabilmek adına profesyonel ekiplerimizle, kaliteli ürünlerimizle...
              </p>
              <div className="button">
                <Link className="btn-two" href="/cati-cozumleri">
                  DETAYLI BİLGİ
                  <span className="icon-null" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*End single solution style1*/}
        {/*Start single solution style1*/}
        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
          <div
            className="single-service-style1 wow fadeInUp"
            data-wow-delay="400ms"
            data-wow-duration="1200ms"
          >
            <div className="img-holder">
              <img src="images/services/6.jpg" alt="Awesome Image" />
              <div className="overlay-style-two" />
              <div className="overlay-content-box">
                <div className="icon">
                  <span className="icon-triangular" />
                </div>
                <div className="title">
                  <h3>İnverter Onarımı</h3>
                </div>
              </div>
            </div>
            <div className="text-holder">
              <p>
              İnverter onarımının tüm aşamalarında en kaliteli hizmeti vermekteyiz...
              </p>
              <div className="button">
                <Link className="btn-two" href="/inverter-onarimi">
                  DETAYLI BİLGİ
                  <span className="icon-null" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*End single solution style1*/}
      </div>
    </div>
  </section>
  {/*End services style1 area*/}
 
</div>
</Layout>
  )
}

export default Servisler