<script setup>
import { ref, onMounted } from 'vue';

// 活动时间配置
const targetTime = new Date('2024-12-12T00:00:00+08:00').getTime();
const endTime = new Date('2024-12-13T00:00:00+08:00').getTime();

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

**CNChat 双十二活动🎉**

- 购买月会员，再送10天会员
- 购买季会员，再送20天会员
- 购买年会员，再送30天会员
- Claude 月会员同享赠送10天

注：会员支持叠加，请注意活动时间，提前充值不做补偿