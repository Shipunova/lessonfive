const Router = require('express')
const router = new Router() 
const articleController = require('../controllers/articleController')
const checkRole = require('../middleware/CheckRoleMiddleware')

router.post('/', checkRole('ADMIN'), articleController.postArticle)
router.get('/', articleController.getArticles)
router.get('/:id', articleController.getOneArticle)

module.exports = router 