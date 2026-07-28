// 站内原生文章：英文界面读英文翻译，中文界面读创始人的中文原文。
// 中文正文是 Lynn 的原文（仅把原稿里挤在段落中的小标题拆出来）；英文由品牌声音译出。

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string }
  | {
      type: "img";
      src: string;
      alt: string;
      width: number;
      height: number;
      caption?: string;
    };

export type ArticleFootnote = {
  label: string;
  href?: string;
};

export type ArticleLocaleContent = {
  category: string;
  title: string;
  body: ArticleBlock[];
  footnotes: ArticleFootnote[];
};

export type InsightsArticle = {
  slug: string;
  author: string;
  initial: string;
  en: ArticleLocaleContent;
  zh: ArticleLocaleContent;
};

export const insightsArticles: InsightsArticle[] = [
  {
    slug: "when-ai-can-do-everything",
    author: "Lynn",
    initial: "L",
    en: {
      category: "Founder essay",
      title: "When AI can do everything, what can education still do?",
      body: [
        {
          type: "p",
          text: "This weekend I listened to a podcast episode about AI and education that I really liked. Before I introduce it, though, something from many years ago flashed into my mind. It was the summer after Year 4 of primary school, and I was staying at my aunt's house. One day in the park, my cousins and I were piling up stones in the sand when an old man crouched down and started talking with us. A lot of what he said left me wide-eyed at that age. One thing stayed. A song called Mice Love Rice was everywhere that year, and everyone loved singing the line \"I love you, I love you, the way mice love rice.\" He said: what mice feel for rice is not love, it is stealing food. Real love should not be about grabbing and consuming. Later, two young men cycled past and called out \"Professor X!\". That was the first time I learned that the same thing can be seen, and questioned, from a completely different angle. It planted a very small seed in me."
        },
        {
          type: "p",
          text: "The podcast I heard this weekend was from SV101. The guest was Jun Liu, founder of 7EDU and Leadways School. She has worked in education for more than twenty years, from China to the United States, and in the end, unhappy with the education she found in Silicon Valley, she started her own school. Her very first sentence made me stop: in the age of AI, what matters most is not solving problems but finding them. Hearing that, I suddenly understood. This was what the old man had been sharing with me all those years ago. A question can be redefined."
        },
        { type: "h2", text: "Finding the problem" },
        {
          type: "p",
          text: "We are trained from childhood to solve problems. But Jun Liu says this is out of date in the age of AI. AI solves problems faster than people do. What is genuinely scarce is: what deserves to be solved? Why does this matter? What is wrong with the current solution?"
        },
        {
          type: "p",
          text: "She gave the example of lunch. At school, students vote on what most needs improving about lunch. She also takes students to the supermarket to spot problems and think about how to fix them, then give the feedback directly to the manager. At first I took this as a classroom activity. Then I realised it is training agency."
        },
        {
          type: "p",
          text: "What is agency? It is the belief that \"I can see a problem, name it, and push for change.\" Not waiting for someone else to solve it, not complaining and leaving it there, but \"maybe I can do something about this.\" That goes deeper than learning to analyse a problem. Analysis is a skill; agency is a belief. Yet for many of us, even what counts as a problem has always been defined by someone else. The boss says this is the problem, so we solve it. The exam says this is the key point, so we memorise it."
        },
        { type: "h2", text: "The trouble with systematic education" },
        {
          type: "p",
          text: "The podcast questioned something many people avoid touching: does traditional, systematic education really help a child's potential? Many creative people are not products of the system at all. They succeeded because they stepped outside its habits of thought."
        },
        {
          type: "p",
          text: "Traditional education works like an assembly line. The goal is for every child to meet a certain \"quality standard\": maths up to standard, English up to standard, PE up to standard. What comes off the line is a standard part."
        },
        {
          type: "p",
          text: "The podcast was not dismissing foundations. The maths curriculum at Leadways draws on competition-level thinking, and the humanities teaching is solid too. But the point is this: knowledge and skills are the foundation, not the purpose. The real world does not need standard parts. And the biggest problem with systematic education is not what it teaches, but the hidden message it sends: life has standard answers."
        },
        {
          type: "p",
          text: "Stay in that system long enough and you start assuming, without noticing, that there must be a correct path, a standard way of doing things. In the real world that habit becomes painful, because the real world is full of problems with no standard answer. Often it is not even clear what the problem is. If we are trained from childhood to wait for a problem to be assigned and then solve it, then even with all the knowledge and skills in hand, we may not dare to ask: is this a question that matters to me?"
        },
        {
          type: "p",
          text: "Jun Liu says the AI era changes by the minute, and what children need is not \"learn the system first, apply it later\" but continuous learning and constant adapting. To me, adapting is not only learning new things. It is daring to question old systems and old authorities. That takes a kind of psychological safety: I am allowed not to know, allowed to make mistakes, allowed to challenge both the question and the answer. Systematic education does exactly the opposite. It rewards being right, punishes being wrong, and does not encourage questioning."
        },
        {
          type: "p",
          text: "This reminded me of something else. Over the years I have met many exceptionally capable and intelligent people, and their emotional lives are rarely easy either."
        },
        {
          type: "quote",
          text: "The logic of meritocracy may earn plenty of rewards early in life, and it tricks us into believing that reason and intelligence can solve almost everything. But at the more complicated stages of life, facing relationships, loss, illness, death, that method starts to fail. What hurts more is this: when you find you have already done everything you were \"supposed\" to do, the good university, the good job, even a good relationship, and the distress is still there, and it cannot be \"solved,\" the torment is all the greater."
        },
        {
          type: "p",
          text: "This may be the most hidden cost of systematic education: it teaches us how to succeed, but not how to be."
        },
        { type: "h2", text: "On values" },
        {
          type: "p",
          text: "Jun Liu says Leadways puts particular weight on values education at primary age. Through games, children choose between and weigh different values: justice, kindness, honesty. They judge, scenario by scenario, whether an action fits a value, until the values become their own."
        },
        {
          type: "p",
          text: "When a child does something wrong, the school does not say \"you broke the rules.\" It asks, \"which of your values did this go against?\" She explains the difference. \"You broke the rules\" is external control; right and wrong are defined by an outside standard. \"This went against your values\" is internal drive; right and wrong are defined by your own value system."
        },
        {
          type: "p",
          text: "Many people think self-discipline means forcing yourself to do things you do not want to do. But self-discipline is really this: your behaviour is consistent with your values. When you genuinely hold a value, keeping to it requires no \"control.\" Someone who truly prizes honesty finds lying painful in itself. They do not need to stop themselves from lying."
        },
        {
          type: "p",
          text: "The point of values education is not to tell children \"these are the correct values,\" but to teach them how to weigh values against one another. Because the dilemmas of the real world are rarely a choice between good and evil. They are conflicts between one good and another."
        },
        { type: "h2", text: "When AI enters education, what can we still teach?" },
        {
          type: "p",
          text: "The podcast's view is clear: AI is the greatest tool for personalised education there has ever been. But it is a teaching assistant, not the teacher."
        },
        {
          type: "p",
          text: "Leadways uses AI everywhere it helps: student tracking systems, personalised practice on Khan Academy, ChatGPT for summarising and extending. AI takes on a great deal of the repetitive work, which gives teachers more time to notice how each child is really doing. But the school is equally clear: the emotional connection between teacher and student is something AI cannot do."
        },
        {
          type: "p",
          text: "If education were only the transfer of knowledge, AI could indeed replace teachers, and do it better. But the heart of education is not transferring knowledge. It is sparking curiosity, forming values, and building a sense of connection. The future may look like \"AI gives the lesson, the teacher guides\": AI handles the knowledge, and the teacher inspires, empathises, connects. That actually asks more of teachers, not less. A teacher can no longer be just a porter of knowledge. They also have to be the one who lights the lamp."
        },
        {
          type: "p",
          text: "Speaking of that sense of connection, I want to return to the beginning. I do not know whether, in an environment that runs on efficiency, KPIs, and rational trade-offs, a scene like the one twenty years ago could still happen: a university professor seeing a few girls playing with stones, and choosing to crouch down and talk with them for a whole afternoon. Nor do I know whether, inside timetables and work schedules packed to the edge, there is still an idle afternoon that lets you wander into a park for no reason at all, and, in a child's life, accidentally become the \"seed\" moment they will treasure."
        },
        {
          type: "p",
          text: "Greatness, like goodness, does not come from planning and calculation."
        }
      ],
      footnotes: [
        {
          label: "The podcast episode: SV101, in Chinese",
          href: "https://sv101.fireside.fm/180"
        },
        {
          label: "Originally published in Chinese on WeChat",
          href: "https://mp.weixin.qq.com/s/vw2Kv6NsNu7bf4CyT_zyjw"
        }
      ]
    },
    zh: {
      category: "创始人文章",
      title: "当 AI 什么都会，教育还能做什么？",
      body: [
        {
          type: "p",
          text: "这周末听了一期很喜欢的关于 AI 和教育的播客。但在介绍之前，我脑子里突然闪现出多年前的一件事。大概小学四年级的暑假，我在姑妈家住。有天在公园，我跟表姐们在沙地里堆石头块，一位老人蹲下来跟我们聊了起来。老人说的很多话让当时那个年纪的我听起来经常瞠大了眼睛。其中一个是：那时候很流行一首《老鼠爱大米》，大家都爱唱那句歌词“我爱你，爱着你，就像老鼠爱大米”。他说，其实老鼠对大米不是爱，那是偷食。真正的爱不应该是抢夺和消耗。后来有两个骑自行车的年轻人路过，大喊了一声“x教授”。那是我第一次知道，同一件事可以有完全不同的观看和发问角度。从那之后在我心里种了一颗很小的种子。"
        },
        {
          type: "p",
          text: "这周末听的这期播客，来自硅谷101，嘉宾是刘君，7EDU 和 Leadways School 的创始人。她做了20多年教育，从中国到美国，最后因为对硅谷教育不满意，自己办了学校。她说的第一句话就让我停下来：AI 时代，最重要的不是解决问题，而是发现问题。听到这里，我突然明白了：老人当年在跟我分享，也是这个。原来问题是可以被重新定义。"
        },
        { type: "h2", text: "发现问题是什么" },
        {
          type: "p",
          text: "我们从小受的训练就是解决问题。但刘君说，这在 AI 时代过时了。AI 解决问题比人快。真正稀缺的是：什么值得被解决？为什么这件事重要？现有方案哪里不对？"
        },
        {
          type: "p",
          text: "她举了个午餐的例子。在学校让学生投票选出午餐最需要改进的地方。还有带学生去超市，发现超市有哪些问题，怎么改进，让他们直接向超市负责人反馈。我一开始以为这只是个课堂活动。后来我意识到，这是在培养 agency。"
        },
        {
          type: "p",
          text: "Agency 是什么？就是相信“我能看到问题、说出问题、推动改变”。不是等别人解决，也不是抱怨完就算了，而是“也许我可以做点什么”。这比学会分析问题要深。分析是技能，agency 是信念。但我们这代人，很多时候连什么是问题都是别人定义的。老板说这是问题就去解决，考试说这是重点就去背。"
        },
        { type: "h2", text: "系统化教育的困境" },
        {
          type: "p",
          text: "播客里质疑了一个很多人不敢碰的话题：传统的系统教育真的能帮助孩子的潜能吗？很多有创造力的人并不是系统化教育的受益者，反而是因为“跳出了思维定势”。"
        },
        {
          type: "p",
          text: "传统教育像是流水线，目标是让每个孩子都符合某个“质量标准”。数学要达标、英语要达标、体育要达标。最后生产出来的是“标准件”。"
        },
        {
          type: "p",
          text: "播客里也不是全盘否定基础教育。Leadways 的数学课程融入了奥数竞赛理念，人文科学也有扎实的基础。但重点是：知识和技能是基础，不是目的。因为现实世界需要的不是标准件，但系统化教育最大的问题不是它教的内容，而是它传递的隐含信息：人生有标准答案。"
        },
        {
          type: "p",
          text: "人在这个体系里待久了，会下意识地认为：一定有个“正确的路径”，一定有个“标准做法”。这种思维定势，到了真实世界就会很痛苦，因为真实世界充满了没有标准答案的问题。不仅没有标准答案，很多时候连“什么是问题”都不清楚。如果我们从小被训练成“等待被分配问题然后解决它”，那即使掌握了所有知识和技能，我们可能也不敢发问“这是对我重要的问题吗”。"
        },
        {
          type: "p",
          text: "刘君说，AI 时代瞬息万变，孩子需要的不是“先系统学习再应用”，而是持续学习、不断适应。我理解的适应，不只是学新东西，更是敢质疑旧的系统和权威。这需要一种心理安全感：我可以不知道、可以犯错、可以挑战问题和答案。但系统化教育恰恰相反。它奖励正确，惩罚错误，不鼓励质疑。"
        },
        {
          type: "p",
          text: "这让我想到另外一个点：这些年接触到很多非常优秀和聪明的人，发现大家情绪困扰也都并不轻松。"
        },
        {
          type: "quote",
          text: "“优绩主义”的那套逻辑，在人生早期或许还能得到很多奖励，让我们误以为理性和聪明可以解决几乎所有事。但到了更复杂的人生阶段，比如面对关系、失去、疾病、死亡，这套方法就有些失效了。更痛苦的是：当发现自己已经做到了所有“应该做的事”（上了好大学、找到好工作、甚至拥有一段很好的关系），但依然会有情绪困扰，而且这种困扰无法被“解决”时，那种折磨反而更大。"
        },
        {
          type: "p",
          text: "这可能是系统化教育最隐蔽的代价：它教会我们如何成功，却没教我们 being。"
        },
        { type: "h2", text: "价值观这件事" },
        {
          type: "p",
          text: "刘君说，Leadways 在小学阶段特别重视价值观教育。通过游戏让孩子选择、权衡不同的价值观：正义、善良、诚实……在不同场景中判断行为是否符合价值观，最终内化。"
        },
        {
          type: "p",
          text: "当孩子做错事，不说“你违反了规则”，而是问“这违背了你的哪些价值观”。她解释：“你违反了规则”是外部控制，行为的对错由外部标准定义。“这违背了你的价值观”是内在驱动，行为的对错由你自己的价值体系定义。"
        },
        {
          type: "p",
          text: "很多人以为自律就是“逼自己做不想做的事”。但自律其实是：你的行为和你的价值观一致。当你真心认同某个价值观，遵守它就不需要“控制”。比如一个真正重视诚实的人，说谎对他来说本身就是痛苦的，不需要“控制自己不说谎”。"
        },
        {
          type: "p",
          text: "价值观教育的重点不是告诉孩子“这些是对的价值观”，而是教会他们如何在价值观之间做权衡。因为真实世界的困境，往往不是善恶之间的选择，而是善与善之间的冲突。"
        },
        { type: "h2", text: "当 AI 进入教育，我们还能教什么？" },
        {
          type: "p",
          text: "播客里的观点很清晰：AI 是最伟大的个性化教育工具。但它是助教，不是老师。"
        },
        {
          type: "p",
          text: "Leadways 学校充分利用 AI：学生追踪系统、Khan Academy 的个性化练习、ChatGPT 辅助总结拓展。AI 帮老师做了大量重复性工作，让老师有更多时间关注每个孩子的真实状态。但也强调：师生之间的情感连接，是 AI 做不到的。"
        },
        {
          type: "p",
          text: "如果教育只是“传递知识”，那 AI 确实可以取代老师，而且做得更好。但教育的核心不是传递知识，而是激发好奇心、培养价值观、建立连接感。未来教育可能是“AI 主讲，老师做引导者”的模式。AI 负责知识传递，老师负责启发、共情、建立连接。这其实对老师提出了更高的要求：不能再只是“知识的搬运工”，而也要成为“引灯人”。"
        },
        {
          type: "p",
          text: "说到这种连接感，我又想回到开头。不知道在当下这个处处讲高效、KPI 和理性权衡的环境里，还会不会发生20年前那样的一幕：有个大学教授看到几个玩石头的小女孩，愿意蹲下来跟她们聊一个下午。也不知道在被安排得满满当当的课程和工作表里，是否还有一个无所事事的午后，让你毫无目的地走到公园玩耍，然后在一个小孩的一生中意外发生了那个值得珍藏的“种子”时刻。"
        },
        {
          type: "p",
          text: "伟大和美好一样，都不来自于计划和计算。"
        }
      ],
      footnotes: [
        {
          label: "播客来源：硅谷101",
          href: "https://sv101.fireside.fm/180"
        },
        {
          label: "首发于微信公众号",
          href: "https://mp.weixin.qq.com/s/vw2Kv6NsNu7bf4CyT_zyjw"
        }
      ]
    }
  },
  {
    slug: "what-algorithms-cannot-see",
    author: "Lynn",
    initial: "L",
    en: {
      category: "Founder essay",
      title: "The things algorithms cannot see in education",
      body: [
        {
          type: "p",
          text: "A few days ago I went to an education technology meet-up about how AI can help students learn. The discussion was richer than I expected. Some people are using reinforcement learning to optimise question setting and teaching paths; others are using large language models to track what a student knows. One speaker mentioned a hugely ambitious project: a team trying to collect one million recordings of real lessons to build an open dataset. You could feel the field seriously exploring what is possible."
        },
        {
          type: "p",
          text: "But when it was over, one basic question surfaced in my head: what exactly are the algorithms and the data measuring?"
        },
        { type: "h2", text: "What does \"getting it\" mean?" },
        {
          type: "p",
          text: "One concept that came up is called knowledge tracing: using an algorithm to judge whether a student has mastered a particular idea. The logic of the traditional models is simple. Answer correctly and you know it; answer wrongly and you do not. Now people are starting to use large language models for this, feeding a student's answer history to the model and asking it to judge whether the student has really understood. It sounds more intelligent. I still have my doubts."
        },
        {
          type: "p",
          text: "One student can use the formula to work out the time of free fall and pass the exam. But ask him why a feather and an iron ball land at the same moment in a vacuum, and he may have no answer, because all he learned was to substitute the numbers. He never built a real understanding of gravity. Another student may calculate a little more slowly, but she can explain the principle behind it, and when the question changes shape she finds a way through. These two kinds of \"knowing\" are completely different things. In front of a standardised test, their scores can be identical."
        },
        {
          type: "p",
          text: "Technology can capture behaviour, but it struggles to reach the texture of understanding. A large language model processes language. It can analyse what a student said, but it cannot necessarily understand what the student was thinking. Because language can bypass thought. A paragraph recited from memory and a paragraph genuinely understood can sound exactly the same. We have all seen it: the retelling is fluent, and two follow-up questions later it falls apart."
        },
        { type: "h2", text: "Guiding is not a cure-all" },
        {
          type: "p",
          text: "The meet-up also touched on how many companies, Google and OpenAI among them, are training \"Socratic\" teaching AIs that do not give the answer directly, but use questions to guide students to discover it themselves. It sounds ideal. In practice it is not so simple."
        },
        {
          type: "p",
          text: "Socratic guided dialogue has a hidden premise: the student already has the relevant foundations in their head, and only needs them drawn out. But what about a genuine beginner? Ask someone who has never written code, \"how do you think you would get a computer to repeat something?\", and they have no framework for thinking about the question at all. They do not know what a variable is. They do not know what a loop is. At that point, further questioning is not guidance, it is torment. Telling them directly, \"this is called a loop, and here is the syntax,\" may be the real help."
        },
        {
          type: "p",
          text: "Genuinely good teaching should be able to judge: does this student, at this moment, need to be told directly or guided to explore? What that requires is not a fixed \"teaching persona\" but a live choice of strategy. And that judgement is very hard for an algorithm, because it requires sensing a person's state. Right now, are they curious or defeated? Stuck on the concept, or just forgetting one detail? If all you analyse is answers, you are still a long way from education."
        },
        { type: "h2", text: "Can education be standardised?" },
        {
          type: "p",
          text: "One more discussion kept me thinking for a long time. Someone said the education AI field needs a unified evaluation standard, the way image recognition has the famous ImageNet dataset: everyone measuring with the same ruler, so different systems can be compared."
        },
        {
          type: "p",
          text: "But \"is this a cat or a dog\" can have an objective answer. What about \"what is good education\"? Exam scores? Creativity? Critical thinking? A lifelong appetite for learning? These goals even pull against one another. A system that chases scores with all its might tends to sacrifice intrinsic motivation and creativity. And the reverse is true too."
        },
        {
          type: "p",
          text: "My own view is that the aims of education should themselves be argued over, not standardised. Different philosophies of education should have their own evaluation frameworks, competing with and criticising one another, rather than having their diversity wiped out by one unified standard. Once everyone optimises toward a single metric, the things that cannot be measured are systematically ignored. Is that not exactly the trap exam-driven education is in today?"
        },
        { type: "h2", text: "The limits of the technology" },
        {
          type: "p",
          text: "None of this is to say technology is useless, or that exams should be abolished. I think precisely that they should have their own place. Technology can improve efficiency, extend scale, and personalise recommendations. That value is real. But we have to face one thing honestly: the subject of education is a human being, and a human being cannot be fully quantified."
        },
        {
          type: "p",
          text: "One speaker also mentioned a figure: fewer than 5% of the education technology products on the market have ever validated their effectiveness. Not tested and found wanting; simply never tested at all. Perhaps that is exactly where the problem lies. \"Learning better\" is too hard to define, so everyone turns to what is easy to measure: time in the app, completion rate, correctness rate. Slowly, these metrics turn from means into ends. The product \"succeeds,\" and whether the student actually learned anything, nobody knows."
        },
        {
          type: "p",
          text: "Perhaps this is the humility education technology needs to keep: admitting that some of the things that matter most are exactly the ones we do not yet know how to measure. And that is not only education technology's problem."
        }
      ],
      footnotes: [
        {
          label: "Originally published in Chinese on WeChat",
          href: "https://mp.weixin.qq.com/s/28g9xlJ8u0-KCrHv9Ob5Vg"
        }
      ]
    },
    zh: {
      category: "创始人文章",
      title: "教育里那些算法看不见的东西",
      body: [
        {
          type: "p",
          text: "前几天去参加了一场教育科技的交流会，聊的是 AI 怎么帮助学生学习。讨论的内容比我预期的丰富。有人在研究用强化学习优化出题和教学路径，有人在用大语言模型追踪学生的知识状态。其中一个演讲者还提到一个野心很大的项目：有团队正在尝试收集一百万节真实课堂录像，建立开放数据集。能感觉到这个领域正在认真地探索各种可能性。"
        },
        {
          type: "p",
          text: "但听完之后，我脑子里冒出一个根本的问题：算法和数据在衡量什么？"
        },
        { type: "h2", text: "“懂了”是什么意思" },
        {
          type: "p",
          text: "分享中提到一个概念叫“知识追踪”，就是用算法判断学生是否掌握了某个知识点。传统模型的逻辑比较简单：做对了就是会，做错了就是不会。现在有人开始用大语言模型来做这件事，把学生的答题记录喂给模型，让它判断“这个学生是不是真的懂了”。听起来更智能了，但我还是有点疑惑。"
        },
        {
          type: "p",
          text: "一个学生能用公式算出自由落体的时间，考试过关。但你问他“为什么羽毛和铁球在真空中同时落地”，他可能答不出来。因为他只学会了代入数字，没有建立起对重力的真实理解。另一个学生可能算得慢一点，但他能解释背后的原理，遇到变化的题目也能想办法。这两种“会”是完全不同的东西。但在标准化测试面前，他们的分数可能一模一样。"
        },
        {
          type: "p",
          text: "技术可以捕捉行为，但很难触及认知的质地。大语言模型处理的是语言，它能分析学生“说了什么”，但不一定能理解学生“在想什么”。因为语言可以绕过思考。背下一段话和真正理解一段话，说出来可能一模一样。我们都见过那种，复述得很流畅，但追问两句就露馅的情况。"
        },
        { type: "h2", text: "“引导”不是万能的" },
        {
          type: "p",
          text: "交流会中还聊到很多公司如 Google 和 OpenAI 都在训练“苏格拉底式”的教学 AI，不直接给答案，用提问引导学生自己发现。听起来很理想。但其实实践起来也并不简单。"
        },
        {
          type: "p",
          text: "“苏格拉底”引导式对话有个隐藏前提：学生脑子里已经有相关的知识基础，只是需要被引导出来。可对一个真正的初学者呢？你问一个从没写过代码的人“你觉得怎么让计算机重复做一件事”，他根本没有框架去思考这个问题。不知道什么是变量，不知道什么是循环。这时候追问不是引导，是折磨。直接告诉他“这叫循环，语法是这样”，可能才是真正的帮助。"
        },
        {
          type: "p",
          text: "真正好的教学，应该能判断：这个学生在这个时刻需要直接告知还是引导探索？这需要的不是一个固定的“教学人格”，而是动态的策略选择。但算法要做出这种判断很难。因为它需要感知一个人的状态，他此时是好奇还是挫败？是卡在概念上还是只是忘了一个细节？只分析答案，那离教育还很远。"
        },
        { type: "h2", text: "教育能被标准化吗" },
        {
          type: "p",
          text: "还有一个讨论让我想了很久。有人说教育 AI 领域需要一个统一的评估标准，像图像识别领域有个著名的 ImageNet 数据集那样，大家都用同一把尺子衡量，才能比较不同系统的好坏。"
        },
        {
          type: "p",
          text: "但“这是猫还是狗”可以有客观答案，“什么是好的教育”呢？考试分数？创造力？批判性思维？终身学习的热情？这些目标彼此之间甚至是有张力的。一个拼命追求分数的系统，往往会牺牲掉内在动机和创造力。反之也是。"
        },
        {
          type: "p",
          text: "我倒觉得，教育的目标本身就应该是被争论的，而非被标准化的。不同的教育理念应该有各自的评估框架，彼此竞争、互相批评，而不是被一个统一标准消灭多样性。一旦所有人都朝一个指标优化，那些测不出来的东西就会被系统性地忽略。这难道不是现在应试教育的困境吗？"
        },
        { type: "h2", text: "技术的边界" },
        {
          type: "p",
          text: "我这里并不是说技术没用，或者是说考试应该废除。我恰恰认为它们应该有自己的位置。技术能优化效率、扩大规模、提供个性化推荐。这些都是真实的价值。但我们得诚实面对一件事：教育的对象是人，而人没办法被完全量化。"
        },
        {
          type: "p",
          text: "还有分享者提到一个数据：市面上只有不到 5% 的教育科技产品做过效果验证。不是验证了发现没用，而是根本没人去验证。也许这正是问题所在。“学得更好”太难定义了，所以大家就转向容易测量的东西：用户时长、完成率、正确率。慢慢地，这些指标从手段变成了目的。产品“成功”了，但学生有没有真的学到东西，没人知道。"
        },
        {
          type: "p",
          text: "也许这正是教育科技需要一直保持的谦逊：承认有些最重要的东西，恰恰是我们还不知道怎么测量的。但这也不只是教育科技的问题。"
        }
      ],
      footnotes: [
        {
          label: "首发于微信公众号",
          href: "https://mp.weixin.qq.com/s/28g9xlJ8u0-KCrHv9Ob5Vg"
        }
      ]
    }
  }
];

