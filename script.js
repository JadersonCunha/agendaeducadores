const eventosIniciais = [
  { id: 1, data: "2026-02-09", hora: "13:45", fim: "16:30", titulo: "Reunião das Equipas Técnicas e Direção (Todas as segundas-feiras à tarde)", categoria: "Reunião", obs: "Recorrente semanalmente" },
  { id: 2, data: "2026-02-02", hora: "08:00", fim: "12:00", titulo: "Reunião por Serviço/Programa (Segundas-feiras de manhã)", categoria: "Reunião", obs: "1ª semana: SCFV | 3ª semana: TE | 4ª semana: Aprendizagem" },
  { id: 3, data: "2026-02-02", hora: "08:00", fim: "17:00", titulo: "Dia Mundial da Vida Religiosa Consagrada / Nossa Senhora dos Navegantes - Feriado", categoria: "Feriado", obs: "Plano Verão até dia 20: atendimento das 8h às 12h30" },
  { id: 4, data: "2026-02-03", hora: "08:00", fim: "17:00", titulo: "Fórum de Entidades – Ir. Daniele e Teresinha", categoria: "Reunião", obs: "" },
  { id: 5, data: "2026-02-08", hora: "08:00", fim: "17:00", titulo: "Dia Mundial de Oração contra o Tráfico de Pessoas", categoria: "Evento Escolar", obs: "" },
  { id: 6, data: "2026-02-09", hora: "08:00", fim: "17:00", titulo: "Início da Semana Socioeducativa de Formação dos Colaboradores (09 a 20/02)", categoria: "Planejamento", obs: "De 09 a 20 de fevereiro" },
  { id: 7, data: "2026-02-12", hora: "08:00", fim: "17:00", titulo: "Fórum SCFV – Cláudia", categoria: "Reunião", obs: "" },
  { id: 8, data: "2026-02-18", hora: "08:00", fim: "17:00", titulo: "Quarta-feira de Cinzas e Início da Quaresma - Abertura da Campanha da Fraternidade 2026", categoria: "Evento Escolar", obs: "" },
  { id: 9, data: "2026-02-18", hora: "08:00", fim: "17:00", titulo: "Encontro da Pastoral das Unidades Socioassistenciais da Rede ICM – online", categoria: "Reunião", obs: "Formato online" },
  { id: 10, data: "2026-02-04", hora: "08:00", fim: "17:00", titulo: "Reunião Rede Intersecretarias – Cristiane e Camila (04 e 11)", categoria: "Reunião", obs: "Ocorre também dia 11/02" },
  { id: 11, data: "2026-02-19", hora: "08:00", fim: "17:00", titulo: "Reunião do FORTE – Giovani", categoria: "Reunião", obs: "" },
  { id: 12, data: "2026-02-20", hora: "08:00", fim: "17:00", titulo: "Reunião das Coras / Fórum da Aprendizagem (FOGAP e FORMAP)", categoria: "Reunião", obs: "Fórum da Aprendizagem também no dia 25/02" },
  { id: 13, data: "2026-02-22", hora: "08:00", fim: "17:00", titulo: "Dia de Auxiliar de Limpeza", categoria: "Evento Escolar", obs: "" },
  { id: 14, data: "2026-02-24", hora: "08:00", fim: "17:00", titulo: "Reunião de Fluxo do SCFV", categoria: "Reunião", obs: "" },
  { id: 15, data: "2026-02-25", hora: "08:00", fim: "17:00", titulo: "Fórum da Aprendizagem (FOGAP e FORMAP)", categoria: "Reunião", obs: "" },
  { id: 16, data: "2026-03-03", hora: "08:00", fim: "17:00", titulo: "Fórum de Entidades – Ir. Daniele e Teresinha", categoria: "Reunião", obs: "" },
  { id: 17, data: "2026-03-04", hora: "08:00", fim: "17:00", titulo: "Reunião Rede Intersecretarias – Cristiane e Camila (04 e 11)", categoria: "Reunião", obs: "Ocorre também dia 11/03" },
  { id: 18, data: "2026-03-08", hora: "08:00", fim: "17:00", titulo: "Dia Internacional da Mulher", categoria: "Evento Escolar", obs: "" },
  { id: 19, data: "2026-03-09", hora: "08:00", fim: "17:00", titulo: "Formação dos Colaboradores - não haverá atendimento", categoria: "Planejamento", obs: "Sem atendimento aos educandos" },
  { id: 20, data: "2026-03-10", hora: "08:00", fim: "17:00", titulo: "Reunião da Coras", categoria: "Reunião", obs: "" },
  { id: 21, data: "2026-03-11", hora: "08:00", fim: "17:00", titulo: "Fórum da Aprendizagem / Encontro Coord. Pedagógicas Rede ICM – online", categoria: "Reunião", obs: "Fórum também dia 26/03" },
  { id: 22, data: "2026-03-12", hora: "08:00", fim: "17:00", titulo: "Fórum SCFV – Cláudia", categoria: "Reunião", obs: "" },
  { id: 23, data: "2026-03-13", hora: "08:00", fim: "17:00", titulo: "Passeio para o Parque Florybal – SCFV e TE", categoria: "Evento Escolar", obs: "" },
  { id: 24, data: "2026-03-17", hora: "08:00", fim: "17:00", titulo: "Morte de Bárbara Maix - Fundadora ICM", categoria: "Evento Escolar", obs: "" },
  { id: 25, data: "2026-03-18", hora: "18:00", fim: "20:00", titulo: "Reunião com todas as famílias", categoria: "Reunião", obs: "Às 18h" },
  { id: 26, data: "2026-03-19", hora: "08:00", fim: "17:00", titulo: "Dia de São José / Fórum Forte – Giovani", categoria: "Evento Escolar", obs: "Padroeiro dos operários e da família" },
  { id: 27, data: "2026-03-21", hora: "08:00", fim: "17:00", titulo: "Moinhos (Ação comunitária)", categoria: "Evento Escolar", obs: "" },
  { id: 28, data: "2026-03-25", hora: "08:00", fim: "17:00", titulo: "Comemoração aniversários do 1º Trimestre", categoria: "Evento Escolar", obs: "" },
  { id: 29, data: "2026-03-25", hora: "18:00", fim: "20:00", titulo: "Comissão de Famílias", categoria: "Reunião", obs: "Às 18h" },
  { id: 30, data: "2026-03-26", hora: "08:00", fim: "17:00", titulo: "Aniversário de POA 254 Anos / Fórum da Aprendizagem", categoria: "Evento Escolar", obs: "" },
  { id: 31, data: "2026-03-30", hora: "17:00", fim: "18:30", titulo: "Celebração de Páscoa da Equipa", categoria: "Evento Escolar", obs: "Às 17h" },
  { id: 32, data: "2026-03-31", hora: "08:00", fim: "17:00", titulo: "Reunião de Fluxo do SCFV - Equipa Técnica / Almoço de Páscoa", categoria: "Evento Escolar", obs: "Campanha de brindes para festa junina" },
  { id: 33, data: "2026-04-01", hora: "08:00", fim: "17:00", titulo: "Celebração de Páscoa com utilizadores – no turno de atendimento", categoria: "Evento Escolar", obs: "" },
  { id: 34, data: "2026-04-01", hora: "08:00", fim: "17:00", titulo: "Reunião Rede Intersecretarias – Cristiane e Camila (01 e 08)", categoria: "Reunião", obs: "Ocorre também dia 08/04" },
  { id: 35, data: "2026-04-03", hora: "08:00", fim: "17:00", titulo: "Paixão do Senhor – Feriado", categoria: "Feriado", obs: "" },
  { id: 36, data: "2026-04-05", hora: "08:00", fim: "17:00", titulo: "Páscoa do Senhor", categoria: "Feriado", obs: "" },
  { id: 37, data: "2026-04-07", hora: "08:00", fim: "17:00", titulo: "Fórum de Entidades – Ir. Daniele e Teresinha", categoria: "Reunião", obs: "" },
  { id: 38, data: "2026-04-08", hora: "08:00", fim: "17:00", titulo: "Encontro dos Assistentes Sociais das Unidades Socioassistenciais da Rede ICM – online / Fórum da Aprendizagem", categoria: "Reunião", obs: "Fórum também dia 17/04" },
  { id: 39, data: "2026-04-09", hora: "08:00", fim: "17:00", titulo: "Fórum SCFV – Cláudia", categoria: "Reunião", obs: "" },
  { id: 40, data: "2026-04-13", hora: "08:00", fim: "17:00", titulo: "Formação dos Colaboradores – não haverá atendimento", categoria: "Planejamento", obs: "Sem atendimento aos educandos" },
  { id: 41, data: "2026-04-14", hora: "08:00", fim: "17:00", titulo: "Reunião da Coras", categoria: "Reunião", obs: "" },
  { id: 42, data: "2026-04-16", hora: "08:00", fim: "17:00", titulo: "Fórum Forte – Giovani", categoria: "Reunião", obs: "" },
  { id: 43, data: "2026-04-17", hora: "08:00", fim: "17:00", titulo: "Fórum da Aprendizagem (FOGAP e FORMAP)", categoria: "Reunião", obs: "" },
  { id: 44, data: "2026-04-20", hora: "08:00", fim: "17:00", titulo: "Encontro com as Diretoras e Vices das Unidades Socioassistenciais (20 a 22)", categoria: "Reunião", obs: "De 20 a 22 de abril" },
  { id: 45, data: "2026-04-21", hora: "08:00", fim: "17:00", titulo: "Tiradentes – Feriado", categoria: "Feriado", obs: "" },
  { id: 46, data: "2026-04-24", hora: "08:00", fim: "17:00", titulo: "Dia do Jovem Aprendiz", categoria: "Evento Escolar", obs: "" },
  { id: 47, data: "2026-04-28", hora: "08:00", fim: "17:00", titulo: "Reunião de Fluxo SCFV - Equipa Técnica", categoria: "Reunião", obs: "" },
  { id: 48, data: "2026-04-29", hora: "08:00", fim: "17:00", titulo: "Encontro das Psicólogas das Unidades Socioassistenciais da Rede ICM - online", categoria: "Reunião", obs: "Mostra de Trabalhos – evento interno" },
  { id: 49, data: "2026-05-01", hora: "08:00", fim: "17:00", titulo: "Dia Mundial do Trabalho - Feriado", categoria: "Feriado", obs: "" },
  { id: 50, data: "2026-05-05", hora: "08:00", fim: "17:00", titulo: "Fórum de Entidades – Ir. Daniele e Teresinha", categoria: "Reunião", obs: "" },
  { id: 51, data: "2026-05-06", hora: "08:00", fim: "17:00", titulo: "Reunião Rede Intersecretarias (06 e 13) / Dia de quem cuida de mim e Fundação", categoria: "Evento Escolar", obs: "No turno e integrando as famílias" },
  { id: 52, data: "2026-05-09", hora: "08:00", fim: "17:00", titulo: "Aniversário de Fundação da Congregação – ICM", categoria: "Evento Escolar", obs: "Apresentação musical no Jardim Bárbara Maix" },
  { id: 53, data: "2026-05-10", hora: "08:00", fim: "17:00", titulo: "Dia da Cozinheira e Auxiliar de Cozinheira", categoria: "Evento Escolar", obs: "" },
  { id: 54, data: "2026-05-11", hora: "08:00", fim: "17:00", titulo: "Formação dos Colaboradores – não haverá atendimento", categoria: "Planejamento", obs: "Sem atendimento aos educandos" },
  { id: 55, data: "2026-05-12", hora: "08:00", fim: "17:00", titulo: "Reunião da Coras", categoria: "Reunião", obs: "" },
  { id: 56, data: "2026-05-13", hora: "08:00", fim: "17:00", titulo: "Fórum da Aprendizagem (13 e 22) / Reunião Rede Intersecretarias", categoria: "Reunião", obs: "Fórum também dia 22/05" },
  { id: 57, data: "2026-05-14", hora: "08:00", fim: "17:00", titulo: "Fórum do SCFV – Cláudia", categoria: "Reunião", obs: "" },
  { id: 58, data: "2026-05-15", hora: "08:00", fim: "17:00", titulo: "Dia da Assistente Social", categoria: "Evento Escolar", obs: "" },
  { id: 59, data: "2026-05-17", hora: "08:00", fim: "17:00", titulo: "Ascensão do Senhor", categoria: "Evento Escolar", obs: "" },
  { id: 60, data: "2026-05-18", hora: "08:00", fim: "17:00", titulo: "Dia Nacional de luta contra o abuso e exploração sexual de Crianças e Adolescentes / Início organização Festa Junina", categoria: "Evento Escolar", obs: "" },
  { id: 61, data: "2026-05-20", hora: "18:00", fim: "20:00", titulo: "Roda de conversa – 18h / Dia do Pedagogo / Dia do Profissional do RH", categoria: "Reunião", obs: "" },
  { id: 62, data: "2026-05-21", hora: "08:00", fim: "17:00", titulo: "Fórum Forte – Giovani", categoria: "Reunião", obs: "" },
  { id: 63, data: "2026-05-22", hora: "08:00", fim: "17:00", titulo: "Fórum da Aprendizagem (FOGAP e FORMAP)", categoria: "Reunião", obs: "" },
  { id: 64, data: "2026-05-24", hora: "08:00", fim: "17:00", titulo: "Pentecostes", categoria: "Evento Escolar", obs: "" },
  { id: 65, data: "2026-05-26", hora: "08:00", fim: "17:00", titulo: "Reunião de Fluxo SCFV - Equipa Técnica", categoria: "Reunião", obs: "" },
  { id: 66, data: "2026-05-27", hora: "18:00", fim: "20:00", titulo: "Comissão de Famílias – 18h", categoria: "Reunião", obs: "" },
  { id: 67, data: "2026-05-31", hora: "08:00", fim: "17:00", titulo: "Santíssima Trindade", categoria: "Evento Escolar", obs: "" },
  { id: 68, data: "2026-06-02", hora: "08:00", fim: "17:00", titulo: "Fórum de Entidades – Ir. Daniele e Teresinha", categoria: "Reunião", obs: "" },
  { id: 69, data: "2026-06-03", hora: "08:00", fim: "17:00", titulo: "Reunião Rede Intersecretarias – Cristiane e Camila (03 e 10)", categoria: "Reunião", obs: "Ocorre também dia 10/06" },
  { id: 70, data: "2026-06-04", hora: "08:00", fim: "17:00", titulo: "Corpus Christi - Feriado", categoria: "Feriado", obs: "" },
  { id: 71, data: "2026-06-08", hora: "08:00", fim: "17:00", titulo: "Formação dos Colaboradores – não haverá atendimento", categoria: "Planejamento", obs: "Sem atendimento aos educandos" },
  { id: 72, data: "2026-06-09", hora: "08:00", fim: "17:00", titulo: "Reunião da Coras", categoria: "Reunião", obs: "" },
  { id: 73, data: "2026-06-10", hora: "08:00", fim: "17:00", titulo: "Fórum da Aprendizagem (10 e 19) / Reunião Rede Intersecretarias", categoria: "Reunião", obs: "Fórum também dia 19/06" },
  { id: 74, data: "2026-06-11", hora: "08:00", fim: "17:00", titulo: "Fórum do SCFV – Cláudia", categoria: "Reunião", obs: "" },
  { id: 75, data: "2026-06-12", hora: "08:00", fim: "17:00", titulo: "Sagrado Coração de Jesus", categoria: "Evento Escolar", obs: "" },
  { id: 76, data: "2026-06-13", hora: "08:00", fim: "17:00", titulo: "Imaculado Coração de Maria – padroeira da Congregação", categoria: "Evento Escolar", obs: "" },
  { id: 77, data: "2026-06-18", hora: "08:00", fim: "17:00", titulo: "Fórum Forte – Giovani", categoria: "Reunião", obs: "" },
  { id: 78, data: "2026-06-19", hora: "08:00", fim: "17:00", titulo: "Fórum da Aprendizagem (FOGAP e FORMAP)", categoria: "Reunião", obs: "" },
  { id: 79, data: "2026-06-20", hora: "08:00", fim: "17:00", titulo: "Festa Junina do IP", categoria: "Evento Escolar", obs: "" },
  { id: 80, data: "2026-06-24", hora: "08:00", fim: "17:00", titulo: "Aniversariantes 2º trimestre / São João Batista / Festa Junina interna", categoria: "Evento Escolar", obs: "" },
  { id: 81, data: "2026-06-27", hora: "08:00", fim: "17:00", titulo: "Aniversário de Nascimento de Bárbara Maix - Fundadora da Congregação", categoria: "Evento Escolar", obs: "Celebração interna" },
  { id: 82, data: "2026-06-29", hora: "09:30", fim: "16:00", titulo: "São Pedro e São Paulo / T.E. Cinema Capitólio (filme Portuñol)", categoria: "Evento Escolar", obs: "Sessões às 9h30 (12 lugares) e 14h30 (15 lugares)" },
  { id: 83, data: "2026-06-30", hora: "08:00", fim: "17:00", titulo: "Reunião de Fluxo SCFV - Equipa Técnica / Entrega da previsão orçamentária 2027", categoria: "Planejamento", obs: "" },
  { id: 84, data: "2026-07-01", hora: "08:00", fim: "17:00", titulo: "Reunião Rede Intersecretarias – Cristiane e Camila (01 e 08)", categoria: "Reunião", obs: "Ocorre também dia 08/07" },
  { id: 85, data: "2026-07-07", hora: "08:00", fim: "17:00", titulo: "Fórum de Entidades – Ir. Daniele", categoria: "Reunião", obs: "" },
  { id: 86, data: "2026-07-08", hora: "08:00", fim: "17:00", titulo: "Fórum da Aprendizagem (08 e 24) / Comissão de Famílias – 18h", categoria: "Reunião", obs: "Fórum também dia 24/07" },
  { id: 87, data: "2026-07-09", hora: "08:00", fim: "17:00", titulo: "Fórum SCFV – Cláudia", categoria: "Reunião", obs: "" },
  { id: 88, data: "2026-07-13", hora: "08:00", fim: "17:00", titulo: "Dia Nacional do ECA / Formação dos colaboradores - não haverá atendimento", categoria: "Planejamento", obs: "Sem atendimento aos educandos" },
  { id: 89, data: "2026-07-14", hora: "08:00", fim: "17:00", titulo: "Reunião da Coras", categoria: "Reunião", obs: "" },
  { id: 90, data: "2026-07-16", hora: "08:00", fim: "17:00", titulo: "Fórum Forte – Giovani", categoria: "Reunião", obs: "" },
  { id: 91, data: "2026-07-20", hora: "08:00", fim: "17:00", titulo: "Dia Internacional da Amizade", categoria: "Evento Escolar", obs: "" },
  { id: 92, data: "2026-07-24", hora: "08:00", fim: "17:00", titulo: "Fórum da Aprendizagem (FOGAP e FORMAP)", categoria: "Reunião", obs: "" },
  { id: 93, data: "2026-08-02", hora: "08:00", fim: "17:00", titulo: "Dia da Vocação Sacerdotal", categoria: "Evento Escolar", obs: "" },
  { id: 94, data: "2026-08-04", hora: "08:00", fim: "17:00", titulo: "Fórum de Entidades – Ir. Daniele e Teresinha", categoria: "Reunião", obs: "" },
  { id: 95, data: "2026-08-05", hora: "08:00", fim: "17:00", titulo: "Reunião Rede Intersecretarias – Cristiane e Camila (05 e 12)", categoria: "Reunião", obs: "Ocorre também dia 12/08" },
  { id: 96, data: "2026-08-09", hora: "08:00", fim: "17:00", titulo: "Dia dos Pais – Vocação Familiar", categoria: "Evento Escolar", obs: "" },
  { id: 97, data: "2026-08-10", hora: "08:00", fim: "17:00", titulo: "Formação dos colaboradores - não haverá atendimento", categoria: "Planejamento", obs: "Sem atendimento aos educandos" },
  { id: 98, data: "2026-08-12", hora: "08:00", fim: "17:00", titulo: "Fórum da Aprendizagem (12 e 21) / Reunião Rede Intersecretarias", categoria: "Reunião", obs: "Fórum também dia 21/08" },
  { id: 99, data: "2026-08-13", hora: "08:00", fim: "17:00", titulo: "Fórum SCFV – Cláudia", categoria: "Reunião", obs: "" },
  { id: 100, data: "2026-08-16", hora: "08:00", fim: "17:00", titulo: "Dia da Vocação à Vida Religiosa Consagrada - Assunção de Nossa Senhora", categoria: "Evento Escolar", obs: "" },
  { id: 101, data: "2026-08-17", hora: "08:00", fim: "17:00", titulo: "Semana Florescer (17 a 21)", categoria: "Evento Escolar", obs: "De 17 a 21 de agosto" },
  { id: 102, data: "2026-08-19", hora: "18:00", fim: "20:00", titulo: "Roda de Conversa – 18h", categoria: "Reunião", obs: "" },
  { id: 103, data: "2026-08-20", hora: "08:00", fim: "17:00", titulo: "Fórum Forte – Giovani", categoria: "Reunião", obs: "" },
  { id: 104, data: "2026-08-21", hora: "08:00", fim: "17:00", titulo: "Fórum da Aprendizagem (FOGAP e FORMAP)", categoria: "Reunião", obs: "" },
  { id: 105, data: "2026-08-22", hora: "08:00", fim: "17:00", titulo: "Dia dos Coordenadores Pedagógicos", categoria: "Evento Escolar", obs: "" },
  { id: 106, data: "2026-08-23", hora: "08:00", fim: "17:00", titulo: "Dia da Vocação dos cristãos leigos / Aniversário de 163 anos do Instituto Providência / Previsão Orçamentária", categoria: "Evento Escolar", obs: "" },
  { id: 107, data: "2026-08-24", hora: "08:00", fim: "17:00", titulo: "Comemoração interna aniversário do Instituto – bolo para o lanche", categoria: "Evento Escolar", obs: "" },
  { id: 108, data: "2026-08-25", hora: "08:00", fim: "17:00", titulo: "Reunião de Fluxo SCFV - Equipa Técnica / Dia do Motorista, trabalhador rural e do escritor", categoria: "Reunião", obs: "" },
  { id: 109, data: "2026-08-26", hora: "08:00", fim: "17:00", titulo: "Dia dos Avós e Bisavós / Dia da Rececionista", categoria: "Evento Escolar", obs: "" },
  { id: 110, data: "2026-08-27", hora: "08:00", fim: "17:00", titulo: "Dia da Psicologia", categoria: "Evento Escolar", obs: "" },
  { id: 111, data: "2026-08-28", hora: "08:00", fim: "17:00", titulo: "Reunião de Fluxo SCFV - Equipa Técnica", categoria: "Reunião", obs: "" },
  { id: 112, data: "2026-08-30", hora: "08:00", fim: "17:00", titulo: "Dia Mundial de Enfrentamento ao Tráfico de Pessoas", categoria: "Evento Escolar", obs: "Pensar rifa para sorteio em outubro" },
  { id: 113, data: "2026-08-31", hora: "08:00", fim: "17:00", titulo: "Dia da Vocação dos Catequistas / Dia da Nutricionista", categoria: "Evento Escolar", obs: "" },
  { id: 114, data: "2026-09-01", hora: "08:00", fim: "17:00", titulo: "Fórum de Entidades – Ir. Daniele e Teresinha", categoria: "Reunião", obs: "" },
  { id: 115, data: "2026-09-02", hora: "08:00", fim: "17:00", titulo: "Reunião Rede Intersecretarias – Cristiane e Débora (02 e 09)", categoria: "Reunião", obs: "Ocorre também dia 09/09" },
  { id: 116, data: "2026-09-07", hora: "08:00", fim: "17:00", titulo: "Independência do Brasil e Grito dos Excluídos – Feriado", categoria: "Feriado", obs: "" },
  { id: 117, data: "2026-09-08", hora: "08:00", fim: "17:00", titulo: "Natividade de Nossa Senhora / CORAS", categoria: "Evento Escolar", obs: "" },
  { id: 118, data: "2026-09-09", hora: "08:00", fim: "17:00", titulo: "Fórum da Aprendizagem (09 e 18) / Reunião Rede Intersecretarias", categoria: "Reunião", obs: "Fórum também dia 18/09" },
  { id: 119, data: "2026-09-10", hora: "08:00", fim: "17:00", titulo: "Dia Mundial de Prevenção do Suicídio - Setembro Amarelo / Fórum do SCFV – Cláudia", categoria: "Evento Escolar", obs: "" },
  { id: 120, data: "2026-09-14", hora: "08:00", fim: "17:00", titulo: "Formação dos Colaboradores – não haverá atendimento / Início organização Almoço Beneficente", categoria: "Planejamento", obs: "Sem atendimento aos educandos" },
  { id: 121, data: "2026-09-17", hora: "08:00", fim: "17:00", titulo: "Fórum Forte – Giovani", categoria: "Reunião", obs: "" },
  { id: 122, data: "2026-09-18", hora: "08:00", fim: "17:00", titulo: "Bárbara Maix – parte da Áustria para o Brasil / Fórum da Aprendizagem", categoria: "Evento Escolar", obs: "" },
  { id: 123, data: "2026-09-19", hora: "08:00", fim: "17:00", titulo: "Dia do Educador Social – dia do Perdão", categoria: "Evento Escolar", obs: "" },
  { id: 124, data: "2026-09-20", hora: "08:00", fim: "17:00", titulo: "Revolução Farroupilha – Feriado", categoria: "Feriado", obs: "" },
  { id: 125, data: "2026-09-21", hora: "08:00", fim: "17:00", titulo: "Dia Mundial da Cultura da Paz", categoria: "Evento Escolar", obs: "" },
  { id: 126, data: "2026-09-23", hora: "08:00", fim: "17:00", titulo: "Dia Internacional contra a Exploração Sexual e Tráfico de Crianças e Mulheres", categoria: "Evento Escolar", obs: "" },
  { id: 127, data: "2026-09-25", hora: "18:00", fim: "20:00", titulo: "Comissão de Famílias – 18h", categoria: "Reunião", obs: "" },
  { id: 128, data: "2026-09-29", hora: "08:00", fim: "17:00", titulo: "Reunião de Fluxo SCFV - Equipa Técnica", categoria: "Reunião", obs: "" },
  { id: 129, data: "2026-09-30", hora: "08:00", fim: "17:00", titulo: "Aniversariantes 3º trimestre / Dia da Bíblia", categoria: "Evento Escolar", obs: "Ver avaliação institucional das famílias e educandos" },
  { id: 130, data: "2026-10-02", hora: "08:00", fim: "17:00", titulo: "Santos Anjos da Guarda", categoria: "Evento Escolar", obs: "" },
  { id: 131, data: "2026-10-04", hora: "08:00", fim: "17:00", titulo: "São Francisco – Patrono da Ecologia", categoria: "Evento Escolar", obs: "" },
  { id: 132, data: "2026-10-06", hora: "08:00", fim: "17:00", titulo: "Fórum de Entidades – Ir. Daniele e Teresinha", categoria: "Reunião", obs: "" },
  { id: 133, data: "2026-10-07", hora: "08:00", fim: "17:00", titulo: "Reunião Rede Intersecretarias – Cristiane e Camila (07 e 14)", categoria: "Reunião", obs: "Ocorre também dia 14/10" },
  { id: 134, data: "2026-10-08", hora: "08:00", fim: "17:00", titulo: "Fórum SCFV – Cláudia", categoria: "Reunião", obs: "" },
  { id: 135, data: "2026-10-12", hora: "08:00", fim: "17:00", titulo: "Nossa Senhora Aparecida e Dia da Criança – Feriado", categoria: "Feriado", obs: "" },
  { id: 136, data: "2026-10-13", hora: "08:00", fim: "17:00", titulo: "Comemoração dia da Criança e Adolescente / Reunião da Coras", categoria: "Evento Escolar", obs: "" },
  { id: 137, data: "2026-10-14", hora: "08:00", fim: "17:00", titulo: "Fórum da Aprendizagem (14 e 23) / Reunião Rede Intersecretarias", categoria: "Reunião", obs: "Fórum também dia 23/10" },
  { id: 138, data: "2026-10-15", hora: "08:00", fim: "17:00", titulo: "Fórum Forte – Giovani / Dia do Auxiliar Administrativo", categoria: "Reunião", obs: "" },
  { id: 139, data: "2026-10-17", hora: "08:00", fim: "17:00", titulo: "Almoço beneficente IP", categoria: "Evento Escolar", obs: "" },
  { id: 140, data: "2026-10-19", hora: "08:00", fim: "17:00", titulo: "Formação dos Colaboradores – não haverá atendimento", categoria: "Planejamento", obs: "Sem atendimento aos educandos" },
  { id: 141, data: "2026-10-23", hora: "08:00", fim: "17:00", titulo: "Fórum da Aprendizagem (FOGAP e FORMAP) / Formação dos Colaboradores (avaliação equipa)", categoria: "Planejamento", obs: "Sem atendimento aos educandos" },
  { id: 142, data: "2026-10-24", hora: "08:00", fim: "17:00", titulo: "Reunião de Fluxo SCFV - Equipa Técnica", categoria: "Reunião", obs: "" },
  { id: 143, data: "2026-10-26", hora: "08:00", fim: "17:00", titulo: "Dia de Ação de Graças", categoria: "Evento Escolar", obs: "" },
  { id: 144, data: "2026-10-27", hora: "08:00", fim: "17:00", titulo: "Reunião de Fluxo SCFV - Equipa Técnica", categoria: "Reunião", obs: "" },
  { id: 145, data: "2026-10-29", hora: "08:00", fim: "17:00", titulo: "Finalização avaliação institucional com educandos e famílias", categoria: "Avaliação", obs: "" },
  { id: 146, data: "2026-11-01", hora: "08:00", fim: "17:00", titulo: "Dia de Todos os Santos", categoria: "Evento Escolar", obs: "" },
  { id: 147, data: "2026-11-02", hora: "08:00", fim: "17:00", titulo: "Finados – Feriado", categoria: "Feriado", obs: "" },
  { id: 148, data: "2026-11-03", hora: "08:00", fim: "17:00", titulo: "Supressão das Províncias / Fórum de Entidades – Teresinha / Início organização Sarau de Natal", categoria: "Evento Escolar", obs: "Capítulo Geral da Congregação (03 a 12)" },
  { id: 149, data: "2026-11-04", hora: "18:00", fim: "20:00", titulo: "Reunião Geral + Comissão de Famílias – 18h / Reunião Rede Intersecretarias (04 e 11)", categoria: "Reunião", obs: "" },
  { id: 150, data: "2026-11-06", hora: "08:00", fim: "17:00", titulo: "Celebração da memória Litúrgica da Bem-Aventurada Bárbara Maix", categoria: "Evento Escolar", obs: "Celebração interna" },
  { id: 151, data: "2026-11-09", hora: "08:00", fim: "17:00", titulo: "Bárbara Maix chega ao Brasil", categoria: "Evento Escolar", obs: "" },
  { id: 152, data: "2026-11-10", hora: "08:00", fim: "17:00", titulo: "Reunião da Coras / Conferência Municipal da Criança e Adolescente - PUCRS (10 e 11)", categoria: "Evento Escolar", obs: "Na PUCRS nos dias 10 e 11/11" },
  { id: 153, data: "2026-11-11", hora: "08:00", fim: "17:00", titulo: "Fórum da Aprendizagem (11 e 27) / Conferência Municipal na PUCRS", categoria: "Reunião", obs: "Fórum também dia 27/11" },
  { id: 154, data: "2026-11-12", hora: "08:00", fim: "17:00", titulo: "Fórum do SCFV – Cláudia", categoria: "Reunião", obs: "" },
  { id: 155, data: "2026-11-15", hora: "08:00", fim: "17:00", titulo: "Proclamação da República – Feriado", categoria: "Feriado", obs: "" },
  { id: 156, data: "2026-11-19", hora: "08:00", fim: "17:00", titulo: "Fórum Forte – Giovani", categoria: "Reunião", obs: "" },
  { id: 157, data: "2026-11-20", hora: "08:00", fim: "17:00", titulo: "Dia Nacional da Consciência Negra – FERIADO", categoria: "Feriado", obs: "" },
  { id: 158, data: "2026-11-27", hora: "08:00", fim: "17:00", titulo: "Fórum da Aprendizagem (FOGAP e FORMAP)", categoria: "Reunião", obs: "" },
  { id: 159, data: "2026-12-01", hora: "08:00", fim: "17:00", titulo: "Fórum de Entidades – Ir. Daniele e Teresinha", categoria: "Reunião", obs: "" },
  { id: 160, data: "2026-12-02", hora: "08:00", fim: "17:00", titulo: "Reunião Rede Intersecretarias – Cristiane e Camila (02 e 09)", categoria: "Reunião", obs: "Ocorre também dia 09/12" },
  { id: 161, data: "2026-12-04", hora: "08:00", fim: "17:00", titulo: "Sarau / Celebração de Natal com as Famílias", categoria: "Evento Escolar", obs: "" },
  { id: 162, data: "2026-12-07", hora: "08:00", fim: "17:00", titulo: "CTAP – dia todo (07, 08 e 09)", categoria: "Planejamento", obs: "Nos dias 07, 08 e 09 de dezembro" },
  { id: 163, data: "2026-12-08", hora: "08:00", fim: "17:00", titulo: "Imaculada Conceição / CTAP", categoria: "Evento Escolar", obs: "" },
  { id: 164, data: "2026-12-09", hora: "08:00", fim: "17:00", titulo: "Fórum da Aprendizagem (09 e 18) / Aniversários 4º trimestre / CTAP", categoria: "Evento Escolar", obs: "Fórum também dia 18/12" },
  { id: 165, data: "2026-12-10", hora: "08:00", fim: "17:00", titulo: "Fórum do SCFV – Cláudia", categoria: "Reunião", obs: "" },
  { id: 166, data: "2026-12-14", hora: "08:00", fim: "17:00", titulo: "Formação dos colaboradores (celebração de Natal e Plano Verão)", categoria: "Planejamento", obs: "" },
  { id: 167, data: "2026-12-15", hora: "08:00", fim: "17:00", titulo: "Reunião de Fluxo SCFV - Equipa Técnica", categoria: "Reunião", obs: "" },
  { id: 168, data: "2026-12-17", hora: "08:00", fim: "17:00", titulo: "Fórum Forte – Giovani", categoria: "Reunião", obs: "" },
  { id: 169, data: "2026-12-18", hora: "08:00", fim: "17:00", titulo: "Fórum da Aprendizagem (FOGAP e FORMAP)", categoria: "Reunião", obs: "" }
];

