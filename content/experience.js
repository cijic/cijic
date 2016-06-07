var chart = AmCharts.makeChart("chartdiv", {
    "type": "gantt",
    "period": "DD",
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
    "dataDateFormat": "YYYY-MM-DD",
    "startDateField": "start",
    "endDateField": "end",
    "dataProvider": [{
        "category": "Pascal",
        "segments": [{
            "start": "2003-09-01",
            "end": "2007-05"
        }]
    }, {
        "category": "Delphi",
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
            "end": "2013"
        }]
    }, {
            "category" : "Corona SDK",
            "segments" : [{
                "start" : "2010-06",
                "end" : "2010-11"
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
            "end": "2014-10"
        }]
    }, {
        "category": "PHP",
        "segments": [{
            "start": "2010-8",
            "end": "2011-05"
        }, {
            "start": "2014-11",
            "end": "2017"
        }]
    }, {
        "category": "Javascript",
        "segments": [{
            "start": "2010-11",
            "end": "2013-05"
        }, {
            "start": "2014",
            "end": "2017"
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