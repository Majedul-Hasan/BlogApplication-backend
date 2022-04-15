const express = require('express')
const { sendEmailMsgCtrl } = require('../../controllers/emailMsg/sendEmail.Ctrl')
const authMiddleWare = require('../../middlewares/authMiddleware')




const emailRoutes = express.Router()

emailRoutes.post('/',authMiddleWare, sendEmailMsgCtrl)


module.exports= emailRoutes