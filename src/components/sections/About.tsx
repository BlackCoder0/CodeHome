'use client';
import React, { useEffect, useRef, useState } from 'react';
import PlanetSystem from "@/components/PlanetSystem";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import DeskLamp3D from "@/lib/three-examples/DeskLamp3D";


const testimonials = [
  {
    quote:
      "时间已经过去太久，已经记不清当时的心情了\n当时有一个比较朦胧的想法，在朋友的介绍下认识了[墨间黑沢](https://space.bilibili.com/24271342/dynamic)老师，很快便有了这第一件衣服\n看着脑子里面的想法从模糊到清晰，再到具体，是一种很奇妙的体验。我加入了很多我自己的喜好：白发、蓝瞳、和一点恰到好处的浅浅微笑\n幻象中诞生的少女从纸上走来，很惭愧，我至今没用为她想好一个合适的名字，既然是二次元的“我”，那就以本名 “阵雨” 暂且称呼吧",
    name: "初始之服",
    designation: "阵雨的第一件衣服",
    src: "assets/oc/oc1.png",
  },
  {
    quote:
      "旗袍的形象很经典，虽其历史不过区区百年，但其展现的温婉曲线美是近乎无可替代的\n由于其发色瞳色，衣服的形象便也非常自然的确定为蓝白色了，青花瓷的一般的少女也应运而生，微微扎起的头发及垂落的鬓尾更将其含蓄而内敛展现地淋漓尽致\n天青色等烟雨，而我在等你",
    name: "旗袍",
    designation: "青花瓷",
    src: "assets/oc/oc2.png",
  },
  {
    quote:
      "其实原本是有死库水的打算，但实在不符合年龄，最后墨间老师画了这种偏水手服风格的泳装\n说真的，我这辈子除游泳课外穿泳装的次数简直屈指可数（大夏天宅空调房不香吗真的是），南方的大火炉实在是太可怕了\n不过阵雨是美少女，美少女是不会被晒黑的（确信）\n相对保守的服饰很好遮住了上身，但空隙间展现的娇小可爱很完美的补足了少女感\n\n※设定上很怕水，刚开始学游泳时很艰难才克服溺水感",
    name: "泳装",
    designation: "正常人谁大夏天去沙滩啊",
    src: "assets/oc/oc3.png",
  },
  {
    quote:
      "出于对影视作品里黑客的印象，加上对编程的喜好，便约了这套黑客服设\n高考完后也上了跟计算机相关的专业，虽然学得杂而不精，但看着想法用逻辑变成现实还是很有成就感\n阵雨这套衣服参考了我喜欢的一些黑客形象：宽松而厚的外套、较为凌乱的头发、以及不健康作息带来的黑眼圈\n...还有大腿绑带，大腿绑带是极好的！\n黑客是不愿意受管教和约束的存在，一个关着的门对于黑客来说是一种挑衅，一个锁着的门对黑客来说是一种侮辱。 \n\n这么飒气的女孩子，谁会想到她的算法课是被老师捞过的呢(*^_^*)",
    name: "黑客服",
    designation: "喂喂，验证码发我一下",
    src: "assets/oc/oc4.png",
  },
  {
    quote:
      "赛车手是比较远离日常生活的形象，这套服设参考了[赛车服远坂凛](https://www.hpoi.net/hobby/36512)形象，经典的皮克外套及充满速度感的花纹，护目镜、手环等配饰也增添了赛车手的气质，少见的高马尾也是我很喜欢的一点。\n在网站开始页面是墨间老师为其绘制的一幅赠图，超！帅！的！",
    name: "赛车服",
    designation: "昨晚我输给一辆AE86，他用惯性漂移过弯，他的车很快，我只看到他有个豆腐店的招牌。",
    src: "assets/oc/oc5.png",
  },
  {
    quote:
      "看起来很像贵族女子学校的校服（不过实际是什么学校我也还没想过）\n深色而典雅的长裙在运动时并不太方便，所以体育课时会换成更方便的款式\n面料舒适，保暖且透气，适合四季穿用\n但是不便清洗，经常不小心弄脏发阵雨只能买多套衣服以备用\n\n※除了校服外，学校对袜子、鞋子及发型也有相应要求，意外严苛",
    name: "校服",
    designation: "贵安",
    src: "assets/oc/oc6.png",
  },
  {
    quote:
      "与初始之服相似，但更精炼大方，不对称的设计使其在人群中很容易脱颖而出\n初始服胸口的山荷叶挂饰被挂到腰间，走路时会随之轻轻摇摆。发型和绑带也换成更干练的，颇显成熟\n阵雨并不太习惯这身衣服，但出乎意料的是收到了众多好评，一改往日傻傻憨态的她以性格里另一面出场，着实吓到了不少人",
    name: "礼服",
    designation: "用于出席重要场合的衣服",
    src: "assets/oc/oc7.png",
  },
  {
    quote:
      "长下摆，对襟而长袖的白大褂，既用来保护实验服下的身体，也表示角色的知性美。\n话是这么说，可后半句在阵雨身上似乎不适用）\n请千万注意不要在实验室外（至少不要在实验楼外）穿着实验服，以避免将沾染的有毒有害物质带出造成污染\n虽不太符合实验规范，但高跟鞋子的不适让她始终提醒自己保持专注。当然，护目镜和扎起头发这两点仍然不能马虎",
    name: "实验服",
    designation: "为什么结果重复不出来啊/(ㄒoㄒ)/~~",
    src: "assets/oc/oc8.png",
  },
];


