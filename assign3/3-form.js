// Enter your code here

document.getElementById("input1").addEventListener("click", formCheck);
function formCheck() {

  event.preventDefault();
  
  let checkedBox = '';
  if (document.getElementById("newsletterform1").checked == true) {
    checkedBox = 'newsletter: on';
  } else {
    checkedBox = 'newsletter: off';
  }


  console.log(`
    name : ${document.getElementById("nameform1").value}
    email : ${document.getElementById("emailaddressform1").value}
    comments : ${document.getElementById("textareaform1").value}
    ${checkedBox}`);
   

}
