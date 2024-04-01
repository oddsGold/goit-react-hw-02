import React from "react";
import feedback from "./Feedback.module.css"

const Feedback = ({values, totalFeedback, positive}) => {
    return (
        <div className={feedback.feedback}>
            {
                Object.entries(values).map(([key, value]) => (
                    <p key={key}>{key}: {value}</p>
                ))
            }
            <p>Total: {totalFeedback}</p>
            <p>Positive: {isNaN(positive) ? 0 : positive}%</p>
        </div>
    )
}

export default Feedback;