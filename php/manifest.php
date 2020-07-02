<?php
	$siteName = 'bodega1.html';
	$name = 'bodega1';
	$pageDescription = 'Venta de vinos españoles';

	$manifest = [
		"name" => $siteName,
		"gcm_user_visible_only" => true,
		"short_name" => $name,
		"description" => $pageDescription,
		"start_url" => "/bodega1.html",
		"display" => "standalone",
		"orientation" => "portrait",
	 ];

	header('Content-Type: application/json');
	echo json_encode($manifest);
?>