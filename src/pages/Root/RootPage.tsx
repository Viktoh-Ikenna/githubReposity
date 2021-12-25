import React from 'react';
import NavBar from '../../components/header/NavBar.component';
import Pagebody from '../../components/pagebody/pageBody.component';

const RootPage = () => {
    return (
        <div style={{ backgroundColor: '#0d1117' }}>
            <NavBar />
            <Pagebody />
        </div>
    );
};

export default RootPage;
