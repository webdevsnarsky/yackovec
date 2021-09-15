
// popup форма
// $(document).ready(function() {

// 	$('.header-contacts__button, .contacts-button').on("click", function() {
// 		$('.overlay, .popup').fadeIn()
// 	});
// 	$('.popup-close').on("click", function() {
// 		$('.overlay, .popup').fadeOut()
// 	});
// });

// Форма благодарности за заказ дзвонка
$(document).ready(function() {
  $('.thanks-close, .close-button').on("click", function() {
    $('.thanks').fadeOut();
  });
});

// Отправка форм Ajax
$(document).ready(function() {

  $(".post-form").submit(function() {
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize()
    }).done(function() {
      $('.overlay, .popup').fadeOut();
      $('.thanks').fadeIn();
    });
    return false;
  });
});
