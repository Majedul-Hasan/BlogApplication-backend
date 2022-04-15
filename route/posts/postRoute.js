const express = require('express')
const { 
    createPostCtrl,
    fetchPostsCtrl,
    fetchPostCtrl,
    updatePostCtrl,
    deletePostCtrl,
    toggleLikesToPostCtrl,
    toggleDislikesToPostCtrl
    } = require('../../controllers/posts/PostCtrl')

const authMiddleWare = require('../../middlewares/authMiddleware')
const { postImageResize, photoUpload } = require('../../middlewares/photoUpload')


const postRoutes = express.Router()

postRoutes.put('/likes', authMiddleWare,  toggleLikesToPostCtrl )
postRoutes.put('/dislikes', authMiddleWare,  toggleDislikesToPostCtrl )
postRoutes.post('/', authMiddleWare, photoUpload.single('image'), postImageResize, createPostCtrl )
postRoutes.get('/',  fetchPostsCtrl )
postRoutes.get('/:id',  fetchPostCtrl )
postRoutes.put('/:id', authMiddleWare,  updatePostCtrl )

postRoutes.delete('/:id', authMiddleWare,  deletePostCtrl )






module.exports = postRoutes