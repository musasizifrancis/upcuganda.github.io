(function ($) {
    'use strict';
    if (!$.congress) {
        $.congress = {};
    }

    $.congress.mapSearchWidget = function (el, options) {
        var base = this;

        base.init = function () {
            base.options = $.extend({}, $.congress.mapSearchWidget.defaultOptions, options);

            require([
                "esri/Map",
                "esri/views/MapView",
                "esri/widgets/Search"
            ], (Map, MapView, Search) => {
                const GEOCODING_CATEGORY_PARAMS = [
                    'Address',
                    'Postal',
                    'Block',
                    'Sector',
                    'Neighborhood',
                    'District',
                    'City',
                    'Metro Area',
                    'Subregion',
                    'Region',
                    'Territory',
                    'Education'
                ];
                // As of ArcGIS SDK for Javascript v4.18,
                // accessing resources or geocoding services requires an API key (access token).
                // This key/token is generated from LOC Online GIS Portal
                base.apiKey = '';
                var searchWidget = new Search();

                const basemap = new Map({
                    basemap: "streets-navigation-vector",   // == World Navigation Map
                });
                const view = new MapView({
                    scale: 30000000,
                    container: "district-map-view",
                    map: basemap
                });

                base.hideMapView = function() {
                    document.getElementById("district-map-view").style.display = 'none';
                };

                base.showMapView = function() {
                    document.getElementById("district-map-view").style.display = '';
                };

                base.showError = function (errMsg) {
                    // don't use the error output div provided by Esri search widget
                    $('.esri-search__warning-menu').hide();
                    $('#warningMsgMessage')[0].innerText = errMsg;
                    $('#warningMsg').show();
                }

                base.fetchKey = function () {
                    return $.ajax({
                        url: "/members/get-map-api-key",
                        type: "POST"
                    });
                };

                base.customizeWidget = function() {
                    searchWidget = new Search({
                        view: view,
                        container: "search-widget",
                        includeDefaultSources: false,
                        sources: [
                            {
                                name: "ArcGIS World Geocoding Service",
                                placeholder: "Find address or place",
                                apiKey: base.apiKey,
                                url: base.options.memberMapLocatorUrl, // eg: "https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer",
                                singleLineFieldName: "SingleLine",
                                categories: GEOCODING_CATEGORY_PARAMS,
                                countryCode: 'US',
                                locationType: 'rooftop',
                                maxResults: 6,
                                maxSuggestions: 6,
                                outFields: ["*"],
                                //isCollection: false
                            }
                        ],
                    });

                    searchWidget.on("search-clear", function (evt) {
                        $('#warningMsg').hide();
                    });

                    searchWidget.on("search-focus", function (evt) {
                        $('#warningMsg').hide();
                    });

                    searchWidget.on("search-complete", function (evt) {
                        let errMsg = '';
                        if (typeof evt !== 'undefined') {
                            if (evt.numErrors) {
                                if (evt.errors[0]['error']['message'] !== '') {
                                    errMsg = evt.errors[0]['error']['message'];
                                    if(errMsg === 'Invalid Token') {
                                        errMsg += '. You may need to renew API key.';
                                    }
                                } else {
                                    errMsg = 'There were no results found for \"' + evt.searchTerm + '\"';
                                }
                            } else if (!evt.searchTerm && !evt.numResults) {
                                errMsg = 'Please enter a search term.';
                            } else if (evt.results[0]['results'] === undefined || evt.results[0]['results'].length == 0) {
                                errMsg = 'There were no results found for \"' + evt.searchTerm + '\"';
                            }
                        }
                        if (errMsg) {
                            base.showError(errMsg);
                        }
                        // note: event stops here if there's error, else the "select-result" event will be exe next
                    });

                    // the event below fires when a search result is selected
                    // the findAddressCandidates operation was called once user selected the address from Esri's suggestion list
                    searchWidget.on("select-result", function (evt) {

                        // search from Esri default "Use Current Location" event
                        // when selecting current location, feature.attributes don't have the x and y for some reason,
                        // so grab them from the feature.geometry.
                        if (!evt.result.feature.attributes.X) {
                            evt.result.feature.attributes.X = evt.result.feature.geometry.longitude;
                            evt.result.feature.attributes.Y = evt.result.feature.geometry.latitude;
                        }

                        // // preserve single quote in search term
                        var searchTerm = $('.esri-search__input')[0].value.replace(/'/g, "\\'"),
                            attributes = JSON.stringify(evt.result),
                            url = "/members/map?searchTerm=" + encodeURIComponent(searchTerm) +
                                "&selectedResult=" + encodeURIComponent(attributes);

                        window.location = url;
                    });
                }

                view.when(function(){
                    $.when(base.fetchKey())
                        .then(function(key) {
                        base.apiKey = key;
                        base.customizeWidget();
                        if (document.querySelector('.esri-search__input')) {
                            document.querySelector('.esri-search__input').onfocusout = null;
                        }
                    }, function() {
                        base.err('Failed to get the api key.');
                    });
                }, function(err){
                    // TODO: Not able to test the error code below until one is encountered;
                    // hopefully the prop name set below is the right one from the err object
                    // ref: https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Error.html#details
                    // ref: https://developers.arcgis.com/rest/geocode/api-reference/geocoding-service-output.htm#ESRI_SECTION1_42D7D3D0231241E9B656C01438209440
                    console.log(err);
                    let errMessage = '';
                    if (typeof err !== 'undefined' || err.details == undefined) {
                        if (err.details.httpStatus === 500) {
                            errMessage = "ArcGIS Server error, please try again later.";
                        } if (err.details.httpStatus === 404) {
                            errMessage = "Network error, please try again later.";
                        } else {
                            errMessage = "Load failed. The map view is not ready yet.";
                        }
                        base.showError(errMessage);
                    }
                });


                base.hideMapView();

              }); // end require
        }; // end base.init

        base.init();
    };

    //$('body').on('focusout', () => {});

    $.congress.mapSearchWidget.defaultOptions = {
        mapLocatorUrlForDevTestOnly: null,
    };

    $.fn.congress_mapSearchWidget = function (options) {
        return this.each(function () {
            var ft = new $.congress.mapSearchWidget(this, options);
            $(this).data('congress.mapSearchWidget', ft);
        });
    };

    $.fn.getcongress_mapSearchWidget = function () {
        this.data('congress.mapSearchWidget');
    };


}(jQuery));