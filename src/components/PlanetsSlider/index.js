// Write your code here
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    textAlign: 'center',
  }
  return (
    <div className="bgContainer">
      <div data-testid="planets" className="planetsContainer">
        <h1 className="heading">PLANETS</h1>
        <Slider {...settings} className="sg">
          {planetsList.map(each => (
            <PlanetItem details={each} key={each.id} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PlanetsSlider
