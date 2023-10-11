import axios from 'axios';
import { useEffect, useState } from 'react';

// eslint-disable-next-line react/prop-types
function Protect({Token}){
    const [data,setdata] = useState('')
    const getdocument = async () => {
        const config = {
            headers: {
                authorization: 'Bearer '+Token
            }
        }
        const res = await axios.get('http://localhost:5000/api/v1',config)
        setdata(res.data.data)
        console.log(res)
    }
    useEffect(() => {
        console.log("Token",Token)
        return () => {
            getdocument()

        }
    },[])
    return(
        <>
            <div>
                {
                    data && data.length > 0 ? 
                    data.map((d,idx) => {
                        return(
                            <div key={idx}>
                                <a href="">{d}</a>
                            </div>
                        )
                    }) : ''
                }
            </div>
        </>
    )
}

export default Protect;