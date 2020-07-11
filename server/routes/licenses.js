const express = require('express');
const router = express.Router();

const controller = require('../controllers/licenses')

router.get('/licenses', controller.listLicenses)

router.post('/licenses', controller.createLicense)

router.put('/licenses/delete', controller.deleteLicense)

module.exports = router;