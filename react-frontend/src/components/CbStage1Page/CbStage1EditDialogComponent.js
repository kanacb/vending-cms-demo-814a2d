import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import client from "../../services/restClient";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import moment from "moment";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";

const ExternalBodyArray = ["AV", "GOOD", "XAV", "XGOOD"];
const ExternalBodyOptions = ExternalBodyArray.map((x) => ({
  name: x,
  value: x,
})).sort((a, b) =>
  a.name.localeCompare(b.name, undefined, {
    numeric: true,
    sensitivity: "base",
  }),
);
const InternalBodyArray = ["AV", "GOOD", "XAV", "XGOOD"];
const InternalBodyOptions = InternalBodyArray.map((x) => ({
  name: x,
  value: x,
})).sort((a, b) =>
  a.name.localeCompare(b.name, undefined, {
    numeric: true,
    sensitivity: "base",
  }),
);
const DisplayPanelArray = ["AV", "GOOD", "XAV", "XGOOD"];
const DisplayPanelOptions = DisplayPanelArray.map((x) => ({
  name: x,
  value: x,
})).sort((a, b) =>
  a.name.localeCompare(b.name, undefined, {
    numeric: true,
    sensitivity: "base",
  }),
);
const DoorHandleArray = ["AV", "GOOD", "XAV", "XGOOD"];
const DoorHandleOptions = DoorHandleArray.map((x) => ({
  name: x,
  value: x,
})).sort((a, b) =>
  a.name.localeCompare(b.name, undefined, {
    numeric: true,
    sensitivity: "base",
  }),
);
const CoinReturnLeverArray = ["AV", "GOOD", "XAV", "XGOOD"];
const CoinReturnLeverOptions = CoinReturnLeverArray.map((x) => ({
  name: x,
  value: x,
})).sort((a, b) =>
  a.name.localeCompare(b.name, undefined, {
    numeric: true,
    sensitivity: "base",
  }),
);
const CoinReturnPocketArray = ["AV", "GOOD", "XAV", "XGOOD"];
const CoinReturnPocketOptions = CoinReturnPocketArray.map((x) => ({
  name: x,
  value: x,
})).sort((a, b) =>
  a.name.localeCompare(b.name, undefined, {
    numeric: true,
    sensitivity: "base",
  }),
);
const DeliveryDoorFlapArray = ["AV", "GOOD", "XAV", "XGOOD"];
const DeliveryDoorFlapOptions = DeliveryDoorFlapArray.map((x) => ({
  name: x,
  value: x,
})).sort((a, b) =>
  a.name.localeCompare(b.name, undefined, {
    numeric: true,
    sensitivity: "base",
  }),
);
const SecDoorPanelArray = ["AV", "GOOD", "XAV", "XGOOD"];
const SecDoorPanelOptions = SecDoorPanelArray.map((x) => ({
  name: x,
  value: x,
})).sort((a, b) =>
  a.name.localeCompare(b.name, undefined, {
    numeric: true,
    sensitivity: "base",
  }),
);
const SecDoorFlapArray = ["AV", "GOOD", "XAV", "XGOOD"];
const SecDoorFlapOptions = SecDoorFlapArray.map((x) => ({
  name: x,
  value: x,
})).sort((a, b) =>
  a.name.localeCompare(b.name, undefined, {
    numeric: true,
    sensitivity: "base",
  }),
);
const ColumnStndArray = ["AV", "GOOD", "XAV", "XGOOD"];
const ColumnStndOptions = ColumnStndArray.map((x) => ({
  name: x,
  value: x,
})).sort((a, b) =>
  a.name.localeCompare(b.name, undefined, {
    numeric: true,
    sensitivity: "base",
  }),
);
const ColumnModArray = ["AV", "GOOD", "XAV", "XGOOD"];
const ColumnModOptions = ColumnModArray.map((x) => ({
  name: x,
  value: x,
})).sort((a, b) =>
  a.name.localeCompare(b.name, undefined, {
    numeric: true,
    sensitivity: "base",
  }),
);
const ColumnFlipperArray = ["AV", "GOOD", "XAV", "XGOOD"];
const ColumnFlipperOptions = ColumnFlipperArray.map((x) => ({
  name: x,
  value: x,
})).sort((a, b) =>
  a.name.localeCompare(b.name, undefined, {
    numeric: true,
    sensitivity: "base",
  }),
);
const ProductChuteArray = ["AV", "GOOD", "XAV", "XGOOD"];
const ProductChuteOptions = ProductChuteArray.map((x) => ({
  name: x,
  value: x,
})).sort((a, b) =>
  a.name.localeCompare(b.name, undefined, {
    numeric: true,
    sensitivity: "base",
  }),
);
const MachineMaintenanceArray = ["AV", "GOOD", "XAV", "XGOOD"];
const MachineMaintenanceOptions = MachineMaintenanceArray.map((x) => ({
  name: x,
  value: x,
})).sort((a, b) =>
  a.name.localeCompare(b.name, undefined, {
    numeric: true,
    sensitivity: "base",
  }),
);
const PSUBoardArray = ["AV", "GOOD", "XAV", "XGOOD"];
const PSUBoardOptions = PSUBoardArray.map((x) => ({ name: x, value: x })).sort(
  (a, b) =>
    a.name.localeCompare(b.name, undefined, {
      numeric: true,
      sensitivity: "base",
    }),
);
const VendBoardArray = ["AV", "GOOD", "XAV", "XGOOD"];
const VendBoardOptions = VendBoardArray.map((x) => ({
  name: x,
  value: x,
})).sort((a, b) =>
  a.name.localeCompare(b.name, undefined, {
    numeric: true,
    sensitivity: "base",
  }),
);
const RelaySupplyArray = ["AV", "GOOD", "XAV", "XGOOD"];
const RelaySupplyOptions = RelaySupplyArray.map((x) => ({
  name: x,
  value: x,
})).sort((a, b) =>
  a.name.localeCompare(b.name, undefined, {
    numeric: true,
    sensitivity: "base",
  }),
);
const MemoryBoardArray = ["AV", "GOOD", "XAV", "XGOOD"];
const MemoryBoardOptions = MemoryBoardArray.map((x) => ({
  name: x,
  value: x,
})).sort((a, b) =>
  a.name.localeCompare(b.name, undefined, {
    numeric: true,
    sensitivity: "base",
  }),
);
const RemoteArray = ["AV", "GOOD", "XAV", "XGOOD"];
const RemoteOptions = RemoteArray.map((x) => ({ name: x, value: x })).sort(
  (a, b) =>
    a.name.localeCompare(b.name, undefined, {
      numeric: true,
      sensitivity: "base",
    }),
);
const CompressorArray = ["AV", "GOOD", "XAV", "XGOOD"];
const CompressorOptions = CompressorArray.map((x) => ({
  name: x,
  value: x,
})).sort((a, b) =>
  a.name.localeCompare(b.name, undefined, {
    numeric: true,
    sensitivity: "base",
  }),
);
const CoolingFanArray = ["AV", "GOOD", "XAV", "XGOOD"];
const CoolingFanOptions = CoolingFanArray.map((x) => ({
  name: x,
  value: x,
})).sort((a, b) =>
  a.name.localeCompare(b.name, undefined, {
    numeric: true,
    sensitivity: "base",
  }),
);
const WiringArray = ["AV", "GOOD", "XAV", "XGOOD"];
const WiringOptions = WiringArray.map((x) => ({ name: x, value: x })).sort(
  (a, b) =>
    a.name.localeCompare(b.name, undefined, {
      numeric: true,
      sensitivity: "base",
    }),
);
const MotorArray = ["AV", "GOOD", "XAV", "XGOOD"];
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

