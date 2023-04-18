import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import formatMoney from "../../utils/format";
import { DecreaseQuantity, DeleteItem, IncreaseQuantity } from "../../store/actions/cartAction";
import './ProductCartItem.scss'

const ProductCartItem = ({ product }) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(product.quantity);
    const [name, setName] = useState(product.title);
    const [price, setPrice] = useState(product.price);
    const [total, setTotal] = useState(product.price * product.quantity);


    const handleQuantityChange = (e) => {
        const value = e.target.value;
        if (value > quantity)
            dispatch(IncreaseQuantity(product.pid))
        else if (value < quantity)
            dispatch(DecreaseQuantity(product.pid))
        else if (value === 0)
            dispatch(DeleteItem(product.pid))

    }

    const handleDeleteProduct = () => {
        dispatch(DeleteItem(product.pid))
    }

    return (
        <tr className="container-cart">
            <th scope="row" className="d-flex "
                style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <img src={product.img} className="img-fluid" alt=""
                    style={{
                        height: "58px",
                    }}
                />
                <div >
                    <AiFillCloseCircle className=" fs-2  text-danger delete-item-cart"
                        onClick={() => {
                            handleDeleteProduct()
                        }}
                    />
                </div>
            </th>
            <td>
                <div className="d-flex"
                    style={{
                        marginRight: '8px'
                    }}>
                    <div >

                    </div>
                    <div style={{
                        fontSize: '13px',
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <span style={{
                            fontWeight: 'bold',
                        }}>Tên: <span> {name}</span></span>
                        <span>Màu: Tím</span>
                        <span>Phiên bản RAM/ROM: 6GB/256GB</span>
                    </div>
                </div>
            </td>
            <td>

                <div className="">
                    <div style={{
                        marginBottom: '8px',
                    }}>
                        <span>
                            {formatMoney(price)}đ
                            &nbsp;x&nbsp;
                            {quantity}
                        </span>
                    </div>
                    <div>
                        <span className='border'
                            style={{
                                padding: '7px 0px',
                                background: 'white',
                            }}
                        >
                            <button
                                className='border-0'
                                style={{
                                    height: "30px",
                                    width: "30px",
                                    border: "none",
                                    background: '#ff7d1d'

                                }}
                                onClick={() => {
                                    if (quantity > 1) {
                                        dispatch(DecreaseQuantity(product.pid))
                                    }
                                }}
                            >
                                -
                            </button>
                            <span className='m-3'>{quantity}</span>
                            <button
                                style={{
                                    height: "30px",
                                    width: "30px",
                                    border: "none",
                                    background: '#ff7d1d'

                                }}
                                onClick={() => {
                                    if (quantity < 10) {
                                        dispatch(IncreaseQuantity(product.pid))
                                    }
                                }}
                            >+</button>
                        </span>
                    </div>
                </div>
            </td>
        </tr >

    );
}
export default ProductCartItem;