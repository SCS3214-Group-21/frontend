import "./App.css";
import RegisterProgress from "./components/ui/RegisterProgress";
import SelectionCard from "./components/common/SectionCard";
import StatusCard from "./components/common/StatusCard";

function App() {
  return (
    <>
      {/* <RegisterProgress precentage={50}></RegisterProgress>
      <SelectionCard title={'DreamWed'} subtitle={"WedEase"} buttontext={"Login"}></SelectionCard> */}
      <div className="absolute  bottom-10 left-6 text-right">
      <StatusCard
        title={"Business not going as Planned Need a"}
        subtitle={"Boost..?"}
        paragraph={
          "Get Idea about our boosting service, ideally make for improving your business"
        }
        button={"Details"}
      />
      </div>
    </>
  );
}

export default App;
