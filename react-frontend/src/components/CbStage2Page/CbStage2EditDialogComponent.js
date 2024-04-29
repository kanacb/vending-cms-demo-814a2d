import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import client from "../../services/restClient";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import moment from "moment";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";

const ExternalBodyArray = ["Service", "Repair"];
const ExternalBodyOptions = ExternalBodyArray.map((x) => ({
  name: x,
  value: x,
})).sort((a, b) =>
  a.name.localeCompare(b.name, undefined, {
    numeric: true,
    sensitivity: "base",
  }),
);
const InternalBodyArray = ["Service", "Repair"];
const InternalBodyOptions = InternalBodyArray.map((x) => ({
  name: x,
  value: x,
})).sort((a, b) =>
  a.name.localeCompare(b.name, undefined, {
    numeric: true,
    sensitivity: "base",
  }),
);
const DisplayPanelArray = ["Service", "Repair"];
const DisplayPanelOptions = DisplayPanelArray.map((x) => ({
  name: x,
  value: x,
})).sort((a, b) =>
  a.name.localeCompare(b.name, undefined, {
    numeric: true,
    sensitivity: "base",
  }),
);
const DoorHandleArray = ["Service", "Repair"];
const DoorHandleOptions = DoorHandleArray.map((x) => ({
  name: x,
  value: x,
})).sort((a, b) =>
  a.name.localeCompare(b.name, undefined, {
    numeric: true,
    sensitivity: "base",
  }),
);
const CoinReturnLeverArray = ["Service", "Repair"];
const CoinReturnLeverOptions = CoinReturnLeverArray.map((x) => ({
  name: x,
  value: x,
})).sort((a, b) =>
  a.name.localeCompare(b.name, undefined, {
    numeric: true,
    sensitivity: "base",
  }),
);
const CoinReturnPocketArray = ["Service", "Repair"];
const CoinReturnPocketOptions = CoinReturnPocketArray.map((x) => ({
  name: x,
  value: x,
})).sort((a, b) =>
  a.name.localeCompare(b.name, undefined, {
    numeric: true,
    sensitivity: "base",
  }),
);
const DeliveryDoorFlapArray = ["Service", "Repair"];
const DeliveryDoorFlapOptions = DeliveryDoorFlapArray.map((x) => ({
  name: x,
  value: x,
})).sort((a, b) =>
  a.name.localeCompare(b.name, undefined, {
    numeric: true,
    sensitivity: "base",
  }),
);
const SecDoorPanelArray = ["Service", "Repair"];
const SecDoorPanelOptions = SecDoorPanelArray.map((x) => ({
  name: x,
  value: x,
})).sort((a, b) =>
  a.name.localeCompare(b.name, undefined, {
    numeric: true,
    sensitivity: "base",
  }),
);
const SecDoorFlapArray = ["Service", "Repair"];
const SecDoorFlapOptions = SecDoorFlapArray.map((x) => ({
  name: x,
  value: x,
})).sort((a, b) =>
  a.name.localeCompare(b.name, undefined, {
    numeric: true,
    sensitivity: "base",
  }),
);
const ColumnStndArray = ["Service", "Repair"];
const ColumnStndOptions = ColumnStndArray.map((x) => ({
  name: x,
  value: x,
})).sort((a, b) =>
  a.name.localeCompare(b.name, undefined, {
    numeric: true,
    sensitivity: "base",
  }),
);
const ColumnModArray = ["Service", "Repair"];
const ColumnModOptions = ColumnModArray.map((x) => ({
  name: x,
  value: x,
})).sort((a, b) =>
  a.name.localeCompare(b.name, undefined, {
    numeric: true,
    sensitivity: "base",
  }),
);
const ColumnFlipperArray = ["Service", "Repair"];
const ColumnFlipperOptions = ColumnFlipperArray.map((x) => ({
  name: x,
  value: x,
})).sort((a, b) =>
  a.name.localeCompare(b.name, undefined, {
    numeric: true,
    sensitivity: "base",
  }),
);
const MachineMaintenanceArray = ["Service", "Repair"];
const MachineMaintenanceOptions = MachineMaintenanceArray.map((x) => ({
  name: x,
  value: x,
})).sort((a, b) =>
  a.name.localeCompare(b.name, undefined, {
    numeric: true,
    sensitivity: "base",
  }),
);
const PSUBoardArray = ["Service", "Repair"];
const PSUBoardOptions = PSUBoardArray.map((x) => ({ name: x, value: x })).sort(
  (a, b) =>
    a.name.localeCompare(b.name, undefined, {
      numeric: true,
      sensitivity: "base",
    }),
);
const VendBoardArray = ["Service", "Repair"];
const VendBoardOptions = VendBoardArray.map((x) => ({
  name: x,
  value: x,
})).sort((a, b) =>
  a.name.localeCompare(b.name, undefined, {
    numeric: true,
    sensitivity: "base",
  }),
);
const RelaySupplyArray = ["Service", "Repair"];
const RelaySupplyOptions = RelaySupplyArray.map((x) => ({
  name: x,
  value: x,
})).sort((a, b) =>
  a.name.localeCompare(b.name, undefined, {
    numeric: true,
    sensitivity: "base",
  }),
);
const MemoryBoardArray = ["Service", "Repair"];
const MemoryBoardOptions = MemoryBoardArray.map((x) => ({
  name: x,
  value: x,
})).sort((a, b) =>
  a.name.localeCompare(b.name, undefined, {
    numeric: true,
    sensitivity: "base",
  }),
);
const RemoteArray = ["Service", "Repair"];
const RemoteOptions = RemoteArray.map((x) => ({ name: x, value: x })).sort(
  (a, b) =>
    a.name.localeCompare(b.name, undefined, {
      numeric: true,
      sensitivity: "base",
    }),
);
const CompressorArray = ["Service", "Repair"];
const CompressorOptions = CompressorArray.map((x) => ({
  name: x,
  value: x,
})).sort((a, b) =>
  a.name.localeCompare(b.name, undefined, {
    numeric: true,
    sensitivity: "base",
  }),
);
const CoolingFanArray = ["Service", "Repair"];
const CoolingFanOptions = CoolingFanArray.map((x) => ({
  name: x,
  value: x,
})).sort((a, b) =>
  a.name.localeCompare(b.name, undefined, {
    numeric: true,
    sensitivity: "base",
  }),
);
const WiringArray = ["Service", "Repair"];
const WiringOptions = WiringArray.map((x) => ({ name: x, value: x })).sort(
  (a, b) =>
    a.name.localeCompare(b.name, undefined, {
      numeric: true,
      sensitivity: "base",
    }),
);
const MotorArray = ["Service", "Repair"];
const MotorOptions = MotorArray.map((x) => ({ name: x, value: x })).sort(
  (a, b) =>
    a.name.localeCompare(b.name, undefined, {
      numeric: true,
      sensitivity: "base",
    }),
);

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
    set_entity(props.entity);
  }, [props.entity, props.show]);

  useEffect(() => {
    //on mount cBMasterForm
    client
      .service("cBMasterForm")
      .find({ query: { $limit: 10000, $sort: { createdAt: -1 } } })
      .then((res) => {
        setRef(res.data.map((e) => ({ name: e["RefNo"], value: e._id })));
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
    };

    setLoading(true);
    try {
      await client.service("cbStage2").patch(_entity._id, _data);
      const eagerResult = await client.service("cbStage2").find({
        query: {
          $limit: 10000,
          _id: { $in: [_entity._id] },
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
        title: "Edit info",
        message: "Info cbStage2 updated successfully",
      });
      props.onEditResult(eagerResult.data[0]);
    } catch (error) {
      console.log("error", error);
      setError(
        getSchemaValidationErrorsStrings(error) || "Failed to update info",
      );
      props.alert({
        type: "error",
        title: "Edit info",
        message: "Failed to update info",
      });
    }
    setLoading(false);
  };

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
  // children dropdown options

  const RefOptions = Ref.map((elem) => ({
    name: elem.name,
    value: elem.value,
  })).sort((a, b) =>
    a.name.localeCompare(b.name, undefined, {
      numeric: true,
      sensitivity: "base",
    }),
  );

  return (
    <Dialog
      header="Edit Can Bottle Stage 2"
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
        role="cbStage2-edit-dialog-component"
      >
        <div>
          <p className="m-0">Ref:</p>
          <Dropdown
            id="Ref"
            value={_entity?.Ref?._id}
            options={RefOptions}
            optionLabel="name"
            optionValue="value"
            onChange={(e) => setValByKey("Ref", { _id: e.value })}
          />
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
        <div className="col-12 md:col-6 field mt-5">
          <p className="m-0">
            createdAt:{" " + moment(_entity?.createdAt).fromNow()}
          </p>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <p className="m-0">
            lastUpdatedAt:{" " + moment(_entity?.updatedAt).fromNow()}
          </p>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <p className="m-0">createdBy:{" " + _entity?.createdBy?.name}</p>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <p className="m-0">lastUpdatedBy:{" " + _entity?.updatedBy?.name}</p>
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
