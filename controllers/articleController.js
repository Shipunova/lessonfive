const ApiError = require('../error/ApiError');
const uuid = require('uuid')
const path = require('path')
const {Article} = require('../models/models')


class ArticleController {
    async postArticle(req, res, next) {
        try {
            const {title, text} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".png"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
    
            const article = await Article.create({title, text, img: fileName})
    
            return res.json(article)}
            catch (e){
                next(ApiError.badRequest(e.message))
            }
    }

    async getArticles(req, res) {
        const articles = await Article.findAll()
        return res.json(articles) 
    }

    async getOneArticle(req, res) {
        
    }

}

module.exports = new ArticleController()