// pages/detail.js
'use client';

import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const MovieDetails = ({ movie }) => {
  const convertMinutesToHours = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours} hour and ${remainingMinutes} minute`;
  };
  const formatBudget = (number) => {
    let formattedNumber;
    if (number >= 10000000) {
      // Format as crores
      formattedNumber = (number / 10000000).toFixed(2) + " Cr";
    } else if (number >= 100000) {
      // Format as lakhs
      formattedNumber = (number / 100000).toFixed(2) + " Lac";
    } else {
      // Format with commas
      formattedNumber = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return formattedNumber;
  };
  return (
    <>
      <div className="relative bg-black text-white min-h-screen pb-20">
        <div className="absolute inset-0">
          <img
            src={movie.primaryImage}
            alt="Background Poster"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="header bg-gray-800 text-white py-4 text-center w-full">
            <h1 className="text-3xl">{movie.primaryTitle}</h1>
          </div>
          <div className="content flex flex-wrap md:flex-nowrap p-4 justify-center items-start mt-4 w-full max-w-6xl">
            <div className="poster mr-4 mb-4 md:mb-0" style={{ marginRight: "4rem", marginLeft: "2px" }}>
              <img src={movie.primaryImage} alt="Movie Poster" className="w-72" style={{ width: '39rem' }} />
            </div>
            <div className="flex flex-col" style={{ marginLeft: "0rem" }}>
              <div className="sidebar2 mb-4">
                <h2 className="text-4xl font-bold">{movie.originalTitle}</h2>

                <h2 className="text-2xl font-bold">Description</h2>
                <div>
                  <span className="bg-blue-200 text-blue-800 px-3 py-1 m-1 inline-block">
                    {movie.description}
                  </span>
                </div>


                <h2 className="text-2xl font-bold">Ratings and Reviews</h2>
                <div>
                  <span className="bg-green-200 text-green-800 rounded-full px-3 py-1 m-1 inline-block">
                    {movie.averageRating !== null ? `Average Rating: ${movie.averageRating} / 10` : 'N/A'}
                  </span>
                </div>
                <div>
                  <span className="bg-red-200 text-red-800 rounded-full px-3 py-1 m-1 inline-block">
                    {movie.numVotes !== null ? `Votes: ${movie.numVotes.toLocaleString()}` : 'N/A'}
                  </span>
                </div>
                <div>
                  <span className="bg-purple-200 text-purple-800 rounded-full px-3 py-1 m-1 inline-block">
                    {movie.type !== null ? `Type: ${movie.type}` : 'N/A'}
                  </span>
                </div>
              </div>

              <div className="sidebar bg-gray-200 text-black p-4 rounded">
                <h3 className="text-xl font-bold">Release Date</h3>
                <div>
                  {movie.releaseDate !== null ? (
                    <span className="bg-blue-200 text-blue-800 px-3 py-1 m-1 inline-block">
                      {movie.releaseDate}
                    </span>
                  ) : (
                    <span className="bg-blue-200 text-blue-800 px-3 py-1 m-1 inline-block">
                      N/A
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold">Genres</h3>
                <div>
                  {movie.genres && movie.genres.length > 0 ? (
                    movie.genres.map((genre, index) => (
                      <span key={index} className="bg-green-200 text-green-800 px-3 py-1 m-1 inline-block">
                        {genre}
                      </span>
                    ))
                  ) : (
                    <span className="bg-green-200 text-green-800 px-3 py-1 m-1 inline-block">
                      N/A
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold">Movies Length</h3>
                <div>
                  <span className="bg-red-200 text-red-800 px-3 py-1 m-1 inline-block">
                    {movie.runtimeMinutes !== null ? convertMinutesToHours(movie.runtimeMinutes) : 'N/A'}
                  </span>
                </div>

                <h3 className="text-xl font-bold">Budget</h3>
                <div>
                  <span className="bg-purple-200 text-purple-800 px-3 py-1 m-1 inline-block">
                    {movie.budget !== null ? `Budget: ${formatBudget(movie.budget)}` : 'N/A'}
                  </span>
                </div>

                <h3 className="text-xl font-bold">Gross Worldwide</h3>
                <div>
                  <span className="bg-yellow-200 text-yellow-800 px-3 py-1 m-1 inline-block">
                    {movie.grossWorldwide !== null ? formatBudget(movie.grossWorldwide) : 'N/A'}
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* //dsd */}
          <div className="w-full max-w-4xl min-h-[400px] rounded-lg bg-gray-100 mx-auto mt-6 mb-20 text-black p-6 shadow-lg">
  <p>
    {/* {movie.releaseDate === null ? `${movie.releaseDate.day}/${movie.releaseDate.month}/${movie.releaseDate.year}` : movie.releaseDate} */}
  </p>
  <h3 className="text-xl font-bold">Interests</h3>
  <div>
    {movie.interests?.length > 0 ? (
      movie.interests.map((interest, index) => (
        <span key={index} className="bg-blue-200 text-blue-800 rounded-full px-3 py-1 m-1 inline-block">
          {interest}
        </span>
      ))
    ) : (
      'N/A'
    )}
  </div>

  <h3 className="text-xl font-bold mt-4">Countries Of Origin</h3>
  <div>
    {movie.countriesOfOrigin?.length > 0 ? (
      movie.countriesOfOrigin.map((country, index) => (
        <span key={index} className="bg-green-200 text-green-800 rounded-full px-3 py-1 m-1 inline-block">
          {country}
        </span>
      ))
    ) : (
      'N/A'
    )}
  </div>

  <h3 className="text-xl font-bold mt-4">Links</h3>
  <div>
    {movie.externalLinks?.length > 0 ? (
      movie.externalLinks.map((link, index) => (
        <a key={index} href={link} className="bg-red-200 text-red-800 rounded-full px-3 py-1 m-1 inline-block" target="_blank" rel="noopener noreferrer">
          {link}
        </a>
      ))
    ) : (
      'N/A'
    )}
  </div>

  <h3 className="text-xl font-bold mt-4">Spoken Languages</h3>
  <div>
    {movie.spokenLanguages?.length > 0 ? (
      movie.spokenLanguages.map((language, index) => (
        <span key={index} className="bg-purple-200 text-purple-800 rounded-full px-3 py-1 m-1 inline-block">
          {language}
        </span>
      ))
    ) : (
      'N/A'
    )}
  </div>

  <h3 className="text-xl font-bold mt-4">Filming Locations</h3>
  <div>
    {movie.filmingLocations?.length > 0 ? (
      movie.filmingLocations.map((location, index) => (
        <span key={index} className="bg-yellow-200 text-yellow-800 rounded-full px-3 py-1 m-1 inline-block">
          {location}
        </span>
      ))
    ) : (
      'N/A'
    )}
  </div>

  <h3 className="text-xl font-bold mt-4">Directors</h3>
  <div>
    {movie.directors?.length > 0 ? (
      movie.directors.map((director) => (
        <span key={director.id} className="bg-blue-200 text-blue-800 rounded-full px-3 py-1 m-1 inline-block">
          {director.fullName}
        </span>
      ))
    ) : (
      'N/A'
    )}
  </div>

  <h3 className="text-xl font-bold mt-4">Crew</h3>
  {[
    { title: 'Writers', job: 'writer' },
    { title: 'Producers', job: 'producer' },
    { title: 'Composers', job: 'composer' },
    { title: 'Cinematographers', job: 'cinematographer' },
    { title: 'Editors', job: 'editor' },
    { title: 'Casting Directors', job: 'casting_director' },
    { title: 'Production Designers', job: 'production_designer' }
  ].map(({ title, job }) => (
    movie.cast?.some(person => person.job === job) && (
      <div key={job} className="mt-2">
        <h4 className="text-lg font-bold">{title}:</h4>
        {movie.cast.filter(person => person.job === job).map((person, index, array) => (
          <span key={person.id} className="text-blue-500">
            {person.fullName}{index < array.length - 1 ? ', ' : ''}
          </span>
        ))}
      </div>
    )
  ))}
</div>




          {/* sdsdsds */}
        </div>
      </div>
    </>
  );
};

const DetailPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id'); // Get the 'id' query parameter
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        const url = `https://imdb236.p.rapidapi.com/imdb/${id}`;
        const options = {
          method: 'GET',
          headers: {
            'x-rapidapi-key': '7254143b9bmsh027987df598fe51p18244bjsn255904100942',
            'x-rapidapi-host': 'imdb236.p.rapidapi.com'
          }
        };

        try {
          const response = await fetch(url, options);
          const result = await response.json();
          console.log(result);

          setMovie(result); // Update state with fetched data
        } catch (error) {
          console.error(error);
        }
      };

      fetchData();
    }
  }, [id]);

  if (!movie) return <div className="text-white text-center">Loading...</div>;

  return <MovieDetails movie={movie} />;
};

export default DetailPage;
