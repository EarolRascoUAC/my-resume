import React from "react";

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


const Education = () => {
    return ( 
    <section style={sectionStyle}>
      <h2 style={h2Style}>Education</h2>
      <p>Bachelor of Science in Information Technology - Angelicum College</p>
      <p>Year of Graduation: 2024</p>
    </section>
     );
}
 
export default Education;