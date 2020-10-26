var myConfig = {
  type: "line",
  series: [
    {
      values: [160, 159, 163, 158, 157, 159, 155, 153],
    },
  ],
};

var myConfig2 = {
  type: "line",
  series: [
    {
      values: [1690, 1780, 1500, 1725, 1590, 1650, 1700, 1900],
    },
  ],
};

zingchart.render({
  id: "myChart",
  data: myConfig,
});

zingchart.render({
  id: "myChart2",
  data: myConfig2,
});
