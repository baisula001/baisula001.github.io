<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    $to = "your@email.com"; // 替换为您的邮箱
    $subject = "新的联系表单提交";
    $body = "姓名: $name\n邮箱: $email\n\n留言:\n$message";
    $headers = "From: $email";
    
    if (mail($to, $subject, $body, $headers)) {
        echo "消息发送成功！";
    } else {
        echo "消息发送失败，请稍后再试。";
    }
} else {
    echo "无效的请求方法。";
}
?>