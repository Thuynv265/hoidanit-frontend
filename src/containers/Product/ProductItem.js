import React from "react";
import { Link, useHistory } from "react-router-dom";
import formatMoney from "../../utils/format";
import "./ProductItem.css"

const ProductItem = ({ item }) => {
    const history = useHistory();

    return (
        <>
            <div className="col-3 product-item"
                style={{
                    cursor: 'pointer', maxWidth: '240px',
                    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                    borderRadius: '4px',
                    backgroundColor: '#fff',
                }}
                onClick={() => {
                    history.push(`/products/${item.productId}`)
                }}
            >
                <div className='product-card position-relative'>
                    <div className='product-image d-flex justify-content-center' >
                        <img src={item.img1} className='img-fluid' alt='product image' />
                        <img src={item.img2} className='img-fluid' alt='product image' />
                    </div>
                    <div className='product-details' style={{
                        marginTop: '4px',
                    }}>
                        <span className='brand '
                            style={{

                            }}
                        >
                            {item.productName} -  {item.storage.toUpperCase()}
                        </span>
                        <br />
                        <span className='brand '>
                            Màu: {item.color}
                        </span>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <span
                                style={{
                                    color: '#d0021c',
                                    fontWeight: 'bold',
                                    fontSize: '13px',
                                }}
                            >Giá ny: {formatMoney(item.price)}đ</span>
                            {item.discount && item.discount > 0 && (
                                <span style={{
                                    color: '#d0021c',
                                    fontWeight: 'bold',
                                    backgroundColor: '#fff0e9',
                                    marginLeft: '8px',
                                    fontSize: '13px'
                                }}>

                                    -{(item.discount * 100 / item.price).toFixed(2)}%
                                </span>
                            )}
                        </div>
                        {item.discount && item.discount > 0 && (
                            <span
                                style={{
                                    color: '#d0021c',
                                }}
                            >Chỉ còn: {formatMoney(item.price - item.discount)}đ</span>
                        )}


                        {/* <Link to={`/products/${item.productId}`} className='btn-buy text-center' >Xem chi tiết</Link> */}
                        {/* <button className='btn-addcart text-center'>Thêm vào giỏ</button> */}
                    </div>
                </div>
            </div >
        </>

    );
};

export default ProductItem;