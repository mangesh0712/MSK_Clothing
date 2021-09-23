import "../index.css";
import Navbar from "./Navbar";
import Content from "./Content";

function App() {
  return (
    <div>
      {/* W3school replic */}
      <div className="bg-gray-200 m-6 ">
        <Navbar screenSize="580*880"/>
        <Content/>
      </div>
    </div>
  );
}

export default App;
