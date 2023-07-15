import app from "./config/app";
const SERVER_PORT = process.env.SERVER_PORT ?? 3000;

app.listen(SERVER_PORT, () => {
  console.log(SERVER_PORT, "Server is running");
});