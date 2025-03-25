// Copyright (c) 2025 BrandonBCode All rights reserved
//
// Created by: BrandonBCode
// Created on: March 2025
// This file contains the JS functions for index.html
// Copyright (c) 2025 Brandon Brandhuber All rights reserved

function enterClicked () {
  // this function gets user's first name and age and displays it back to user

  // get first name from text field
  let streetName = document.getElementById("street-name").value
	// get age from text field and cast it to integer
  let streetNumber = parseInt(document.getElementById("number-entered").value)

  // display name and age back to user
  document.getElementById('user-info').innerHTML = "You live on " + streetName + " and you live at street number " + streetNumber + " in Ottawa, Ontario."
}