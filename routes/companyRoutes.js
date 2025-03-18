import express from 'express'
import { ChangeJobApplicationsStatus,  changeVisiblity, getCompanyData, getCompanyJobApplicants, getCompanyPostedJobs, loginCompany,postJob,registerCompany } from '../controllers/companyController'
import upload from '../config/multer'

const router = express.Router()

//register a company 
router.post('/register',upload.single('image'), registerCompany)

// Company login
router.post('/login',loginCompany)

//Get company data
router.get('/company',getCompanyData)

//Post a job
router.post('/post-jon',postJob)

// Get Applicants Data of Company
router.get('/applicants',getCompanyJobApplicants)

// Get company job list 
router.get('/list-jobs',getCompanyPostedJobs)

// change application status
router.post('/change-status',ChangeJobApplicationsStatus)

// Change applications Visibility
router.post('/change-visiblity', changeVisiblity)

export default router
