import "./banner.css";

interface Props {
  imgUrl: string;
  name: string;
  description: string;
  Button?: () => React.JSX.Element;
}

const Banner: React.FC<Props> = ({ imgUrl, name, description, Button }) => {
  return (
    <div className="banner-container">
      <img src={imgUrl} alt={name} height={"100%"} />
      <div className="information">
        <div className="header">
          <h1>{name}</h1> {Button && <Button />}
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Banner;
