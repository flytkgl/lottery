/**
 * 奖品设置
 * type: 唯一标识，0是默认特别奖的占位符，其它奖品不可使用
 * count: 奖品数量
 * title: 奖品描述
 * text: 奖品标题
 * img: 图片地址
 */
const prizes = [
  {
    type: 0,
    count: 1000,
    title: "",
    text: "特别奖"
  },
  {
    type: 1,
    count: 40,
    text: "",
    title: "Smart Facial Brush",
    img: "../img/secrit.jpg"
  },
  {
    type: 2,
    count: 10,
    text: "",
    title: "Shavers",
    img: "../img/mbp.jpg"
  },
  {
    type: 3,
    count: 10,
    text: "",
    title: "Body Fat Scale",
    img: "../img/huawei.png"
  },
  {
    type: 4,
    count: 30,
    text: "",
    title: "Mijia Electric Screwdrivers",
    img: "../img/ipad.jpg"
  },
  {
    type: 5,
    count: 10,
    text: "",
    title: "Xiaomi Mi Band 4",
    img: "../img/spark.jpg"
  },
  {
    type: 6,
    count: 2,
    text: "",
    title: "Jimmy JV71 Vacuum Cleaner",
    img: "../img/kindle.jpg"
  }
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [1, 10, 10, 10, 10, 10, 2];

/**
 * 卡片公司名称标识
 */
const COMPANY = "MuChen";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};
