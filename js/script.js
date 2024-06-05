$(document).ready(function () {
	$(".button-list-phone button").click(function () {
		$(".menu-phone").toggle();
	});

	/* function tìm kiếm sản phẩm
    $(".product-list").filter("#name-product");
    $("#buy").click(function mua(){
        $name_sp=$("#name-product").text().toLowerCase();
        console.log($name_sp);
    })
    */
	//thêm sản phẩm vào giỏ

	// function thanh toans
});
//Check dang ky
function checkUserSignup() {
	var correct_user = /^[A-Za-z][A-Za-z0-9]{7,29}$/;
	var user = document.getElementById("username");
	var user_val = useer.value;
	if (user_val == "" || correct_user.test(user_val) == false) {
		user.classList.add("is-invalid");
		return false;
	} else {
		user.classList.remove("is-invalid");
		user.classList.add("is-valid");
		return true;
	}
}
function checkEmailSigup() {
	var correct_email =
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	var email = document.getElementById("email_signup");
	var email_val = email.value;
	if (email_val == "" || correct_email.test(email_val) == false) {
		email.classList.add("is-invalid");
		return false;
	} else {
		email.classList.remove("is-invalid");
		email.classList.add("is-valid");
		return true;
	}
}
function checkPasswordSigup() {
	var correct_password =
		/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8})$/;
	var pass = document.getElementById("password_signup");
	var pass_val = pass.value;
	if (pass_val == "" || correct_password.test(pass_val) == false) {
		pass.classList.add("is-invalid");
		return false;
	} else {
		pass.classList.remove("is-invalid");
		pass.classList.add("is-valid");
		return true;
	}
}
//check form booking

var Bossname = document.getElementById("Bossname");
var Bosstype = document.getElementById("Bosstype");
var Bossweight = document.getElementById("Bossweight");
function checknameBookingForm() {
	var name_correct =
		/^[A-Za-z\sAÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬBCDĐEÈẺẼÉẸÊỀỂỄẾỆFGHIÌỈĨÍỊJKLMNOÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢPQRSTUÙỦŨÚỤƯỪỬỮỨỰVWXYỲỶỸÝỴZaàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz]+$/;
	var Bossname_val = Bossname.value;
	//check bossname
	if (Bossname_val == "" || name_correct.test(Bossname_val) == false) {
		Bossname.classList.add("is-invalid");
		return false;
	} else {
		Bossname.classList.remove("is-invalid");
		Bossname.classList.add("is-valid");
		return true;
	}
}

//check bosstype
function checktypeBookingForm() {
	var Bosstype_val = Bosstype.value;
	if (Bosstype_val == "") {
		Bosstype.classList.add("is-invalid");
		return false;
	} else {
		Bosstype.classList.remove("is-invalid");
		Bosstype.classList.add("is-valid");
		return true;
	}
}
//check boss weight
function checkweightBookingForm() {
	var Bossweight_val = Bossweight.value;
	var weight_correct = /^[0-9]+$/;
	if (
		Bossweight_val == "" ||
		weight_correct.test(Bossweight_val) == false
	) {
		Bossweight.classList.add("is-invalid");
		return false;
	} else {
		Bossweight.classList.remove("is-invalid");
		Bossweight.classList.add("is-valid");
		return true;
	}
}
function completeBooking() {
	if (
		checknameBookingForm() == true &&
		checktypeBookingForm() == true &&
		checkweightBookingForm() == true
	) {
		alert(
			"Đặt lịch thành công! Bạn có thể kiểm tra lại thông tin trong giỏ hàng."
		);
	}
}

//Giỏ hàng
function increase(a) {
	return (a += 1);
}
function decrease(a) {
	return (a -= 1);
}
function increase_count() {
	var current_count_product =
		document.getElementById("current_count").value;
	document.getElementById("current_count").value = increase(
		parseInt(current_count_product)
	);
	var giatien = document.getElementById("giatien").innerHTML;
	var tinhtien = giatien * increase(parseInt(current_count_product));
	console.log(tinhtien);
	document.getElementById("total").innerHTML = tinhtien + ".000";
}
function decrease_count() {
	var current_count_product =
		document.getElementById("current_count").value;
	if (parseInt(current_count_product) <= 0) {
		document.getElementById("current_count").value = 0;
		document.getElementById("total").innerHTML = 0;
	} else {
		document.getElementById("current_count").value = decrease(
			parseInt(current_count_product)
		);
		var giatien = document.getElementById("giatien").innerHTML;
		var tinhtien = giatien * decrease(parseInt(current_count_product));
		console.log(tinhtien);
		document.getElementById("total").innerHTML = tinhtien + ".000";
	}
}

