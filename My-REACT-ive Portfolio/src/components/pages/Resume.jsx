// Import necessary React and Bootstrap components
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import resume from '../pages/pageAssets/resume.pdf';

// Main Resume component
function Resume() {
  return (
    <div className="container">
      <h2>Resume</h2>
      <div className="button-resume">
				 <a href={resume} download>
					<p>Download Resume</p>
				</a>
			</div>
      <br></br>
    


      <section>
        <h4>Education</h4>
        <div>
          <p><i>Towson University</i></p>
          <p>BS in Finance minor in Economics</p>
          <p>1998- 2002</p>
        </div>
        <br></br>
        <div>
          <p><i>University of Maryland Baltimore/College Park</i></p>
          <p>MS in Political Science: Middle Eastern Gov & Policy</p>
          <p>2003- 2006</p>
        </div>
        <br></br>
        <div>
          <p><i>Concord University & Chapman Law</i></p>
          <p>JD of law - Concentration: Intellectual Property</p>
          <p>2007- ongoing</p>
        </div>
      </section>
      <br></br>
      
      <section>
        <h4>Work Experience</h4>
        <div>
        <p><i>U.S. Gov - Analyst</i></p>
          <p>Year: 2004 - 2006</p>
          <br></br>
          <p><i>Northrop Grumman - Analyst</i></p>
          <p>Year: 2006 - 2013</p>
          <br></br>
          <p><i>Verite Group Inc - Analyst</i></p>
          <p>Year: 2013 - present</p>
         <br></br>
        </div>
      </section>

   
      <section>
        <h4>Skills</h4>
        <ul>
          <li>Languages: English, Farsi, Dari, Arabic, German, French</li>
          <li>Certificates: Tactical Weapons, Combat & Warzone <br></br>Google Analytics & Digital Marketing<br></br>SEO by Yoast, Simplilearn, Semrush, Hubspot</li>
          <li>Proficiencies:  Adobe After Effects, Illustrator, Photoshop, Excell</li>
          <li>Technical: HTML, CSS, JavaScript, jQuery, Bootstrap, React, MySql, MongoDB, GraphQl</li>
        </ul>
      </section>

     

    </div>
  );
}

export default Resume;
