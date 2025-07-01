import styles from "./Diseno2.module.css";

export const Diseno2 = () => {
  return (
    <>
      <div className={styles.card}>
        <img
          className={styles.avatar}
          src="https://res.cloudinary.com/dqkg8y5zk/image/upload/v1751354019/image2_maujos.jpg"
          alt=""
          height="200px"
          width="200px"
          id="imgperfil"
        />

        <h3 className={styles.name}>Fabian Gomez</h3>
        <div className={styles.stars}>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>☆</span>
        </div>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          impedit illo ratione omnis fuga et mollitia ipsam velit. Earum enim
          illum accusamus illo hic excepturi commodi repellat quibusdam impedit
          et!
        </p>
        <div className={styles.buttons}>
          <button className={styles.btnOutline}>Read More</button>
          <button className={styles.btnFilled}>Contact</button>
        </div>
      </div>
    </>
  );
};
