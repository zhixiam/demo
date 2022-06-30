import service from "./index";
//登入
export function login(data){
    return service({
        url:"/login",
        method:"post",
        data
    })
}
//註冊
export function register(data){
    return service({
        url:"/register",
        method:"post",
        data
    })
}
//取得資料
export function getbook(){
    return service({
        url:"/getbooks",
        method:"get",
    })
}