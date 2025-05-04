
export default async function famousmovies() {
    const url = 'https://imdb236.p.rapidapi.com/imdb/top250-movies';
    const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': 'ae35cc4713msh727f210322967a0p17b2a0jsn825db26db8d2',
          'x-rapidapi-host': 'imdb236.p.rapidapi.com'
        }
      };
    
      try {
        const response = await fetch(url, options);
        const topmovies = await response.json();
    
        //  movies from the 52nd index onwards
        return topmovies.slice(52);
      } catch (error) {
        console.error("Error fetching movies:", error);
        return []; // Return an empty array to avoid crashing
      }
    }
    
  