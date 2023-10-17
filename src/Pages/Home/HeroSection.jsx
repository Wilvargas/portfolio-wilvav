export default function HeroSection() {
    return (
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Hey, I'm Wilfredo</p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">Frontend</span>{" "}
              <br />
              Developer
            </h1>
            <p className="hero--section-description">
            "Transforming ideas into amazing web experiences. Ready to bring your vision
              <br />  to life online?"
            </p>
          </div>
          <button className="btn btn-primary">Get In Touch</button>
        </div>
        <div className="hero--section--img">
          <img src="../../../public/img/hero-img.png" alt="Hero Section" />
        </div>
      </section>
    );
  }