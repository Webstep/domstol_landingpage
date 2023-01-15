import React from "react";
import ClearGoals from "../components/slides/arealize/ClearGoals";
import CtoCitation from "../components/slides/arealize/CtoCitation";
import Introduction from "../components/slides/arealize/Introduction";
import SeniorHelp from "../components/slides/arealize/SeniorHelp";

const Arealize = () => {
    return (
        <>
            {/* <Introduction allowScrolling={() => {
                // remove this parameter if we decide to not use slides 
            }} />
            <ClearGoals />
            <CtoCitation /> */}
            <SeniorHelp />
        </>
    );
};

export default Arealize;