import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CancelIcon from '@mui/icons-material/Cancel';
import SyncOutlinedIcon from '@mui/icons-material/SyncOutlined';

import { product } from '../../assets/product/product'
import './tableShoppingCart.css';
import { Grid } from '@mui/material';

export default function AccessibleTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="caption table">
                <TableHead style={{ padding: "20px" }}>
                    <TableRow>
                        <TableCell className="table__header">PRODUCT</TableCell>
                        <TableCell align="center" className="table__header">QUANTITY</TableCell>
                        <TableCell align="center" className="table__header">TOTAL</TableCell>
                        <TableCell align="center" style={{ color: "white" }}>ACTION</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        product.slice(0, 4).map((element, index) => (
                            <TableRow key={index}>
                                <TableCell>
                                    <Grid container>
                                        <img className="table__image" src={element.imageUrl} />
                                        <div className="table__name">
                                            {element.name}
                                            <br />
                                            <span>${element.price}</span>
                                        </div>
                                    </Grid>
                                </TableCell>
                                <TableCell align="center" className="table__quantity"><span>1</span></TableCell>
                                <TableCell align="center" className="table__total"><span>$ 30</span></TableCell>
                                <TableCell align="center"><CancelIcon /></TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
            <Grid container className="table__footer">

                <a href="/" className="table__footer__btn__left">
                    Continue Shopping
                </a>

                <a href="/" className="table__footer__btn__right">
                    <SyncOutlinedIcon />
                    &nbsp;Update Cart
                </a>

            </Grid>
        </TableContainer>
    );
}