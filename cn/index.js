web({
    lang: 'cn',
    smart_contract_address: 'TCPFHFk9VHjTVVdzK4qFTTUmAyv9VwbJmr',
    api_contract_address: 'TXLJjo63J6iVFJJyxSoPVZf3FxGhfHSTTz',
    rate: 25,
    build_cost: [
        3000, 11750, 44500, 155000, 470000, 950000
    ],
    build_per_hour: [
        4, 16, 62, 220, 680, 1400
    ],
    buildings: [
        '面包厂',
        '茶厂',
        '糖果厂',
        '养蜂场',
        '啤酒厂',
        '香水厂'
    ],
    build_buy_name: [
        '购买面包厂',
        '购买茶厂',
        '购买糖果厂',
        '购买养蜂场',
        '购买啤酒厂',
        '购买香水厂'
    ],
    build_buy_desc: [
        '烤新鲜面包、蛋糕和饼干。低成本，也是一种为您村庄必需的生产。',
        '茶是世界上最受欢迎的饮品。你喜欢喝茶吗？每个人都喜欢喝茶！你村压的居民也不例外。村里没有一个晚上没有茶话会。',
        '糖果、巧克力、果酱和其他生活乐趣的生产。糖果需求很大，因为你村庄里有很多爱吃甜食的人。',
        '蜂蜜是一种令人惊讶的天然产品。蜂蜜买卖增强居民的健康。照顾好居民的长寿。',
        '精酿啤酒生产是一项有利可图的业务。对于您村庄的居民，请选择淡色和浓色品种。',
        '收入最高的精英生产。精致的香水、化妆品和香水是一种为了您村里的富人昂贵的享受。'
    ],
    buy_desc: {
        deposit: '这些资金可用于购买新建筑物，扩大生产并增加利润。',
        withdraw: "您可以随时提取这些资金。如果您的资金不足，您也可以把资金用于您村庄的开发。"
    },
    buy_name: {
        deposit: '买硬币',
        withdraw: '资金提取'
    },
    balance_type: {
        build: '总衡算:',
        deposit: '在您的帐户中有:',
        withdraw: '可以提款款额:'
    },
    count_type: {
        build: '建筑物数量',
        deposit: 'TRON数量',
        withdraw: '硬币数量'
    },
    button_text: {
        build: '购买',
        deposit: '充值',
        withdraw: '提款'
    },
    not_enough: {
        build: '硬币余额不足',
        deposit: 'TRX钱包上的余额不足',
        withdraw: '可用硬币的余额不足。'
    },
    build_card: {
        built: '已建造:',
        profit: {
            hour: '每小时收入:',
            day: '每天收入:',
            month: '每月收入:',
            monthShort: '每月'
        },
        price: '价格:',
        button: '建立',
        pc: '<img src="../images/house-icon.png" style="width: 24px; height: 24px; vertical-align: middle; margin: -4px -2px 0 -4px">'
    },
    confirm: {
        text:  '确认您的Tron钱包中创建的交易',
        successText: "交易已发送",
        failText: "无法创建交易。尝试重新加载页面。",
        cancelText: "执行事务时发生错误。确保您已连接到稳定节点，并且您有足够的Energy或TRX来支付交易费用。",
        rejectText: "交易被您拒绝",
        button: 'OK'
    }
});