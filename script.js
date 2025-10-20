function draw() {
  const resultDiv = document.getElementById("result");
  const rewardsDiv = document.getElementById("rewards");
  rewardsDiv.style.display = "none";

  // 확률 설정 (총합이 1이어야 함)
  const probabilities = [
    { grade: "1등", chance: 0.2 }, // ← 확률 조정 가능
    { grade: "2등", chance: 0.2 },
    { grade: "3등", chance: 0.2 },
    { grade: "4등", chance: 0.2 },
    { grade: "5등", chance: 0.2 },
  ];

  const rand = Math.random();
  let cumulative = 0;
  let selected = "꽝";

  for (let i = 0; i < probabilities.length; i++) {
    cumulative += probabilities[i].chance;
    if (rand < cumulative) {
      selected = probabilities[i].grade;
      break;
    }
  }

  resultDiv.innerText = `🎉 축하합니다! ${selected} 당첨 🎉`;
}

function showRewards() {
  const rewardsDiv = document.getElementById("rewards");
  const resultDiv = document.getElementById("result");
  resultDiv.innerText = "";
  rewardsDiv.style.display = "block";
}
