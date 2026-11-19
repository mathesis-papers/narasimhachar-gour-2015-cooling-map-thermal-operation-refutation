/* 第3版论文第2–4节：能级概率、Gram关系、统一闭包分离。共享引擎负责字幕与时间轴。 */
'use strict';
function titlePair(en, zh, a=1) {
  txt(en, 130, 180, {size:48, fam:F.disp, w:700, c:C.white, a});
  txt(zh, 132, 238, {size:32, fam:F.zh, c:C.dim, a});
}
function populationBars(x, y, label, a=1) {
  txt(label,x,y-35,{size:28,c:C.cyan,a});
  [0,1,3,7].forEach((e,j)=>{
    chip(x+j*143,y,117,48,'E='+e,C.cyan,a,24);
    panel(x+j*143,y+80,117,125,a,C.cyan);
    txt('1/4',x+j*143+58,y+156,{size:32,align:'center',c:C.white,a});
  });
}
function rowTable(x,y,a=1) {
  const rows=[['1','0'],['0','1'],['3/5','4/5'],['3/5','4i/5']];
  rows.forEach((r,j)=>{
    txt('b'+j,x,y+j*88+40,{size:28,c:C.dim,a});
    chip(x+85,y+j*88,170,60,r[0],C.cyan,a,31);
    chip(x+280,y+j*88,170,60,r[1],j===3?C.mag:C.cyan,a,31);
  });
}
function coherenceTable(x,y,mode,a=1) {
  // 对角线始终为1/4；这里只画相干元素的教学结构，不用颜色代替数值。
  const entries=[['1/4','0','3/20','3/20'],['0','1/4','1/5','−i/5'],['3/20','1/5','1/4','z'],['3/20','i/5','z*','1/4']];
  for(let j=0;j<4;j++) for(let k=0;k<4;k++) {
    const diag=j===k;
    chip(x+k*111,y+j*87,96,70,mode==='input'?'1/4':entries[j][k],diag?C.cyan:C.mag,a,24,F.math);
  }
}
SCENES.question = S => {
  titlePair('Same probabilities. Different coherence.','相同概率，不同相干');
  populationBars(220,345,'INPUT / 输入',1);
  populationBars(1080,345,'TARGET / 目标',at(S,0,0.8));
  txt('→',925,490,{size:65,fam:F.math,align:'center',c:C.cyan});
  const a=at(S,1,0.8);
  txt('DIAGONAL = PROBABILITIES',960,690,{size:36,align:'center',a,c:C.cyan});
  txt('OFF-DIAGONAL = COHERENCE',960,755,{size:36,align:'center',a,c:C.mag});
  badge(a,'computed');
};
SCENES.witness = S => {
  titlePair('A target built from four unit rows','从四个单位行向量构造目标');
  rowTable(220,320,at(S,0,0.7));
  const a=at(S,1,0.8);
  txt('σ = B B* / 4',1185,362,{size:55,fam:F.math,align:'center',a,c:C.white});
  coherenceTable(970,405,'target',a);
  txt('rank = 2',1500,535,{size:40,fam:F.math,a,c:C.white});
  txt('z = (9 − 16i)/100',1450,610,{size:30,fam:F.math,a,c:C.mag});
  txt('3² + 4² = 5²',435,744,{size:38,fam:F.math,align:'center',c:C.cyan});
  txt('K₀* K₀ + K₁* K₁ = I',1190,815,{size:35,fam:F.math,align:'center',a,c:C.cyan});
  badge(a,'computed');
};
SCENES.blocks = S => {
  titlePair('No energy loss means no downward jumps','平均能量不变，向下跃迁全部消失');
  const a=at(S,0,0.7), q=at(S,1,1.0);
  panel(175,320,650,450,a,C.cyan,'FINITE BATH / 有限环境');
  [0,1,3,7].forEach((e,j)=>{
    const yy=698-j*96;
    line(250,yy,600,yy,C.cyan,a,3);
    txt('E = '+e,630,yy+10,{size:27,a,c:C.white});
    if(j>0){
      line(520,yy+12,520,yy+78,C.dim,a*(1-q),4);
      if(q>0.1) txt('0',536,yy+59,{size:30,a:q,c:C.argued});
    }
  });
  txt('Σ (Eₖ − Eⱼ) Pⱼ|ₖ pₖ = 0',1275,400,{size:36,fam:F.math,align:'center',a:q,c:C.white});
  txt('all terms ≥ 0',1275,460,{size:31,align:'center',a:q,c:C.dim});
  [0,1,2,3].forEach((k)=>chip(930+k*208,550,174,110,'V'+k,C.argued,q,42));
  txt('Vₖ Vₖ* = I',1275,735,{size:44,fam:F.math,align:'center',a:q,c:C.argued});
  badge(q,'argued');
};
SCENES.relations = S => {
  titlePair('Two relations cannot both be unitary','两条关系不能同时满足酉性');
  const a=at(S,0,0.8), q=at(S,1,1.2);
  panel(180,315,1560,160,a,C.cyan);
  txt('V₂ = (3/5)V₀ + (4/5)V₁',960,376,{size:43,fam:F.math,align:'center',a,c:C.white});
  txt('V₃ = (3/5)V₀ + (4i/5)V₁',960,442,{size:43,fam:F.math,align:'center',a,c:C.white});
  txt('X = V₀ V₁*',960,550,{size:44,fam:F.math,align:'center',a:q,c:C.cyan});
  chip(260,592,610,88,'X + X* = 0',C.argued,q,39,F.math);
  chip(1050,592,610,88,'X* − X = 0',C.argued,q,39,F.math);
  txt('X = 0',760,777,{size:60,fam:F.math,align:'center',a:q,c:C.argued});
  txt('but   X X* = I',1240,777,{size:48,fam:F.math,align:'center',a:q,c:C.white});
  badge(q,'argued');
};
SCENES.gap = S => {
  titlePair('An error barrier independent of bath size','不随环境增大而消失的误差屏障');
  const a=at(S,0,0.8), q=at(S,1,0.9);
  panel(185,320,700,440,a,C.argued,'GRAM ERROR / Gram误差');
  txt('max |Dⱼₖ − Cⱼₖ|',535,430,{size:44,fam:F.math,align:'center',a,c:C.white});
  txt('≥ 1 / 144',535,535,{size:64,fam:F.math,align:'center',a,c:C.argued});
  txt('for every g ≥ 1',535,652,{size:32,align:'center',a,c:C.dim});
  txt('→',955,530,{size:65,fam:F.math,align:'center',a:q,c:C.cyan});
  panel(1035,320,700,440,q,C.argued,'OUTPUT ERROR / 输出误差');
  txt('|| τ − σ ||₁',1385,430,{size:53,fam:F.math,align:'center',a:q,c:C.white});
  txt('> 10⁻⁸',1385,535,{size:69,fam:F.math,align:'center',a:q,c:C.argued});
  txt('full trace norm',1385,652,{size:32,align:'center',a:q,c:C.dim});
  txt('Written quantitative argument · 原论文书面定量论证',960,820,{size:31,fam:F.zh,align:'center',a,c:C.dim});
  badge(a,'argued');
};
SCENES.scope = S => {
  titlePair('Exact refutation and written closure separation','精确否定与书面闭包分离');
  const a=at(S,0,0.8), q=at(S,1,0.8);
  panel(180,315,750,240,a,C.cyan,'PUBLIC LEAN STATEMENT');
  txt('Some cooling transitions',555,402,{size:36,align:'center',a,c:C.white});
  txt('have no exact thermal realization',555,480,{size:30,align:'center',a,c:C.white});
  panel(990,315,750,240,a,C.argued,'WRITTEN EXTENSION');
  txt('closure separation',1365,402,{size:39,align:'center',a,c:C.white});
  txt('|| τ − σ ||₁ > 10⁻⁸',1365,480,{size:38,fam:F.math,align:'center',a,c:C.argued});
  txt('3 levels: exact failure, still approximable',960,637,{size:36,align:'center',a:q,c:C.white});
  txt('4 levels: closure separation',960,702,{size:38,align:'center',a:q,c:C.cyan});
  txt('Haobo Ma · Wenlin Zhang | Version 3',960,788,{size:30,align:'center',a:q,c:C.dim});
  txt('Narasimhachar–Gour · Maestro · Dykema–Juschenko',960,838,{size:27,align:'center',a:q,c:C.dim});
  // 此处不使用全画面绿色徽章，以免把书面闭包界标成Lean结论。
};
FILM.poster = () => {
  titlePair('Cooling without energy loss','冷却而不降能');
  txt('FOUR LEVELS · A COHERENCE OBSTRUCTION',130,300,{size:31,c:C.cyan});
  populationBars(220,400,'UNCHANGED POPULATIONS / 概率不变');
  panel(1020,380,710,350,1,C.argued);
  txt('X + X* = 0',1375,468,{size:45,fam:F.math,align:'center',c:C.white});
  txt('X* − X = 0',1375,545,{size:45,fam:F.math,align:'center',c:C.white});
  txt('X = 0   but   X X* = I',1375,650,{size:38,fam:F.math,align:'center',c:C.argued});
  txt('Haobo Ma · Wenlin Zhang',960,855,{size:35,align:'center',c:C.white});
  txt('Narasimhachar–Gour’s question · Dykema–Juschenko’s obstruction',960,925,{size:25,align:'center',c:C.dim});
};
