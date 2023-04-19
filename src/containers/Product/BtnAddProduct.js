import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { AddCart } from "../../store/actions/cartAction";
import { IoAdd } from "react-icons/io5";

function BtnAddProduct({ product }) {
    console.log(product)
    const dispatch = useDispatch();
    const [modal, setModal] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const toggle = () => {
        setModal(!modal);
        setQuantity(1);
    }


    const addCart = () => {
        if (product) {
            const productItem = {
                ...product,
                quantity: quantity,
            }
            dispatch(AddCart(productItem))
            setModal(!modal);
        }
    }

    const formatMoney = (money) => {
        return money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }

    return (
        <div>
            <button
                className="button border-0"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                type="button"
                onClick={toggle}
            >
                Thêm vào giỏ hàng
            </button>
            <Modal isOpen={modal} toggle={toggle} centered style={{
                padding: "40px",
            }}>
                {/* <ModalHeader toggle={toggle}>Modal title</ModalHeader> */}
                <ModalBody>
                    <div className='d-flex flex-center position-relative'>
                        <div className='fs-3'>
                            <span>{product.productName}</span >
                            -
                            <span>{product.storage}</span>
                        </div>
                        <AiOutlineClose
                            className='position-absolute  fs-5 cursor-pointer'
                            style={{
                                right: "0",
                                cursor: "pointer",
                            }}
                            onClick={toggle}
                        />
                    </div>
                    {product?.price && (
                        <div>
                            <span
                                className={product?.discount ? 'text-red' : 'text-black'}
                            >{formatMoney(product?.price - product?.discount)}đ</span>
                            &nbsp;
                            &nbsp;
                            {
                                product?.discount && (
                                    <span
                                        className='decoration-line'
                                        style={{
                                            textDecoration: 'line-through',
                                            opacity: '0.5'
                                        }}

                                    >{formatMoney(product?.price)}</span>
                                )
                            }
                        </div>
                    )}
                    <div
                        className='mt-3 mb-3'
                        style={{
                            borderTop: "1px solid #e5e5e5",
                            borderBottom: "1px solid #e5e5e5",
                            marginTop: "8px",
                        }}
                    >
                        <div className='mt-3 mb-3'>
                            <span className='fs-6 fw-bold '>Màu sắc</span>
                            <div style={{
                                marginTop: "4px",
                            }}>
                                <div className='d-flex col-2 flex-column justify-content-center align-content-center'>
                                    <img src={product.img1}
                                        style={{
                                            height: "50px",
                                            marginBottom: "4px",
                                        }}
                                        alt={product.productName}
                                    />
                                    <input id={`${product.productName}1`} type="radio" name="color" value="red" checked />
                                    <label class='text-center' htmlFor={`${product.productName}1`}>{product.color}</label>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div >
                        <span className='fw-bold'>Chọn số lượng:</span>
                        <span className='border'
                            style={{
                                padding: '6px 0px',
                                marginLeft: '20px',
                            }}
                        >
                            <button
                                className='border-0'
                                style={{
                                    height: "30px",
                                    width: "30px",
                                    border: "none",

                                }}
                                onClick={() => {
                                    if (quantity > 1) {
                                        setQuantity(quantity - 1)
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
                                }}
                                onClick={() => {
                                    setQuantity(quantity + 1)
                                }}
                            >+</button>
                        </span>
                    </div>

                    <div className='d-flex mt-4 flex-center align-items-center w-100 justify-content-center'>
                        <button
                            className='fs-6  text-uppercase w-100 border-0 text-white p-3 border-radius-4'
                            style={{
                                backgroundColor: "#f77e2c",
                                borderRadius: "4px",
                                fontWeight: "bold"
                            }}
                            onClick={addCart}
                        >
                            Thêm vào giỏ hàng
                        </button>
                    </div>
                </ModalBody>
            </Modal>
        </div >
    );
}

export default BtnAddProduct;