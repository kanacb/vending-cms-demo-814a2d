import { faker } from "@faker-js/faker";
export default (
  count,
  RefIds,
  RefNoIds,
  locationIdIds,
  machineIdIds,
  technicianIdIds,
) => {
  let data = [];
  for (let i = 0; i < count; i++) {
    const fake = {
      locationId: locationIdIds[i % locationIdIds.length],
      machineId: machineIdIds[i % machineIdIds.length],
      technicianId: technicianIdIds[i % technicianIdIds.length],
    };
    data = [...data, fake];
  }
  return data;
};
