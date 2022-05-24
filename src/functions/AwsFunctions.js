// import * as AWS from 'aws-sdk';
// import { DynamoDBClient, QueryCommand } from 'aws-sdk'
// import { DynamoDBClient, QueryCommand } from "@aws-sdk/client-dynamodb";
// import { DynamoDBClient, QueryCommand } from 'aws-sdk'


// const region = "us-west-2";
// const secretAccessKey = process.env.REACT_APP_AWS_SECRET_KEY;
// const accessKeyId = process.env.REACT_APP_AWS_ACCESS_KEY;

// const ddbClient = new DynamoDBClient({
//     region: region,
//     secretAccessKey: secretAccessKey,
//     accessKeyId: accessKeyId,
//     sessionToken: 'session',
// });

// const params = {
//     ProjectionExpression: "Location",
//     TableName: "Pins1",
// };

// export const run = async () => {
//     try {
//       const data = await ddbClient.send(new QueryCommand(params));
//       data.Items.forEach(function (element, index, array) {
//         console.log(element.Location);
//       });
//       return data;
//     } catch (err) {
//       console.error(err);
//     }
//   };
//   run();

// const configuration = {
//     region: "us-west-1",
//     secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY,
//     accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
//   };
  
// AWS.config.update(configuration);

// const docClient = new AWS.DynamoDB.DocumentClient()
// export const fetchData = () => {
//     var params = {
//         TableName: "Pins"
//     }

//     docClient.scan(params, function (err, data) {
//         if (!err) {
//             console.log(data)
//             return data;
//         }
//         else{
//             console.log(err);
//         };
//     });
// };