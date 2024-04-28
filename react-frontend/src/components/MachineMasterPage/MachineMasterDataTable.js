
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState, useRef } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';

import moment from "moment";

const MachineMasterDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    const dt = useRef(null);
     
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.ownership}</p>
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.vmcode}</p>
    const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.zone}</p>
    const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.locationCode}</p>
    const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.locationDesc}</p>
    const pTemplate5 = (rowData, { rowIndex }) => <p >{rowData.modelNo}</p>
    const pTemplate6 = (rowData, { rowIndex }) => <p >{rowData.serialNumber}</p>
    const pTemplate7 = (rowData, { rowIndex }) => <p >{rowData.vmId}</p>
    const pTemplate8 = (rowData, { rowIndex }) => <p >{rowData.purchaseDate}</p>
    const pTemplate9 = (rowData, { rowIndex }) => <p >{rowData.commissionDate}</p>
    const pTemplate10 = (rowData, { rowIndex }) => <p >{rowData.description}</p>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    const pCreatedAt = (rowData, { rowIndex }) => (<p>{moment(rowData.createdAt).fromNow()}</p>);
    const pUpdatedAt = (rowData, { rowIndex }) => (<p>{moment(rowData.updatedAt).fromNow()}</p>);
    const pCreatedBy = (rowData, { rowIndex }) => (
        <p>{rowData.createdBy?.name}</p>
    );
    const pUpdatedBy = (rowData, { rowIndex }) => (<p>{rowData.updatedBy?.name}</p>);
    const paginatorLeft = (<Button type="button" icon="pi pi-refresh" text onClick={() => setRefresh(!refresh)}/>);
    const paginatorRight = <Button type="button" icon="pi pi-download" text onClick={() => exportCSV()}/>;
    const exportCSV = () => {dt.current?.exportCSV();};

    return (
        <DataTable value={items} ref={dt} onRowClick={onRowClick} scrollable rowHover stripedRows paginator rows={10} rowsPerPageOptions={[10, 50, 250, 500]} size={"small"}  paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight} rowClassName="cursor-pointer">
            <Column field="ownership" header="Ownership" body={pTemplate0} sortable style={{ minWidth: "8rem" }} />
            <Column field="vmcode" header="Vmcode" body={pTemplate1} sortable style={{ minWidth: "8rem" }} />
            <Column field="zone" header="Zone" body={pTemplate2} sortable style={{ minWidth: "8rem" }} />
            <Column field="locationCode" header="Location Code" body={pTemplate3} sortable style={{ minWidth: "8rem" }} />
            <Column field="locationDesc" header="Location Desc" body={pTemplate4} style={{ minWidth: "8rem" }} />
            <Column field="modelNo" header="Model No" body={pTemplate5} sortable style={{ minWidth: "8rem" }} />
            <Column field="serialNumber" header="Serial Number" body={pTemplate6} sortable style={{ minWidth: "8rem" }} />
            <Column field="vmId" header="Vm Id" body={pTemplate7} sortable style={{ minWidth: "8rem" }} />
            <Column field="purchaseDate" header="purchaseDate" body={pTemplate8} sortable style={{ minWidth: "8rem" }} />
            <Column field="commissionDate" header="commissionDate" body={pTemplate9} sortable style={{ minWidth: "8rem" }} />
            <Column field="description" header="Description" body={pTemplate10} style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
            //<Column field="createdAt" header="created" body={pCreatedAt} sortable style={{ minWidth: "8rem" }} />
            //<Column field="updatedAt" header="updated" body={pUpdatedAt} sortable style={{ minWidth: "8rem" }} />
            //<Column field="createdBy" header="createdBy" body={pCreatedBy} sortable style={{ minWidth: "8rem" }} />
            //<Column field="updatedBy" header="updatedBy" body={pUpdatedBy} sortable style={{ minWidth: "8rem" }} />
        </DataTable>
    );
};

export default MachineMasterDataTable;