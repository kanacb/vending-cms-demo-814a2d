
    module.exports = function (app) {
        const modelName = 'cb_stage_1_agree';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
                   Ref: { type: Schema.Types.ObjectId, ref: "cBMasterForm" },
       TechName: { type: String },
       TechSign: { type: String },
       TechDate: { type: Date },
       TechProceed: { type: Boolean },
       SvName: { type: String },
       SvSign: { type: String },
       SvDate: { type: Date },
       SvProcedd: { type: Boolean },
       MngrName: { type: String },
       MngrSign: { type: String },
       MngrDate: { type: Date },
       MngrProceed: { type: Boolean },
       Remarks: { type: String },

            
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