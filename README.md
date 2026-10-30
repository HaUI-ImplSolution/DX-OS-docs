# DX-OS Docs

Trang tài liệu của [DX-OS](https://github.com/HaUI-ImplSolution/DX-OS), dựng bằng [Docusaurus](https://docusaurus.io).
Địa chỉ: https://haui-implsolution.github.io/DX-OS-docs/

## Chạy trên máy

```bash
npm ci
npm start          # http://localhost:3000/DX-OS-docs/
npm run build      # ra build/, báo lỗi khi có link hỏng
```

## Cấu trúc

| Đường dẫn | Nội dung |
|---|---|
| `docs/` | Tài liệu Markdown; thứ tự và nhóm ở `sidebars.js` |
| `docs/reference/` | Đề thi, phiếu đánh giá, thiết kế gốc (PDF, DOCX) |
| `docs/images/` | Ảnh dùng trong tài liệu |
| `src/pages/index.js` | Trang chủ |

Thêm một tài liệu: tạo tệp `.md` trong `docs/`, rồi thêm id của nó vào `sidebars.js`.
Đẩy lên nhánh `main` thì workflow `Deploy docs` tự dựng và đăng lên GitHub Pages.

## Giấy phép

Apache-2.0, xem [`LICENSE`](./LICENSE).
