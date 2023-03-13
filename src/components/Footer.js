
import Link from "next/link";

function Footer() {
  return (
    <div>
        {/*Start footer area*/}
      <footer className="footer-area">
        <div
          className="scroll-to-top scroll-to-target wow slideInRight"
          data-wow-delay="300ms"
          data-wow-duration="1500ms"
          data-target="html"
        >
          <span className="fa fa-angle-up" />
        </div>
        <div className="container">
          <div className="row">
            {/*Start single footer widget*/}
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div className="single-footer-widget marbtm50">
                <div className="contact-info-box">
                  <div className="footer-logo">
                    <Link href="/">
                      <img src="images/resources/logo.png" alt="Awesome Logo" />
                    </Link>
                  </div>
                  <div className="text">
                    <p>
                      Karadeniz Ofis, Niksar/Tokat
                      <br /> Marmara Ofisi Arnavutköy/İstanbul
                      <br /> Ankara Ofisi Yenimahalle/Ankara
                    </p>
                    <ul>
                      <li>info@ezngroup.com</li>
                      <li>
                        Pzt - Cmt: 09:00-18:00
                      </li>
                    </ul>
                    <Link className="btn-two" href="https://www.google.com/maps/place/EzN+Solar+G%C3%BCne%C5%9F+Enerji+Sistemleri/@41.1570714,28.6073647,17z/data=!3m1!4b1!4m6!3m5!1s0x14b5571efcd3a5bf:0x38db20d19e846837!8m2!3d41.1570714!4d28.6095534!16s%2Fg%2F11k583lmpt">
                      Harİtada Göster
                      <span className="icon-null" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/*End single footer widget*/}
            {/*Start single footer widget*/}
            <div className="col-xl-4 col-lg-3 col-md-6 col-sm-12">
              <div className="single-footer-widget marbtm50">
                <div className="title">
                  <h3>Faydalı Linkler</h3>
                </div>
                <div className="usefull-links">
                  <div className="row">
                    <div className="col-xl-6">
                      <ul>
                        <li>
                          <Link href="/hakkimizda">Hakkımızda</Link>
                        </li>
                        <li>
                          <Link href="/iletisim">Uzmanla Görüş</Link>
                        </li>
                        <li>
                          <Link href="/projeler">Çalışmalarımız</Link>
                        </li>
                        <li>
                          <Link href="/iletisim">Teklif Alın</Link>
                        </li>
                        <li>
                          <Link href="/yorumlar">Görüşler</Link>
                        </li>
                        <li>
                          <Link href="/odeme">Ödeme ve Plan</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-xl-6">
                      <ul>
                        <li>
                          <Link href="/servisler">Hizmetlerimiz</Link>
                        </li>
                        <li>
                          <Link href="/haberler">Haberler</Link>
                        </li>
                        <li>
                          <Link href="/kvkk">Gizlilik ve Kvkk Politikası</Link>
                        </li>
                        <li>
                          <Link href="/products">Ürünlerimiz</Link>
                        </li>
                        <li>
                          <Link href="/iletisim">İletişim</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*End single footer widget*/}
            {/*Start single footer widget*/}
            <div className="col-xl-4 col-lg-5 col-md-12 col-sm-12">
              <div className="single-footer-widget">
                <div className="title">
                  <h3>Çalışmalarımız</h3>
                </div>
                <ul className="case-studies">
                  <li>
                    <div className="img-holder">
                      <img
                        src="images/footer/case-studie-1.jpg"
                        alt="Awesome Image"
                      />
                      <div className="overlay-style-one">
                        <div className="box">
                          <div className="content">
                            <Link href="/projeler">
                              <span className="icon-plus" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="img-holder">
                      <img
                        src="images/footer/case-studie-2.jpg"
                        alt="Awesome Image"
                      />
                      <div className="overlay-style-one">
                        <div className="box">
                          <div className="content">
                            <Link href="/projeler">
                              <span className="icon-plus" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="img-holder">
                      <img
                        src="images/footer/case-studie-3.jpg"
                        alt="Awesome Image"
                      />
                      <div className="overlay-style-one">
                        <div className="box">
                          <div className="content">
                            <Link href="/projeler">
                              <span className="icon-plus" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="img-holder">
                      <img
                        src="images/footer/case-studie-4.jpg"
                        alt="Awesome Image"
                      />
                      <div className="overlay-style-one">
                        <div className="box">
                          <div className="content">
                            <Link href="/projeler">
                              <span className="icon-plus" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="img-holder">
                      <img
                        src="images/footer/case-studie-5.jpg"
                        alt="Awesome Image"
                      />
                      <div className="overlay-style-one">
                        <div className="box">
                          <div className="content">
                            <Link href="/projeler">
                              <span className="icon-plus" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="img-holder">
                      <img
                        src="images/footer/case-studie-6.jpg"
                        alt="Awesome Image"
                      />
                      <div className="overlay-style-one">
                        <div className="box">
                          <div className="content">
                            <Link href="/projeler">
                              <span className="icon-plus" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/*End single footer widget*/}
          </div>
        </div>
      </footer>
      {/*End footer area*/}
      {/*Start footer bottom area*/}
      <section className="footer-bottom-area">
        <div className="container inner-content">
          <div className="row">
            <div className="col-xl-4 col-lg-5 col-md-6 col-sm-12">
              <div className="copyright-text">
                <p>
                  © 2016–2023 All Rights Reserved by <Link href="https://www.ezngroup.com/">EZN Group</Link>{" "}
                  <br />
                  Certified EZN Group Company.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div className="call-us-now">
                <div className="icon">
                  <span className="icon-call"/>
                </div>
                <div className="title">
                  <span>Soru ve Görüşleriniz için</span>
                  <h3>(+90) 555 091 10 60</h3>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-3 col-md-12 col-sm-12">
              <div className="footer-social-links float-right">
                <ul className="sociallinks-style-two fix">
                  <li>
                    <Link href="https://www.facebook.com/profile.php?id=100089088175510">
                      <i className="fa fa-facebook" aria-hidden="true" />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.youtube.com/@eznsolar">
                      <i className="fa fa-youtube-play" aria-hidden="true" />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://instagram.com/eznsolar?igshid=ZDdkNTZiNTM=">
                      <i className="fa fa-instagram" aria-hidden="true" />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.linkedin.com/">
                      <i className="fa fa-linkedin" aria-hidden="true" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer;