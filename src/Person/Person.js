import React from "react";

const Person = (props) => {
    return (
        <div>
            <p>
                I'm a {props.name} and i'm {props.age}Years old and{" "}
                {props.color}
                <p>{props.children}</p>
            </p>
        </div>
    );
};

export default Person;
