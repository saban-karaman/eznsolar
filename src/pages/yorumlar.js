import Layout from "@/components/Layout"
import Link from "next/link"

function Yorumlar() {
  return (
    <Layout>
    <div className="boxed_wrapper">
  <div/>
  <section
    className="breadcrumb-area"
    // style={{ backgroundImage: "url(images/resources/breadcrumb-bg.jpg)" }}
  >
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div className="inner-content clearfix">
            <div className="title float-left">
              <h1>Sizden Gelenler</h1>
            </div>
            <div className="breadcrumb-menu float-right">
              <ul className="clearfix">
                <li>
                  <Link href="/">Anasayfa</Link>
                </li>
                <li className="active">Yorumlar</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*End breadcrumb area*/}
  {/*Start faq area*/}
  <section className="faq-area">
    <div className="container">
      <div className="sec-title text-center">
        <div className="icon">
          <span className="icon-question-1" />
        </div>
        <p>Yorumlar</p>
        <div className="title">Sıkça Sorulan Sorular</div>
      </div>
      <div className="faq-search-box">
        <form className="search-form" action="#">
          <input
            type="search"
            name="search"
            placeholder="Aranacak kelime..."
            required=""
          />
          <button type="submit">
            <i className="fa fa-search" aria-hidden="true" />
          </button>
        </form>
        <p>
          Farklı soru ve görüşleriniz için{" "}
          <Link href="mailto:info@ezngroup.com">info@ezngroup.com</Link>
        </p>
      </div>
      <div className="row">
        <div className="col-xl-12">
          <div className="faq-content-box">
            <div className="accordion-box">
              {/*Start single accordion box*/}
              <div className="accordion accordion-block">
                <div className="accord-btn">
                  <h4>Ücretsiz keşiften nasıl faydalanabilirim?</h4>
                </div>
                <div className="accord-content">
                  <p>
                  Ücretsiz keşif talepleriniz değerlendirilerek formda vermiş olduğunuz iletişim bilgileri aracılığı ile sizinle iletişime geçilecektir.
                   Ücretsiz keşif hizmeti kapsamında projelendirmek istediğiniz alan mühendislerimizce incelenerek uygun çözümler belirlenecek ve size sunulacaktır.
                    Keşif hizmeti tamamen ücretsizdir, gelen ekip sizden herhangi bir ücret kesinlikle talep etmeyecektir.
                  </p>
                </div>
              </div>
              {/*End single accordion box*/}
              {/*Start single accordion box*/}
              <div className="accordion accordion-block">
                <div className="accord-btn ">
                  <h4>
                    Ürün garanti süreleri nelerdir?
                  </h4>
                </div>
                <div className="accord-content ">
                  <p>
                 EZN Solar bünyesinde satışa sunulan tüm ürünler garantili kapsamındadır. Ürünler temel olarak 2 yıl garanti ve teknik servis desteğine sahiptir.
                   Satın aldığınız üründe oluşan arıza, teknik sorun ve üründen kaynaklı bir donanım sorununda bize ulaşarak 2 yıl garanti süresinden yararlanabilirsiniz.
                  </p>
                </div>
              </div>
              {/*End single accordion box*/}
              {/*Start single accordion box*/}
              <div className="accordion accordion-block">
                <div className="accord-btn">
                  <h4>
                    Kurulum ve Teslimat nasıl yapılıyor?
                  </h4>
                </div>
                <div className="accord-content">
                  <p>
                 EZN Solar üzerinden sunulan tüm ürünler teknik servisimiz kapsamında sunulmaktadır.
                  Talebiniz doğrultusunda ürün kurulumu ve projelendirme imkanları sağlanmaktadır.
                   Ürün teslimatları hızlı ve güvenli kargo ile adresinize yapılmaktadır
                  </p>
                </div>
              </div>
              {/*End single accordion box*/}
              {/*Start single accordion box*/}
              <div className="accordion accordion-block">
                <div className="accord-btn">
                  <h4>
                    Ürünüm ne zaman kargoya verilir?
                  </h4>
                </div>
                <div className="accord-content">
                  <p>
                 EZN Solar sitemizde sunulan tüm ürünler hızlı ve güvenli kargo seçeneğine sahiptir.
                  Sipariş vermiş olduğunuz ürün en kısa süre içerisinde kargoya verilerek size ulaştırılacaktır.
                   Özel kurulum ve teknik servis hizmeti kapsamında yararlandığınız ürünler için müşteri
                    temsilcimiz sizinle iletişime geçerek randevu oluşturacak ve belirlenen tarihte ürününüz tarafınıza ulaştırılacaktır.
                  </p>
                </div>
              </div>
              {/*End single accordion box*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*End faq area*/}
 
</div>
</Layout>
  )
}

export default Yorumlar