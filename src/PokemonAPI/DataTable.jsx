import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';

const columns = (handleDelete) => [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'title', headerName: 'Title', width: 350 },
  { field: 'price', headerName: 'Price', width: 100 },
  { field: 'category', headerName: 'Category', width: 130 },
  { field: 'image', headerName: 'Image', width: 130 },
  { 
    field: 'rating', 
    headerName: 'Rating', 
    width: 170, 
    valueGetter: (value , row) => `Rate: ${row.rating.rate || ''} Count: ${row.rating.count || ''}`
  },
  {
    field: 'deleteData',
    headerName: 'Delete',
    width: 100,
    renderCell: (params) => (
      <Button
        variant="contained"
        color="secondary"
        onClick={() => handleDelete(params.id)}
      >
        Delete
      </Button>
    ),
  },
];

export default function DataTable({ rows, handleDelete }) {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns(handleDelete)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
