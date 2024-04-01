import React, {useEffect, useState} from 'react'
import "reset-css/reset.css";
import Options from "./components/options/Options.jsx";
import Feedback from "./components/feedback/Feedback.jsx";
import Notification from "./components/notification/Notification.jsx";
import Description from "./components/description/Description.jsx";

function App() {

    const initialState = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    const [values, setValues] = useState(localStorage.getItem('feedback') ? JSON.parse(localStorage.getItem('feedback')) : initialState);

    useEffect(() => {
        localStorage.setItem('feedback', JSON.stringify(values));
    }, [values]);

    const totalFeedback = values.good + values.neutral + values.bad;
    const positive = totalFeedback > 0 ? Math.round((values.good / totalFeedback) * 100) : 0;

    const updateFeedback = (feedbackType) => {
        setValues(prevValues => ({
            ...prevValues,
            [feedbackType]: prevValues[feedbackType] + 1
        }));
    }

    const resetFeedback = () => {
        setValues(initialState);
    }

    return (
        <div className="wrapper">
            <Description
                name={"Sip Happens Café"}
                shortDesc={"Please leave your feedback about our service by selecting one of the options below."}
            />
            <Options
                values={values}
                updateFeedback={updateFeedback}
                totalFeedback={totalFeedback}
                resetFeedback={resetFeedback}
            />
            {totalFeedback > 0 ? (
                <Feedback
                    values={values}
                    totalFeedback={totalFeedback}
                    positive={positive}
                />
            ) : (
                <Notification message="No feedback collected yet."/>
            )}
        </div>
    )
}

export default App;
