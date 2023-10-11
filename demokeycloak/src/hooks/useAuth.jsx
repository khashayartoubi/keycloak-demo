/* eslint-disable no-unused-vars */
import {  useEffect, useRef, useState } from "react"
import Keycloak from 'keycloak-js';


const client = new Keycloak({
    url: 'http://localhost:8180',
    realm: 'myrealm',
    clientId: 'myclient',
})

const useAuth = () => {
    const isRunn = useRef(false)
    const [isLogin,setLogin] = useState(false);
    const [token,setToken] = useState(null);
    
    useEffect(() => {
        if(isRunn.current == true){
            return
        }
        client.init({ onLoad: 'login-required' }).then(authenticated => {
            console.log('authenticated',authenticated)
            setLogin(authenticated);
            setToken(client.token)
            isRunn.current = true  

        }).catch(error => {
            console.log("error",error);
            setLogin(false);

        })
        isRunn.current = true
        
    },[])
    return [isLogin,token]
}
export default useAuth;