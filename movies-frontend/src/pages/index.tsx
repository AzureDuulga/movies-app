import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

interface IAwards {
  wins: Number;
  nominations: Number;
  text: String;
}
interface IMovie {
  _id: string;
  plot: String;
  genres: [String];
  runtime: Number;
  cast: [String];
  num_mflix_comments: Number;
  poster: string;
  title: String;
  fullplot: String;
  countries: [String];
  released: Date;
  directors: [String];
  writers: [String];
  awards: IAwards;
  lastupdated: String;
  year: Number;
  imdb: {
    rating: Number;
    votes: Number;
    id: Number;
  };
  type: String;
  tomatoes: {
    viewer: {
      rating: Number;
      numReviews: Number;
    };
    lastUpdated: Date;
  };
}

interface IMovies {
  movies: IMovie[];
}

export default function Home({ movies }: IMovies) {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-orange-300 min-h-screen">
        <div className="container mx-auto">
          <h1 className="font-bold text-white text-3xl">Movies List</h1>
          <div className="bg-white grid grid-cols-4 gap-4 p-4">
            {movies.length > 0 &&
              movies.map((movie: IMovie) => (
                <div className="group" key={movie._id}>
                  <div className="aspect-[9/12] relative group bg-lime-200">
                    <Image
                      src={movie.poster || ""}
                      width={100}
                      height={100}
                      alt="moviePoster"
                      className="w-full h-full object-cover rounded"
                    />
                    <div className="absolute inset-0 group-hover:bg-black/30 transition-all" />
                  </div>
                  <Link
                    className="text-orange-400"
                    href={`movies/${movie._id}`}
                  >
                    {movie.title}
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:8000/movies");
  const data = await res.json();

  return {
    props: { movies: data.movies },
  };
}
