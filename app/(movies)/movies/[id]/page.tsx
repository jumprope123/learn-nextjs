import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVidos from "../../../../components/movie-videos";

interface IParameter {
  params: { id: string };
}

export const generateMetadata = async ({ params: { id } }: IParameter) => {
  // fetch가 caching되기 때문에 Next에서는 이 방법이 나쁜방법이 아니다.
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
};

export default async function MovieDetail({ params: { id } }: IParameter) {
  return (
    <div>
      <Suspense fallback={"loading movie info"}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={"loading movie vidoes"}>
        <MovieVidos id={id} />
      </Suspense>
    </div>
  );
}
