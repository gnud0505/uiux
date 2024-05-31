
document.addEventListener('DOMContentLoaded', function () {
    var addActivityButton = document.getElementById("addActivity");
    var successPopup = document.getElementById("successPopup");

    addActivityButton.addEventListener("click", function() {
        successPopup.style.display = "block";
    });

    var backToActivityButton = document.getElementById("backToActivity");
    backToActivityButton.addEventListener("click", function() {
        successPopup.style.display = "none";
    });

    var continueWithKPIButton = document.getElementById("continueWithKPI");
    continueWithKPIButton.addEventListener("click", function() {
        successPopup.style.display = "none";
    });
    activityItem.style.display = "none";

   

  
    // Các phần khác của mã JavaScript
});
   document.getElementById('close-btn1').addEventListener('click', function() {
    // Thay đổi thuộc tính style của phần tử successPopup
    successPopup.style.display = "none";
  });
  document.addEventListener('DOMContentLoaded', function () {
    // Lấy phần tử activity-item
    var activityItem = document.querySelector('.activity-item-2');
    // Ẩn activity-item khi trang tải
    activityItem.style.display = "none";

    // Lấy nút Lưu
    var saveButton = document.getElementById('continueWithKPI');
    // Thêm sự kiện click cho nút Lưu
    saveButton.addEventListener('click', function() {
        // Hiển thị activity-item khi nút Lưu được nhấn
        activityItem.style.display = "flex";
    });
});
document.addEventListener('DOMContentLoaded', function () {
    // Lấy phần tử activity-item
    var activityItem = document.querySelector('.activity-item-3');
    // Ẩn activity-item khi trang tải
    activityItem.style.display = "none";

    // Lấy nút Lưu
    var saveButton = document.getElementById('continueWithKPI');
    // Thêm sự kiện click cho nút Lưu
    saveButton.addEventListener('click', function() {
        // Hiển thị activity-item khi nút Lưu được nhấn
        activityItem.style.display = "flex";
    });
});


document.getElementById('remove-btn').addEventListener('click', function() {
    document.getElementById('confirmModal').style.display = 'flex';
});

document.querySelector('.btn-cancel').addEventListener('click', function() {
    document.getElementById('confirmModal').style.display = 'none';
});

document.querySelector('.btn-confirm').addEventListener('click', function() {
    document.getElementById('confirmModal').style.display = 'none';
    document.getElementById('successPopup').style.display = 'flex';
});
document.querySelector('.save-btn').addEventListener('click', function() {
    
    document.getElementById('successPopup').style.display = 'flex';
});

document.getElementById('backToActivity').addEventListener('click', function() {
    document.getElementById('successPopup').style.display = 'none';
    window.location.href = "detail_plan.html";
});

document.getElementById('continueWithKPI').addEventListener('click', function() {
    document.getElementById('successPopup').style.display = 'none';
    window.location.href = "plan.html";
});

