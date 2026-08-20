import mongoose, { Schema } from "mongoose";

export interface ICompnay {
  name: string;
  positiveCount: number;
  negativeCount: number;
  neutralCount: number;
  totalReviwes: number;
  reviews: mongoose.Types.ObjectId[];
}

const companySchema = new Schema<ICompnay>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    positiveCount: {
      type: Number,
      default: 0,
    },
    negativeCount: {
      type: Number,
      default: 0,
    },
    neutralCount: {
      type: Number,
      default: 0,
    },
    totalReviwes: {
      type: Number,
      default: 0,
    },
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: "Story",
      },
    ],
  },
  {
    timestamps: true,
  },
);

const Company =
  mongoose.models.Company || mongoose.model<ICompnay>("Company", companySchema);

export { Company };
