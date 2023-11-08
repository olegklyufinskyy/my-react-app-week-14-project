import React, {useEffect} from 'react';
import Review from './Review';

const ReviewList = () => {
    console.log('This is my ReviewList Component');
  // You can map through an array of reviews here and render Review components.
  const APIURL="https://654babf05b38a59f28ef7ea3.mockapi.io/movie-reviews" //URL API Endpoint

//   GET request method for my api data
  const getData = async (myAPIURL) => {
    try {
        const response = fetch(myAPIURL)
        const data = await response.json() // parses JSON response into native JavaScript objects
        return data
    } catch (error) {
        console.log("The api GET request had an error!", error)
    }
  }

  useEffect(() => {
   console.log("Is this useEffect working???");
// when a componenet first loads, useEffect will automatically run
// because of this we can have the api 'fetch' or 'get' data
const apiData = getData(APIURL)
console.log("This is my API DATA:",apiData);

  });

  return (
    <div className="review-list">
        Review List test
        
      {/* Map through reviews and render Review components */}
      <Review />
    </div>
  );
};

export default ReviewList;