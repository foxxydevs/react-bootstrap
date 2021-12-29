import React from 'react'
import Header from '../components/HeaderComponents/Header'
import Footer from '../components/FooterComponents/Footer'

const Layout = (props) => {
 return (
  <>
   <Header />
   <div className='wrapper-content'>{props.children}</div>
   <Footer />
  </>
 )
}

export default Layout
