// Function to handle dropdowns
function toggleDropdown(titleElement, contentElement, arrowElement) {
    if (titleElement && contentElement && arrowElement) {
        titleElement.addEventListener('click', () => {
            contentElement.classList.toggle('active');
            arrowElement.classList.toggle('rotate');
        });
    }
}

// Experience Section Dropdown
const experienceTitle = document.getElementById("experienceTitle");
const experienceContent = document.getElementById("experienceContent");
const experienceArrow = document.getElementById("dropdownArrow");
toggleDropdown(experienceTitle, experienceContent, experienceArrow);

// Skill Section Dropdown
document.querySelectorAll('.skill-title').forEach(skillTitle => {
    const content = skillTitle.nextElementSibling;
    const arrow = skillTitle.querySelector('.dropdown-arrow');
    toggleDropdown(skillTitle, content, arrow);
});

// Skillset Dropdown
const skillsetTitle = document.getElementById('skillsetTitle');
const skillsetContent = document.getElementById('skillsetContent');
const skillsetArrow = document.getElementById('skillsetArrow');
toggleDropdown(skillsetTitle, skillsetContent, skillsetArrow);

// Professional Roles Dropdown
const roleTitle = document.getElementById('roleTitle');
const roleContent = document.getElementById('roleContent');
const roleArrow = document.getElementById('roleDropdownArrow');
toggleDropdown(roleTitle, roleContent, roleArrow);