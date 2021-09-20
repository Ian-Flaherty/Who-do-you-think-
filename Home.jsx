import React from "react";
import Musicvideo from './Video/Musicvideo.mp4';
import './Home.css';


const Home = () => {
  return (


    <div className="content">
    
      <div className="info">
        <br />
        <br />
        <br />
        
      
        <p className="rules">
      Welcome to Who Do You Think. The game where you decide who you think is the best answer. <br /> Below is our overall winner at the moment. click on "Start" in the top right corner to begin your voting.
        
        </p>
        <br></br>
        <img
          style={{width:400, height: 400, borderRadius:400/2}}
          classname='Winner-Overall'
          src='https://media-exp1.licdn.com/dms/image/C5603AQEGpA0sB-ViNQ/profile-displayphoto-shrink_400_400/0/1580752840007?e=1637193600&v=beta&t=WO7ThOoDzNbEk_x6-O4o4GkDeT06vxNCHnqJ4zEYP88'
          alt='me'
          
        />
      </div>
    </div>
  );
};

export default Home;
