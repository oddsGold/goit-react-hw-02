import React from "react";
import notification  from "./Notification.module.css"

const Notification = ({ message }) => {
    return (
        <div className={notification.notification}>
            <p>{message}</p>
        </div>
    )
}

export default Notification;