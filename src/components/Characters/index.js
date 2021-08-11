import "../Comics/style.css";

const Characters = ({ comics }) => {
  return (
    <ul className="characterArea">
      {comics.map((comic) => {
        return (
          <li key={`${comic.resourceURI}`} className="characterItem">
            <div>
              <span className="characterAreaName">{comic.name}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
export default Characters;
/*<img
              className="characterAreaImg"
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt={`${comic.name} cover`}
            />*/
