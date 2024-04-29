import { faker } from "@faker-js/faker";
export default (
  count,
  RefIds,
  RefNoIds,
  opsCentreIdIds,
  locationIdIds,
  machineIdIds,
  technicianIdIds,
) => {
  let data = [];
  for (let i = 0; i < count; i++) {
    const fake = {
      opsCentreId: opsCentreIdIds[i % opsCentreIdIds.length],
      locationId: locationIdIds[i % locationIdIds.length],
      machineId: machineIdIds[i % machineIdIds.length],
      technicianId: technicianIdIds[i % technicianIdIds.length],
    };
    data = [...data, fake];
  }
  return data;
};
