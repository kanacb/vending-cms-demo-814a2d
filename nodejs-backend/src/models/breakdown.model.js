module.exports = function (app) {
  const modelName = "breakdown";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      opsCentreId: {
        type: String,
        unique: false,
        lowercase: false,
        default: "",
      },
      locationId: { type: Schema.Types.ObjectId, ref: "locationMaster" },
      visitDate: { type: Date },
      reportDate: { type: Date },
      reasonForBreakdown: {
        type: String,
        unique: false,
        lowercase: false,
        default: "",
      },
      technicianRemark: {
        type: String,
        unique: false,
        lowercase: false,
        default: "",
      },
      condition: { type: String, enum: ["GOOD", "BAD"] },
      machineId: { type: Schema.Types.ObjectId, ref: "machineMaster" },
      technicianId: { type: Schema.Types.ObjectId, ref: "users" },

      createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
      updatedBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
    },
    {
      timestamps: true,
    },
  );

  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
};
