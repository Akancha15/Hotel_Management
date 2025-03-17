import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Search from '../Search/Search';
import Box from '@mui/material/Box';
import VisibilityIcon from '@mui/icons-material/Visibility'; // View
import EditIcon from '@mui/icons-material/Edit'; // Edit
import DeleteIcon from '@mui/icons-material/Delete'; // Delete
import { IconButton } from '@mui/material';


const handleView = (roomNumber) => {
  alert(`Viewing details for room: ${roomNumber}`);
};

const handleEdit = (roomNumber) => {
  alert(`Editing room: ${roomNumber}`);
};

const handleDelete = (roomNumber) => {
  if (window.confirm(`Are you sure you want to delete room ${roomNumber}?`)) {
    alert(`Deleted room: ${roomNumber}`);
  }
};

const columns = [
    { id: 'slNo', label: 'Serial No.', minWidth: 40 },
    { id: 'roomNumber', label: 'Room Number', minWidth: 60, align: 'center', format: (value) => value.toLocaleString('en-US') },
    { id: 'roomType', label: 'Room Type', minWidth: 150, },
    { id: 'bedType', label: 'Bed Type', minWidth: 150, },
    { id: 'pricePerNight', label: 'Prize Per Night', minWidth: 100, align: 'center', format: (value) => value.toLocaleString('en-US') },
    { id: 'description', label: 'Description', minWidth: 150, },
    { id: 'capacity', label: 'Capacity', minWidth: 40, align: 'center', format: (value) => value.toLocaleString('en-US') },
    { id: 'status', label: 'Status', minWidth: 150, },
    { id: 'action', label: 'Action', minWidth: 100, },
];

function createData(slNo, roomNumber, roomType, bedType, pricePerNight, description, capacity, status, action) {
  return { slNo, roomNumber, roomType, bedType, pricePerNight, description, capacity, status, 
    action: (
    <>
      <IconButton style={{color: "#000", padding:"4px", transform:"scale(0.8)"}} onClick={() => handleView(roomNumber)}>
        <VisibilityIcon/>
      </IconButton>
      <IconButton style={{color: "#000", padding:"4px", transform:"scale(0.8)"}} onClick={() => handleEdit(roomNumber)}>
        <EditIcon/>
      </IconButton>
      <IconButton style={{color: "#000", padding:"4px", transform:"scale(0.8)"}} onClick={() => handleDelete(roomNumber)}>
        <DeleteIcon/>
      </IconButton>
    </>
  ),
  };
}

const rows = [
    createData('1', 101, 'Single Room', '1 Single Bed', 1500 , 'This is description', 1, 'Available', handleView, handleEdit, handleDelete ),
    createData('2', 102, 'Double Room', '1 Double Bed', 2000 , 'This is description', 2, 'Occupied', handleView, handleEdit, handleDelete ),
    createData('3', 103, 'Twin Room', '2 Single Beds',  2200, 'This is description', 2, 'Reserved', handleView, handleEdit, handleDelete ),
    createData('4', 104, 'Triple Room ', '1 Double + 1 Single', 2500, 'This is description', 3, 'Available', handleView, handleEdit, handleDelete ),
    createData('5', 105, 'Suite', '1 King/Queen Bed + Additional Sofa Bed', 12000, 'This is description', 4 , 'Under Maintenance', handleView, handleEdit, handleDelete ),
    createData('6', 106,  'Penthouse', '1 or 2 King/Queen Beds + Extra Beds ', 18000, 'This is description', 6, 'Occupied', handleView, handleEdit, handleDelete),
    createData('7', 107, 'Deluxe Room', '1 King/Queen Bed', 8000, 'This is description', 2, 'Reserved', handleView, handleEdit, handleDelete ),
    createData('8', 108, 'Suite', '1 King/Queen Bed + Additional Sofa Bed', 12000,  'This is description', 4, 'Available', handleView, handleEdit, handleDelete ),
    createData('9', 109,  'Standard Room', '2 Single Beds', 1700, 'This is description', 2, 'Reserved',handleView, handleEdit, handleDelete ),
    createData('10', 110, 'Single Room', '1 Single Bed', 1500, 'This is description',  1, 'Available', handleView, handleEdit, handleDelete ),
    createData('11', 111, 'Standard Room ', 'Single', 1700, 'This is description',  2,  'Occupied',  handleView, handleEdit, handleDelete ),
    createData('12', 112, 'Double', '1 Double Bed', 2000, 'This is description', 2,  'Occupied', handleView, handleEdit, handleDelete),
    createData('13', 113, 'Deluxe Room', '1 King/Queen Bed', 8000, 'This is description', 2, 'Reserved', handleView, handleEdit, handleDelete ),
    createData('14', 114, 'Suite', '1 King/Queen Bed + Additional Sofa Bed', 12000, 'This is description', 4, handleView, handleEdit, handleDelete ),
    createData('15', 115, 'Penthouse', '1 or 2 King/Queen Beds + Extra Beds', 18000, 'This is description', 6, 'Under Maintenance', handleView, handleEdit, handleDelete ),
    createData('16', 116, 'Double', '1 Double Bed', 2000, 'This is description', 2, 'Reserved', handleView, handleEdit, handleDelete ),
    createData('17', 117, 'Deluxe Room', '1 King/Queen Bed', 8000, 'This is description', 10, 'Reserved', handleView, handleEdit, handleDelete),
    createData('18', 118, 'Penthouse', '1 or 2 King/Queen Beds + Extra Beds', 18000, 'This is description', 6, 'Available', handleView, handleEdit, handleDelete ),
    createData('19', 119, 'Suite', '1 King/Queen Bed + Additional Sofa Bed', 12000, 'This is description', 4, 'Available', handleView, handleEdit, handleDelete ),
    createData('20', 200, 'Single Room', '1 Single Bed', 1500, 'This is description', 1, 'Available', handleView, handleEdit, handleDelete),
    createData('21', 201, 'Single Room', '1 Single Bed', 1500, 'This is description', 1, 'Occupied', handleView, handleEdit, handleDelete ),
    createData('22', 202, 'Deluxe Room', '1 King/Queen Bed', 8000, 'This is description', 2, 'Under Maintenance', handleView, handleEdit, handleDelete),
    createData('23', 203, 'Single Room', '1 Single Bed', 1500, 'This is description', 1, 'Available', handleView, handleEdit, handleDelete),
    createData('24', 204, 'Penthouse', '1 or 2 King/Queen Beds + Extra Beds', 18000, 'This is description', 6, 'Available', handleView, handleEdit, handleDelete),
    createData('25', 205, 'Presidential Suite', '1 or 2 King Beds + Extra Sleeping Arrangements (for VIPs)', 25000, 'This is description', 10,'Reserved', handleView, handleEdit, handleDelete ),
];



export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [searchTerm, setSearchTerm] = React.useState("");
  

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleAddClick = () => {
    console.log("Add button clicked!");
  };

  
  return(
    <Box>
    <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} onAddClick={handleAddClick}  />
    <Paper className='room-paper' sx={{ width: '98%', overflow: 'hidden' }}>
      <TableContainer  className="room-container" sx={{ maxHeight: 560}}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </Box>
  );
}