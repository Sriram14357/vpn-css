function geoip(json)  
    { 
      var ipUser = document.getElementsByClassName('find-ip');     
      var countryUser = document.getElementsByClassName('find-country');
      var organization_nameUser = document.getElementsByClassName('find-organization_name');
      var regionUser = document.getElementsByClassName('find-region');
      var cityUser = document.getElementsByClassName('find-city');
      var latitudeUser = document.getElementsByClassName('find-latitude');
      var longitudeUser = document.getElementsByClassName('find-longitude');           
     for (var i = 0; i < ipUser.length; i++) 
      {      	
        ipUser[i].textContent = json.ip;   	      
      }      
      for (var j = 0; j < ipUser.length; j++) 
      {      	
        countryUser[j].textContent = json.country;   	      
      }  
      for (var j = 0; j < ipUser.length; j++) 
      {      	
        organization_nameUser[j].textContent = json.organization_name;   	      
      } 
      for (var j = 0; j < ipUser.length; j++) 
      {      	
        regionUser[j].textContent = json.region;   	      
      } 
      for (var j = 0; j < ipUser.length; j++) 
      {      	
        cityUser[j].textContent = json.city;   	      
      } 
      for (var j = 0; j < ipUser.length; j++) 
      {      	
        latitudeUser[j].textContent = json.latitude;   	      
      } 
      for (var j = 0; j < ipUser.length; j++) 
      {      	
        longitudeUser[j].textContent = json.longitude;   	      
      } 
    }        