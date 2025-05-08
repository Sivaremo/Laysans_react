import React, { useEffect, useState } from 'react';
import './preloader.css'; // Include your CSS file for the preloader styling

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call or loading time
    const timer = setTimeout(() => {
      setLoading(false);  // Hide the preloader after 3 seconds (adjust based on actual needs)
    }, 3000); // You can replace this with a real data fetching condition.

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="preloader">
          <img src="./Static/Image/logo.jpeg" className="preloader__image" alt="Loading..." />
        </div>
      ) : null}
    </>
  );
};

export default Preloader;
