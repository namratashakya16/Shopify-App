
// jQuery(document).ready(function() {


// var jQueryScript = document.createElement('script');  
// jQueryScript.setAttribute('src','https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js');
// document.head.appendChild(jQueryScript);

//     $('body').prepend('<div class="header" id="myHeader"><h2>Thank you for reading WeeklyHow\'s Tutorial!</h2></div>');
//   $('head').prepend('<style>.header { padding: 10px 16px; background: #555; color: #f1f1f1; } .content { padding: 16px; } .sticky { position: fixed; top: 0; width: 100%} .sticky + .content { padding-top: 102px; }</style>');

//   var header = document.getElementById("myHeader");
//   var sticky = header.offsetTop;

//   window.onscroll = function() { 
//     if (window.pageYOffset > sticky) {
      
//       header.classList.add("sticky");
//     } else {    
//       header.classList.remove("sticky");
//     }
//   };



// });

if ($('body').hasClass('template-cart')) {


  jQuery.getJSON('/cart.js', function(cart) {
   jQuery('table > tbody .cart__row').each(function(index,p) {

     $('.cart__remove').append('<div ><br> <p class="cart_edit"><a class="quick-edit btn call" data-handle="'+cart.items[index].handle+'" href="javascript:void(0);"> <i class="fa fa-edit"></i>Edit variants</a></p></div>');
     $('.cart__remove').append('<style> .cart_edit{ color : #557b97;}</style>');

   });
 });


$(document).ready(function() {

    $.getScript("//cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.js").done(function() {
   quickEdit();
  });
 
  $.getScript('//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js', function() {});
 jQuery('head').append('<link rel="stylesheet" rel="nofollow" href="//cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css" type="text/css" />');
 jQuery('head').append('<link rel="stylesheet" rel="nofollow" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" type="text/css" />');


});
 

  
function quickEdit() {
alert(1);
 
  var cartContent = '<div class="ed-qv-product-images" style="opacity: 0"></div>'+
  '<div class="ed-qv-content">'+
  '<h3>Edit view</h3>'+
  '<div class="holder">'+
  '<h3 class="ed-qv-product-title"></h3>'+
  '<h4 class="ed-qv-product-type"></h4>'+
  '<h5 class="ed-qv-product-price"></h5>'+
  '<h5 class="ed-qv-product-original-price"></h5>'+
  '<hr/>'+
  '<div class="ed-qv-add-to-cart">'+
  '<div class="ed-qv-product-options">'+
  '<input type="hidden" id="ed-removeIndexValue"class="ed-removeIndexValue" value="" >'+
  '</div>'+    
  '<div class="quantity">'+
  '<span>Quantity</span>'+     
  '<input type="number" class="ed-qv-quantity" value="1" min="1">'+
  '</div>'+
  '<input type="submit" class="ed-qv-add-button" value="Save Changes">'+
  '<div class="ed-qv-add-to-cart-response"></div>'+
  '</div>'+
  '<div class="ed-qv-product-description"></div>'+
  '</div>'+
  '<a class="return-to-cart" href="https://cknamrta.myshopify.com/cart"><span>Return To Cart</span></a>'+
  '</div>';

  $('#quick-edit').prepend('<style>#quick-edit{display: flex;height: 100%;justify-content: flex-end;flex-wrap: wrap;position: relative;-ms-overflow-style: -ms-autohiding-scrollbar;.ed-qv-product-images {  width: 60%;  height: auto;  display: inline-block;  position: absolute;  margin: 0 auto;  left: 30px;  top: 0;  height: 100%;}.slick-list, .slick-track {  height: calc(100% - 12px);}.slick-initialized .slick-slide {  display: flex;  flex-direction: column;  justify-content: center;}'+
    ' .slick-slide {  padding: 0 50px;  height: 100%;  position: relative;  img {    margin: 0 auto;    max-height: 100%;    position: absolute;    top: 50%;    left: 50%;    width: auto;    height: auto;    -webkit-transform: translate(-50%,-50%);    transform: translate(-50%,-50%);  }}.slick-dots {  right: auto;  left: 50%;  bottom: 10px;  -webkit-transform: translateX(-50%);  transform: translateX(-50%);  li { margin: 0 8px 0 0; button {  background-color: #cacaca;  width: 12px;  height: 12px;  } &.slick-active button {  background-color: #ff0000;} }}'+
    ' .ed-qv-content {   width: 36%;   display: inline-flex;   float: right;   flex-direction: row;   justify-content: space-between;   height: calc(100% - 40px);   -webkit-transform: translateY(20px);   transform: translateY(20px);   flex-wrap: wrap;   overflow: auto;   box-sizing: border-box;   > * {     width: calc(100% - 25px);     box-sizing: border-box;   } } .ed-qv-product-title {   padding-right: 20px;   text-transform: lowercase;   margin-bottom: 0;   color: #575757; }'+  
    ' .ed-qv-product-type {    color: #a18466;    font-family: "proxima-nova-semibold";    text-transform: lowercase;  }  .ed-qv-product-price, .qv-product-original-price {    display: inline-block;    color: #5a5a5a;    margin-bottom: 0;  }  .ed-qv-product-original-price {    margin-left: 8px;    text-decoration: line-through;    color: #000;  }  .option-selection-title {    display: none;  }  hr {    border-top: 1px solid #f5f5dc;    margin: 15px 0 20px;  }  .quantity {    margin-bottom: 25px;    span {      text-transform: lowercase;      display: inline-block;      min-width: 100px;    }    input[type="number"]{      width: 60px;      text-align: center;      -moz-appearance: textfield;      margin-left: -4px;      padding: 4px;  border: 1px solid #d3d3d3;  &:focus {  outline: none;   border: 1px solid #ff0000;  display: inline-block; } }'+  
    ' input[type=number]::-webkit-inner-spin-button,   input[type=number]::-webkit-outer-spin-button {     -webkit-appearance: none;     margin: 0;   }}.ed-qv-product-options {  > div {    margin-bottom: 8px;  }  span {    text-transform: lowercase;    display: inline-block;    min-width: 100px;  }}.ed-qv-add-button {  display: block;  background-color: #ff0000;  text-transform: uppercase;  letter-spacing: .1em;  text-align: center;  padding: 10px 20px;  border: 0;  width: 100%;  color: #fff;  &:hover {    background-color: #ff0000;  }  &:focus {    background-color: #3a3a3a;    outline: none;  }  &:disabled {    background-color: #ccc;  }}'+
    '.ed-qv-add-to-cart-response { margin-top: 20px;  display: none;  font-family: "proxima-nova-semibold";    &.success, &.error {  display: block;      padding: 8px;      border: 1px solid;    }    &.success {      border-color: #008000;      color: #008000;  a {    color: #000;   text-decoration: underline;  }  }    &.error {      border-color: #ff0000;      color:#ff0000;    }  }  .ed-qv-product-description {    padding: 20px 0 30px;  }    .return-to-cart {    display: inline-block;    text-transform: uppercase;    letter-spacing: .05em;    font-family: "proxima-nova-semibold";    span {      color: #5a5a5a;      border-bottom: 2px solid #5a5a5a;  }    &:hover {  span {color: #ff0000;   border-bottom: 2px solid #ff0000;  }  }  }'+
    ' .view-product {   display: inline-block;   text-transform: uppercase;   letter-spacing: .05em;   font-family: "proxima-nova-semibold";  span {  color: #5a5a5a;  border-bottom: 2px solid #5a5a5a;   } &:hover {  span {   color: #ff0000;  border-bottom: 2px solid #ff0000;     }   } } @media (max-width: 1200px){   .ed-qv-product-images, .qv-content {     width: 50%;   }   .qv-content {  padding-left: 60px;  }  .slick-slide {  padding: 0; } } @media (max-width: 900px){   display: block;   height: calc(100% - 40px);   -webkit-transform: translateY(20px);   transform: translateY(20px);   .ed-qv-product-images { top: 0;     left: 0;     height: 50%;     max-height: 350px;     position: relative;     width: 100%;   }'+
    ' .slick-slide {      position: relative;      img {        max-height: 300px;        margin: 0 auto;        position: relative;        top: auto;        left: auto;        -webkit-transform: none;        transform: none;        height: 100%;        width: auto;      }    }    .slick-dots {      bottom: 0;    }    .ed-qv-content {      width: 100%;      height: auto;      padding: 0 10px 10px 30px;      overflow: auto;      -webkit-transform: none;      transform: none;    }    .slick-initialized .slick-slide {      display: block;      text-align: center;    }    .slick-slide img {      width: auto;      display: inline-block;      max-width: 300px;  }  }}'+
    '</style>')

  $(".quick-edit").click(function () {
    alert(2);
    var removeIndex = $(this).closest('tr').attr("data-cart-item-index"); 
    

    if ($('#quick-edit').length == 0){$("body").append('<div id="quick-edit"></div>');}
    var product_handle = $(this).data('handle');
    
    $('#quick-edit').addClass(product_handle);
    jQuery.getJSON('/products/' + product_handle + '.js', function (product) {
      var title = product.title;
      var type = product.type;
      var price = 0;
      var original_price = 0;
      var desc = product.description;
      var images = product.images;
      var variants = product.variants;
      var options = product.options;
      var url = '/products/' + product_handle;      
         
      $('.ed-removeIndexValue').text(removeIndex);
      $('.ed-qv-product-title').text(title);
      $('.ed-qv-product-type').text(type);
      $('.ed-qv-product-description').html(desc);
      $('.view-product').attr('href', url);
      var imageCount = $(images).length;
      $(images).each(function (i, image) {
        if (i == imageCount - 1) {
          var image_embed = '<div><img src="' + image + '"></div>';
          image_embed = image_embed.replace('.jpg', '_800x.jpg').replace('.png', '_800x.png');
          $('.ed-qv-product-images').append(image_embed);
 
          $('.ed-qv-product-images').slick({
            'dots': false,
            'arrows': false,
            'respondTo': 'min',
            'useTransform': false
          }).css('opacity', '1');
 
        } else {
          image_embed = '<div><img src="' + image + '"></div>';
          image_embed = image_embed.replace('.jpg', '_800x.jpg').replace('.png', '_800x.png');
          $('.ed-qv-product-images').append(image_embed);
        }
      });
      $(options).each(function (i, option) {
        var opt = option.name;
        var selectClass = '.option.' + opt.toLowerCase();
        $('.ed-qv-product-options').append('<div class="option-selection-' + opt.toLowerCase() + '"><span class="option">' + opt + '</span><select class="option-' + i + ' option ' + opt.toLowerCase() + '"></select></div>');
        $(option.values).each(function (i, value) {
          $('.option.' + opt.toLowerCase()).append('<option value="' + value + '">' + value + '</option>');
        });
      });
      $(product.variants).each(function (i, v) {
        if (v.inventory_quantity == 0) {
          $('.ed-qv-add-button').prop('disabled', true).val('Sold Out');
          $('.ed-qv-add-to-cart').hide();
          $('.ed-qv-product-price').text('Sold Out').show();
          return true
        } else {
          price = parseFloat(v.price / 100).toFixed(2);
          original_price = parseFloat(v.compare_at_price / 100).toFixed(2);
          $('.ed-qv-product-price').text('$' + price);
          if (original_price > 0) {
            $('.ed-qv-product-original-price').text('$' + original_price).show();
          } else {
            $('.ed-qv-product-original-price').hide();
          }
          $('select.option-0').val(v.option1);
          $('select.option-1').val(v.option2);
          $('select.option-2').val(v.option3);
          return false
        }
      });
    });
 
    $(document).on("change", "#quick-edit select", function () {
      var selectedOptions = '';
      $('#quick-edit select').each(function (i) {
        if (selectedOptions == '') {
          selectedOptions = $(this).val();
          
        } else {
          selectedOptions = selectedOptions + ' / ' + $(this).val();
          
        }
      });
      jQuery.getJSON('/products/' + product_handle + '.js', function (product) {
        $(product.variants).each(function (i, v) {
         
          if (v.title == selectedOptions) {
            var price = parseFloat(v.price / 100).toFixed(2);
            var original_price = parseFloat(v.compare_at_price / 100).toFixed(2);
            var v_qty = v.inventory_quantity;
            var v_inv = v.inventory_management;
             $('.ed-qv-product-price').text('$' + price);
            $('.ed-qv-product-original-price').text('$' + original_price);
            if (v_inv == null) {
              $('.ed-qv-add-button').prop('disabled', false).val('Add to Cart');
            } else {
              if (v.inventory_quantity < 1) {
                $('.ed-qv-add-button').prop('disabled', true).val('Sold Out');
              } else {
                $('.ed-qv-add-button').prop('disabled', false).val('Add to Cart');
              }
            }
          }
        });
      });
    });
    $.fancybox({
      href: '#quick-edit',
      maxWidth: 1040,
      maxHeight: 600,
      fitToView: true,
      width: '75%',
      height: '70%',
      autoSize: false,
      closeClick: false,
      openEffect: 'none',
      closeEffect: 'none',
      'beforeLoad': function () {
        var product_handle = $('#quick-edit').attr('class');
        $(document).on("click", ".ed-qv-add-button", function () {
          var qty = $('.ed-qv-quantity').val();
          var selectedOptions = '';
          var var_id = '';
          $('#quick-edit select').each(function (i) {
            
            if (selectedOptions == '') {
              selectedOptions = $(this).val();
            } else {
              selectedOptions = selectedOptions + ' / ' + $(this).val();
            } 
          });
          jQuery.getJSON('/products/' + product_handle + '.js', function (product) {
            $(product.variants).each(function (i, v) {
       
             var oldIndex= $("#ed-removeIndexValue").text();
             var parseIndex=  parseInt(oldIndex);
              var myjson=JSON.stringify('oldIndex');
              alert(oldIndex);
              if (v.title == selectedOptions) {
              var_id = v.id;   
                var changeData={
                quantity: 0,
                line: parseIndex
                }
                $.ajax({
                  method: 'POST',
                  url: '/cart/change.js',
                  dataType: 'json',
                  data: changeData,
                  success: function(data)
                  {
                    console.log(data);
    
                    processCart();

                   }
                });
   
              }
            });
          });
          function processCart() {
             
            jQuery.post('/cart/add.js', {
              quantity: qty,
              id: var_id
            },
                        null,
                        "json"
                       ).done(function () {
              $('.ed-qv-add-to-cart-response').addClass('success').html('<span>' + $('.ed-qv-product-title').text() + ' has been added to your cart. <a href="/cart">Click here to view your cart.</a>');
            })
            .fail(function ($xhr) {
              var data = $xhr.responseJSON;
              $('.ed-qv-add-to-cart-response').addClass('error').html('<span><b>ERROR: </b>' + data.description);
            });
          }
        });
        $('.fancybox-wrap').css('overflow', 'hidden !important');
      },
      'afterShow': function () {
        $('#quick-edit').hide().html(cartContent).css('opacity', '1').fadeIn(function () {
          $('.ed-qv-product-images').addClass('loaded');
        });
      },
      'afterClose': function () {
        $('#quick-edit').removeClass().empty();
      }
    });
  });
};
$(window).resize(function () {
  if ($('#quick-edit').is(':visible')) {
    $('.ed-qv-product-images').slick('setPosition');
  }
});
}



