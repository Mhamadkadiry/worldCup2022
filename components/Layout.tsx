import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
type Props = {
    children: JSX.Element,
  };
const Layout: React.FC<Props> = ({
    children,
  }) => (
    <div>
        <Navbar />
        {children}
        <Footer />
    </div>
  );

export default Layout