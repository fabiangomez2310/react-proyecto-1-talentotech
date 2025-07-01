import styles from "./Diseno1.module.css";

export const Diseno1 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>404 NOT FOUND</div>

      <div className={styles.main}>
        <img
          src="https://res.cloudinary.com/dqkg8y5zk/image/upload/v1751354019/image1_w6xd1x.png"
          alt="Scarecrow"
          className={styles.image}
        />

        <div className={styles.content}>
          <h1 className={styles.title}>I have bad news for you</h1>
          <p className={styles.message}>
            The page you are looking for might be removed or is temporarily
            unavailable
          </p>
          <button className={styles.button}>Back to homepage</button>
        </div>
      </div>
    </div>
  );
};
