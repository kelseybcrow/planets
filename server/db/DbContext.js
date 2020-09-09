import PlanetSchema from "../models/Planet";
import mongoose from "mongoose";

class DbContext {
  Planets = mongoose.model("Value", PlanetSchema);
}

export const dbContext = new DbContext();
