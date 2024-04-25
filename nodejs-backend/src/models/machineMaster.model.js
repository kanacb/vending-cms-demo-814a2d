
    module.exports = function (app) {
        const modelName = 'machine_master';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
                   ownership: { type: String, unique: false, lowercase: false, default: '' },
       vmcode: { type: String, unique: false, lowercase: false, default: '' },
       zone: { type: String, unique: false, lowercase: false, default: '' },
       locationCode: { type: String, unique: false, lowercase: false, default: '' },
       locationDesc: { type: String, unique: false, lowercase: false, default: '' },
       modelNo: { type: String, unique: false, lowercase: false, default: '' },
       serialNumber: { type: String, unique: false, lowercase: false, default: '' },
       vmId: { type: String, unique: false, lowercase: false, default: '' },
       purchaseDate: { type: Date },
       commissionDate: { type: Date },
       description: { type: String, unique: false, lowercase: false, default: '' },

            
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