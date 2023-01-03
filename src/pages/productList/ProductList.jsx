import React, { useState } from 'react';
import './ProductList.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { productRows } from '../../dummyData';
import { Link } from "react-router-dom";



export default function ProductList() {

    const [product, setProduct] = useState(productRows)

    const handleDelete = (id) => {
        setProduct(product.filter(item => item.id !== id))
    }


    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 100
        },
        {
            field: 'product',
            headerName: 'Product',
            width: 250,
            sortable: false,
            renderCell: (params) => {
                return (
                    <div className='productListItem'>
                        <img src={params.row.img} alt="" className='productListImg' />
                        {params.row.name}
                    </div>
                )
            }
        },
        {
            field: 'stock',
            headerName: 'Stock',
            width: 300,
            editable: true,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 150,
            editable: true,
        },
        {
            field: 'price',
            headerName: 'Price',
            sortable: false,
            width: 180,
        },
        {
            field: 'action',
            headerName: 'Action',
            sortable: false,
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"product/" + params.row.id}>
                            <button className="productListEdit">Edit</button>
                        </Link>

                        <DeleteOutline className='actionIcon' onClick={() => handleDelete(params.row.id)} />
                    </>
                )
            }
        },
    ];


    return (
        <div className='productList'>

            <DataGrid
                rows={product}
                columns={columns}
                pageSize={10}
                checkboxSelection
                disableSelectionOnClick
            />

        </div>
    )
}
