import Company from "../models/Company.js";

//Register a new company
export const registerCompany = async (req,res) => {

  const {name,email,password} = req.body

    const imageFile = req.file;

    if (!name || !email || !password || !imageFile ) {
        return res.json({success:false, message: "Missing Details"})
    }

    try {

        const companyExists = await Company
        
    } catch (error) {
        
    }

}

//Company login
export const loginCompany =async () => {

}

//Get company data
export const getCompanyData = async (req,res) => {

}

//Post a new job
export const postJob = async (req,res) => {

}

//Get company Job Applicants
export const getCompanyJobApplicants = async (req,res) => {

}

//Get Company Posted Jobs
export const getCompanyPostedJobs = async (req,res) => {

}

//Change Job Application status
export const ChangeJobApplicationsStatus = async (req,res) => {

}

//change job visability
export const changeVisiblity = async (req,res) => {

}