import React from 'react';
import { Link } from 'react-router-dom';
import projectImg from '../../../image/Illustration/20 [Converted]@2x.png';
import './RunnigProject.css'


const RunningProject = () => {
    return (
        <div className="container py-5 runningproject-container">
            <div className="row">
                <div className="col-md-6">
                    <img className="img-fluid" src={projectImg} alt="" />
                </div>
                <div className="col-md-6 d-flex align-items-center ">
                    <div className="px-5">
                        <h2 className="font-weight-bold">Stay Running & Project</h2>
                        <small className="text-secondary">It's a long established fact that a reader will be distracted by the readable content of a page when looking at it's layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter</small>

                        <br />
                        <br />
                        <Link className="p-2 px-4 text-white see-btn" to="/">
                            Contact us
                        </Link>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default RunningProject;