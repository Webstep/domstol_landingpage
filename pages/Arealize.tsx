import React from "react";
import ClearGoals from "../components/slides/arealize/ClearGoals";
import Introduction from "../components/slides/arealize/Introduction";

const Arealize = () => {
    return (
        <>
            <Introduction allowScrolling={() => {/* remove this parameter if we decide to not use slides*/ }} />
            <ClearGoals />
        </>
    );
};

export default Arealize;