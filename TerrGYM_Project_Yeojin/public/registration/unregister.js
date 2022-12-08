import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getFirestore, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-firestore.js";
import { onAuthStateChanged, getAuth, deleteUser } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";

/* ==== Firebase KEY - 자기꺼 복사 붙여 넣기 해야 됩니다. ==== */
const firebaseConfig = {
  apiKey: "AIzaSyCrA0QQH5QpbtWdyVbrQB72APSQxH3cjl4",
  authDomain: "semi-intelligym.firebaseapp.com",
  databaseURL: "https://semi-intelligym-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "semi-intelligym",
  storageBucket: "semi-intelligym.appspot.com",
  messagingSenderId: "925436106266",
  appId: "1:925436106266:web:5e064d6b621ccb9dfd63a3"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth();
const user = auth.currentUser;


console.log("콘솔에 아무것도 안나와요.지금은요.왜냐면 종국이가 확인할수있거든요");



/* 사용자가 로그인하고나서 탈퇴버튼 눌렀을 때 -> 탈퇴 & 문서삭제 */

onAuthStateChanged(auth, async (user) => {
    if (user) {
      console.log("사용자데이터 가져왔나요?");
      const uid = user.uid;
      console.log(user);
      console.log("탈퇴할 사용자 id => " + uid);

      try {

        const unregister = document.querySelector("#unregister");
        
        
        /* 버튼눌러졌을때  */
        
        unregister.addEventListener("click", async () => {
          const ok = confirm("정말로 탈퇴하시겠습니까?");
  
          console.log("클릭이벤트 성공");
  
          /* deleteDoc(doc(db, "QUESTION", id)) */
          if (ok) {
            // const uid = user.uid;
            console.log("if문까지 왔나요?.");
            await deleteDoc(doc(db, "member", uid));
            //await deleteDoc()
            console.log("탈퇴할 사용자 if문에서의 id => " + uid);

            /* 멤버????유저???? */
            deleteUser(member).then(() => {
              console.log("사용자 탈퇴되었습니다.");
              alert("회원 탈퇴되었습니다.");

              /* 이거가 필요할까요 ?????????*/
            /*   location.href ="" ;*/
            });
          }
        });
      } catch (error) {
        const errorMessage = error.message;
        console.log("데이터 불러오기 실패 : " + errorMessage);
      }
    } else {
      // User is signed out
      // ...
    }
  });





  /* =========여기는 잠시 테스트를 해보겠습니다. =============== */
  const unregister = document.querySelector("#unregister");
  unregister.addEventListener("click", () => {
    //   const ok = confirm("탈퇴하시겠습니까?");
    console.log("클릭이벤트 성공");
  });