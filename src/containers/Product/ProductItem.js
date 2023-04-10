import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ item }) => {
    return (
        <>
            <div className={"col-3"}>
                <div className='product-card position-relative'>
                    <div className='product-image'>
                        <img src={item.img1} className='img-fluid' alt='product image' />
                        <img src={item.img2} className='img-fluid' alt='product image' />
                    </div>
                    <div className='product-details'>
                        <h5 className='brand'>
                            {item.productName}
                        </h5>
                        <h5 className='product-title'>
                            Dung lượng: {item.storage}
                        </h5>
                        <h5 className='price'>
                            Giá: {item.price}VNĐ
                        </h5>
                        <Link to={`/products/${item.productId}`} className='btn-buy text-center' >Xem chi tiết</Link>
                        <button className='btn-addcart text-center'>Thêm vào giỏ hàng</button>
                    </div>
                </div>
            </div >
        </>

    );
};

export default ProductItem;