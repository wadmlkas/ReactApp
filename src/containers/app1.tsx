import React, { useEffect } from "react";
import DelayedEffect from "../components/delayedEffect";
import { Button } from "react-bootstrap";
import "../styles/button.scss";
import "../styles/card.scss";

type AppProps = { message?: string };

const App = (props: AppProps) => {
    return (
        <div className="card">
            <DelayedEffect timerMs={3000} />
            <Button className="button" variant="outline-primary">
                Primary
            </Button>
        </div>
    );
};

export default App;
