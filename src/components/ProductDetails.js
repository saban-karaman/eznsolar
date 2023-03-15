
import { useDispatch } from 'react-redux';
import { addToBasket, selectAllProducts } from "../GlobalRedux/basket/basketSlice";
import Link from 'next/link';
import RelatedItem from './RelatedItem';
import { useState } from 'react';
import { useSelector } from "react-redux";
// import { useSearchParams } from 'next/navigation';



function ProductDetails({product, dolar}) {
    // const searchParams = useSearchParams();
//   const urlValue = searchParams.get('id')
 const ürünler = useSelector(selectAllProducts)
    // const pro=ürünler.filter(item => (item._id === urlValue));
    // const product=pro[0];
    console.log("first",product)
    // const dolar = 19
    // if(product===null){product=ürünler[0]}
    const related = ürünler.filter(item => ((item.subCategory === product.subCategory) && (item._id !== product._id)))


    const [quantity, setQuantity] = useState(1)

    const dispatch = useDispatch();
    const addItemToBasket = () => {
        dispatch(addToBasket({ product, quantity,dolar }))
    };
   
    
    return (
        
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
                                    <h1>Ürünlerimiz</h1>
                                </div>
                                <div className="breadcrumb-menu float-right">
                                    <ul className="clearfix">
                                        <li>
                                            <Link href="/">Anasayfa</Link>
                                        </li>
                                        <li className="active">Ürünlerimiz</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*End breadcrumb area*/}
            {/*Start shop area*/}
            <section id="shop-area" className="single-shop-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="shop-content">
                                {/*Start single shop content*/}
                                <div className="single-shop-content">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="single-product-image-holder">
                                                <img
                                                    src={(product && product.image) ? product.image : ""}
                                                    alt="Awesome Image"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="content-box">    
                                                <p >{(product && product.price) ? (product.price).toFixed(2): 0} $</p>                
                                                <span className="price">{(product && product.price) ? (product.price*dolar).toFixed(2) : 0} ₺</span>
                                                <h2>{(product && product.name) ? (product.name): ""}</h2>

                                                <div className="text">
                                                    <p>
                                                        {(product && product.description) ? (product.description): ""}
                                                    </p>
                                                </div>

                                                <div className="addto-cart-box">
                                                    <input
                                                        className="quantity-spinner"
                                                        type="number"
                                                        min="1"
                                                        name="quantity"
                                                        defaultValue={quantity}
                                                        onChange={(event) => setQuantity(event.target.value)}
                                                    />
                                                    <button
                                                        className="btn-three addtocart"
                                                        type="submit"
                                                        onClick={() => addItemToBasket(product, quantity)}
                                                    >
                                                        SEPETE EKLE
                                                        <span className="icon-null" />
                                                    </button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*End single shop content*/}
                                {/*Start product tab box*/}
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="product-tab-box tabs-box">
                                            <ul className="tab-btns tab-buttons clearfix">
                                                <li data-tab="#desc" className="tab-btn active-btn">
                                                    <span>Ürün Bilgileri</span>
                                                </li>
                                            </ul>
                                            <div className="tabs-content">
                                                <div className="tab active-tab" id="desc">
                                                    <div className="product-details-content">
                                                        <div className="desc-content-box">
                                                            <p>
                                                                {(product && product.detail) ? (product.detail): ""}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*Start related product box*/}
                                <div className="related-product">
                                    <div className="title">
                                        <h3>Benzer Ürünler</h3>
                                    </div>
                                    <div className="row">
                                        {related.map(({ _id, name, category, price, description, image, countInStock, subCategory,detail }) => (
                                            <Link legacyBehavior href={{ pathname: '/product',query: { id: `${_id}` },}} key={_id}>
                                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12" id="link">
                                                    <RelatedItem
                                                        _id={_id}
                                                        name={name}
                                                        category={category}
                                                        price={price}
                                                        description={description}
                                                        image={image}
                                                        countInStock={countInStock}
                                                        subCategory={subCategory}
                                                        detail={detail}
                                                        dolar={dolar}
                                                    />
                                                </div>

                                            </Link>
                                        ))}
                                    </div>
                                </div>
                                {/*End related product box*/}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*End shop area*/}

        </div>
        
    )
}

export default ProductDetails