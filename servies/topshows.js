export default async function topshows() {
    const url = 'https://imdb236.p.rapidapi.com/imdb/top250-tv';
    const options = {
        method: 'GET',
        headers: {
         'x-rapidapi-key': '7254143b9bmsh027987df598fe51p18244bjsn255904100942',
          'x-rapidapi-host': 'imdb236.p.rapidapi.com',
        }
      };
    
      try {
        const response = await fetch(url, options);
        const shows = await response.json();
    
        //  movies from the 52nd index onwards
        return shows.slice(20);
      } catch (error) {
        console.error("Error fetching movies:", error);
        return []; // Return an empty array to avoid crashing
      }
    }
    