import React from "react";
import Home from "./Home.js";
import Speakers from "./Speakers.js";

export const ConfigContext = React.createContext();

const pageToShow = pageName => {
    if (pageName === "Home") return <Home />
    if (pageName === "Speakers") return <Speakers />
    return <div>Not Found</div>;
};

const configValue = {
    showSignMeUp: false,
    showSpeakerSpeakingDays: false
};

const App = ({ pageName }) => {
    return (
        <ConfigContext.Provider value={configValue}>
        <div>{pageToShow(pageName)}</div>
        </ConfigContext.Provider>
    )
};

export default App;