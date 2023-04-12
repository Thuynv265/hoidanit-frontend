import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom'
import { BsSearch, BsFillCartDashFill } from "react-icons/bs"
import { FaUserPlus, FaUserCircle } from "react-icons/fa"

import Meta from '../../components/Meta'
import './About.scss'
import logoIphone from '../../assets/images/logoIphone.jpg'
import logoOppo from '../../assets/images/logoOppo.jpg'
import logoRealme from '../../assets/images/logoRealme.png'
import logoSamsung from '../../assets/images/logoSamsung.jpg'
import logoVivo from '../../assets/images/logoVivo.jpg'
import logoXiaomi from '../../assets/images/logoXiaomi.jpg'
import HomeHeader from '../Homepage/HomeHeader';
import Footer from '../Footer/Footer';

class About extends Component {
    render() {
        return (
            <>
                <HomeHeader></HomeHeader>
                <Meta title={"Về cửa hàng"} />
                <section id="about" className="py-16">
                    <div className="container my-3 py-3">
                        <h2 className="text-center">Về chúng tôi</h2>
                        <hr />
                        <div className="about-section">
                            <h5>-VTmobile là một chuỗi các cửa hàng chuyên bán các sản phẩm điện thoại di động trong phạm vi cả nước, hợp tác kinh doanh hiệu quả với nhiều Công ty và thương hiệu lớn trên thế giới.</h5>
                            <h5>-Với triết lý "Chắc chắn cho tương lai", chúng tôi luôn hướng tới mục tiêu phát triển bền vững cho chính Công ty và cho khách hàng của mình. Chất lượng quốc tế cho người Việt Nam</h5>
                            <h5>-Giá trị này dẫn dắt sự thành công của VT mobile tại nhiều quốc gia trên toàn cầu và cũng là động lực,
                                niềm tự hào cho đội ngũ VT mobile Việt Nam cùng nỗ lực vì cuộc sống dễ dàng và tốt đẹp hơn cho người Việt.</h5>
                            <br />
                            <h4>Quá trình hình thành và phát triển của VT-mobile:</h4>
                            <ul>
                                <li><h5>2013: Anh Thủy - CEO và Founder đã mở cửa hàng đầu tiên lấy tên là "Di động Văn Thủy"</h5></li>
                                <li><h5>2014: Cửa hàng thứ 2 nằm tại huyện Hoài Đức chính thức khánh thành và đi vào hoạt động</h5></li>
                                <li><h5>2016: Di động Văn Thủy đã quyết định đổi tên thành VT-mobile sau 4 năm hoạt động</h5></li>
                                <li><h5>2018: Tiếp tục mở cửa hàng số 3 nằm tại con phố Trần Đăng Ninh Quận Cầu Giấy do nhu câu của khách hàng cũng như độ uy tín của cửa hàng tăng cao</h5></li>
                            </ul>
                        </div>

                        <h2 className='text-center'>Đội ngũ cửa hàng</h2>
                        <div className="row">
                            <div className="column">
                                <div className="card">
                                    <img src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg" />
                                    <div className="container" style={{ width: "80%", height: "80%" }}>
                                        <h2 className='text-center'>Mr.Thuy</h2>
                                        <p className="title">CEO & Founder </p>
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <div className="card">
                                    <img src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg" />
                                    <div className="container" style={{ width: "80%", height: "80%" }}>
                                        <h2 className='text-center'>Mr.Pan</h2>
                                        <p className="title">Giám đốc điều hành</p>
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <div className="card" >
                                    <img src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg" />
                                    <div className="container" style={{ width: "80%", height: "80%" }}>
                                        <h2 className='text-center'>Mrs.Mary</h2>
                                        <p className="title">Quản lý cửa hàng</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-center py-4">Các hãng điện thoại mà VT mobile hiện đang phân phối và bán lẻ:</h2>
                        <div className="row">
                            <div className="col-md-4 col-sm-6 mb-3 px-3">
                                <div className="card h-100">
                                    <img className="card-img-top img-fluid" src={logoIphone} alt="" height={160} />
                                    <div className="card-body">
                                        <h5 className="card-title text-center"><br />Iphone</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 mb-3 px-3">
                                <div className="card h-100">
                                    <img className="card-img-top img-fluid" src={logoSamsung} alt="" height={160} />
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Samsung</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 mb-3 px-3">
                                <div className="card h-100">
                                    <img className="card-img-top img-fluid" src={logoOppo} alt="" height={160} />
                                    <div className="card-body">
                                        <h5 className="card-title text-center"><br /><br /><br /><br /><br /><br /><br />Oppo</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 mb-3 px-3">
                                <div className="card h-100">
                                    <img className="card-img-top img-fluid" src={logoXiaomi} alt="" height={160} />
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Xiaomi</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 mb-3 px-3">
                                <div className="card h-100">
                                    <img className="card-img-top img-fluid" src={logoRealme} alt="" height={160} />
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Realme</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 mb-3 px-3">
                                <div className="card h-100">
                                    <img className="card-img-top img-fluid" src={logoVivo} alt="" height={160} />
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Vivo</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