const CHAVES = {
  eventos: "agendaEducador.eventos",
  email: "agendaEducador.email",
  ident: "agendaEducador.identificado",
  tema: "agendaEducador.tema",
  alarme: "agendaEducador.alarme"
};

const CATEGORIAS = ["Avaliação", "Reunião", "Evento Escolar", "Planejamento", "Feriado/Recesso"];

const SLUGS = {
  "Avaliação": "avaliacao",
  "Reunião": "reuniao",
  "Evento Escolar": "evento",
  "Planejamento": "planejamento",
  "Feriado/Recesso": "feriado"
};

const MESES = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
const MESES_CURTOS = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
const DIAS = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
const DIAS_CURTOS = ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"];

const ICONES = {
  calendario: '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 2v3M16 2v3M3.5 9h17M5 4h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><path d="M12 13v5M9.5 15.5h5"/></svg>',
  check: '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>',
  download: '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m0 0-4-4m4 4 4-4M4 20h16"/></svg>',
  editar: '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20h4L19 9l-4-4L4 16v4zM13.5 6.5l4 4"/></svg>',
  lixeira: '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/></svg>',
  relogio: '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  desfazer: '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 14 4 9l5-5M4 9h10a6 6 0 0 1 0 12h-3"/></svg>'
};

const estado = {
  eventos: [],
  aba: "proximos",
  categoria: "Todas",
  busca: "",
  ocultarConcluidas: false,
  editandoId: null,
  email: "",
  alarme: 30
};

