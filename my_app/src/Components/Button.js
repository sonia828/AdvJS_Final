import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

function Button(){
    return(
        <div>
    <Dropdown>
    <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
    </Dropdown.Toggle>

    <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">to-do</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Add action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Delete action</Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown>
    </div>
    )
}

export default Button