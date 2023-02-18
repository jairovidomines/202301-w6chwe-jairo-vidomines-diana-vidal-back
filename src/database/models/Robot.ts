import { model, Schema } from "mongoose";

const robotSchema = new Schema({
  id: String,
  name: String,
  image: String,
  speed: String,
  endurance: String,
  creationDate: String,
});

const Robot = model("Robot", robotSchema, "robots");

export default Robot;
