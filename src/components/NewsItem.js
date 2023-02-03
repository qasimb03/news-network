import React from 'react'
import './NewsItem.css'


const NewsItem = ({ title, description, url, urlToImage }) => 
{
    return (
        <div className = "News_Website">
            <div className='news_item'>
                <img className='news_image' src = {urlToImage} alt = {urlToImage}/>
                <h3><a href = {url}>{title}</a></h3>
                <p>{description}</p>

            </div>
            

        </div>
    )
}

export default NewsItem