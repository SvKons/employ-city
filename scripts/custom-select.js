const customSelect = () => {
    const selectButton = document.querySelector('.custom-select__button');
    const dropdown = document.querySelector('.custom-select__dropdown');
    const selectItems = document.querySelectorAll('.custom-select__item');

    selectButton.addEventListener('click', function () {
        dropdown.classList.toggle('active');
        selectButton.classList.toggle('active');
    });

    const systemTypeInput = document.getElementById('system_type');
    selectItems.forEach(item => {
        item.addEventListener('click', function () {
            selectButton.textContent = this.textContent;
            systemTypeInput.value = this.textContent;
            dropdown.classList.remove('active');
            selectButton.classList.remove('active');
        });
    });

    document.addEventListener('click', function (e) {
        if (!e.target.closest('.custom-select')) {
            dropdown.classList.remove('active');
            selectButton.classList.remove('active');
        }
    });
};
customSelect();
