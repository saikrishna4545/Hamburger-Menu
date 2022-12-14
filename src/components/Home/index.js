// Write your code here
import Header from '../Header'

import './index.css'

const Home = () => (
  <div className="home-container">
    <Header />
    <div className="home-image-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        className="home-desktop-image"
        alt="home"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        className="home-mobile-image"
        alt="home"
      />
    </div>
  </div>
)

export default Home
