import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import './Slider.scss'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// import banner1 from '../../assets/slide/banner1.png'
// import banner2ip from '../../assets/slide/banner2ip.png'
// import banner3 from '../../assets/slide/banner3.png'
// import banner4 from '../../assets/slide/banner4.png'
import slide1 from '../../assets/slide/slide1.jpg'
import slide2 from '../../assets/slide/slide2.jpg'
import slide3 from '../../assets/slide/slide3.jpg'
import slide4 from '../../assets/slide/slide4.jpg'
import slide6 from '../../assets/slide/slide6.jpg'
import home1 from '../../assets/slide/home1.jpg'
import home2 from '../../assets/slide/home2.jpg'
import home3 from '../../assets/slide/home3.png'
import home4 from '../../assets/slide/home4.jpg'
import service from '../../assets/images/service.png'
import service2 from '../../assets/images/service-02.png'
import service3 from '../../assets/images/service-03.png'
import service4 from '../../assets/images/service-04.png'
import service5 from '../../assets/images/service-05.png'
// import brand01 from '../../assets/images/appletran.png'
import logoApple from '../../assets/images/logoIphone.jpg'
import logoOppo from '../../assets/images/logoOppo.jpg'
import logoRealme from '../../assets/images/logoRealme.png'
import logoSamsung from '../../assets/images/logoSamsung.jpg'
import logoVivo from '../../assets/images/logoVivo.jpg'
import logoXiaomi from '../../assets/images/logoXiaomi.jpg'
import ReactPlayer from 'react-player/youtube'
class Slide extends Component {
    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slideToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <>
                {/* <div><h2 className='text-center'>Chào mừng đến với VT-mobile</h2></div> */}
                <section className='home-wrapper-1 py-5'>
                    <div className='container-xxl'>
                        <div className='row'>
                            <div className='col-6'>
                                <div className='main-banner position-relative'>
                                    <img
                                        src={slide1}
                                        className='img-fluid rounded-3'
                                        alt='main banner'
                                    />
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
                                    <div className='small-banner position-relative '>
                                        <img
                                            src={slide2}
                                            className='img-fluid rounded-3 mb-2 mt-4'
                                            alt='main banner'
                                        />
                                    </div>
                                    <div className='small-banner position-relative '>
                                        <img
                                            src={slide3}
                                            className='img-fluid rounded-3 mb-2 mt-4'
                                            alt='main banner'
                                        />
                                    </div>
                                    <div className='small-banner position-relative '>
                                        <img
                                            src={slide4}
                                            className='img-fluid rounded-3 mt-3 mb-2'
                                            alt='main banner'
                                        />
                                    </div>
                                    <div className='small-banner position-relative mt-3 mb-2'>
                                        <img
                                            src={slide6}
                                            className='img-fluid rounded-3'
                                            alt='main banner'
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <section className='section-slider'>
                    <div className='slide-container'>
                        <div className='slide-header text-center'>
                            <h1>Chào mừng tới VT mobile</h1>
                        </div>
                        <Slider {...settings}>
                            <div className='slide-body img-fluid rounded-3'>
                                <img src={banner1} />
                            </div>
                            <div className='slide-body img-fluid rounded-3'>
                                <img src={banner4} />
                            </div>
                            <div className='slide-body img-fluid rounded-3'>
                                <img src={banner2ip} />
                            </div>
                            <div className='slide-body img-fluid rounded-3'>
                                <img src={banner3} />
                            </div>
                            <div className='slide-body img-fluid rounded-3'>
                                <img src={slide5} />
                            </div>
                            <div className='slide-body img-fluid rounded-3'>
                                <img src={slide3} />
                            </div>
                        </Slider>
                    </div>
                </section> */}
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

                <section className='home-wrapper-1 py-5'>
                    <div className='container-xxl'>
                        <div className='row'>
                            <div className='col-6'>
                                <div className='main-banner position-relative'>
                                    <h3>Trải qua 10 năm kinh doanh và phát triển. VT mobile tự hào là doanh nghiệp uy tín được đông đảo khách hàng tin tưởng mỗi khi mua sắm điện thoại.
                                        Những thành tựu của VT mobile đã đạt được cho đến nay có thể nói là hết sức đang thuyết phục như:
                                        top 3 cửa hàng điện thoại uy tín nhất Việt Nam từ năm 2013-2023, được Apple công nhận là đại lý ủy quyền của Apple tại Việt Nam. Kỷ niệm chương của bô Thông tin và truyền thông vì những dóng góp cho xã hội, top 5 cửa hàng được yêu thích nhất do người dùng bình chọn năm 2022,...</h3>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
                                    <div className='small-banner position-relative '>
                                        <img
                                            src={home1}
                                            className='img-fluid rounded-3 '
                                            alt='main banner'
                                        />
                                    </div>
                                    <div className='small-banner position-relative '>
                                        <img
                                            src={home2}
                                            className='img-fluid rounded-3  '
                                            alt='main banner'
                                        />
                                    </div>
                                    <div className='small-banner position-relative '>
                                        <img
                                            src={home3}
                                            className='img-fluid rounded-3 '
                                            alt='main banner'
                                        />
                                    </div>
                                    <div className='small-banner position-relative '>
                                        <img
                                            src={home4}
                                            className='img-fluid rounded-3'
                                            alt='main banner'
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='home-wrapper-2 py-5'>
                    <div className='container-xxl'>
                        <div className='row'>
                            <div className='col-12'>

                                <div className='servies d-flex align-items-center justify-content-between'>

                                    <div className="d-flex align-items-center gap-15">
                                        <img src={service} alt='services' />
                                        <div>
                                            <h6>
                                                Miễn phí vận chuyển
                                            </h6>
                                            <p className="mb-0">
                                                Với mọi đơn hàng.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-15">
                                        <img src={service2} alt='services' />
                                        <div>
                                            <h6>
                                                Khuyến mại hot mỗi ngày
                                            </h6>
                                            <p className="mb-0">
                                                Tiết kiệm đến 15%
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-15">
                                        <img src={service3} alt='services' />
                                        <div>
                                            <h6>
                                                Hỗ trợ 24/7
                                            </h6>
                                            <p className="mb-0">
                                                Với đội ngũ kĩ thuật kinh nghiệm
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-15">
                                        <img src={service4} alt='services' />
                                        <div>
                                            <h6>
                                                Giá cả rẻ nhất thị trường
                                            </h6>
                                            <p className="mb-0">
                                                Bằng giá niêm yết của hãng
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-15">
                                        <img src={service5} alt='services' />
                                        <div>
                                            <h6>
                                                Thanh toán an toàn & tiện lợi
                                            </h6>
                                            <p className="mb-0">
                                                Đảm bảo tối đa
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <section className='home-wrapper-1 py-5'>
                    <div className='container-xxl'>
                        <div className='row'>
                            <div className='col-6'>
                                <div className='main-banner '>
                                    <div>
                                        <h4>Top smartphone giá rẻ dưới 5 triệu tại của hàng:</h4></div> */}

                {/* <ReactPlayer className='react-player'
                                        url='https://www.youtube.com/watch?v=fE_DIbQuRGU&t=1s&ab_channel=AnhEmTV'
                                        width='100%'
                                        height='300px'

                                    /> */}

                {/* </div>
                            </div>
                            <div className='col-6'>
                                <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
                                    <div className='small-banner position-relative '>
                                        <img
                                            src='https://www.mobiledokan.co/wp-content/uploads/2022/09/Apple-iPhone-14-series-come-with-some-revolutions-featured-image-780x470.jpg'
                                            className='img-fluid rounded-3 mb-2 mt-4'
                                            alt='main banner'
                                        />
                                    </div>
                                    <div className='small-banner position-relative '>
                                        <img
                                            src='https://images2.thanhnien.vn/Uploaded/nthanhluan/2022_03_15/3117-7706.jpg'
                                            className='img-fluid rounded-3 mb-2 mt-4'
                                            alt='main banner'
                                        />
                                    </div>
                                    <div className='small-banner position-relative '>
                                        <img
                                            src='https://laptopdell.com.vn/wp-content/uploads/2022/09/Oppo-Reno-8.jpg'
                                            className='img-fluid rounded-3 mt-3 mb-2'
                                            alt='main banner'
                                        />
                                    </div>
                                    <div className='small-banner position-relative mt-3 mb-2'>
                                        <img
                                            src='https://i.ytimg.com/vi/_ynwIfkO35Y/maxresdefault.jpg'
                                            className='img-fluid rounded-3'
                                            alt='main banner'
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

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

export default connect(mapStateToProps, mapDispatchToProps)(Slide);
