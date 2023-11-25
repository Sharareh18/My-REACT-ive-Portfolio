

import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../../assets/pageAssets/shervsite.png';
import image2 from '../../assets/pageAssets/blindartist.png';
import image3 from '../../assets/pageAssets/Bug-crusher.png';
import image4 from '../../assets/pageAssets/bibledrips.png';
import image5 from '../../assets/pageAssets/Schedly-1.png';
import image6 from '../../assets/pageAssets/Notex.png';



function Portfolio() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card d-flex flex-column h-100">
            <img src={image1} className="card-img-top h-50" alt="Golshani Lee Lawfirm" />
            <div className="card-body">
              <h5 className="card-title">Golshani Lee Law</h5>
              <p className="card-text">A responsive website</p>
              <a
                href="https://golshanilee.com"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card d-flex flex-column h-100">
            <img src={image2} className="card-img-top h-50" alt="The Blind Artist" />
            <div className="card-body">
              <h5 className="card-title">The Blind Artist</h5>
              <p className="card-text">An ecommerce website</p>
              <a
                href="https://theblindartist.art"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card d-flex flex-column h-100">
            <img src={image3} className="card-img-top h-50" alt="Bug Crushers" />
            <div className="card-body">
              <h5 className="card-title">Bug Crushers</h5>
              <p className="card-text">A step challenge app</p>
              <a
                href="https://bug-crusher-228274a003c3.herokuapp.com/login"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card d-flex flex-column h-100">
            <img src={image4} className="card-img-top h-50" alt="Bible Drips" />
            <div className="card-body">
              <h5 className="card-title">Bible Drips</h5>
              <p className="card-text">A Bible verse generator</p>
              <a
                href="https://sharareh18.github.io/Bible-Drips"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card d-flex flex-column h-100">
            <img src={image5} className="card-img-top h-50" alt="Schedly" />
            <div className="card-body">
              <h5 className="card-title">Schedly</h5>
              <p className="card-text">Word day scheduler</p>
              <a
                href="https://github.com/Sharareh18/Schedly"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card d-flex flex-column h-100">
            <img src={image6} className="card-img-top h-50" alt="Note-x" />
            <div className="card-body">
              <h5 className="card-title">Note-x</h5>
              <p className="card-text">A web note-taker</p>
              <a
                href="https://github.com/Sharareh18/NOTE-X"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;


