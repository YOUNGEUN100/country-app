import React, { useState } from 'react'

function Home(props) {
  const {data,name,handleCountryChange,handleCountrySearch, darkmode, message} = props;
  console.log('home: ', data);

  const [capital, setCapital] = useState('');

  // const goDetail = (e) => {
  //   setCapital(e.target.alt);
  //   console.log("capital:",capital);
  //   location.href = `/detail/${capital}`;
  // }

  return (
    <div className={darkmode? 'home darkHomemode' : 'home'}>
        <form onSubmit={handleCountrySearch}>
          <div className='input_group'>
            <input 
              type='text' 
              placeholder='search' 
              value={name}
              onChange={handleCountryChange}
            />
            <button type='submit'>search</button>
          </div>
        </form>
        
        <div className='country_group'>
        { data && ( data.map((item)=>{
          return (
           
              <div key={item.capital} className='country_each'>
                <img src={item.flags.png} alt={item.capital} className='flg_img'/>
                <div key={item.ccn3} className='country_info'>
                  <div className='cName'><strong>{item.name.common} {item.translations.kor.common} </strong></div>
                  <div><b>Population: </b>{item.population}</div>
                  <div><b>Region: </b>{item.region}</div>
                  <div><b>Capital: </b>{item.capital}</div>
                </div>
                <a href={`detail/${item.capital}`}>more</a>
              </div>
            )
          })) 
        }
        </div>

        {message && <div className='no_find'>{message}</div> } 

    </div>
  )
}

export default Home