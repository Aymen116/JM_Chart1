$(document).ready(function() {
    var current_date = new Date().getDate();
    var current_month = new Date().getMonth();
    var current_year = new Date().getFullYear();
    var dateFormat = "mm/dd/yy";
      from = $( "#from" )
        .datepicker({
          defaultDate: "+1w",
          changeMonth: true,
          numberOfMonths: 1,
          minDate: new Date(current_year - 30, current_month, current_date),
          maxDate:0,
          changeYear: true
          
        })
        .on( "change", function() {
          to.datepicker( "option", "minDate", getDate( this ) );
          setTimeout(() => {
            $( "#to" ).focus();
          }, 1000);
          setTimeout(function(){
          },1000);
  
          if($("#from").val() && $("#to").val()){
            getMetal();
            console.log(dataArray)
            const Date_from = new Date($( "#from" ).val());
            const Date_to = new Date($( "#to" ).val());
            dataFilter(Date_from,Date_to);
          }
        }), 
      to = $( "#to" ).datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1,
        maxDate: 0,
        changeYear: true
      })
      .on( "change", function() {
        to.datepicker( "option", "minDate", getDate( this ) )
        setTimeout(function(){
        },1000);
  
        if($("#from").val() && $("#to").val()){
          getMetal();
          const Date_from = new Date($( "#from" ).val());
          const Date_to = new Date($( "#to" ).val());
          dataFilter(Date_from,Date_to);
        }
      }), 
    to = $( "#to" ).datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      numberOfMonths: 1,
      maxDate: 0,
      changeYear: true
    });
    function getDate( element ) {
      var date;
      try {
        date = $.datepicker.parseDate( dateFormat, element.value );
      } catch( error ) {
        date = null;
      }
  
      return date;
    }
    function Random_Data(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
    }
    function dataFilter(Date_from,Date_to){
    
      for (let i = 0; i < dataArray.length; i++){
        var filter = [];
        var metalData = dataArray[i].dataPoints;
        for (let j = 0; j < metalData.length; j++) {
          var date = new Date(metalData[j].label);
          if (date.getTime() >= Date_from.getTime() && date.getTime()<= Date_to.getTime()){
           filter.push(metalData[j]);
          }
        }
        dataArray[i].dataPoints = filter
        setTimeout(function(){
          chart.destroy()
           generateChart(dataArray);
         },1000);
      }
      
  
     }
    var Metals = {};
  
    Metals.platinumMetal = {        
      type: "spline",  
      name: "Platinum",        
      showInLegend: true,
        dataPoints: [
          { label: "02 27 1991", y: Random_Data(1000, 1220)},{ label: "04 27 1991", y: Random_Data(1000, 1220)},{ label: "06 27 1991", y: Random_Data(1000, 1220)},{ label: "08 27 1991", y: Random_Data(1000, 1220)},{ label: "10 27 1991", y: Random_Data(1000, 1220)},{ label: "12 27 1991", y: Random_Data(1000, 1220)},
          { label: "02 27 1992", y: Random_Data(1000, 1220)},{ label: "04 27 1992", y: Random_Data(1000, 1220)},{ label: "06 27 1992", y: Random_Data(1000, 1220)},{ label: "08 27 1992", y: Random_Data(1000, 1220)},{ label: "10 27 1992", y: Random_Data(1000, 1220)},{ label: "12 27 1992", y: Random_Data(1000, 1220)},
          { label: "02 27 1993", y: Random_Data(1000, 1220)},{ label: "04 27 1993", y: Random_Data(1000, 1220)},{ label: "06 27 1993", y: Random_Data(1000, 1220)},{ label: "08 27 1993", y: Random_Data(1000, 1220)},{ label: "10 27 1993", y: Random_Data(1000, 1220)},{ label: "12 27 1993", y: Random_Data(1000, 1220)},
          { label: "02 27 1994", y: Random_Data(1000, 1220)},{ label: "04 27 1994", y: Random_Data(1000, 1220)},{ label: "06 27 1994", y: Random_Data(1000, 1220)},{ label: "08 27 1994", y: Random_Data(1000, 1220)},{ label: "10 27 1994", y: Random_Data(1000, 1220)},{ label: "12 27 1994", y: Random_Data(1000, 1220)},
          { label: "02 27 1995", y: Random_Data(1000, 1220)},{ label: "04 27 1995", y: Random_Data(1000, 1220)},{ label: "06 27 1995", y: Random_Data(1000, 1220)},{ label: "08 27 1995", y: Random_Data(1000, 1220)},{ label: "10 27 1995", y: Random_Data(1000, 1220)},{ label: "12 27 1995", y: Random_Data(1000, 1220)},
          { label: "02 27 1996", y: Random_Data(1000, 1220)},{ label: "04 27 1996", y: Random_Data(1000, 1220)},{ label: "06 27 1996", y: Random_Data(1000, 1220)},{ label: "08 27 1996", y: Random_Data(1000, 1220)},{ label: "10 27 1996", y: Random_Data(1000, 1220)},{ label: "12 27 1996", y: Random_Data(1000, 1220)},
          { label: "02 27 1997", y: Random_Data(1000, 1220)},{ label: "04 27 1997", y: Random_Data(1000, 1220)},{ label: "06 27 1997", y: Random_Data(1000, 1220)},{ label: "08 27 1997", y: Random_Data(1000, 1220)},{ label: "10 27 1997", y: Random_Data(1000, 1220)},{ label: "12 27 1997", y: Random_Data(1000, 1220)},
          { label: "02 27 1998", y: Random_Data(1000, 1220)},{ label: "04 27 1998", y: Random_Data(1000, 1220)},{ label: "06 27 1998", y: Random_Data(1000, 1220)},{ label: "08 27 1998", y: Random_Data(1000, 1220)},{ label: "10 27 1998", y: Random_Data(1000, 1220)},{ label: "12 27 1998", y: Random_Data(1000, 1220)},
          { label: "02 27 1999", y: Random_Data(1000, 1220)},{ label: "04 27 1999", y: Random_Data(1000, 1220)},{ label: "06 27 1999", y: Random_Data(1000, 1220)},{ label: "08 27 1999", y: Random_Data(1000, 1220)},{ label: "10 27 1999", y: Random_Data(1000, 1220)},{ label: "12 27 1999", y: Random_Data(1000, 1220)},
          { label: "02 27 2000", y: Random_Data(1000, 1220)},{ label: "04 27 2000", y: Random_Data(1000, 1220)},{ label: "06 27 2000", y: Random_Data(1000, 1220)},{ label: "08 27 2000", y: Random_Data(1000, 1220)},{ label: "10 27 2000", y: Random_Data(1000, 1220)},{ label: "12 27 2000", y: Random_Data(1000, 1220)},
          { label: "02 27 2001", y: Random_Data(1000, 1220)},{ label: "04 27 2001", y: Random_Data(1000, 1220)},{ label: "06 27 2001", y: Random_Data(1000, 1220)},{ label: "08 27 2001", y: Random_Data(1000, 1220)},{ label: "10 27 2001", y: Random_Data(1000, 1220)},{ label: "12 27 2001", y: Random_Data(1000, 1220)},
          { label: "02 27 2002", y: Random_Data(1000, 1220)},{ label: "04 27 2002", y: Random_Data(1000, 1220)},{ label: "06 27 2002", y: Random_Data(1000, 1220)},{ label: "08 27 2002", y: Random_Data(1000, 1220)},{ label: "10 27 2002", y: Random_Data(1000, 1220)},{ label: "12 27 2002", y: Random_Data(1000, 1220)},
          { label: "02 27 2003", y: Random_Data(1000, 1220)},{ label: "04 27 2003", y: Random_Data(1000, 1220)},{ label: "06 27 2003", y: Random_Data(1000, 1220)},{ label: "08 27 2003", y: Random_Data(1000, 1220)},{ label: "10 27 2003", y: Random_Data(1000, 1220)},{ label: "12 27 2003", y: Random_Data(1000, 1220)},
          { label: "02 27 2004", y: Random_Data(1000, 1220)},{ label: "04 27 2004", y: Random_Data(1000, 1220)},{ label: "06 27 2004", y: Random_Data(1000, 1220)},{ label: "08 27 2004", y: Random_Data(1000, 1220)},{ label: "10 27 2004", y: Random_Data(1000, 1220)},{ label: "12 27 2004", y: Random_Data(1000, 1220)},
          { label: "02 27 2005", y: Random_Data(1000, 1220)},{ label: "04 27 2005", y: Random_Data(1000, 1220)},{ label: "06 27 2005", y: Random_Data(1000, 1220)},{ label: "08 27 2005", y: Random_Data(1000, 1220)},{ label: "10 27 2005", y: Random_Data(1000, 1220)},{ label: "12 27 2005", y: Random_Data(1000, 1220)},
          { label: "02 27 2006", y: Random_Data(1000, 1220)},{ label: "04 27 2006", y: Random_Data(1000, 1220)},{ label: "06 27 2006", y: Random_Data(1000, 1220)},{ label: "08 27 2006", y: Random_Data(1000, 1220)},{ label: "10 27 2006", y: Random_Data(1000, 1220)},{ label: "12 27 2006", y: Random_Data(1000, 1220)},
          { label: "02 27 2007", y: Random_Data(1000, 1220)},{ label: "04 27 2007", y: Random_Data(1000, 1220)},{ label: "06 27 2007", y: Random_Data(1000, 1220)},{ label: "08 27 2007", y: Random_Data(1000, 1220)},{ label: "10 27 2007", y: Random_Data(1000, 1220)},{ label: "12 27 2007", y: Random_Data(1000, 1220)},
          { label: "02 27 2008", y: Random_Data(1000, 1220)},{ label: "04 27 2008", y: Random_Data(1000, 1220)},{ label: "06 27 2008", y: Random_Data(1000, 1220)},{ label: "08 27 2008", y: Random_Data(1000, 1220)},{ label: "10 27 2008", y: Random_Data(1000, 1220)},{ label: "12 27 2008", y: Random_Data(1000, 1220)},
          { label: "02 27 2009", y: Random_Data(1000, 1220)},{ label: "04 27 2009", y: Random_Data(1000, 1220)},{ label: "06 27 2009", y: Random_Data(1000, 1220)},{ label: "08 27 2009", y: Random_Data(1000, 1220)},{ label: "10 27 2009", y: Random_Data(1000, 1220)},{ label: "12 27 2009", y: Random_Data(1000, 1220)},
          { label: "02 27 2010", y: Random_Data(1000, 1220)},{ label: "04 27 2010", y: Random_Data(1000, 1220)},{ label: "06 27 2010", y: Random_Data(1000, 1220)},{ label: "08 27 2010", y: Random_Data(1000, 1220)},{ label: "10 27 2010", y: Random_Data(1000, 1220)},{ label: "12 27 2010", y: Random_Data(1000, 1220)},
          { label: "02 27 2011", y: Random_Data(1000, 1220)},{ label: "04 27 2011", y: Random_Data(1000, 1220)},{ label: "06 27 2011", y: Random_Data(1000, 1220)},{ label: "08 27 2011", y: Random_Data(1000, 1220)},{ label: "10 27 2011", y: Random_Data(1000, 1220)},{ label: "12 27 2011", y: Random_Data(1000, 1220)},
          { label: "02 27 2012", y: Random_Data(1000, 1220)},{ label: "04 27 2012", y: Random_Data(1000, 1220)},{ label: "06 27 2012", y: Random_Data(1000, 1220)},{ label: "08 27 2012", y: Random_Data(1000, 1220)},{ label: "10 27 2012", y: Random_Data(1000, 1220)},{ label: "12 27 2012", y: Random_Data(1000, 1220)},
          { label: "02 27 2013", y: Random_Data(1000, 1220)},{ label: "04 27 2013", y: Random_Data(1000, 1220)},{ label: "06 27 2013", y: Random_Data(1000, 1220)},{ label: "08 27 2013", y: Random_Data(1000, 1220)},{ label: "10 27 2013", y: Random_Data(1000, 1220)},{ label: "12 27 2013", y: Random_Data(1000, 1220)},
          { label: "02 27 2014", y: Random_Data(1000, 1220)},{ label: "04 27 2014", y: Random_Data(1000, 1220)},{ label: "06 27 2014", y: Random_Data(1000, 1220)},{ label: "08 27 2014", y: Random_Data(1000, 1220)},{ label: "10 27 2014", y: Random_Data(1000, 1220)},{ label: "12 27 2014", y: Random_Data(1000, 1220)},
          { label: "02 27 2015", y: Random_Data(1000, 1220)},{ label: "04 27 2015", y: Random_Data(1000, 1220)},{ label: "06 27 2015", y: Random_Data(1000, 1220)},{ label: "08 27 2015", y: Random_Data(1000, 1220)},{ label: "10 27 2015", y: Random_Data(1000, 1220)},{ label: "12 27 2015", y: Random_Data(1000, 1220)},
          { label: "02 27 2016", y: Random_Data(1000, 1220)},{ label: "04 27 2016", y: Random_Data(1000, 1220)},{ label: "06 27 2016", y: Random_Data(1000, 1220)},{ label: "08 27 2016", y: Random_Data(1000, 1220)},{ label: "10 27 2016", y: Random_Data(1000, 1220)},{ label: "12 27 2016", y: Random_Data(1000, 1220)},
          { label: "02 27 2017", y: Random_Data(1000, 1220)},{ label: "04 27 2017", y: Random_Data(1000, 1220)},{ label: "06 27 2017", y: Random_Data(1000, 1220)},{ label: "08 27 2017", y: Random_Data(1000, 1220)},{ label: "10 27 2017", y: Random_Data(1000, 1220)},{ label: "12 27 2017", y: Random_Data(1000, 1220)},
          { label: "02 27 2018", y: Random_Data(1000, 1220)},{ label: "04 27 2018", y: Random_Data(1000, 1220)},{ label: "06 27 2018", y: Random_Data(1000, 1220)},{ label: "08 27 2018", y: Random_Data(1000, 1220)},{ label: "10 27 2018", y: Random_Data(1000, 1220)},{ label: "12 27 2018", y: Random_Data(1000, 1220)},
          { label: "02 27 2019", y: Random_Data(1000, 1220)},{ label: "04 27 2019", y: Random_Data(1000, 1220)},{ label: "06 27 2019", y: Random_Data(1000, 1220)},{ label: "08 27 2019", y: Random_Data(1000, 1220)},{ label: "10 27 2019", y: Random_Data(1000, 1220)},{ label: "12 27 2019", y: Random_Data(1000, 1220)},
          { label: "02 27 2020", y: Random_Data(1000, 1220)},{ label: "04 27 2020", y: Random_Data(1000, 1220)},{ label: "06 27 2020", y: Random_Data(1000, 1220)},{ label: "08 27 2020", y: Random_Data(1000, 1220)},{ label: "10 27 2020", y: Random_Data(1000, 1220)},{ label: "12 27 2020", y: Random_Data(1000, 1220)},
          { label: "02 27 2021", y: Random_Data(1000, 1220)},{ label: "04 27 2021", y: Random_Data(1000, 1220)},{ label: "06 27 2021", y: Random_Data(1000, 1220)},{ label: "08 27 2021", y: Random_Data(1000, 1220)},{ label: "10 27 2021", y: Random_Data(1000, 1220)},{ label: "12 27 2021", y: Random_Data(1000, 1220)},
          { label: "02 27 2022", y: Random_Data(1000, 1220)},{ label: "04 27 2022", y: Random_Data(1000, 1220)},{ label: "06 27 2022", y: Random_Data(1000, 1220)},{ label: "08 27 2022", y: Random_Data(1000, 1220)},{ label: "10 27 2022", y: Random_Data(1000, 1220)},{ label: "12 27 2022",  y: Random_Data(1000, 1220)},
        ],
      toolTip: {
      fontColor:"black",
      }
    };
  
    Metals.palladiumMetal = {        
      type: "spline",
      name: "Palladium",        
      showInLegend: true,
      dataPoints: [
        { label: "02 27 1991", y: Random_Data(2320, 2900)},{ label: "04 27 1991", y: Random_Data(2320, 2900)},{ label: "06 27 1991", y: Random_Data(2320, 2900)},{ label: "08 27 1991", y: Random_Data(2320, 2900)},{ label: "10 27 1991", y: Random_Data(2320, 2900)},{ label: "12 27 1991", y: Random_Data(2320, 2900)},
        { label: "02 27 1992", y: Random_Data(2320, 2900)},{ label: "04 27 1992", y: Random_Data(2320, 2900)},{ label: "06 27 1992", y: Random_Data(2320, 2900)},{ label: "08 27 1992", y: Random_Data(2320, 2900)},{ label: "10 27 1992", y: Random_Data(2320, 2900)},{ label: "12 27 1992", y: Random_Data(2320, 2900)},
        { label: "02 27 1993", y: Random_Data(2320, 2900)},{ label: "04 27 1993", y: Random_Data(2320, 2900)},{ label: "06 27 1993", y: Random_Data(2320, 2900)},{ label: "08 27 1993", y: Random_Data(2320, 2900)},{ label: "10 27 1993", y: Random_Data(2320, 2900)},{ label: "12 27 1993", y: Random_Data(2320, 2900)},
        { label: "02 27 1994", y: Random_Data(2320, 2900)},{ label: "04 27 1994", y: Random_Data(2320, 2900)},{ label: "06 27 1994", y: Random_Data(2320, 2900)},{ label: "08 27 1994", y: Random_Data(2320, 2900)},{ label: "10 27 1994", y: Random_Data(2320, 2900)},{ label: "12 27 1994", y: Random_Data(2320, 2900)},
        { label: "02 27 1995", y: Random_Data(2320, 2900)},{ label: "04 27 1995", y: Random_Data(2320, 2900)},{ label: "06 27 1995", y: Random_Data(2320, 2900)},{ label: "08 27 1995", y: Random_Data(2320, 2900)},{ label: "10 27 1995", y: Random_Data(2320, 2900)},{ label: "12 27 1995", y: Random_Data(2320, 2900)},
        { label: "02 27 1996", y: Random_Data(2320, 2900)},{ label: "04 27 1996", y: Random_Data(2320, 2900)},{ label: "06 27 1996", y: Random_Data(2320, 2900)},{ label: "08 27 1996", y: Random_Data(2320, 2900)},{ label: "10 27 1996", y: Random_Data(2320, 2900)},{ label: "12 27 1996", y: Random_Data(2320, 2900)},
        { label: "02 27 1997", y: Random_Data(2320, 2900)},{ label: "04 27 1997", y: Random_Data(2320, 2900)},{ label: "06 27 1997", y: Random_Data(2320, 2900)},{ label: "08 27 1997", y: Random_Data(2320, 2900)},{ label: "10 27 1997", y: Random_Data(2320, 2900)},{ label: "12 27 1997", y: Random_Data(2320, 2900)},
        { label: "02 27 1998", y: Random_Data(2320, 2900)},{ label: "04 27 1998", y: Random_Data(2320, 2900)},{ label: "06 27 1998", y: Random_Data(2320, 2900)},{ label: "08 27 1998", y: Random_Data(2320, 2900)},{ label: "10 27 1998", y: Random_Data(2320, 2900)},{ label: "12 27 1998", y: Random_Data(2320, 2900)},
        { label: "02 27 1999", y: Random_Data(2320, 2900)},{ label: "04 27 1999", y: Random_Data(2320, 2900)},{ label: "06 27 1999", y: Random_Data(2320, 2900)},{ label: "08 27 1999", y: Random_Data(2320, 2900)},{ label: "10 27 1999", y: Random_Data(2320, 2900)},{ label: "12 27 1999", y: Random_Data(2320, 2900)},
        { label: "02 27 2000", y: Random_Data(2320, 2900)},{ label: "04 27 2000", y: Random_Data(2320, 2900)},{ label: "06 27 2000", y: Random_Data(2320, 2900)},{ label: "08 27 2000", y: Random_Data(2320, 2900)},{ label: "10 27 2000", y: Random_Data(2320, 2900)},{ label: "12 27 2000", y: Random_Data(2320, 2900)},
        { label: "02 27 2001", y: Random_Data(2320, 2900)},{ label: "04 27 2001", y: Random_Data(2320, 2900)},{ label: "06 27 2001", y: Random_Data(2320, 2900)},{ label: "08 27 2001", y: Random_Data(2320, 2900)},{ label: "10 27 2001", y: Random_Data(2320, 2900)},{ label: "12 27 2001", y: Random_Data(2320, 2900)},
        { label: "02 27 2002", y: Random_Data(2320, 2900)},{ label: "04 27 2002", y: Random_Data(2320, 2900)},{ label: "06 27 2002", y: Random_Data(2320, 2900)},{ label: "08 27 2002", y: Random_Data(2320, 2900)},{ label: "10 27 2002", y: Random_Data(2320, 2900)},{ label: "12 27 2002", y: Random_Data(2320, 2900)},
        { label: "02 27 2003", y: Random_Data(2320, 2900)},{ label: "04 27 2003", y: Random_Data(2320, 2900)},{ label: "06 27 2003", y: Random_Data(2320, 2900)},{ label: "08 27 2003", y: Random_Data(2320, 2900)},{ label: "10 27 2003", y: Random_Data(2320, 2900)},{ label: "12 27 2003", y: Random_Data(2320, 2900)},
        { label: "02 27 2004", y: Random_Data(2320, 2900)},{ label: "04 27 2004", y: Random_Data(2320, 2900)},{ label: "06 27 2004", y: Random_Data(2320, 2900)},{ label: "08 27 2004", y: Random_Data(2320, 2900)},{ label: "10 27 2004", y: Random_Data(2320, 2900)},{ label: "12 27 2004", y: Random_Data(2320, 2900)},
        { label: "02 27 2005", y: Random_Data(2320, 2900)},{ label: "04 27 2005", y: Random_Data(2320, 2900)},{ label: "06 27 2005", y: Random_Data(2320, 2900)},{ label: "08 27 2005", y: Random_Data(2320, 2900)},{ label: "10 27 2005", y: Random_Data(2320, 2900)},{ label: "12 27 2005", y: Random_Data(2320, 2900)},
        { label: "02 27 2006", y: Random_Data(2320, 2900)},{ label: "04 27 2006", y: Random_Data(2320, 2900)},{ label: "06 27 2006", y: Random_Data(2320, 2900)},{ label: "08 27 2006", y: Random_Data(2320, 2900)},{ label: "10 27 2006", y: Random_Data(2320, 2900)},{ label: "12 27 2006", y: Random_Data(2320, 2900)},
        { label: "02 27 2007", y: Random_Data(2320, 2900)},{ label: "04 27 2007", y: Random_Data(2320, 2900)},{ label: "06 27 2007", y: Random_Data(2320, 2900)},{ label: "08 27 2007", y: Random_Data(2320, 2900)},{ label: "10 27 2007", y: Random_Data(2320, 2900)},{ label: "12 27 2007", y: Random_Data(2320, 2900)},
        { label: "02 27 2008", y: Random_Data(2320, 2900)},{ label: "04 27 2008", y: Random_Data(2320, 2900)},{ label: "06 27 2008", y: Random_Data(2320, 2900)},{ label: "08 27 2008", y: Random_Data(2320, 2900)},{ label: "10 27 2008", y: Random_Data(2320, 2900)},{ label: "12 27 2008", y: Random_Data(2320, 2900)},
        { label: "02 27 2009", y: Random_Data(2320, 2900)},{ label: "04 27 2009", y: Random_Data(2320, 2900)},{ label: "06 27 2009", y: Random_Data(2320, 2900)},{ label: "08 27 2009", y: Random_Data(2320, 2900)},{ label: "10 27 2009", y: Random_Data(2320, 2900)},{ label: "12 27 2009", y: Random_Data(2320, 2900)},
        { label: "02 27 2010", y: Random_Data(2320, 2900)},{ label: "04 27 2010", y: Random_Data(2320, 2900)},{ label: "06 27 2010", y: Random_Data(2320, 2900)},{ label: "08 27 2010", y: Random_Data(2320, 2900)},{ label: "10 27 2010", y: Random_Data(2320, 2900)},{ label: "12 27 2010", y: Random_Data(2320, 2900)},
        { label: "02 27 2011", y: Random_Data(2320, 2900)},{ label: "04 27 2011", y: Random_Data(2320, 2900)},{ label: "06 27 2011", y: Random_Data(2320, 2900)},{ label: "08 27 2011", y: Random_Data(2320, 2900)},{ label: "10 27 2011", y: Random_Data(2320, 2900)},{ label: "12 27 2011", y: Random_Data(2320, 2900)},
        { label: "02 27 2012", y: Random_Data(2320, 2900)},{ label: "04 27 2012", y: Random_Data(2320, 2900)},{ label: "06 27 2012", y: Random_Data(2320, 2900)},{ label: "08 27 2012", y: Random_Data(2320, 2900)},{ label: "10 27 2012", y: Random_Data(2320, 2900)},{ label: "12 27 2012", y: Random_Data(2320, 2900)},
        { label: "02 27 2013", y: Random_Data(2320, 2900)},{ label: "04 27 2013", y: Random_Data(2320, 2900)},{ label: "06 27 2013", y: Random_Data(2320, 2900)},{ label: "08 27 2013", y: Random_Data(2320, 2900)},{ label: "10 27 2013", y: Random_Data(2320, 2900)},{ label: "12 27 2013", y: Random_Data(2320, 2900)},
        { label: "02 27 2014", y: Random_Data(2320, 2900)},{ label: "04 27 2014", y: Random_Data(2320, 2900)},{ label: "06 27 2014", y: Random_Data(2320, 2900)},{ label: "08 27 2014", y: Random_Data(2320, 2900)},{ label: "10 27 2014", y: Random_Data(2320, 2900)},{ label: "12 27 2014", y: Random_Data(2320, 2900)},
        { label: "02 27 2015", y: Random_Data(2320, 2900)},{ label: "04 27 2015", y: Random_Data(2320, 2900)},{ label: "06 27 2015", y: Random_Data(2320, 2900)},{ label: "08 27 2015", y: Random_Data(2320, 2900)},{ label: "10 27 2015", y: Random_Data(2320, 2900)},{ label: "12 27 2015", y: Random_Data(2320, 2900)},
        { label: "02 27 2016", y: Random_Data(2320, 2900)},{ label: "04 27 2016", y: Random_Data(2320, 2900)},{ label: "06 27 2016", y: Random_Data(2320, 2900)},{ label: "08 27 2016", y: Random_Data(2320, 2900)},{ label: "10 27 2016", y: Random_Data(2320, 2900)},{ label: "12 27 2016", y: Random_Data(2320, 2900)},
        { label: "02 27 2017", y: Random_Data(2320, 2900)},{ label: "04 27 2017", y: Random_Data(2320, 2900)},{ label: "06 27 2017", y: Random_Data(2320, 2900)},{ label: "08 27 2017", y: Random_Data(2320, 2900)},{ label: "10 27 2017", y: Random_Data(2320, 2900)},{ label: "12 27 2017", y: Random_Data(2320, 2900)},
        { label: "02 27 2018", y: Random_Data(2320, 2900)},{ label: "04 27 2018", y: Random_Data(2320, 2900)},{ label: "06 27 2018", y: Random_Data(2320, 2900)},{ label: "08 27 2018", y: Random_Data(2320, 2900)},{ label: "10 27 2018", y: Random_Data(2320, 2900)},{ label: "12 27 2018", y: Random_Data(2320, 2900)},
        { label: "02 27 2019", y: Random_Data(2320, 2900)},{ label: "04 27 2019", y: Random_Data(2320, 2900)},{ label: "06 27 2019", y: Random_Data(2320, 2900)},{ label: "08 27 2019", y: Random_Data(2320, 2900)},{ label: "10 27 2019", y: Random_Data(2320, 2900)},{ label: "12 27 2019", y: Random_Data(2320, 2900)},
        { label: "02 27 2020", y: Random_Data(2320, 2900)},{ label: "04 27 2020", y: Random_Data(2320, 2900)},{ label: "06 27 2020", y: Random_Data(2320, 2900)},{ label: "08 27 2020", y: Random_Data(2320, 2900)},{ label: "10 27 2020", y: Random_Data(2320, 2900)},{ label: "12 27 2020", y: Random_Data(2320, 2900)},
        { label: "02 27 2021", y: Random_Data(2320, 2900)},{ label: "04 27 2021", y: Random_Data(2320, 2900)},{ label: "06 27 2021", y: Random_Data(2320, 2900)},{ label: "08 27 2021", y: Random_Data(2320, 2900)},{ label: "10 27 2021", y: Random_Data(2320, 2900)},{ label: "12 27 2021", y: Random_Data(2320, 2900)},
        { label: "02 27 2022", y: Random_Data(2320, 2900)},{ label: "04 27 2022", y: Random_Data(2320, 2900)},{ label: "06 27 2022", y: Random_Data(2320, 2900)},{ label: "08 27 2022", y: Random_Data(2320, 2900)},{ label: "10 27 2022", y: Random_Data(2320, 2900)},{ label: "12 27 2022", y: Random_Data(2320, 2900)},
    ],
    };
  
    Metals.rhodiumMetal = {        
      type: "spline",  
      name: "Rhodium",        
      showInLegend: true,
      dataPoints: [
        { label: "02 27 1991", y: Random_Data(15678, 17543)},{ label: "04 27 1991", y: Random_Data(15678, 17543)},{ label: "06 27 1991", y: Random_Data(15678, 17543)},{ label: "08 27 1991", y: Random_Data(15678, 17543)},{ label: "10 27 1991", y: Random_Data(15678, 17543)},{ label: "12 27 1991", y: Random_Data(15678, 17543)},
        { label: "02 27 1992", y: Random_Data(15678, 17543)},{ label: "04 27 1992", y: Random_Data(15678, 17543)},{ label: "06 27 1992", y: Random_Data(15678, 17543)},{ label: "08 27 1992", y: Random_Data(15678, 17543)},{ label: "10 27 1992", y: Random_Data(15678, 17543)},{ label: "12 27 1992", y: Random_Data(15678, 17543)},
        { label: "02 27 1993", y: Random_Data(15678, 17543)},{ label: "04 27 1993", y: Random_Data(15678, 17543)},{ label: "06 27 1993", y: Random_Data(15678, 17543)},{ label: "08 27 1993", y: Random_Data(15678, 17543)},{ label: "10 27 1993", y: Random_Data(15678, 17543)},{ label: "12 27 1993", y: Random_Data(15678, 17543)},
        { label: "02 27 1994", y: Random_Data(15678, 17543)},{ label: "04 27 1994", y: Random_Data(15678, 17543)},{ label: "06 27 1994", y: Random_Data(15678, 17543)},{ label: "08 27 1994", y: Random_Data(15678, 17543)},{ label: "10 27 1994", y: Random_Data(15678, 17543)},{ label: "12 27 1994", y: Random_Data(15678, 17543)},
        { label: "02 27 1995", y: Random_Data(15678, 17543)},{ label: "04 27 1995", y: Random_Data(15678, 17543)},{ label: "06 27 1995", y: Random_Data(15678, 17543)},{ label: "08 27 1995", y: Random_Data(15678, 17543)},{ label: "10 27 1995", y: Random_Data(15678, 17543)},{ label: "12 27 1995", y: Random_Data(15678, 17543)},
        { label: "02 27 1996", y: Random_Data(15678, 17543)},{ label: "04 27 1996", y: Random_Data(15678, 17543)},{ label: "06 27 1996", y: Random_Data(15678, 17543)},{ label: "08 27 1996", y: Random_Data(15678, 17543)},{ label: "10 27 1996", y: Random_Data(15678, 17543)},{ label: "12 27 1996", y: Random_Data(15678, 17543)},
        { label: "02 27 1997", y: Random_Data(15678, 17543)},{ label: "04 27 1997", y: Random_Data(15678, 17543)},{ label: "06 27 1997", y: Random_Data(15678, 17543)},{ label: "08 27 1997", y: Random_Data(15678, 17543)},{ label: "10 27 1997", y: Random_Data(15678, 17543)},{ label: "12 27 1997", y: Random_Data(15678, 17543)},
        { label: "02 27 1998", y: Random_Data(15678, 17543)},{ label: "04 27 1998", y: Random_Data(15678, 17543)},{ label: "06 27 1998", y: Random_Data(15678, 17543)},{ label: "08 27 1998", y: Random_Data(15678, 17543)},{ label: "10 27 1998", y: Random_Data(15678, 17543)},{ label: "12 27 1998", y: Random_Data(15678, 17543)},
        { label: "02 27 1999", y: Random_Data(15678, 17543)},{ label: "04 27 1999", y: Random_Data(15678, 17543)},{ label: "06 27 1999", y: Random_Data(15678, 17543)},{ label: "08 27 1999", y: Random_Data(15678, 17543)},{ label: "10 27 1999", y: Random_Data(15678, 17543)},{ label: "12 27 1999", y: Random_Data(15678, 17543)},
        { label: "02 27 2000", y: Random_Data(15678, 17543)},{ label: "04 27 2000", y: Random_Data(15678, 17543)},{ label: "06 27 2000", y: Random_Data(15678, 17543)},{ label: "08 27 2000", y: Random_Data(15678, 17543)},{ label: "10 27 2000", y: Random_Data(15678, 17543)},{ label: "12 27 2000", y: Random_Data(15678, 17543)},
        { label: "02 27 2001", y: Random_Data(15678, 17543)},{ label: "04 27 2001", y: Random_Data(15678, 17543)},{ label: "06 27 2001", y: Random_Data(15678, 17543)},{ label: "08 27 2001", y: Random_Data(15678, 17543)},{ label: "10 27 2001", y: Random_Data(15678, 17543)},{ label: "12 27 2001", y: Random_Data(15678, 17543)},
        { label: "02 27 2002", y: Random_Data(15678, 17543)},{ label: "04 27 2002", y: Random_Data(15678, 17543)},{ label: "06 27 2002", y: Random_Data(15678, 17543)},{ label: "08 27 2002", y: Random_Data(15678, 17543)},{ label: "10 27 2002", y: Random_Data(15678, 17543)},{ label: "12 27 2002", y: Random_Data(15678, 17543)},
        { label: "02 27 2003", y: Random_Data(15678, 17543)},{ label: "04 27 2003", y: Random_Data(15678, 17543)},{ label: "06 27 2003", y: Random_Data(15678, 17543)},{ label: "08 27 2003", y: Random_Data(15678, 17543)},{ label: "10 27 2003", y: Random_Data(15678, 17543)},{ label: "12 27 2003", y: Random_Data(15678, 17543)},
        { label: "02 27 2004", y: Random_Data(15678, 17543)},{ label: "04 27 2004", y: Random_Data(15678, 17543)},{ label: "06 27 2004", y: Random_Data(15678, 17543)},{ label: "08 27 2004", y: Random_Data(15678, 17543)},{ label: "10 27 2004", y: Random_Data(15678, 17543)},{ label: "12 27 2004", y: Random_Data(15678, 17543)},
        { label: "02 27 2005", y: Random_Data(15678, 17543)},{ label: "04 27 2005", y: Random_Data(15678, 17543)},{ label: "06 27 2005", y: Random_Data(15678, 17543)},{ label: "08 27 2005", y: Random_Data(15678, 17543)},{ label: "10 27 2005", y: Random_Data(15678, 17543)},{ label: "12 27 2005", y: Random_Data(15678, 17543)},
        { label: "02 27 2006", y: Random_Data(15678, 17543)},{ label: "04 27 2006", y: Random_Data(15678, 17543)},{ label: "06 27 2006", y: Random_Data(15678, 17543)},{ label: "08 27 2006", y: Random_Data(15678, 17543)},{ label: "10 27 2006", y: Random_Data(15678, 17543)},{ label: "12 27 2006", y: Random_Data(15678, 17543)},
        { label: "02 27 2007", y: Random_Data(15678, 17543)},{ label: "04 27 2007", y: Random_Data(15678, 17543)},{ label: "06 27 2007", y: Random_Data(15678, 17543)},{ label: "08 27 2007", y: Random_Data(15678, 17543)},{ label: "10 27 2007", y: Random_Data(15678, 17543)},{ label: "12 27 2007", y: Random_Data(15678, 17543)},
        { label: "02 27 2008", y: Random_Data(15678, 17543)},{ label: "04 27 2008", y: Random_Data(15678, 17543)},{ label: "06 27 2008", y: Random_Data(15678, 17543)},{ label: "08 27 2008", y: Random_Data(15678, 17543)},{ label: "10 27 2008", y: Random_Data(15678, 17543)},{ label: "12 27 2008", y: Random_Data(15678, 17543)},
        { label: "02 27 2009", y: Random_Data(15678, 17543)},{ label: "04 27 2009", y: Random_Data(15678, 17543)},{ label: "06 27 2009", y: Random_Data(15678, 17543)},{ label: "08 27 2009", y: Random_Data(15678, 17543)},{ label: "10 27 2009", y: Random_Data(15678, 17543)},{ label: "12 27 2009", y: Random_Data(15678, 17543)},
        { label: "02 27 2010", y: Random_Data(15678, 17543)},{ label: "04 27 2010", y: Random_Data(15678, 17543)},{ label: "06 27 2010", y: Random_Data(15678, 17543)},{ label: "08 27 2010", y: Random_Data(15678, 17543)},{ label: "10 27 2010", y: Random_Data(15678, 17543)},{ label: "12 27 2010", y: Random_Data(15678, 17543)},
        { label: "02 27 2011", y: Random_Data(15678, 17543)},{ label: "04 27 2011", y: Random_Data(15678, 17543)},{ label: "06 27 2011", y: Random_Data(15678, 17543)},{ label: "08 27 2011", y: Random_Data(15678, 17543)},{ label: "10 27 2011", y: Random_Data(15678, 17543)},{ label: "12 27 2011", y: Random_Data(15678, 17543)},
        { label: "02 27 2012", y: Random_Data(15678, 17543)},{ label: "04 27 2012", y: Random_Data(15678, 17543)},{ label: "06 27 2012", y: Random_Data(15678, 17543)},{ label: "08 27 2012", y: Random_Data(15678, 17543)},{ label: "10 27 2012", y: Random_Data(15678, 17543)},{ label: "12 27 2012", y: Random_Data(15678, 17543)},
        { label: "02 27 2013", y: Random_Data(15678, 17543)},{ label: "04 27 2013", y: Random_Data(15678, 17543)},{ label: "06 27 2013", y: Random_Data(15678, 17543)},{ label: "08 27 2013", y: Random_Data(15678, 17543)},{ label: "10 27 2013", y: Random_Data(15678, 17543)},{ label: "12 27 2013", y: Random_Data(15678, 17543)},
        { label: "02 27 2014", y: Random_Data(15678, 17543)},{ label: "04 27 2014", y: Random_Data(15678, 17543)},{ label: "06 27 2014", y: Random_Data(15678, 17543)},{ label: "08 27 2014", y: Random_Data(15678, 17543)},{ label: "10 27 2014", y: Random_Data(15678, 17543)},{ label: "12 27 2014", y: Random_Data(15678, 17543)},
        { label: "02 27 2015", y: Random_Data(15678, 17543)},{ label: "04 27 2015", y: Random_Data(15678, 17543)},{ label: "06 27 2015", y: Random_Data(15678, 17543)},{ label: "08 27 2015", y: Random_Data(15678, 17543)},{ label: "10 27 2015", y: Random_Data(15678, 17543)},{ label: "12 27 2015", y: Random_Data(15678, 17543)},
        { label: "02 27 2016", y: Random_Data(15678, 17543)},{ label: "04 27 2016", y: Random_Data(15678, 17543)},{ label: "06 27 2016", y: Random_Data(15678, 17543)},{ label: "08 27 2016", y: Random_Data(15678, 17543)},{ label: "10 27 2016", y: Random_Data(15678, 17543)},{ label: "12 27 2016", y: Random_Data(15678, 17543)},
        { label: "02 27 2017", y: Random_Data(15678, 17543)},{ label: "04 27 2017", y: Random_Data(15678, 17543)},{ label: "06 27 2017", y: Random_Data(15678, 17543)},{ label: "08 27 2017", y: Random_Data(15678, 17543)},{ label: "10 27 2017", y: Random_Data(15678, 17543)},{ label: "12 27 2017", y: Random_Data(15678, 17543)},
        { label: "02 27 2018", y: Random_Data(15678, 17543)},{ label: "04 27 2018", y: Random_Data(15678, 17543)},{ label: "06 27 2018", y: Random_Data(15678, 17543)},{ label: "08 27 2018", y: Random_Data(15678, 17543)},{ label: "10 27 2018", y: Random_Data(15678, 17543)},{ label: "12 27 2018", y: Random_Data(15678, 17543)},
        { label: "02 27 2019", y: Random_Data(15678, 17543)},{ label: "04 27 2019", y: Random_Data(15678, 17543)},{ label: "06 27 2019", y: Random_Data(15678, 17543)},{ label: "08 27 2019", y: Random_Data(15678, 17543)},{ label: "10 27 2019", y: Random_Data(15678, 17543)},{ label: "12 27 2019", y: Random_Data(15678, 17543)},
        { label: "02 27 2020", y: Random_Data(15678, 17543)},{ label: "04 27 2020", y: Random_Data(15678, 17543)},{ label: "06 27 2020", y: Random_Data(15678, 17543)},{ label: "08 27 2020", y: Random_Data(15678, 17543)},{ label: "10 27 2020", y: Random_Data(15678, 17543)},{ label: "12 27 2020", y: Random_Data(15678, 17543)},
        { label: "02 27 2021", y: Random_Data(15678, 17543)},{ label: "04 27 2021", y: Random_Data(15678, 17543)},{ label: "06 27 2021", y: Random_Data(15678, 17543)},{ label: "08 27 2021", y: Random_Data(15678, 17543)},{ label: "10 27 2021", y: Random_Data(15678, 17543)},{ label: "12 27 2021", y: Random_Data(15678, 17543)},
        { label: "02 27 2022", y: Random_Data(15678, 17543)},{ label: "04 27 2022", y: Random_Data(15678, 17543)},{ label: "06 27 2022", y: Random_Data(15678, 17543)},{ label: "08 27 2022", y: Random_Data(15678, 17543)},{ label: "10 27 2022", y: Random_Data(15678, 17543)},{ label: "12 27 2022", y: Random_Data(15678, 17543)},
    ],
    };
  
    Metals.iridiumMetal = {        
      type: "spline",  
      name: "Iridium",        
      showInLegend: true,
      dataPoints: [
        { label: "02 27 1991", y: Random_Data(4683, 7435)},{ label: "04 27 1991", y: Random_Data(4683, 7435)},{ label: "06 27 1991", y: Random_Data(4683, 7435)},{ label: "08 27 1991", y: Random_Data(4683, 7435)},{ label: "10 27 1991", y: Random_Data(4683, 7435)},{ label: "12 27 1991", y: Random_Data(4683, 7435)},
        { label: "02 27 1992", y: Random_Data(4683, 7435)},{ label: "04 27 1992", y: Random_Data(4683, 7435)},{ label: "06 27 1992", y: Random_Data(4683, 7435)},{ label: "08 27 1992", y: Random_Data(4683, 7435)},{ label: "10 27 1992", y: Random_Data(4683, 7435)},{ label: "12 27 1992", y: Random_Data(4683, 7435)},
        { label: "02 27 1993", y: Random_Data(4683, 7435)},{ label: "04 27 1993", y: Random_Data(4683, 7435)},{ label: "06 27 1993", y: Random_Data(4683, 7435)},{ label: "08 27 1993", y: Random_Data(4683, 7435)},{ label: "10 27 1993", y: Random_Data(4683, 7435)},{ label: "12 27 1993", y: Random_Data(4683, 7435)},
        { label: "02 27 1994", y: Random_Data(4683, 7435)},{ label: "04 27 1994", y: Random_Data(4683, 7435)},{ label: "06 27 1994", y: Random_Data(4683, 7435)},{ label: "08 27 1994", y: Random_Data(4683, 7435)},{ label: "10 27 1994", y: Random_Data(4683, 7435)},{ label: "12 27 1994", y: Random_Data(4683, 7435)},
        { label: "02 27 1995", y: Random_Data(4683, 7435)},{ label: "04 27 1995", y: Random_Data(4683, 7435)},{ label: "06 27 1995", y: Random_Data(4683, 7435)},{ label: "08 27 1995", y: Random_Data(4683, 7435)},{ label: "10 27 1995", y: Random_Data(4683, 7435)},{ label: "12 27 1995", y: Random_Data(4683, 7435)},
        { label: "02 27 1996", y: Random_Data(4683, 7435)},{ label: "04 27 1996", y: Random_Data(4683, 7435)},{ label: "06 27 1996", y: Random_Data(4683, 7435)},{ label: "08 27 1996", y: Random_Data(4683, 7435)},{ label: "10 27 1996", y: Random_Data(4683, 7435)},{ label: "12 27 1996", y: Random_Data(4683, 7435)},
        { label: "02 27 1997", y: Random_Data(4683, 7435)},{ label: "04 27 1997", y: Random_Data(4683, 7435)},{ label: "06 27 1997", y: Random_Data(4683, 7435)},{ label: "08 27 1997", y: Random_Data(4683, 7435)},{ label: "10 27 1997", y: Random_Data(4683, 7435)},{ label: "12 27 1997", y: Random_Data(4683, 7435)},
        { label: "02 27 1998", y: Random_Data(4683, 7435)},{ label: "04 27 1998", y: Random_Data(4683, 7435)},{ label: "06 27 1998", y: Random_Data(4683, 7435)},{ label: "08 27 1998", y: Random_Data(4683, 7435)},{ label: "10 27 1998", y: Random_Data(4683, 7435)},{ label: "12 27 1998", y: Random_Data(4683, 7435)},
        { label: "02 27 1999", y: Random_Data(4683, 7435)},{ label: "04 27 1999", y: Random_Data(4683, 7435)},{ label: "06 27 1999", y: Random_Data(4683, 7435)},{ label: "08 27 1999", y: Random_Data(4683, 7435)},{ label: "10 27 1999", y: Random_Data(4683, 7435)},{ label: "12 27 1999", y: Random_Data(4683, 7435)},
        { label: "02 27 2000", y: Random_Data(4683, 7435)},{ label: "04 27 2000", y: Random_Data(4683, 7435)},{ label: "06 27 2000", y: Random_Data(4683, 7435)},{ label: "08 27 2000", y: Random_Data(4683, 7435)},{ label: "10 27 2000", y: Random_Data(4683, 7435)},{ label: "12 27 2000", y: Random_Data(4683, 7435)},
        { label: "02 27 2001", y: Random_Data(4683, 7435)},{ label: "04 27 2001", y: Random_Data(4683, 7435)},{ label: "06 27 2001", y: Random_Data(4683, 7435)},{ label: "08 27 2001", y: Random_Data(4683, 7435)},{ label: "10 27 2001", y: Random_Data(4683, 7435)},{ label: "12 27 2001", y: Random_Data(4683, 7435)},
        { label: "02 27 2002", y: Random_Data(4683, 7435)},{ label: "04 27 2002", y: Random_Data(4683, 7435)},{ label: "06 27 2002", y: Random_Data(4683, 7435)},{ label: "08 27 2002", y: Random_Data(4683, 7435)},{ label: "10 27 2002", y: Random_Data(4683, 7435)},{ label: "12 27 2002", y: Random_Data(4683, 7435)},
        { label: "02 27 2003", y: Random_Data(4683, 7435)},{ label: "04 27 2003", y: Random_Data(4683, 7435)},{ label: "06 27 2003", y: Random_Data(4683, 7435)},{ label: "08 27 2003", y: Random_Data(4683, 7435)},{ label: "10 27 2003", y: Random_Data(4683, 7435)},{ label: "12 27 2003", y: Random_Data(4683, 7435)},
        { label: "02 27 2004", y: Random_Data(4683, 7435)},{ label: "04 27 2004", y: Random_Data(4683, 7435)},{ label: "06 27 2004", y: Random_Data(4683, 7435)},{ label: "08 27 2004", y: Random_Data(4683, 7435)},{ label: "10 27 2004", y: Random_Data(4683, 7435)},{ label: "12 27 2004", y: Random_Data(4683, 7435)},
        { label: "02 27 2005", y: Random_Data(4683, 7435)},{ label: "04 27 2005", y: Random_Data(4683, 7435)},{ label: "06 27 2005", y: Random_Data(4683, 7435)},{ label: "08 27 2005", y: Random_Data(4683, 7435)},{ label: "10 27 2005", y: Random_Data(4683, 7435)},{ label: "12 27 2005", y: Random_Data(4683, 7435)},
        { label: "02 27 2006", y: Random_Data(4683, 7435)},{ label: "04 27 2006", y: Random_Data(4683, 7435)},{ label: "06 27 2006", y: Random_Data(4683, 7435)},{ label: "08 27 2006", y: Random_Data(4683, 7435)},{ label: "10 27 2006", y: Random_Data(4683, 7435)},{ label: "12 27 2006", y: Random_Data(4683, 7435)},
        { label: "02 27 2007", y: Random_Data(4683, 7435)},{ label: "04 27 2007", y: Random_Data(4683, 7435)},{ label: "06 27 2007", y: Random_Data(4683, 7435)},{ label: "08 27 2007", y: Random_Data(4683, 7435)},{ label: "10 27 2007", y: Random_Data(4683, 7435)},{ label: "12 27 2007", y: Random_Data(4683, 7435)},
        { label: "02 27 2008", y: Random_Data(4683, 7435)},{ label: "04 27 2008", y: Random_Data(4683, 7435)},{ label: "06 27 2008", y: Random_Data(4683, 7435)},{ label: "08 27 2008", y: Random_Data(4683, 7435)},{ label: "10 27 2008", y: Random_Data(4683, 7435)},{ label: "12 27 2008", y: Random_Data(4683, 7435)},
        { label: "02 27 2009", y: Random_Data(4683, 7435)},{ label: "04 27 2009", y: Random_Data(4683, 7435)},{ label: "06 27 2009", y: Random_Data(4683, 7435)},{ label: "08 27 2009", y: Random_Data(4683, 7435)},{ label: "10 27 2009", y: Random_Data(4683, 7435)},{ label: "12 27 2009", y: Random_Data(4683, 7435)},
        { label: "02 27 2010", y: Random_Data(4683, 7435)},{ label: "04 27 2010", y: Random_Data(4683, 7435)},{ label: "06 27 2010", y: Random_Data(4683, 7435)},{ label: "08 27 2010", y: Random_Data(4683, 7435)},{ label: "10 27 2010", y: Random_Data(4683, 7435)},{ label: "12 27 2010", y: Random_Data(4683, 7435)},
        { label: "02 27 2011", y: Random_Data(4683, 7435)},{ label: "04 27 2011", y: Random_Data(4683, 7435)},{ label: "06 27 2011", y: Random_Data(4683, 7435)},{ label: "08 27 2011", y: Random_Data(4683, 7435)},{ label: "10 27 2011", y: Random_Data(4683, 7435)},{ label: "12 27 2011", y: Random_Data(4683, 7435)},
        { label: "02 27 2012", y: Random_Data(4683, 7435)},{ label: "04 27 2012", y: Random_Data(4683, 7435)},{ label: "06 27 2012", y: Random_Data(4683, 7435)},{ label: "08 27 2012", y: Random_Data(4683, 7435)},{ label: "10 27 2012", y: Random_Data(4683, 7435)},{ label: "12 27 2012", y: Random_Data(4683, 7435)},
        { label: "02 27 2013", y: Random_Data(4683, 7435)},{ label: "04 27 2013", y: Random_Data(4683, 7435)},{ label: "06 27 2013", y: Random_Data(4683, 7435)},{ label: "08 27 2013", y: Random_Data(4683, 7435)},{ label: "10 27 2013", y: Random_Data(4683, 7435)},{ label: "12 27 2013", y: Random_Data(4683, 7435)},
        { label: "02 27 2014", y: Random_Data(4683, 7435)},{ label: "04 27 2014", y: Random_Data(4683, 7435)},{ label: "06 27 2014", y: Random_Data(4683, 7435)},{ label: "08 27 2014", y: Random_Data(4683, 7435)},{ label: "10 27 2014", y: Random_Data(4683, 7435)},{ label: "12 27 2014", y: Random_Data(4683, 7435)},
        { label: "02 27 2015", y: Random_Data(4683, 7435)},{ label: "04 27 2015", y: Random_Data(4683, 7435)},{ label: "06 27 2015", y: Random_Data(4683, 7435)},{ label: "08 27 2015", y: Random_Data(4683, 7435)},{ label: "10 27 2015", y: Random_Data(4683, 7435)},{ label: "12 27 2015", y: Random_Data(4683, 7435)},
        { label: "02 27 2016", y: Random_Data(4683, 7435)},{ label: "04 27 2016", y: Random_Data(4683, 7435)},{ label: "06 27 2016", y: Random_Data(4683, 7435)},{ label: "08 27 2016", y: Random_Data(4683, 7435)},{ label: "10 27 2016", y: Random_Data(4683, 7435)},{ label: "12 27 2016", y: Random_Data(4683, 7435)},
        { label: "02 27 2017", y: Random_Data(4683, 7435)},{ label: "04 27 2017", y: Random_Data(4683, 7435)},{ label: "06 27 2017", y: Random_Data(4683, 7435)},{ label: "08 27 2017", y: Random_Data(4683, 7435)},{ label: "10 27 2017", y: Random_Data(4683, 7435)},{ label: "12 27 2017", y: Random_Data(4683, 7435)},
        { label: "02 27 2018", y: Random_Data(4683, 7435)},{ label: "04 27 2018", y: Random_Data(4683, 7435)},{ label: "06 27 2018", y: Random_Data(4683, 7435)},{ label: "08 27 2018", y: Random_Data(4683, 7435)},{ label: "10 27 2018", y: Random_Data(4683, 7435)},{ label: "12 27 2018", y: Random_Data(4683, 7435)},
        { label: "02 27 2019", y: Random_Data(4683, 7435)},{ label: "04 27 2019", y: Random_Data(4683, 7435)},{ label: "06 27 2019", y: Random_Data(4683, 7435)},{ label: "08 27 2019", y: Random_Data(4683, 7435)},{ label: "10 27 2019", y: Random_Data(4683, 7435)},{ label: "12 27 2019", y: Random_Data(4683, 7435)},
        { label: "02 27 2020", y: Random_Data(4683, 7435)},{ label: "04 27 2020", y: Random_Data(4683, 7435)},{ label: "06 27 2020", y: Random_Data(4683, 7435)},{ label: "08 27 2020", y: Random_Data(4683, 7435)},{ label: "10 27 2020", y: Random_Data(4683, 7435)},{ label: "12 27 2020", y: Random_Data(4683, 7435)},
        { label: "02 27 2021", y: Random_Data(4683, 7435)},{ label: "04 27 2021", y: Random_Data(4683, 7435)},{ label: "06 27 2021", y: Random_Data(4683, 7435)},{ label: "08 27 2021", y: Random_Data(4683, 7435)},{ label: "10 27 2021", y: Random_Data(4683, 7435)},{ label: "12 27 2021", y: Random_Data(4683, 7435)},
        { label: "02 27 2022", y: Random_Data(4683, 7435)},{ label: "04 27 2022", y: Random_Data(4683, 7435)},{ label: "06 27 2022", y: Random_Data(4683, 7435)},{ label: "08 27 2022", y: Random_Data(4683, 7435)},{ label: "10 27 2022", y: Random_Data(4683, 7435)},{ label: "12 27 2022", y: Random_Data(4683, 7435)},
    ],
    };
  
    Metals.rutheniumMetal = {        
      type: "spline",  
      name: "Ruthenium",        
      showInLegend: true,
      dataPoints: [
        { label: "02 27 1991", y: Random_Data(454, 1056)},{ label: "04 27 1991", y: Random_Data(454, 1056)},{ label: "06 27 1991", y: Random_Data(454, 1056)},{ label: "08 27 1991", y: Random_Data(454, 1056)},{ label: "10 27 1991", y: Random_Data(454, 1056)},{ label: "12 27 1991", y: Random_Data(454, 1056)},
        { label: "02 27 1992", y: Random_Data(454, 1056)},{ label: "04 27 1992", y: Random_Data(454, 1056)},{ label: "06 27 1992", y: Random_Data(454, 1056)},{ label: "08 27 1992", y: Random_Data(454, 1056)},{ label: "10 27 1992", y: Random_Data(454, 1056)},{ label: "12 27 1992", y: Random_Data(454, 1056)},
        { label: "02 27 1993", y: Random_Data(454, 1056)},{ label: "04 27 1993", y: Random_Data(454, 1056)},{ label: "06 27 1993", y: Random_Data(454, 1056)},{ label: "08 27 1993", y: Random_Data(454, 1056)},{ label: "10 27 1993", y: Random_Data(454, 1056)},{ label: "12 27 1993", y: Random_Data(454, 1056)},
        { label: "02 27 1994", y: Random_Data(454, 1056)},{ label: "04 27 1994", y: Random_Data(454, 1056)},{ label: "06 27 1994", y: Random_Data(454, 1056)},{ label: "08 27 1994", y: Random_Data(454, 1056)},{ label: "10 27 1994", y: Random_Data(454, 1056)},{ label: "12 27 1994", y: Random_Data(454, 1056)},
        { label: "02 27 1995", y: Random_Data(454, 1056)},{ label: "04 27 1995", y: Random_Data(454, 1056)},{ label: "06 27 1995", y: Random_Data(454, 1056)},{ label: "08 27 1995", y: Random_Data(454, 1056)},{ label: "10 27 1995", y: Random_Data(454, 1056)},{ label: "12 27 1995", y: Random_Data(454, 1056)},
        { label: "02 27 1996", y: Random_Data(454, 1056)},{ label: "04 27 1996", y: Random_Data(454, 1056)},{ label: "06 27 1996", y: Random_Data(454, 1056)},{ label: "08 27 1996", y: Random_Data(454, 1056)},{ label: "10 27 1996", y: Random_Data(454, 1056)},{ label: "12 27 1996", y: Random_Data(454, 1056)},
        { label: "02 27 1997", y: Random_Data(454, 1056)},{ label: "04 27 1997", y: Random_Data(454, 1056)},{ label: "06 27 1997", y: Random_Data(454, 1056)},{ label: "08 27 1997", y: Random_Data(454, 1056)},{ label: "10 27 1997", y: Random_Data(454, 1056)},{ label: "12 27 1997", y: Random_Data(454, 1056)},
        { label: "02 27 1998", y: Random_Data(454, 1056)},{ label: "04 27 1998", y: Random_Data(454, 1056)},{ label: "06 27 1998", y: Random_Data(454, 1056)},{ label: "08 27 1998", y: Random_Data(454, 1056)},{ label: "10 27 1998", y: Random_Data(454, 1056)},{ label: "12 27 1998", y: Random_Data(454, 1056)},
        { label: "02 27 1999", y: Random_Data(454, 1056)},{ label: "04 27 1999", y: Random_Data(454, 1056)},{ label: "06 27 1999", y: Random_Data(454, 1056)},{ label: "08 27 1999", y: Random_Data(454, 1056)},{ label: "10 27 1999", y: Random_Data(454, 1056)},{ label: "12 27 1999", y: Random_Data(454, 1056)},
        { label: "02 27 2000", y: Random_Data(454, 1056)},{ label: "04 27 2000", y: Random_Data(454, 1056)},{ label: "06 27 2000", y: Random_Data(454, 1056)},{ label: "08 27 2000", y: Random_Data(454, 1056)},{ label: "10 27 2000", y: Random_Data(454, 1056)},{ label: "12 27 2000", y: Random_Data(454, 1056)},
        { label: "02 27 2001", y: Random_Data(454, 1056)},{ label: "04 27 2001", y: Random_Data(454, 1056)},{ label: "06 27 2001", y: Random_Data(454, 1056)},{ label: "08 27 2001", y: Random_Data(454, 1056)},{ label: "10 27 2001", y: Random_Data(454, 1056)},{ label: "12 27 2001", y: Random_Data(454, 1056)},
        { label: "02 27 2002", y: Random_Data(454, 1056)},{ label: "04 27 2002", y: Random_Data(454, 1056)},{ label: "06 27 2002", y: Random_Data(454, 1056)},{ label: "08 27 2002", y: Random_Data(454, 1056)},{ label: "10 27 2002", y: Random_Data(454, 1056)},{ label: "12 27 2002", y: Random_Data(454, 1056)},
        { label: "02 27 2003", y: Random_Data(454, 1056)},{ label: "04 27 2003", y: Random_Data(454, 1056)},{ label: "06 27 2003", y: Random_Data(454, 1056)},{ label: "08 27 2003", y: Random_Data(454, 1056)},{ label: "10 27 2003", y: Random_Data(454, 1056)},{ label: "12 27 2003", y: Random_Data(454, 1056)},
        { label: "02 27 2004", y: Random_Data(454, 1056)},{ label: "04 27 2004", y: Random_Data(454, 1056)},{ label: "06 27 2004", y: Random_Data(454, 1056)},{ label: "08 27 2004", y: Random_Data(454, 1056)},{ label: "10 27 2004", y: Random_Data(454, 1056)},{ label: "12 27 2004", y: Random_Data(454, 1056)},
        { label: "02 27 2005", y: Random_Data(454, 1056)},{ label: "04 27 2005", y: Random_Data(454, 1056)},{ label: "06 27 2005", y: Random_Data(454, 1056)},{ label: "08 27 2005", y: Random_Data(454, 1056)},{ label: "10 27 2005", y: Random_Data(454, 1056)},{ label: "12 27 2005", y: Random_Data(454, 1056)},
        { label: "02 27 2006", y: Random_Data(454, 1056)},{ label: "04 27 2006", y: Random_Data(454, 1056)},{ label: "06 27 2006", y: Random_Data(454, 1056)},{ label: "08 27 2006", y: Random_Data(454, 1056)},{ label: "10 27 2006", y: Random_Data(454, 1056)},{ label: "12 27 2006", y: Random_Data(454, 1056)},
        { label: "02 27 2007", y: Random_Data(454, 1056)},{ label: "04 27 2007", y: Random_Data(454, 1056)},{ label: "06 27 2007", y: Random_Data(454, 1056)},{ label: "08 27 2007", y: Random_Data(454, 1056)},{ label: "10 27 2007", y: Random_Data(454, 1056)},{ label: "12 27 2007", y: Random_Data(454, 1056)},
        { label: "02 27 2008", y: Random_Data(454, 1056)},{ label: "04 27 2008", y: Random_Data(454, 1056)},{ label: "06 27 2008", y: Random_Data(454, 1056)},{ label: "08 27 2008", y: Random_Data(454, 1056)},{ label: "10 27 2008", y: Random_Data(454, 1056)},{ label: "12 27 2008", y: Random_Data(454, 1056)},
        { label: "02 27 2009", y: Random_Data(454, 1056)},{ label: "04 27 2009", y: Random_Data(454, 1056)},{ label: "06 27 2009", y: Random_Data(454, 1056)},{ label: "08 27 2009", y: Random_Data(454, 1056)},{ label: "10 27 2009", y: Random_Data(454, 1056)},{ label: "12 27 2009", y: Random_Data(454, 1056)},
        { label: "02 27 2010", y: Random_Data(454, 1056)},{ label: "04 27 2010", y: Random_Data(454, 1056)},{ label: "06 27 2010", y: Random_Data(454, 1056)},{ label: "08 27 2010", y: Random_Data(454, 1056)},{ label: "10 27 2010", y: Random_Data(454, 1056)},{ label: "12 27 2010", y: Random_Data(454, 1056)},
        { label: "02 27 2011", y: Random_Data(454, 1056)},{ label: "04 27 2011", y: Random_Data(454, 1056)},{ label: "06 27 2011", y: Random_Data(454, 1056)},{ label: "08 27 2011", y: Random_Data(454, 1056)},{ label: "10 27 2011", y: Random_Data(454, 1056)},{ label: "12 27 2011", y: Random_Data(454, 1056)},
        { label: "02 27 2012", y: Random_Data(454, 1056)},{ label: "04 27 2012", y: Random_Data(454, 1056)},{ label: "06 27 2012", y: Random_Data(454, 1056)},{ label: "08 27 2012", y: Random_Data(454, 1056)},{ label: "10 27 2012", y: Random_Data(454, 1056)},{ label: "12 27 2012", y: Random_Data(454, 1056)},
        { label: "02 27 2013", y: Random_Data(454, 1056)},{ label: "04 27 2013", y: Random_Data(454, 1056)},{ label: "06 27 2013", y: Random_Data(454, 1056)},{ label: "08 27 2013", y: Random_Data(454, 1056)},{ label: "10 27 2013", y: Random_Data(454, 1056)},{ label: "12 27 2013", y: Random_Data(454, 1056)},
        { label: "02 27 2014", y: Random_Data(454, 1056)},{ label: "04 27 2014", y: Random_Data(454, 1056)},{ label: "06 27 2014", y: Random_Data(454, 1056)},{ label: "08 27 2014", y: Random_Data(454, 1056)},{ label: "10 27 2014", y: Random_Data(454, 1056)},{ label: "12 27 2014", y: Random_Data(454, 1056)},
        { label: "02 27 2015", y: Random_Data(454, 1056)},{ label: "04 27 2015", y: Random_Data(454, 1056)},{ label: "06 27 2015", y: Random_Data(454, 1056)},{ label: "08 27 2015", y: Random_Data(454, 1056)},{ label: "10 27 2015", y: Random_Data(454, 1056)},{ label: "12 27 2015", y: Random_Data(454, 1056)},
        { label: "02 27 2016", y: Random_Data(454, 1056)},{ label: "04 27 2016", y: Random_Data(454, 1056)},{ label: "06 27 2016", y: Random_Data(454, 1056)},{ label: "08 27 2016", y: Random_Data(454, 1056)},{ label: "10 27 2016", y: Random_Data(454, 1056)},{ label: "12 27 2016", y: Random_Data(454, 1056)},
        { label: "02 27 2017", y: Random_Data(454, 1056)},{ label: "04 27 2017", y: Random_Data(454, 1056)},{ label: "06 27 2017", y: Random_Data(454, 1056)},{ label: "08 27 2017", y: Random_Data(454, 1056)},{ label: "10 27 2017", y: Random_Data(454, 1056)},{ label: "12 27 2017", y: Random_Data(454, 1056)},
        { label: "02 27 2018", y: Random_Data(454, 1056)},{ label: "04 27 2018", y: Random_Data(454, 1056)},{ label: "06 27 2018", y: Random_Data(454, 1056)},{ label: "08 27 2018", y: Random_Data(454, 1056)},{ label: "10 27 2018", y: Random_Data(454, 1056)},{ label: "12 27 2018", y: Random_Data(454, 1056)},
        { label: "02 27 2019", y: Random_Data(454, 1056)},{ label: "04 27 2019", y: Random_Data(454, 1056)},{ label: "06 27 2019", y: Random_Data(454, 1056)},{ label: "08 27 2019", y: Random_Data(454, 1056)},{ label: "10 27 2019", y: Random_Data(454, 1056)},{ label: "12 27 2019", y: Random_Data(454, 1056)},
        { label: "02 27 2020", y: Random_Data(454, 1056)},{ label: "04 27 2020", y: Random_Data(454, 1056)},{ label: "06 27 2020", y: Random_Data(454, 1056)},{ label: "08 27 2020", y: Random_Data(454, 1056)},{ label: "10 27 2020", y: Random_Data(454, 1056)},{ label: "12 27 2020", y: Random_Data(454, 1056)},
        { label: "02 27 2021", y: Random_Data(454, 1056)},{ label: "04 27 2021", y: Random_Data(454, 1056)},{ label: "06 27 2021", y: Random_Data(454, 1056)},{ label: "08 27 2021", y: Random_Data(454, 1056)},{ label: "10 27 2021", y: Random_Data(454, 1056)},{ label: "12 27 2021", y: Random_Data(454, 1056)},
        { label: "02 27 2022", y: Random_Data(454, 1056)},{ label: "04 27 2022", y: Random_Data(454, 1056)},{ label: "06 27 2022", y: Random_Data(454, 1056)},{ label: "08 27 2022", y: Random_Data(454, 1056)},{ label: "10 27 2022", y: Random_Data(454, 1056)},{ label: "12 27 2022", y: Random_Data(454, 1056)},
    ],
    };
    var dataArray = [
      Metals.platinumMetal,
      Metals.palladiumMetal,
      Metals.rhodiumMetal,
      Metals.iridiumMetal,
      Metals.rutheniumMetal,
    ];
  
    var chart;
    function generateChart(dataArrayParam) {
      chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        exportEnabled: true,
        axisY:{
            title: "JM base prices($/troy oz)"
        },
        toolTip: {
            shared: true,
            Content: "{x} : {y}",
        },
        legend:{
            cursor:"pointer",
            itemclick: toggleDataSeries
        },
        data: dataArrayParam || dataArray
      });
  
      chart.render();
    };
  
    generateChart(dataArray);
  
    function toggleDataSeries(e) {
      if(typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
        e.dataSeries.visible = false;
      } else {
        e.dataSeries.visible = true;            
      }
      chart.render();
    }
  
    $('.metal_div input').on('click', function(){
      getMetal();
      setTimeout(function(){
        generateChart(dataArray);
      },1000);
    });
  
    function getMetal(){
      dataArray = [];
      $('.metal_div input').each(function(){
        if ($(this).prop('checked')){
          dataArray.push(Metals[$(this).attr('name')]);
        }
      });
    }
  });