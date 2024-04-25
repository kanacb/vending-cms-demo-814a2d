import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import client from "../../services/restClient";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';

const ExternalBodyArray = ["Service","Repair"];
const ExternalBodyOptions = ExternalBodyArray.map((x) => ({ name: x, value: x }));
const InternalBodyArray = ["Service","Repair"];
const InternalBodyOptions = InternalBodyArray.map((x) => ({ name: x, value: x }));
const DisplayPanelArray = ["Service","Repair"];
const DisplayPanelOptions = DisplayPanelArray.map((x) => ({ name: x, value: x }));
const DoorHandleArray = ["Service","Repair"];
const DoorHandleOptions = DoorHandleArray.map((x) => ({ name: x, value: x }));
const CoinReturnLeverArray = ["Service","Repair"];
const CoinReturnLeverOptions = CoinReturnLeverArray.map((x) => ({ name: x, value: x }));
const CoinReturnPocketArray = ["Service","Repair"];
const CoinReturnPocketOptions = CoinReturnPocketArray.map((x) => ({ name: x, value: x }));
const DeliveryDoorFlapArray = ["Service","Repair"];
const DeliveryDoorFlapOptions = DeliveryDoorFlapArray.map((x) => ({ name: x, value: x }));
const SelectorButtonArray = ["Service","Repair"];
const SelectorButtonOptions = SelectorButtonArray.map((x) => ({ name: x, value: x }));
const BodyStickerArray = ["Service","Repair"];
const BodyStickerOptions = BodyStickerArray.map((x) => ({ name: x, value: x }));
const ProductCanisterArray = ["Service","Repair"];
const ProductCanisterOptions = ProductCanisterArray.map((x) => ({ name: x, value: x }));
const ChuteArray = ["Service","Repair"];
const ChuteOptions = ChuteArray.map((x) => ({ name: x, value: x }));
const TubeArray = ["Service","Repair"];
const TubeOptions = TubeArray.map((x) => ({ name: x, value: x }));
const CarbonationUnitArray = ["Service","Repair"];
const CarbonationUnitOptions = CarbonationUnitArray.map((x) => ({ name: x, value: x }));
const SyrupCanisterArray = ["Service","Repair"];
const SyrupCanisterOptions = SyrupCanisterArray.map((x) => ({ name: x, value: x }));
const ValveArray = ["Service","Repair"];
const ValveOptions = ValveArray.map((x) => ({ name: x, value: x }));
const MachineFloorBoardArray = ["Service","Repair"];
const MachineFloorBoardOptions = MachineFloorBoardArray.map((x) => ({ name: x, value: x }));
const PaymentDeviceArray = ["Service","Repair"];
const PaymentDeviceOptions = PaymentDeviceArray.map((x) => ({ name: x, value: x }));
const CashlessUnitArray = ["Service","Repair"];
const CashlessUnitOptions = CashlessUnitArray.map((x) => ({ name: x, value: x }));
const PSUBoardArray = ["Service","Repair"];
const PSUBoardOptions = PSUBoardArray.map((x) => ({ name: x, value: x }));
const VendBoardArray = ["Service","Repair"];
const VendBoardOptions = VendBoardArray.map((x) => ({ name: x, value: x }));
const RelaySupplyArray = ["Service","Repair"];
const RelaySupplyOptions = RelaySupplyArray.map((x) => ({ name: x, value: x }));
const MemoryBoardArray = ["Service","Repair"];
const MemoryBoardOptions = MemoryBoardArray.map((x) => ({ name: x, value: x }));
const RemoteArray = ["Service","Repair"];
const RemoteOptions = RemoteArray.map((x) => ({ name: x, value: x }));
const CompressorArray = ["Service","Repair"];
const CompressorOptions = CompressorArray.map((x) => ({ name: x, value: x }));
const CoolingFanArray = ["Service","Repair"];
const CoolingFanOptions = CoolingFanArray.map((x) => ({ name: x, value: x }));
const IceMakerArray = ["Service","Repair"];
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

