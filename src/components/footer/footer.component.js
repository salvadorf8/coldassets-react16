import React from 'react';

const Footer = () => {
    return (
        <footer class='page-footer font-small indigo pt-4'>
            {/* <!-- Footer Links --> */}
            <div class='container-fluid text-center text-md-left'>
                {/* <!-- Grid row --> */}
                <div class='row'>
                    {/* <!-- Grid column --> */}
                    <div class='col-md-6 mt-md-0 mt-3'>
                        {/* <!-- Content --> */}
                        <h5 class='text-uppercase'>Footer Content</h5>
                        <p>Here you can use rows and columns to organize your footer content.</p>
                    </div>
                    {/* <!-- Grid column --> */}

                    <hr class='clearfix w-100 d-md-none pb-3' />

                    {/* <!-- Grid column --> */}
                    <div class='col-md-3 mb-md-0 mb-3'>
                        {/* <!-- Links --> */}
                        <h5 class='text-uppercase'>Links</h5>

                        <ul class='list-unstyled'>
                            <li>{/* <a href='#!'>Link 1</a> */}Link</li>
                            <li>{/* <a href='#!'>Link 2</a> */}Link</li>
                            <li>{/* <a href='#!'>Link 3</a> */}Link</li>
                            <li>{/* <a href='#!'>Link 4</a> */}Link</li>
                        </ul>
                    </div>
                    {/* <!-- Grid column --> */}

                    {/* <!-- Grid column --> */}
                    <div class='col-md-3 mb-md-0 mb-3'>
                        {/* <!-- Links --> */}
                        <h5 class='text-uppercase'>Links</h5>

                        <ul class='list-unstyled'>
                            <li>{/* <a href='#!'>Link 1</a> */}Link</li>
                            <li>{/* <a href='#!'>Link 2</a> */}Link</li>
                            <li>{/* <a href='#!'>Link 3</a> */}Link</li>
                            <li>{/* <a href='#!'>Link 4</a> */}Link</li>
                        </ul>
                    </div>
                    {/* <!-- Grid column --> */}
                </div>
                {/* <!-- Grid row --> */}
            </div>
            {/* <!-- Footer Links --> */}

            {/* <!-- Copyright --> */}
            <div class='footer-copyright text-center py-3'>
                &copy; {new Date().getFullYear()} Copyright:
                <a href='http://www.coldassets.com'> coldassets.com</a>
            </div>
            {/* <!-- Copyright --> */}
        </footer>
    );
};

export default Footer;
