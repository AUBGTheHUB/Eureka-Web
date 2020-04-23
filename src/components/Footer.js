import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (

        <div class="footer_content">

            <div class="padding_Space"></div>

            <div class="footer">
                <div class="row">
                    <div class="col-md-1 col-sm-1 col-lg-1"></div>
                    <div class="col-md-2 col-sm-2 col-lg-2 col">
                        <h1>About the project</h1>
                        <ul>
                            <li>About</li>
                            <li>Mission</li>
                            <li>Services</li>
                        </ul>
                    </div>

                    <div class="col-md-2 col-sm-2 col-lg-2 col">
                        <h1>Resources</h1>
                        <ul>
                            <li>Download data</li>
                            <li>Contribute</li>

                        </ul>
                    </div>

                    <div class="col-md-2 col-sm-2 col-lg-2 col">
                        <h1>Support</h1>
                        <ul>
                            <li>Contact us</li>
                            <li>Web chat</li>
                            <li>Open ticket</li>
                        </ul>
                    </div>
                    <div class="col-md-2 col-sm-2 col-lg-2 col">
                        <h1>About us</h1>
                        <ul>
                            <li>Team</li>
                            <li>Mission</li>
                            <li>Services</li>
                            <li>Get in touch</li>
                        </ul>
                    </div>
                    <div class="social col-md-2 col-sm-2 col-lg-2 col">
                        <h1>Social channels</h1>
                        <ul>
                            <li>some icons here</li>

                        </ul>
                    </div>
                    <div class="col-md-1 col-sm-1 col-lg-1"></div>

                </div>


                <div class="row">
                    <div class="col-sm-4 col-md-4 col-lg-4"></div>
                    <div class="col-md-4 col-sm-4 col-xs-4">
                        <p class="copyright-text" >Copyright &copy; 2020 All Rights Reserved by
         <a href="#">TheHubAUBG</a>.
            </p>
                    </div>


                    <div class="col-sm-4 col-md-4 col-lg-4"></div>


                </div>
            </div>
        </div>

    )


}
export default Footer;