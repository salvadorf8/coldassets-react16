import React from 'react';
import { MDBAnimation } from 'mdbreact';

import './about-us.styles.css';

const AboutUs = () => {
    return (
        <div id='aboutus'>
            <div className='view'>
                {/* <!-- Mask & flexbox options--> */}
                <div className='mask rgba-black-light d-flex justify-content-center align-items-center'>
                    {/* <!-- Content --> */}
                    <div className='text-center white-text mx-5 wow fadeInLeft' data-wow-delay='0.3s'>
                        <MDBAnimation type='fadeInLeft' delay='.3s'>
                            <h1 className='mb-4'>
                                <strong>ABOUT US</strong>
                            </h1>
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
            <div class='container z-depth-1 py-5 my-5'>
                <section class='mx-md-5 text-center text-lg-left'>
                    <div class='row d-flex justify-content-center'>
                        <div class='col-md-12'>
                            <div class='row p-5'>
                                <div class='col-lg-8 d-flex flex-column justify-content-between'>
                                    <p class='text-muted mb-4'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                    <div>
                                        <p class='font-weight-bold lead mb-2'>
                                            <strong>Shane</strong>
                                        </p>
                                        <p class='font-weight-bold text-muted'>Founder & Field Project Manager</p>
                                    </div>
                                </div>
                                <div class='col-lg-4 d-flex mb-2 align-items-center'>
                                    <div class='avatar mx-4 w-100 white d-flex justify-content-center align-items-center'>
                                        <img src='https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg' class='rounded-circle img-fluid z-depth-1' alt='ownder' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div class='container pt-5 my-5 z-depth-1'>
                <section class='p-md-3 mx-md-5 text-center text-lg-left'>
                    <h2 class='text-center mx-auto font-weight-bold mb-4 pb-2'>Our Team</h2>
                    <div class='row'>
                        <div class='col-lg-3 col-md-4 col-sm-6 mb-4'>
                            <div class='p-4'>
                                <div class='avatar w-100 white d-flex justify-content-center align-items-center'>
                                    <img src='https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg' class='img-fluid rounded-circle z-depth-1' alt='something' />
                                </div>
                                <div class='text-center mt-3'>
                                    <h6 class='font-weight-bold pt-2'>Alan Turing</h6>
                                    <p class='text-muted'>
                                        <small>
                                            <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</i>
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class='col-lg-3 col-md-4 col-sm-6 mb-4'>
                            <div class='p-4'>
                                <div class='avatar w-100 white d-flex justify-content-center align-items-center'>
                                    <img src='https://mdbootstrap.com/img/Photos/Avatars/img%20(2).jpg' class='img-fluid rounded-circle z-depth-1' alt='something' />
                                </div>
                                <div class='text-center mt-3'>
                                    <h6 class='font-weight-bold pt-2'>Nathalie Fry</h6>
                                    <p class='text-muted'>
                                        <small>
                                            <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</i>
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class='col-lg-3 col-md-4 col-sm-6 mb-4'>
                            <div class='p-4'>
                                <div class='avatar w-100 white d-flex justify-content-center align-items-center'>
                                    <img src='https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg' class='img-fluid rounded-circle z-depth-1' alt='something' />
                                </div>
                                <div class='text-center mt-3'>
                                    <h6 class='font-weight-bold pt-2'>Billy Turner</h6>
                                    <p class='text-muted'>
                                        <small>
                                            <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</i>
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class='col-lg-3 col-md-4 col-sm-6 mb-4'>
                            <div class='p-4'>
                                <div class='avatar w-100 white d-flex justify-content-center align-items-center'>
                                    <img src='https://mdbootstrap.com/img/Photos/Avatars/img%20(4).jpg' class='img-fluid rounded-circle z-depth-1' alt='something' />
                                </div>
                                <div class='text-center mt-3'>
                                    <h6 class='font-weight-bold pt-2'>Veronica Smith</h6>
                                    <p class='text-muted'>
                                        <small>
                                            <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</i>
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div class='my-5'>
                <section class='grey lighten-2 py-5'>
                    <div class='flex-center'>
                        {/* <!--First row--> */}
                        <div class='row'>
                            {/* <!--First column--> */}
                            <div class='col-md-3 flex-center'>
                                <img src='https://mdbootstrap.com/img/Photos/Template/34.png' class='img-fluid wow fadeIn' data-wow-delay='.2s' alt='something' />
                            </div>
                            {/* <!--/First column--> */}

                            {/* <!--Second column--> */}
                            <div class='col-md-3 flex-center'>
                                <img src='https://mdbootstrap.com/img/Photos/Template/35.png' class='img-fluid wow fadeIn' data-wow-delay='.4s' alt='something' />
                            </div>
                            {/* <!--/Second column--> */}

                            {/* <!--Third column--> */}
                            <div class='col-md-3 flex-center'>
                                <img src='https://mdbootstrap.com/img/Photos/Template/36.png' class='img-fluid wow fadeIn' data-wow-delay='.4s' alt='something' />
                            </div>
                            {/* <!--/Third column--> */}

                            {/* <!--Fourth column--> */}
                            <div class='col-md-3 flex-center'>
                                <img src='https://mdbootstrap.com/img/Photos/Template/37.png' class='img-fluid wow fadeIn' data-wow-delay='.2s' alt='something' />
                            </div>
                            {/* <!--/Fourth column--> */}
                        </div>
                        {/* <!--/First row--> */}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutUs;
