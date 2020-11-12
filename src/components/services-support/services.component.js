import React from 'react';
import { MDBAnimation } from 'mdbreact';

import './services.styles.css';

const Services = () => {
    return (
        <div id='services'>
            <div className='view'>
                {/* <!-- Mask & flexbox options--> */}
                <div className='mask rgba-black-light d-flex justify-content-center align-items-center'>
                    {/* <!-- Content --> */}
                    <div className='text-center white-text mx-5 wow fadeInLeft' data-wow-delay='0.3s'>
                        <MDBAnimation type='fadeInLeft' delay='.3s'>
                            <h1 className='mb-4'>
                                <strong>SERVICES AND SUPPORT</strong>
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
            <div class='container my-5 px-5 pt-5 pb-4 z-depth-1'>
                <section class='dark-grey-text'>
                    <div class='row align-items-center'>
                        <div class='col-lg-6 mb-4'>
                            <h2 class='font-weight-normal mb-4'>Lovely place to work</h2>
                            <p class='lead text-muted'>Beautifully designed by best interior designers for the best web designers</p>
                            <p class='text-muted'>We can combine beautiful, modern designs with clean, functional. And best of all, we are super passionate about our work. Thought does cognitive into follow and rationale annoyed.</p>
                        </div>

                        <div class='col-lg-6 mb-4'>
                            <div id='mdb-lightbox-ui'></div>

                            <div class='d-grid mdb-lightbox'>
                                <figure class='item'>
                                    <a href='https://mdbootstrap.com/img/Photos/Horizontal/Architecture/12-col/img%20(10).jpg' class='z-depth-1 rounded' data-size='1600x1067'>
                                        <img src='https://mdbootstrap.com/img/Photos/Horizontal/Architecture/12-col/img%20(10).jpg' alt='placeholder' />
                                    </a>
                                </figure>
                                <figure class='item'>
                                    <a href='https://mdbootstrap.com/img/Photos/Horizontal/Architecture/12-col/img%20(11).jpg' class='z-depth-1 rounded' data-size='1600x1067'>
                                        <img src='https://mdbootstrap.com/img/Photos/Horizontal/Architecture/12-col/img%20(11).jpg' alt='placeholder' />
                                    </a>
                                </figure>
                                <figure class='item'>
                                    <a href='https://mdbootstrap.com/img/Photos/Horizontal/Architecture/12-col/img%20(12).jpg' class='z-depth-1 rounded' data-size='1600x1067'>
                                        <img src='https://mdbootstrap.com/img/Photos/Horizontal/Architecture/12-col/img%20(12).jpg' alt='placeholder' />
                                    </a>
                                </figure>
                                <figure class='item'>
                                    <a href='https://mdbootstrap.com/img/Photos/Horizontal/Architecture/12-col/img%20(13).jpg' class='z-depth-1 rounded' data-size='1600x1067'>
                                        <img src='https://mdbootstrap.com/img/Photos/Horizontal/Architecture/12-col/img%20(13).jpg' alt='placeholder' />
                                    </a>
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div class='container my-5 px-5 pt-5 pb-4 z-depth-1'>
                <section class='dark-grey-text'>
                    <div class='row align-items-center'>
                        <div class='col-lg-6 mb-4'>
                            <div id='mdb-lightbox-ui'></div>

                            <div class='d-grid mdb-lightbox'>
                                <figure class='item'>
                                    <a href='https://mdbootstrap.com/img/Photos/Horizontal/Architecture/12-col/img%20(10).jpg' class='z-depth-1 rounded' data-size='1600x1067'>
                                        <img src='https://mdbootstrap.com/img/Photos/Horizontal/Architecture/12-col/img%20(10).jpg' alt='placeholder' />
                                    </a>
                                </figure>
                                <figure class='item'>
                                    <a href='https://mdbootstrap.com/img/Photos/Horizontal/Architecture/12-col/img%20(11).jpg' class='z-depth-1 rounded' data-size='1600x1067'>
                                        <img src='https://mdbootstrap.com/img/Photos/Horizontal/Architecture/12-col/img%20(11).jpg' alt='placeholder' />
                                    </a>
                                </figure>
                                <figure class='item'>
                                    <a href='https://mdbootstrap.com/img/Photos/Horizontal/Architecture/12-col/img%20(12).jpg' class='z-depth-1 rounded' data-size='1600x1067'>
                                        <img src='https://mdbootstrap.com/img/Photos/Horizontal/Architecture/12-col/img%20(12).jpg' alt='placeholder' />
                                    </a>
                                </figure>
                                <figure class='item'>
                                    <a href='https://mdbootstrap.com/img/Photos/Horizontal/Architecture/12-col/img%20(13).jpg' class='z-depth-1 rounded' data-size='1600x1067'>
                                        <img src='https://mdbootstrap.com/img/Photos/Horizontal/Architecture/12-col/img%20(13).jpg' alt='placeholder' />
                                    </a>
                                </figure>
                            </div>
                        </div>
                        <div class='col-lg-6 mb-4'>
                            <h2 class='font-weight-normal mb-4'>Lovely place to work</h2>
                            <p class='lead text-muted'>Beautifully designed by best interior designers for the best web designers</p>
                            <p class='text-muted'>We can combine beautiful, modern designs with clean, functional. And best of all, we are super passionate about our work. Thought does cognitive into follow and rationale annoyed.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Services;
