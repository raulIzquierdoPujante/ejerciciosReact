import { useEffect, useState } from "react";
import useMousePosition from "../hooks/useMousePosition";

const MouseApp = () => {

const position =useMousePosition();

    return (
        <div>
            <h1>Mouse App</h1>
            <pre>{JSON.stringify(position, null, 2)}</pre>
        </div>

    );
}
export default MouseApp;