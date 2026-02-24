// ===============================
// PAGE 2 – AUTO RISK COUNT
// ===============================
function autoRiskAnalysis() {
  const ph = document.getElementById("ph").value;
  const turbidity = document.getElementById("turbidity").value;
  const temp = document.getElementById("temp").value;

  if (ph === "" || turbidity === "" || temp === "") {
    document.getElementById("riskCountDisplay").innerText = "-";
    return;
  }

  let risk = 0;

  if (ph < 6.5 || ph > 8.5) risk++;
  if (turbidity > 5) risk++;
  if (temp < 10 || temp > 30) risk++;

  document.getElementById("riskCountDisplay").innerText = risk;
}

// ===============================
// PAGE 2 – START ANALYSIS
// ===============================
function startAnalysis() {
  const ph = Number(document.getElementById("ph").value);
  const turbidity = Number(document.getElementById("turbidity").value);
  const temp = Number(document.getElementById("temp").value);

  if (!ph || !turbidity || !temp) {
    alert("Please fill all parameters first");
    return;
  }

  let riskCount = 0;
  if (ph < 6.5 || ph > 8.5) riskCount++;
  if (turbidity > 5) riskCount++;
  if (temp < 10 || temp > 30) riskCount++;

  let riskLevel = "LOW RISK";
  if (riskCount === 1) riskLevel = "MODERATE RISK";
  if (riskCount >= 2) riskLevel = "HIGH RISK";

  const waterData = {
    ph: ph,
    turbidity: turbidity,
    temp: temp,
    riskCount: riskCount,
    riskLevel: riskLevel
  };

  localStorage.setItem("waterData", JSON.stringify(waterData));

  window.location.href = "result.html";
}

// ===============================
// PAGE 3 – LOAD RESULT
// ===============================
function loadResult() {
  const ph = localStorage.getItem("ph");
  const turbidity = localStorage.getItem("turbidity");
  const temp = localStorage.getItem("temperature");
  const risk = Number(localStorage.getItem("riskCount"));

  if (!ph || !turbidity || !temp) return;

  document.getElementById("phResult").innerText = ph;
  document.getElementById("turbidityResult").innerText = turbidity;
  document.getElementById("tempResult").innerText = temp;
  document.getElementById("riskCountResult").innerText = risk;

  let level = "Low Risk";
  if (risk === 1) level = "Moderate Risk";
  if (risk >= 2) level = "High Risk";

  document.getElementById("riskLevelResult").innerText = level;
}