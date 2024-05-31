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
