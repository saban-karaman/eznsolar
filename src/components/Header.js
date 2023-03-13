

import { useSelector } from 'react-redux';
import { selectItems } from '@/GlobalRedux/basket/basketSlice';
// import { useRouter } from 'next/navigation';
import Link from 'next/link';



function Header() {
    // const router = useRouter();
    // function handleClick(e) {
    //     e.preventDefault();
    //     router.push({
    //       pathname: '/products',
    //       query: { search: e.currentTarget.value },
    //     });
    //   }
    const items = useSelector(selectItems);
    return (
        <div>
            <section className="top-bar-style1">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="top-style1 clearfix">
                                <div className="top-left-style1 float-left clearfix">
                                    <div className="find-text">
                                        <p>
                                            <Link href="/iletisim">Ücretsiz Keşif ve Randevu İçin
                                                <span className="icon-null" /></Link>
                                        </p>
                                    </div>
                                </div>
                                <div className="top-right-style1 float-right">
                                    <div className="for-enquiry float-left fix">
                                        <p>
                                            <Link className="icon-question"

                                                href="tel:0090-542-555-71-55"
                                            />
                                            <span> </span> Hafta içi (+90) 555 091 10 60
                                        </p>
                                    </div>
                                    <ul className="top-social-style1 sociallinks-style-one float-right fix">
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
                </div>
            </section>
            {/* End Top Bar style1 */}
            {/*Start header style1 area*/}
            <header className="header-style1-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="header-style1 clearfix">
                                <div className="headers1-logo float-left">
                                    <Link href="/">
                                        <img src="images/resources/logo.png" alt="Awesome Logo" />
                                    </Link>
                                </div>
                                <div className="headers1-header-right float-right">
                                    <ul className="header-contact-info clearfix">
                                        <li>
                                            <Link href="/iletisim"><div className="single-item">
                                                <div className="icon">
                                                    <img
                                                        src="images/icon/header-icon-1.png"
                                                        alt="Awesome Image"
                                                    />
                                                </div>

                                                <div className="text">
                                                    <h3>Ziyaret İçin</h3>
                                                    <p>Niksar/Tokat</p>
                                                </div>
                                            </div></Link>
                                        </li>
                                        <li>
                                            <div className="single-item">
                                                <div className="icon">
                                                    <img
                                                        src="images/icon/header-icon-2.png"
                                                        alt="Awesome Image"
                                                    />
                                                </div>
                                                <div className="text">
                                                    <h3>Bize Yazın</h3>
                                                    <p>info@ezngroup.com</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="headers1-button">
                                        <Link className="btn-one" href="/">
                                            <b>GİRİŞ YAP</b>
                                            <span className="icon-null" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/*End header style1 area*/}
            {/*Start mainmenu area*/}
            <section className="mainmenu-area stricky">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="inner-content clearfix">
                                <nav className="main-menu clearfix">
                                    <div className="navbar-header clearfix">
                                        <button
                                            type="button"
                                            className="navbar-toggle"
                                            data-toggle="collapse"
                                            data-target=".navbar-collapse"
                                        >
                                            <span className="icon-bar" />
                                            <span className="icon-bar" />
                                            <span className="icon-bar" />
                                        </button>
                                    </div>
                                    <div className="navbar-collapse collapse clearfix">
                                        <ul className="navigation clearfix">
                                            <li className="dropdown current">
                                                <Link href="/">ANA SAYFA</Link>
                                                <ul>
                                                    <li>
                                                        <Link href="/">Ezn Solar</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="https://www.ezngroup.com/">Ezn Group</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown">
                                                <Link href="/hakkimizda">Hakkımızda</Link>
                                                <ul>
                                                    <li>
                                                        <Link href="/hakkimizda">Firma Bilgileri</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/yorumlar">Sizden Gelenler</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown">
                                                <Link href="/servisler">HİZMETLER</Link>
                                                <ul>
                                                    <li>
                                                        <Link href="/kurulum">Kurulum</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/bakim">Bakım</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/izleme">İzleme ve Analiz</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/danisma">Danışma</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/cati-cozumleri">Çatı Çözümleri</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/inverter-onarimi">İnverter Onarımı</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown">
                                                <Link href="/projeler">Projeler</Link>
                                                <ul>
                                                    <li>
                                                        <Link href="/projeler">Biten Projelerimiz</Link>
                                                    </li>

                                                </ul>
                                            </li>
                                            <li className="dropdown">
                                                <Link href="/haberler">Haberler</Link>
                                                <ul>
                                                    <li>
                                                        <Link href="/haberler">Haberler</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown">
                                                <Link href="/products">ALIŞVERİŞ</Link>
                                                <ul>
                                                    <li>
                                                        <Link href={{ pathname: '/products',query: { category: 'paneller' },}}>Paneller</Link>
                                                    </li>
                                                    <li>
                                                        <Link href={{ pathname: '/products',query: { category: 'inverter' },}}>İnverterler</Link>
                                                    </li>
                                                    <li>
                                                        <Link href={{ pathname: '/products',query: { category: 'solar-akuler' },}}>Aküler</Link>
                                                    </li>
                                                    <li>
                                                        <Link href={{ pathname: '/products',query: { category: 'kablolar' },}}>Kablolar</Link>
                                                    </li>
                                                    <li>
                                                        <Link href={{ pathname: '/products',query: { category: 'solar-paketler' },}}>Solar Paketler</Link>
                                                    </li>
                                                    <li>
                                                        <Link href={{ pathname: '/products',query: { category: 'solar-ekipmanlar' },}}>Solar Ekipmanlar</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link href="/iletisim">
                                                    İLETİŞİM
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                                <div className="mainmenu-right">
                                    <div className="outer-search-box">

                                        <div className="seach-toggle">
                                            <Link href="/products" style={{ color: "inherit" }}>
                                                <i className="fa fa-search" />
                                            </Link>
                                        </div>


                                    </div>
                                    <div className="cart-box" >
                                        <Link href="/sepet">
                                            <span className="icon-cart">
                                                <span className="number">{items.length}</span>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Header