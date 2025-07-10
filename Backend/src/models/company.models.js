import mongoose from "mongoose";


const companySchema = new mongoose.Schema(
    {
      companyId: {
        type: String,
        required: true,
        unique: true,
        default: generateCompanyId,
      },
      name: {
        type: String,
        required: true,
        trim: true,
      },
      companyCountry: {
        type: String,
        required: true,
        trim: true,
      },
      companyState: {
        type: String,
        required: true,
        trim: true,
      },
      companyAddress: {
        type: String,
        required: true,
        trim: true,
      },
      companyPinCode: {
        type: String,
        required: true,
        match: /^[1-9][0-9]{5}$/,
        trim: true,
      },
      companyRegistrationType: {
        type: String,
        required: true,
        enum: [
          "Not Registered",
          "Registered",
          "Company",
          "LLP",
          "Partnership",
          "Proprietorship",
          "Composition",
        ],
        default: "Not Registered",
      },
      companyRegistrationNumber: {
        type: String,
        required: true,
        trim: true,
      },
      companyGSTIN: {
        type: String,
        required: true,
        trim: true,
        match: /^([0-9]{2})([A-Z]{5}[0-9]{4}[A-Z]{1})([1-9A-Z]{1})(Z)([0-9A-Z]{1})$/,
      },
      companyPhone: {
        type: String,
        required: true,
        unique: true,
        match: /^[6-9]\d{9}$/, 
        trim: true,
      },
      companyAlternatePhone: {
        type: String,
        required: false,
        match: /^[6-9]\d{9}$/,
        trim: true,
      },
      companyEmail: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
      },
    },
    {
      timestamps: true,
    }
  );

export const Company = mongoose.model("Company", companySchema);
