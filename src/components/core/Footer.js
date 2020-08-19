import React from 'react'

function Footer() {
    return (

        <div className="footer_content">

            <div className="padding_Space"></div>

            <div className="footer">
                <div className="row">
                    <div className="col-md-1 col-sm-1 col-lg-1"></div>
                    <div className="col-md-2 col-sm-2 col-lg-2 col">
                        <h1>About the project</h1>
                        <ul>
                            <li>About</li>
                            <li>Mission</li>
                            <li>Services</li>
                        </ul>
                    </div>

                    <div className="col-md-2 col-sm-2 col-lg-2 col">
                        <h1>Resources</h1>
                        <ul>
                            <li>Download data</li>
                            <li>Contribute</li>

                        </ul>
                    </div>

                    <div className="col-md-2 col-sm-2 col-lg-2 col">
                        <h1>Support</h1>
                        <ul>
                            <li>Contact us</li>
                            <li>Web chat</li>
                            <li>Open ticket</li>
                        </ul>
                    </div>
                    <div className="col-md-2 col-sm-2 col-lg-2 col">
                        <h1>About us</h1>
                        <ul>
                            <li>Team</li>
                            <li>Mission</li>
                            <li>Services</li>
                            <li>Get in touch</li>
                        </ul>
                    </div>
                    <div className="social col-md-2 col-sm-2 col-lg-2 col">
                        <h1>Social channels</h1>
                        <ul>
                            <li>some icons here</li>

                        </ul>
                    </div>
                    <div className="col-md-1 col-sm-1 col-lg-1"></div>

                </div>


                <div className="row">
                    <div className="col-sm-4 col-md-4 col-lg-4"></div>
                    <div className="col-md-4 col-sm-4 col-xs-4">
                        <p className="copyright-text" >Copyright &copy; 2020 All Rights Reserved by
         <a href="#"> TheHubAUBG</a>.
            </p>
                    </div>


                    <div className="col-sm-4 col-md-4 col-lg-4"></div>


                </div>
            </div>
        </div>

    )


}
export default Footer;