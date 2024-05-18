document.getElementById('customImage').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const preview = document.getElementById('imagePreview');
            preview.src = e.target.result;
            preview.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById('buyButton').addEventListener('click', function() {
    const color = document.getElementById('color').value;
    const size = document.getElementById('size').value;
    const material = document.getElementById('material').value;

    alert(`您选择了颜色：${color}，大小：${size}，材质：${material}。`);

    // 显示回收信息
    document.getElementById('recycleInfo').style.display = 'block';
});

document.getElementById('alipayButton').addEventListener('click', function() {
    // 调用支付宝支付接口
    alert('支付宝支付功能正在开发中...');
});

document.getElementById('wechatButton').addEventListener('click', function() {
    // 调用微信支付接口
    alert('微信支付功能正在开发中...');
});
