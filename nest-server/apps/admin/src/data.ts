// JSON.stringify($$('#branchList > .jd-category-div >h4').map((e,i)=>({name:e.innerText,child:$$('li',$$('.jd-category-style-1')[i]).map(item=>{return {name:item.innerText,img:$$('img',item)[0].src}})})))

export const data = [
  {
    name: '手机数码',
    child: [
      {
        name: '热门品牌',
        child: [
          {
            name: '小米',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
          },
          {
            name: '华为',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
          },
          {
            name: '荣耀',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
          },
          {
            name: 'iPhone',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
          },
          {
            name: 'vivo',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t11014/359/2341377211/2777/1755c29c/5a169244Nff0179e0.png',
          },
          {
            name: 'OPPO',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t13036/273/932026474/2570/a3517c7d/5a169254N4bbbd9fb.png',
          },
          {
            name: '魅族',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t12820/326/909017718/7138/68cde747/5a169243N40eca33c.jpg',
          },
          {
            name: '三星',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t11509/131/2348573811/3425/4f20fe6/5a16925aN8a6dfd03.png',
          },
          {
            name: '一加',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t11209/71/2351231464/4158/fc0c415c/5a16923fNfc14307e.jpg',
          },
          {
            name: '360手机',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t13096/309/908035611/5138/5558f001/5a16924fNeac7677e.jpg',
          },
          {
            name: '锤子手机',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t1/84715/12/13703/4118/5e5f0dacE08741f12/63fb9e75fbaf0738.jpg',
          },
          {
            name: '努比亚',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t1/108301/34/7712/3254/5e5f0de9E4ca2f4b5/c664966ee1d36d47.jpg',
          },
        ],
      },
      {
        name: '手机通讯',
        child: [
          {
            name: '老人机',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg',
          },
          {
            name: '手机',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t11503/241/2246064496/4783/cea2850e/5a169216N0701c7f1.jpg',
          },
          {
            name: '全面屏手机',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t18955/187/1309277884/11517/fe100782/5ac48d27N3f5bb821.jpg',
          },
          {
            name: '游戏手机',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t11470/45/2362968077/2689/fb36d9a0/5a169238Nc8f0882b.jpg',
          },
          {
            name: '拍照手机',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t12022/66/917351804/2257/7ddc58e5/5a169232Ndf76f53c.jpg',
          },
          {
            name: '对讲机',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t13255/192/958298391/1687/5c7e3c53/5a169204Nd4aa27bb.jpg',
          },
          {
            name: '京东回收',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t13246/188/925975876/8794/686dbb9c/5a1691e0N62f626e3.jpg',
          },
          {
            name: '女性手机',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t1/109596/11/7650/2742/5e5f1074E76a2364e/09b2b19f13691c60.jpg',
          },
          {
            name: '京东维修',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t11644/236/2358207967/6141/e2d71825/5a169205N84a49a6a.jpg',
          },
        ],
      },
      {
        name: '运营商',
        child: [
          {
            name: '合约机',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '选号卡',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '办套餐',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '京东网厅',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '手机配件',
        child: [
          {
            name: '数据线',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '手机储存卡',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '充电宝',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '手机贴膜',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '手机耳机',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '蓝牙耳机',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '手机支架',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '手机饰品',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '车载配件',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '充电器',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '手机电池',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '创意配件',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '拍照配件',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '苹果周边',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '手机壳/保护套',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '无线充电器',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '背夹充电宝',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '手机转接',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '摄影摄像',
        child: [
          {
            name: '单反相机',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '数码相机',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '拍立得',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '户外器材',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '单电/微单相机',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '摄像机',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '运动相机',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '镜头',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '冲印服务',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '影音娱乐',
        child: [
          {
            name: '便携/无线音箱',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '音箱/音响',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'MP3/MP4',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '耳机/耳麦',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '麦克风',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '专业音频',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '数码配件',
        child: [
          {
            name: '存储卡',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '三脚架/云台',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '数码支架',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '读卡器',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '滤镜',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '相机清洁/贴膜',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '相机包',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '闪光灯/手柄',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '电池/充电器',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '智能设备',
        child: [
          {
            name: '智能手环',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '智能手表',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '智能家居',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '智能机器人',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '体感车',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '无人机',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '其他配件',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'VR眼镜',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '智能配饰',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '电子教育',
        child: [
          {
            name: '学生平板',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '电纸书',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '录音笔',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '早教益智',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '点读机/笔',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '复读机',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
    ],
  },
  {
    name: '电脑办公',
    child: [
      {
        name: '热卖分类',
        child: [
          {
            name: '轻薄本',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t11071/195/2462134264/9117/cd0688bf/5a17ba79N18b9f3d4.png',
          },
          {
            name: '游戏本',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t11155/36/2330310765/10690/eb6754c3/5a17ba96N49561fea.png',
          },
          {
            name: '机械键盘',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t12304/245/965858782/6481/37cb5a9b/5a17ba5aN0406a1b5.jpg',
          },
          {
            name: '组装电脑',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t14101/325/978287093/8836/e142aa53/5a17ba73N07b12f0c.jpg',
          },
          {
            name: '移动硬盘',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t13228/333/989759736/4764/2a312c2e/5a17ba7fN0740c051.jpg',
          },
          {
            name: '显卡',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t12679/262/982342141/7023/d05a11e5/5a17ba57Nf179b4e4.jpg',
          },
          {
            name: '游戏台式机',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t12865/295/960489437/5723/4f38f11/5a17ba8bN911b7264.jpg',
          },
          {
            name: '家用打印机',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t12526/166/988611883/3419/3c7507ac/5a17ba5dN8f6ffa5e.jpg',
          },
          {
            name: '吃鸡装备',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t1/98581/29/13884/5125/5e5f1d66E8357cf2e/7232090502f87411.jpg',
          },
          {
            name: '曲屏显示器',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t13798/322/988648789/3644/1adc5615/5a17ba6dNafc95373.jpg',
          },
          {
            name: '投影机',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t13492/261/938265048/5840/b5e4bdb6/5a17ba61N61a74bc3.jpg',
          },
          {
            name: '日本文具',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t1/97514/11/13831/2863/5e5f1d77Ee5ab96e7/70294c751c6ce6f5.jpg',
          },
        ],
      },
      {
        name: '电脑整机',
        child: [
          {
            name: '笔记本',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t13852/288/980080912/2623/73d2a1a5/5a17b976N7ab8a3a6.jpg',
          },
          {
            name: '平板电脑',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t13252/193/948884668/3832/2cd704d4/5a17b918N0785e503.jpg',
          },
          {
            name: '一体机',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t14020/291/987624955/9068/5b27e263/5a17b978N2a93f7a9.jpg',
          },
          {
            name: '台式机',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t13747/317/982291236/6659/4945536d/5a17b996Nba3bed32.jpg',
          },
          {
            name: '笔记本配件',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t12088/219/967281794/2015/c05e448c/5a17b933N825c264a.jpg',
          },
          {
            name: '游戏台式机',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t12901/167/947504038/6315/4c239386/5a17b948Nf6918c9e.jpg',
          },
          {
            name: '商用台式机',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t13138/231/1001350583/7486/6d001868/5a17b94eN820f6506.jpg',
          },
          {
            name: '游戏本',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t12418/24/1008907015/2867/86eb55a/5a17b971N14214c4f.jpg',
          },
          {
            name: '平板电脑配件',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t13504/44/947654756/2419/ca768bc2/5a17b8dcNd0418625.jpg',
          },
          {
            name: '轻薄本',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '二合一平板',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '服务器/工作站',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '外设产品',
        child: [
          {
            name: '鼠标',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'U盘',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '键盘',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '鼠标垫',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '移动硬盘',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '手写板',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '硬盘盒',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '线缆',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '手机U盘',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '电脑清洁',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '插座',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '键鼠套装',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'UPS电源',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '电脑工具',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '机械键盘',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '摄像头',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '网络仪表仪器',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '网络存储',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '电脑配件',
        child: [
          {
            name: '显示器',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '硬盘',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '电源',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '内存',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'CPU',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '机箱',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '散热器',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '刻录机/光驱',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '组装电脑',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '曲面屏显示器',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '声卡/扩展卡',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '装机配件',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '网络产品',
        child: [
          {
            name: '路由器',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '网卡',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '网络配件',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '4G/3G上网',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '网络盒子',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '交换机',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '办公设备',
        child: [
          {
            name: '安防监控',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '多功能一体机',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '打印机',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '投影机',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '验钞/点钞机',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '投影配件',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '家用打印机',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '传真设备',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '扫描设备',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '装订/封装机',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '考勤机',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '会议音频视频',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '保险柜',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '碎纸机',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '收银机',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '白板',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '办公家具',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '复合机',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '文具耗材',
        child: [
          {
            name: '纸类',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '笔类',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '墨盒',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '计算器',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '办公文具',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '学生文具',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '硒鼓/墨粉',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '色带',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '文件管理',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '财会用品',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '激光笔',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '画具画材',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '游戏设备',
        child: [
          {
            name: '游戏耳机',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '游戏机',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '手柄/方向盘',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
    ],
  },
  {
    name: '图书音像',
    child: [
      {
        name: '热门推荐',
        child: [
          {
            name: '童书',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t18520/109/1790543750/23751/a98be11f/5ad82a1cN400c11d1.jpg',
          },
          {
            name: '教材教辅',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t17050/274/1799803385/10631/fc5794e2/5ad82735N3559f4ac.jpg',
          },
          {
            name: '人文社科',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t17599/245/1834577586/17629/f5050ae7/5ad82741N33a7d3c9.jpg',
          },
          {
            name: '经管励志',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t19156/54/1796620662/6386/7b267025/5ad8274dN9616a1c7.jpg',
          },
          {
            name: '艺术',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t18004/321/1801504285/36146/4c486eed/5ad82758N53cf0dc6.png',
          },
          {
            name: 'IT科技',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t19729/274/1819711003/14952/ecbcd8c4/5ad82777N312c5766.jpg',
          },
          {
            name: '文娱',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t17263/67/1779166351/8803/42ae82bd/5ad82b11N544c3fda.png',
          },
          {
            name: '教育培训',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t18814/91/1828016712/4496/fe8321bc/5ad82787N36425838.jpg',
          },
          {
            name: '生活',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t18475/160/1799744111/21440/1de31eaf/5ad82791N7a3b7d91.png',
          },
          {
            name: '电子书',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t19168/163/1800009649/16054/2697e728/5ad82a4eN9f0322b6.jpg',
          },
          {
            name: '知识服务',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t16939/51/1805276233/15923/f1237454/5ad82b18N36adb882.jpg',
          },
        ],
      },
      {
        name: '童书',
        child: [
          {
            name: '0-2岁',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t17656/60/1806404561/7254/52e850c7/5ad81994Na411798e.jpg',
          },
          {
            name: '3-6岁',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t18949/305/1776302956/16671/dc7a6211/5ad81999N933ff377.jpg',
          },
          {
            name: '7-10岁',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t18547/178/1755651020/27044/5f74df2d/5ad819a5N98df3806.jpg',
          },
          {
            name: '11-14岁',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t19720/323/1810295165/8573/ebfa938c/5ad819a9Nb70be9a7.jpg',
          },
          {
            name: '绘本',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t21865/190/284343823/8953/af60c012/5b07e069N35ada2c1.jpg',
          },
          {
            name: '儿童文学',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t20092/37/735387681/13212/966e71d/5b07e077N2a0d01ea.jpg',
          },
        ],
      },
    ],
  },
  {
    name: '母婴童装',
    child: [
      {
        name: '奶粉',
        child: [
          {
            name: '1段',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t21226/279/206350103/11804/74908f42/5b0375dbN03ec343e.jpg',
          },
          {
            name: '2段',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t21541/284/187586366/22907/27d664bf/5b0375f4N546339ae.jpg',
          },
          {
            name: '3段',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t17059/241/2662614433/13040/a9b46dc9/5b038a53Nf228e609.jpg',
          },
          {
            name: '4段',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t20413/80/190837970/8798/d5ade6b3/5b038a60N61005744.jpg',
          },
          {
            name: '孕妈奶粉',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t20686/341/184964559/13766/540c79c9/5b038a83N5fbdbdf6.jpg',
          },
          {
            name: '特殊配方奶粉',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t22156/267/207479224/16150/96d48564/5b038a8cN51779eea.jpg',
          },
          {
            name: '有机奶粉',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t17830/51/2655245198/10232/558ff4d8/5b038a96N251b24bd.jpg',
          },
        ],
      },
      {
        name: '营养辅食',
        child: [
          {
            name: '益生菌/初乳',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t22360/335/182021789/15438/e910a8ee/5b02b42fN5d0be005.jpg',
          },
          {
            name: '果泥/果汁',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t19495/168/2617418122/31372/26d9e333/5b02b44dN73aaa997.jpg',
          },
          {
            name: '米粉/菜粉',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t19354/93/2653761680/31569/33d6e811/5b02b411N63ca034c.jpg',
          },
          {
            name: 'DHA',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t19168/82/2607869065/39038/711736a8/5b02b41bNc2aa949e.jpg',
          },
          {
            name: '宝宝零食',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t22024/343/208146401/44650/5553cfc/5b02b438N1ade9b43.jpg',
          },
          {
            name: '钙铁锌/维生素',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t17242/156/2589793690/14757/deaad75f/5b02b425N62893755.jpg',
          },
          {
            name: '清火/开胃',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t19822/214/613447924/32464/a483a7dc/5b02b43fNe60bf8a0.jpg',
          },
          {
            name: '面条/粥',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t17767/249/2621370671/17486/747a6596/5b02b445Ndcc04ae6.jpg',
          },
        ],
      },
      {
        name: '尿裤湿巾',
        child: [
          {
            name: 'NB',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t18166/91/2637987892/6971/cfe8717b/5b0268f4Ne3122c6a.jpg',
          },
          {
            name: 'S',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t18841/181/2605198040/7236/358c7184/5b0268faN6c5b87a7.jpg',
          },
          {
            name: 'L',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t21262/73/193384343/6385/e336742f/5b026904Nb30a1960.jpg',
          },
          {
            name: 'M',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'XL',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'XXL',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '拉拉裤',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '成人尿裤',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '婴儿湿巾',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '童装',
        child: [
          {
            name: '套装',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '裤子',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '连体衣/爬服',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '内衣裤',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '婴童衣橱',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '外套/大衣',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '卫衣',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '毛衣/针织衫',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '棉服',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '户外/运动服',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '亲子装',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '家居服',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '儿童配饰',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '袜子',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '婴儿礼盒',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '喂养用品',
        child: [
          {
            name: '奶瓶奶嘴',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '吸奶器',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '暖奶消毒',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '辅食料理机',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '食物存储',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '儿童餐具',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '水壶/水杯',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '牙胶安抚',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '围兜/防溅衣',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '洗护用品',
        child: [
          {
            name: '日常护理',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '驱蚊防晒',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '洗发沐浴',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '洗澡用具',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '宝宝护肤',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '洗衣液/皂',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '婴儿口腔清洁',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '奶瓶清洗',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '理发器',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '坐便器',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '寝具服饰',
        child: [
          {
            name: '睡袋/抱被',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '凉席',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '婴童床品',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '隔尿垫巾',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '尿布',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '浴巾/浴衣',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '毛巾/口水巾',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '吸汗巾',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '安全防护',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '爬行垫',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '婴儿鞋帽袜',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '妈妈专区',
        child: [
          {
            name: '妈咪包/背婴带',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '产后塑身',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '文胸/内裤',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '防辐射服',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '孕妈装',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '孕期营养',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '孕妇护肤',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '待产护理',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '月子装',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '童车童床',
        child: [
          {
            name: '婴儿推车',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '餐椅摇椅',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '婴儿床',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '学步车',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '三轮车',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '自行车',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '电动车',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '扭扭车',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '滑板车',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '婴儿床垫',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '安全座椅',
        child: [
          {
            name: '安全座椅',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '提篮式',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '增高垫',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '童鞋',
        child: [
          {
            name: '运动鞋',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '帆布鞋',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '学步鞋',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '棉鞋',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '皮鞋',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '靴子',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '热卖品牌',
        child: [
          {
            name: '好奇',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '贝因美',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '帮宝适',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '安尔乐',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '爸爸的选择',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'NUK',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '好孩子',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '合生元',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '亨氏',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '惠氏',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '美素佳儿',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '美赞臣',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '童年时光',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '雅培',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '大王',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '爹地宝贝',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '妈咪宝贝',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '雀氏',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '保宁',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '贝亲',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '飞利浦新安怡',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '康贝',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '美德乐',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '日康',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '小白熊',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '爱贝丽',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '全棉时代',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '贝瑞佳',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '小龙哈彼',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '英吉利那',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
    ],
  },
  {
    name: '女鞋',
    child: [
      {
        name: '热卖分类',
        child: [
          {
            name: '抢尖货',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t13804/331/788425953/5641/fb956619/5a13fd8fN4e9177a5.jpg',
          },
          {
            name: '商场同款',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t11452/357/2278950392/3301/19d9fa5f/5a13fd7dN8a2c5275.jpg',
          },
          {
            name: '原创设计',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t12493/39/806521510/4540/b9b0373a/5a13fd69N310fe3c7.jpg',
          },
        ],
      },
      {
        name: '时尚女鞋',
        child: [
          {
            name: '休闲鞋',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t16897/285/796666413/5829/5a7ad788/5aa640b5N0342a5e7.jpg',
          },
          {
            name: '中跟单鞋',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t16267/61/2407074997/4244/a7fa02d7/5aa640f8Nc9384a63.jpg',
          },
          {
            name: '大码女鞋',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t18526/341/795029040/5652/935ccfa0/5aa6410bNec7253f4.jpg',
          },
          {
            name: '深口单鞋',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t14716/104/2504192004/2345/e638c75d/5aa640c9Naf286d88.jpg',
          },
          {
            name: '粗跟单鞋',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t16759/94/754872702/7353/e3c21cea/5aa640fdN8d5d8afd.jpg',
          },
          {
            name: '妈妈鞋',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t18433/144/791018408/2501/f2e0249f/5aa640ebN0cf82dd3.jpg',
          },
          {
            name: '婚鞋',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t18196/347/803625750/3388/fd1fdbf1/5aa640deNb3d97795.jpg',
          },
          {
            name: '通勤OL',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t14173/278/783151079/2583/827febf/5a13f446N1df58a24.jpg',
          },
          {
            name: '凉鞋',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t14266/155/2486125485/7190/2fce9b89/5aa64105N88a4830d.jpg',
          },
          {
            name: '高跟单鞋',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t14149/102/2685329591/4506/b16d41d0/5aa640f0N2a7e6946.jpg',
          },
          {
            name: '尖头单鞋',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t18346/74/734765505/6914/463ebe9a/5aa640cfN6eb190f3.jpg',
          },
          {
            name: '单鞋',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t14644/102/2517973093/2467/1f9ea15d/5aa640c2N7d425d4b.jpg',
          },
          {
            name: '平底单鞋',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t16498/252/2120570989/4156/a43a5472/5aa640d9N0a8135c7.jpg',
          },
          {
            name: '帆布鞋',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t14479/130/2495570153/2643/aeaf37c6/5aa640e5N831531ee.jpg',
          },
          {
            name: '小白鞋',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t16354/358/2332758097/3550/bbe52822/5aa64197N1cf453d4.jpg',
          },
          {
            name: '玛丽珍',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t17644/6/766293315/1808/2dd21721/5aa64424N4c9df21f.jpg',
          },
          {
            name: '豆豆鞋',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t14608/17/2530311024/6271/7a438296/5aa64178N971579bf.jpg',
          },
          {
            name: '短靴',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t16195/265/2416097206/2452/708b727c/5aa640bcN5332c272.jpg',
          },
          {
            name: '布鞋/绣花鞋',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '拖鞋/人字拖',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '内增高',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '雨鞋/雨靴',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '鞋配件',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '袜靴',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '国货名品',
        child: [
          {
            name: '骆驼',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '大东',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '红蜻蜓',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '意尔康',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '人本',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '富贵鸟',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '奥康',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '卓诗尼',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '快乐玛丽',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '蛋卷鞋',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '哥弟',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '康奈',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '专柜同款',
        child: [
          {
            name: '妙丽',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '哈森',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '百丽',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '星期六',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '热风',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '莱尔斯丹',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '百丽官方',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '天美意',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '他她',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '西域',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '达芙妮',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '百思图',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '真美诗',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '千百度',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '卡迪娜',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'FED',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'CNE',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '国际大牌',
        child: [
          {
            name: 'ECCO',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '斯凯奇',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '思加图',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '迪芙斯',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'clarks',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'NineWest',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'UGG',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'Keds',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '汤普',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'PIKOLINOS',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '沙驰',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'bata',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'dg',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '沙驰运动',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'melissa',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'havaianas',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'grendha',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '自营女鞋',
        child: [
          {
            name: '百丽',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '卓诗尼',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '飞跃',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '奥康',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '骆驼',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'ZGR',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '天美意',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '百思图',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '网红潮流',
        child: [
          {
            name: '香阁儿',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '柯玛妮克',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'AUMU',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '茵曼',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '色非',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '简帛',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '浓情漫宇',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'reemoor',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'cozysteps',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '艾斯臣',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'yellowearth',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '原创设计',
        child: [
          {
            name: 'TUKshoes',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '爱米高',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'JeffreyCampbell',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '法蒂娜',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'CultureMatters',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '青婉田',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '本那',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '玛菲玛图',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '欧琦蔓',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
    ],
  },
  {
    name: '女装',
    child: [
      {
        name: '热卖选购',
        child: [
          {
            name: '当季热卖',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t1/115539/34/8480/3602/5ecf2a6aE63758973/f77877220c415ca0.jpg',
          },
          {
            name: '连衣裙',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t16891/72/715748110/3080/182127b5/5a9fb67aN37c4848f.jpg',
          },
          {
            name: 'T恤',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t19471/233/655303672/4619/b23fea4b/5a9fb684Ne1ec9fe8.jpg',
          },
          {
            name: '衬衫',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t18130/206/667191027/4173/bf767ab4/5a9fb67fN3834e3c9.jpg',
          },
          {
            name: '牛仔裤',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t18343/191/641645855/3307/d3a4e7b4/5a9fb694N13609fcd.jpg',
          },
          {
            name: '自营女装',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t1/116921/2/8410/5100/5ecf2c9aE48dd94de/1e54e5d5936ec59c.jpg',
          },
        ],
      },
      {
        name: '上装',
        child: [
          {
            name: '字母T恤',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t19732/6/697088077/2894/2788a72/5a9fbfd2Ncc01c1b5.jpg',
          },
          {
            name: '白衬衫',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t14266/108/2448202334/2099/c038057b/5a9fbfc7N33c2ad32.jpg',
          },
          {
            name: '百搭衬衫',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t16126/212/2272437372/3302/c9af3547/5a9fbfa0N591929da.jpg',
          },
          {
            name: '雪纺衫',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t15157/330/2467589403/6327/a53fc93/5a9fc00dN205f4cc7.jpg',
          },
          {
            name: '打底衫',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t13357/141/724977729/3459/e3a3c8e1/5a127ee9Nbc443a5f.jpg',
          },
          {
            name: '长袖T恤',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t16750/238/698160610/5156/5b1f25b/5a9fbfccN574cba12.jpg',
          },
          {
            name: '短外套',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t16960/330/672781171/5066/76e6f8c9/5a9fbfdcNc891be87.jpg',
          },
          {
            name: '小西装',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t19156/326/678660620/3005/436c3bc0/5a9fc007N3ef48a88.jpg',
          },
          {
            name: '长袖衬衫',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t19723/352/684172430/6158/801dfc66/5a9fbfc2N85844dd0.jpg',
          },
          {
            name: '风衣',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t15313/145/2476673176/2856/879136d7/5a9fc012N86f3fb22.jpg',
          },
          {
            name: '卫衣',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t11953/286/2195921828/5728/75b86d5b/5a127fbaN2780918c.jpg',
          },
          {
            name: '宽松卫衣',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t15667/299/2238226291/4404/19e817ba/5a9fbff4N02a4be7b.jpg',
          },
          {
            name: '棒球衫',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t17245/317/695141729/3579/69cca106/5a9fbfe6N60e7552b.jpg',
          },
          {
            name: '针织衫',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t19132/3/704890448/3460/dd1b10d7/5a9fbff9Nadff76ec.jpg',
          },
          {
            name: '连帽卫衣',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t18223/92/697465593/4089/d86e35c9/5a9fbfefN8a66a14c.jpg',
          },
          {
            name: '半高领针织',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '下装',
        child: [
          {
            name: '铅笔裤',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '小脚裤',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '休闲裤',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '阔腿裤',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '牛仔裤',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '哈伦裤',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '破洞牛仔裤',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '背带裤',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '喇叭裤',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '高腰裤',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '运动裤',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '直筒牛仔',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '裙装',
        child: [
          {
            name: '半身裙',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '套装裙',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '长袖连衣裙',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '性感连衣裙',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '蕾丝连衣裙',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '连衣裙',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '原创连衣裙',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '针织连衣裙',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '背带裙',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '特色类目',
        child: [
          {
            name: '旗袍/唐装',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '大码女装',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '妈妈装',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '礼服',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '设计师',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '婚纱',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '知名品牌',
        child: [
          {
            name: '斐乐',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '艾莱依',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '茵曼',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '熙世界',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '伊莲娜',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '三彩',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '歌莉娅',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '烟花烫',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '咔琦娜',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '欧丝璐',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '憨厚皇后',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '璞衣',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '洛诗琳',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '颜域',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '森宿',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '季候风',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'ONEBUYE',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '鸭鸭',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '雪莲',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'cocobella',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '粉红大布娃娃',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '坦博尔',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '皮皮狗',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '商场大牌',
        child: [
          {
            name: 'MO&Co.',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '哥弟',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'UR',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '艾格',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '百图',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'PORTS',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
    ],
  },
  {
    name: '男鞋',
    child: [
      {
        name: '热卖分类',
        child: [
          {
            name: '休闲鞋',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t12970/248/784792784/3062/9cc4be84/5a13957cN60262247.jpg',
          },
          {
            name: '皮鞋',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t11089/341/2234800375/3425/8950afe8/5a139577N054caadb.jpg',
          },
          {
            name: '男靴',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t13225/243/786727983/5634/d19769f6/5a139554N4c666839.jpg',
          },
          {
            name: '帆布鞋',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t11992/144/2244194535/2627/3de251a9/5a139564Naee94e4a.jpg',
          },
          {
            name: '板鞋',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t13318/275/759603762/2622/2e47bbbf/5a139565N882a63c6.jpg',
          },
          {
            name: '自营鞋靴',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t12985/234/771522231/6499/d3fc17ef/5a13955fN0af349c3.jpg',
          },
          {
            name: '新品推荐',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t18736/325/1285877732/4829/519f1c1c/5ac479f5Ne0b09e66.jpg',
          },
        ],
      },
      {
        name: '流行男鞋',
        child: [
          {
            name: '休闲鞋',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t13807/314/786063079/2610/c0e7de7b/5a139490Nc7fa0e4a.jpg',
          },
          {
            name: '休闲户外鞋',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t12889/167/800455171/2803/81e2a0ef/5a139431Nb7ff4008.jpg',
          },
          {
            name: '凉鞋',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t11824/310/2093755858/3582/469cedf4/5a139411N2cd65a08.jpg',
          },
          {
            name: '功能鞋',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t13780/219/751655881/2924/ade4fd33/5a139431N4e649769.jpg',
          },
          {
            name: '豆豆鞋',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t13561/339/767385863/4182/707daf17/5a13945aN18bb6107.jpg',
          },
          {
            name: '商务休闲鞋',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t13138/355/835254734/2223/adb0cd95/5a139489N23c871c6.jpg',
          },
          {
            name: '传统布鞋',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t11803/345/2212661587/2218/85b38b81/5a139422N611a859c.jpg',
          },
          {
            name: '板鞋',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t11608/19/2161730920/5152/2fca75c0/5a13945cN82a4c505.jpg',
          },
          {
            name: '正装鞋',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t13552/146/765573445/2431/4311417d/5a13947dN5d024b9f.jpg',
          },
          {
            name: '增高鞋',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t11524/266/2251412452/3733/5935ecbd/5a139440N023ac2b2.jpg',
          },
          {
            name: '拖鞋/人字拖',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t13234/118/798001202/2581/6e6cc64d/5a139429N8c5c158d.jpg',
          },
          {
            name: '男靴',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t13810/253/776987983/5634/d19769f6/5a13946cNa011ca58.jpg',
          },
          {
            name: '乐福鞋',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '帆布鞋',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '工装鞋',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '鞋配件',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '雨鞋/雨靴',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '定制鞋',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '专柜名品',
        child: [
          {
            name: '回力',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '红蜻蜓',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '骆驼',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '奥康',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '意尔康',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '康奈',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '百丽',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '富贵鸟',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '森达',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '零度',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '热风',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '日泰',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '国际大牌',
        child: [
          {
            name: '沙驰',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'CAT',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'Skechers',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'Palladium',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'ECCO',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'Dickies',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'HushPuppies',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'Clarks',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'GEOX',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
    ],
  },
  {
    name: '男装',
    child: [
      {
        name: '热卖选购',
        child: [
          {
            name: '夹克',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t17449/23/1286271766/3527/870ce296/5ac4780cN6087feb5.jpg',
          },
          {
            name: 'T恤',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t19312/140/1294064569/4871/1c61d372/5ac47812N52823c3e.jpg',
          },
          {
            name: '针织衫',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t19783/251/1331277260/4287/bb458049/5ac4781bN48dc86e1.jpg',
          },
          {
            name: '衬衫',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t18397/74/1297264628/2293/fcca865c/5ac47821N48c68336.jpg',
          },
          {
            name: '卫衣',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t18886/239/1308846966/4452/3baec65f/5ac4782aN695a7262.jpg',
          },
          {
            name: '风衣',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t17890/31/1269777779/2792/917e13d0/5ac47830N63e76af2.jpg',
          },
          {
            name: '牛仔裤',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t19222/87/1339548468/5738/68f3d8aa/5ac47841Nff658599.jpg',
          },
          {
            name: '休闲裤',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t17758/181/1301850814/2848/ad32e7c9/5ac47845N7374a31d.jpg',
          },
          {
            name: '自营男装',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t12229/123/574341075/8851/ee1f0b1c/5a0ebc2fNd418b77e.jpg',
          },
        ],
      },
      {
        name: '男士内搭',
        child: [
          {
            name: '新品T恤',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t17641/277/1305218449/8776/e5182bbe/5ac47ffaN8a7b2e14.png',
          },
          {
            name: '短袖T恤',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t18436/155/1324938407/6646/1a66cfa0/5ac47fffNe7a93aca.jpg',
          },
          {
            name: '新品衬衫',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t19030/113/1250466624/3376/b981fe07/5ac48007Nb30b2118.jpg',
          },
          {
            name: '短袖衬衫',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t16786/289/1311106267/4182/c345e2ef/5ac4800eN78bdf977.jpg',
          },
          {
            name: '新品卫衣',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t17824/6/1287333457/6576/aeae36f6/5ac48017N9347122f.jpg',
          },
          {
            name: '连帽卫衣',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t16987/129/1278260758/4740/58f780b2/5ac4801bN5bd994fa.jpg',
          },
          {
            name: '潮牌卫衣',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t19366/130/1283276181/8302/a9d5eb82/5ac48021Ne7b57893.jpg',
          },
          {
            name: '长袖T恤',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t18988/341/1273630612/8382/4109693d/5ac47fa6Nd128653e.jpg',
          },
          {
            name: '长袖衬衫',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t18310/26/1273827800/2024/a6774615/5ac47fdaN6069d640.jpg',
          },
          {
            name: '免烫衬衫',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t19750/102/1313789327/2597/1536d07c/5ac47fdeNbebe151e.jpg',
          },
          {
            name: '针织衫',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t19270/191/1278480597/3933/bc516fa7/5ac47fe7N2718dc4b.jpg',
          },
          {
            name: 'POLO衫',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t17149/171/1334340006/3690/4e8b276a/5ac47ff1N20a0a421.jpg',
          },
        ],
      },
      {
        name: '男士外套',
        child: [
          {
            name: '夹克',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '风衣',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '单西',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '牛仔外套',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '西服套装',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '毛呢大衣',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '真皮外套',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '仿皮皮衣',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '棒球服',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '男士裤装',
        child: [
          {
            name: '休闲裤',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '九分裤',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '七分裤',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '束脚裤',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '哈伦裤',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '短裤',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '小脚裤',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '运动裤',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '西裤',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '工装裤',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '阔腿裤',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '皮裤',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '牛仔裤',
        child: [
          {
            name: '直筒牛仔',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '修身牛仔',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '黑色牛仔',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '弹力牛仔',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '小脚牛仔',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '破洞牛仔',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '磨破牛仔',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '白色牛仔',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '特色男装',
        child: [
          {
            name: '工装制服',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '潮牌',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '大码男装',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '机车夹克',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '中老年男装',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '印花卫衣',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '唐装/中山装',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '设计师',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '棒球衫',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '热卖品牌',
        child: [
          {
            name: '七匹狼',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'A21',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '卡宾',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '劲霸',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'AK',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'LACOSTE',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: "Levi's",
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'HAZZYS',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '威可多',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
    ],
  },
  {
    name: '京东超市',
    child: [
      {
        name: '个护清洁',
        child: [
          {
            name: '纸品湿巾',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t13684/103/181232450/2817/1bd36d3d/5a057f17Nc76b625d.jpg',
          },
          {
            name: '衣物清洁',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t12136/32/190594635/3030/39a660be/5a057ef3N4b20576c.jpg',
          },
          {
            name: '洗发护发',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t12046/51/196865136/2542/dd0cb394/5a057eeaNe24e73fb.jpg',
          },
          {
            name: '家庭清洁',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t11257/264/1649145508/5426/5f7c71bb/5a057ee0N0dc59d02.jpg',
          },
          {
            name: '口腔护理',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t11596/91/1612970162/2450/608966a4/5a057efdN543407fa.jpg',
          },
          {
            name: '一次性用品',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t7282/295/4716826036/4665/da4c4dd2/5a057ed7N507ef94b.jpg',
          },
          {
            name: '清洁工具',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t13519/304/184655750/2450/608966a4/5a057eaaNf62e9b4f.jpg',
          },
          {
            name: '电动牙刷',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t12019/118/199015154/1066/8a0a6d18/5a057eb7N89a5a55a.jpg',
          },
          {
            name: '女性护理',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t13576/83/193136329/1665/b2075f8d/5a057f0bNb48aef37.jpg',
          },
          {
            name: '驱虫用品',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t12973/327/191750501/2504/e8a0bab4/5a057ecdN8f5ef29b.jpg',
          },
          {
            name: '皮具护理',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t7501/107/4530131676/3235/ada990b/5a057ebfN8eee8a15.jpg',
          },
        ],
      },
      {
        name: '休闲零食',
        child: [
          {
            name: '休闲零食',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t11431/77/1274462175/4200/a52ec5cc/59ffd6e2N287c043d.jpg',
          },
          {
            name: '坚果炒货',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t11461/336/1331406760/15773/60c49ab7/59ffd6d0Ncb29412d.png',
          },
          {
            name: '糖巧',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t11890/195/1248876103/12648/403ce46a/59ffd6b9Nc88344b5.png',
          },
          {
            name: '饼干蛋糕',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t11500/115/1293305736/3233/7bb2056a/59ffd6ccNb9875d1d.jpg',
          },
          {
            name: '肉干肉脯',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t11749/28/952474396/2583/64b85652/59fc31b6N4feb7d84.jpg',
          },
          {
            name: '蜜饯果干',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t11275/128/1281544342/3341/64f437e/59ffd6fbN047718c7.jpg',
          },
          {
            name: '无糖食品',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t7570/153/3996735769/2714/a58d5793/59ffd6ffN95ab2f9b.jpg',
          },
        ],
      },
      {
        name: '粮油调味',
        child: [
          {
            name: '大米',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '食用油',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '方便速食',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '调味品',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '南北干货',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '面粉',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '杂粮',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '烘焙原料',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '有机食品',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '水饮茗茶',
        child: [
          {
            name: '牛奶制品',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '茗茶',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '饮用水',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '成人奶粉',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '饮料',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '咖啡奶茶',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '冲饮谷物',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '蜂蜜/柚子茶',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '家居用品',
        child: [
          {
            name: '厨具',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '收纳用品',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '女士内裤',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '男士内裤',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '被子被芯',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '台灯',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '床品套件',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '毛巾浴巾',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '男袜',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '女袜',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '雨伞雨具',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '睡衣家服',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '浴室用品',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '宠物园艺',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '文胸',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '京东生鲜',
        child: [
          {
            name: '新鲜水果',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '大闸蟹',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '精选肉类',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '新鲜蔬菜',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '蛋类',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '饮品甜品',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '海鲜水产',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '冷冻食品',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '乳品冷饮',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '中外名酒',
        child: [
          {
            name: '白酒',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '葡萄酒',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '洋酒',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '啤酒',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '黄酒/养生酒',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '陈年老酒',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '小家电',
        child: [
          {
            name: '剃须刀',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '电吹风',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '厨房小电',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '生活电器',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '母婴玩具',
        child: [
          {
            name: '尿裤湿巾',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '奶粉',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '妈妈专区',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '营养辅食',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '洗护用具',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '童装',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '童车童床',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '玩具',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '乐器',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '营养保健',
        child: [
          {
            name: '营养健康',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '计生用品',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '滋补养生',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '营养成分',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '美妆护肤',
        child: [
          {
            name: '沐浴用品',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '女士护肤',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '男士护肤',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '面膜',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '彩妆',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '香水',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '进口食品',
        child: [
          {
            name: '饼干蛋糕',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '冲调饮品',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '休闲零食',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '糖果巧克力',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '粮油调味',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
    ],
  },
  {
    name: '汽车生活',
    child: [
      {
        name: '热卖推荐',
        child: [
          {
            name: '机油',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t12934/187/1360887703/3624/2773362c/5a1fb8f6N7d4de465.jpg',
          },
          {
            name: '汽车坐垫',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t13861/165/1416050485/4023/7a99270b/5a1fb902N806b102c.jpg',
          },
          {
            name: '洗车水枪',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t12775/362/1793763591/8646/9054789/5a28b10cN62861b9b.jpg',
          },
          {
            name: '行车记录仪',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t12901/240/1394851486/8943/454985f7/5a1fb8fcNb81047cc.jpg',
          },
          {
            name: '轮胎',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t12508/203/1731926315/5258/efc05e60/5a28b101Ne8ebee02.jpg',
          },
          {
            name: '应急救援',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t15556/93/149991245/6163/3387b1e9/5a28b106N59344f7a.png',
          },
        ],
      },
      {
        name: '乘用车',
        child: [
          {
            name: '全部车型',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t1/94052/26/18882/8021/5e966cb2E7c1e4362/d0c7c9448a685905.png',
          },
          {
            name: '二手车',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t1/96639/11/18765/10438/5e966ce9E27a1c056/4b72cfdbfb44651a.png',
          },
          {
            name: '选车攻略',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t1/100084/6/18603/6955/5e966d09Ecf19bd09/e5a4be6abf32c726.png',
          },
          {
            name: '热销轿车',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t1/97114/26/18674/12326/5e966d21E1e9c5592/1ed7cfbf11ead598.png',
          },
          {
            name: '热门SUV',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t1/113567/22/1272/13352/5e966d2fEe2452b62/5082cad35c4d5a08.png',
          },
          {
            name: '精选MPV',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t1/105027/24/18794/13475/5e966d44E4b44c097/d94401a5b353783d.png',
          },
          {
            name: '豪华车',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t1/117151/20/1227/12606/5e966d51Eef09370c/0d158b551cb3082f.png',
          },
          {
            name: '新能源',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t1/107285/10/12401/12715/5e966d61Ea8135a01/f6038997c3649d53.png',
          },
          {
            name: '试驾有礼',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t1/111461/37/1287/13130/5e966d73E459e5141/eaf1d076c5c769cc.png',
          },
          {
            name: '12万以下',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t1/101246/3/18767/13809/5e966d83E917e056c/bfd8712cfaf1de76.png',
          },
          {
            name: '12-25万',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t1/86764/19/18697/14390/5e9670b0E16edd137/11df9c73cf4171d2.png',
          },
          {
            name: '25万以上',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t1/106063/26/18704/13467/5e966e3eE036b0383/48c5c0476d0cbd4b.png',
          },
          {
            name: '经济代步',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t1/101722/30/18693/13606/5e966daeEe466eb09/da7091ac76f622cd.png',
          },
          {
            name: '舒适家用',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t1/95609/29/18724/14414/5e966dbdE4d4f93c7/ebe31b9cc535e122.png',
          },
          {
            name: '轻奢小资',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t1/107135/26/12311/13191/5e966dc9Eab12bb04/517bd20b14b205d2.png',
          },
        ],
      },
      {
        name: '汽车装饰',
        child: [
          {
            name: '香水',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '功能小件',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '挂件',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '车贴',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '车钥匙扣',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '车衣',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '车身装饰件',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '头枕腰靠',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '脚垫',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '方向盘套',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '座垫座套',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '炭包/净化剂',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '扶手箱',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '雨眉',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '遮阳/雪挡',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '后备箱垫',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '行李架/箱',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '踏板',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '美容清洗',
        child: [
          {
            name: '毛巾掸子',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '车蜡',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '补漆笔',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '清洁剂',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '玻璃水',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '洗车水枪',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '洗车配件',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '洗车机',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '镀晶镀膜',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '底盘装甲',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '汽车贴膜',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '车载电器',
        child: [
          {
            name: '车载充电器',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '车载影音',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '车载吸尘器',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '行车记录仪',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '倒车雷达',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '车载电器配件',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '车载蓝牙',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '逆变器',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '导航仪',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '车载净化器',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '车载生活电器',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '车机导航',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '安全预警仪',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '应急电源',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '汽车音响',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '车载冰箱',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '对讲电台',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '智能驾驶',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '维修保养',
        child: [
          {
            name: '雨刷',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '添加剂',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '防冻液',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '滤清器',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '车灯',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '轮胎',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '蓄电池',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '刹车片/盘',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '火花塞',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '轮毂',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '维修配件',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '汽修工具',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '改装配件',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '正时皮带',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '汽车喇叭',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '机油',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '减震器',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '汽车玻璃',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '安全自驾',
        child: [
          {
            name: '充气泵',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '胎压监测',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '储物箱',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '应急救援',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '自驾野营',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '车载床',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '防盗设备',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '保温箱',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '灭火器',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '摩托车',
        child: [
          {
            name: '摩托车头盔',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '摩托车配件',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '摩托车',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '豪爵摩托',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '五羊本田摩托',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '摩托车装备',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '汽车服务',
        child: [
          {
            name: '保养维修',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '清洗美容',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '功能升级',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '改装服务',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'ETC',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
    ],
  },
  {
    name: '个护清洁',
    child: [
      {
        name: '畅销推荐',
        child: [
          {
            name: '个护馆',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t21343/109/200166835/32189/655b48ef/5b03c73fN69e0c2b7.jpg',
          },
          {
            name: '清洁馆',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t22015/174/193799214/56285/64f190df/5b03bf93Na049c54e.jpg',
          },
          {
            name: '进口清洁',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t20482/61/128269126/48485/836a6d71/5afd574eNb1ad35ae.jpg',
          },
          {
            name: '卫生棉条',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t18214/1/2613174758/15599/5ed2de47/5afd5747N2fc58c3e.jpg',
          },
          {
            name: '湿厕纸',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t20365/251/116787241/43845/fa0bc54d/5afd5740Na342fa77.jpg',
          },
          {
            name: '花露水',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t22123/187/137040009/6892/6b0cbf68/5afd572dN7ed9c341.jpg',
          },
          {
            name: '驱蚊用品',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t20293/233/118774843/46835/4e4eaf16/5afd5727N9f7271c7.jpg',
          },
          {
            name: '本色纸',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t17062/178/2600012755/33321/1ad5ca0b/5afd571fN18ed0cd5.jpg',
          },
          {
            name: '免洗洗手液',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t16840/96/2521969144/9603/65ca0871/5afd571aN43e80da5.jpg',
          },
        ],
      },
      {
        name: '明星品牌',
        child: [
          {
            name: '得宝',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t19159/296/2561042023/49706/b5b9a38c/5afd5700N355dfa7d.jpg',
          },
          {
            name: '施华蔻专业',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t19489/212/2660233176/26301/ba832bb4/5b03ca93Nb4f64094.jpg',
          },
          {
            name: '舒洁',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t19819/28/553421672/50589/7cfc13ea/5afd56f2Nf2b8ca84.jpg',
          },
          {
            name: '馥绿德雅',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t17248/264/2595778521/6813/3309b403/5afd56ecN8257b620.jpg',
          },
          {
            name: '3M',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t18997/159/2614761718/41736/d0533a04/5afd56e7N9961fe19.jpg',
          },
          {
            name: '吕',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t19420/348/2539781815/6961/35348d70/5afd56e1N98a273a3.jpg',
          },
          {
            name: '当妮',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t18196/253/2567807998/53005/61c50fea/5afd56dcNc16970a8.jpg',
          },
          {
            name: 'LG',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t21079/224/118757583/10390/664c2986/5afd56d5N4a00680d.jpg',
          },
          {
            name: '橘子工坊',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t21721/134/120751456/39440/5d9584de/5afd56cfNaabd3f8c.jpg',
          },
          {
            name: '花王',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t20101/223/562289297/12695/938bfb8/5afd56caNdb42ae94.jpg',
          },
          {
            name: '汉高',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t19918/356/561154349/62704/6ca0c356/5afd56b8N1bd6906e.jpg',
          },
          {
            name: '玛尔斯',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t19318/209/2602710979/6648/57bd4e7c/5afd56afN495321fb.jpg',
          },
        ],
      },
      {
        name: '纸品湿巾',
        child: [
          {
            name: '抽纸',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '卷纸',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '手帕纸',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '湿巾',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '厨房纸巾',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '女性护理',
        child: [
          {
            name: '进口卫生巾',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '卫生巾',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '卫生护垫',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '私处护理',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '衣物清洁',
        child: [
          {
            name: '洗衣液',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '洗衣粉',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '洗衣皂',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '柔顺剂',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '凝珠',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '除菌液',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '家庭清洁',
        child: [
          {
            name: '洗洁精',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '消毒液',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '油污净',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '洁厕剂',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '除湿干燥剂',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '地板清洁剂',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '洗发护发',
        child: [
          {
            name: '进口洗发水',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '洗发水',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '护发素',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '发膜/精油',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '洗护套装',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '旅行套装',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '发型设计',
        child: [
          {
            name: '进口染发',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '造型',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '染发',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '烫发',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '假发',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '美发工具',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '身体护理',
        child: [
          {
            name: '进口沐浴露',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '沐浴露',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '香皂',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '浴盐',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '护手霜',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '脱毛膏/工具',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '男士洗液',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '润肤',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '精油',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '手膜/足膜',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '美颈',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '美胸',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '身体护理套装',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '口腔护理',
        child: [
          {
            name: '进口牙膏',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '牙膏',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '牙刷',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '牙线/牙线棒',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '牙贴',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '牙粉',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '假牙清洁',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '漱口水',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '口喷',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '清洁工具',
        child: [
          {
            name: '拖把',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '垃圾袋',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '垃圾桶',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '扫把',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '抹布/百洁布',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '清洁刷具',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '一次性清洁用品',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '驱蚊驱虫',
        child: [
          {
            name: '杀蟑',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '驱鼠',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '灭蚁',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
    ],
  },
  {
    name: '美妆护肤',
    child: [
      {
        name: '当季主推',
        child: [
          {
            name: '防晒',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t1/99405/15/13851/8331/5e5f2520E633cbaac/4ff37f307da08084.jpg',
          },
          {
            name: '控油',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t19291/98/2577005836/12222/7107fb29/5afd3cc9N3add85ae.jpg',
          },
        ],
      },
      {
        name: '拔草推荐',
        child: [
          {
            name: '明星同款面膜',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t1/91206/20/13565/9379/5e5f262bE45790537/0373287c48fa2317.jpg',
          },
          {
            name: '显白口红',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t1/95022/3/13977/20829/5e5f2636E20222316/bbc6e2cf5b10669e.jpg',
          },
          {
            name: '小美盒',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t1/102819/1/13751/13266/5e5f2642Ea72e3802/828ddc1e738c1e07.jpg',
          },
        ],
      },
      {
        name: '潮流速递',
        child: [
          {
            name: '新品速递',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t1/85282/32/13974/33702/5e5f272cE97839976/3b5ccf856f171658.jpg',
          },
          {
            name: '精选礼盒',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t1/87029/15/13883/14372/5e5f273dEf7bfadc5/6a5aff8eeb02f29b.jpg',
          },
          {
            name: '潮流风向',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t1/107675/23/7620/26234/5e5f2767E01a2b3d2/3867634f9d2a4e88.jpg',
          },
        ],
      },
      {
        name: '香水',
        child: [
          {
            name: '女士香水',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t21634/217/114542271/9364/cbd83d13/5afd3c4bNc8d91bef.jpg',
          },
          {
            name: '男士香水',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t19390/1/2506793243/6166/d775fccd/5afd3c46N0888d2dc.jpg',
          },
          {
            name: '香水礼盒',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t22138/207/122377252/6070/3a373b3c/5afd3c42Ne4e18819.jpg',
          },
        ],
      },
      {
        name: '彩妆',
        child: [
          {
            name: '口红',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t17503/252/2512889132/27294/443c2fac/5afd3c33N4a033cfa.jpg',
          },
          {
            name: '气垫',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t21397/271/121131902/15428/ac689106/5afd3c2eNa0edf02a.jpg',
          },
          {
            name: '美甲',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t18340/344/2560965947/8933/468d229f/5afd3c2aN62a8f842.jpg',
          },
          {
            name: '隔离霜/妆前乳',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t21628/195/131387297/32697/2075f60f/5afd3c24N07e86c2e.jpg',
          },
          {
            name: '粉底液/膏',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t20692/251/127894832/28255/9c74e1cd/5afd3c1eN4eb4f341.jpg',
          },
          {
            name: '粉饼',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t17074/143/2515210475/30879/efdf7ef1/5afd3c19N9a112423.jpg',
          },
          {
            name: 'BB霜',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'CC霜',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '蜜粉/散粉',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '眉笔/眉粉',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '睫毛膏/增长液',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '眼线笔/眼线液',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '眼影',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '腮红/胭脂',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '遮瑕',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '修容/高光/阴影',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '唇彩/唇蜜/唇釉',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '唇笔/唇线笔',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '彩妆套装',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '男士彩妆',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '美妆工具',
        child: [
          {
            name: '双眼皮贴',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '化妆棉',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '化妆刷',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '粉扑/洗脸扑',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '假睫毛',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '睫毛夹',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '修眉刀',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '美妆工具套装',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '美甲工具',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '吸油纸',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '大牌推荐',
        child: [
          {
            name: 'SK-II',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '欧莱雅',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '碧欧泉',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '悦诗风吟',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '赫莲娜',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '玉兰油',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '百雀羚',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '妮维雅',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '自然堂',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '御泥坊',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '韩束',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '美迪惠尔',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '曼秀雷敦',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '美宝莲',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '相宜本草',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '兰芝',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '屈臣氏',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '佰草集',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '玛丽黛佳',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '丝芙兰',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '理肤泉',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '古驰',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '伊蒂之屋',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '博柏利',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '小美盒',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
    ],
  },
  {
    name: '计生情趣',
    child: [
      {
        name: '热卖产品',
        child: [
          {
            name: '避孕套',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t12967/337/1391919620/4957/c230e379/5a1fa4dfN13635e0b.jpg',
          },
          {
            name: '飞机杯',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t12577/223/1408990949/3151/b6d3f3c2/5a1fa4c9N1722220b.jpg',
          },
          {
            name: '润滑液',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t16204/157/99115190/1594/56b918ba/5a27dd39Nb291d7b4.jpg',
          },
          {
            name: '振动棒',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t7711/193/4061075422/3307/ca2e16f0/5a1fa4d3N73ba4e26.jpg',
          },
          {
            name: '情趣内衣',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t12031/188/1751903538/3665/5002167a/5a27dd3dN8c2a767c.jpg',
          },
          {
            name: '充气娃娃',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t13879/252/1741535676/2857/17a878cc/5a27dd43N3f71897a.jpg',
          },
        ],
      },
      {
        name: '男用器具',
        child: [
          {
            name: '狼牙套',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t15697/270/117263048/3424/d9ac82b4/5a27dd0fNe2bc9933.jpg',
          },
          {
            name: '延时环',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t12844/238/1716863106/4896/66ecb649/5a27dd15N3c319e6e.jpg',
          },
          {
            name: '名器',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t13363/207/1378105912/4445/5d6a8da8/5a1fa4a4Nbe0dd20a.jpg',
          },
          {
            name: '实体娃娃',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t13633/192/1750068170/3097/be361c7f/5a27dd19Na55905bf.jpg',
          },
          {
            name: '飞机杯',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t13069/337/1417186237/3300/4269f51f/5a1fa4aaN5c41ddec.jpg',
          },
          {
            name: '倒模',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t12874/255/15949646/3234/2ac08cca/5a1fa480Nb25ec042.jpg',
          },
          {
            name: '后庭',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t15187/337/235838504/2416/5831d5d6/5a27dd09N6e341de3.jpg',
          },
          {
            name: '情趣游戏',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t15517/83/118691147/2248/2ab34c4f/5a27dcf3Nc3c95962.jpg',
          },
          {
            name: '充气娃娃',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t14548/326/252090716/3444/d65a0e4/5a27dd0eN06ceb604.jpg',
          },
        ],
      },
      {
        name: '女用器具',
        child: [
          {
            name: '女用仿真',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t13318/170/1764615288/2475/ca6d7d29/5a27dce0N331f1af8.jpg',
          },
          {
            name: '跳蛋',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t14818/268/246244527/4366/81e2bb91/5a27dcfcN951395bc.jpg',
          },
          {
            name: '震动棒',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t13447/120/1378820595/3256/d14fff5c/5a1fa47bN410ff8f0.jpg',
          },
          {
            name: 'AV棒',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t13561/174/1403466955/2709/7007279e/5a1fa475Nff6e6f2b.jpg',
          },
          {
            name: '转珠棒',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t12757/80/1430224086/2761/6ec2c43c/5a1fa46eNad190bd4.jpg',
          },
          {
            name: '缩阴球',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t12061/150/1769987244/2461/fe21b911/5a27dcf6Neba3a5aa.jpg',
          },
        ],
      },
      {
        name: '安全避孕',
        child: [
          {
            name: '持久',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '螺纹',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '小号',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '大颗粒',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '超薄',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '果味',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '情趣内衣',
        child: [
          {
            name: '丁字裤',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '丝袜',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '吊带',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '套装',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '连体衣',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '角色扮演',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '人体润滑',
        child: [
          {
            name: '热感',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '冰感',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '水溶',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '热卖品牌',
        child: [
          {
            name: '杜蕾斯',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '倍力乐',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '冈本',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '第六感',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '大象',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'SUEKISS',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '对子哈特',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '杰士邦',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '谜姬',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '雷霆',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '取悦',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '诺兰',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '丽波',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '霏幕',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '大卫',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '根沐',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '名流',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '毓婷',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '验孕测孕',
        child: [
          {
            name: '早孕试纸',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '排卵试纸',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '电子验孕棒',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
    ],
  },
  {
    name: '运动户外',
    child: [
      {
        name: '运动热门购',
        child: [
          {
            name: '跑步鞋',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t13993/246/156269250/8757/12386c/5a1fb5e7N12a676b6.jpg',
          },
          {
            name: '体育用品',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t12313/239/1414060687/10293/ca8ad748/5a1fb5e1Nd80abbc2.jpg',
          },
          {
            name: '鱼竿鱼线',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t14857/15/278809348/9274/471af69b/5a28a1cbN31dc4638.jpg',
          },
          {
            name: '山地车',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t12256/40/1732819447/8543/fbd86360/5a28a1c1N59fcfd07.jpg',
          },
          {
            name: '篮球鞋',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t14251/57/273900758/6114/905ba6f4/5a28a1c6Nf348ad99.jpg',
          },
          {
            name: '跑步机',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t14425/134/260129361/6373/1652f8da/5a28a1d8N132b23ae.jpg',
          },
          {
            name: '足球鞋',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t15955/30/148996016/7549/c8ef04b6/5a28a1dcN41f94944.jpg',
          },
          {
            name: '冲锋衣裤',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t12262/75/1430212632/7910/cafe32a7/5a1fb5dbN1b8d927a.jpg',
          },
        ],
      },
      {
        name: '健身训练',
        child: [
          {
            name: '仰卧板/收腹机',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t12628/6/1754416208/2433/a08f9900/5a27e63aNc3f81cfb.jpg',
          },
          {
            name: '哑铃',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t13321/210/1412509830/3035/a09e6c43/5a1fb54dNc8ade0cc.jpg',
          },
          {
            name: '其他器械',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t14278/128/244801323/2902/b1ba65fd/5a27e617Nf1d7fbb2.jpg',
          },
          {
            name: '运动护具',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t15676/76/83231112/1650/dc4d87d5/5a27e633Nbba71819.jpg',
          },
          {
            name: '瑜伽用品',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t13921/341/1742128870/1667/a4368d2/5a27e62eN882d748e.jpg',
          },
          {
            name: '甩脂机',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t13501/308/1718082109/3025/4caee86/5a27e5e3N9884ea63.jpg',
          },
          {
            name: '武术搏击',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t15046/76/266257390/2309/de5c639c/5a27e629N7e884b46.jpg',
          },
          {
            name: '跑步机',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t13555/216/1389957904/2106/fdf80276/5a1fb545Nbbb405b3.jpg',
          },
          {
            name: '动感单车',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t12343/333/1428092094/2266/9312793e/5a1fb551Ndd363b8d.jpg',
          },
          {
            name: '综合训练器',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t16252/92/103377208/2979/327a52be/5a27e61bN9cb400d7.jpg',
          },
          {
            name: '椭圆机',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t16486/149/92580771/2387/d3499e59/5a27e61eN43b0623e.jpg',
          },
          {
            name: '踏步机',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t12634/331/1751476678/3038/37a8f306/5a27e60cN0f61fa3a.jpg',
          },
        ],
      },
      {
        name: '运动服饰',
        child: [
          {
            name: '运动套装',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '运动裤',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '运动T恤',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '卫衣/套头衫',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '夹克/风衣',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '运动配饰',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '健身服',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '棉服',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '羽绒服',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '户外装备',
        child: [
          {
            name: '望远镜',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '户外配饰',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '户外照明',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '军迷用品',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '帐篷/垫子',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '野餐/烧烤',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '背包',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '便携桌椅床',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '户外工具',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '旅游用品',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '睡袋/吊床',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '户外仪表',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '登山攀岩',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '极限户外',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '救援装备',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '滑雪装备',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '冲浪潜水',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '垂钓用品',
        child: [
          {
            name: '辅助装备',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '钓鱼配件',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '钓竿',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '鱼饵',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '浮漂',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '鱼线',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '渔具包',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '鱼线轮',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '钓箱钓椅',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '钓鱼灯',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '运动鞋包',
        child: [
          {
            name: '跑步鞋',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '乒羽网鞋',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '休闲鞋',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '帆布鞋',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '专项运动鞋',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '篮球鞋',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '拖鞋',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '运动包',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '板鞋',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '足球鞋',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '训练鞋',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '户外鞋服',
        child: [
          {
            name: '登山鞋',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '抓绒衣裤',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'T恤',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '军迷服饰',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '徒步鞋',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '户外风衣',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '速干衣裤',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '休闲鞋',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '冲锋衣裤',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '休闲衣裤',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '越野跑鞋',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '溯溪鞋',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '沙滩/凉拖',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '户外袜',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '功能内衣',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '羽绒服/棉服',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '工装鞋',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '软壳衣裤',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '骑行运动',
        child: [
          {
            name: '穿戴设备',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '平衡车',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '电动车',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '折叠车',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '山地车',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '城市自行车',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '骑行服',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '体育用品',
        child: [
          {
            name: '乒乓球',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '羽毛球',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '轮滑滑板',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '篮球',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '台球',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '棋牌麻将',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '其他',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '足球',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '网球',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '游泳用品',
        child: [
          {
            name: '泳帽',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '泳镜',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '女士泳衣',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '比基尼',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '游泳包防水包',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '游泳配件',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '男士泳衣',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '游泳圈',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
    ],
  },
  {
    name: '内衣配饰',
    child: [
      {
        name: '热卖品类',
        child: [
          {
            name: '内衣馆',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t16150/44/2324422460/7691/5b32064a/5a9fac31N41dea2e0.jpg',
          },
          {
            name: '大牌文胸',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t11533/246/2280103259/9386/6933199f/5a15214dNbf54520c.jpg',
          },
          {
            name: '自营内衣',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t12850/93/849533335/10330/7fdd04a9/5a15213fN09318254.jpg',
          },
          {
            name: '内衣爆款',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t11740/78/2314676437/4215/a56b7f6a/5a152146N3051a63d.jpg',
          },
          {
            name: '女士围巾/披肩',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t14365/252/779942291/2641/6f49b88f/5a38c43eN7beb8890.jpg',
          },
          {
            name: '配饰馆',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t12670/112/2276556764/4046/3fb6acb2/5a38c444N8b95d4c1.jpg',
          },
        ],
      },
      {
        name: '内裤',
        child: [
          {
            name: '男士内裤',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t12538/310/864919269/6647/41520471/5a15147bN74c49044.jpg',
          },
          {
            name: '女士内裤',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t12862/195/820653102/5281/33322b68/5a151484N7d472a83.jpg',
          },
          {
            name: '平角内裤',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t13141/156/856372705/8217/cf9a81e8/5a15141bN693b9da4.jpg',
          },
          {
            name: '蕾丝内裤',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t11326/68/2313427984/5200/6f2d749e/5a1512a6Nac606ead.jpg',
          },
          {
            name: '无痕内裤',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t14047/56/826120429/5382/b214e26d/5a151408Nd3998a01.jpg',
          },
          {
            name: '低腰内裤',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t14194/304/860436894/6536/e1914cf2/5a1512baNb75597d1.jpg',
          },
          {
            name: '三角内裤',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t12880/82/810004296/4172/a5fb6b74/5a15142aN471bc5ff.jpg',
          },
          {
            name: '中腰内裤',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t13306/317/861414554/6573/4a853d68/5a1512acN653b02f4.jpg',
          },
          {
            name: '高腰内裤',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t11929/249/2361224378/3601/7c52bd14/5a1512bcN88c433e5.jpg',
          },
          {
            name: '情侣内裤',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t11482/111/2305659939/8806/658aeef2/5a15147eNb726db5c.jpg',
          },
          {
            name: '棉质内裤',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t11560/179/2356145354/4249/a4008483/5a1512b0N3061b566.jpg',
          },
          {
            name: '莫代尔内裤',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t11764/14/2335087669/5273/263c4f96/5a151285N575a3d5b.jpg',
          },
        ],
      },
      {
        name: '袜子',
        child: [
          {
            name: '男袜',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t14095/131/860275440/6031/2b843086/5a15104bNd2f5e324.jpg',
          },
          {
            name: '连裤袜/丝袜',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t13021/56/851888198/3347/87c71cc6/5a15103bN78a53ed0.jpg',
          },
          {
            name: '休闲棉袜',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t13225/82/810217616/3416/4d16833f/5a151050Naa9d8856.jpg',
          },
          {
            name: '打底裤袜',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '女袜',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '美腿袜',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '船袜',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '棉毛袜',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '运动袜',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '服饰配件',
        child: [
          {
            name: '男士腰带/礼盒',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '针扣腰带',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '棒球帽',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '女士腰带/礼盒',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '遮阳帽',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '礼帽',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '贝雷帽',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '半指手套',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '鸭舌帽',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '男士围巾',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '女士围巾',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '领带/领结/领带夹',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '女士披肩',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '假领',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '毛绒/布面料',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '口罩',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '袖扣',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '大牌文胸',
        child: [
          {
            name: '文胸套装',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '文胸',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '少女文胸',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '薄杯文胸',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '聚拢文胸',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '光面文胸',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '大码文胸',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '无钢圈文胸',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '运动文胸',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '睡衣/家居服',
        child: [
          {
            name: '女式睡衣',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '男式睡衣',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '真丝睡衣',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '睡袍',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '全棉睡衣',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '情侣睡衣',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '可外穿睡衣',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '睡裙',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '亲子睡衣',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '卡通睡衣',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '夹棉睡衣',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '珊瑚绒睡衣',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '保暖内衣',
        child: [
          {
            name: '秋衣秋裤',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '保暖套装',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '薄款保暖',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '男士保暖',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '女士保暖',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '保暖裤',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '眼镜配件',
        child: [
          {
            name: '太阳镜',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '眼镜框',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '老花镜',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '防辐射眼镜',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '门店配镜券',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '近视太阳镜',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '热门品牌',
        child: [
          {
            name: '三枪',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '南极人',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '都市丽人',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '爱慕',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '安莉芳',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '波司登',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '恒源祥',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '舒雅',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '花花公子',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '芬腾',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '欧迪芬',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '七匹狼',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '北极绒',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '爱慕先生',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '华歌尔',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '情趣泳衣',
        child: [
          {
            name: '情趣内衣',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '背心',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '泳衣',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '塑身',
        child: [
          {
            name: '塑身上衣',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '无痕塑身',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '塑身裤',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '塑身腰封',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '塑身分体套装',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '塑身连体衣',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '儿童内衣配饰',
        child: [
          {
            name: '儿童袜子',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '内衣/家居服',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '品质童装',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '婴儿内衣',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '婴儿礼盒',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
    ],
  },
  {
    name: '食品生鲜',
    child: [
      {
        name: '进口食品',
        child: [
          {
            name: '休闲零食',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t19789/191/2614150696/17735/d2db9aca/5b02411eNb44a03f7.jpg',
          },
          {
            name: '牛奶',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t17479/1/2588472716/22795/d676e57a/5b024117N06151eba.jpg',
          },
          {
            name: '饼干蛋糕',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t21448/247/189820564/20127/d5cc76fd/5b024112Nbaa67999.jpg',
          },
          {
            name: '糖果/巧克力',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t22348/56/187871154/19174/f25673d6/5b02410aNf2cc12a3.jpg',
          },
          {
            name: '方便食品',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t20314/210/202390577/24647/ec1aa53b/5b024104Ndc3320e8.jpg',
          },
          {
            name: '油',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t21142/231/195015280/21324/c449433c/5b0240feN0742142f.jpg',
          },
          {
            name: '饮料',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t20653/19/179769817/14505/78d5857/5b0240f7Neaa73331.jpg',
          },
          {
            name: '米面调味',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t20032/189/629342696/13158/61f2aab2/5b0240f0N996adbf2.jpg',
          },
          {
            name: '冲调品',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t19021/111/2625787623/24690/d0c69f53/5b0240eaN99f88278.jpg',
          },
          {
            name: '咖啡豆/咖啡粉',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t20047/95/594864095/22915/f08e4916/5b0240e0N7620dc41.jpg',
          },
          {
            name: '水',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t17620/237/2654494632/6415/b510cbbc/5b0240d7Nce1bb7de.jpg',
          },
        ],
      },
      {
        name: '休闲食品',
        child: [
          {
            name: '坚果炒货',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t18961/239/2616658953/15059/1b23f60d/5b026175Na5f7e945.jpg',
          },
          {
            name: '休闲零食',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t18439/264/2604951273/15945/2497d4fc/5b02616fNdd1ded96.jpg',
          },
          {
            name: '肉干肉脯',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t19618/280/2619924427/19526/54709f0a/5b026166N520f98c6.jpg',
          },
          {
            name: '蜜饯果干',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t17413/78/2660281485/19254/f1e963c0/5b0260bdN0bfec8e3.jpg',
          },
          {
            name: '饼干蛋糕',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t17740/58/2655343878/14788/d24f3295/5b0260b7Nb852b47d.jpg',
          },
          {
            name: '膨化食品',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t17260/55/2574012639/24707/25f2869a/5b02609dN8d13b554.jpg',
          },
          {
            name: '中华老字号',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t20224/16/205577980/17404/a764dc1/5b026097Nb9d0e261.jpg',
          },
        ],
      },
      {
        name: '新鲜水果',
        child: [
          {
            name: '水果集市',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '苹果',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '橙子',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '奇异果/猕猴桃',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '百香果',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '榴莲',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '国产水果',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '进口水果',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '火龙果',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '香蕉',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '车厘子/樱桃',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '柚子',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '梨',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '石榴',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '牛油果',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '粮油调味',
        child: [
          {
            name: '米',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '食用油',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '方便食品',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '面',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '南北干货',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '杂粮',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '调味品',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '有机食品',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '花生油',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '葵花籽油',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '烘焙原料',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '调和油',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '海鲜水产',
        child: [
          {
            name: '虾类',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '鱼类',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '贝类',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '海产干货',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '海参',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '蟹类',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '活鲜',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '特色水产',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '海产礼盒',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '三文鱼',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '鱿鱼/章鱼',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '海产加工品',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '鳕鱼',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '精选肉类',
        child: [
          {
            name: '牛肉',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '牛排',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '猪肉',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '羊肉',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '鸡肉',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '鸭肉',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '冷藏熟食',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '冷鲜肉',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '鸡翅',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '内脏类',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '牛腩',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '特色肉类',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '热卖品牌',
        child: [
          {
            name: '三只松鼠',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '百草味',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '双汇',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '好想你',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '金龙鱼',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '良品铺子',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '德芙',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '陶华碧老干妈',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '达利园',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '海天',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '福临门',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '统一',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '冷饮冻食',
        child: [
          {
            name: '手抓饼',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '火锅丸串',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '方便菜',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '方便速食',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '水饺/馄饨',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '冰淇淋',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '汤圆/元宵',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '面点/面食',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '冷藏果蔬汁',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '低温乳品',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '年糕',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '油炸小食',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '烘焙半成品',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '馒头',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '奶酪/黄油',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '蔬菜蛋品',
        child: [
          {
            name: '山药',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '根茎类',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '鲜菌菇',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '叶菜类',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '蛋品',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '葱姜蒜椒',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '茄果瓜类',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '半加工豆制品',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '喜蛋',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '玉米',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '地瓜/红薯',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '半加工蔬菜',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '食品礼券',
        child: [
          {
            name: '粽子',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '月饼',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '卡券',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
    ],
  },
  {
    name: '酒水饮料',
    child: [
      {
        name: '中外名酒',
        child: [
          {
            name: '白酒',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t18181/109/2558425270/12312/e383d7f/5afeb44dN71307ca2.jpg',
          },
          {
            name: '葡萄酒',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t18091/200/2563599200/6102/986a556f/5afeb452N6f3b2526.jpg',
          },
          {
            name: '啤酒',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t18067/158/2576866215/11580/b9ea8d94/5afeb458N157ca653.jpg',
          },
          {
            name: '黄酒/养生酒',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t21523/358/134606238/35315/41013e8d/5afeb45eNd927ad59.jpg',
          },
          {
            name: '洋酒',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t18709/77/2597376889/8764/51cc996b/5afeb464N9b715679.jpg',
          },
        ],
      },
      {
        name: '水',
        child: [
          {
            name: '纯净水',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t21745/303/150824439/12821/5782b4f/5afeb92fNddd2c121.jpg',
          },
          {
            name: '苏打水',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t21253/12/143239486/14399/ce2df304/5afeb934N993638b6.jpg',
          },
          {
            name: '矿泉水',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t21952/295/134939771/7438/8bd81333/5afeb939N8f997fb7.jpg',
          },
          {
            name: '母婴水',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t20794/171/143039849/8914/e2a2cfb6/5afeb93eNc223d4a0.jpg',
          },
          {
            name: '气泡水',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t21931/226/145842465/17743/2c1516dd/5afeb943N9dc11bd5.jpg',
          },
        ],
      },
      {
        name: '饮料',
        child: [
          {
            name: '碳酸饮料',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t21136/27/148114098/21764/dfe7107f/5afeb956Na0fe3b4c.jpg',
          },
          {
            name: '蛋白质饮料',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t19543/4/2568517481/19825/c9d21874/5afeb95bN01221d80.jpg',
          },
          {
            name: '功能饮料',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t18784/165/2557648075/21677/f23d0075/5afeb960Nc2e5778d.jpg',
          },
          {
            name: '果味饮料',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t18154/183/2553589879/11492/9a5a7cc3/5afeb966Nb3406e49.jpg',
          },
          {
            name: '茶饮料',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t16741/74/2580042255/8757/eaf71845/5afeb96cN8375530c.jpg',
          },
          {
            name: '即饮咖啡',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t17461/75/2611457320/19639/8fa8d3fa/5afeb971N3ab5b08a.jpg',
          },
        ],
      },
      {
        name: '冲调谷物',
        child: [
          {
            name: '速溶咖啡',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '咖啡豆/粉',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '奶茶',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '成人奶粉',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '麦片谷物冲饮',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '代餐/谷粉',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '牛奶酸奶',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '茗茶',
        child: [
          {
            name: '铁观音',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '红茶',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '绿茶',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '普洱',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '龙井',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '养生茶',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '黑茶',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '白茶',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '花草茶',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '乌龙茶',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '花果茶',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '茶礼盒',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '热卖品牌',
        child: [
          {
            name: '蒙牛',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '张一元',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '伊利',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '沃尔玛',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '欧德宝',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '安佳',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '小罐茶',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '太平洋咖啡',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '三元',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '峨眉雪芽',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '中茶',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '天福茗茶',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
    ],
  },
  {
    name: '家具家装',
    child: [
      {
        name: '热卖推荐',
        child: [
          {
            name: '吸顶灯',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t13090/243/1346860411/3202/d2be91c4/5a1eb13eN06688863.jpg',
          },
          {
            name: '实木餐桌',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t12772/3/1793374412/9705/e633967a/5a28e6c9N8aaaea3f.jpg',
          },
          {
            name: '实木床',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t12436/27/1747262650/7799/134e2700/5a28e6d6N3a425bcc.jpg',
          },
          {
            name: '实木沙发',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t15292/151/295030057/7397/2f0c190b/5a28e6ddNbbb9fdbc.jpg',
          },
          {
            name: '淋浴花洒',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t13072/204/1332016388/3854/74f23208/5a1eb139Ne793d9b8.jpg',
          },
          {
            name: '开关插座',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t14167/107/1788781156/7969/ff1328fd/5a28e6e3N560f994c.jpg',
          },
          {
            name: '马桶',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t13084/177/1353982720/4576/cdc52584/5a1eb134N33462768.jpg',
          },
          {
            name: '地板',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t1/133455/22/3838/2428/5f02876fEfdad41bf/2a78bc7ad11a2988.jpg',
          },
          {
            name: '乳胶床垫',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t14755/331/297390009/5211/510629e8/5a28e6d0N8bb8b1aa.jpg',
          },
        ],
      },
      {
        name: '厨房卫浴',
        child: [
          {
            name: '龙头',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t12565/111/1334386395/4116/3d449f66/5a1eb11eN8fdd22ab.jpg',
          },
          {
            name: '厨卫挂件',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t13177/183/1329129789/5199/537c1e9d/5a1eb124N05a204a3.jpg',
          },
          {
            name: '浴室柜',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t13321/359/1816171665/2744/c8d78412/5a28e911Ndd032756.jpg',
          },
          {
            name: '淋浴花洒',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t13084/170/1364409770/3854/74f23208/5a1eb12cN5ab932bb.jpg',
          },
          {
            name: '淋浴房',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t11323/13/528278280/4649/2c0d10df/5a28e8ecNa506867b.jpg',
          },
          {
            name: '沐浴桶',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t15550/40/156257295/2945/9c1dfedd/5a28e8eaN02afca5a.jpg',
          },
          {
            name: '马桶',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t12193/73/1780075535/4576/cdc52584/5a28e91bN5227f4f2.jpg',
          },
          {
            name: '陶瓷件组装',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t14230/40/287558014/4981/9f54cbca/5a28e8c9Ndb0c47ef.jpg',
          },
          {
            name: '橱柜',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t15715/71/154603870/7556/7113d49c/5a28e8f1Nc375ad49.jpg',
          },
          {
            name: '水槽',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t12406/270/1772385719/5534/21d6ba91/5a28e921Na8be1a34.jpg',
          },
          {
            name: '浴缸',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t12250/100/1768770772/3490/1f54dc1e/5a28e8e5N30d386d5.jpg',
          },
          {
            name: '厨卫配件',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t15109/235/282333921/5199/537c1e9d/5a28e8e5Neaff4ed9.jpg',
          },
          {
            name: '净水软水',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '智能马桶盖',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '灯饰照明',
        child: [
          {
            name: 'LED灯',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '吊灯',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '室外/庭院灯',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '筒灯/射灯',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '手电筒/应急灯',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '台灯',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '装饰灯',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '氛围照明',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '节能灯',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '落地灯',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '客厅家具',
        child: [
          {
            name: '布艺沙发',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '边桌/茶几',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '沙发',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '凳子',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '鞋柜',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '皮沙发',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '沙发床',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '电视柜',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '实木沙发',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '屏风',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '功能沙发',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '壁炉',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '卧室家具',
        child: [
          {
            name: '床',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '实木床',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '双人床',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '床垫',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '乳胶床垫',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '衣柜',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '实木衣柜',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '床头柜',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '简易衣柜',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '斗柜',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '梳妆台/凳',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '穿衣镜',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '书房家具',
        child: [
          {
            name: '书桌',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '电脑椅',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '电脑桌',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '书柜/书架',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '电竞椅',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '椅子',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '五金工具',
        child: [
          {
            name: '机电五金',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '工具组套',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '智能锁',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '气动工具',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '工具配件',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '手动工具',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '测量工具',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '劳防用品',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '家用五金',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '机械锁',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '储物家具',
        child: [
          {
            name: '鞋架',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '挂衣架',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '衣帽架',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '墙面搁架',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '层架/置物架',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '储物/收纳用品',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '墙地面材料',
        child: [
          {
            name: '壁纸',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '油漆/涂料',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '地板',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '涂刷辅料/胶类',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '木板/板材',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '管材管件',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '瓷砖',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '装饰材料',
        child: [
          {
            name: '浴霸',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '园艺休闲',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '窗',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '散热器',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '吊顶',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '门',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '移门壁柜',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '壁炉/壁挂炉/地暖',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '儿童家具',
        child: [
          {
            name: '儿童沙发',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '儿童椅凳',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '儿童桌椅套装',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '儿童床垫',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '儿童衣柜',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '儿童书桌',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '儿童床',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '办公家具',
        child: [
          {
            name: '麻将机',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '货架',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '屏风',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '班台/班桌',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '文件柜',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '办公桌',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '会议桌',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '铁皮柜',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '办公桌椅',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '电工电料',
        child: [
          {
            name: '智能家居',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '接线板/排插',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '配电箱/断路器',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '电线/电缆',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '开关插座',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '电料配件',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '餐厅家具',
        child: [
          {
            name: '餐边柜',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '实木餐桌',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '椅子',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '酒柜',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '餐桌',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '折叠餐桌',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '阳台户外',
        child: [
          {
            name: '吊篮/秋千',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '折叠床',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '户外家具',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '晾衣架',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '花架/装饰架',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '家用梯',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '装修服务',
        child: [
          {
            name: '整体全包',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '局部装修',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '安装维修',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '装修设计',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '监理服务',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
    ],
  },
  {
    name: '家居厨具',
    child: [
      {
        name: '热卖推荐',
        child: [
          {
            name: '烹饪锅具',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t13981/209/1768932684/2335/18446a64/5a28dae5Nb2cf749e.jpg',
          },
          {
            name: '床品件套',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t15349/196/239959360/8919/1a8fb7c8/5a28d645N46c95018.jpg',
          },
          {
            name: '厨房配件',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t13090/20/1798226817/3117/b05811f8/5a28dad9Ne5e8c4e3.jpg',
          },
          {
            name: '收纳用品',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t14128/268/1764967361/2563/b710525/5a28dabcN7b0f8315.jpg',
          },
          {
            name: '水具酒具',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t15343/315/279468612/2080/9aa2cd02/5a28dae0N2ad12b64.jpg',
          },
          {
            name: '餐具',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t13225/318/1770793198/8883/351fd89/5a28dab7N91619eff.jpg',
          },
          {
            name: '被子',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t16396/75/52698803/10089/6a5b7d77/5a28d63fNaea1d0b1.jpg',
          },
          {
            name: '电热毯',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t12901/35/1728002090/10472/2b758d97/5a28d668Naf40252a.jpg',
          },
          {
            name: '净化除味',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t13741/208/1781994133/7039/9c69393a/5a28dac2N9c63c098.jpg',
          },
        ],
      },
      {
        name: '家纺',
        child: [
          {
            name: '沙发垫套',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t12160/134/510703031/5065/bfbe9c64/5a28d9ddNbc8654fc.jpg',
          },
          {
            name: '被子',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t14788/350/269750544/2075/1141c865/5a28d617N1dedd321.jpg',
          },
          {
            name: '枕芯',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t13243/92/1783782366/1555/166277a6/5a28d9e8N0b556b71.jpg',
          },
          {
            name: '床垫/床褥',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t13054/33/1764516541/6058/83db3e5d/5a28da04N3844e590.jpg',
          },
          {
            name: '枕套枕巾',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t15367/249/310964461/6132/df2ee907/5a28d9eeNc53e5c0c.jpg',
          },
          {
            name: '地毯',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t13321/358/1739991347/11094/6b443b4c/5a28da16Nd5d3ac21.jpg',
          },
          {
            name: '窗帘',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t12274/159/1775033019/11887/b6e0aa22/5a28da0aN1c4eae86.jpg',
          },
          {
            name: '床品件套',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t16243/74/135043195/6905/49165b54/5a28d60dN99cd74e6.jpg',
          },
          {
            name: '电热毯',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t15652/218/157901820/10556/3454eae5/5a28d5fdNe42e63e3.jpg',
          },
          {
            name: '毛巾浴巾',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t14125/73/1750966891/3842/d64a8192/5a28da16N88ed6591.jpg',
          },
          {
            name: '毯子',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t13396/49/1751181197/7945/786adf2f/5a28da23N987d925a.jpg',
          },
          {
            name: '被套',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t15805/352/155969496/8791/5680507e/5a28da0eN20b9f9b2.jpg',
          },
          {
            name: '床单被罩',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '桌布',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '抱枕靠垫',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '布艺软饰',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '蚊帐',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '凉席',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '家装软饰',
        child: [
          {
            name: '创意家居',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '墙贴/装饰贴',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '装饰摆件',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '相框/照片墙',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '装饰字画',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '节庆饰品',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '帘艺隔断',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '钟饰',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '花瓶花艺',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '香薰蜡烛',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '手工/十字绣',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '烹饪锅具',
        child: [
          {
            name: '水壶',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '平底锅/煎锅',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '高压锅',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '锅具套装',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '火锅',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '砂锅',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '蒸锅',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '汤锅',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '奶锅',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '厨房配件',
        child: [
          {
            name: '储物/置物架',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '菜刀',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '砧板',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '厨房DIY/小工具',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '刀具套装',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '剪刀',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '瓜果刀/刨',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '保鲜盒',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '多功能刀',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '饭盒/提锅',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '烘焙烧烤',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '茶具咖啡具',
        child: [
          {
            name: '茶杯',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '茶壶',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '茶盘茶托',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '茶叶罐',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '茶具配件',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '茶宠摆件',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '其他',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '咖啡具',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '生活日用',
        child: [
          {
            name: '浴室用品',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '缝纫/针织用品',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '洗晒/熨烫',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '净化除味',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '雨伞雨具',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '收纳箱',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '压缩袋',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '保暖防护',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '水具酒具',
        child: [
          {
            name: '保温壶',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '玻璃杯',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '塑料杯',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '杯具套装',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '陶瓷/马克杯',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '运动水壶',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '餐具',
        child: [
          {
            name: '果盘/果篮',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '碗/碟/盘',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '筷勺/刀叉',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '一次性用品',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '餐具套装',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
    ],
  },
  {
    name: '箱包手袋',
    child: [
      {
        name: '热卖分类',
        child: [
          {
            name: '拉杆箱',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t12364/153/835832532/6803/5b58b137/5a152fb3Nb9f571ea.jpg',
          },
          {
            name: '时尚男包',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t11248/340/2289609805/2853/7f9a7a74/5a152fbfNb5a675bd.jpg',
          },
          {
            name: '男士腰带',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t11863/300/2350019658/5834/eb70aa49/5a152fbcNf59291c9.jpg',
          },
          {
            name: '男包上新',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t14128/202/865935024/9001/9a9b3fe8/5a152fb8N124420fc.jpg',
          },
          {
            name: '自营女包',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t11914/190/2286775729/3069/4a29a226/5a152fa5N270c2aea.jpg',
          },
          {
            name: '新款双肩包',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t11839/228/2321148618/4762/51a368b0/5a152fa0N0c628dcd.jpg',
          },
          {
            name: '新款钱包',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t11827/274/2291795976/3701/1193c16b/5a152f9aNf35320a3.jpg',
          },
          {
            name: '学生书包',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t12976/143/856792930/9096/70c50a5e/5a152faaNd711f0d2.jpg',
          },
          {
            name: '电脑包',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t13072/160/841922431/4449/2af11bb9/5a152f9eN7ce8e286.jpg',
          },
        ],
      },
      {
        name: '潮流女包',
        child: [
          {
            name: '单肩包',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t14005/197/826940059/9087/b0768931/5a152ee0N04e9ca84.jpg',
          },
          {
            name: '手提包',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t13054/181/825039027/7838/1bf8d0e5/5a152ed5Ne0df48d5.jpg',
          },
          {
            name: '斜挎包',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t11533/305/2340248240/5527/fc48d6a2/5a152edbN5d852327.jpg',
          },
          {
            name: '真皮包',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t13588/149/854498585/6952/7ec72402/5a152eceN33812ba3.jpg',
          },
          {
            name: '双肩包',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t11482/108/2322445732/5725/fe851860/5a152eeeN0b8a7941.jpg',
          },
          {
            name: '链条包',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t11857/276/2161238284/6891/25a9ead0/5a152ec1N49977ca2.jpg',
          },
          {
            name: '钱包',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t12865/189/849590115/8350/c75cbcf1/5a152ee9Nc9f07b67.jpg',
          },
          {
            name: '卡包/零钱包',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t11548/304/2319668973/8158/2199397c/5a152eb8Nc9004176.jpg',
          },
          {
            name: '手拿包',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t13180/40/849287661/7933/8143c91f/5a152e7fN9cf9224d.jpg',
          },
          {
            name: '帆布包',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t12943/87/817361347/7760/8c46f9e0/5a152e9aN48ec79ee.jpg',
          },
          {
            name: '小方包',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t13648/155/838025147/9515/4f9332be/5a152eaeNc6ae8bb4.jpg',
          },
          {
            name: '小猪包',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t12115/163/847423964/5241/5c7adcaa/5a152ea6N1e7e80b6.jpg',
          },
          {
            name: '水桶包',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '迷你包',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '子母包',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '贝壳包',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '菱格包',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '钥匙包',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '红谷',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '稻草人',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '梦特娇',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '老人头',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'ELLE',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'FION',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '精品男包',
        child: [
          {
            name: '男士钱包',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '男士手包',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '单肩斜挎包',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '双肩包',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '公文包',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '男士腰带',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '帆布腰带',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '皮具礼盒',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '信封包',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '邮差包',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '帆布包',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '休闲包',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '手提包',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '男士胸包',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '男士腰包',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '证件包',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '卡包名片夹',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '钥匙包',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '手机包',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '男包配件',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '皮具护理',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '皮尔卡丹',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '七匹狼',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '沙驰',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'TUMI',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '金利来',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '稻草人',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '功能箱包',
        child: [
          {
            name: '万向轮拉杆箱',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '登山包',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '旅行包',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '登机箱',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '铝框拉杆箱',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '布箱',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '儿童拉杆箱',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '女士拉杆箱',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '拉杆包',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '双肩包',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '双肩电脑包',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '手提电脑包',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '女士电脑包',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '学生书包',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '幼儿书包',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '智能箱',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '胸包/腰包',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '收纳包',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '旅行用品',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '洗漱包',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '箱套',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '新秀丽',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '法国大使',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '外交官',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '瑞动',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '威戈',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'incase',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '美旅',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '90分',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'JanSport',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
    ],
  },
  {
    name: '钟表珠宝',
    child: [
      {
        name: '钟表',
        child: [
          {
            name: '瑞表',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t14155/271/890296038/3841/f1adee7f/5a166fe1Nc6bd2f12.jpg',
          },
          {
            name: '国表',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t13555/266/920169438/5641/35f6a82d/5a166fddNbc219f4f.jpg',
          },
          {
            name: '德表',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t11233/298/2354937461/8166/da1be67c/5a166fbaNc6b4a13f.jpg',
          },
          {
            name: '日韩表',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t11581/265/2369428747/4935/ca527758/5a166fd7Nd69be6f9.jpg',
          },
          {
            name: '儿童手表',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t13357/243/920169194/2802/ebdc93ac/5a166fd1N74f1c1a1.jpg',
          },
          {
            name: '欧美表',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t12886/214/911606896/6544/c0799be4/5a166fcaN5341f65b.jpg',
          },
          {
            name: '智能手表',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t12334/51/891061626/3646/d26b59e4/5a166fc5Nd8f2c0d6.jpg',
          },
          {
            name: '挂钟',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t13546/223/901767668/3138/cef8d136/5a166fbfN56260c62.jpg',
          },
          {
            name: '钟表配件',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t13396/174/918318627/7288/8990601c/5a166faeN7103ed89.jpg',
          },
          {
            name: '闹钟',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t13630/187/903217858/6015/b1316f3c/5a166fb4N646089bb.jpg',
          },
        ],
      },
      {
        name: '时尚饰品',
        child: [
          {
            name: '时尚戒指',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t11938/312/2209743680/2807/7d267768/5a1663b8N339d5cf6.jpg',
          },
          {
            name: '耳饰',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t13606/247/899282504/1272/1d2e800f/5a1663c1Na62e50ec.jpg',
          },
          {
            name: '项链',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t12688/316/906553151/4331/c13fe276/5a1663d9Nca63e916.jpg',
          },
          {
            name: 'chocker',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t13912/125/892159520/1799/4e0a6009/5a16639aN9990d315.jpg',
          },
          {
            name: '手链/脚链',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t13225/190/935358719/5590/bbe742e4/5a1663cfN75bb6adc.jpg',
          },
          {
            name: '发饰/发卡',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t11050/6/2357869397/5935/bc39f11e/5a1663b7N4eb5e1c8.jpg',
          },
          {
            name: '胸针',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t14086/187/916964624/1802/3d5b1d09/5a1663b2Nc686fce2.jpg',
          },
          {
            name: '饰品配件',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t12316/152/934120191/2628/8bb479ff/5a16639fNc1bf75fb.jpg',
          },
          {
            name: '婚庆饰品',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t11521/43/2359109103/7025/891ca25d/5a1663a5Nb3503d32.jpg',
          },
        ],
      },
      {
        name: '黄金',
        child: [
          {
            name: '黄金吊坠',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '金手镯/手链/脚链',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '纯金K金戒指',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '黄金项链',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '黄金转运珠',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '黄金耳饰',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '银饰',
        child: [
          {
            name: '银吊坠/项链',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '银耳饰',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '银戒指',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '宝宝银饰',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '银手镯',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '银手链/脚链',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '翡翠玉石',
        child: [
          {
            name: '项链/吊坠',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '手镯/手串',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '玉石孤品',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '翡翠玉石戒指',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '挂件/摆件/把件',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '耳饰',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '木手串把件',
        child: [
          {
            name: '小叶紫檀',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '黄花梨',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '沉香木',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '星月菩提',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '金刚菩提',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '橄榄核/核桃',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '其他材质',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '金丝楠',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '热销大牌',
        child: [
          {
            name: '周生生',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '周大福',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '颂拓',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '天梭',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '浪琴',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '欧米茄',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '美度',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '泰格豪雅',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'sevenfriday',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '卡西欧',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '精工',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '西铁城',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '天王',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '飞亚达',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '罗西尼',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '海鸥',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '依波',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '百年宝诚',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '菜百',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '银千惠',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '玉友',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '五昌阁',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '佐卡伊',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'DAISY',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '水晶玛瑙',
        child: [
          {
            name: '手镯/手链/脚链',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '项链/吊坠',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '水晶玛瑙戒指',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '头饰/胸针',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '摆件/挂件',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '耳饰',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '钻石',
        child: [
          {
            name: '钻石项链/吊坠',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '裸钻',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '钻石戒指',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '钻石手镯/手链',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '钻石耳饰',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '铂金',
        child: [
          {
            name: '铂金戒指',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '铂金耳饰',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '铂金项链',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '铂金手镯/手链/脚链',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: 'K金饰品',
        child: [
          {
            name: 'K金戒指',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'K金项链',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'K金手镯/手链/脚链',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'K金耳饰',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'K金吊坠',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '彩宝',
        child: [
          {
            name: '项链/吊坠',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '耳饰',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '手镯/手链',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '彩宝戒指',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '金银投资',
        child: [
          {
            name: '投资金',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '投资银',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '投资收藏',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '珍珠',
        child: [
          {
            name: '珍珠胸针',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '珍珠手链',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '珍珠项链',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '珍珠吊坠',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '珍珠耳饰',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '珍珠戒指',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
    ],
  },
  {
    name: '玩具乐器',
    child: [
      {
        name: '适用年龄',
        child: [
          {
            name: '0-6个月',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t20632/73/182006321/17625/cd050730/5b02a109N15951410.jpg',
          },
          {
            name: '6-12个月',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t20500/79/189012836/13613/b1beb4a2/5b02a10eN399ceaea.jpg',
          },
          {
            name: '1-3岁',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t19381/31/2616382291/12312/d7bfab0e/5b02a113Na7a0c350.jpg',
          },
          {
            name: '3-6岁',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t20521/286/199006524/12995/b6ff1595/5b02a119Neaa0e73e.jpg',
          },
          {
            name: '6-14岁',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t19858/95/607601384/8768/4e1ce32d/5b02a11fN3cc755cc.jpg',
          },
          {
            name: '14岁以上',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t18589/45/2615710906/8707/4fa69a2b/5b02a124N6429c78c.jpg',
          },
        ],
      },
      {
        name: '遥控电动',
        child: [
          {
            name: '机器人',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t17908/265/2637004465/8576/588ed433/5b02a0c0Ne124990e.jpg',
          },
          {
            name: '遥控车',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t17575/123/2617650159/16720/74c14629/5b02a0c6N3f2770d9.jpg',
          },
          {
            name: '遥控飞机',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t20473/3/194410986/9860/6be4280d/5b02a0cdN9cf1d8a3.jpg',
          },
          {
            name: '轨道/助力',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t21202/251/197603029/18264/a6f230b7/5b02a0d4Nb01feba8.jpg',
          },
          {
            name: '遥控船',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t21217/262/186253182/13889/7e81afd/5b02a0dcNdf2b072c.jpg',
          },
        ],
      },
      {
        name: '积木拼插',
        child: [
          {
            name: '立体拼插',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t19891/12/621117324/16405/ba660035/5b02a087Nf6f357db.jpg',
          },
          {
            name: '积木',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t20224/233/188290327/11350/8245595e/5b02a08fN9ec30c5f.jpg',
          },
          {
            name: '拼图',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t17632/123/2653656492/22135/10808384/5b02a094Nd7c5b479.jpg',
          },
          {
            name: '磁力片/棒',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t19996/15/619143939/22280/51419995/5b02a09aN5227d7d7.jpg',
          },
        ],
      },
      {
        name: '健身玩具',
        child: [
          {
            name: '炫舞毯',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '户外玩具',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '戏水玩具',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '爬行垫/毯',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '乐器',
        child: [
          {
            name: '口琴/口风琴/竖笛',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '电子琴',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '吉他',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '钢琴',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '手风琴',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '尤克里里',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '民族管弦乐器',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '西洋管弦',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '打击乐器',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '乐器配件',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '电脑音乐',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '工艺礼品乐器',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '电钢琴',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '益智玩具',
        child: [
          {
            name: '早教启智',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '健身架',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '拖拉玩具',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '摇铃/床铃',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '娃娃玩具',
        child: [
          {
            name: '芭比娃娃',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '卡通娃娃',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '智能娃娃',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '毛绒布艺',
        child: [
          {
            name: '毛绒/布艺',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '靠垫/抱枕',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '模型玩具',
        child: [
          {
            name: '拼插模型',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '仿真模型',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '收藏爱好',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '创意减压',
        child: [
          {
            name: '减压玩具',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '创意玩具',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '动漫玩具',
        child: [
          {
            name: '电影周边',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '卡通周边',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '网游周边',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '绘画DIY',
        child: [
          {
            name: '绘画工具',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '情景玩具',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '手工彩泥',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
    ],
  },
  {
    name: '医药保健',
    child: [
      {
        name: '中西药品',
        child: [
          {
            name: '补肾壮阳',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t12556/103/1373082274/11559/1bde35ab/5a1f7b2fNc5daf7f9.jpg',
          },
          {
            name: '男科/泌尿',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t15778/63/82429352/10031/372bcf1/5a269d3bN114d7d33.jpg',
          },
          {
            name: '补气养血',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t13852/186/1389090137/8478/3f96b8c9/5a1f7b2fN94a8589c.jpg',
          },
          {
            name: '耳鼻喉用药',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t14356/174/216897593/7195/ba63ab5b/5a269d22N056cc7a8.jpg',
          },
          {
            name: '避孕用药',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t12016/304/1696211618/8321/6174bd3f/5a269d11Na36654b5.jpg',
          },
          {
            name: '皮肤用药',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t13381/271/1729675763/9239/1b6dbdab/5a269d41N92f43c18.jpg',
          },
          {
            name: '妇科用药',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t16534/66/53204161/7192/cb1d2662/5a269d35N9d2eca6a.jpg',
          },
          {
            name: '肠胃消化',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t13933/144/1413719324/5576/43bc37fa/5a1f7b3cN9f10c291.jpg',
          },
          {
            name: '风湿骨外伤',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t13906/283/1714041125/14500/72cd579f/5a269d50N92d21f24.jpg',
          },
          {
            name: '维矿物质',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t13492/276/1680532232/13481/ef38916b/5a269d49N9e44bf77.jpg',
          },
          {
            name: '眼科用药',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t14677/58/212949888/12388/530a75da/5a269d28N3aca2454.jpg',
          },
          {
            name: '口腔用药',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t13318/254/1739908458/12965/d4223b03/5a269d1cN7986f437.jpg',
          },
          {
            name: '感冒咳嗽',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t16465/17/58035819/10214/1c572495/5a269d17Nc1de6fd2.jpg',
          },
          {
            name: '心脑血管',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t14407/82/204849119/11340/63fa75c6/5a269d0cNeaeb97be.jpg',
          },
          {
            name: '肝胆用药',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t16483/256/58973874/5560/bef1f4b0/5a269d07Ne9a42214.jpg',
          },
          {
            name: '儿科用药',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t14197/320/209316663/9793/3ac79941/5a269d2dNfe995334.jpg',
          },
        ],
      },
      {
        name: '保健器械',
        child: [
          {
            name: '血压计',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t12910/86/1439533107/6181/69ea0d81/5a1f7afaN378605cd.jpg',
          },
          {
            name: '血糖仪',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t13564/77/1370547369/5683/a18d787b/5a1f7af5N461ff1f2.jpg',
          },
          {
            name: '血氧仪',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t13330/82/1411733035/7574/5fa7743c/5a1f7af0Nd49476ee.jpg',
          },
          {
            name: '体温计',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '胎心仪',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '理疗仪',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '制氧机',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '雾化器',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '轮椅',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '拐杖',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '中医保健',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '养生器械',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '家庭护理',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '护理床',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '智能健康',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '营养健康',
        child: [
          {
            name: '调节免疫',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '骨骼健康',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '美容养颜',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '调节三高',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '肠胃养护',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '肝肾养护',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '美体塑身',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '缓解疲劳',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '改善睡眠',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '孕期营养',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '传统滋补',
        child: [
          {
            name: '药食同源',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '冬虫夏草',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '阿胶',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '枸杞',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '人参/西洋参',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '燕窝',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '蜂蜜/蜂产品',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '三七',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '石斛/枫斗',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '养生茶饮',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '灵芝/孢子粉',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '营养成分',
        child: [
          {
            name: '玛咖',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '蛋白质',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '维生素/矿物质',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '胶原蛋白',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '左旋肉碱',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '酵素',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '益生菌',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '鱼油/磷脂',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '葡萄籽',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '护理护具',
        child: [
          {
            name: '口罩',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '眼罩/耳塞',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '跌打损伤',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '暖贴',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '鼻喉护理',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '体重秤',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '眼部保健',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '美体护理',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '健康服务',
        child: [
          {
            name: '基因检测',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '体检套餐',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '口腔齿科',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '孕产服务',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '美容塑型',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '隐形眼镜',
        child: [
          {
            name: '半年抛',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '月抛',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '日抛',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '年抛',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '彩色隐形',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '护理液',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '透明隐形',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '眼镜配件',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
    ],
  },
  {
    name: '宠物生活',
    child: [
      {
        name: '狗狗',
        child: [
          {
            name: '狗狗活体',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t18280/1/2656168555/9439/7cab050f/5b029068N322d822c.jpg',
          },
          {
            name: '狗粮',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t21478/276/192138929/12260/ac5558a9/5b029073Nfa38db85.jpg',
          },
          {
            name: '狗罐头/湿粮',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t17962/55/2608239249/23307/7d7b9faf/5b029080Naebd5366.jpg',
          },
          {
            name: '狗零食',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t17143/106/2644941749/14369/45cf784d/5b029088Nab0b6632.jpg',
          },
          {
            name: '狗玩具',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t17365/117/2650062974/12863/27b02183/5b029177Nacfe97c2.jpg',
          },
          {
            name: '狗狗驱虫',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t20458/185/180949929/17000/e497ab0d/5b029195Nf8fa2856.jpg',
          },
          {
            name: '发育补钙',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t20050/357/620274342/12863/27b02183/5b029189Nad217140.jpg',
          },
          {
            name: '肠胃调理',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t17044/89/2583026690/13601/8c7b52b8/5b02905eN5cfbb1f8.jpg',
          },
          {
            name: '羊奶粉',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t17860/23/2649929431/9905/883eafaf/5b029056N42bec6fc.jpg',
          },
          {
            name: '皮肤护理',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t21514/214/189440351/9359/c5d424c9/5b02902bN224a7b8d.jpg',
          },
          {
            name: '美毛护肤',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t18697/312/2669469716/10593/5a2715ee/5b029021N8bf95ce9.jpg',
          },
          {
            name: '口/耳/眼清洁',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t19642/10/2663318676/8312/21316d2d/5b028fe5Nb09c380e.jpg',
          },
          {
            name: '狗窝',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t22255/64/191348276/12608/7c21859f/5b028f8fNf32bb5b3.jpg',
          },
          {
            name: '笼子/围栏',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t17842/302/2653075422/17398/927ae15e/5b028f85N84b2c600.jpg',
          },
          {
            name: '狗厕所/尿垫',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t21598/122/189435697/21472/956b8b66/5b028f7dN4ad0b474.jpg',
          },
          {
            name: '食具水具',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t19342/80/2613106769/6365/58f8e965/5b028f50N1c746c4e.jpg',
          },
          {
            name: '清洁除味',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t20632/240/198556117/8312/21316d2d/5b028f34Nadd686b7.jpg',
          },
          {
            name: '浴液',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t19984/235/623957579/8632/348e4598/5b028f1cN45247040.jpg',
          },
          {
            name: '美容用具',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t17197/99/2636041245/9278/8a0d6af1/5b028ec1Na90de4e8.jpg',
          },
          {
            name: '护毛素',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t22114/314/196226484/7776/c2a476f8/5b028ebaNb3c3b78e.jpg',
          },
          {
            name: '宠物牵引',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t20800/4/193833916/13349/45453dfa/5b028eb1Ncccd5b56.jpg',
          },
          {
            name: '便携包/笼',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t21253/23/188118288/11459/4a26f115/5b028ea2Nf20ffc5d.jpg',
          },
          {
            name: '服饰鞋帽',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t17686/86/2647507454/8341/cbb04d5e/5b028e97N19460b24.jpg',
          },
          {
            name: '外出用品',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t20113/22/627329594/18609/c98f060c/5b028e8dN13032e6c.jpg',
          },
        ],
      },
      {
        name: '猫咪',
        child: [
          {
            name: '猫咪活体',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '猫粮',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '猫零食',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '猫玩具',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '猫爬架/猫抓板',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '猫砂/猫砂盆',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '笼子/围栏',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '猫窝',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '食具水具',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '猫咪驱虫',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '发育补钙',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '肠胃调理',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '羊奶粉',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '皮肤护理',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '美毛护肤',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '口/耳/眼清洁',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '清洁除味',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '浴液',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '美容电器',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '美容用具',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '护毛素',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '宠物牵引',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '便携包/笼',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '服饰鞋帽',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '外出用品',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '水族',
        child: [
          {
            name: '水族活体',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '鱼缸/水族箱',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '鱼粮/饲料',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '过滤器材',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '增氧设备',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '温控照明',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '水族药剂',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '造景装饰',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '清洁用具',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '小宠用品',
        child: [
          {
            name: '小宠活体',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '仓鼠/龙猫用品',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '兔子用品',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '爬行/两栖用品',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '鸟类/昆虫用品',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '宠物服务',
        child: [
          {
            name: '水族服务',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '洗护服务',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '医疗服务',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '寄养服务',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
    ],
  },
  {
    name: '礼品鲜花',
    child: [
      {
        name: '礼品',
        child: [
          {
            name: '工艺摆件',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t12553/278/1342716268/12724/72f04f28/5a1eaacaNa62b05d7.jpg',
          },
          {
            name: '创意礼品',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t12043/267/1384118283/12121/7fc54eea/5a1eaadfNc6daa4ab.jpg',
          },
          {
            name: '婚庆节庆',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t14872/337/210251365/7637/e36a7113/5a2657ceNa1d0e2d8.jpg',
          },
          {
            name: '梳妆礼品',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t13393/5/1337477891/6608/c7fd48fd/5a1eaad4Nf71085f9.jpg',
          },
          {
            name: '礼品定制',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t14110/262/1703014074/7117/bdaf702b/5a2657c0Nb1c5996f.jpg',
          },
          {
            name: '购物卡',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t15265/53/194586431/10154/5af493d4/5a2657d3N8e0c8ccd.jpg',
          },
          {
            name: '书签',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t12562/56/1717282840/2628/8adf643d/5a2657c4N656d5e17.jpg',
          },
          {
            name: '佛道',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t13585/260/1706709746/9439/19fff5ec/5a2657bfN8000909e.jpg',
          },
          {
            name: '熏香',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t7945/95/4335588242/7434/f1027991/5a2657a2N88971c70.png',
          },
          {
            name: '龙泉宝剑',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t13942/196/1646641670/3043/ff25c64d/5a2657b5N4faa56cf.jpg',
          },
          {
            name: '文房',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t15589/37/76479735/8958/d9e1ad99/5a2657c9Nee73a04e.jpg',
          },
        ],
      },
      {
        name: '鲜花',
        child: [
          {
            name: '鲜花',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t13210/115/1364909990/7943/c2e30928/5a1eaaccNf6e91132.jpg',
          },
          {
            name: '干花',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t14608/174/198751995/6183/565a578a/5a2657a2Nf8d15b9a.jpg',
          },
          {
            name: '永生花',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t12655/11/1340666885/7840/ea26a241/5a1eaac7N805e90b7.jpg',
          },
          {
            name: '香皂花',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t13069/119/1340292312/11484/f25dfa3a/5a1eaab1Nb22d6f10.jpg',
          },
          {
            name: '每周一花',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t14311/341/193225472/14354/b4831bc1/5a2657a1N4f5ebf8e.jpg',
          },
          {
            name: '卡通花束',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t12265/243/1719310600/9258/a540de9d/5a26578aN8b3a6323.jpg',
          },
          {
            name: 'roseonly',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t12928/322/1671251926/9099/25ce3ecf/5a26579dN79fa528b.jpg',
          },
          {
            name: 'flowerplus',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t12865/288/1713316685/10544/92e642c5/5a265786N44eff332.jpg',
          },
          {
            name: '野兽派',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t14338/239/191581892/12297/79cab376/5a26577bN2b1ee4ab.jpg',
          },
        ],
      },
      {
        name: '火机烟具',
        child: [
          {
            name: '电子烟',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '烟油',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '打火机',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '烟嘴',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '烟斗',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '烟盒',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '充电打火机',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '电子烟套装',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'Zippo打火机',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
    ],
  },
  {
    name: '农资绿植',
    child: [
      {
        name: '花卉绿植',
        child: [
          {
            name: '花卉',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t13615/257/1187221579/8566/1203946a/5a1bdd89Nac28d508.jpg',
          },
          {
            name: '绿植盆栽',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t11932/362/2606950706/9339/34ddf4e9/5a1bdd83N72924bf0.jpg',
          },
          {
            name: '苗木',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t12337/172/1192004543/7504/bc85798f/5a1bdd89N7c1c3cbf.jpg',
          },
          {
            name: '多肉植物',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t12889/279/1193794170/6942/5fd1f0f0/5a1bdd8dN5d74bd85.jpg',
          },
        ],
      },
      {
        name: '种子',
        child: [
          {
            name: '瓜果类',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t11854/206/2608610926/11359/16925d51/5a1bdd6aNf4a822a5.jpg',
          },
          {
            name: '花草林木类',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t13972/188/1157209068/12079/e171526b/5a1bdd6bNdbeed42b.jpg',
          },
          {
            name: '蔬菜/菌类',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t13300/247/1181995434/11970/7f9906c5/5a1bdd74Nb4795bcd.jpg',
          },
          {
            name: '大田作物类',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t13891/206/1172010085/11328/ca80cced/5a1bdd7fN30b55310.jpg',
          },
        ],
      },
      {
        name: '园林农耕',
        child: [
          {
            name: '小型农机具',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t14929/252/187022012/13663/b68bf49b/5a25fddfN0f5e3d3d.png',
          },
          {
            name: '花盆花器',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t12346/49/1143617497/6749/39508acb/5a1bdd65N8173bea2.jpg',
          },
          {
            name: '基质/营养土',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t16489/100/30592315/7828/b8b9f47e/5a25fdf0Nd5ae2723.jpg',
          },
          {
            name: '资材',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t13258/201/1176708343/7026/f3be2aef/5a1bdd5eN127529bb.jpg',
          },
          {
            name: '农机整机',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t12256/341/1686017377/8809/83e1e712/5a25fde5N8e6cdff8.jpg',
          },
          {
            name: '农机配件',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t15436/212/185613379/14359/34130fbe/5a25fdc5N25ce378a.png',
          },
          {
            name: '农业机械/工具',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t13648/168/1169857733/5792/13990fff/5a1bdd57Nbec35a41.jpg',
          },
          {
            name: '农技服务',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t16156/157/37012897/9000/3f5c887d/5a25fde4N748b408a.jpg',
          },
        ],
      },
      {
        name: '农药',
        child: [
          {
            name: '杀虫剂',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '除草剂',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '杀菌剂',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '杀螨剂',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '植物生长调节剂',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '助剂',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '肥料',
        child: [
          {
            name: '水溶/叶面肥',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '氮/磷/钾肥',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '生物菌肥',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '复合肥',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '有机肥',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '饲料',
        child: [
          {
            name: '预混料',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '全价料',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '浓缩料',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '饲料添加剂',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '兽药',
        child: [
          {
            name: '中兽药',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '西兽药',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '兽用器具',
        child: [
          {
            name: '生产/运输器具',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '兽医器具',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
    ],
  },
  {
    name: '生活旅行',
    child: [
      {
        name: '京东旅行',
        child: [
          {
            name: '机票',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t12256/23/1304410642/16133/f898d909/5a1ea21dN294080d1.png',
          },
          {
            name: '酒店',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t13765/141/1331937539/11328/55cc2c05/5a1ea218N879fd6f5.png',
          },
          {
            name: '火车票',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t13834/196/1332624827/8334/c85e8127/5a1ea212Nf1f7f206.jpg',
          },
          {
            name: '全球签证',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t12373/231/1663279783/17039/10f0ca0d/5a25faa5Nc8e79fea.png',
          },
        ],
      },
      {
        name: '京东生活',
        child: [
          {
            name: '摄影写真',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t12865/218/1369857057/12562/8789eee4/5a1ea156Na8f79a3e.jpg',
          },
          {
            name: '家政保洁',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t12865/232/1347271360/13591/f9957f96/5a1ea15aN9e3344b2.jpg',
          },
          {
            name: '休闲娱乐',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t12388/218/1339750579/12217/1e505b3d/5a1ea151N0bd1061e.jpg',
          },
          {
            name: 'GO免单',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t30157/99/441714634/6397/4b63165e/5bf3e67bN881a87e9.jpg',
          },
        ],
      },
      {
        name: '演出票务',
        child: [
          {
            name: '演唱会',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t13864/234/1312390631/2340/ffee300a/5a1ea197N90dd7626.jpg',
          },
          {
            name: '电影票',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t11983/317/2697352991/4174/b7f7c487/5a1ea19cNd25479c8.png',
          },
          {
            name: '体育赛事',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t12640/314/1320688563/4993/86e04945/5a1ea193Nb66b7827.jpg',
          },
        ],
      },
      {
        name: '通讯充值',
        child: [
          {
            name: '话费充值',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t13735/178/1375418742/2826/ed86162/5a1ea206N8ff854c8.png',
          },
        ],
      },
      {
        name: '游戏服务',
        child: [
          {
            name: '游戏周边',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '单机游戏',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '教育培训',
        child: [
          {
            name: '精品亲子课',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '驾驶培训',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '美食烹饪',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '金融财会',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '京东到家',
        child: [
          {
            name: '京东到家',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
    ],
  },
  {
    name: '奢侈品',
    child: [
      {
        name: '大牌推荐',
        child: [
          {
            name: 'GUCCI',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t13192/35/337607167/1767/134aedaa/5a096448N61d316de.jpg',
          },
          {
            name: 'COACH',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t12229/320/352677721/2166/291bc543/5a096456Ne62331f3.jpg',
          },
          {
            name: 'Armani',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t12340/261/345415853/3124/a40e053f/5a09627eN02dccb80.jpg',
          },
          {
            name: 'TAGHENER',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t12952/48/367769092/6406/f86d3bc2/5a096463Ne4c6d617.jpg',
          },
          {
            name: 'RIMOWA',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t7411/187/4698111625/2658/3baa2c69/5a096455N8c11c891.jpg',
          },
          {
            name: 'MichaelKors',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t11251/209/1756800061/1461/7b5ca3ee/5a096445Naaeb6e80.jpg',
          },
          {
            name: 'CARTIER',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t11581/12/1796955921/2238/a7652feb/5a096443N83e414f6.jpg',
          },
          {
            name: 'PRADA',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t12508/174/362344526/1432/4b43e232/5a096435N41800767.jpg',
          },
          {
            name: 'Ray-Ban',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t11791/260/1804107727/5736/2c0764d3/5a09641eNccd5ba01.jpg',
          },
          {
            name: 'BURBERRY',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t13339/5/355176683/1534/227dcd1d/5a09642dN1433ec90.jpg',
          },
          {
            name: 'FENDI',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t12508/152/355256243/3123/f7582114/5a096426N0ed38668.jpg',
          },
          {
            name: 'SalvatoreFerragamo',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t13789/352/349262706/1317/57b3c6fc/5a096421N1a6e53f3.jpg',
          },
          {
            name: 'TISSOT',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t11152/6/1773717549/5002/e4e15c7d/5a09640fNb39c9cbd.jpg',
          },
          {
            name: 'LONGINES',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t7309/340/4551015860/1841/57590a66/5a0963feNc58e3572.jpg',
          },
          {
            name: 'OMEGA',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t12571/79/350644689/6574/95d244ea/5a096407N833c233b.jpg',
          },
          {
            name: 'MIDO',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t12382/303/343740992/2537/5c22f008/5a096405Nfd6a71ee.jpg',
          },
          {
            name: '周大福',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t11968/138/1807893200/7941/5d3318b9/5a0963e3Nd637eb8c.jpg',
          },
          {
            name: 'TMARK',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t11425/59/1816243291/1826/31576452/5a0963f7Na6ac110d.jpg',
          },
          {
            name: 'ROLEX',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t11494/253/1789709399/2662/2be1163a/5a0963d0N85a7d92b.jpg',
          },
          {
            name: 'BottegaVeneta',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t13777/250/335701486/2411/af4dc2d5/5a0963e4N7265ae76.jpg',
          },
          {
            name: 'Montblanc',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t12664/170/349608831/4030/5e7ff2c3/5a0963bfNd97ac131.jpg',
          },
          {
            name: 'Tiffany',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t11458/3/1783731116/2177/3891da33/5a0963caN3432f15c.jpg',
          },
          {
            name: 'Versace',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t11611/318/1821918327/7510/cb4d083b/5a0963b4Nd307e386.jpg',
          },
          {
            name: 'Bally',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t12355/354/355618849/1716/1ef43b65/5a09639dN91efae07.jpg',
          },
          {
            name: 'ErmenegildoZegna',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'HugoBoss',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'Kenzo',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'Swarovski',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'Pandora',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '周生生',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '点睛品',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'MCM',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'Y-3',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'Longchamp',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'Furla',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'KATESPADE',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'AlexanderMcQueen',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'ToryBurch',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '通灵',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'Dolce&Gabbana',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'LaPerla',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'MOVADO',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'Valentino',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'Dunhill',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'TOUS',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '奢品分类',
        child: [
          {
            name: '瑞士名表',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '箱包',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '钱包',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '服饰',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '腰带',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '太阳镜/镜框',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '配件',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '鞋靴',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '饰品',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '光学眼镜',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '钻石',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '奢华文具',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
    ],
  },
  {
    name: '京东国际',
    child: [
      {
        name: '家居日用',
        child: [
          {
            name: '成人用品',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t11395/156/1783220255/9718/e5eba0ee/5a096ae6N9452a872.jpg',
          },
          {
            name: '精美笔具',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t11980/306/1823977932/6352/21de247/5a096b03N635ede7e.jpg',
          },
          {
            name: '品质厨具',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t11446/115/1813582949/3552/9e1a08b/5a096b0cNf664685e.jpg',
          },
          {
            name: '保温杯',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t11215/132/1779213024/1943/1a109f8d/5a096b16N31251195.jpg',
          },
          {
            name: '保温壶',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t11656/147/1776180452/2098/29158531/5a096b11Ndc446848.jpg',
          },
          {
            name: '随手杯',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t11644/107/1809313914/3565/f1e31960/5a096af2N1b9b7b1b.jpg',
          },
          {
            name: '家居杂货',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t11257/333/1793633404/7199/314a2c04/5a096aebNee32dbf1.jpg',
          },
          {
            name: '净水壶',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t12115/157/349067422/11364/28a9b89a/5a096b1bN0ef73ecd.jpg',
          },
          {
            name: '乳胶枕',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t12094/135/355561463/4718/28f48033/5a096b07N7e7e62c1.jpg',
          },
          {
            name: '笔记本',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t13645/73/338555839/4558/b1ef19ab/5a096afcN6301d4d8.jpg',
          },
          {
            name: '品质家纺',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t11464/194/1775523646/7292/a6c1e49/5a096af7Nee993b82.jpg',
          },
          {
            name: '日用清洁',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t12427/287/369274739/6583/a5fe267e/5a096ae2Nd7ea1ce1.jpg',
          },
        ],
      },
      {
        name: '营养保健',
        child: [
          {
            name: '调节三高',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t13948/50/493011087/4307/2bdb7364/5a0d352bNf557cc69.jpg',
          },
          {
            name: '维生素/矿物质',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t12211/92/510663399/5677/6ef0ec15/5a0d34f4N2a38fa14.jpg',
          },
          {
            name: '美容养颜',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t12544/168/492919177/4825/a5e7e8e7/5a0d354aN59a02c1e.jpg',
          },
          {
            name: '调节免疫',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t12061/167/513214067/4664/6adc0679/5a0d3543Na00b226b.jpg',
          },
          {
            name: '美体塑身',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t13660/117/513286753/4837/86ae65ec/5a0d353bN9930ffb2.jpg',
          },
          {
            name: '骨骼健康',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t11806/308/1879259324/8400/4cfb4f93/5a0d3533N8e2526e6.jpg',
          },
          {
            name: '肠胃养护',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t12142/270/518077345/3927/8a5105e5/5a0d3523N46e876d7.jpg',
          },
          {
            name: '改善睡眠',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t13984/50/518081561/4493/a8e737e3/5a0d351dN823fc30c.jpg',
          },
          {
            name: '肝肾养护',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t12034/197/528491340/4272/933c9420/5a0d3515Naad77271.jpg',
          },
          {
            name: '运动营养',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '明目益智',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '孕期营养',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '数码家电',
        child: [
          {
            name: '电饭煲',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '电动牙刷',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '手机',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '笔记本',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '耳机耳麦',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '平板电脑',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '音箱音响',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '游戏机',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '摄影摄像',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '剃须刀',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '电吹风',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '电水壶',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '美容仪',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '净化设备',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '电脑外设',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '母婴玩具',
        child: [
          {
            name: '奶粉',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '婴儿洗护',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '尿裤',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '营养辅食',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '安全座椅',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '玩具童装',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '婴儿用品',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '宝宝零食',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '妈妈用品',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '汽车用品',
        child: [
          {
            name: '车载电器',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '维修保养',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '美容清洗',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '安全自驾',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '服饰奢品',
        child: [
          {
            name: '运动户外',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '奢品箱包',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '珠宝饰品',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '男装',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '女装',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '童装',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '鞋靴',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '美妆个护',
        child: [
          {
            name: '口腔护理',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '面部护肤',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '洗发护发',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '身体护理',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '女性护理',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '香水彩妆',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '清洁用品',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '钟表',
        child: [
          {
            name: '女表',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '男表',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '儿童手表',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '运动手表',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '电子表',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '情侣表',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '石英表',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '机械表',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '食品',
        child: [
          {
            name: '红酒',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '高端水饮',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '牛奶',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '麦片',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '果汁',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '饼干',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '奶粉',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '果干',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '坚果',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '咖啡',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '速食',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '巧克力',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
    ],
  },
  {
    name: '艺术邮币',
    child: [
      {
        name: '热卖推荐',
        child: [
          {
            name: '邮币',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t14767/274/2600848162/5968/234aaff7/5aa650a3N04dcbfe0.jpg',
          },
          {
            name: '艺术品',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t15085/266/2454153254/2941/a6a67ffd/5aa6509fNa5c0f852.jpg',
          },
        ],
      },
      {
        name: '艺术品',
        child: [
          {
            name: '油画',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t15517/1/2397411512/6493/93b84110/5aa65089N0a8e1b95.jpg',
          },
          {
            name: '版画',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t17182/202/775604307/4147/6abc2305/5aa65084N7ebb4655.jpg',
          },
          {
            name: '水墨画',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t19015/290/771829127/3646/d2bbed6e/5aa65080N2b9d3045.jpg',
          },
          {
            name: '雕塑',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t15130/244/2491748970/3712/802adf9b/5aa65079N299c723b.jpg',
          },
          {
            name: '艺术画册',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t16624/38/746980915/5397/33700c25/5aa65075Ne65c439e.jpg',
          },
          {
            name: '艺术衍生品',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t17065/22/763552685/3145/5f1e5a36/5aa65070Ne610042b.jpg',
          },
        ],
      },
      {
        name: '钱币',
        child: [
          {
            name: '纪念币',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t12532/184/1400830546/8767/5a9dc7f7/5a1fd74bN97f50f10.jpg',
          },
          {
            name: '金银币',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t15436/261/160477256/6798/9550e371/5a254430N1ac36391.jpg',
          },
          {
            name: '纸币',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t12808/201/1464020820/7753/96f9febb/5a1fd752N23206ebf.jpg',
          },
          {
            name: '连体钞',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t12856/171/1436894072/5607/845fc570/5a1fd744N1aac7f51.jpg',
          },
          {
            name: '纪念钞',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t14008/59/1651750766/8993/d527236d/5a254435N4e669411.jpg',
          },
          {
            name: '国库券',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t13165/269/1614672596/8116/5ee9347/5a25442cN5d6ae007.jpg',
          },
          {
            name: '外汇券',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t12700/174/1631028617/4307/eb591595/5a254428Nc3b00c5a.jpg',
          },
        ],
      },
      {
        name: '邮票',
        child: [
          {
            name: '大本册',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '套票',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '大版',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '小版',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '小型张小全张',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '小本票',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '年册',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '普票',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '个性化原票',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '贺年票',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '区民清改加欠',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '港澳票',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '特色分类',
        child: [
          {
            name: '礼品册',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '田村卡',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '邮资封片',
        child: [
          {
            name: '邮资封JF',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '邮资片JP',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '首日封',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '外交封',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '极限片',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
    ],
  },
  {
    name: '二手商品',
    child: [
      {
        name: '特色业务',
        child: [
          {
            name: '拍拍二手',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t1/19736/33/6476/15829/5c53adecEb5282cc8/f6001f8448184cf5.jpg',
          },
          {
            name: '拍拍回收',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t1/26998/4/6486/17489/5c53af67E84ca997a/fc3184ed58e387e6.jpg',
          },
          {
            name: '京东备件库',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t1/8093/40/14346/16062/5c53b062E969bc61d/040e30e816b6d306.jpg',
          },
          {
            name: '拍拍验机',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t1/9141/29/14070/17612/5c53b1e1E465e73e3/f1072b51f8559d77.jpg',
          },
          {
            name: '拍拍夺宝岛',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t1/81768/19/13092/16748/5da55fc3E6bd68552/5e7ea14bbd28c26a.jpg',
          },
        ],
      },
      {
        name: '优品专区',
        child: [
          {
            name: '苹果专区',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t1/22775/21/6554/22514/5c53ec41E40d85051/cfa5a0591c452182.jpg',
          },
          {
            name: '官翻电脑',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t1/23089/3/6424/19782/5c53ece3Efc74c9f3/9798d54212e0f38e.jpg',
          },
          {
            name: '品质家电',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t1/23881/6/6568/19564/5c53ee48E18959ead/f3cba13c1de4b03c.jpg',
          },
          {
            name: '奢品大牌',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t1/11528/19/7322/19615/5c53ef3dE21f0a97f/a703ee0435433e41.jpg',
          },
          {
            name: '轻奢时尚',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t1/25280/20/6451/16946/5c53ef4aE35a75f52/3a9f0a1e0a09a8a8.jpg',
          },
          {
            name: '图书专区',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t1/8436/38/14154/24093/5c53ef58Ed79ebb22/97d8f54725ec18a8.jpg',
          },
        ],
      },
      {
        name: '二手手机数码',
        child: [
          {
            name: '苹果手机',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t1/19539/2/6400/19840/5c53e177Ec5c93cdc/e68427a1d3ac2bbf.jpg',
          },
          {
            name: '安卓手机',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t1/17730/30/6538/19103/5c53e270Eedd82df6/ba6d1b85e5e93e98.jpg',
          },
          {
            name: '手机配件',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t1/30941/18/1574/19528/5c53e279E653bf4a3/c62bdd3fdef35781.jpg',
          },
          {
            name: '单反相机',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t13696/254/1151211093/7591/b44c675b/5a1bc019N7b264fcf.jpg',
          },
          {
            name: '镜头',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t13780/207/1658562290/6573/b400d7e7/5a254094N81bb9428.jpg',
          },
          {
            name: '微单相机',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t12097/333/1635642518/5350/61df1b0a/5a254088N3303eb9b.jpg',
          },
          {
            name: '耳机耳麦',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t15766/101/26590072/7555/4df0f565/5a254090Nb49038fd.jpg',
          },
          {
            name: '游戏机',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t1/25813/3/6420/24676/5c53e0e4E63601964/5385a9ebac494411.jpg',
          },
          {
            name: '智能手表',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t12259/149/1629543709/8107/ce4d756/5a25406dN2e64fe7f.jpg',
          },
          {
            name: '路由器',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '二手家用电器',
        child: [
          {
            name: '冰箱',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '洗衣机',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '平板电视',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '空调',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '厨卫大电',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '厨房小电',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '二手电脑办公',
        child: [
          {
            name: '笔记本',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '平板电脑',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '台式机',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '显示器',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '显卡',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '主板',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: 'CPU',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '键盘',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '鼠标',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '打印机',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '二手钟表奢侈品',
        child: [
          {
            name: '钟表',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '饰品',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '箱包',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '配饰',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '服饰',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '鞋靴',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '二手图书',
        child: [
          {
            name: '教材',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '期刊杂志',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '小说',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '艺术',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '文学',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '文化社科',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '二手推荐',
        child: [
          {
            name: '乐器',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '工程机械',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '拍拍回收',
        child: [
          {
            name: '手机',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '平板电脑',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '笔记本电脑',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '电脑配件',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '摄影摄像',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '智能数码',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '办公设备',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '大家电',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '名包腕表',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '黄金珠宝',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '乐器',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '旧衣物',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
    ],
  },
  {
    name: '特产馆',
    child: [
      {
        name: '热门馆推荐',
        child: [
          {
            name: '宿迁馆',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t11002/27/2624715526/8692/80e56f03/5a1bc8b5N69864532.jpg',
          },
          {
            name: '乌兰察布馆',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t11440/120/2628742550/14055/b48ced49/5a1bc8acNcd8eaecb.png',
          },
          {
            name: '扬州馆',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t11203/153/2587241768/13220/df759f6c/5a1bc8b0Nfd05ac6b.jpg',
          },
          {
            name: '西藏馆',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t12001/217/1671107011/5437/503e0026/5a264b97N45ebfff1.jpg',
          },
          {
            name: '山西馆',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t15619/129/69999347/11657/10eca1e7/5a264b95Na9653cf4.png',
          },
          {
            name: '海南馆',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t15175/38/204100573/10627/c4c75f22/5a264b8fN41628d5a.jpg',
          },
          {
            name: '福建馆',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t13894/286/1687440265/7832/1bd749d4/5a264b89N6a46b1a3.jpg',
          },
          {
            name: '徐州馆',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t15970/309/63989232/10929/4df55570/5a264b83N38b8e7af.jpg',
          },
          {
            name: '泸州馆',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t12130/48/1705520345/9486/764ec300/5a264b7aNc2c7d94f.png',
          },
          {
            name: '平遥馆',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t12574/177/1685917213/13519/217bd74f/5a264b9cN43cb5a42.png',
          },
          {
            name: '砀山馆',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t15487/177/66153173/7210/bee6eb60/5a264ba2N196d09f4.jpg',
          },
        ],
      },
      {
        name: '西北区',
        child: [
          {
            name: '新疆干果',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t12895/14/1200404413/4235/85cde068/5a1bc837N6d12e930.jpg',
          },
          {
            name: '洛川苹果',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t13114/299/1707012771/5852/ccd18143/5a263d67N1a271f47.jpg',
          },
          {
            name: '牦牛食品',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t11047/117/2600276206/5117/8303428a/5a1bc83bNc1d73d98.jpg',
          },
          {
            name: '新疆和田玉',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t12514/97/1668897784/2564/185e7c07/5a263d6eNf956232b.jpg',
          },
          {
            name: '陕西面皮',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t13771/352/1195393818/4340/6a9ba33f/5a1bc831N7c610f74.jpg',
          },
          {
            name: '宁夏枸杞',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t15190/255/194788433/5654/2d18d9a5/5a264734Nb6cc589a.jpg',
          },
          {
            name: '西凤酒',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t12712/246/1720350561/5286/ba41c189/5a26472fN99597423.jpg',
          },
          {
            name: '空心挂面',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t13348/209/1671594074/5178/868b9425/5a26472aNb3e39960.jpg',
          },
          {
            name: '塔城蜂蜜',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t12382/143/1692657430/5086/5609c1bc/5a26469eN505e22bf.jpg',
          },
          {
            name: '岐山醋',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '宁夏羊扒',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '华南区',
        child: [
          {
            name: '台湾零食',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '广式腊味',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '正山小种',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '广西米粉',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '莆田桂圆',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '福鼎白茶',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '安溪铁观音',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '潮汕牛肉丸',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '十八子作',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '华北区',
        child: [
          {
            name: '德州扒鸡',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '渤海海鲜',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '内蒙鲜牛羊肉',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '内蒙牛肉干',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '老北京糕点',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '平遥牛肉',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '天津大麻花',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '山西陈醋',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '山东煎饼',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '沁州黄小米',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '山东樱桃',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '山东阿胶',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '潍坊风筝',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '白洋淀鸭蛋',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '枣夹核桃',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '华中区',
        child: [
          {
            name: '道口烧鸡',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '土家腊肉',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '酱板鸭',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '铁棍山药',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '江西米粉',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '香菇',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '米酒',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '葛粉',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '胡辣汤',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '蜂蜜',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '富硒食品',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '三峡甜橙',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '华东区',
        child: [
          {
            name: '小龙虾',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '上海小吃',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '水果罐头',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '扬州小吃',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '宜兴紫砂',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '高邮鸭蛋',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '亳州牛肉',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '安徽茗茶',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '大闸蟹',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '江苏洋河',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '东北区',
        child: [
          {
            name: '东北三宝',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '辽东海鲜',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '东北山菌菇',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '岫岩玉雕',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '大米杂粮',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '榛子松子',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '延边美食',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '蓝莓饮品',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '西南区',
        child: [
          {
            name: '巴蜀腊味',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '云贵糕点',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '火锅料',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '泸州老窖',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '民族配饰',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '云贵茗茶',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '藏地养生茶',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '巴蜀肉脯',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '贵州佳酿',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
    ],
  },
  {
    name: '京东金融',
    child: [
      {
        name: '金融精选',
        child: [
          {
            name: '借钱',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t12556/91/1381011134/11692/2b7c7582/5a1fd4caN0d72b86f.jpg',
          },
          {
            name: '赚钱',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t12322/300/1427047595/7926/c52c7778/5a1fd4c4Nd4c5cfcc.jpg',
          },
          {
            name: '小白信用',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t12373/112/1388988534/9473/755fcfc0/5a1fd4ceN99c1284d.jpg',
          },
        ],
      },
      {
        name: '理财',
        child: [
          {
            name: '定期理财',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t13402/337/1422898291/8957/70d7a155/5a1fd562N18aa5787.jpg',
          },
          {
            name: '京东小金库',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t12586/185/1407885941/7200/1e1daf9e/5a1fd56cNa92d3770.jpg',
          },
          {
            name: '小白基金',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t12025/78/1448076677/9858/5266090/5a1fd567Ncd4ac955.jpg',
          },
          {
            name: '小白理财',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t15769/18/29075055/7939/8d1d9b33/5a254164N329f4155.jpg',
          },
          {
            name: '黄金',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t12298/13/1722741714/5804/21383486/5a254160Nfd73506e.jpg',
          },
          {
            name: '类固收',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t15040/235/163278768/9510/f0f70de6/5a25415cN40b0b2d3.jpg',
          },
          {
            name: '私募股权',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t13417/115/1673480778/9522/70d99ad2/5a254155N0fac434c.jpg',
          },
          {
            name: '阳光私募',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t13255/250/1708023005/9547/d0f090a9/5a254150Nf8d138c4.jpg',
          },
        ],
      },
      {
        name: '消费',
        child: [
          {
            name: '白条',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t12139/192/1453871875/3647/88c774b5/5a1fd55bN3611ed31.jpg',
          },
          {
            name: '金条',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t12502/348/1411178252/7075/339a0b87/5a1fd545N882d9224.jpg',
          },
          {
            name: '小白卡',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t13246/242/1383878257/8687/5b471a0/5a1fd540Nb9dbbe12.jpg',
          },
          {
            name: '京东支付',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t12202/76/1385668713/9596/ae3a7fee/5a1fd548N338ba10d.jpg',
          },
        ],
      },
      {
        name: '保险',
        child: [
          {
            name: '车险',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '健康',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '意外',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '财产',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '人寿',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '旅行',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '众筹',
        child: [
          {
            name: '出众',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '科技',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '公益',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '美食',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '金融服务',
        child: [
          {
            name: '卡转让',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
    ],
  },
  {
    name: '国际名牌',
  },
  {
    name: '拍卖',
    child: [
      {
        name: '珍品拍卖',
        child: [
          {
            name: '珠宝玉器',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t12616/204/1421804019/2843/e7539b50/5a1fd6b8N8038a821.jpg',
          },
          {
            name: '全民抢拍',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t15148/206/1917168636/9618/edac00f5/5a5db9ebN28e3e8e5.jpg',
          },
          {
            name: '艺术品',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t13000/332/1396758917/3756/ebe26c6f/5a1fd6b1N5eb793a3.jpg',
          },
          {
            name: '文玩收藏',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t13246/282/1416669922/6336/caf113a/5a1fd6aeN586c041f.jpg',
          },
          {
            name: '紫砂陶瓷',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t16186/330/1694073179/3352/e197a7bb/5a5c1b49Na1ecf8f3.jpg',
          },
          {
            name: '茶酒滋补',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t17323/265/83152200/5122/4bed455b/5a5c1b45N9d006f55.jpg',
          },
          {
            name: '奢侈品',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t15772/361/1517117357/3368/178b1b71/5a5c1b40N050691e4.jpg',
          },
          {
            name: '工艺品',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t16864/252/91221287/3383/6a99ffed/5a5c1b3cNc6a7748d.jpg',
          },
          {
            name: '特色',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t14713/294/1862643901/3882/ace0fbbb/5a5c1b36N02d26ff9.jpg',
          },
        ],
      },
      {
        name: '司法拍卖',
        child: [
          {
            name: '机动车',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t18505/240/89469465/2673/9c2939a5/5a5c1b2aN659ad4c3.jpg',
          },
          {
            name: '住宅用房',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t12481/302/1425969577/3672/442571f3/5a1fd696Ne51ecc7c.jpg',
          },
          {
            name: '司法频道',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t12589/239/1432798889/8317/4e2346bd/5a1fd69eNb48a99a4.jpg',
          },
          {
            name: '土地',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t14164/187/1412759432/3863/773bc2af/5a1fd683N8803e02f.jpg',
          },
          {
            name: '机械设备',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t16486/283/1685605269/4496/48d236dd/5a5c1b23Nfca0078e.jpg',
          },
          {
            name: '商业用房',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t18412/206/79610671/4050/b4a89855/5a5c1b1dNf18b5237.jpg',
          },
          {
            name: '工业用房',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t16942/229/84453635/3591/26bd527c/5a5c1b17N0cc01fe1.jpg',
          },
          {
            name: '其他用房',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t19015/224/81432630/3980/14140848/5a5c1b0dNa303fa90.jpg',
          },
          {
            name: '股权',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t19420/233/86079643/4386/51a06747/5a5c1b2fNf56e9e4b.jpg',
          },
        ],
      },
      {
        name: '海关拍卖',
        child: [
          {
            name: '车辆船舶',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t14290/44/1780952385/5394/a5c11a8/5a5db6e5Nce024510.jpg',
          },
          {
            name: '生活物资',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t15976/65/1735877859/9188/f67211dc/5a5db5fdNe6b42acf.jpg',
          },
          {
            name: '机械设备',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t13024/176/1979553126/8860/407ee075/5a5db765N68ad6483.jpg',
          },
          {
            name: '打包处置',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '海关频道',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '工业物资',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '资产拍卖',
        child: [
          {
            name: '资产频道',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
    ],
  },
  {
    name: '房产',
    child: [
      {
        name: '热门房产',
        child: [
          {
            name: '租房',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t21802/74/870691203/20791/42df5f07/5b1a42ceNcb9bb9aa.png',
          },
          {
            name: '最新开盘',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t12553/280/1435440908/8835/b8692d35/5a1fd886Na8745cc3.jpg',
          },
          {
            name: '普通住宅',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t12550/270/1395257360/10309/4ac9a74e/5a1fd882N9c5fb20a.jpg',
          },
          {
            name: '别墅',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t12607/93/1417968807/9071/2249e0b1/5a1fd87aNddc1d9f7.jpg',
          },
          {
            name: '商业办公',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t12715/39/1431690089/7403/dc319401/5a1fd877N84a0bd35.jpg',
          },
        ],
      },
      {
        name: '户型分类',
        child: [
          {
            name: '三居室',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t13627/322/1405747402/4541/738cd8e8/5a1fd865Nffb71dfb.jpg',
          },
          {
            name: '二居室',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t13258/122/1438998394/4181/a4337721/5a1fd869Nde2756ac.jpg',
          },
          {
            name: '一居室',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t13480/18/1384132279/3560/6010f2f4/5a1fd86fN85aaad8e.jpg',
          },
          {
            name: '四居室及以上',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t21601/364/121379310/4140/e0fef47c/5afd7152N829b7e18.jpg',
          },
        ],
      },
    ],
  },
  {
    name: '工业品',
    child: [
      {
        name: '工具仪表',
        child: [
          {
            name: '手动工具',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t1/22027/26/6496/8632/5c528d99E58074f4d/d2223703de1f0d6f.jpg',
          },
          {
            name: '电动工具',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t1/30921/17/1518/15986/5c528d89Ec1396387/e02c69543615fbc9.jpg',
          },
          {
            name: '测量工具',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t1/14772/35/6479/12923/5c528d7bE2886c8ae/a2d39fd38fa97f2d.jpg',
          },
          {
            name: '工具套装',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t1/15998/9/6409/37037/5c528d67Ec07b19b5/b9e8bbb77ae00a1e.jpg',
          },
          {
            name: '气动液压工具',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t1/14302/18/6395/20941/5c528d6fE0ba416a1/0727b4cbfbb13e9f.jpg',
          },
          {
            name: '电工仪表',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t1/26037/40/6449/20406/5c528d3cEfdabac6e/4247653bd3a2c89c.jpg',
          },
          {
            name: '分仪监测',
            img:
              'https://img14.360buyimg.com/focus/s140x140_jfs/t1/29640/32/6515/11855/5c528d2cEe8b58b08/89058c4eb30b1542.jpg',
          },
        ],
      },
      {
        name: '安全防护',
        child: [
          {
            name: '头部防护',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t1/23978/35/6371/18433/5c501d3eE8aa405e0/3f0bf80089f2d7e2.jpg',
          },
          {
            name: '眼脸部防护',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t1/24603/20/6517/15273/5c501d45E9af261cb/1e6d4e0411082bcf.jpg',
          },
          {
            name: '听力防护',
            img:
              'https://img30.360buyimg.com/focus/s140x140_jfs/t1/19414/29/6459/22213/5c501d4aEe5867125/42eac10846a39c14.jpg',
          },
          {
            name: '手部防护',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t1/16518/8/6270/22422/5c501d5cEe6e570aa/e61257ff8b992fe0.jpg',
          },
          {
            name: '身体防护',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t1/26496/2/6469/26688/5c501d61E4825c389/3e765e4ca8e8400e.jpg',
          },
          {
            name: '足部防护',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t1/28236/15/6474/14221/5c501d66Eac8f0d8a/2e6a34a4cf9e5168.jpg',
          },
          {
            name: '坠落防护',
            img:
              'https://img12.360buyimg.com/focus/s140x140_jfs/t1/7852/7/13943/20579/5c501d6aE6c8d1598/1cc627dd93fa3f51.jpg',
          },
          {
            name: '个人卫生',
            img:
              'https://img10.360buyimg.com/focus/s140x140_jfs/t1/30804/28/1528/14856/5c501d72E66c531ee/08bc85d747fb3531.jpg',
          },
          {
            name: '静电无尘',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t1/10694/4/10084/17419/5c501d77E5e4770da/f9420d9d4e912e40.jpg',
          },
        ],
      },
      {
        name: '中低压配电',
        child: [
          {
            name: '断路器',
            img:
              'https://img13.360buyimg.com/focus/s140x140_jfs/t1/28109/21/6399/16228/5c501425E23723537/2d5704d960e66858.jpg',
          },
          {
            name: '保护器',
            img:
              'https://img20.360buyimg.com/focus/s140x140_jfs/t1/18345/16/6431/19451/5c502017E3f2bec6a/a017680e688bd5c2.jpg',
          },
          {
            name: '变压器',
            img:
              'https://img11.360buyimg.com/focus/s140x140_jfs/t1/25081/28/6469/9309/5c5014cbEf6a4b81d/4c6833b56851396b.jpg',
          },
          {
            name: '电容器',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '控制器',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '供电保护系统装置',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '清洁用品',
        child: [
          {
            name: '清洁设备',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '工业擦拭',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '清洁化学品',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '清洁工具',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '洗手间用品',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '地垫及矿棉板',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '吸附用品',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '垃圾处理设施',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '安防用品',
        child: [
          {
            name: '化学品处理/存储',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '消防器材',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '安全器具',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '应急处理',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '监控设备',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '安全警示标识',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '化学品',
        child: [
          {
            name: '胶粘剂',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '润滑剂',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '防锈剂',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '脱模剂',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '油漆涂料',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '化学试剂',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '金属加工液',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '清洗剂',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '工业检测试剂',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '公共设施',
        child: [
          {
            name: '照明',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '流体相关',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '暖通',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '金属加工',
        child: [
          {
            name: '刃具',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '磨具磨料',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '机床',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '钻/铣床',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '小型机械',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '金属加工配件',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '紧固密封件',
        child: [
          {
            name: '密封件',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '紧固件',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '小五金及其他',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '气动液压',
        child: [
          {
            name: '气动元件',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '液压元件',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '实验室用品',
        child: [
          {
            name: '实验室试剂',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '实验室耗材',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '实验室设备',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '动力传动',
        child: [
          {
            name: '轴承及其工具',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '皮带',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '滑轨及其附件',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '标签包装',
        child: [
          {
            name: '包装工具',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '包装耗材',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '标签打印耗材',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '搬运存储',
        child: [
          {
            name: '搬运设备',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '存储设备',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
      {
        name: '焊接用品',
        child: [
          {
            name: '焊接设备',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
          {
            name: '焊接耗材',
            img: 'https://st.360buyimg.com/so/images/category/categorydef.png',
          },
        ],
      },
    ],
  },
];
