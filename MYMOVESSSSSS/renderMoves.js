import "./App.css";
import "./App";
import arr from "./arrayMovies";

export function moviesFilter(name) {
  const newArr =
    name == ""
      ? arr
      : arr.filter(
          (value) =>
            value.name.toLowerCase().substring(0, name.length) ===
            name.toLowerCase()
        );

  return newArr;
}
let filterArr = arr;
export function Render({ arr, setArr }) {
  return arr.map((value) => {
    return (
      <div className="style" id={value.name} key={value.id.toString()}>
        <p className="title">{value.name}</p>
        <img src={value.image} />
        <p className="description">
          {" "}
          {value.text} <br />
          <button
            id={value.id}
            onClick={() => {
              filterArr = filterArr.filter((el) => el.id !== value.id);
              setArr(filterArr);
            }}
          >
            delete
          </button>
        </p>
      </div>
    );
  });
}
