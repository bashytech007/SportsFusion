import React from 'react'
import { useState , useEffect} from 'react';
import MyTweet from '../twitter/twitter'
import './newsHero.css'

function NewsHero() {
  const [sports, setSports] = useState([]);

 const fetchnews = async()=>{
  const response = await fetch('https://widgets.oddspedia.com/api/matches?api_token=&lang=en&sport_id=1&category_id=382&tournament_id=627&team_id=2538&type=list&popular-events')
  const sports = await response.json()
  console.log(sports)
  setSports([sports])
}

useEffect (()=>{
  fetchnews()
}, [setSports])
  return (
  <>
      <div className='mainNew'>
        
      <div  className='news'>
    <div>
      <h1> Latest New </h1>
      {sports.map((data, key) =>{
        return(
        <div>
            {data.match_list.map((c, w)=>{
              return(
                <th>
                  <tr>{c.sport_id}</tr>
                  <tr>{c.at}</tr>
                  <tr>{c.cancel}</tr>
                  <tr>{c.hscore}</tr>
                  <tr>{c.ht}</tr>
                  <tr>{c.md}</tr>
                  <tr>{c.tournament_id}</tr>
                  <tr>{c.tournament_name}</tr>
                </th>
              )
            })}
        </div>
        )
      })}
  
    

    </div>

      </div>
      <MyTweet/>
    </div>
  </>

  )
}

export default NewsHero
