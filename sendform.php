<?php

/* https://api.telegram.org/bot5573308117:AAHNg1UBZs5QMMJjzXdCCUktplISh8s9LSg/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */


$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$comments = $_POST['user_comments'];
$token = "5573308117:AAHNg1UBZs5QMMJjzXdCCUktplISh8s9LSg";
$chat_id = "-647938671";
$arr = array(
  'Имя: ' => $name,
  'Телефон: ' => $phone,
  'Комментарий' => $comments
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: index.html');
} else {
  echo "Error";
}

?>

