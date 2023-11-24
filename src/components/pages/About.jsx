import image from "./pageAssets/IMG_3542.png";

        export default function Home() {
            return (

                    <><section className="hero">
                    <div className="img-hero">
                        <div className="hero-cta">
                            <img
                                src={image} className="img-fluid" alt="hero" />

                        </div>
                    </div>
                </section>
                <div className="container mt-5">
                        <h1>About Me</h1>
                        <br></br>
                        <p>
                            Welcome to my portfolio! I am currently a student in the coding bootcamp learning full stack web
                            development.  I have a background in finance, law and government.  I discovered my passion for
                            coding a few years ago and hope to continue to learn and pursue this new path.      </p>
                        <p>
                            In addition to my technical skills, I am a fast learner and a team player.  I am always
                            eager to take on new challenges and contribute to innovative projects.
                        </p>
                    </div></>
                   
                        
            
            )
        }

       


