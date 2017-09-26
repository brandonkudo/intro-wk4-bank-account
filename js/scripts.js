function Account(name, initial) {
  this.accountName = name;
  this.accountCurrent = initial;
}

Account.prototype.add = function(addNumber) {
  if (!addNumber) {
    return 0;
  } else {
  return this.accountCurrent + addNumber;
  }
}

Account.prototype.subtract = function(subtractNumber) {
  if (!subtractNumber) {
    return 0;
  } else {
    return subtractNumber;
  }
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
      $("#output").text(newAccount.add(depositInput) - newAccount.subtract(withdrawalInput));

    });

    $("#output").text(newAccount.accountCurrent);


  });

});
