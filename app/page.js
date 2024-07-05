"use client";
import Image from 'next/image';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="container py-5 d-flex align-items-center" style={{ minHeight: '80vh' }}>
      <div className="row justify-content-center align-items-center w-100 position-relative">
        <div className="col-md-6 text-md-right text-center mb-4 mb-md-0">
          <h2 className="lead" style={{ fontSize: '54px', marginRight: '375px', color: '#69D3EB' }}>I AM GRIZ</h2>
          <h1 style={{ fontSize: '60px', color: '#69D3EB', fontWeight: 'bold' }}>A PASSIONATE UI/UX</h1>
          <h1 style={{ fontSize: '6rem', marginRight: '350px', color: '#69D3EB', fontWeight: 'bold' }}>DESIGNER</h1>
        </div>
        <div className="position-absolute top-50 end-0 translate-middle-y" style={{ marginRight: '350px'}}>
          <a href="https://www.facebook.com/grizonrussel.sacay/" target="_blank" rel="noopener noreferrer" className="d-block mb-3">
            <FaFacebook size={30} color="#69D3EB" />
          </a>
          <a href="https://www.instagram.com/grznrssll/" target="_blank" rel="noopener noreferrer" className="d-block mb-3">
            <FaInstagram size={30} color="#69D3EB" />
          </a>  
        </div>
      </div>
    </div>
  );
};

export default Home;
