# 🌐 Nextron Chat

## [실행방법](https://github.com/saltyshiomix/nextron/tree/main/examples/with-typescript-material-ui)

### Install Dependencies

```
# using yarn or npm
$ yarn (or `npm install`)
```

### Use it

```
# development mode
$ yarn dev (or `npm run dev` or `pnpm run dev`)

# production build
$ yarn build (or `npm run build`)
```

&nbsp;

## 구현 기능

### 회원가입, 로그인

- Firebase Auth 를 이용해 이메일 / 비밀번호로 회원가입 / 로그인
- Firebase 에러 코드에 따라 유효성 검사 메세지 출력

### 유저목록

- Firebase Admin 를 이용해 모든 유저 출력
- 로그인한 유저와의 1:1 채팅 존재여부에 따라 유저별로 채팅방 이동 / 채팅방 생성 버튼 출력

### 채팅기능 (1:1 채팅, 그룹채팅)

- 로그인한 유저가 속한 모든 채팅방 목록 출력
- 채팅방별 채팅 메세지 확인, 채팅 메세지 전송
- 유저목록 팝업에서 유저를 선택해 그룹채팅방 생성

### &nbsp;

## Firebase Data 구조

- 채팅방

![그림2](https://user-images.githubusercontent.com/66893123/147622274-266397e2-6917-4461-bf4e-6bf77b992623.png)

- 메세지

![그림1-copy](https://user-images.githubusercontent.com/66893123/147622462-027ee90c-92a8-4e4e-9967-5a721b6727dc.png)

### &nbsp;

## 적용기술

Nextron.js, React, Typescript, Firebase, Material-ui

### &nbsp;

## 참고

- https://github.com/bjcarlson42/nextjs-with-firebase
- https://github.com/Chensokheng/next-firebase-boilerplate
- https://github.com/fireship-io/react-firebase-chat
- https://levelup.gitconnected.com/structure-firestore-firebase-for-scalable-chat-app-939c7a6cd0f5
