import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../Shared/NewsCard/NewsCard';
import newsImg from '../../image/News.gif';
import './Category.css';

const Category = () => {
    const categoryNews = useLoaderData();

    return (
        <section>
            {
                categoryNews.length > 0 ?
                    <div>
                        {
                            categoryNews.map(news => <NewsCard
                                key={news._id}
                                news={news}
                            ></NewsCard>)
                        }
                    </div>
                    :
                    <div className='text-center'>
                        <img src={newsImg} alt="News" className='news-img' />
                    </div>
            }
        </section>
    );
};

export default Category;