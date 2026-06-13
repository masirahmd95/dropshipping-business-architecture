(function () {
  const data = window.controlRoomData;

  const sampleTotal = data.samples.length;
  const directSale = data.samples.filter((item) => item.decision === "Direct-sale priority").length;
  const laneCounts = data.samples.reduce((counts, item) => {
    counts[item.lane] = (counts[item.lane] || 0) + 1;
    return counts;
  }, {});

  document.getElementById("overallReadiness").textContent = "38%";
  document.getElementById("sampleTotal").textContent = sampleTotal;
  document.getElementById("directSaleCount").textContent = directSale;
  document.getElementById("blockerCount").textContent = data.missing.length;

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function renderReadiness() {
    const grid = document.getElementById("readinessGrid");
    grid.innerHTML = "";
    data.readiness.forEach((item) => {
      const card = el("article", "readiness-card");
      card.appendChild(el("span", "metric-label", item.label));
      card.appendChild(el("strong", null, `${item.value}%`));
      const meter = el("div", "meter");
      const bar = document.createElement("span");
      bar.style.width = `${item.value}%`;
      meter.appendChild(bar);
      card.appendChild(meter);
      card.appendChild(el("p", null, item.note));
      grid.appendChild(card);
    });
  }

  function renderSampleSummary() {
    const node = document.getElementById("sampleSummary");
    node.innerHTML = "";
    [
      ["Lane 1", laneCounts["Lane 1"] || 0, "Simple accessories"],
      ["Lane 2", laneCounts["Lane 2"] || 0, "Skin/eye-adjacent tools"],
      ["Lane 4", laneCounts["Lane 4"] || 0, "Electrical tools"],
      ["Pending", sampleTotal, "US and UK eligibility"]
    ].forEach(([label, value, note]) => {
      const card = el("div", "mini-card");
      card.appendChild(el("strong", null, value));
      card.appendChild(el("span", null, label));
      card.appendChild(el("p", null, note));
      node.appendChild(card);
    });
  }

  function badge(text) {
    const clean = text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const span = el("span", `badge ${clean}`, text);
    return span;
  }

  function renderSamples() {
    const tbody = document.getElementById("sampleRows");
    const query = document.getElementById("sampleSearch").value.trim().toLowerCase();
    const lane = document.getElementById("laneFilter").value;
    tbody.innerHTML = "";

    data.samples
      .filter((item) => lane === "all" || item.lane === lane)
      .filter((item) => {
        const haystack = `${item.product} ${item.route} ${item.backup} ${item.lane} ${item.decision}`.toLowerCase();
        return !query || haystack.includes(query);
      })
      .forEach((item) => {
        const row = document.createElement("tr");
        row.appendChild(el("td", null, item.rank));
        const productCell = el("td");
        productCell.appendChild(el("strong", null, item.product));
        productCell.appendChild(el("small", null, `${item.id} | score ${item.score} | ${item.demand}`));
        row.appendChild(productCell);
        const laneCell = el("td");
        laneCell.appendChild(badge(item.lane));
        row.appendChild(laneCell);
        row.appendChild(el("td", null, item.decision));
        const routeCell = el("td");
        routeCell.appendChild(el("span", null, item.route));
        routeCell.appendChild(el("small", null, `Backup: ${item.backup}`));
        row.appendChild(routeCell);
        const marketCell = el("td");
        marketCell.appendChild(badge("US pending"));
        marketCell.appendChild(badge("UK pending"));
        row.appendChild(marketCell);
        row.appendChild(el("td", null, item.status));
        tbody.appendChild(row);
      });
  }

  function renderArchitecture() {
    const grid = document.getElementById("architectureGrid");
    grid.innerHTML = "";
    data.architecture.forEach((item) => {
      const card = el("article", "architecture-card");
      const top = el("div", "card-top");
      top.appendChild(el("h3", null, item.name));
      top.appendChild(badge(item.status));
      card.appendChild(top);
      card.appendChild(el("p", null, item.detail));
      grid.appendChild(card);
    });
  }

  function renderList(id, items) {
    const list = document.getElementById(id);
    list.innerHTML = "";
    items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    });
  }

  function renderTrendWeights() {
    const container = document.getElementById("trendWeights");
    container.innerHTML = "";
    data.trendWeights.forEach(([label, value]) => {
      const row = el("div", "weight-row");
      row.appendChild(el("span", null, label));
      const meter = el("div", "meter small");
      const bar = document.createElement("span");
      bar.style.width = `${value * 5}%`;
      meter.appendChild(bar);
      row.appendChild(meter);
      row.appendChild(el("strong", null, `${value}`));
      container.appendChild(row);
    });
  }

  function renderMissing() {
    const node = document.getElementById("missingList");
    node.innerHTML = "";
    data.missing.forEach((item, index) => {
      const row = el("div", "missing-item");
      row.appendChild(el("strong", null, String(index + 1).padStart(2, "0")));
      row.appendChild(el("span", null, item));
      node.appendChild(row);
    });
  }

  document.querySelectorAll(".tab").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach((tab) => tab.classList.remove("active"));
      document.querySelectorAll(".panel").forEach((panel) => panel.classList.remove("active"));
      button.classList.add("active");
      document.getElementById(button.dataset.panel).classList.add("active");
    });
  });

  document.getElementById("sampleSearch").addEventListener("input", renderSamples);
  document.getElementById("laneFilter").addEventListener("change", renderSamples);

  renderReadiness();
  renderSampleSummary();
  renderSamples();
  renderArchitecture();
  renderList("crmFlows", data.crmFlows);
  renderList("leadMagnets", data.leadMagnets);
  renderTrendWeights();
  renderList("trendOutputs", data.trendOutputs);
  renderMissing();
})();
