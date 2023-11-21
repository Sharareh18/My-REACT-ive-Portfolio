// Import necessary React and Bootstrap components
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Main Resume component
function Resume() {
  return (
    <div className="container mt-5">
      <h1>Resume</h1>


      <section>
        <h2>Education</h2>
        <div>
          <h4>Towson University</h4>
          <p>Degree: BS in Finance minor: Economics</p>
          <p>Year: 1998- 2002</p>
        </div>
        <div>
          <h4>University of Maryland Baltimore/College Park</h4>
          <p>Degree: MS in Political Science: Middle Eastern Gov & Policy</p>
          <p>Year: 2003- 2006</p>
        </div>
        <div>
          <h4>Concord University</h4>
          <p>Degree: JD of law - Concentration: Intellectual Property</p>
          <p>Year: 2007- 2011</p>
        </div>
      </section>

      
      <section>
        <h2>Work Experience</h2>
        <div>
          <h4>Northrop Grumman</h4>
          <p>Position: Analyst</p>
          <p>Year: 2006 - Present</p>
          <ul>
            <li>Responded to all customer needs.</li>
          </ul>
        </div>
      </section>

   
      <section>
        <h2>Skills</h2>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </section>

      

    </div>
  );
}

export default Resume;
