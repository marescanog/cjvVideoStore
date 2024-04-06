import React, { useState, useEffect, useMemo } from 'react'
import { Routes, Route, useParams, useLocation, Link } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Listing  from  '../components/Listing';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../styles/MovieListing.css';

const MovieListing = ({watchType}) => {

  // function useQuery() {
  //   const { search } = useLocation();
  //   return useMemo(() => new URLSearchParams(search, [search]));
  // }

  const [refreshMe, setRefreshMe] = useState(false);
  const [checkValue, setCheckValue] = useState(false);
  const [radioValue, setRadioValue] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const [movieData, setMovieData] = useState([]);
  const [query, setQuery] = useState('');
  const [refresh, setRefresh] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const radios = [ 
    { name: "Most Watched", value: 'mostWatched' },
    { name: "Release Date", value: 'releaseDate' },
    { name: "Recently Added", value: 'recentlyAdded' }
  ]

  const clearAllQueryValues = () => {
    setCheckValue(false);
    setRadioValue('');
    setFilterValue('');
    setSearchTerm('');
    setQuery('');
  }
  
  const buildQueryString = (options) => {
    let genre = options?.genre??filterValue;
    let sort = options?.sort??radioValue;
    let free = options?.free??checkValue;
    let name = options?.name??searchTerm;

    let hasString = (genre == '') && (sort == '') && (free == 'off') && (name == '') ? false : true;
    let queryString = hasString?`?`:''
    let append = "";

    if(options?.genre){
      append = append + ((genre == '') ? "" : `genre=${genre}`);
      append = append + ((sort == '') ? "" :  `${append==""?"":"&"}sort=${sort}`);
      append = append + ((free == 'off' || free == '') ? "" : `${append==""?"":"&"}free=${free}`);
      append = append + ((name == '' || name == null) ? "" : `${append==""?"":"&"}name=${name}`);
    }

    if(options?.sort){
      append = append + ((sort == '') ? "" :  `sort=${sort}`);
      append = append + ((genre == '') ? "" : `${append==""?"":"&"}genre=${genre}`);
      append = append + ((free == 'off' || free == '') ? "" : `${append==""?"":"&"}free=${free}`);
      append = append + ((name == '' || name == null) ? "" : `${append==""?"":"&"}name=${name}`);
    }

    if(options?.free){
      append = append + ((free == 'off' || free == '') ? "" : `free=${free}`);
      append = append + ((genre == '') ? "" : `${append==""?"":"&"}genre=${genre}`);
      append = append + ((sort == '') ? "" :  `${append==""?"":"&"}sort=${sort}`);
      append = append + ((name == '' || name == null) ? "" : `${append==""?"":"&"}name=${name}`);
    }

    if(options?.name){
      append = append + ((name == '') ? "" :  `name=${name}`);
      append = append + ((genre == '') ? "" : `${append==""?"":"&"}genre=${genre}`);
      append = append + ((sort == '') ? "" :  `${append==""?"":"&"}sort=${sort}`);
      append = append + ((free == 'off' || free == '') ? "" : `${append==""?"":"&"}free=${free}`);
    }

    setRefresh(!refresh)
    setRefreshMe(true);
    setQuery(queryString+append);
    return queryString+append;
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault(); 
    const newString = buildQueryString({name:searchTerm});
    window.history.pushState({genre:filterValue, sort:radioValue, free:checkValue, name: searchTerm}, "", `/movies${newString}`);
    try{
      // fetch(`http://localhost:5000/movies${newString}`) // local
      fetch(`https://videostoreapi.torontohotelcalifornia.net/movies${newString}`) // prod
      .then(res => res.json())
      .then(data => {
        setMovieData(data);
      });
    } catch (err) {
      console.log(err)
      setMovieData([]);
    }

  };

  useEffect(()=>{
    try{
      // fetch(`http://localhost:5000/movies${query}`) // local
      fetch(`https://videostoreapi.torontohotelcalifornia.net/movies${query}`) // prod
      .then(res => res.json())
      .then(data => {
        setMovieData(data);
      });
    } catch (err) {
      console.log(err)
      setMovieData([]);
    }


    // fetch(`http://localhost:5000/movies${query}`) // java local
    // .then((res) => {
    //   return res.json(res);
    // })
    // .then((data)=>{
    //   setMovieData(data);
    // });

    // let genre = '';
    // let arrQuery = [];
    // if(query != null && typeof(query) == 'string'){
    //   const str = query.slice(1);
    //   arrQuery = [...(str.split('&'))]
    // }

    // let fetchApiQuery = "?";
    // let append = "";

    // arrQuery.forEach(q=>{
    //   const queryArr = q.split('=');
    //   switch(queryArr[0]){
    //     case 'sort':
    //       switch(queryArr[1]){
    //         case 'mostWatched':
    //           append = (append=="")?(append+"_sort=rating"):(append+"&_sort=f1");
    //           break;
    //         case 'releaseDate':
    //           append = (append=="")?(append+"_sort=releaseDate"):(append+"&_sort=f1");
    //           break;
    //         case 'recentlyAdded':
    //           append = (append=="")?(append+"_sort=addedOn"):(append+"&_sort=f1");
    //           break;
    //       }
    //     break;
    //     case 'genre':
    //       // append = (append=="")?(append+"genre_like="+queryArr[1]):(append+"genre_like="+queryArr[1]);
    //       genre = queryArr[1];
    //     break;
    //     case 'free':
    //       append = (append=="")?(append+"promoType=Free%20with%20Ads"):(append+"&promoType=Free%20with%20Ads");
    //     break;
    //   }
    // });

    // fetch(`https://long-plum-clam-robe.cyclic.app/movies${arrQuery.length>0?(fetchApiQuery+append):""}`) // jsonserver
    // // fetch(`http://localhost:8000/movies${arrQuery.length>0?(fetchApiQuery+append):""}`)
    // .then((res) => {
    //   return res.json(res);
    // })
    // // .then((data)=>{
    // //   if(){

    // //   } else {
    // //     return data;
    // //   } 
    // // })
    // .then((data) => {
    //   if(genre == ''){
    //     return data;
    //   } else {
    //     // const par = JSON.parse(data);
    //     return data.filter(el=>{
    //       return el.genre.includes(genre)
    //     });
    //   }
    // })
    // .then((filteredData)=>{
    //   setMovieData(filteredData);
    // })

 }, [ radioValue, filterValue, checkValue ]);

  useEffect(()=>{
    clearAllQueryValues();
  }, []);

  return (
    <div className="mainContainer">
        <div>
          <NavigationBar/>
          <Header title={'Top Picks for Your Binge-Worthy Nights'}/>
        </div>
        <div className='universal_container listing_outer_container'>
          <Form onSubmit={handleSearchSubmit} className="search-form d-flex flex-row w-100 mb-3 " style={{ marginBottom: '1em',  alignItems:"center" }}>
            <Form.Group controlId="formBasicSearch" style={{ margin:0, padding: 0, width: '100%'  }}>
              <Form.Control
                type="text"
                placeholder="Search movies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ height: '100%', margin:0 }}
              />
            </Form.Group>
            <div className={'pl-2'}>
              <Button variant="primary" type="submit" className={'btn-sm ml-2'}>
                Search
              </Button>
            </div>
          </Form>

            <div className='listing_filter_container'>
              <div className='listing_filter_container_inner'>
                <Dropdown onSelect={(eventkey )=>{
                  setFilterValue(eventkey);
                  window.history.pushState({genre:filterValue, sort:radioValue, free:checkValue, name: searchTerm}, "", `/movies${buildQueryString({genre:eventkey})}`);
                }} >
                  <Dropdown.Toggle variant="success" id="dropdown-basic" className="listing_dropdown_style">
                    {(filterValue == '' || filterValue ==null)?"Filters":filterValue}
                  </Dropdown.Toggle>
                  <Dropdown.Menu >
                    <Dropdown.Item eventKey="Action">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="Adventure">Adventure</Dropdown.Item>
                    <Dropdown.Item eventKey="Horror">Horror</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <div className={query != ''?'button_clear_filter_container':'button_clear_filter_container_noshow'}>
                  <Button variant="secondary" size="sm" className={'button_clear_filter'} active={false}
                  onClick={()=>{
                    clearAllQueryValues();
                    window.history.pushState({genre:filterValue, sort:radioValue, free:checkValue, name: searchTerm}, "", `/movies`)
                    document.getElementById("default-checkbox").checked = false;
                    window.location.reload();
                  }}
                  >
                    <p className='button_clear_txtStyle'>x</p>
                  </Button>
                </div>
              </div>



              <div className="listing_check_style">
                <Form.Check // prettier-ignore
                checkvalue={filterValue}
                  type={'checkbox'}
                  id={`default-checkbox`}
                  label={`Free ${watchType??'Movies'} Only`}
                  onChange={(e)=>{
                    setCheckValue(e.target.checked)
                    window.history.pushState({genre:filterValue, sort:radioValue, free:checkValue, name: searchTerm}, "", `/movies${buildQueryString({free:e.target.checked?'on':'off'})}`);
                  }}
                />
              </div>

            </div>
            <div className='listing_button_container'>
              <ButtonGroup className="listing_button_flex_container">
                {radios.map((radio, idx) => (
                  <ToggleButton
                    key={`radio-${idx}-${radio.value}`}
                    id={`radio-${idx}`}
                    type="radio"
                    variant={'outline-primary'}
                    name="radio"
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onClick={()=>{
                      setRadioValue(radio.value);
                      window.history.pushState({genre:filterValue, sort:radioValue, free:checkValue, name: searchTerm}, "", `/movies${buildQueryString({sort:radio.value})}`);
                    }}
                  >
                    {radio.name}
                  </ToggleButton>
                ))}
              </ButtonGroup>
            </div>

            <Listing list={movieData} title={"movies"} type={"movies"}/>
        </div>
        <Footer/>  
    </div>
  )
}

export default MovieListing
