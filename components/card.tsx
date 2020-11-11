import styles from "./card.module.css";

export interface ICardProps {
  link: string;
  title: string;
  imageLink: string;
}
const Card: React.FunctionComponent<ICardProps> = ({
  link,
  title,
  imageLink,
}: ICardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h1 className={styles.heading}>Explore context</h1>
        <div className={styles.headingIcon}>
        <img
              src="/images/widget.icon.svg"
            />
        </div>
      </div>
      <div className={styles.cardContent}>
        <h2 className={styles.heading}>{title}</h2>
      </div>
      <a href={link}>
        <img style={{ maxWidth: "100%" }} src={imageLink}></img>
      <div className={styles.cardAction}>

          <p className={styles.body}>
            Explore the latest strategic trends, research and analysis
          </p>
          <div>
          <img
              src="/images/arrow.icon.svg"
            />
          </div>
      </div>
      </a>
    </div>
  );
};
export default Card;
