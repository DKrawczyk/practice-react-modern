// ./src/components/App.js
import React from 'react';
import TextContext from '../context';
import Box from './Box';

class App extends React.Component {
    state = {
        text: 'React HelloWorld Modern!',
    };

    render() {
        const { text } = this.state;
        const { Provider } = TextContext;
        return (
            <Provider value={text}>
                <Box />
            </Provider>
        );
    }
}

export default App;
