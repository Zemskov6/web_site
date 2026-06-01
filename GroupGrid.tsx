import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { ruRU } from '@mui/x-data-grid/locales';
import Container from '@mui/material/Container';
import type { tGroup } from '../groupdata';
import {
  OY_MAX_TITLES,
  OY_MIN_TITLES,
  OY_MAX_UCL,
  OY_MIN_UCL,
} from '../groupdata';

type GroupProps = {
  data: tGroup;
};

function GroupGrid({ data }: GroupProps) {
  const rows: GridRowsProp = data;
  const columns: GridColDef[] = [
    { field: 'Группа', headerName: 'Группа', flex: 1 },
    { field: OY_MAX_TITLES, flex: 0.8 },
    { field: OY_MIN_TITLES, flex: 0.8 },
    { field: OY_MAX_UCL, flex: 0.8 },
    { field: OY_MIN_UCL, flex: 0.8 },
  ];

  return (
    <Container maxWidth="lg" sx={{ height: '700px', mt: '20px' }}>
      <DataGrid
        localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
        rows={rows}
        columns={columns}
      />
    </Container>
  );
}

export default GroupGrid;
