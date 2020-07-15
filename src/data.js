let tableData = cities;


let table = document.getElementById('datatable');

tableData.forEach((e, index) => {
    let  row = table.insertRow(index+1);
         row.insertCell(0).innerHTML= e.City_ID;
         row.insertCell(1).innerHTML= e.City;
         row.insertCell(2).innerHTML= e.Cloudiness;
         row.insertCell(3).innerHTML= e.Country;
         row.insertCell(4).innerHTML= e.Date;
         row.insertCell(5).innerHTML= e.Humidity;
         row.insertCell(6).innerHTML= e.Lat;   
         row.insertCell(7).innerHTML= e.Lng;
         row.insertCell(8).innerHTML= e.Max_Temp;
         row.insertCell(9).innerHTML= e.Wind_Speed;
 });