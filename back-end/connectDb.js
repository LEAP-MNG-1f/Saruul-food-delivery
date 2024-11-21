import { MongoClient } from "mongodb"

const connectionString = "mongodb+srv://saruultumed11:ntlSVQ7OJxT9xRiH@clustersaruul.c6pcm.mongodb.net/"

const connectionDb = async () => {
    const client = new MongoClient(connectionString)

    let connection;

    try{
        connection = await client.connect()
    } catch (e){
        console.log("failed to connect db");
    }
    const db = connection.db("sample_mflix")
    return db
}
export default connectionDb