import { Webhook } from "svix";
import User from "../models/User.js";

//API Controller Function to Manage Clerk User With DataBase
export const clerkWebhooks = async (req,res) => {
    try {
        
        //Create a Svix instance with clerk webhook secret
        const whook = new Webhook (process.env.CLERK_WEBHOOK_SECRET)

        //Verifying Headers
        await whook.verify(JSON.stringify(req.body),{
            "svix-id": req.headers["svix-id"],
            "svix-timestamp" : req.header["svix-timestamp"],
            "svix-signature": req.headers[svix-signature]
        })

        //Getting data from request body
        const { data , type } = req.body

        //Switch Cases for different events
        switch (type) {
            case 'user.created':{

                const userData = {
                    _id:data.id,
                    email: data.email_adresses[0].email_adresses,
                    name : data.first_name + "" + data.last_name,
                    image: data.image+urlencoded,
                    resume:''
                }
                await User.create(userData)
                res.json({})
                break;
            }
                
            case 'user.updated':{
                const userData = {
                    email: data.email_adresses[0].email_adresses,
                    name : data.first_name + "" + data.last_name,
                    image: data.image+urlencoded,
                }
                await User.findbyIdAndUpdate(data.id, userData)
                res.json({})
                break;
            }
            
            case 'user.delete':{
                await User.findByIdAndDelete(data.id)
                res.json({})
                break;

            }
            default :
            break;
        }

    } catch (error) {
        console.log(error.message)
        res.json({success:false,message:'Webhooks '})
    }
}