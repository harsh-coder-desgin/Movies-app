import upcomeing from "../../../servies/upcomingreleases";
import Link from "next/link";
const Upcomingreleases =async()=>{
    const newcotent = upcomeing();
    const dates = await newcotent;
    console.log(dates);
    return(
        <>
             <div className="bg-black relative">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Upcoming Releases
        </h2>

        {dates.length === 0 ? (
          <p className="text-white">No upcoming movies found.</p>
        ) : (
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dates.map((date) =>
              date.titles.map((movie) => (
                <div key={movie.id} className="group relative">
                  <img
                    alt={movie.title}
                    src={movie.primaryImage || "/default-image.jpg"} // Fallback image
                    className="w-full h-96 rounded-md bg-gray-200 object-cover group-hover:opacity-75"
                  />
                  <div className="mt-4">
                    <h3 className="text-sm text-white">
                      <Link
                        href={{ pathname: "/detail", query: { id: movie.id } }}
                      >
                        <span aria-hidden="true" className="absolute inset-0" />
                        {movie.primaryTitle}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-white">{movie.startYear}</p>
                    <p className="text-sm font-medium text-gray-900">
                      {movie.date}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
        </>
    )
}
export default Upcomingreleases;