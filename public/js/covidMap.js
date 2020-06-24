$(document).ready(function() {
  /** FIRST YOU HAVE TO INITIALIZE THE MAP
   * window.location.href= description;
   * **/
  $('#map').usmap({
      stateStyles: {fill: '#fff'},
      
      stateHoverStyles: {fill: 'rgb(183, 180, 224)'},

      stateHoverAnimation: 200,

      'click': function(event, data) {
          var description = "No state info loaded for this state.";
            switch (data.name)
            {
              case 'AL':
                description = 'al';
                break;
              case 'AK':
                description = 'ak';
                break;
              case 'AZ':
                description = 'arizona';
                break;
              case 'AR':
                description = 'arkansas';
                break;
              case 'CA':
                description = 'ca';
                break;
              case 'CO':
                description = 'colorado';
                break;
              case 'CT':
                description = 'ct';
                break;
              case 'DE':
                description = 'delaware';
                break;
              case 'FL':
                description = 'florida';
                break;
              case 'GA':
                description = 'georgia';
                break;
              case 'HI':
                description = 'hawaii';
                break;
              case 'ID':
                description = 'idaho';
                break;
              case 'IL':
                description = 'illinois';
                break;
              case 'IN':
                description = 'indiana';
                break;
              case 'IA':
                description = 'iowa';
                break;
              case 'KS':
                description = 'kansas';
                break;
              case 'KY':
                description = 'kentucky';
                break;
              case 'LA':
                description = 'louisiana';
                break;
              case 'ME':
                description = 'maine';
                break;
              case 'MD':
                description = 'maryland';
                break;
              case 'MA':
                description = 'ma';
                break;
              case 'MI':
                description = 'michigan';
                break;
              case 'MN':
                description = 'minnesota';
                break;
              case 'MS':
                description = 'mississippi';
                break;
              case 'MO':
                description = 'missouri';
                break;
              case 'MT':
                description = 'montana';
                break;
              case 'NE':
                description = 'nebraska';
                break;
              case 'NV':
                  description = 'nevada';
                  break;
              case 'NH':
                  description = 'newhampshire';
                  break;
              case 'NJ':
                  description = 'newjersey';
                  break;
              case 'NM':
                  description = 'newmexico';
                  break;
              case 'NY':
                  description = 'ny';
                  break;
              case 'NC':
                  description = 'northcarolina';
                  break;
              case 'ND':
                  description = 'northdakota';
                  break;
              case 'OH':
                  description = 'ohio';
                  break;
              case 'OK':
                  description = 'oklahoma';
                  break;
              case 'OR':
                  description = 'oregon';
                  break;
              case 'PA':
                  description = 'pennsylvania';
                  break;
              case 'RI':
                  description = 'rhodeisland';
                  break;
              case 'SC':
                  description = 'southcarolina';
                  break;
              case 'SD':
                  description = 'southdakota';
                  break;
              case 'TN':
                  description = 'tennessee';
                  break;
              case 'TX':
                  description = 'texas';
                  break;
              case 'UT':
                  description = 'utah';
                  break;
              case 'VT':
                  description = 'vermont';
                  break;
              case 'VA':
                  description = 'virginia';
                  break;
              case 'WA':
                  description = 'washington';
                  break;
              case 'WV':
                  description = 'westvirginia';
                  break;
              case 'WI':
                  description = 'wisconsin';
                  break;
              case 'WY':
                  description = 'wyoming';
                  break;
              case 'DC':
                  description = 'washingtondc';
                  break;
                   // etc
             }
          window.location.href= description;
    },
    stateSpecificStyles: {
      'MA': {fill: 'orange'},
      'OR': {fill: 'orange'},
      'CA': {fill: 'orange'},
      'NY': {fill: 'orange'},
      'CT': {fill: 'orange'},
      'AL': {fill: 'orange'},
      'AK': {fill: 'blue'}
      //'FL': {fill: 'light blue'}
    }
  });

// //specific state colors
//   $('#map').usmap({
//     stateSpecificStyles: {
//       'MA': {fill: 'orange'},
//       'OR': {fill: 'orange'},
//       'CA': {fill: 'orange'},
//       'NY': {fill: 'orange'}
//       //'FL': {fill: 'light blue'}
//     }
//   });

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


  /*
     <script>
    $(document).ready(function () {

    $('#clicked-state').load('http://electrix.com/usrep/' + description + '.html');
     $("body").css("background-color", "#333");
  }
    });
  });
</script>
  */
