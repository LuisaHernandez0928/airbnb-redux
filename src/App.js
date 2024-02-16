import { useState } from "react";
import "./App.css";
import { HomeSearchBar } from "./layouts/homeSearchBar";

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
    </div>
  );
}

export default App;
