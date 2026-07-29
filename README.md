# Next Auth

Next.js tabanlı örnek kimlik doğrulama uygulaması — NextAuth ve Auth0 entegrasyonunu içeren, Next.js App Router ile hazırlanmış küçük bir demo/proje. Geliştiricilerin Next.js üzerinde hızlıca kimlik doğrulama deneyini kurup inceleyebilmeleri için tasarlanmıştır.

## Öne çıkan özellikler

- Next.js (App Router) ile hazırlanmış frontend
- next-auth ve @auth0/nextjs-auth0 destekleri (örnek sağlayıcı konfigürasyonları)
- Tailwind CSS ile hazır stil alt yapısı
- Vercel uyumluluğu (kolay dağıtım)

## Teknoloji yığını

- Language: TypeScript (ana), JavaScript
- Framework / Runtime: Next.js (App Router)
- Notable libraries: next-auth, @auth0/nextjs-auth0, Tailwind CSS, lucide-react

## Proje yapısı (önemli dizinler)

```
auth-app/              # Next.js uygulaması (kaynak kodlar burada)
  ├─ src/app/          # App Router sayfaları ve bileşenleri
  │   ├─ page.tsx      # Ana sayfa
  │   ├─ layout.tsx    # Global layout
  │   └─ login/        # Giriş sayfası (örnek)
  ├─ package.json      # Bağımlılıklar ve scriptler
  └─ README.md         # auth-app için yerel notlar
README.md              # (Bu dosya) Proje genel açıklaması
```

Nasıl birbirine bağlılar: auth-app içindeki Next.js uygulaması sunucu tarafı (Next) tarafından çalıştırılır; kimlik doğrulama mantığı next-auth veya Auth0 paketleri aracılığıyla sayfa yönlendirmeleri ve API route'lar üzerinden yürütülür.

## Hızlı başlangıç (lokalde çalıştırma)

1. Depoyu klonlayın:

```bash
git clone https://github.com/yasindabak/next-auth.git
cd next-auth/auth-app
```

2. Bağımlılıkları yükleyin:

```bash
npm install
# veya
# pnpm install
# veya
# yarn
```

3. Gerekli ortam değişkenlerini ayarlayın (örnek):

- NEXTAUTH_URL — uygulamanın çalıştığı URL (ör. http://localhost:3000)
- NEXTAUTH_SECRET — NextAuth için rastgele bir gizli değer

Eğer Auth0 kullanacaksanız tipik olarak eklemeniz gerekenler:

- AUTH0_ISSUER_BASE_URL veya AUTH0_DOMAIN
- AUTH0_CLIENT_ID
- AUTH0_CLIENT_SECRET

Bu projede birden fazla sağlayıcı örneklenmiş olabilir; kullandığınız sağlayıcıya göre environment değişkenlerini sağlayın.

4. Geliştirme sunucusunu başlatın:

```bash
npm run dev
# veya
# yarn dev
# veya
# pnpm dev
```

Tarayıcıyı açın: http://localhost:3000

## Üretime hazırlama ve deploy

- Build için:

```bash
npm run build
npm start
```

- Vercel'e deploy için repository'yi bağlayın. Vercel, Next.js App Router projelerini otomatik algılar; proje ayarlarına environment değişkenlerini eklemeyi unutmayın.

## Konfigürasyon notları

- next-auth ve @auth0/nextjs-auth0 paketleri farklı kullanım modelleri sunar; projenin içinde örnek konfigürasyonlar ve middleware bulunabilir (ör. `middleware.ts`). Uygun sağlayıcı dökümantasyonuna bakarak environment değişkenlerini ve callback'leri ayarlayın.
- TypeScript yapılandırması auth-app/tsconfig.json içinde yer alır.

## Hata ayıklama ve sık karşılaşılan sorunlar

- "Callback URL mismatch" veya benzeri sağlayıcı hatalarında, OAuth sağlayıcınızın paneline eklediğiniz callback/redirect URL'nin NEXTAUTH_URL ile eşleştiğinden emin olun.
- NEXTAUTH_SECRET eksikse oturum güvenliği sorunları yaşanır — güçlü bir rastgele dize kullanın.

