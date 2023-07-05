function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  function redirectToSecondPage(link)
  {
    if(link == 1)
    {
      window.location.href = "https://www.latamairlines.com/br/pt/destinos/reino-unido?gclid=EAIaIQobChMIiI3fs5Xa_wIVauhcCh0bVwPiEAAYAiAAEgK8B_D_BwE&gclsrc=aw.ds"
    }
    else if(link == 2)
    {
      window.location.href = "https://www.latamairlines.com/br/pt/destinos/franca?gclid=EAIaIQobChMIiqDK15na_wIV6DrUAR2YJAPsEAAYAiAAEgLcVPD_BwE&gclsrc=aw.ds"
    }
    else if(link == 3)
    {
      window.location.href = "https://www.emirates.com/br/portuguese/destinations/flights-to-tokyo.aspx"
    }
  }