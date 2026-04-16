require('dotenv').config();
const { sequelize, Plano, Professor, Materia, Aula, Assinatura } = require('./src/models');
const bcrypt = require('bcryptjs');

async function seed() {
  try {
    await sequelize.authenticate();
    console.log('Conectado ao banco para seed...');

    // 1. Criar os Planos do Catálogo
    const planosData = [
      {
        nome: 'Hub Starter',
        preco_mensal: 49.00,
        descricao: 'Até 10 aulas publicadas, perfil público, busca no acervo, link compartilhável, analytics básico.',
        features: ['10 aulas', 'Perfil público', 'Analytics básico', 'Link compartilhável']
      },
      {
        nome: 'Hub Pro',
        preco_mensal: 99.00,
        descricao: 'Até 30 aulas, analytics avançado, destaque no hub, atualizações simples.',
        features: ['30 aulas', 'Analytics avançado', 'Destaque no hub', 'Suporte a atualizações']
      },
      {
        nome: 'Hub Institucional',
        preco_mensal: 249.00,
        descricao: 'Aulas ilimitadas, múltiplos professores, relatórios consolidados.',
        features: ['Aulas ilimitadas', 'Múltiplos professores', 'Relatórios institucionais', 'Reunião mensal']
      }
    ];

    const planosCriados = [];
    for (const data of planosData) {
      const [plano] = await Plano.findOrCreate({
        where: { nome: data.nome },
        defaults: data
      });
      planosCriados.push(plano);
    }
    console.log('✅ Planos criados!');

    // 2. Criar Professor (Michael Douglas / Bussmann)
    const senhaHash = await bcrypt.hash('123456', 10);
    const [professor] = await Professor.findOrCreate({
      where: { email: 'contato@mistudies.com.br' },
      defaults: {
        nome: 'Michael Douglas',
        senha_hash: senhaHash,
        bio: 'Professor especialista e criador do MiStudies. Foco em produção de conteúdo didático com excelência editorial.',
        slug: 'michael-douglas',
        setup_tier: 'institucional',
        setup_pago: true
      }
    });
    console.log('✅ Professor criado!');

    // 3. Vincular Assinatura Inicial
    const planoStarter = planosCriados.find(p => p.nome === 'Hub Starter');
    await Assinatura.findOrCreate({
      where: { professor_id: professor.id, plano_id: planoStarter.id },
      defaults: {
        status: 'ativa',
        data_inicio: new Date()
      }
    });
    console.log('✅ Assinatura ativa vinculada!');

    // 4. Criar Matérias
    const [materiaEngenharia] = await Materia.findOrCreate({
      where: { nome: 'Engenharia da Produção', professor_id: professor.id },
      defaults: {
        descricao: 'Conceitos avançados sobre Lean, Kanban e Gestão de Qualidade em processos.',
        tags: ['Engenharia', 'Processos', 'Gestão']
      }
    });
    console.log('✅ Matéria de Engenharia criada!');

    const [materiaNegocios] = await Materia.findOrCreate({
      where: { nome: 'Estratégia de Negócios', professor_id: professor.id },
      defaults: {
        descricao: 'Modelos de negócios digitais, SaaS e Freemium.',
        tags: ['Negócios', 'SaaS', 'Estratégia']
      }
    });

    // 5. Criar Aulas Publicadas
    await Aula.findOrCreate({
      where: { titulo: 'Introdução ao Lean Manufacturing', professor_id: professor.id },
      defaults: {
        materia_id: materiaEngenharia.id,
        descricao: 'Visão geral sobre desperdícios, fluxo de valor e melhoria contínua (Kaizen).',
        tier: 'essencial',
        status: 'publicado',
        tags: ['lean', 'manufatura', 'introducao'],
        published_at: new Date()
      }
    });

    await Aula.findOrCreate({
      where: { titulo: 'O Modelo Freemium na Prática', professor_id: professor.id },
      defaults: {
        materia_id: materiaNegocios.id,
        descricao: 'Como estruturar uma esteira de produtos desde a isca gratuita até o Full Studio.',
        tier: 'pro',
        status: 'publicado',
        tags: ['freemium', 'precificacao'],
        published_at: new Date()
      }
    });
    console.log('✅ Aulas criadas!');

    console.log('🎉 Banco populado com sucesso de acordo com o plano do projeto!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Erro no seed:', error);
    process.exit(1);
  }
}

seed();
