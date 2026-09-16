window.dashboardData = {
  currentWeek: 2,
  season: 2026,
  lastUpdated: "Tuesday, Sep 16, 2026 · Early Read",
  seasonRecord: { wins: 3, losses: 0, pushes: 0, units: 2.7, avgClv: 1.4, roi: 27 },
  games: [
    {
      id:"det-buf", day:"Thu", time:"7:15 PM CT", away:"DET", awayName:"Detroit Lions", home:"BUF", homeName:"Buffalo Bills",
      market:"BUF -4.5", total:"53.5", status:"WATCH", confidence:"Medium", audit:"Injury audit active",
      quick:"Detroit's offensive-line cluster is the swing factor. Buffalo is the cleaner side if multiple Lions linemen remain compromised.",
      why:[
        "Detroit's OL is the main reason this game is on the radar. Multiple absences or limitations could materially change protection and run efficiency.",
        "Buffalo has home-field, the more stable quarterback environment, and a defense capable of exploiting protection breakdowns.",
        "The price matters: Buffalo becomes less attractive if injury news pushes the spread materially beyond the current range.",
        "Thursday compresses the information cycle, so this game gets a special final audit after the last injury report and again near kickoff."
      ],
      watch:["Detroit OL final designations", "Buffalo defensive availability", "Spread movement through -4.5/-5", "Wind and precipitation"],
      matchup:["BUF pass rush vs DET protection", "DET run game vs BUF front", "Josh Allen scramble/extended-play value", "Short-week recovery"],
      injuryNote:"This is the only Week 2 game with a mature injury picture right now. Final designations can upgrade or downgrade the side quickly.",
      marketNote:"WATCH the number. Injury confirmation matters only if the market has not already fully priced it in.",
      bottom:"Early lean Buffalo, but no official bet until the final Thursday audit is complete."
    },
    {
      id:"phi-ten", day:"Sun", time:"12:00 PM CT", away:"PHI", awayName:"Philadelphia Eagles", home:"TEN", homeName:"Tennessee Titans",
      market:"PHI -7", total:"45.5", status:"WATCH", confidence:"Medium", audit:"Preliminary",
      quick:"Philadelphia has the cleaner baseline; Tennessee remains suspect offensively. Need our fair line comfortably past 8 before laying a touchdown.",
      why:["Philadelphia enters with the stronger roster baseline on both lines of scrimmage.","Tennessee's offense is the key question; we need to know whether Week 1 inefficiency was structural or opponent-driven.","Seven is a major NFL spread threshold, so a small model edge is not enough.","If Philadelphia's injury report is clean and Tennessee has OL or skill-position losses, this can move up the board."],
      watch:["TEN offensive-line health","PHI trench injuries","Whether line crosses -7","Red-zone efficiency regression"],
      matchup:["PHI defensive front vs TEN OL","TEN passing efficiency","PHI early-down offense","Turnover regression"],
      injuryNote:"Sunday injury audit not mature yet.", marketNote:"At -7, price discipline matters more than simply preferring Philadelphia.",
      bottom:"Philadelphia is the side we prefer, but we are not paying a premium without a larger model gap."
    },
    {
      id:"pit-ne", day:"Sun", time:"12:00 PM CT", away:"PIT", awayName:"Pittsburgh Steelers", home:"NE", homeName:"New England Patriots",
      market:"NE -4.5", total:"43.5", status:"WATCH", confidence:"Medium", audit:"Preliminary",
      quick:"We are skeptical of laying more than a field goal with New England after one week. Pittsburgh's defense makes +4.5 interesting if the roster is intact.",
      why:["The spread asks New England to win by more than a field goal despite limited evidence of a large team-quality gap.","Pittsburgh's defense can create short fields and suppress explosive plays, which increases underdog value.","Week 1 can move perception too quickly; we want to separate sustainable offense from one-game outcomes.","Pittsburgh becomes more attractive if its offensive line and quarterback protection check out."],
      watch:["PIT OL availability","NE offensive injuries","Market move toward +5 or +4","Pressure-rate matchup"],
      matchup:["PIT pass rush vs NE protection","NE run game vs PIT front","Field-position battle","Explosive-play prevention"],
      injuryNote:"Full audit pending.", marketNote:"+4.5 is materially more interesting than +3.5. Key-number sensitivity is high.",
      bottom:"Early underdog interest, not yet an official recommendation."
    },
    {
      id:"min-chi", day:"Sun", time:"12:00 PM CT", away:"MIN", awayName:"Minnesota Vikings", home:"CHI", homeName:"Chicago Bears",
      market:"CHI -5.5", total:"47.5", status:"WATCH", confidence:"Medium", audit:"Preliminary",
      quick:"Chicago's 59-point opener may be inflating the price. Minnesota looked strong enough that +5.5 deserves a serious overreaction check.",
      why:["Chicago's Week 1 explosion creates exactly the kind of recency bias we want to test rather than chase.","Minnesota's win over Green Bay included competent offense and solid defensive play, not merely turnover luck.","A divisional favorite laying 5.5 after one game is a meaningful number; we need to decide whether the true gap is closer to a field goal.","Injuries along either offensive line or in Minnesota's secondary could swing the evaluation materially."],
      watch:["MIN offensive-line health","CHI skill-position health","Whether market reaches +6","Explosive-play sustainability"],
      matchup:["MIN offense vs CHI defense","CHI explosive offense vs MIN secondary","OL vs pass rush","Divisional familiarity"],
      injuryNote:"We need the official midweek report before upgrading this beyond WATCH.", marketNote:"The core question is whether Chicago's Week 1 score has created a price premium.",
      bottom:"Minnesota +5.5 is one of the most interesting early numbers on the board, but the audit is incomplete."
    },
    {
      id:"car-atl", day:"Sun", time:"12:00 PM CT", away:"CAR", awayName:"Carolina Panthers", home:"ATL", homeName:"Atlanta Falcons",
      market:"CAR -2.5", total:"44.5", status:"PASS", confidence:"Low", audit:"Preliminary",
      quick:"The market has flipped direction. Until we understand why, this is information-rich but bet-poor.",
      why:["A market flip is itself a signal that new information or major repricing may be occurring.","Atlanta's quarterback situation makes personnel confirmation essential.","Carolina's Week 1 result was noisy enough that we do not want to extrapolate without efficiency context.","This is exactly the kind of game where forcing an opinion creates bad bets."],
      watch:["ATL QB status","Reason for market flip","CAR defensive injuries","Any move through -3"],
      matchup:["Quarterback stability","ATL protection","CAR pace","Short-field/turnover volatility"],
      injuryNote:"QB clarity is essential.", marketNote:"Do not bet through a major market flip without knowing what changed.",
      bottom:"Pass for now. The movement is more interesting than either side."
    },
    {
      id:"gb-nyj", day:"Sun", time:"12:00 PM CT", away:"GB", awayName:"Green Bay Packers", home:"NYJ", homeName:"New York Jets",
      market:"GB -4.5", total:"43.5", status:"WATCH", confidence:"Medium", audit:"Preliminary",
      quick:"Green Bay is still laying a meaningful road number after a poor opener. New York's outright Week 1 win makes the home dog worth testing.",
      why:["Green Bay's Week 1 loss exposed questions on both sides of the ball that may not be fully resolved by one week of adjustment.","The Jets won outright and may be better than preseason pricing suggested.","Home +4.5 is a useful cushion if our power ratings see these teams closer together.","We need to know whether Green Bay's Week 1 result was matchup-specific or indicative of a broader issue."],
      watch:["GB OL/DL health","Jets quarterback efficiency","Market move toward +5","Turnover luck"],
      matchup:["GB pass protection","Jets defensive pressure","GB run game","NYJ early-down offense"],
      injuryNote:"Full audit pending.", marketNote:"At +4.5, the Jets are interesting; at +3 the case weakens significantly.",
      bottom:"Early home-underdog watch, no official play yet."
    },
    {
      id:"no-bal", day:"Sun", time:"12:00 PM CT", away:"NO", awayName:"New Orleans Saints", home:"BAL", homeName:"Baltimore Ravens",
      market:"BAL -8.5", total:"44.5", status:"PASS", confidence:"Low", audit:"Preliminary",
      quick:"Baltimore is clearly stronger, but -8.5 already charges a premium. We need a major edge to lay it.",
      why:["Baltimore's Week 1 performance supports a strong rating, but the market knows that too.","New Orleans was competitive enough in Week 1 to make a large spread less automatic than it looks.","Big favorites require strong evidence because a good team can win comfortably without covering.","Unless injuries create additional separation, the current price does not offer enough value."],
      watch:["BAL injuries","NO QB/OL health","Any drop toward -7","Total movement"],
      matchup:["BAL rushing efficiency","NO pass protection","Lamar Jackson explosive-play creation","Garbage-time backdoor risk"],
      injuryNote:"Pending.", marketNote:"We prefer Baltimore as a team more than we like Baltimore at this price.",
      bottom:"Pass unless the number improves or the injury differential widens."
    },
    {
      id:"cin-hou", day:"Sun", time:"12:00 PM CT", away:"CIN", awayName:"Cincinnati Bengals", home:"HOU", homeName:"Houston Texans",
      market:"HOU -3", total:"46.5", status:"WATCH", confidence:"Medium", audit:"Preliminary",
      quick:"A full field goal with Cincinnati is interesting. Houston competed with Buffalo, but the market may be giving too much home-field credit.",
      why:["Cincinnati won Week 1 and may still be priced below its offensive ceiling.","Houston was competitive against Buffalo, so this is not a simple fade; the number is the attraction.","Getting a full +3 matters materially in close-game distributions.","The key will be protection, pressure, and whether either secondary enters compromised."],
      watch:["CIN OL","HOU secondary","Price holding +3","Pass-rush mismatch"],
      matchup:["CIN protection vs HOU rush","HOU passing game vs CIN secondary","Explosive pass rate","Red-zone conversion"],
      injuryNote:"Full audit pending.", marketNote:"+3 is the line we care about. Losing the full field goal changes the bet materially.",
      bottom:"One of the early dogs worth a deeper model run."
    },
    {
      id:"cle-tb", day:"Sun", time:"12:00 PM CT", away:"CLE", awayName:"Cleveland Browns", home:"TB", homeName:"Tampa Bay Buccaneers",
      market:"TB -8.5", total:"42.5", status:"WATCH", confidence:"Medium", audit:"Preliminary",
      quick:"Cleveland's offense and OL were poor enough in Week 1 to keep Tampa on the radar, but -8.5 is expensive.",
      why:["Cleveland's protection problems are exactly the kind of persistent weakness our injury model should capture.","Tampa can create a game script where Cleveland must throw into pressure.","The spread is already large, so we need confirmation that the Browns remain materially compromised.","The total may become more interesting than the side if Cleveland's offensive ceiling is suppressed."],
      watch:["CLE OL report","QB efficiency","TB defensive front health","Team-total market"],
      matchup:["TB pressure vs CLE OL","CLE early-down offense","TB red-zone offense","Cleveland team total"],
      injuryNote:"Cleveland OL status is the central variable.", marketNote:"A bad Cleveland offense does not automatically make -8.5 cheap.",
      bottom:"Watch Tampa and Cleveland team-total unders; no bet yet."
    },
    {
      id:"jax-den", day:"Sun", time:"3:05 PM CT", away:"JAX", awayName:"Jacksonville Jaguars", home:"DEN", homeName:"Denver Broncos",
      market:"DEN -2.5", total:"42.5", status:"WATCH", confidence:"Medium", audit:"Preliminary",
      quick:"Jacksonville was one of our strongest Week 1 process fits and is now getting points against a Denver team that scored 10 at Kansas City.",
      why:["Jacksonville's Week 1 result aligned with our pregame injury and trench thesis, which makes its underlying rating worth revisiting upward.","Denver's offense did not show enough in Week 1 to justify automatic home-favorite status.","Getting +2.5 leaves us just short of the key +3, so price shopping matters.","Altitude and Denver's defense are real counterweights; this is not a blind Jaguars play."],
      watch:["Can we find JAX +3?","JAX OL injuries","DEN QB/OL report","Altitude/rest factors"],
      matchup:["JAX offense vs DEN defense","DEN offense vs JAX front","Explosive-play differential","Red-zone efficiency"],
      injuryNote:"Pending.", marketNote:"+3 would be substantially more attractive than +2.5.",
      bottom:"One of the first Sunday games we should model deeply."
    },
    {
      id:"lv-lac", day:"Sun", time:"3:05 PM CT", away:"LV", awayName:"Las Vegas Raiders", home:"LAC", homeName:"Los Angeles Chargers",
      market:"LAC -7", total:"45.5", status:"WATCH", confidence:"Medium", audit:"Preliminary",
      quick:"Las Vegas looked better than expected while the Chargers lost outright. Seven points creates a natural divisional-dog investigation.",
      why:["The Raiders' Week 1 performance may warrant a small upgrade from preseason expectations.","The Chargers' upset loss does not mean they are bad, but it does make a full touchdown worth testing.","Divisional familiarity can reduce matchup variance and make big spreads harder to justify.","We need injury clarity at receiver, offensive line, and in the Chargers' front before leaning harder."],
      watch:["LV skill-position health","LAC OL","Spread through +7","Explosive-play regression"],
      matchup:["Raiders offense vs Chargers pass rush","Chargers run game","Division familiarity","Third-down efficiency"],
      injuryNote:"Pending.", marketNote:"+7 is a number worth protecting. +6 is a different conversation.",
      bottom:"Early Raiders watch because of the price, not because we suddenly rate them as the better team."
    },
    {
      id:"sea-ari", day:"Sun", time:"3:25 PM CT", away:"SEA", awayName:"Seattle Seahawks", home:"ARI", homeName:"Arizona Cardinals",
      market:"SEA -5.5", total:"46.5", status:"WATCH", confidence:"Medium", audit:"Preliminary",
      quick:"Arizona's Week 1 upset deserves respect. Seattle may be better, but -5.5 on the road in the division is a meaningful ask.",
      why:["Arizona showed enough competence in Week 1 that preseason assumptions need to be updated carefully.","Seattle laying more than a field goal on the road creates room for a home-dog thesis.","We need to distinguish sustainable Arizona offense from one-game variance.","Divisional familiarity and late-game backdoor potential both matter at this spread."],
      watch:["ARI OL/secondary","SEA offensive injuries","Any move to +6","Turnover regression"],
      matchup:["SEA pass rush vs ARI OL","ARI explosive offense","Seattle run efficiency","Division pace"],
      injuryNote:"Pending.", marketNote:"Arizona gets more attractive at +6 and less so below +4.5.",
      bottom:"Watch the home dog, especially if the market drifts higher."
    },
    {
      id:"mia-sf", day:"Sun", time:"3:25 PM CT", away:"MIA", awayName:"Miami Dolphins", home:"SF", homeName:"San Francisco 49ers",
      market:"SF -12.5", total:"47.5", status:"PASS", confidence:"Low", audit:"Preliminary",
      quick:"San Francisco is far stronger on paper, but nearly two touchdowns is a tax. We need extraordinary evidence to lay it.",
      why:["Miami's Week 1 performance was poor enough to tempt an emotional fade.","The market already expresses that pessimism with a massive spread.","Large favorites can dominate a game without covering if pace slows or backups enter late.","Unless injuries make Miami even less functional, the price is the biggest story."],
      watch:["MIA QB/OL","SF skill-player availability","Potential Miami team total","Spread crossing 13/14"],
      matchup:["SF pass rush vs MIA protection","Miami speed vs SF secondary","Game-script pace","Backdoor-cover risk"],
      injuryNote:"Pending.", marketNote:"Do not confuse a strong team rating with a good bet at any price.",
      bottom:"Pass the side for now. Derivatives may become more interesting later."
    },
    {
      id:"was-dal", day:"Sun", time:"3:25 PM CT", away:"WAS", awayName:"Washington Commanders", home:"DAL", homeName:"Dallas Cowboys",
      market:"DAL -4.5", total:"48.5", status:"WATCH", confidence:"Medium", audit:"Preliminary",
      quick:"Dallas lost outright to New York while Washington played Philadelphia tightly. +4.5 may be generous to Washington.",
      why:["Washington's Week 1 performance was competitive against a strong opponent.","Dallas' loss does not automatically make the Cowboys bad, but it weakens the case for laying more than a field goal.","Division familiarity raises the value of points with an underdog if the teams grade closer than the market suggests.","OL and secondary injuries will matter heavily because both teams can create explosive passing plays."],
      watch:["WAS OL","DAL secondary","Line staying above +4","Turnover variance"],
      matchup:["Washington pass protection","Dallas explosive passing","Division familiarity","Fourth-down aggressiveness"],
      injuryNote:"Pending.", marketNote:"The key is whether our fair line lands near Dallas -3 or closer to the market's -4.5.",
      bottom:"Washington is one of the early underdogs worth a full Wednesday model run."
    },
    {
      id:"ind-kc", day:"Sun", time:"7:20 PM CT", away:"IND", awayName:"Indianapolis Colts", home:"KC", homeName:"Kansas City Chiefs",
      market:"KC -6.5", total:"48.5", status:"WATCH", confidence:"Medium", audit:"Preliminary",
      quick:"Kansas City looked strong Monday, but the market reliably charges a Chiefs premium. We need to decide whether Indianapolis is bad enough to justify almost a touchdown.",
      why:["Kansas City handled Denver convincingly and deserves a strong baseline rating.","Indianapolis was beaten badly by Baltimore, but one game against an elite opponent can distort perception.","At -6.5 the question is not who is better; it is whether the true gap exceeds a touchdown.","Kansas City's offensive-line and defensive injuries remain important because they can change both spread and total projections."],
      watch:["KC OL","IND QB/OL","Spread crossing -7","Rest after Monday night"],
      matchup:["KC pressure packages","IND protection","Mahomes third-down efficiency","Short-week rest differential"],
      injuryNote:"Pending.", marketNote:"We do not automatically lay points with Kansas City just because they are clearly superior.",
      bottom:"Watch the number and the injury report. The Chiefs must clear a higher bar because of the market premium."
    },
    {
      id:"nyg-lar", day:"Mon", time:"7:15 PM CT", away:"NYG", awayName:"New York Giants", home:"LAR", homeName:"Los Angeles Rams",
      market:"LAR -7.5", total:"45.5", status:"WATCH", confidence:"Medium", audit:"Preliminary",
      quick:"The Giants won outright in Week 1 while the Rams lost. More than a touchdown is enough to make New York worth investigating.",
      why:["New York's Week 1 win may represent real improvement rather than pure variance.","The Rams being favored is reasonable; the question is whether 7.5 is too much.","Monday gives us the longest injury-information runway of the week, so there is no reason to rush.","A spread above seven materially increases the value of the underdog if our model sees a competitive game."],
      watch:["NYG OL","LAR offensive injuries","Can we hold +7.5 or find +8?","Monday weather"],
      matchup:["NYG pass rush vs LAR OL","Rams passing efficiency","Giants explosive-play prevention","Game-script pace"],
      injuryNote:"We will have several more injury-report cycles before kickoff.", marketNote:"+7.5 is meaningfully different from +6.5. Patience is an advantage here.",
      bottom:"Early Giants watch. No reason to act until the information set is much better."
    }
  ],
  injuries:[
    {team:"Detroit", player:"Christian Mahogany", status:"DNP watch", severity:"high", note:"Starting LG; possible protection downgrade if unavailable."},
    {team:"Detroit", player:"Blake Miller", status:"DNP watch", severity:"high", note:"RT concern; part of a possible OL cluster."},
    {team:"Detroit", player:"Juice Scruggs", status:"Limited watch", severity:"medium", note:"OL depth/cluster impact matters if paired with other absences."},
    {team:"League-wide", player:"Sunday slate", status:"Preliminary", severity:"low", note:"Full Wednesday injury audit will populate this panel with verified starters, replacements, and clusters."}
  ],
  props:[
    {
      id:"allen-pass-yds", rank:1, player:"Josh Allen", pos:"QB", team:"BUF", game:"DET @ BUF", day:"Thu", time:"7:15 PM CT",
      market:"Passing Yards", side:"OVER", line:"248.5", price:"TBD", projection:"251.5", edge:"+3.0 yds", confidence:"Medium", status:"WATCH", audit:"Role/context audit active",
      quick:"OVER 248.5 passing yards. High-total environment and stable full-game role create interest, but Detroit secondary availability, Buffalo OL health and the exact price still need the final audit.",
      why:[
        "Allen's quarterback role is structurally stable, so his historical passing baseline remains more relevant than it would for a player whose workload has materially changed.",
        "The projected game environment supports passing volume if Detroit can keep pace and prevent Buffalo from becoming overly run-heavy in the second half.",
        "We must verify Detroit's current secondary availability and coverage personnel before treating historical pass-defense numbers as predictive.",
        "The exact number matters: a modest edge at 248.5 can disappear quickly if the market moves into the upper 250s."
      ],
      role:["Starting QB with stable full-game role","No workload competition issue at quarterback","Receiver/OL health still must be audited","Historical baseline remains relevant because role is structurally stable"],
      matchup:["DET secondary availability","BUF pass protection","Expected neutral pass rate","Game total and score distribution"],
      risks:["Buffalo builds a large lead and becomes run-heavier","Allen generates offense with his legs rather than passing volume","Market moves several yards before bet time","Unexpected weather or offensive-line downgrade"],
      bottom:"Current side: OVER 248.5 passing yards. Interesting at this threshold, but not a locked bet until the complete Wednesday/Thursday audit is finished."
    },
    {
      id:"stbrown-receptions", rank:2, player:"Amon-Ra St. Brown", pos:"WR", team:"DET", game:"DET @ BUF", day:"Thu", time:"7:15 PM CT",
      market:"Receptions", side:"OVER", line:"7.5", price:"TBD", projection:"Preliminary", edge:"Pending", confidence:"Medium", status:"WATCH", audit:"Role/context audit active",
      quick:"OVER 7.5 receptions. His high-volume role makes catches more appealing than pure yardage, but 7.5 is a demanding threshold and Detroit's OL health could alter route timing and target depth.",
      why:[
        "Reception props are driven heavily by route participation and target share, and St. Brown's role is normally among Detroit's most stable.",
        "A potentially competitive or trailing game script can support pass volume.",
        "Detroit's offensive-line condition matters because pressure can either create short-area targets or disrupt the offense entirely.",
        "At 7.5, we need evidence that his current role supports eight-plus catches rather than simply relying on reputation or one week's target total."
      ],
      role:["Primary high-volume receiver","Route participation expected to remain elite","Teammate availability can redistribute targets","Current-season target share weighted more heavily than career catch average"],
      matchup:["BUF slot/zone coverage","DET pass rate if trailing","Pressure-driven target depth","Red-zone target competition"],
      risks:["Target distribution broadens","Detroit controls game on ground","Buffalo brackets underneath routes","Price rises to 8.5 or juice becomes excessive"],
      bottom:"Current side: OVER 7.5 receptions. Attractive role, but the threshold is high enough that matchup and target concentration must be confirmed."
    }
  ],
  recommendationLog:[
    {week:1, game:"ATL @ PIT", selection:"PIT -5.5", decision:"BET", result:"Win", clv:"+1.0", units:"+0.91", note:"QB/injury-driven thesis."},
    {week:1, game:"ATL @ PIT", selection:"UNDER 40.5", decision:"BET", result:"Win", clv:"+0.5", units:"+0.91", note:"Offensive suppression thesis."},
    {week:1, game:"CLE @ JAX", selection:"JAX -8.5", decision:"BET", result:"Win", clv:"+1.5", units:"+0.91", note:"Cleveland OL mismatch."}
  ]
};