const CbStage1CreateDialogComponent = (props) => {
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
    };

    setLoading(true);
    try {
      await client.service("cbStage1").patch(_entity._id, _data);
      const eagerResult = await client.service("cbStage1").find({
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
        message: "Info cbStage1 updated successfully",
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
      header="Edit Info"
      visible={props.show}
      closable={false}
      onHide={props.onHide}
      modal
      style={{ width: "40vw" }}
      className="min-w-max"
      footer={renderFooter()}
      resizable={false}
    >
      <div role="cbStage1-edit-dialog-component">
        <div>
          <p className="m-0">Ref:</p>
          <Dropdown
            value={_entity?.Ref?._id}
            options={RefOptions}
            optionLabel="name"
            optionValue="value"
            onChange={(e) => setValByKey("Ref", { _id: e.value })}
          />
        </div>
        <div>
          <p className="m-0">ExternalBody:</p>
          <Dropdown
            value={_entity?.ExternalBody}
            options={ExternalBodyOptions}
            optionLabel="name"
            optionValue="value"
            onChange={(e) => setValByKey("ExternalBody", { _id: e.value })}
          />
        </div>
        <div>
          <p className="m-0">InternalBody:</p>
          <Dropdown
            value={_entity?.InternalBody}
            options={InternalBodyOptions}
            optionLabel="name"
            optionValue="value"
            onChange={(e) => setValByKey("InternalBody", { _id: e.value })}
          />
        </div>
        <div>
          <p className="m-0">DisplayPanel:</p>
          <Dropdown
            value={_entity?.DisplayPanel}
            options={DisplayPanelOptions}
            optionLabel="name"
            optionValue="value"
            onChange={(e) => setValByKey("DisplayPanel", { _id: e.value })}
          />
        </div>
        <div>
          <p className="m-0">DoorHandle:</p>
          <Dropdown
            value={_entity?.DoorHandle}
            options={DoorHandleOptions}
            optionLabel="name"
            optionValue="value"
            onChange={(e) => setValByKey("DoorHandle", { _id: e.value })}
          />
        </div>
        <div>
          <p className="m-0">CoinReturnLever:</p>
          <Dropdown
            value={_entity?.CoinReturnLever}
            options={CoinReturnLeverOptions}
            optionLabel="name"
            optionValue="value"
            onChange={(e) => setValByKey("CoinReturnLever", { _id: e.value })}
          />
        </div>
        <div>
          <p className="m-0">CoinReturnPocket:</p>
          <Dropdown
            value={_entity?.CoinReturnPocket}
            options={CoinReturnPocketOptions}
            optionLabel="name"
            optionValue="value"
            onChange={(e) => setValByKey("CoinReturnPocket", { _id: e.value })}
          />
        </div>
        <div>
          <p className="m-0">DeliveryDoorFlap:</p>
          <Dropdown
            value={_entity?.DeliveryDoorFlap}
            options={DeliveryDoorFlapOptions}
            optionLabel="name"
            optionValue="value"
            onChange={(e) => setValByKey("DeliveryDoorFlap", { _id: e.value })}
          />
        </div>
        <div>
          <p className="m-0">SecDoorPanel:</p>
          <Dropdown
            value={_entity?.SecDoorPanel}
            options={SecDoorPanelOptions}
            optionLabel="name"
            optionValue="value"
            onChange={(e) => setValByKey("SecDoorPanel", { _id: e.value })}
          />
        </div>
        <div>
          <p className="m-0">SecDoorFlap:</p>
          <Dropdown
            value={_entity?.SecDoorFlap}
            options={SecDoorFlapOptions}
            optionLabel="name"
            optionValue="value"
            onChange={(e) => setValByKey("SecDoorFlap", { _id: e.value })}
          />
        </div>
        <div>
          <p className="m-0">ColumnStnd:</p>
          <Dropdown
            value={_entity?.ColumnStnd}
            options={ColumnStndOptions}
            optionLabel="name"
            optionValue="value"
            onChange={(e) => setValByKey("ColumnStnd", { _id: e.value })}
          />
        </div>
        <div>
          <p className="m-0">ColumnMod:</p>
          <Dropdown
            value={_entity?.ColumnMod}
            options={ColumnModOptions}
            optionLabel="name"
            optionValue="value"
            onChange={(e) => setValByKey("ColumnMod", { _id: e.value })}
          />
        </div>
        <div>
          <p className="m-0">ColumnFlipper:</p>
          <Dropdown
            value={_entity?.ColumnFlipper}
            options={ColumnFlipperOptions}
            optionLabel="name"
            optionValue="value"
            onChange={(e) => setValByKey("ColumnFlipper", { _id: e.value })}
          />
        </div>
        <div>
          <p className="m-0">ProductChute:</p>
          <Dropdown
            value={_entity?.ProductChute}
            options={ProductChuteOptions}
            optionLabel="name"
            optionValue="value"
            onChange={(e) => setValByKey("ProductChute", { _id: e.value })}
          />
        </div>
        <div>
          <p className="m-0">MachineMaintenance:</p>
          <Dropdown
            value={_entity?.MachineMaintenance}
            options={MachineMaintenanceOptions}
            optionLabel="name"
            optionValue="value"
            onChange={(e) =>
              setValByKey("MachineMaintenance", { _id: e.value })
            }
          />
        </div>
        <div>
          <p className="m-0">PSUBoard:</p>
          <Dropdown
            value={_entity?.PSUBoard}
            options={PSUBoardOptions}
            optionLabel="name"
            optionValue="value"
            onChange={(e) => setValByKey("PSUBoard", { _id: e.value })}
          />
        </div>
        <div>
          <p className="m-0">VendBoard:</p>
          <Dropdown
            value={_entity?.VendBoard}
            options={VendBoardOptions}
            optionLabel="name"
            optionValue="value"
            onChange={(e) => setValByKey("VendBoard", { _id: e.value })}
          />
        </div>
        <div>
          <p className="m-0">RelaySupply:</p>
          <Dropdown
            value={_entity?.RelaySupply}
            options={RelaySupplyOptions}
            optionLabel="name"
            optionValue="value"
            onChange={(e) => setValByKey("RelaySupply", { _id: e.value })}
          />
        </div>
        <div>
          <p className="m-0">MemoryBoard:</p>
          <Dropdown
            value={_entity?.MemoryBoard}
            options={MemoryBoardOptions}
            optionLabel="name"
            optionValue="value"
            onChange={(e) => setValByKey("MemoryBoard", { _id: e.value })}
          />
        </div>
        <div>
          <p className="m-0">Remote:</p>
          <Dropdown
            value={_entity?.Remote}
            options={RemoteOptions}
            optionLabel="name"
            optionValue="value"
            onChange={(e) => setValByKey("Remote", { _id: e.value })}
          />
        </div>
        <div>
          <p className="m-0">Compressor:</p>
          <Dropdown
            value={_entity?.Compressor}
            options={CompressorOptions}
            optionLabel="name"
            optionValue="value"
            onChange={(e) => setValByKey("Compressor", { _id: e.value })}
          />
        </div>
        <div>
          <p className="m-0">CoolingFan:</p>
          <Dropdown
            value={_entity?.CoolingFan}
            options={CoolingFanOptions}
            optionLabel="name"
            optionValue="value"
            onChange={(e) => setValByKey("CoolingFan", { _id: e.value })}
          />
        </div>
        <div>
          <p className="m-0">Wiring:</p>
          <Dropdown
            value={_entity?.Wiring}
            options={WiringOptions}
            optionLabel="name"
            optionValue="value"
            onChange={(e) => setValByKey("Wiring", { _id: e.value })}
          />
        </div>
        <div>
          <p className="m-0">Motor:</p>
          <Dropdown
            value={_entity?.Motor}
            options={MotorOptions}
            optionLabel="name"
            optionValue="value"
            onChange={(e) => setValByKey("Motor", { _id: e.value })}
          />
        </div>
        <div>
          <p className="m-0">
            createdAt:{" " + moment(_entity?.createdAt).fromNow()}
          </p>
        </div>
        <div>
          <p className="m-0">
            lastUpdatedAt:{" " + moment(_entity?.updatedAt).fromNow()}
          </p>
        </div>
        <div>
          <p className="m-0">createdBy:{" " + _entity?.createdBy?.name}</p>
        </div>
        <div>
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

export default connect(mapState, mapDispatch)(CbStage1CreateDialogComponent);
