import "./styles.css";
import TwitterPost from "./TwitterPost";

export default function App() {
  return (
    <div className="App">
      <TwitterPost number={0} />
      <TwitterPost number={1} />
      <TwitterPost number={2} />
      <footer></footer>
    </div>
  );
}
