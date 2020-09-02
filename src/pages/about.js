import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
  return (
      <Layout>
        <Head title="About" />
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <p><Link to="/contact">Want to work with me? Reach out.</Link></p>
      </Layout>
  );
};

export default AboutPage;