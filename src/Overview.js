import React from "react";
import {Jumbotron} from "react-bootstrap";

const Overview = () => {
    return (
        <Jumbotron id="overview">
            <h2>
                Project Overview
            </h2>
            <p>
                <b><i>Project Imperium </i></b>
                is a third-person game about magic duels.
                You'll play as a wizard and fight for pride.
                Quick reaction-based gameplay,
                combat style like in souls-like games,
                dodge mechanics as the major part of the gameplay
                and much more are waiting for you!
            </p>
            <p className="text-right">
                <b>Hope you'll enjoy it!</b>
            </p>
        </Jumbotron>
    );
};

export default Overview;