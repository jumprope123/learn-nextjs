import styles from "../../styles/about-me.module.css";
import myPic from "../../static/image/my-pic.jpg";
import Link from "next/link";
export default function AboutUs() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.picture}>
          <div>
            <img src={myPic.src} />
            <h1>1991.02.16 (33세)</h1>
          </div>
          <div className={styles.aPage}>
            <div>
              <a href={"https://electric-saffron-473.notion.site/355dd1b7e78a4308902078e72e18d638"} target={"_blank"}>
                Notion 바로가기
              </a>
            </div>
            <div>
              <a href={"https://github.com/jumprope123?tab=repositories"} target={"_blank"}>
                Github 바로가기
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
