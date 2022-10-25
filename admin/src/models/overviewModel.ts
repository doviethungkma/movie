interface IOverview {
  title: string;
  value: number;
  icon: string;
}

const icon1 = require("../assets/icons/graph-bar.svg").default;
const icon2 = require("../assets/icons/film.svg").default;
const icon3 = require("../assets/icons/comments.svg").default;
const icon4 = require("../assets/icons/star-half-alt.svg").default;

export const overviewModel: Array<IOverview> = [
  {
    title: "Unique views this month",
    value: 5678,
    icon: icon1,
  },
  {
    title: "Items added this month",
    value: 172,
    icon: icon2,
  },
  {
    title: "New comments",
    value: 2573,
    icon: icon3,
  },
  {
    title: "New reviews",
    value: 1021,
    icon: icon4,
  },
];
