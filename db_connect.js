const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/wd1pmapril24-crud")
// mongoose.connect("mongodb://127.0.0.1:27017/wd1pmapril24-crud")

.then(()=>{
    console.log("Database is Connected")
})
.catch((error)=>{
    console.log(error);
})


// 2nd Method>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const mongoose=require("mongoose")
// async function getConnect(){
//     try {
//         // await mongoose.connect("mongodb://localhost:27017/wd1pmapril24-crud")
//         await mongoose.connect("mongodb://127.0.0.1:27017/wd1pmapril24-crud")
//         console.log("Database is Connect")
//     } catch (error) {
//         console.log(error)
//     }
// }
// getConnect()