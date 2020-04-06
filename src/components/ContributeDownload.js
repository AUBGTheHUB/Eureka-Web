import React from 'react';
import { Card } from 'react-bootstrap';
import Button from '@material-ui/core/Button';

export default function ContributeDownload() {
    return (
        <div className="row">
            <div className="col-md-2 col-xs-2 col-sm-2">
            </div>
            <div className="col-md-4 col-xs-4 col-sm-4 justify-content-between">
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="../visuals/knowledge_icon11.svg" />
                    <Card.Body>
                        <Card.Title>Contribute to the Base</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        <Button variant="primary">Learn More</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className="col-md-4 col-xs-4 col-sm-4">
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="../visuals/globe_iconn.svg" />
                    <Card.Body>
                        <Card.Title>Download Data</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        <Button variant="primary">Learn More</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className="col-md-2 col-xs-2 col-sm-2">
            </div>
        </div>
    )
}