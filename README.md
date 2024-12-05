# Kullanıcının Girdiği Sayılardan En Büyük ve En Küçük Değeri Bulma

---

## Proje Amacı
Kullanıcıdan alınan bir dizi sayıdan en büyük ve en küçük değeri bulan bir program yazmak. Kullanıcı istediği kadar sayı girebilecek ve işlem kullanıcı durdurma komutu verdiğinde sonlanacak.

---

## Kullanılacak Değişkenler ve Anahtar Kelimeler

### Değişkenler:
- **`sayiListesi`**: Kullanıcının girdiği sayıları saklayacak bir dizi.
- **`enBuyuk`**: Dizideki en büyük değeri tutacak değişken.
- **`enKucuk`**: Dizideki en küçük değeri tutacak değişken.
- **`girdi`**: Kullanıcıdan alınan her giriş.

### Anahtar Kelimeler:
- **`function`**: İşlemleri bir fonksiyon içinde düzenlemek için.
- **`let`**: Değişkenleri tanımlamak için.
- **`const`**: Sabit değişkenleri tanımlamak için.
- **`while`**: Kullanıcı durdurma komutu verene kadar döngüyü çalıştırmak.
- **`break`**: Döngüyü durdurmak için.
- **`push()`**: Dizilere eleman eklemek için.
- **`Math.max()`**: Dizi içerisindeki en büyük değeri bulmak.
- **`Math.min()`**: Dizi içerisindeki en küçük değeri bulmak.
- **`isNaN()`**: Girilen değerin geçerli bir sayı olup olmadığını kontrol etmek.

---

## İzlenecek Adımlar

1. **Fonksiyon Tanımlama:**
   - Kullanıcının girdiği sayıları işlemek ve en büyük ile en küçük değeri bulmak için bir fonksiyon oluşturun.

2. **Boş Bir Dizi Oluşturma:**
   - Kullanıcıdan alınan sayıları saklamak için boş bir dizi tanımlayın.

3. **Kullanıcı Girişi Döngüsü:**
   - Kullanıcıdan sürekli sayı alacak bir döngü kurun. 
   - Kullanıcı `q` yazdığında döngüden çıkılmalı.

4. **Geçersiz Girdiler İçin Kontrol:**
   - Kullanıcının girdiği değerin geçerli bir sayı olup olmadığını kontrol edin. Geçersizse uyarı verin.

5. **Girilen Sayıları Diziye Ekleme:**
   - Geçerli olan tüm sayılar **`sayiListesi`** dizisine eklenmeli.

6. **En Büyük ve En Küçük Değeri Bulma:**
   - Döngü sona erdikten sonra **`Math.max()`** ve **`Math.min()`** kullanarak dizinin en büyük ve en küçük değerlerini bulun.

7. **Sonucu Gösterme:**
   - Kullanıcıya, dizideki en büyük ve en küçük sayıyı ekrana yazdırın.

---

## Örnek Beklenen Çıktı

1. Kullanıcı şu sayıları girer: `10, 25, 5, 8, 30`.
2. Program sonuç olarak şu çıktıyı verir:
