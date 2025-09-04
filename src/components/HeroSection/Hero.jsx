import "./Hero.css";
const Hero = () => {
  return (
    <main className="hero container">
        <div className="hero-content">
            <h1>Shoes That Care For Your Feet</h1>
            <p>Step Into Comfort, Walk With Style. Your Feet Deserve More. Every Step Feels Better With Us, Walk Bold, Walk Best
          </p>

          <div className='hero-btn'>
            <button>Shop Now</button>
            <button className='secondary-btn'>Category</button>
          </div>

          <div className='shopping'>
            <p>Also Available On</p>

            <div className='brand-icons'>
                <img src='/images/amazon.png' alt='amazon-logo'/>
                <img src='/images/flipkart.png' alt='flipkart-logo'/>
            </div>
          </div>
        </div>

        <div className='hero-image'>
            <img src='/images/hero-image.png' alt='hero-img'/>
        </div>
    </main>
  )
}

export default Hero
