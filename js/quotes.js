const quotes = [
  {
    quote:
      "개선이란 무언가가 좋지 않다고 느낄 수 있는 사람들에 의해서만 만들어질 수 있다.",
    author: "Friedrich Nietzsche",
  },
  {
    quote: "오늘 할 수 있는 일을 내일로 미루지 마라.",
    author: "Benjamin Franklin",
  },
  {
    quote:
      "조금도 위험을 감수하지 않는 것이 인생에서 가장 위험한 일일 것이라 믿는다.",
    author: "Oprah Winfrey",
  },
  {
    quote:
      "만일 내게 나무를 베기 위해 한 시간만 주어진다면, 우선 나는 도끼를 가는데 45분을 쓸 것이다.",
    author: "Abraham Lincoln",
  },
  {
    quote: "자신의 가족을 가르칠 수 없는 자는 남을 가르칠 수 없다.",
    author: "Confucius",
  },
  {
    quote: "예측은 매우 어려우며, 미래에 대해서는 특히 그렇다",
    author: "Niels Bohr",
  },
  {
    quote: "순간들을 소중히 여기다 보면, 긴 세월은 저절로 흘러간다.",
    author: "Maria Edgeworth",
  },
  {
    quote: "미래는 현재 우리가 무엇을 하는가에 달려 있다.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "집중력은 자신감과 갈망이 결합하여 생긴다.",
    author: "Arnold Palmer",
  },
  {
    quote: "성공이란 열정을 잃지 않고 실패를 거듭할 수 있는 능력이다.",
    author: "Sir Winston Churchill",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuotes.quote;
author.innerText = todayQuotes.author;

// math module
// math module 중 랜덤 function = random()
// math.random() * 10 => 0에서 10사이의 숫자들을 얻을 수 있음
// 소수점 값을 상수로 얻기 위한 math function 3가지
// 1. math.round(); 반올림 처리
// 2. math.ceil(); 올림 처리
// 3. math.floor(); 내림처리

//randomness
