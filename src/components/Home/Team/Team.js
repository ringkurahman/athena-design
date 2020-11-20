import React from 'react';
import { Link } from 'react-router-dom';
import './Team.css'
const Team = () => {
    return (
        <div className='team-container'>
            <div className="container">
                <h2 className="text-center pb-5">Choose Your Dedicated Team</h2>
                <div className='card-deck d-flex flex-wrap justify-content-center my-5'>
                    <div class="card py-5" style={{ width: '18rem' }}>
                        <div class="card-body text-secondary text-center font-weight-bold px-5">
                            <h1>$199</h1>
                            <p>For Basic</p>
                            <hr className="line-color" />
                            <p>Homepage</p>
                            <p>No Inner Page</p>
                            <p>Asset File</p>
                            <p>Source File</p>
                            <p>Free Stock Photos</p>
                            <p>10 Days Free Support</p>
                            <p>24/7 Support</p>
                        </div>
                    </div>

                <div class="card py-5" style={{ width: '18rem' }}>
                        <div class="card-body text-secondary text-center font-weight-bold px-5">
                            <h1 className="">$399</h1>
                            <p className="">For Prefered</p>
                            <hr />
                            <p className="">Homepage</p>
                            <p className="">4 Inner Page</p>
                            <p className="">Asset File</p>
                            <p className="">Source File</p>
                            <p className="">Free Stock Photos</p>
                            <p className="">20 Days Free Support</p>
                            <p className="">24/7 Support</p>
                            <p className="mt-5">
                                <Link className="p-2 px-4 text-white see-btn order-btn" to="/">
                                Order Now
                                </Link>
                            </p>
                        </div>
                    </div>

                <div class="card py-5" style={{ width: '18rem' }}>
                        <div class="card-body text-secondary text-center font-weight-bold px-5">
                            <h1 className="">$599</h1>
                            <p className="">For Elite</p>
                            <hr className="line-color" />
                            <p className="">Homepage</p>
                            <p className="">8 Inner Page</p>
                            <p className="">Asset File</p>
                            <p className="">Source File</p>
                            <p className="">Free Stock Photos</p>
                            <p className="">30 Days Free Support</p>
                            <p className="">24/7 Support</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;