import React from 'react';
import Home from '../components/Views/Home/Home';
import About from '../components/Views/About/About';
import List from '../components/Views/List/List';

const routes = {
    '00_home': {
        path: '/',
        exact: true,
        title: 'home',
        main: () => <Home/>
    },
    '01_list': {
        path: '/list',
        title: 'list',
        main: () => <List/>
    },
    '02_about': {
        path: '/about',
        title: 'about',
        main: () => <About/>
    }
};

export default routes;