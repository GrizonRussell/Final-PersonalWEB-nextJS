import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMobileAlt, faPython, faServer } from '@fortawesome/free-solid-svg-icons';

function Skills() {
  // Define image links for each language
  const images = {
    htmlCssJs: '/assets/image/html.png',
    flutter: '/assets/image/flutter.png',
    python: '/assets/image/Python.png',
    nextJs: '/assets/image/js.png', // Replace with your image link
  };

  return (
    <Container className="py-5">
      <Row className="align-items-start">
        <h1 className='mt-5 text-4xl font-bold mb-6 text-blue-600' style={{ color: '#69D3EB' }}>Skills</h1>
        
        {/* Vanilla HTML, CSS, JS */}
        <Col md={6}>
          <div className='max-w-4xl px-4 py-4 border border-gray-300 rounded-lg mb-4' style={{ borderRadius: '20px', borderColor: '#69D3EB' }}>
            <div className="mb-3 text-center">
              <img src={images.htmlCssJs} alt="HTML, CSS, JS" style={{ maxWidth: '85px', marginBottom: '0.5rem', marginRight:'470px' }} />
            </div>
            <h4 className='mt-3 text-xl' style={{ color: '#69D3EB' }}>Vanilla HTML, CSS, JS</h4>
            <p className="lead" style={{ color: '#3182CE' }}>My expertise lies in utilizing vanilla HTML, CSS, and JavaScript, 
              emphasizing a foundation built on core web technologies. This approach ensures proficiency in creating dynamic 
              and responsive web interfaces without relying on frameworks or libraries.</p>
          </div>
        </Col>
        
        {/* Flutter */}
        <Col md={6}>
          <div className='max-w-4xl px-4 py-4 border border-gray-300 rounded-lg mb-4' style={{ borderRadius: '20px', borderColor: '#69D3EB' }}>
            <div className="mb-3 text-center">
              <img src={images.flutter} alt="Flutter" style={{ maxWidth: '40px', marginBottom: '0.5rem', marginRight:'495px' }} />
            </div>
            <h4 className='mt-3 text-xl' style={{ color: '#69D3EB' }}>Flutter</h4>
            <p className="lead" style={{ color: '#3182CE' }}>I am new to Flutter and currently gaining familiarity with its
              development environment, learning its widget-based UI framework and exploring its cross-platform capabilities.
              While I don't have extensive experience yet, I am enthusiastic about learning and applying Flutter for mobile app development.</p>
          </div>
        </Col>

        {/* Python */}
        <Col md={6}>
          <div className='max-w-4xl px-4 py-4 border border-gray-300 rounded-lg mb-4' style={{ borderRadius: '20px', borderColor: '#69D3EB' }}>
            <div className="mb-3 text-center">
              <img src={images.python} alt="Python" style={{ maxWidth: '50px', marginBottom: '0.5rem', marginRight:'490px' }} />
            </div>
            <h4 className='mt-3 text-xl' style={{ color: '#69D3EB' }}>Python</h4>
            <p className="lead" style={{ color: '#3182CE' }}>I am in the early stages of gaining experience with Python, where 
              I am actively learning its syntax and exploring its capabilities. I am committed to expanding my knowledge further
              and improving my proficiency in Python programming through practical application and continued study.</p>
          </div>
        </Col>

        {/* Next.js */}
        <Col md={6}>
          <div className='max-w-4xl px-4 py-4 border border-gray-300 rounded-lg mb-4' style={{ borderRadius: '20px', borderColor: '#69D3EB' }}>
            <div className="mb-3 text-center">
              <img src={images.nextJs} alt="Next.js" style={{ maxWidth: '50px', marginBottom: '0.5rem', marginRight:'510px' }} />
            </div>
            <h4 className='mt-3 text-xl' style={{ color: '#69D3EB' }}>Next Js</h4>
            <p className="lead" style={{ color: '#3182CE' }}>I have some exposure to Next.js but am keen to delve deeper into
              its framework for building React applications. While my experience is limited, I'm enthusiastic about expanding
              my proficiency in Next.js and leveraging its features to enhance my web development capabilities.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Skills;
