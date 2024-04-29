import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import client from "../../services/restClient";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";

const ExternalBodyArray = ["AV", "GOOD", "XAV", "XGOOD"];
const ExternalBodyOptions = ExternalBodyArray.map((x) => ({
  name: x,
  value: x,
}));
const InternalBodyArray = ["AV", "GOOD", "XAV", "XGOOD"];
const InternalBodyOptions = InternalBodyArray.map((x) => ({
  name: x,
  value: x,
}));
const DisplayPanelArray = ["AV", "GOOD", "XAV", "XGOOD"];
const DisplayPanelOptions = DisplayPanelArray.map((x) => ({
  name: x,
  value: x,
}));
const DoorHandleArray = ["AV", "GOOD", "XAV", "XGOOD"];
const DoorHandleOptions = DoorHandleArray.map((x) => ({ name: x, value: x }));
const CoinReturnLeverArray = ["AV", "GOOD", "XAV", "XGOOD"];
const CoinReturnLeverOptions = CoinReturnLeverArray.map((x) => ({
  name: x,
  value: x,
}));
const CoinReturnPocketArray = ["AV", "GOOD", "XAV", "XGOOD"];
const CoinReturnPocketOptions = CoinReturnPocketArray.map((x) => ({
  name: x,
  value: x,
}));
const DeliveryDoorFlapArray = ["AV", "GOOD", "XAV", "XGOOD"];
const DeliveryDoorFlapOptions = DeliveryDoorFlapArray.map((x) => ({
  name: x,
  value: x,
}));
const SecDoorPanelArray = ["AV", "GOOD", "XAV", "XGOOD"];
const SecDoorPanelOptions = SecDoorPanelArray.map((x) => ({
  name: x,
  value: x,
}));
const SecDoorFlapArray = ["AV", "GOOD", "XAV", "XGOOD"];
const SecDoorFlapOptions = SecDoorFlapArray.map((x) => ({ name: x, value: x }));
const ColumnStndArray = ["AV", "GOOD", "XAV", "XGOOD"];
const ColumnStndOptions = ColumnStndArray.map((x) => ({ name: x, value: x }));
const ColumnModArray = ["AV", "GOOD", "XAV", "XGOOD"];
const ColumnModOptions = ColumnModArray.map((x) => ({ name: x, value: x }));
const ColumnFlipperArray = ["AV", "GOOD", "XAV", "XGOOD"];
const ColumnFlipperOptions = ColumnFlipperArray.map((x) => ({
  name: x,
  value: x,
}));
const ProductChuteArray = ["AV", "GOOD", "XAV", "XGOOD"];
const ProductChuteOptions = ProductChuteArray.map((x) => ({
  name: x,
  value: x,
}));
const MachineMaintenanceArray = ["AV", "GOOD", "XAV", "XGOOD"];
const MachineMaintenanceOptions = MachineMaintenanceArray.map((x) => ({
  name: x,
  value: x,
}));
const PSUBoardArray = ["AV", "GOOD", "XAV", "XGOOD"];
const PSUBoardOptions = PSUBoardArray.map((x) => ({ name: x, value: x }));
const VendBoardArray = ["AV", "GOOD", "XAV", "XGOOD"];
const VendBoardOptions = VendBoardArray.map((x) => ({ name: x, value: x }));
const RelaySupplyArray = ["AV", "GOOD", "XAV", "XGOOD"];
const RelaySupplyOptions = RelaySupplyArray.map((x) => ({ name: x, value: x }));
const MemoryBoardArray = ["AV", "GOOD", "XAV", "XGOOD"];
const MemoryBoardOptions = MemoryBoardArray.map((x) => ({ name: x, value: x }));
const RemoteArray = ["AV", "GOOD", "XAV", "XGOOD"];
const RemoteOptions = RemoteArray.map((x) => ({ name: x, value: x }));
const CompressorArray = ["AV", "GOOD", "XAV", "XGOOD"];
const CompressorOptions = CompressorArray.map((x) => ({ name: x, value: x }));
const CoolingFanArray = ["AV", "GOOD", "XAV", "XGOOD"];
const CoolingFanOptions = CoolingFanArray.map((x) => ({ name: x, value: x }));
const WiringArray = ["AV", "GOOD", "XAV", "XGOOD"];
const WiringOptions = WiringArray.map((x) => ({ name: x, value: x }));
const MotorArray = ["AV", "GOOD", "XAV", "XGOOD"];
const MotorOptions = MotorArray.map((x) => ({ name: x, value: x }));

