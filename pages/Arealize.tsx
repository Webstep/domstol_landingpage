import React from "react";
import ClearGoals from "../components/slides/arealize/ClearGoals";
import CtoCitation from "../components/slides/arealize/CtoCitation";
import Introduction from "../components/slides/arealize/Introduction";
import SeniorHelp from "../components/slides/arealize/SeniorHelp";
import WayForward from '../components/slides/arealize/WayForward';

const Arealize = () => {
    return (
        <>
            <Introduction allowScrolling={() => {
                // remove this parameter if we decide to not use slides 
            }} />
            <ClearGoals />
            <CtoCitation />
            <SeniorHelp />
            <WayForward />
        </>
    );
};

export default Arealize;