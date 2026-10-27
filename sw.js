// 위밴드: 홈 화면 앱(주소창 없이)으로 설치되게 하는 최소 서비스워커 — 저장(캐시)은 안 함, 늘 최신
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',()=>{});
