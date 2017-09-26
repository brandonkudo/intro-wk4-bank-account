function Account(name, initial) {
  this.accountName = name;
  this.accountCurrent = initial;
  this.accountBalance = initial;
}

Account.prototype.add = function(addNumber) {
  debugger;
  if (!addNumber) {
    addNumber = 0;
    this.accountBalance = this.accountBalance + addNumber;
  } else {
    this.accountBalance = this.accountBalance + addNumber;
  }
}

Account.prototype.subtract = function(subtractNumber) {
  if (!subtractNumber) {
    subtractNumber = 0;
    this.accountBalance = this.accountBalance - subtractNumber;
  } else {
    this.accountBalance = this.accountBalance - subtractNumber;
  }
}

$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var nameInput = $("#username").val();
    var initialInput = parseFloat($("#initialdeposit").val());
    // alert(initialInput);

    var newAccount = new Account(nameInput, initialInput);
    $("#output").text("$" + newAccount.accountCurrent.toFixed(2));
    $("#output-box, #formTwo-box").show();

    $("button#secondbutton").click(function() {
      var depositInput = parseFloat($("#deposit").val());
      var withdrawalInput = parseFloat($("#withdrawal").val());
      newAccount.add(depositInput);
      newAccount.subtract(withdrawalInput);
      $("#output").text("$" + newAccount.accountBalance.toFixed(2));

    });



  });

});
