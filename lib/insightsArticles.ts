// 站内原生文章：英文界面读英文翻译，中文界面读创始人的中文原文。
// 中文正文是 Lynn 的原文（仅把原稿里挤在段落中的小标题拆出来）；英文由品牌声音译出。

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string };

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
          type: "p",
          text: "We worked with around 30 Year 9 students. The brief: design a prototype to help the Year 7s arriving in September (around 11 to 12 years old) settle into their first week at a new school. The building tool was Google AI Studio. By the end of one lesson, the class had made 22 working prototypes, small apps you can open and use in a few clicks. One student built a tool for reporting bullying, so that a new student who is being picked on can tell their form tutor in a way that feels less frightening."
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
          type: "p",
          text: "这次和我们一起工作的是约 30 名 Year 9 学生。任务是：为九月即将入学的 Year 7 新生（约 11 至 12 岁），设计一个帮助他们适应新学校第一周生活的原型作品。搭建工具是 Google AI Studio。一节课结束时，全班做出了 22 个可运行的原型，都是能直接打开、点几下就能用的小应用。比如有个学生做了一个上报霸凌的小工具，让新生遇到被欺负的情况时，可以用一种不那么可怕的方式告诉自己的班主任。"
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
