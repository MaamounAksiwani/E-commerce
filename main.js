$(function() {
    /// Fetch Categories
    $.getJSON('Categories.json', function(category) {
        let cat = "";
        for (let c in category) {
            cat += `<div>
            <img src='${category[c].Img}' alt='Men Not-Found'>
            <h4>${category[c].description}</h4>
        </div>`
        }
        $('.view-category').html(cat);
    });
    /// Fetch Top Products Sales
    $.getJSON("data.json", function(data, i) {
        let contact = "";
        for (let x in data) {
            contact +=
                `<div class='view-products'>
                <div class='main-img'>
                    <img src='${data[x].Img}' alt='woman'>
                </div>
                        <div class='infoprodaut'>
                        <input type='text' class='myid' value='${data[x].id}' hidden>
                            <p>${data[x].titelProdact}</p>
                            <p>USD : $${data[x].Price} <del>$${data[x].OldPrice}</del></p>
                            <select>
                            <option value="0">Quantity</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </select>
                            <button class='viewid'>Add Card</button>
                        </div>
                </div>
            </div>`
        }
        $('.MaintopSalesProdact').html(contact);

        $(".viewid").on('click', (e) => {

        })

    });

    /// Fetch Man
    $.getJSON('Fashion.json', function(Men) {
        let men = '';
        for (let m in Men) {
            men += `<div class='view-products'>
            <div class='main-img'>
                <img src='${Men[m].Img}' alt='woman'>
            </div>
                    <div class='infoprodaut'>
                    
                    <input type='text' class='myid' value='${Men[m].id}' hidden>
                    <p class='prdactName'>${Men[m].prodactName}</p>
                        <p>${Men[m].titelProdact}</p>
                        <p>USD : $${Men[m].Price} <del>$${Men[m].OldPrice}</del></p>
                        <select>
                        <option value="0">Quantity</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                        <button id='addtoCardF_m'">Add Card</button>
                    </div>
            </div>
        </div>`
        }
        $('.Fash_Man').html(men);
    })


    ///Fetch Woman 
    $.getJSON('woman.json', function(Men) {
        let viewResult = '';
        for (let m in Men) {
            viewResult += `<div class='view-products'>
            <div class='main-img'>
                <img src='${Men[m].Img}' alt='woman'>
            </div>
                    <div class='infoprodaut'>
                    
                    <input type='text' class='myid' value='${Men[m].id}' hidden>
                    <p class='prdactName'>${Men[m].prodactName}</p>
                        <p>${Men[m].titelProdact}</p>
                        <p>USD : $${Men[m].Price} <del>$${Men[m].OldPrice}</del></p>
                        <select>
                        <option value="0">Quantity</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                        <button>Add Card</button>
                    </div>
            </div>
        </div>`
        }
        $(".Fash_Woman").html(viewResult);

    });

    $.getJSON('kid.json', function(Men) {
        let viewResult = '';
        for (let m in Men) {
            viewResult += `<div class='view-products'>
            <div class='main-img'>
                <img src='${Men[m].Img}' alt='woman'>
            </div>
                    <div class='infoprodaut'>
                    
                    <input type='text' class='myid' value='${Men[m].id}' hidden>
                    <p class='prdactName'>${Men[m].prodactName}</p>
                        <p>${Men[m].titelProdact}</p>
                        <p>USD : $${Men[m].Price} <del>$${Men[m].OldPrice}</del></p>
                        <select>
                        <option value="0">Quantity</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                        <button>Add Card</button>
                    </div>
            </div>
        </div>`
        }
        $(".Fash_kid").html(viewResult);
    });
    $.getJSON('laptop.json', function(Men) {
        let viewResult = '';
        for (let m in Men) {
            viewResult += `<div class='view-products'>
            <div class='main-img'>
                <img src='${Men[m].Img}' alt='woman'>
            </div>
                    <div class='infoprodaut'>
                    
                    <input type='text' class='myid' value='${Men[m].id}' hidden>
                    <p class='prdactName'>${Men[m].prodactName}</p>
                        <p>${Men[m].titelProdact}</p>
                        <p>USD : $${Men[m].Price} <del>$${Men[m].OldPrice}</del></p>
                        <select>
                        <option value="0">Quantity</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                        <button class=''>Add Card</button>
                    </div>
            </div>
        </div>`
        }
        $(".Laptop").html(viewResult);

    });


    $.getJSON('viedo_games.json', function(Men) {
        let viewResult = '';
        for (let m in Men) {
            viewResult += `<div class='view-products'>
            <div class='main-img'>
                <img src='${Men[m].Img}' alt='woman'>
            </div>
                    <div class='infoprodaut'>
                    
                    <input type='text' class='myid' value='${Men[m].id}' hidden>
                    <p class='prdactName'>${Men[m].prodactName}</p>
                        <p>${Men[m].titelProdact}</p>
                        <p> USD : $${Men[m].Price} <del>$${Men[m].OldPrice}</del></p>
                        <select>
                        <option value="0">Quantity</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                        <button id='test'>Add Card</button>
                    </div>
            </div>
        </div>`
        }
        $(".video_games").html(viewResult);
    });

    $.getJSON('baby.json', function(Men) {
        let viewResult = '';
        for (let m in Men) {
            viewResult +=
                `<div class='view-products'>
            <div class='main-img'>
                <img src='${Men[m].Img}' alt='woman'>
            </div>
                    <div class='infoprodaut'>

                    <input type='text' class='myid' value='${Men[m].id}' hidden>
                        <p class='prdactName'>${Men[m].prodactName}</p>
                        <p>${Men[m].titelProdact}</p>
                        <p>USD : $${Men[m].Price} <del>$${Men[m].OldPrice}</del></p>
                        <select name="cars" id="cars">
                        <option value="0">Quantity</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                        <button id='kidsAndBaby'>Add Card</button>
                    </div>
            </div>
        </div>`
        }
        $(".baby").html(viewResult);
    });


    /* Button To Scroll */
    window.onscroll = () => scroll();

    const scroll = () => {
        const button_scroll = document.querySelector('.scroll');
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            button_scroll.style.display = 'block';
        } else {
            button_scroll.style.display = 'none';
        }
    }

    $('.scroll').on('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })


    $('#btn').on('click', () => {

    })

    $('.moon').on('click', () => {
        $('.moon').css('display', 'none');
        $(".sun").css('display', 'inline-block');
    });

    $('.sun').on('click', () => {
        $('.sun').css('display', 'none');
        $(".moon").css('display', 'inline-block');
    });


    const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('#password');

    $('#togglePassword').on('click', () => {
        if (password.getAttribute('type') === 'password') {
            password.setAttribute('type', 'text');
        } else {
            password.setAttribute('type', 'password');
        }
    });

    /// show and hide the login form
    $(".fa-times").on('click', () => {
        $('.form-login').fadeOut(300);
    });

    $('#btn').on('click', () => {
        $('.form-login').fadeIn(300);
    });


    /// valdtion form
    let UsersLogin = [];
    $("#form").on('submit', (e) => {
        e.preventDefault();
        let message = [];
        let myusers = {
            name: 'user',
            password: '123456'
        }
        UsersLogin.push(myusers);
        let convertToString = JSON.stringify(myusers);
        localStorage.setItem('allusers', convertToString);
        let viewData = JSON.parse(localStorage.getItem('allusers'));
        if (localStorage.length > 0) {
            console.log('Yes');
        } else {
            console.log('No');
        }

        if ($('#name').val() == "") {

            message.push("Enter Username");

        } else if ($("#name").val() !== viewData.name) {

            message.push("not exist the username");

        } else {
            $('#form-login').hide();
        }

        if ($("#password").val() == "") {

            message.push("Enter Password");

        } else if ($("#password").val().length < 4) {

            message.push("Password must be at least 4 characters long");

        } else if ($('#name').val() === viewData.name && $('#password').val() !== viewData.password) {
            message.push("incorrect password");
        }

        if (message.length > 0) {
            $("#showError").text(message.join(", "));
            $("#showError").css("display", "block");
        } else {
            $("#showError").text("");
            $('.form-login').fadeOut(300);
            $("#usernameinfo").show();
            $("#usernameinfo span").text("Hi Mr." + viewData.name);
            $(".btn_info").hide();
            $("#name").val("");
            $("#password").val("");
        }
        $("#logout").on('click', () => {
            localStorage.clear();
            $(".btn_info").show();
            $('#usernameinfo').hide();
        })
    });



    /// Show Reg form 
    $("#reg").on('click', () => {

        $('.form-reg').fadeIn(300);
    });

    $(".close").on('click', () => {
        $('.form-reg').fadeOut(300);
    });



    /// Form reg
    let allUers = [];
    $('#form_reg').on('submit', (e) => {
        e.preventDefault();
        let messageReg = [];


        if ($("#name_reg").val() === "") {
            messageReg.push("please enter Username");
        }


        if ($("#password_reg").val() === "") {

            messageReg.push("please enter Password")

        } else if ($("#password_reg").val().length < 4) {

            messageReg.push('Password must be at least 4 characters')
        }

        if ($("#password_com").val() === "") {

            messageReg.push("please enter Confirm Password");

        } else if ($("#password_reg").val() !== $("#password_com").val()) {

            messageReg.push("password do not match");
        }

        if (messageReg.length > 0) {
            $("#showErrorReg").text(messageReg.join(", "));
        } else {
            const username_reg = $("#name_reg").val();
            const password_reg = $("#password_reg").val();
            if (username_reg && password_reg) {
                localStorage.setItem('name', username_reg);
                localStorage.setItem('password', password_reg);
            }
            $(".form-reg").fadeOut(300);

            $(".btn_info").hide();
            $("#usernameinfo").show();
            $(".viewinfo").text("Hi Mr." + localStorage.getItem('name'));
            $("#name_reg").val("");
            $("#password_reg").val("");
            $("#password_com").val("");

        }
        $("#logout").on('click', () => {
            localStorage.clear();
            //  $("#password_reg").text('');
            //  $("#name_reg").text('');
            //  $("#password_com").text('');
            $(".btn_info").show();
            $('#usernameinfo').hide();
        })
    })

    /// show all items in card details

    $("#cart-btn").on('click', () => {
        $(".item-card").toggle();
    })

    $(".fa-window-close").on('click', () => {
        $(".item-card").fadeOut(300);
    })


    ///change the mode color

    $(".moon").on('click', () => {
        $('body').addClass("active");
        $(".nabar").addClass("active");
        $('.moon').css("color", '#00000');
        $('p').addClass("active");
        $('.sun').addClass("active");
        $('h1').addClass("active");
        $("h4").addClass("active");
        $('.displayColumn').addClass("active");
    })

    $(".sun").on('click', () => {
        $("body").removeClass("active");
        $(".nabar").removeClass("active");
        $('p').removeClass("active");
        $('h1').removeClass("active");
        $("h4").removeClass("active");
        $('.displayColumn').removeClass("active");
    })

    /// Show gird system or block change
    $(".man-column").on('click', () => {

        $(".Fash_Man").addClass("displayColumn");
        $('.Fash_Man').addClass("infoprodaut");
    })


    $(".man-flex").on('click', () => {
        $(".Fash_Man").removeClass("displayColumn");
        $(".Fash_Man").removeClass("infoprodaut");
    })



    $(".woman-column").on('click', () => {
        $(".Fash_Woman").addClass("displayColumn");
        $('.Fash_Woman').addClass("infoprodaut");
    })

    $(".woman-flex").on('click', () => {

        $(".Fash_Woman").removeClass("displayColumn");
        $(".Fash_Woman").removeClass("infoprodaut");
    })



    $(".kid-column").on('click', () => {
        $(".Fash_kid").addClass("displayColumn");
        $('.Fash_kid').addClass("infoprodaut");
    })

    $(".kid-flex").on('click', () => {

        $(".Fash_kid").removeClass("displayColumn");
        $(".Fash_kid").removeClass("infoprodaut");
    })




    $(".Laptop-column").on('click', () => {
        $(".Laptop").addClass("displayColumn");
        $('.Laptop').addClass("infoprodaut");
    })

    $(".Laptop-flex").on('click', () => {

        $(".Laptop").removeClass("displayColumn");
        $(".Laptop").removeClass("infoprodaut");
    })


    $(".Video-column").on('click', () => {
        $(".video_games").addClass("displayColumn");
        $('.video_games').addClass("infoprodaut");
    })

    $(".Video-flex").on('click', () => {

        $(".video_games").removeClass("displayColumn");
        $(".video_games").removeClass("infoprodaut");
    })

    $(".Baby-column").on('click', () => {
        $(".baby").addClass("displayColumn");
        $('.baby').addClass("infoprodaut");
    })

    $(".Baby-flex").on('click', () => {

        $(".baby").removeClass("displayColumn");
        $(".baby").removeClass("infoprodaut");
    })






});



let slideIndex = 1;
showSlides(slideIndex);


const currentSlide = (n) => {
    showSlides(slideIndex = n);
}

const plusSlides = (n) => {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}