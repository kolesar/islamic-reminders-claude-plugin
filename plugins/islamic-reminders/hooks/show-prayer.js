#!/usr/bin/env node

// Reverse string for RTL display in terminals
const reverse = (str) => [...str].reverse().join('');

const prayers = [
  { english: "Glory be to Allah", arabic: "سبحان الله" },
  { english: "All praise is due to Allah", arabic: "الحمد لله" },
  { english: "Allah is the Greatest", arabic: "الله اكبر" },
  { english: "There is no god but Allah", arabic: "لا اله الا الله" },
  { english: "I seek forgiveness from Allah", arabic: "استغفر الله" },
  { english: "Glory be to Allah and praise Him", arabic: "سبحان الله وبحمده" },
  { english: "Glory be to Allah, the Magnificent", arabic: "سبحان الله العظيم" },
  { english: "No power or strength except with Allah", arabic: "لا حول ولا قوة الا بالله" },
  { english: "I put my trust in Allah", arabic: "توكلت على الله" },
  { english: "What Allah wills", arabic: "ما شاء الله" }
];

const prayer = prayers[Math.floor(Math.random() * prayers.length)];
const message = `${prayer.english} - ${reverse(prayer.arabic)}`;

console.log(JSON.stringify({
  continue: true,
  systemMessage: message
}));
