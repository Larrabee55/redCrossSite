$('#schedule').click(function () {
  var zipCode = $("#zipCode").val()
  console.log(zipCode);
  switch (zipCode) {
    case "89415": case "89420": case "89422": case "89427": case "89429": case "89428": case "89430": case "89444": case "89409": case "89447": case "89403": case "89701": case "89702": case "89703": case "89705": case "89706": case "89711": case "89712": case "89713": case "89714": case "89721": case "89448": case "89411": case "89410": case "89449": case "89705": case "89460": case "89423": case "89437": case "89440": case "89509": case "89511": case "89510": case "89513": case "89512": case "89523": case "89521": case "89402": case "89405": case "89557": case "89595": case "89704": case "89412": case "89424": case "89433": case "89434": case "89436": case "89439": case "89442": case "89450": case "89451": case "89502": case "89501": case "89504": case "89519": case "89441": case "89506": case "89508": case "89446": case "89426": case "89445": case "89438": case "89404": case "89425": case "89418": case "89419": case "89406": case "89407": case "89496": case "89310": case "89820": case "89316": case "89821": case "89801": case "89802": case "89803": case "89815": case "89822": case "89823": case "89825": case "89826": case "89828": case "89830": case "89831": case "89832": case "89833": case "89834": case "89835": case "89883": case "89301": case "89311": case "89314": case "89315": case "89317": case "89318": case "89319":
      chapter = "NorthernNevada";
      console.log(chapter);
      $("#chapterScheduling").append("<div class='form-group'><label for='DayOfTheWeek'>Day Of The Week</label><select class='form-control' id='DayOfTheWeek'><option value='Wednesday'>Wednesday</option><option value='Thursday'>" +
        "Thursday</option><option value='Friday'>Friday</option></select></div><div class='form-group'><label " +
        "for='TimeofDay'>Time</label><select class='form-control' id='TimeofDay'><option>9:30 AM</option><option>10:00 AM" +
        "</option><option>10:30 AM</option><option>11:00 AM</option><option>11:30 AM</option><option>12:00 PM</option>" +
        "<option>12:30 PM</option></select></div>");
      $("#submitFooter").append("<button type='submit' class='btn btn-primary'>Sumbit</button>");
      break;

    case "89005": case "89007": case "89012": case "89011": case "89014": case "89015": case "89018": case "89019": case "89021": case "89025": case
      "89028": case "89027": case "89030": case "89029": case "89032": case "89031": case "89040": case "89039": case "89044": case "89046 ": case
      "89052": case "89053": case "89074": case "89169": case "89084": case "89183": case "89081": case "89054": case "89086": case "89085": case
      "89101": case "89034": case "89103": case "89102": case "89002": case "89105": case "89104": case "89107": case "89106": case "89109 ": case
      "89108": case "89111": case "89110": case "89113": case "89115": case "89117": case "89116": case "89119": case "89118": case "89121": case
      "89120": case "89123": case "89122": case "89125": case "89124": case "89126": case "89129": case "89128": case "89131": case "89130": case
      "89133": case "89132": case "89135": case "89134": case "89137": case "89139": case "89138": case "89141": case "89140": case "89143": case
      "89142": case "89145": case "89144": case "89147": case "89146": case "89148": case "89149": case "89151": case "89153": case "89152": case
      "89155": case "89154": case "89157": case "89156": case "89159": case "89161": case "89166": case "89158": case "89165": case "89178": case
      "89179": case "89191": case "89185": case "89195": case "88901": case "89004": case "89310": case "89020": case "89022": case "89409": case
      "89023": case "89041": case "89045": case "89048": case "89049": case "89060": case "89003": case "89010": case "89013": case "89047":
      var chapter = "SouthernNevada";
      console.log(chapter);
      $("#chapterScheduling").append("<div class='form-group'><label for='DayOfTheWeek'>Day Of The Week</label><select class='form-control' id='DayOfTheWeek'><option value='Monday'>Monday</option><option value='Wednesday'>Wednesday</option></select></div><div class='form-group'><label " +
        "for='TimeofDay'>Time</label><select class='form-control' id='TimeofDay'><option>9:00 AM</option><option>9:30 AM</option><option>10:00 AM" +
        "</option><option>10:30 AM</option><option>11:00 AM</option><option>11:30 AM</option><option>12:00 PM</option>" +
        "<option>12:30 PM</option><option>1:00 PM</option><option>1:30 PM</option></select></div>");
      $("#submitFooter").append("<button type='submit' class='btn btn-primary'>Sumbit</button>");
      break;

    case "84028": case "84038": case "84064": case "84086": case "84304": case "84305": case "84308": case "84318": case "84319": case "84320": case
      "84321": case "84322": case "84323": case "84325": case "84326": case "84327": case "84328": case "84332": case "84333": case "84335": case
      "84338": case "84339": case "84341": case "84301": case "84302": case "84306": case "84307": case "84309": case "84311": case "84312": case
      "84313": case "84314": case "84316": case "84324": case "84329": case "84330": case "84331": case "84334": case "84336": case "84337": case
      "84340": case "84067": case "84201": case "84224": case "84310": case "84315": case "84317": case "84401": case "84402": case "84403": case
      "84404": case "84405": case "84407": case "84408": case "84409": case "84412": case "84414": case "84415": case "84010": case "84011": case
      "84014": case "84015": case "84016": case "84025": case "84037": case "84040": case "84041": case "84054": case "84056": case "84075": case
      "84087": case "84089": case "84018": case "84050": case "82930": case "82931": case "82933": case "82936": case "82937": case "82939": case
      "82944": case "83101": case "83110": case "83111": case "83112": case "83114": case "83116": case "83118": case "83119": case "83120": case
      "83121": case "83122": case "83123": case "83124": case "83126": case "83127": case "83128":
      var chapter = "NorthernUtah";
      console.log(chapter);
      $("#chapterScheduling").append("<div class='form-group'>" +
        "<label for='DayOfTheWeek'> Day Of The Week</label>" +
        "<select class='form-control' id='DayOfTheWeek'>" +
        "<option selected>Choose...</option>" +
        "<option value='Wednesday'>Wednesday</option>" +
        "<option value='Saturday'>Saturday</option>" +
        "</select></div>");
      $("#DayOfTheWeek").change(function () {
        var DayOfTheWeek = $("#DayOfTheWeek").val();
        console.log(DayOfTheWeek);
        if (DayOfTheWeek == "Wednesday") {
          $("#time").remove();
          $("#chapterScheduling").append("<div class='form-group' id='time'>" +
            "<label for='TimeofDay'>Time</label>" +
            "<select class='form-control' id='TimeofDay'>" +
            "<option value='5:30 PM'>5:30 PM</option>" +
            "<option value='6:00 PM'>6:00 PM</option>" +
            "<option value='6:30 PM'>6:30 PM</option> " +
            "<option value='7:00 PM'>7:00 PM</option>" +
            "<option value='7:30 PM'>7:30 PM</option>" +
            "<option value='8:00 PM'>8:00 PM</option>" +
            "<option value='8:30 PM'>8:30 PM</option> " +
            "</select></div>");
        } else if (DayOfTheWeek == "Saturday") {
          $("#time").remove();
          $("#chapterScheduling").append("<div class='form-group' id='time'>" +
            "<label for='TimeofDay'>Time</label>" +
            "<select class='form-control' id='TimeofDay'>" +
            "<option value='9:30 AM'>9:30 AM</option>" +
            "<option value='10:00 AM'>10:00 AM</option>" +
            "<option value='10:30 AM'>10:30 AM</option>" +
            "<option value='11:00 AM'>11:00 AM</option> " +
            "<option value='11:30 AM'>11:30 AM</option>" +
            "<option value='12:00 PM'>12:00 PM</option>" +
            "<option value='12:30 PM'>12:30 PM</option>" +
            "<option value='1:00 PM'>1:00 PM</option>" +
            "</select></div>");
        } else {
          alert("fuck")
        }
      });
      $("#submitFooter").append("<button type='submit' class='btn btn-primary'>Sumbit</button>");
      break;

    case "84022": case "84029": case "84034": case "84069": case "84071": case "84074": case "84080": case "84083": case "84006": case "84009"
      : case "84020": case "84044": case "84047": case "84065": case "84070": case "84081": case "84084": case "84088": case "84090": case "84091"
      : case "84092": case "84093": case "84094": case "84095": case "84096": case "84101": case "84102": case "84103": case "84104": case "84105"
      : case "84106": case "84107": case "84108": case "84109": case "84110": case "84111": case "84112": case "84113": case "84114": case "84115"
      : case "84116": case "84117": case "84118": case "84119": case "84120": case "84121": case "84122": case "84123": case "84124": case "84125"
      : case "84126": case "84127": case "84128": case "84129": case "84130": case "84131": case "84132": case "84133": case "84134": case "84138"
      : case "84139": case "84141": case "84143": case "84145": case "84147": case "84148": case "84150": case "84151": case "84152": case "84157"
      : case "84158": case "84165": case "84170": case "84171": case "84180": case "84184": case "84190": case "84199": case "84017": case "84024"
      : case "84033": case "84036": case "84055": case "84060": case "84061": case "84068": case "84098": case "84032": case "84049": case "84082"
      : case "84001": case "84002": case "84007": case "84021": case "84027": case "84031": case "84051": case "84052": case "84053": case "84066"
      : case "84072": case "84073": case "84008": case "84026": case "84035": case "84039": case "84063": case "84076": case "84078": case "84079"
      : case "84085": case "84023": case "84046":
      var chapter = "GreaterSaltLakeArea";
      console.log(chapter);
      $("#chapterScheduling").append("<div class='form-group'>" +
        "<label for='DayOfTheWeek'> Day Of The Week</label>" +
        "<select class='form-control' id='DayOfTheWeek'>" +
        "<option selected>Choose...</option>" +
        "<option value='Thursday'>Thursday</option>" +
        "<option value='Saturday'>Saturday</option>" +
        "</select></div>");
      $("#DayOfTheWeek").change(function () {
        var DayOfTheWeek = $("#DayOfTheWeek").val();
        console.log(DayOfTheWeek);
        if (DayOfTheWeek == "Thursday") {
          $("#time").remove();
          $("#chapterScheduling").append("<div class='form-group' id='time'>" +
            "<label for='TimeofDay'>Time</label>" +
            "<select class='form-control' id='TimeofDay'>" +
            "<option value='5:30 PM'>5:30 PM</option>" +
            "<option value='6:00 PM'>6:00 PM</option>" +
            "<option value='6:30 PM'>6:30 PM</option> " +
            "<option value='7:00 PM'>7:00 PM</option>" +
            "<option value='7:30 PM'>7:30 PM</option>" +
            "<option value='8:00 PM'>8:00 PM</option>" +
            "<option value='8:30 PM'>8:30 PM</option> " +
            "</select></div>");
        } else if (DayOfTheWeek == "Saturday") {
          $("#time").remove();
          $("#chapterScheduling").append("<div class='form-group' id='time'>" +
            "<label for='TimeofDay'>Time</label>" +
            "<select class='form-control' id='TimeofDay'>" +
            "<option value='9:30 AM'>9:30 AM</option>" +
            "<option value='10:00 AM'>10:00 AM</option>" +
            "<option value='10:30 AM'>10:30 AM</option>" +
            "<option value='11:00 AM'>11:00 AM</option> " +
            "<option value='11:30 AM'>11:30 AM</option>" +
            "</select></div>");
        } else {
          alert("fuck")
        }
      });
      $("#submitFooter").append("<button type='submit' class='btn btn-primary'>Sumbit</button>");
      break;

    case "84003": case "84004": case "84005": case "84013": case "84042": case "84043": case "84045": case "84057": case "84058": case "84059"
      : case "84062": case "84097": case "84601": case "84602": case "84603": case "84604": case "84605": case "84606": case "84626": case "84633"
      : case "84651": case "84653": case "84655": case "84660": case "84663": case "84664": case "84628": case "84639": case "84645": case "84648"
      : case "84624": case "84631": case "84635": case "84636": case "84637": case "84638": case "84640": case "84644": case "84649": case "84656"
      : case "84728": case "84621": case "84622": case "84623": case "84627": case "84630": case "84632": case "84634": case "84642": case "84643"
      : case "84646": case "84647": case "84662": case "84665": case "84667": case "84620": case "84652": case "84654": case "84657": case "84701"
      : case "84711": case "84724": case "84730": case "84739": case "84744": case "84754": case "84766": case "84723": case "84740": case "84743"
      : case "84750": case "84715": case "84734": case "84747": case "84749": case "84773": case "84775": case "84501": case "84520": case "84526"
      : case "84529": case "84539": case "84542": case "84513": case "84516": case "84518": case "84521": case "84522": case "84523": case "84525"
      : case "84528": case "84537": case "84515": case "84532": case "84540": case "84510": case "84511": case "84512": case "84530": case "84531"
      : case "84533": case "84534": case "84535": case "84536":
      var chapter = "CentralUtah";
      console.log(chapter);
      $("#chapterScheduling").append("<div class='form-group'>" +
        "<label for='DayOfTheWeek'> Day Of The Week</label>" +
        "<select class='form-control' id='DayOfTheWeek'>" +
        "<option selected>Choose...</option>" +
        "<option value='Wednesday'>Wednesday</option>" +
        "<option value='Saturday'>Saturday</option>" +
        "</select></div>");
      $("#DayOfTheWeek").change(function () {
        var DayOfTheWeek = $("#DayOfTheWeek").val();
        console.log(DayOfTheWeek);
        if (DayOfTheWeek == "Wednesday") {
          $("#time").remove();
          $("#chapterScheduling").append("<div class='form-group' id='time'>" +
            "<label for='TimeofDay'>Time</label>" +
            "<select class='form-control' id='TimeofDay'>" +
            "<option value='5:30 PM'>5:30 PM</option>" +
            "<option value='6:00 PM'>6:00 PM</option>" +
            "<option value='6:30 PM'>6:30 PM</option> " +
            "<option value='7:00 PM'>7:00 PM</option>" +
            "<option value='7:30 PM'>7:30 PM</option>" +
            "<option value='8:00 PM'>8:00 PM</option>" +
            "<option value='8:30 PM'>8:30 PM</option> " +
            "</select></div>");
        } else if (DayOfTheWeek == "Saturday") {
          $("#time").remove();
          $("#chapterScheduling").append("<div class='form-group' id='time'>" +
            "<label for='TimeofDay'>Time</label>" +
            "<select class='form-control' id='TimeofDay'>" +
            "<option value='9:30 AM'>9:30 AM</option>" +
            "<option value='10:00 AM'>10:00 AM</option>" +
            "<option value='10:30 AM'>10:30 AM</option>" +
            "<option value='11:00 AM'>11:00 AM</option> " +
            "<option value='11:30 AM'>11:30 AM</option>" +
            "</select></div>");
        } else {
          alert("fuck")
        }
      });
      $("#submitFooter").append("<button type='submit' class='btn btn-primary'>Sumbit</button>");
      break;

    case "84713": case "84731": case "84751": case "84752": case "84714": case "84719": case "84720": case "84721": case "84742": case "84753"
      : case "84756": case "84760": case "84761": case "84772": case "84722": case "84725": case "84733": case "84737": case "84738": case "84745"
      : case "84746": case "84757": case "84763": case "84765": case "84767": case "84770": case "84771": case "84774": case "84779": case "84780"
      : case "84781": case "84782": case "84783": case "84784": case "84790": case "84791": case "84712": case "84716": case "84718": case "84726"
      : case "84735": case "84736": case "84759": case "84764": case "84776": case "84710": case "84729": case "84741": case "84755": case "84758"
      : case "89001": case "89008": case "89017": case "89043": case "89042": case "89027": case "89034": case "86021": case "86022": case "86052":
      var chapter = "SouthernUtah";
      console.log(chapter);
      $("#chapterScheduling").append("<div class='form-group'><label for='DayOfTheWeek'>Day Of The Week</label><select class='form-control' id = 'DayOfTheWeek'>" +
        "<option value='Monday'>Monday</option>" +
        "<option value='Tuesday'>Tuesday</option>" +
        "<option value='Wednesday'>Wednesday</option>" +
        "<option value='Thursday'>Thursday</option>" +
        "<option value='Friday'>Friday</option>" +
        "<option value='Saturday'>Saturday</option></select></div>" +
        "<div class='form-group'>" +
        "<label for='TimeofDay'>Time</label>" +
        "<select class='form-control' id='TimeofDay'>" +
        "<option value='9:00 AM'>9:00 AM</option>" +
        "<option value='9:30 AM'>9:30 AM</option>" +
        "<option value='10:00 AM'>10:00 AM</option>" +
        "<option value='10:30 AM'>10:30 AM</option>" +
        "<option value='11:00 AM'>11:00 AM</option>" +
        "<option value='11:30 AM'>11:30 AM</option>" +
        "<option value='12:00 PM'>12:00 PM</option>" +
        "<option value='12:30 PM'>12:30 PM</option>" +
        "<option value='1:00 PM'>1:00 PM</option>" +
        "<option value='1:30 PM'>1:30 PM</option>" +
        "<option value='2:00 PM'>2:00 PM</option> " +
        "<option value='2:30 PM'>2:30 PM</option>" +
        "<option value='3:00 PM'>3:00 PM</option>" +
        "<option value='3:30 PM'>3:30 PM</option>" +
        "<option value='4:00 PM'>4:00 PM</option>" +
        "<option value='4:30 PM'>4:30 PM</option>" +
        "<option value='5:00 PM'>5:00 PM</option>" +
        "</select></div>");
      $("#submitFooter").append("<button type='submit' class='btn btn-primary'>Sumbit</button>");
      break;

    default:
      $("#chapterScheduling").append("<p>Please enter a valid zip code</p>");
      break;
  }
});
$("#closeModal").on("click", function () {
  $("#chapterScheduling").empty();
  $("#submitFooter").empty();
});
