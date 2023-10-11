import express from 'express';
import bearerHeader from '../middleware/authorization.js';
const router = express.Router();


let data = ['admin1','admin2','public1','public2']
function getdocument(req,res) {
    try {
        res.status(200).json({data: data})
    } catch (error) {
        console.log(error);
    }
}
function getAdmin(req,res) {
    try {
        res.status(200).json({data: data})
    } catch (error) {
        console.log(error);
    }
}
function getPublic(req,res) {
    try {
        res.status(200).json({data: data})
    } catch (error) {
        console.log(error);
    }
}
router.get('/',getdocument)
router.get('/admin1',bearerHeader,getAdmin)
router.get('/admin2',bearerHeader,getAdmin)
router.get('/public1',getPublic)
router.get('/public2',getPublic)

export default router;