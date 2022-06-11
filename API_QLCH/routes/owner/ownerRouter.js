const {Router} = require('express');
const router = Router();
const ownerController = require('./ownerController')

router.get('/:ownerID/store', ownerController.getAllStore)
router.post('/createStore/:ownerID', ownerController.NewStore)
router.get('/:ownerID/store/:storeID', ownerController.getEmployee)
router.get('/:ownerID/jobrequire', ownerController.getJobrequire)
router.put('/accept/:contractID', ownerController.acceptRequire)
router.get('/search', ownerController.searchByPhone)
router.post('/:storeID/suggest/:employeesID', ownerController.Jobsuggest)
router.delete('/terminate/:contractID', ownerController.terminateContract)

module.exports = router