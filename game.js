const qs=new URLSearchParams(location.search);const id=qs.get('id');const g=(window.dashboardData.games||[]).find(x=>x.id===id)||window.dashboardData.games[0];
const set=(id,v)=>{const el=document.getElementById(id);if(el)el.textContent=v??''};
set('gameTitle',`${g.awayName} @ ${g.homeName}`);set('gameTime',`${g.day} · ${g.time}`);set('awayBadge',g.away);set('homeBadge',g.home);set('awayName',g.awayName);set('homeName',g.homeName);document.getElementById('gameStatus').innerHTML=`<span class="status ${g.status}">${g.status}</span>`;set('marketLine',`Current Line: ${g.market}`);set('confidence',g.confidence);set('audit',g.audit);set('spread',g.market);set('total',g.total);set('snapshotStatus',g.status);set('marketNote',g.marketNote);set('bottom',g.bottom);
document.getElementById('reasons').innerHTML=g.why.map((x,i)=>`<div class="reason"><div class="num">${i+1}</div><p>${x}</p></div>`).join('');
document.getElementById('matchups').innerHTML=g.matchup.map((x,i)=>`<div class="meterrow"><div class="label">${x}</div><div class="meter">${Array.from({length:7},(_,n)=>`<span class="bar ${n<(4-(i%2))?'on':''}"></span>`).join('')}</div></div>`).join('');
document.getElementById('watchList').innerHTML=g.watch.map(x=>`<li>${x}</li>`).join('');
set('matchupLong',g.matchup.map(x=>`• ${x}`).join('\n'));document.getElementById('matchupLong').style.whiteSpace='pre-line';
set('injuryLong',g.injuryNote);
set('marketLong',`${g.marketNote} StatPig treats the current number as part of the handicap: the same football opinion can be BET, WATCH or PASS at different prices.`);
set('anglesLong',`Primary angle: ${g.quick} Secondary markets such as totals, team totals and player props are used only when they express the underlying thesis more cleanly than the side.`);
set('scriptLong',`Current game-script variables being monitored: ${g.watch.join('; ')}. Score state, pace, injuries and weather are rechecked at each “run the numbers” cycle.`);
const gate=document.getElementById('watchDecision');
if(g.status==='WATCH'){
  set('actionableIf',g.actionableIf||'A concrete price, injury, weather or market condition must clear before this becomes a BET.');
  set('killsPlayIf',g.killsPlayIf||'A material adverse change in price, personnel or matchup moves this to PASS.');
}else{
  gate.querySelector('.decision-grid').style.display='none';
  gate.querySelector('.section-label').textContent=g.status==='BET'?'2 · Why This Is Actionable':'2 · Why This Is Not Actionable';
  gate.insertAdjacentHTML('beforeend',`<article class="detail-card"><p class="bodycopy">${g.status==='BET'?'The required audit has cleared at the displayed price.':'The current side does not clear StatPig’s betting threshold. Any secondary WATCH angle is shown below if one exists.'}</p></article>`);
}
if(g.secondaryWatch){
 document.getElementById('secondaryWatch').innerHTML=`<article class="secondary-watch"><div><span class="status WATCH">WATCH</span><strong>${g.secondaryWatch.angle}</strong></div><p><b>Actionable if:</b> ${g.secondaryWatch.actionableIf}</p><p><b>Kills it:</b> ${g.secondaryWatch.killsPlayIf}</p></article>`;
}
