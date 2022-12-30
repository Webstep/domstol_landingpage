import React from "react";
import ClearGoals from "../components/slides/arealize/ClearGoals";
import CtoCitation from "../components/slides/arealize/CtoCitation";
import Introduction from "../components/slides/arealize/Introduction";

const Arealize = () => {
    return (
        <>
            <Introduction allowScrolling={() => {
                // remove this parameter if we decide to not use slides 
            }} />
            <ClearGoals />
            <CtoCitation />
        </>
    );
};

export default Arealize;