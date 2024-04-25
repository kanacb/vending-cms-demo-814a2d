
    module.exports = function (app) {
        const modelName = 'hc_stage_2';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
                   RefNo: { type: Schema.Types.ObjectId, ref: "hCMasterForm" },
       ExternalBody: { type: String , enum: ["Service","Repair"] },
       InternalBody: { type: String , enum: ["Service","Repair"] },
       DisplayPanel: { type: String , enum: ["Service","Repair"] },
       DoorHandle: { type: String , enum: ["Service","Repair"] },
       CoinReturnLever: { type: String , enum: ["Service","Repair"] },
       CoinReturnPocket: { type: String , enum: ["Service","Repair"] },
       DeliveryDoorFlap: { type: String , enum: ["Service","Repair"] },
       SelectorButton: { type: String , enum: ["Service","Repair"] },
       BodySticker: { type: String , enum: ["Service","Repair"] },
       ProductCanister: { type: String , enum: ["Service","Repair"] },
       Chute: { type: String , enum: ["Service","Repair"] },
       Tube: { type: String , enum: ["Service","Repair"] },
       CarbonationUnit: { type: String , enum: ["Service","Repair"] },
       SyrupCanister: { type: String , enum: ["Service","Repair"] },
       Valve: { type: String , enum: ["Service","Repair"] },
       MachineFloorBoard: { type: String , enum: ["Service","Repair"] },
       PaymentDevice: { type: String , enum: ["Service","Repair"] },
       CashlessUnit: { type: String , enum: ["Service","Repair"] },
       PSUBoard: { type: String , enum: ["Service","Repair"] },
       VendBoard: { type: String , enum: ["Service","Repair"] },
       RelaySupply: { type: String , enum: ["Service","Repair"] },
       MemoryBoard: { type: String , enum: ["Service","Repair"] },
       Remote: { type: String , enum: ["Service","Repair"] },
       Compressor: { type: String , enum: ["Service","Repair"] },
       CoolingFan: { type: String , enum: ["Service","Repair"] },
       IceMaker: { type: String , enum: ["Service","Repair"] },

            
            createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
            updatedBy: { type: Schema.Types.ObjectId, ref: "users", required: true }
          },
          {
            timestamps: true
        });
      
       
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };