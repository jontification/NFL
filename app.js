const d = window.dashboardData;
document.getElementById('currentWeek').textContent = d.currentWeek;
document.getElementById('lastUpdated').textContent = d.lastUpdated;
const bets = d.recommendationLog.filter(x=>x.decision==='BET');
const wins = bets.filter(x=>x.result==='Win').length;
const losses = bets.filter(x=>x.result==='Loss').length;
const pushes = bets.filter(x=>x.result==='Push').length;
const pl = bets.reduce((s,x)=>s+(parseFloat(x.pl)||0),0);
const posClv = bets.filter(x=>parseFloat(x.clv)>0).length;
const kpis = [ ['Bets', bets.length], ['Wins', wins], ['Losses', losses], ['Pushes', pushes], ['Units', pl.toFixed(2)], ['Positive CLV', posClv] ];
document.getElementById('kpis').innerHTML = kpis.map(([k,v])=>`<div class="kpi"><span>${k}</span><strong>${v}</strong></div>`).join('');
function badge(text){let cls=text==='ANALYSIS INCOMPLETE'?'INCOMPLETE':text;return `<span class="badge ${cls}">${text}</span>`}
function table(el, cols, rows){document.getElementById(el).innerHTML = `<thead><tr>${cols.map(c=>`<th>${c[0]}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr>${cols.map(c=>`<td>${c[1](r)}</td>`).join('')}</tr>`).join('')}</tbody>`}
table('cardTable', [
  ['Game', r=>r.game], ['Market', r=>r.market], ['Model', r=>r.model], ['Edge', r=>r.edge], ['Decision', r=>badge(r.decision)], ['Bet', r=>r.bet], ['Thesis', r=>r.thesis]
], d.weeklyCard);
document.getElementById('injuryList').innerHTML = d.injuries.map(x=>`<div class="injury"><strong>${x.team}: ${x.player}</strong><span>${x.status}</span><p>${x.note}</p></div>`).join('');
table('logTable', [
  ['Week', r=>r.week], ['Date', r=>r.date], ['Game', r=>r.game], ['Type', r=>r.type], ['Selection', r=>r.selection], ['Line', r=>r.line], ['Decision', r=>badge(r.decision)], ['CLV', r=>r.clv], ['Result', r=>r.result], ['P/L', r=>r.pl], ['Notes', r=>r.notes]
], d.recommendationLog);
