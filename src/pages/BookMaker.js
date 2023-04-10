import React, { useEffect, useState } from 'react'

function BookMaker() {
  const [bookmaker, setBookmaker] = useState([])

  const fetchBookMaker = async ()=>{
    const response = await fetch('https://api.sportmonks.com/v3/odds/bookmakers?api_token=')
    const bookmaker = await response.json()
    console.log(bookmaker)
    setBookmaker([bookmaker])
  }

  useEffect(()=>{
    fetchBookMaker()
  }, [setBookmaker])
  return (
    <div>
      {bookmaker.map((Bmaker, key)=>{
        return(
          <div>
              {Bmaker.data.map((bm, b)=>{
                return(
                  <ul>
                    <li>{bm.name}</li>
                    <li>{bm.legacy_id}</li>
                  </ul>
                )
              })}
          
          </div>
        )
      })}
    </div>
  )
}

export default BookMaker
