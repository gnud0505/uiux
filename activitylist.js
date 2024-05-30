document.addEventListener('DOMContentLoaded', function () {
    var modal1 = document.getElementById("activityModalUpdate");
    var btnList = document.querySelectorAll(".card");
    var span1 = document.getElementById("close-btn1");

    btnList.forEach(function (btn) {
        btn.addEventListener('click', function () {
            modal1.style.display = "block";
            // Get the card title
            const cardTitle = btn.querySelector('.activity-title').textContent;
            // set cardTitle to h3 with id modal-title-activity
            document.getElementById('modal-title-activity').textContent = cardTitle;
            // Get percentage from class name percentage
            const percentage = btn.querySelector('.percentage').textContent;
            // set percentage to div input with id percentage
            document.getElementById('percentage-modal').innerHTML = percentage;
            // Get data from element with id input-percentage-data
            const data = document.getElementById('input-percentage-data').value;
            console.log("🚀 ~ data:", data)

        });
    });

    span1.addEventListener('click', function () {
        modal1.style.display = "none";
    });

    window.addEventListener('click', function (event) {
        if (event.target == modal1) {
            modal1.style.display = "none";
        }
    });


    var createPlanButton = document.getElementById("create-activity-btn");
    createPlanButton.addEventListener('click', function (event) {
        event.preventDefault();
        modal.style.display = "none";
    });

    var modal = document.getElementById("activityModal");
    var btn = document.getElementById("activityPopup");
    var span = document.getElementById("close-btn");

    btn.onclick = function () {
        modal.style.display = "block";
    }

    span.addEventListener('click', function () {
        modal.style.display = "none";
    });

    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });


    var createPlanButton = document.getElementById("create-activity-btn");
    createPlanButton.addEventListener('click', function (event) {
        event.preventDefault();
        showSuccessToast();
        modal.style.display = "none";
    });

    var updatePlanButton = document.getElementById("save-btn1");
    updatePlanButton.addEventListener('click', function (event) {
        event.preventDefault();
        showUpdateToast();
        modal1.style.display = "none";

        // Get data from textarea with id input-percentage-data
        const data = document.getElementById('input-percentage-data').value;
        // Set data to div with id percentage
        document.getElementById('percentage-1').innerHTML = data + '%';
        // Set css of class percentage-1 be 154.63px*data/100
        console.log("data / 100", data / 100);
        document.getElementById('bar-fill-2-card-1').style.width = 154.63 * data / 100 + 'px';
        document.getElementById('bar-fill-2-card-1').style.background = '#5BBFFF'


    });

    const deletePlanButton = document.getElementById("delete-btn1");
    deletePlanButton.addEventListener('click', function (event) {
        event.preventDefault();
        // Trigger to document with id deleteModal
        const modal = document.getElementById("deleteModal");
        modal.style.display = "block";

        // modal1.style.display = "none";
        // Remove the card with id is "card-1"
        // const card = document.getElementById("card-1");
        // card.remove();
    });

    // Interact with yes-btn1 and no-btn1
    const yesButton = document.getElementById("yes-btn1");
    yesButton.addEventListener('click', function (event) {
        event.preventDefault();
        const modal = document.getElementById("deleteModal");
        modal.style.display = "none";

        const card = document.getElementById("card-1");
        card.remove();
        modal1.style.display = "none";
    });
    // If no-btn -> close the modal
    const noButton = document.getElementById("no-btn1");

    noButton.addEventListener('click', function (event) {
        event.preventDefault();
        const modal = document.getElementById("deleteModal");
        modal.style.display = "none";
    });




    function showSuccessToast() {
        toast({
            title: "Thành công!",
            message: "Bạn đã tạo Acitivity thành công.",
            type: "success",
            duration: 5000
        });
    }

    function showUpdateToast() {
        toast({
            title: "Thành công!",
            message: "Bạn đã cập nhật Acitivity thành công.",
            type: "success",
            duration: 5000
        });
    }
});

function toast({ title = "", message = "", type = "info", duration = 3000 }) {
    const main = document.getElementById("toast");
    if (main) {
        const toast = document.createElement("div");

        // Auto remove toast
        const autoRemoveId = setTimeout(function () {
            main.removeChild(toast);
        }, duration + 1000);

        // Remove toast when clicked
        toast.onclick = function (e) {
            if (e.target.closest(".toast__close")) {
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        };

        const icons = {
            success: "fas fa-check-circle",
            info: "fas fa-info-circle",
            warning: "fas fa-exclamation-circle",
            error: "fas fa-exclamation-circle"
        };
        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);

        toast.classList.add("toast", `toast--${type}`);
        toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;

        toast.innerHTML = `
                      <div class="toast__icon">
                          <i class="${icon}"></i>
                      </div>
                      <div class="toast__body">
                          <h3 class="toast__title">${title}</h3>
                          <p class="toast__msg">${message}</p>
                      </div>
                      <div class="toast__close">
                          <i class="fas fa-times"></i>
                      </div>
                  `;
        main.appendChild(toast);
    }
}
// Placeholder for any future JavaScript
document.querySelectorAll('.edit-button').forEach(button => {
    button.addEventListener('click', () => {

    });
});

document.querySelectorAll('.remove-tag').forEach(button => {
    button.addEventListener('click', () => {
        button.parentElement.remove();
    });
});

function selectPlan(plan) {
    console.log("Selected plan: ", plan);
    const selectedPlansContainer = document.getElementById('selected-skill');

    // Check if the plan is already selected
    if (Array.from(selectedPlansContainer.children).some(child => child.textContent.includes(plan))) {
        return;
    }

    const planElement = document.createElement('div');
    planElement.className = 'selected-plan';
    planElement.innerHTML = `
        <span>${plan}</span>
        <span class="remove-plan" onclick="removePlan(this)">&#10005;</span>
    `;

    selectedPlansContainer.appendChild(planElement);
}


function removePlan(element) {
    const selectedPlansContainer = document.getElementById('selected-skill');
    selectedPlansContainer.removeChild(element.parentElement);
}


function toggleDropdown() {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
}

window.onclick = function (event) {
    if (!event.target.matches('.dropdown') && !event.target.matches('.dropdown *')) {
        const dropdownMenu = document.querySelector('.dropdown-menu');
        dropdownMenu.style.display = 'none';
    }
}


// Placeholder for any future JavaScript
document.querySelectorAll('.edit-button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Edit functionality to be implemented');
    });
});

document.querySelectorAll('.remove-tag').forEach(button => {
    button.addEventListener('click', () => {
        button.parentElement.remove();
    });
});


// Hiển thị popup khi nhấp vào nút "Create Activity"
document.getElementById("create-activity-btn").addEventListener("click", function () {
    document.getElementById("successPopup").style.display = "block";
});

// Đóng popup khi nhấp vào nút "Back to Activity"
document.getElementById("backToActivity").addEventListener("click", function () {
    document.getElementById("successPopup").style.display = "none";
});

// Đóng popup khi nhấp vào nút "Continue with Plan"
document.getElementById("continueWithPlan").addEventListener("click", function () {
    document.getElementById("successPopup").style.display = "none";
});
document.getElementById("continueWithPlan").addEventListener("click", function () {
    window.location.href = "plan.html";
});
