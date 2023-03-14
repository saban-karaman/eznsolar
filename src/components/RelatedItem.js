
import Link from "next/link"

function RelatedItem({ _id, name, category, price, description, image, countInStock, subCategory, detail,dolar}) {
    return (
        
            <div className="single-product-item text-center">
                <div className="img-holder">
                    <img
                        src={image}
                        alt="Awesome Product Image"
                    />
                </div>
                <div className="title-holder text-center">
                    <div className="static-content">
                        <h3 className="title text-center">
                            <Link href="/products">{name}</Link>
                        </h3>
                        <div className="rate-review-box">
                            <div className="rate-box float-left">
                                <p className="del">{(price).toFixed(2)}  $</p>
                                <p>{(price*dolar).toFixed(2)}  ₺</p>
                            </div>

                        </div>
                    </div>
                    <div className="overlay-content">
                        <ul>
                            <li>
                                <Link href="/sepet">
                                    <span className="icon-cart" />
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <span className="icon-heart" />
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <span className="flaticon-refresh" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
       
    )
}

export default RelatedItem