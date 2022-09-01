<br>

# TerrGYM Project - IntelliGYM

> 📌 KH 정보교육원 세미 프로젝트 <br>
> 조  장 : 백종국
> 팀  원 : 김지연 신현아 이여진
> 기  간 : 2022.07.19 ~ 2022.08.26

<br>

## 1. 프로젝트 소개 - IntelliGYM(인텔리짐)

- 체육관 관리에 필요한 회원 전용 웹페이지 구현
- 회원제로 운영되는 체육관 관리 시스템 구현
- Intelligent + GYM, 당신이 찾던 똑똑한 운동 공간 <br>
: 고객을 만족시킬 수 있고, 고객이 필요로 하는 최적화된 운동 서비스를 제공하는 피트니스센터 웹페이지를 기획함


<br>

## 2. 주요 기능 설명

| 구현 기능                               | 상세 기능 |
| ---------------------------------------| --------- |
| 로그인&회원가입 | * 가입 시 Firebase의 Authentication과 Firestore DB에 회원정보를 저장<br> * 로그인 상태 유지 기능 및 회원만 마이페이지에 접근 가능 |
| 메인 페이지 | * 부트스트랩 기반 반응형 UI 제작<br> * KakaoMap API 기반 지도 추가<br> * NavBar의 카테고리 주요 내용을 메인페이지에 컴팩트하게 담음 |
| About 페이지 | * 사이드바 메뉴명 클릭 시 해당 좌표로 이동하는 스크롤스파이 기능 <br> * 센터정보 소개 셀렉트박스 이벤트 |
| 운동일지 <br> (마이페이지-1) | * 오늘의 운동량과 신체변화 기록, 조회가 가능한 대시보드 형태로 구성 <br> * Chart.js 등 총 3개의 차트와 최근 일주일의 기록을 볼 수 있는 테이블이 존재 <br> * 기록된 테이블에서 입력, 수정, 상세보기 기능 <br> * 현재까지 기록한 전체 내용을 불러오는 전체기록 페이지 조회 가능, 이외에 입력, 삭제 기능 |
| 문의게시판 <br> (마이페이지-2) | * 사용자 문의글 등록 및 입력 기능 - 최신글이 상단에 오도록 자동순번 매김, 제목-유형-내용 미입력 시 등록할 수 없도록 설정 <br> * 게시글 조회 및 상세조회 - 페이징처리로 한페이지에 게시글 4개씩, 총 페이지수는 3개씩으로 처리, 제목 클릭시 작성한 내용 확인 가능 <br> * 게시글 삭제 - 상세조회 페이지에서 삭제 버튼 클릭 시 해당글 삭제 후 리스트로 이동 |
| 수강신청 <br> (마이페이지-3) | * DB에 저장된 수강신청 목록 전체 조회 및 실시간 수강신청 인원 확인 <br> * 신청한 수강 내역을 확인하고 취소할 수 있는 기능 |
| 회원정보 <br> (마이페이지-4) | * 로그인한 회원의 정보 상세 조회 및 수정, 회원 탈퇴 기능 |


<br>

## 3. Wire Frame
<br>
<img width="80%" src="https://user-images.githubusercontent.com/99080986/187970608-f4cb90c4-34a6-4117-851e-c88fc6a46f7a.png"/>
<br>
<img width="80%" src="https://user-images.githubusercontent.com/99080986/187969617-f9ee8bcb-585b-438e-9405-025b9e21c68a.png"/>
<br>
<img width="80%" src="https://user-images.githubusercontent.com/99080986/187969638-8b47ff38-e248-4c4a-b35c-3e223107516a.png"/>
<br>
<img width="80%" src="https://user-images.githubusercontent.com/99080986/187969651-3b61b44e-6101-4182-b48a-38688de51b8c.png"/>

<br>

## 4. 팀원 이름 및 역할
◼ 백종국(조장) <br>
- 서버 사이드 담당
- 로그인, 회원가입 UI 및 기능 구현
- 마이페이지 UI 및 기능 구현 
- 운동일지, 회원정보 담당
- Git 관리 및 코드리뷰 담당
- PPT 발표 및 영상제작

◼ 김지연 <br>
- 마이페이지 설계 담당
- 마이페이지 UI 및 기능 구현 
- 문의게시판, 회원정보 담당
- 요구사항 정의서 담당

◼ 신현아 <br>
- 메인페이지 UI 및 기능 구현
- 마이페이지 회원정보 UI 제작
- 화면정의서 담당
- 회의 보고서 및 노션 총괄

◼ 이여진 <br>
- 회사소개 페이지, 사이드바 UI 제작
- 마이페이지 UI 및 기능 구현
- 수강신청 담당
- PPT 제작 및 공정표 담당

<br>

## 5. 사용 기술 및 개발 환경
- 사용기술 : HTML5 / CSS3 / JavaScript / jQuery
- 데이터베이스 & 서버 : Firebase v9 / Node.js-Express
- 개발환경 : Visual Studio Code
- 협업툴 : GitHub, Notion, Slack, Discord
- 오픈 소스 : BootStrap, Kakao Map API, Chart.js
