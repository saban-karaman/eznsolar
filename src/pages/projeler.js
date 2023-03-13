import Layout from '@/components/Layout';
import Link from "next/link"



function Projeler() {
  return (
    <Layout>
    <div className="boxed_wrapper">
  <div />
  <section
    className="breadcrumb-area"
    // style={{ backgroundImage: "url(images/resources/breadcrumb-bg.jpg)" }}
  >
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div className="inner-content clearfix">
            <div className="title float-left">
              <h1>Projelerimiz</h1>
            </div>
            <div className="breadcrumb-menu float-right">
              <ul className="clearfix">
                <li>
                  <Link href="index.html">Anasayfa</Link>
                </li>
                <li className="active">Projeler</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*End breadcrumb area*/}
  {/*Start Main project area*/}
  <section className="main-project-area style1">
    <div className="container">
      <ul className="project-filter style1 post-filter has-dynamic-filters-counter">
        <li data-filter=".env" className="active">
          <span className="filter-text">Çatı Sistemleri</span>
        </li>
        <li data-filter=".agri">
          <span className="filter-text">Tarım ve Sulama</span>
        </li>
        <li data-filter=".solar">
          <span className="filter-text">Günısı Sistemleri</span>
        </li>
        <li data-filter=".solar">
          <span className="filter-text">Müstakil Ev Sistemleri</span>
        </li>
        <li data-filter=".commer">
          <span className="filter-text">Ticari Firma Sistemleri</span>
        </li>
      </ul>
      <div className="row filter-layout masonary-layout">
        {/*Start single project item*/}
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 filter-item env res">
          <div className="single-project-style2">
            <div className="img-holder">
              <div className="inner">
                <img src="images/projects/1.jpg" alt="Awesome Image" />
              </div>
              <div className="overlay-content">
                <div className="title float-left">
                  <h3>
                    <Link href="#">Niksar</Link>
                  </h3>
                  <span>5.50 kW Sistemi</span>
                </div>
                <div className="button float-right">
                  <Link href="#">
                    <span className="icon-null" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End single project item*/}
        {/*Start single project item*/}
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 filter-item solar agri">
          <div className="single-project-style2">
            <div className="img-holder">
              <div className="inner">
                <img src="images/projects/2.jpg" alt="Awesome Image" />
              </div>
              <div className="overlay-content">
                <div className="title float-left">
                  <h3>
                    <Link href="#">Commercial Rooftop</Link>
                  </h3>
                  <span>10.00 kW System</span>
                </div>
                <div className="button float-right">
                  <Link href="#">
                    <span className="icon-null" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End single project item*/}
        {/*Start single project item*/}
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 filter-item commer env">
          <div className="single-project-style2">
            <div className="img-holder">
              <div className="inner">
                <img src="images/projects/3.jpg" alt="Awesome Image" />
              </div>
              <div className="overlay-content">
                <div className="title float-left">
                  <h3>
                    <Link href="#">Niksar Ovası</Link>
                  </h3>
                  <span>7.50 kW Sistemi</span>
                </div>
                <div className="button float-right">
                  <Link href="#">
                    <span className="icon-null" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End single project item*/}
        {/*Start single project item*/}
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 filter-item env">
          <div className="single-project-style2">
            <div className="img-holder">
              <div className="inner">
                <img src="images/projects/4.jpg" alt="Awesome Image" />
              </div>
              <div className="overlay-content">
                <div className="title float-left">
                  <h3>
                    <Link href="#">Eco Plexus, Inct</Link>
                  </h3>
                  <span>18.87 kW System</span>
                </div>
                <div className="button float-right">
                  <Link href="#">
                    <span className="icon-null" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End single project item*/}
        {/*Start single project item*/}
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 filter-item env res">
          <div className="single-project-style2">
            <div className="img-holder">
              <div className="inner">
                <img src="images/projects/5.jpg" alt="Awesome Image" />
              </div>
              <div className="overlay-content">
                <div className="title float-left">
                  <h3>
                    <Link href="#">Carlson Residence</Link>
                  </h3>
                  <span>9.87 kW System</span>
                </div>
                <div className="button float-right">
                  <Link href="#">
                    <span className="icon-null" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End single project item*/}
        {/*Start single project item*/}
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 filter-item solar agri">
          <div className="single-project-style2">
            <div className="img-holder">
              <div className="inner">
                <img src="images/projects/6.jpg" alt="Awesome Image" />
              </div>
              <div className="overlay-content">
                <div className="title float-left">
                  <h3>
                    <Link href="#">Commercial Rooftop</Link>
                  </h3>
                  <span>10.00 kW System</span>
                </div>
                <div className="button float-right">
                  <Link href="#">
                    <span className="icon-null" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End single project item*/}
        {/*Start single project item*/}
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 filter-item commer env">
          <div className="single-project-style2">
            <div className="img-holder">
              <div className="inner">
                <img src="images/projects/7.jpg" alt="Awesome Image" />
              </div>
              <div className="overlay-content">
                <div className="title float-left">
                  <h3>
                    <Link href="#">For Highway Safety</Link>
                  </h3>
                  <span>25.05 kW System</span>
                </div>
                <div className="button float-right">
                  <Link href="#">
                    <span className="icon-null" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End single project item*/}
        {/*Start single project item*/}
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 filter-item env">
          <div className="single-project-style2">
            <div className="img-holder">
              <div className="inner">
                <img src="images/projects/8.jpg" alt="Awesome Image" />
              </div>
              <div className="overlay-content">
                <div className="title float-left">
                  <h3>
                    <Link href="#">Eco Plexus, Inct</Link>
                  </h3>
                  <span>18.87 kW System</span>
                </div>
                <div className="button float-right">
                  <Link href="#">
                    <span className="icon-null" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End single project item*/}
      </div>
      <div className="row">
        <div className="col-md-12">
          <ul className="post-pagination text-center">
            <li>
              <Link href="#">
                <i className="fa fa-caret-left" aria-hidden="true" />
              </Link>
            </li>
            <li className="active">
              <Link href="#">1</Link>
            </li>
            <li>
              <Link href="#">2</Link>
            </li>
            <li>
              <Link href="#">3</Link>
            </li>
            <li>
              <Link href="#">
                <i className="fa fa-caret-right" aria-hidden="true" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  {/*End Main project area*/}
 
</div>
</Layout>
  )
}

export default Projeler