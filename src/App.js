import React from "react";
import Home from "./Home.js";
import Speakers from "./Speakers.js";

export const ConfigContext = React.createContext();

const pageToShow = pageName => {
    if (pageName === "Home") return <Home />
    if (pageName === "Speakers") return <Speakers />
}

const configValue = {
    showSpeakerSpeakingDays: true
};

const App = ({ pageName }) => {
    <ConfigContext.Provider value={configValue}>
        <div>{pageToShow(pageName)}</div>
    </ConfigContext.Provider>
}

export default App;