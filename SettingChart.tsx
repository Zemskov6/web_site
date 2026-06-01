import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import {
  OY_MAX_TITLES,
  OY_MIN_TITLES,
  OY_MAX_UCL,
  OY_MIN_UCL,
} from '../groupdata';

export type tSeries = {
  [OY_MAX_TITLES]: boolean;
  [OY_MIN_TITLES]: boolean;
  [OY_MAX_UCL]: boolean;
  [OY_MIN_UCL]: boolean;
};

type CheckboxProps = {
  series: tSeries;
  setSeries: React.Dispatch<React.SetStateAction<tSeries>>;
  isBar: boolean;
  setIsBar: React.Dispatch<React.SetStateAction<boolean>>;
};

function SettingChart({ series, setSeries, isBar, setIsBar }: CheckboxProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSeries({
      ...series,
      [event.target.name]: event.target.checked,
    });
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsBar(event.target.value === 'bar');
  };

  return (
    <Stack
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
      spacing={2}
      sx={{ m: '20px 0', justifyContent: 'center', flexWrap: 'wrap' }}
    >
      <FormControl>
        <FormLabel id="label-radio-group">Тип диаграммы:</FormLabel>
        <RadioGroup name="group-radio" value={isBar ? 'bar' : 'dot'} onChange={handleRadioChange}>
          <FormControlLabel value="bar" control={<Radio />} label="Гистограмма" />
          <FormControlLabel value="dot" control={<Radio />} label="Линейная" />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel id="label-checkbox-group">Значение по оси OY:</FormLabel>
        <FormControlLabel
          control={
            <Checkbox
              checked={series[OY_MAX_TITLES]}
              onChange={handleChange}
              name={OY_MAX_TITLES}
            />
          }
          label={OY_MAX_TITLES}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={series[OY_MIN_TITLES]}
              onChange={handleChange}
              name={OY_MIN_TITLES}
            />
          }
          label={OY_MIN_TITLES}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={series[OY_MAX_UCL]}
              onChange={handleChange}
              name={OY_MAX_UCL}
            />
          }
          label={OY_MAX_UCL}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={series[OY_MIN_UCL]}
              onChange={handleChange}
              name={OY_MIN_UCL}
            />
          }
          label={OY_MIN_UCL}
        />
      </FormControl>
    </Stack>
  );
}

export default SettingChart;
