import { BrowserRouter } from 'react-router-dom';
import Router from './router';

const App = () => {
    return (
        <div className="w-screen h-screen">
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </div>
    );
};

export default App;
