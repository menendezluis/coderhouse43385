import mongoose from "mongoose";

const studentCollection = "students";

const studentSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  gender: String,
  courses: {
    type: [
      {
        course: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "courses",
        },
      },
    ],
    default: [],
  },
});

studentSchema.pre("find", function () {
  this.populate("courses.course");
});

studentSchema.pre("findOne", function () {
  this.populate("courses.course");
});

export const studentModel = mongoose.model(studentCollection, studentSchema);
