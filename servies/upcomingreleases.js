
export default async function upcomeing() {
    const url = 'https://imdb236.p.rapidapi.com/imdb/upcoming-releases?countryCode=US&type=MOVIE';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '7254143b9bmsh027987df598fe51p18244bjsn255904100942',
            'x-rapidapi-host': 'imdb236.p.rapidapi.com',
        }
      };
    
      try {
        const response = await fetch(url, options);
        const newcotent = await response.json();
    
        //  movies from the 52nd index onwards
        return newcotent;      
      } catch (error) {
        console.error("Error fetching movies:", error);
        return []; // Return an empty array to avoid crashing
      }
    }
    
  