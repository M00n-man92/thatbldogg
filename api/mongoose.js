const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config();
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{console.log('connected')}).catch(e=>{console.log('an error'+e)})
