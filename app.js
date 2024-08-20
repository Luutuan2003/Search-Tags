// Lấy tham chiếu đến các phần tử trong trang HTML
const input = document.querySelector(".content input"); // Ô input để nhập thẻ
const wrapper = document.querySelector(".content"); // Phần tử chứa các thẻ
const removeAllBtn = document.querySelector(".remove_all"); // Nút "Remove all"

// Mảng để lưu trữ các thẻ mà người dùng đã nhập
let tags = [];

// Hàm này thêm một thẻ mới vào mảng `tags`
function addTag(tag) {
  // Kiểm tra xem thẻ đã tồn tại trong mảng chưa
  if (!tags.includes(tag)) {
    tags.push(tag); // Nếu chưa, thêm thẻ vào mảng
    renderTags(); // Cập nhật giao diện với danh sách thẻ mới
  }
}

// Hàm này hiển thị các thẻ trên giao diện
function renderTags() {
  // Xóa sạch nội dung hiện tại trong phần tử `.content`
  wrapper.innerHTML = "";

  // Lặp qua từng thẻ trong mảng `tags`
  tags.forEach((tag) => {
    // Tạo một phần tử `<li>` để chứa thẻ
    const li = document.createElement("li");
    li.textContent = tag; // Đặt nội dung của thẻ là tên của thẻ

    // Tạo một phần tử `<i>` để làm biểu tượng xóa
    const removeIcon = document.createElement("i");
    // Thêm các lớp CSS vào phần tử `<i>` để hiển thị biểu tượng dấu "x"
    removeIcon.classList.add("fas", "fa-times");
    // Thêm sự kiện `click` cho biểu tượng xóa để xóa thẻ
    removeIcon.addEventListener("click", () => removeTag(tag));

    // Thêm biểu tượng xóa vào phần tử `<li>`
    li.appendChild(removeIcon);
    // Thêm phần tử `<li>` vào phần tử `.content`
    wrapper.appendChild(li);
  });

  // Đảm bảo ô input luôn nằm ở cuối danh sách thẻ để người dùng có thể tiếp tục nhập
  wrapper.appendChild(input);
  input.focus(); // Đặt con trỏ vào ô input
}

// Hàm này xóa một thẻ khỏi mảng `tags`
function removeTag(tag) {
  // Lọc mảng `tags` để loại bỏ thẻ đã chọn
  tags = tags.filter((t) => t !== tag);
  renderTags(); // Cập nhật lại giao diện sau khi xóa thẻ
}

// Lắng nghe sự kiện khi người dùng nhấn phím trong ô input
input.addEventListener("keyup", (e) => {
  // Kiểm tra nếu phím Enter được nhấn và ô input không rỗng
  if (e.key === "Enter" && input.value.trim() !== "") {
    // Thêm thẻ vào mảng `tags`
    addTag(input.value.trim());
    input.value = ""; // Xóa nội dung của ô input sau khi thêm thẻ
  }
});

// Lắng nghe sự kiện khi người dùng nhấn nút "Remove all"
removeAllBtn.addEventListener("click", () => {
  tags = []; // Xóa tất cả các thẻ bằng cách đặt mảng `tags` thành rỗng
  renderTags(); // Cập nhật lại giao diện để hiển thị danh sách thẻ rỗng
});
