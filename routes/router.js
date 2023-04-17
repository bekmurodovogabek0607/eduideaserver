const express=require('express')


const { PostDemoCenter, GetDemoCenter, DeleteDemoCenter } = require('../controller/DemoCenterControllor')
const { UploadFileFunc } = require('../controller/fileUpload')
const { DownloadFile } = require('../controller/fileDownload')
const { PostCenter, GetCenter, UpdateCenter, DeleteCenter, GetCenterOne } = require('../controller/Centers')
const { PsotKategoriya, GetKategoriya, DeleteKategoriya, UpdateKategoriya } = require('../controller/Kategoriya')
const { PsotDaraja, GetDaraja, DeleteDaraja, UpdateDaraja } = require('../controller/Daraja')
const { PsotFan, GetFan, DeleteFan, UpdateFan } = require('../controller/Fan')
const { PsotAdmin, GetAdmin, UpdateAdmin, DeleteAdmin } = require('../controller/Admin')
const { PostGroups, GetCenterGroups } = require('../controller/Group')
const { PsotLanguage, GetLanguage, DeleteLanguage, UpdateLanguage } = require('../controller/Language')
const { PostStudent, GetStudent } = require('../controller/Student')


const router=express.Router()


//========================================File UPload===================
router.post('/fileuploadtest',UploadFileFunc)
router.post('/download',DownloadFile)

//--------------------------------------------Bu yerdan Yangi Learning Center Ketgan Azizlar-------------

router.post('/democenter',PostDemoCenter)
router.get('/democenter',GetDemoCenter)
router.delete('/democenter/:id',DeleteDemoCenter)

//=============================================  BU  center malumolari================

router.post('/center',PostCenter)
router.post('/centerone',GetCenterOne)
router.get('/center',GetCenter)
router.put('/center/:id',UpdateCenter)
router.delete('center/:id',DeleteCenter)

//============================================BU yerda  kategoriyalar ===============================

router.post('/categories',PsotKategoriya)
router.get('/categories',GetKategoriya)
router.delete('/categories/:id',DeleteKategoriya)
router.put('/categories/:id',UpdateKategoriya)

//=============================================  Bu yerda darajalar=====================================
router.post('/daraja',PsotDaraja)
router.get('/daraja',GetDaraja)
router.delete('/daraja/:id',DeleteDaraja)
router.put('/daraja/:id',UpdateDaraja)
//=============================================  Bu yerda Fanlar=====================================
router.post('/fan',PsotFan)
router.get('/fan',GetFan)
router.delete('/fan/:id',DeleteFan)
router.put('/fan/:id',UpdateFan)

//============================================= bu yerda Tillar==========================================
router.post('/til',PsotLanguage)
router.get('/til',GetLanguage)
router.delete('/til/:id',DeleteLanguage)
router.put('/til/:id',UpdateLanguage)
//=============================================BU yerda Adminlar ==========================================

router.post('/admin',PsotAdmin)
router.get('/admin',GetAdmin)
router.put('/admin/:id',UpdateAdmin)
router.delete('/admin/:id',DeleteAdmin)
//=============================================BU yerda Groups ==========================================


router.post('/addgroups',PostGroups)
router.get('/centergroup/:id',GetCenterGroups)


//============================================== BU yerda Studentlar ======================================

router.post('/student',PostStudent)
router.get('/student/:id',GetStudent)


module.exports={routes:router}