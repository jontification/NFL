window.dashboardData = {
  currentWeek: 2,
  season: 2026,
  lastUpdated: "Thursday, Sep 17, 2026 · Full Market Refresh",
  marketSource: "FanDuel reference lines; cross-checked against Action Network multi-book screen",
  seasonRecord: { wins: 3, losses: 0, pushes: 0, units: 2.7, avgClv: 1.4, roi: 27 },
  games: [
    {
      id:"det-buf", day:"Thu", time:"7:15 PM CT", away:"DET", awayName:"Detroit Lions", home:"BUF", homeName:"Buffalo Bills",
      market:"BUF -5.5", total:"54.5", status:"PASS", confidence:"Medium", audit:"Final injury report complete; market re-priced",
      quick:"Detroit will be without starting G Christian Mahogany and T Blake Miller, with top C Cade Mays already on IR. Buffalo is the cleaner side, but the market has now moved from -3 to -5.5, which has consumed the value we were watching.",
      why:[
        "Detroit's OL is the main reason this game is on the radar. Multiple absences or limitations could materially change protection and run efficiency.",
        "Buffalo has home-field, the more stable quarterback environment, and a defense capable of exploiting protection breakdowns.",
        "The price has become the deciding factor: Buffalo moved from -3 to -5.5, so the injury edge is now largely reflected in the market.",
        "Thursday compresses the information cycle, so this game gets a special final audit after the last injury report and again near kickoff."
      ],
      watch:["Detroit OL final designations", "Buffalo defensive availability", "Spread movement through -4.5/-5", "Wind and precipitation"],
      matchup:["BUF pass rush vs DET protection", "DET run game vs BUF front", "Josh Allen scramble/extended-play value", "Short-week recovery"],
      injuryNote:"This is the only Week 2 game with a mature injury picture right now. Final designations can upgrade or downgrade the side quickly.",
      marketNote:"The market has priced the injury edge aggressively. At -5.5 we are no longer willing to chase Buffalo.",
      bottom:"PASS Buffalo -5.5. The football thesis still favors Buffalo, but the price moved through our acceptable range. Revisit only if the number falls back toward -4 or better."
    },
    {
      id:"phi-ten", day:"Sun", time:"12:00 PM CT", away:"PHI", awayName:"Philadelphia Eagles", home:"TEN", homeName:"Tennessee Titans",
      market:"PHI -7", total:"39.5", status:"WATCH", confidence:"Medium", audit:"Preliminary",
      quick:"Philadelphia has the cleaner baseline; Tennessee remains suspect offensively. Need our fair line comfortably past 8 before laying a touchdown.",
      why:["Philadelphia enters with the stronger roster baseline on both lines of scrimmage.","Tennessee's offense is the key question; we need to know whether Week 1 inefficiency was structural or opponent-driven.","Seven is a major NFL spread threshold, so a small model edge is not enough.","If Philadelphia's injury report is clean and Tennessee has OL or skill-position losses, this can move up the board."],
      watch:["TEN offensive-line health","PHI trench injuries","Whether line crosses -7","Red-zone efficiency regression"],
      matchup:["PHI defensive front vs TEN OL","TEN passing efficiency","PHI early-down offense","Turnover regression"],
      injuryNote:"Sunday injury audit not mature yet.", marketNote:"At -7, price discipline matters more than simply preferring Philadelphia.",
      bottom:"Philadelphia is the side we prefer, but we are not paying a premium without a larger model gap."
    },
    {
      id:"pit-ne", day:"Sun", time:"12:00 PM CT", away:"PIT", awayName:"Pittsburgh Steelers", home:"NE", homeName:"New England Patriots",
      market:"NE -4.5", total:"41.5", status:"WATCH", confidence:"Medium", audit:"Wednesday injury report reviewed",
      quick:"The market has moved to Pittsburgh +5.5, which improves the price, but LT Troy Fautanu DNP Wednesday. New England also has OL/secondary issues, so this remains a live underdog watch rather than a bet.",
      why:["The spread asks New England to win by more than a field goal despite limited evidence of a large team-quality gap.","Pittsburgh's defense can create short fields and suppress explosive plays, which increases underdog value.","Week 1 can move perception too quickly; we want to separate sustainable offense from one-game outcomes.","Pittsburgh becomes more attractive if its offensive line and quarterback protection check out."],
      watch:["PIT OL availability","NE offensive injuries","Market move toward +5 or +4","Pressure-rate matchup"],
      matchup:["PIT pass rush vs NE protection","NE run game vs PIT front","Field-position battle","Explosive-play prevention"],
      injuryNote:"Full audit pending.", marketNote:"+4.5 is materially more interesting than +3.5. Key-number sensitivity is high.",
      bottom:"Early underdog interest, not yet an official recommendation."
    },
    {
      id:"min-chi", day:"Sun", time:"12:00 PM CT", away:"MIN", awayName:"Minnesota Vikings", home:"CHI", homeName:"Chicago Bears",
      market:"CHI -4.5", total:"47.5", status:"WATCH", confidence:"Medium", audit:"Wednesday injury report reviewed",
      quick:"Minnesota +5.5 still looks like a possible Week 1 overreaction spot, but QB Kyler Murray is in concussion protocol and RB Jordan Mason went to IR. Chicago also has major trench questions, including Darnell Wright and two DTs DNP.",
      why:["Chicago's Week 1 explosion creates exactly the kind of recency bias we want to test rather than chase.","Minnesota's win over Green Bay included competent offense and solid defensive play, not merely turnover luck.","A divisional favorite laying 5.5 after one game is a meaningful number; we need to decide whether the true gap is closer to a field goal.","Injuries along either offensive line or in Minnesota's secondary could swing the evaluation materially."],
      watch:["MIN offensive-line health","CHI skill-position health","Whether market reaches +6","Explosive-play sustainability"],
      matchup:["MIN offense vs CHI defense","CHI explosive offense vs MIN secondary","OL vs pass rush","Divisional familiarity"],
      injuryNote:"We need the official midweek report before upgrading this beyond WATCH.", marketNote:"The core question is whether Chicago's Week 1 score has created a price premium.",
      bottom:"Minnesota +5.5 is one of the most interesting early numbers on the board, but the audit is incomplete."
    },
    {
      id:"car-atl", day:"Sun", time:"12:00 PM CT", away:"CAR", awayName:"Carolina Panthers", home:"ATL", homeName:"Atlanta Falcons",
      market:"CAR -2.5", total:"43.5", status:"PASS", confidence:"Low", audit:"Wednesday injury report reviewed",
      quick:"The market flip now makes more sense: Tua Tagovailoa remained DNP while Michael Penix Jr. practiced fully. Atlanta also had G Chris Lindstrom and CB A.J. Terrell DNP. Too many moving parts; no bet.",
      why:["A market flip is itself a signal that new information or major repricing may be occurring.","Atlanta's quarterback situation makes personnel confirmation essential.","Carolina's Week 1 result was noisy enough that we do not want to extrapolate without efficiency context.","This is exactly the kind of game where forcing an opinion creates bad bets."],
      watch:["ATL QB status","Reason for market flip","CAR defensive injuries","Any move through -3"],
      matchup:["Quarterback stability","ATL protection","CAR pace","Short-field/turnover volatility"],
      injuryNote:"QB clarity is essential.", marketNote:"Do not bet through a major market flip without knowing what changed.",
      bottom:"Pass for now. The movement is more interesting than either side."
    },
    {
      id:"gb-nyj", day:"Sun", time:"12:00 PM CT", away:"GB", awayName:"Green Bay Packers", home:"NYJ", homeName:"New York Jets",
      market:"GB -3.5", total:"44.5", status:"WATCH", confidence:"Medium", audit:"Preliminary",
      quick:"Green Bay is still laying a meaningful road number after a poor opener. New York's outright Week 1 win makes the home dog worth testing.",
      why:["Green Bay's Week 1 loss exposed questions on both sides of the ball that may not be fully resolved by one week of adjustment.","The Jets won outright and may be better than preseason pricing suggested.","Home +4.5 is a useful cushion if our power ratings see these teams closer together.","We need to know whether Green Bay's Week 1 result was matchup-specific or indicative of a broader issue."],
      watch:["GB OL/DL health","Jets quarterback efficiency","Market move toward +5","Turnover luck"],
      matchup:["GB pass protection","Jets defensive pressure","GB run game","NYJ early-down offense"],
      injuryNote:"Full audit pending.", marketNote:"At +4.5, the Jets are interesting; at +3 the case weakens significantly.",
      bottom:"Early home-underdog watch, no official play yet."
    },
    {
      id:"no-bal", day:"Sun", time:"12:00 PM CT", away:"NO", awayName:"New Orleans Saints", home:"BAL", homeName:"Baltimore Ravens",
      market:"BAL -8.5", total:"46.5", status:"PASS", confidence:"Low", audit:"Preliminary",
      quick:"Baltimore is clearly stronger, but -8.5 already charges a premium. We need a major edge to lay it.",
      why:["Baltimore's Week 1 performance supports a strong rating, but the market knows that too.","New Orleans was competitive enough in Week 1 to make a large spread less automatic than it looks.","Big favorites require strong evidence because a good team can win comfortably without covering.","Unless injuries create additional separation, the current price does not offer enough value."],
      watch:["BAL injuries","NO QB/OL health","Any drop toward -7","Total movement"],
      matchup:["BAL rushing efficiency","NO pass protection","Lamar Jackson explosive-play creation","Garbage-time backdoor risk"],
      injuryNote:"Pending.", marketNote:"We prefer Baltimore as a team more than we like Baltimore at this price.",
      bottom:"Pass unless the number improves or the injury differential widens."
    },
    {
      id:"cin-hou", day:"Sun", time:"12:00 PM CT", away:"CIN", awayName:"Cincinnati Bengals", home:"HOU", homeName:"Houston Texans",
      market:"HOU -2.5", total:"45.5", status:"WATCH", confidence:"Medium", audit:"Preliminary",
      quick:"A full field goal with Cincinnati is interesting. Houston competed with Buffalo, but the market may be giving too much home-field credit.",
      why:["Cincinnati won Week 1 and may still be priced below its offensive ceiling.","Houston was competitive against Buffalo, so this is not a simple fade; the number is the attraction.","Getting a full +3 matters materially in close-game distributions.","The key will be protection, pressure, and whether either secondary enters compromised."],
      watch:["CIN OL","HOU secondary","Price holding +3","Pass-rush mismatch"],
      matchup:["CIN protection vs HOU rush","HOU passing game vs CIN secondary","Explosive pass rate","Red-zone conversion"],
      injuryNote:"Full audit pending.", marketNote:"+3 is the line we care about. Losing the full field goal changes the bet materially.",
      bottom:"One of the early dogs worth a deeper model run."
    },
    {
      id:"cle-tb", day:"Sun", time:"12:00 PM CT", away:"CLE", awayName:"Cleveland Browns", home:"TB", homeName:"Tampa Bay Buccaneers",
      market:"TB -8.5", total:"41.5", status:"WATCH", confidence:"Medium-High", audit:"Wednesday injury report reviewed",
      quick:"Cleveland's OL cluster remains a major concern: Teven Jenkins DNP, with Parker Brailsford, Elgton Jenkins and Dawand Jones limited. Tampa -8.5 is one of the stronger Sunday watches, but the number is already expensive.",
      why:["Cleveland's protection problems are exactly the kind of persistent weakness our injury model should capture.","Tampa can create a game script where Cleveland must throw into pressure.","The spread is already large, so we need confirmation that the Browns remain materially compromised.","The total may become more interesting than the side if Cleveland's offensive ceiling is suppressed."],
      watch:["CLE OL report","QB efficiency","TB defensive front health","Team-total market"],
      matchup:["TB pressure vs CLE OL","CLE early-down offense","TB red-zone offense","Cleveland team total"],
      injuryNote:"Cleveland OL status is the central variable.", marketNote:"A bad Cleveland offense does not automatically make -8.5 cheap.",
      bottom:"Watch Tampa and Cleveland team-total unders; no bet yet."
    },
    {
      id:"jax-den", day:"Sun", time:"3:05 PM CT", away:"JAX", awayName:"Jacksonville Jaguars", home:"DEN", homeName:"Denver Broncos",
      market:"DEN -2.5", total:"45.5", status:"WATCH", confidence:"Medium", audit:"Wednesday injury report reviewed",
      quick:"Jacksonville +2.5 remains interesting, but WRs Brian Thomas Jr. and Jakobi Meyers were limited Wednesday. Denver had Marvin Mims Jr. and RJ Harvey DNP. This stays on the shortlist pending Thursday participation trends.",
      why:["Jacksonville's Week 1 result aligned with our pregame injury and trench thesis, which makes its underlying rating worth revisiting upward.","Denver's offense did not show enough in Week 1 to justify automatic home-favorite status.","Getting +2.5 leaves us just short of the key +3, so price shopping matters.","Altitude and Denver's defense are real counterweights; this is not a blind Jaguars play."],
      watch:["Can we find JAX +3?","JAX OL injuries","DEN QB/OL report","Altitude/rest factors"],
      matchup:["JAX offense vs DEN defense","DEN offense vs JAX front","Explosive-play differential","Red-zone efficiency"],
      injuryNote:"Pending.", marketNote:"+3 would be substantially more attractive than +2.5.",
      bottom:"One of the first Sunday games we should model deeply."
    },
    {
      id:"lv-lac", day:"Sun", time:"3:05 PM CT", away:"LV", awayName:"Las Vegas Raiders", home:"LAC", homeName:"Los Angeles Chargers",
      market:"LAC -6.5", total:"43.5", status:"WATCH", confidence:"Medium", audit:"Preliminary",
      quick:"Las Vegas looked better than expected while the Chargers lost outright. Seven points creates a natural divisional-dog investigation.",
      why:["The Raiders' Week 1 performance may warrant a small upgrade from preseason expectations.","The Chargers' upset loss does not mean they are bad, but it does make a full touchdown worth testing.","Divisional familiarity can reduce matchup variance and make big spreads harder to justify.","We need injury clarity at receiver, offensive line, and in the Chargers' front before leaning harder."],
      watch:["LV skill-position health","LAC OL","Spread through +7","Explosive-play regression"],
      matchup:["Raiders offense vs Chargers pass rush","Chargers run game","Division familiarity","Third-down efficiency"],
      injuryNote:"Pending.", marketNote:"+7 is a number worth protecting. +6 is a different conversation.",
      bottom:"Early Raiders watch because of the price, not because we suddenly rate them as the better team."
    },
    {
      id:"sea-ari", day:"Sun", time:"3:25 PM CT", away:"SEA", awayName:"Seattle Seahawks", home:"ARI", homeName:"Arizona Cardinals",
      market:"SEA -4.5", total:"41.5", status:"WATCH", confidence:"Medium", audit:"Preliminary",
      quick:"Arizona's Week 1 upset deserves respect. Seattle may be better, but -5.5 on the road in the division is a meaningful ask.",
      why:["Arizona showed enough competence in Week 1 that preseason assumptions need to be updated carefully.","Seattle laying more than a field goal on the road creates room for a home-dog thesis.","We need to distinguish sustainable Arizona offense from one-game variance.","Divisional familiarity and late-game backdoor potential both matter at this spread."],
      watch:["ARI OL/secondary","SEA offensive injuries","Any move to +6","Turnover regression"],
      matchup:["SEA pass rush vs ARI OL","ARI explosive offense","Seattle run efficiency","Division pace"],
      injuryNote:"Pending.", marketNote:"Arizona gets more attractive at +6 and less so below +4.5.",
      bottom:"Watch the home dog, especially if the market drifts higher."
    },
    {
      id:"mia-sf", day:"Sun", time:"3:25 PM CT", away:"MIA", awayName:"Miami Dolphins", home:"SF", homeName:"San Francisco 49ers",
      market:"SF -13.5", total:"45.5", status:"PASS", confidence:"Low", audit:"Preliminary",
      quick:"San Francisco is far stronger on paper, but nearly two touchdowns is a tax. We need extraordinary evidence to lay it.",
      why:["Miami's Week 1 performance was poor enough to tempt an emotional fade.","The market already expresses that pessimism with a massive spread.","Large favorites can dominate a game without covering if pace slows or backups enter late.","Unless injuries make Miami even less functional, the price is the biggest story."],
      watch:["MIA QB/OL","SF skill-player availability","Potential Miami team total","Spread crossing 13/14"],
      matchup:["SF pass rush vs MIA protection","Miami speed vs SF secondary","Game-script pace","Backdoor-cover risk"],
      injuryNote:"Pending.", marketNote:"Do not confuse a strong team rating with a good bet at any price.",
      bottom:"Pass the side for now. Derivatives may become more interesting later."
    },
    {
      id:"was-dal", day:"Sun", time:"3:25 PM CT", away:"WAS", awayName:"Washington Commanders", home:"DAL", homeName:"Dallas Cowboys",
      market:"DAL -4.5", total:"50.5", status:"PASS", confidence:"Low-Medium", audit:"Wednesday injury report reviewed",
      quick:"Washington +4.5 lost appeal after Wednesday: Frankie Luvu and Chig Okonkwo DNP, with multiple front-seven defenders limited. Dallas reported clean. Downgraded from WATCH to PASS for now.",
      why:["Washington's Week 1 performance was competitive against a strong opponent.","Dallas' loss does not automatically make the Cowboys bad, but it weakens the case for laying more than a field goal.","Division familiarity raises the value of points with an underdog if the teams grade closer than the market suggests.","OL and secondary injuries will matter heavily because both teams can create explosive passing plays."],
      watch:["WAS OL","DAL secondary","Line staying above +4","Turnover variance"],
      matchup:["Washington pass protection","Dallas explosive passing","Division familiarity","Fourth-down aggressiveness"],
      injuryNote:"Pending.", marketNote:"The key is whether our fair line lands near Dallas -3 or closer to the market's -4.5.",
      bottom:"Washington is one of the early underdogs worth a full Wednesday model run."
    },
    {
      id:"ind-kc", day:"Sun", time:"7:20 PM CT", away:"IND", awayName:"Indianapolis Colts", home:"KC", homeName:"Kansas City Chiefs",
      market:"KC -6.5", total:"46.5", status:"WATCH", confidence:"Medium", audit:"Wednesday injury report reviewed",
      quick:"Kansas City remains the stronger side, but LT Josh Simmons DNP and Chris Jones was limited Wednesday. Indianapolis has its own issues. At -6.5, we still prefer waiting rather than paying the Chiefs premium.",
      why:["Kansas City handled Denver convincingly and deserves a strong baseline rating.","Indianapolis was beaten badly by Baltimore, but one game against an elite opponent can distort perception.","At -6.5 the question is not who is better; it is whether the true gap exceeds a touchdown.","Kansas City's offensive-line and defensive injuries remain important because they can change both spread and total projections."],
      watch:["KC OL","IND QB/OL","Spread crossing -7","Rest after Monday night"],
      matchup:["KC pressure packages","IND protection","Mahomes third-down efficiency","Short-week rest differential"],
      injuryNote:"Pending.", marketNote:"We do not automatically lay points with Kansas City just because they are clearly superior.",
      bottom:"Watch the number and the injury report. The Chiefs must clear a higher bar because of the market premium."
    },
    {
      id:"nyg-lar", day:"Mon", time:"7:15 PM CT", away:"NYG", awayName:"New York Giants", home:"LAR", homeName:"Los Angeles Rams",
      market:"LAR -7.5", total:"47.5", status:"WATCH", confidence:"Medium", audit:"Preliminary",
      quick:"The Giants won outright in Week 1 while the Rams lost. More than a touchdown is enough to make New York worth investigating.",
      why:["New York's Week 1 win may represent real improvement rather than pure variance.","The Rams being favored is reasonable; the question is whether 7.5 is too much.","Monday gives us the longest injury-information runway of the week, so there is no reason to rush.","A spread above seven materially increases the value of the underdog if our model sees a competitive game."],
      watch:["NYG OL","LAR offensive injuries","Can we hold +7.5 or find +8?","Monday weather"],
      matchup:["NYG pass rush vs LAR OL","Rams passing efficiency","Giants explosive-play prevention","Game-script pace"],
      injuryNote:"We will have several more injury-report cycles before kickoff.", marketNote:"+7.5 is meaningfully different from +6.5. Patience is an advantage here.",
      bottom:"Early Giants watch. No reason to act until the information set is much better."
    }
  ],
  injuries:[
    {team:"Detroit", player:"Christian Mahogany", status:"OUT", severity:"high", note:"Starting guard out; significant in a short-week OL cluster."},
    {team:"Detroit", player:"Blake Miller", status:"OUT", severity:"high", note:"Starting tackle out; Detroit is also without top C Cade Mays on IR."},
    {team:"Detroit", player:"D.J. Reed", status:"Questionable", severity:"medium", note:"Starting CB foot injury; secondary status matters against Josh Allen."},
    {team:"Buffalo", player:"Cole Bishop", status:"Questionable", severity:"medium", note:"Safety; knee/groin. One of three Bills listed questionable."},
    {team:"Pittsburgh", player:"Troy Fautanu", status:"DNP", severity:"high", note:"Starting tackle; key Thursday trend for PIT +5.5 thesis."},
    {team:"New England", player:"Carlton Davis III", status:"DNP", severity:"medium", note:"Starting CB; Patriots also have OL injuries to monitor."},
    {team:"Minnesota", player:"Kyler Murray", status:"Concussion protocol", severity:"high", note:"Quarterback status is the biggest variable in MIN-CHI."},
    {team:"Minnesota", player:"Jordan Mason", status:"IR", severity:"medium", note:"Backfield role changes must be incorporated into props and game script."},
    {team:"Chicago", player:"Darnell Wright", status:"DNP", severity:"high", note:"Starting tackle; Bears also had Grady Jarrett and Neville Gallimore DNP."},
    {team:"Cleveland", player:"OL cluster", status:"1 DNP / 3 limited", severity:"high", note:"Teven Jenkins DNP; Parker Brailsford, Elgton Jenkins and Dawand Jones limited."},
    {team:"Atlanta", player:"Tua Tagovailoa", status:"DNP", severity:"high", note:"Michael Penix Jr. practiced fully; QB hierarchy remains market-moving."},
    {team:"Jacksonville", player:"Brian Thomas Jr. / Jakobi Meyers", status:"Limited", severity:"medium", note:"Both starting WRs limited; monitor Thursday direction."},
    {team:"Washington", player:"Frankie Luvu", status:"DNP", severity:"high", note:"Part of a broader Commanders front-seven injury cluster."},
    {team:"Kansas City", player:"Josh Simmons", status:"DNP", severity:"high", note:"Starting tackle; important against Indianapolis pass rush."},
    {team:"Seattle", player:"Sam Darnold", status:"OUT", severity:"high", note:"Starting QB ruled out; Drew Lock will start at Arizona. Market collapsed from roughly SEA -10 opener to around -3.5/-4."},
    {team:"Houston", player:"Nico Collins", status:"Hamstring concern", severity:"high", note:"Availability for Sunday is in doubt after a practice hamstring injury; major variable for HOU-CIN."}
  ],
  props:[
    {
      id:"kincaid-rec-yds", rank:1, player:"Dalton Kincaid", pos:"TE", team:"BUF", game:"DET @ BUF", day:"Thu", time:"7:15 PM CT",
      market:"Receiving Yards", side:"OVER", line:"51.5", price:"market varies", projection:"56-61", edge:"~+4.5 to +9.5 yds", confidence:"High", status:"BET", audit:"Role/context audit complete",
      quick:"OVER 51.5 receiving yards. The market has moved up from 49.5, but Kincaid still has a concentrated receiving role and a favorable Detroit tight-end matchup. The edge is smaller now, so price discipline matters more.",
      why:[
        "Kincaid caught 5 passes for 130 yards in Week 1, and no other Bills tight end saw more than one target. That supports a concentrated receiving role rather than treating the 130 yards as a random box-score spike.",
        "Detroit allowed 87 receiving yards and two touchdowns to Saints tight ends in Week 1, which gives us a specific positional matchup reason to expect Buffalo to involve Kincaid.",
        "Buffalo's overall passing environment is favorable, and Detroit's secondary questions create additional reasons for Josh Allen to keep attacking through the air rather than needing a run-heavy script.",
        "The market has moved to 51.5 from 49.5. Our current rough projection range remains 56-61 yards, leaving a smaller but still playable edge if the juice stays reasonable.",
        "Price discipline matters. We would not chase this prop if the yardage line moves into the upper 50s or the juice becomes materially more expensive."
      ],
      role:["Primary receiving TE in Week 1","Five catches / 130 yards on concentrated TE usage","No current role-reduction signal identified","Current role weighted more heavily than career average"],
      matchup:["Detroit TE coverage","Single-high tendencies","Allen efficiency","Competitive/high-total game environment"],
      risks:["Week 1 yardage was boosted by explosive plays","Buffalo spreads targets across WRs","Detroit changes coverage structure","Line moves materially before kickoff"],
      bottom:"BET: Dalton Kincaid OVER 51.5 receiving yards if the price is roughly -125 or better. Do not chase if the line climbs into the mid-to-upper 50s."
    },
    {
      id:"allen-rush-att", rank:2, player:"Josh Allen", pos:"QB", team:"BUF", game:"DET @ BUF", day:"Thu", time:"7:15 PM CT",
      market:"Rushing Attempts", side:"OVER", line:"7.5", price:"market varies", projection:"7.5-8.0", edge:"~0 to +0.5 attempt", confidence:"Low", status:"PASS", audit:"Role/context audit complete",
      quick:"The market moved Josh Allen rushing attempts from 6.5 to 7.5. Our usage thesis still makes sense, but the key-number edge is gone, so this is now a PASS and is intentionally hidden from the public shortlist.",
      why:[
        "Recent usage is the core of the thesis: Allen averaged 8.2 rushing attempts over his final 10 games last season and cleared 6.5 attempts in seven of those 10.",
        "This is not a bet that requires Buffalo to trail. Designed quarterback runs and scrambles are structural parts of Buffalo's offense, so Allen can reach the number in multiple game scripts.",
        "Detroit has allowed meaningful rushing-attempt volume to mobile quarterbacks, and Allen himself logged 11 carries when Buffalo faced Detroit in 2024.",
        "We prefer attempts to rushing yards because this is fundamentally a usage bet. A short scramble counts the same toward the wager as a long designed run, making the thesis less dependent on rushing efficiency.",
        "Price discipline decided this one: 6.5 was the attractive threshold. At 7.5, our projected usage no longer creates enough margin to justify a bet."
      ],
      role:["Stable dual-threat QB role","Designed runs plus scrambles","No workload competition issue","Recent usage weighted more heavily than full-career mean"],
      matchup:["Detroit contain discipline","Man/single-high scramble lanes","Expected competitive game","Red-zone QB run equity"],
      risks:["Buffalo wins comfortably without Allen needing to run","Kneel-down stat treatment varies by book","Detroit uses more zone and keeps eyes on QB","Juice rises beyond acceptable range"],
      bottom:"PASS at 7.5 rushing attempts. We liked 6.5; we are not chasing the move."
    }
  ],
  recommendationLog:[
    {week:1, game:"ATL @ PIT", selection:"PIT -5.5", decision:"BET", result:"Win", clv:"+1.0", units:"+0.91", note:"QB/injury-driven thesis."},
    {week:1, game:"ATL @ PIT", selection:"UNDER 40.5", decision:"BET", result:"Win", clv:"+0.5", units:"+0.91", note:"Offensive suppression thesis."},
    {week:1, game:"CLE @ JAX", selection:"JAX -8.5", decision:"BET", result:"Win", clv:"+1.5", units:"+0.91", note:"Cleveland OL mismatch."}
  ]
};
