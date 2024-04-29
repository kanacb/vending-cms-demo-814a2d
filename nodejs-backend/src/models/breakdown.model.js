
    module.exports = function (app) {
        const modelName = 'breakdown';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
                   opsCentreId: { type: Schema.Types.ObjectId, ref: "opsCentre" },
       locationId: { type: Schema.Types.ObjectId, ref: "locationMaster" },
       ticketType: { type: String, required: true , enum: ["Internal","External"] },
       reasonForBreakdown: { type: String, unique: false, lowercase: false, default: '' },
       technicianRemark: { type: String, unique: false, lowercase: false, default: '' },
       visitDate: { type: Date },
       reportDate: { type: Date },
       condition: { type: String , enum: ["GOOD","BAD"] },
       machineId: { type: Schema.Types.ObjectId, ref: "machineMaster" },
       technicianId: { type: Schema.Types.ObjectId, ref: "users" },

            
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