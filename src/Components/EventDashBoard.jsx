import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Edit from '../assets/img/edit.svg';
import Delete from '../assets/img/delete.svg';
import Close from '../assets/img/remove.svg';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(title, content ,level,reward,imglink,register) {
    return { title, content ,level,reward,imglink,register};
}

const initialRows = [
    createData("Appathon","Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy","Hard","Certificates will be provided",'http://localhost:5173/src/assets/img/appathon.png',"link"),
    createData("Appathon","Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy","Hard","Certificates will be provided",'http://localhost:5173/src/assets/img/appathon.png',"link"),
];

const EventDashBoard = () => {
    const [tableview, setTableview] = useState(false);
    const [rows, setRows] = useState(initialRows);

    const handleAddClick = () => {
        setTableview(!tableview);
    };

    const handleEditClick = (field) => {
        setTableview(!tableview);
    };

    const handleDeleteClick = (field) => {
        setRows(rows.filter(row => row.field !== field));
        console.log(`Deleted: ${field}`);
    };

    const handleCloseForm = () => {
        setTableview(false);
    };
    return (
        <>
            {tableview && (
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <form id='popupbox'>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <h5 id='popuptitle'>Event</h5>
                            <img id='clsbtn' src={Close} alt="close" onClick={handleCloseForm} />
                        </div>
                        <div id="formscroll">   
                        <input type="text" placeholder='Enter the Title' />
                        <input type="text" placeholder='Enter the Content' />
                        <input type="text" placeholder='Enter the Level' />
                        <input type="text" placeholder='Enter the Reward' />
                        <input type="text" placeholder='Enter the Image Link' />
                        <input type="text" placeholder='Enter the Link' />
                        </div>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <h5 id='submitbtn' onClick={handleCloseForm} >Submit</h5>
                        </div>
                    </form>
                </div>
            )}

            <div id='DashMainContent'>
                <TableContainer>
                    <Table sx={{ width: "90%" }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="left">Titlle</StyledTableCell>
                                <StyledTableCell align="left">Content</StyledTableCell>
                                <StyledTableCell align="left">Level</StyledTableCell>
                                <StyledTableCell align="left">Reward</StyledTableCell>
                                <StyledTableCell align="left">Image Link</StyledTableCell>
                                <StyledTableCell align="left">Link</StyledTableCell>
                                <StyledTableCell align="right">
                                    <h4 onClick={handleAddClick} id="taddbtn">Add</h4>
                                </StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.title}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.title}
                                    </StyledTableCell>
                                    <StyledTableCell align="left">{row.content}</StyledTableCell>
                                    <StyledTableCell align="left">{row.level}</StyledTableCell>
                                    <StyledTableCell align="left">{row.reward}</StyledTableCell>
                                    <StyledTableCell align="left">{row.imglink}</StyledTableCell>
                                    <StyledTableCell align="left">{row.register}</StyledTableCell>
                                    <StyledTableCell align="right">
                                        <div id="ticons">
                                            <img
                                                id="ticon"
                                                src={Edit}
                                                alt="edit"
                                                onClick={() => handleEditClick(row.field)}
                                            />
                                            <img
                                                id="ticon"
                                                src={Delete}
                                                alt="delete"
                                                onClick={() => handleDeleteClick(row.field)}
                                            />
                                        </div>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    )
}

export default EventDashBoard
