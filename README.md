


#  Jumpy Bird

**Jumpy Bird** là một mini game 2D lấy cảm hứng từ Flappy Bird, được phát triển bằng **Cocos Creator 3.8.8**.  
Dự án tập trung vào việc làm quen với quy trình phát triển game 2D, xử lý va chạm, animation, âm thanh và gameplay loop cơ bản.

---

##  Gameplay

- Người chơi điều khiển chú chim bay lên bằng cách chạm / nhấn phím
- Tránh va chạm với các ống nước
- Tính điểm dựa trên số lượng ống đã vượt qua
- Game kết thúc khi chim va chạm với chướng ngại vật hoặc mặt đất

---

##  Features

- Điều khiển nhân vật đơn giản, dễ làm quen
- Animation cho chim bay
- Hệ thống va chạm (Collision Detection)
- Âm thanh (bay, ghi điểm, game over)
- Sinh ống ngẫu nhiên
- Giao diện hiển thị điểm số

---

##  Công nghệ sử dụng

- **Engine:** Cocos Creator 3.8.8
- **Ngôn ngữ:** TypeScript  
- **Thể loại:** 2D Casual Game  

---

##  Cấu trúc thư mục chính

```text
assets/
├── Animations/        # Animation cho nhân vật
├── AudioClip/         # Âm thanh game
├── Game Resources/    # Sprite, font, hình ảnh
├── Scene/             # Scene chính của game
└── Scripts/           # Logic gameplay (chim, ống, game manager, ...)
````

---

##  Cách chạy dự án

1. Cài đặt **Cocos Creator**
2. Clone repository:

   ```bash
   git clone https://github.com/your-username/Jumpy_Bird.git
   ```
3. Mở Cocos Creator → **Open Project** → chọn thư mục `Jumpy_Bird`
4. Mở scene chính trong thư mục `Scene`
5. Nhấn **Play** để chạy game

---

##  Mục tiêu của dự án

* Thực hành phát triển game 2D với Cocos Creator
* Làm quen với TypeScript trong môi trường game
* Hiểu quy trình từ asset → gameplay → hoàn thiện sản phẩm
* Làm dự án portfolio **Intern Game Developer / Playable Ads Developer**

---

##  Ghi chú

Đây là dự án học tập cá nhân, tập trung vào việc rèn luyện tư duy gameplay và kỹ năng làm việc với Cocos engine.
Trong tương lai có thể mở rộng thêm:

* Menu start / restart
* Lưu điểm cao (High Score)
* Tối ưu cho mobile

---
