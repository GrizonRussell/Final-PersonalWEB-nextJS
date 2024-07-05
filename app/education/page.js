import React from 'react';
import { Container } from 'react-bootstrap';

function Education() {
  return (
    <Container className="py-5">
      <div className="max-w-lg mx-auto px-4 py-4">
        <h1 className="text-3xl font-bold mb-5 text-center">Education</h1>
        
        {/* Elementary */}
        <div className="border border-gray-300 rounded-lg mb-5 p-4" style={{ borderRadius: '15px', borderWidth: '2px' }}>
          <h2 className="text-2xl font-bold mb-2" style={{ color: '#69D3EB' }}>Elementary</h2>
          <p className="text-xl leading-relaxed" style={{ letterSpacing: '0.5px', color: '#3182CE'  }}>
            Iponan National High School, 2014 - 2020
          </p>
        </div>
        
        {/* High School */}
        <div className="border border-gray-300 rounded-lg mb-5 p-4" style={{ borderRadius: '15px', borderWidth: '2px' }}>
          <h2 className="text-2xl font-bold mb-2" style={{ color: '#69D3EB' }}>High School</h2>
          <p className="text-xl leading-relaxed" style={{ letterSpacing: '0.5px', color: '#3182CE'  }}>
            Liceo de Cagayan University, 2020 - 2022
          </p>
        </div>
        
        {/* Senior High School */}
        <div className="border border-gray-300 rounded-lg mb-5 p-4" style={{ borderRadius: '15px', borderWidth: '2px' }}>
          <h2 className="text-2xl font-bold mb-2" style={{ color: '#69D3EB' }}>Senior High School</h2>
          <p className="text-xl leading-relaxed" style={{ letterSpacing: '0.5px', color: '#3182CE'  }}>
            PHINMA Cagayan de Oro College, 2022 - Present
          </p>
        </div>
        
      </div>
    </Container>
  );
}

export default Education;
