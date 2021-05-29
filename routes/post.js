const express = require('express');
const postController = require('../controllers/post.controller');
const checkAuthMiddleware = require('../middleware/check-auth');

const router = express.Router();

router.get('/', postController.index);
router.post('/post',checkAuthMiddleware.checkAuth ,postController.save);
router.get('/all', postController.showAll);
router.get('/:id', postController.show);
router.patch('/update/:id',checkAuthMiddleware.checkAuth, postController.update);
router.delete('/delete/:id',checkAuthMiddleware.checkAuth, postController.delete);

module.exports = router;