import React from 'react'
import { useParams } from 'react-router-dom'

function Detail(props) {
  const darkmode = props.darkmode;
  const params = useParams();
  console.log("params",params);

  const array = props.data;
  console.log("detail:", array);

  let country = array? array.find((item) => {return item.capital == params.capital }) : null;
  console.log("country",country);

  // let cca3 = country.cca3;
  // let languages = country.languages[country.cca3];
  //  console.log("lang", languages);

  const goHome = () => {
    location.href = '/';
  }

  return (
    <div className={darkmode? 'detail darkmode' : 'detail'}>
      <button onClick={goHome} className='d_btn'>Back</button>
      {/* <p>데이터 : {params.capital}</p> */}
      {
        country ? (
          <div key={country.ccn3} className='c_detail'>
            <img src={country.flags.png} className='c_img'/>
            <div className='c_info'> 
              <div className='cName'><strong>{country.name.common} {country.translations.kor.common}</strong> </div>
              <div><b>Population: </b>{country.population}</div>
              <div><b>Region: </b>{country.region}</div>
              <div><b>Capital: </b>{country.capital}</div>
              <div><b>Sub Region: </b>{country.subregion}</div>
              <div><b>Top Level Domain: </b>{country.cca2}</div>
              {/* <div>Languages: {country.languages.cal}</div> */}
          </div>
        </div>
        ) : null
      }
    
    </div>
    
  )
}

export default Detail