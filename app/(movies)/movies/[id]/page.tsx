import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVidos from "../../../../components/movie-videos";

export const metadata = {
  title: "movie",
};

export default async function MovieDetail({ params: { id } }: { params: { id: string } }) {
  return (
    <div>
      <Suspense fallback={"loading movie vidoes"}>
        <MovieVidos id={id} />
      </Suspense>
      <Suspense fallback={"loading movie info"}>
        <MovieInfo id={id} />
      </Suspense>
    </div>
  );
}
