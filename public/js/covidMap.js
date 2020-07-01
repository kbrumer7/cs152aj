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
                description = 'az';
                break;
              case 'AR':
                description = 'ar';
                break;
              case 'CA':
                description = 'ca';
                break;
              case 'CO':
                description = 'co';
                break;
              case 'CT':
                description = 'ct';
                break;
              case 'DE':
                description = 'de';
                break;
              case 'FL':
                description = 'fl';
                break;
              case 'GA':
                description = 'ga';
                break;
              case 'HI':
                description = 'hi';
                break;
              case 'ID':
                description = 'id';
                break;
              case 'IL':
                description = 'il';
                break;
              case 'IN':
                description = 'in';
                break;
              case 'IA':
                description = 'ia';
                break;
              case 'KS':
                description = 'ks';
                break;
              case 'KY':
                description = 'ky';
                break;
              case 'LA':
                description = 'la';
                break;
              case 'ME':
                description = 'me';
                break;
              case 'MD':
                description = 'md';
                break;
              case 'MA':
                description = 'ma';
                break;
              case 'MI':
                description = 'mi';
                break;
              case 'MN':
                description = 'mn';
                break;
              case 'MS':
                description = 'ms';
                break;
              case 'MO':
                description = 'mo';
                break;
              case 'MT':
                description = 'mt';
                break;
              case 'NE':
                description = 'ne';
                break;
              case 'NV':
                  description = 'nv';
                  break;
              case 'NH':
                  description = 'nh';
                  break;
              case 'NJ':
                  description = 'nj';
                  break;
              case 'NM':
                  description = 'nm';
                  break;
              case 'NY':
                  description = 'ny';
                  break;
              case 'NC':
                  description = 'nc';
                  break;
              case 'ND':
                  description = 'nd';
                  break;
              case 'OH':
                  description = 'oh';
                  break;
              case 'OK':
                  description = 'ok';
                  break;
              case 'OR':
                  description = 'or';
                  break;
              case 'PA':
                  description = 'pa';
                  break;
              case 'RI':
                  description = 'ri';
                  break;
              case 'SC':
                  description = 'sc';
                  break;
              case 'SD':
                  description = 'sd';
                  break;
              case 'TN':
                  description = 'tn';
                  break;
              case 'TX':
                  description = 'tx';
                  break;
              case 'UT':
                  description = 'ut';
                  break;
              case 'VT':
                  description = 'vt';
                  break;
              case 'VA':
                  description = 'va';
                  break;
              case 'WA':
                  description = 'wa';
                  break;
              case 'WV':
                  description = 'wv';
                  break;
              case 'WI':
                  description = 'wi';
                  break;
              case 'WY':
                  description = 'wy';
                  break;
              case 'DC':
                  description = 'dc';
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
      'WA': {fill: 'orange'},
      'AK': {fill: 'blue'},
      'AR': {fill:'orange'},
      'AZ': {fill:'red'},
      'CO': {fill:'red'},
      'DE':{fill:'orange'},
      'FL':{fill:'orange'},
      'GA':{fill:'orange'},
      'HI':{fill:'orange'},
      'ID':{fill:'green'},
      'IL':{fill:'blue'},
      'IN':{fill:'green'},
      'IA':{fill:'orange'},
      'OK':{fill:'blue'},
      'NE':{fill:'blue'},
      'SD':{fill:'green'}


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
