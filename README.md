<br/>

# Terr-GYM Project - IntelliGYM

> 📌 KH 정보교육원 세미 프로젝트 <br>
> 📌 조  장 : 백종국 <br>
> 📌 팀  원 : 김지연 신현아 이여진 <br>
> 📌 기  간 : 2022.07.19 ~ 2022.08.26

<br/>

## 1️. 프로젝트 소개 - IntelliGYM(인텔리짐)

- 체육관 관리에 필요한 회원 전용 웹페이지 구현
- 회원제로 운영되는 체육관 관리 시스템 구현
- Intelligent + GYM, 당신이 찾던 똑똑한 운동 공간 <br>
: 고객을 만족시킬 수 있고, 고객이 필요로 하는 최적화된 운동 서비스를 제공하는 피트니스센터 웹페이지를 기획함


<br/>

## 2️. UseCase Diagram
<img width="80%" src="https://res.cloudinary.com/drxxdsv01/image/upload/v1669560044/Intell_Usecase_%EC%B5%9C%EC%A2%85_tlxxpv.jpg">

<br/>

## 3. Firebase - Firestore DB 설계
<img width="80%" src="https://res.cloudinary.com/drxxdsv01/image/upload/v1670563438/FirestoreDB1_egdcti.jpg"/>
<img width="80%" src="https://res.cloudinary.com/drxxdsv01/image/upload/v1670563438/FirestoreDB2_x73egk.jpg"/>

<br/>

## 4. UI 화면
<br/>
<img width="60%" src="https://user-images.githubusercontent.com/99080986/187970608-f4cb90c4-34a6-4117-851e-c88fc6a46f7a.png"/>
<br/>
<img width="60%" src="https://user-images.githubusercontent.com/99080986/187971153-277f6e5c-3cd5-45b2-9b58-3c1e82925fb8.png"/>
<br/>
<img width="60%" src="https://user-images.githubusercontent.com/99080986/187969638-8b47ff38-e248-4c4a-b35c-3e223107516a.png"/>


<br/>

## 5. 주요 기능 설명

| 구현 기능                               | 상세 기능 |
| ---------------------------------------| --------- |
| **로그인&회원가입** | * 가입 시 Firebase의 Authentication과 Firestore DB에 회원정보를 저장<br> * 로그인 상태 유지 기능 및 회원만 마이페이지에 접근 가능 |
| **메인 페이지** | * 부트스트랩 기반 반응형 UI 제작<br> * KakaoMap API 기반 지도 추가<br> * NavBar의 카테고리 주요 내용을 메인페이지에 컴팩트하게 담음 |
| **About 페이지** | * 사이드바 메뉴명 클릭 시 해당 좌표로 이동하는 스크롤스파이 기능 <br> * 센터정보 소개 셀렉트박스 이벤트 |
| **운동일지** <br> (마이페이지-1) | * 오늘의 운동량과 신체변화 기록, 조회가 가능한 대시보드 형태로 구성 <br> * Chart.js 등 총 3개의 차트와 최근 일주일의 기록을 볼 수 있는 테이블이 존재 <br> * 기록된 테이블에서 입력, 수정, 상세보기 기능 <br> * 현재까지 기록한 전체 내용을 불러오는 전체기록 페이지 조회 가능, 이외에 입력, 삭제 기능 |
| **문의게시판** <br> (마이페이지-2) | * 사용자 문의글 등록 및 입력 기능 - 최신글이 상단에 오도록 자동순번 매김, 제목-유형-내용 미입력 시 등록할 수 없도록 설정 <br> * 게시글 조회 및 상세조회 - 페이징처리로 한페이지에 게시글 4개씩, 총 페이지수는 3개씩으로 처리, 제목 클릭시 작성한 내용 확인 가능 <br> * 게시글 삭제 - 상세조회 페이지에서 삭제 버튼 클릭 시 해당글 삭제 후 리스트로 이동 |
| **수강신청** <br> (마이페이지-3) | * DB에 저장된 수강신청 목록 전체 조회 및 실시간 수강신청 인원 확인 <br> * 신청한 수강 내역을 확인하고 취소할 수 있는 기능 |
| **회원정보** <br> (마이페이지-4) | * 로그인한 회원의 정보 상세 조회 및 수정, 회원 탈퇴 기능 |


