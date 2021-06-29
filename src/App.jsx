import React, { useState, useEffect } from 'react';
import Greeter from './components/Greeter'

const App = () => {
    const [ username, setUsername ] = useState('');
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            if (loaded == false) {
            setLoaded
            }
          }, 3000);
    }, [loaded]
    );

    if (loaded == false) {
        return (
            <>
            <h1>Website loading...</h1>
            <button onClick={setLoaded}>Load page</button>
            </>
        );
    }

    return (
        <>
            <h1>H1 Title Test</h1>
            <Greeter phrase="Hello there" name="Mitchell"></Greeter>
            <Greeter phrase="Hello there" name="Darren"></Greeter>
            <Greeter phrase="Hello there" name="Rachel"></Greeter>
            <input value={username} onChange={e => setUsername(e.target.value)}  />
            <p>You are logging in as {username}</p>
        </>
    );
};

export default App;