

$(document).ready(()=>{
    $('.menu-toggler').on('click', () => {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');

    });

    //remove navbar when one of the navigation link was clicked
    $('.top-nav .nav-link').on('click', () => {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });
})

//=====api-routes=====

const contactForm = $("form#contact-form");
const emailInput = $("input#email-input");
const nameInput = $("input#name-input");
const commentInput = $("textarea#user-input");

contactForm.on("submit", event => {
    event.preventDefault();
    const userData = {
      name: nameInput.val().trim(),
      email: emailInput.val().trim(),
      comment: commentInput.val().trim()
    };
    console.log(userData);
    // postUserComment(userData.name, userData.email, userData.comment);

    emailInput.val("");
    nameInput.val("");
    commentInput.val("");

    $.ajax("/api/contact", {
        type: "POST",
        data: userData
      }).then(() => {
        location.reload();
    });


});


function postUserComment(name, email, comment){
    $.post("/api/contact", {
      name: name,
      email: email,
      comment: comment
    })
}