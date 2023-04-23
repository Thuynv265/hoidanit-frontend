import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Slide from '../Section/Slide.js';
import Footer from '../Footer/Footer';
import Meta from '../../components/Meta'
class Homepage extends Component {

    render() {

        return (
            <div>
                <Meta title={"Trang chủ"} />
                <HomeHeader />
                <Slide />
                {/* <div style={{ height: '800px' }}> hello home page</div> */}
                <Footer />
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