<br/>

## 6. 내가 구현한 기능과 UI

### 1) 회사소개(About) 페이지
<img src="https://res.cloudinary.com/drxxdsv01/image/upload/v1670501840/semi_about_yyafqn.gif"/>

회사소개 페이지는 `HTML`과 `CSS`, `JavaScript`의 기본적인 문법을 활용하여 정적 페이지를 구성하였습니다.
기본적인 UI 구성은 `Bootstrap`을 활용하였으며, **센터소개**는 **콤보박스 이벤트**를 활용하였습니다.
**오시는 길**은 `KakaoMap API`를 활용하여 지도에 위치를 표시하였으며, 사이드바의 제목을 누르면 해당 좌표로 이동하는 **스크롤스파이** 기능을 활용하였습니다.


#### ☑ 주요기능 - JavaScript 콤보박스 이벤트
Javascript 기본문법을 활용하여, 콤보박스에서 선택한 옵션에 해당하는 내용을 회색 박스인 `<ul class="items">`에 출력하는 기능입니다.

```javascript
const cmbbox = document.querySelector('#select_value'); // <select>

const items = document.querySelector('.items'); // <ul>

function addItem() {
    if(cmbbox.selectedIndex==0) {
        alert('찾으실 센터를 선택해주세요.')
    } else {
        const text = "IntelliGym "+ cmbbox.options[cmbbox.selectedIndex].text;

        const item = createItem(text);
        items.appendChild(item);
    }
}

// 셀렉트 박스에서 아이템 선택했을 때 이벤트
cmbbox.addEventListener('change', () => {
    document.querySelector('.items').innerHTML = "";
    addItem(); // 함수 호출
    });
```

<br/>

### 2) 수강신청 페이지
<img src="https://res.cloudinary.com/drxxdsv01/image/upload/v1670501839/semi_mypage1_jzdokt.jpg"/>
<img width="70%" src="https://res.cloudinary.com/drxxdsv01/image/upload/v1670568435/%EB%8D%B0%EC%9D%B4%ED%84%B0%EC%B6%9C%EB%A0%A5_ihx3qm.jpg"/>

`center_gangnam`컬렉션 DB에 저장되어 있는 강의내역을 전체 레코드 수만큼 for문을 돌려 데이터를 가져오면, 위 이미지와 같이 콘솔창에 출력된 내용을 확인할 수 있습니다. 이를 `${snapshot.docs[i].data().강의명}`와 같이 데이터를 바인딩하고, HTML 테이블의 `class-content` 클래스 명을 가진 `tbody`에 추가하면(append) 출력된 결과를 화면에서 확인할 수 있습니다.

<br/>

#### ☑ 주요기능 - 수강신청 인원 조회
수강신청 내역은 `myclass`컬렉션에 저장되도록 설계를 해두었습니다. 먼저 이 컬렉션의 데이터를 `.where("강의번호", "==", classNum)`와 같이 쿼리를 사용하여 `myclass`컬렉션과 `center_gangnam`컬렉션에 저장된 강의번호가 일치하는 데이터를 가져옵니다. 가져온 데이터를 `applyTotal = querySnapshot.size;`와 같이 size로 개수를 구하고 applyTotal에 데이터를 담아 화면에 출력할 수 있습니다. 모든 회원이 수강신청을 할 때마다 개수는 실시간으로 변동되어 화면에 반영됩니다.

