import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Github()
{
    const [data,setData] = useState([]);
    useEffect(()=>
    {
        fetch("https://api.github.com/users/unadkat7")
        .then(res=>res.json())
        .then(data=>
        {
            
            setData(data)
        })
    

    },[]);
    return(
        <div>
        <div className="text-3xl  text-center m-4 bg-gray-600 text-white p-4">Github Name : {data.login}
            <br />
            Repos =  {data.public_repos} <br />
            {/* <Link className="text-blue text-underline" to="https://github.com/unadkat7"> Go to Unadkat7 Page</Link> */}
            <img className="w-40 flex items-center"src={data.avatar_url} alt="GitPro" />
        </div>
        <div>
        <Link className="text-blue" to="https://github.com/unadkat7"> Go to Unadkat7 Page</Link>
        </div>
        </div>
    );

}

export default Github;