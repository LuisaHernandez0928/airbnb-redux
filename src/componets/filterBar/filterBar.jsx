import { useState } from "react";
import { Categories } from "../categories";
import { Filters } from "../filters/filters";
import styles from "./index.module.css";

function FilterBar() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const notifyCategorySelected = (category) => {
    console.log(category);
    setSelectedCategory(category);
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.typeHousesContainer}>
        <Categories
          image={
            "https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg"
          }
          name={"Casas rurales"}
          notifySelection={notifyCategorySelected}
          activate={selectedCategory}
        />
        <Categories
          image={
            "https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg"
          }
          name={"Cabaña"}
          notifySelection={notifyCategorySelected}
          activate={selectedCategory}
        />
        <Categories
          image={
            "https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg"
          }
          name={"Piscinas increibles"}
          notifySelection={notifyCategorySelected}
          activate={selectedCategory}
        />
        <Categories
          image={
            "https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg"
          }
          name={"Ciudades famosas"}
          notifySelection={notifyCategorySelected}
          activate={selectedCategory}
        />
        <Categories
          image={
            "https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg"
          }
          name={"Parques nacionales"}
          notifySelection={notifyCategorySelected}
          activate={selectedCategory}
        />
        <Categories
          image={
            "https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg"
          }
          name={"Frente al lago"}
          notifySelection={notifyCategorySelected}
          activate={selectedCategory}
        />
        <Categories
          image={
            "https://a0.muscache.com/pictures/c8bba3ed-34c0-464a-8e6e-27574d20e4d2.jpg"
          }
          name={"Esqui"}
          notifySelection={notifyCategorySelected}
          activate={selectedCategory}
        />
        <Categories
          image={
            "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
          }
          name={"Vistas increibles"}
          notifySelection={notifyCategorySelected}
          activate={selectedCategory}
        />
        <Categories
          image={
            "https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg"
          }
          name={"Casas historicas"}
          notifySelection={notifyCategorySelected}
          activate={selectedCategory}
        />
        <Categories
          image={
            "https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg"
          }
          name={"Playa"}
          notifySelection={notifyCategorySelected}
          activate={selectedCategory}
        />
        <Categories
          image={
            "https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg"
          }
          name={"Mansiones"}
          notifySelection={notifyCategorySelected}
          activate={selectedCategory}
        />
        <Categories
          image={
            "https://a0.muscache.com/pictures/3271df99-f071-4ecf-9128-eb2d2b1f50f0.jpg"
          }
          name={"Minicasa"}
          notifySelection={notifyCategorySelected}
          activate={selectedCategory}
        />
        <Categories
          image={
            "https://a0.muscache.com/pictures/5ed8f7c7-2e1f-43a8-9a39-4edfc81a3325.jpg"
          }
          name={"Bed and breakfast"}
          notifySelection={notifyCategorySelected}
          activate={selectedCategory}
        />
        <Categories
          image={
            "https://a0.muscache.com/pictures/c0fa9598-4e37-40f3-b734-4bd0e2377add.jpg"
          }
          name={"Novedad"}
          notifySelection={notifyCategorySelected}
          activate={selectedCategory}
        />
        <Categories
          image={
            "https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg"
          }
          name={"Populares"}
          notifySelection={notifyCategorySelected}
          activate={selectedCategory}
        />
        <Categories
          image={
            "https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg"
          }
          name={"Diseño"}
          notifySelection={notifyCategorySelected}
          activate={selectedCategory}
        />
        <Categories
          image={
            "https://a0.muscache.com/pictures/9a2ca4df-ee90-4063-b15d-0de7e4ce210a.jpg"
          }
          name={"Autosuficiente"}
          notifySelection={notifyCategorySelected}
          activate={selectedCategory}
        />
        <Categories
          image={
            "https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg"
          }
          name={"Tropical"}
          notifySelection={notifyCategorySelected}
          activate={selectedCategory}
        />
        <Categories
          image={
            "https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg"
          }
          name={"Casa del arbol"}
          notifySelection={notifyCategorySelected}
          activate={selectedCategory}
        />
        <Categories
          image={
            "https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg"
          }
          name={"Islas"}
          notifySelection={notifyCategorySelected}
          activate={selectedCategory}
        />
      </div>

      <Filters />
    </div>
  );
}

export { FilterBar };
