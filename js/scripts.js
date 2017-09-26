function Account(name, initial) {
  this.accountName = name;
  this.accountCurrent = initial;
}

Account.prototype.add = function(addNumber) {
  return this.accountCurrent + addNumber;
}

Account.prototype.subtract = function(subtractNumber) {
  return subtractNumber;
}

$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var nameInput = $("#username").val();
    var initialInput = parseFloat($("#initialdeposit").val());
    // alert(initialInput);

    var newAccount = new Account(nameInput, initialInput);

    $("button#secondbutton").click(function() {
      var depositInput = parseFloat($("#deposit").val());
      var withdrawalInput = parseFloat($("#withdrawal").val())
      $("#output").text(newAccount.add(depositInput));

    });

    $("#output").text(newAccount.accountCurrent);


  });

});
