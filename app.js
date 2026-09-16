const d=window.dashboardData;
const rec=d.seasonRecord;
const bets=d.recommendationLog.filter(x=>x.decision==='BET');
const kpis=[
  ['Week 2 Bets','TBD','(preliminary)'],
  ['Season Record',`${rec.wins}-${rec.losses}`,`(+${rec.units.toFixed(1)} units)`],
  ['Avg Closing Line Value',`+${rec.avgClv}`,'points'],
  ['ROI',`+${rec.roi}%`,'so far']
];
document.getElementById('kpis').innerHTML=kpis.map((x,i)=>`<div class="kpi"><div class="label">${x[0]}</div><strong class="${i? 'positive':''}">${x[1]}</strong><div class="label">${x[2]}</div></div>`).join('')+`<div class="kpi key"><div><div class="label" style="margin-bottom:9px">Recommendation Key</div></div><div class="legend"><span class="dot bet"></span><b>BET</b></div><div class="legend"><span class="dot watch"></span><b>WATCH</b></div><div class="legend"><span class="dot pass"></span><b>PASS</b></div></div>`;
document.getElementById('updated').textContent='Last Updated: '+d.lastUpdated;
const badge=s=>`<span class="status ${s}">${s}</span>`;
document.getElementById('cardTable').innerHTML=`<thead><tr><th>Date / Time</th><th>Away</th><th>@</th><th>Home</th><th>Market Spread</th><th>Total</th><th>Confidence</th><th>Status</th><th>Quick Read / Why</th><th></th></tr></thead><tbody>${d.games.map(g=>`<tr><td>${g.day} ${g.time}</td><td class="teamcell"><span class="team-badge">${g.away}</span>${g.away}</td><td>@</td><td class="teamcell"><span class="team-badge">${g.home}</span>${g.home}</td><td><b>${g.market}</b></td><td>${g.total}</td><td class="conf">${g.confidence}</td><td>${badge(g.status)}</td><td class="why">${g.quick}</td><td><a class="view" href="game.html?id=${g.id}">View</a></td></tr>`).join('')}</tbody>`;
document.getElementById('injuryList').innerHTML=d.injuries.map(i=>`<div class="injury"><strong class="sev-${i.severity}">${i.team}: ${i.player}</strong><span>${i.status}</span><div style="font-size:12px;margin-top:4px;color:#d4e0eb">${i.note}</div></div>`).join('');
document.getElementById('logTable').innerHTML=`<thead><tr><th>Week</th><th>Game</th><th>Selection</th><th>Decision</th><th>Result</th><th>CLV</th><th>Units</th><th>Why</th></tr></thead><tbody>${d.recommendationLog.map(r=>`<tr><td>${r.week}</td><td>${r.game}</td><td><b>${r.selection}</b></td><td>${badge(r.decision)}</td><td>${r.result}</td><td class="positive">${r.clv}</td><td class="positive">${r.units}</td><td>${r.note}</td></tr>`).join('')}</tbody>`;
