import React, {useState,useEffect} from 'react';
export default function Api(){
const uselist=()=>{
    const[users,setUsers]=useState([]);

    useEffect(()=>{
        fetch('apiEndpoint')
        .then(response=response.json())
        .then(data=setUsers(data))
        .catch (error=>console.error('Error fetching users:error'));
    },[]);
    return(
    
    );
}
export default 
