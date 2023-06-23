import React from 'react'
import { useParams } from 'react-router-dom'

function Detail(props) {
  const darkmode = props.darkmode;
  const params = useParams();
  console.log("params",params);

  const array = props.data;
  console.log("detail:", array);

  let country 
  if (props.data) {country = array.find(item => item.ccn3 == params.ccn3 )} 
  console.log("country",country);
  
  let lang = {...country.languages};
  let langKey;
  let langValues;
  //console.log("lang",lang);
  if (country.languages) {
    langKey = Object.getOwnPropertyNames(lang);
    langKey = langKey[0];
    //console.log(langKey); 
    langValues = lang[langKey];
    //console.log(langValues);
  }
  

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
              <div><b>Population: </b>{country.population? (country.population).toLocaleString() : "" }</div>
              <div><b>Region: </b>{country.region? country.region : ""}</div>
              <div><b>Capital: </b>{country.capital? country.capital : ""}</div>
              <div><b>Sub Region: </b>{country.subregion? country.subregion : ""}</div>
              <div><b>Top Level Domain: </b>{country.cca2? country.cca2 : ""}</div>
              <div><b>Languages: </b>{langValues}</div> 
          </div>
        </div>
        ) : null
      }
    
    </div>
    
  )
}

export default Detail