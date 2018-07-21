const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Marrage collection and inserts the  data below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/location_db"
);


const MarriagesSeed = [{
    "2008": "1,733",
    "2009": "1,605",
    "2010": "1,619",
    "2011": "1,675",
    "2012": "1,665",
    "2013": "1,625",
    "2014": "1,648",
    "2015": "1,895",
    "2016": "1,809",
    "2017": "1,741",
    "County": "Alachua",
    "2018 (So far this year)": 502,
    "": ""
  },
  {
    "2008": 240,
    "2009": 236,
    "2010": 198,
    "2011": 212,
    "2012": 241,
    "2013": 209,
    "2014": 227,
    "2015": 230,
    "2016": 231,
    "2017": 221,
    "County": "Baker",
    "2018 (So far this year)": 73,
    "": ""
  },
  {
    "2008": "2,198",
    "2009": "2,245",
    "2010": "2,152",
    "2011": "2,450",
    "2012": "2,465",
    "2013": "2,351",
    "2014": "2,397",
    "2015": "2,691",
    "2016": "2,500",
    "2017": "2,639",
    "County": "Bay",
    "2018 (So far this year)": "1,109",
    "": ""
  },
  {
    "2008": 221,
    "2009": 238,
    "2010": 186,
    "2011": 242,
    "2012": 216,
    "2013": 208,
    "2014": 201,
    "2015": 234,
    "2016": 201,
    "2017": 195,
    "County": "Bradford",
    "2018 (So far this year)": 88,
    "": ""
  },
  {
    "2008": "4,251",
    "2009": "4,059",
    "2010": "4,299",
    "2011": "4,278",
    "2012": "4,412",
    "2013": "4,212",
    "2014": "4,378",
    "2015": "4,911",
    "2016": "4,796",
    "2017": "4,829",
    "County": "Brevard",
    "2018 (So far this year)": "1,481",
    "": ""
  },
  {
    "2008": "13,867",
    "2009": "12,872",
    "2010": "12,826",
    "2011": "13,060",
    "2012": "12,766",
    "2013": "12,246",
    "2014": "13,287",
    "2015": "15,804",
    "2016": "16,573",
    "2017": "16,184",
    "County": "Broward",
    "2018 (So far this year)": "7,261",
    "": ""
  },
  {
    "2008": 113,
    "2009": 108,
    "2010": 118,
    "2011": 103,
    "2012": 95,
    "2013": 95,
    "2014": 95,
    "2015": 89,
    "2016": 90,
    "2017": 112,
    "County": "Calhoun",
    "2018 (So far this year)": 31,
    "": ""
  },
  {
    "2008": 966,
    "2009": 908,
    "2010": 899,
    "2011": 944,
    "2012": 944,
    "2013": 930,
    "2014": "1,037",
    "2015": "1,128",
    "2016": "1,063",
    "2017": "1,041",
    "County": "Charlotte",
    "2018 (So far this year)": 557,
    "": ""
  },
  {
    "2008": 801,
    "2009": 768,
    "2010": 727,
    "2011": 719,
    "2012": 766,
    "2013": 710,
    "2014": 732,
    "2015": 801,
    "2016": 907,
    "2017": 761,
    "County": "Citrus",
    "2018 (So far this year)": 375,
    "": ""
  },
  {
    "2008": "1,296",
    "2009": "1,245",
    "2010": "1,246",
    "2011": "1,289",
    "2012": "1,361",
    "2013": "1,362",
    "2014": "1,357",
    "2015": "1,425",
    "2016": "1,360",
    "2017": "1,367",
    "County": "Clay",
    "2018 (So far this year)": 626,
    "": ""
  },
  {
    "2008": "2,904",
    "2009": "2,709",
    "2010": "2,627",
    "2011": "2,803",
    "2012": "2,767",
    "2013": "2,675",
    "2014": "2,877",
    "2015": "3,005",
    "2016": "3,077",
    "2017": "2,942",
    "County": "Collier",
    "2018 (So far this year)": 917,
    "": ""
  },
  {
    "2008": 519,
    "2009": 485,
    "2010": 486,
    "2011": 485,
    "2012": 484,
    "2013": 473,
    "2014": 519,
    "2015": 533,
    "2016": 539,
    "2017": 520,
    "County": "Columbia",
    "2018 (So far this year)": 249,
    "": ""
  },
  {
    "2008": "23,270",
    "2009": "21,195",
    "2010": "20,361",
    "2011": "20,560",
    "2012": "20,009",
    "2013": "18,815",
    "2014": "20,015",
    "2015": "23,841",
    "2016": "24,763",
    "2017": "24,142",
    "County": "Miami-Dade",
    "2018 (So far this year)": "11,251",
    "": ""
  },
  {
    "2008": 159,
    "2009": 161,
    "2010": 174,
    "2011": 181,
    "2012": 179,
    "2013": 199,
    "2014": 210,
    "2015": 178,
    "2016": 179,
    "2017": 197,
    "County": "Desoto",
    "2018 (So far this year)": 111,
    "": ""
  },
  {
    "2008": 131,
    "2009": 119,
    "2010": 89,
    "2011": 95,
    "2012": 102,
    "2013": 109,
    "2014": 88,
    "2015": 98,
    "2016": 107,
    "2017": 90,
    "County": "Dixie",
    "2018 (So far this year)": 34,
    "": ""
  },
  {
    "2008": "5,904",
    "2009": "5,599",
    "2010": "5,583",
    "2011": "5,696",
    "2012": "5,497",
    "2013": "5,985",
    "2014": "6,304",
    "2015": "6,726",
    "2016": "6,606",
    "2017": "6,481",
    "County": "Duval",
    "2018 (So far this year)": "1,908",
    "": ""
  },
  {
    "2008": "3,221",
    "2009": "3,196",
    "2010": "3,077",
    "2011": "3,420",
    "2012": "3,304",
    "2013": "3,417",
    "2014": "3,273",
    "2015": "4,446",
    "2016": "4,081",
    "2017": "3,805",
    "County": "Escambia",
    "2018 (So far this year)": "1,598",
    "": ""
  },
  {
    "2008": 529,
    "2009": 533,
    "2010": 492,
    "2011": 505,
    "2012": 577,
    "2013": 568,
    "2014": 583,
    "2015": 709,
    "2016": 636,
    "2017": 602,
    "County": "Flagler",
    "2018 (So far this year)": 277,
    "": ""
  },
  {
    "2008": 160,
    "2009": 178,
    "2010": 169,
    "2011": 160,
    "2012": 181,
    "2013": 174,
    "2014": 169,
    "2015": 164,
    "2016": 166,
    "2017": 156,
    "County": "Franklin",
    "2018 (So far this year)": 47,
    "": ""
  },
  {
    "2008": 248,
    "2009": 265,
    "2010": 222,
    "2011": 195,
    "2012": 187,
    "2013": 196,
    "2014": 164,
    "2015": 199,
    "2016": 197,
    "2017": 210,
    "County": "Gadsden",
    "2018 (So far this year)": 90,
    "": ""
  },
  {
    "2008": 153,
    "2009": 142,
    "2010": 224,
    "2011": 260,
    "2012": 231,
    "2013": 216,
    "2014": 251,
    "2015": 264,
    "2016": 228,
    "2017": 226,
    "County": "Gilchrist",
    "2018 (So far this year)": 99,
    "": ""
  },
  {
    "2008": 65,
    "2009": 54,
    "2010": 59,
    "2011": 57,
    "2012": 50,
    "2013": 42,
    "2014": 44,
    "2015": 47,
    "2016": 52,
    "2017": 48,
    "County": "Glades",
    "2018 (So far this year)": 23,
    "": ""
  },
  {
    "2008": 191,
    "2009": 189,
    "2010": 191,
    "2011": 180,
    "2012": 217,
    "2013": 200,
    "2014": 208,
    "2015": 239,
    "2016": 168,
    "2017": 190,
    "County": "Gulf",
    "2018 (So far this year)": 91,
    "": ""
  },
  {
    "2008": 126,
    "2009": 124,
    "2010": 117,
    "2011": 120,
    "2012": 125,
    "2013": 99,
    "2014": 115,
    "2015": 112,
    "2016": 103,
    "2017": 99,
    "County": "Hamilton",
    "2018 (So far this year)": 39,
    "": ""
  },
  {
    "2008": 207,
    "2009": 173,
    "2010": 173,
    "2011": 159,
    "2012": 169,
    "2013": 162,
    "2014": 146,
    "2015": 153,
    "2016": 163,
    "2017": 143,
    "County": "Hardee",
    "2018 (So far this year)": 78,
    "": ""
  },
  {
    "2008": 211,
    "2009": 193,
    "2010": 205,
    "2011": 207,
    "2012": 209,
    "2013": 215,
    "2014": 273,
    "2015": 230,
    "2016": 286,
    "2017": 231,
    "County": "Hendry",
    "2018 (So far this year)": 145,
    "": ""
  },
  {
    "2008": 895,
    "2009": 900,
    "2010": 845,
    "2011": 900,
    "2012": 905,
    "2013": 860,
    "2014": 918,
    "2015": "1,095",
    "2016": "1,064",
    "2017": "1,114",
    "County": "Hernando",
    "2018 (So far this year)": 463,
    "": ""
  },
  {
    "2008": 592,
    "2009": 555,
    "2010": 564,
    "2011": 539,
    "2012": 531,
    "2013": 486,
    "2014": 570,
    "2015": 544,
    "2016": 644,
    "2017": 581,
    "County": "Highlands",
    "2018 (So far this year)": 226,
    "": ""
  },
  {
    "2008": "9,125",
    "2009": "8,458",
    "2010": "8,360",
    "2011": "8,522",
    "2012": "8,588",
    "2013": "8,403",
    "2014": "9,140",
    "2015": "10,583",
    "2016": "10,500",
    "2017": "10,365",
    "County": "Hillsborough",
    "2018 (So far this year)": "3,294",
    "": ""
  },
  {
    "2008": 168,
    "2009": 164,
    "2010": 184,
    "2011": 165,
    "2012": 148,
    "2013": 134,
    "2014": 138,
    "2015": 164,
    "2016": 173,
    "2017": 147,
    "County": "Holmes",
    "2018 (So far this year)": 60,
    "": ""
  },
  {
    "2008": 850,
    "2009": 885,
    "2010": 873,
    "2011": 876,
    "2012": 858,
    "2013": 882,
    "2014": 839,
    "2015": 942,
    "2016": 922,
    "2017": "1,025",
    "County": "Indian River",
    "2018 (So far this year)": 482,
    "": ""
  },
  {
    "2008": 319,
    "2009": 332,
    "2010": 324,
    "2011": 323,
    "2012": 354,
    "2013": 310,
    "2014": 290,
    "2015": 326,
    "2016": 329,
    "2017": 320,
    "County": "Jackson",
    "2018 (So far this year)": 127,
    "": ""
  },
  {
    "2008": 97,
    "2009": 89,
    "2010": 93,
    "2011": 95,
    "2012": 93,
    "2013": 89,
    "2014": 68,
    "2015": 83,
    "2016": 98,
    "2017": 90,
    "County": "Jefferson",
    "2018 (So far this year)": 44,
    "": ""
  },
  {
    "2008": 64,
    "2009": 42,
    "2010": 59,
    "2011": 52,
    "2012": 41,
    "2013": 48,
    "2014": 52,
    "2015": 52,
    "2016": 38,
    "2017": 43,
    "County": "Lafayette",
    "2018 (So far this year)": 20,
    "": ""
  },
  {
    "2008": "2,727",
    "2009": "2,713",
    "2010": "2,639",
    "2011": "2,510",
    "2012": "2,623",
    "2013": "2,875",
    "2014": "3,054",
    "2015": "3,548",
    "2016": "3,591",
    "2017": "3,486",
    "County": "Lake",
    "2018 (So far this year)": "1,070",
    "": ""
  },
  {
    "2008": "4,318",
    "2009": "4,072",
    "2010": "4,193",
    "2011": "4,143",
    "2012": "4,266",
    "2013": "4,263",
    "2014": "4,547",
    "2015": "5,295",
    "2016": "5,117",
    "2017": "5,037",
    "County": "Lee",
    "2018 (So far this year)": "1,538",
    "": ""
  },
  {
    "2008": "1,843",
    "2009": "1,756",
    "2010": "1,825",
    "2011": "1,732",
    "2012": "1,797",
    "2013": "1,652",
    "2014": "1,743",
    "2015": "2,099",
    "2016": "1,911",
    "2017": "1,856",
    "County": "Leon",
    "2018 (So far this year)": 858,
    "": ""
  },
  {
    "2008": 221,
    "2009": 224,
    "2010": 174,
    "2011": 221,
    "2012": 227,
    "2013": 186,
    "2014": 212,
    "2015": 207,
    "2016": 188,
    "2017": 202,
    "County": "Levy",
    "2018 (So far this year)": 111,
    "": ""
  },
  {
    "2008": 52,
    "2009": 50,
    "2010": 42,
    "2011": 52,
    "2012": 49,
    "2013": 49,
    "2014": 59,
    "2015": 59,
    "2016": 38,
    "2017": 51,
    "County": "Liberty",
    "2018 (So far this year)": 16,
    "": ""
  },
  {
    "2008": 146,
    "2009": 126,
    "2010": 129,
    "2011": 141,
    "2012": 129,
    "2013": 122,
    "2014": 145,
    "2015": 143,
    "2016": 145,
    "2017": 155,
    "County": "Madison",
    "2018 (So far this year)": 44,
    "": ""
  },
  {
    "2008": "1,904",
    "2009": "1,839",
    "2010": "1,787",
    "2011": "1,834",
    "2012": "1,909",
    "2013": "1,925",
    "2014": "2,017",
    "2015": "2,324",
    "2016": "2,341",
    "2017": "2,318",
    "County": "Manatee",
    "2018 (So far this year)": "1,101",
    "": ""
  },
  {
    "2008": "1,925",
    "2009": "1,893",
    "2010": "1,863",
    "2011": "1,947",
    "2012": "1,934",
    "2013": "1,911",
    "2014": "2,124",
    "2015": "2,152",
    "2016": "2,173",
    "2017": "2,092",
    "County": "Marion",
    "2018 (So far this year)": 942,
    "": ""
  },
  {
    "2008": 851,
    "2009": 810,
    "2010": 825,
    "2011": 868,
    "2012": 889,
    "2013": 900,
    "2014": "1,011",
    "2015": "1,007",
    "2016": "1,113",
    "2017": "1,048",
    "County": "Martin",
    "2018 (So far this year)": 314,
    "": ""
  },
  {
    "2008": "2,722",
    "2009": "2,663",
    "2010": "2,740",
    "2011": "3,284",
    "2012": "3,039",
    "2013": "2,774",
    "2014": "2,803",
    "2015": "3,054",
    "2016": "2,969",
    "2017": "2,514",
    "County": "Monroe",
    "2018 (So far this year)": 548,
    "": ""
  },
  {
    "2008": 682,
    "2009": 728,
    "2010": 688,
    "2011": 761,
    "2012": 730,
    "2013": 733,
    "2014": 802,
    "2015": 909,
    "2016": 861,
    "2017": 869,
    "County": "Nassau",
    "2018 (So far this year)": 193,
    "": ""
  },
  {
    "2008": "3,040",
    "2009": "2,913",
    "2010": "2,944",
    "2011": "3,193",
    "2012": "3,253",
    "2013": "3,080",
    "2014": "3,216",
    "2015": "3,152",
    "2016": "3,212",
    "2017": "3,134",
    "County": "Okaloosa",
    "2018 (So far this year)": 672,
    "": ""
  },
  {
    "2008": 257,
    "2009": 290,
    "2010": 256,
    "2011": 224,
    "2012": 201,
    "2013": 223,
    "2014": 238,
    "2015": 249,
    "2016": 250,
    "2017": 251,
    "County": "Okeechobee",
    "2018 (So far this year)": 89,
    "": ""
  },
  {
    "2008": "9,686",
    "2009": "9,036",
    "2010": "8,818",
    "2011": "9,244",
    "2012": "9,275",
    "2013": "8,973",
    "2014": "9,664",
    "2015": "11,711",
    "2016": "12,353",
    "2017": "12,244",
    "County": "Orange",
    "2018 (So far this year)": "5,488",
    "": ""
  },
  {
    "2008": "4,135",
    "2009": "3,570",
    "2010": "3,488",
    "2011": "3,501",
    "2012": "3,437",
    "2013": "3,285",
    "2014": "3,466",
    "2015": "4,028",
    "2016": "4,165",
    "2017": "4,143",
    "County": "Osceola",
    "2018 (So far this year)": "1,128",
    "": ""
  },
  {
    "2008": "8,128",
    "2009": "7,621",
    "2010": "7,648",
    "2011": "7,730",
    "2012": "7,870",
    "2013": "7,789",
    "2014": "8,446",
    "2015": "9,577",
    "2016": "9,864",
    "2017": "9,473",
    "County": "Palm Beach",
    "2018 (So far this year)": "3,964",
    "": ""
  },
  {
    "2008": "2,622",
    "2009": "2,285",
    "2010": "2,286",
    "2011": "2,247",
    "2012": "2,279",
    "2013": "2,299",
    "2014": "2,393",
    "2015": "2,642",
    "2016": "2,629",
    "2017": "2,644",
    "County": "Pasco",
    "2018 (So far this year)": "1,265",
    "": ""
  },
  {
    "2008": "6,839",
    "2009": "6,570",
    "2010": "6,622",
    "2011": "6,758",
    "2012": "6,776",
    "2013": "6,651",
    "2014": "7,064",
    "2015": "8,427",
    "2016": "7,935",
    "2017": "7,615",
    "County": "Pinellas",
    "2018 (So far this year)": "1,547",
    "": ""
  },
  {
    "2008": "3,850",
    "2009": "3,581",
    "2010": "3,463",
    "2011": "3,352",
    "2012": "3,420",
    "2013": "3,461",
    "2014": "3,784",
    "2015": "3,997",
    "2016": "4,286",
    "2017": "4,206",
    "County": "Polk",
    "2018 (So far this year)": 827,
    "": ""
  },
  {
    "2008": 553,
    "2009": 443,
    "2010": 451,
    "2011": 468,
    "2012": 420,
    "2013": 399,
    "2014": 427,
    "2015": 453,
    "2016": 452,
    "2017": 416,
    "County": "Putnam",
    "2018 (So far this year)": 92,
    "": ""
  },
  {
    "2008": "1,576",
    "2009": "1,425",
    "2010": "1,370",
    "2011": "1,433",
    "2012": "1,443",
    "2013": "1,477",
    "2014": "1,600",
    "2015": "2,041",
    "2016": "1,896",
    "2017": "1,826",
    "County": "Saint Johns",
    "2018 (So far this year)": 732,
    "": ""
  },
  {
    "2008": "1,463",
    "2009": "1,387",
    "2010": "1,359",
    "2011": "1,442",
    "2012": "1,372",
    "2013": "1,440",
    "2014": "1,461",
    "2015": "1,722",
    "2016": "1,683",
    "2017": "1,936",
    "County": "Saint Lucie",
    "2018 (So far this year)": 858,
    "": ""
  },
  {
    "2008": "1,129",
    "2009": "1,101",
    "2010": "1,030",
    "2011": "1,029",
    "2012": "1,021",
    "2013": 958,
    "2014": 994,
    "2015": "1,098",
    "2016": "1,105",
    "2017": "1,168",
    "County": "Santa Rosa",
    "2018 (So far this year)": 172,
    "": ""
  },
  {
    "2008": "2,640",
    "2009": "2,620",
    "2010": "2,529",
    "2011": "2,689",
    "2012": "2,761",
    "2013": "2,561",
    "2014": "2,661",
    "2015": "3,169",
    "2016": "2,999",
    "2017": "2,976",
    "County": "Sarasota",
    "2018 (So far this year)": 626,
    "": ""
  },
  {
    "2008": "2,953",
    "2009": "2,531",
    "2010": "2,601",
    "2011": "2,655",
    "2012": "2,585",
    "2013": "2,540",
    "2014": "2,748",
    "2015": "2,937",
    "2016": "2,833",
    "2017": "2,713",
    "County": "Seminole",
    "2018 (So far this year)": 493,
    "": ""
  },
  {
    "2008": 341,
    "2009": 310,
    "2010": 301,
    "2011": 325,
    "2012": 324,
    "2013": 330,
    "2014": 304,
    "2015": 429,
    "2016": 381,
    "2017": 360,
    "County": "Sumter",
    "2018 (So far this year)": 163,
    "": ""
  },
  {
    "2008": 236,
    "2009": 223,
    "2010": 229,
    "2011": 226,
    "2012": 209,
    "2013": 210,
    "2014": 200,
    "2015": 267,
    "2016": 196,
    "2017": 224,
    "County": "Suwannee",
    "2018 (So far this year)": 107,
    "": ""
  },
  {
    "2008": 175,
    "2009": 136,
    "2010": 149,
    "2011": 144,
    "2012": 104,
    "2013": 153,
    "2014": 130,
    "2015": 129,
    "2016": 149,
    "2017": 123,
    "County": "Taylor",
    "2018 (So far this year)": 38,
    "": ""
  },
  {
    "2008": 109,
    "2009": 137,
    "2010": 137,
    "2011": 132,
    "2012": 115,
    "2013": 132,
    "2014": 109,
    "2015": 162,
    "2016": 147,
    "2017": 101,
    "County": "Union",
    "2018 (So far this year)": 25,
    "": ""
  },
  {
    "2008": "3,226",
    "2009": "3,210",
    "2010": "3,066",
    "2011": "3,119",
    "2012": "3,194",
    "2013": "3,098",
    "2014": "3,302",
    "2015": "3,813",
    "2016": "3,653",
    "2017": "3,745",
    "County": "Volusia",
    "2018 (So far this year)": 882,
    "": ""
  },
  {
    "2008": 212,
    "2009": 180,
    "2010": 204,
    "2011": 170,
    "2012": 210,
    "2013": 198,
    "2014": 224,
    "2015": 201,
    "2016": 205,
    "2017": 199,
    "County": "Wakulla",
    "2018 (So far this year)": 40,
    "": ""
  },
  {
    "2008": "1,416",
    "2009": "1,539",
    "2010": "1,434",
    "2011": "1,641",
    "2012": "1,713",
    "2013": "1,621",
    "2014": "1,551",
    "2015": "1,794",
    "2016": "1,755",
    "2017": "1,596",
    "County": "Walton",
    "2018 (So far this year)": 167,
    "": ""
  },
  {
    "2008": 117,
    "2009": 121,
    "2010": 139,
    "2011": 158,
    "2012": 156,
    "2013": 154,
    "2014": 138,
    "2015": 185,
    "2016": 172,
    "2017": 168,
    "County": "Washington",
    "2018 (So far this year)": 80,
    "": ""
  },
  {
    "2008": 86,
    "2009": 65,
    "2010": 87,
    "2011": 380,
    "2012": 82,
    "2013": 69,
    "2014": 272,
    "2015": 141,
    "2016": 139,
    "2017": 84,
    "County": "Unknown",
    "2018 (So far this year)": 37,
    "": ""
  },
  {
    "2008": "",
    "2009": "",
    "2010": "",
    "2011": "",
    "2012": "",
    "2013": "",
    "2014": "",
    "2015": "",
    "2016": "",
    "2017": "",
    "County": "",
    "2018 (So far this year)": "",
    "": ""
  }
]

db.Marriages
  .remove({})
  .then(() => db.Marriages.collection.insertMany(MarriagesSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });