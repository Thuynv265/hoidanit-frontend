import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import formatMoney from "../../utils/format";
import { createNewOrderService } from "../../services/userService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DeleteCart } from "../../store/actions/cartAction";
import { Redirect, useHistory } from "react-router";

const CheckoutCart = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const userInfo = useSelector((state) => state.user.userInfo);
    const products = useSelector((state) => state.cart.Carts);
    const numberCart = useSelector((state) => state.cart.numberCart);
    const [name, setName] = useState(userInfo?.firstName + " " + userInfo?.lastName);
    const [phone, setPhone] = useState(userInfo?.phone);
    const [address, setAddress] = useState(userInfo?.address);
    const [note, setNote] = useState("");
    const [gender, setGender] = useState("male");

    const handleGenderChange = (event) => {
        setGender(event.target.value);
        console.log(event.target.value)
    };

    const inputOnChange = (e, field) => {
        switch (field) {
            case "name":
                setName(e.target.value);
                break;
            case "phone":
                setPhone(e.target.value);
                break;
            case "address":
                setAddress(e.target.value);
                break;
            case "note":
                setNote(e.target.value);
                break;
            default:
                break;
        }
    }


    const totalCart = () => {
        let sum = 0;
        products?.map((item) => {
            sum += item.price * (item.quantity) - item.discount
        })
        return sum;
    }
    const handleOrder = async () => {
        history.push("/home");

        const dataUser = {
            id: userInfo?.id,
            name: name,
            gender: gender,
            phone: phone,
            address: address,
            note: note,
            payname: "Thanh toán khi nhận hàng"
        }

        const data = {
            dataUser: dataUser,
            products: products,
        }
        const res = await createNewOrderService(data);
        if (res.message.errCode !== 0) {
            toast.error('Đặt hàng thất bại!', {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        if (res.message.errCode === 0) {
            dispatch(DeleteCart())
            toast.success('Đặt hàng thành công!', {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }

    }

    useEffect(() => {
        totalCart();
    }, [products]);


    return (
        <div>
            <h5 className="text-uppercase">Thông tin nhận hàng</h5>
            <div style={{
                flexDirection: "row",
                display: "flex",
            }}>
                <div className="mb-3">
                    <div className="form-check">
                        <input
                            type="radio"
                            id="genderMale"
                            name="gender"
                            className="form-check-input"
                            value="male"
                            checked={gender === "male"} // Kiểm tra giá trị của gender
                            onChange={handleGenderChange} // Gọi hàm xử lý sự kiện khi thay đổi giá trị
                        />
                        <label htmlFor="genderMale" className="form-check-label">
                            Anh
                        </label>
                    </div>
                </div>
                &nbsp;
                &nbsp;
                <div className="mb-3">

                    <div className="form-check">
                        <input
                            type="radio"
                            id="genderFemale"
                            name="gender"
                            className="form-check-input"
                            value="female"
                            checked={gender === "female"} // Kiểm tra giá trị của gender
                            onChange={handleGenderChange} // Gọi hàm xử lý sự kiện khi thay đổi giá trị
                        />
                        <label htmlFor="genderFemale" className="form-check-label">
                            Chị
                        </label>
                    </div>
                </div>
            </div>

            <div className="mb-3 d-flex">

                <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    placeholder="Họ và Tên"
                    value={name}
                    onChange={(e) => inputOnChange(e, "name")}
                />
                &nbsp;
                &nbsp;
                <input
                    type="tel"
                    className="form-control"
                    id="phoneNumber"
                    placeholder=" Số điện thoại"
                    value={phone}
                    onChange={(e) => inputOnChange(e, "phone")}
                />
            </div>

            <h6>CHỌN CÁCH THỨC NHẬN HÀNG</h6>
            <div className="mb-3 form-check">
                <input type="radio" className="form-check-input" id="delivery" name="deliveryMethod" value="delivery" checked />
                <label className="form-check-label" htmlFor="delivery">
                    COD
                </label>
            </div>

            <div className="mb-3">
                <label htmlFor="address" className="form-label">
                    Địa chỉ
                </label>
                <input
                    style={{
                        padding: '10px 12px',
                    }}
                    className="form-control"
                    id="address"
                    value={address}
                    onChange={(e) => inputOnChange(e, "address")}
                />

            </div >
            <div div className="mb-3" >
                <label htmlFor="otherRequests" className="form-label">
                    Yêu cầu khác (không bắt buộc)
                </label>
                <textarea
                    className="form-control"
                    id="otherRequests"
                    rows="3"
                    value={note}
                    onChange={(e) => inputOnChange(e, "note")}
                ></textarea>
            </div >
            {/* <div className="mb-3">
                <label htmlFor="otherRequests" className="form-label">
                    Gọi người khác nhận
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="otherRequests"
                    placeholder="Gọi người khác nhận hàng (nếu có)"
                />
            </div> */}
            <div className="form-check mb-3">
                <label htmlFor="productUsage" className="form-label">
                    Hướng dẫn sử dụng, giải đáp thắc mắc sản phẩm
                </label>
                <input
                    type="checkbox"
                    className="form-check-input"
                    id="productUsage"
                />
            </div>
            <div className='d-flex justify-content-between'

                style={{
                    borderBottom: '1px solid #e0e0e0',
                    borderTop: '1px solid #e0e0e0',
                    padding: '12px 0',
                    margin: '12px 0',
                    fontWeight: 'bold'
                }}
            >
                <span>Tổng tiền:</span>
                <span>{formatMoney(totalCart())}đ</span>
            </div>

            <div className='d-flex mt-4 flex-center align-items-center w-100 justify-content-center'>
                <button
                    className='fs-6  text-uppercase w-100 border-0 text-white p-3 border-radius-4'
                    style={{
                        backgroundColor: "#f77e2c",
                        borderRadius: "4px",
                        fontWeight: "bold"
                    }}
                    onClick={handleOrder}
                // type="submit"
                >
                    Đặt hàng
                </button>
            </div>
        </div >
    )
};

export default CheckoutCart;