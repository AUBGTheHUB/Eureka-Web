import React from 'react'

function Footer(props) {
    return (
        <footer className="footer_content container-fluid">
            <div className="footer container-fluid">
                <div className="row">
                    <div className="col-md-1 col-sm-1 col-lg-1"></div>
                    <div className="col-md-2 col-sm-2 col-lg-2 col">
                        <h1 style={{ color: "gray"}}>About the project</h1>
                        <ul>
                            <li><a href="/about">About</a></li>
                        </ul>
                    </div>
                    <div className="col-md-1 col-sm-1 col-lg-1"></div>

                    <div className="col-md-2 col-sm-2 col-lg-2 col">
                        <h1 style={{ color: "gray"}}>Resources</h1>
                        <ul>
                            <li><a href="/languages">Download data</a></li>
                        </ul>
                    </div>
                    <div className="col-md-1 col-sm-1 col-lg-1"></div>

                    <div className="col-md-2 col-sm-2 col-lg-2 col">
                        <h1 style={{ color: "gray"}}>Support</h1>
                        <ul>
                            <li><a href="/contact">Contact us</a></li>
                        </ul>
                    </div>
                    <div className="col-md-1 col-sm-1 col-lg-1"></div>

                    <div className="social col-md-2 col-sm-2 col-lg-2 col">
                        <h1 style={{ color: "gray"}}>Social channels</h1>
                        <ul>
                            <li><a href="https://unimorph.github.io" target="blank">Unimorph</a></li>

                        </ul>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-4 col-md-4 col-lg-4"></div>
                    <div className="col-md-4 col-sm-4 col-xs-4">
                        <p className="copyright-text" >Copyright &copy; 2020 All Rights Reserved by
                            <a href="#"> TheHubAUBG</a>.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;