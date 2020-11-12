const Router = require('@koa/router');
const { AuthController } = require('../controllers');

const router = new Router;

router.post('/auth/login', AuthController.login);
router.get('/auth/register', AuthController.register);
router.get('/auth/forget', AuthController.forget);

module.exports = router;
