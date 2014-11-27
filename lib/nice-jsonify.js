var sample = {
              "x": {
                "scale": "x",
                "field": "data.Effect__Amount_of_damage"
              },
              "y": {
                "scale": "y",
                "field": "data.Cost__Total_$"
              },
              "size": {
                "value": 50
              },
              "shape": {
                "value": "circle"
              },
              "stroke": {
                "value": "steelblue"
              },
              "strokeWidth": {
                "value": [1,2,3]
              },
              "str": {
                "value": [1]
              },
              "empty": []

            };

var sample2 = {
  "width": 126,
  "height": 300,
  "padding": "auto",
  "data": [
    {
      "name": "table",
      "url": "data/birdstrikes.json"
    },
    {
      "name": "tb1",
      "values": [1,2,3,4]
    }
  ],
  "marks": [
    {
      "type": "group",
      "properties": {
        "enter": {
          "width": {
            "group": "width"
          },
          "height": {
            "group": "height"
          }
        }
      },
      "scales": [
        {
          "name": "x",
          "type": "ordinal",
          "domain": {
            "data": "table",
            "field": "data.Effect__Amount_of_damage"
          },
          "sort": true,
          "bandWidth": 21,
          "round": true,
          "nice": true,
          "points": true,
          "padding": 1
        },
        {
          "name": "y",
          "type": "linear",
          "domain": {
            "data": "table",
            "field": "data.Cost__Total_$"
          },
          "range": "height",
          "zero": true,
          "reverse": false,
          "round": true,
          "nice": true
        }
      ],
      "axes": [
        {
          "type": "x",
          "scale": "x"
        },
        {
          "type": "y",
          "scale": "y"
        }
      ],
      "marks": [
        {
          "type": "symbol",
          "from": {
            "data": "table"
          },
          "properties": {
            "enter": {
              "x": {
                "scale": "x",
                "field": "data.Effect__Amount_of_damage"
              },
              "y": {
                "scale": "y",
                "field": "data.Cost__Total_$"
              },
              "size": {
                "value": 50
              },
              "shape": {
                "value": "circle"
              },
              "stroke": {
                "value": "steelblue"
              },
              "strokeWidth": {
                "value": 2
              }
            },
            "update": {
              "x": {
                "scale": "x",
                "field": "data.Effect__Amount_of_damage"
              },
              "y": {
                "scale": "y",
                "field": "data.Cost__Total_$"
              },
              "size": {
                "value": 50
              },
              "shape": {
                "value": "circle"
              },
              "stroke": {
                "value": "steelblue"
              },
              "strokeWidth": {
                "value": 2
              }
            }
          }
        }
      ]
    }
  ]
};

var json = require("./json3");
var util = require("util");

// console.log(json);
console.log(json.stringify(sample2, null, "  ", 60));