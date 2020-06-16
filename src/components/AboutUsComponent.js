import React from 'react';
import { Carousel } from 'react-bootstrap';
import NavbarUnimorph from './NavbarComponent';
import Footer from './Footer';

export default function AboutUsSection() {
    return (
        <div className="colored_info">
            <h3 className="centered_text">About UniMorph</h3>
            <Carousel className>
                <Carousel.Item>
                    <p className="infopar">
                        The UniMorph project is a collaborative effort to improve how NLP handles complex morphology in the world’s languages. The goal of UniMorph is to annotate morphological data in a *universal schema* that allows an inflected word from any language to be defined by its lexical meaning, typically carried by the lemma, and by a rendering of its inflectional form in terms of a bundle of morphological features from our schema.
                    </p>
                </Carousel.Item>
                <Carousel.Item>
                    <p className="infopar">
                        The Unimorph presents the data collected both from the English part of Wiktionary and linguists.
                        Unlike Wiktionary, UniMorph provides a friendly interface that allows users (linguists, informants, annotators) to edit entries and add new data.
                        Its universal schema serves as a great source of knowledge for cross-linguistic studies and analyses as well as can be found useful in the development of multilingual systems (machine translation, automatic morphological inflection, and other scenarios).
                    </p>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}