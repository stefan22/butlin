
(function() {
  
  //window['optimizely'] = window['optimizely'] || [];

  window.BUTLINS = {
    init: function() {
        this.mainCss(true);
        this.modaleCss();
        this.createModal();
        this.bindEvents();
    },
    mainCss: function(applyCss){
      if(applyCss){

        var mainCss='.title-user.field-form label {font-family"League Gothic", omnes-pro, sans-serif;} .textfield {box-shadow:1px 1px 1px #cac9c5; } .button.nero{border:1px solid #0f171c; font-family"League Gothic", omnes-pro, sans-serif;  background:#111112;background:-webkit-gradient(linear,left top,left bottom,from(#282c30),to(#111112));background:-webkit-linear-gradient(top,#282c30,#111112);background:-moz-linear-gradient(top,#282c30,#111112);background:-ms-linear-gradient(top,#282c30,#111112);background:-o-linear-gradient(top,#282c30,#111112);padding:0;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;-webkit-box-shadow:rgba(0,0,0,1) 0 1px 0;-moz-box-shadow:rgba(0,0,0,1) 0 1px 0;box-shadow:rgba(0,0,0,1) 0 1px 0;text-shadow:rgba(0,0,0,.4) 0 1px 0;color:white;font-size:16px; font-family: "League Gothic", omnes-pro, sans-serif; text-decoration:none;vertical-align:middle}.button.nero:focus{outline:0;}  ul.user-type li { font-family"League Gothic", omnes-pro, sans-serif; f; }  div.email-user.field-form input {font-family:"League Gothic", omnes-pro, sans-serif; f; }   .modal-content.only-v1 {display:block;}   @font-face {font-family"League Gothic", omnes-pro, sans-serif; ages/font%2FFrontage-Bold.w_1388678922000hc.otf) format("truetype"); }  .clearfix::after { visibility: hidden; display: block; font-size: 0px; content: " "; clear: both; height: 0px; }* html .clearfix { zoom: 1; }:first-child + html .clearfix { zoom: 1; } html.popup-visible, body.popup-visible { overflow: hidden; position: fixed; }.modal { font-family: "League Gothic", omnes-pro, sans-serif; if;  text-align: center; position: fixed; z-index: 500001; padding: 0px; left: 0px; top: 0px; width: 100%; height: 100%; border: none; overflow: auto; background-color: rgba(230, 230, 230, 0.8); }.modal-content { text-align: center; position: fixed; z-index: 500002; background-color: rgb(254, 254, 254); margin-right: inherit; margin-bottom: inherit; margin-left: inherit; width: 90%; height: 500px; left: 5%; top: 50%; margin-top: -250px; box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px 0px, rgba(0, 0, 0, 0.188235) 0px 6px 20px 0px; border-radius: 4px; padding: 25px 30px; box-sizing: border-box; }.modal-content ul li, .modal-content .UNErrorColor { text-align: left; }.modal-content ul { margin-bottom: 6px; }.modal-content ul li { margin-bottom: 3px; }.modal-content .UNPadTop.UNErrorColor { padding-top: 0px; }.modal-content .UNPadBottom { margin-bottom: 3px; }.modal-content .thank_you-pop { display: none; }.modal-content .thank_you-pop .promo-code { font-size: 1.5em; font-weight: bold; letter-spacing: 0.15em; padding: 5px; }.modal-content .thank_you-pop small { font-size: 10px; font-style: italic; }.modal-content.form-submited { height: 165px; margin-top: -82px; }.modal-content.form-submited .m-desc { padding: 0px 25px; }.modal-content.form-submited .thank_you-pop { display: block; }.modal-content.only-v1 { height: 190px; margin-top: -95px; }.modal-content.only-v1 .step-2 { display: none; }.modal-content .field-form { margin-bottom: 10px; } .modal-content .m-title { font-family: "League Gothic", omnes-pro, sans-serif; font-size: 1.6em; line-height: 160%; } .modal-content .m-desc { font-family:"League Gothic", omnes-pro, sans-serif; ;  line-height: 140%; font-size: 13px; margin: 5px 0px; }.modal-content input[type="text"], .modal-content input[type="email"] { border: 1px solid rgb(153, 153, 153); border-radius: 3px; padding: 0px 5px; font-family:"League Gothic", omnes-pro, sans-serif; ; } .modal-content input[type="submit"] { margin-top: 15px; font-size: 1.5em; padding: 10px 5px; }.modal-content form { padding-top: 10px; }.modal-content form .user-type li, .modal-content form .modal-email-copy, .modal-content form .modal-email { text-align: center; font-size: 1.2em; letter-spacing: 0.1em; }.modal-content form .user-type li { font-size: 1em; }.modal-content form .title-user { margin-top: 10px; }.modal-content form select.select-type, .modal-content form .modal-email-copy { display: none; margin-top: 5px; }.modal-content form select.select-type.possible-error, .modal-content form .modal-email-copy.possible-error { display: block; }.modal-content form .extra-links { text-align: left; padding-top: 5px; }.modal-content form .extra-links a { font-family: "League Gothic", omnes-pro, sans-serif;  color: rgb(136, 136, 136); text-decoration: underline; }.modal-content form .extra-links .align-right { float: right; }.modal-content form label { width: 100%; text-align: left; font-family: "League Gothic", omnes-pro, sans-serif;  font-size:10px; padding-bottom:3px; line-height:150%;   }  .modal-content form .user-type li { display: block; margin-right: 4%; width: 22%; border: 1px solid rgb(153, 153, 153); border-radius: 3px; line-height: 38px; float: left; height: 38px; box-sizing: border-box; color: rgb(153, 153, 153); }.modal-content form .user-type li.active { color: rgb(0, 0, 0); background: rgb(195, 195, 195); }.modal-content form .user-type li:last-child { margin-right: 0px; }#modal-feedback { display: none; }.closeModal { color: rgb(0, 0, 0); position: absolute; right: 5px; top: 5px; font-size: 22px; border-radius: 50%; width: 22px; height: 22px; line-height: 22px; cursor: pointer; }.closeModal:hover, .closeModal:focus { color: rgb(0, 0, 0); text-decoration: none; }.modal-content .loader { margin: 15px auto 0px; display: none; max-width: 100%; width: 100%; position: relative; height: 100%; padding-top: 25px; }.modal-content .loader .u_loading-logo { margin-top: 0px; }@-webkit-keyframes ball-pulse-sync { 33% { transform: translateY(10px); } 66% { transform: translateY(-10px); } 100% { transform: translateY(0px); } }@keyframes ball-pulse-sync { 33% { transform: translateY(10px); } 66% { transform: translateY(-10px); } 100% { transform: translateY(0px); } }.ball-pulse-sync > div:nth-child(1) { animation: ball-pulse-sync 0.6s ease-in-out -0.14s infinite; }.ball-pulse-sync > div:nth-child(2) { animation: ball-pulse-sync 0.6s ease-in-out -0.07s infinite; }.ball-pulse-sync > div:nth-child(3) { animation: ball-pulse-sync 0.6s ease-in-out 0s infinite; }.ball-pulse-sync > div { background-color: rgb(221, 38, 45); width: 15px; height: 15px; border-radius: 100%; margin: 2px; animation-fill-mode: both; display: inline-block; } @media (max-width: 345px) { .modal-content { padding: 15px 20px; height: 425px; margin-top: -212px; } .modal-content.form-submited { height: 140px; margin-top: -70px; } .modal-content.only-v1 { height: 160px; margin-top: -80px; } .modal-content .m-title { font-size: 1.5em; } .modal-content .textfield { height: 32px; } .modal-content input[type="submit"] { margin-top: 5px; font-size: 1.3em; height: 37px; line-height: 37px; } .modal-content form .modal-email-copy, .modal-content form .modal-email { font-size: 0.9em; padding: 4px; } .modal-content form .user-type li { font-size: 0.9em; } .modal-content form .title-user { margin-top: 0px; } }  .modal-content.form-submited { height: 165px !important; margin-top: -70px; } .modal-content .m-title { font-size:1.4em !important;} input#contactButton.button.nero.w100 { font-size:1.3em !important; height:50px !important; line-height:35px !important;margin-top:5px !important; }';

        mainCss += '.modal-content, .modal-content *{translate3d(0px,0px,0px);}';

        var headofdoc = document.getElementsByTagName('head')[0];
        var s = document.createElement('style');
        s.setAttribute('type', 'text/css');
        s.appendChild(document.createTextNode(mainCss));
        headofdoc.appendChild(s);
      }
    },

    modaleCss: function() {
            var bstyle = document.createElement("style");
            bstyle.type = "text/css";
            bstyle.innerHTML = ' .moto {display:none;}  .ball-pulse-sync > div:nth-child(1) {background-color:rgb(12,12,12); box-shadow:-1px 22px 21px 0px rgba(0, 0, 0, 0.1); width:18px; height:18px; }  .ball-pulse-sync > div:nth-child(2) {background-color:rgb(12,12,12);  box-shadow:-1px 22px 21px 0px rgba(0, 0, 0, 0.1); width:18px; height:18px;}  .ball-pulse-sync > div:nth-child(3) { background-color:rgb(12,12,12); box-shadow:-1px 22px 21px 0px rgba(0, 0, 0, 0.1); width:18px; height:18px;} .ani {background-color:transparent; color: transparent; box-shadow:none;}  ';
            document.getElementsByTagName("head")[0].appendChild(bstyle);

    },// modaleCss


    fixPopUp: function(){

      $('.modal-content').removeAttr( 'style' );

      var errorsHeight = $('.UNErrorColor').height() + 20;
      var modalHeight = $('.modal-content').height();

      var finalHeight = modalHeight + errorsHeight;
      var marginTop = finalHeight / 2;
      marginTop = '-'+marginTop+'px';

      $('.modal-content').height( finalHeight ).css('margin-top', marginTop);

    },
    onSubmitForm: function() {

      setInterval(function(){

        if($('.modal-content').hasClass('form-submited') == false){
          var modal = document.getElementById('modal-feedback').contentDocument.getElementsByTagName("body")[0];
          //var modale = document.querySelector('.article .UNPageWrapper .pageTitle');
          var list = modal.querySelectorAll('.main .pageTitle')[1];  
                  
          if(modal !== undefined){
            modal = modal.getElementsByClassName('main_wrapper')[0];
            if(modal !== undefined){
              modal = modal.innerHTML;    //Keep me updated
           
              var innerForm = $(modal).html();

              if($(innerForm).find('form .UNErrorColor').length > 0){

                var error = $(innerForm).find('form .UNErrorColor');
                if(error.html() !== $('.UNErrorColor').html()){
                  // console.log('Error shows');
                 
                  $('.modal-content .loader').hide();
                  $('.modal-content form').show();
                  $('.UNErrorColor').remove();
                  $(error).insertAfter('#newsOffers .title-user.field-form');

                  window.BUTLINS.fixPopUp();
                }

              } //else if(document.body.className == "popup-visible") {
                else if (list.innerText.indexOf('list!') > -1)  {

                
                window.optimizely.push(["trackEvent", "successful_email_signups"]);
                //newsletter from footer
                //window.optimizely.push(["trackEvent", "successful_signup_from_footer"]);

                console.log('you are on the list');
                $('.modal-content .loader, .modal-content form').hide();
                $('.m-title').text('THANKS FOR SIGNING UP!');
                $('.m-desc').text('Use the code below to save £10 off your next Live Music Weekend\'s break.');
                $('.promo-code').text('WELCOME11');

                $('.thank_you-pop').show();
                
                $('.modal-content').addClass('form-submited');
                $('.UNErrorColor').remove();
                $('.modal-content').removeAttr( 'style' );
                $('html, body').removeClass('popup-visible');

                localStorage.setItem("popUpClosedOrSubmitted", "yes");

                $(".closeModal").bind('click', function(event) {
                  window.optimizely.push(["trackEvent", "PopUp_Close_Overlay_After_form_submission"]);
                });

                $("#newsLetterSubmit").bind('click', function(event) {
                  window.optimizely.push(["trackEvent", "successful_signup_from_footer"]);
                });



                
              } else {
                // console.log('else...');
              }

            }
          }
        }

        
      }, 1000);

    },
    createModal: function() {

        var newsOffers = ''+
        '<div id="newsOffers" class="modal" />' +
          '<div class="modal-content only-v1">' +
              '<span class="closeModal">x</span>' +
              '<div class="m-title">NEWS AND OFFERS</div>' +
              '<div class="m-desc">Save £10 on your next Live Music Weekend when you sign up to hear about our latest news and offers.</div>' +
              '<form action="/h5/bookingHub?pagePath=https%3A%2F%2Fwww.bigweekends.com%2Flinks%2Fother-links%2Fkeep-me-updated%2Findex.aspx%3Femailaddress%3D" method="post" name="newsLetterForm" id="newsLetterForm" target="my_iframe_feedback">'+

                '<input id="cpMain_ctlNewsletterSignupFormTcm46106357_chkButlinsOpt" type="checkbox" name="ctl00$cpMain$ctlNewsletterSignupFormTcm46106357$tbEmail" hidefocus="true" style="opacity: 0; outline: none; position: absolute; z-index: -1;">'+  

                '<label for="ctl00$cphMainContent$keepmeupdatedform$ddlBreakType" class="moto" style="opacity: 0; outline: none; position: absolute; z-index: -1;">Email Address</label>' +

                '<input id="ctl00$cphMainContent$keepmeupdatedform$ddlBreakType" type="checkbox" name="ctl00$cphMainContent$keepmeupdatedform$ddlBreakType" value="All Live Music Weekend" data-auto-submit="" hidefocus="true" style="opacity: 0; outline: none; position: absolute; z-index: -1;">'+  

                '<div class="step-1">'+
                  '<div class="email-user field-form">'+
                      '<label for="ctl00$cphMainContent$keepmeupdatedform$txtEmail" class="moto" style="opacity: 0; outline: none; position: absolute; z-index: -1;">Email Address</label>' +
                    '<input type="email" name="ctl00$cphMainContent$keepmeupdatedform$txtEmail" id="ctl00$cphMainContent$keepmeupdatedform$txtEmail" value="" class="textfield w100 modal-email" placeholder="YOUR EMAIL ADDRESS" data-auto-submit="" required>'+
                    '<label for="ctl00$cphMainContent$keepmeupdatedform$txtEmailConfirm" class="moto" style="opacity: 0; outline: none; position: absolute; z-index: -1;">Confirm Email Address</label>' +
                    '<input type="email" name="ctl00$cphMainContent$keepmeupdatedform$txtEmailConfirm" id="ctl00$cphMainContent$keepmeupdatedform$txtEmailConfirm" value="" class="textfield w100 modal-email-copy" placeholder="e.g. john@email.com" data-auto-submit="">'+
                  '</div><div class="clearfix" />' +
                '</div>' +
                '<div class="step-2">'+
                  '<div class="title-user field-form">'+
                    '<label for="ctl00$cphMainContent$keepmeupdatedform$ddlTitle" class="unLabel  UNCapitalize">Fields marked with an asterisk (*) are mandatory</label>'+
                    '<ul class="user-type">'+
                      '<li data-type="Mr">MR</li>'+
                      '<li data-type="Mrs">MRS</li>'+
                      '<li data-type="Ms">MS</li>'+
                      '<li data-type="Master">OTHER</li>'+
                    '</ul>'+
                    '<select name="ctl00$cphMainContent$keepmeupdatedform$ddlTitle" id="ctl00$cphMainContent$keepmeupdatedform$ddlTitle" class="w100 select-type" data-auto-submit=""> <option value="" selected="selected">Select</option> <option value="Mr">Mr</option> <option value="Mrs">Mrs</option> <option value="Ms">Ms</option> <option value="Miss">Miss</option> <option value="Master">Master</option> <option value="Rev">Rev</option> <option value="Dr">Dr</option> <option value="Prof">Prof</option> </select><div class="clearfix" />'+
                  '</div>' +
                  '<div class="UNPadTop original UNErrorColor" style="display: none;">'+
                    '<div class="UNPadBottom">Oops, it seems something went wrong when filling in the form.</div>'+
                      '<ul>'+
                          '<li data-type="email">Enter an email address</li>'+
                          '<li data-type="title">Please select your title</li>'+
                          '<li data-type="first_name">Please enter your first name</li>'+
                          '<li data-type="last_name">Please enter your last name</li>'+
                      '</ul>'+
                  '</div>'+
                  '<div class="first-name field-form">'+
                    '<label for="ctl00$cphMainContent$keepmeupdatedform$txtFirstname" class="unLabel  UNCapitalize">Your first name*</label>'+
                    '<input type="text" name="ctl00$cphMainContent$keepmeupdatedform$txtFirstname" id="ctl00$cphMainContent$keepmeupdatedform$txtFirstname" value="" class="textfield w100 " placeholder="" data-auto-submit="" style="" required><div class="clearfix" />'+
                  '</div>' +
                  '<div class="last-name field-form">'+
                    '<label for="ctl00$cphMainContent$keepmeupdatedform$txtSurname" class="unLabel  UNCapitalize">Your last name*</label>'+
                    '<input type="text" name="ctl00$cphMainContent$keepmeupdatedform$txtSurname" id="ctl00$cphMainContent$keepmeupdatedform$txtSurname" value="" class="textfield w100 " placeholder="" data-auto-submit="" required><div class="clearfix" />'+
                  '</div>' +

                  '<input type="submit" value="SIGN UP" id="contactButton" class="button nero w100" name="contactButton"><div class="clearfix" />'+
                  '<div class="extra-links">'+
                    '<a href="https://www.butlins.com/splash-pages/signup-terms.aspx" href="_blank" class="tnc-link">Terms and Conditions</a>'+
                    '<a href="https://m.butlins.com/h5/hub?pagePath=http%3A%2F%2Fwww.butlins.com%2Fprivacy-and-cookies%2Findex.aspx" href="_blank" class="privacy-link align-right">Privacy Policy</a>'+
                  '<div class="clearfix" /></div>'+
                '</div><div class="clearfix" />' +
              '</form>'+
              '<iframe id="modal-feedback" name="my_iframe_feedback"></iframe>'+
              // '<div class="loader" style="display: none;"> <div class="u_loading"> <div class="u_loading_bar"> </div> </div> <div class="u_loading-logo"> <div class="u_loading-pan"> <img src="/h5/images/loader.w_1388678923000hc.png"> </div> </div> </div>'+
              '<div class="loader"><div class="ball-pulse-sync"><div></div><div></div><div></div></div></div>'+
              // '<img class="loader" src="//cdn.optimizely.com/img/637160549/04243309d623456e8bc87ac323620642.gif" alt="loading">'+
              '<div class="thank_you-pop"><div class="promo-code"></div><small>Valid for the next 30 days</small></div><div class="clearfix" />' +
        '</div>';
      
        $(newsOffers).appendTo('body');
        var newop = document.querySelector('.modal-content.only-v1');
        newop.style.opacity = 0;
        var rz = document.querySelector('#newsOffers.modal');
        rz.style.zIndex = -500001;
        var newsemail = document.querySelector('#newsLetterForm input[type=email]');
        var exemail = document.querySelector('.modal-content.only-v1 .closeModal');
        newsemail.addEventListener('click',reoff1,false);
        exemail.addEventListener('click', reoff2, false);
        window.onload = fireOff();

        function fireOff() {
                setTimeout(function() {
                    $('html, body').addClass('popup-visible');
                    $('.ticky-p').click().prop( "checked", true );  
                    newop.style.opacity = 1;
                    rz.style.zIndex = 500001;
                  
                },12000);

        }//fireOff



        function reoff1() {
            $('html, body').removeClass('popup-visible');
            $(".modal, .modal-content").fadeOut();
        }//reoff1

        function reoff2() {
            $('html, body').removeClass('popup-visible');
            $(".modal, .modal-content").fadeOut();
        }//reoff2

       

        
    },

    bindEvents: function() {

      $(".closeModal").bind('click', function(event) {
        event.preventDefault();
        $('html, body').removeClass('popup-visible');
        $(".modal, .modal-content").fadeOut();
        //localStorage.setItem("popUpClosedOrSubmitted", "yes");

        if($('.m-title').text() == "THANK YOU!"){
          window.optimizely.push(["trackEvent", "PopUp_Close_Overlay_After_form_submission"]);
        } else if($('.modal-content').hasClass('only-v1')){
          window.optimizely.push(["trackEvent", "PopUp_Close_Overlay_step1"]);
        } else {
          window.optimizely.push(["trackEvent", "PopUp_Close_Overlay_step2"]);
        }

      });  

      $('.modal-content form .modal-email').bind('click', function(event) {
        $('.modal-content').removeClass('only-v1');
      });

      $('.modal-content form .modal-email').bind('input', function() {
        var value = $(this).val();
        $('.modal-content form .modal-email-copy').val(value);
      });

      $('.modal-content form .user-type li').bind('click', function(event) {
        event.preventDefault();
        var type = $(this).data('type');

        $('.modal-content form .user-type li').removeClass('active');
        $(this).addClass('active');

        $('.modal-content select.select-type').val(type);

      });


      var FormSubmited = false;
      function isValidEmailAddress(emailAddress) {
          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          return pattern.test(emailAddress);
      }

      $( 'form[target="my_iframe_feedback"] input[type="submit"]' ).bind( "click", function() {

      //$('div.modal-content > form > div.step-2 > input[type=submit]').bind("click", function() {

        if(!FormSubmited){
          var errors = false;

          var email = $('.modal-content .modal-email').val();
          if( email == '' || !isValidEmailAddress(email) ){
            errors = true;
             $('.modal-content .UNPadTop.UNErrorColor li[data-type="email"]').show();
          } else { $('.modal-content .UNPadTop.UNErrorColor li[data-type="email"]').hide(); }

          if( $('.modal-content .title-user li.active').length == 0){
            errors = true;
            $('.modal-content .UNPadTop.UNErrorColor li[data-type="title"]').show();
          } else { $('.modal-content .UNPadTop.UNErrorColor li[data-type="title"]').hide();}

          if( $('.modal-content .first-name input').val() === ''){
            errors = true;
            $('.modal-content .UNPadTop.UNErrorColor li[data-type="first_name"]').show();
          } else { $('.modal-content .UNPadTop.UNErrorColor li[data-type="first_name"]').hide();}

          if( $('.modal-content .last-name input').val() === ''){
            errors = true;
             $('.modal-content .UNPadTop.UNErrorColor li[data-type="last_name"]').show();
          } else { $('.modal-content .UNPadTop.UNErrorColor li[data-type="last_name"]').hide(); }

          if(!errors){
            // console.log('no empty fields');
            $('.UNPadTop.UNErrorColor').hide();
            window.BUTLINS.onSubmitForm();
            window.BUTLINS.fixPopUp();
            FormSubmited = true;
          } else{
            // console.log('empty gaps');
            window.optimizely.push(["trackEvent", "popup_error_msgh_views"]);
            $('.UNPadTop.UNErrorColor').show();
            window.BUTLINS.fixPopUp();
          }
        }
        
        
        
      });

      $('form[target="my_iframe_feedback"]').submit(function(e) {
        if(!FormSubmited){
           e.preventDefault();
        } else {
          $('.modal-content form').hide();
          $('.modal-content .loader').show();
          $('.modal-content').removeClass('with_feedback');
        }
      });
        

    }
  };
        


  
  try{
    if(localStorage.getItem("popUpClosedOrSubmitted") !== 'yes'){
      window.BUTLINS.init();
      console.log('and 12 goes');
    }
  } catch(err){
    console.log('ERROR: '+ err);
  }
  

})();