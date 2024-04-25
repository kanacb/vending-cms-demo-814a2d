module.exports = function (app) {
  const modelName = "cb_stage_2";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      Ref: { type: Schema.Types.ObjectId, ref: "cBMasterForm" },
      ExternalBody: { type: String, enum: ["Service", "Repair"] },
      InternalBody: { type: String, enum: ["Service", "Repair"] },
      DisplayPanel: { type: String, enum: ["Service", "Repair"] },
      DoorHandle: { type: String, enum: ["Service", "Repair"] },
      CoinReturnLever: { type: String, enum: ["Service", "Repair"] },
      CoinReturnPocket: { type: String, enum: ["Service", "Repair"] },
      DeliveryDoorFlap: { type: String, enum: ["Service", "Repair"] },
      SecDoorPanel: { type: String, enum: ["Service", "Repair"] },
      SecDoorFlap: { type: String, enum: ["Service", "Repair"] },
      ColumnStnd: { type: String, enum: ["Service", "Repair"] },
      ColumnMod: { type: String, enum: ["Service", "Repair"] },
      ColumnFlipper: { type: String, enum: ["Service", "Repair"] },
      MachineMaintenance: { type: String, enum: ["Service", "Repair"] },
      PSUBoard: { type: String, enum: ["Service", "Repair"] },
      VendBoard: { type: String, enum: ["Service", "Repair"] },
      RelaySupply: { type: String, enum: ["Service", "Repair"] },
      MemoryBoard: { type: String, enum: ["Service", "Repair"] },
      Remote: { type: String, enum: ["Service", "Repair"] },
      Compressor: { type: String, enum: ["Service", "Repair"] },
      CoolingFan: { type: String, enum: ["Service", "Repair"] },
      Wiring: { type: String, enum: ["Service", "Repair"] },
      Motor: { type: String, enum: ["Service", "Repair"] },
      remarks: { type: String },

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
