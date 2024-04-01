import React from "react";
import options from "./Options.module.css"

const Options = ({values, updateFeedback, totalFeedback, resetFeedback}) => {
    return(
        <div className={options["options"]}>
            {
                Object.keys(values).map((item, i) => (
                    <button className={options["options-btn"]} key={i} onClick={() => updateFeedback(item)}>{item}</button>
                ))
            }
            {totalFeedback > 0 && (
                <button className={options["options-btn"]} onClick={resetFeedback}>Reset</button>
            )}
        </div>
    )
}

export default Options;