import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import client from "../../services/restClient";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";

const ExternalBodyArray = ["Service", "Repair"];
const ExternalBodyOptions = ExternalBodyArray.map((x) => ({
  name: x,
  value: x,
}));
const InternalBodyArray = ["Service", "Repair"];
const InternalBodyOptions = InternalBodyArray.map((x) => ({
  name: x,
  value: x,
}));
const DisplayPanelArray = ["Service", "Repair"];
const DisplayPanelOptions = DisplayPanelArray.map((x) => ({
  name: x,
  value: x,
}));
const DoorHandleArray = ["Service", "Repair"];
const DoorHandleOptions = DoorHandleArray.map((x) => ({ name: x, value: x }));
const CoinReturnLeverArray = ["Service", "Repair"];
const CoinReturnLeverOptions = CoinReturnLeverArray.map((x) => ({
  name: x,
  value: x,
}));
const CoinReturnPocketArray = ["Service", "Repair"];
const CoinReturnPocketOptions = CoinReturnPocketArray.map((x) => ({
  name: x,
  value: x,
}));
const DeliveryDoorFlapArray = ["Service", "Repair"];
const DeliveryDoorFlapOptions = DeliveryDoorFlapArray.map((x) => ({
  name: x,
  value: x,
}));
const SecDoorPanelArray = ["Service", "Repair"];
const SecDoorPanelOptions = SecDoorPanelArray.map((x) => ({
  name: x,
  value: x,
}));
const SecDoorFlapArray = ["Service", "Repair"];
const SecDoorFlapOptions = SecDoorFlapArray.map((x) => ({ name: x, value: x }));
const ColumnStndArray = ["Service", "Repair"];
const ColumnStndOptions = ColumnStndArray.map((x) => ({ name: x, value: x }));
const ColumnModArray = ["Service", "Repair"];
const ColumnModOptions = ColumnModArray.map((x) => ({ name: x, value: x }));
const ColumnFlipperArray = ["Service", "Repair"];
const ColumnFlipperOptions = ColumnFlipperArray.map((x) => ({
  name: x,
  value: x,
}));
const MachineMaintenanceArray = ["Service", "Repair"];
const MachineMaintenanceOptions = MachineMaintenanceArray.map((x) => ({
  name: x,
  value: x,
}));
const PSUBoardArray = ["Service", "Repair"];
const PSUBoardOptions = PSUBoardArray.map((x) => ({ name: x, value: x }));
const VendBoardArray = ["Service", "Repair"];
const VendBoardOptions = VendBoardArray.map((x) => ({ name: x, value: x }));
const RelaySupplyArray = ["Service", "Repair"];
const RelaySupplyOptions = RelaySupplyArray.map((x) => ({ name: x, value: x }));
const MemoryBoardArray = ["Service", "Repair"];
const MemoryBoardOptions = MemoryBoardArray.map((x) => ({ name: x, value: x }));
const RemoteArray = ["Service", "Repair"];
const RemoteOptions = RemoteArray.map((x) => ({ name: x, value: x }));
const CompressorArray = ["Service", "Repair"];
const CompressorOptions = CompressorArray.map((x) => ({ name: x, value: x }));
const CoolingFanArray = ["Service", "Repair"];
const CoolingFanOptions = CoolingFanArray.map((x) => ({ name: x, value: x }));
const WiringArray = ["Service", "Repair"];
const WiringOptions = WiringArray.map((x) => ({ name: x, value: x }));
const MotorArray = ["Service", "Repair"];
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

