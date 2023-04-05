import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {favState, themeState} = useContextGlobal()

  return (
    <div style={{ width: '100vw',minHeight:'69vh', backgroundColor: themeState.bgColor, color: themeState.color}}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        <ul>
          {favState.map((user) =>
            <li key={user.id}>
              <Card 
                user={user}
              />
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Favs;
