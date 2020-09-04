import React, {useEffect} from 'react';
import DelayedEffect from './delayedEffect';
import { Button } from 'react-bootstrap';
import './style/app.css'

type AppProps = { message: string };
const App = (props: AppProps) => {
    
    return (
        <div>
            <DelayedEffect timerMs={3000} />
            <Button 
                className='button'
                variant="outline-primary" 
            >
                Primary
            </Button>
        </div>
    )
};

export default App;