const HcStage2CreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const [RefNo, setRefNo] = useState([])

    useEffect(() => {
        // replace this when there is a date field
        // const init  = { todate : new Date(), from : new Date()};
        // set_entity({...init});
        set_entity({});
    }, [props.show]);

    const onSave = async () => {
        let _data = {
            RefNo: _entity?.RefNo?._id,
            ExternalBody: _entity?.ExternalBody,
            InternalBody: _entity?.InternalBody,
            DisplayPanel: _entity?.DisplayPanel,
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
            createdBy: props.user._id,
            updatedBy: props.user._id
        };

        setLoading(true);

        try {
            
        const result = await client.service("hcStage2").create(_data);
        const eagerResult = await client
            .service("hcStage2")
            .find({ query: { $limit: 10000 ,  _id :  { $in :[result._id]}, $populate : [
                
                {
                    path : "RefNo",
                    service : "hCMasterForm",
                    select:["RefNo"]
                }
            
            ] }});
        props.onHide();
        props.alert({ type: "success", title: "Create info", message: "Info hcStage2 updated successfully" });
        props.onCreateResult(eagerResult.data[0]);
        } catch (error) {
            console.log("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to create");
            props.alert({ type: "error", title: "Create", message: "Failed to create" });
        }
        setLoading(false);
    };

     useEffect(() => {
                    //on mount hCMasterForm
                    client
                        .service("hCMasterForm")
                        .find({ query: { $limit: 10000, $sort: { createdAt: -1 } } })
                        .then((res) => {
                            setRefNo(res.data.map((e) => { return { name: e['RefNo'], value: e._id }}));
                        })
                        .catch((error) => {
                            console.log({ error });
                            props.alert({ title: "HCMasterForm", type: "error", message: error.message || "Failed get hCMasterForm" });
                        });
                }, []);

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

    const RefNoOptions = RefNo.map((elem) => ({ name: elem.name, value: elem.value }));

    return (
        <Dialog header="Create" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div role="hcStage2-create-dialog-component">
            <div>
                <p className="m-0">RefNo:</p>
                <Dropdown value={_entity?.RefNo} optionLabel="name" optionValue="value" options={RefNoOptions} onChange={(e) => setValByKey("RefNo", {_id : e.value})} />
            </div>
            <div>
                <p className="m-0">ExternalBody:</p>
                <Dropdown value={_entity?.ExternalBody} optionLabel="name" optionValue="value" options={ExternalBodyOptions} onChange={(e) => setValByKey("ExternalBody", {_id : e.value})} />
            </div>
            <div>
                <p className="m-0">InternalBody:</p>
                <Dropdown value={_entity?.InternalBody} optionLabel="name" optionValue="value" options={InternalBodyOptions} onChange={(e) => setValByKey("InternalBody", {_id : e.value})} />
            </div>
            <div>
                <p className="m-0">DisplayPanel:</p>
                <Dropdown value={_entity?.DisplayPanel} optionLabel="name" optionValue="value" options={DisplayPanelOptions} onChange={(e) => setValByKey("DisplayPanel", {_id : e.value})} />
            </div>
            <div>
                <p className="m-0">DoorHandle:</p>
                <Dropdown value={_entity?.DoorHandle} optionLabel="name" optionValue="value" options={DoorHandleOptions} onChange={(e) => setValByKey("DoorHandle", {_id : e.value})} />
            </div>
            <div>
                <p className="m-0">CoinReturnLever:</p>
                <Dropdown value={_entity?.CoinReturnLever} optionLabel="name" optionValue="value" options={CoinReturnLeverOptions} onChange={(e) => setValByKey("CoinReturnLever", {_id : e.value})} />
            </div>
            <div>
                <p className="m-0">CoinReturnPocket:</p>
                <Dropdown value={_entity?.CoinReturnPocket} optionLabel="name" optionValue="value" options={CoinReturnPocketOptions} onChange={(e) => setValByKey("CoinReturnPocket", {_id : e.value})} />
            </div>
            <div>
                <p className="m-0">DeliveryDoorFlap:</p>
                <Dropdown value={_entity?.DeliveryDoorFlap} optionLabel="name" optionValue="value" options={DeliveryDoorFlapOptions} onChange={(e) => setValByKey("DeliveryDoorFlap", {_id : e.value})} />
            </div>
            <div>
                <p className="m-0">SelectorButton:</p>
                <Dropdown value={_entity?.SelectorButton} optionLabel="name" optionValue="value" options={SelectorButtonOptions} onChange={(e) => setValByKey("SelectorButton", {_id : e.value})} />
            </div>
            <div>
                <p className="m-0">BodySticker:</p>
                <Dropdown value={_entity?.BodySticker} optionLabel="name" optionValue="value" options={BodyStickerOptions} onChange={(e) => setValByKey("BodySticker", {_id : e.value})} />
            </div>
            <div>
                <p className="m-0">ProductCanister:</p>
                <Dropdown value={_entity?.ProductCanister} optionLabel="name" optionValue="value" options={ProductCanisterOptions} onChange={(e) => setValByKey("ProductCanister", {_id : e.value})} />
            </div>
            <div>
                <p className="m-0">Chute:</p>
                <Dropdown value={_entity?.Chute} optionLabel="name" optionValue="value" options={ChuteOptions} onChange={(e) => setValByKey("Chute", {_id : e.value})} />
            </div>
            <div>
                <p className="m-0">Tube:</p>
                <Dropdown value={_entity?.Tube} optionLabel="name" optionValue="value" options={TubeOptions} onChange={(e) => setValByKey("Tube", {_id : e.value})} />
            </div>
            <div>
                <p className="m-0">CarbonationUnit:</p>
                <Dropdown value={_entity?.CarbonationUnit} optionLabel="name" optionValue="value" options={CarbonationUnitOptions} onChange={(e) => setValByKey("CarbonationUnit", {_id : e.value})} />
            </div>
            <div>
                <p className="m-0">SyrupCanister:</p>
                <Dropdown value={_entity?.SyrupCanister} optionLabel="name" optionValue="value" options={SyrupCanisterOptions} onChange={(e) => setValByKey("SyrupCanister", {_id : e.value})} />
            </div>
            <div>
                <p className="m-0">Valve:</p>
                <Dropdown value={_entity?.Valve} optionLabel="name" optionValue="value" options={ValveOptions} onChange={(e) => setValByKey("Valve", {_id : e.value})} />
            </div>
            <div>
                <p className="m-0">MachineFloorBoard:</p>
                <Dropdown value={_entity?.MachineFloorBoard} optionLabel="name" optionValue="value" options={MachineFloorBoardOptions} onChange={(e) => setValByKey("MachineFloorBoard", {_id : e.value})} />
            </div>
            <div>
                <p className="m-0">PaymentDevice:</p>
                <Dropdown value={_entity?.PaymentDevice} optionLabel="name" optionValue="value" options={PaymentDeviceOptions} onChange={(e) => setValByKey("PaymentDevice", {_id : e.value})} />
            </div>
            <div>
                <p className="m-0">CashlessUnit:</p>
                <Dropdown value={_entity?.CashlessUnit} optionLabel="name" optionValue="value" options={CashlessUnitOptions} onChange={(e) => setValByKey("CashlessUnit", {_id : e.value})} />
            </div>
            <div>
                <p className="m-0">PSUBoard:</p>
                <Dropdown value={_entity?.PSUBoard} optionLabel="name" optionValue="value" options={PSUBoardOptions} onChange={(e) => setValByKey("PSUBoard", {_id : e.value})} />
            </div>
            <div>
                <p className="m-0">VendBoard:</p>
                <Dropdown value={_entity?.VendBoard} optionLabel="name" optionValue="value" options={VendBoardOptions} onChange={(e) => setValByKey("VendBoard", {_id : e.value})} />
            </div>
            <div>
                <p className="m-0">RelaySupply:</p>
                <Dropdown value={_entity?.RelaySupply} optionLabel="name" optionValue="value" options={RelaySupplyOptions} onChange={(e) => setValByKey("RelaySupply", {_id : e.value})} />
            </div>
            <div>
                <p className="m-0">MemoryBoard:</p>
                <Dropdown value={_entity?.MemoryBoard} optionLabel="name" optionValue="value" options={MemoryBoardOptions} onChange={(e) => setValByKey("MemoryBoard", {_id : e.value})} />
            </div>
            <div>
                <p className="m-0">Remote:</p>
                <Dropdown value={_entity?.Remote} optionLabel="name" optionValue="value" options={RemoteOptions} onChange={(e) => setValByKey("Remote", {_id : e.value})} />
            </div>
            <div>
                <p className="m-0">Compressor:</p>
                <Dropdown value={_entity?.Compressor} optionLabel="name" optionValue="value" options={CompressorOptions} onChange={(e) => setValByKey("Compressor", {_id : e.value})} />
            </div>
            <div>
                <p className="m-0">CoolingFan:</p>
                <Dropdown value={_entity?.CoolingFan} optionLabel="name" optionValue="value" options={CoolingFanOptions} onChange={(e) => setValByKey("CoolingFan", {_id : e.value})} />
            </div>
            <div>
                <p className="m-0">IceMaker:</p>
                <Dropdown value={_entity?.IceMaker} optionLabel="name" optionValue="value" options={IceMakerOptions} onChange={(e) => setValByKey("IceMaker", {_id : e.value})} />
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

export default connect(mapState, mapDispatch)(HcStage2CreateDialogComponent);
