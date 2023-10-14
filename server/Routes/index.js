

const express = require('express');
const protectedRoutes = require('./Protected');
const Keycloak = require('keycloak-connect');
const router = express.Router()
var keycloakConfig ={
    "realm": "myrealm",
    "auth-server-url": "http://localhost:8080",
    "ssl-required": "external",
    "resource": "myclient",
    "public-client": true,
    "confidential-port": 0
  }
  var keycloak = new Keycloak({},keycloakConfig);
router.use( keycloak.middleware( { logout: '/logout'} ));
  
router.get('/login', protectedRoutes.login);
router.post('/user', keycloak.protect() , protectedRoutes.user);
router.get('/usersInfo', keycloak.protect() , protectedRoutes.userInfo);
router.get('/getuser?:id', keycloak.protect() , protectedRoutes.getuser);
router.get('/role?:id', keycloak.protect() , protectedRoutes.getUserRole);
router.post('/addRole?:id', keycloak.protect() , protectedRoutes.addRole);


module.exports = router;
