import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "../src/reducer/store";
import { Provider } from "react-redux";
import { AddAirbnb } from "./pages/layout/addNewAirbnb.jsx";
import { KindSpace } from "./pages/kindSpace/kindSpace.jsx";
import { Features } from "./pages/featuresSpace/featureSpace.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const opts = [
  "Casas rurales",
  "Cabaña",
  "Piscinas increibles",
  "Ciudades famosas",
  "Parques nacionales",
  "Frente al lago",
  "Esqui",
  "Vistas increibles",
  "Casas historicas",
  "Playa",
  "Mansiones",
  "Minicasa",
  "Bed and breakfast",
  "Novedad",
  "Populares",
  "Diseño",
  "Autosuficiente",
  "Tropical",
  "Casa del arbol",
  "Islas",
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/add",
    element: <AddAirbnb />,
  },

  {
    path: "/add/typeHouse",
    element: <KindSpace options={opts} />,
  },
  {
    path: "/add/typeHouse/features",
    element: <Features />,
  },
]);

const prompt = "Como puedo enamorar a Luisa";

const jsonbody = JSON.stringify({
  model: "gpt-3.5-turbo",
  messages: [
    {
      role: "user",
      content: prompt,
    },
  ],
  temperature: 1,
  max_tokens: 256,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
});

const sendRequest = async () => {
  const resp = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer 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",
    },
    body: jsonbody,
  });
  const mjson = await resp.json();
  console.log(mjson.choices[0].message.content);
};

// sendRequest();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