const $ = (seletor) => document.querySelector(seletor);

let temporizadorAviso = null;

function pad(n) {
  return String(n).padStart(2, "0");
}

function paraISO(d) {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

function hojeISO() {
  return paraISO(new Date());
}

function paraData(iso) {
  const [a, m, d] = iso.split("-").map(Number);
  return new Date(a, m - 1, d);
}

function somarDias(iso, n) {
  const d = paraData(iso);
  d.setDate(d.getDate() + n);
  return paraISO(d);
}

function escapar(texto) {
  const mapa = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  return String(texto == null ? "" : texto).replace(/[&<>"']/g, (c) => mapa[c]);
}

function normalizarTexto(texto) {
  return String(texto || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function dataValida(iso) {
  return /^\d{4}-\d{2}-\d{2}$/.test(iso || "");
}

function normalizarCategoria(valor) {
  const t = normalizarTexto(valor).trim();
  if (t.startsWith("feriado") || t.startsWith("recesso")) return "Feriado/Recesso";
  const achada = CATEGORIAS.find((c) => normalizarTexto(c) === t);
  return achada || "Evento Escolar";
}

function normalizarEvento(e, indice) {
  const obs = String(e.obs || "");
  return {
    id: Number(e.id) || indice + 1,
    data: String(e.data || ""),
    hora: e.hora || "",
    fim: e.fim || "",
    titulo: String(e.titulo || "").trim(),
    categoria: normalizarCategoria(e.categoria),
    obs: obs,
    concluido: Boolean(e.concluido),
    agendado: Boolean(e.agendado),
    repete: e.repete || (/recorrente semanalmente/i.test(obs) ? "semanal" : "")
  };
}

function garantirIds(lista) {
  const usados = new Set();
  let maior = lista.reduce((m, e) => Math.max(m, e.id), 0);
  return lista.map((e) => {
    if (usados.has(e.id)) {
      maior += 1;
      e.id = maior;
    }
    usados.add(e.id);
    return e;
  });
}

function proximoId() {
  return estado.eventos.reduce((m, e) => Math.max(m, e.id), 0) + 1;
}

function comparar(a, b) {
  return a.data.localeCompare(b.data) || (a.hora || "").localeCompare(b.hora || "") || a.id - b.id;
}

function lerArmazenado(chave, padrao) {
  try {
    const bruto = localStorage.getItem(chave);
    return bruto === null ? padrao : JSON.parse(bruto);
  } catch (erro) {
    return padrao;
  }
}

function gravar(chave, valor) {
  try {
    localStorage.setItem(chave, JSON.stringify(valor));
    return true;
  } catch (erro) {
    return false;
  }
}

function salvarEventos() {
  if (!gravar(CHAVES.eventos, estado.eventos)) {
    avisar("Não foi possível salvar neste navegador. Exporte um backup.");
  }
}

function carregarEventos() {
  const salvos = lerArmazenado(CHAVES.eventos, null);
  const base = Array.isArray(salvos) ? salvos : eventosIniciais;
  const lista = base.map(normalizarEvento).filter((e) => e.titulo && dataValida(e.data));
  estado.eventos = garantirIds(lista);
  if (!Array.isArray(salvos)) salvarEventos();
}

function avisar(mensagem) {
  const el = $("#aviso");
  el.textContent = mensagem;
  el.hidden = false;
  clearTimeout(temporizadorAviso);
  temporizadorAviso = setTimeout(() => {
    el.hidden = true;
  }, 3800);
}

function fimDoAno(iso) {
  return `${iso.slice(0, 4)}1231`;
}

function compacta(iso, hora) {
  return iso.replace(/-/g, "") + (hora ? "T" + hora.replace(":", "") + "00" : "");
}

function horarios(e) {
  if (!e.hora) return { diaInteiro: true };
  let fim = e.fim;
  if (!fim || fim <= e.hora) {
    const [h, m] = e.hora.split(":").map(Number);
    const total = Math.min(h * 60 + m + 60, 23 * 60 + 59);
    fim = `${pad(Math.floor(total / 60))}:${pad(total % 60)}`;
  }
  return { diaInteiro: false, inicio: e.hora, fim: fim };
}

function descricao(e) {
  const partes = [];
  if (e.obs) partes.push(e.obs);
  partes.push("Categoria: " + e.categoria);
  return partes.join("\n");
}

function gerarLinkGoogleAgenda(e) {
  const h = horarios(e);
  const datas = h.diaInteiro
    ? compacta(e.data) + "/" + compacta(somarDias(e.data, 1))
    : compacta(e.data, h.inicio) + "/" + compacta(e.data, h.fim);
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: e.titulo,
    dates: datas,
    details: descricao(e)
  });
  const fuso = Intl.DateTimeFormat().resolvedOptions().timeZone;
  if (fuso && !h.diaInteiro) params.set("ctz", fuso);
  if (e.repete === "semanal") params.set("recur", "RRULE:FREQ=WEEKLY;UNTIL=" + fimDoAno(e.data));
  if (estado.email) params.set("authuser", estado.email);
  return "https://calendar.google.com/calendar/render?" + params.toString();
}

function escaparICS(texto) {
  return String(texto)
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\r?\n/g, "\\n");
}

function dobrarLinha(linha) {
  const partes = [linha.slice(0, 35)];
  let i = 35;
  while (i < linha.length) {
    partes.push(" " + linha.slice(i, i + 34));
    i += 34;
  }
  return partes.join("\r\n");
}

function carimboUTC() {
  const d = new Date();
  return `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}${pad(d.getUTCSeconds())}Z`;
}

function gatilhoAlarme(minutos, diaInteiro) {
  if (diaInteiro) return "PT9H";
  if (minutos <= 0) return "PT0S";
  if (minutos % 1440 === 0) return `-P${minutos / 1440}D`;
  if (minutos % 60 === 0) return `-PT${minutos / 60}H`;
  return `-PT${minutos}M`;
}

function blocoEvento(e, minutos) {
  const h = horarios(e);
  const linhas = [
    "BEGIN:VEVENT",
    `UID:evento-${e.id}-${e.data}@agenda-educador`,
    "DTSTAMP:" + carimboUTC()
  ];
  if (h.diaInteiro) {
    linhas.push("DTSTART;VALUE=DATE:" + compacta(e.data));
    linhas.push("DTEND;VALUE=DATE:" + compacta(somarDias(e.data, 1)));
  } else {
    linhas.push("DTSTART:" + compacta(e.data, h.inicio));
    linhas.push("DTEND:" + compacta(e.data, h.fim));
  }
  if (e.repete === "semanal") {
    linhas.push("RRULE:FREQ=WEEKLY;UNTIL=" + fimDoAno(e.data) + (h.diaInteiro ? "" : "T235959"));
  }
  linhas.push("SUMMARY:" + escaparICS(e.titulo));
  linhas.push("DESCRIPTION:" + escaparICS(descricao(e)));
  linhas.push("CATEGORIES:" + escaparICS(e.categoria));
  linhas.push("STATUS:CONFIRMED");
  linhas.push("TRANSP:OPAQUE");
  linhas.push("BEGIN:VALARM");
  linhas.push("ACTION:DISPLAY");
  linhas.push("DESCRIPTION:" + escaparICS(e.titulo));
  linhas.push("TRIGGER:" + gatilhoAlarme(minutos, h.diaInteiro));
  linhas.push("END:VALARM");
  linhas.push("END:VEVENT");
  return linhas;
}

function montarICS(lista) {
  const linhas = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Agenda do Educador//PT-BR",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "X-WR-CALNAME:Agenda do Educador"
  ];
  lista.forEach((e) => {
    blocoEvento(e, estado.alarme).forEach((l) => linhas.push(l));
  });
  linhas.push("END:VCALENDAR");
  return linhas.map(dobrarLinha).join("\r\n") + "\r\n";
}

function baixarArquivo(nome, conteudo, tipo) {
  const blob = new Blob([conteudo], { type: tipo });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = nome;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 3000);
}

