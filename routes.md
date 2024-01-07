# Hướng dẫn Route

## Meme route

### Host

- [http://localhost:8000](http://localhost:8000)

### GET /public/meme/{filename}

- Mô tả: Truy cập vào các file ảnh tĩnh meme trên server
- Ví dụ: http://localhost:8000/public/meme/image-1703859490992-171217761.jpg
- Request: Không có nội dung yêu cầu nào được yêu cầu cho yêu cầu này.

### POST /meme/uploadMeme

- Mô tả: Tải lên ảnh meme, có thể tải nhiều ảnh cùng 1 lần
- Content-Type: multipart/form-data
- Yêu cầu
  - Yêu cầu gửi dữ liệu dưới dạng form-data.
  - Chỉ chấp nhận tải lên các file ảnh có định dạng jpg và png. Các file không phải định dạng này sẽ bị từ chối.
- Request
  - image (file): File meme cần upload.
- Response:
  - statusCode (number): Mã trạng thái của phản hồi.
  - success (string): Cho biết sự thành công của hoạt động.
  - msg (string): Thông báo bổ sung liên quan đến thao tác.
  - metadata (object): Chứa siêu dữ liệu về meme đã tải lên.
    - meme (array): Mảng các meme được tải lên với các thuộc tính sau:
      - fieldname (string): Tên trường dành cho meme đã tải lên.
      - mimetype (string): loại MIME của meme đã tải lên.
      - filename (string): Tên của file meme đã tải lên.
      - size (number): Kích thước của file meme được tải lên.
      - \_id (string): ID duy nhất của meme đã tải lên.
      - \_\_v (number): Phiên bản của meme được tải lên.
      - createdAt (string): Dấu thời gian khi meme được tạo.
        -updatedAt (string): Dấu thời gian về thời điểm meme được cập nhật lần cuối.
- Ví dụ:
  - image: file.png, file.jpg
  - Response
  ```json
  {
    "statusCode": 201,
    "success": "Created",
    "msg": "Upload image success",
    "metadata": {
      "meme": [
        {
          "fieldname": "image",
          "mimetype": "image/jpeg",
          "filename": "image-1704610169084-929811701.jpg",
          "size": 8941,
          "_id": "659a497973ccb0b704650cdf",
          "__v": 0,
          "createdAt": "2024-01-07T06:49:29.117Z",
          "updatedAt": "2024-01-07T06:49:29.117Z"
        }
      ]
    }
  }
  ```

### GET /meme/listMeme

- Mô tả: Lấy danh sách các file ảnh meme dựa trên phân trang.
- Query Parameters:
  - `page` (tuỳ chọn): Số trang cần hiển thị (mặc định là 1 nếu không được cung cấp).
  - `limit` (tuỳ chọn): Số lượng file ảnh trên mỗi trang (mặc định là 10 nếu không được cung cấp).
- Phản hồi:
  - Server sẽ trả về danh sách các file ảnh meme theo phân trang dựa trên các tham số `page` và `limit`.
- Ví dụ: http://localhost:8000/meme/listMeme?page=1&limit=10

### GET /downloadMeme/{filename}

- Mô tả: Tải xuống file ảnh meme theo tên file.
- Path Parameters:
  - `{filename}`: Tên của file ảnh meme cần tải xuống.
- Phản hồi:
  - Server sẽ trả về file ảnh meme để người dùng có thể tải xuống. Định dạng và loại file sẽ phụ thuộc vào tên file và loại file gốc đã được tải lên trước đó.
