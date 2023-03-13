import Layout from "@/components/Layout"
import Link from "next/link"


function About() {

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
                                        <h1>Hakkımızda</h1>
                                    </div>
                                    <div className="breadcrumb-menu float-right">
                                        <ul className="clearfix">
                                            <li>
                                                <Link href="/">Anasayfa</Link>
                                            </li>
                                            <li className="active">Hakkımızda</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*End breadcrumb area*/}
                {/*Start WhoWe Are Area*/}
                <section className="whowe-are-area">
                    <div className="container">
                        <div className="sec-title text-center">
                            <p>BİZ KİMİZ</p>
                            <div className="title">EZN Solar</div>
                            <div className="border-box center" />
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="company-info-box">
                                    <p>
                                        EZN Solar enerji sektöründeki teknolojik gelişmeleri yakından takip ederek yenilenebilir
                                        enerji sektöründe benzersiz ürün çeşitliliği sağlamak üzerine faaliyet göstermektedir.
                                        Bünyemizde gerçekleştirdiğimiz Ar-Ge çalışmaları ile sürekli gelişim içerisinde olan enerji
                                        sektöründe Türkiye’nin kalkınmasında ve ekonomik güce katkı anlamında aktif rol oynamayı hedeflemekteyiz.
                                    </p>
                                    <h3>Enes Bolat</h3>
                                    <span>Genel Müdür &amp; Kurucu Üye</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-6 col-lg-6">
                                <div className="whowe-are-image">
                                    <img src="images/resources/whowe-are-1.jpg" alt="Awesome Image" />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="whowe-are-image">
                                    <img src="images/resources/whowe-are-2.jpg" alt="Awesome Image" />
                                </div>
                            </div>
                        </div>
                        <div className="row whowe-are">
                            {/*Start Single Whowe Are Box*/}
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                                <div className="single-whowe-are-box text-center">
                                    <div className="count-box">01</div>
                                    <div className="icon">
                                        <span className="icon-null-2" />
                                    </div>
                                    <div className="text">
                                        <h3>Değerlerimiz</h3>
                                        <p>
                                            Doğa odaklı üretim ile insana ve çevreye duyarlı güler yüzlü hizmet verebilmek.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/*End Single Whowe Are Box*/}
                            {/*Start Single Whowe Are Box*/}
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                                <div className="single-whowe-are-box text-center">
                                    <div className="count-box">02</div>
                                    <div className="icon">
                                        <span className="icon-null-3" />
                                    </div>
                                    <div className="text">
                                        <h3>Güvenlik &amp; Sürdürülebilirlik</h3>
                                        <p>
                                            Güneş enerjisi kullanımı, karbondioksit emisyonlarını azaltmaya yardımcı olur ve doğal kaynaklarımızı korur.
                                            Ancak, güneş enerjisi sistemlerinin güvenliği ve sürdürülebilirliği, doğru tasarım, kurulum ve bakım gerektirir.

                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/*End Single Whowe Are Box*/}
                            {/*Start Single Whowe Are Box*/}
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                                <div className="single-whowe-are-box text-center">
                                    <div className="count-box">03</div>
                                    <div className="icon">
                                        <span className="icon-career" />
                                    </div>
                                    <div className="text">
                                        <h3>Kariyer ve Takım Çalışması</h3>
                                        <p>
                                            Ezn solar olarak tüm çalışanlarımızı ailemizin bir bireyi olarak görmekte ve her çalışanın kariyer hedeflerini yerine getirmek için desteklemekteyiz.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/*End Single Whowe Are Box*/}
                        </div>
                    </div>
                </section>
                {/*End WhoWe Are Area*/}
                {/*Stsrt Mission Vision Area*/}
                <section className="mission-vision-area">
                    <div className="container-fluid inner-content">
                        <div className="row mar0">
                            <div className="col-xl-6 pd0">
                                <div className="video-holder-box">
                                    <div className="img-holder">
                                        <img
                                            src="images/resources/video-gallery-bg.jpg"
                                            alt="Awesome Image"
                                        />
                                        <div className="icon-holder">
                                            <div className="icon">
                                                <div className="inner text-center">
                                                    <Link
                                                        className="html5lightbox wow zoomIn"
                                                        data-wow-delay="300ms"
                                                        data-wow-duration="1500ms"
                                                        title="Solartech Video Gallery"
                                                        href="https://www.youtube.com/watch?v=f0tx0AX0zvE&ab_channel=EzNSolar"
                                                    >
                                                        <span className="icon-null-4" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 pd0">
                                <div className="mission-vision-content">
                                    <div className="row mar0">
                                        <div className="col-xl-6 col-lg-6 col-md-6 pd0">
                                            <div className="single-box">
                                                <img src="images/resources/mission.jpg" alt="Awesome Image" />
                                                <div className="title">
                                                    <h3>Misyonumuz</h3>
                                                </div>
                                                <div className="overlay-content">
                                                    <div className="top">
                                                        <div className="icon">
                                                            <span className="icon-null-5" />
                                                        </div>
                                                        <div className="big-title">m</div>
                                                    </div>
                                                    <div className="text">
                                                        <h3>Misyonumuz</h3>
                                                        <p>
                                                            Güneş enerjisi teknolojisinin geliştirilmesi ve yaygınlaştırılması yoluyla,
                                                            doğal ve yenilenebilir enerji kaynaklarına dayalı bir dünya hedefliyoruz.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 pd0">
                                            <div className="single-box">
                                                <img src="images/resources/vision.jpg" alt="Awesome Image" />
                                                <div className="title">
                                                    <h3>Vizyonumuz</h3>
                                                </div>
                                                <div className="overlay-content">
                                                    <div className="top">
                                                        <div className="icon">
                                                            <span className="icon-career" />
                                                        </div>
                                                        <div className="big-title">v</div>
                                                    </div>
                                                    <div className="text">
                                                        <h3>Vizyonumuz</h3>
                                                        <p>
                                                            İnsanların ihtiyaçlarını karşılamak ve gelecek nesillere daha iyi bir dünya bırakmak için öncü bir rol üstlenmekteyiz.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*End Mission Vision Area*/}
                {/*Start Choose area*/}
                <section className="choose-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6">
                                <div className="why-whoose-content">
                                    <div className="sec-title">
                                        <p>Neden EZN Solar</p>
                                        <div className="title">
                                            Sizin İçin
                                            <br /> en İyi olanı yapıyoruz
                                        </div>
                                        <div className="border-box" />
                                    </div>
                                    <div className="inner-content">
                                        <p>
                                            Kaliteli ürünleri sizlere sunmayı ve müşteri memnuniyetini kendimize misyon edindik.
                                        </p>
                                        <ul>
                                            <li>
                                                <span className="icon-smile" />
                                                Ücretsiz Keşif
                                            </li>
                                            <li>
                                                <span className="icon-smile" />
                                                Mühendislik Hizmeti
                                            </li>
                                            <li>
                                                <span className="icon-smile" />
                                                Satış Sonrası Destek
                                            </li>
                                            <li>
                                                <span className="icon-smile" />
                                                En iyi fiyat ve Kalite
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="whychoose-right-content">
                                    <ul>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-save" />
                                            </div>
                                            <div className="text">
                                                <h3>Sürdürülebilir &amp; Yenilenebilir Enerji</h3>
                                                <p>
                                                    Güneş enerjisi, yenilenebilir bir enerji kaynağıdır ve kirlilik veya atık üretmez.
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-label" />
                                            </div>
                                            <div className="text">
                                                <h3>Destek &amp; Garanti</h3>
                                                <p>
                                                    Kurulumu takiben 2 yıl destek ve standart 2 yıllık elektronik ürün garantilerine ek olarak güneş paneli garanti süreleri 10-15 yıl aralığındadır.
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-money-1" />
                                            </div>
                                            <div className="text">
                                                <h3>Krediye Uygunluk</h3>
                                                <p>
                                                    Kredi hizmetlerinde ve devlet destekli projelerde sizin adınıza uzman ekiplerimiz tarafndan resmi işlemlerin yapılması.
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*End Choose area*/}
                {/*Start Fact Counter Area*/}
                <section
                    className="fact-counter-area"
                    style={{
                        backgroundImage: "url(images/parallax-background/fact-counter-bg.jpg)"
                    }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <ul className="fact-counter style2">
                                    <li
                                        className="single-fact-counter style2 wow fadeInLeft"
                                        data-wow-delay="100ms"
                                        data-wow-duration="1500ms"
                                    >
                                        <div className="count-box">
                                            <h1>
                                                <i className="flaticon-add" />
                                                <span
                                                    className="timer"
                                                    data-from={1}
                                                    data-to={15}
                                                    data-speed={1000}
                                                    data-refresh-interval={50}
                                                >
                                                    15
                                                </span>
                                            </h1>
                                            <div className="title">
                                                <h3>
                                                    15 Tamamlanmış Proje
                                                    <br /> Başarıyla
                                                </h3>
                                            </div>
                                        </div>
                                    </li>
                                    <li
                                        className="single-fact-counter style2 wow fadeInLeft"
                                        data-wow-delay="300ms"
                                        data-wow-duration="1500ms"
                                    >
                                        <div className="count-box">
                                            <h1>
                                                <i className="flaticon-percentage" />
                                                <span
                                                    className="timer"
                                                    data-from={1}
                                                    data-to={100}
                                                    data-speed={5000}
                                                    data-refresh-interval={50}
                                                >
                                                    100
                                                </span>
                                            </h1>
                                            <div className="title">
                                                <h3>
                                                    Olumlu Geridönüş
                                                    <br /> Müşterilerimizin %100
                                                </h3>
                                            </div>
                                        </div>
                                    </li>
                                    <li
                                        className="single-fact-counter style2 wow fadeInLeft"
                                        data-wow-delay="500ms"
                                        data-wow-duration="1500ms"
                                    >
                                        <div className="count-box">
                                            <h1>
                                                <i className="flaticon-add" />
                                                <span
                                                    className="timer"
                                                    data-from={1}
                                                    data-to={5}
                                                    data-speed={1000}
                                                    data-refresh-interval={10}
                                                >
                                                    5
                                                </span>
                                            </h1>
                                            <div className="title">
                                                <h3>
                                                    5+ Yıllık Tecrübe
                                                    <br /> Uzman Kadro
                                                </h3>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Start Fact Counter Area*/}
                {/*Start team area*/}
                <section className="team-area">
                    <div className="container">
                        <div className="sec-title text-center">
                            <p>Çalışma Arkadaşlarımız</p>
                            <div className="title">Ezn Solar  </div>
                            <div className="border-box center" />
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="team-carousel owl-carousel owl-theme">
                                    {/*Start single item member*/}
                                    <div className="single-team-member">
                                        <div className="img-holder">
                                            <img src="images/team/1.jpg" alt="Awesome Image" />
                                        </div>
                                        <div className="name text-center">
                                            <h3>Enes Bolat</h3>
                                            <p>Genel Müdür &amp; Kurucu Üye</p>
                                        </div>
                                        <div className="name text-center overlay-content">
                                            <h3>Enes Bolat</h3>
                                            <p>Genel Müdür &amp; Kurucu Üye</p>
                                            <ul className="sociallinks">
                                                <li>
                                                    <Link href="https://www.facebook.com/enes.bolat.7547">
                                                        <i className="fa fa-facebook" aria-hidden="true" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="https://twitter.com/">
                                                        <i className="fa fa-twitter" aria-hidden="true" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="https://www.instagram.com/">
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
                                    {/*End single item member*/}
                                    {/*Start single item member*/}
                                    <div className="single-team-member">
                                        <div className="img-holder">
                                            <img src="images/team/2.jpg" alt="Awesome Image" />
                                        </div>
                                        <div className="name text-center">
                                            <h3>Emre Bezirganoğlu</h3>
                                            <p>Mühendis</p>
                                        </div>
                                        <div className="name text-center overlay-content">
                                            <h3>Emre Bezirganoğlu</h3>
                                            <p>Mühendis</p>
                                            <ul className="sociallinks">
                                                <li>
                                                    <Link href="https://www.facebook.com/profile.php?id=100089557390086">
                                                        <i className="fa fa-facebook" aria-hidden="true" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="https://twitter.com/">
                                                        <i className="fa fa-twitter" aria-hidden="true" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="https://www.instagram.com/">
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
                                    {/*End single item member*/}
                                    {/*Start single item member*/}
                                    <div className="single-team-member">
                                        <div className="img-holder">
                                            <img src="images/team/3.jpg" alt="Awesome Image" />
                                        </div>
                                        <div className="name text-center">
                                            <h3>Şaban Karaman</h3>
                                            <p>Satış ve Pazarlama</p>
                                        </div>
                                        <div className="name text-center overlay-content">
                                            <h3>Şaban Karaman</h3>
                                            <p>Satış ve Pazarlama</p>
                                            <ul className="sociallinks">
                                                <li>
                                                    <Link href="https://www.facebook.com/enes.bolat.7547">
                                                        <i className="fa fa-facebook" aria-hidden="true" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="https://twitter.com/">
                                                        <i className="fa fa-twitter" aria-hidden="true" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="https://www.instagram.com/">
                                                        <i className="fa fa-instagram" aria-hidden="true" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="https://www.linkedin.com/in/saban-karaman-32214a172/">
                                                        <i className="fa fa-linkedin" aria-hidden="true" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/*End single item member*/}
                                    {/*Start single item member*/}
                                    <div className="single-team-member">
                                        <div className="img-holder">
                                            <img src="images/team/4.jpg" alt="Awesome Image" />
                                        </div>
                                        <div className="name text-center">
                                            <h3>Yasin Bolat</h3>
                                            <p>Halkla İlişkiler</p>
                                        </div>
                                        <div className="name text-center overlay-content">
                                            <h3>Yasin Bolat</h3>
                                            <p>Halkla İlişkiler</p>
                                            <ul className="sociallinks">
                                                <li>
                                                    <Link href="https://www.facebook.com/yan.pltt">
                                                        <i className="fa fa-facebook" aria-hidden="true" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="https://twitter.com/">
                                                        <i className="fa fa-twitter" aria-hidden="true" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="https://www.instagram.com/">
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
                                    {/*End single item member*/}

                                    {/*End single item member*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*End team area*/}
                {/*Start Brand area*/}
                <section className="brand-area style2">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <ul className="brand-items">
                                    {/*Start Single Brand Item*/}
                                    <li
                                        className="single-brand-item wow fadeInUp"
                                        data-wow-delay="0ms"
                                        data-wow-duration="1500ms"
                                    >
                                        <Link href="https://cw-enerji.com/tr/index.html">
                                            <img src="images/brand/1.png" alt="Awesome Brand Image" />
                                        </Link>
                                        <div className="overlay-box">
                                            <Link href="https://cw-enerji.com/tr/index.html">
                                                <img
                                                    src="images/brand/1-hover.png"
                                                    alt="Awesome Brand Image"
                                                />
                                            </Link>
                                        </div>
                                    </li>
                                    {/*End Single Brand Item*/}
                                    {/*Start Single Brand Item*/}
                                    <li
                                        className="single-brand-item wow fadeInUp"
                                        data-wow-delay="0ms"
                                        data-wow-duration="1500ms"
                                    >
                                        <Link href="https://www.argefen.com/">
                                            <img src="images/brand/6.jpg" alt="Awesome Brand Image" />
                                        </Link>
                                        <div className="overlay-box">
                                            <Link href="https://www.argefen.com/">
                                                <img
                                                    src="images/brand/6-hover.jpg"
                                                    alt="Awesome Brand Image"
                                                />
                                            </Link>
                                        </div>
                                    </li>
                                    {/*End Single Brand Item*/}
                                    {/*Start Single Brand Item*/}
                                    <li
                                        className="single-brand-item wow fadeInUp"
                                        data-wow-delay="200ms"
                                        data-wow-duration="1500ms"
                                    >
                                        <Link href="http://www.akinpompa.com.tr/">
                                            <img src="images/brand/2.png" alt="Awesome Brand Image" />
                                        </Link>
                                        <div className="overlay-box">
                                            <Link href="http://www.akinpompa.com.tr/">
                                                <img
                                                    src="images/brand/2-hover.png"
                                                    alt="Awesome Brand Image"
                                                />
                                            </Link>
                                        </div>
                                    </li>
                                    {/*End Single Brand Item*/}
                                    {/*Start Single Brand Item*/}
                                    <li
                                        className="single-brand-item wow fadeInUp"
                                        data-wow-delay="400ms"
                                        data-wow-duration="1500ms"
                                    >
                                        <Link href="http://www.gazioglusolar.com.tr/">
                                            <img src="images/brand/3.png" alt="Awesome Brand Image" />
                                        </Link>
                                        <div className="overlay-box">
                                            <Link href="http://www.gazioglusolar.com.tr/">
                                                <img
                                                    src="images/brand/3-hover.png"
                                                    alt="Awesome Brand Image"
                                                />
                                            </Link>
                                        </div>
                                    </li>
                                    {/*End Single Brand Item*/}
                                    {/*Start Single Brand Item*/}
                                    <li
                                        className="single-brand-item wow fadeInUp"
                                        data-wow-delay="600ms"
                                        data-wow-duration="1500ms"
                                    >
                                        <Link href="https://www.sunsolarenerji.com/index.html">
                                            <img src="images/brand/4.png" alt="Awesome Brand Image" />
                                        </Link>
                                        <div className="overlay-box">
                                            <Link href="https://www.sunsolarenerji.com/index.html">
                                                <img
                                                    src="images/brand/4-hover.png"
                                                    alt="Awesome Brand Image"
                                                />
                                            </Link>
                                        </div>
                                    </li>
                                    {/*End Single Brand Item*/}
                                    {/*Start Single Brand Item*/}
                                    <li
                                        className="single-brand-item wow fadeInUp"
                                        data-wow-delay="800ms"
                                        data-wow-duration="1500ms"
                                    >
                                        <Link href="#">
                                            <img src="images/brand/5.png" alt="Awesome Brand Image" />
                                        </Link>
                                        <div className="overlay-box">
                                            <Link href="#">
                                                <img
                                                    src="images/brand/5-hover.png"
                                                    alt="Awesome Brand Image"
                                                />
                                            </Link>
                                        </div>
                                    </li>
                                    {/*End Single Brand Item*/}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                {/*End Brand area*/}

            </div>
        </Layout>
    )
}

export default About