import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';
function App() {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getTours = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const tours = await res.json();
      setTours(tours);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    getTours();
  }, []);

  const removeTour = (id) => {
    setTours((prevTour) => {
      return prevTour.filter((tour) => {
        return tour.id !== id;
      });
    });
  };

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>No Tours Left</h2>
          <button className='btn' onClick={getTours}>
            Refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <div className='title'>
        <h2>Our Tours</h2>
        <div className='underline'></div>
      </div>
      {tours.map((tour) => {
        return <Tours key={tour.id} tour={tour} removeTour={removeTour} />;
      })}
    </main>
  );
}

export default App;
