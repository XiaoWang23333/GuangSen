(function(){
  const data = window.DREAM_DATA || [];

  // -------- 五维区间图 --------
  const axisWrap = document.getElementById('axisList');
  if (axisWrap) {
    axisWrap.innerHTML = data.map(dim => `
      <div class="axis-row" style="--ac:${dim.color};--ac2:${dim.color2}">
        <div class="axis-name">
          <span class="axis-ico">${dim.icon}</span>
          <span class="axis-title">${dim.title.replace(/^维度.·\s*/,'')}</span>
          <span class="axis-sub">${dim.axis}</span>
        </div>

        <div class="axis-bar">
          <div class="seg seg-w"><span class="seg-label">${dim.tiers[0].label}</span></div>
          <div class="seg seg-m"><span class="seg-label">${dim.tiers[1].label}</span></div>
          <div class="seg seg-s"><span class="seg-label">${dim.tiers[2].label}</span></div>

          <!-- 轴上刻度数字 -->
          <div class="num num-min">-100</div>
          <div class="num num-l">-33</div>
          <div class="num num-zero">0</div>
          <div class="num num-r">+33</div>
          <div class="num num-max">+100</div>

          <!-- 端点含义 -->
          <div class="ends">
            <span class="end-l">${dim.leftLabel}</span>
            <span class="end-r">${dim.rightLabel}</span>
          </div>
        </div>
      </div>
    `).join('');
  }

  // -------- 五幕片场 --------
  const wrap = document.getElementById('acts');
  if(!wrap) return;

  const tierClass = t => t === '弱' ? 'tier-weak' : t === '中' ? 'tier-mid' : 'tier-strong';
  const chipsHTML = (arr) => arr.map(item => `<span class="chip">${item}</span>`).join('');

  wrap.innerHTML = data.map((dim, idx) => {
    const num = ['一','二','三','四','五'][idx];
    return `
    <article class="act" style="--act-c1:${dim.color};--act-c2:${dim.color2}">
      <div class="act-head">
        <div class="act-num">${dim.icon}</div>
        <div class="act-titles">
          <h2>${dim.title}</h2>
          <span class="axis">${dim.axis}</span>
        </div>
      </div>

      <div class="tiers">
        ${dim.tiers.map(t => `
          <div class="tier ${tierClass(t.tier)}">
            <div class="tier-top">
              <div class="tier-badge">${t.tier}</div>
              <div class="tier-name">${t.label}</div>
              <span class="tier-tier">${t.tier}档</span>
            </div>
            <div class="tier-body">
              <p class="tier-show">${t.show}</p>

              <div class="pool adv">
                <h4><span class="ico">🌙</span>梦境冒险组</h4>
                <div class="chips">${chipsHTML(t.adv)}</div>
              </div>
              <div class="pool sup">
                <h4><span class="ico">🛠️</span>梦境支援组</h4>
                <div class="chips">${chipsHTML(t.sup)}</div>
              </div>
              <div class="pool per">
                <h4><span class="ico">🎭</span>梦境演出组</h4>
                <div class="chips">${chipsHTML(t.per)}</div>
              </div>

              <div class="acts-line">
                <b>动作</b>：${t.actsLine.act}<br/>
                <b>台词</b>：${t.actsLine.talk}<br/>
                <b>表情</b>：${t.actsLine.face}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </article>
    `;
  }).join('');
})();
