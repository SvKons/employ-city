const rangeSlider = () => {
    const rangeSlider = document.getElementById('rangeSlider');
    const rangeValue = document.querySelector('.range-wrapper__value');
    rangeSlider.addEventListener('input', function () {
        rangeValue.textContent = this.value + '%';
    });
    rangeSlider.dispatchEvent(new Event('input'));
};
rangeSlider();
