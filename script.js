const rpmSlider = document.getElementById('rpm-slider');
const spinnerValue = document.getElementById('spinner');
const rpmValue = document.getElementById('rpm-value');

const convertRpmToSec = (rpm) => {
    let secs = (60/rpm);
    return `${secs}s`
}

const handleRpmChange = (e) => {
    let secVal = convertRpmToSec(rpmSlider.value);
    spinnerValue.style.setProperty("animation-duration", secVal);
    rpmValue.innerHTML = `${rpmSlider.value} RPM`;   
}

rpmSlider.addEventListener('change', handleRpmChange)