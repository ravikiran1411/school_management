
import db from "../config/mysql.js";

const addSchoolController = (req,res) => {
    try {
        
        const {name,address,latitude,longitude} = req.body;

        if (!name || !address || !latitude || !longitude) {
            return res.json({success:false,message:"required all fields."})
        }

        if (isNaN(latitude) || isNaN(longitude)) {
            return res.json({success:false,message:"longitude & latitude must be in Number format"})
        }

        const query = "INSERT INTO SCHOOLS (name,address,latitude,longitude) VALUES (?,?,?,?)"

        db.query(query,[name,address,latitude,longitude],(err,results)=>{
            if (err) {
                console.log(err.message);
                return res.json({success:false,message:"DATABASE ERROR"})
            }
            
            res.json({success:true,message:"school added to database"});
        })

    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
    }
}

export {addSchoolController};