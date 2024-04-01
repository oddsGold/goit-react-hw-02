import React from "react";
import description from "./Description.module.css"

const Description = ({name, shortDesc}) => {
    return(
        <div className={description.description}>
            <h1>{name}</h1>
            <p>{shortDesc}</p>
        </div>
    )
}

export default Description;