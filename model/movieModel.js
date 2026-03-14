import  { model, Schema } from "mongoose";

const schema = new Schema({
    title:{
        type:String,
        required: true,
        unique: true
    },
    desc:{
         type:String,
        rquired:true,
    }
})

const Movie = model('Movie', schema)

export default Movie;