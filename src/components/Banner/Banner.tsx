import "./banner.css";

interface Props {
  imgUrl: string;
  name: string;
  description: string;
  Button?: () => React.JSX.Element;
}

const Banner: React.FC<Props> = ({ imgUrl, name, description, Button }) => {
  return (
    <div className="banner">
      <div className="banner-content">
        <img className="character-img" src={imgUrl} alt={name} />
        <div className="information">
          <div className="header">
            <h1>{name}</h1> {Button && <Button />}
          </div>
          <p className="description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
