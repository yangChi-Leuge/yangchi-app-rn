import { createStore } from "zustand";

export const store = createStore(() => ({
    auth: {
        accessToken: "",
        refreshToken: "",
    },
    lang: {
        langList: ["작은 실천으로 시작하는","세계시민","로그인", "회원가입", "로그인 성공", "로그인 실패", "게시물", "캘린더", "메인", "이슈", "유저", "챌린지 하러가기", "눌러서 자세히볼 수 있어요!"]
    },
    currentNews: {
        id : "",
        title : "",
        content : "",
        author : "",
        urlToImage : "",
        publishedAt : ""
    },
    currentLang: "kr",
    currentFeed: {

    },
    currentUser: {
        id: "",
        name: "",
        postsCreatedByUser: [{post_Id : "", title: "", content: ""}],
        likedPosts: [{post_Id : "", title: "", content: ""}]
    }
}));
