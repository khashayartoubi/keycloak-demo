
import jwt from 'jsonwebtoken';


const bearerHeader = (req,res,next) => {
    const bearerToken = req.headers['authorization'];   
    if (typeof bearerToken === 'undefined') {
        return res.status(403).json({
            message: 'No token provided'
        });
    }

    const secret = `-----BEGIN PUBLIC KEY-----\n${process.env.JWT_KEY}\n-----END PUBLIC KEY-----`
    const token = bearerToken.split(' ')[1];
    console.log(secret)
    const verifyToken = jwt.verify(token, secret)
    console.log("verifyToken",verifyToken)
    next();
}

export default bearerHeader;