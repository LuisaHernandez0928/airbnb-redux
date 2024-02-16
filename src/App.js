import { useState } from "react";
import "./App.css";
import { HomeSearchBar } from "./layouts/homeSearchBar";
import { FilterBar } from "./componets/filterBar";

function App() {
  const [headerModalSholdBeClosed, setHeaderModalSholdBeClosed] =
    useState(false);

  const closeModal = () => {
    setHeaderModalSholdBeClosed(true);
  };
  const notifyModalStatus = () => {
    setHeaderModalSholdBeClosed(false);
  };
  return (
    <div className="App" onClick={() => closeModal()}>
      <HomeSearchBar
        closeModal={headerModalSholdBeClosed}
        notifyModalOpened={notifyModalStatus}
      />
      <FilterBar />
    </div>
  );
}

export default App;
