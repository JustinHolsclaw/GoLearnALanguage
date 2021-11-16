import APIs from "./HighlightedSkills/APIs";
import Databases from "./HighlightedSkills/Databases";
import FrontEnd from "./HighlightedSkills/FrontEnd";



function HighLightedSkills(){

    return(
        <div className="row center">
            <div className="col border border-dark border-4 text-center">
                <APIs/>
            </div>
            <div className="col border border-dark border-4 text-center">
                <FrontEnd/>
            </div>
            <div className="col border border-dark border-4 text-center">
                <Databases/>
            </div>
        </div>
    );
}

export default HighLightedSkills;