function baixarICS(lista, nome) {
  baixarArquivo(nome, montarICS(lista), "text/calendar;charset=utf-8");
}

function nomeSeguro(texto) {
  const base = normalizarTexto(texto).replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 40);
  return base || "evento";
}

function filtrados() {
  const termo = normalizarTexto(estado.busca).trim();
  return estado.eventos
    .filter((e) => {
      if (estado.categoria !== "Todas" && e.categoria !== estado.categoria) return false;
      if (estado.ocultarConcluidas && e.concluido) return false;
      if (termo) {
        const d = paraData(e.data);
        const alvo = normalizarTexto([e.titulo, e.obs, e.categoria, e.data, `${d.getDate()} ${MESES[d.getMonth()]}`].join(" "));
        if (!alvo.includes(termo)) return false;
      }
      return true;
    })
    .sort(comparar);
}

function agruparPor(lista, fn) {
  const mapa = new Map();
  lista.forEach((e) => {
    const chave = fn(e);
    if (!mapa.has(chave)) mapa.set(chave, []);
    mapa.get(chave).push(e);
  });
  return mapa;
}

function rotuloDia(iso, hoje) {
  const d = paraData(iso);
  const base = `${d.getDate()} de ${MESES[d.getMonth()].toLowerCase()}`;
  if (iso === hoje) return `Hoje · ${base}`;
  if (iso === somarDias(hoje, 1)) return `Amanhã · ${base}`;
  return `${DIAS[d.getDay()]} · ${base}`;
}

