import { useState } from "react";
import { useSelector } from "react-redux";
import { getFilteredAirbnbs } from "./reducer/airbnbsSlice";
import { HomeSearchBar } from "./layouts/homeSearchBar";
import { FilterBar } from "./componets/filterBar";
import { Card } from "./componets/card";
import "./App.css";

function App() {
  const [headerModalSholdBeClosed, setHeaderModalSholdBeClosed] =
    useState(false);

  const closeModal = () => {
    setHeaderModalSholdBeClosed(true);
  };
  const notifyModalStatus = () => {
    setHeaderModalSholdBeClosed(false);
  };

  const filteredAirbnbs = useSelector(getFilteredAirbnbs);
  console.log(filteredAirbnbs);
  const itemAirbnb = (
    position,
    images,
    favoritoHuspedes,
    description,
    availability,
    price
  ) => {
    return (
      <div key={position}>
        <Card
          images={images}
          favoritoHuspedes={favoritoHuspedes}
          description={description}
          availability={availability}
          price={price}
        />
      </div>
    );
  };

  const galleryAirbnb = () => {
    const gallery = [];
    for (let i = 0; i < filteredAirbnbs.length; i++) {
      gallery.push(
        itemAirbnb(
          i,
          filteredAirbnbs[i].pics,
          filteredAirbnbs[i].guestsFavorite,
          filteredAirbnbs[i].description,
          filteredAirbnbs[i].availability[0].date,
          filteredAirbnbs[i].availability[0].price
        )
      );
    }
    return gallery;
  };
  return (
    <div className="App" onClick={() => closeModal()}>
      <HomeSearchBar
        closeModal={headerModalSholdBeClosed}
        notifyModalOpened={notifyModalStatus}
      />
      <FilterBar />
      <div className="galeryConrainer">{galleryAirbnb()}</div>
    </div>
  );
}

export default App;
