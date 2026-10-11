const UmsatzDash = (() => {

const ROWS = [{"m":"2025-09","ml":"Sep 25","loc":"Ladengeschäft","sup":"Nelo","cat":"Boote","tx":33,"qty":41,"revenue":290362},{"m":"2025-09","ml":"Sep 25","loc":"Ladengeschäft","sup":"Plastex","cat":"Boote","tx":27,"qty":34,"revenue":227120},{"m":"2025-09","ml":"Sep 25","loc":"Ladengeschäft","sup":"Jantex","cat":"Paddel","tx":176,"qty":405,"revenue":193590},{"m":"2025-09","ml":"Sep 25","loc":"Ladengeschäft","sup":"Braca","cat":"Paddel","tx":162,"qty":373,"revenue":176802},{"m":"2025-09","ml":"Sep 25","loc":"Regatta","sup":"Nelo","cat":"Boote","tx":26,"qty":33,"revenue":233706},{"m":"2025-09","ml":"Sep 25","loc":"Regatta","sup":"Plastex","cat":"Boote","tx":21,"qty":26,"revenue":173680},{"m":"2025-09","ml":"Sep 25","loc":"Regatta","sup":"Jantex","cat":"Paddel","tx":87,"qty":200,"revenue":95600},{"m":"2025-09","ml":"Sep 25","loc":"Regatta","sup":"Braca","cat":"Paddel","tx":80,"qty":184,"revenue":87216},{"m":"2025-10","ml":"Okt 25","loc":"Ladengeschäft","sup":"Nelo","cat":"Boote","tx":29,"qty":36,"revenue":254952},{"m":"2025-10","ml":"Okt 25","loc":"Ladengeschäft","sup":"Plastex","cat":"Boote","tx":24,"qty":30,"revenue":200400},{"m":"2025-10","ml":"Okt 25","loc":"Ladengeschäft","sup":"Jantex","cat":"Paddel","tx":155,"qty":357,"revenue":170646},{"m":"2025-10","ml":"Okt 25","loc":"Ladengeschäft","sup":"Braca","cat":"Paddel","tx":143,"qty":329,"revenue":155946},{"m":"2025-10","ml":"Okt 25","loc":"Regatta","sup":"Nelo","cat":"Boote","tx":17,"qty":21,"revenue":148722},{"m":"2025-10","ml":"Okt 25","loc":"Regatta","sup":"Plastex","cat":"Boote","tx":13,"qty":16,"revenue":106880},{"m":"2025-10","ml":"Okt 25","loc":"Regatta","sup":"Jantex","cat":"Paddel","tx":55,"qty":126,"revenue":60228},{"m":"2025-10","ml":"Okt 25","loc":"Regatta","sup":"Braca","cat":"Paddel","tx":51,"qty":117,"revenue":55458},{"m":"2025-11","ml":"Nov 25","loc":"Ladengeschäft","sup":"Nelo","cat":"Boote","tx":28,"qty":35,"revenue":247870},{"m":"2025-11","ml":"Nov 25","loc":"Ladengeschäft","sup":"Plastex","cat":"Boote","tx":23,"qty":29,"revenue":193720},{"m":"2025-11","ml":"Nov 25","loc":"Ladengeschäft","sup":"Jantex","cat":"Paddel","tx":151,"qty":347,"revenue":165866},{"m":"2025-11","ml":"Nov 25","loc":"Ladengeschäft","sup":"Braca","cat":"Paddel","tx":140,"qty":322,"revenue":152628},{"m":"2025-11","ml":"Nov 25","loc":"Regatta","sup":"Nelo","cat":"Boote","tx":12,"qty":15,"revenue":106230},{"m":"2025-11","ml":"Nov 25","loc":"Regatta","sup":"Plastex","cat":"Boote","tx":9,"qty":11,"revenue":73480},{"m":"2025-11","ml":"Nov 25","loc":"Regatta","sup":"Jantex","cat":"Paddel","tx":39,"qty":90,"revenue":43020},{"m":"2025-11","ml":"Nov 25","loc":"Regatta","sup":"Braca","cat":"Paddel","tx":36,"qty":83,"revenue":39342},{"m":"2025-12","ml":"Dez 25","loc":"Ladengeschäft","sup":"Nelo","cat":"Boote","tx":34,"qty":43,"revenue":304526},{"m":"2025-12","ml":"Dez 25","loc":"Ladengeschäft","sup":"Plastex","cat":"Boote","tx":28,"qty":35,"revenue":233800},{"m":"2025-12","ml":"Dez 25","loc":"Ladengeschäft","sup":"Jantex","cat":"Paddel","tx":181,"qty":416,"revenue":198848},{"m":"2025-12","ml":"Dez 25","loc":"Ladengeschäft","sup":"Braca","cat":"Paddel","tx":168,"qty":386,"revenue":182964},{"m":"2025-12","ml":"Dez 25","loc":"Regatta","sup":"Nelo","cat":"Boote","tx":13,"qty":16,"revenue":113312},{"m":"2025-12","ml":"Dez 25","loc":"Regatta","sup":"Plastex","cat":"Boote","tx":11,"qty":14,"revenue":93520},{"m":"2025-12","ml":"Dez 25","loc":"Regatta","sup":"Jantex","cat":"Paddel","tx":45,"qty":103,"revenue":49234},{"m":"2025-12","ml":"Dez 25","loc":"Regatta","sup":"Braca","cat":"Paddel","tx":41,"qty":94,"revenue":44556},{"m":"2026-01","ml":"Jan 26","loc":"Ladengeschäft","sup":"Nelo","cat":"Boote","tx":30,"qty":38,"revenue":269116},{"m":"2026-01","ml":"Jan 26","loc":"Ladengeschäft","sup":"Plastex","cat":"Boote","tx":24,"qty":30,"revenue":200400},{"m":"2026-01","ml":"Jan 26","loc":"Ladengeschäft","sup":"Jantex","cat":"Paddel","tx":160,"qty":368,"revenue":175904},{"m":"2026-01","ml":"Jan 26","loc":"Ladengeschäft","sup":"Braca","cat":"Paddel","tx":147,"qty":338,"revenue":160212},{"m":"2026-01","ml":"Jan 26","loc":"Regatta","sup":"Nelo","cat":"Boote","tx":12,"qty":15,"revenue":106230},{"m":"2026-01","ml":"Jan 26","loc":"Regatta","sup":"Plastex","cat":"Boote","tx":9,"qty":11,"revenue":73480},{"m":"2026-01","ml":"Jan 26","loc":"Regatta","sup":"Jantex","cat":"Paddel","tx":38,"qty":87,"revenue":41586},{"m":"2026-01","ml":"Jan 26","loc":"Regatta","sup":"Braca","cat":"Paddel","tx":36,"qty":83,"revenue":39342},{"m":"2026-02","ml":"Feb 26","loc":"Ladengeschäft","sup":"Nelo","cat":"Boote","tx":32,"qty":40,"revenue":283280},{"m":"2026-02","ml":"Feb 26","loc":"Ladengeschäft","sup":"Plastex","cat":"Boote","tx":27,"qty":34,"revenue":227120},{"m":"2026-02","ml":"Feb 26","loc":"Ladengeschäft","sup":"Jantex","cat":"Paddel","tx":175,"qty":402,"revenue":192156},{"m":"2026-02","ml":"Feb 26","loc":"Ladengeschäft","sup":"Braca","cat":"Paddel","tx":162,"qty":373,"revenue":176802},{"m":"2026-02","ml":"Feb 26","loc":"Regatta","sup":"Nelo","cat":"Boote","tx":21,"qty":26,"revenue":184132},{"m":"2026-02","ml":"Feb 26","loc":"Regatta","sup":"Plastex","cat":"Boote","tx":18,"qty":23,"revenue":153640},{"m":"2026-02","ml":"Feb 26","loc":"Regatta","sup":"Jantex","cat":"Paddel","tx":72,"qty":166,"revenue":79348},{"m":"2026-02","ml":"Feb 26","loc":"Regatta","sup":"Braca","cat":"Paddel","tx":67,"qty":154,"revenue":72996},{"m":"2026-03","ml":"Mär 26","loc":"Ladengeschäft","sup":"Nelo","cat":"Boote","tx":43,"qty":54,"revenue":382428},{"m":"2026-03","ml":"Mär 26","loc":"Ladengeschäft","sup":"Plastex","cat":"Boote","tx":35,"qty":44,"revenue":293920},{"m":"2026-03","ml":"Mär 26","loc":"Ladengeschäft","sup":"Jantex","cat":"Paddel","tx":186,"qty":428,"revenue":204584},{"m":"2026-03","ml":"Mär 26","loc":"Ladengeschäft","sup":"Braca","cat":"Paddel","tx":172,"qty":396,"revenue":187704},{"m":"2026-03","ml":"Mär 26","loc":"Regatta","sup":"Nelo","cat":"Boote","tx":39,"qty":49,"revenue":347018},{"m":"2026-03","ml":"Mär 26","loc":"Regatta","sup":"Plastex","cat":"Boote","tx":32,"qty":40,"revenue":267200},{"m":"2026-03","ml":"Mär 26","loc":"Regatta","sup":"Jantex","cat":"Paddel","tx":110,"qty":253,"revenue":120934},{"m":"2026-03","ml":"Mär 26","loc":"Regatta","sup":"Braca","cat":"Paddel","tx":101,"qty":232,"revenue":109968},{"m":"2026-04","ml":"Apr 26","loc":"Ladengeschäft","sup":"Nelo","cat":"Boote","tx":45,"qty":56,"revenue":396592},{"m":"2026-04","ml":"Apr 26","loc":"Ladengeschäft","sup":"Plastex","cat":"Boote","tx":37,"qty":46,"revenue":307280},{"m":"2026-04","ml":"Apr 26","loc":"Ladengeschäft","sup":"Jantex","cat":"Paddel","tx":193,"qty":444,"revenue":212232},{"m":"2026-04","ml":"Apr 26","loc":"Ladengeschäft","sup":"Braca","cat":"Paddel","tx":179,"qty":412,"revenue":195288},{"m":"2026-04","ml":"Apr 26","loc":"Regatta","sup":"Nelo","cat":"Boote","tx":53,"qty":66,"revenue":467412},{"m":"2026-04","ml":"Apr 26","loc":"Regatta","sup":"Plastex","cat":"Boote","tx":44,"qty":55,"revenue":367400},{"m":"2026-04","ml":"Apr 26","loc":"Regatta","sup":"Jantex","cat":"Paddel","tx":151,"qty":347,"revenue":165866},{"m":"2026-04","ml":"Apr 26","loc":"Regatta","sup":"Braca","cat":"Paddel","tx":140,"qty":322,"revenue":152628},{"m":"2026-05","ml":"Mai 26","loc":"Ladengeschäft","sup":"Nelo","cat":"Boote","tx":47,"qty":59,"revenue":417838},{"m":"2026-05","ml":"Mai 26","loc":"Ladengeschäft","sup":"Plastex","cat":"Boote","tx":38,"qty":48,"revenue":320640},{"m":"2026-05","ml":"Mai 26","loc":"Ladengeschäft","sup":"Jantex","cat":"Paddel","tx":202,"qty":465,"revenue":222270},{"m":"2026-05","ml":"Mai 26","loc":"Ladengeschäft","sup":"Braca","cat":"Paddel","tx":186,"qty":428,"revenue":202872},{"m":"2026-05","ml":"Mai 26","loc":"Regatta","sup":"Nelo","cat":"Boote","tx":68,"qty":85,"revenue":601970},{"m":"2026-05","ml":"Mai 26","loc":"Regatta","sup":"Plastex","cat":"Boote","tx":55,"qty":69,"revenue":460920},{"m":"2026-05","ml":"Mai 26","loc":"Regatta","sup":"Jantex","cat":"Paddel","tx":191,"qty":439,"revenue":209842},{"m":"2026-05","ml":"Mai 26","loc":"Regatta","sup":"Braca","cat":"Paddel","tx":176,"qty":405,"revenue":191970},{"m":"2026-06","ml":"Jun 26","loc":"Ladengeschäft","sup":"Nelo","cat":"Boote","tx":44,"qty":55,"revenue":389510},{"m":"2026-06","ml":"Jun 26","loc":"Ladengeschäft","sup":"Plastex","cat":"Boote","tx":36,"qty":45,"revenue":300600},{"m":"2026-06","ml":"Jun 26","loc":"Ladengeschäft","sup":"Jantex","cat":"Paddel","tx":188,"qty":432,"revenue":206496},{"m":"2026-06","ml":"Jun 26","loc":"Ladengeschäft","sup":"Braca","cat":"Paddel","tx":174,"qty":400,"revenue":189600},{"m":"2026-06","ml":"Jun 26","loc":"Regatta","sup":"Nelo","cat":"Boote","tx":65,"qty":81,"revenue":573642},{"m":"2026-06","ml":"Jun 26","loc":"Regatta","sup":"Plastex","cat":"Boote","tx":54,"qty":68,"revenue":454240},{"m":"2026-06","ml":"Jun 26","loc":"Regatta","sup":"Jantex","cat":"Paddel","tx":186,"qty":428,"revenue":204584},{"m":"2026-06","ml":"Jun 26","loc":"Regatta","sup":"Braca","cat":"Paddel","tx":171,"qty":393,"revenue":186282},{"m":"2026-07","ml":"Jul 26","loc":"Ladengeschäft","sup":"Nelo","cat":"Boote","tx":41,"qty":51,"revenue":361182},{"m":"2026-07","ml":"Jul 26","loc":"Ladengeschäft","sup":"Plastex","cat":"Boote","tx":34,"qty":43,"revenue":287240},{"m":"2026-07","ml":"Jul 26","loc":"Ladengeschäft","sup":"Jantex","cat":"Paddel","tx":178,"qty":409,"revenue":195502},{"m":"2026-07","ml":"Jul 26","loc":"Ladengeschäft","sup":"Braca","cat":"Paddel","tx":164,"qty":377,"revenue":178698},{"m":"2026-07","ml":"Jul 26","loc":"Regatta","sup":"Nelo","cat":"Boote","tx":65,"qty":81,"revenue":573642},{"m":"2026-07","ml":"Jul 26","loc":"Regatta","sup":"Plastex","cat":"Boote","tx":53,"qty":66,"revenue":440880},{"m":"2026-07","ml":"Jul 26","loc":"Regatta","sup":"Jantex","cat":"Paddel","tx":183,"qty":421,"revenue":201238},{"m":"2026-07","ml":"Jul 26","loc":"Regatta","sup":"Braca","cat":"Paddel","tx":169,"qty":389,"revenue":184386},{"m":"2026-08","ml":"Aug 26","loc":"Ladengeschäft","sup":"Nelo","cat":"Boote","tx":42,"qty":53,"revenue":375346},{"m":"2026-08","ml":"Aug 26","loc":"Ladengeschäft","sup":"Plastex","cat":"Boote","tx":35,"qty":44,"revenue":293920},{"m":"2026-08","ml":"Aug 26","loc":"Ladengeschäft","sup":"Jantex","cat":"Paddel","tx":181,"qty":416,"revenue":198848},{"m":"2026-08","ml":"Aug 26","loc":"Ladengeschäft","sup":"Braca","cat":"Paddel","tx":168,"qty":386,"revenue":182964},{"m":"2026-08","ml":"Aug 26","loc":"Regatta","sup":"Nelo","cat":"Boote","tx":70,"qty":88,"revenue":623216},{"m":"2026-08","ml":"Aug 26","loc":"Regatta","sup":"Plastex","cat":"Boote","tx":58,"qty":73,"revenue":487640},{"m":"2026-08","ml":"Aug 26","loc":"Regatta","sup":"Jantex","cat":"Paddel","tx":199,"qty":458,"revenue":218924},{"m":"2026-08","ml":"Aug 26","loc":"Regatta","sup":"Braca","cat":"Paddel","tx":183,"qty":421,"revenue":199554}];

const MONTHS = ["2025-09","2025-10","2025-11","2025-12","2026-01","2026-02","2026-03","2026-04","2026-05","2026-06","2026-07","2026-08"];
const MON_KURZ = ['Jan','Feb','Mär','Apr','Mai','Jun','Jul','Aug','Sep','Okt','Nov','Dez'];
const MON_LANG = ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'];
const HEUTE = new Date();
const MONAT_D = MONTHS.map((m, i) => new Date(HEUTE.getFullYear(), HEUTE.getMonth() - 12 + i, 1));
const MONTH_LABELS = Object.fromEntries(MONTHS.map((m, i) => [m, MON_KURZ[MONAT_D[i].getMonth()] + ' ' + String(MONAT_D[i].getFullYear()).slice(2)]));
const ZEITRAUM_TEXT = MON_KURZ[MONAT_D[0].getMonth()] + ' ' + MONAT_D[0].getFullYear() + ' – ' + MON_KURZ[MONAT_D[11].getMonth()] + ' ' + MONAT_D[11].getFullYear();

const SUPPLIER_COLOR = { Nelo: 'var(--mk-dunkelblau)', Plastex: 'var(--mk-hellblau)', Jantex: 'var(--mk-orange)', Braca: 'var(--mk-brombeere)' };
const SUPPLIER_LABEL = { Nelo: 'Nelo', Plastex: 'Plastex', Jantex: 'Jantex', Braca: 'Brača-Sport' };
const LOCATION_COLOR = { 'Ladengeschäft': 'var(--mk-dunkelblau)', 'Regatta': 'var(--mk-ultramarin)' };
const CATEGORY_COLOR = { 'Boote': 'var(--mk-dunkelblau)', 'Paddel': 'var(--mk-orange)' };

const TOP_PRODUCTS = [
  { name: 'Nelo K1 Vanquish 5', sup: 'Nelo', weight: 0.22 },
  { name: 'Nelo K2 Vanquish 5', sup: 'Nelo', weight: 0.15 },
  { name: 'Plastex K1 Bullet II', sup: 'Plastex', weight: 0.20 },
  { name: 'Plastex K1 Olympic Warrior 2024', sup: 'Plastex', weight: 0.14 },
  { name: 'Jantex Alpha 840', sup: 'Jantex', weight: 0.18 },
  { name: 'Jantex Beta 840', sup: 'Jantex', weight: 0.15 },
  { name: 'Brača IV 765', sup: 'Braca', weight: 0.17 },
  { name: "Brača XI Van Dusen '92 815", sup: 'Braca', weight: 0.13 },
];

const eur = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', minimumFractionDigits: 2, maximumFractionDigits: 2 });
const num = new Intl.NumberFormat('de-DE');
const pct = (v) => (v * 100).toFixed(1).replace('.', ',') + ' %';

class UmsatzDash {
  constructor(host) { this.host = host; }
  setState(u) { const p = typeof u === 'function' ? u(this.state) : u; this.state = Object.assign({}, this.state, p); this.host.forceUpdate(); setTimeout(() => this.syncSelects(), 0); }
  fromRef = React.createRef();
  toRef = React.createRef();
  syncSelects() {
    const f = this.fromRef.current, t = this.toRef.current;
    const st = this.state || {};
    if (f && st.fromIdx != null && f.value !== String(st.fromIdx)) f.value = String(st.fromIdx);
    if (t && st.toIdx != null && t.value !== String(st.toIdx)) t.value = String(st.toIdx);
  }
  monatSelect(k, wert, opts, ref) {
    return React.createElement('select', {
      key: k, ref, value: String(wert),
      onChange: e => this.setState(k === 'f' ? {fromIdx: Number(e.target.value)} : {toIdx: Number(e.target.value)}),
      style: {border: '1px solid var(--mk-line)', borderRadius: 8, padding: '6px 10px', fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--mk-ink)', background: '#fff'}
    }, opts.map(o => React.createElement('option', {key: o.idx, value: String(o.idx)}, o.label)));
  }
  componentDidMount() { setTimeout(() => this.syncSelects(), 0); }
  componentDidUpdate() { this.syncSelects(); }
  state = {
    fromIdx: 0,
    toIdx: MONTHS.length - 1,
    location: 'alle',
    category: 'alle',
    suppliers: new Set(['Nelo', 'Plastex', 'Jantex', 'Braca']),
    detailOpen: false,
    detailSearch: '',
    detailSort: { key: 'revenue', dir: 'desc' },
    selectedProducts: new Set(TOP_PRODUCTS.map(p => p.name)),
    herstellerOpen: false,
  };

  toggleProduct(name) {
    this.setState((s) => {
      const next = new Set(s.selectedProducts);
      if (next.has(name)) next.delete(name); else next.add(name);
      return { selectedProducts: next };
    });
  }

  setSuppliersForCategory(cat) {
    if (cat === 'Boote') return new Set(['Nelo', 'Plastex']);
    if (cat === 'Paddel') return new Set(['Jantex', 'Braca']);
    return new Set(['Nelo', 'Plastex', 'Jantex', 'Braca']);
  }

  openDetailWith(title, search, sortKey) {
    this.setState({ detailOpen: true, detailTitle: title || 'Umsatzdetails', detailSearch: search || '', detailSort: { key: sortKey || 'revenue', dir: 'desc' } });
  }

  toggleSupplier(sup) {
    this.setState((s) => {
      const next = new Set(s.suppliers);
      if (next.has(sup)) next.delete(sup); else next.add(sup);
      return { suppliers: next };
    });
  }

  renderVals() {
    const { fromIdx, toIdx, location, category, suppliers, detailOpen, detailSearch, detailSort, selectedProducts } = this.state;
    const lo = Math.min(fromIdx, toIdx), hi = Math.max(fromIdx, toIdx);
    const activeMonths = MONTHS.slice(lo, hi + 1);
    const monthSet = new Set(activeMonths);

    const filtered = ROWS.filter(r =>
      monthSet.has(r.m) &&
      (location === 'alle' || r.loc === location) &&
      (category === 'alle' || r.cat === category) &&
      suppliers.has(r.sup)
    );

    const totalRevenue = filtered.reduce((a, r) => a + r.revenue, 0);
    const totalTx = filtered.reduce((a, r) => a + r.tx, 0);
    const regattaRevenue = filtered.filter(r => r.loc === 'Regatta').reduce((a, r) => a + r.revenue, 0);
    const avgTicket = totalTx ? totalRevenue / totalTx : 0;

    // monthly series
    const monthlySeries = activeMonths.map(m => {
      const laden = filtered.filter(r => r.m === m && r.loc === 'Ladengeschäft').reduce((a, r) => a + r.revenue, 0);
      const regatta = filtered.filter(r => r.m === m && r.loc === 'Regatta').reduce((a, r) => a + r.revenue, 0);
      return { m, label: MONTH_LABELS[m], laden, regatta, total: laden + regatta };
    });
    const maxTotal = Math.max(1, ...monthlySeries.map(x => x.total));
    const CHART_H = 150;
    const monthlySeriesOut = monthlySeries.map(x => {
      const barHeight = Math.round((x.total / maxTotal) * CHART_H);
      const ladenHeight = x.total ? Math.round((x.laden / x.total) * barHeight) : 0;
      const regattaHeight = barHeight - ladenHeight;
      return {
        label: x.label, mon: x.label.split(' ')[0], jahr: x.label.split(' ')[1],
        totalLabel: x.total ? eur.format(x.total) : '–',
        barHeight, ladenHeight, regattaHeight,
      };
    });

    // supplier series
    const allSuppliers = ['Nelo', 'Plastex', 'Jantex', 'Braca'];
    const supplierSeries = allSuppliers
      .filter(s => suppliers.has(s))
      .map(s => {
        const rev = filtered.filter(r => r.sup === s).reduce((a, r) => a + r.revenue, 0);
        return { key: s, name: SUPPLIER_LABEL[s], revenue: rev, color: SUPPLIER_COLOR[s] };
      })
      .sort((a, b) => b.revenue - a.revenue)
      .map(s => ({
        ...s,
        revenueLabel: eur.format(s.revenue),
        shareLabel: totalRevenue ? pct(s.revenue / totalRevenue) : '0,0 %',
        pct: totalRevenue ? Math.max(2, (s.revenue / totalRevenue) * 100) : 0,
        onClickDetail: () => this.openDetailWith(`Umsatzdetails · ${s.name}`, s.name === SUPPLIER_LABEL.Braca ? 'Braca' : s.name, 'revenue'),
      }));

    // location series
    const locs = location === 'alle' ? ['Ladengeschäft', 'Regatta'] : [location];
    const locationSeries = locs.map(l => {
      const rows = filtered.filter(r => r.loc === l);
      const rev = rows.reduce((a, r) => a + r.revenue, 0);
      const tx = rows.reduce((a, r) => a + r.tx, 0);
      return {
        name: l, color: LOCATION_COLOR[l],
        revenueLabel: eur.format(rev),
        txLabel: num.format(tx) + ' Transaktionen',
        shareLabel: totalRevenue ? pct(rev / totalRevenue) + ' Anteil' : '0,0 % Anteil',
        onClickDetail: () => this.openDetailWith(`Umsatzdetails · ${l}`, l, 'revenue'),
      };
    });

    // category series
    const cats = category === 'alle' ? ['Boote', 'Paddel'] : [category];
    const categorySeries = cats
      .filter(c => (category !== 'alle') || filtered.some(r => r.cat === c))
      .map(c => {
        const rows = filtered.filter(r => r.cat === c);
        const rev = rows.reduce((a, r) => a + r.revenue, 0);
        const tx = rows.reduce((a, r) => a + r.tx, 0);
        return {
          name: c, color: CATEGORY_COLOR[c],
          revenueLabel: eur.format(rev),
          txLabel: num.format(tx),
          shareLabel: totalRevenue ? pct(rev / totalRevenue) : '0,0 %',
          onClickDetail: () => this.openDetailWith(`Umsatzdetails · ${c}`, c, 'revenue'),
        };
      });

    // top products, scaled by filtered supplier revenue
    const supRevMap = {};
    allSuppliers.forEach(s => { supRevMap[s] = filtered.filter(r => r.sup === s).reduce((a, r) => a + r.revenue, 0); });
    let topProducts = TOP_PRODUCTS
      .filter(p => suppliers.has(p.sup))
      .map(p => ({ name: p.name, sup: p.sup, revenue: supRevMap[p.sup] * p.weight }))
      .filter(p => p.revenue > 0)
      .sort((a, b) => b.revenue - a.revenue)
      .slice(0, 6)
      .map(p => ({
        name: p.name,
        supplier: SUPPLIER_LABEL[p.sup],
        color: SUPPLIER_COLOR[p.sup],
        revenueLabel: eur.format(p.revenue),
        shareLabel: totalRevenue ? pct(p.revenue / totalRevenue) : '0,0 %',
      }));

    // detail table (raw filtered rows, searchable + sortable)
    const q = detailSearch.trim().toLowerCase();
    let detailRows = filtered.filter(r =>
      !q || MONTH_LABELS[r.m].toLowerCase().includes(q) || r.loc.toLowerCase().includes(q) ||
      SUPPLIER_LABEL[r.sup].toLowerCase().includes(q) || r.cat.toLowerCase().includes(q)
    );
    const sortKey = detailSort.key, sortDir = detailSort.dir === 'asc' ? 1 : -1;
    detailRows = detailRows.slice().sort((a, b) => {
      let av, bv;
      if (sortKey === 'month') { av = a.m; bv = b.m; }
      else if (sortKey === 'loc') { av = a.loc; bv = b.loc; }
      else if (sortKey === 'sup') { av = SUPPLIER_LABEL[a.sup]; bv = SUPPLIER_LABEL[b.sup]; }
      else if (sortKey === 'cat') { av = a.cat; bv = b.cat; }
      else { av = a[sortKey]; bv = b[sortKey]; }
      if (av < bv) return -1 * sortDir;
      if (av > bv) return 1 * sortDir;
      return 0;
    });
    const detailRowsOut = detailRows.map(r => ({
      monthLabel: MONTH_LABELS[r.m], locLabel: r.loc, supLabel: SUPPLIER_LABEL[r.sup], supColor: SUPPLIER_COLOR[r.sup],
      catLabel: r.cat, txLabel: num.format(r.tx), qtyLabel: num.format(r.qty), revenueLabel: eur.format(r.revenue),
      avgLabel: eur.format(r.tx ? r.revenue / r.tx : 0),
    }));
    const detailTotals = {
      txLabel: num.format(detailRows.reduce((a, r) => a + r.tx, 0)),
      qtyLabel: num.format(detailRows.reduce((a, r) => a + r.qty, 0)),
      revenueLabel: eur.format(detailRows.reduce((a, r) => a + r.revenue, 0)),
    };
    const sortArrow = (key) => sortKey === key ? (sortDir === 1 ? ' ▲' : ' ▼') : '';
    const mkCol = (key, label, align) => ({ label, align: align || 'left', arrow: sortArrow(key), onClick: () => this.setState(s => ({ detailSort: { key, dir: s.detailSort.key === key && s.detailSort.dir === 'desc' ? 'asc' : 'desc' } })) });
    const detailColumns = [
      mkCol('month', 'Monat'), mkCol('loc', 'Verkaufsort'), mkCol('sup', 'Hersteller'), mkCol('cat', 'Kategorie'),
      mkCol('tx', 'Transaktionen', 'right'), mkCol('qty', 'Menge', 'right'), mkCol('revenue', 'Umsatz', 'right'),
    ];

    // rubric (category) product trends — respects month range + location, independent of category/supplier filter
    const rubricRows = ROWS.filter(r => monthSet.has(r.m) && (location === 'alle' || r.loc === location));
    const rubrics = ['Boote', 'Paddel'].map(cat => {
      const products = TOP_PRODUCTS.filter(p => (cat === 'Boote' ? (p.sup === 'Nelo' || p.sup === 'Plastex') : (p.sup === 'Jantex' || p.sup === 'Braca')));
      const chips = products.map(p => ({
        name: p.name,
        style: (selectedProducts.has(p.name)
          ? `border:1.5px solid ${CATEGORY_COLOR[cat]};background:${CATEGORY_COLOR[cat]};color:#fff;font-weight:700;font-size:12px;padding:5px 10px;border-radius:7px 0 7px 0;cursor:pointer;`
          : `border:1.5px solid var(--mk-line);background:#fff;color:var(--mk-body-soft);font-weight:700;font-size:12px;padding:5px 10px;border-radius:7px 0 7px 0;cursor:pointer;`),
        onClick: () => this.toggleProduct(p.name),
      }));
      const activeProducts = products.filter(p => selectedProducts.has(p.name));
      let maxVal = 1;
      const seriesRaw = activeProducts.map(p => {
        const monthly = activeMonths.map(m => {
          const supRev = rubricRows.filter(r => r.m === m && r.sup === p.sup).reduce((a, r) => a + r.revenue, 0);
          return supRev * p.weight;
        });
        const total = monthly.reduce((a, v) => a + v, 0);
        maxVal = Math.max(maxVal, ...monthly);
        return { name: p.name, color: SUPPLIER_COLOR[p.sup], monthly, total };
      });
      const SPARK_H = 44;
      const series = seriesRaw.map(s => ({
        name: s.name, color: s.color,
        totalLabel: eur.format(s.total),
        bars: s.monthly.map((v, i) => ({ h: Math.max(2, Math.round((v / maxVal) * SPARK_H)), key: i })),
      }));
      return { name: cat, color: CATEGORY_COLOR[cat], chips, series, noSeries: series.length === 0 };
    });

    const monthOptionsFrom = MONTHS.map((m, idx) => ({ idx, label: MONTH_LABELS[m], selected: idx === fromIdx }));
    const monthOptionsTo = MONTHS.map((m, idx) => ({ idx, label: MONTH_LABELS[m], selected: idx === toIdx }));

    const chipStyle = (active, color) => ({
      border: `1.5px solid ${active ? color : 'var(--mk-line)'}`,
      background: active ? color : '#fff',
      color: active ? '#fff' : 'var(--mk-body-soft)',
      fontWeight: 700, fontSize: '13px', padding: '6px 12px',
      borderRadius: '8px 0 8px 0', cursor: 'pointer',
    });
    const styleToStr = (o) => Object.entries(o).map(([k, v]) => `${k.replace(/[A-Z]/g, m => '-' + m.toLowerCase())}:${v}`).join(';');

    const locationOptions = ['alle', 'Ladengeschäft', 'Regatta'].map(v => ({
      label: v === 'alle' ? 'Alle' : v,
      onClick: () => this.setState({ location: v }),
      style: styleToStr(chipStyle(location === v, v === 'alle' ? 'var(--mk-dunkelblau)' : LOCATION_COLOR[v])),
    }));

    const categoryOptions = ['alle', 'Boote', 'Paddel'].map(v => ({
      label: v === 'alle' ? 'Alle' : v,
      onClick: () => this.setState((s) => ({ category: v, suppliers: this.setSuppliersForCategory(v) })),
      style: styleToStr(chipStyle(category === v, v === 'alle' ? 'var(--mk-dunkelblau)' : CATEGORY_COLOR[v])),
    }));

    const supplierOptions = allSuppliers.map(s => ({
      label: SUPPLIER_LABEL[s],
      onClick: () => this.toggleSupplier(s),
      style: styleToStr(chipStyle(suppliers.has(s), SUPPLIER_COLOR[s])),
    }));

    const supplierChecklist = allSuppliers.map(s => ({
      key: s, label: SUPPLIER_LABEL[s], color: SUPPLIER_COLOR[s], checked: suppliers.has(s),
      onToggle: () => this.toggleSupplier(s),
    }));
    const herstellerLabel = suppliers.size === allSuppliers.length ? 'Alle Hersteller'
      : suppliers.size === 0 ? 'Kein Hersteller ausgewählt'
      : suppliers.size + ' Hersteller ausgewählt';

    return {
      stand: HEUTE.toLocaleDateString('de-DE', {day:'2-digit', month:'2-digit', year:'numeric'}), zeitraumText: ZEITRAUM_TEXT,
      rowCountLabel: num.format(totalTx) + ' Transaktionen (modelliert)',
      monthOptionsFrom, monthOptionsTo, fromIdx, toIdx, fromSelect: this.monatSelect('f', fromIdx, monthOptionsFrom, this.fromRef),
      toSelect: this.monatSelect('t', toIdx, monthOptionsTo, this.toRef),
      onFromChange: (e) => this.setState({ fromIdx: Number(e.target.value) }),
      onToChange: (e) => this.setState({ toIdx: Number(e.target.value) }),
      locationOptions, categoryOptions, supplierOptions,
      supplierChecklist, herstellerLabel,
      herstellerOpen: this.state.herstellerOpen,
      toggleHerstellerDropdown: () => this.setState(s => ({ herstellerOpen: !s.herstellerOpen })),
      closeHerstellerDropdown: () => this.setState({ herstellerOpen: false }),
      resetFilters: () => this.setState({ fromIdx: 0, toIdx: MONTHS.length - 1, location: 'alle', category: 'alle', suppliers: new Set(allSuppliers) }),
      kpiRevenue: eur.format(totalRevenue),
      kpiRange: activeMonths.length ? `${MONTH_LABELS[activeMonths[0]]} – ${MONTH_LABELS[activeMonths[activeMonths.length - 1]]}` : '–',
      kpiTx: num.format(totalTx),
      kpiAvgTicket: eur.format(avgTicket),
      kpiRegattaShare: totalRevenue ? pct(regattaRevenue / totalRevenue) : '0,0 %',
      monthlySeries: monthlySeriesOut,
      supplierSeries,
      locationSeries,
      categorySeries,
      topProducts,
      noTopProducts: topProducts.length === 0,
      detailOpen,
      detailTitle: this.state.detailTitle || 'Umsatzdetails',
      openDetailRevenue: () => this.openDetailWith('Umsatzdetails · Gesamtumsatz', '', 'revenue'),
      openDetailTx: () => this.openDetailWith('Umsatzdetails · Transaktionen', '', 'tx'),
      openDetailAvg: () => this.openDetailWith('Umsatzdetails · Ø Bon', '', 'revenue'),
      openDetailRegatta: () => this.openDetailWith('Umsatzdetails · Regatta-Anteil', 'Regatta', 'revenue'),
      closeDetail: () => this.setState({ detailOpen: false }),
      stopClick: (e) => e.stopPropagation(),
      detailSearch,
      onDetailSearch: (e) => this.setState({ detailSearch: e.target.value }),
      detailColumns,
      detailRows: detailRowsOut,
      detailTotals,
      noDetailRows: detailRowsOut.length === 0,
      detailRowCountLabel: num.format(detailRowsOut.length) + ' Zeilen',
      rubrics,
      monthLabelsShort: activeMonths.map(m => MONTH_LABELS[m].slice(0, 3)),
    };
  }
}

return UmsatzDash;
})();