function cartao(e, hoje, ancora) {
  const d = paraData(e.data);
  const classes = ["cartao"];
  if (e.concluido) classes.push("concluido");
  if (e.data < hoje) classes.push("passado");
  if (e.data === hoje) classes.push("hoje");
  const horario = e.hora ? (e.fim ? `${e.hora} – ${e.fim}` : e.hora) : "Dia inteiro";
  const rotuloAgendar = `Agendar no Celular: ${e.titulo}`;
  return `
<article class="${classes.join(" ")}" data-id="${e.id}" data-cat="${SLUGS[e.categoria]}"${ancora ? ' id="ancora-hoje"' : ""}>
  <div class="data">
    <span class="dia">${pad(d.getDate())}</span>
    <span class="mes">${MESES_CURTOS[d.getMonth()]}</span>
    <span class="sem">${DIAS_CURTOS[d.getDay()]}</span>
  </div>
  <div class="corpo">
    <h3 class="titulo">${escapar(e.titulo)}</h3>
    <div class="meta">
      <span class="etiqueta">${escapar(e.categoria)}</span>
      <span class="horario">${ICONES.relogio}${escapar(horario)}</span>
      ${e.repete ? '<span class="selo">Semanal</span>' : ""}
      ${e.agendado ? `<span class="selo selo-ok">${ICONES.check}Agendado</span>` : ""}
    </div>
    ${e.obs ? `<p class="obs">${escapar(e.obs)}</p>` : ""}
    <div class="acoes">
      <button type="button" class="acao acao-concluir" data-acao="concluir">${e.concluido ? ICONES.desfazer + "Reabrir" : ICONES.check + "Concluir"}</button>
      <button type="button" class="acao" data-acao="ics" title="Exportar para Agenda (.ics)">${ICONES.download}.ics</button>
      <button type="button" class="acao" data-acao="editar">${ICONES.editar}Editar</button>
      <button type="button" class="acao acao-excluir" data-acao="excluir" aria-label="Excluir">${ICONES.lixeira}</button>
    </div>
  </div>
  <a class="btn-agendar" href="${escapar(gerarLinkGoogleAgenda(e))}" target="_blank" rel="noopener" data-acao="agendar" aria-label="${escapar(rotuloAgendar)}" title="Agendar no Celular">
    ${ICONES.calendario}
    <span>Agendar</span>
    <small>no celular</small>
  </a>
</article>`;
}

