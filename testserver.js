const { MongoClient } = require('mongodb');

async function access_database(newListing, searchKeyword, functionPurpose) {
    const uri = "mongodb+srv://mengstima:mengstima@cluster1.gdw1d.mongodb.net/test?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    try {
        await client.connect();
        console.log("Connected correctly to server");
        if (functionPurpose == "addToDiseaseList") {
            let isValueAlreadyExist = await access_database(newListing, searchKeyword, "searchDisease");
            if (isValueAlreadyExist) {
                console.log("Disease already exist");
                return false;
            } else {
                var result = await client.db("disease_db").collection("disease_list").insertOne(newListing);
                console.log(`New disease has been added with the following id: ${result.insertedId}`);
                return `New disease has been added with the following id: ${result.insertedId}`;
            }
        } else if (functionPurpose == "addToTestResults") {
            const result = await client.db("disease_db").collection("test_results").insertOne(newListing);
            console.log(`New listing created in test_results collections with the following id: ${result.insertedId}`);
            return `New listing created in test_results with the following id: ${result.insertedId}`;
        } else if (functionPurpose == "searchDisease") {
            // const result = await client.db("disease_db").collection("disease_list").findOne({ "disease_name": searchKeyword });
            // if (result) {
            //     console.log(`Search results: ${result['disease_code']}`);
            //     return result['disease_code'];
            // } else {
            //     console.log("No results found");
            //     return null;
            // }
            const result = await client.db("disease_db").collection("disease_list").findOne({ "disease_name": searchKeyword });
            return result['disease_code'];
        } else if (functionPurpose == "searchByDate") {
            const result = await client.db("disease_db").collection("test_results").find({ "test_date": searchKeyword }).toArray();
            return result;
        }
    } catch (e) {
        console.log(e.message);
    }
}

let var1 = access_database({}, "29-04-2022", "searchByDate");
console.log(var1);