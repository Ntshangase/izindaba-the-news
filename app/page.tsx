import React from 'react'
import { categories } from '../constants'
import fetchNews from '../lib/fetchNews'
import NewsList from './NewsList';
import response from '../response.json'

async function Homepage() {
  //fetch news data
  const news: NewsResponse = await fetchNews(categories.join(','));

  //if i run out of my quota(500), i can use this mock data below
  //const news: NewsResponse = response || await fetchNews(categories.join(','));
  

  return (
    <div>
      <NewsList news={news} />
    </div>
  )
}

export default Homepage