function blocoPorDia(lista, hoje) {
  let html = "";
  agruparPor(lista, (e) => e.data).forEach((itens, data) => {
    html += `<div class="grupo"><h3 class="grupo-titulo">${escapar(rotuloDia(data, hoje))}</h3>${itens.map((e) => cartao(e, hoje)).join("")}</div>`;
  });
  return html;
}

function htmlProximos(lista, hoje) {
  const limite = somarDias(hoje, 7);
  const deHoje = lista.filter((e) => e.data === hoje);
  const proximos = lista.filter((e) => e.data > hoje && e.data <= limite);
  let html = `<section class="secao"><h2 class="secao-titulo">Hoje</h2>${
    deHoje.length
      ? `<div class="cartoes">${deHoje.map((e) => cartao(e, hoje)).join("")}</div>`
      : '<p class="vazio-linha">Nada marcado para hoje.</p>'
  }</section>`;
  html += `<section class="secao"><h2 class="secao-titulo">Próximos 7 dias</h2>${
    proximos.length ? blocoPorDia(proximos, hoje) : '<p class="vazio-linha">Nenhum compromisso nos próximos 7 dias.</p>'
  }</section>`;
  if (!proximos.length) {
    const adiante = lista.filter((e) => e.data > limite && !e.concluido).slice(0, 6);
    if (adiante.length) {
      html += `<section class="secao"><h2 class="secao-titulo">Em seguida</h2>${blocoPorDia(adiante, hoje)}</section>`;
    }
  }
  return html;
}

