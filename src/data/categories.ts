import type { SupportedLang } from './translations';

export const SCREEN_CATEGORY: Record<SupportedLang, string> = {
  tr: 'Ekran Süresi Kontrolü',
  en: 'Screen Time Control',
  es: 'Control de Tiempo en Pantalla',
  fr: "Contrôle du Temps d'Écran",
  de: 'Bildschirmzeit-Kontrolle',
  pt: 'Controle de Tempo de Tela',
  it: 'Controllo Tempo Schermo',
  ar: 'التحكم في وقت الشاشة',
  id: 'Kontrol Waktu Layar',
  fil: 'Kontrol sa Screen Time',
  th: 'การควบคุมเวลาหน้าจอ'
};

export function isScreenTimeCategory(category: string | undefined, lang?: SupportedLang): boolean {
  if (!category) return false;
  if (lang) {
    return category === SCREEN_CATEGORY[lang];
  }
  return Object.values(SCREEN_CATEGORY).includes(category);
}
