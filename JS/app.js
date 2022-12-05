//The URIs of the REST endpoint
b00774275RIV = "https://prod-33.northeurope.logic.azure.com:443/workflows/bf83f7e3ba7e407eb10acda0bd26a52d/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=orpoGUbLvKZza3Gy-aolYzupABhd6fEr-jPruz8n7ZE";
videoconsumption = "https://prod-10.northeurope.logic.azure.com:443/workflows/dd7683e5cd5b45f0a36c4440c19de93d/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=00fl7WVpBxtGdfJVH_QHswt_ARiVcUDZQNRQpcO1WyE";



BLOB_ACCOUNT = "https://b00774275vidblobstorage.blob.core.windows.net";

//Handlers for button clicks
$(document).ready(function() {

 
  $("#retImages").click(function(){

      //Run the get asset list function
      getVideos();

  }); 

   //Handler for the new asset submission button
  $("#subNewForm").click(function(){

    //Execute the submit new asset function
    submitNewVideo();
    
  }); 
});

//A function to submit a new asset to the REST endpoint
function submitNewVideo(){
  
  //Create a form data object
submitData = new FormData();

//Get form variables and append them to the form data object
submitData.append('ageRating', $('#ageRating').val());
submitData.append('creatorID', $('#creatorID').val());
submitData.append('creatorUserName', $('#creatorUserName').val());
submitData.append('genre', $('#genre').val());
submitData.append('producer', $('#producer').val());
submitData.append('publisher', $('#publisher').val());
submitData.append('title', $('#title').val());
submitData.append('FileName', $('#FileName').val());
submitData.append('File', $("#UpFile")[0].files[0]);
  
//Post the form data to the endpoint, note the need to set the content type header
$.ajax({
   url: videoconsumption,
   data: submitData,
   cache: false,
   enctype: 'multipart/form-data',
   contentType: false,
   processData: false,
   type: 'POST',
   success: function(data){
  
   }
  });

}

//A function to get a list of all the assets and write them to the Div with the AssetList Div
function getVideos(){
  
//Replace the current HTML in that div with a loading message
$('#ImageList').html('<div class="spinner-border" role="status"><span class="sr-only"> &nbsp;</span>');
$.getJSON(b00774275RIV, function( data ) {

  //Create an array to hold all the retrieved assets
  var items = [];
  // alert(JSON.stringify(data))
  
  //Iterate through the returned records and build HTML, incorporating the key values of the record in the data
  $.each( data, function( key, val ) {
  
    items.push( "<hr />");
    items.push("<video src='"+BLOB_ACCOUNT + val["filePath"] +"' width='400' controls autoplay muted></video><br />")
    items.push( "Movie Title: " + val["title"] + "<br />");
    items.push( "Age Rating: " + val["ageRating"] + "<br />");
    items.push( "Genre: " + val["genre"] + "<br />");
    items.push( "Username: " + val["creatorUserName"] + "<br />");
    items.push( "User ID: " + val["creatorID"] + "<br />");
    items.push( "Producer: " + val["producer"] + " (publisher: "+val["publisher"]+")<br />");
    items.push( "<hr />");
   
  });
  
  //Clear the assetlist div
  $('#ImageList').empty();
  
  //Append the contents of the items array to the ImageList Div
  $( "<ul/>", {
   "class": "my-new-list",
   html: items.join( "" )
  }).appendTo( "#ImageList" );
 });
}

