
import Link from "next/link"
import { useDispatch } from 'react-redux';
import { addToBasket } from "@/GlobalRedux/basket/basketSlice";
import { useState } from 'react';


function ürün({ _id, name, category, price, description, image, countInStock, subCategory, detail,dolar }) {

  const [quantity, setQuantity] = useState(1)
  const product = {
    _id: _id,
    name: name,
    category: category,
    price: price,
    description: description,
    image: image,
    countInStock: countInStock,
    subCategory: subCategory,
    detail:detail
  }
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    dispatch(addToBasket({ product, quantity, dolar }))
  };
  return (

    <div className="single-product-item text-center" key={_id}>
      <Link legacyBehavior href={{ pathname: '/product',query: { id: `${_id}`},}} >
        <div>
          <div className="img-holder">
            <img src={image} alt="Awesome Product Image1" />
          </div>
          <div className="static-content">
            <h3 className="title text-center">
              {name}
            </h3>
          </div>
        </div>
      </Link> 
      <div className="title-holder text-center">
        <div className="addto-cart-box">
          <div className="rate-review-box">
            <div className="rate-box float-left">
              <p className="del">{(price).toFixed(2)}  $</p>
              <p>{(price * dolar).toFixed(2)}  ₺</p>
            </div>
            <input style={{width: "50px"}}
            className="quantity-spinner"
            type="number"
            min="1"
            name="quantity"
            defaultValue={quantity}
            onChange={(event) => setQuantity(event.target.value)}
          />
          <button
            className="btn-three addtocart"

            onClick={() => addItemToBasket(product, quantity)}
          >
            SEPETE EKLE
          </button>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default ürün