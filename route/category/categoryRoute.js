const  express = require('express')
const { 
    categoryCtrl,
    fetchAllCategoryCtrl,
    fetchCategoryCtrl,
    updateCategoryCtrl,
    deleteCategoryCtrl

     } = require('../../controllers/category/categoryCtrl')
const authMiddleWare = require('../../middlewares/authMiddleware')




const categoryRoutes = express.Router()


categoryRoutes.post('/',authMiddleWare ,  categoryCtrl)
categoryRoutes.get('/',  fetchAllCategoryCtrl)
categoryRoutes.get('/:id',authMiddleWare ,  fetchCategoryCtrl)
categoryRoutes.put('/:id',authMiddleWare , updateCategoryCtrl )
categoryRoutes.delete('/:id',authMiddleWare , deleteCategoryCtrl )





module.exports = categoryRoutes