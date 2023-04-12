import React, { Component } from 'react';
import { connect } from 'react-redux';
import Meta from '../../components/Meta'
import './Policy.scss'
import logoIphone from '../../assets/images/logoIphone.jpg'
import logoOppo from '../../assets/images/logoOppo.jpg'
import logoRealme from '../../assets/images/logoRealme.png'
import logoSamsung from '../../assets/images/logoSamsung.jpg'
import logoVivo from '../../assets/images/logoVivo.jpg'
import logoXiaomi from '../../assets/images/logoXiaomi.jpg'
import HomeHeader from '../Homepage/HomeHeader';
import Footer from '../Footer/Footer';

class Policy extends Component {
    render() {
        return (
            <>
                <HomeHeader></HomeHeader>
                <Meta title={"Thông tin & điều khoản"} />
                <section id="Policy" className="py-16">
                    <div className="container my-3 py-3">
                        <h1 className="text-center">Thông tin và điều khoản</h1>
                        <hr />
                        <h2>I. Chính sách hoàn tiền & đổi trả</h2>
                        <h3>VT-mobile sẽ thực hiện việc đổi/trả hàng và hoàn tiền cho khách hàng trong những trường hợp sau:</h3>
                        <ul>
                            <li> <h5>Sản phẩm Chúng tôi giao không đúng đơn đặt hàng (tên sản phẩm, kích thước, mẫu mã, màu sắc)  </h5></li>
                            <li> <h5>Sản phẩm Chúng tôi giao bị lỗi hoặc đã qua sử dụng. Trường hợp sản phẩm hư hại do quá trình vận chuyển hoặc do nhà sản xuất thì quý khách có thể từ chối nhận và yêu cầu bộ phận giao hàng liên hệ trực tiếp với chúng tôi.
                                Với những sản phẩm bảo hành đã qua sử dụng, khi mã sản phẩm, nhãn sản phẩm hãng không còn sản xuất hoặc do lý do bất khả kháng, chúng tôi sẽ khấu hao thời gian sử dụng theo cam kết của từng nhãn hàng tới đại lý và khách hàng mua hàng trực tiếp. </h5></li>
                            <li> <h5>Điều kiện đổi trả hàng (chỉ áp dụng khi mua hàng online): <br />
                                *Thời gian: Trong vòng 07 ngày kể từ khi nhận được hàng.<br />
                                *Điều kiện về sản phẩm:<br />
                                - Hàng hóa còn đầy đủ: Sản phẩm nguyên hộp không rách nát, kèm theo các sản phẩm tặng (nếu có), chưa bóc tem, nhãn mác, hóa đơn.
                                <br />
                                - Hàng hóa tuyệt đối không có dấu hiệu đã qua sử dụng.
                            </h5></li >
                            <li> <h5>Chi phí chuyển đổi, hoàn trả sản phẩm: <br />
                                - Trong trường hợp lỗi từ phía Chúng tôi: Chúng tôi sẽ chịu hoàn toàn chi phí vận chuyển đổi trả.<br />
                                - Trong trường hợp do nhu cầu cá nhân, khách hàng muốn đổi sản phẩm khác: Khách hàng chịu hoàn toàn chi phí trả hàng và giao sản phẩm mới.
                            </h5></li >
                            <li> <h5>Điều kiện hoàn tiền: <br />
                                *Chúng tôi sẽ hoàn tiền cho khách hàng trong 3 trường hợp:<br />
                                - Hoàn tiền khi đặt hàng thành công nhưng chưa nhận sản phẩm<br />
                                *Trường hợp này xảy ra khi Chúng tôi hết sản phẩm khách muốn đặt nhưng chưa cập nhật kịp thời trên website hoặc khách hàng đặt nhầm.<br />
                                - Hoàn tiền khi khách hàng nhận được sản phẩm nhưng sản phẩm lỗi từ phía chúng tôi. <br />
                                - Hoàn tiền khi khách không muốn nhận sản phẩm do nhu cầu cá nhân thay đổi. Chúng tôi sẽ trừ chi phí vận chuyển trực tiếp vào tiền chuyển hoàn của khách hàng.
                            </h5></li >
                        </ul>
                        <br />
                        <h2>II. Chính sách bảo hành</h2>
                        <h3>Sản phẩm của quý khách sẽ được bảo hành trong các trường hợp sau:</h3>
                        <ul>
                            <li> <h5>Sản phẩm còn trong thời hạn bảo hành chính hãng digiworld và chưa từng sửa chữa ở những nơi khác</h5></li>
                            <li> <h5>Trong vòng 15 ngày đầu sử dụng nếu có bất kỳ lỗi gì từ nhà sản xuất thì khách hàng sẽ được đổi mới sản phẩm khác<br /></h5>
                            </li >
                            <li> <h5>Chi phí vận chuyển sản phẩm để bảo hành sẽ do cửa hàng chịu, khách hàng sẽ không phải trả tiền vận chuyển<br />
                            </h5></li >
                            <li> <h5>Những sản phẩm quá hạn bảo hành sẽ không được sửa chữa miễn phí nếu hỏng hóc và khách hàng sẽ cần trả tiền sửa chữa theo giá của hãng niêm yết<br />
                            </h5></li >
                        </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(Policy);
