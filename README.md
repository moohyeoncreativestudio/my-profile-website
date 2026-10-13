# my-profile-website

영상 디렉터 정무현(Moohyeon Jung)의 개인 프로필 웹사이트입니다.
Google Stitch 디자인을 바탕으로 HTML, CSS, JavaScript만으로 만들었습니다.

## 로컬에서 실행

Node.js 18 이상이 필요합니다. 외부 패키지는 사용하지 않습니다.

```bash
npm start      # http://localhost:3000
```

## 폴더 구조

```
public/          배포되는 웹사이트 (index.html, css, js, images)
server.js        로컬 실행용 정적 파일 서버
vercel.json      Vercel 배포 설정 (public 폴더만 배포)
stitch_export/   원본 Stitch 디자인 자료
```

## 배포

Vercel에서 이 저장소를 Import하면 `public/` 폴더가 정적 사이트로 배포됩니다.
