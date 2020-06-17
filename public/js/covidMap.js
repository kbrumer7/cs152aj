$(document).ready(function() {
  /** FIRST YOU HAVE TO INITIALIZE THE MAP **/
  $('#map').usmap({
      stateStyles: {fill: '#fff'},
        'click': function(event, data) {
          window.location.href='ma';
         //$('#clicked-state').text('You clicked:'+data.name );
    },
    stateSpecificStyles: {
      'MA': {fill: 'orange'},
      'OR': {fill: 'orange'},
      'CA': {fill: 'orange'},
      'NY': {fill: 'orange'}
      //'FL': {fill: 'light blue'}
    }
  });

//specific state colors
  $('#map').usmap({
    stateSpecificStyles: {
      'MA': {fill: 'orange'},
      'OR': {fill: 'orange'},
      'CA': {fill: 'orange'},
      'NY': {fill: 'orange'}
      //'FL': {fill: 'light blue'}
    }
  });

  $('#on-ma').click(function(event){
    $('#map').usmap('trigger', 'MA', 'mouseover', event);
  });

  // $('#map').on('usmap<event>MA', function(event, data) {
  //   window.location = 'mass.ejs';
  // });

  // $('#map').usmap({

  //   <event>State: {
  //     'MD' : function(event, data) {
  //       console.log('You interacted with the state of Maryland');
  //     }
  //   }
  // });



  });