const getSchemaValidationErrorsStrings = (errorObj) => {
  let errMsg = [];
  for (const key in errorObj.errors) {
    if (Object.hasOwnProperty.call(errorObj.errors, key)) {
      const element = errorObj.errors[key];
      if (element?.message) {
        errMsg.push(element.message);
      }
    }
  }
  return errMsg.length ? errMsg : errorObj.message ? errorObj.message : null;
};

const CbStage1CreateDialogComponent = (props) => {
  const [_entity, set_entity] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [Ref, setRef] = useState([]);

  useEffect(() => {
    // replace this when there is a date field
    // const init  = { todate : new Date(), from : new Date()};
    // set_entity({...init});
    set_entity({});
  }, [props.show]);

  const onSave = async () => {
    let _data = {
      Ref: _entity?.Ref?._id,
      ExternalBody: _entity?.ExternalBody,
      InternalBody: _entity?.InternalBody,
      DisplayPanel: _entity?.DisplayPanel,
      DoorHandle: _entity?.DoorHandle,
      CoinReturnLever: _entity?.CoinReturnLever,
      CoinReturnPocket: _entity?.CoinReturnPocket,
      DeliveryDoorFlap: _entity?.DeliveryDoorFlap,
      SecDoorPanel: _entity?.SecDoorPanel,
      SecDoorFlap: _entity?.SecDoorFlap,
      ColumnStnd: _entity?.ColumnStnd,
      ColumnMod: _entity?.ColumnMod,
      ColumnFlipper: _entity?.ColumnFlipper,
      ProductChute: _entity?.ProductChute,
      MachineMaintenance: _entity?.MachineMaintenance,
      PSUBoard: _entity?.PSUBoard,
      VendBoard: _entity?.VendBoard,
      RelaySupply: _entity?.RelaySupply,
      MemoryBoard: _entity?.MemoryBoard,
      Remote: _entity?.Remote,
      Compressor: _entity?.Compressor,
      CoolingFan: _entity?.CoolingFan,
      Wiring: _entity?.Wiring,
      Motor: _entity?.Motor,
      createdBy: props.user._id,
      updatedBy: props.user._id,
    };

    setLoading(true);

    try {
      const result = await client.service("cbStage1").create(_data);
      const eagerResult = await client.service("cbStage1").find({
        query: {
          $limit: 10000,
          _id: { $in: [result._id] },
          $populate: [
            {
              path: "Ref",
              service: "cBMasterForm",
              select: ["RefNo"],
            },
          ],
        },
      });
      props.onHide();
      props.alert({
        type: "success",
        title: "Create info",
        message: "Info cbStage1 updated successfully",
      });
      props.onCreateResult(eagerResult.data[0]);
    } catch (error) {
      console.log("error", error);
      setError(getSchemaValidationErrorsStrings(error) || "Failed to create");
      props.alert({
        type: "error",
        title: "Create",
        message: "Failed to create",
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    //on mount cBMasterForm
    client
      .service("cBMasterForm")
      .find({ query: { $limit: 10000, $sort: { createdAt: -1 } } })
      .then((res) => {
        setRef(
          res.data.map((e) => {
            return { name: e["RefNo"], value: e._id };
          }),
        );
      })
      .catch((error) => {
        console.log({ error });
        props.alert({
          title: "CBMasterForm",
          type: "error",
          message: error.message || "Failed get cBMasterForm",
        });
      });
  }, []);

  const renderFooter = () => (
    <div className="flex justify-content-end">
      <Button
        label="save"
        className="p-button-text no-focus-effect"
        onClick={onSave}
        loading={loading}
      />
      <Button
        label="close"
        className="p-button-text no-focus-effect p-button-secondary"
        onClick={props.onHide}
      />
    </div>
  );

  const setValByKey = (key, val) => {
    let new_entity = { ..._entity, [key]: val };
    set_entity(new_entity);
    setError("");
  };

  const RefOptions = Ref.map((elem) => ({
    name: elem.name,
    value: elem.value,
  }));

  return (
    <Dialog
      header="Create Can Bottle Stage 1"
      visible={props.show}
      closable={false}
      onHide={props.onHide}
      modal
      style={{ width: "40vw" }}
      className="min-w-max"
      footer={renderFooter()}
      resizable={false}
    >
      <div
        className="grid p-fluid overflow-y-auto"
        style={{ maxWidth: "55vw" }}
        role="cbStage1-create-dialog-component"
      >
        <div className="col-12 md:col-6 field mt-5">
          <span className="p-float-label">
            <Dropdown
              id="Ref"
              value={_entity?.Ref}
              optionLabel="name"
              optionValue="value"
              options={RefOptions}
              onChange={(e) => setValByKey("Ref", { _id: e.value })}
            />
            <label htmlFor="Ref">Ref:</label>
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="p-float-label">
            <Dropdown
              id="ExternalBody"
              value={_entity?.ExternalBody}
              options={ExternalBodyOptions}
              optionLabel="name"
              optionValue="value"
              onChange={(e) => setValByKey("ExternalBody", e.value)}
            />
            <label htmlFor="ExternalBody">ExternalBody:</label>
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="p-float-label">
            <Dropdown
              id="InternalBody"
              value={_entity?.InternalBody}
              options={InternalBodyOptions}
              optionLabel="name"
              optionValue="value"
              onChange={(e) => setValByKey("InternalBody", e.value)}
            />
            <label htmlFor="InternalBody">InternalBody:</label>
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="p-float-label">
            <Dropdown
              id="DisplayPanel"
              value={_entity?.DisplayPanel}
              options={DisplayPanelOptions}
              optionLabel="name"
              optionValue="value"
              onChange={(e) => setValByKey("DisplayPanel", e.value)}
            />
            <label htmlFor="DisplayPanel">DisplayPanel:</label>
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="p-float-label">
            <Dropdown
              id="DoorHandle"
              value={_entity?.DoorHandle}
              options={DoorHandleOptions}
              optionLabel="name"
              optionValue="value"
              onChange={(e) => setValByKey("DoorHandle", e.value)}
            />
            <label htmlFor="DoorHandle">DoorHandle:</label>
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="p-float-label">
            <Dropdown
              id="CoinReturnLever"
              value={_entity?.CoinReturnLever}
              options={CoinReturnLeverOptions}
              optionLabel="name"
              optionValue="value"
              onChange={(e) => setValByKey("CoinReturnLever", e.value)}
            />
            <label htmlFor="CoinReturnLever">CoinReturnLever:</label>
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="p-float-label">
            <Dropdown
              id="CoinReturnPocket"
              value={_entity?.CoinReturnPocket}
              options={CoinReturnPocketOptions}
              optionLabel="name"
              optionValue="value"
              onChange={(e) => setValByKey("CoinReturnPocket", e.value)}
            />
            <label htmlFor="CoinReturnPocket">CoinReturnPocket:</label>
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="p-float-label">
            <Dropdown
              id="DeliveryDoorFlap"
              value={_entity?.DeliveryDoorFlap}
              options={DeliveryDoorFlapOptions}
              optionLabel="name"
              optionValue="value"
              onChange={(e) => setValByKey("DeliveryDoorFlap", e.value)}
            />
            <label htmlFor="DeliveryDoorFlap">DeliveryDoorFlap:</label>
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="p-float-label">
            <Dropdown
              id="SecDoorPanel"
              value={_entity?.SecDoorPanel}
              options={SecDoorPanelOptions}
              optionLabel="name"
              optionValue="value"
              onChange={(e) => setValByKey("SecDoorPanel", e.value)}
            />
            <label htmlFor="SecDoorPanel">SecDoorPanel:</label>
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="p-float-label">
            <Dropdown
              id="SecDoorFlap"
              value={_entity?.SecDoorFlap}
              options={SecDoorFlapOptions}
              optionLabel="name"
              optionValue="value"
              onChange={(e) => setValByKey("SecDoorFlap", e.value)}
            />
            <label htmlFor="SecDoorFlap">SecDoorFlap:</label>
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="p-float-label">
            <Dropdown
              id="ColumnStnd"
              value={_entity?.ColumnStnd}
              options={ColumnStndOptions}
              optionLabel="name"
              optionValue="value"
              onChange={(e) => setValByKey("ColumnStnd", e.value)}
            />
            <label htmlFor="ColumnStnd">ColumnStnd:</label>
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="p-float-label">
            <Dropdown
              id="ColumnMod"
              value={_entity?.ColumnMod}
              options={ColumnModOptions}
              optionLabel="name"
              optionValue="value"
              onChange={(e) => setValByKey("ColumnMod", e.value)}
            />
            <label htmlFor="ColumnMod">ColumnMod:</label>
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="p-float-label">
            <Dropdown
              id="ColumnFlipper"
              value={_entity?.ColumnFlipper}
              options={ColumnFlipperOptions}
              optionLabel="name"
              optionValue="value"
              onChange={(e) => setValByKey("ColumnFlipper", e.value)}
            />
            <label htmlFor="ColumnFlipper">ColumnFlipper:</label>
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="p-float-label">
            <Dropdown
              id="ProductChute"
              value={_entity?.ProductChute}
              options={ProductChuteOptions}
              optionLabel="name"
              optionValue="value"
              onChange={(e) => setValByKey("ProductChute", e.value)}
            />
            <label htmlFor="ProductChute">ProductChute:</label>
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="p-float-label">
            <Dropdown
              id="MachineMaintenance"
              value={_entity?.MachineMaintenance}
              options={MachineMaintenanceOptions}
              optionLabel="name"
              optionValue="value"
              onChange={(e) => setValByKey("MachineMaintenance", e.value)}
            />
            <label htmlFor="MachineMaintenance">MachineMaintenance:</label>
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="p-float-label">
            <Dropdown
              id="PSUBoard"
              value={_entity?.PSUBoard}
              options={PSUBoardOptions}
              optionLabel="name"
              optionValue="value"
              onChange={(e) => setValByKey("PSUBoard", e.value)}
            />
            <label htmlFor="PSUBoard">PSUBoard:</label>
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="p-float-label">
            <Dropdown
              id="VendBoard"
              value={_entity?.VendBoard}
              options={VendBoardOptions}
              optionLabel="name"
              optionValue="value"
              onChange={(e) => setValByKey("VendBoard", e.value)}
            />
            <label htmlFor="VendBoard">VendBoard:</label>
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="p-float-label">
            <Dropdown
              id="RelaySupply"
              value={_entity?.RelaySupply}
              options={RelaySupplyOptions}
              optionLabel="name"
              optionValue="value"
              onChange={(e) => setValByKey("RelaySupply", e.value)}
            />
            <label htmlFor="RelaySupply">RelaySupply:</label>
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="p-float-label">
            <Dropdown
              id="MemoryBoard"
              value={_entity?.MemoryBoard}
              options={MemoryBoardOptions}
              optionLabel="name"
              optionValue="value"
              onChange={(e) => setValByKey("MemoryBoard", e.value)}
            />
            <label htmlFor="MemoryBoard">MemoryBoard:</label>
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="p-float-label">
            <Dropdown
              id="Remote"
              value={_entity?.Remote}
              options={RemoteOptions}
              optionLabel="name"
              optionValue="value"
              onChange={(e) => setValByKey("Remote", e.value)}
            />
            <label htmlFor="Remote">Remote:</label>
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="p-float-label">
            <Dropdown
              id="Compressor"
              value={_entity?.Compressor}
              options={CompressorOptions}
              optionLabel="name"
              optionValue="value"
              onChange={(e) => setValByKey("Compressor", e.value)}
            />
            <label htmlFor="Compressor">Compressor:</label>
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="p-float-label">
            <Dropdown
              id="CoolingFan"
              value={_entity?.CoolingFan}
              options={CoolingFanOptions}
              optionLabel="name"
              optionValue="value"
              onChange={(e) => setValByKey("CoolingFan", e.value)}
            />
            <label htmlFor="CoolingFan">CoolingFan:</label>
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="p-float-label">
            <Dropdown
              id="Wiring"
              value={_entity?.Wiring}
              options={WiringOptions}
              optionLabel="name"
              optionValue="value"
              onChange={(e) => setValByKey("Wiring", e.value)}
            />
            <label htmlFor="Wiring">Wiring:</label>
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="p-float-label">
            <Dropdown
              id="Motor"
              value={_entity?.Motor}
              options={MotorOptions}
              optionLabel="name"
              optionValue="value"
              onChange={(e) => setValByKey("Motor", e.value)}
            />
            <label htmlFor="Motor">Motor:</label>
          </span>
        </div>
        <small className="p-error">
          {Array.isArray(error)
            ? error.map((e, i) => (
                <p className="m-0" key={i}>
                  {e}
                </p>
              ))
            : error}
        </small>
      </div>
    </Dialog>
  );
};

const mapState = (state) => {
  const { user } = state.auth;
  return { user };
};
const mapDispatch = (dispatch) => ({
  alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(CbStage1CreateDialogComponent);