const CbStage2CreateDialogComponent = (props) => {
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
      remarks: _entity?.remarks,
      createdBy: props.user._id,
      updatedBy: props.user._id,
    };

    setLoading(true);

    try {
      const result = await client.service("cbStage2").create(_data);
      const eagerResult = await client.service("cbStage2").find({
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
        message: "Info cbStage2 updated successfully",
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
      header="Create"
      visible={props.show}
      closable={false}
      onHide={props.onHide}
      modal
      style={{ width: "40vw" }}
      className="min-w-max"
      footer={renderFooter()}
      resizable={false}
    >
      <div role="cbStage2-create-dialog-component">
        <div>
          <p className="m-0">Ref:</p>
          <Dropdown
            value={_entity?.Ref}
            optionLabel="name"
            optionValue="value"
            options={RefOptions}
            onChange={(e) => setValByKey("Ref", { _id: e.value })}
          />
        </div>
        <div>
          <p className="m-0">ExternalBody:</p>
          <Dropdown
            value={_entity?.ExternalBody}
            optionLabel="name"
            optionValue="value"
            options={ExternalBodyOptions}
            onChange={(e) => setValByKey("ExternalBody", { _id: e.value })}
          />
        </div>
        <div>
          <p className="m-0">InternalBody:</p>
          <Dropdown
            value={_entity?.InternalBody}
            optionLabel="name"
            optionValue="value"
            options={InternalBodyOptions}
            onChange={(e) => setValByKey("InternalBody", { _id: e.value })}
          />
        </div>
        <div>
          <p className="m-0">DisplayPanel:</p>
          <Dropdown
            value={_entity?.DisplayPanel}
            optionLabel="name"
            optionValue="value"
            options={DisplayPanelOptions}
            onChange={(e) => setValByKey("DisplayPanel", { _id: e.value })}
          />
        </div>
        <div>
          <p className="m-0">DoorHandle:</p>
          <Dropdown
            value={_entity?.DoorHandle}
            optionLabel="name"
            optionValue="value"
            options={DoorHandleOptions}
            onChange={(e) => setValByKey("DoorHandle", { _id: e.value })}
          />
        </div>
        <div>
          <p className="m-0">CoinReturnLever:</p>
          <Dropdown
            value={_entity?.CoinReturnLever}
            optionLabel="name"
            optionValue="value"
            options={CoinReturnLeverOptions}
            onChange={(e) => setValByKey("CoinReturnLever", { _id: e.value })}
          />
        </div>
        <div>
          <p className="m-0">CoinReturnPocket:</p>
          <Dropdown
            value={_entity?.CoinReturnPocket}
            optionLabel="name"
            optionValue="value"
            options={CoinReturnPocketOptions}
            onChange={(e) => setValByKey("CoinReturnPocket", { _id: e.value })}
          />
        </div>
        <div>
          <p className="m-0">DeliveryDoorFlap:</p>
          <Dropdown
            value={_entity?.DeliveryDoorFlap}
            optionLabel="name"
            optionValue="value"
            options={DeliveryDoorFlapOptions}
            onChange={(e) => setValByKey("DeliveryDoorFlap", { _id: e.value })}
          />
        </div>
        <div>
          <p className="m-0">SecDoorPanel:</p>
          <Dropdown
            value={_entity?.SecDoorPanel}
            optionLabel="name"
            optionValue="value"
            options={SecDoorPanelOptions}
            onChange={(e) => setValByKey("SecDoorPanel", { _id: e.value })}
          />
        </div>
        <div>
          <p className="m-0">SecDoorFlap:</p>
          <Dropdown
            value={_entity?.SecDoorFlap}
            optionLabel="name"
            optionValue="value"
            options={SecDoorFlapOptions}
            onChange={(e) => setValByKey("SecDoorFlap", { _id: e.value })}
          />
        </div>
        <div>
          <p className="m-0">ColumnStnd:</p>
          <Dropdown
            value={_entity?.ColumnStnd}
            optionLabel="name"
            optionValue="value"
            options={ColumnStndOptions}
            onChange={(e) => setValByKey("ColumnStnd", { _id: e.value })}
          />
        </div>
        <div>
          <p className="m-0">ColumnMod:</p>
          <Dropdown
            value={_entity?.ColumnMod}
            optionLabel="name"
            optionValue="value"
            options={ColumnModOptions}
            onChange={(e) => setValByKey("ColumnMod", { _id: e.value })}
          />
        </div>
        <div>
          <p className="m-0">ColumnFlipper:</p>
          <Dropdown
            value={_entity?.ColumnFlipper}
            optionLabel="name"
            optionValue="value"
            options={ColumnFlipperOptions}
            onChange={(e) => setValByKey("ColumnFlipper", { _id: e.value })}
          />
        </div>
        <div>
          <p className="m-0">MachineMaintenance:</p>
          <Dropdown
            value={_entity?.MachineMaintenance}
            optionLabel="name"
            optionValue="value"
            options={MachineMaintenanceOptions}
            onChange={(e) =>
              setValByKey("MachineMaintenance", { _id: e.value })
            }
          />
        </div>
        <div>
          <p className="m-0">PSUBoard:</p>
          <Dropdown
            value={_entity?.PSUBoard}
            optionLabel="name"
            optionValue="value"
            options={PSUBoardOptions}
            onChange={(e) => setValByKey("PSUBoard", { _id: e.value })}
          />
        </div>
        <div>
          <p className="m-0">VendBoard:</p>
          <Dropdown
            value={_entity?.VendBoard}
            optionLabel="name"
            optionValue="value"
            options={VendBoardOptions}
            onChange={(e) => setValByKey("VendBoard", { _id: e.value })}
          />
        </div>
        <div>
          <p className="m-0">RelaySupply:</p>
          <Dropdown
            value={_entity?.RelaySupply}
            optionLabel="name"
            optionValue="value"
            options={RelaySupplyOptions}
            onChange={(e) => setValByKey("RelaySupply", { _id: e.value })}
          />
        </div>
        <div>
          <p className="m-0">MemoryBoard:</p>
          <Dropdown
            value={_entity?.MemoryBoard}
            optionLabel="name"
            optionValue="value"
            options={MemoryBoardOptions}
            onChange={(e) => setValByKey("MemoryBoard", { _id: e.value })}
          />
        </div>
        <div>
          <p className="m-0">Remote:</p>
          <Dropdown
            value={_entity?.Remote}
            optionLabel="name"
            optionValue="value"
            options={RemoteOptions}
            onChange={(e) => setValByKey("Remote", { _id: e.value })}
          />
        </div>
        <div>
          <p className="m-0">Compressor:</p>
          <Dropdown
            value={_entity?.Compressor}
            optionLabel="name"
            optionValue="value"
            options={CompressorOptions}
            onChange={(e) => setValByKey("Compressor", { _id: e.value })}
          />
        </div>
        <div>
          <p className="m-0">CoolingFan:</p>
          <Dropdown
            value={_entity?.CoolingFan}
            optionLabel="name"
            optionValue="value"
            options={CoolingFanOptions}
            onChange={(e) => setValByKey("CoolingFan", { _id: e.value })}
          />
        </div>
        <div>
          <p className="m-0">Wiring:</p>
          <Dropdown
            value={_entity?.Wiring}
            optionLabel="name"
            optionValue="value"
            options={WiringOptions}
            onChange={(e) => setValByKey("Wiring", { _id: e.value })}
          />
        </div>
        <div>
          <p className="m-0">Motor:</p>
          <Dropdown
            value={_entity?.Motor}
            optionLabel="name"
            optionValue="value"
            options={MotorOptions}
            onChange={(e) => setValByKey("Motor", { _id: e.value })}
          />
        </div>
        <div>
          <p className="m-0">Remarks:</p>
          <InputText
            className="w-full mb-3"
            value={_entity?.remarks}
            onChange={(e) => setValByKey("remarks", e.target.value)}
          />
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

export default connect(mapState, mapDispatch)(CbStage2CreateDialogComponent);
