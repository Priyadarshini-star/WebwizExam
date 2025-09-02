import React, {useState,useEffect} from 'react';

export default function button(){

    const uselist=()=>{
        const[users,setUsers]=useState([]);
    
        useEffect(()=>{
            fetch('apiEndpoint')
            .then(response=response.json())
            .then(data=setUsers(data))
            .catch (error=>console.error('Error fetching users:error'));
        },[]);

        function dosomething(){
    console.log("button was clicked");
}



    return(
        <div>
            <button onClick={dosomething}>search for a user...</button>
        


        </div>
    );
}