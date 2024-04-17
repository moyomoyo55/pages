const resources = [
  {
    name: "Oil",
    quantity: 1000,
    baseConsumption: 150,
    techCost: 200,
    regenerationRate: 50,
  },
  {
    name: "Coal",
    quantity: 1000,
    baseConsumption: 150,
    techCost: 200,
    regenerationRate: 60,
  },
  {
    name: "Iron",
    quantity: 1000,
    baseConsumption: 150,
    techCost: 200,
    regenerationRate: 70,
  },
  {
    name: "Water",
    quantity: 10000,
    baseConsumption: 800,
    techCost: 200,
    regenerationRate: 1000,
  },
];
let techLevel = 1; // 初期技術レベル
let year = 2020; // 初期年

function updateResourceDisplay() {
  const resourceDiv = document.getElementById("resources");
  resourceDiv.innerHTML = ""; // リソース表示をクリア
  resources.forEach((resource) => {
    const resourceElement = document.createElement("p");
    let consumption = Math.max(resource.baseConsumption - techLevel * 10, 0); // 消費量を計算
    resourceElement.innerHTML = `${resource.name}: ${resource.quantity} units<br>Consumption: ${consumption} units/year<br>Regeneration: ${resource.regenerationRate} units/year`;
    resourceDiv.appendChild(resourceElement);
  });
}

function advanceYear() {
  resources.forEach((resource) => {
    let consumption = Math.max(resource.baseConsumption - techLevel * 10, 0);
    resource.quantity -= consumption;
    resource.quantity += resource.regenerationRate;
    if (resource.quantity < 0) {
      alert(`${resource.name} has depleted! Game over.`);
      return;
    }
  });
  year++;
  document.getElementById("year").textContent = year;
  updateResourceDisplay(); // UIとグラフの更新
}

function investInTechnology() {
  const techInvestmentCost = 100;
  if (resources[0].quantity >= techInvestmentCost) {
    resources[0].quantity -= techInvestmentCost;
    techLevel++;
    document.getElementById("techLevel").textContent = techLevel;
    updateResourceDisplay(); // UIとグラフの更新
  } else {
    alert("Not enough resources to invest in technology.");
  }
}

// 初期化時にリソースを表示
updateResourceDisplay();
