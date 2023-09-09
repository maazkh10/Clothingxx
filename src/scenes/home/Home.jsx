import React from 'react'
import MainCarousel  from './MainCarousel'
import ShoppingList from './ShoppingList'
import Brands from './Brands'
import Collectionzz from './Collectionzz'
import Justforu from './Justforu'
import Trendingzz from './Trending'
import  Discrip  from './Discrip'
import Insta from './Insta'
const Home = () => {
  return (
    <div className='home'>
      <MainCarousel />
      <ShoppingList />
      <Brands />
      <Collectionzz />
      <Justforu />
      <Trendingzz />
      <Discrip />
      <Insta />
    </div>
  )
}

export default Home