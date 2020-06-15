import React from "react";
import { Link } from "react-router-dom";
import NewsCard from "./NewsCard";
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI("b40c68d49abf4503be02454412a6a0a8");

class News extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:""

        }
    }
    getNews(){
    const getNew = async () => {

        const news1 = await fetch('http://newsapi.org/v2/everything?qInTitle=rain&sources=the-hindu,the-times-of-india,google-news-in&sortBy=publishedAt&apiKey=3b7021b74bfe474dac3f7a4786491e9b');
        const news = await news1.json()
        console.log(news);
        function setStateFunction(state, props) {
            const newState = {title:news};
            return newState;
          }
          this.setState(setStateFunction);
    };
    getNew();
}
    render(){
    return( 
        <div>
    <h1>This is News Page</h1>
    <Link to="/"><button>weather</button></Link>
    <NewsCard news={this.state.title} />
    </div>
    );
    }
}

export default News;