import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

/** Modelos de dados */
interface Area { id: string; nome: string; icon: string; cor: string; desc: string; }
interface Materia { id: string; area: string; nome: string; icon: string; cor: string; }
interface Conteudo {
  id: number; slug: string; titulo: string; descricao: string;
  area: string; materia: string; tags: string[];
  prof: string; prof_slug: string | null;
  data: string; formato: string; tier: string; privacidade: string;
  arquivo: string;
}

@Component({
  selector: 'app-acervo',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './acervo.html',
})
export class Acervo implements OnInit {

  /* ─── DADOS ─────────────────────────────────── */
  readonly AREAS: Area[] = [
    { id: 'engprod',       nome: 'Eng. de Produção', icon: '⚙️', cor: '#0032b5', desc: 'Gestão de produção, operações, logística e sistemas industriais.' },
    { id: 'administracao', nome: 'Administração',     icon: '📊', cor: '#006a6a', desc: 'Marketing, finanças, RH, direito empresarial e estratégia.' },
  ];

  readonly MATERIAS: Materia[] = [
    { id: 'gestao-producao', area: 'engprod',       nome: 'Gestão da Produção',   icon: '🏭', cor: '#0032b5' },
    { id: 'logistica',       area: 'engprod',       nome: 'Logística',            icon: '🚚', cor: '#2b3b8d' },
    { id: 'marketing',       area: 'administracao', nome: 'Marketing',            icon: '📣', cor: '#006a6a' },
    { id: 'financas',        area: 'administracao', nome: 'Finanças',             icon: '💹', cor: '#2b3b8d' },
    { id: 'estatistica',     area: 'administracao', nome: 'Estatística',          icon: '📐', cor: '#f59e0b' },
    { id: 'rh',              area: 'administracao', nome: 'Gestão de Pessoas',    icon: '👥', cor: '#0032b5' },
    { id: 'direito',         area: 'administracao', nome: 'Direito Empresarial',  icon: '⚖️', cor: '#006a6a' },
  ];

  readonly FORMATOS = ['Resumo', 'Aula', 'Slide', 'Masterclass'];
  readonly TIERS    = ['Essencial', 'Pro', 'Full Studio'];

