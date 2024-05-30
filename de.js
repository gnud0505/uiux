document.addEventListener('DOMContentLoaded', function () {
    // This script would dynamically fill the KPI details
    const kpiDetails = {
        name: 'Improve Project Completion Time',
        field: 'Work',
        description: 'Reducing the time taken to complete projects.',
        goal: 'Reduce project completion time by 20%',
        unit: 'Actual Time vs. Set Time',
        startDate: '2024-04-01',
        endDate: '2024-06-30',
        plans: [
            { name: 'Plan 1', importance: '30%' },
            { name: 'Plan 2', importance: '50%' },
            { name: 'Plan 3', importance: '20%' }
        ]
    };

    document.getElementById('kpiNameDetail').value = kpiDetails.name;
    document.getElementById('kpiFieldDetail').value = kpiDetails.field;
    document.getElementById('kpiDescriptionDetail').value = kpiDetails.description;
    document.getElementById('kpiGoalDetail').value = kpiDetails.goal;
    document.getElementById('kpiUnitDetail').value = kpiDetails.unit;
    document.getElementById('kpiStartDateDetail').value = kpiDetails.startDate;
    document.getElementById('kpiEndDateDetail').value = kpiDetails.endDate;

});

function updateStatus() {
    const statusSelect = document.getElementById('statusSelect');
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');

    if (statusSelect.value === 'done') {
        progressFill.style.width = '100%';
        progressFill.style.backgroundColor = '#48C682';
        progressText.style.color = '#FFFFFF';
        progressText.textContent = '100%';
    } else {
        progressFill.style.width = '80%';
        progressFill.style.backgroundColor = '#9C3CE7';
        progressText.textContent = '80%';
    }
    
    if (statusSelect.value === 'done') {
        startConfetti();
    }
}

function startConfetti() {
    const duration = 2 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
}

function enableEditing() {
    // Ensure all relevant fields are enabled
    document.getElementById('kpiNameDetail').disabled = false;
    document.getElementById('kpiGoalDetail').disabled = false;
    document.getElementById('kpiDescriptionDetail').disabled = false;
    document.getElementById('kpiStartDateDetail').disabled = false;
    document.getElementById('kpiEndDateDetail').disabled = false;
    document.getElementById('kpiUnitDetail').disabled = false;
    document.getElementById('kpiFieldDetail').disabled = false;
    document.getElementById('kpiFieldDetail').addEventListener('change', function() {
        if (this.value === 'Custom') {
            document.getElementById('kpiFieldCustom').style.display = 'inline-block';
        } else {
            document.getElementById('kpiFieldCustom').style.display = 'none';
        }
    });
    const planPercentageInputs = document.querySelectorAll('.plan-percentage-input');
    planPercentageInputs.forEach(input => {
        input.disabled = false;
    });
}

function addMorePlans() {
    const additionalPlans = document.getElementById('additionalPlans');
    const plansData = [
        { title: 'Plan 4', importance: '%' },
        { title: 'Plan 5', importance: '%' },
        { title: 'Plan 6', importance: '%' },
        { title: 'Plan 7', importance: '%' },
        { title: 'Plan 8', importance: '%' },
        { title: 'Plan 9', importance: '%' },
        { title: 'Plan 10', importance: '%' }
    ];

    additionalPlans.innerHTML = '';  // Clear existing content

    plansData.forEach(plan => {
        const newPlanCard = document.createElement('div');
        newPlanCard.className = 'plan-card';
        newPlanCard.innerHTML = `
            <div class="plan-info">
                <h3>${plan.title}</h3>
                <a href="#" class="plan-details">See plan details</a>
            </div>
            <div class="plan-percentage">
                <label><strong>% Importance:</strong>
                    <input type="text" value="${plan.importance}" class="plan-percentage-input">
                </label>
            </div>
            <input type="checkbox" class="plan-checkbox" onclick="movePlan(this)">
        `;
        additionalPlans.appendChild(newPlanCard);
        newPlanCard.style.display = 'flex';
    });
}

function movePlan(checkbox) {
    const planCard = checkbox.parentElement;
    if (checkbox.checked) {
        planCard.style.display = 'flex';
        document.querySelector('.add-more-plans').before(planCard);
    }
}

function saveKPIDetails() {
    alert('KPI details saved successfully!');
}

function deleteKPIDetails() {
    if (confirm('Are you sure you want to delete this KPI?')) {
        alert('KPI deleted successfully!');
    }
}
