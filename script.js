function calculateAge() {
    try {
        const dobInput = document.getElementById('dob');
        const result = document.getElementById('result');
        const clearBtn = document.getElementById('clearBtn');
        if (!dobInput || !result || !clearBtn) {
            console.error("Required elements not found.");
            return;
        }

        const dob = dobInput.value;
        const dobDate = new Date(dob);
        if (isNaN(dobDate.getTime())) {
            console.error("Invalid date format.");
            result.innerHTML = "Please enter a valid date.";
            return;
        }

        const todayDate = new Date();
        let ageYears = todayDate.getFullYear() - dobDate.getFullYear();
        const monthDiff = todayDate.getMonth() - dobDate.getMonth();
        const dayDiff = todayDate.getDate() - dobDate.getDate();

        // Adjust ageYears if the current date is before the birthday in the current year
        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            ageYears--;
        }

        // Calculate months
        let ageMonths = monthDiff >= 0 ? monthDiff : 12 + monthDiff;
        if (dayDiff < 0) {
            ageMonths--;
        }

        // Calculate weeks, days, and hours
        const ageInMilliseconds = todayDate - dobDate;
        const ageInDays = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));
        const ageWeeks = Math.floor(ageInDays / 7);
        const remainingDays = ageInDays % 7;
        const ageInHours = Math.floor(ageInMilliseconds / (1000 * 60 * 60));

        result.innerHTML = `
            Your age is:
            <br>Years: ${ageYears}
            <br>Months: ${ageMonths}
            <br>Weeks: ${ageWeeks}
            <br>Days: ${remainingDays}
            <br>Hours: ${ageInHours}
        `;

        // Show the clear button after displaying the result
        clearBtn.style.display = 'block';
    } catch (error) {
        console.error("Error:", error);
    }
}

function clearInput() {
    const dobInput = document.getElementById('dob');
    const result = document.getElementById('result');
    const clearBtn = document.getElementById('clearBtn');
    if (dobInput && result && clearBtn) {
        dobInput.value = '';
        result.innerHTML = '';
        // Hide the clear button after clearing the input
        clearBtn.style.display = 'none';
    }
}
