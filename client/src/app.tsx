import React, { useEffect, useState } from "react";

export const App: React.FC = () => {
    const [clientMessage, setClientMessage] = useState("");

    useEffect(() => {
        setClientMessage("Hello from the client!")
    }, []);

    return <>
        <h1>Hello from the server!</h1>
        <h2>{clientMessage}</h2>
    </>
}