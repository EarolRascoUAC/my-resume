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

const ulStyle = {
  listStyleType: 'none',
  padding: 0,
};

const liStyle = {
  marginBottom: '8px',
  color: '#555',
};

const Skills = () => {
  return (
    <section style={sectionStyle}>
      <h2 style={h2Style}>Skills</h2>
      <br></br>
      <ul style={ulStyle}>
        <li style={liStyle}>Network Administration</li>
        <li style={liStyle}>System and Server Administration </li>
        <li style={liStyle}>Web Development</li>
      </ul>
    </section>
  );
};

export default Skills;
