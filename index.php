
<?php
require_once("inc/functions.php");

$requests = $_GET;
$hmac = $_GET['hmac'];
$serializeArray = serialize($requests);
$requests = array_diff_key($requests, array('hmac' => ''));
ksort($requests);


$parsedUrl = parse_url('https://'.$requests['shop']);
$host = explode('.', $parsedUrl['host']);
$subdomain = $host[0];


$shop = $subdomain;
$token = "token";
$shopUrl='shop url'; //like xyz.myshopify.com
echo "<b>Product list :-</b><br><br>";
// if user not have charged for this app then create charge_id

if( !isset($_GET['charge_id'])){

	$array = array(
		'recurring_application_charge' => array(
			'name' => 'Test Plan',		
			'price' => 15.0,
			'trial_days' => 30,
			'test' => true,
			'return_url' => 'https://'. $shopUrl .'/admin/apps/test-app-1794'
		)
	);
	$charge = shopify_call($token, $shop, "/admin/api/2019-10/recurring_application_charges.json", $array, 'POST');
	$charge = json_decode($charge['response'], JSON_PRETTY_PRINT);
	
	echo '<script>top.window.location = "'. $charge['recurring_application_charge']['confirmation_url'] .'"</script>';
	 die();
}
else{

$products_list = shopify_call($token, $shop, "/admin/api/2019-07/products".".json", array(), 'GET');
$product = json_decode($products_list['response'], JSON_PRETTY_PRINT);
$productlist = $product['products'];

foreach($productlist as $product){
	    
	    $images =   shopify_call($token, $shop, "/admin/api/2019-07/products/".$product['id']."/images.json", array(), 'GET');
    	$image = json_decode($images['response'], JSON_PRETTY_PRINT); ?>
		   
	     
 <?php
}

	$charge_id = $_GET['charge_id'];

	$array = array(
		'recurring_application_charge' => array(
			"id" => $charge_id,
		    "name" => "Test Plan",
		    "api_client_id" => rand(1000000, 9999999),
		    "price" => 15.00,
		    "status" => "accepted",
		    "return_url" => "https://xyz.myshopify.com/admin/apps/test-app-1794",
		    "billing_on" => null,
		    "test" => true,
		    "activated_on" => null,
		    "trial_ends_on" => 30,
		    "cancelled_on" => null,
		    "trial_days" => 30,
		    "decorated_return_url" => "https://xyz.myshopify.com/admin/apps/test-app-1794/?charge_id=" . $charge_id
		)
	);

	$activate = shopify_call($token, $shop, "/admin/api/2019-10/recurring_application_charges/".$charge_id."/activate.json", $array, 'POST');
	$activate = json_decode($activate['response'], JSON_PRETTY_PRINT);
    


$theme = shopify_call($token , $shop, "/admin/api/2019-07/themes.json",  array(), 'GET');
$theme = json_decode($theme['response'], JSON_PRETTY_PRINT);


foreach ($theme as $current_them) {
	foreach ($current_them as $key => $value) {

		$them_array=array(
			'assets'=> array(
				'key'=>'templates/index.liquid',
				'value'=>'hello check by api',
			)
		);


		$theme = shopify_call($token , $shop, "/admin/api/2019-07/themes.json/". $value['id']."/assets.json",  array(), 'GET');
        $theme = json_decode($theme['response'], JSON_PRETTY_PRINT);

	}
}


$variants= shopify_call($token, $shop, "/admin/api/2020-01/variants.json", array(), 'GET');
$variants = json_decode($variants['response'], JSON_PRETTY_PRINT);
// print("<pre>".print_r($variants,true)."</pre>");


$update_variants = array(
  "variant"=> array(
    "id"=> 32794368671877,
    "option1"=> "updated title",
    "price"=> 90.00  
  ));


$updated_customer= shopify_call($token, $shop, "/admin/api/2020-01/variants/32794368671877.json", $update_variants, 'PUT');
$updated_customer = json_decode($updated_customer['response'], JSON_PRETTY_PRINT);



$variants= shopify_call($token, $shop, "/admin/api/2020-01/variants.json", array(), 'GET');
$variants = json_decode($variants['response'], JSON_PRETTY_PRINT);

$t=time();

$price_rule_arr = array(
  "price_rule"=> array(
    "title"=>  "SUMMERSALE10OFF",
    "target_type"=> "line_item",
    "target_selection"=>  "all",
    "allocation_method"=>  "across",
    "value_type"=> "percentage",
    "value"=> "-10.0",
    "customer_selection"=>  "all",
    "prerequisite_quantity_range" => array(
               "greater_than_or_equal_to"=> 3,
     ),   
    "allocation_limit"=> 3,
    "starts_at"=> date("Y-m-d",$t)
  ) );


$price_rule= shopify_call($token, $shop, "/admin/api/2020-01/price_rules.json", $price_rule_arr, 'POST');
$price_rule = json_decode($price_rule['response'], JSON_PRETTY_PRINT);
 


 foreach ($price_rule as $rule_value) {
$permitted_chars = 'QWERTYUIOPLKJHGFDSAZXCVBNM';
$code=substr(str_shuffle($permitted_chars), 0, 10);
$rul_id=$rule_value['id'];
$dis_code_arr = array(
  "discount_code"=> array(
    "code"=> $code
  ));

$dis_code = shopify_call($token, $shop, "/admin/api/2020-01/price_rules/".$rul_id."/discount_codes.json", $dis_code_arr, 'POST');
$dis_code = json_decode($dis_code['response'], JSON_PRETTY_PRINT);


}



$checkout = array(
  "checkout"=> array(
    "line_items"=> array(
      array(
        "variant_id"=> 32879241035909,
        "quantity"=> 5
      )
  )
  )
);
print_r($checkout);
$checkout_res = shopify_call($token, $shop, "/admin/api/2020-01/checkouts.json", $checkout, 'POST');
$checkout_res = json_decode($checkout_res['response'], JSON_PRETTY_PRINT);
print_r($checkout_res);


$array = array(
	'script_tag' => array(
		'event' => 'onload', 
		'src' => 'https://localhost/shopifyapi/inc/shopify.js'// path where u keep js file
	)
);
$scriptTag = shopify_call($token, $shop, "/admin/api/2019-07/script_tags.json", $array, 'POST');
$scriptTag = json_decode($scriptTag['response'], JSON_PRETTY_PRINT);





} 



