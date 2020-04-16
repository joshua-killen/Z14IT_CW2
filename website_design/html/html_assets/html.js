function search() {
  var input, filter, list, listElement, details, i, txtValue;
  input = document.getElementById('searchInput');
  filter = input.value.toUpperCase();
  list = document.getElementById("referenceList");
  listElement = list.getElementsByTagName('li');
    
  for (i = 0; i < listElement.length; i++) {
    details = listElement[i].getElementsByTagName("details")[0];
    txtValue = details.textContent || details.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      listElement[i].style.display = "";
    } else {
      listElement[i].style.display = "none";
    }
  }
}
