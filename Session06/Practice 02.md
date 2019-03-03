TODO - API Management, HTTP Interceptor
=======================================

1. Thực hành với HTTP Interceptor, gửi kèm Header trong mọi bản tin HTTP Request
    * Tạo mới một interceptor: `./shared/interceptors/jwt.interceptor.ts`
2. Tạo và sử dụng `./shared/interceptors/error.interceptor.ts` xử lý bản tin HTTP 401
    * Logout tài khoản người dùng
    * Redirect về trang chủ
3. Tạo và sử dụng FakeBackend Interceptor để giả lập dữ liệu khi chưa có API, hoàn thiện ứng dụng ToDo.
    * Đánh chặn, cho phép người dùng đăng nhập với tài khoản `test/test`, khác thì forward request về api server.
    * Cài đặt API Service thêm, sửa, xóa các task (làm thêm)

Output:

![ToDo Application](./../Todo-App.png "Giao diện ứng dụng ToDo App")

  