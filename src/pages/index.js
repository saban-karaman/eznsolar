import Head from 'next/head'
import Layout from '@/components/Layout'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '@/GlobalRedux/basket/basketSlice'

export default function Home() {

  const productRef = useRef(false)
  // const { allProducts } = useSelector(state => state.basket)
  const dispatch = useDispatch()


  useEffect(() => {
    if (productRef.current === false) {
      dispatch(fetchProducts())
    }
    return () => {
      productRef.current = true
    }

  }, [])
  return (
    <>
      <Head>
        <title>EzN SOLAR</title>

      </Head>
      <main>
        <Layout>
          <div className="boxed_wrapper">
            <div />
            {/* <Header/> */}
            {/*Main Slider*/}
            <section className="main-slider">
              <div
                className="rev_slider_wrapper fullwidthbanner-container"
                id="rev_slider_one_wrapper"
                data-source="gallery"
              >
                <div
                  className="rev_slider fullwidthabanner"
                  id="rev_slider_one"
                  data-version="5.4.1"
                >
                  <ul>
                    <li
                      data-description="Slide Description"
                      data-easein="default"
                      data-easeout="default"
                      data-fsmasterspeed={1500}
                      data-fsslotamount={7}
                      data-fstransition="fade"
                      data-hideafterloop={0}
                      data-hideslideonmobile="off"
                      data-index="rs-1689"
                      data-masterspeed="default"
                      data-param1=""
                      data-param10=""
                      data-param2=""
                      data-param3=""
                      data-param4=""
                      data-param5=""
                      data-param6=""
                      data-param7=""
                      data-param8=""
                      data-param9=""
                      data-rotate={0}
                      data-saveperformance="off"
                      data-slotamount="default"
                      data-thumb="images/slides/v1-1.jpg"
                      data-title="Slide Title"
                      data-transition="parallaxvertical"
                    >
                      <img
                        alt=""
                        className="rev-slidebg"
                        data-bgfit="cover"
                        data-bgparallax={10}
                        data-bgposition="center center"
                        data-bgrepeat="no-repeat"
                        data-no-retina=""
                        src="images/slides/v1-1.jpg"
                      />
                      <div
                        className="tp-caption"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingtop="[0,0,0,0]"
                        data-responsive_offset="on"
                        data-type="text"
                        data-height="none"
                        data-width="['1000','900','700','450']"
                        data-whitespace="normal"
                        data-hoffset="['15','15','15','15']"
                        data-voffset="['-150','-130','-120','-125']"
                        data-x="['center','center','center','center']"
                        data-y="['middle','middle','middle','middle']"
                        data-textalign="['top','top','top','top']"
                        data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},
                    {"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
                        style={{ zIndex: 7, whiteSpace: "nowrap" }}
                      >
                        <div className="slide-content middle-slide text-center">
                          <div className="icon-holder">
                            <span className="icon-power" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="tp-caption"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingtop="[0,0,0,0]"
                        data-responsive_offset="on"
                        data-type="text"
                        data-height="none"
                        data-width="['1000','900','700','450']"
                        data-whitespace="normal"
                        data-hoffset="['15','15','15','15']"
                        data-voffset="['-55','-60','-55','-65']"
                        data-x="['center','center','center','center']"
                        data-y="['middle','middle','middle','middle']"
                        data-textalign="['top','top','top','top']"
                        data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1500,"ease":"Power3.easeInOut"},
                    {"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
                        style={{ zIndex: 7, whiteSpace: "nowrap" }}
                      >
                        <div className="slide-content middle-slide text-center">
                          <div className="text">BİREYSEL &amp; DEVLET DESTEKLİ PROJELER</div>
                        </div>
                      </div>
                      <div
                        className="tp-caption"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingtop="[0,0,0,0]"
                        data-responsive_offset="on"
                        data-type="text"
                        data-height="none"
                        data-width="['1000','900','700','450']"
                        data-whitespace="normal"
                        data-hoffset="['15','15','15','15']"
                        data-voffset="['55','30','25','5']"
                        data-x="['center','center','center','center']"
                        data-y="['middle','middle','middle','middle']"
                        data-textalign="['top','top','top','top']"
                        data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
                        style={{ zIndex: 7, whiteSpace: "nowrap" }}
                      >
                        <div className="slide-content middle-slide text-center">
                          <div className="big-title">
                            Tarımsal sulamada
                            <br />  güneş panelleri
                          </div>
                        </div>
                      </div>
                      <div
                        className="tp-caption"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingtop="[0,0,0,0]"
                        data-responsive_offset="on"
                        data-type="text"
                        data-height="none"
                        data-width="['1000','900','700','450']"
                        data-whitespace="normal"
                        data-hoffset="['15','15','15','15']"
                        data-voffset="['200','155','140','110']"
                        data-x="['center','center','center','center']"
                        data-y="['middle','middle','middle','middle']"
                        data-textalign="['top','top','top','top']"
                        data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1500,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
                        style={{ zIndex: 7, whiteSpace: "nowrap" }}
                      >
                        <div className="slide-content middle-slide text-center">
                          <div className="btn-box">
                            <Link className="btn-one" href="/iletisim">
                              <b>Randevu Al</b>
                              <span className="icon-null" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      data-description="Slide Description"
                      data-easein="default"
                      data-easeout="default"
                      data-fsmasterspeed={1500}
                      data-fsslotamount={7}
                      data-fstransition="fade"
                      data-hideafterloop={0}
                      data-hideslideonmobile="off"
                      data-index="rs-1687"
                      data-masterspeed="default"
                      data-param1=""
                      data-param10=""
                      data-param2=""
                      data-param3=""
                      data-param4=""
                      data-param5=""
                      data-param6=""
                      data-param7=""
                      data-param8=""
                      data-param9=""
                      data-rotate={0}
                      data-saveperformance="off"
                      data-slotamount="default"
                      data-thumb="images/slides/v1-2.jpg"
                      data-title="Slide Title"
                      data-transition="parallaxvertical"
                    >
                      <img
                        alt=""
                        className="rev-slidebg"
                        data-bgfit="cover"
                        data-bgparallax={10}
                        data-bgposition="center center"
                        data-bgrepeat="no-repeat"
                        data-no-retina=""
                        src="images/slides/v1-2.jpg"
                      />
                      <div
                        className="tp-caption"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingtop="[0,0,0,0]"
                        data-responsive_offset="on"
                        data-type="text"
                        data-height="none"
                        data-width="['1000','900','700','450']"
                        data-whitespace="normal"
                        data-hoffset="['15','15','15','15']"
                        data-voffset="['-150','-130','-120','-125']"
                        data-x="['center','center','center','center']"
                        data-y="['middle','middle','middle','middle']"
                        data-textalign="['top','top','top','top']"
                        data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},
                    {"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
                        style={{ zIndex: 7, whiteSpace: "nowrap" }}
                      >
                        <div className="slide-content middle-slide text-center">
                          <div className="icon-holder">
                            <span className="icon-solar" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="tp-caption"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingtop="[0,0,0,0]"
                        data-responsive_offset="on"
                        data-type="text"
                        data-height="none"
                        data-width="['1000','900','700','450']"
                        data-whitespace="normal"
                        data-hoffset="['15','15','15','15']"
                        data-voffset="['-55','-60','-55','-65']"
                        data-x="['center','center','center','center']"
                        data-y="['middle','middle','middle','middle']"
                        data-textalign="['top','top','top','top']"
                        data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1500,"ease":"Power3.easeInOut"},
                    {"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
                        style={{ zIndex: 7, whiteSpace: "nowrap" }}
                      >
                        <div className="slide-content middle-slide text-center">
                          <div className="text">FİRMALAR İÇİN PROJELER</div>
                        </div>
                      </div>
                      <div
                        className="tp-caption"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingtop="[0,0,0,0]"
                        data-responsive_offset="on"
                        data-type="text"
                        data-height="none"
                        data-width="['1000','900','700','450']"
                        data-whitespace="normal"
                        data-hoffset="['15','15','15','15']"
                        data-voffset="['55','30','25','5']"
                        data-x="['center','center','center','center']"
                        data-y="['middle','middle','middle','middle']"
                        data-textalign="['top','top','top','top']"
                        data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
                        style={{ zIndex: 7, whiteSpace: "nowrap" }}
                      >
                        <div className="slide-content middle-slide text-center">
                          <div className="big-title">
                            Firmanız için
                            <br /> enerjide tasarruf edin
                          </div>
                        </div>
                      </div>
                      <div
                        className="tp-caption"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingtop="[0,0,0,0]"
                        data-responsive_offset="on"
                        data-type="text"
                        data-height="none"
                        data-width="['1000','900','700','450']"
                        data-whitespace="normal"
                        data-hoffset="['15','15','15','15']"
                        data-voffset="['200','155','140','110']"
                        data-x="['center','center','center','center']"
                        data-y="['middle','middle','middle','middle']"
                        data-textalign="['top','top','top','top']"
                        data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1500,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
                        style={{ zIndex: 7, whiteSpace: "nowrap" }}
                      >
                        <div className="slide-content middle-slide text-center">
                          <div className="btn-box">
                            <Link className="btn-one" href="/iletisim">
                              <b>Randevu Al</b>
                              <span className="icon-null" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      data-description="Slide Description"
                      data-easein="default"
                      data-easeout="default"
                      data-fsmasterspeed={1500}
                      data-fsslotamount={7}
                      data-fstransition="fade"
                      data-hideafterloop={0}
                      data-hideslideonmobile="off"
                      data-index="rs-1688"
                      data-masterspeed="default"
                      data-param1=""
                      data-param10=""
                      data-param2=""
                      data-param3=""
                      data-param4=""
                      data-param5=""
                      data-param6=""
                      data-param7=""
                      data-param8=""
                      data-param9=""
                      data-rotate={0}
                      data-saveperformance="off"
                      data-slotamount="default"
                      data-thumb="images/slides/v1-2.jpg"
                      data-title="Slide Title"
                      data-transition="parallaxvertical"
                    >
                      <img
                        alt=""
                        className="rev-slidebg"
                        data-bgfit="cover"
                        data-bgparallax={10}
                        data-bgposition="center center"
                        data-bgrepeat="no-repeat"
                        data-no-retina=""
                        src="images/slides/v1-3.jpg"
                      />
                      <div
                        className="tp-caption"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingtop="[0,0,0,0]"
                        data-responsive_offset="on"
                        data-type="text"
                        data-height="none"
                        data-width="['1000','900','700','450']"
                        data-whitespace="normal"
                        data-hoffset="['15','15','15','15']"
                        data-voffset="['-150','-130','-120','-125']"
                        data-x="['center','center','center','center']"
                        data-y="['middle','middle','middle','middle']"
                        data-textalign="['top','top','top','top']"
                        data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},
                    {"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
                        style={{ zIndex: 7, whiteSpace: "nowrap" }}
                      >
                        <div className="slide-content middle-slide text-center">
                          <div className="icon-holder">
                            <span className="icon-power-1" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="tp-caption"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingtop="[0,0,0,0]"
                        data-responsive_offset="on"
                        data-type="text"
                        data-height="none"
                        data-width="['1000','900','700','450']"
                        data-whitespace="normal"
                        data-hoffset="['15','15','15','15']"
                        data-voffset="['-55','-60','-55','-65']"
                        data-x="['center','center','center','center']"
                        data-y="['middle','middle','middle','middle']"
                        data-textalign="['top','top','top','top']"
                        data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1500,"ease":"Power3.easeInOut"},
                    {"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
                        style={{ zIndex: 7, whiteSpace: "nowrap" }}
                      >
                        <div className="slide-content middle-slide text-center">
                          <div className="text">MÜSTAKİL YAPILAR İÇİN PROJELER</div>
                        </div>
                      </div>
                      <div
                        className="tp-caption"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingtop="[0,0,0,0]"
                        data-responsive_offset="on"
                        data-type="text"
                        data-height="none"
                        data-width="['1000','900','700','450']"
                        data-whitespace="normal"
                        data-hoffset="['15','15','15','15']"
                        data-voffset="['55','30','25','5']"
                        data-x="['center','center','center','center']"
                        data-y="['middle','middle','middle','middle']"
                        data-textalign="['top','top','top','top']"
                        data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
                        style={{ zIndex: 7, whiteSpace: "nowrap" }}
                      >
                        <div className="slide-content middle-slide text-center">
                          <div className="big-title">
                            Eviniz için
                            <br /> solar enerji çözümleri
                          </div>
                        </div>
                      </div>
                      <div
                        className="tp-caption"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingtop="[0,0,0,0]"
                        data-responsive_offset="on"
                        data-type="text"
                        data-height="none"
                        data-width="['1000','900','700','450']"
                        data-whitespace="normal"
                        data-hoffset="['15','15','15','15']"
                        data-voffset="['200','155','140','110']"
                        data-x="['center','center','center','center']"
                        data-y="['middle','middle','middle','middle']"
                        data-textalign="['top','top','top','top']"
                        data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1500,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
                        style={{ zIndex: 7, whiteSpace: "nowrap" }}
                      >
                        <div className="slide-content middle-slide text-center">
                          <div className="btn-box">
                            <Link className="btn-one" href="/iletisim">
                              <b>Randevu Al</b>
                              <span className="icon-null" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            {/*End Main Slider*/}
            {/*Start about area*/}
            <section className="about-area">
              <div className="container">
                <div className="row">
                  <div className="col-xl-6">
                    <div className="about-image-box">
                      <div className="icon-box">
                        <span className="icon-solar-energy" />
                      </div>
                      <div className="image-box-one">
                        <img src="images/resources/about-1.png" alt="Awesome Image" />
                      </div>
                      <div className="image-box-two">
                        <img src="images/resources/about-2.png" alt="Awesome Image" />
                      </div>
                      <div className="image-box-three">
                        <img src="images/resources/about-3.png" alt="Awesome Image" />
                      </div>
                      <div className="image-box-four">
                        <img src="images/resources/about-4.png" alt="Awesome Image" />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="about-text">
                      <div className="sec-title">
                        <p>FİRMAMIZ HAKKINDA</p>
                        <div className="title">Sürdürülebilir &amp; Yenilenebilir</div>
                        <div className="border-box" />
                      </div>
                      <div className="inner-content">
                        <h3>Güneşin Gücünü En İyi Şekilde Kullanın</h3>
                        <div className="text">
                          <p>
                            Güneş enerjisi, yenilenebilir bir enerji kaynağıdır ve kirlilik veya atık üretmez.
                            Ayrıca, güneş enerjisi için gerekli malzemeler geniş ölçüde mevcuttur ve
                            güneş enerjisi üretimi için gereken maliyetler azalmaktadır.
                          </p>
                          <p>
                            Güneş enerjisi, gelecekteki enerji ihtiyaçlarının büyük bir bölümünü karşılamaya devam edecek
                            ve dünya çapında güneş enerjisi üretiminde hızlı bir artış beklenmektedir.
                          </p>
                        </div>
                        <ul className="solar-services">
                          <li className="single-solar-box">
                            <div className="icon">
                              <span className="icon-farm" />
                            </div>
                            <div className="title">
                              <h3>
                                Tarımda
                                <br /> Güneş Enerjisi
                              </h3>
                            </div>
                          </li>
                          <li className="single-solar-box">
                            <div className="icon">
                              <span className="icon-farming-and-gardening" />
                            </div>
                            <div className="title">
                              <h3>
                                Evlerde
                                <br /> Güneş Enerjisi
                              </h3>
                            </div>
                          </li>
                        </ul>
                        <div className="button">
                          <Link className="btn-two" href="/hakkimizda">
                            Ezn Solar Hakkında
                            <span className="icon-null" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*End about Area*/}
            {/*Start slogan area*/}
            <section className="slogan-area martop-minus">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="inner-content fix">
                      <div className="title float-left">
                        <h2>
                          Sizin için tasarlanan
                          <br /> projeler ile tasarruf edin
                        </h2>
                      </div>
                      <div className="button float-right">
                        <Link className="btn-three" href="/iletisim">
                          ÜCRETSİZ KEŞİF İÇİN RANDEVU AL
                          <span className="icon-null" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*End slogan area*/}
            {/*Start services style1 area*/}
            <section className="services-style1-area">
              <div className="container">
                <div className="sec-title with-text text-center">
                  <p>SERVİSLERİMİZ</p>
                  <div className="title">Uzman Personel İle Kaliteli Hizmet</div>
                  <div className="border-box center" />
                  <span>
                    Kalite, Ezn Solar ile enerji ile ilişkinizi yeniden tanımlıyor. Tasarruf ederek, para biriktirin. Karbon ayak izinizi en aza indirin. Enerji maliyetlerinizin kontrolünü bugün elinize alın!
                  </span>
                </div>
                <div className="row">
                  {/*Start single solution style1*/}
                  <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                    <div className="single-service-style1">
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
                          Ücretsi Keşif hizmetimiz ile uzman personelimizin analizleri doğrultusunda projenizi elde edebilir...
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
                    <div className="single-service-style1">
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
                          Ezn Solar olarak bünyemizde satış ve kurulumunu gerçekleştirdiğimiz,
                          bakım ve servis hizmetlerini gerçekleştirmekteyiz....
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
                    <div className="single-service-style1">
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
                </div>
                <div className="row">
                  <div className="col-xl-12">
                    <div
                      className="emergency-call wow slideInUp"
                      data-wow-delay="200ms"
                      data-wow-duration="1500ms"
                    >
                      <h6>
                        Yardım ve Talepleriniz için destek hattımız{" "}
                        <span>+90 555 091 10 60</span>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*End services style1 area*/}
            {/*Start Why Choose Area*/}
            <section className="why-choose-area secpd1">
              <div className="container">
                <div className="sec-title">
                  <p>SOLAR ENERJİNİN FAYDALARI</p>
                  <div className="title">Güneş Enerjisi neden Önemli</div>
                  <div className="border-box" />
                </div>
                <div className="row">
                  <div className="col-xl-12">
                    <div className="choose-carousel owl-carousel owl-theme">
                      {/*Start Single Choose Box*/}
                      <div className="single-choose-box text-center">
                        <h3>
                          <Link href="/iletisim">
                            Enerjisini
                            <br /> Kendi Üretir
                          </Link>
                        </h3>
                        <span className="icon-null-1" />
                        <div className="button">
                          <Link href="/iletisim">
                            <span className="icon-null" />
                          </Link>
                        </div>
                        <div className="overlay-content">
                          <h3>
                            <Link href="/iletisim">
                              Enerjisini
                              <br /> Kendi Üretir
                            </Link>
                          </h3>
                          <p>
                            Güneş enerjisi, yenilenebilir bir enerji kaynağıdır ve kirlilik veya atık üretmez.
                          </p>
                          <div className="button">
                            <Link href="/iletisim">
                              <span className="icon-null" />
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/*End Single Choose Box*/}
                      {/*Start Single Choose Box*/}
                      <div className="single-choose-box text-center">
                        <h3>
                          <Link href="/iletisim">
                            Doğayı
                            <br /> Korur
                          </Link>
                        </h3>
                        <span className="icon-ecology" />
                        <div className="button">
                          <Link href="/iletisim">
                            <span className="icon-null" />
                          </Link>
                        </div>
                        <div className="overlay-content">
                          <h3>
                            <Link href="/iletisim">
                              Doğayı
                              <br /> Korur
                            </Link>
                          </h3>
                          <p>
                            Yenilebilir ve temiz enerji olması sebebi ile çevreye zararlı duman, gaz, karbon monoksit, kükürt ve radyasyon gibi etkileri yoktur.
                          </p>
                          <div className="button">
                            <Link href="/iletisim">
                              <span className="icon-null" />
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/*End Single Choose Box*/}
                      {/*Start Single Choose Box*/}
                      <div className="single-choose-box text-center">
                        <h3>
                          <Link href="/iletisim">
                            Uzun
                            <br /> Ömürlü
                          </Link>
                        </h3>
                        <span className="icon-solar-panel" />
                        <div className="button">
                          <Link href="/iletisim">
                            <span className="icon-null" />
                          </Link>
                        </div>
                        <div className="overlay-content">
                          <h3>
                            <Link href="/iletisim">
                              Uzun
                              <br /> Ömürlü
                            </Link>
                          </h3>
                          <p>
                            50 yıla varan kullanım ömürleri ile solar sistemler sayesinde siz de enerjiden fayda sağlayabilirsiniz
                          </p>
                          <div className="button">
                            <Link href="/iletisim">
                              <span className="icon-null" />
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/*End Single Choose Box*/}
                      {/*Start Single Choose Box*/}
                      <div className="single-choose-box text-center">
                        <h3>
                          <Link href="/iletisim">
                            Elektrik
                            <br /> Faturanızı Azaltır
                          </Link>
                        </h3>
                        <span className="icon-money" />
                        <div className="button">
                          <Link href="/iletisim">
                            <span className="icon-null" />
                          </Link>
                        </div>
                        <div className="overlay-content">
                          <h3>
                            <Link href="/iletisim">
                              Elektrik
                              <br /> Faturanızı Azaltır
                            </Link>
                          </h3>
                          <p>
                            Yaklaşık olarak 3 yıla yakın sürede kendini amorti eden solar sistemler
                          </p>
                          <div className="button">
                            <Link href="/iletisim">
                              <span className="icon-null" />
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/*End Single Choose Box*/}
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*End Why Choose Area*/}
            {/*Start Working Process Area*/}
            <section
              className="working-process-area"
              style={{
                backgroundImage: "url(images/parallax-background/working-process-bg.jpg)"
              }}
            >
              <div className="image-box wow fadeInRight" data-wow-duration="3000ms">
                <div className="image paroller">
                  <img
                    className="zoom-fade"
                    src="images/resources/working-process.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="container">
                <div className="sec-title with-text clrwhite text-center">
                  <p>ÇALIŞMA SÜRECİ</p>
                  <div className="title">Daha İyi Sonuçlar Nasıl Alınır?</div>
                  <div className="border-box center bgblue" />
                  <span>
                    Ezn Solar ile enerji ile ilişkinizi yeniden tanımlıyor. Tasarruf ederek, para biriktirin.
                    Karbon ayak izinizi en aza indirin. Enerji maliyetlerinizin kontrolünü bugün elinize alın!
                  </span>
                </div>
                <div className="row">
                  <div className="col-xl-12">
                    <div className="working-process-carousel owl-carousel owl-theme">
                      {/*Start Single Working Process*/}
                      <div className="single-working-process text-center">
                        <div className="top-box">
                          <h6>
                            Adım
                            <br /> 01
                          </h6>
                        </div>
                        <h3>
                          Uzman Ekip ile
                          <br /> Ücretsiz Keşif
                        </h3>
                        <p>
                          Uzman personelimiz tarafından çalışma sahasının analizini ücretsiz olarak yaptırabilirsiniz.{" "}
                        </p>
                        <div className="button">
                          <Link className="btn-two" href="/iletisim">
                            İLETİŞİM
                            <span className="icon-null" />
                          </Link>
                        </div>
                      </div>
                      {/*End Single Working Process*/}
                      {/*Start Single Working Process*/}
                      <div className="single-working-process text-center">
                        <div className="top-box">
                          <h6>
                            Adım
                            <br /> 02
                          </h6>
                        </div>
                        <h3>
                          Projenin Hazırlanması
                          <br /> Fiyatlandırma
                        </h3>
                        <p>
                          {" "}
                          Onaylı mühendislerimiz tarafında projenizin ve fiyat teklifinin hazırlanması{" "}
                        </p>
                        <div className="button">
                          <Link className="btn-two" href="/products">
                            ÜRÜNLERİMİZ
                            <span className="icon-null" />
                          </Link>
                        </div>
                      </div>
                      {/*End Single Working Process*/}
                      {/*Start Single Working Process*/}
                      <div className="single-working-process text-center">
                        <div className="top-box">
                          <h6>
                            Adım
                            <br /> 03
                          </h6>
                        </div>
                        <h3>
                          Solar
                          <br /> Panel Kurulumu
                        </h3>
                        <p>
                          Teknik ekiplerimiz ile sahada kurulumun sağlanması ve teslim edilmesi
                        </p>
                        <div className="button">
                          <Link className="btn-two" href="/kurulum">
                            Kurulum
                            <span className="icon-null" />
                          </Link>
                        </div>
                      </div>
                      {/*End Single Working Process*/}
                      {/*Start Single Working Process*/}
                      <div className="single-working-process text-center">
                        <div className="top-box">
                          <h6>
                            Adım
                            <br /> 01
                          </h6>
                        </div>
                        <h3>
                          Uzman Ekip ile
                          <br /> Ücretsiz Keşif
                        </h3>
                        <p>
                          Uzman personelimiz tarafından çalışma sahasının analizini ücretsiz olarak yaptırabilirsiniz.{" "}
                        </p>
                        <div className="button">
                          <Link className="btn-two" href="/iletisim">
                            İLETİŞİM
                            <span className="icon-null" />
                          </Link>
                        </div>
                      </div>
                      {/*End Single Working Process*/}
                      {/*Start Single Working Process*/}
                      <div className="single-working-process text-center">
                        <div className="top-box">
                          <h6>
                            Adım
                            <br /> 02
                          </h6>
                        </div>
                        <h3>
                          Projenin Hazırlanması
                          <br /> Fiyatlandırma
                        </h3>
                        <p>
                          {" "}
                          Onaylı mühendislerimiz tarafında projenizin ve fiyat teklifinin hazırlanması{" "}
                        </p>
                        <div className="button">
                          <Link className="btn-two" href="/products">
                            ÜRÜNLERİMİZ
                            <span className="icon-null" />
                          </Link>
                        </div>
                      </div>
                      {/*End Single Working Process*/}
                      {/*Start Single Working Process*/}
                      <div className="single-working-process text-center">
                        <div className="top-box">
                          <h6>
                            Adım
                            <br /> 03
                          </h6>
                        </div>
                        <h3>
                          Solar
                          <br /> Panel Kurulumu
                        </h3>
                        <p>
                          Teknik ekiplerimiz ile sahada kurulumun sağlanması ve teslim edilmesi
                        </p>
                        <div className="button">
                          <Link className="btn-two" href="/kurulum">
                            Kurulum
                            <span className="icon-null" />
                          </Link>
                        </div>
                      </div>
                      {/*End Single Working Process*/}
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*End Working Process Area*/}
            {/*Start Fact Projects area*/}
            <section className="fact-projects-area">
              <div className="pattern paroller">
                <img src="images/pattern/fact-project-bg.jpg" alt="Pattern" />
              </div>
              <div className="container">
                <div className="row">
                  {/*Start Single fact counter*/}
                  <div className="col-xl-4 col-lg-5 col-md-12 col-sm-12">
                    <div className="project-content">
                      <div className="sec-title">
                        <p>TAMAMLANMIŞ PROJELERİMİZ</p>
                        <div className="title">Çalışmalar &amp; Projeler</div>
                        <div className="border-box" />
                      </div>
                      <div className="inner-content">
                        <p>
                          Türkiye nin her bölgesinde başarıyla tamamlanmış
                          <br /> çevreye duyarlı, verimli sistemler.
                        </p>
                        <div className="button">
                          <Link className="btn-two" href="/projeler">
                            Bütün Projeler
                            <span className="icon-null" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*End Single fact counter*/}
                  {/*Start Single fact counter*/}
                  <div className="col-xl-8 col-lg-7 col-md-12 col-sm-12">
                    <ul className="fact-counter">
                      <li
                        className="single-fact-counter wow fadeInLeft"
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
                        className="single-fact-counter wow fadeInLeft"
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
                    </ul>
                  </div>
                  {/*End Single fact counter*/}
                </div>
              </div>
              <div className="container latest-project">
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div className="project-carousel owl-carousel owl-theme">
                      {/*Start single project style1*/}
                      <div className="single-project-style1">
                        <div className="img-holder">
                          <img src="images/projects/lat-pro-1.jpg" alt="Awesome Image" />
                          <div className="overlay-content">
                            <div className="inner-content">
                              <div className="link-box">
                                <Link href="/projeler">
                                  <span className="icon-plus" />
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="categories">
                            <h5>Müstakil Ev</h5>
                          </div>
                          <div className="title-box">
                            <h3>Niksar </h3>
                            <span>5.50 kW Çatı Sistemi</span>
                          </div>
                        </div>
                      </div>
                      {/*End single project style1*/}
                      {/*Start single project style1*/}
                      <div className="single-project-style1">
                        <div className="img-holder">
                          <img src="images/projects/lat-pro-2.jpg" alt="Awesome Image" />
                          <div className="overlay-content">
                            <div className="inner-content">
                              <div className="link-box">
                                <Link href="/projeler">
                                  <span className="icon-plus" />
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="categories">
                            <h5>Müstakil Ev</h5>
                          </div>
                          <div className="title-box">
                            <h3>Atakent</h3>
                            <span>6.50 kW Çatı Sistemi</span>
                          </div>
                        </div>
                      </div>
                      {/*End single project style1*/}
                      {/*Start single project style1*/}
                      <div className="single-project-style1">
                        <div className="img-holder">
                          <img src="images/projects/lat-pro-3.jpg" alt="Awesome Image" />
                          <div className="overlay-content">
                            <div className="inner-content">
                              <div className="link-box">
                                <Link href="/projeler">
                                  <span className="icon-plus" />
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="categories">
                            <h5>Tarımsal Sulama</h5>
                          </div>
                          <div className="title-box">
                            <h3>Niksar Ovası</h3>
                            <span>7.50 kW Sulama Sistemi</span>
                          </div>
                        </div>
                      </div>
                      {/*End single project style1*/}
                      {/*Start single project style1*/}
                      <div className="single-project-style1">
                        <div className="img-holder">
                          <img src="images/projects/lat-pro-1.jpg" alt="Awesome Image" />
                          <div className="overlay-content">
                            <div className="inner-content">
                              <div className="link-box">
                                <Link href="/projeler">
                                  <span className="icon-plus" />
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="categories">
                            <h5>Müstakil Ev</h5>
                          </div>
                          <div className="title-box">
                            <h3>Niksar </h3>
                            <span>5.50 kW Çatı Sistemi</span>
                          </div>
                        </div>
                      </div>
                      {/*End single project style1*/}
                      {/*Start single project style1*/}
                      <div className="single-project-style1">
                        <div className="img-holder">
                          <img src="images/projects/lat-pro-2.jpg" alt="Awesome Image" />
                          <div className="overlay-content">
                            <div className="inner-content">
                              <div className="link-box">
                                <Link href="/projeler">
                                  <span className="icon-plus" />
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="categories">
                            <h5>Müstakil Ev</h5>
                          </div>
                          <div className="title-box">
                            <h3>Atakent</h3>
                            <span>6.50 kW Çatı Sistemi</span>
                          </div>
                        </div>
                      </div>
                      {/*End single project style1*/}
                      {/*Start single project style1*/}
                      <div className="single-project-style1">
                        <div className="img-holder">
                          <img src="images/projects/lat-pro-2.jpg" alt="Awesome Image" />
                          <div className="overlay-content">
                            <div className="inner-content">
                              <div className="link-box">
                                <Link href="/projeler">
                                  <span className="icon-plus" />
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="categories">
                            <h5>Müstakil Ev</h5>
                          </div>
                          <div className="title-box">
                            <h3>Atakent</h3>
                            <span>6.50 kW Çatı Sistemi</span>
                          </div>
                        </div>
                      </div>
                      {/*End single project style1*/}
                      {/*Start single project style1*/}
                      <div className="single-project-style1">
                        <div className="img-holder">
                          <img src="images/projects/lat-pro-3.jpg" alt="Awesome Image" />
                          <div className="overlay-content">
                            <div className="inner-content">
                              <div className="link-box">
                                <Link href="/projeler">
                                  <span className="icon-plus" />
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="categories">
                            <h5>Tarımsal Sulama</h5>
                          </div>
                          <div className="title-box">
                            <h3>Niksar Ovası</h3>
                            <span>7.50 kW Sulama Sistemi</span>
                          </div>
                        </div>
                      </div>
                      {/*End single project style1*/}
                      {/*Start single project style1*/}
                      <div className="single-project-style1">
                        <div className="img-holder">
                          <img src="images/projects/lat-pro-1.jpg" alt="Awesome Image" />
                          <div className="overlay-content">
                            <div className="inner-content">
                              <div className="link-box">
                                <Link href="/projeler">
                                  <span className="icon-plus" />
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="categories">
                            <h5>Müstakil Ev</h5>
                          </div>
                          <div className="title-box">
                            <h3>Niksar </h3>
                            <span>5.50 kW Çatı Sistemi</span>
                          </div>
                        </div>
                      </div>
                      {/*End single project style1*/}
                      {/*Start single project style1*/}
                      <div className="single-project-style1">
                        <div className="img-holder">
                          <img src="images/projects/lat-pro-2.jpg" alt="Awesome Image" />
                          <div className="overlay-content">
                            <div className="inner-content">
                              <div className="link-box">
                                <Link href="/projeler">
                                  <span className="icon-plus" />
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="categories">
                            <h5>Müstakil Ev</h5>
                          </div>
                          <div className="title-box">
                            <h3>Atakent</h3>
                            <span>6.50 kW Çatı Sistemi</span>
                          </div>
                        </div>
                      </div>
                      {/*End single project style1*/}
                      {/*Start single project style1*/}
                      <div className="single-project-style1">
                        <div className="img-holder">
                          <img src="images/projects/lat-pro-1.jpg" alt="Awesome Image" />
                          <div className="overlay-content">
                            <div className="inner-content">
                              <div className="link-box">
                                <Link href="/projeler">
                                  <span className="icon-plus" />
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="categories">
                            <h5>Müstakil Ev</h5>
                          </div>
                          <div className="title-box">
                            <h3>Niksar </h3>
                            <span>5.50 kW Çatı Sistemi</span>
                          </div>
                        </div>
                      </div>
                      {/*End single project style1*/}
                      {/*Start single project style1*/}
                      <div className="single-project-style1">
                        <div className="img-holder">
                          <img src="images/projects/lat-pro-2.jpg" alt="Awesome Image" />
                          <div className="overlay-content">
                            <div className="inner-content">
                              <div className="link-box">
                                <Link href="/projeler">
                                  <span className="icon-plus" />
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="categories">
                            <h5>Müstakil Ev</h5>
                          </div>
                          <div className="title-box">
                            <h3>Atakent</h3>
                            <span>6.50 kW Çatı Sistemi</span>
                          </div>
                        </div>
                      </div>
                      {/*End single project style1*/}
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*End Fact Projects area*/}
            {/*Start pricing plan area*/}
            <section className="pricing-plan-area">
              <div className="container">
                <div className="sec-title with-text text-center">
                  <p>PLANLAMA &amp; FİYATLANDIRMA</p>
                  <div className="title">Şeffaf &amp; Esnek Fiyatlandırma</div>
                  <div className="border-box center" />
                  <span>
                    Evinize, ararizinize ve firmanıza yönelik özenle hazırlanan projeler için şeffaf fiyatlandırma. Örnek Projeler için fiyatlarımız
                  </span>
                </div>
                <div className="row">
                  {/*Start single price box*/}
                  <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 text-center">
                    <div className="single-price-outer">
                      <div className="single-price-box">
                        <div className="discount-box">
                          <h5>
                            10%
                            <br />
                            İndirim
                          </h5>
                        </div>
                        <div className="table-header">
                          <div className="top">
                            <h3>5 kWe Çatı Sistemi</h3>
                            <span>
                              <b>*</b>50 m² gerekli Çatı Alanı  <br />
                              panel sistemi
                            </span>
                          </div>
                          <div className="package">
                            <h1>
                              <span>$</span>10.950<b></b>
                            </h1>
                          </div>
                        </div>
                        <div className="button">
                          <Link href="/iletisim">Randevu Al</Link>
                        </div>
                        <div className="list-items">
                          <ul>
                            <li>Ücretsiz Keşif</li>
                            <li>Projelendirme</li>
                            <li>Kurulum</li>
                            <li>Analiz ve Teslimat</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*End single price box*/}
                  {/*Start single price box*/}
                  <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 text-center">
                    <div className="single-price-outer">
                      <div className="single-price-box">
                        <div className="discount-box">
                          <h5>
                            20%
                            <br />
                            İndirim
                          </h5>
                        </div>
                        <div className="table-header">
                          <div className="top">
                            <h3>Tarımsal Sulama</h3>
                            <span>
                              <b>*</b>200 dönüm tarımsal arazi için <br />
                              panel sistemi
                            </span>
                          </div>
                          <div className="package">
                            <h1>
                              <span>$</span>24.000<b></b>
                            </h1>
                          </div>
                        </div>
                        <div className="button">
                          <Link href="/iletisim">Randevu Al</Link>
                        </div>
                        <div className="list-items">
                          <ul>
                            <li>Ücretsiz Keşif</li>
                            <li>Projelendirme</li>
                            <li>Kurulum</li>
                            <li>Analiz ve Teslimat</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*End single price box*/}
                  {/*Start single price box*/}
                  <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 text-center">
                    <div className="single-price-outer">
                      <div className="single-price-box">
                        <div className="discount-box">
                          <h5>
                            10%
                            <br />
                            İndirim
                          </h5>
                        </div>
                        <div className="table-header">
                          <div className="top">
                            <h3>10 kWe Çatı Sistemi</h3>
                            <span>
                              <b>*</b>90 m² gerekli Çatı Alanı <br />
                              panel sistemi
                            </span>
                          </div>
                          <div className="package">
                            <h1>
                              <span>$</span>16.950<b></b>
                            </h1>
                          </div>
                        </div>
                        <div className="button">
                          <Link href="/iletisim">Randevu Al</Link>
                        </div>
                        <div className="list-items">
                          <ul>
                            <li>Ücretsiz Keşif</li>
                            <li>Projelendirme</li>
                            <li>Kurulum</li>
                            <li>Analiz ve Teslimat</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*End single price box*/}
                </div>
              </div>
            </section>
            {/*End pricing plan area*/}
            {/*Start latest blog area*/}
            <section className="latest-blog-area">
              <div className="container inner-content">
                <div className="sec-title">
                  <p>Haberler</p>
                  <div className="title">Medyada Solar Enerji</div>
                  <div className="border-box" />
                </div>
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div className="blog-carousel owl-carousel owl-theme">
                      {/*Start single blog post*/}
                      <div className="single-blog-post">
                        <div className="img-holder">
                          <img src="images/blog/v1-1.jpg" alt="Awesome Image" />
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
                              Türkiye, güneş enerjisi kapasitesini 2035 yılına kadar yaklaşık %450 artıracak.<br />
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
                            <p>
                              Enerji sektöründe zorlu geçen bir yıl henüz geride kalmışken, birçok ülke hem maliyetten tasarruf etmek, hem de sürdürülebilir bir yaşam inşa etmek için güneş enerjisine odaklanıyor...
                            </p>
                            <Link className="btn-two" href="https://www.cnnturk.com/video/ekonomi/turkiye/gunes-enerjisinde-yeni-duzenleme">
                              DETAYLI BİLGİ
                              <span className="icon-null" />
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/*End single blog post*/}
                      {/*Start single blog post*/}
                      <div className="single-blog-post">
                        <div className="img-holder">
                          <img src="images/blog/v1-2.jpg" alt="Awesome Image" />
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
                            <p>
                              5  Kıtadan, 125 in üzerinde ülkeden yatırımcıya ev sahipliği yapacak olan Uluslarrarası SolaEX İstanbul Fuarı 2023 yılında...
                            </p>
                            <Link className="btn-two" href="https://solarexistanbul.com/">
                              DETAYLI BİLGİ
                              <span className="icon-null" />
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/*End single blog post*/}
                      {/*Start single blog post*/}
                      <div className="single-blog-post">
                        <div className="img-holder">
                          <img src="images/blog/v1-8.jpg" alt="Awesome Image" />
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
                            <Link href="">
                              ASELSAN dan yenilenebilir enerji hamlesi
                            </Link>
                          </h3>
                          <div className="meta-box">
                            <ul className="meta-info">
                              <li>
                                <Link href="">
                                  <b>AA</b>
                                </Link>
                              </li>
                              <li>
                                <Link href="">YENİLENEBİLİR ENERJİ</Link>
                              </li>
                            </ul>
                            <div className="author-icon">
                              <span className="icon-user" />
                            </div>
                          </div>
                          <div className="text">
                            <p>
                              Tüm faaliyetlerini yürütürken iklim değişikliği ve çevre çalışmalarını da odağına alan ASELSAN, faaliyetlerinden kaynaklı emisyonları analiz ederek iyileştirme uygulamaları gerçekleştiriyor...
                            </p>
                            <Link className="btn-two" href="https://www.trthaber.com/haber/bilim-teknoloji/aselsandan-yenilenebilir-enerji-hamlesi-742632.html">
                              DETAYLI BİLGİ
                              <span className="icon-null" />
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/*End single blog post*/}

                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*End latest blog area*/}
            {/*Start Testimonial Area*/}
            <section className="testimonial-area">
              <div className="container">
                <div className="sec-title clrwhite text-center">
                  <p>Yorumlar</p>
                  <div className="title">Sizden Gelenler</div>
                  <div className="border-box center" />
                </div>
                <div className="row">
                  <div className="col-xl-12">
                    <div className="testimonial-carousel owl-carousel owl-theme">
                      {/*Start Single Testimonial Item*/}
                      <div className="single-testimonial-item text-center">
                        <div className="img-box">
                          <img src="images/testimonial/1.png" alt="Awesome Image" />
                        </div>
                        <div className="inner-content">
                          <div className="text-box">
                            <p>
                              Sulama maliyetleri her geçen gün artmaktayken EZN solar ile maliyetlerimi düşürdüm. Teşekkürler...
                            </p>
                          </div>
                          <div className="client-info">
                            <h3>Ahmet Yılmaz</h3>
                            <p>
                              <span className="icon-point" />
                              Niksar
                            </p>
                          </div>
                        </div>
                      </div>
                      {/*End Single Testimonial Item*/}
                      {/*Start Single Testimonial Item*/}
                      <div className="single-testimonial-item text-center">
                        <div className="img-box">
                          <img src="images/testimonial/2.png" alt="Awesome Image" />
                        </div>
                        <div className="inner-content">
                          <div className="text-box">
                            <p>
                              Güler yüzlü yaklaşımları, projenin başından sonuna ladar şeffaf olmalarından dolayı çok memnunum...
                            </p>
                          </div>
                          <div className="client-info">
                            <h3>Fatih Şenol</h3>
                            <p>
                              <span className="icon-point" />
                              İstanbul
                            </p>
                          </div>
                        </div>
                      </div>
                      {/*End Single Testimonial Item*/}
                      {/*Start Single Testimonial Item*/}
                      <div className="single-testimonial-item text-center">
                        <div className="img-box">
                          <img src="images/testimonial/1.png" alt="Awesome Image" />
                        </div>
                        <div className="inner-content">
                          <div className="text-box">
                            <p>
                              Çevreye duyarsız kalmayan yaklaşımlarından dolayı teşekkürler...
                            </p>
                          </div>
                          <div className="client-info">
                            <h3>Adil Kara</h3>
                            <p>
                              <span className="icon-point" />
                              İstanbul
                            </p>
                          </div>
                        </div>
                      </div>
                      {/*End Single Testimonial Item*/}
                      {/*Start Single Testimonial Item*/}
                      <div className="single-testimonial-item text-center">
                        <div className="img-box">
                          <img src="images/testimonial/2.png" alt="Awesome Image" />
                        </div>
                        <div className="inner-content">
                          <div className="text-box">
                            <p>
                              Hızlı ve temiz çalışmalarından dolayı teşekkürler..
                            </p>
                          </div>
                          <div className="client-info">
                            <h3>İhsan Yurt</h3>
                            <p>
                              <span className="icon-point" />
                              Ankara
                            </p>
                          </div>
                        </div>
                      </div>
                      {/*End Single Testimonial Item*/}
                      {/*Start Single Testimonial Item*/}
                      <div className="single-testimonial-item text-center">
                        <div className="img-box">
                          <img src="images/testimonial/1.png" alt="Awesome Image" />
                        </div>
                        <div className="inner-content">
                          <div className="text-box">
                            <p>
                              Proje bittikten sonrada her aradığımda ilgilendiklerinden dolayı tebrikler..
                            </p>
                          </div>
                          <div className="client-info">
                            <h3>Şamil Yıldız</h3>
                            <p>
                              <span className="icon-point" />
                              İstanbul
                            </p>
                          </div>
                        </div>
                      </div>
                      {/*End Single Testimonial Item*/}
                      {/*Start Single Testimonial Item*/}
                      <div className="single-testimonial-item text-center">
                        <div className="img-box">
                          <img src="images/testimonial/2.png" alt="Awesome Image" />
                        </div>
                        <div className="inner-content">
                          <div className="text-box">
                            <p>
                              Güneş enerjisi düşünen için tavsiye edeceğim örnek firma...
                            </p>
                          </div>
                          <div className="client-info">
                            <h3>Yalçın Kurt</h3>
                            <p>
                              <span className="icon-point" />
                              İstanbul
                            </p>
                          </div>
                        </div>
                      </div>
                      {/*End Single Testimonial Item*/}
                    </div>
                  </div>
                </div>
                <div
                  className="button text-center wow fadeInUp"
                  data-wow-delay="300ms"
                  data-wow-duration="1500ms"
                >
                  <Link className="btn-three" href="/yorumlar">
                    DİĞER YORUMLAR
                    <span className="icon-null" />
                  </Link>
                </div>
              </div>
            </section>
            {/*End Testimonial Area*/}
            {/*Start Consultation Area*/}
            <section className="consultation-area">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="consultation-box">
                      <div className="title-box">
                        <h2>Ücretsiz Keşif</h2>
                        <span>
                          Uzmanlarımız tarafından ücretsiz keşif talep edebilir, Müşteri temsilcimize 7/24 yazabilir ve arayabilirsiniz.
                        </span>
                      </div>
                      <div className="consultation">
                        <form className="consultation-form">
                          <div className="row">
                            <div className="col-xl-12">
                              <div className="single-box">
                                <input
                                  type="text"
                                  name="form_name"
                                  defaultValue=""
                                  placeholder="İsim veya Firma İsmi"
                                  required=""
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-xl-6">
                              <div className="single-box">
                                <input
                                  type="email"
                                  name="form_email"
                                  defaultValue=""
                                  placeholder="Email Adresi"
                                  required=""
                                />
                              </div>
                            </div>
                            <div className="col-xl-6">
                              <div className="single-box">
                                {/* <select
                            // className="selectpicker"
                            data-width="100%"
                            // onChange={(event) => changeDiscuss(event.target.value)}
                            // value={discuss}
                          >
                            <option value="Genel">Başlık Seçiniz</option>
                            <option value="Kurulum">Kurulum</option>
                            <option value="Bakım">Bakım</option>
                            <option value="İzleme">İzleme</option>
                            <option value="Discuss About">Discuss About</option>
                            <option value="Danışma">Danışma</option>
                            <option value="Çatı Çözümleri">Çatı Çözümleri</option>
                            <option value="İnventör Onarımı">İnventör Onarımı</option>
                          </select> */}
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-xl-12">
                              <div className="single-box">
                                <button className="btn-three" type="submit">
                                  Randevu AL
                                  <span className="icon-null" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="consultation-bottom-text text-center">
                        <div className="top">
                          <span>Veya</span>
                        </div>
                        <div className="inner">
                          <div className="text">
                            <p>
                              Müşteri temsilcimizi arayarak randevu ve bilgi alabilrsiniz.
                            </p>
                          </div>
                          <Link className="btn-three" href="tel:0090-555-091-10-60">
                            ARama Yap
                            <span className="icon-null" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*End Consultation Area*/}
            {/*Start Brand area*/}
            <section className="brand-area">
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
                        data-wow-delay="100ms"
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
                        data-wow-delay="200ms"
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
                        data-wow-delay="300ms"
                        data-wow-duration="1500ms"
                      >
                        <Link href="https://www.sunsolarenerji.com/">
                          <img src="images/brand/4.png" alt="Awesome Brand Image" />
                        </Link>
                        <div className="overlay-box">
                          <Link href="https://www.sunsolarenerji.com/">
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
                        data-wow-delay="400ms"
                        data-wow-duration="1500ms"
                      >
                        <Link href="https://www.mexxsun.com/tr">
                          <img src="images/brand/5.png" alt="Awesome Brand Image" />
                        </Link>
                        <div className="overlay-box">
                          <Link href="https://www.mexxsun.com/tr">
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
            {/* <Footer /> */}
          </div>
        </Layout>
      </main>
    </>
  )
}
