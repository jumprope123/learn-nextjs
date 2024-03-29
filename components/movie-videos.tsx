import { API_URL } from "../app/constants";
import styles from "../styles/movie-video.module.css";

async function getVideos(id: string) {
  const response = await fetch(`${API_URL}/${id}/videos`, { next: { revalidate: 3000 } });
  return response.json();
}

export default async function MovieVidos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`https://www.youtube.com/embed/${video.key}`}
          title={video.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ))}
    </div>
  );
}
