import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';
import { history } from '../redux'
import { ToastContainer } from 'react-toastify';
import { userIsAuthenticated, userIsNotAuthenticated } from '../hoc/authentication';
import { path } from '../utils'
import CustomScrollbars from '../components/CustomScrollbars';
import { CustomToastCloseButton } from '../components/CustomToast';
import Signup from './Signup/Signup';
import Contact from './Contact/Contact';
import Product from './Product/Product';
import Policy from './Policy/Policy';
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';
import Home from '../routes/Home';
import editInfo from './EditUserInfo/editInfo';
// import Login from '../routes/Login';
import Login from './Auth/Login';
import System from '../routes/System';
import Homepage from './Homepage/Homepage.js'
import About from './About/About'
import ProductDetail from './Product/ProductDetail';
import orderHistory from './OrderHistory/orderHistory';
// import ConfirmModal from '../components/ConfirmModal';

class App extends Component {

    handlePersistorState = () => {
        const { persistor } = this.props;
        let { bootstrapped } = persistor.getState();
        if (bootstrapped) {
            if (this.props.onBeforeLift) {
                Promise.resolve(this.props.onBeforeLift())
                    .then(() => this.setState({ bootstrapped: true }))
                    .catch(() => this.setState({ bootstrapped: true }));
            } else {
                this.setState({ bootstrapped: true });
            }
        }
    };

    componentDidMount() {
        this.handlePersistorState();
    }

    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <Router history={history}>
                        <div className="main-container">

                            {/* {this.props.isLoggedIn && <Header />} */}

                            <div className="content-container">
                                <CustomScrollbars style={{ height: '100vh', width: '100%' }}>
                                    <Switch>
                                        <Route path={path.HOME} exact component={(Home)} />
                                        <Route path={path.LOGIN} component={userIsNotAuthenticated(Login)} />
                                        <Route path={path.SYSTEM} component={userIsAuthenticated(System)} />
                                        <Route path={path.HOMEPAGE} component={Homepage} />
                                        <Route path={path.ABOUT} component={About} />
                                        <Route path={path.SIGNUP} component={Signup} />
                                        <Route path={path.EDIT} component={editInfo} />
                                        <Route path={path.CONTACT} component={Contact} />
                                        <Route path={path.PRODUCT} component={Product} exact />
                                        <Route path={path.POLICY} component={Policy} />
                                        <Route path={path.CART} component={Cart} />
                                        <Route path={path.CHECKOUT} component={Checkout} />
                                        <Route path={path.PRODUCT_DETAIL} component={ProductDetail} />
                                        <Route path={path.ORDER_HISTORY} component={orderHistory} />
                                    </Switch>
                                </CustomScrollbars>
                            </div>
                            <ToastContainer
                                className="toast-container" toastClassName="toast-item" bodyClassName="toast-item-body"
                                autoClose={false} hideProgressBar={true} pauseOnHover={false}
                                pauseOnFocusLoss={true} closeOnClick={false} draggable={false}
                                closeButton={<CustomToastCloseButton />}
                            />
                        </div>
                    </Router>
                </Fragment>
            </BrowserRouter>

        )
    }
}

const mapStateToProps = state => {
    return {
        started: state.app.started,
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);