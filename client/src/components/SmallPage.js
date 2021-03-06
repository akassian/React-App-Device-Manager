import React, { Fragment } from "react";
const SmallPage = ({
  devices,
  columnName
}) => {
  const clonedDevices = devices.map(device => ({ ...device }));
  let topDevices;
  // Sort a chosen column using a comparator
  const sortColumn = (devices, columnName, rowNum) => {
    switch (columnName) {
      case "CPU":
        //propertyName = "cpuPct";
        devices.sort(function (a, b) {
          return b.cpuPct - a.cpuPct;
        });
        break;
      case "Mem":
        //propertyName = "memBytes";
        devices.sort(function (a, b) {
          return b.memBytes - a.memBytes;
        });
        break;
      case "TX":
        //propertyName = "networkTxBytes";
        devices.sort(function (a, b) {
          return b.networkTxBytes - a.networkTxBytes;
        });
        break;
      case "RX":
        //propertyName = "networkRxBytes";
        devices.sort(function (a, b) {
          return b.networkRxBytes - a.networkRxBytes;
        });
        break;
      default:
    }
    let tDevices = devices.slice(0, rowNum);
    return tDevices;
  }
  let size = Math.min(devices.length, 5);
  topDevices = sortColumn(clonedDevices, columnName, size);
  //let topDevices1 = topDevices.map(device => ({ ip: device.ip, owner: device.owner, [propertyName]: device[propertyName] }));
  return (
    <Fragment>
      <div>
        <p className="title"> Top 5 Devices in {columnName} </p>
        <table className="table table-bordered table-condensed table-striped table-hover">
          <thead>
            <tr>
              <th className="col-md-2">IP</th>
              <th className="col-md-2">Owner</th>
              {/* Conditional rendering column */}
              {columnName === "CPU" && (<th className="col-md-2">CPU</th>)}
              {columnName === "Mem" && (<th className="col-md-2">Mem</th>)}
              {columnName === "TX" && (<th className="col-md-2">TX</th>)}
              {columnName === "RX" && (<th className="col-md-2">RX</th>)}
            </tr>
          </thead>
          <tbody>
            {topDevices.map((device, i) => (
              <tr key={i}>
                <td>{device.ip}</td>
                <td>{device.owner}</td>
                {/* Conditional rendering column */}
                {columnName === "CPU" && (<td>{device.cpuPct}%</td>)}
                {columnName === "Mem" && (< td > {device.memBytes} GB</td>)}
                {columnName === "TX" && (<td>{device.networkTxBytes} MB</td>)}
                {columnName === "RX" && (<td>{device.networkRxBytes} MB</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment >
  );
}
export default SmallPage;

