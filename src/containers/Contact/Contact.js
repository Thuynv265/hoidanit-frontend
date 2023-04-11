import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import { NavLink, Link } from 'react-router-dom'
import Meta from '../../components/Meta'
import './Contact.scss'
import HomeHeader from '../Homepage/HomeHeader';
import Footer from '../Footer/Footer';
import { AiFillHome } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { IoMdInformationCircle } from "react-icons/io";
class Contact extends Component {
    render() {
        return (
            <>
                <HomeHeader></HomeHeader>
                <Meta title={"Liên hệ VT mobile"} />
                <div className='contact-wrapper py-5 home-wrapper-2'>
                    <div className='container-xxl'>
                        <div className='row'>
                            <div className='col-12'>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.875032543727!2d105.78011591436861!3d21.037685692850715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454caaf2b115f%3A0xc05b77c8a5f461ae!2zxJDhuqFpIGjhu41jIFF14buRYyBnaWEgSMOgIE7hu5lpLCBE4buLY2ggVuG7jW5nIEjhuq11LCBD4bqndSBHaeG6pXksIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1677169351155!5m2!1svi!2s"
                                    width="600"
                                    height="450"
                                    className='w-100 border-0'
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                            <div className='col-12 mt-5'>
                                <div className='d-flex justify-content-between contact-with-wrapper'>
                                    <div>
                                        <h3 className='mb-4 contact-title'>Các chi nhánh của cửa hàng:</h3>
                                        <ul>
                                            <li><h4>+Trụ sở chính: Số 144 Xuân Thủy, Cầu Giấy, Hà Nội. Hotline: <a href="tel:+84978569372">Hotline: 0978569372</a></h4></li>
                                            <li><h4>+Cơ sở 2: Số 156, Đức Thượng, Hoài Đức, Hà Nội. Hotline: <a href="tel:+84867832651">Hotline: 0867832651</a></h4></li>
                                            <li><h4>+Cơ sở 3: Số 12 Trần Đăng Ninh, Cầu Giấy, Hà Nội. Hotline: <a href="tel:+84396617584">Hotline: 0396617584</a></h4></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className='mb-4 contact-title'>Thông tin liên hệ của cửa hàng VT mobile:</h3>
                                        <div>
                                            <ul className='ps-0'>
                                                <li className='mb-3 d-flex align-items-center gap-15'>
                                                    <AiFillHome className="fs-5" />
                                                    <address className='mb-0'>Địa chỉ: số 144 Xuân Thủy, Cầu Giấy, Hà Nội</address>
                                                </li>
                                                <li className='mb-3 d-flex align-items-center gap-15'>
                                                    <BsFillTelephoneFill className="fs-5" />
                                                    <a href="tel:+84978569372">Hotline: 0978569372</a>
                                                </li>
                                                <li className='mb-3 d-flex align-items-center gap-15'>
                                                    <BsFacebook className="fs-5" />
                                                    <a href="https://www.facebook.com/Binhnonglanh48">Fanpage: Cửa hàng điện thoại VT mobile</a>
                                                </li>
                                                <li className='mb-3 d-flex align-items-center gap-15'>
                                                    <MdEmail className="fs-5" />
                                                    <a href="mailto:19021371@vnu.edu.vn">
                                                        Email: 19021371@vnu.edu.vn
                                                    </a>
                                                </li>
                                                <li className='mb-3 d-flex align-items-center gap-15'>
                                                    <IoMdInformationCircle className="fs-5" />
                                                    <p className="mb-0">Thời gian hoạt động: Thứ 2-Chủ nhật (8h-21h)</p>

                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
