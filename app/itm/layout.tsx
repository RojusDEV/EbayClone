import Banner from '@/components/layout/Banner/Banner'
import Footer from '@/components/layout/Footer/Footer'
import Header from '@/components/layout/Header/Header'
import React from 'react'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      <Banner />
      <Header screenDimention='fullScreen'/>
      {children}
      <Footer />
    </div>
  )
}

export default layout