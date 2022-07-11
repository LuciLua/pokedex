import styles from "./ImagePoke.module.scss";

function InfoImagePoke() {
  return (
    <div className={styles.infos}>
      <label htmlFor="info1">
        <span>Info 1</span>
        <div className={styles.infoBar} id="info1">
          <div className={styles.bar}></div>
        </div>
      </label>
      <label htmlFor="info2">
        <span>Info 2</span>
        <div className={styles.infoBar} id="info2">
          <div className={styles.bar}></div>
        </div>
      </label>
      <label htmlFor="info3">
        <span>Info 3</span>
        <div className={styles.infoBar} id="info3">
          <div className={styles.bar}></div>
        </div>
      </label>
      <label htmlFor="info4">
        <span>Info 4</span>
        <div className={styles.infoBar} id="info4">
          <div className={styles.bar}></div>
        </div>
      </label>
    </div>
  );
}

export default InfoImagePoke;
