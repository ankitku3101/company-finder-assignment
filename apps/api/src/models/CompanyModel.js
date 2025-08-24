import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  industry: { type: String, required: true },
  location: { type: String, required: true },
  size: { type: Number },
  foundedYear: { type: Number },
  isHiring: { type: Boolean, default: false },
  domain: { type: String },
  rating: { type: Number, min: 0, max: 5 },
}, { timestamps: true });

const Company = mongoose.model("Company", companySchema);

export default Company;
