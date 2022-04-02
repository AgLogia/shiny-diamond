import React, { Fragment } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import PageTitle from '../../components/PageTitle';
import Scrollbar from '../../components/Scrollbar';
import ShoppingList from '../../components/shopping-list';

const ShopPage =() => {
    return(
        <Fragment>
            <Navbar hclass='wpo-header-style-2'/>
            <PageTitle pageTitle={'Shop'} pageSub={'Shop'}/> 
            <ShoppingList/>
            <Footer ftClass={'wpo-site-footer-s2'}/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ShopPage;
