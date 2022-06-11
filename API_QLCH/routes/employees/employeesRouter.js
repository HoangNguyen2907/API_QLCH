const {Router} = require('express');
const router = Router();

const employeesController = require('./employeesController')

router.get('/:id/require', employeesController.jobrequire)
router.get('/:id/suggest', employeesController.Jobsuggest)
router.put('/:id/suggest/accept/:contractID', employeesController.accept)
router.post('/:id/require/:storeID',employeesController.sendRequire)
module.exports = router;  