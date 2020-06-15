$(document).ready(function() {
  /** FIRST YOU HAVE TO INITIALIZE THE MAP **/
  $('#map').usmap({
      stateStyles: {fill: 'blue'},
        'click': function(event, data) {
         $('#clicked-state').text('You clicked:'+data.name );
    }
  });
  });