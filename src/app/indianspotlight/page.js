import getindianmovies from "../../../servies/indian";
import Link from "next/link";

export default async function(){
     const indian = getindianmovies();
        const result = await indian;
        // console.log(result);
    return(
        <>
         <div className="bg-black relative">
      <div className="mx-auto max-w-7xl   pt-5">
        <h2 className="text-2xl font-bold tracking-tight text-white">indian Spotlight</h2>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {result.map((movie) => (
            <div key={movie.id} className="group relative">
              <img
                alt={movie.description}
                src={movie.primaryImage}
                className="w-full h-96 rounded-md bg-gray-200 object-cover group-hover:opacity-75"
              />
              <div className="mt-4 flex flex-col items-center">
              <Link href={{ pathname: '/detail', query: { id: movie.id } }}>                     
                    <span aria-hidden="true" className="absolute inset-0" />
                    {movie.primaryTitle}
                 
                  </Link>
                <h3 className="text-sm text-white text-center">
                </h3>
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