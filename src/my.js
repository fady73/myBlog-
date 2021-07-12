window.fcSettings = {
    token: "470644dd-35ce-4c73-90b8-1fd345569389",
    host: "https://wchat.freshchat.com",
    onInit: function() {
    	window.fcWidget.on("widget:closed", function() {
        console.log('widget was closed');
        document.getElementById('fc_frame').style.display = 'none';
      });
    }
  };