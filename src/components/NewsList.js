import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NewsItem from './NewsItem.js'


const NewsList = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {

        const getArticles = async () => {
            const response = await axios
            .get('https://newsapi.org/v2/everything?q=stock&from=2023-02-01&to=2023-02-01&sortBy=popularity&apiKey=53b51055600f4358b82340608d4bf0de')
            setArticles(response.data.articles)
            console.log(response)
        }
        
        getArticles()


    }, [])

    return (
        <div>
            {articles.map(article => {
                return (
                    <NewsItem
                        title = {article.title}
                        description={article.description}
                        url={article.url}
                        urlToImage={article.urlToImage}
                    />
                )
            })}

        </div>
    )
}

export default NewsList