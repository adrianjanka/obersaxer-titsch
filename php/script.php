<?php
function fetchCardData() {
  $dir = '../cards/';
  $directories = array_filter(glob($dir . '*'), 'is_dir');
  $cards = [];

  foreach ($directories as $directory) {
    $dirName = basename($directory);
    $frontImage = $dir . $dirName . '/' . $dirName . '.jpg';
    $backImage = $dir . $dirName . '/' . $dirName . '2.jpg';

    if (file_exists($frontImage) && file_exists($backImage)) {
      $cards[] = [
        'front' => str_replace("..", "", $frontImage),
        'back' => str_replace("..", "", $backImage),
      ];
    }
  }

  return json_encode($cards);
}

header('Content-Type: application/json');
echo fetchCardData();
?>