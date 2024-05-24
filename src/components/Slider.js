
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import Slider2 from '../img/slider2.png';
import Slider5 from '../img/slider5.png';
import Slider6 from '../img/slider6.png';


const slideImage = [
    { url: Slider2 },
    { url: Slider6 },
    { url: Slider5 }
]

function Slider() {
  const indicators = (index, activeIndex) => {
    return <div className={`custom-dot ${index === activeIndex ? 'active' : ''}`}></div>;
  };
    
  return (
    <div className='slider'>
        <Slide arrows={false} indicators={indicators} >
            {slideImage.map((image, index) => (
                <div key={index}>
                    <div className='slider-img' style={{backgroundImage:`url(${image.url})`}}>
                    </div>
                </div>
            ))}
        </Slide>
    </div>
  )
}

export default Slider;