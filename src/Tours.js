import React from 'react';
import Tour from './Tour';
const Tours = ({ tour, removeTour }) => {
  return (
    <section>
      <Tour tour={tour} removeTour={removeTour} />
    </section>
  );
};

export default Tours;
