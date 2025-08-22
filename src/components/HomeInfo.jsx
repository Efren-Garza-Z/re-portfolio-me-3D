import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <div className='info-box'>

      <h1 className='sm:text-xl sm:leading-snug text-center text-white '>
        Hi, I'm
        <span className='font-semibold mx-2 text-white'>Efren</span>
        👋
        <br />
        A Software Engineer from Mexico
      </h1>
              <Link to='/about' className='neo-brutalism-white neo-btn'>
              about me 
              <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
            </Link>
    </div>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          Led multiple projects to success over the years. <br /> Curious about the impact?
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Visit my portfolio
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        Need a project done or looking for a dev? 
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Let's talk
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;