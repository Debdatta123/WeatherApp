import React from "react";
import NewsCard from "./NewsCard";
import NewsHeading from "./NewsHeading";


class News extends React.Component{
    
    constructor(props){
        
        super(props);
        this.state={
        title:[],

        };
    }

 
componentDidMount(){
    fetch('http://newsapi.org/v2/everything?qInTitle=climate&sources=the-hindu,the-times-of-india,google-news-in&sortBy=publishedAt&apiKey=3b7021b74bfe474dac3f7a4786491e9b')
  .then(response => response.json())
  .then(data => {
    //   console.log(data);
     this.setState({
         title:data.articles,
         
     });
    });
}

    render(){
        let elements = this.state.title.map((e,index)=>{
            return(<div className="container" key={index}>
            <div className="row justify-content-center">
            <NewsCard key={index} title={e.title} image={e.urlToImage} d={e.description}  />
            {/* <NewsCard key={index} title={e.title} image={e.urlToImage} d={e.description}  /> */}
            </div>
            </div>
        )})
    return( 
        <div >
            <NewsHeading />
    <div>{elements}</div>
    </div>
    );
    }
}

export default News;