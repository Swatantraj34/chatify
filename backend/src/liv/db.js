import mongoose  from "mongoose";
export const mongodb = async()=>{
try{
  const conn = mongoose.connect(process.env.MONGO_URI);
  console.log("data base is connected");
}catch(err){
    console.log("there is an error",err);

}

}