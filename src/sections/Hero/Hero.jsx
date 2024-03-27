import './Hero.css';
import CountUp from 'react-countup';

const Hero = () => {
      return (
        <section id="hero">
            <div className="hero-container container">
                <div className="hero-left">
                    <h1>Your Wonderland of Home Decor, Fashion, and Cozy Essentials!</h1>
                    <p>Step into a world where charm, style, and coziness blend seamlessly.</p>
                    <button className='btn'>Shop now</button>
                    <div className="hero-stats">
                        <div className="stat-box">
                            <span>
                                <CountUp start={1400} end={1500} duration={4} />
                                <p>+</p>
                            </span>
                            <span>Brands</span>
                        </div>
                        <div className="stat-box">
                            <span>
                                <CountUp start={350} end={500} duration={4} />
                                <p>+</p>
                            </span>
                            <span>Outlets</span>
                        </div>
                        <div className="stat-box">
                            <span>
                                <CountUp start={98700} end={99000} duration={4} />
                                <p>+</p>
                            </span>
                            <span>Customers</span>
                        </div>
                    </div>
                </div>
                <div className="hero-right">
                    <img src="./front.jpg" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Hero;
