// This code can be run in a separate script or MongoDB shell
const { MongoClient } = require('mongodb');

async function main() {
    const url = 'mongodb+srv://nicholaskwabenaamo:Lowkeymovement02@cluster.8wmqd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster';
    const client = new MongoClient(url);

    try {
        await client.connect();
        const database = client.db('professional_profile');
        const collection = database.collection('profile');


        const professionalData = {
            professionalName: "Nick Klaus",
            base64Image: "iVBORw0KGgoAAAANSUhEUgAAAAUA...",
            nameLink: {
                firstName: "Nicholas",
                url: "www.linkedin.com/in/nicholas-kwabena-amoako-b9aaba231"
            },
            primaryDescription: "Web Developer",
            workDescription1: "Experienced in JavaScript and Node.js.",
            workDescription2: "Passionate about building web applications.",
            linkTitleText: "Connect with me:",
            linkedInLink: {
                text: "LinkedIn",
                link: "www.linkedin.com/in/nicholas-kwabena-amoako-b9aaba231"
            },
            githubLink: {
                text: "GitHub",
                link: "https://github.com/nicklaus"
            },
            contactText: "Feel free to reach out!"
        };

        // Insert the sample data into the collection
        const result = await collection.insertOne(professionalData);
        console.log(`New listing created with the following id: ${result.insertedId}`);
    } catch (error) {
        console.error('Error inserting data:', error);
    } finally {
        await client.close();
    }
}

main().catch(console.error);
