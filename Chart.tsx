import * as React from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GroupGrid from './components/GroupGrid';
import GroupChart from './components/GroupChart';
import { byClubName, byCountry, byYear, type GroupKey } from './groupdata';

const groupMap = {
  'Название клуба': byClubName,
  'Страна': byCountry,
  'Год основания': byYear,
} as const;

function Chart() {
  const [group, setGroup] = React.useState<GroupKey>('Страна');
  const [groupData, setGroupData] = React.useState(byCountry);

  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value as GroupKey;
    setGroup(value);
    setGroupData(groupMap[value]);
  };

  return (
    <div>
      <Navbar active="3" />
      <Box sx={{ width: '280px', m: '20px auto' }}>
        <FormControl fullWidth>
          <InputLabel>Значение по оси OX</InputLabel>
          <Select
            id="select-group"
            value={group}
            label="Значение по оси OX"
            onChange={handleChange}
          >
            <MenuItem value="Название клуба">Название клуба</MenuItem>
            <MenuItem value="Страна">Страна</MenuItem>
            <MenuItem value="Год основания">Год основания</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <GroupChart data={groupData} />
      <GroupGrid data={groupData} />
      <Footer />
    </div>
  );
}

export default Chart;
