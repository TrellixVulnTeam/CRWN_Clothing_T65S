import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';
import { selectCurrentUser } from './redux/user/user-selector';
import { checkUserSession } from './redux/user/user-actions';
import Header from './components/header/header';
import HomePage from './pages/home-page/home-page';
import ShopPage from './pages/shop-page/shop-page';
import CheckoutPage from './pages/checkout-page/checkout-page';
import SignUpAndSignIn from './pages/signIn-sighUp/signIn-sighUp';
import './App.css';

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.props.checkUserSession();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignUpAndSignIn />
            }
          />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: selectCurrentUser(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkUserSession: () => dispatch(checkUserSession()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
