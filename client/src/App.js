import React, { Fragment, useState, useEffect } from "react";
import './App.css';

import ResourcesTable from "./components/ResourcesData";
import BuildingsTable from "./components/BuildingsData";

function App() {

  const [ gameData, setGameData ] = useState({});

    const getData = async () => {
        try {
            const response = await fetch("http://localhost:5000/mainpage/1234");;
            const jsonData = await response.json();
            setGameData(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect( () => {
        getData();
    }, []);

  return <Fragment>
    <div className='container'>

    <ResourcesTable food={gameData.food_qty} wood={gameData.wood_qty} stone={gameData.stone_qty} iron={gameData.iron_qty} />
    <BuildingsTable 
      farm={gameData.farm_lvl}
      lumberjack={gameData.lumberjack_lvl}
      quarry={gameData.quarry_lvl}
      mine={gameData.mine_lvl}
      forum={gameData.forum_lvl}
      workshop={gameData.workshop_lvl}
      barracks={gameData.barracks_lvl}
      academy={gameData.academy_lvl}
      wall={gameData.wall_lvl}
      fort={gameData.fort_lvl} />
    </div>
  </Fragment>
}

export default App;
