# Hướng dẫn cài đặt

## Yêu cầu

- Node.js ( >= 18.19.0 )
- npm ( >= 10.2.3 )

## Cài Đặt

1. **Clone Repository:**
   ```bash
   git clone https://github.com/Memes-organization/MemeSuper_BE.git
   ```
2. **Cài Đặt Dependencies**
   ```bash
   cd MemeSuper_BE
   npm i
   ```
3. **Các lệnh**

- `npm run dev`: Chạy dự án (môi trường development).
- `npm run prepare`: Cài đặt husky
- `npm run build`: Build source code
- `npm start`: Chạy dự án (môi trường product, chỉ chạy được sau khi build)

4. **.env**

- Tạo file `.env` và cấu hình các tham số theo file `.env.example`
