function buildMedievalCastle() {
  var kingName = "Arthur"; // Old way, function-scoped

  let wallHeight = 30; // New way, block-scoped

  const KINGDOM = "Camelot"; // Constant, won't change

  if (true) {
    var kingName = "Lancelot"; // This changes the outer kingName
    let wallHeight = 40; // This creates a new wallHeight only for this block
    //KINGDOM = "Avalon"; // This would cause an error if uncommented

    console.log(kingName, wallHeight, KINGDOM); // Outputs: "Lancelot", 40, "Camelot"
  }

  console.log(kingName, wallHeight, KINGDOM); // Outputs: "Lancelot", 30, "Camelot"
}

buildMedievalCastle();
