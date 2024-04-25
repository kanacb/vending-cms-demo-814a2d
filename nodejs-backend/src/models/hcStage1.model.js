module.exports = function (app) {
  const modelName = "hc_stage_1";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      Ref: { type: Schema.Types.ObjectId, ref: "hCMasterForm" },
      ExternalBody: { type: String, enum: ["AV", "GOOD", "XAV", "XGOOD"] },
      InternalBody: { type: String, enum: ["AV", "GOOD", "XAV", "XGOOD"] },
      DisplayPanel: {
        type: String,
        required: false,
        enum: ["AV", "GOOD", "XAV", "XGOOD"],
      },
      DoorHandle: {
        type: String,
        required: false,
        enum: ["AV", "GOOD", "XAV", "XGOOD"],
      },
      CoinReturnLever: {
        type: String,
        required: false,
        enum: ["AV", "GOOD", "XAV", "XGOOD"],
      },
      CoinReturnPocket: {
        type: String,
        required: false,
        enum: ["AV", "GOOD", "XAV", "XGOOD"],
      },
      DeliveryDoorflap: {
        type: String,
        required: false,
        enum: ["AV", "GOOD", "XAV", "XGOOD"],
      },
      SelectorButton: {
        type: String,
        required: false,
        enum: ["AV", "GOOD", "XAV", "XGOOD"],
      },
      BodySticker: {
        type: String,
        required: false,
        enum: ["AV", "GOOD", "XAV", "XGOOD"],
      },
      ProductCanister: {
        type: String,
        required: false,
        enum: ["AV", "GOOD", "XAV", "XGOOD"],
      },
      Chute: {
        type: String,
        required: false,
        enum: ["AV", "GOOD", "XAV", "XGOOD"],
      },
      Tube: {
        type: String,
        required: false,
        enum: ["AV", "GOOD", "XAV", "XGOOD"],
      },
      CarbonationUnit: {
        type: String,
        required: false,
        enum: ["AV", "GOOD", "XAV", "XGOOD"],
      },
      SyrupCanister: {
        type: String,
        required: false,
        enum: ["AV", "GOOD", "XAV", "XGOOD"],
      },
      Valve: {
        type: String,
        required: false,
        enum: ["AV", "GOOD", "XAV", "XGOOD"],
      },
      MachineFloorBoard: {
        type: String,
        required: false,
        enum: ["AV", "GOOD", "XAV", "XGOOD"],
      },
      PaymentDevice: {
        type: String,
        required: false,
        enum: ["AV", "GOOD", "XAV", "XGOOD"],
      },
      CashlessUnit: {
        type: String,
        required: false,
        enum: ["AV", "GOOD", "XAV", "XGOOD"],
      },
      PSUBoard: {
        type: String,
        required: false,
        enum: ["AV", "GOOD", "XAV", "XGOOD"],
      },
      VendBoard: {
        type: String,
        required: false,
        enum: ["AV", "GOOD", "XAV", "XGOOD"],
      },
      RelaySupply: {
        type: String,
        required: false,
        enum: ["AV", "GOOD", "XAV", "XGOOD"],
      },
      MemoryBoard: {
        type: String,
        required: false,
        enum: ["AV", "GOOD", "XAV", "XGOOD"],
      },
      Remote: {
        type: String,
        required: false,
        enum: ["AV", "GOOD", "XAV", "XGOOD"],
      },
      Compressor: {
        type: String,
        required: false,
        enum: ["AV", "GOOD", "XAV", "XGOOD"],
      },
      CoolingFan: {
        type: String,
        required: false,
        enum: ["AV", "GOOD", "XAV", "XGOOD"],
      },
      IceMaker: {
        type: String,
        required: false,
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
