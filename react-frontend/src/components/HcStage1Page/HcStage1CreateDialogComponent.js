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
const DeliveryDoorflapArray = ["AV", "GOOD", "XAV", "XGOOD"];
const DeliveryDoorflapOptions = DeliveryDoorflapArray.map((x) => ({
  name: x,
  value: x,
}));
const SelectorButtonArray = ["AV", "GOOD", "XAV", "XGOOD"];
const SelectorButtonOptions = SelectorButtonArray.map((x) => ({
  name: x,
  value: x,
}));
const BodyStickerArray = ["AV", "GOOD", "XAV", "XGOOD"];
const BodyStickerOptions = BodyStickerArray.map((x) => ({ name: x, value: x }));
const ProductCanisterArray = ["AV", "GOOD", "XAV", "XGOOD"];
const ProductCanisterOptions = ProductCanisterArray.map((x) => ({
  name: x,
  value: x,
}));
const ChuteArray = ["AV", "GOOD", "XAV", "XGOOD"];
const ChuteOptions = ChuteArray.map((x) => ({ name: x, value: x }));
const TubeArray = ["AV", "GOOD", "XAV", "XGOOD"];
const TubeOptions = TubeArray.map((x) => ({ name: x, value: x }));
const CarbonationUnitArray = ["AV", "GOOD", "XAV", "XGOOD"];
const CarbonationUnitOptions = CarbonationUnitArray.map((x) => ({
  name: x,
  value: x,
}));
const SyrupCanisterArray = ["AV", "GOOD", "XAV", "XGOOD"];
const SyrupCanisterOptions = SyrupCanisterArray.map((x) => ({
  name: x,
  value: x,
}));
const ValveArray = ["AV", "GOOD", "XAV", "XGOOD"];
const ValveOptions = ValveArray.map((x) => ({ name: x, value: x }));
const MachineFloorBoardArray = ["AV", "GOOD", "XAV", "XGOOD"];
const MachineFloorBoardOptions = MachineFloorBoardArray.map((x) => ({
  name: x,
  value: x,
}));
const PaymentDeviceArray = ["AV", "GOOD", "XAV", "XGOOD"];
const PaymentDeviceOptions = PaymentDeviceArray.map((x) => ({
  name: x,
  value: x,
}));
const CashlessUnitArray = ["AV", "GOOD", "XAV", "XGOOD"];
const CashlessUnitOptions = CashlessUnitArray.map((x) => ({
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
const IceMakerArray = ["AV", "GOOD", "XAV", "XGOOD"];
const IceMakerOptions = IceMakerArray.map((x) => ({ name: x, value: x }));

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

const HcStage1CreateDialogComponent = (props) => {
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
      DeliveryDoorflap: _entity?.DeliveryDoorflap,
      SelectorButton: _entity?.SelectorButton,
      BodySticker: _entity?.BodySticker,
      ProductCanister: _entity?.ProductCanister,
      Chute: _entity?.Chute,
      Tube: _entity?.Tube,
      CarbonationUnit: _entity?.CarbonationUnit,
      SyrupCanister: _entity?.SyrupCanister,
      Valve: _entity?.Valve,
      MachineFloorBoard: _entity?.MachineFloorBoard,
      PaymentDevice: _entity?.PaymentDevice,
      CashlessUnit: _entity?.CashlessUnit,
      PSUBoard: _entity?.PSUBoard,
      VendBoard: _entity?.VendBoard,
      RelaySupply: _entity?.RelaySupply,
      MemoryBoard: _entity?.MemoryBoard,
      Remote: _entity?.Remote,
      Compressor: _entity?.Compressor,
      CoolingFan: _entity?.CoolingFan,
      IceMaker: _entity?.IceMaker,
      createdBy: props.user._id,
      updatedBy: props.user._id,
    };

    setLoading(true);

    try {
      const result = await client.service("hcStage1").create(_data);
      const eagerResult = await client.service("hcStage1").find({
        query: {
          $limit: 10000,
          _id: { $in: [result._id] },
          $populate: [
            {
              path: "Ref",
              service: "hCMasterForm",
              select: ["RefNo"],
            },
          ],
        },
      });
      props.onHide();
      props.alert({
        type: "success",
        title: "Create info",
        message: "Info hcStage1 updated successfully",
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
    //on mount hCMasterForm
    client
      .service("hCMasterForm")
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
          title: "HCMasterForm",
          type: "error",
          message: error.message || "Failed get hCMasterForm",
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
      header="Create Hot Cold Stage 1"
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
        role="hcStage1-create-dialog-component"
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
              id="DeliveryDoorflap"
              value={_entity?.DeliveryDoorflap}
              options={DeliveryDoorflapOptions}
              optionLabel="name"
              optionValue="value"
              onChange={(e) => setValByKey("DeliveryDoorflap", e.value)}
            />
            <label htmlFor="DeliveryDoorflap">DeliveryDoorflap:</label>
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="p-float-label">
            <Dropdown
              id="SelectorButton"
              value={_entity?.SelectorButton}
              options={SelectorButtonOptions}
              optionLabel="name"
              optionValue="value"
              onChange={(e) => setValByKey("SelectorButton", e.value)}
            />
            <label htmlFor="SelectorButton">SelectorButton:</label>
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="p-float-label">
            <Dropdown
              id="BodySticker"
              value={_entity?.BodySticker}
              options={BodyStickerOptions}
              optionLabel="name"
              optionValue="value"
              onChange={(e) => setValByKey("BodySticker", e.value)}
            />
            <label htmlFor="BodySticker">BodySticker:</label>
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="p-float-label">
            <Dropdown
              id="ProductCanister"
              value={_entity?.ProductCanister}
              options={ProductCanisterOptions}
              optionLabel="name"
              optionValue="value"
              onChange={(e) => setValByKey("ProductCanister", e.value)}
            />
            <label htmlFor="ProductCanister">ProductCanister:</label>
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="p-float-label">
            <Dropdown
              id="Chute"
              value={_entity?.Chute}
              options={ChuteOptions}
              optionLabel="name"
              optionValue="value"
              onChange={(e) => setValByKey("Chute", e.value)}
            />
            <label htmlFor="Chute">Chute:</label>
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="p-float-label">
            <Dropdown
              id="Tube"
              value={_entity?.Tube}
              options={TubeOptions}
              optionLabel="name"
              optionValue="value"
              onChange={(e) => setValByKey("Tube", e.value)}
            />
            <label htmlFor="Tube">Tube:</label>
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="p-float-label">
            <Dropdown
              id="CarbonationUnit"
              value={_entity?.CarbonationUnit}
              options={CarbonationUnitOptions}
              optionLabel="name"
              optionValue="value"
              onChange={(e) => setValByKey("CarbonationUnit", e.value)}
            />
            <label htmlFor="CarbonationUnit">CarbonationUnit:</label>
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="p-float-label">
            <Dropdown
              id="SyrupCanister"
              value={_entity?.SyrupCanister}
              options={SyrupCanisterOptions}
              optionLabel="name"
              optionValue="value"
              onChange={(e) => setValByKey("SyrupCanister", e.value)}
            />
            <label htmlFor="SyrupCanister">SyrupCanister:</label>
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="p-float-label">
            <Dropdown
              id="Valve"
              value={_entity?.Valve}
              options={ValveOptions}
              optionLabel="name"
              optionValue="value"
              onChange={(e) => setValByKey("Valve", e.value)}
            />
            <label htmlFor="Valve">Valve:</label>
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="p-float-label">
            <Dropdown
              id="MachineFloorBoard"
              value={_entity?.MachineFloorBoard}
              options={MachineFloorBoardOptions}
              optionLabel="name"
              optionValue="value"
              onChange={(e) => setValByKey("MachineFloorBoard", e.value)}
            />
            <label htmlFor="MachineFloorBoard">MachineFloorBoard:</label>
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="p-float-label">
            <Dropdown
              id="PaymentDevice"
              value={_entity?.PaymentDevice}
              options={PaymentDeviceOptions}
              optionLabel="name"
              optionValue="value"
              onChange={(e) => setValByKey("PaymentDevice", e.value)}
            />
            <label htmlFor="PaymentDevice">PaymentDevice:</label>
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="p-float-label">
            <Dropdown
              id="CashlessUnit"
              value={_entity?.CashlessUnit}
              options={CashlessUnitOptions}
              optionLabel="name"
              optionValue="value"
              onChange={(e) => setValByKey("CashlessUnit", e.value)}
            />
            <label htmlFor="CashlessUnit">CashlessUnit:</label>
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
              id="IceMaker"
              value={_entity?.IceMaker}
              options={IceMakerOptions}
              optionLabel="name"
              optionValue="value"
              onChange={(e) => setValByKey("IceMaker", e.value)}
            />
            <label htmlFor="IceMaker">IceMaker:</label>
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

export default connect(mapState, mapDispatch)(HcStage1CreateDialogComponent);
