import mongoose from "mongoose";

const courseCollection = "courses";

const coursesSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  teacher: {
    type: String,
    required: true,
  },
  students: {
    type: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Users",
      },
    ],
    default: [],
  },
});

/*coursesSchema.pre("find", function () {
  this.populate("Users.courses");
});*/

const coursesModel = mongoose.model(courseCollection, coursesSchema);
export default coursesModel;
