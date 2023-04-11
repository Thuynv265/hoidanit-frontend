import React, { useEffect, useState } from "react";
import HomeHeader from "../Homepage/HomeHeader";
import Footer from "../Footer/Footer";
import { getProductById } from "../../services/userService";
import { useDispatch } from "react-redux";
import { AddCart } from "../../store/actions/cartAction";
import ProductCard from './ProductCard';
import ReactImageZoom from "react-image-zoom";
import { TbTruckReturn, TbDiscount2 } from "react-icons/tb";
import { SiCashapp } from "react-icons/si";
import { ImPriceTags } from "react-icons/im";
import { FaShippingFast } from "react-icons/fa";
import { BiTimer } from "react-icons/bi";
import ReactStars from 'react-rating-stars-component';
import { Link } from "react-router-dom";
import './productDetail.scss'
import logoApple from '../../assets/images/logoIphone.jpg'
import logoOppo from '../../assets/images/logoOppo.jpg'
import logoRealme from '../../assets/images/logoRealme.png'
import logoSamsung from '../../assets/images/logoSamsung.jpg'
import logoVivo from '../../assets/images/logoVivo.jpg'
import logoXiaomi from '../../assets/images/logoXiaomi.jpg'
import Marquee from "react-fast-marquee";

const ProductDetail = (props) => {
    const { id } = props.match.params;
    const [product, setProduct] = useState({});
    const [zoomImg, setZoomImg] = useState({});
    const dispatch = useDispatch()

    const fetchDataDetailProduct = async () => {
        const response = await getProductById(id);
        if (response && response.errCode === 0) {
            setProduct(response.product);
            setZoomImg({
                width: 594,
                height: 600,
                zoomWidth: 600,
                img: response.product.img1,
            })
        }
    }
    console.log(product)

    const addCart = () => {
        if (product)
            dispatch(AddCart(product))
    }

    const zoomItem = {
        width: 594,
        height: 600,
        zoomWidth: 600,
        img: product.img1
    };

    // eslint-disable-next-line no-unused-vars
    const copyToClipboard = (text) => {
        var textField = document.createElement("textarea");
        textField.innerText = text;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand("copy");
        textField.remove();
    };


    useEffect(() => {
        fetchDataDetailProduct();
    }, [])



    return (
        <>
            <HomeHeader />
            <meta charSet="utf-8" />
            <title>Tên sản phẩm</title>
            <div className='breadcrumb py-4 mb-0'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <h2 className="mb-0 text-center">
                                <Link to="/products" className='text-dark'>
                                    Sản phẩm </Link> &gt;  {product.productName} {product.storage} GB
                            </h2>
                        </div>
                    </div>
                </div>
            </div>


            <div className='main-product-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='main-product-image'>
                                <div>
                                    {/* <ReactImageZoom {...zoomImg} /> */}
                                </div>
                            </div>
                            <div className="other-product-images d-flex flex-wrap gap-15">
                                <div>
                                    <img
                                        src={product.img1}
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <img
                                        src={product.img2}
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>

                                {/* <div>
                                    <img
                                        src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <img
                                        src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div> */}
                            </div>
                            <div>
                                <div className="d-flex gap-10 flex-column  my-3">
                                    <h3 className="product-heading">
                                        <FaShippingFast style={{ width: "40px", height: "40px" }} />
                                        Vận chuyển: Miễn phí vận chuyển với mọi đơn hàng tại VT-mobile<br />
                                    </h3>
                                    <h3 className="product-heading">
                                        < TbTruckReturn style={{ width: "40px", height: "40px" }} />
                                        Hoàn trả dễ dàng: Hoàn trả sản phẩm dễ dàng nếu khách hàng gặp bất kỳ lỗi gì liên quan đến phần cứng và phần mềm khi nhân hàng<br />
                                    </h3>
                                </div>
                                <div>
                                    <h3 className="product-heading">
                                        <BiTimer style={{ width: "40px", height: "40px" }} />
                                        Thời gian giao hàng nhanh: 1-2 ngày đối với khu vực miền Bắc, 3-4 ngày đối với các khu vực khác<br />
                                    </h3>
                                    <h3 className="product-heading">
                                        <SiCashapp style={{ width: "40px", height: "40px" }} />
                                        Thanh toán khi nhận hàng: đem lại sự yên tâm cho khách<br />
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="main-product-details">
                                <div className="border-bottom">
                                    <h1 className="title">
                                        Điện thoại {product.productName}
                                    </h1>
                                </div>
                                <div className="border-bottom py-3">
                                    <p className="price text-center"><ImPriceTags />  Giá bán niêm yết: {product.price} VND</p>
                                    <p className="price text-center"><TbDiscount2 />  Giảm giá/Sản phẩm: {product.discount} VND</p>
                                </div>
                                <div className=" py-3">
                                    <h3 className="text-center">Cấu hình chi tiết sản phẩm:</h3>
                                    <table>
                                        <tr>
                                            <th className="text-center">Bảng cấu hình máy</th>
                                            <th >{product.productName} {product.storage} GB</th>
                                        </tr>
                                        <tr>
                                            <td className="text-center">Hãng sản xuất</td>
                                            <td >{product.categoryId === 1 ? 'Apple' : product.categoryId === 2 ? "Samsung" : product.categoryId === 3 ? "Oppo" : product.categoryId === 4 ? 'Xiaomi' : product.categoryId === 5 ? 'Vivo' : product.categoryId === 6 ? 'Realme' : product.categoryId === 7 ? 'Redmi' : 'Nokia'}</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">Màu sắc</td>
                                            <td >{product.color}</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">RAM</td>
                                            <td ></td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">Dung lượng bộ nhớ</td>
                                            <td>{product.storage} GB</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">Kích thước màn hình</td>
                                            <td>{product.screen} inches</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">Độ phân giải</td>
                                            <td>{product.resolution}</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">Trọng lượng</td>
                                            <td>{product.weight} Gram</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">Dung lượng pin</td>
                                            <td>{product.battery} MAH</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">Chất liệu</td>
                                            <td>{product.material}</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">Tiêu chuẩn chống nước</td>
                                            <td>{product.water_resist}</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">Bảo hành</td>
                                            <td>{product.warranty} tháng chính hãng</td>
                                        </tr>
                                    </table>
                                    <br />
                                    <div className="d-flex align-items-center gap-30 ms-5">
                                        <button
                                            className="button border-0"
                                            data-bs-toggle="modal"
                                            data-bs-target="#staticBackdrop"
                                            type="button"
                                            onClick={addCart}
                                        >
                                            Thêm vào giỏ hàng
                                        </button>
                                        <button className="button signup">Mua ngay</button>
                                    </div>
                                </div>
                                <div className="d-flex gap-10 flex-column  my-3">
                                    <h3 className="product-heading">
                                        <FaShippingFast style={{ width: "40px", height: "40px" }} />
                                        Vận chuyển và hoàn trả: Miễn phí vận chuyển với mọi đơn hàng tại VT-mobile<br />
                                    </h3>
                                    <h3 className="product-heading">
                                        < TbTruckReturn style={{ width: "40px", height: "40px" }} />
                                        Hoàn trả dễ dàng: Hoàn trả sản phẩm dễ dàng nếu khách hàng gặp bất kỳ lỗi gì liên quan đến phần cứng và phân mềm khi nhân hàng<br />
                                    </h3>
                                    <h3 className="product-heading">
                                        <BiTimer style={{ width: "40px", height: "40px" }} />
                                        Thời gian giao hàng nhanh: 1-2 ngày đối với khu vực miền Bắc, 3-4 ngày đối với các khu vực khác<br />
                                    </h3>
                                    <h3 className="product-heading">
                                        <SiCashapp style={{ width: "40px", height: "40px" }} />
                                        Thanh toán khi nhận hàng: đem lại sự yên tâm cho khách<br />
                                    </h3>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="description-wrapper py-5 home-wrapper-2">
                <div className='container-xxl'>
                    <div className="row">
                        <div className="col-12">
                            <h4>Mô tả sản phẩm</h4>
                            <div className="bg-white p-3">
                                {product.content}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className='marque-wrapper py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='marquee-inner-wrapper card-wrapper'>
                                <Marquee className='d-flex'>
                                    <div className='mx-4 w-25'>
                                        <img className='brand-css' src={logoApple} alt='brand' />
                                    </div>

                                    <div className='mx-4 w-25'>
                                        <img className='brand-css' src={logoOppo} alt='brand' />
                                    </div>

                                    <div className='mx-4 w-25'>
                                        <img className='brand-css' src={logoRealme} alt='brand' />
                                    </div>

                                    <div className='mx-4 w-25'>
                                        <img className='brand-css' src={logoSamsung} alt='brand' />
                                    </div>

                                    <div className='mx-4 w-25'>
                                        <img className='brand-css' src={logoVivo} alt='brand' />
                                    </div>

                                    <div className='mx-4 w-25'>
                                        <img className='brand-css' src={logoXiaomi} alt='brand' />
                                    </div>
                                </Marquee>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

        </>
    )
}

export default ProductDetail;