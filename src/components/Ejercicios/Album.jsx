import React, { useState } from 'react';
import styles from './Album.module.css';

export const Album = ({ img, titulo, tipo, album, año, liked }) => {
  const [like, setLike] = useState(liked);

  const handleLike = () => {
    setLike(!like);
  };

  return (
    <div className={styles.album}>
      <img src={img} alt={`Portada de ${titulo}`} />
      
      <div className={styles.albumInfo}>
        <h1>{titulo}</h1>
        <p>{tipo}</p>
        <h2>{album}</h2>
        <p>({año})</p>
        <button className={styles.buttonLike} onClick={handleLike}>
          {like ? '❤️ Like' : '🤍 Unlike'}
        </button>
      </div>
    </div>
  );
};
