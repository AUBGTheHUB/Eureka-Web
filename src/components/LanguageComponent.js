import React, { useState } from 'react';
import NestedGrid from './NestedGrid';

const LanguagePageComponent = () => {
    const [ languages, setLanguages ] = useState([])
    return(
        <div>
            <div class="row">
                <div class="col-md-3 col-xs-3 col-lg-3">
                    <div id="menu"></div>
                </div>

                <div class="col-md-9 col-xs-9 col-lg-9">
                    <div id="lang"></div>
                    <NestedGrid/>
                </div>
            </div>
        </div>
    )
}

export default LanguagePageComponent