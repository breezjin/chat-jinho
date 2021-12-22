## About PRJ (chat-jinho)

This is simple chat app for vanilla coding 11th mid term exam by Yoon Jinho (윤진호). This project was made with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/). There's no route for one single page.

**Netlify**
- [https://chat-jinho.netlify.app/](https://chat-jinho.netlify.app/)

**Libraries & API**
- react-icons
- dayjs
- react-lines-ellipsis
- [random users API](https://randomuser.me/)

---
## Components

**App**
- SideBar
  - Header
  - Friends
    - FriendCard
  - ChatList
    - ChatCard
- Chatting

**atoms & molecules**
- Button
- ChatBubbleReceive
- ChatBubbleSend
- SearchBar
- MsgBar

---
## TODOS
기본 요구사항을 모두 완료했습니다.
- [x] 친구 목록 페이지, 채팅 목록 페이지, 채팅 페이지가 있습니다.
- [x] 친구 목록 페이지에는 채팅 목록으로 이동할 수 있는 버튼이 있어야 합니다.
- [x] 친구 목록 페이지에는 친구 이름, 사진과 함께 채팅을 시작할 수 있는 버튼이 있어야 합니다.
- [x] 친구 목록 페이지에 있는 “대화하기” 버튼을 이용해 해당 친구와의 채팅 페이지로 바로 이동할 수 있습니다.
- [x] 친구 목록은 이름을 기준으로 오름차순 또는 내림차순 정렬할 수 있는 기능이 있어야 합니다.
- [x] 친구 목록에 있는 검색창을 이용해 친구 이름을 기준으로 검색할 수 있는 기능이 있어야 합니다.
- [x] 채팅 목록에는 진행 중인 채팅이 날짜 순으로 나열되어야 합니다. (최신날짜가 상위)
- [x] 채팅 목록 페이지에는 친구 목록으로 이동할 수 있는 버튼이 있어야 합니다.
- [x] 채팅 목록에는 진행 중인 채팅의 친구 이름, 가장 최신 메시지의 첫 30글자, 가장 최신 메시지 전송 날짜가 표기되어야 합니다.
- [x] 채팅 목록에서 채팅을 선택하면 채팅 페이지로 이동합니다.
- [x] 채팅 페이지에는 상대방과 나눈 대화가 시간 순으로 나열되어야 합니다. 상대방 이름, 메시지 내용, 전송 날짜 및 시간이 모두 표기되어야 합니다.
- [x] 채팅 페이지는 별도 URL이 없습니다.
- [x] 채팅 페이지에서 메시지를 전송할 경우, 현재 채팅 페이지와 채팅 목록 페이지에 새로운 메시지가 반영되어야 합니다. (서버가 없으므로 전송된 메시지를 화면에 표기하는 것은 가능하지만, 메시지 수신은 불가능합니다.)
- [x] 페이지 새로고침에 대한 대응은 하지 않아도 괜찮습니다.
- [x] 초기 어플리케이션 상태에서 나타나는 친구 및 채팅 데이터는 직접 JSON 파일 형식으로 만들어 사용하세요.

추가 구현사항
- [x] App에 최초 진입 시 환영 메시지를 볼 수 있습니다. 다른 사람과 채팅이 시작되면 자동으로 사라집니다.
- [x] 친구 목록과 채팅 목록에서 현재 내가 누구와 대화하고 있는지 인지할 수 있습니다.
- [x] 채팅페이지에서 친구와 대화를 시작할때 기존에 대화한 내역이 없으면 안내 메시지가 노출됩니다.

---
## Extra TODOS
시험 제출 후 추가로 시도해보려는 부분 입니다.
- [ ] Test Code 작성
- [ ] 이미지나 파일 전송기능 추가
- [ ] Dummy User API 연동해서 Sample 자동 생성
- [ ] Store Design 고도화 (Single source of truth...)
