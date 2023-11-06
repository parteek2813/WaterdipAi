import "./App.scss";
import VisitorsPerDay from "./components/VisitorsPerDay";
import VisitorsPerCountry from "./components/VisitorsPerCountry";
import ChildrenAdultSparkLine from "./components/ChildrenAdultSparkLine";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <VisitorsPerDay />
      <VisitorsPerCountry />
      <ChildrenAdultSparkLine />
    </div>
  );
}

export default App;
