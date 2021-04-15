//https://apicovidstats.herokuapp.com/api/covid/world
//https://apicovidstats.herokuapp.com/api/covid/india

function getcorona() {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  fetch("https://apicovidstats.herokuapp.com/api/covid/world")
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      if (result.length > 0) {
        var temp = "";

        result.forEach((u) => {
          temp += "<tr>";
          temp += "<td>" + u.countryName + "</td>";
          temp += "<td>" + u.totalCases + "</td>";
          temp += "<td>" + u.totalActive + "</td>";
          temp += "<td>" + u.totalRecoveries + "</td>";
          temp += "<td>" + u.totalDeaths + "</td></tr>";
        });
        document.getElementById("result").innerHTML = temp;
      }
    })
    .catch((error) => console.log("error", error));
}
getcorona();

function searchFunc() {
  let filter = document.getElementById("myInput").value.toUpperCase();
  let myTable = document.getElementById("myTable");
  let tr = myTable.getElementsByTagName("tr");

  for (var i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      let textValue = td.textContent || td.innerHTML;

      if (textValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}


