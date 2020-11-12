import React from 'react';
import { MDBAnimation } from 'mdbreact';

import './landing-page.styles.css';

class LandingPage extends React.Component {
    render() {
        return (
            <div>
                <div className='view viewsize'>
                    {/* <!-- Mask & flexbox options--> */}
                    <div className='mask rgba-black-light d-flex justify-content-center align-items-center'>
                        {/* <!-- Content --> */}
                        <div className='text-center white-text mx-5 wow fadeInLeft' data-wow-delay='0.3s'>
                            <MDBAnimation type='fadeInLeft' delay='.3s'>
                                <h1 className='mb-4'>
                                    <strong>COMMERCIAL AIR AND HEATING INSTALLATIONS</strong>
                                </h1>

                                <p>
                                    <strong></strong>
                                </p>

                                <p className='mb-4 d-none d-md-block'>
                                    <strong>Information about the company</strong>
                                </p>
                            </MDBAnimation>
                            {/* <a target='_blank' href='https://mdbootstrap.com/education/bootstrap/' className='btn btn-outline-white btn-lg'>
                                            Start free tutorial
                                            <i className='fas fa-graduation-cap ml-2'></i>
                                        </a> */}
                        </div>
                        {/* <!-- Content --> */}
                    </div>
                    {/* <!-- Mask & flexbox options--> */}
                </div>

                <main>
                    <div className='container'>
                        <section>
                            <h2 className='my-5 h3 text-center'>Services</h2>

                            <div className='row features-small mb-5 mt-3 wow fadeIn'>
                                <div className='col-md-4'>
                                    <div className='row'>
                                        <div className='col-2'>
                                            <i className='fas fa-check-circle fa-2x indigo-text'></i>
                                        </div>
                                        <div className='col-10'>
                                            <h6 className='feature-title'>Air Condition Installation</h6>
                                            <p className='grey-text'>details</p>
                                            <div style={{ height: '15px' }}></div>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col-2'>
                                            <i className='fas fa-check-circle fa-2x indigo-text'></i>
                                        </div>
                                        <div className='col-10'>
                                            <h6 className='feature-title'>Heater Installation</h6>
                                            <p className='grey-text'>details</p>
                                            <div style={{ height: '15px' }}></div>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col-2'>
                                            <i className='fas fa-check-circle fa-2x indigo-text'></i>
                                        </div>
                                        <div className='col-10'>
                                            <h6 className='feature-title'>Maintenance</h6>
                                            <p className='grey-text'>details</p>
                                            <div style={{ height: '15px' }}></div>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col-2'>
                                            <i className='fas fa-check-circle fa-2x indigo-text'></i>
                                        </div>
                                        <div className='col-10'>
                                            <h6 className='feature-title'>Repairs</h6>
                                            <p className='grey-text'>details</p>
                                            <div style={{ height: '15px' }}></div>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-md-6 flex-center'>
                                    <MDBAnimation type='fadeInRight' delay='.3s' reveal>
                                        <img className='z-depth-0 img-fluid' src='https://www.lg.com/cac_en/images/plp-b2b/b2b-1/global-airsolution-blockimg2to4-1.jpg' alt='LG equipment' />
                                    </MDBAnimation>
                                </div>
                            </div>
                        </section>

                        <hr className='mb-5' />

                        <section>
                            <h2 className='my-5 h3 text-center'>...and even more</h2>

                            <div className='row features-small mt-5 wow fadeIn'>
                                <div className='col-xl-3 col-lg-6'>
                                    <div className='row'>
                                        <div className='col-2'>
                                            <i className='fab fa-firefox fa-2x mb-1 indigo-text' aria-hidden='true'></i>
                                        </div>
                                        <div className='col-10 mb-2 pl-3'>
                                            <h5 className='feature-title font-bold mb-1'>Cross-browser compatibility</h5>
                                            <p className='grey-text mt-2'>Chrome, Firefox, IE, Safari, Opera, Microsoft Edge - MDB loves all browsers; all browsers love MDB.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-xl-3 col-lg-6'>
                                    <div className='row'>
                                        <div className='col-2'>
                                            <i className='fas fa-level-up-alt fa-2x mb-1 indigo-text' aria-hidden='true'></i>
                                        </div>
                                        <div className='col-10 mb-2'>
                                            <h5 className='feature-title font-bold mb-1'>Frequent updates</h5>
                                            <p className='grey-text mt-2'>MDB becomes better every month. We love the project and enhance as much as possible.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-xl-3 col-lg-6'>
                                    <div className='row'>
                                        <div className='col-2'>
                                            <i className='fas fa-comments fa-2x mb-1 indigo-text' aria-hidden='true'></i>
                                        </div>
                                        <div className='col-10 mb-2'>
                                            <h5 className='feature-title font-bold mb-1'>Active community</h5>
                                            <p className='grey-text mt-2'>Our society grows day by day. Visit our forum and check how it is to be a part of our family.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-xl-3 col-lg-6'>
                                    <div className='row'>
                                        <div className='col-2'>
                                            <i className='fas fa-code fa-2x mb-1 indigo-text' aria-hidden='true'></i>
                                        </div>
                                        <div className='col-10 mb-2'>
                                            <h5 className='feature-title font-bold mb-1'>jQuery 3.x</h5>
                                            <p className='grey-text mt-2'>MDB is integrated with newest jQuery. Therefore you can use all the latest features which come along with it.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='row features-small mt-4 wow fadeIn'>
                                <div className='col-xl-3 col-lg-6'>
                                    <div className='row'>
                                        <div className='col-2'>
                                            <i className='fas fa-cubes fa-2x mb-1 indigo-text' aria-hidden='true'></i>
                                        </div>
                                        <div className='col-10 mb-2'>
                                            <h5 className='feature-title font-bold mb-1'>Modularity</h5>
                                            <p className='grey-text mt-2'>Material Design for Bootstrap comes with both, compiled, ready to use libraries including all features as well as modules for CSS (SASS files) and JS.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-xl-3 col-lg-6'>
                                    <div className='row'>
                                        <div className='col-2'>
                                            <i className='fas fa-question fa-2x mb-1 indigo-text' aria-hidden='true'></i>
                                        </div>
                                        <div className='col-10 mb-2'>
                                            <h5 className='feature-title font-bold mb-1'>Technical support</h5>
                                            <p className='grey-text mt-2'>We care about reliability. If you have any questions - do not hesitate to contact us.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-xl-3 col-lg-6'>
                                    <div className='row'>
                                        <div className='col-2'>
                                            <i className='fas fa-th fa-2x mb-1 indigo-text' aria-hidden='true'></i>
                                        </div>
                                        <div className='col-10 mb-2'>
                                            <h5 className='feature-title font-bold mb-1'>Flexbox</h5>
                                            <p className='grey-text mt-2'>MDB fully supports Flex Box. You can forget about alignment issues.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-3 col-lg-6'>
                                    {/* <!--Grid row--> */}
                                    <div className='row'>
                                        <div className='col-2'>
                                            <i className='far fa-file-code fa-2x mb-1 indigo-text' aria-hidden='true'></i>
                                        </div>
                                        <div className='col-10 mb-2'>
                                            <h5 className='feature-title font-bold mb-1'>SASS files</h5>
                                            <p className='grey-text mt-2'>Arranged and well documented .scss files can't wait until you compile them.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        );
    }
}

export default LandingPage;
