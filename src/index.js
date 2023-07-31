import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';

import './index.css';

import SplashPage from './SplashPage';
import ProjectList from './ProjectList';

const Site = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log('Page loaded');

        setIsLoading(false);
    }, []);
    if (isLoading) {
        // TODO - add loading screen component
        document.title = "Agyo's Website";
        return <h2>Loading...</h2>;
    }
    return (
        <>
            <SplashPage />
            <ProjectList />
        </>
    );
};

ReactDOM.render(<Site />, document.getElementById('root'));