function htmlCompleto(lista, hoje) {
  const primeiro = lista.find((e) => e.data >= hoje);
  let html = "";
  agruparPor(lista, (e) => e.data.slice(0, 7)).forEach((itens, chave) => {
    const [ano, mes] = chave.split("-");
    html += `<section class="secao"><h2 class="secao-titulo">${MESES[Number(mes) - 1]} ${ano}<span>${itens.length}</span></h2><div class="cartoes">${itens.map((e) => cartao(e, hoje, e === primeiro)).join("")}</div></section>`;
  });
  return html;
}

function renderChips() {
  const opcoes = ["Todas"].concat(CATEGORIAS);
  $("#chips").innerHTML = opcoes
    .map((c) => {
      const ativo = estado.categoria === c ? " ativo" : "";
      const cat = c === "Todas" ? "" : ` data-cat="${SLUGS[c]}"`;
      return `<button type="button" class="chip${ativo}"${cat} data-filtro="${escapar(c)}" aria-pressed="${estado.categoria === c}">${escapar(c)}</button>`;
    })
    .join("");
}

function renderResumo() {
  const total = estado.eventos.length;
  const concluidas = estado.eventos.filter((e) => e.concluido).length;
  const pct = total ? Math.round((concluidas / total) * 100) : 0;
  $("#resumoTexto").textContent = `${total - concluidas} pendentes · ${concluidas} concluídas`;
  $("#resumoPct").textContent = `${pct}%`;
  $("#barraPreenchida").style.width = `${pct}%`;
  $("#anelProgresso").style.strokeDashoffset = String(302 * (1 - pct / 100));
}

function renderConta() {
  $("#btnConta").textContent = estado.email || "Informar e-mail";
}

function observarAcaoRapida() {
  if (!("IntersectionObserver" in window)) return;
  const observador = new IntersectionObserver(([entrada]) => {
    $("#btnNovoRapido").classList.toggle("visivel", !entrada.isIntersecting);
  });
  observador.observe($("#btnNovo"));
}

function render() {
  const hoje = hojeISO();
  const lista = filtrados();
  renderChips();
  renderResumo();
  renderConta();
  $("#btnHoje").hidden = estado.aba !== "completo";
  if (!lista.length) {
    $("#lista").innerHTML = `<div class="vazio"><strong>Nenhuma data encontrada</strong>Ajuste a busca ou os filtros, ou toque em + para cadastrar um novo compromisso.</div>`;
    return;
  }
  $("#lista").innerHTML = estado.aba === "proximos" ? htmlProximos(lista, hoje) : htmlCompleto(lista, hoje);
}

function abrirCamada(el) {
  el.hidden = false;
  document.body.classList.add("sem-rolagem");
}

function fecharCamada(el) {
  el.hidden = true;
  if (!document.querySelector(".camada:not([hidden])")) {
    document.body.classList.remove("sem-rolagem");
  }
}

function abrirFormulario(id) {
  const e = id ? estado.eventos.find((x) => x.id === id) : null;
  estado.editandoId = e ? e.id : null;
  $("#tituloFolha").textContent = e ? "Editar data" : "Nova data";
  $("#campoTitulo").value = e ? e.titulo : "";
  $("#campoData").value = e ? e.data : hojeISO();
  $("#campoHora").value = e ? e.hora : "08:00";
  $("#campoFim").value = e ? e.fim : "09:00";
  $("#campoCategoria").value = e ? e.categoria : CATEGORIAS[2];
  $("#campoObs").value = e ? e.obs : "";
  $("#campoRepete").checked = e ? e.repete === "semanal" : false;
  abrirCamada($("#folhaEvento"));
  setTimeout(() => $("#campoTitulo").focus(), 60);
}

function salvarFormulario(ev) {
  ev.preventDefault();
  const dados = {
    titulo: $("#campoTitulo").value.trim(),
    data: $("#campoData").value,
    hora: $("#campoHora").value,
    fim: $("#campoFim").value,
    categoria: $("#campoCategoria").value,
    obs: $("#campoObs").value.trim(),
    repete: $("#campoRepete").checked ? "semanal" : ""
  };
  if (!dados.titulo) {
    avisar("Informe o título do evento.");
    $("#campoTitulo").focus();
    return;
  }
  if (!dataValida(dados.data)) {
    avisar("Informe uma data válida.");
    return;
  }
  if (dados.fim && !dados.hora) {
    avisar("Informe também o horário de início.");
    return;
  }
  if (dados.hora && dados.fim && dados.fim <= dados.hora) {
    avisar("O horário final deve ser depois do início.");
    return;
  }
  if (!dados.hora) dados.fim = "";
  if (estado.editandoId) {
    const e = estado.eventos.find((x) => x.id === estado.editandoId);
    if (e) {
      Object.assign(e, dados);
      e.agendado = false;
    }
  } else {
    estado.eventos.push({ id: proximoId(), concluido: false, agendado: false, ...dados });
  }
  salvarEventos();
  fecharCamada($("#folhaEvento"));
  render();
  const d = paraData(dados.data);
  avisar(`Data salva: ${d.getDate()} de ${MESES[d.getMonth()].toLowerCase()}.`);
}

function tratarCliqueLista(ev) {
  const alvo = ev.target.closest("[data-acao]");
  if (!alvo) return;
  const cartaoEl = alvo.closest(".cartao");
  if (!cartaoEl) return;
  const id = Number(cartaoEl.dataset.id);
  const e = estado.eventos.find((x) => x.id === id);
  if (!e) return;
  const acao = alvo.dataset.acao;
  if (acao === "agendar") {
    setTimeout(() => {
      e.agendado = true;
      salvarEventos();
      render();
    }, 600);
    avisar("Confirme o evento no Google Agenda para ativar as notificações.");
    return;
  }
  if (acao === "concluir") {
    e.concluido = !e.concluido;
    salvarEventos();
    render();
    avisar(e.concluido ? "Marcada como concluída." : "Data reaberta.");
    return;
  }
  if (acao === "ics") {
    baixarICS([e], `${nomeSeguro(e.titulo)}.ics`);
    avisar("Arquivo .ics gerado com lembrete.");
    return;
  }
  if (acao === "editar") {
    abrirFormulario(e.id);
    return;
  }
  if (acao === "excluir") {
    if (confirm(`Excluir "${e.titulo}"?`)) {
      estado.eventos = estado.eventos.filter((x) => x.id !== e.id);
      salvarEventos();
      render();
      avisar("Data excluída.");
    }
  }
}

function exportarTudo(somentePendentes) {
  const lista = estado.eventos
    .filter((e) => !somentePendentes || !e.concluido)
    .slice()
    .sort(comparar);
  if (!lista.length) {
    avisar("Não há datas para exportar.");
    return;
  }
  baixarICS(lista, somentePendentes ? "agenda-educador-pendentes.ics" : "agenda-educador-completa.ics");
  avisar(`${lista.length} datas exportadas. Abra o arquivo para importar no calendário.`);
}

function exportarBackup() {
  const pacote = {
    versao: 1,
    exportadoEm: new Date().toISOString(),
    email: estado.email,
    alarme: estado.alarme,
    eventos: estado.eventos
  };
  baixarArquivo(`agenda-educador-backup-${hojeISO()}.json`, JSON.stringify(pacote, null, 2), "application/json");
  avisar("Backup exportado.");
}

async function importarBackup(ev) {
  const arquivo = ev.target.files[0];
  ev.target.value = "";
  if (!arquivo) return;
  try {
    const dados = JSON.parse(await arquivo.text());
    const bruto = Array.isArray(dados) ? dados : dados.eventos;
    if (!Array.isArray(bruto)) throw new Error("formato");
    const lista = bruto.map(normalizarEvento).filter((e) => e.titulo && dataValida(e.data));
    if (!lista.length) throw new Error("vazio");
    if (!confirm(`Importar ${lista.length} datas e substituir os dados atuais?`)) return;
    estado.eventos = garantirIds(lista);
    if (!Array.isArray(dados) && typeof dados.alarme === "number") {
      estado.alarme = dados.alarme;
      gravar(CHAVES.alarme, estado.alarme);
      $("#campoAlarme").value = String(estado.alarme);
    }
    salvarEventos();
    fecharCamada($("#folhaMenu"));
    render();
    avisar("Backup importado com sucesso.");
  } catch (erro) {
    avisar("Arquivo inválido. Use um backup JSON gerado por este app.");
  }
}