  readonly CONTEUDOS: Conteudo[] = [
    { id: 100, slug: 'escopo-engenharia-producao', titulo: 'Escopo da Engenharia de Produção', descricao: 'Mapa completo das grandes áreas da Engenharia de Produção: operações, processos e sistemas.', area: 'engprod', materia: 'gestao-producao', tags: ['operações','processos','gestão'], prof: '—', prof_slug: null, data: '2026-03-01', formato: 'Masterclass', tier: 'Pro', privacidade: 'publico', arquivo: '/acervo/escopo-engenharia-producao' },
    { id: 101, slug: 'sistemas-de-producao', titulo: 'Sistemas de Produção', descricao: 'Tipos de layout fabril, fluxos de produção e critérios de escolha entre sistemas.', area: 'engprod', materia: 'gestao-producao', tags: ['layout','fluxos','produção'], prof: '—', prof_slug: null, data: '2026-03-01', formato: 'Aula', tier: 'Essencial', privacidade: 'publico', arquivo: '/acervo/sistemas-de-producao' },
    { id: 102, slug: 'tpm-e-oee', titulo: 'TPM & OEE', descricao: 'Total Productive Maintenance e Overall Equipment Effectiveness — fundamentos, pilares e cálculo.', area: 'engprod', materia: 'gestao-producao', tags: ['TPM','OEE','eficiência','manutenção'], prof: '—', prof_slug: null, data: '2026-03-01', formato: 'Slide', tier: 'Essencial', privacidade: 'publico', arquivo: '/acervo/tpm-e-oee' },
    { id: 1, slug: 'marketing-mix-4ps', titulo: 'Fundamentos do Marketing Mix (4Ps)', descricao: 'Produto, Preço, Praça e Promoção — o modelo clássico aplicado a casos reais.', area: 'administracao', materia: 'marketing', tags: ['4Ps','estratégia','produto','precificação'], prof: 'Prof. Ana', prof_slug: 'prof-ana', data: '2026-03-10', formato: 'Resumo', tier: 'Essencial', privacidade: 'publico', arquivo: '' },
    { id: 2, slug: 'segmentacao-e-posicionamento', titulo: 'Segmentação e Posicionamento de Mercado', descricao: 'Critérios de segmentação, STP framework e construção de posicionamento competitivo.', area: 'administracao', materia: 'marketing', tags: ['segmentação','STP','posicionamento'], prof: 'Prof. Ana', prof_slug: 'prof-ana', data: '2026-03-10', formato: 'Resumo', tier: 'Essencial', privacidade: 'publico', arquivo: '' },
    { id: 3, slug: 'branding-gestao-de-marca', titulo: 'Branding e Gestão de Marca', descricao: 'Brand equity, identidade de marca, arquitetura de portfólio e estratégia de rebranding.', area: 'administracao', materia: 'marketing', tags: ['branding','marca','identidade'], prof: 'Prof. Ana', prof_slug: 'prof-ana', data: '2026-02-20', formato: 'Resumo', tier: 'Essencial', privacidade: 'publico', arquivo: '' },
    { id: 4, slug: 'analise-demonstracoes-financeiras', titulo: 'Análise de Demonstrações Financeiras', descricao: 'Leitura e interpretação de DRE, balanço patrimonial e fluxo de caixa.', area: 'administracao', materia: 'financas', tags: ['DRE','balanço','contábil','análise'], prof: 'Prof. Carlos', prof_slug: 'prof-carlos', data: '2026-03-05', formato: 'Resumo', tier: 'Pro', privacidade: 'publico', arquivo: '' },
    { id: 5, slug: 'fluxo-de-caixa-e-capital-de-giro', titulo: 'Fluxo de Caixa e Capital de Giro', descricao: 'Gestão do ciclo financeiro, projeção de caixa e métricas de liquidez operacional.', area: 'administracao', materia: 'financas', tags: ['fluxo de caixa','liquidez','capital de giro'], prof: 'Prof. Carlos', prof_slug: 'prof-carlos', data: '2026-02-15', formato: 'Resumo', tier: 'Essencial', privacidade: 'publico', arquivo: '' },
    { id: 8, slug: 'recrutamento-e-selecao', titulo: 'Recrutamento e Seleção de Pessoas', descricao: 'Fontes de recrutamento, técnicas de seleção, dinâmicas e avaliação de candidatos.', area: 'administracao', materia: 'rh', tags: ['recrutamento','seleção','RH'], prof: 'Prof. Marta', prof_slug: 'prof-marta', data: '2026-02-10', formato: 'Resumo', tier: 'Essencial', privacidade: 'publico', arquivo: '' },
    { id: 11, slug: 'gestao-de-estoque-e-armazenagem', titulo: 'Gestão de Estoque e Armazenagem', descricao: 'Curva ABC, FIFO, LIFO, ponto de pedido e gestão de inventário com indicadores.', area: 'engprod', materia: 'logistica', tags: ['estoque','FIFO','LIFO','ABC'], prof: 'Prof. Roberto', prof_slug: 'prof-roberto', data: '2026-03-12', formato: 'Aula', tier: 'Pro', privacidade: 'publico', arquivo: '' },
    { id: 12, slug: 'planejamento-cadeia-de-suprimentos', titulo: 'Planejamento da Cadeia de Suprimentos', descricao: 'Supply chain end-to-end: fornecedores, produção, distribuição e gestão de riscos.', area: 'engprod', materia: 'logistica', tags: ['supply chain','cadeia','fornecedores'], prof: 'Prof. Roberto', prof_slug: 'prof-roberto', data: '2026-02-25', formato: 'Resumo', tier: 'Essencial', privacidade: 'publico', arquivo: '' },
  ];

  /* ─── ESTADO DOS FILTROS (signals) ───────────── */
  filterArea    = signal('all');
  filterMateria = signal('all');
  filterFormato = signal('all');
  filterTier    = signal('all');
  filterProf    = signal('all');
  filterTags    = signal(new Set<string>());
  searchQuery   = signal('');
  sidebarAberta = signal(false);

