import React, { useState } from 'react'
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Listing  from  '../components/Listing';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Form from 'react-bootstrap/Form';
import '../styles/TVListing.css';

const TVListing = ({watchType}) => {

  const [radioValue, setRadioValue] = useState('1');
  const [filterValue, setFilterValue] = useState('Filters');
  const radios = [
    {
      name: "Most Watched",
      value: 1
    },
    {
      name: "Realease Date",
      value: 2
    },
    {
      name: "Recently Added",
      value: 3
    }
  ]

  return (
<div className="mainContainer">
        <div>
          <NavigationBar/>
          <Header title={'Must Watch TV Shows'}/>
        </div>
        <div className='universal_container listing_outer_container'>
            <div className='listing_filter_container'>
              <Dropdown onSelect={(eventkey )=>{  setFilterValue(eventkey);}} >
                <Dropdown.Toggle variant="success" id="dropdown-basic" className="listing_dropdown_style">
                  {filterValue}
                </Dropdown.Toggle>
                <Dropdown.Menu >
                  <Dropdown.Item eventKey="Action">Action</Dropdown.Item>
                  <Dropdown.Item eventKey="Adventure">Adventure</Dropdown.Item>
                  <Dropdown.Item eventKey="Something else">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <div className="listing_check_style">
                <Form.Check // prettier-ignore
                  type={'checkbox'}
                  id={`default-checkbox`}
                  label={`Free ${watchType??'Movies'} Only`}
                />
              </div>
            </div>
            <div className='listing_button_container'>
              <ButtonGroup className="listing_button_flex_container">
                {radios.map((radio, idx) => (
                  <ToggleButton
                    key={`radio-${idx}`}
                    id={`radio-${idx}`}
                    type="radio"
                    variant={'outline-primary'}
                    name="radio"
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onClick={()=>{setRadioValue(radio.value)}}
                  >
                    {radio.name}
                  </ToggleButton>
                ))}
              </ButtonGroup>
            </div>
            <Listing/>
        </div>
        <Footer/>  
    </div>
  )
}

export default TVListing
