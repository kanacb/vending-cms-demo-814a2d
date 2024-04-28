import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import moment from "moment";
import { InputText } from 'primereact/inputtext';

const SingleCbStage2Page = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();

    const [Ref, setRef] = useState([]);

    useEffect(() => {
        //on mount
        client
            .service("cbStage2")
            .get(urlParams.singleCbStage2Id, { query: { $populate: [            {
                path: "createdBy",
                service: "users",
                select: ["name"],
              },{
                path: "updatedBy",
                service: "users",
                select: ["name"],
              },"Ref"] }})
            .then((res) => {
                set_entity(res || {});
                const Ref = Array.isArray(res.Ref)
            ? res.Ref.map((elem) => ({ _id: elem._id, RefNo: elem.RefNo }))
            : res.Ref
                ? [{ _id: res.Ref._id, RefNo: res.Ref.RefNo }]
                : [];
        setRef(Ref);
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "CbStage2", type: "error", message: error.message || "Failed get cbStage2" });
            });
    }, [props,urlParams.singleCbStage2Id]);


    const goBack = () => {
        navigate(-1, { replace: true });
    };

    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">CbStage2</h3>
                </div>
                <p>cbStage2/{urlParams.singleCbStage2Id}</p>
                {/* ~cb-project-dashboard~ */}
            </div>
            <div className="card w-full">
                <div className="grid ">

            <div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Ref</label><p className="" >{_entity?.Ref?.RefNo}</p></div>
                    <div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">ExternalBody</label><p className="" >{_entity?.ExternalBody}</p></div>
                    <div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">InternalBody</label><p className="" >{_entity?.InternalBody}</p></div>
                    <div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">DisplayPanel</label><p className="" >{_entity?.DisplayPanel}</p></div>
                    <div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">DoorHandle</label><p className="" >{_entity?.DoorHandle}</p></div>
                    <div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">CoinReturnLever</label><p className="" >{_entity?.CoinReturnLever}</p></div>
                    <div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">CoinReturnPocket</label><p className="" >{_entity?.CoinReturnPocket}</p></div>
                    <div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">DeliveryDoorFlap</label><p className="" >{_entity?.DeliveryDoorFlap}</p></div>
                    <div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">SecDoorPanel</label><p className="" >{_entity?.SecDoorPanel}</p></div>
                    <div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">SecDoorFlap</label><p className="" >{_entity?.SecDoorFlap}</p></div>
                    <div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">ColumnStnd</label><p className="" >{_entity?.ColumnStnd}</p></div>
                    <div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">ColumnMod</label><p className="" >{_entity?.ColumnMod}</p></div>
                    <div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">ColumnFlipper</label><p className="" >{_entity?.ColumnFlipper}</p></div>
                    <div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">MachineMaintenance</label><p className="" >{_entity?.MachineMaintenance}</p></div>
                    <div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">PSUBoard</label><p className="" >{_entity?.PSUBoard}</p></div>
                    <div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">VendBoard</label><p className="" >{_entity?.VendBoard}</p></div>
                    <div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">RelaySupply</label><p className="" >{_entity?.RelaySupply}</p></div>
                    <div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">MemoryBoard</label><p className="" >{_entity?.MemoryBoard}</p></div>
                    <div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Remote</label><p className="" >{_entity?.Remote}</p></div>
                    <div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Compressor</label><p className="" >{_entity?.Compressor}</p></div>
                    <div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">CoolingFan</label><p className="" >{_entity?.CoolingFan}</p></div>
                    <div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Wiring</label><p className="" >{_entity?.Wiring}</p></div>
                    <div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Motor</label><p className="" >{_entity?.Motor}</p></div>
                    <div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Remarks</label><p className="" >{_entity?.remarks}</p></div>
            <label className="text-sm">Ref</label>
            <p>{Ref.map((elem) => (
                    <Link key={elem._id} to={`/cBMasterForm/${elem._id}`}>
                        <div className="card">
                            <p>{elem.RefNo}</p>
                        </div>
                    </Link>
                ))}</p>
                    
                    <div className="col-12 md:col-6 lg:col-3">
                        <label className="text-sm text-primary">created</label>
                        <p className="">{moment(_entity?.createdAt).fromNow()}</p>
                    </div>
                    
                    <div className="col-12 md:col-6 lg:col-3">
                        <label className="text-sm text-primary">updated</label>
                        <p className="">{moment(_entity?.updatedAt).fromNow()}</p>
                    </div>
                    
                    <div className="col-12 md:col-6 lg:col-3">
                        <label className="text-sm text-primary">createdBy</label>
                        <p className="">{_entity?.createdBy?.name}</p>
                    </div>
                    
                    <div className="col-12 md:col-6 lg:col-3">
                        <label className="text-sm text-primary">lastUpdatedBy</label>
                        <p className="">{_entity?.updatedBy?.name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapState = (state) => {
    return {};
};

const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
    //
});

export default connect(mapState, mapDispatch)(SingleCbStage2Page);
