import React from "react";
import ClearGoals from "../components/slides/arealize/ClearGoals";
import CtoCitation from "../components/slides/arealize/CtoCitation";
import EntrepreneurialJourney from '../components/slides/arealize/EntrepreneurialJourney';
import Introduction from "../components/slides/arealize/Introduction";
import SeniorHelp from "../components/slides/arealize/SeniorHelp";
import WayForward from '../components/slides/arealize/WayForward';

const Arealize = () => {
    return (
        <>
            <Introduction />
            <ClearGoals />
            <CtoCitation />
            <SeniorHelp />
            <EntrepreneurialJourney />
            <WayForward />
        </>
    );
};

export default Arealize;