import  express  from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const configuration = new Configuration({
    apiKey:process.env.OpenAIApi
})

const openai =new OpenAIApi(configuration);

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', async(req,res)=>{
    res.status(200).send({
        message: 'Hola Mundo'
    })
});

app.listen(3000, ()=> console.log("Servidor corriendo en http://localhost:3000"));