import Link from "next/link"

function odemeDetails({ _id, name, price, description, image, countInStock, category,quantity, subCategory,detail,dolar }) {
  return (
    
    <tbody>
                  <tr>
                    <td colSpan={2} className="product-column">
                      <div className="column-box">
                        <div className="prod-thumb">
                          <Link href={`/products/${category}/${subCategory}/${_id}`}>
                            <img src={image} alt={name} />
                          </Link>
                        </div>
                        <div className="product-title">
                          <h3>{name}</h3>
                        </div>
                      </div>
                    </td>
                    <td className="qty">
                      <input
                        className="quantity-spinner"
                        style={{width:"50px"}}
                        type="text"
                        defaultValue={quantity}
                        name="quantity"
                      />
                    </td>
                    <td className="price">{(price*quantity*dolar).toFixed(2)} ₺</td>
                  </tr>
                </tbody>
  )
}

export default odemeDetails