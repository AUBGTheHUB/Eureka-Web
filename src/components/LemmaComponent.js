import React from 'react';

class LemmaSection extends React.Component {
    constructor(props) {
        super(props)
        this.related_words = ["слънца", "слънцето", "слънцата", "слънчице", "слънчева баня", "слънчев сплит", 
    "слънчева година", "слънчев удар", "слънчев вятър"];
        this.lemma = "Слънце"
        this.related_words_list = []
        
        
        // Put the related words in groups of 4, so it will be nice to display them
        this.related_words_grouped = [];
        var j = 0;
        this.related_words_grouped.push([]);

        for (var i = 1; i <= this.related_words.length; i++) {
      
            // always updating the final array
            this.related_words_grouped[j].push(this.related_words[i-1]);
      
            if (i % 4 == 0) {
                this.related_words_grouped.push([]);
              j++;
            }
          }
        
          if (this.related_words_grouped[0].length === 0) {
            // if the data you received was epmty
            this.related_words_grouped.pop()
         }


        for (const [index, value] of this.related_words_grouped.entries()) {
            this.intenal_list = []

            value.forEach(element => this.intenal_list.push(<div className="col-sm-2 col-md-2 col-lg-2">
                                                                <div className="centered_text"><a href="/">{element}</a></div>
                                                            </div>))
            this.related_words_list.push(<div className="row">
                                            <div className="col-md-2 col-sm-2 col-lg-2"></div>
                                                {this.intenal_list}
                                            <div className="col-md-2 col-sm-2 col-lg-2"></div>
                                         </div>)
          }
        
        this.myRef = React.createRef();
    }
    render(){
        return(
            <div className="lemma">
                <div className="row">
                    <div className="col-md-3 col-sm-3 col-lg-3">

                    </div>

                    <div className="col-md-6 col-sm-6 col-lg-6 centered_text lemmatext">
                        <p>{this.lemma}</p>
                    </div>

                    <div className="col-md-3 col-sm-3 col-lg-3">

                    </div>
                </div>
                {this.related_words_list}
            </div>
            
        )
    }

}

export default LemmaSection;