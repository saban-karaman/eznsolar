
import { removeFromBasket } from '@/GlobalRedux/basket/basketSlice';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";


function SepetDetail({ _id, name, price, description, image, countInStock, category, quantity ,detail, dolar}) {
   
    
    const dispatch = useDispatch();
    const removeItemFromBasket = () => {
        // Remove item redux
        dispatch(removeFromBasket({ name }))
    };
    return (


        <tbody>
            <tr>
                <td colSpan={2} className="prod-column">
                    <div className="column-box">
                        <div className="prod-thumb">
                            <Link href="#">
                                <img src={image} alt={name} />
                            </Link>
                        </div>
                        <div className="title">
                            <h3 className="prod-title">{name}</h3>
                        </div>
                    </div>
                </td>
                <td className="qty">
                    <input
                        className="quantity-spinner"
                        style={{width:"50px"}}
                        type="text"
                        defaultValue={Number(quantity)}
                        name="quantity"
                    />
                </td>
                <td className="unit-price">
                    <div className="available-info">
                        <span className="icon fa fa-check thm-bg-clr" />
                        Ürün(ler)
                        <br />
                        Stokta Var
                    </div>
                </td>
                <td className="price">{(price*Number(quantity)).toFixed(2)} ₺</td>
                <td className="sub-total">{(price*dolar*Number(quantity)).toFixed(2)} ₺</td>
                <td>
                    <div className="remove">
                    <FontAwesomeIcon icon={faTrashAlt} onClick={removeItemFromBasket}/>
                    </div>
                </td>
            </tr>
        </tbody>


    )
}

export default SepetDetail