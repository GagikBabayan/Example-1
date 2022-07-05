import App from "../App";
import { Routes, Route, NavLink } from "react-router-dom";
import { Homepage } from "../Homepage";
import { NotFoundPage } from "../NotFoundPage";
import { FilmShow } from "../FilmShow";

import "./Menu.css";

const styles = ({ isActive }) => (isActive ? "active-link" : "");

function Menu() {
  return (
    <div>
      <header>
        <NavLink to="/" className={styles}>
          Home
        </NavLink>
        <NavLink to="/movies" className={styles}>
          Movies
        </NavLink>
      </header>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/movies" element={<App />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/film/:id" element={<FilmShow />} />
      </Routes>
    </div>
  );
}

export default Menu;
