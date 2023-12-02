// Layout.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

const Layout = ({ children }) => {
  return (
    <div>
      <Helmet>
        <title>Your Website Title</title>
        <meta name="description" content="Your website description" />
        {/* Add more meta tags as needed */}
      </Helmet>

      {children}
    </div>
  );
};

export default Layout;
