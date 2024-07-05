"use client";
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';

const AboutMe = () => {
  return (
    <Container className="py-5">
      <Row className="align-items-center">
        <Col md={6} className="text-center">
          <div className="p-5 p-md-0">
            <Image
              src="/assets/image/grizon.profile.png"
              alt="Profile Picture"
              width={390}
              height={700}
              style={{ marginRight: '0', marginTop: '50px' }}
            />
          </div>
        </Col>
        <Col md={6} className="text-center">
          <div className="p-3 p-md-5">
            <h2 className="mb-4" style={{ color: '#69D3EB', fontWeight: 'bold', fontSize: '3rem', marginRight: '131px' }}>GRIZON RUSSELL</h2>
            <p className="lead" style={{ color: '#69D3EB', fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '1rem', marginRight: '215px' }}>Front-End & UI/UX Designer</p>
            <p style={{ color: '#69D3EB', fontSize: '1.2rem', lineHeight: '1.6', textAlign: 'justify' }}>
              I am a passionate Front-End Developer dedicated to crafting exceptional web experiences. 
              With a focus on UI/UX design, I strive to create intuitive and aesthetically pleasing interfaces.
              Let's collaborate and build something amazing together.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
