const userProfile = require("./userProfile/userProfile.service.js");
const users = require("./users/users.service.js");
const hCMasterForm = require("./hCMasterForm/hCMasterForm.service.js");
const cBMasterForm = require("./cBMasterForm/cBMasterForm.service.js");
const hcStage1 = require("./hcStage1/hcStage1.service.js");
const hcStage2 = require("./hcStage2/hcStage2.service.js");
const hcStage1Agree = require("./hcStage1Agree/hcStage1Agree.service.js");
const hcStage2Agree = require("./hcStage2Agree/hcStage2Agree.service.js");
const cbStage1 = require("./cbStage1/cbStage1.service.js");
const cbStage2 = require("./cbStage2/cbStage2.service.js");
const cbStage1Agree = require("./cbStage1Agree/cbStage1Agree.service.js");
const cbStage2Agree = require("./cbStage2Agree/cbStage2Agree.service.js");
const opsCentre = require("./opsCentre/opsCentre.service.js");
const locationMaster = require("./locationMaster/locationMaster.service.js");
const vmType = require("./vmType/vmType.service.js");
const machineMaster = require("./machineMaster/machineMaster.service.js");
const breakdown = require("./breakdown/breakdown.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
    app.configure(users);
    app.configure(userProfile);
  app.configure(hCMasterForm);
  app.configure(cBMasterForm);
  app.configure(hcStage1);
  app.configure(hcStage2);
  app.configure(hcStage1Agree);
  app.configure(hcStage2Agree);
  app.configure(cbStage1);
  app.configure(cbStage2);
  app.configure(cbStage1Agree);
  app.configure(cbStage2Agree);
  app.configure(opsCentre);
  app.configure(locationMaster);
  app.configure(vmType);
  app.configure(machineMaster);
  app.configure(breakdown);
    // ~cb-add-configure-service-name~
};
