import cover from "../../assets/cover.jpg";
import ComicsDisplay from "../ComicsDisplay";

const Characters = ({ comics }) => {
  return (
    <ul className="characterArea">
      {comics.map((comic) => {
        const info = comic.name;
        const keyID = comic.id;
        return (
          <ComicsDisplay comic={comic} cover={cover} info={info} key={keyID} />
        );
      })}
    </ul>
  );
};
export default Characters;
