import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather />
        <footer>
          This project was coded with ♥️ by Candela and is open-sourced on{" "}
          <a
            href="https://github.com/macandelachaves/react-week5-homework"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>{" "}
          and hosted on Netlify{" "}
        </footer>
      </div>
    </div>
  );
}
