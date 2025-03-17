import styles from "./banner.module.css";

interface Props {
  imgUrl: string;
  name: string;
  description: string;
  Button?: () => React.JSX.Element;
}

const Banner: React.FC<Props> = ({ imgUrl, name, description, Button }) => {
  return (
    <div className={styles.banner}>
      <img className={styles.image} src={imgUrl} alt={name} />
      <div className={styles.information}>
        <div className={styles.header}>
          <h1>{name}</h1> {Button && <Button />}
        </div>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default Banner;
