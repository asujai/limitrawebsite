import fs from 'fs';
import path from 'path';

const srcDir = './icon görsel';
const destDir = './public/uygulama-goruntuleri';
const jsonPath = './src/data/uygulama-goruntuleri.json';

try {
  // Hedef klasörleri oluştur
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  const dataDir = path.dirname(jsonPath);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  if (!fs.existsSync(srcDir)) {
    console.warn(`[Copy Images] Kaynak klasör bulunamadı: ${srcDir}`);
    fs.writeFileSync(jsonPath, JSON.stringify([], null, 2));
    process.exit(0);
  }

  // Hedef klasörü temizle (eski resimlerin silinmesi için)
  if (fs.existsSync(destDir)) {
    const destFiles = fs.readdirSync(destDir);
    for (const destFile of destFiles) {
      fs.unlinkSync(path.join(destDir, destFile));
    }
  }

  // Dosyaları oku ve resim olanları filtrele
  let files = fs.readdirSync(srcDir);
  const imageExtensions = ['.png', '.jpg', '.jpeg', '.webp', '.svg'];
  
  files = files.filter(file => imageExtensions.includes(path.extname(file).toLowerCase()));

  // Dosya adındaki sayılara göre sırala (örn. 1.png, 2.png...)
  files.sort((a, b) => {
    const aNum = parseInt(a.match(/\d+/)?.[0] || '0', 10);
    const bNum = parseInt(b.match(/\d+/)?.[0] || '0', 10);
    return aNum - bNum;
  });

  const copiedImages = [];

  for (const file of files) {
    const srcPath = path.join(srcDir, file);
    const destPath = path.join(destDir, file);
    
    fs.copyFileSync(srcPath, destPath);
    console.log(`[Copy Images] Kopyalandı ve Sıralandı: ${file}`);
    copiedImages.push(`/uygulama-goruntuleri/${file}`);
  }

  // JSON dosyasına yaz
  fs.writeFileSync(jsonPath, JSON.stringify(copiedImages, null, 2));
  console.log(`[Copy Images] JSON verisi güncellendi: ${copiedImages.length} görsel bulundu.`);
} catch (error) {
  console.error('[Copy Images] Hata oluştu:', error);
  process.exit(1);
}
