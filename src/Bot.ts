//get the .env file and set the token
require("dotenv").config();
import { Client, ClientOptions } from "discord.js";
import ready from "./listeners/ready";
import interactionCreate from "./listeners/interactionCreate";
import { Command } from "./Command";

console.log("Bot is starting...");

const client = new Client({
    intents: []
});

ready(client);
interactionCreate(client);

//login via .env file
client.login(process.env.TOKEN);