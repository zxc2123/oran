function draw() {
  const resultDiv = document.getElementById("result");
  const bigRankDiv = document.getElementById("big-rank");
  const loadingDiv = document.getElementById("loading");

  // UI 초기화
  resultDiv.innerText = "";
  bigRankDiv.innerText = "";

  // 제목과 버튼 숨김
  document.getElementById("buttons").style.display = "none";
  document.getElementById("main-title").style.display = "none";
  document.getElementById("sub-title").style.display = "none";

  // 로딩 표시
  loadingDiv.style.display = "block";

  // 3초 후 결과 표시
  setTimeout(() => {
    loadingDiv.style.display = "none";

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
    bigRankDiv.innerText = selected;
  }, 3000);
}

function showRewards() {
  const popup = window.open("", "popup", "width=400,height=400");
  popup.document.write(`
    <html lang="ko">
    <head>
      <title>상품 목록</title>
      <style>
        body {
          background-color: #fdf8f0;
          font-family: Arial, sans-serif;
          color: #4e4035;
          padding: 20px;
        }
        h2 {
          text-align: center;
          color: #7d6b5b;
        }
        ul {
          list-style: none;
          padding: 0;
          font-size: 1.2em;
        }
        li {
          margin: 15px 0;
        }
      </style>
    </head>
    <body>
      <h2>🎁 상품 목록 🎁</h2>
      <ul>
        <li>1등 - 1등 보상</li>
        <li>2등 - 2등 보상</li>
        <li>3등 - 3등 보상</li>
        <li>4등 - 4등 보상</li>
        <li>5등 - 5등 보상</li>
      </ul>
    </body>
    </html>
  `);
}

