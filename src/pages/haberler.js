import Layout from "@/components/Layout";
import Link from "next/link";
function Haberler() {
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
              <h1>Haberler</h1>
            </div>
            <div className="breadcrumb-menu float-right">
              <ul className="clearfix">
                <li>
                  <Link href="/">Anasayfa</Link>
                </li>
                <li className="active">Haberler</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*End breadcrumb area*/}
  {/*Start blog area*/}
  <section id="blog-area" className="blog-default-area">
    <div className="container">
      <div className="row">
       {/*Start single blog post*/}
       <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
          <div
            className="single-blog-post wow fadeInLeft"
            data-wow-delay="400ms"
            data-wow-duration="1500ms"
          >
            <div className="img-holder">
              <img src="images/blog/v1-8.jpg" alt="Awesome Image" />
              <div className="overlay-style-two" />
              <div className="post-date">
                <h3>
                  <span>MAR</span>
                  <br /> 06
                </h3>
              </div>
            </div>
            <div className="text-holder">
              <h3 className="blog-title">
                <Link href="https://www.gesdergisi.com/turkiye-gunes-enerjisi-kapasitesini-2035e-kadar-yaklasik-e0-artiracak/">
                Türkiye, güneş enerjisi kapasitesini 2035 yılına kadar yaklaşık %450 artıracak.<br/>
                </Link>
              </h3>
              <div className="meta-box">
                <ul className="meta-info">
                  <li>
                    <Link href="https://www.gesdergisi.com/">
                      <b>GES Dergisi</b>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.gesdergisi.com/turkiye-gunes-enerjisi-kapasitesini-2035e-kadar-yaklasik-e0-artiracak/">
                    SOLAR SİSTEMLER</Link>
                  </li>
                </ul>
                <div className="author-icon">
                  <span className="icon-user" />
                </div>
              </div>
              <div className="text">
                
                <Link className="btn-two" href="https://www.gesdergisi.com/turkiye-gunes-enerjisi-kapasitesini-2035e-kadar-yaklasik-e0-artiracak/">
                DETAYLI BİLGİ
                  <span className="icon-null" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*End single blog post*/}
        {/*Start single blog post*/}
        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
          <div
            className="single-blog-post wow fadeInLeft"
            data-wow-delay="0ms"
            data-wow-duration="1500ms"
          >
            <div className="img-holder">
              <img src="images/blog/v1-1.jpg" alt="Awesome Image" />
              <div className="overlay-style-two" />
              <div className="post-date">
                <h3>
                  <span>ŞUB</span>
                  <br /> 03
                </h3>
              </div>
            </div>
            <div className="text-holder">
              <h3 className="blog-title">
                <Link href="https://solarexistanbul.com/">
                Dünyanın Enerji gücünün nabzı ve enerjinin yol haritası 6-8 Nisan 2023 de 15. SolarEX İstanbul da belirlenecek!
                </Link>
              </h3>
              <div className="meta-box">
                <ul className="meta-info">
                  <li>
                    <Link href="https://solarexistanbul.com/">
                      <b>SOLAREX</b>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://solarexistanbul.com/">SOLAR SİSTEMLER</Link>
                  </li>
                </ul>
                <div className="author-icon">
                  <span className="icon-user" />
                </div>
              </div>
              <div className="text">
                
                <Link className="btn-two" href="https://solarexistanbul.com/">
                  DETAYLI BİLGİ
                  <span className="icon-null" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*End single blog post*/}
        {/*Start single blog post*/}
        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
          <div
            className="single-blog-post wow fadeInLeft"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="img-holder">
              <img src="images/blog/v1-2.jpg" alt="Awesome Image" />
              <div className="overlay-style-two" />
              <div className="post-date">
                <h3>
                  <span>ŞUB</span>
                  <br /> 01
                </h3>
              </div>
            </div>
            <div className="text-holder">
              <h3 className="blog-title">
                <Link href="https://www.trthaber.com/haber/bilim-teknoloji/aselsandan-yenilenebilir-enerji-hamlesi-742632.html">
                ASELSAN dan yenilenebilir enerji hamlesi<br/><br/><br/>
                </Link>
              </h3>
              <div className="meta-box">
                <ul className="meta-info">
                  <li>
                    <Link href="https://www.trthaber.com/haber/bilim-teknoloji/aselsandan-yenilenebilir-enerji-hamlesi-742632.html">
                      <b>AA</b>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.trthaber.com/haber/bilim-teknoloji/aselsandan-yenilenebilir-enerji-hamlesi-742632.html">YENİLENEBİLİR ENERJİ</Link>
                  </li>
                </ul>
                <div className="author-icon">
                  <span className="icon-user" />
                </div>
              </div>
              <div className="text">
                
                <Link className="btn-two" href="https://www.trthaber.com/haber/bilim-teknoloji/aselsandan-yenilenebilir-enerji-hamlesi-742632.html">
                DETAYLI BİLGİ
                  <span className="icon-null" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*End single blog post*/}
      </div>
    </div>
  </section>
  {/*End blog area*/} 
</div>
</Layout>
  )
}

export default Haberler