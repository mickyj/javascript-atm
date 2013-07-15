$(document).ready(function () {

  var checkings = 1000;
  var savings = 1000;

  $('.checking h2').text(checkings);             // this display the balance inside the h2 tag
  $('.saving h2').text(savings);


  var checking_deposit = function () {        //defining a function called checking_deposit
    var amount = $('#checkings').val();       //defining amount by the .val that gets entered
    amount = parseInt(amount);                // this makes what gets entered into an integer

    checkings = checkings + amount;       //adds what is entered to existing balance
    $('.checking h2').text(checkings);        //redisplays new balance
  };

  var checking_withdraw = function () {
    var amount = $('#checkings').val();
    amount = parseInt(amount);

    if(amount < checkings) {
    checkings = checkings - amount;
    $('.checking h2').text(checkings);
    }   else if (amount > checkings) {
        $('#checkings').addClass('alert');

        savings = savings - (amount - checkings);
        checkings = 0;
        $('.checking h2').text(checkings);
        $('.saving h2').text(savings);

    }
  };


var saving_deposit = function () {        //defining a function called saving_deposit
    var amount = $('#savings').val();       //defining amount by the .val that gets entered
    amount = parseInt(amount);                // this makes what gets entered into an integer

    savings = savings + amount;       //adds what is entered to existing balance
    $('.saving h2').text(savings);        //redisplays new balance
  };

  var saving_withdraw = function () {
    var amount = $('#savings').val();
    amount = parseInt(amount);

    if(amount < savings) {
    savings = savings - amount;
    $('.saving h2').text(savings);
    }else {
      alert('insufficient')
    }
  };

  $('#checking_dep').click(checking_deposit);  //looks for defined button, .click calls the checking deposit method
  $('#checking_with').click(checking_withdraw);


  $('#saving_dep').click(saving_deposit);  //looks for defined button, .click calls the checking deposit method
  $('#saving_with').click(saving_withdraw);

});