import React from 'react';
import Achivement from '../Achivement/Achivement';
import Design from '../Design/Design';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Ourwork from '../Ourwork/Ourwork';
import RunningProject from '../RunnigProject/RunningProject';
import Team from '../Team/Team';

const Home = () => {
    return (
        <div className="home-container">
            <Header></Header>
            <Ourwork></Ourwork>
            <RunningProject></RunningProject>
            <Achivement></Achivement>
            <Team></Team>
            <Design></Design>
            <Footer></Footer>
        </div>
    );
};

export default Home;