// 流星雨组件
const MeteorShower: React.FC = () => {
  const [meteors, setMeteors] = useState<Array<{
    id: number;
    delay: number;
    duration: number;
    left: number;
    angle: number;
  }>>([]);

  useEffect(() => {
    // 只在客户端生成随机值，避免水合错误
    // 增加流星数量，并让一部分流星集中在右侧中部和右下部
    const meteorData = Array.from({ length: 16 }, (_, i) => {
      let left;
      if (i < 6) {
        // 右侧中部 60%~90%
        left = 60 + Math.random() * 30;
      } else if (i < 10) {
        // 右下部 70%~100%
        left = 70 + Math.random() * 30;
      } else {
        // 其余随机分布
        left = Math.random() * 100;
      }
      return {
        id: i,
        delay: Math.random() * 10,
        duration: 18 + Math.random() * 14,
        left,
        angle: -30,
      };
    });
    setMeteors(meteorData);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor"
          style={{
            left: `${meteor.left}%`,
            top: `${Math.random() * 100}%`, // 随机起始位置，或指定为某个范围，如 60%~100%
            animationDelay: `${meteor.delay}s`,
            animationDuration: `${meteor.duration}s`,
            transform: `rotate(${meteor.angle}deg)`,
          }}
        >
          <div className="meteor-tail" />
        </div>
      ))}
    </div>
  );
};

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [lampLightOn, setLampLightOn] = useState(true);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  });


  const sectionClass = lampLightOn
    ? 'lamp-light-mobile lamp-light-desktop'
    : 'lamp-off-mobile lamp-off-desktop';

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`relative py-16 bg-black min-h-[1200px] md:min-h-[1400px] lg:min-h-[1300px] no-zoom overflow-hidden ${sectionClass}`}
      style={{ backgroundBlendMode: 'overlay' }}
    >
      {/* 白色流星雨背景效果 */}
      <MeteorShower />
      {/* 响应式布局：移动端顺序为PlanetSystem/"About Me"文字/DeskLamp3D/AnimatedTestimonials */}
      <div className="block md:hidden relative w-full h-[320px] mb-8 z-[200]">
        <PlanetSystem />
      </div>

      {/* 移动端 About Me 标题 */}
      <div className="block md:hidden text-center text-white drop-shadow-2xl relative z-10 mb-16 mt-60 ">
      <h1
          className="text-4xl  font-bold drop-shadow-lg filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.8)] transition-all duration-300 hover:text-yellow-100"
        >
          About Me
        </h1>

        <h2
          className="text-xl font-bold transition-all duration-300 hover:text-yellow-100
               bg-clip-text text-white
               inline-block w-full mt-4 px-15"
        >
          在上方，你可以看见我的互联网生活，以及友链
        </h2>

        <h2
          className="text-xl font-bold transition-all duration-300 hover:text-yellow-100
          bg-clip-text text-white
          inline-block w-full mt-4 mx-4 px-15"
        >
          在下方的是我的自设，以及为她约稿设计的各种衣服
        </h2>
      </div>

      <div className="block md:hidden relative w-full h-[320px] mb-8">
        <DeskLamp3D onToggleLight={setLampLightOn} />
      </div>
      <div className="block md:hidden relative w-full mb-4">
        <AnimatedTestimonials testimonials={testimonials} />
      </div>

      {/* 桌面端布局 */}
      <div className="hidden md:block absolute top-40 md:top-40 left-4 w-60 h-60 md:w-96 md:h-96 z-20">
        <DeskLamp3D onToggleLight={setLampLightOn} />
      </div>



      {/* 内容层 - 位于物理引擎之上，添加阴影效果 - 仅桌面端显示 */}
      <div className="hidden md:block text-center relative z-10 mt-48 text-xl mx-auto max-w-2xl">
        <h1
          className="text-6xl font-bold mb-8 transition-all duration-300 hover:text-yellow-100
               bg-gradient-to-r from-black via-white to-white bg-clip-text text-transparent
               inline-block w-full
               drop-shadow-[2px_2px_4px_rgba(0,0,0,0.6)]"
        >
          About Me
        </h1>

        <h2
          className="text-2xl font-bold transition-all duration-300 hover:text-yellow-100
               bg-gradient-to-r from-black via-white to-white bg-clip-text text-transparent
               inline-block w-full
               drop-shadow-[1px_1px_0_rgba(0,0,0,0.8)] drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]"
        >
          在右侧，你可以看见我的互联网生活，以及友链
        </h2>

        <h3
          className="text-2xl font-bold transition-all duration-300 hover:text-yellow-100
               bg-gradient-to-r from-black via-white to-white bg-clip-text text-transparent
               inline-block w-full
               drop-shadow-[1px_1px_0_rgba(0,0,0,0.8)] drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]
