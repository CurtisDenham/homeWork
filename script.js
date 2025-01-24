const vehicles = [
    { make: "Ford", model: "Mustang", engine: "5.0L V8" },
    { make: "Chevrolet", model: "Corvette", engine: "6.2L V8" },
    { make: "Dodge", model: "Challenger", engine: "6.4L V8" }
  ];
  
  
  const vehicleDescriptions = vehicles.map(vehicle => {
    return `${vehicle.make} ${vehicle.model} with a ${vehicle.engine}`;
  });
  console.log("Vehicle Descriptions:");
  console.log(vehicleDescriptions);
  
  
  const largeEngines = vehicles.filter(vehicle => {
    const engineSize = parseFloat(vehicle.engine.split(" ")[0]);
    return engineSize > 6.0;
  });
  console.log("\nVehicles with engines larger than 6.0L:");
  console.log(largeEngines);
  
  
  const totalV8Vehicles = vehicles.reduce((count, vehicle) => {
    if (vehicle.engine.includes("V8")) {
      return count + 1;
    }
    return count;
  }, 0);
  console.log("\nTotal number of V8 vehicles:");
  console.log(totalV8Vehicles);
  
  
  console.log("\nDetails of each vehicle:");
  vehicles.forEach(vehicle => {
    console.log(`${vehicle.make} ${vehicle.model} - Engine: ${vehicle.engine}`);
  });
