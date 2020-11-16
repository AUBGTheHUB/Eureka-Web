import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import Button from '@material-ui/core/Button';

export default function ContributeDownload(props) {
    const [lang, setLang] = useState(null);
    useEffect(() => {
        const lang = window.localStorage.getItem("language");
        setLang(JSON.parse(lang));
    }, []);
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3 col-xs-3 col-sm-3">
                </div>
                <div className="col-md-3 col-xs-3 col-sm-3 justify-content-between">
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="/assets/knowledge_icon11.svg" />
                        <Card.Body>
                            <Card.Title>Contribute to the Base</Card.Title>
                                <Card.Text>
                                    Fill up specific lemma paradigm or propose new changes.
                                </Card.Text>
                            <Button variant="outlined" href={`/${lang ? lang.walsCode : "bul"}/lemmas`}>Learn More</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-3 col-xs-3 col-sm-3">
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="/assets/globe_iconn.svg" />
                        <Card.Body>
                            <Card.Title>Download Data</Card.Title>
                                <Card.Text>
                                    Download lemmas and words in a language or language family.
                                </Card.Text>
                            <Button variant="outlined" href="/languages">Learn More</Button>
                        </Card.Body>
                    </Card>
                </div>
                {/* <div className="col-md-2 col-xs-2 col-sm-2">
                </div> */}
            </div>
        </div>
    )
}