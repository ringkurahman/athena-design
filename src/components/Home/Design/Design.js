import React from 'react';
import './Design.css'

const Design = () => {
    return (
        <div className="row design-row w-100">
            <div className="col-12 d-flex justify-content-center">
                <div className="text-center">
                    <h2>Get your design right, right now</h2>
                    <p className="text-secondary">Be the first know our latest offers and updates!</p>
                    <form>
                    <div className="row d-flex justify-content-center">
                        <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-8 m-0 p-0">
                            <input type="search" className="shadow p-3 mb-5 bg-white rounded w-100 form-control text-secondary" placeholder="Enter your email address" style={{ borderRadius: '5px 0px 0px 5px' }} name="" id="" />
                        </div>
                        <div className="col-3 col-sm-2 col-md-3 col-lg-1 col-xl-2 p-0">
                            <input type="submit" value="Get Started" className="btn btn-primary m-0 w-100 "  style={{ borderRadius: '0px 5px 5px 0px' }} />
                        </div>
                    </div>
                </form>
                </div>

            </div>
        </div>
    );
};

export default Design;