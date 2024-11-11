import express from "express";
import user from "./userRoutes";

const server = express();

server.use("/user", user);

export default server;
