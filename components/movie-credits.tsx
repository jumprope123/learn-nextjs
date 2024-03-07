import { API_URL } from "../app/constants";
import styles from "../styles/movie-credits.module.css";

interface IMovieCreditsProps {
  id: string;
}

const getMovieCredits = async (id: string) => {
  const result = await fetch(`${API_URL}/${id}/credits`);
  return result.json();
};

const MovieCredits = async (props: IMovieCreditsProps) => {
  const credits = await getMovieCredits(props.id);
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.h1}>Actors</h1>
      <div className={styles.container}>
        {credits.map((item) => (
          <div key={item.id} className={styles.imgWrapper}>
            <img src={item.profile_path} alt={item.character} />
            <p>{item.original_name}</p>
            <p className={styles.act}>{item.character}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieCredits;
