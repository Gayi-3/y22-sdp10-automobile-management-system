import React, { useEffect, useState, useRef } from 'react';
import car1 from './car1.jpg';
import royal from './royal.jpg';
import royal2 from './royal2.jpg';
import royal3 from './royal3.jpg';
import bike from './bike.jpg';
import car3 from './car3.jpg';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';

const Home = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const middleRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      showSlides();
    }, 2000);

    return () => clearInterval(interval);
  }, [slideIndex]);

  const showSlides = () => {
    const slides = document.getElementsByClassName("mySlides");
    let index = slideIndex;

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    // Increment slide index
    index++;

    // Reset slide index if it exceeds the total number of slides
    if (index > slides.length) {
      index = 1;
    }

    // Show the current slide
    slides[index - 1].style.display = "block";
    setSlideIndex(index);
  };

  const handleMouseEnter = () => {
    if (middleRef.current) {
      middleRef.current.style.opacity = '1';
    }
  };

  const handleMouseLeave = () => {
    if (middleRef.current) {
      middleRef.current.style.opacity = '0';
    }
  };

  return (
    <div className="home-container">
      <div className="slideshow-container" style={{ marginTop: '20px' }}>
        <h1>Welcome to AutoMobile Management System</h1>
        <div className="mySlides fade">
          <img src={royal3} style={{ width: '90%', height: '370px' }} alt="Nature" />
        </div>
        <div className="mySlides fade">
          <img src={royal} style={{ width: '90%', height: '370px' }} alt="Snow" />
        </div>
        <div className="mySlides fade">
          <img src={royal2} style={{ width: '90%', height: '370px' }} alt="Mountains" />
        </div>
      </div>
      <br />
      <div style={{ textAlign: 'center' }}>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
      <h1>ABOUT US</h1>
      <p style={{ backgroundColor: 'black', color: 'white', padding: '10px', borderRadius: '5px', width: '1000px' }}>
        The proposed project is developed to manage the automobile in the automobile dealer company. The main module in this project is login, automobile management, customer management, sales, complaints, and reports. The first module is the login. The automobile showroom owner should log in to the project for usage. The username and password are verified, and if it is correct, the next form opens. If the username and password are not correct, it shows the error message. When a customer searches for an automobile, if the automobile is available, they will be taken to a page that shows the details of the automobile, including automobile name, automobile ID, quantity, price, etc. "Automobile Management System" is useful for maintaining automobiles, customers effectively and hence helps in establishing a good relation between customer and automobile organization. It contains various customized modules for effectively maintaining automobiles and stock information accurately and safely.
      </p>
      
      <h1>OUR PRODUCTS & SERVICES</h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '70px' }}>
      <Card sx={{ maxWidth: 300, background: 'white', border: '2px solid black', margin: '10px'}}>
        <CardMedia sx={{ height: 250 ,  width: 450}} image={car1} title="Car" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div"></Typography>
          <Typography variant="body2" color="text.secondary">
            <h3 style={{ color: 'MidnightBlue', fontFamily: 'Times New Roman, serif' }}>CARS</h3>
          </Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>

      <Card sx={{ maxWidth: 400, background: 'white', border: '2px solid black', margin: '10px' }}>
        <CardMedia sx={{ height: 250, width: 350 }} image={bike} title="Bike" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div"></Typography>
          <Typography variant="body2" color="text.secondary">
            <h3 style={{ color: 'MidnightBlue', fontFamily: 'Times New Roman, serif' }}>BIKES</h3>
          </Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>
      <Card sx={{ maxWidth: 400, background: 'white', border: '2px solid black', margin: '10px' }}>
        <CardMedia sx={{ height: 250, width: 350 }} image={car3} title="Bike" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div"></Typography>
          <Typography variant="body2" color="text.secondary">
            <h3 style={{ color: 'MidnightBlue', fontFamily: 'Times New Roman, serif' }}>AUTOMOBILE PRODUCTS</h3>
          </Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </div>
    </div>
  );
};

export default Home;
