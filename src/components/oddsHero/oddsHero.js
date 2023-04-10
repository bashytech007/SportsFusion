import React, { useEffect, useState } from 'react'
import MyTweet from '../twitter/twitter'
import './oddsHero.css'

function OddsHero() {
  const [odd, setOdd] = useState([])

  const fetchOdd = async ()=>{
    const response = await fetch('https://api.sportmonks.com/v3/football/odds/pre-match?api_token=P49FOARm6B5nBmvnAz2EGDbnPlgv5BdWGUWwFjFw2uUAjeU268BHrUR2ZZgM')
    const odd = await response.json()
    console.log(odd)
    setOdd([odd])
  }

  useEffect(()=>{
    fetchOdd()
  }, [setOdd])
  return (
    <div className='mainNew'>
    <div  className='news'>
    {odd.map((od, key)=>{
      return(
        <div>
          {od.data.map((nn, key)=>{
            return(
              <ul>
                <li>{nn.name}</li>
              </ul>
            )
          })}
        </div>
      )
    })}

    </div>
    <MyTweet/>
  </div>
  )
}

export default OddsHero