const jackyEssay: InsightsArticle = {
  slug: "when-the-barrier-to-execution-falls-to-zero",
  author: "Jacky",
  initial: "J",
  en: {
    category: "Founder essay",
    title: "When the barrier to execution falls to zero",
    body: [
      {
        type: "p",
        text: "When I hear someone say that today's AI is a giant bubble, I usually take it as praise of the highest order. Every genuinely disruptive technology goes through this curve before it spreads everywhere: doubted by people, force-ripened by capital. Once you have personally felt your own efficiency multiplied a hundredfold, you understand that calling this moment an \"AI industrial revolution\" is no exaggeration, and there is nothing alarmist in it."
      },
      {
        type: "p",
        text: "The world is now changing fast enough to cause a kind of physical vertigo."
      },
      {
        type: "p",
        text: "Five years ago today, if I had a deadline that meant working through the night, my task list was usually very clear: write a few backend APIs, run the tests, watch the screen return its green pass signal, and I could close the laptop and go to sleep in peace. Creation back then was typed out line by line, in an intensely linear rhythm, with my energy strictly bound to the passing of physical time."
      },
      {
        type: "p",
        text: "Back to today, five years later. Same kind of night, same kind of deadline, and my workload has become building a complete official website from zero."
      },
      {
        type: "p",
        text: "It is far more than a simple prototype, and far beyond the kind of Vibe Coding that never leaves the demo stage. It is a real site that can go live, with complete logic and all kinds of complex material. And in the process, my role changed completely. I shed the identity of the bricklaying programmer at the bottom of the stack and became an exhaustingly attentive foreman and architect."
      },
      {
        type: "p",
        text: "Most of the actual code and material was handed to AI to generate, but today's intelligence has not yet reached full autonomy. You have to keep watching it, correcting its direction, handling its hallucinations. By the end of that one night, I was more drained than I ever was writing code by hand."
      },
      {
        type: "p",
        text: "Follow this trend and you can peer at the future. Today a human still has to watch the machine finish a website; five years from now these tools will be stronger and more autonomous, and even the act of \"watching\" can be dropped. Five years ago I could not have predicted today's way of working. But today, I can already roughly foresee how humans and machines will work together five years from now."
      },
      { type: "h2", text: "Time, folded flat" },
      {
        type: "p",
        text: "This hundredfold gain in efficiency seeped into every corner of life long ago."
      },
      {
        type: "p",
        text: "I never used to enjoy reading books. Traditional reading demands enormous patience: you follow the author's logic page by page, hunting for the information you need. Today, the friction of acquiring knowledge has dropped close to zero."
      },
      {
        type: "p",
        text: "Take a physical book at home. My process has become extremely simple. I ask my dad to photograph the contents page and the key chapters and send them to me, and I upload the photos straight into an IMA knowledge base. Within ten minutes I am in a deep conversation with the ideas in that book, extracting exactly the understanding I need."
      },
      {
        type: "p",
        text: "The same thing happened to my podcast workflow. Editing, cutting, organising the timeline: fiddly tasks that used to consume a great deal of labour now all go to Google AI Studio. Once I have set the framework and the SOP for the process, everything that remains is pure execution. Different AI models have different strengths, some at long-text understanding, some at detailed proofreading. The human job becomes recognising each tool's strengths and snapping them together into a workflow, like building blocks."
      },
      { type: "h2", text: "The deep end of collaboration, and a container for thinking" },
      {
        type: "p",
        text: "People inside this industry feel everything is hurtling forward. But when I turn around and look at the people near me, I see a huge gap in understanding. For 99% of people, using AI still means the first level: one-way \"human asks, AI answers.\" You give an instruction, it returns a passage of text, the conversation ends."
      },
      {
        type: "p",
        text: "If you treat it as nothing more than a substitute for a search engine, that is an enormous waste of compute. As I see it, collaboration between humans and AI divides cleanly into five levels."
      },
      {
        type: "p",
        text: "Beyond the most basic Q&A, you can enter the second level and let it help you reflect: before asking, work out what your real question actually is. At the third level you can prompt in reverse, letting the AI question you first, or audit its own output. The fourth level is delegation: like the conductor of an orchestra, you dispatch different AIs to carry out specialist tasks and report back. And at the fifth level, you can set two different AIs debating each other, and in the friction between machine and machine, ideas surface that human effort alone could never reach."
      },
      {
        type: "p",
        text: "In teaching and sharing, I have tried to distil the intuitions scattered through daily, high-frequency use. What I found is that when people fail to get good output from AI, it is mostly not because they lack technical understanding. It is because they have not worked out what they actually want."
      },
      {
        type: "p",
        text: "AI never corrects muddled human thinking. It only multiplies the muddle."
      },
      {
        type: "p",
        text: "To solve this, I distilled a prompting framework called SCOPE. It has completely outgrown the early prompt methods of two or three years ago. It no longer teaches you to feed the machine rigid step-by-step instructions; it teaches you to set up a clear semantic container."
      },
      {
        type: "p",
        text: "You no longer need to tell the AI \"how to think.\" You only need to define, clearly, the boundaries of success: what your role is, what the full context is, what the final objective is, what form the output should take, and where the lines are that must never be crossed. As AI becomes more and more agentic, clear boundary definition matters far more than fiddly operational steps."
      },
      { type: "h2", text: "Re-estimating human value in the age of the algorithm" },
      {
        type: "p",
        text: "Use AI at its deepest level and you will, unavoidably, meet a final question. It is a question that tormented me for many years."
      },
      {
        type: "p",
        text: "As a child I studied Go for ten years. In that black-and-white world, as long as you kept training, you could build a solid set of coordinates for good and bad, right and wrong. Then in 2016, AlphaGo defeated humanity outright on the board. What I felt in that moment was not simple shock but a deep weightlessness. The coordinates of value you spent ten years building suddenly lose their anchor."
      },
      {
        type: "p",
        text: "Later I took a master's degree in AI and joined hackathons and competitions at the frontier. As large language models exploded, I watched AI take over code, painting, video. Every leap of the technology repeated the weightlessness AlphaGo first gave me."
      },
      {
        type: "p",
        text: "Once a person ties their worth to one concrete executable skill, being replaced is only a matter of time."
      },
      {
        type: "p",
        text: "If technology has driven the barrier to execution down to zero, what exactly is left for humans? After these years of practice, my conclusion is: Tools change, Creators remain. The tools will keep changing, but the value of the creator is kept forever."
      },
      {
        type: "p",
        text: "Any software interface you have mastered today, even particular prompting tricks, may be completely obsolete next year. What stays is what machines cannot create from nothing."
      },
      {
        type: "p",
        text: "Machines are superb at deduction: give one a theory and it can instantly unfold it into countless concrete cases and scenes. What is genuinely scarce in humans is induction: whether, in a plain and noisy physical world, you can notice a phenomenon and shape it into a question."
      },
      {
        type: "p",
        text: "Can you spot a real pain point in daily life? Can you raise a question that is genuinely valuable and sharp enough? And faced with an ocean of AI-generated options, can you make the judgement that is most human and most on target?"
      },
      { type: "h2", text: "A system that lags, and a steady handing-down" },
      {
        type: "p",
        text: "Seeing these trends clearly, I have turned more of my attention to young people and begun exploring education."
      },
      {
        type: "p",
        text: "In the adult world, many people have already been set hard by the old evaluation system. We are used to hunting for standard answers, used to learning a craft along a fixed path and trading that craft for pay."
      },
      {
        type: "p",
        text: "But the young people of the next era are born into a world where \"if you can think it up, AI can help you build it.\" In a world like that, the traditional education system looks badly out of date. If schools keep grading them on execution, using a single standard answer to erase their diversity, that is not only a waste; it is stripping away, with our own hands, the cards they will need to survive the future."
      },
      {
        type: "p",
        text: "Education in China still has a long way to go. Much of the time, the biggest problem with systematic education is not what it teaches but the hidden message it sends: life has standard answers. The real world not only has no standard answers; often it is not even clear what the real question is."
      },
      {
        type: "p",
        text: "So I do not want to teach them how to use any particular AI tool. Tools are just the process; AI is just the medium. What I want to give them is an environment where they can try, fail, and experiment. In the course of building a real project, they discover the boundaries of the tools for themselves, and feel for themselves what it is like to turn a vague idea into something real."
      },
      {
        type: "p",
        text: "Good education is never about telling you what to do. It guides you to think from the inside out and to discover for yourself. Teaching a child to ask questions is really teaching them to observe things carefully and to describe what they see."
      },
      {
        type: "p",
        text: "At its heart, this kind of education is a steady handing-down."
      },
      {
        type: "p",
        text: "We hand them, early, what we ground out of countless real projects: what we learned about working with people, our instincts about taste, our understanding of how to break out of information cocoons. So that when they one day face, alone and unavoidably, a world completely reshaped by AI, they will have a steadiness inside. They will know that however the tools evolve, as long as they keep the ability to ask questions and make judgements, they will not be easily discarded."
      },
      {
        type: "p",
        text: "At a stage like this, when the old order keeps dissolving and the new rules are not yet fully written, clear-eyed observation means far more than blind anxiety. Facing algorithms that evolve by the day, I prefer to see them as a mirror: they keep stripping away the mechanical properties we thought were important, and force us to look for the purest value of being human."
      },
      {
        type: "quote",
        text: "1. When machines fully unlock the ceiling on efficiency, what is the floor that decides where things actually go?"
      },
      {
        type: "quote",
        text: "2. If the cost of execution approaches free, how should we re-price a singular, good question?"
      },
      {
        type: "quote",
        text: "3. Looking back at today from five years in the future: of what we are doing right now, how much is real creation, and how much is just pretending to be busy?"
      }
    ],
    footnotes: [
      {
        label: "Originally published in Chinese on Xiaohongshu",
        href: "http://xhslink.com/o/1p3DoRzQ1KQ"
      }
    ]
  },
  zh: {
    category: "创始人文章",
    title: "当执行的门槛降为零",
    body: [
      {
        type: "p",
        text: "听到有人说现在的 AI 是一个巨大的泡沫时，我通常会觉得这其实是一种最高级别的赞赏。任何真正具有颠覆性的新技术在全面铺开之前，都会经历这样一个被人质疑、被资本催熟的曲线。当你亲身体验过个人效率被成百倍地放大之后，你就会明白，把当下称为“AI 工业革命”绝对没有唬人，也没有任何危言耸听的成分。"
      },
      {
        type: "p",
        text: "世界变化的速度已经快到让人产生一种生理上的眩晕感。"
      },
      {
        type: "p",
        text: "五年前的今天，如果我有一个需要熬夜赶工的 deadline，我的任务清单通常很明确：把几个后端的 API 写好，跑一遍测试，看到屏幕上返回绿色的通过信号，我就可以安心合上电脑去睡觉。那时候的创造是一行一行敲出来的，呈现出一种极其线性的节奏，人的精力被物理时间的流逝严格绑定。"
      },
      {
        type: "p",
        text: "回到五年后的今天。同样是一个晚上的 deadline，我的工作量变成了从零到一全部搓出一个完整的官网。"
      },
      {
        type: "p",
        text: "它远超一个简单的 prototype，也远超那些仅仅停留在演示阶段的 Vibe Coding。它是一个真实可以上线、拥有完整逻辑、涵盖各种复杂素材的实体网站。在这个过程里，我的角色发生了彻底的改变。我褪去了底层垒砖程序员的身份，转变成了一个极其耗费心力的监工和架构师。"
      },
      {
        type: "p",
        text: "虽然大部分具体的代码和素材都交给了 AI 去生成，但目前的智能化程度还没有达到完全自治的水平。你必须一直盯着它，随时纠正它的方向，处理它的幻觉。这一个晚上下来，心力交瘁的程度甚至远超当年自己手写代码。"
      },
      {
        type: "p",
        text: "我们完全可以顺着这个趋势去窥探未来的样子。今天还需要人盯着它完成一个网站，五年后，这些工具的能力会变得更强，智能化程度会更高，人连“盯着”这个动作都可以省去了。五年前我完全无法预测到今天的生产方式，但在今天，我已经能大概预见到五年后人类与机器共事的状态。"
      },
      { type: "h2", text: "那些被彻底压缩的时间折叠" },
      {
        type: "p",
        text: "这种百倍效率的提升，早就渗透到了生活的方方面面。"
      },
      {
        type: "p",
        text: "以前我其实挺不爱看书的。传统的阅读方式要求人具备极高的耐心，你需要顺着作者的行文逻辑，一页一页地去寻找你需要的信息。但在今天，获取知识的阻力被降到了无限低。"
      },
      {
        type: "p",
        text: "比如家里有一本实体书，我的处理流程变得极其简单。我让我爸拿手机拍下目录和核心章节的照片发给我，将这些图片直接上传到 IMA 知识库里。仅仅花十分钟时间，我就能跟这书里的思想完成一次深度的对话，直接抽取我最需要的认知。"
      },
      {
        type: "p",
        text: "同样的事情也发生在我的播客制作流程里。编辑、剪辑、梳理时间线，这些曾经需要耗费大量人工的琐碎任务，现在我都交给了 Google AI Studio。只要我把前期的框架和流程的 SOP 制定下来，剩下的事情就是纯粹的执行。不同的 AI 模型有它们各自擅长的切入点，有的擅长长文本理解，有的擅长细节校对。人的工作变成了识别不同工具的特长，然后像搭积木一样把它们拼接到工作流里。"
      },
      { type: "h2", text: "协作的深水区与思维的容器" },
      {
        type: "p",
        text: "在这个行业里的人会觉得一切都在狂飙突进，但当我转过头去观察身边的环境时，我发现了一个巨大的认知断层。99% 的人对 AI 的使用，依然停留在第一层，也就是单向的“人问 AI 答”。你给出一个指令，它返回一段文字，对话结束。"
      },
      {
        type: "p",
        text: "如果你仅仅把它当成一个搜索引擎的替代品，那其实是对算力的极大浪费。在我的认知里，人与 AI 的协作是可以清晰划分为五个层级的。"
      },
      {
        type: "p",
        text: "当你跨越了最基础的问答，你可以进入第二层，让它帮你做自我反思，在提问前先理清自己真正的问题到底是什么。到了第三层，你可以进行逆向提示，让 AI 先向你提问，或者让它自己审计自己的输出。第四层是委派，你像交响乐团的指挥一样，调度不同的 AI 去执行专业任务并向你汇报。而到了第五层，你可以让两个不同的 AI 互相辩论，在机器与机器的摩擦中，浮现出那些你单凭人力永远无法触及的灵感。"
      },
      {
        type: "p",
        text: "在做教学和分享的过程中，我试图把这些散落在日常高频使用中的直觉提炼出来。我发现，很多人得不到好的 AI 输出，本质上不是因为不够懂技术，而是因为没有想清楚自己到底要什么。"
      },
      {
        type: "p",
        text: "AI 从来不会修正人类混乱的思维，它只会成倍地放大这种混乱。"
      },
      {
        type: "p",
        text: "为了解决这个问题，我总结出了一套 SCOPE 提示词框架。它完全脱胎于两三年前那些早期的提示法，不再是教人如何一步步给机器下达死板的指令，而是教人如何设定一个清晰的语义容器。"
      },
      {
        type: "p",
        text: "你不再需要告诉 AI“你应该怎么思考”，你只需要明确地定义出成功的边界：你的角色是什么，所有的背景上下文是什么，最终的客观目标是什么，你需要怎样的呈现形式，以及绝对不能触碰的底线在哪里。当 AI 越来越具备自主智能（Agentic）的时候，清晰的边界定义，远比琐碎的操作步骤重要得多。"
      },
      { type: "h2", text: "从算法降维中重估人的价值" },
      {
        type: "p",
        text: "当你把 AI 用到最深层的时候，你会不可避免地遇到一个终极的问题。这其实是一个折磨了我很多年的问题。"
      },
      {
        type: "p",
        text: "小时候我学了十年的围棋。在那个黑白世界里，人只要不断训练，就能建立起一套关于好坏对错的坚固坐标。直到 2016 年，AlphaGo 在赛场上彻底击败了人类。那一刻我体会到的不是单纯的震惊，而是一种深深的失重感。你花了十年建立的价值坐标，突然失去了原本的锚点。"
      },
      {
        type: "p",
        text: "后来我去读了 AI 相关的硕士，参加了许多前沿的极客松和竞赛。随着大语言模型的爆发，我看到 AI 全面接管了代码、绘画、视频。每一次技术的跃升，都在重复当年 AlphaGo 带给我的失重感。"
      },
      {
        type: "p",
        text: "人一旦把自己的价值绑定在某一项具体的执行技能上，被替代就只是时间问题。"
      },
      {
        type: "p",
        text: "既然技术把执行的门槛降到了零，人类到底还剩下什么？经过这几年的实践，我得出的结论是：Tools change, Creators remain。工具会一直在变，但创作者的价值会被永远保留。"
      },
      {
        type: "p",
        text: "任何你今天熟练掌握的软件界面，甚至某些特定的提示词技巧，在明年可能就会彻底作废。但留下来的，是那些机器无法无中生有的东西。"
      },
      {
        type: "p",
        text: "机器极其擅长推演法，只要你给它一个理论，它能迅速推演到无数个具体的现象和场景中。但人类真正稀缺的是归纳法，是你能不能在平淡无奇、充满杂音的物理世界里，观察到一个现象，然后把它归纳成一个问题。"
      },
      {
        type: "p",
        text: "你能不能在日常生活中发现一个痛点？你能不能提出一个真正有价值、足够锐利的问题？在面对海量 AI 生成的方案时，你能不能做出那个最符合人性、最切中要害的判断？"
      },
      { type: "h2", text: "被滞后的系统与平稳的传承" },
      {
        type: "p",
        text: "认清了这些趋势，我也把目光更多地放在了青少年身上，开始做一些教育相关的探索。"
      },
      {
        type: "p",
        text: "在成年人的世界里，很多人已经被旧的评价体系固化了。大家习惯了去寻找标准答案，习惯了按照既定的路径去学习一门手艺，依靠这门手艺去换取报酬。"
      },
      {
        type: "p",
        text: "但下一个时代的年轻人，他们一出生就面对着一个“只要你能想出来，AI 就能帮你做出来”的世界。在这样的世界里，传统的教育系统显得极其滞后。如果学校依然在用考核执行力的方式去评价他们，用唯一的标准答案去消灭他们的多样性，这不仅是一种资源浪费，更是在亲手剥夺他们在未来生存的底牌。"
      },
      {
        type: "p",
        text: "国内的教育还有很长的一段路要走。很多时候，系统教育最大的问题不是它教的内容，而是它传递的隐含信息：人生有标准答案。但真实世界不仅没有标准答案，甚至连什么是真正的问题都不清楚。"
      },
      {
        type: "p",
        text: "所以，我并不想去教他们某一个具体的 AI 工具怎么用。工具只是过程，AI 只是媒介。我更想给他们提供一个可以去试错、去实验的环境。在动手做一个真实项目的过程中，让他们自己去发现工具的边界，自己去体会把一个模糊的想法变成现实的成就感。"
      },
      {
        type: "p",
        text: "好的教育一定不是教你去做什么，而是引导你由内而外地去思考，去自己发现。培养一个孩子会提问，其实就是培养他认真观察事物现象、描述现象的能力。"
      },
      {
        type: "p",
        text: "这种教育的本质，其实是一种平稳的传承。"
      },
      {
        type: "p",
        text: "把我们在无数次项目实战中摸爬滚打得出的关于人际协作的经验，关于审美的偏好，关于如何突破信息茧房的认知，提前交给他们。当他们在未来不可避免地要独自面对那个被 AI 彻底重塑的世界时，他们心里会有一个底气。他们会知道，无论工具怎么进化，只要自己还保持着提出问题和做出判断的能力，就不会被轻易淘汰。"
      },
      {
        type: "p",
        text: "在这样一个旧秩序不断瓦解、新规则尚未完全建立的阶段，保持清醒的观察比盲目的焦虑要有意义得多。面对每天都在进化的算法，我更愿意把它看作是一面镜子，它在不断剥离掉那些我们以为很重要的机械属性，逼着我们去寻找人类本身最纯粹的价值。"
      },
      {
        type: "quote",
        text: "1. 当效率的上限被机器彻底解锁，什么才是那个决定事物走向的下限？"
      },
      {
        type: "quote",
        text: "2. 如果执行的成本趋近于免费，我们该如何重新定价一个独特的好问题？"
      },
      {
        type: "quote",
        text: "3. 站在五年后回望今天，我们现在正在做的事情里，有多少是真正的创造，又有多少只是在假装忙碌？"
      }
    ],
    footnotes: [
      {
        label: "首发于小红书",
        href: "http://xhslink.com/o/1p3DoRzQ1KQ"
      }
    ]
  }
};

