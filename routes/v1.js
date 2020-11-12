const Router = require('@koa/router');
const { GuideController } = require('../controllers');

const router = new Router;

router.post('/guide', GuideController.create);
router.get('/guide', GuideController.list);
router.get('/guide/:id', GuideController.get);

module.exports = router;
