import Header from "./components/Header/index";
import Mason from "./components/sections/mason/index";
import Post from "./components/sections/Post";
function App() {
  const rand = Math.ceil((Math.random() * 100 + 3 * 3) * 33);

  return (
    <div className="App">
      <Header />
      <Mason />
      <Post rand={rand} />
    </div>
  );
}

export default App;
