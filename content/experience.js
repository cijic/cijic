const currentYear = new Date().getFullYear().toString();

var chart = AmCharts.makeChart("chartdiv", {
    "type": "gantt",
    "valueAxis": {
        "type": "date"
    },
    "brightnessStep": 10,
    "graph": {
        "fillAlphas": 1,
        "balloonText": "[[open]] - [[value]]"
    },
    "rotate": true,
    "categoryField": "category",
    "segmentsField": "segments",
    "dataDateFormat": "YYYY-MM",
    "startDateField": "start",
    "endDateField": "end",
    "colors": [
        "#FF6600",
        "#FCD202",
        "#B0DE09",
        "#0D8ECF",
        "#2A0CD0",
        "#CD0D74",
        "#CC0000",
        "#00CC00",
        "#0000CC",
        "#DDDDDD",
        "#999999",
        "#333333",
        "#990000",
        "#FF3399",
        "#66CCFF",
        "#FFAA66",
        "#9933FF",
        "#33CC99",
        "#FF9966",
        "#33FF33",
        "#336699",
        "#FFCC33",
        "#996633"
    ] ,
    "dataProvider": [{
        "category": "Pascal",
        "segments": [{
            "start": "2003-09",
            "end": "2007-05"
        }]
    }, {
        "category": "Object Pascal/Delphi",
        "segments": [{
            "start": "2005",
            "end": "2008-04"
        }, {
            "start": "2009-09",
            "end": "2011-05"
        }]
    }, {
        "category": "C",
        "segments": [{
            "start": "2004",
            "end": "2006"
        }, {
            "start": "2009",
            "end": "2010"
        }]
    }, {
        "category": "Visual FoxPro",
        "segments": [{
            "start": "2004-07",
            "end": "2006-05"
        }, {
            "start": "2007-11",
            "end": "2008-06"
        }]
    }, {
        "category": "Python",
        "segments": [{
            "start": "2006",
            "end": "2010-05"
        }, {
            "start": "2011-10",
            "end": "2015"
        }, {
            "start": "2021-10",
            "end": "2023-05"
        }]
    }, {
        "category": "Corona SDK",
        "segments": [{
            "start": "2010-06",
            "end": "2010-11"
        }]
    }, {
        "category": "C++",
        "segments": [{
            "start": "2005",
            "end": "2009-05"
        }, {
            "start": "2010-09",
            "end": "2014-10"
        }]
    }, {
        "category": "Qt",
        "segments": [{
            "start": "2010-11",
            "end": "2015"
        }]
    }, {
        "category": "PHP",
        "segments": [{
            "start": "2010-8",
            "end": "2011-05"
        }, {
            "start": "2014",
            "end": currentYear
        }]
    }, {
        "category": "Javascript",
        "segments": [{
            "start": "2010-11",
            "end": "2013-05"
        }, {
            "start": "2014",
            "end": currentYear
        }]
    }, {
        "category": "SQL",
        "segments": [{
            "start": "2004-07",
            "end": "2006-05"
        }, {
            "start": "2007-11",
            "end": "2008-06"
        }, {
            "start": "2014",
            "end": currentYear
        }]
    }, {
        "category": "MySQL",
        "segments": [{
            "start": "2014-11",
            "end": "2015-09"
        }]
    }, {
        "category": "PostgreSQL",
        "segments": [{
            "start": "2015-09",
            "end": currentYear
        }]
    }, {
        "category": "CodeIgniter",
        "segments": [{
            "start": "2014-08",
            "end": "2021"
        }]
    }, {
        "category": "Laravel",
        "segments": [{
            "start": "2014",
            "end": "2016"
        }, {
            "start": "2022-10",
            "end": currentYear
        }]
    }, {
        "category": "Symfony",
        "segments": [{
            "start": "2014-08",
            "end": "2022"
        }]
    }, {
        "category": "Doctrine",
        "segments": [{
            "start": "2014-08",
            "end": "2022"
        }]
    }, {
        "category": "RegEx (Regular Expressions)",
        "segments": [{
            "start": "2015-09",
            "end": currentYear
        }]
    }, {
        "category": "Wix",
        "segments": [{
            "start": "2020-01",
            "end": "2022-10"
        }]
    }],
    "chartCursor": {
        "valueBalloonsEnabled": false,
        "cursorAlpha": 0,
        "valueLineBalloonEnabled": true,
        "valueLineEnabled": true
    },
    "chartScrollbar": {},
    "export": {
        "enabled": false,
        "libs": {
            "path": "../libs/amcharts/plugins/export/libs/"
        }
    }
});
