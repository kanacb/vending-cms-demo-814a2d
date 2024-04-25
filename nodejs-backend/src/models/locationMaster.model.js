
    module.exports = function (app) {
        const modelName = 'location_master';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
                   name: { type: String, unique: false, lowercase: false, default: '' },
       code: { type: String, unique: false, lowercase: false, default: '' },
       type: { type: String, unique: false, lowercase: false, default: '' },
       area: { type: String, unique: false, lowercase: false, default: '' },
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