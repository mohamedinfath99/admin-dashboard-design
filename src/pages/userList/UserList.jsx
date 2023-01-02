import React, { useState } from 'react';
import './UserList.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { userRows } from '../../dummyData';
import { Link } from "react-router-dom";




export default function UserList() {

    const [ data, setData] = useState(userRows)

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id))
    }

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 100
        },
        {
            field: 'username',
            headerName: 'Username',
            width: 250,
            sortable: false,
            renderCell: (params) => {
                return (
                    <div className='userListUSer'>
                        <img src={params.row.avatar} alt="" className='userListImg' />
                        {params.row.username}
                    </div>
                )
            }
        },
        {
            field: 'email',
            headerName: 'Gmail',
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
            field: 'transaction',
            headerName: 'Transaction',
            sortable: false,
            width: 180,
        },
        {
            field: 'action',
            headerName: 'Action',
            sortable: false,
            width: 180,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"user/" + params.row.id}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutline className='actionIcon' onClick={() => handleDelete(params.row.id)}/>
                    </>
                )
            }
        },
    ];


    return (
        <div className='UserList'>

            <DataGrid
                rows={data}
                columns={columns}
                pageSize={10}
                checkboxSelection
                disableSelectionOnClick
            />

        </div>
    )
}
