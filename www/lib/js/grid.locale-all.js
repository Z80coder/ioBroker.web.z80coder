function initGridLanguage(lang) {
    $.jgrid = $.jgrid || {};

    lang = lang || 'en';

    var langs = {
        'en': /**
         * jqGrid English Translation
         * Tony Tomov tony@trirand.com
         * http://trirand.com/blog/
         * Dual licensed under the MIT and GPL licenses:
         * http://www.opensource.org/licenses/mit-license.php
         * http://www.gnu.org/licenses/gpl.html
         **/
        {
            defaults: {
                recordtext: "View {0} - {1} of {2}",
                emptyrecords: "No records to view",
                loadtext: "Loading...",
                pgtext: "Page {0} of {1}"
            },
            search: {
                caption: "Search...",
                Find: "Find",
                Reset: "Reset",
                odata: [
                    { oper: 'eq', text: 'equal'},
                    { oper: 'ne', text: 'not equal'},
                    { oper: 'lt', text: 'less'},
                    { oper: 'le', text: 'less or equal'},
                    { oper: 'gt', text: 'greater'},
                    { oper: 'ge', text: 'greater or equal'},
                    { oper: 'bw', text: 'begins with'},
                    { oper: 'bn', text: 'does not begin with'},
                    { oper: 'in', text: 'is in'},
                    { oper: 'ni', text: 'is not in'},
                    { oper: 'ew', text: 'ends with'},
                    { oper: 'en', text: 'does not end with'},
                    { oper: 'cn', text: 'contains'},
                    { oper: 'nc', text: 'does not contain'}
                ],
                groupOps: [
                    { op: "AND", text: "all" },
                    { op: "OR", text: "any" }
                ]
            },
            edit: {
                addCaption: "Add Record",
                editCaption: "Edit Record",
                bSubmit: "Submit",
                bCancel: "Cancel",
                bClose: "Close",
                saveData: "Data has been changed! Save changes?",
                bYes: "Yes",
                bNo: "No",
                bExit: "Cancel",
                msg: {
                    required: "Field is required",
                    number: "Please, enter valid number",
                    minValue: "value must be greater than or equal to ",
                    maxValue: "value must be less than or equal to",
                    email: "is not a valid e-mail",
                    integer: "Please, enter valid integer value",
                    date: "Please, enter valid date value",
                    url: "is not a valid URL. Prefix required ('http://' or 'https://')",
                    nodefined: " is not defined!",
                    novalue: " return value is required!",
                    customarray: "Custom function should return array!",
                    customfcheck: "Custom function should be present in case of custom checking!"

                }
            },
            view: {
                caption: "View Record",
                bClose: "Close"
            },
            del: {
                caption: "Delete",
                msg: "Delete selected record(s)?",
                bSubmit: "Delete",
                bCancel: "Cancel"
            },
            nav: {
                edittext: "",
                edittitle: "Edit selected row",
                addtext: "",
                addtitle: "Add new row",
                deltext: "",
                deltitle: "Delete selected row",
                searchtext: "",
                searchtitle: "Find records",
                refreshtext: "",
                refreshtitle: "Reload Grid",
                alertcap: "Warning",
                alerttext: "Please, select row",
                viewtext: "",
                viewtitle: "View selected row"
            },
            col: {
                caption: "Select columns",
                bSubmit: "Ok",
                bCancel: "Cancel"
            },
            errors: {
                errcap: "Error",
                nourl: "No url is set",
                norecords: "No records to process",
                model: "Length of colNames <> colModel!"
            },
            formatter: {
                integer: {thousandsSeparator: ",", defaultValue: '0'},
                number: {decimalSeparator: ".", thousandsSeparator: ",", decimalPlaces: 2, defaultValue: '0.00'},
                currency: {decimalSeparator: ".", thousandsSeparator: ",", decimalPlaces: 2, prefix: "", suffix: "", defaultValue: '0.00'},
                date: {
                    dayNames: [
                        "Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat",
                        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
                    ],
                    monthNames: [
                        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
                        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
                    ],
                    AmPm: ["am", "pm", "AM", "PM"],
                    S: function (j) {
                        return j < 11 || j > 13 ? ['st', 'nd', 'rd', 'th'][Math.min((j - 1) % 10, 3)] : 'th';
                    },
                    srcformat: 'Y-m-d',
                    newformat: 'n/j/Y',
                    parseRe: /[Tt\\\/:_;.,\t\s-]/,
                    masks: {
                        // see http://php.net/manual/en/function.date.php for PHP format used in jqGrid
                        // and see http://docs.jquery.com/UI/Datepicker/formatDate
                        // and https://github.com/jquery/globalize#dates for alternative formats used frequently
                        // one can find on https://github.com/jquery/globalize/tree/master/lib/cultures many
                        // information about date, time, numbers and currency formats used in different countries
                        // one should just convert the information in PHP format
                        ISO8601Long: "Y-m-d H:i:s",
                        ISO8601Short: "Y-m-d",
                        // short date:
                        //    n - Numeric representation of a month, without leading zeros
                        //    j - Day of the month without leading zeros
                        //    Y - A full numeric representation of a year, 4 digits
                        // example: 3/1/2012 which means 1 March 2012
                        ShortDate: "n/j/Y", // in jQuery UI Datepicker: "M/d/yyyy"
                        // long date:
                        //    l - A full textual representation of the day of the week
                        //    F - A full textual representation of a month
                        //    d - Day of the month, 2 digits with leading zeros
                        //    Y - A full numeric representation of a year, 4 digits
                        LongDate: "l, F d, Y", // in jQuery UI Datepicker: "dddd, MMMM dd, yyyy"
                        // long date with long time:
                        //    l - A full textual representation of the day of the week
                        //    F - A full textual representation of a month
                        //    d - Day of the month, 2 digits with leading zeros
                        //    Y - A full numeric representation of a year, 4 digits
                        //    g - 12-hour format of an hour without leading zeros
                        //    i - Minutes with leading zeros
                        //    s - Seconds, with leading zeros
                        //    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
                        FullDateTime: "l, F d, Y g:i:s A", // in jQuery UI Datepicker: "dddd, MMMM dd, yyyy h:mm:ss tt"
                        // month day:
                        //    F - A full textual representation of a month
                        //    d - Day of the month, 2 digits with leading zeros
                        MonthDay: "F d", // in jQuery UI Datepicker: "MMMM dd"
                        // short time (without seconds)
                        //    g - 12-hour format of an hour without leading zeros
                        //    i - Minutes with leading zeros
                        //    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
                        ShortTime: "g:i A", // in jQuery UI Datepicker: "h:mm tt"
                        // long time (with seconds)
                        //    g - 12-hour format of an hour without leading zeros
                        //    i - Minutes with leading zeros
                        //    s - Seconds, with leading zeros
                        //    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
                        LongTime: "g:i:s A", // in jQuery UI Datepicker: "h:mm:ss tt"
                        SortableDateTime: "Y-m-d\\TH:i:s",
                        UniversalSortableDateTime: "Y-m-d H:i:sO",
                        // month with year
                        //    Y - A full numeric representation of a year, 4 digits
                        //    F - A full textual representation of a month
                        YearMonth: "F, Y" // in jQuery UI Datepicker: "MMMM, yyyy"
                    },
                    reformatAfterEdit: false
                },
                baseLinkUrl: '',
                showAction: '',
                target: '',
                checkbox: {disabled: true},
                idName: 'id'
            }
        },
        /**
         * jqGrid German Translation
         * Version 1.0.0 (developed for jQuery Grid 3.3.1)
         * Olaf Kl??ppel opensource@blue-hit.de
         * http://blue-hit.de/
         *
         * Updated for jqGrid 3.8
         * Andreas Flack
         * http://www.contentcontrol-berlin.de
         *
         * Updated for jQuery 4.4
         * Oleg Kiriljuk oleg.kiriljuk@ok-soft-gmbh.com
         * the format corresponds now the format from
         * https://github.com/jquery/globalize/blob/master/lib/cultures/globalize.culture.de.js
         *
         * Dual licensed under the MIT and GPL licenses:
         * http://www.opensource.org/licenses/mit-license.php
         * http://www.gnu.org/licenses/gpl.html
         **/
        "de": {
            defaults: {
                recordtext: "Zeige {0} - {1} von {2}",
                emptyrecords: "Keine Datens??tze vorhanden",
                loadtext: "L??dt...",
                pgtext: "Seite {0} von {1}"
            },
            search: {
                caption: "Suche...",
                Find: "Suchen",
                Reset: "Zur??cksetzen",
                odata: [
                    { oper: 'eq', text: "gleich"},
                    { oper: 'ne', text: "ungleich"},
                    { oper: 'lt', text: "kleiner"},
                    { oper: 'le', text: "kleiner gleich"},
                    { oper: 'gt', text: "gr????er"},
                    { oper: 'ge', text: "gr????er gleich"},
                    { oper: 'bw', text: "beginnt mit"},
                    { oper: 'bn', text: "beginnt nicht mit"},
                    { oper: 'in', text: "ist in"},
                    { oper: 'ni', text: "ist nicht in"},
                    { oper: 'ew', text: "endet mit"},
                    { oper: 'en', text: "endet nicht mit"},
                    { oper: 'cn', text: "enth??lt"},
                    { oper: 'nc', text: "enth??lt nicht"}
                ],
                groupOps: [
                    { op: "AND", text: "alle" },
                    { op: "OR", text: "mindestens eine" }
                ]
            },
            edit: {
                addCaption: "Datensatz hinzuf??gen",
                editCaption: "Datensatz bearbeiten",
                bSubmit: "Speichern",
                bCancel: "Abbrechen",
                bClose: "Schlie??en",
                saveData: "Daten wurden ge??ndert! ??nderungen speichern?",
                bYes: "ja",
                bNo: "nein",
                bExit: "abbrechen",
                msg: {
                    required: "Feld ist erforderlich",
                    number: "Bitte geben Sie eine Zahl ein",
                    minValue: "Wert muss gr????er oder gleich sein, als ",
                    maxValue: "Wert muss kleiner oder gleich sein, als ",
                    email: "ist keine g??ltige E-Mail-Adresse",
                    integer: "Bitte geben Sie eine Ganzzahl ein",
                    date: "Bitte geben Sie ein g??ltiges Datum ein",
                    url: "ist keine g??ltige URL. Pr??fix muss eingegeben werden ('http://' oder 'https://')",
                    nodefined: " ist nicht definiert!",
                    novalue: " R??ckgabewert ist erforderlich!",
                    customarray: "Benutzerdefinierte Funktion sollte ein Array zur??ckgeben!",
                    customfcheck: "Benutzerdefinierte Funktion sollte im Falle der benutzerdefinierten ??berpr??fung vorhanden sein!"
                }
            },
            view: {
                caption: "Datensatz anzeigen",
                bClose: "Schlie??en"
            },
            del: {
                caption: "L??schen",
                msg: "Ausgew??hlte Datens??tze l??schen?",
                bSubmit: "L??schen",
                bCancel: "Abbrechen"
            },
            nav: {
                edittext: " ",
                edittitle: "Ausgew??hlte Zeile editieren",
                addtext: " ",
                addtitle: "Neue Zeile einf??gen",
                deltext: " ",
                deltitle: "Ausgew??hlte Zeile l??schen",
                searchtext: " ",
                searchtitle: "Datensatz suchen",
                refreshtext: "",
                refreshtitle: "Tabelle neu laden",
                alertcap: "Warnung",
                alerttext: "Bitte Zeile ausw??hlen",
                viewtext: "",
                viewtitle: "Ausgew??hlte Zeile anzeigen"
            },
            col: {
                caption: "Spalten ausw??hlen",
                bSubmit: "Speichern",
                bCancel: "Abbrechen"
            },
            errors: {
                errcap: "Fehler",
                nourl: "Keine URL angegeben",
                norecords: "Keine Datens??tze zu bearbeiten",
                model: "colNames und colModel sind unterschiedlich lang!"
            },
            formatter: {
                integer: {thousandsSeparator: ".", defaultValue: '0'},
                number: {decimalSeparator: ",", thousandsSeparator: ".", decimalPlaces: 2, defaultValue: '0,00'},
                currency: {decimalSeparator: ",", thousandsSeparator: ".", decimalPlaces: 2, prefix: "", suffix: " ???", defaultValue: '0,00'},
                date: {
                    dayNames: [
                        "So", "Mo", "Di", "Mi", "Do", "Fr", "Sa",
                        "Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"
                    ],
                    monthNames: [
                        "Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez",
                        "Januar", "Februar", "M??rz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"
                    ],
                    AmPm: ["", "", "", ""],
                    S: function (j) {
                        return '.';
                    }, // one can also use 'er' instead of '.' but one have to use additional word like 'der' or 'den' before
                    srcformat: 'Y-m-d',
                    newformat: 'd.m.Y',
                    parseRe: /[Tt\\\/:_;.,\t\s-]/,
                    masks: {
                        // see http://php.net/manual/en/function.date.php for PHP format used in jqGrid
                        // and see http://docs.jquery.com/UI/Datepicker/formatDate
                        // and https://github.com/jquery/globalize#dates for alternative formats used frequently
                        ISO8601Long: "Y-m-d H:i:s",
                        ISO8601Short: "Y-m-d",
                        // short date:
                        //    d - Day of the month, 2 digits with leading zeros
                        //    m - Numeric representation of a month, with leading zeros
                        //    Y - A full numeric representation of a year, 4 digits
                        ShortDate: "d.m.Y",	// in jQuery UI Datepicker: "dd.MM.yyyy"
                        // long date:
                        //    l - A full textual representation of the day of the week
                        //    j - Day of the month without leading zeros
                        //    F - A full textual representation of a month
                        //    Y - A full numeric representation of a year, 4 digits
                        LongDate: "l, j. F Y", // in jQuery UI Datepicker: "dddd, d. MMMM yyyy"
                        // long date with long time:
                        //    l - A full textual representation of the day of the week
                        //    j - Day of the month without leading zeros
                        //    F - A full textual representation of a month
                        //    Y - A full numeric representation of a year, 4 digits
                        //    H - 24-hour format of an hour with leading zeros
                        //    i - Minutes with leading zeros
                        //    s - Seconds, with leading zeros
                        FullDateTime: "l, j. F Y H:i:s", // in jQuery UI Datepicker: "dddd, d. MMMM yyyy HH:mm:ss"
                        // month day:
                        //    d - Day of the month, 2 digits with leading zeros
                        //    F - A full textual representation of a month
                        MonthDay: "d F", // in jQuery UI Datepicker: "dd MMMM"
                        // short time (without seconds)
                        //    H - 24-hour format of an hour with leading zeros
                        //    i - Minutes with leading zeros
                        ShortTime: "H:i", // in jQuery UI Datepicker: "HH:mm"
                        // long time (with seconds)
                        //    H - 24-hour format of an hour with leading zeros
                        //    i - Minutes with leading zeros
                        //    s - Seconds, with leading zeros
                        LongTime: "H:i:s", // in jQuery UI Datepicker: "HH:mm:ss"
                        SortableDateTime: "Y-m-d\\TH:i:s",
                        UniversalSortableDateTime: "Y-m-d H:i:sO",
                        // month with year
                        //    F - A full textual representation of a month
                        //    Y - A full numeric representation of a year, 4 digits
                        YearMonth: "F Y" // in jQuery UI Datepicker: "MMMM yyyy"
                    },
                    reformatAfterEdit: false
                },
                baseLinkUrl: '',
                showAction: '',
                target: '',
                checkbox: {disabled: true},
                idName: 'id'
            }
        },
        /**
         * jqGrid Russian Translation v1.0 02.07.2009 (based on translation by Alexey Kanaev v1.1 21.01.2009, http://softcore.com.ru)
         * Sergey Dyagovchenko
         * http://d.sumy.ua
         * Dual licensed under the MIT and GPL licenses:
         * http://www.opensource.org/licenses/mit-license.php
         * http://www.gnu.org/licenses/gpl.html
         **/
        "ru": {
            defaults: {
                recordtext: "???????????????? {0} - {1} ???? {2}",
                emptyrecords: "?????? ?????????????? ?????? ??????????????????",
                loadtext: "????????????????...",
                pgtext: "??????. {0} ???? {1}"
            },
            search: {
                caption: "??????????...",
                Find: "??????????",
                Reset: "??????????",
                odata: [
                    { oper: 'eq', text: "??????????"},
                    { oper: 'ne', text: "???? ??????????"},
                    { oper: 'lt', text: "????????????"},
                    { oper: 'le', text: "???????????? ?????? ??????????"},
                    { oper: 'gt', text: "????????????"},
                    { oper: 'ge', text: "???????????? ?????? ??????????"},
                    { oper: 'bw', text: "???????????????????? ??"},
                    { oper: 'bn', text: "???? ???????????????????? ??"},
                    { oper: 'in', text: "?????????????????? ??"},
                    { oper: 'ni', text: "???? ?????????????????? ??"},
                    { oper: 'ew', text: "?????????????????????????? ????"},
                    { oper: 'en', text: "???? ?????????????????????????? ????"},
                    { oper: 'cn', text: "????????????????"},
                    { oper: 'nc', text: "???? ????????????????"}
                ],
                groupOps: [
                    { op: "AND", text: "??????" },
                    { op: "OR", text: "??????????" }
                ]
            },
            edit: {
                addCaption: "???????????????? ????????????",
                editCaption: "?????????????????????????? ????????????",
                bSubmit: "??????????????????",
                bCancel: "????????????",
                bClose: "??????????????",
                saveData: "???????????? ???????? ??????????????????! ?????????????????? ???????????????????",
                bYes: "????",
                bNo: "??????",
                bExit: "????????????",
                msg: {
                    required: "???????? ???????????????? ????????????????????????",
                    number: "????????????????????, ?????????????? ???????????????????? ??????????",
                    minValue: "???????????????? ???????????? ???????? ???????????? ???????? ??????????",
                    maxValue: "???????????????? ???????????? ???????? ???????????? ???????? ??????????",
                    email: "???????????????????????? ???????????????? e-mail",
                    integer: "????????????????????, ?????????????? ?????????? ??????????",
                    date: "????????????????????, ?????????????? ???????????????????? ????????",
                    url: "???????????????? ????????????. ???????????????????? ???????????? ?????????????? ('http://' ?????? 'https://')",
                    nodefined: " ???? ????????????????????!",
                    novalue: " ???????????????????????? ???????????????? ??????????????????????!",
                    customarray: "???????????????????????????????? ?????????????? ???????????? ???????????????????? ????????????!",
                    customfcheck: "???????????????????????????????? ?????????????? ???????????? ???????????????????????????? ?? ???????????? ???????????????????????????????? ????????????????!"
                }
            },
            view: {
                caption: "???????????????? ????????????",
                bClose: "??????????????"
            },
            del: {
                caption: "??????????????",
                msg: "?????????????? ?????????????????? ????????????(??)?",
                bSubmit: "??????????????",
                bCancel: "????????????"
            },
            nav: {
                edittext: " ",
                edittitle: "?????????????????????????? ?????????????????? ????????????",
                addtext: " ",
                addtitle: "???????????????? ?????????? ????????????",
                deltext: " ",
                deltitle: "?????????????? ?????????????????? ????????????",
                searchtext: " ",
                searchtitle: "?????????? ????????????",
                refreshtext: "",
                refreshtitle: "???????????????? ??????????????",
                alertcap: "????????????????",
                alerttext: "????????????????????, ???????????????? ????????????",
                viewtext: "",
                viewtitle: "?????????????????????? ?????????????????? ????????????"
            },
            col: {
                caption: "????????????????/???????????? ??????????????",
                bSubmit: "??????????????????",
                bCancel: "????????????"
            },
            errors: {
                errcap: "????????????",
                nourl: "URL ???? ????????????????????",
                norecords: "?????? ?????????????? ?????? ??????????????????",
                model: "?????????? ?????????? ???? ?????????????????????????? ?????????? ???????????????? ??????????????!"
            },
            formatter: {
                integer: {thousandsSeparator: " ", defaultValue: '0'},
                number: {decimalSeparator: ",", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0,00'},
                currency: {decimalSeparator: ",", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix: "", defaultValue: '0,00'},
                date: {
                    dayNames: [
                        "????", "????", "????", "????", "????", "????", "????",
                        "??????????????????????", "??????????????????????", "??????????????", "??????????", "??????????????", "??????????????", "??????????????"
                    ],
                    monthNames: [
                        "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????",
                        "????????????", "??????????????", "????????", "????????????", "??????", "????????", "????????", "????????????", "????????????????", "??????????????", "????????????", "??????????????"
                    ],
                    AmPm: ["am", "pm", "AM", "PM"],
                    S: function (j) {
                        return j < 11 || j > 13 ? ['st', 'nd', 'rd', 'th'][Math.min((j - 1) % 10, 3)] : 'th'
                    },
                    srcformat: 'Y-m-d',
                    newformat: 'd.m.Y',
                    parseRe: /[Tt\\\/:_;.,\t\s-]/,
                    masks: {
                        ISO8601Long: "Y-m-d H:i:s",
                        ISO8601Short: "Y-m-d",
                        ShortDate: "n.j.Y",
                        LongDate: "l, F d, Y",
                        FullDateTime: "l, F d, Y G:i:s",
                        MonthDay: "F d",
                        ShortTime: "G:i",
                        LongTime: "G:i:s",
                        SortableDateTime: "Y-m-d\\TH:i:s",
                        UniversalSortableDateTime: "Y-m-d H:i:sO",
                        YearMonth: "F, Y"
                    },
                    reformatAfterEdit: false
                },
                baseLinkUrl: '',
                showAction: '',
                target: '',
                checkbox: {disabled: true},
                idName: 'id'
            }

        }
    };

    $.extend($.jgrid, langs[lang]);
}