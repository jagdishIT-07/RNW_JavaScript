$(function () {
    var CountryOptions;
    var StateOptions;
    var CityOptions;
    $.getJSON('country_list.json', function (result) {
        $.each(result, function (i, country) {
            // <option value="countrycode">countryname</option>
            CountryOptions += "<option value = '" + country.code + "'>" + country.name + "</option>";
        });
        $('#country').html(CountryOptions);
    });
    $('#country').change(function () {
        if ($(this).val() == "IN") {
            $.getJSON('INstatelist.json', function (result) {
                $.each(result, function (statecode, statename) {
                    // <option value="statecode">statename</option>
                    StateOptions += "<option value = '" + statecode + "'>" + statename + "</option>";
                });
                $('#state').html(StateOptions);
            });
        }
    });
    $('#state').change(function () {
        if ($(this).val() == "GJ") {
            $.getJSON('GJcitylist.json', function (result) {
                $.each(result, function (citycode, cityname) {
                    // <option value="citycode">cityname</option>
                    CityOptions += "<option value = '" + citycode + "'>" + cityname + "</option>";
                });
                $('#city').html(CityOptions);
            });
        }
    });
});