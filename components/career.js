
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

const Career = () => {
  return (
    <section style={sectionStyle}>
      <h2 style={h2Style}>Career Objective</h2>
      <br></br>
      <p>
      Dedicated and results-driven IT professional seeking a challenging and dynamic role to leverage my technical expertise, problem-solving skills, and passion for innovation. 
      Eager to contribute my proficiency in [specific technologies or skills, network administration, cybersecurity, software development] 
      to enhance organizational efficiency and drive continuous improvement. Committed to staying at the forefront of emerging technologies, 
      I aim to play a pivotal role in a forward-thinking company where I can contribute to the success of IT initiatives and collaborate with a talented team to achieve common goals.
      </p>
    </section>
  );
};

export default Career;
