import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import client from "../../services/restClient";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import moment from "moment";
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';


const ExternalBodyArray = ["Service","Repair"]
const ExternalBodyOptions = ExternalBodyArray.map((x) => ({ name: x, value: x })).sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric : true, sensitivity: "base"}));
const InternalBodyArray = ["Service","Repair"]
const InternalBodyOptions = InternalBodyArray.map((x) => ({ name: x, value: x })).sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric : true, sensitivity: "base"}));
const DoorHandleArray = ["Service","Repair"]
const DoorHandleOptions = DoorHandleArray.map((x) => ({ name: x, value: x })).sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric : true, sensitivity: "base"}));
const CoinReturnLeverArray = ["Service","Repair"]
const CoinReturnLeverOptions = CoinReturnLeverArray.map((x) => ({ name: x, value: x })).sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric : true, sensitivity: "base"}));
const CoinReturnPocketArray = ["Service","Repair"]
const CoinReturnPocketOptions = CoinReturnPocketArray.map((x) => ({ name: x, value: x })).sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric : true, sensitivity: "base"}));
const DeliveryDoorFlapArray = ["Service","Repair"]
const DeliveryDoorFlapOptions = DeliveryDoorFlapArray.map((x) => ({ name: x, value: x })).sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric : true, sensitivity: "base"}));
const SelectorButtonArray = ["Service","Repair"]
const SelectorButtonOptions = SelectorButtonArray.map((x) => ({ name: x, value: x })).sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric : true, sensitivity: "base"}));
const BodyStickerArray = ["Service","Repair"]
const BodyStickerOptions = BodyStickerArray.map((x) => ({ name: x, value: x })).sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric : true, sensitivity: "base"}));
const ProductCanisterArray = ["Service","Repair"]
const ProductCanisterOptions = ProductCanisterArray.map((x) => ({ name: x, value: x })).sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric : true, sensitivity: "base"}));
const ChuteArray = ["Service","Repair"]
const ChuteOptions = ChuteArray.map((x) => ({ name: x, value: x })).sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric : true, sensitivity: "base"}));
const TubeArray = ["Service","Repair"]
const TubeOptions = TubeArray.map((x) => ({ name: x, value: x })).sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric : true, sensitivity: "base"}));
const CarbonationUnitArray = ["Service","Repair"]
const CarbonationUnitOptions = CarbonationUnitArray.map((x) => ({ name: x, value: x })).sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric : true, sensitivity: "base"}));
const SyrupCanisterArray = ["Service","Repair"]
const SyrupCanisterOptions = SyrupCanisterArray.map((x) => ({ name: x, value: x })).sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric : true, sensitivity: "base"}));
const ValveArray = ["Service","Repair"]
const ValveOptions = ValveArray.map((x) => ({ name: x, value: x })).sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric : true, sensitivity: "base"}));
const MachineFloorBoardArray = ["Service","Repair"]
const MachineFloorBoardOptions = MachineFloorBoardArray.map((x) => ({ name: x, value: x })).sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric : true, sensitivity: "base"}));
const PaymentDeviceArray = ["Service","Repair"]
const PaymentDeviceOptions = PaymentDeviceArray.map((x) => ({ name: x, value: x })).sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric : true, sensitivity: "base"}));
const CashlessUnitArray = ["Service","Repair"]
const CashlessUnitOptions = CashlessUnitArray.map((x) => ({ name: x, value: x })).sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric : true, sensitivity: "base"}));
const PSUBoardArray = ["Service","Repair"]
const PSUBoardOptions = PSUBoardArray.map((x) => ({ name: x, value: x })).sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric : true, sensitivity: "base"}));
const VendBoardArray = ["Service","Repair"]
const VendBoardOptions = VendBoardArray.map((x) => ({ name: x, value: x })).sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric : true, sensitivity: "base"}));
const RelaySupplyArray = ["Service","Repair"]
const RelaySupplyOptions = RelaySupplyArray.map((x) => ({ name: x, value: x })).sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric : true, sensitivity: "base"}));
const MemoryBoardArray = ["Service","Repair"]
const MemoryBoardOptions = MemoryBoardArray.map((x) => ({ name: x, value: x })).sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric : true, sensitivity: "base"}));
const RemoteArray = ["Service","Repair"]
const RemoteOptions = RemoteArray.map((x) => ({ name: x, value: x })).sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric : true, sensitivity: "base"}));
const CompressorArray = ["Service","Repair"]
const CompressorOptions = CompressorArray.map((x) => ({ name: x, value: x })).sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric : true, sensitivity: "base"}));
const CoolingFanArray = ["Service","Repair"]
const CoolingFanOptions = CoolingFanArray.map((x) => ({ name: x, value: x })).sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric : true, sensitivity: "base"}));
const IceMakerArray = ["Service","Repair"]
const IceMakerOptions = IceMakerArray.map((x) => ({ name: x, value: x })).sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric : true, sensitivity: "base"}));

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

