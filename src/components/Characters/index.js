import "../Comics/style.css";
import cover from "../../assets/cover.jpg";

const Characters = ({ comics }) => {
  return (
    <ul className="characterArea">
      {comics.map((comic) => {
        return (
          <li key={`${comic.resourceURI}`} className="characterItem">
            {/*temp img*/}
            <img
              className="characterAreaImg"
              src={cover}
              alt={`${comic.name} cover`}
            />
            <div className="characterAreaNameArea">
              <span className="characterAreaName">{comic.name}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
export default Characters;