```javascript
const db = firebase.firestore();
const storage = firebase.storage();

 db.collection("center_gangnam")
    .orderBy("강의번호", "asc")
    .get()
    .then((snapshot) => {
      console.log(snapshot);
      total = snapshot.docs.length;
      console.log("전체 레코드 수 ===> " + total);

      for (let i = 0; i < total; i++) {
        if (total === i) break;
        num = i;
        classNum = snapshot.docs[i].data().강의번호;

        ////////////////////// 수강신청한 컬렉션의 강의번호와 for문으로 출력된 강의번호 쿼리 ////////////////////
        db.collection("myclass")
          .where("강의번호", "==", classNum)
          .get()
          .then((querySnapshot) => {
            applyTotal = querySnapshot.size;
            console.log(snapshot.docs[i].data().강의번호 + "신청인원  : " + applyTotal); /// 신청인원 출력 확인
            console.log(snapshot.docs[i].data()); // 전체 데이터 출력 확인

            const template = `
                              <tr>
                                <td>${snapshot.docs[i].data().강의번호}</td>
                                <td colspan="3">
                                  <a href="./regiDetail.html?id=${
                                    snapshot.docs[i].id
                                  }" id="classname">
                                    ${snapshot.docs[i].data().강의명}
                                  </a>
                                </td>
                                <td>${snapshot.docs[i].data().강사명}</td>
                                <td>${snapshot.docs[i].data().강의시간}</td>
                                <td>${applyTotal}</td>
                                <td>${snapshot.docs[i].data().제한인원}</td>
                              </tr>
                              `;

            $(".class-content").append(template);
          });////////////////////////////////////////////////////쿼리끝////////
      } ////////////////////////////////////// end of for
    }); /////////////////// end of callback (center_gangnam 수강신청 리스트 가져오기)
```

<br/>

### 3) 수강신청 상세보기
<img src="https://res.cloudinary.com/drxxdsv01/image/upload/v1670501839/semi_mypage2_enc3pw.jpg"/>

수강신청 페이지의 강의명을 클릭하면 수강신청 상세보기 화면으로 이동합니다. `<a>`태그의 링크를 `href="./regiDetail.html?id=${snapshot.docs[i].id}"`와 같이 설정하여 Firebase의 document id를 `query string`으로 활용할 수 있습니다. 따라서 강의명을 클릭하면 해당 강의 document의 id와 일치하는 게시물을 찾아서 상세페이지에 위와 같이 출력할 수 있습니다.

#### ☑ 주요기능 - 수강신청 등록하기
아래 코드와 같이 `jQuery`를 사용하여 id가 'regi_btn'인 신청하기 버튼을 클릭하면, `myclass`컬렉션에 해당 데이터를 추가하는 코드를 수행하여 수강을 등록할 수 있습니다.

```javascript
$(document).ready(function () {
        let queryString = new URLSearchParams(document.location.search); // 쿼리스트링 선언
        let id = queryString.get("id"); 
        console.log("사용자가 선택한 item.id : " + id); // 아쉬탕가요가(화요일)_2

          db.collection("center_gangnam")
            .doc(id)
            .get()
            .then((result) => {
              console.log(result.data());
              classimage = result.data().이미지;
              classname = result.data().강의명;
              classnum = result.data().강의번호;
              teacher = result.data().강사명;
              classtime = result.data().강의시간;
              classtype = result.data().강의분류;
              $(".img-thumbnail").attr("src", classimage); // img태그 src 속성에 'classimage'값 추가
              $(".classname").attr("value", classname); // input태그 value 속성에 'classname'값 추가
              $(".classnum").attr("value", classnum);
              $(".teacher").attr("value", teacher);
              $(".classtime").attr("value", classtime);
            });

        // 신청하기 버튼 클릭 시 이벤트
        $("#regi_btn").click(function (e) {
          e.preventDefault() // 필수코드 - form태그 새로고침 방지
          let data = {
            이름: c_name,
            성별: gender,
            나이: age,
            강의명: classname,
            강의분류: classtype,
            강의번호: classnum,
            강사명: teacher,
            강의시간: classtime,
            신청일자: setClock(),
            UID: myuid,
          };

          // 위에 선언한 data를 myclass 컬렉션에 추가
          db.collection("myclass")
            .add(data)
            .then((result) => {
              console.log(result);
              alert("수강신청이 완료되었습니다! 수강내역에서 확인해 주세요.");
              window.location.href = "./register.html"; // 수강신청 페이지로 이동
            })
            .catch((err) => {
              console.log(err);
            });
        });
      });
```

