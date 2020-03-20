<?php
// Set variables for our request
$shop = $_GET['shop'];
$api_key = "placed ur api key";
$scopes = "read_orders,write_products,write_script_tags,read_themes,write_themes,write_marketing_events,read_marketing_events,read_customers,write_customers,read_discounts,write_discounts,read_checkouts,write_checkouts,write_price_rules ";
$redirect_uri = "http://localhost/shopifyapi/generate_token.php";

// Build install/approval URL to redirect to
$install_url = "https://" . $shop . ".myshopify.com/admin/oauth/authorize?client_id=" . $api_key . "&scope=" . $scopes . "&redirect_uri=" . urlencode($redirect_uri);

// Redirect
header("Location: " . $install_url);
die();
