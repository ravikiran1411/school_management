
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

        const query = "INSERT INTO schools (name,address,latitude,longitude) VALUES (?,?,?,?)"

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

const listSchoolController = (req,res) =>{
    try {
        
        const {lat1,long1} = req.query;

        if (!lat1 || !long1) {
            return res.json({success:false,message:"required both latitude and longitude.."})
        }

        if (isNaN(lat1) || isNaN(long1)) {
            return res.json({success:false,message:"give both latitude & longitude in number format.."})
        }

        const query = "select * from schools"

        db.query(query,(err,schools)=>{
            if (err) {
                console.log(err.message);
                
                return res.json({success:false,message:"database issue.."})
            }

            const getDistance = (lat1,long1,lat2,long2) => {

                const Radius= 6371;

                const dlat = (lat2-lat1)*Math.PI / 180;
                const dlong = (long2-long1)*Math.PI / 180;

                const a = Math.sin(dlat/2) * Math.sin(dlat/2) + 
                Math.cos((lat1*Math.PI)/180) * 
                Math.cos((lat2*Math.PI)/180)*
                Math.sin(dlong/2) * Math.sin(dlong/2);
                
                const c = 2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));

                return Radius * c

            };
            
            const sortSchool = schools.map((school)=>{
                const distance = getDistance(parseFloat(lat1),parseFloat(long1),school.latitude,school.longitude);

                return {...school,distance:Number(distance.toFixed(2))}

            });

            sortSchool.sort((a,b)=>a.distance-b.distance)

            res.json({success:true,sortSchool})

        })


    } catch (error) {
        console.log(error.message);
        res.json({success:false,message:error.message})
    }
}


export {addSchoolController,listSchoolController};