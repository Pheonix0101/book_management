console.log("running app.ts");
import express from "express";
import bodyParser from "body-parser";

import "./config/database_connection";
import bookroute from "./routes/book";

const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 9000;
const app: express.Application = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(bookroute);

// app.on('error', (err: any) => {
//   console.error("Error while establishing server connection", err);
// });

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});


