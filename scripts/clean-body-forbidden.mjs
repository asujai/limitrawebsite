import fs from 'node:fs';

// Clean EN
{
  const fp = 'src/data/news-en.json';
  let text = fs.readFileSync(fp, 'utf8');
  const enReplacements = [
    ['to an uncompromising, external commitment device', 'to a firm, external commitment device'],
    ['The First True Solution: Uncompromising, Non-Bypassable Locks.', 'The First True Solution: Strict, Non-Bypassable Locks.'],
    ['The Third Critical Dimension: 100% Offline Privacy.', 'The Third Critical Dimension: Fully Offline Privacy.'],
    ["Declare the Bedroom an Uncompromising 'Analog Sanctuary.'", "Declare the Bedroom an 'Analog Sanctuary.'"],
    ['establishing an unprecedented legal shield against', 'establishing an unprecedented legal framework against'],
    ['aimed at shielding adolescents from', 'aimed at protecting adolescents from'],
    ['shielding young minds from addictive algorithms', 'protecting young minds from addictive algorithms'],
    ['to shield children from addictive online designs', 'to protect children from addictive online designs'],
    ['designed to shield children from algorithmic exploitation', 'designed to protect children from algorithmic exploitation'],
    ['and shielding young minds from manipulative', 'and protecting young minds from manipulative'],
    ['establishing uncompromising classroom boundaries', 'establishing strict classroom boundaries']
  ];
  for (const [from, to] of enReplacements) {
    if (text.includes(from)) {
      text = text.replaceAll(from, to);
    } else {
      console.log('EN not found:', from);
    }
  }
  fs.writeFileSync(fp, text, 'utf8');
}

// Clean other languages for promotional / buzzword instances
const otherReplacements = {
  'es': [
    ['a un dispositivo de compromiso externo intransigente', 'a un dispositivo de compromiso externo firme'],
    ['un escudo legal sin precedentes', 'un marco legal sin precedentes'],
    ['a merced de los algoritmos', 'bajo la influencia de los algoritmos'],
    ['100% sin conexión', 'completamente sin conexión'],
    ['inquebrantable', 'firme'],
    ['infranqueable', 'estricto']
  ],
  'fr': [
    ['à un dispositif d\'engagement externe intransigeant', 'à un dispositif d\'engagement externe ferme'],
    ['inviolable', 'strict'],
    ['infranchissable', 'strict'],
    ['intransigeant', 'ferme'],
    ['bouclier légal', 'cadre légal'],
    ['un bouclier sans précédent', 'un cadre sans précédent']
  ],
  'de': [
    ['einem kompromisslosen, externen Bindungsmechanismus', 'einem verlässlichen, externen Bindungsmechanismus'],
    ['kompromisslos', 'konsequent'],
    ['Kompromisslos', 'Konsequent'],
    ['unüberwindbar', 'strikt']
  ],
  'pt': [
    ['100% offline', 'totalmente offline'],
    ['100% local', 'totalmente local'],
    ['escudo legal sem precedentes', 'marco legal sem precedentes']
  ],
  'it': [
    ['alla mercé di', 'all\'influenza di'],
    ['alla balia di', 'all\'influenza di'],
    ['in balia di', 'all\'influenza di'],
    ['100% offline', 'totalmente offline']
  ]
};

for (const [lang, reps] of Object.entries(otherReplacements)) {
  const fp = `src/data/news-${lang}.json`;
  let text = fs.readFileSync(fp, 'utf8');
  for (const [from, to] of reps) {
    if (text.includes(from)) {
      text = text.replaceAll(from, to);
    }
  }
  fs.writeFileSync(fp, text, 'utf8');
}

console.log('Cleanup completed successfully.');
