import getTopMovies from "../../../servies/getmovies";

const Topmovies =async()=>{
    const movies = getTopMovies();
    const result = await movies;
    console.log(result);
    return(
        <>
              <div className="bg-black relative">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-white text-center">Top Box Office Movies</h2>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {result.map((movie) => (
            <div key={movie.id} className="group relative">
              <img
                alt={movie.description}
                src={movie.primaryImage}
                className="w-full h-96 rounded-md bg-gray-200 object-cover group-hover:opacity-75"
              />
              <div className="mt-4 flex flex-col items-center">
                <h3 className="text-sm text-white text-center">
                </h3>
                <p className="mt-1 text-sm text-white">{movie.primaryTitle}
                </p>
                <p className="text-sm font-medium text-gray-900">{movie.language}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

        </>
    )
}
export default Topmovies;