"
        >
          在下方的是我的自设，以及为她约稿设计的各种衣服
        </h3>
      </div>




      {/* 行星系统 - 桌面端 */}
      <div className="hidden md:block absolute top-[-100px] right-[-100px] w-[600px] h-[600px] md:w-[1000px] md:h-[1000px] md:-translate-y-1/4 md:translate-x-1/4 pointer-events-none drop-shadow-2xl filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)] transition-all duration-500 hover:brightness-110">
        <PlanetSystem />
      </div>

      {/* 推荐卡片 - 桌面端 */}
      <div className="hidden md:block absolute bottom-40 md:bottom-20 left-1/2 md:left-20 -translate-x-1/2 md:translate-x-0 w-[90%] md:w-auto z-10 drop-shadow-2xl filter drop-shadow-[0_16px_32px_rgba(0,0,0,0.7)] transition-all duration-300 hover:brightness-105">
        <AnimatedTestimonials testimonials={testimonials} />
      </div>



      {/* 额外的暖光效果 - 仅在台灯开启时显示 */}
      {lampLightOn && (
        <div
          className="absolute top-20 left-20 w-80 h-80 pointer-events-none opacity-20 transition-opacity duration-1000 ease-in-out"
          style={{
            background: 'radial-gradient(circle, rgba(255, 200, 100, 0.3) 0%, rgba(255, 230, 150, 0.1) 50%, transparent 80%)',
            filter: 'blur(30px)',
            animation: 'pulse 3s ease-in-out infinite alternate',
            opacity: 0.2,
            visibility: 'visible',
            transition: 'opacity 1s, visibility 1s'
          }}
        />
      )}

    </section>
  );
};

export default About;