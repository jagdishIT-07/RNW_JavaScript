$(function () {
    var countryOptions;
    var stateOptions;
    var cityOptions;
    // ------------- for country -------------
    $.getJSON('country_list.json', function (result) {
        $.each(result, function (i, country) {
            // <option value="countrycode">countryname</option>
            countryOptions += "<option value = '" + country.code + "'>" + country.name + "</option>";
        });
        $('#country').html(countryOptions);
    });
    // ------------- for state -------------
    $("#country").change(function () {
        if ($(this).val() == 'IN') {
            $.getJSON('INstatelist.json', function (result) {
                $.each(result, function (statecode, statename) {
                    // <option value="statecode">stateName</option>
                    stateOptions += "<option value = '" + statecode + "'>" + statename + "</option>";
                });
                $('#state').html(stateOptions);

            });
            //  ------------- for city -------------
            $("#state").change(function () {
                if ($(this).val() == 'GJ') {
                    $.getJSON('GJcitylist.json', function (result) {
                        $.each(result, function (citycode, cityname) {
                            // <option value="statecode">stateName</option>
                            cityOptions += "<option value = '" + citycode + "'>" + cityname + "</option>";
                        });
                        $('#city').html(cityOptions);
                    });
                }
            });
        }
    });
});