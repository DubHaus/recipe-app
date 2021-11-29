import React, {useContext} from 'react';
import {Text} from 'react-native';
import {NavigationContext} from '../App';
import Home from './home';

const Pages = () => {
    const [selected] = useContext(NavigationContext);

    switch (selected) {
        case 'home':
            return <Home />;
        case 'explore':
            return <Home />;
        case 'saved':
            return <Home />;
        case 'myRecipes':
            return <Home />;
    }
};

export default Pages;
