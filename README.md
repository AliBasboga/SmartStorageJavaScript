# 🗂️ StorageWrapper – Basit localStorage & sessionStorage Yöneticisi

Tarayıcıda veri saklamayı daha kolay, güvenli ve okunabilir hale getirmek için geliştirilmiş minimalist bir JavaScript yardımcı sınıfıdır. Özellikle `localStorage` kullanırken sık karşılaşılan tekrarları ortadan kaldırır.

---

## 🚀 Özellikler

- 📥 `set` – Veri ekle (otomatik JSON çevirimi)
- 🔍 `get` – Veri oku (otomatik parse işlemi)
- ❌ `remove` – Belirli veriyi sil
- 🧹 `clear` – Tüm localStorage'ı temizle
- ⏱️ `setWithExpiry` – Süresi dolunca otomatik silinen veri ekle
- 🕒 `getWithExpiry` – Süresi geçmiş verileri okuma ve silme

---

## 📦 Kurulum

### 1. `storage.js` dosyasını indir veya dahil et:

```html
<script src="storage.js"></script>
