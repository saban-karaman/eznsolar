

import ürün from "./ürün";
import Fuse from 'fuse.js';
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { selectAllProducts } from '@/GlobalRedux/basket/basketSlice'
import { useSelector } from 'react-redux'





function ProductsShow({dolar}) {
  
  const ürünler = useSelector(selectAllProducts)
  const searchParams = useSearchParams();
  const urlValue = searchParams.get('category')

 
 
  const fuse = new Fuse(ürünler, {
    keys: ['name', 'category', 'subCategory'],
    includeScore: true,
    threshold: 0.8
  })
 

  // const dolar = 19
  const [initialQuery, setInitialQuery] = useState(urlValue || '');
const [query, setQuery] = useState(initialQuery);

useEffect(() => {
  setInitialQuery(urlValue || '');
  setQuery(urlValue || '');
}, [urlValue]);
  
  
  const result = fuse.search(query);
  const results = query ? result.map(item => item.item) : ürünler;

  function search({ currentTarget = {} }) {
    const { value } = currentTarget;
    setQuery(value)
  }

 

  let firstSayac = results.length;
  if (results.length > 8) { firstSayac = 8; }
  const [sayac, setSayac] = useState(firstSayac);

  const handleClick = () => {
    setSayac(sayac + 8);

  };


  return (
    <section id="shop-area" className="main-shop-area">
      <div className="container">
        <div className="row">
          {/*Start sidebar Wrapper*/}
          <div className="col-xl-4 col-lg-4 col-md-8 col-sm-12 float-left">
            <div className="shop-sidebar-wrapper">
              {/*Start single sidebar*/}
              <div className="single-sidebar-box">
                <form className="search-form" action="#">
                  <input placeholder="Ürün ismi veya kategorisi" type="text" value={query} onChange={search} />
                  <button disabled={true}>
                    <i className="fa fa-search" aria-hidden="true" />
                  </button>
                </form>
              </div>
              {/*End single sidebar*/}
              {/*Start single sidebar*/}
              <div className="single-sidebar-box pdbtm">
                <div className="shop-sidebar-title">
                  <h3>Kategoriler</h3>
                </div>
                <ul className="categories clearfix">
                  <li >
                    <button value="paneller" onClick={search}>
                      Paneller
                    </button>
                    <ul className="categories clearfix">
                      <li >

                        <button value="monokristal" onClick={search}>Monokristal</button>

                      </li>
                      <li >
                        <button value="half-cut" onClick={search}>Monokristal Half-Cut</button>
                      </li>
                      <li >
                        <button value="polikristal" onClick={search}>Polikristal</button>
                      </li>
                    </ul>
                  </li>
                  <li >
                    <button value="inverter" onClick={search}>İnverterler</button>
                    <ul className="categories clearfix">
                      <li >
                        <button value="on-grid" onClick={search}>On-Grid İnverterler</button>
                      </li>
                      <li >
                        <button value="off-grid" onClick={search}>Off-Grid İnverterler</button>
                        <ul className="categories clearfix">
                          <li >
                            <button value="akilli-tam-sinus" onClick={search}>Akıllı Off-Grid İnverterler </button>
                          </li>
                          <li >
                            <button value="tam-sinus" onClick={search}>Tam Sinüs İnverterler</button>
                          </li>
                          <li >
                            <button value="Modifiye Sinüs" onClick={search}>Modifiye Sinüs İnverterler </button>
                          </li>
                        </ul>
                      </li>
                      <li >
                        <button value="hybrid" onClick={search}>Hybrid İnverterler</button>
                      </li>
                      <li >
                        <button value="suruculer" onClick={search}>Solar Sürücüler</button>
                      </li>
                      <li >
                        <button value="sarj-kontrol-cihazi" onClick={search}>Şarj Kontrol Cihazları</button>
                      </li>
                    </ul>
                  </li>
                  <li >
                    <button value="solar-akuler" onClick={search}>Aküler</button>
                    <ul className="categories clearfix">
                      <li >
                        <button value="agm" onClick={search}>Agm Aküler</button>
                      </li>
                      <li >
                        <button value="jel" onClick={search}>Solar Jel Aküler</button>
                      </li>
                      <li >
                        <button value="lityum" onClick={search}>Lityum Aküler </button>
                      </li>
                    </ul>
                  </li>
                  <li >
                    <button value="kablolar" onClick={search}>Kablolar</button>
                  </li>
                  <li >
                    <button value="solar-paketler" onClick={search}>Solar Paketler</button>
                    <ul>
                      <li>
                        <button value="arac-sarj-istasyonu" onClick={search}>Araç Şarj İstasyonları</button>
                      </li>
                    </ul>
                  </li>
                  <li >
                    <button value="solar-ekipmanlar" onClick={search}>Solar Ekipmanlar</button>
                    <ul>
                      <li>
                        <button value="wi-fi" onClick={search}>Wi-fi Bağlantı Cihazları</button>
                      </li>
                      <li>
                        <button value="aski" onClick={search}>Askı Aparatları</button>
                      </li>
                      <li>
                        <button value="mobil-panel" onClick={search}>Mobil Paneller</button>
                      </li>
                      <li>
                        <button value="aksesuar" onClick={search}>Aksesuarlar</button>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              {/*End single sidebar*/}
              
            </div>
          </div>
          {/*End Sidebar Wrapper*/}
          <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 float-right">
            <div className="shop-content">
              <div className="row">
                <div className="col-md-12">
                  <div className="showing-result-shorting">
                    <div className="shorting">
                      
                    </div>
                    <div className="showing">
                      <p> {sayac} Sonuç /{results.length} Sonuçtan</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                {sayac === 0 ? <p>Aradığınız ürün stokta bulunmamaktadır.</p> : null}
                {results.slice(0, sayac).map(({ _id, name, category, price, description, image, countInStock, subCategory, detail }) => (

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" key={_id}>
                    <ürün
                      _id={_id}
                      name={name}
                      category={category}
                      price={price}
                      description={description}
                      image={image}
                      countInStock={countInStock}
                      subCategory={subCategory}
                      dolar={dolar}
                      detail={detail}
                    />
                  </div>

                ))}
                <div className="more">
                  {sayac < results.length && (
                    <button className="btn-three" onClick={handleClick}>DAHA FAZLA GÖSTER</button>
                  )}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}








export default ProductsShow



