import React from 'react';
import happyImoji from '../../../image/Illustration/happy@2x.png';
import marketting from '../../../image/Illustration/marketing@2x.png';
import surface from '../../../image/Illustration/surface1@2x.png';
import transfortation from '../../../image/Illustration/transportation@2x.png';
import './Achivement.css'
const Achivement = () => {
    return (
        <div className='achivement-container py-5'>
            <div className="container py-5">
                <div className="row d-flex align-items-center justify-content-between">
                    <div className="col-md-5 mb-5">
                        <h4>Our Achivement</h4>
                        <small>It's a long established fact that a reader will be distracted by <br/> the readable content of a page when looking at it's layout. The <br/> point of using Lorem Ipsum is that it has a more-or-less normal <br/> distribution of letter</small>
                    </div>
                    <div className="col-md-7">
                        <div className="row justify-content-end">
                            <div className="col-md-5">
                                <div className="row bg-secondary d-flex align-items-center happy item-shadow p-3 mb-4 bg-white" >
                                    <div className="col-md-4">
                                        <img className="img-fluid" src={happyImoji} alt="" />
                                    </div>
                                    <div className="col-md-8">
                                        <h1>700+</h1>
                                        <p>Happy Client</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5 ml-4">
                                <div className="row bg-secondary p-3 d-flex align-items-center happy marketting item-shadow p-3 mb-4 bg-white" >
                                    <div className="col-md-4">
                                        <img className="img-fluid" src={marketting} alt="" />
                                    </div>
                                    <div className="col-md-8">
                                        <h1>140+</h1>
                                        <p>Project Completed</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="row bg-secondary d-flex align-items-center happy marketting item-shadow p-3 mb-4 bg-white" >
                                    <div className="col-md-4">
                                        <img className="img-fluid" src={surface} alt="" />
                                    </div>
                                    <div className="col-md-8">
                                        <h1>25+</h1>
                                        <p>Crazy Minds</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5 ml-4">
                                <div className="row bg-secondary p-3 d-flex align-items-center happy item-shadow p-3 mb-4 bg-white" >
                                    <div className="col-md-4">
                                        <img className="img-fluid" src={transfortation} alt="" />
                                    </div>
                                    <div className="col-md-8">
                                        <h1>140+</h1>
                                        <p>Project Completed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Achivement;