function restaurarLista() {
  if (!confirm("Restaurar a lista inicial? Suas alterações e datas novas serão perdidas.")) return;
  estado.eventos = garantirIds(eventosIniciais.map(normalizarEvento));
  salvarEventos();
  fecharCamada($("#folhaMenu"));
  render();
  avisar("Lista inicial restaurada.");
}

function abrirAcesso(podeCancelar) {
  $("#campoEmail").value = estado.email;
  $("#erroEmail").hidden = true;
  $("#btnCancelarAcesso").hidden = !podeCancelar;
  abrirCamada($("#telaAcesso"));
  setTimeout(() => $("#campoEmail").focus(), 80);
}

function confirmarAcesso(ev) {
  ev.preventDefault();
  const valor = $("#campoEmail").value.trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor)) {
    $("#erroEmail").hidden = false;
    return;
  }
  estado.email = valor;
  gravar(CHAVES.email, valor);
  gravar(CHAVES.ident, true);
  fecharCamada($("#telaAcesso"));
  render();
  avisar("E-mail vinculado a este aparelho.");
}

function seguirSemEmail() {
  estado.email = "";
  gravar(CHAVES.email, "");
  gravar(CHAVES.ident, true);
  fecharCamada($("#telaAcesso"));
  render();
}

function aplicarTema(tema) {
  document.documentElement.setAttribute("data-theme", tema);
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", tema === "dark" ? "#151c18" : "#f5f3ec");
}

function alternarTema() {
  const novo = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  aplicarTema(novo);
  gravar(CHAVES.tema, novo);
}

function irParaHoje() {
  const alvo = $("#ancora-hoje");
  if (alvo) {
    alvo.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    avisar("Não há datas a partir de hoje neste filtro.");
  }
}

function mudarAba(aba) {
  estado.aba = aba;
  document.querySelectorAll(".aba").forEach((b) => {
    const ativa = b.dataset.aba === aba;
    b.classList.toggle("ativa", ativa);
    b.setAttribute("aria-selected", String(ativa));
  });
  render();
  window.scrollTo({ top: 0 });
}

function desenharIcone(tamanho) {
  const c = document.createElement("canvas");
  c.width = tamanho;
  c.height = tamanho;
  const x = c.getContext("2d");
  const g = x.createLinearGradient(0, 0, tamanho, tamanho);
  g.addColorStop(0, "#6366F1");
  g.addColorStop(1, "#8B5CF6");
  x.fillStyle = g;
  x.fillRect(0, 0, tamanho, tamanho);
  const u = tamanho / 100;
  x.fillStyle = "#FFFFFF";
  x.beginPath();
  x.roundRect ? x.roundRect(24 * u, 26 * u, 52 * u, 50 * u, 8 * u) : x.rect(24 * u, 26 * u, 52 * u, 50 * u);
  x.fill();
  x.fillStyle = "#4F46E5";
  x.fillRect(24 * u, 26 * u, 52 * u, 13 * u);
  x.fillStyle = "#FFFFFF";
  x.fillRect(34 * u, 20 * u, 6 * u, 12 * u);
  x.fillRect(60 * u, 20 * u, 6 * u, 12 * u);
  x.strokeStyle = "#10B981";
  x.lineWidth = 6 * u;
  x.lineCap = "round";
  x.lineJoin = "round";
  x.beginPath();
  x.moveTo(38 * u, 58 * u);
  x.lineTo(47 * u, 67 * u);
  x.lineTo(63 * u, 49 * u);
  x.stroke();
  return c.toDataURL("image/png");
}

function configurarPWA() {
  try {
    const icone180 = desenharIcone(180);
    const icone512 = desenharIcone(512);
    const apple = document.createElement("link");
    apple.rel = "apple-touch-icon";
    apple.href = icone180;
    document.head.appendChild(apple);
    const favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.type = "image/png";
    favicon.href = icone180;
    document.head.appendChild(favicon);
    const manifesto = {
      name: "Agenda do Educador",
      short_name: "Agenda",
      lang: "pt-BR",
      start_url: location.href.split("#")[0],
      display: "standalone",
      background_color: "#0F172A",
      theme_color: "#0F172A",
      icons: [{ src: icone512, sizes: "512x512", type: "image/png", purpose: "any" }]
    };
    const blob = new Blob([JSON.stringify(manifesto)], { type: "application/manifest+json" });
    const link = document.createElement("link");
    link.rel = "manifest";
    link.href = URL.createObjectURL(blob);
    document.head.appendChild(link);
  } catch (erro) {
    return;
  }
}

function vincularEventos() {
  $("#lista").addEventListener("click", tratarCliqueLista);

  $("#chips").addEventListener("click", (ev) => {
    const chip = ev.target.closest("[data-filtro]");
    if (!chip) return;
    estado.categoria = chip.dataset.filtro;
    render();
  });

  document.querySelectorAll(".aba").forEach((b) => {
    b.addEventListener("click", () => mudarAba(b.dataset.aba));
  });

  $("#busca").addEventListener("input", (ev) => {
    estado.busca = ev.target.value;
    render();
  });

  $("#ocultarConcluidas").addEventListener("change", (ev) => {
    estado.ocultarConcluidas = ev.target.checked;
    render();
  });

  $("#btnHoje").addEventListener("click", irParaHoje);
  document.querySelectorAll("#btnNovo, #btnNovoRapido").forEach((botao) => {
    botao.addEventListener("click", () => abrirFormulario(null));
  });
  $("#btnExportarTudo").addEventListener("click", () => exportarTudo(false));
  $("#btnTema").addEventListener("click", alternarTema);
  $("#btnMenu").addEventListener("click", () => abrirCamada($("#folhaMenu")));
  $("#btnConta").addEventListener("click", () => abrirAcesso(true));
  $("#formEvento").addEventListener("submit", salvarFormulario);
  $("#formAcesso").addEventListener("submit", confirmarAcesso);
  $("#btnSemEmail").addEventListener("click", seguirSemEmail);
  $("#btnCancelarAcesso").addEventListener("click", () => fecharCamada($("#telaAcesso")));
  $("#arquivoBackup").addEventListener("change", importarBackup);

  $("#campoAlarme").addEventListener("change", (ev) => {
    estado.alarme = Number(ev.target.value);
    gravar(CHAVES.alarme, estado.alarme);
    avisar("Lembrete atualizado para os próximos arquivos .ics.");
  });

  document.querySelectorAll(".camada").forEach((camada) => {
    camada.addEventListener("click", (ev) => {
      if (camada.id === "telaAcesso") return;
      if (ev.target === camada || ev.target.closest("[data-fechar]")) fecharCamada(camada);
    });
  });

  $("#folhaMenu").addEventListener("click", (ev) => {
    const item = ev.target.closest("[data-menu]");
    if (!item) return;
    const acao = item.dataset.menu;
    if (acao === "conta") {
      fecharCamada($("#folhaMenu"));
      abrirAcesso(true);
    } else if (acao === "ics-pendentes") {
      exportarTudo(true);
    } else if (acao === "backup") {
      exportarBackup();
    } else if (acao === "importar") {
      $("#arquivoBackup").click();
    } else if (acao === "restaurar") {
      restaurarLista();
    }
  });

  document.addEventListener("keydown", (ev) => {
    if (ev.key !== "Escape") return;
    const abertas = document.querySelectorAll(".camada:not([hidden])");
    const topo = abertas[abertas.length - 1];
    if (topo && topo.id !== "telaAcesso") fecharCamada(topo);
  });
}

function iniciar() {
  aplicarTema(lerArmazenado(CHAVES.tema, "light") === "light" ? "light" : "dark");
  estado.email = lerArmazenado(CHAVES.email, "") || "";
  const alarme = lerArmazenado(CHAVES.alarme, 30);
  estado.alarme = [0, 10, 30, 60, 1440].includes(Number(alarme)) ? Number(alarme) : 30;
  $("#campoAlarme").value = String(estado.alarme);
  $("#campoCategoria").innerHTML = CATEGORIAS.map((c) => `<option value="${escapar(c)}">${escapar(c)}</option>`).join("");
  carregarEventos();
  vincularEventos();
  configurarPWA();
  render();
  observarAcaoRapida();
  if (!lerArmazenado(CHAVES.ident, false)) abrirAcesso(false);
}

iniciar();