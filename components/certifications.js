import React from 'react';

const sectionStyle = {
  backgroundColor: '#fff',
  margin: '20px',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const h2Style = {
  color: '#333',
};

const Certification = () => {
  return (
    <section style={sectionStyle}>
      <h2 style={h2Style}>Certification</h2>
      <br></br>
      <p>NO CERTIFICATION</p>
    </section>
  );
};

export default Certification;
