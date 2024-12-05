function enBuyukVeEnKucukBul() {
  let sayiListesi = [];
  let enBuyuk, enKucuk;

  while (true) {
    let girdi = prompt("Bir sayı girin (veya işlemi bitirmek için 'q' yazın):");

    if (girdi.toLowerCase() === "q") {
      break; // Döngüyü sonlandır
    }

    let sayi = parseFloat(girdi);

    if (isNaN(sayi)) {
      alert("Lütfen geçerli bir sayı girin!");
      continue; // Geçersiz girişte döngünün başına dön
    }

    sayiListesi.push(sayi);
  }

  if (sayiListesi.length === 0) {
    console.log("Hiçbir sayı girmediniz!");
    return;
  }

  enBuyuk = Math.max(...sayiListesi);
  enKucuk = Math.min(...sayiListesi);

  console.log(`Girilen sayi listesi: ${sayiListesi}`);
  console.log(`Girilen en büyük sayı: ${enBuyuk}`);
  console.log(`Girilen en küçük sayı: ${enKucuk}`);
}

// Fonksiyonu çalıştır
enBuyukVeEnKucukBul();
