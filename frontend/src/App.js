import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import AdminRoute from './components/AdminRoute'
import PrivateRoute from './components/PrivateRoute'
import CartScreen from './screens/CartScreen'
import HomeScreen from './screens/HomeScreen'
import Home from './screens/Home'
import PaymentMethodScreen from './screens/PaymentMethodScreen'
import OrderScreen from './screens/OrderScreen'
import OrderHistoryScreen from './screens/OrderHistoryScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductScreen from './screens/ProductScreen'
import ProfileScreen from './screens/ProfileScreen'
import RegisterScreen from './screens/RegisterScreen'
import ShippingAddressScreen from './screens/ShippingAddressScreen'
import SigninScreen from './screens/SigninScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import SellerRoute from './components/SellerRoute'
import SellerScreen from './screens/SellerScreen'
import DashboardScreen from './screens/DashboardScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderListScreen from './screens/OrderListScreen'
import NavBar from './components/NavBar'
import SearchBox from './components/SearchBox'
import SearchScreen from './screens/SearchScreen'

function App() {
  return (
    <BrowserRouter>
      <div className='grid-container'>
        <header>
          <NavBar />
        </header>

        <main>
          <Route
            path={['/', '/search/*']}
            exact
            render={({ history }) => <SearchBox history={history}></SearchBox>}
          ></Route>
          <Route
            path='/search/name/:name?'
            component={SearchScreen}
            exact
          ></Route>
          <Route path='/home' component={Home}></Route>

          <Route path='/seller/:id' component={SellerScreen}></Route>
          <Route path='/cart/:id?' component={CartScreen}></Route>
          <Route path='/product/:id' component={ProductScreen} exact></Route>
          <Route
            path='/product/:id/edit'
            component={ProductEditScreen}
            exact
          ></Route>

          <Route path='/signin' component={SigninScreen}></Route>
          <Route path='/register' component={RegisterScreen}></Route>
          <Route path='/shipping' component={ShippingAddressScreen}></Route>
          <Route path='/payment' component={PaymentMethodScreen}></Route>

          <Route path='/placeorder' component={PlaceOrderScreen}></Route>
          <Route path='/order/:id' component={OrderScreen}></Route>
          <Route path='/orderhistory' component={OrderHistoryScreen}></Route>

          <PrivateRoute
            path='/profile'
            component={ProfileScreen}
          ></PrivateRoute>

          <AdminRoute
            path='/productlist'
            component={ProductListScreen}
            exact
          ></AdminRoute>
          <AdminRoute path='/userlist' component={UserListScreen}></AdminRoute>
          <AdminRoute
            path='/user/:id/edit'
            component={UserEditScreen}
            exact
          ></AdminRoute>
          <AdminRoute
            path='/orderlist'
            component={OrderListScreen}
          ></AdminRoute>
          <AdminRoute
            path='/dashboard'
            component={DashboardScreen}
          ></AdminRoute>

          <SellerRoute
            path='/productlist/seller'
            component={ProductListScreen}
          ></SellerRoute>
          <SellerRoute
            path='/orderlist/seller'
            component={OrderListScreen}
          ></SellerRoute>

          <Route path='/' component={HomeScreen} exact></Route>
        </main>
        <footer className='row center'>All right reserved</footer>
      </div>
    </BrowserRouter>
  )
}

export default App
