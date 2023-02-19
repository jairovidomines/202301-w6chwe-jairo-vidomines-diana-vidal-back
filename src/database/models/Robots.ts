import { model, Schema } from "mongoose";

const robotSchema = new Schema({
  id: String,
  name: String,
  image: String,
  stats: {
    speed: String,
    endurance: String,
    creationDate: Date,
  },
});

const Robot = model("Robot", robotSchema, "robots");

export default Robot;
