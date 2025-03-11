<script setup>
import { ref, onMounted } from 'vue';

// 活动时间配置
const targetTime = new Date('2025-03-011T00:00:00+08:00').getTime();
const endTime = new Date('2025-04-01T00:00:00+08:00').getTime();

// 无活动
// const targetTime = null;
// const endTime = null;

// 格式化时间显示
const formatDate = (timestamp) => {
  if (!timestamp) return '暂无设置';
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${year} 年 ${month} 月 ${day} 日 ${hours}:${minutes}`;
};

const formattedTargetTime = ref(formatDate(targetTime));
const formattedEndTime = ref(formatDate(endTime));

// 活动状态和倒计时展示
const activityStatus = ref('');
const countdown = ref('');
const statusColor = ref('');
let interval = null;

// 倒计时逻辑
const startCountdown = () => {
  const updateCountdown = () => {
    const now = new Date().getTime();

    if (!targetTime) {
      activityStatus.value = '暂无活动';
      countdown.value = '';
      statusColor.value = '#999999';
      return;
    }

    if (now < targetTime) {
      const timeDiff = targetTime - now;
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
      
      activityStatus.value = '距离活动开始还有：';
      countdown.value = `${days} 天 ${hours} 小时 ${minutes} 分钟 ${seconds} 秒`;
      statusColor.value = '#ff9900';
    } else if (now >= targetTime && now <= endTime) {
      const timeDiff = endTime - now;
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
      
      activityStatus.value = '距离活动结束还有：';
      countdown.value = `${days} 天 ${hours} 小时 ${minutes} 分钟 ${seconds} 秒`;
      statusColor.value = '#ff4d4f';
    } else {
      activityStatus.value = '活动已结束';
      countdown.value = '';
      statusColor.value = '#999999';
      clearInterval(interval);
    }
  };

  updateCountdown();
  interval = setInterval(updateCountdown, 50);
};

onMounted(() => {
  startCountdown();
});
</script>

# 促销活动

::: tip 活动时间
- 开始时间：<span style="color: #1890ff; font-weight: bold;">{{ formattedTargetTime }}</span>
- 结束时间：<span style="color: #1890ff; font-weight: bold;">{{ formattedEndTime }}</span>
:::

<div :style="{ color: statusColor, fontSize: '16px', marginTop: '20px' }">
  <span>{{ activityStatus }}</span>
  <span style="font-weight: bold; font-size: 18px;">{{ countdown }}</span>
</div>

 ## 活动内容

**CNChat 推广活动 🎉**  
推荐好友，赚取返利，畅享 AI 体验！  

### 📢 活动规则
 - 推荐好友使用 CNChat（[cn.ai1.bar](https://cn.ai1.bar)）
 - 好友成功开通会员，你和好友都可**各获得付款金额 10% 的返利！**

### ⏳ 活动时间
即日起 **至 2025 年 4 月 1 日 00:00（以好友付款时间为准）**

### 💰 参与方式
1️⃣ 邀请好友访问 [cn.ai1.bar](https://cn.ai1.bar) 并开通会员。

2️⃣ 好友成功付款后， [联系我](https://cn.jerryz.com.cn/guide/contact) 并提供注册邮箱进行确认。

3️⃣ 确认成功后，你和好友都将获得付款金额 10% 的返利！