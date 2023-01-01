import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css"

function App() {
  return (
    <div className="App">
      <Topbar />

      <div className="container">
        <Sidebar />

        <div className="other">Other Pages</div>
      </div>

    </div>
  );
}

export default App;