<br/>

### 4) 수강내역 조회 페이지
<img src="https://res.cloudinary.com/drxxdsv01/image/upload/v1670501839/semi_mypage3_g6j59d.jpg"/>
<img width="60%" src="https://res.cloudinary.com/drxxdsv01/image/upload/v1670560818/semi_mypage4_qaj6rw.jpg"/>

Firebase의 `onSnapshot()` 메서드를 사용하면 실시간 업데이트를 받을 수 있습니다. `myclass`에 저장된 수강내역을 `where('UID', '==', myuid)`와 같이 로그인한 회원의 uid를 비교하는 쿼리를 활용하여 데이터를 가져오는데, 삭제가 이루어져 DB가 변경되면 새로고침없이, 실시간으로 반영해줍니다.  

#### ☑ 주요기능 - 수강신청 삭제하기
위 이미지와 같이 수강내역의 `<div>` 카드를 클릭하면, `<div class="card-id" style="display : none;">${a.id}</div>`와 같이 class명이 'card-id'인 요소의 내용을 가져올 수 있습니다. 따라서 `clickId` 변수에는 수강신청한 데이터의 고유 uid를 저장할 수 있으며, 이를 활용하여 `myclass`컬렉션에서 `clickId`에 일치하는 데이터를 삭제할 수 있습니다. 

```javascript
////// 수강내역(카드) 클릭 시 이벤트 - css효과
   $('.card').click(function(e) {

      // clickId는 전역변수로 빼고 클릭 이벤트에서 초기화
      // a.id 값을 clickId에 담기
      clickId = $(this).find('.card-id').text()
      console.log(clickId);

      $('.card').css("border","") // 나머지는 bordr 스타일X
      $(this).css("border","3px solid #03a9f4") // 클릭한 카드만 스타일적용
    })

////// 수강취소 버튼 클릭 시 이벤트 
// unbind, bind -> 마지막에 클릭한 요소만 실행하기 위해(이거없으면 여러번 수행됨)
    $('#btn_cancel').unbind("click");
    $('#btn_cancel').bind("click",function() {
      // yes, no 확인창
      if(clickId) {
        if(confirm("선택한 수강을 취소하시겠습니까?")) {
            // yes -> DB에서 수강내역 삭제
            db.collection('myclass').doc(clickId).delete().then(()=>{
              console.log("Document successfully deleted!");
            })
            .catch((err)=>{
            console.log(err);
            })
        } else {
            // no
            console.log("cancelled");
        }
      }
      else {
        alert("취소할 내역을 선택해 주세요.");
      }
    })
```

<br/>

## 7. 팀원 이름 및 역할
◼ 백종국(조장)
- 서버 사이드 담당
- 로그인, 회원가입 UI 및 기능 구현
- 마이페이지 UI 및 기능 구현 
- 운동일지, 회원정보 담당
- Git 관리 및 코드리뷰 담당
- PPT 발표 및 영상제작

◼ 김지연
- 마이페이지 설계 담당
- 마이페이지 UI 및 기능 구현 
- 문의게시판, 회원정보 담당
- 요구사항 정의서 담당

◼ 신현아
- 메인페이지 UI 및 기능 구현
- 마이페이지 회원정보 UI 제작
- 화면정의서 담당
- 회의 보고서 및 노션 총괄

◼ 이여진
- 회사소개 페이지, 사이드바 UI 제작
- 마이페이지 UI 및 기능 구현
- 수강신청 담당
- PPT 제작 및 공정표 담당

<br>

## 8. 사용 기술 및 개발 환경
- 프론트엔드 : HTML5 / CSS3 / JavaScript / jQuery / BootStrap
- 데이터베이스 & 서버 : Firebase / Node.js-Express
- 개발환경 : Visual Studio Code
- 협업툴 : GitHub / Notion / Slack
- 오픈 소스 : Kakao Map API / Chart.js
