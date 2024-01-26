# Hướng dẫn Route

## Meme route

### GET /public/meme/{filename}

- Mô tả: Truy cập vào các file ảnh tĩnh meme trên server
- Ví dụ: http://localhost:8000/public/meme/image-1703859490992-171217761.jpg
- Request: Không có nội dung yêu cầu nào được yêu cầu cho yêu cầu này.

### POST /api/meme/uploadMeme

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
- Response E.g:
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

### GET /api/meme/getListMeme

- Ví dụ: http://localhost:8000/meme/listMeme?page=1&limit=10
- Mô tả: Lấy danh sách các file ảnh meme dựa trên phân trang.
- Request
  - GET /api/meme/getListMeme
- Query Parameters:
  - `page` (integer, required) (options): Số trang cần hiển thị (mặc định là 1 nếu không được cung cấp).
  - `limit` (integer, required) (options): Số lượng file ảnh trên mỗi trang (mặc định là 10 nếu không được cung cấp).
- Response:
  - statusCode (integer): The status code of the response.
  - success (string): The success message.
  - msg (string): Additional message.
  - metadata (object): Contains the metadata for the meme list.
    - meme (array):
      - \_id (string): The ID of the meme.
      - fieldname (string): The field name of the meme.
      - mimetype (string): The MIME type of the meme.
      - filename (string): The filename of the meme.
      - size (integer): The size of the meme.
      - \_\_v (integer): Version control.
      - createdAt (string): The creation date of the meme.
      - updatedAt (string): The last update date of the meme.
    - meta (object):
      - total (integer): The total number of memes.
      - limit (integer): The limit of memes per page.
      - totalPages (integer): The total number of pages.
      - page (integer): The current page number.
      - pagingCounter (integer): The paging counter.
      - hasPrevPage (boolean): Indicates if there is a previous page.
      - hasNextPage (boolean): Indicates if there is a next page.
      - prevPage (integer): The previous page number.
      - nextPage (integer): The next page number.
- Response E.g:
  ```json
  {
    "statusCode": 200,
    "success": "OK",
    "msg": "",
    "metadata": {
      "meme": [
        {
          "_id": "65a16d6481288a1a6cb49c7e",
          "fieldname": "image",
          "mimetype": "image/png",
          "filename": "image-1705078116692-882463044.png",
          "size": 483570,
          "__v": 0,
          "createdAt": "2024-01-12T16:48:36.711Z",
          "updatedAt": "2024-01-12T16:48:36.711Z"
        }
      ],
      "meta": {
        "total": 12,
        "limit": 3,
        "totalPages": 4,
        "page": 1,
        "pagingCounter": 1,
        "hasPrevPage": false,
        "hasNextPage": true,
        "prevPage": null,
        "nextPage": 2
      }
    }
  }
  ```

### GET /downloadMeme/{filename}

- Mô tả: Điểm cuối này thực hiện yêu cầu HTTP GET để tải xuống hình ảnh meme với tên tệp được chỉ định.
- Path Parameters:
  - `{filename}`: Tên của file ảnh meme cần tải xuống.
