import "./App.scss";
import VisitorsPerDay from "./components/VisitorsPerDay";
import VisitorsPerCountry from "./components/VisitorsPerCountry";
import ChildrenAdultSparkLine from "./components/ChildrenAdultSparkLine";

function App() {
  return (
    <div className="app">
      <VisitorsPerDay />
      <VisitorsPerCountry />
      <ChildrenAdultSparkLine />
    </div>
  );
}

export default App;
