# Hướng dẫn Route

## Meme route

### Host

- [http://localhost:8000](http://localhost:8000)

### GET /public/meme/{filename}

- Mô tả: Truy cập vào các file ảnh meme
- Ví dụ: [http://localhost:8000/public/meme/image-1703859490992-171217761.jpg](http://localhost:8000/public/meme/image-1703859490992-171217761.jpg)

### POST /meme/uploadMeme

- Mô tả: Tải lên ảnh meme
- Content-Type: multipart/form-data
- Yêu cầu:
  - Yêu cầu gửi dữ liệu dưới dạng form data.
  - Chỉ chấp nhận tải lên các file ảnh có định dạng jpg và png. Các file không phải định dạng này sẽ bị từ chối.
  - Các trường yêu cầu
    - image
- Phản hồi:
  - Server sẽ trả về thông báo về việc tải lên thành công hoặc thất bại sau khi xử lý yêu cầu.
- Ví dụ:
  - image: file.png, file.jpg

### GET /meme/listMeme

- Mô tả: Lấy danh sách các file ảnh meme dựa trên phân trang.
- Query Parameters:
  - `page` (tuỳ chọn): Số trang cần hiển thị (mặc định là 1 nếu không được cung cấp).
  - `limit` (tuỳ chọn): Số lượng file ảnh trên mỗi trang (mặc định là 10 nếu không được cung cấp).
- Phản hồi:
  - Server sẽ trả về danh sách các file ảnh meme theo phân trang dựa trên các tham số `page` và `limit`.
- Ví dụ: [http://localhost:8000/meme/listMeme?page=1&limit=10](http://localhost:8000/meme/listMeme?page=1&limit=10)

### GET /downloadMeme/{filename}

- Mô tả: Tải xuống file ảnh meme theo tên file.
- Path Parameters:
  - `{filename}`: Tên của file ảnh meme cần tải xuống.
- Phản hồi:
  - Server sẽ trả về file ảnh meme để người dùng có thể tải xuống. Định dạng và loại file sẽ phụ thuộc vào tên file và loại file gốc đã được tải lên trước đó.
