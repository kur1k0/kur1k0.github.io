let brown_noise_clicked_status = false; // 使用let定义变量
let calming_rain_clicked_status = false; // 使用let定义变量

const brown_noise_audio = new Audio("https://github.com/kur1k0/kur1k0.github.io/raw/refs/heads/main/hsiao_yu/audio/brown_noise.mp3"); // 创建音频实例
const calming_rain_audio = new Audio("https://github.com/kur1k0/kur1k0.github.io/raw/refs/heads/main/hsiao_yu/audio/calming_rain.mp3"); // 创建音频实例

brown_noise_audio.loop = true;

document.getElementById('brown_noise').addEventListener('click', () => {
    brown_noise_clicked_status = !brown_noise_clicked_status; // 切换状态

    if (brown_noise_clicked_status) {
        brown_noise_audio.play(); // 播放音频
        console.log('音频开始播放');
    } else {
        brown_noise_audio.pause(); // 停止音频
        brown_noise_audio.currentTime = 0; // 重置播放位置
        console.log('音频停止播放');
    }
});

document.getElementById('calming_rain').addEventListener('click', () => {
    calming_rain_clicked_status = !calming_rain_clicked_status; // 切换状态

    if (calming_rain_clicked_status) {
        calming_rain_audio.play(); // 播放音频
        console.log('音频开始播放');
    } else {
        calming_rain_audio.pause(); // 停止音频
        calming_rain_audio.currentTime = 0; // 重置播放位置
        console.log('音频停止播放');
    }
});

// 音量调节
document.getElementById('calming_rain_volume').addEventListener('input', (event) => {
    calming_rain_audio.volume = event.target.value; // 设置音量
});

// 音量调节
document.getElementById('brown_noise_volume').addEventListener('input', (event) => {
    brown_noise_audio.volume = event.target.value; // 设置音量
});