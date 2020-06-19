import {
  get,
  post
} from './http'

let socketUrl = "ws://127.0.0.1:8001";
// 环境的切换
if (process.env.NODE_ENV == 'development') {
  socketUrl = "ws://127.0.0.1:8001";
} else if (process.env.NODE_ENV == 'production') {
  socketUrl = "ws://chweb.icu/wsk";
}
// socket
export const socketadress = socketUrl;


// export const test = (params) => post("index.php/Home/Api/hader_info.html", params);
// 登录
export const userLogin = (params) => post("/h5api/user/login", params);
// 发送邮件注册
export const userSendemail = (params) => post("/h5api/user/sendemail", params);
// 邮箱点击注册
export const userRegister = (params) => post("/h5api/user/register", params);

export const test = (params) => post("https://wap-api.xplus.xiaodengta.com/jingdian/CourseSection/CourseSectionCard/setCourseSectionCard", params);
