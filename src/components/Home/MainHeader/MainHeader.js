import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../image/Illustration/16 [Converted]@2x.png';
import './MainHeader.css';
const MainHeader = () => {
    return (
        <div className="container mainheader-container">
            <div className="row main-header w-100">
                <div className="col-md-6 d-flex align-items-center">
                    <div>
                        <h1 className="font-weight-bold display-3">Florence <br /> Agency</h1>
                        <small className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing <br />
                 elit. In nam alias excepturi eveniet natus error ratione <br />
                  quia voluptas praesentium dolorum.</small>
                        <br /><br />
                        <Link className="p-2 px-4 text-white see-btn" to="/">
                            See Pricing
                        </Link>
                        {/* <button >See Pricing</button> */}
                    </div>
                </div>
                <div className="col-md-6">
                    <img src={img1} className="w-100" alt="" />
                </div>
            </div>
        </div>

    );
};

export default MainHeader;