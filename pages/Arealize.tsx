import React from "react";
import ClearGoals from "../components/slides/arealize/ClearGoals";
import CtoCitation from "../components/slides/arealize/CtoCitation";
import EntrepreneurialJourney from '../components/slides/arealize/EntrepreneurialJourney';
import Introduction from "../components/slides/arealize/Introduction";
import SeniorHelp from "../components/slides/arealize/SeniorHelp";
import WayForward from '../components/slides/arealize/WayForward';
import Employee from "../components/slides/arealize/EmployeeSlide/Employee";
// import ReadMore from "../components/slides/arealize/ReadMore";

const Arealize = () => {
    return (
        <>
            <Introduction />
            <ClearGoals />
            <CtoCitation />
            <SeniorHelp />
            <EntrepreneurialJourney />
            <WayForward />
            <Employee />
            {/* Add read more, when more cases is introduced
            <ReadMore /> */}
        </>
    );
};

export default Arealize;