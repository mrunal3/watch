let time,tick=setInterval(function(){time=new Date,time.getHours()<13?document.getElementById("display").textContent=(time.getHours()<10?"0"+time.getHours():time.getHours())+":"+(time.getMinutes()<10?"0"+time.getMinutes():time.getMinutes())+":"+(time.getSeconds()<10?"0"+time.getSeconds():time.getSeconds())+" AM":document.getElementById("display").textContent=(time.getHours()-12<10?"0"+(time.getHours()-12):time.getHours()-12)+":"+(time.getMinutes()<10?"0"+time.getMinutes():time.getMinutes())+":"+(time.getSeconds()<10?"0"+time.getSeconds():time.getSeconds())+" PM"},100);