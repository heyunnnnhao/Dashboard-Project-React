import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router';
import './style.scss';
import {  getTimeDiff, useTime } from '@common';
import { AppContext } from '@common/AppContext';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SingleClock from './singleClock';
import Checkbox from '@mui/material/Checkbox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
const checkedIcon = <CheckBoxIcon fontSize='small' />;

const allCities = [
  { label: 'New York City', diff: -4 },
  { label: 'Beijing', diff: 8 },
  { label: 'London', diff: 0 },
  { label: 'Los Angeles', diff: -7 },
];

export default () => {
  const { cityList, setCityList } = useContext(AppContext);
  const updateTimeZoneSelected = (value) => {
    setCityList(value);
  };

  useEffect(() => {
    // console.log(cityList);
  }, [cityList]);

  return (
    <div className='world_clock'>
      <Autocomplete
        className='city-selector'
        multiple
        options={allCities}
        disableCloseOnSelect
        getOptionLabel={(option) => option.label}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Checkbox icon={icon} checkedIcon={checkedIcon} style={{ marginRight: 8 }} checked={selected} />
            {option.label}
          </li>
        )}
        onChange={(event, newValue) => {
          updateTimeZoneSelected(newValue);
        }}
        renderInput={(params) => <TextField {...params} focused color='info' variant='standard' label='City' placeholder='' />}
      />
      <div className='clocks'>
        {cityList.map((city, index) => {
          return <SingleClock city={city.label} diff={city.diff} key={index + '-'} />;
        })}
      </div>
    </div>
  );
};
