

import 'bootstrap/dist/css/bootstrap.min.css';
import imgUrl1 from '../../../public/pageAssets/shervsite.png';
import imgUrl2 from '../../../public/pageAssets/blindartist.png';
import imgUrl3  from '../../../public/pageAssets/Bug-crusher.png';
import imgUrl4 from '../../../public/pageAssets/bibledrips.png';
import imgUrl5 from '../../../public/pageAssets/Schedly-1.png';
import imgUrl6 from '../../../public/pageAssets/Notex.png';



function Portfolio() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card d-flex flex-column h-100">
            <img src={imgUrl1} className="card-img-top h-50" alt="Golshani Lee Lawfirm" />
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
            <img src={imgUrl2} className="card-img-top h-50" alt="The Blind Artist" />
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
            <img src={imgUrl3} className="card-img-top h-50" alt="Bug Crushers" />
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
            <img src={imgUrl4} className="card-img-top h-50" alt="Bible Drips" />
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
            <img src={imgUrl5} className="card-img-top h-50" alt="Schedly" />
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
            <img src={imgUrl6} className="card-img-top h-50" alt="Note-x" />
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