insightsArticles.push(jackyEssay);

// 品牌声音：以 Bold Ideas Lab 官方名义发布的内容（区别于创始人个人文章）
export const labArticles: InsightsArticle[] = [
  {
    slug: "ai-lesson-that-starts-by-turning-ai-off",
    author: "Bold Ideas Lab",
    initial: "B",
    en: {
      category: "From Bold Ideas Lab",
      title: "An AI lesson that starts by turning the AI off",
      body: [
        {
          type: "p",
          text: "In June we completed our first in-school pilot at Plymouth College: an AI design and technology lesson."
        },
        {
          type: "p",
          text: "Plymouth College, founded in 1877 in Devon in the south-west of England, is an independent day and boarding school known internationally for its swimming programme, which has produced Olympians and world champions."
        },
        {
          type: "img",
          src: "/media/insights/lab/plymouth-pilot/plymouth-college-sign.webp",
          alt: "Plymouth College entrance sign",
          width: 1170,
          height: 656,
          caption: "Plymouth College, Devon"
        },
        {
          type: "p",
          text: "We worked with around 30 Year 9 students. The brief: design a prototype to help the Year 7s arriving in September (around 11 to 12 years old) settle into their first week at a new school. The building tool was Google AI Studio. By the end of one lesson, the class had made 22 working prototypes, small apps you can open and use in a few clicks. One student built a tool for reporting bullying, so that a new student who is being picked on can tell their form tutor in a way that feels less frightening."
        },
        {
          type: "img",
          src: "/media/work/projects/bullying-reporter.png",
          alt: "SPEAKUP, a student-built prototype for reporting bullying",
          width: 1790,
          height: 1040,
          caption: "SPEAKUP: one of the 22 prototypes, built to report bullying in a way that feels less frightening"
        },
        {
          type: "p",
          text: "If the story ended there, this would be just another lesson where children made things with AI. But those 22 prototypes are the part of the lesson we value least."
        },
        {
          type: "p",
          text: "The prototypes are not the most important outcome of this pilot. The most important outcome is that the path each student took to reach their prototype was recorded."
        },
        { type: "h2", text: "Step one: turn the AI off" },
        {
          type: "p",
          text: "Before touching AI, students worked on paper. Each of them drew on their own real memories of starting school to write down what the true problem was. Only then did they ask the AI, set its answers against what they already knew, understand what an average answer is, and decide what to keep, what to change, and what to throw away. AI was one tool on the workbench, and the students decided when to pick it up. The AI on-off cards and the student design logs ran through the whole design process."
        },
        {
          type: "img",
          src: "/media/insights/lab/plymouth-pilot/ai-switch-card.webp",
          alt: "The AI switch card: on, off, check. At every step, you decide.",
          width: 1600,
          height: 888,
          caption: "The AI switch: ON, OFF, or CHECK. At every step, the student decides."
        },
        {
          type: "img",
          src: "/media/insights/lab/plymouth-pilot/designers-sheet.webp",
          alt: "The First Week designer's sheet used in the lesson",
          width: 1276,
          height: 1702,
          caption: "The designer's sheet. The golden rule: AI is on your bench, you decide when to pick it up."
        },
        { type: "h2", text: "How they treated the AI's answers" },
        {
          type: "p",
          text: "What you get this way is evidence of judgement, not just evidence of output. One student rejected the AI's assumption that homework would be a new student's biggest worry in the first week; for her, it was finding someone to sit with in the dining hall. Another would not let a revision app delete the hard questions, because the difficulty is where the learning lives. A third saw the flaw in the AI's points-based scheme for making friends in welcome week: it would rush a new student into social choices."
        },
        { type: "h2", text: "Using AI and directing AI are two different abilities" },
        {
          type: "p",
          text: "Our curriculum is built around exactly this distinction: using AI and directing AI are two different abilities. A student who can write prompts for a model may not be able to tell when the model gets their real life wrong. That second ability sits where AI literacy meets critical thinking. It is the one we most want to teach, and it can be trained."
        },
        {
          type: "p",
          text: "The same gap shows up in teachers. In the lunchtime CPD session with 11 teachers, using AI was already routine for most. Building workflows and systems with AI, and directing several AI agents at once, was much less familiar. That distance is the same for adults as it is for students."
        },
        { type: "h2", text: "What should a workshop leave a school?" },
        {
          type: "p",
          text: "A workshop should not end with a few screenshots and a thank-you message. After the lesson, we analysed the 30 handwritten design logs and the prototypes built from them, and put together a report for the school: what the children care about most (organising homework, finding classrooms, fitting in, feeling safe), and where they made their own judgements about the AI."
        },
        {
          type: "p",
          text: "So what the day leaves behind is a record the school can actually read: what the children thought, and what they judged. It can be reviewed, shared internally, and used for later planning. Judgement should belong to the people in the classroom. What we do is make it easier to see, organise, and discuss once the lesson is over."
        },
        {
          type: "p",
          text: "The design of the student workshop, including the theme, the AI on-off cards, the student design logs, and the teacher guidance cards, was led and designed by co-founder Lynn. The in-room support for the student workshop, the facilitation of the teacher CPD, and the post-lesson report were owned and delivered by co-founder Jacky."
        },
        {
          type: "p",
          text: "If you are a school, a parent, or an educator and would like to see the student AI on-off and design log sheets we used, message us. We are happy to share them."
        }
      ],
      footnotes: [
        {
          label: "Also published on LinkedIn",
          href: "https://www.linkedin.com/posts/bold-ideas-lab_in-june-we-ran-our-first-in-person-school-activity-7479938001783996416-RE7y"
        }
      ]
    },
    zh: {
      category: "来自敢想实验室",
      title: "一堂 AI 课，我们让它从关掉 AI 开始",
      body: [
        {
          type: "p",
          text: "六月，我们在 Plymouth College 完成了第一次进校试点：AI 设计技术课程。"
        },
        {
          type: "p",
          text: "Plymouth College 在英格兰西南的德文郡，创校于 1877 年，是一所走读兼寄宿的独立私校，以游泳项目闻名国际，培养过奥运选手和世界冠军。"
        },
        {
          type: "img",
          src: "/media/insights/lab/plymouth-pilot/plymouth-college-sign.webp",
          alt: "Plymouth College 校门",
          width: 1170,
          height: 656,
          caption: "Plymouth College，德文郡"
        },
        {
          type: "p",
          text: "这次和我们一起工作的是约 30 名 Year 9 学生。任务是：为九月即将入学的 Year 7 新生（约 11 至 12 岁），设计一个帮助他们适应新学校第一周生活的原型作品。搭建工具是 Google AI Studio。一节课结束时，全班做出了 22 个可运行的原型，都是能直接打开、点几下就能用的小应用。比如有个学生做了一个上报霸凌的小工具，让新生遇到被欺负的情况时，可以用一种不那么可怕的方式告诉自己的班主任。"
        },
        {
          type: "img",
          src: "/media/work/projects/bullying-reporter.png",
          alt: "学生原型 SPEAKUP：上报霸凌的小工具",
          width: 1790,
          height: 1040,
          caption: "22 个原型之一：SPEAKUP，用一种不那么可怕的方式上报霸凌"
        },
        {
          type: "p",
          text: "如果故事讲到这里，它只是又一节「孩子用 AI 做出了东西」的课。但这 22 个作品，是这节课里我们最不看重的部分。"
        },
        {
          type: "p",
          text: "原型作品不是这次试点最重要的部分。最重要的，是学生如何走到作品的那条路径被记录了下来。"
        },
        { type: "h2", text: "第一步，先把 AI 关掉" },
        {
          type: "p",
          text: "在碰 AI 之前，学生先在纸上工作。每个人先凭自己刚入学时的真实记忆，写下真正的问题是什么；然后才去问 AI，把 AI 的答案和自己知道的对照，从而理解什么是平均值，以及最终决定留下什么、改什么、扔掉什么。AI 是工作台上的一件工具，学生自己去决定什么时候拿起来。整个设计过程，AI 开关卡和学生设计记录表贯穿始终。"
        },
        {
          type: "img",
          src: "/media/insights/lab/plymouth-pilot/ai-switch-card.webp",
          alt: "AI 开关卡：ON / OFF / CHECK，每一步由你决定",
          width: 1600,
          height: 888,
          caption: "AI 开关卡：ON / OFF / CHECK，每一步由学生自己决定"
        },
        {
          type: "img",
          src: "/media/insights/lab/plymouth-pilot/designers-sheet.webp",
          alt: "课上使用的 First Week 学生设计记录表",
          width: 1276,
          height: 1702,
          caption: "学生设计记录表。黄金法则：AI 在你的工作台上，你决定什么时候拿起它。"
        },
        { type: "h2", text: "他们怎么对待 AI 给的答案" },
        {
          type: "p",
          text: "这样得到的，是判断的证据，而不只是产出的证据。有学生不接受 AI 的预设，它以为作业是新生第一周最大的担忧，而对她来说是在食堂找人一起吃饭；有学生不允许复习类 app 删掉难题，因为难度本身就是学习意义所在；还有学生看出了 AI 设计的开学周交友积分制设计的弊端，它会催促一个新生仓促做出社交选择。"
        },
        { type: "h2", text: "会用 AI，和会指挥 AI，是两种能力" },
        {
          type: "p",
          text: "我们的课程正是围绕这个区分搭建的：会用 AI 和会指挥 AI，是两种能力。能给模型写提示词的学生，未必能在模型对自己的真实生活判断出错时看出来。后面这种能力，是 AI 素养与批判性思维的交汇处。它是我们更想教的，且可以训练的。"
        },
        {
          type: "p",
          text: "同样的差距也出现在教师身上。午间与 11 位教师的 CPD（教师持续专业发展）培训里，用 AI 对多数人已是日常，但用 AI 搭建工作流和系统、指挥多个 AI agent 工作，对多数人来讲就没那么容易。这段距离，成人和学生是一样的。"
        },
        { type: "h2", text: "一场工作坊，该给学校留下什么" },
        {
          type: "p",
          text: "一场工作坊，不该以几张截图和一条致谢信息收场。这次课后，我们分析了 30 份学生手写的设计表格和为此搭建作品，给学校整理了一份报告：孩子们最在意什么（组织作业、找教室、融入集体、安全感），以及他们在哪些地方对 AI 做出了自己的判断。"
        },
        {
          type: "p",
          text: "所以这一天留下的，是一份能读懂「孩子究竟想了什么、判断了什么」的记录，学校可以复盘，可以内部分享，可以用于后续的规划。判断应该属于教室里的人。我们做的，是让它在课后更容易被看见、被整理、被讨论。"
        },
        {
          type: "p",
          text: "整个学生工作坊的课程设计，包括主题、AI 开关卡、学生设计记录表格与教师引导卡，由联创 Lynn 主导与设计。学生工作坊的现场协助、教师 CPD 的主持，以及课后报告，由联创 Jacky 负责与交付。"
        },
        {
          type: "p",
          text: "如果你是学校、家长或教育者，想看我们这次用的学生 AI 开关-设计记录表格，欢迎私信我们，我们很乐意分享。"
        }
      ],
      footnotes: [
        {
          label: "首发于小红书 · 微信公众号「敢想实验室」"
        },
        {
          label: "LinkedIn 英文版",
          href: "https://www.linkedin.com/posts/bold-ideas-lab_in-june-we-ran-our-first-in-person-school-activity-7479938001783996416-RE7y"
        }
      ]
    }
  }
];

export function getInsightsArticle(slug: string): InsightsArticle | undefined {
  return [...insightsArticles, ...labArticles].find(
    (article) => article.slug === slug
  );
}
