import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import SalesOffice from '../../components/SalesOffice/SalesOffice'


const Home = () => {
  
  const [category,setCategory] = useState("All");

  return (
    <div>
      <Header/>
      <SalesOffice category={category} setCategory={setCategory}/>
    </div>
  )
}

export default Home
