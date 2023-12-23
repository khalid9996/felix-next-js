import mongoose, { model, models } from "mongoose";

const { Schema } = mongoose;

const adminSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export const AdminAuthModel =
  models.AdminAuthCollection || model("AdminAuthCollection", adminSchema);
