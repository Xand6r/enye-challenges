import React, { Component } from 'react'
import { Table } from 'antd';
import { useSelector } from 'react-redux'



export default function DetailTable (props){
  
  // get the user's details from the store
  const details=useSelector(state=>state.details)

  return (

      <Table 
        style={tableStyle}
        columns={columns} 
        dataSource={details} 
        onChange={onChange} 
      />
      
  )
    
}

// column names and details for the table
const columns = [
  {
    title: 'firstName',
    dataIndex: 'firstName',
    // specify the condition of filtering result
    sorter: (a, b) => a.firstName.length - b.firstName.length,
    sortDirections: ['descend','ascend'],
  },
  {
    title: 'lastName',
    dataIndex: 'lastName',
    // specify the condition of filtering result
    sorter: (a, b) => a.lastName.length - b.lastName.length,
    sortDirections: ['descend','ascend'],
  },
  {
    title: 'age',
    dataIndex: 'age',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'dateOfBirth',
    dataIndex: 'dateOfBirth',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.dateOfBirth - b.dateOfBirth,
  },
  {
    title: 'hobbies',
    dataIndex: 'hobbies',
    sorter: (a, b) => a.hobbies.length - b.hobbies.length,
    sortDirections: ['descend', 'ascend'],
  },
];

// css styles for the table
const tableStyle={
    width:"80%",
    background:"white",
    margin:"120px auto"
}

function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}

