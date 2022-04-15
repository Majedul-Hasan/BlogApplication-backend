const express = require('express')

const { 
    createCommentCtrl, 
    fetchAllCommentsCtrl,
    fetchCommentCtrl,
    updateCommentCtrl,
    deleteCommentCtrl
    
     } = require('../../controllers/comments/commentCtrl')

const authMiddleWare = require('../../middlewares/authMiddleware')





const commentRoutes = express.Router()

commentRoutes.post('/',authMiddleWare, createCommentCtrl )
commentRoutes.get('/', fetchAllCommentsCtrl )
commentRoutes.get('/:id',authMiddleWare, fetchCommentCtrl )
commentRoutes.put('/:id',authMiddleWare, updateCommentCtrl )
commentRoutes.delete('/:id',authMiddleWare, deleteCommentCtrl )





module.exports = commentRoutes