module.exports = function (app) {
  const modelName = "cb_master_form";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      RefNo: { type: String, required: true, unique: true, lowercase: false },
      Model: { type: String, required: true, unique: false, lowercase: false },
      SerialNo: {
        type: String,
        required: true,
        unique: false,
        lowercase: false,
      },
      ManuYear: {
        type: String,
        required: true,
        unique: false,
        lowercase: false,
      },
      Branch: { type: String, required: true, unique: false, lowercase: false },
      DateInspec: { type: Date, required: false },
      DateRecall: { type: Date },
      RecallLoc: {
        type: String,
        required: true,
        unique: false,
        lowercase: false,
      },

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
