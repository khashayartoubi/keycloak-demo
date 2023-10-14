const { default: axios } = require("axios");



class protectedRoutes {
    constructor() {
    }

        // GET TOKEN
        static async login(req,res) {
            try {
                const resp = await axios.post('http://localhost:8080/realms/myrealm/protocol/openid-connect/token',{
                client_id: 'myclient',
                client_secret: 'yfQEd2lD7yTB9Tes4PXc5t3AUpS9r2iW',
                grant_type: 'client_credentials',
                }, {
                headers: { 
                    "Content-Type": "application/x-www-form-urlencoded"
                }
                })
                res.josn(resp.data)
            } catch (error) {
                res.send(error)
            }
        
    }

        // CREATE NEW USER
        static async user(req,res) {
            try {
                const resp = await axios.post('http://localhost:8080/admin/realms/myrealm/users',req.body,{
                headers: {
                    "Authorization" : req.headers['authorization']
                }
            })
            res.send(resp.data)    
        } catch (error) {
            res.send(error)
        }
    }

        // GET LIST OF USERS
        static async userInfo(req,res) {
            try {
                const resp = await axios.get('http://localhost:8080/admin/realms/myrealm/users',{
                headers: {
                    "Authorization" : req.headers['authorization']
                }
            })
            res.send(resp.data)    
        } catch (error) {
            res.send(error)
        }
    }

        // GET LIST OF USERS BY ID
        static async getuser(req,res) {
            console.log(req.query)
            try {
                const resp = await axios.get(`http://localhost:8080/admin/realms/myrealm/users/${req.query.id}`,{
                headers: {
                    "Authorization" : req.headers['authorization']
                }
            })
            res.send(resp.data)    
        } catch (error) {
            res.send(error)
        }
    }

        // GET ROLE OF USERS BY ID
        static async getUserRole(req,res) {
            console.log(req.query)
            try {
                const resp = await axios.get(`http://localhost:8080/admin/realms/myrealm/users/${req.query.id}/role-mappings/realm`,{
                headers: {
                    "Authorization" : req.headers['authorization']
                }
            })
            res.send(resp.data)    
        } catch (error) {
            res.send(error)
        }
    }

         // GET ROLE OF USERS BY ID
         static async addRole(req,res) {
            console.log(req.query)
            try {
                const resp = await axios.post(`http://localhost:8080/admin/realms/myrealm/users/${req.query.id}/role-mappings/realm`
                ,
                req.body
                ,{
                headers: {
                    "Authorization" : req.headers['authorization']
                }
            })
            res.send(resp.data)    
        } catch (error) {
            res.send(error)
        }
    }
}
module.exports = protectedRoutes;