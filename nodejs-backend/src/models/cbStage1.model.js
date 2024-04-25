module.exports = function (app) {
  const modelName = "cb_stage_1";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      Ref: { type: Schema.Types.ObjectId, ref: "cBMasterForm" },
      ExternalBody: {
        type: String,
        required: true,
        enum: ["AV", "GOOD", "XAV", "XGOOD"],
      },
      InternalBody: {
        type: String,
        required: true,
        enum: ["AV", "GOOD", "XAV", "XGOOD"],
      },
      DisplayPanel: {
        type: String,
        required: true,
        enum: ["AV", "GOOD", "XAV", "XGOOD"],
      },
      DoorHandle: {
        type: String,
        required: true,
        enum: ["AV", "GOOD", "XAV", "XGOOD"],
      },
      CoinReturnLever: {
        type: String,
        required: true,
        enum: ["AV", "GOOD", "XAV", "XGOOD"],
      },
      CoinReturnPocket: {
        type: String,
        required: true,
        enum: ["AV", "GOOD", "XAV", "XGOOD"],
      },
      DeliveryDoorFlap: {
        type: String,
        required: true,
        enum: ["AV", "GOOD", "XAV", "XGOOD"],
      },
      SecDoorPanel: {
        type: String,
        required: true,
        enum: ["AV", "GOOD", "XAV", "XGOOD"],
      },
      SecDoorFlap: {
        type: String,
        required: true,
        enum: ["AV", "GOOD", "XAV", "XGOOD"],
      },
      ColumnStnd: {
        type: String,
        required: true,
        enum: ["AV", "GOOD", "XAV", "XGOOD"],
      },
      ColumnMod: {
        type: String,
        required: true,
        enum: ["AV", "GOOD", "XAV", "XGOOD"],
      },
      ColumnFlipper: {
        type: String,
        required: true,
        enum: ["AV", "GOOD", "XAV", "XGOOD"],
      },
      ProductChute: {
        type: String,
        required: true,
        enum: ["AV", "GOOD", "XAV", "XGOOD"],
      },
      MachineMaintenance: {
        type: String,
        required: false,
        enum: ["AV", "GOOD", "XAV", "XGOOD"],
      },
      PSUBoard: {
        type: String,
        required: true,
        enum: ["AV", "GOOD", "XAV", "XGOOD"],
      },
      VendBoard: {
        type: String,
        required: true,
        enum: ["AV", "GOOD", "XAV", "XGOOD"],
      },
      RelaySupply: {
        type: String,
        required: true,
        enum: ["AV", "GOOD", "XAV", "XGOOD"],
      },
      MemoryBoard: {
        type: String,
        required: true,
        enum: ["AV", "GOOD", "XAV", "XGOOD"],
      },
      Remote: {
        type: String,
        required: true,
        enum: ["AV", "GOOD", "XAV", "XGOOD"],
      },
      Compressor: {
        type: String,
        required: true,
        enum: ["AV", "GOOD", "XAV", "XGOOD"],
      },
      CoolingFan: {
        type: String,
        required: true,
        enum: ["AV", "GOOD", "XAV", "XGOOD"],
      },
      Wiring: {
        type: String,
        required: true,
        enum: ["AV", "GOOD", "XAV", "XGOOD"],
      },
      Motor: {
        type: String,
        required: true,
        enum: ["AV", "GOOD", "XAV", "XGOOD"],
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