  /* ─── COMPUTED: lista filtrada recalcula automaticamente ── */
  filteredConteudos = computed(() => {
    const q = this.searchQuery().toLowerCase();
    return this.CONTEUDOS.filter(c => {
      if (this.filterArea()    !== 'all' && c.area    !== this.filterArea())    return false;
      if (this.filterMateria() !== 'all' && c.materia !== this.filterMateria()) return false;
      if (this.filterFormato() !== 'all' && c.formato !== this.filterFormato()) return false;
      if (this.filterTier()    !== 'all' && c.tier    !== this.filterTier())    return false;
      if (this.filterProf()    !== 'all' && c.prof    !== this.filterProf())    return false;
      if (this.filterTags().size > 0) {
        const hasTags = [...this.filterTags()].every(t => c.tags.includes(t));
        if (!hasTags) return false;
      }
      if (q && ![c.titulo, c.descricao, c.area, c.materia, c.formato, c.tier, c.prof, ...c.tags].join(' ').toLowerCase().includes(q)) return false;
      return true;
    });
  });

  materiasFiltradas = computed(() =>
    this.filterArea() === 'all' ? this.MATERIAS : this.MATERIAS.filter(m => m.area === this.filterArea())
  );

  professores = computed(() => [...new Set(this.CONTEUDOS.map(c => c.prof))].filter(p => p && p !== '—').sort());

  todasTags = computed(() => [...new Set(this.CONTEUDOS.flatMap(c => c.tags))].sort());

  ngOnInit() {}

  /* ─── HELPERS ────────────────────────────────── */
  getMateria(id: string) { return this.MATERIAS.find(m => m.id === id); }
  getArea(id: string)    { return this.AREAS.find(a => a.id === id); }
  fmtData(iso: string)   {
    const [y, m] = iso.split('-');
    const meses = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];
    return `${meses[+m-1]} ${y}`;
  }
  badgeFormatoClass(fmt: string) {
    const map: Record<string,string> = { Resumo:'bg-black/5 text-on-surface-variant', Aula:'bg-amber-100 text-amber-800', Slide:'bg-secondary/10 text-secondary', Masterclass:'bg-tertiary/10 text-tertiary' };
    return map[fmt] || 'bg-black/5 text-on-surface-variant';
  }
  badgeTierClass(tier: string) {
    const map: Record<string,string> = { Essencial:'bg-blue-100 text-blue-700', Pro:'bg-primary/10 text-primary', 'Full Studio':'bg-tertiary/10 text-tertiary' };
    return map[tier] || 'bg-blue-100 text-blue-700';
  }
  countArea(id: string)    { return this.CONTEUDOS.filter(c => c.area === id).length; }
  countMateria(id: string) { return this.CONTEUDOS.filter(c => c.materia === id && (this.filterArea() === 'all' || c.area === this.filterArea())).length; }

  /* ─── AÇÕES DOS FILTROS ──────────────────────── */
  setArea(id: string) {
    this.filterArea.set(id);
    this.filterMateria.set('all');
    this.filterTags.set(new Set());
  }

  toggleTag(tag: string) {
    const tags = new Set(this.filterTags());
    tags.has(tag) ? tags.delete(tag) : tags.add(tag);
    this.filterTags.set(tags);
  }

  hasTag(tag: string) { return this.filterTags().has(tag); }

  clearSearch()  { this.searchQuery.set(''); }
  clearFilters() {
    this.filterArea.set('all'); this.filterMateria.set('all');
    this.filterFormato.set('all'); this.filterTier.set('all');
    this.filterProf.set('all'); this.filterTags.set(new Set());
    this.searchQuery.set('');
  }

  get activeFilters() {
    const list: { label: string; clear: () => void }[] = [];
    if (this.filterArea()    !== 'all') list.push({ label: this.getArea(this.filterArea())?.nome    || this.filterArea(),    clear: () => this.setArea('all') });
    if (this.filterMateria() !== 'all') list.push({ label: this.getMateria(this.filterMateria())?.nome || this.filterMateria(), clear: () => this.filterMateria.set('all') });
    if (this.filterFormato() !== 'all') list.push({ label: this.filterFormato(), clear: () => this.filterFormato.set('all') });
    if (this.filterTier()    !== 'all') list.push({ label: this.filterTier(),    clear: () => this.filterTier.set('all') });
    if (this.filterProf()    !== 'all') list.push({ label: this.filterProf(),    clear: () => this.filterProf.set('all') });
    this.filterTags().forEach(t => list.push({ label: t, clear: () => this.toggleTag(t) }));
    if (this.searchQuery())              list.push({ label: `"${this.searchQuery()}"`, clear: () => this.clearSearch() });
    return list;
  }

  onSearchInput(event: Event) {
    this.searchQuery.set((event.target as HTMLInputElement).value);
  }
}
