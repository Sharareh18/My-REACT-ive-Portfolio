
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';


const ProjectItem = ({ title, imageUrl, description, projectUrl }) => (
  <div className="col-md-4 mb-4">
    <div className="card">
      <img src={imageUrl} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={projectUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
    </div>
  </div>
);

ProjectItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    projectUrl: PropTypes.string.isRequired,
  };

const Portfolio = () => {
  const projects = [
    {
      title: 'Golshani Lee Lawfirm',
      description: 'A responsive website',
      imageUrl: './pages/pageAssets/shervsite.png',
      projectUrl: 'https://golshanilee.com',
    },
    {
        title: 'The Blind Artist',
        description: 'An ecommerce website',
        imageUrl: '',
        projectUrl: 'https://theblindartist.art'
    },
    {
        title: 'Bug Crushers',
        description: 'A step challenge app',
        imageUrl: '',
        projectUrl: 'https://bug-crusher-228274a003c3.herokuapp.com/login'
    },
    {
        title: 'Bible Drips',
        description: 'Bibile verse generator',
        imageUrl: '',
        projectUrl: 'https://sharareh18.github.io/Bible-Drips'
    },
    {
        title: 'Schedly',
        description: 'Third party API scheduler',
        imageUrl: '',
        projectUrl: 'https://github.com/Sharareh18/Schedly'
    },
    {
        title: 'Note-x',
        description: 'Web note taker',
        imageUrl: '',
        projectUrl: 'https://github.com/Sharareh18/NOTE-X'
    },

  ];

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Portfolio</h1>
      <div className="row">
        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