const HcStage2CreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [RefNo, setRefNo] = useState([])

    useEffect(() => {
        set_entity(props.entity);
    }, [props.entity, props.show]);

    useEffect(() => {
                    //on mount hCMasterForm 
                    client
                        .service("hCMasterForm")
                        .find({ query: { $limit: 10000, $sort: { createdAt: -1 } } })
                        .then((res) => {
                            setRefNo(res.data.map((e) => ({ name: e['RefNo'], value: e._id })));
                        })
                        .catch((error) => {
                            console.log({ error });
                            props.alert({ title: "HCMasterForm", type: "error", message: error.message || "Failed get hCMasterForm" });
                        });
                }, []);

    const onSave = async () => {
        let _data = {
            RefNo: _entity?.RefNo?._id,
            ExternalBody: _entity?.ExternalBody,
            InternalBody: _entity?.InternalBody,
            DoorHandle: _entity?.DoorHandle,
            CoinReturnLever: _entity?.CoinReturnLever,
            CoinReturnPocket: _entity?.CoinReturnPocket,
            DeliveryDoorFlap: _entity?.DeliveryDoorFlap,
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
        };

        setLoading(true);
        try {
            
        await client.service("hcStage2").patch(_entity._id, _data);
        const eagerResult = await client
            .service("hcStage2")
            .find({ query: { $limit: 10000 ,  _id :  { $in :[_entity._id]}, $populate : [
                
                {
                    path : "RefNo",
                    service : "hCMasterForm",
                    select:["RefNo"]
                }
            
            ] }});
        props.onHide();
        props.alert({ type: "success", title: "Edit info", message: "Info hcStage2 updated successfully" });
        props.onEditResult(eagerResult.data[0]);
        } catch (error) {
            console.log("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to update info");
            props.alert({ type: "error", title: "Edit info", message: "Failed to update info" });
        }
        setLoading(false);
    };

    const renderFooter = () => (
        <div className="flex justify-content-end">
            <Button label="save" className="p-button-text no-focus-effect" onClick={onSave} loading={loading} />
            <Button label="close" className="p-button-text no-focus-effect p-button-secondary" onClick={props.onHide} />
        </div>
    );

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
        setError("");
    };
    // children dropdown options

    const RefNoOptions = RefNo.map((elem) => ({ name: elem.name, value: elem.value })).sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric : true, sensitivity: "base"}));

    return (
        <Dialog header="Edit Hot Cold Stage 2" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="hcStage2-edit-dialog-component">
                <div>
                <p className="m-0">RefNo:</p>
                <Dropdown id="RefNo" value={_entity?.RefNo?._id} options={RefNoOptions} optionLabel="name" optionValue="value" onChange={(e) => setValByKey("RefNo", {_id : e.value})} />
            </div>
            <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <Dropdown id="ExternalBody" value={_entity?.ExternalBody} options={ExternalBodyOptions} optionLabel="name" optionValue="value" onChange={(e) => setValByKey("ExternalBody", e.value)} />
                    <label htmlFor="ExternalBody">ExternalBody:</label>
                </span>
            </div>
            <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <Dropdown id="InternalBody" value={_entity?.InternalBody} options={InternalBodyOptions} optionLabel="name" optionValue="value" onChange={(e) => setValByKey("InternalBody", e.value)} />
                    <label htmlFor="InternalBody">InternalBody:</label>
                </span>
            </div>
            <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <Dropdown id="DoorHandle" value={_entity?.DoorHandle} options={DoorHandleOptions} optionLabel="name" optionValue="value" onChange={(e) => setValByKey("DoorHandle", e.value)} />
                    <label htmlFor="DoorHandle">DoorHandle:</label>
                </span>
            </div>
            <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <Dropdown id="CoinReturnLever" value={_entity?.CoinReturnLever} options={CoinReturnLeverOptions} optionLabel="name" optionValue="value" onChange={(e) => setValByKey("CoinReturnLever", e.value)} />
                    <label htmlFor="CoinReturnLever">CoinReturnLever:</label>
                </span>
            </div>
            <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <Dropdown id="CoinReturnPocket" value={_entity?.CoinReturnPocket} options={CoinReturnPocketOptions} optionLabel="name" optionValue="value" onChange={(e) => setValByKey("CoinReturnPocket", e.value)} />
                    <label htmlFor="CoinReturnPocket">CoinReturnPocket:</label>
                </span>
            </div>
            <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <Dropdown id="DeliveryDoorFlap" value={_entity?.DeliveryDoorFlap} options={DeliveryDoorFlapOptions} optionLabel="name" optionValue="value" onChange={(e) => setValByKey("DeliveryDoorFlap", e.value)} />
                    <label htmlFor="DeliveryDoorFlap">DeliveryDoorFlap:</label>
                </span>
            </div>
            <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <Dropdown id="SelectorButton" value={_entity?.SelectorButton} options={SelectorButtonOptions} optionLabel="name" optionValue="value" onChange={(e) => setValByKey("SelectorButton", e.value)} />
                    <label htmlFor="SelectorButton">SelectorButton:</label>
                </span>
            </div>
            <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <Dropdown id="BodySticker" value={_entity?.BodySticker} options={BodyStickerOptions} optionLabel="name" optionValue="value" onChange={(e) => setValByKey("BodySticker", e.value)} />
                    <label htmlFor="BodySticker">BodySticker:</label>
                </span>
            </div>
            <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <Dropdown id="ProductCanister" value={_entity?.ProductCanister} options={ProductCanisterOptions} optionLabel="name" optionValue="value" onChange={(e) => setValByKey("ProductCanister", e.value)} />
                    <label htmlFor="ProductCanister">ProductCanister:</label>
                </span>
            </div>
            <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <Dropdown id="Chute" value={_entity?.Chute} options={ChuteOptions} optionLabel="name" optionValue="value" onChange={(e) => setValByKey("Chute", e.value)} />
                    <label htmlFor="Chute">Chute:</label>
                </span>
            </div>
            <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <Dropdown id="Tube" value={_entity?.Tube} options={TubeOptions} optionLabel="name" optionValue="value" onChange={(e) => setValByKey("Tube", e.value)} />
                    <label htmlFor="Tube">Tube:</label>
                </span>
            </div>
            <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <Dropdown id="CarbonationUnit" value={_entity?.CarbonationUnit} options={CarbonationUnitOptions} optionLabel="name" optionValue="value" onChange={(e) => setValByKey("CarbonationUnit", e.value)} />
                    <label htmlFor="CarbonationUnit">CarbonationUnit:</label>
                </span>
            </div>
            <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <Dropdown id="SyrupCanister" value={_entity?.SyrupCanister} options={SyrupCanisterOptions} optionLabel="name" optionValue="value" onChange={(e) => setValByKey("SyrupCanister", e.value)} />
                    <label htmlFor="SyrupCanister">SyrupCanister:</label>
                </span>
            </div>
            <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <Dropdown id="Valve" value={_entity?.Valve} options={ValveOptions} optionLabel="name" optionValue="value" onChange={(e) => setValByKey("Valve", e.value)} />
                    <label htmlFor="Valve">Valve:</label>
                </span>
            </div>
            <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <Dropdown id="MachineFloorBoard" value={_entity?.MachineFloorBoard} options={MachineFloorBoardOptions} optionLabel="name" optionValue="value" onChange={(e) => setValByKey("MachineFloorBoard", e.value)} />
                    <label htmlFor="MachineFloorBoard">MachineFloorBoard:</label>
                </span>
            </div>
            <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <Dropdown id="PaymentDevice" value={_entity?.PaymentDevice} options={PaymentDeviceOptions} optionLabel="name" optionValue="value" onChange={(e) => setValByKey("PaymentDevice", e.value)} />
                    <label htmlFor="PaymentDevice">PaymentDevice:</label>
                </span>
            </div>
            <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <Dropdown id="CashlessUnit" value={_entity?.CashlessUnit} options={CashlessUnitOptions} optionLabel="name" optionValue="value" onChange={(e) => setValByKey("CashlessUnit", e.value)} />
                    <label htmlFor="CashlessUnit">CashlessUnit:</label>
                </span>
            </div>
            <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <Dropdown id="PSUBoard" value={_entity?.PSUBoard} options={PSUBoardOptions} optionLabel="name" optionValue="value" onChange={(e) => setValByKey("PSUBoard", e.value)} />
                    <label htmlFor="PSUBoard">PSUBoard:</label>
                </span>
            </div>
            <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <Dropdown id="VendBoard" value={_entity?.VendBoard} options={VendBoardOptions} optionLabel="name" optionValue="value" onChange={(e) => setValByKey("VendBoard", e.value)} />
                    <label htmlFor="VendBoard">VendBoard:</label>
                </span>
            </div>
            <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <Dropdown id="RelaySupply" value={_entity?.RelaySupply} options={RelaySupplyOptions} optionLabel="name" optionValue="value" onChange={(e) => setValByKey("RelaySupply", e.value)} />
                    <label htmlFor="RelaySupply">RelaySupply:</label>
                </span>
            </div>
            <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <Dropdown id="MemoryBoard" value={_entity?.MemoryBoard} options={MemoryBoardOptions} optionLabel="name" optionValue="value" onChange={(e) => setValByKey("MemoryBoard", e.value)} />
                    <label htmlFor="MemoryBoard">MemoryBoard:</label>
                </span>
            </div>
            <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <Dropdown id="Remote" value={_entity?.Remote} options={RemoteOptions} optionLabel="name" optionValue="value" onChange={(e) => setValByKey("Remote", e.value)} />
                    <label htmlFor="Remote">Remote:</label>
                </span>
            </div>
            <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <Dropdown id="Compressor" value={_entity?.Compressor} options={CompressorOptions} optionLabel="name" optionValue="value" onChange={(e) => setValByKey("Compressor", e.value)} />
                    <label htmlFor="Compressor">Compressor:</label>
                </span>
            </div>
            <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <Dropdown id="CoolingFan" value={_entity?.CoolingFan} options={CoolingFanOptions} optionLabel="name" optionValue="value" onChange={(e) => setValByKey("CoolingFan", e.value)} />
                    <label htmlFor="CoolingFan">CoolingFan:</label>
                </span>
            </div>
            <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <Dropdown id="IceMaker" value={_entity?.IceMaker} options={IceMakerOptions} optionLabel="name" optionValue="value" onChange={(e) => setValByKey("IceMaker", e.value)} />
                    <label htmlFor="IceMaker">IceMaker:</label>
                </span>
            </div>
                <div className="col-12 md:col-6 field mt-5"><p className="m-0">createdAt:{" " + moment(_entity?.createdAt).fromNow()}</p></div>
                <div className="col-12 md:col-6 field mt-5"><p className="m-0">lastUpdatedAt:{" " + moment(_entity?.updatedAt).fromNow()}</p></div>
                <div className="col-12 md:col-6 field mt-5"><p className="m-0">createdBy:{" " +_entity?.createdBy?.name}</p></div>
                <div className="col-12 md:col-6 field mt-5"><p className="m-0">lastUpdatedBy:{" " +_entity?.updatedBy?.name}</p></div>
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

export default connect(mapState, mapDispatch)(HcStage2CreateDialogComponent);