//Check customer-detail
function checkCustomerDetailName() {
	var name_correct =
		/^[A-Za-z\sAÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬBCDĐEÈẺẼÉẸÊỀỂỄẾỆFGHIÌỈĨÍỊJKLMNOÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢPQRSTUÙỦŨÚỤƯỪỬỮỨỰVWXYỲỶỸÝỴZaàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz]+$/;
	var name = document.getElementById("name");
	var name_val = document.getElementById("name").value;
	if (name_val == "" || name_correct.test(name_val) == false) {
		name.classList.add("is-invalid");
		return false;
	} else {
		name.classList.remove("is-invalid");
		name.classList.add("is-valid");
		return true;
	}
}
function checkCustomerDetailPhone() {
	var correct_phone =
		/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;
	var phone = document.getElementById("phonenumber");
	var phone_val = parseInt(phone.value);
	if (phone_val == "" || correct_phone.test(phone_val) == false) {
		phone.classList.add("is-invalid");
		return false;
	} else {
		phone.classList.remove("is-invalid");
		phone.classList.add("is-valid");
		return true;
	}
}
function checkCustomerDetailLocate() {
	var locate_cus = document.getElementById("address");
	var locate_val = locate_cus.value;
	if (locate_val == "") {
		locate_cus.classList.add("is-invalid");
		return false;
	} else {
		locate_cus.classList.remove("is-invalid");
		locate_cus.classList.add("is-valid");
		return true;
	}
}
function checkCustomerDetailEmail() {
	var correct_email =
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	var email = document.getElementById("email");
	var email_val = email.value;
	if (email_val == "" || correct_email.test(email_val) == false) {
		email.classList.add("is-invalid");
		return false;
	} else {
		email.classList.remove("is-invalid");
		email.classList.add("is-valid");
		return true;
	}
}
function checkCity() {
	var city = document.getElementById("city");
	var city_val = city.value;
	if (city_val == "") {
		city.classList.add("is-invalid");
		return false;
	} else {
		city.classList.remove("is-invalid");
		city.classList.add("is-valid");
		return true;
	}
}
function checkDistrict() {
	var district = document.getElementById("district");
	var district_val = district.value;
	if (district_val == "") {
		district.classList.add("is-invalid");
		return false;
	} else {
		district.classList.remove("is-invalid");
		district.classList.add("is-valid");
		return true;
	}
}
function checkWard() {
	var ward = document.getElementById("ward");
	var ward_val = ward.value;
	if (ward_val == "") {
		ward.classList.add("is-invalid");
		return false;
	} else {
		ward.classList.remove("is-invalid");
		ward.classList.add("is-valid");
		return true;
	}
}

function verify() {
	if (
		checkCustomerDetailName() == true &&
		checkCustomerDetailPhone() == true &&
		checkCustomerDetailLocate() == true &&
		checkCustomerDetailEmail() == true &&
		checkCity() == true &&
		checkDistrict() == true &&
		checkWard() == true
	) {
		document.getElementById("payment").style.display = "block";
	} else {
		alert("Vui lòng điền đầy đủ thông tin !");
	}
}

//check contact-form
function checkMessage() {
	var message = document.getElementById("message");
	var message_val = message.value;
	if (message_val == "") {
		document.getElementById("error_message").style.display = "block";
	} else {
		document.getElementById("error_message").style.display = "none";
	}
}
function sendContactForm() {
	var noidung = document.getElementById("message");
	var message = noidung.value;
	if (
		checkCustomerDetailName() == true &&
		checkCustomerDetailPhone() == true &&
		checkCustomerDetailEmail() == true &&
		message != ""
	) {
		$("#error_message").hide();
		alert(
			"Cảm ơn đã đóng góp ý kiến ! Chúng tôi sẽ sớm liên hệ với bạn"
		);
	}
}

// cart hover
var cards = document.querySelectorAll(".product-box");
[...cards].forEach((cards) => {
	cards.addEventListener("mouseover", function () {
		cards.classList.add("is-hover");
	});
	cards.addEventListener("mouseleave", function () {
		cards.classList.remove("is-hover");
	});
});
function compareString(a, b) {
	if (a.indexOf(b) > -1 || b.indexOf(a) > -1) {
		return true;
	} else return false;
}
//searchProduct
$(document).ready(function () {
	$("#nameProductSearch").on("keyup", function () {
		var q = document
			.getElementById("nameProductSearch")
			.value.toLowerCase();
		var product = document.querySelectorAll("#product-infor");
		var productName = document.querySelectorAll("#name-product");
		productName.forEach((a) => {
			$(a).parent().parent().filter(function () {
				$(a).parent().parent().toggle($(a).text().toLowerCase().indexOf(q) > -1)
			});
		});
	});
});
