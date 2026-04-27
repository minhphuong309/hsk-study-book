function dialogueBlock(title, note, lines) {
  return { title, note, lines };
}

function hsk1Lesson({
  number,
  titleChinese,
  titlePinyin,
  vietnameseTitle,
  objective,
  vocabulary,
  dialogueBlocks,
  grammarNotes,
  studyExercises,
  quickSummary
}) {
  return {
    id: `hsk1-lesson-${number}`,
    number,
    title: `Bài ${number}: ${vietnameseTitle}`,
    titleChinese,
    titlePinyin,
    objective,
    vocabulary,
    dialogueBlocks,
    grammarNotes,
    studyExercises,
    quickSummary
  };
}

const hsk1Course = {
  lessons: [
    hsk1Lesson({
      number: 1,
      titleChinese: "你好！",
      titlePinyin: "Nǐ hǎo!",
      vietnameseTitle: "Chào anh!",
      objective: "Làm quen với lời chào cơ bản, cách chào lịch sự, mời ngồi và chào tạm biệt trong lớp học.",
      vocabulary: [
        vocab("你好", "nǐ hǎo", "xin chào", "cụm giao tiếp", "Lời chào cơ bản nhất ở đầu khóa.", "你好，同学。", "Nǐ hǎo, tóngxué.", "Xin chào bạn học."),
        vocab("您好", "nín hǎo", "xin chào ạ", "cụm giao tiếp", "Dùng với giáo viên hoặc người lớn tuổi hơn.", "您好，老师。", "Nín hǎo, lǎoshī.", "Em chào thầy/cô ạ."),
        vocab("老师", "lǎoshī", "giáo viên", "danh từ", "Từ xưng hô rất hay gặp ngay từ bài đầu.", "王老师，您好。", "Wáng lǎoshī, nín hǎo.", "Chào thầy/cô Vương ạ."),
        vocab("同学", "tóngxué", "bạn học", "danh từ", "Dùng để gọi bạn trong lớp.", "你好，同学。", "Nǐ hǎo, tóngxué.", "Xin chào bạn học."),
        vocab("请", "qǐng", "mời", "động từ", "Dùng để mời hoặc nhờ người khác lịch sự.", "请坐。", "Qǐng zuò.", "Mời ngồi."),
        vocab("坐", "zuò", "ngồi", "động từ", "Động từ rất cơ bản trong lớp học.", "请坐这儿。", "Qǐng zuò zhèr.", "Mời ngồi ở đây."),
        vocab("再见", "zàijiàn", "tạm biệt", "cụm giao tiếp", "Dùng khi kết thúc cuộc nói chuyện.", "老师，再见。", "Lǎoshī, zàijiàn.", "Tạm biệt thầy/cô."),
        vocab("请进", "qǐng jìn", "mời vào", "cụm giao tiếp", "Dùng khi đón ai vào phòng.", "请进，老师。", "Qǐng jìn, lǎoshī.", "Mời thầy/cô vào ạ.")
      ],
      dialogueBlocks: [
        dialogueBlock("Gặp ở cửa lớp", "Chào người cùng lớp lần đầu gặp.", [
          study("A: 你好！", "A: Nǐ hǎo!", "A: Xin chào!"),
          study("B: 你好！", "B: Nǐ hǎo!", "B: Xin chào!"),
          study("A: 你也是这个班的吗？", "A: Nǐ yě shì zhège bān de ma?", "A: Bạn cũng ở lớp này phải không?"),
          study("B: 是。", "B: Shì.", "B: Đúng vậy.")
        ]),
        dialogueBlock("Chào giáo viên", "Phân biệt 你好 và 您好.", [
          study("A: 老师，您好！", "A: Lǎoshī, nín hǎo!", "A: Chào thầy/cô ạ!"),
          study("B: 你好。", "B: Nǐ hǎo.", "B: Chào em."),
          study("A: 请进。", "A: Qǐng jìn.", "A: Mời vào ạ."),
          study("B: 谢谢。", "B: Xièxie.", "B: Cảm ơn.")
        ]),
        dialogueBlock("Mời ngồi", "Một tình huống rất ngắn trong lớp.", [
          study("A: 这儿有位子吗？", "A: Zhèr yǒu wèizi ma?", "A: Ở đây có chỗ ngồi không?"),
          study("B: 有，请坐。", "B: Yǒu, qǐng zuò.", "B: Có, mời ngồi."),
          study("A: 谢谢你。", "A: Xièxie nǐ.", "A: Cảm ơn bạn."),
          study("B: 不客气。", "B: Bú kèqi.", "B: Không có gì.")
        ]),
        dialogueBlock("Kết thúc buổi học", "Chào tạm biệt tự nhiên.", [
          study("A: 老师，再见。", "A: Lǎoshī, zàijiàn.", "A: Tạm biệt thầy/cô."),
          study("B: 同学们，再见。", "B: Tóngxuémen, zàijiàn.", "B: Tạm biệt các em."),
          study("A: 明天见。", "A: Míngtiān jiàn.", "A: Ngày mai gặp nhé."),
          study("B: 明天见。", "B: Míngtiān jiàn.", "B: Ngày mai gặp nhé.")
        ])
      ],
      grammarNotes: [
        grammarNote("1. Chào thường và chào lịch sự", "你好 dùng với bạn bè hoặc người cùng lứa. 您好 dùng khi cần lịch sự hơn với thầy cô hoặc người lớn tuổi.", study("你好 / 您好", "Nǐ hǎo / Nín hǎo", "Xin chào / Xin chào ạ"), [
          study("你好，同学。", "Nǐ hǎo, tóngxué.", "Xin chào bạn học."),
          study("您好，老师。", "Nín hǎo, lǎoshī.", "Em chào thầy/cô ạ."),
          study("王老师，您好。", "Wáng lǎoshī, nín hǎo.", "Chào thầy/cô Vương ạ.")
        ]),
        grammarNote("2. 请 + động từ", "请 đứng trước động từ để tạo lời mời hoặc lời nhờ lịch sự. Đây là mẫu rất thực dụng ở lớp học.", study("请 + động từ", "Qǐng + dòngcí", "Mời / xin + động từ"), [
          study("请坐。", "Qǐng zuò.", "Mời ngồi."),
          study("请进。", "Qǐng jìn.", "Mời vào."),
          study("请看书。", "Qǐng kàn shū.", "Mời đọc sách.")
        ]),
        grammarNote("3. Chào tạm biệt", "再见 dùng để kết thúc cuộc nói chuyện. 明天见 là cách chào ngắn khi biết sẽ gặp lại hôm sau.", study("再见 / 明天见", "Zàijiàn / Míngtiān jiàn", "Tạm biệt / Ngày mai gặp nhé"), [
          study("老师，再见。", "Lǎoshī, zàijiàn.", "Tạm biệt thầy/cô."),
          study("同学，再见。", "Tóngxué, zàijiàn.", "Tạm biệt bạn học."),
          study("明天见。", "Míngtiān jiàn.", "Ngày mai gặp nhé.")
        ])
      ],
      studyExercises: buildExercises(
        [{ question: "Nối câu với nghĩa đúng.", prompt: ["1. 你好", "2. 您好", "3. 再见"], options: ["a. Tạm biệt", "b. Xin chào", "c. Xin chào ạ"], answer: "1-b, 2-c, 3-a" }],
        [{ question: "Điền từ thích hợp.", prompt: ["___好，老师。", "请___。", "老师，再___。"], answer: "您 / 坐 / 见" }],
        [{ question: "Gặp giáo viên, nên dùng câu nào?", options: ["A. 你好", "B. 您好", "C. 明天几号"], answer: "B. 您好" }],
        [{ question: "Hoàn thành hội thoại.", prompt: ["A: 老师，您好！", "B: ____________", "A: 老师，再见。"], answer: "B: 你好。" }],
        "Tự kiểm tra: bạn có thể chào thầy/cô, mời ngồi và nói tạm biệt mà không nhìn bài không?"
      ),
      quickSummary: {
        words: ["你好", "您好", "请", "坐", "再见", "老师"],
        patterns: ["老师，您好。", "请坐。", "老师，再见。"],
        reminder: "Gặp giáo viên thì ưu tiên dùng 您好 thay vì 你好."
      }
    }),
    hsk1Lesson({
      number: 2,
      titleChinese: "谢谢你！",
      titlePinyin: "Xièxie nǐ!",
      vietnameseTitle: "Cảm ơn anh!",
      objective: "Dùng lời cảm ơn, đáp lại lời cảm ơn và nói xin lỗi trong các tình huống rất ngắn hằng ngày.",
      vocabulary: [
        vocab("谢谢", "xièxie", "cảm ơn", "động từ", "Mẫu lịch sự cơ bản cần dùng sớm.", "谢谢你。", "Xièxie nǐ.", "Cảm ơn bạn."),
        vocab("不客气", "bú kèqi", "không có gì", "cụm giao tiếp", "Câu đáp lại khi ai đó cảm ơn.", "A：谢谢。B：不客气。", "A: Xièxie. B: Bú kèqi.", "A: Cảm ơn. B: Không có gì."),
        vocab("对不起", "duìbuqǐ", "xin lỗi", "cụm giao tiếp", "Dùng khi làm phiền hoặc làm sai.", "对不起，我来晚了。", "Duìbuqǐ, wǒ lái wǎn le.", "Xin lỗi, tôi đến muộn."),
        vocab("没关系", "méi guānxi", "không sao", "cụm giao tiếp", "Dùng để đáp lại lời xin lỗi.", "没关系。", "Méi guānxi.", "Không sao."),
        vocab("帮", "bāng", "giúp", "động từ", "Dùng trong lời nhờ hoặc mô tả giúp đỡ.", "你帮我了。", "Nǐ bāng wǒ le.", "Bạn đã giúp tôi."),
        vocab("给", "gěi", "đưa; cho", "động từ", "Dùng khi đưa đồ cho người khác.", "请给我一本书。", "Qǐng gěi wǒ yì běn shū.", "Xin đưa cho tôi một quyển sách."),
        vocab("水", "shuǐ", "nước", "danh từ", "Đồ vật rất hay có trong tình huống cảm ơn.", "谢谢你的水。", "Xièxie nǐ de shuǐ.", "Cảm ơn bạn vì chai nước."),
        vocab("书", "shū", "sách", "danh từ", "Dùng trong lớp học và lời nhờ đơn giản.", "请给我那本书。", "Qǐng gěi wǒ nà běn shū.", "Xin đưa tôi cuốn sách kia.")
      ],
      dialogueBlocks: [
        dialogueBlock("Cảm ơn vì được giúp", "Tình huống giữa hai bạn học.", [
          study("A: 这是你的书。", "A: Zhè shì nǐ de shū.", "A: Đây là sách của bạn."),
          study("B: 谢谢你！", "B: Xièxie nǐ!", "B: Cảm ơn bạn!"),
          study("A: 不客气。", "A: Bú kèqi.", "A: Không có gì."),
          study("B: 你真好。", "B: Nǐ zhēn hǎo.", "B: Bạn thật tốt.")
        ]),
        dialogueBlock("Xin lỗi vì đến muộn", "Một tình huống nhỏ trong lớp.", [
          study("A: 对不起，我来晚了。", "A: Duìbuqǐ, wǒ lái wǎn le.", "A: Xin lỗi, tôi đến muộn."),
          study("B: 没关系，请进。", "B: Méi guānxi, qǐng jìn.", "B: Không sao, mời vào."),
          study("A: 谢谢老师。", "A: Xièxie lǎoshī.", "A: Cảm ơn thầy/cô."),
          study("B: 坐吧。", "B: Zuò ba.", "B: Ngồi đi.")
        ]),
        dialogueBlock("Xin nước", "Mẫu nhờ rất ngắn.", [
          study("A: 请给我水。", "A: Qǐng gěi wǒ shuǐ.", "A: Xin cho tôi nước."),
          study("B: 好，给你。", "B: Hǎo, gěi nǐ.", "B: Được, đây cho bạn."),
          study("A: 谢谢！", "A: Xièxie!", "A: Cảm ơn!"),
          study("B: 不客气。", "B: Bú kèqi.", "B: Không có gì.")
        ]),
        dialogueBlock("Làm phiền người khác", "Lặp lại xin lỗi và đáp lời.", [
          study("A: 对不起。", "A: Duìbuqǐ.", "A: Xin lỗi."),
          study("B: 没关系。", "B: Méi guānxi.", "B: Không sao."),
          study("A: 谢谢你帮我。", "A: Xièxie nǐ bāng wǒ.", "A: Cảm ơn bạn đã giúp tôi."),
          study("B: 不客气。", "B: Bú kèqi.", "B: Không có gì.")
        ])
      ],
      grammarNotes: [
        grammarNote("1. 谢谢 + người nhận", "Có thể nói 谢谢 hoặc 谢谢你 / 谢谢老师 để rõ đang cảm ơn ai.", study("谢谢 + người", "Xièxie + rén", "Cảm ơn + người"), [
          study("谢谢你。", "Xièxie nǐ.", "Cảm ơn bạn."),
          study("谢谢老师。", "Xièxie lǎoshī.", "Cảm ơn thầy/cô."),
          study("谢谢妈妈。", "Xièxie māma.", "Cảm ơn mẹ.")
        ]),
        grammarNote("2. Đáp lại lời cảm ơn", "Khi ai đó nói 谢谢, cách đáp cơ bản nhất là 不客气.", study("不客气", "Bú kèqi", "Không có gì"), [
          study("A: 谢谢。B: 不客气。", "A: Xièxie. B: Bú kèqi.", "A: Cảm ơn. B: Không có gì."),
          study("谢谢你。— 不客气。", "Xièxie nǐ. — Bú kèqi.", "Cảm ơn bạn. — Không có gì."),
          study("谢谢老师。— 不客气。", "Xièxie lǎoshī. — Bú kèqi.", "Cảm ơn thầy/cô. — Không có gì.")
        ]),
        grammarNote("3. Xin lỗi và đáp lời", "对不起 dùng để xin lỗi. Người nghe thường đáp 没关系 để nói không sao cả.", study("对不起 / 没关系", "Duìbuqǐ / Méi guānxi", "Xin lỗi / Không sao"), [
          study("对不起，我来晚了。", "Duìbuqǐ, wǒ lái wǎn le.", "Xin lỗi, tôi đến muộn."),
          study("没关系。", "Méi guānxi.", "Không sao."),
          study("对不起，老师。", "Duìbuqǐ, lǎoshī.", "Xin lỗi thầy/cô ạ.")
        ])
      ],
      studyExercises: buildExercises(
        [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 谢谢", "2. 不客气", "3. 对不起"], options: ["a. Không có gì", "b. Cảm ơn", "c. Xin lỗi"], answer: "1-b, 2-a, 3-c" }],
        [{ question: "Điền từ thích hợp.", prompt: ["___你。", "___关系。", "请___我一本书。"], answer: "谢谢 / 没 / 给" }],
        [{ question: "Nghe ai đó nói 谢谢, bạn nên đáp thế nào?", options: ["A. 不客气", "B. 对不起", "C. 你好"], answer: "A. 不客气" }],
        [{ question: "Hoàn thành hội thoại.", prompt: ["A: 对不起。", "B: ____________", "A: 谢谢你。"], answer: "B: 没关系。" }],
        "Tự kiểm tra: bạn có thể cảm ơn, xin lỗi và đáp lại trong ba tình huống ngắn không?"
      ),
      quickSummary: {
        words: ["谢谢", "不客气", "对不起", "没关系", "给", "帮"],
        patterns: ["谢谢你。", "不客气。", "对不起。没关系。"],
        reminder: "Cảm ơn dùng 谢谢, xin lỗi dùng 对不起, và đừng quên đáp lại lịch sự."
      }
    }),
    hsk1Lesson({
      number: 3,
      titleChinese: "你叫什么名字？",
      titlePinyin: "Nǐ jiào shénme míngzi?",
      vietnameseTitle: "Cô tên gì?",
      objective: "Hỏi tên, họ và tự giới thiệu ngắn trong buổi học đầu tiên.",
      vocabulary: [
        vocab("叫", "jiào", "tên là", "động từ", "Động từ trung tâm để nói tên mình.", "我叫小安。", "Wǒ jiào Xiǎo Ān.", "Tôi tên là Tiểu An."),
        vocab("名字", "míngzi", "tên", "danh từ", "Dùng trong câu hỏi về tên.", "你叫什么名字？", "Nǐ jiào shénme míngzi?", "Bạn tên là gì?"),
        vocab("什么", "shénme", "gì", "đại từ nghi vấn", "Dùng để hỏi thông tin chưa biết.", "这是什么？", "Zhè shì shénme?", "Đây là cái gì?"),
        vocab("姓", "xìng", "họ", "động từ", "Dùng để hỏi hoặc nói họ.", "你姓王吗？", "Nǐ xìng Wáng ma?", "Bạn họ Vương phải không?"),
        vocab("我", "wǒ", "tôi", "đại từ", "Ngôi thứ nhất số ít.", "我是学生。", "Wǒ shì xuésheng.", "Tôi là học sinh/sinh viên."),
        vocab("你", "nǐ", "bạn", "đại từ", "Ngôi thứ hai số ít.", "你叫什么名字？", "Nǐ jiào shénme míngzi?", "Bạn tên là gì?"),
        vocab("呢", "ne", "còn ... thì sao", "trợ từ", "Dùng hỏi lại người kia sau khi mình đã nói.", "我叫安，你呢？", "Wǒ jiào Ān, nǐ ne?", "Tôi tên là An, còn bạn thì sao?"),
        vocab("认识", "rènshi", "làm quen; biết", "động từ", "Xuất hiện trong cụm làm quen đầu khóa.", "很高兴认识你。", "Hěn gāoxìng rènshi nǐ.", "Rất vui được làm quen với bạn.")
      ],
      dialogueBlocks: [
        dialogueBlock("Hỏi tên", "Mẫu hỏi cơ bản nhất của bài.", [
          study("A: 你叫什么名字？", "A: Nǐ jiào shénme míngzi?", "A: Bạn tên là gì?"),
          study("B: 我叫林。", "B: Wǒ jiào Lín.", "B: Tôi tên là Linh."),
          study("A: 你呢？", "A: Nǐ ne?", "A: Còn bạn thì sao?"),
          study("B: 我叫明。", "B: Wǒ jiào Míng.", "B: Tôi tên là Minh.")
        ]),
        dialogueBlock("Hỏi họ", "Bổ sung thông tin khi làm quen.", [
          study("A: 你姓什么？", "A: Nǐ xìng shénme?", "A: Bạn họ gì?"),
          study("B: 我姓王。", "B: Wǒ xìng Wáng.", "B: Tôi họ Vương."),
          study("A: 王明，是吗？", "A: Wáng Míng, shì ma?", "A: Vương Minh, đúng không?"),
          study("B: 对。", "B: Duì.", "B: Đúng.")
        ]),
        dialogueBlock("Tự giới thiệu", "Giới thiệu ngắn và lịch sự.", [
          study("A: 我叫安。", "A: Wǒ jiào Ān.", "A: Tôi tên là An."),
          study("B: 我叫兰。", "B: Wǒ jiào Lán.", "B: Tôi tên là Lan."),
          study("A: 很高兴认识你。", "A: Hěn gāoxìng rènshi nǐ.", "A: Rất vui được làm quen với bạn."),
          study("B: 我也很高兴认识你。", "B: Wǒ yě hěn gāoxìng rènshi nǐ.", "B: Tôi cũng rất vui được làm quen với bạn.")
        ]),
        dialogueBlock("Nhắc lại tên", "Luyện nghe và xác nhận tên.", [
          study("A: 你叫李月吗？", "A: Nǐ jiào Lǐ Yuè ma?", "A: Bạn tên là Lý Nguyệt phải không?"),
          study("B: 不是，我叫李玉。", "B: Bú shì, wǒ jiào Lǐ Yù.", "B: Không, tôi tên là Lý Dụ."),
          study("A: 对不起。", "A: Duìbuqǐ.", "A: Xin lỗi."),
          study("B: 没关系。", "B: Méi guānxi.", "B: Không sao.")
        ])
      ],
      grammarNotes: [
        grammarNote("1. 叫 để nói tên", "Muốn nói tên của mình, dùng 我叫 + tên. Đây là mẫu cơ bản nhất khi tự giới thiệu.", study("我叫 + tên", "Wǒ jiào + míngzi", "Tôi tên là ..."), [
          study("我叫林。", "Wǒ jiào Lín.", "Tôi tên là Linh."),
          study("我叫明。", "Wǒ jiào Míng.", "Tôi tên là Minh."),
          study("我叫安。", "Wǒ jiào Ān.", "Tôi tên là An.")
        ]),
        grammarNote("2. Hỏi tên với 什么", "Dùng 什么 để hỏi tên chưa biết. Mẫu đầy đủ là 你叫什么名字？", study("你叫什么名字？", "Nǐ jiào shénme míngzi?", "Bạn tên là gì?"), [
          study("你叫什么名字？", "Nǐ jiào shénme míngzi?", "Bạn tên là gì?"),
          study("老师叫什么名字？", "Lǎoshī jiào shénme míngzi?", "Thầy/cô tên là gì?"),
          study("她叫什么名字？", "Tā jiào shénme míngzi?", "Cô ấy tên là gì?")
        ]),
        grammarNote("3. 呢 để hỏi lại", "Sau khi đã trả lời về mình, có thể dùng 呢 để hỏi ngắn lại người kia.", study("我叫安，你呢？", "Wǒ jiào Ān, nǐ ne?", "Tôi tên là An, còn bạn thì sao?"), [
          study("我姓王，你呢？", "Wǒ xìng Wáng, nǐ ne?", "Tôi họ Vương, còn bạn thì sao?"),
          study("我叫兰，你呢？", "Wǒ jiào Lán, nǐ ne?", "Tôi tên là Lan, còn bạn thì sao?"),
          study("我是学生，你呢？", "Wǒ shì xuésheng, nǐ ne?", "Tôi là học sinh/sinh viên, còn bạn thì sao?")
        ])
      ],
      studyExercises: buildExercises(
        [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 叫", "2. 名字", "3. 姓"], options: ["a. tên", "b. họ", "c. tên là"], answer: "1-c, 2-a, 3-b" }],
        [{ question: "Điền từ thích hợp.", prompt: ["你___什么名字？", "我___安。", "我姓王，你___？"], answer: "叫 / 叫 / 呢" }],
        [{ question: "Câu nào dùng để hỏi tên?", options: ["A. 你几号？", "B. 你叫什么名字？", "C. 你在哪儿工作？"], answer: "B. 你叫什么名字？" }],
        [{ question: "Hoàn thành hội thoại.", prompt: ["A: 你叫什么名字？", "B: ____________", "A: 我叫明。你呢？"], answer: "B: 我叫林。" }],
        "Tự kiểm tra: bạn có thể hỏi tên, nói họ và hỏi lại bằng 呢 chưa?"
      ),
      quickSummary: {
        words: ["叫", "名字", "什么", "姓", "我", "你", "呢"],
        patterns: ["你叫什么名字？", "我叫安。", "我姓王，你呢？"],
        reminder: "Khi mới học, cứ nhớ theo cụm hoàn chỉnh: 你叫什么名字？ / 我叫... / 你呢？"
      }
    }),
    hsk1Lesson({
      number: 4,
      titleChinese: "她是我的汉语老师。",
      titlePinyin: "Tā shì wǒ de Hànyǔ lǎoshī.",
      vietnameseTitle: "Cô ấy là cô giáo dạy tôi tiếng Trung Quốc.",
      objective: "Giới thiệu người khác, nói nghề nghiệp và dùng 的 để chỉ quan hệ sở hữu đơn giản.",
      vocabulary: [
        vocab("她", "tā", "cô ấy", "đại từ", "Đại từ ngôi ba số ít cho nữ.", "她是老师。", "Tā shì lǎoshī.", "Cô ấy là giáo viên."),
        vocab("我的", "wǒ de", "của tôi", "cụm sở hữu", "Dùng trước danh từ để chỉ quan hệ sở hữu.", "这是我的书。", "Zhè shì wǒ de shū.", "Đây là sách của tôi."),
        vocab("汉语", "Hànyǔ", "tiếng Trung", "danh từ", "Tên môn học trong giáo trình.", "我学习汉语。", "Wǒ xuéxí Hànyǔ.", "Tôi học tiếng Trung."),
        vocab("老师", "lǎoshī", "giáo viên", "danh từ", "Người dạy học.", "她是汉语老师。", "Tā shì Hànyǔ lǎoshī.", "Cô ấy là giáo viên tiếng Trung."),
        vocab("学生", "xuésheng", "học sinh; sinh viên", "danh từ", "Người học.", "我是学生。", "Wǒ shì xuésheng.", "Tôi là học sinh/sinh viên."),
        vocab("朋友", "péngyou", "bạn", "danh từ", "Dùng để giới thiệu người quen.", "他是我的朋友。", "Tā shì wǒ de péngyou.", "Anh ấy là bạn tôi."),
        vocab("谁", "shéi", "ai", "đại từ nghi vấn", "Dùng để hỏi về người.", "她是谁？", "Tā shì shéi?", "Cô ấy là ai?"),
        vocab("认识", "rènshi", "biết; quen", "động từ", "Dùng khi nói mình biết ai.", "我认识她。", "Wǒ rènshi tā.", "Tôi quen cô ấy.")
      ],
      dialogueBlocks: [
        dialogueBlock("Giới thiệu cô giáo", "Tình huống ở cửa lớp.", [
          study("A: 她是谁？", "A: Tā shì shéi?", "A: Cô ấy là ai?"),
          study("B: 她是我的汉语老师。", "B: Tā shì wǒ de Hànyǔ lǎoshī.", "B: Cô ấy là cô giáo dạy tôi tiếng Trung."),
          study("A: 她姓什么？", "A: Tā xìng shénme?", "A: Cô ấy họ gì?"),
          study("B: 她姓李。", "B: Tā xìng Lǐ.", "B: Cô ấy họ Lý.")
        ]),
        dialogueBlock("Giới thiệu bạn học", "Phân biệt 老师 và 学生.", [
          study("A: 他是老师吗？", "A: Tā shì lǎoshī ma?", "A: Anh ấy là giáo viên phải không?"),
          study("B: 不是，他是学生。", "B: Bú shì, tā shì xuésheng.", "B: Không, anh ấy là học sinh/sinh viên."),
          study("A: 他是你的朋友吗？", "A: Tā shì nǐ de péngyou ma?", "A: Anh ấy là bạn của bạn phải không?"),
          study("B: 是。", "B: Shì.", "B: Đúng vậy.")
        ]),
        dialogueBlock("Hỏi người", "Hội thoại hỏi nhanh trong lớp.", [
          study("A: 她是谁？", "A: Tā shì shéi?", "A: Cô ấy là ai?"),
          study("B: 她是王老师。", "B: Tā shì Wáng lǎoshī.", "B: Cô ấy là cô giáo Vương."),
          study("A: 你认识她吗？", "A: Nǐ rènshi tā ma?", "A: Bạn có quen cô ấy không?"),
          study("B: 认识。", "B: Rènshi.", "B: Có quen.")
        ]),
        dialogueBlock("Nói về đồ vật của mình", "Củng cố 的 trước danh từ.", [
          study("A: 这是你的书吗？", "A: Zhè shì nǐ de shū ma?", "A: Đây là sách của bạn phải không?"),
          study("B: 不是，这是我的书。", "B: Bú shì, zhè shì wǒ de shū.", "B: Không, đây là sách của tôi."),
          study("A: 那是老师的书吗？", "A: Nà shì lǎoshī de shū ma?", "A: Kia là sách của giáo viên phải không?"),
          study("B: 是。", "B: Shì.", "B: Đúng vậy.")
        ])
      ],
      grammarNotes: [
        grammarNote("1. Chủ ngữ + 是 + danh từ", "Dùng 是 để giới thiệu người, nghề nghiệp hoặc thân phận rất cơ bản.", study("她是我的汉语老师。", "Tā shì wǒ de Hànyǔ lǎoshī.", "Cô ấy là cô giáo dạy tôi tiếng Trung."), [
          study("她是老师。", "Tā shì lǎoshī.", "Cô ấy là giáo viên."),
          study("他是学生。", "Tā shì xuésheng.", "Anh ấy là học sinh/sinh viên."),
          study("他是我的朋友。", "Tā shì wǒ de péngyou.", "Anh ấy là bạn tôi.")
        ]),
        grammarNote("2. 的 để chỉ quan hệ sở hữu", "Đặt 的 giữa người và danh từ để nói cái gì hoặc ai thuộc về ai.", study("我的 + danh từ", "Wǒ de + míngcí", "Của tôi + danh từ"), [
          study("我的老师", "Wǒ de lǎoshī.", "Giáo viên của tôi."),
          study("我的朋友", "Wǒ de péngyou.", "Bạn của tôi."),
          study("我的书", "Wǒ de shū.", "Sách của tôi.")
        ]),
        grammarNote("3. Hỏi người với 谁", "Muốn hỏi người đó là ai, dùng 谁 trong mẫu rất ngắn và rất thông dụng.", study("她是谁？", "Tā shì shéi?", "Cô ấy là ai?"), [
          study("他是谁？", "Tā shì shéi?", "Anh ấy là ai?"),
          study("这是谁？", "Zhè shì shéi?", "Đây là ai?"),
          study("那是谁？", "Nà shì shéi?", "Kia là ai?")
        ])
      ],
      studyExercises: buildExercises(
        [{ question: "Nối từ với nghĩa.", prompt: ["1. 她", "2. 老师", "3. 朋友"], options: ["a. bạn", "b. giáo viên", "c. cô ấy"], answer: "1-c, 2-b, 3-a" }],
        [{ question: "Điền từ thích hợp.", prompt: ["她___我的汉语老师。", "这是___书。", "她是___？"], answer: "是 / 我的 / 谁" }],
        [{ question: "Câu nào đúng để hỏi 'Cô ấy là ai?'", options: ["A. 她是谁？", "B. 她在哪儿？", "C. 她几号？"], answer: "A. 她是谁？" }],
        [{ question: "Hoàn thành hội thoại.", prompt: ["A: 她是谁？", "B: ____________", "A: 你认识她吗？"], answer: "B: 她是我的汉语老师。" }],
        "Tự kiểm tra: bạn có thể giới thiệu một giáo viên và một người bạn bằng 是 và 的 không?"
      ),
      quickSummary: {
        words: ["她", "我的", "汉语", "老师", "学生", "朋友", "谁"],
        patterns: ["她是我的汉语老师。", "这是我的书。", "她是谁？"],
        reminder: "Hãy nhớ 的 đứng giữa người và danh từ khi muốn nói quan hệ sở hữu."
      }
    }),
    hsk1Lesson({
      number: 5,
      titleChinese: "她女儿今年二十岁。",
      titlePinyin: "Tā nǚ'ér jīnnián èrshí suì.",
      vietnameseTitle: "Con gái của cô ấy năm nay 20 tuổi.",
      objective: "Nói về người thân trong gia đình, tuổi tác và cách hỏi năm nay bao nhiêu tuổi.",
      vocabulary: [
        vocab("女儿", "nǚ'ér", "con gái", "danh từ", "Từ thân thuộc trong chủ đề gia đình.", "她女儿今年二十岁。", "Tā nǚ'ér jīnnián èrshí suì.", "Con gái cô ấy năm nay 20 tuổi."),
        vocab("儿子", "érzi", "con trai", "danh từ", "Dùng song song với 女儿.", "你儿子几岁？", "Nǐ érzi jǐ suì?", "Con trai anh mấy tuổi?"),
        vocab("今年", "jīnnián", "năm nay", "danh từ thời gian", "Dùng để nói tuổi tác hiện tại.", "我今年十九岁。", "Wǒ jīnnián shíjiǔ suì.", "Năm nay tôi 19 tuổi."),
        vocab("岁", "suì", "tuổi", "lượng từ", "Đơn vị dùng khi nói tuổi.", "她二十岁。", "Tā èrshí suì.", "Cô ấy 20 tuổi."),
        vocab("爸爸", "bàba", "bố", "danh từ", "Thành viên cơ bản trong gia đình.", "我爸爸很忙。", "Wǒ bàba hěn máng.", "Bố tôi rất bận."),
        vocab("妈妈", "māma", "mẹ", "danh từ", "Từ thân thuộc cơ bản.", "我妈妈在家。", "Wǒ māma zài jiā.", "Mẹ tôi ở nhà."),
        vocab("家", "jiā", "nhà; gia đình", "danh từ", "Vừa chỉ nhà, vừa chỉ gia đình tùy ngữ cảnh.", "我家有四口人。", "Wǒ jiā yǒu sì kǒu rén.", "Nhà tôi có bốn người."),
        vocab("有", "yǒu", "có", "động từ", "Dùng để nói gia đình có những ai.", "我家有一个姐姐。", "Wǒ jiā yǒu yí ge jiějie.", "Nhà tôi có một chị gái.")
      ],
      dialogueBlocks: [
        dialogueBlock("Hỏi tuổi con gái", "Đúng trọng tâm tên bài.", [
          study("A: 她女儿今年几岁？", "A: Tā nǚ'ér jīnnián jǐ suì?", "A: Con gái cô ấy năm nay mấy tuổi?"),
          study("B: 她女儿今年二十岁。", "B: Tā nǚ'ér jīnnián èrshí suì.", "B: Con gái cô ấy năm nay 20 tuổi."),
          study("A: 她儿子呢？", "A: Tā érzi ne?", "A: Còn con trai cô ấy thì sao?"),
          study("B: 他今年十七岁。", "B: Tā jīnnián shíqī suì.", "B: Năm nay cậu ấy 17 tuổi.")
        ]),
        dialogueBlock("Nói về gia đình mình", "Mẫu tự giới thiệu gia đình rất ngắn.", [
          study("A: 你家有几口人？", "A: Nǐ jiā yǒu jǐ kǒu rén?", "A: Nhà bạn có mấy người?"),
          study("B: 我家有四口人。", "B: Wǒ jiā yǒu sì kǒu rén.", "B: Nhà tôi có bốn người."),
          study("A: 你有姐姐吗？", "A: Nǐ yǒu jiějie ma?", "A: Bạn có chị gái không?"),
          study("B: 没有，我有一个弟弟。", "B: Méiyǒu, wǒ yǒu yí ge dìdi.", "B: Không, tôi có một em trai.")
        ]),
        dialogueBlock("Hỏi bố mẹ", "Tình huống giữa hai người bạn.", [
          study("A: 你爸爸妈妈都在家吗？", "A: Nǐ bàba māma dōu zài jiā ma?", "A: Bố mẹ bạn đều ở nhà à?"),
          study("B: 妈妈在家，爸爸不在。", "B: Māma zài jiā, bàba bú zài.", "B: Mẹ ở nhà, bố không ở nhà."),
          study("A: 你妈妈几岁？", "A: Nǐ māma jǐ suì?", "A: Mẹ bạn bao nhiêu tuổi?"),
          study("B: 她今年四十五岁。", "B: Tā jīnnián sìshíwǔ suì.", "B: Năm nay bà ấy 45 tuổi.")
        ]),
        dialogueBlock("Nhắc lại tuổi", "Luyện số tuổi và 今年.", [
          study("A: 你今年多大？", "A: Nǐ jīnnián duō dà?", "A: Năm nay bạn bao nhiêu tuổi?"),
          study("B: 我今年二十岁。", "B: Wǒ jīnnián èrshí suì.", "B: Năm nay tôi 20 tuổi."),
          study("A: 你哥哥呢？", "A: Nǐ gēge ne?", "A: Còn anh trai bạn thì sao?"),
          study("B: 他今年二十二岁。", "B: Tā jīnnián èrshí'èr suì.", "B: Năm nay anh ấy 22 tuổi.")
        ])
      ],
      grammarNotes: [
        grammarNote("1. 今年 + số + 岁", "Muốn nói năm nay bao nhiêu tuổi, dùng 今年 rồi đến số và 岁.", study("她女儿今年二十岁。", "Tā nǚ'ér jīnnián èrshí suì.", "Con gái cô ấy năm nay 20 tuổi."), [
          study("我今年十九岁。", "Wǒ jīnnián shíjiǔ suì.", "Năm nay tôi 19 tuổi."),
          study("他今年二十五岁。", "Tā jīnnián èrshíwǔ suì.", "Năm nay anh ấy 25 tuổi."),
          study("我妈妈今年四十五岁。", "Wǒ māma jīnnián sìshíwǔ suì.", "Năm nay mẹ tôi 45 tuổi.")
        ]),
        grammarNote("2. Hỏi tuổi với 几岁", "Dùng 几岁 để hỏi tuổi trong bối cảnh cơ bản. Với người trẻ hoặc trong sách đầu khóa, mẫu này rất phổ biến.", study("你今年几岁？", "Nǐ jīnnián jǐ suì?", "Năm nay bạn mấy tuổi?"), [
          study("她几岁？", "Tā jǐ suì?", "Cô ấy mấy tuổi?"),
          study("你儿子几岁？", "Nǐ érzi jǐ suì?", "Con trai anh mấy tuổi?"),
          study("你女儿几岁？", "Nǐ nǚ'ér jǐ suì?", "Con gái chị mấy tuổi?")
        ]),
        grammarNote("3. 有 để nói gia đình có ai", "Dùng 有 để nói trong gia đình mình có bao nhiêu người hoặc có ai.", study("我家有四口人。", "Wǒ jiā yǒu sì kǒu rén.", "Nhà tôi có bốn người."), [
          study("我家有一个姐姐。", "Wǒ jiā yǒu yí ge jiějie.", "Nhà tôi có một chị gái."),
          study("我有一个弟弟。", "Wǒ yǒu yí ge dìdi.", "Tôi có một em trai."),
          study("她家有五口人。", "Tā jiā yǒu wǔ kǒu rén.", "Nhà cô ấy có năm người.")
        ])
      ],
      studyExercises: buildExercises(
        [{ question: "Nối từ với nghĩa.", prompt: ["1. 女儿", "2. 儿子", "3. 岁"], options: ["a. con trai", "b. tuổi", "c. con gái"], answer: "1-c, 2-a, 3-b" }],
        [{ question: "Điền từ thích hợp.", prompt: ["她女儿今年二十___。", "我家___四口人。", "你儿子___岁？"], answer: "岁 / 有 / 几" }],
        [{ question: "Muốn hỏi 'Năm nay bạn mấy tuổi?', chọn câu nào?", options: ["A. 你今年几岁？", "B. 你叫什么名字？", "C. 你在哪儿工作？"], answer: "A. 你今年几岁？" }],
        [{ question: "Hoàn thành hội thoại.", prompt: ["A: 她女儿今年几岁？", "B: ____________", "A: 你家有几口人？"], answer: "B: 她女儿今年二十岁。" }],
        "Tự kiểm tra: bạn có thể hỏi tuổi và nói về số người trong gia đình chưa?"
      ),
      quickSummary: {
        words: ["女儿", "儿子", "今年", "岁", "爸爸", "妈妈", "有"],
        patterns: ["她女儿今年二十岁。", "你今年几岁？", "我家有四口人。"],
        reminder: "Nói tuổi thì dùng 今年 + số + 岁; nói trong nhà có ai thì dùng 有."
      }
    }),
    hsk1Lesson({
      number: 6,
      titleChinese: "我会说汉语。",
      titlePinyin: "Wǒ huì shuō Hànyǔ.",
      vietnameseTitle: "Tôi biết nói tiếng Trung Quốc.",
      objective: "Nói khả năng đơn giản: biết nói, biết nghe, biết viết và biết đọc một ngôn ngữ.",
      vocabulary: [
        vocab("会", "huì", "biết; có thể", "động từ năng nguyện", "Dùng để nói khả năng đã học được.", "我会说汉语。", "Wǒ huì shuō Hànyǔ.", "Tôi biết nói tiếng Trung."),
        vocab("说", "shuō", "nói", "động từ", "Động từ đi với ngôn ngữ.", "她会说英语。", "Tā huì shuō Yīngyǔ.", "Cô ấy biết nói tiếng Anh."),
        vocab("汉语", "Hànyǔ", "tiếng Trung", "danh từ", "Tên ngôn ngữ trong bài học.", "我学习汉语。", "Wǒ xuéxí Hànyǔ.", "Tôi học tiếng Trung."),
        vocab("英语", "Yīngyǔ", "tiếng Anh", "danh từ", "Một ngôn ngữ để so sánh trong bài.", "他不会说英语。", "Tā bú huì shuō Yīngyǔ.", "Anh ấy không biết nói tiếng Anh."),
        vocab("听", "tīng", "nghe", "động từ", "Dùng trong kỹ năng ngôn ngữ.", "我会听一点儿汉语。", "Wǒ huì tīng yìdiǎnr Hànyǔ.", "Tôi nghe được một chút tiếng Trung."),
        vocab("写", "xiě", "viết", "động từ", "Dùng với 汉字 hoặc 名字.", "我会写汉字。", "Wǒ huì xiě Hànzì.", "Tôi biết viết chữ Hán."),
        vocab("汉字", "Hànzì", "chữ Hán", "danh từ", "Đối tượng học viết trong tiếng Trung.", "她会写汉字。", "Tā huì xiě Hànzì.", "Cô ấy biết viết chữ Hán."),
        vocab("一点儿", "yìdiǎnr", "một chút", "số lượng từ", "Dùng để nói mức độ ít nhưng có.", "我会说一点儿汉语。", "Wǒ huì shuō yìdiǎnr Hànyǔ.", "Tôi biết nói một chút tiếng Trung.")
      ],
      dialogueBlocks: [
        dialogueBlock("Nói về khả năng", "Đúng trọng tâm tên bài.", [
          study("A: 你会说汉语吗？", "A: Nǐ huì shuō Hànyǔ ma?", "A: Bạn biết nói tiếng Trung không?"),
          study("B: 会，我会说一点儿汉语。", "B: Huì, wǒ huì shuō yìdiǎnr Hànyǔ.", "B: Có, tôi biết nói một chút tiếng Trung."),
          study("A: 你会说英语吗？", "A: Nǐ huì shuō Yīngyǔ ma?", "A: Bạn biết nói tiếng Anh không?"),
          study("B: 也会。", "B: Yě huì.", "B: Cũng biết.")
        ]),
        dialogueBlock("Hỏi kỹ năng viết", "Mở rộng từ nói sang viết.", [
          study("A: 你会写汉字吗？", "A: Nǐ huì xiě Hànzì ma?", "A: Bạn biết viết chữ Hán không?"),
          study("B: 会写一点儿。", "B: Huì xiě yìdiǎnr.", "B: Biết viết một chút."),
          study("A: 你会写你的名字吗？", "A: Nǐ huì xiě nǐ de míngzi ma?", "A: Bạn biết viết tên mình không?"),
          study("B: 会。", "B: Huì.", "B: Biết.")
        ]),
        dialogueBlock("Nghe trong lớp", "Luyện 会 + 听.", [
          study("A: 老师说汉语，你会听吗？", "A: Lǎoshī shuō Hànyǔ, nǐ huì tīng ma?", "A: Thầy/cô nói tiếng Trung, bạn có nghe hiểu không?"),
          study("B: 会听一点儿。", "B: Huì tīng yìdiǎnr.", "B: Tôi nghe được một chút."),
          study("A: 你会读吗？", "A: Nǐ huì dú ma?", "A: Bạn biết đọc không?"),
          study("B: 会。", "B: Huì.", "B: Biết.")
        ]),
        dialogueBlock("Nói về người khác", "Dùng 会 với ngôi thứ ba.", [
          study("A: 她会说汉语吗？", "A: Tā huì shuō Hànyǔ ma?", "A: Cô ấy biết nói tiếng Trung không?"),
          study("B: 会。", "B: Huì.", "B: Biết."),
          study("A: 他呢？", "A: Tā ne?", "A: Còn anh ấy thì sao?"),
          study("B: 他不会。", "B: Tā bú huì.", "B: Anh ấy không biết.")
        ])
      ],
      grammarNotes: [
        grammarNote("1. 会 + động từ", "会 đứng trước động từ để nói ai đó biết làm việc gì hoặc có khả năng làm việc đó.", study("我会说汉语。", "Wǒ huì shuō Hànyǔ.", "Tôi biết nói tiếng Trung."), [
          study("我会写汉字。", "Wǒ huì xiě Hànzì.", "Tôi biết viết chữ Hán."),
          study("他会说英语。", "Tā huì shuō Yīngyǔ.", "Anh ấy biết nói tiếng Anh."),
          study("她会读。", "Tā huì dú.", "Cô ấy biết đọc.")
        ]),
        grammarNote("2. Phủ định của 会", "Phủ định của 会 là 不会. Dùng để nói không biết làm một việc.", study("他不会说英语。", "Tā bú huì shuō Yīngyǔ.", "Anh ấy không biết nói tiếng Anh."), [
          study("我不会写汉字。", "Wǒ bú huì xiě Hànzì.", "Tôi không biết viết chữ Hán."),
          study("她不会读。", "Tā bú huì dú.", "Cô ấy không biết đọc."),
          study("他不会说汉语。", "Tā bú huì shuō Hànyǔ.", "Anh ấy không biết nói tiếng Trung.")
        ]),
        grammarNote("3. 一点儿 để nói mức độ ít", "一点儿 đứng sau động từ hoặc danh từ để nói một lượng nhỏ, rất phù hợp khi mới học ngoại ngữ.", study("我会说一点儿汉语。", "Wǒ huì shuō yìdiǎnr Hànyǔ.", "Tôi biết nói một chút tiếng Trung."), [
          study("我会听一点儿。", "Wǒ huì tīng yìdiǎnr.", "Tôi nghe được một chút."),
          study("我会写一点儿。", "Wǒ huì xiě yìdiǎnr.", "Tôi biết viết một chút."),
          study("她会说一点儿英语。", "Tā huì shuō yìdiǎnr Yīngyǔ.", "Cô ấy biết nói một chút tiếng Anh.")
        ])
      ],
      studyExercises: buildExercises(
        [{ question: "Nối từ với nghĩa.", prompt: ["1. 会", "2. 说", "3. 汉字"], options: ["a. nói", "b. chữ Hán", "c. biết; có thể"], answer: "1-c, 2-a, 3-b" }],
        [{ question: "Điền từ thích hợp.", prompt: ["我___说汉语。", "他不___写汉字。", "我会说一点___汉语。"], answer: "会 / 会 / 儿" }],
        [{ question: "Câu nào đúng để nói 'Tôi biết nói tiếng Trung'", options: ["A. 我会说汉语。", "B. 我说会汉语。", "C. 我会汉语说。"], answer: "A. 我会说汉语。" }],
        [{ question: "Hoàn thành hội thoại.", prompt: ["A: 你会说汉语吗？", "B: ____________", "A: 你会写汉字吗？"], answer: "B: 会，我会说一点儿汉语。" }],
        "Tự kiểm tra: bạn có thể nói mình biết hoặc không biết làm một việc bằng 会 / 不会 chưa?"
      ),
      quickSummary: {
        words: ["会", "说", "汉语", "英语", "听", "写", "一点儿"],
        patterns: ["我会说汉语。", "他不会说英语。", "我会说一点儿汉语。"],
        reminder: "会 đứng trước động từ, còn 一点儿 giúp câu nói tự nhiên hơn khi khả năng còn ít."
      }
    }),
    hsk1Lesson({
      number: 7,
      titleChinese: "今天几号？",
      titlePinyin: "Jīntiān jǐ hào?",
      vietnameseTitle: "Hôm nay là ngày mấy?",
      objective: "Hỏi và nói ngày tháng đơn giản bằng 月, 号, 今天, 明天 và 星期.",
      vocabulary: [
        vocab("今天", "jīntiān", "hôm nay", "danh từ thời gian", "Thời gian mốc dùng nhiều trong hội thoại.", "今天几号？", "Jīntiān jǐ hào?", "Hôm nay là ngày mấy?"),
        vocab("几号", "jǐ hào", "ngày mấy", "cụm nghi vấn", "Dùng để hỏi số ngày trong tháng.", "今天几号？", "Jīntiān jǐ hào?", "Hôm nay là ngày mấy?"),
        vocab("月", "yuè", "tháng", "danh từ", "Dùng trước số ngày.", "今天五月八号。", "Jīntiān wǔ yuè bā hào.", "Hôm nay là ngày 8 tháng 5."),
        vocab("号", "hào", "ngày", "danh từ thời gian", "Dùng sau số ngày.", "明天是一号。", "Míngtiān shì yī hào.", "Ngày mai là ngày mùng một."),
        vocab("明天", "míngtiān", "ngày mai", "danh từ thời gian", "Thời gian dùng để nói kế hoạch gần.", "明天几号？", "Míngtiān jǐ hào?", "Ngày mai là ngày mấy?"),
        vocab("昨天", "zuótiān", "hôm qua", "danh từ thời gian", "Mốc thời gian quá khứ gần.", "昨天是星期天。", "Zuótiān shì xīngqītiān.", "Hôm qua là chủ nhật."),
        vocab("星期", "xīngqī", "thứ; tuần", "danh từ", "Dùng để nói thứ trong tuần.", "今天星期五。", "Jīntiān xīngqīwǔ.", "Hôm nay là thứ sáu."),
        vocab("日", "rì", "ngày", "danh từ", "Có thể thấy trong 星期日.", "今天星期日。", "Jīntiān xīngqīrì.", "Hôm nay là chủ nhật.")
      ],
      dialogueBlocks: [
        dialogueBlock("Hỏi ngày hôm nay", "Mẫu ngắn đúng tên bài.", [
          study("A: 今天几号？", "A: Jīntiān jǐ hào?", "A: Hôm nay là ngày mấy?"),
          study("B: 今天五月八号。", "B: Jīntiān wǔ yuè bā hào.", "B: Hôm nay là ngày 8 tháng 5."),
          study("A: 今天星期几？", "A: Jīntiān xīngqī jǐ?", "A: Hôm nay là thứ mấy?"),
          study("B: 今天星期五。", "B: Jīntiān xīngqīwǔ.", "B: Hôm nay là thứ sáu.")
        ]),
        dialogueBlock("Hỏi ngày mai", "Dùng 明天 đúng trật tự.", [
          study("A: 明天几号？", "A: Míngtiān jǐ hào?", "A: Ngày mai là ngày mấy?"),
          study("B: 明天五月九号。", "B: Míngtiān wǔ yuè jiǔ hào.", "B: Ngày mai là ngày 9 tháng 5."),
          study("A: 明天星期几？", "A: Míngtiān xīngqī jǐ?", "A: Ngày mai là thứ mấy?"),
          study("B: 明天星期六。", "B: Míngtiān xīngqīliù.", "B: Ngày mai là thứ bảy.")
        ]),
        dialogueBlock("Nói hôm qua", "So sánh hôm nay và hôm qua.", [
          study("A: 昨天几号？", "A: Zuótiān jǐ hào?", "A: Hôm qua là ngày mấy?"),
          study("B: 昨天五月七号。", "B: Zuótiān wǔ yuè qī hào.", "B: Hôm qua là ngày 7 tháng 5."),
          study("A: 昨天星期几？", "A: Zuótiān xīngqī jǐ?", "A: Hôm qua là thứ mấy?"),
          study("B: 昨天星期四。", "B: Zuótiān xīngqīsì.", "B: Hôm qua là thứ năm.")
        ]),
        dialogueBlock("Xác nhận ngày tháng", "Luyện nghe số trong ngày tháng.", [
          study("A: 今天是六月一号吗？", "A: Jīntiān shì liù yuè yī hào ma?", "A: Hôm nay là ngày 1 tháng 6 phải không?"),
          study("B: 不是，今天是六月二号。", "B: Bú shì, jīntiān shì liù yuè èr hào.", "B: Không, hôm nay là ngày 2 tháng 6."),
          study("A: 哦，我知道了。", "A: Ó, wǒ zhīdào le.", "A: À, tôi biết rồi."),
          study("B: 好。", "B: Hǎo.", "B: Được.")
        ])
      ],
      grammarNotes: [
        grammarNote("1. Cách nói ngày tháng", "Trong bài đầu, ngày tháng thường theo trật tự tháng trước, ngày sau: 五月八号.", study("五月八号", "Wǔ yuè bā hào", "Ngày 8 tháng 5"), [
          study("三月二号", "Sān yuè èr hào", "Ngày 2 tháng 3."),
          study("六月一号", "Liù yuè yī hào", "Ngày 1 tháng 6."),
          study("十二月十号", "Shí'èr yuè shí hào", "Ngày 10 tháng 12.")
        ]),
        grammarNote("2. Hỏi ngày với 几号", "Muốn hỏi ngày trong tháng, dùng 几号 sau từ chỉ thời gian như 今天 hoặc 明天.", study("今天几号？", "Jīntiān jǐ hào?", "Hôm nay là ngày mấy?"), [
          study("明天几号？", "Míngtiān jǐ hào?", "Ngày mai là ngày mấy?"),
          study("昨天几号？", "Zuótiān jǐ hào?", "Hôm qua là ngày mấy?"),
          study("今天是几号？", "Jīntiān shì jǐ hào?", "Hôm nay là ngày mấy?")
        ]),
        grammarNote("3. Hỏi thứ với 星期几", "Dùng 星期几 để hỏi thứ trong tuần. Số hoặc tên ngày đứng sau 星期.", study("今天星期几？", "Jīntiān xīngqī jǐ?", "Hôm nay là thứ mấy?"), [
          study("今天星期五。", "Jīntiān xīngqīwǔ.", "Hôm nay là thứ sáu."),
          study("明天星期六。", "Míngtiān xīngqīliù.", "Ngày mai là thứ bảy."),
          study("昨天星期四。", "Zuótiān xīngqīsì.", "Hôm qua là thứ năm.")
        ])
      ],
      studyExercises: buildExercises(
        [{ question: "Nối từ với nghĩa.", prompt: ["1. 今天", "2. 明天", "3. 星期"], options: ["a. ngày mai", "b. hôm nay", "c. thứ / tuần"], answer: "1-b, 2-a, 3-c" }],
        [{ question: "Điền từ thích hợp.", prompt: ["今天几___？", "五月八___。", "今天星期___。"], answer: "号 / 号 / 五" }],
        [{ question: "Muốn hỏi 'Hôm nay là ngày mấy?', chọn câu nào?", options: ["A. 今天几号？", "B. 今天几点？", "C. 今天天气怎么样？"], answer: "A. 今天几号？" }],
        [{ question: "Hoàn thành hội thoại.", prompt: ["A: 今天几号？", "B: ____________", "A: 今天星期几？"], answer: "B: 今天五月八号。" }],
        "Tự kiểm tra: bạn có thể nói hôm nay, hôm qua, ngày mai và thứ trong tuần chưa?"
      ),
      quickSummary: {
        words: ["今天", "几号", "月", "号", "明天", "昨天", "星期"],
        patterns: ["今天几号？", "今天五月八号。", "今天星期五。"],
        reminder: "Ngày tháng: tháng trước, ngày sau. Hỏi thứ: dùng 星期几."
      }
    }),
    hsk1Lesson({
      number: 8,
      titleChinese: "我想喝茶。",
      titlePinyin: "Wǒ xiǎng hē chá.",
      vietnameseTitle: "Tôi muốn uống trà.",
      objective: "Nói mong muốn đơn giản bằng 想 và gọi món đồ uống, đồ ăn quen thuộc.",
      vocabulary: [
        vocab("想", "xiǎng", "muốn", "động từ năng nguyện", "Dùng trước động từ để nói mong muốn.", "我想喝茶。", "Wǒ xiǎng hē chá.", "Tôi muốn uống trà."),
        vocab("喝", "hē", "uống", "động từ", "Dùng với trà, nước, cà phê.", "我想喝水。", "Wǒ xiǎng hē shuǐ.", "Tôi muốn uống nước."),
        vocab("茶", "chá", "trà", "danh từ", "Đồ uống trọng tâm của bài.", "他喜欢喝茶。", "Tā xǐhuan hē chá.", "Anh ấy thích uống trà."),
        vocab("水", "shuǐ", "nước", "danh từ", "Đồ uống cơ bản nhất.", "我不想喝茶，我想喝水。", "Wǒ bù xiǎng hē chá, wǒ xiǎng hē shuǐ.", "Tôi không muốn uống trà, tôi muốn uống nước."),
        vocab("咖啡", "kāfēi", "cà phê", "danh từ", "Đồ uống so sánh với trà.", "老师想喝咖啡。", "Lǎoshī xiǎng hē kāfēi.", "Thầy/cô muốn uống cà phê."),
        vocab("吃", "chī", "ăn", "động từ", "Thường đi cùng cơm, mì, bánh.", "我想吃米饭。", "Wǒ xiǎng chī mǐfàn.", "Tôi muốn ăn cơm."),
        vocab("米饭", "mǐfàn", "cơm", "danh từ", "Món ăn cơ bản và quen thuộc.", "中午我想吃米饭。", "Zhōngwǔ wǒ xiǎng chī mǐfàn.", "Buổi trưa tôi muốn ăn cơm."),
        vocab("面条", "miàntiáo", "mì sợi", "danh từ", "Món ăn rất quen trong giáo trình đầu khóa.", "她想吃面条。", "Tā xiǎng chī miàntiáo.", "Cô ấy muốn ăn mì.")
      ],
      dialogueBlocks: [
        dialogueBlock("Muốn uống gì", "Đúng trọng tâm tên bài.", [
          study("A: 你想喝什么？", "A: Nǐ xiǎng hē shénme?", "A: Bạn muốn uống gì?"),
          study("B: 我想喝茶。", "B: Wǒ xiǎng hē chá.", "B: Tôi muốn uống trà."),
          study("A: 你想喝咖啡吗？", "A: Nǐ xiǎng hē kāfēi ma?", "A: Bạn có muốn uống cà phê không?"),
          study("B: 不，我想喝水。", "B: Bù, wǒ xiǎng hē shuǐ.", "B: Không, tôi muốn uống nước.")
        ]),
        dialogueBlock("Muốn ăn gì", "Chuyển từ uống sang ăn.", [
          study("A: 你想吃什么？", "A: Nǐ xiǎng chī shénme?", "A: Bạn muốn ăn gì?"),
          study("B: 我想吃米饭。", "B: Wǒ xiǎng chī mǐfàn.", "B: Tôi muốn ăn cơm."),
          study("A: 她呢？", "A: Tā ne?", "A: Còn cô ấy thì sao?"),
          study("B: 她想吃面条。", "B: Tā xiǎng chī miàntiáo.", "B: Cô ấy muốn ăn mì.")
        ]),
        dialogueBlock("Gọi đồ cho giáo viên", "Tình huống lịch sự hơn một chút.", [
          study("A: 老师，您想喝茶吗？", "A: Lǎoshī, nín xiǎng hē chá ma?", "A: Thầy/cô muốn uống trà không ạ?"),
          study("B: 我想喝咖啡。", "B: Wǒ xiǎng hē kāfēi.", "B: Tôi muốn uống cà phê."),
          study("A: 好，我给您咖啡。", "A: Hǎo, wǒ gěi nín kāfēi.", "A: Vâng, em lấy cà phê cho thầy/cô."),
          study("B: 谢谢。", "B: Xièxie.", "B: Cảm ơn.")
        ]),
        dialogueBlock("Nói điều mình không muốn", "Luyện phủ định với 不想.", [
          study("A: 你想喝茶吗？", "A: Nǐ xiǎng hē chá ma?", "A: Bạn muốn uống trà không?"),
          study("B: 我不想喝茶。", "B: Wǒ bù xiǎng hē chá.", "B: Tôi không muốn uống trà."),
          study("A: 那你想喝什么？", "A: Nà nǐ xiǎng hē shénme?", "A: Vậy bạn muốn uống gì?"),
          study("B: 我想喝水。", "B: Wǒ xiǎng hē shuǐ.", "B: Tôi muốn uống nước.")
        ])
      ],
      grammarNotes: [
        grammarNote("1. 想 + động từ", "Muốn nói mình muốn làm gì, đặt 想 trước động từ chính.", study("我想喝茶。", "Wǒ xiǎng hē chá.", "Tôi muốn uống trà."), [
          study("我想喝水。", "Wǒ xiǎng hē shuǐ.", "Tôi muốn uống nước."),
          study("我想吃米饭。", "Wǒ xiǎng chī mǐfàn.", "Tôi muốn ăn cơm."),
          study("她想吃面条。", "Tā xiǎng chī miàntiáo.", "Cô ấy muốn ăn mì.")
        ]),
        grammarNote("2. Phủ định với 不想", "Nếu không muốn làm gì, thêm 不 trước 想.", study("我不想喝茶。", "Wǒ bù xiǎng hē chá.", "Tôi không muốn uống trà."), [
          study("我不想喝咖啡。", "Wǒ bù xiǎng hē kāfēi.", "Tôi không muốn uống cà phê."),
          study("他不想吃米饭。", "Tā bù xiǎng chī mǐfàn.", "Anh ấy không muốn ăn cơm."),
          study("老师不想喝茶。", "Lǎoshī bù xiǎng hē chá.", "Thầy/cô không muốn uống trà.")
        ]),
        grammarNote("3. Hỏi mong muốn với 什么", "Có thể hỏi người kia muốn ăn hoặc uống gì bằng 什么.", study("你想喝什么？", "Nǐ xiǎng hē shénme?", "Bạn muốn uống gì?"), [
          study("你想吃什么？", "Nǐ xiǎng chī shénme?", "Bạn muốn ăn gì?"),
          study("老师想喝什么？", "Lǎoshī xiǎng hē shénme?", "Thầy/cô muốn uống gì?"),
          study("你想买什么？", "Nǐ xiǎng mǎi shénme?", "Bạn muốn mua gì?")
        ])
      ],
      studyExercises: buildExercises(
        [{ question: "Nối từ với nghĩa.", prompt: ["1. 想", "2. 喝", "3. 茶"], options: ["a. trà", "b. uống", "c. muốn"], answer: "1-c, 2-b, 3-a" }],
        [{ question: "Điền từ thích hợp.", prompt: ["我___喝茶。", "她想___面条。", "你想喝什___？"], answer: "想 / 吃 / 么" }],
        [{ question: "Câu nào đúng để nói 'Tôi muốn uống trà'?", options: ["A. 我喝想茶。", "B. 我想喝茶。", "C. 我茶想喝。"], answer: "B. 我想喝茶。" }],
        [{ question: "Hoàn thành hội thoại.", prompt: ["A: 你想喝什么？", "B: ____________", "A: 你想吃什么？"], answer: "B: 我想喝茶。" }],
        "Tự kiểm tra: bạn có thể nói mình muốn ăn gì, uống gì và không muốn gì chưa?"
      ),
      quickSummary: {
        words: ["想", "喝", "茶", "水", "咖啡", "吃", "米饭", "面条"],
        patterns: ["我想喝茶。", "我不想喝茶。", "你想吃什么？"],
        reminder: "想 đứng trước động từ chính; phủ định bằng 不想."
      }
    }),
    hsk1Lesson({
      number: 9,
      titleChinese: "你儿子在哪儿工作？",
      titlePinyin: "Nǐ érzi zài nǎr gōngzuò?",
      vietnameseTitle: "Con trai anh làm việc ở đâu?",
      objective: "Hỏi nơi làm việc, nghề nghiệp đơn giản và dùng 在哪儿 + động từ để hỏi địa điểm hành động.",
      vocabulary: [
        vocab("工作", "gōngzuò", "làm việc", "động từ", "Động từ trọng tâm của bài.", "你在哪儿工作？", "Nǐ zài nǎr gōngzuò?", "Bạn làm việc ở đâu?"),
        vocab("在哪儿", "zài nǎr", "ở đâu", "cụm nghi vấn", "Dùng để hỏi địa điểm.", "你儿子在哪儿工作？", "Nǐ érzi zài nǎr gōngzuò?", "Con trai anh làm việc ở đâu?"),
        vocab("公司", "gōngsī", "công ty", "danh từ", "Địa điểm làm việc cơ bản.", "他在公司工作。", "Tā zài gōngsī gōngzuò.", "Anh ấy làm việc ở công ty."),
        vocab("医院", "yīyuàn", "bệnh viện", "danh từ", "Địa điểm làm việc phổ biến trong bài đầu.", "她在医院工作。", "Tā zài yīyuàn gōngzuò.", "Cô ấy làm việc ở bệnh viện."),
        vocab("学校", "xuéxiào", "trường học", "danh từ", "Có thể là nơi học hoặc làm việc.", "我妈妈在学校工作。", "Wǒ māma zài xuéxiào gōngzuò.", "Mẹ tôi làm việc ở trường."),
        vocab("北京", "Běijīng", "Bắc Kinh", "danh từ riêng", "Tên thành phố hay gặp trong giáo trình.", "他在北京工作。", "Tā zài Běijīng gōngzuò.", "Anh ấy làm việc ở Bắc Kinh."),
        vocab("儿子", "érzi", "con trai", "danh từ", "Thành viên gia đình dùng trong bài.", "你儿子在哪儿工作？", "Nǐ érzi zài nǎr gōngzuò?", "Con trai anh làm việc ở đâu?"),
        vocab("医生", "yīshēng", "bác sĩ", "danh từ", "Nghề nghiệp đơn giản và quen thuộc.", "她是医生。", "Tā shì yīshēng.", "Cô ấy là bác sĩ.")
      ],
      dialogueBlocks: [
        dialogueBlock("Hỏi nơi làm việc của con trai", "Đúng trọng tâm tên bài.", [
          study("A: 你儿子在哪儿工作？", "A: Nǐ érzi zài nǎr gōngzuò?", "A: Con trai anh làm việc ở đâu?"),
          study("B: 他在北京工作。", "B: Tā zài Běijīng gōngzuò.", "B: Nó làm việc ở Bắc Kinh."),
          study("A: 他在公司工作吗？", "A: Tā zài gōngsī gōngzuò ma?", "A: Nó làm việc ở công ty à?"),
          study("B: 对。", "B: Duì.", "B: Đúng vậy.")
        ]),
        dialogueBlock("Hỏi nơi làm việc của mẹ", "Luyện với các địa điểm khác nhau.", [
          study("A: 你妈妈在哪儿工作？", "A: Nǐ māma zài nǎr gōngzuò?", "A: Mẹ bạn làm việc ở đâu?"),
          study("B: 她在学校工作。", "B: Tā zài xuéxiào gōngzuò.", "B: Bà ấy làm việc ở trường."),
          study("A: 她是老师吗？", "A: Tā shì lǎoshī ma?", "A: Bà ấy là giáo viên phải không?"),
          study("B: 是。", "B: Shì.", "B: Đúng.")
        ]),
        dialogueBlock("Nói nghề nghiệp", "Ghép nghề nghiệp và địa điểm.", [
          study("A: 她在哪儿工作？", "A: Tā zài nǎr gōngzuò?", "A: Cô ấy làm việc ở đâu?"),
          study("B: 她在医院工作。", "B: Tā zài yīyuàn gōngzuò.", "B: Cô ấy làm việc ở bệnh viện."),
          study("A: 她是医生吗？", "A: Tā shì yīshēng ma?", "A: Cô ấy là bác sĩ phải không?"),
          study("B: 是，她是医生。", "B: Shì, tā shì yīshēng.", "B: Đúng, cô ấy là bác sĩ.")
        ]),
        dialogueBlock("Hỏi bạn làm việc ở đâu", "Ứng dụng mẫu hỏi sang ngôi thứ hai.", [
          study("A: 你在哪儿工作？", "A: Nǐ zài nǎr gōngzuò?", "A: Bạn làm việc ở đâu?"),
          study("B: 我在公司工作。", "B: Wǒ zài gōngsī gōngzuò.", "B: Tôi làm việc ở công ty."),
          study("A: 你在北京吗？", "A: Nǐ zài Běijīng ma?", "A: Bạn ở Bắc Kinh à?"),
          study("B: 对。", "B: Duì.", "B: Đúng.")
        ])
      ],
      grammarNotes: [
        grammarNote("1. 在哪儿 + động từ", "Muốn hỏi một hành động diễn ra ở đâu, đặt 在哪儿 trước động từ chính.", study("你儿子在哪儿工作？", "Nǐ érzi zài nǎr gōngzuò?", "Con trai anh làm việc ở đâu?"), [
          study("你在哪儿工作？", "Nǐ zài nǎr gōngzuò?", "Bạn làm việc ở đâu?"),
          study("她在哪儿学习？", "Tā zài nǎr xuéxí?", "Cô ấy học ở đâu?"),
          study("老师在哪儿住？", "Lǎoshī zài nǎr zhù?", "Giáo viên sống ở đâu?")
        ]),
        grammarNote("2. 在 + nơi chốn + động từ", "Khi trả lời, nêu địa điểm sau 在 rồi mới nói động từ.", study("他在公司工作。", "Tā zài gōngsī gōngzuò.", "Anh ấy làm việc ở công ty."), [
          study("她在医院工作。", "Tā zài yīyuàn gōngzuò.", "Cô ấy làm việc ở bệnh viện."),
          study("我在学校学习。", "Wǒ zài xuéxiào xuéxí.", "Tôi học ở trường."),
          study("他在北京工作。", "Tā zài Běijīng gōngzuò.", "Anh ấy làm việc ở Bắc Kinh.")
        ]),
        grammarNote("3. Kết hợp nghề nghiệp với 是", "Có thể nói vừa nơi làm việc vừa nghề nghiệp bằng hai câu ngắn nối tiếp.", study("她在医院工作。她是医生。", "Tā zài yīyuàn gōngzuò. Tā shì yīshēng.", "Cô ấy làm việc ở bệnh viện. Cô ấy là bác sĩ."), [
          study("她在学校工作。她是老师。", "Tā zài xuéxiào gōngzuò. Tā shì lǎoshī.", "Cô ấy làm việc ở trường. Cô ấy là giáo viên."),
          study("他在公司工作。他是经理。", "Tā zài gōngsī gōngzuò. Tā shì jīnglǐ.", "Anh ấy làm việc ở công ty. Anh ấy là quản lý."),
          study("我在医院工作。我是医生。", "Wǒ zài yīyuàn gōngzuò. Wǒ shì yīshēng.", "Tôi làm việc ở bệnh viện. Tôi là bác sĩ.")
        ])
      ],
      studyExercises: buildExercises(
        [{ question: "Nối từ với nghĩa.", prompt: ["1. 工作", "2. 公司", "3. 医院"], options: ["a. bệnh viện", "b. công ty", "c. làm việc"], answer: "1-c, 2-b, 3-a" }],
        [{ question: "Điền từ thích hợp.", prompt: ["你儿子在___工作？", "他在北京___。", "她在___工作。"], answer: "哪儿 / 工作 / 医院" }],
        [{ question: "Muốn hỏi 'Bạn làm việc ở đâu?', chọn câu nào?", options: ["A. 你在哪儿工作？", "B. 你几号工作？", "C. 你会工作吗？"], answer: "A. 你在哪儿工作？" }],
        [{ question: "Hoàn thành hội thoại.", prompt: ["A: 你儿子在哪儿工作？", "B: ____________", "A: 他在公司工作吗？"], answer: "B: 他在北京工作。" }],
        "Tự kiểm tra: bạn có thể hỏi nơi làm việc của mình và của người thân chưa?"
      ),
      quickSummary: {
        words: ["工作", "在哪儿", "公司", "医院", "学校", "北京", "儿子"],
        patterns: ["你儿子在哪儿工作？", "他在北京工作。", "她在医院工作。"],
        reminder: "Hỏi nơi làm việc: 在哪儿 + động từ. Trả lời: 在 + nơi chốn + động từ."
      }
    }),
    hsk1Lesson({
      number: 10,
      titleChinese: "我能坐这儿吗？",
      titlePinyin: "Wǒ néng zuò zhèr ma?",
      vietnameseTitle: "Tôi có thể ngồi ở đây được không?",
      objective: "Xin phép đơn giản trong lớp hoặc nơi công cộng bằng 能 và nói vị trí 这儿 / 那儿.",
      vocabulary: [
        vocab("能", "néng", "có thể", "động từ năng nguyện", "Dùng để xin phép hoặc nói khả năng được phép.", "我能坐这儿吗？", "Wǒ néng zuò zhèr ma?", "Tôi có thể ngồi ở đây được không?"),
        vocab("坐", "zuò", "ngồi", "động từ", "Động từ chính trong bài.", "你坐那儿吧。", "Nǐ zuò nàr ba.", "Bạn ngồi ở kia đi."),
        vocab("这儿", "zhèr", "ở đây", "đại từ nơi chốn", "Chỉ vị trí gần người nói.", "我坐这儿。", "Wǒ zuò zhèr.", "Tôi ngồi ở đây."),
        vocab("那儿", "nàr", "ở kia", "đại từ nơi chốn", "Chỉ vị trí xa người nói hơn.", "他在那儿。", "Tā zài nàr.", "Anh ấy ở kia."),
        vocab("请问", "qǐngwèn", "xin hỏi", "cụm giao tiếp", "Dùng để mở lời lịch sự.", "请问，我能坐这儿吗？", "Qǐngwèn, wǒ néng zuò zhèr ma?", "Xin hỏi, tôi có thể ngồi ở đây được không?"),
        vocab("里面", "lǐmiàn", "bên trong", "danh từ vị trí", "Dùng để chỉ vị trí ở trong.", "里面有人吗？", "Lǐmiàn yǒu rén ma?", "Bên trong có người không?"),
        vocab("外面", "wàimiàn", "bên ngoài", "danh từ vị trí", "Đối lập với 里面.", "他在外面。", "Tā zài wàimiàn.", "Anh ấy ở bên ngoài."),
        vocab("位子", "wèizi", "chỗ ngồi", "danh từ", "Dùng khi tìm chỗ ngồi.", "这儿有位子。", "Zhèr yǒu wèizi.", "Ở đây có chỗ ngồi.")
      ],
      dialogueBlocks: [
        dialogueBlock("Xin phép ngồi", "Đúng trọng tâm tên bài.", [
          study("A: 请问，我能坐这儿吗？", "A: Qǐngwèn, wǒ néng zuò zhèr ma?", "A: Xin hỏi, tôi có thể ngồi ở đây được không?"),
          study("B: 能，请坐。", "B: Néng, qǐng zuò.", "B: Được, mời ngồi."),
          study("A: 谢谢。", "A: Xièxie.", "A: Cảm ơn."),
          study("B: 不客气。", "B: Bú kèqi.", "B: Không có gì.")
        ]),
        dialogueBlock("Chỉ chỗ khác", "Khi chỗ đang hỏi không phù hợp.", [
          study("A: 我能坐这儿吗？", "A: Wǒ néng zuò zhèr ma?", "A: Tôi có thể ngồi ở đây được không?"),
          study("B: 对不起，这儿有人。", "B: Duìbuqǐ, zhèr yǒu rén.", "B: Xin lỗi, ở đây có người rồi."),
          study("A: 那我坐哪儿？", "A: Nà wǒ zuò nǎr?", "A: Vậy tôi ngồi ở đâu?"),
          study("B: 你坐那儿吧。", "B: Nǐ zuò nàr ba.", "B: Bạn ngồi ở kia đi.")
        ]),
        dialogueBlock("Hỏi trong hay ngoài", "Luyện từ chỉ vị trí.", [
          study("A: 他在哪儿？", "A: Tā zài nǎr?", "A: Anh ấy ở đâu?"),
          study("B: 他在外面。", "B: Tā zài wàimiàn.", "B: Anh ấy ở bên ngoài."),
          study("A: 里面有人吗？", "A: Lǐmiàn yǒu rén ma?", "A: Bên trong có người không?"),
          study("B: 有。", "B: Yǒu.", "B: Có.")
        ]),
        dialogueBlock("Mời khách ngồi", "Dùng 请问 và 请坐 tự nhiên.", [
          study("A: 请问，王老师在吗？", "A: Qǐngwèn, Wáng lǎoshī zài ma?", "A: Xin hỏi, thầy/cô Vương có ở đây không ạ?"),
          study("B: 在，您请坐。", "B: Zài, nín qǐng zuò.", "B: Có ạ, mời cô/chú ngồi."),
          study("A: 我坐这儿吧。", "A: Wǒ zuò zhèr ba.", "A: Tôi ngồi ở đây nhé."),
          study("B: 好。", "B: Hǎo.", "B: Vâng.")
        ])
      ],
      grammarNotes: [
        grammarNote("1. 能 + động từ", "能 đứng trước động từ để hỏi xin phép hoặc nói điều được phép làm.", study("我能坐这儿吗？", "Wǒ néng zuò zhèr ma?", "Tôi có thể ngồi ở đây được không?"), [
          study("我能进去吗？", "Wǒ néng jìnqù ma?", "Tôi có thể vào được không?"),
          study("我能看这本书吗？", "Wǒ néng kàn zhè běn shū ma?", "Tôi có thể xem cuốn sách này không?"),
          study("我能问一个问题吗？", "Wǒ néng wèn yí ge wèntí ma?", "Tôi có thể hỏi một câu được không?")
        ]),
        grammarNote("2. 这儿 / 那儿", "Dùng 这儿 để chỉ vị trí gần, 那儿 để chỉ vị trí xa hơn.", study("我坐这儿。", "Wǒ zuò zhèr.", "Tôi ngồi ở đây."), [
          study("你坐那儿吧。", "Nǐ zuò nàr ba.", "Bạn ngồi ở kia đi."),
          study("书在这儿。", "Shū zài zhèr.", "Sách ở đây."),
          study("老师在那儿。", "Lǎoshī zài nàr.", "Giáo viên ở kia.")
        ]),
        grammarNote("3. Câu hỏi xin phép với 吗", "Khi xin phép, thường dùng mẫu 能 + động từ + 吗？", study("我能坐这儿吗？", "Wǒ néng zuò zhèr ma?", "Tôi có thể ngồi ở đây được không?"), [
          study("我能进去吗？", "Wǒ néng jìnqù ma?", "Tôi có thể vào được không?"),
          study("我能用你的笔吗？", "Wǒ néng yòng nǐ de bǐ ma?", "Tôi có thể dùng bút của bạn không?"),
          study("我能现在走吗？", "Wǒ néng xiànzài zǒu ma?", "Bây giờ tôi có thể đi được không?")
        ])
      ],
      studyExercises: buildExercises(
        [{ question: "Nối từ với nghĩa.", prompt: ["1. 能", "2. 这儿", "3. 那儿"], options: ["a. ở kia", "b. có thể", "c. ở đây"], answer: "1-b, 2-c, 3-a" }],
        [{ question: "Điền từ thích hợp.", prompt: ["我___坐这儿吗？", "你坐那___吧。", "请___，老师在吗？"], answer: "能 / 儿 / 问" }],
        [{ question: "Câu nào đúng để xin phép ngồi?", options: ["A. 我坐这儿吗？", "B. 我能坐这儿吗？", "C. 我这儿能坐。"], answer: "B. 我能坐这儿吗？" }],
        [{ question: "Hoàn thành hội thoại.", prompt: ["A: 请问，我能坐这儿吗？", "B: ____________", "A: 谢谢。"], answer: "B: 能，请坐。" }],
        "Tự kiểm tra: bạn có thể xin phép làm một việc bằng 能 ... 吗 chưa?"
      ),
      quickSummary: {
        words: ["能", "坐", "这儿", "那儿", "请问", "里面", "外面"],
        patterns: ["我能坐这儿吗？", "你坐那儿吧。", "他在外面。"],
        reminder: "Khi xin phép, cứ nhớ mẫu rất gọn: 我能 ... 吗？"
      }
    }),
    hsk1Lesson({
      number: 11,
      titleChinese: "现在几点？",
      titlePinyin: "Xiànzài jǐ diǎn?",
      vietnameseTitle: "Bây giờ là mấy giờ?",
      objective: "Hỏi giờ và nói thời gian đơn giản bằng 点, 分, 半, 早上, 下午, 晚上.",
      vocabulary: [
        vocab("现在", "xiànzài", "bây giờ", "danh từ thời gian", "Từ hỏi giờ rất hay gặp.", "现在几点？", "Xiànzài jǐ diǎn?", "Bây giờ là mấy giờ?"),
        vocab("几点", "jǐ diǎn", "mấy giờ", "cụm nghi vấn", "Dùng để hỏi giờ chẵn hoặc giờ nói chung.", "现在几点？", "Xiànzài jǐ diǎn?", "Bây giờ là mấy giờ?"),
        vocab("点", "diǎn", "giờ", "danh từ thời gian", "Đơn vị cơ bản để nói giờ.", "现在八点。", "Xiànzài bā diǎn.", "Bây giờ là 8 giờ."),
        vocab("分", "fēn", "phút", "danh từ thời gian", "Đơn vị nói phút.", "现在八点十分。", "Xiànzài bā diǎn shí fēn.", "Bây giờ là 8 giờ 10 phút."),
        vocab("半", "bàn", "rưỡi", "danh từ thời gian", "Dùng sau 点 để chỉ 30 phút.", "现在八点半。", "Xiànzài bā diǎn bàn.", "Bây giờ là 8 giờ rưỡi."),
        vocab("早上", "zǎoshang", "buổi sáng", "danh từ thời gian", "Dùng trước động từ hoặc trước giờ.", "我早上七点起床。", "Wǒ zǎoshang qī diǎn qǐchuáng.", "Tôi thức dậy lúc 7 giờ sáng."),
        vocab("下午", "xiàwǔ", "buổi chiều", "danh từ thời gian", "Một mốc thời gian cơ bản trong ngày.", "我们下午上课。", "Wǒmen xiàwǔ shàngkè.", "Chúng tôi học vào buổi chiều."),
        vocab("晚上", "wǎnshang", "buổi tối", "danh từ thời gian", "Dùng cho hoạt động tối.", "我晚上学习汉语。", "Wǒ wǎnshang xuéxí Hànyǔ.", "Tôi học tiếng Trung vào buổi tối.")
      ],
      dialogueBlocks: [
        dialogueBlock("Hỏi giờ hiện tại", "Đúng tên bài và rất ngắn.", [
          study("A: 现在几点？", "A: Xiànzài jǐ diǎn?", "A: Bây giờ là mấy giờ?"),
          study("B: 现在八点。", "B: Xiànzài bā diǎn.", "B: Bây giờ là 8 giờ."),
          study("A: 八点十分吗？", "A: Bā diǎn shí fēn ma?", "A: 8 giờ 10 phút phải không?"),
          study("B: 不是，八点。", "B: Bú shì, bā diǎn.", "B: Không, 8 giờ thôi.")
        ]),
        dialogueBlock("Nói giờ có rưỡi", "Luyện 半.", [
          study("A: 你几点上课？", "A: Nǐ jǐ diǎn shàngkè?", "A: Bạn vào học lúc mấy giờ?"),
          study("B: 我八点半上课。", "B: Wǒ bā diǎn bàn shàngkè.", "B: Tôi vào học lúc 8 giờ rưỡi."),
          study("A: 早上吗？", "A: Zǎoshang ma?", "A: Buổi sáng à?"),
          study("B: 对。", "B: Duì.", "B: Đúng.")
        ]),
        dialogueBlock("Nói thời gian trong ngày", "Luyện kết hợp thời gian và hoạt động.", [
          study("A: 你晚上做什么？", "A: Nǐ wǎnshang zuò shénme?", "A: Buổi tối bạn làm gì?"),
          study("B: 我晚上学习汉语。", "B: Wǒ wǎnshang xuéxí Hànyǔ.", "B: Buổi tối tôi học tiếng Trung."),
          study("A: 你早上几点起床？", "A: Nǐ zǎoshang jǐ diǎn qǐchuáng?", "A: Buổi sáng bạn thức dậy lúc mấy giờ?"),
          study("B: 我早上七点起床。", "B: Wǒ zǎoshang qī diǎn qǐchuáng.", "B: Tôi thức dậy lúc 7 giờ sáng.")
        ]),
        dialogueBlock("Hẹn gặp", "Ứng dụng hỏi giờ trong giao tiếp đơn giản.", [
          study("A: 我们下午几点见？", "A: Wǒmen xiàwǔ jǐ diǎn jiàn?", "A: Chiều nay chúng ta gặp lúc mấy giờ?"),
          study("B: 下午三点。", "B: Xiàwǔ sān diǎn.", "B: 3 giờ chiều."),
          study("A: 好，三点见。", "A: Hǎo, sān diǎn jiàn.", "A: Được, 3 giờ gặp nhé."),
          study("B: 好。", "B: Hǎo.", "B: Được.")
        ])
      ],
      grammarNotes: [
        grammarNote("1. Hỏi giờ với 几点", "Dùng 几点 để hỏi thời gian. Mẫu căn bản nhất là 现在几点？", study("现在几点？", "Xiànzài jǐ diǎn?", "Bây giờ là mấy giờ?"), [
          study("你几点上课？", "Nǐ jǐ diǎn shàngkè?", "Bạn vào học lúc mấy giờ?"),
          study("你几点回家？", "Nǐ jǐ diǎn huí jiā?", "Bạn về nhà lúc mấy giờ?"),
          study("我们几点见？", "Wǒmen jǐ diǎn jiàn?", "Chúng ta gặp lúc mấy giờ?")
        ]),
        grammarNote("2. Cách nói giờ", "Giờ nói bằng 点, phút nói bằng 分, còn rưỡi dùng 半 sau 点.", study("八点半", "Bā diǎn bàn", "8 giờ rưỡi"), [
          study("八点。", "Bā diǎn.", "8 giờ."),
          study("八点十分。", "Bā diǎn shí fēn.", "8 giờ 10 phút."),
          study("三点半。", "Sān diǎn bàn.", "3 giờ rưỡi.")
        ]),
        grammarNote("3. Thời gian đứng trước động từ", "Khi nói hoạt động vào lúc nào, từ chỉ thời gian thường đứng trước động từ chính.", study("我晚上学习汉语。", "Wǒ wǎnshang xuéxí Hànyǔ.", "Tôi học tiếng Trung vào buổi tối."), [
          study("我早上七点起床。", "Wǒ zǎoshang qī diǎn qǐchuáng.", "Tôi thức dậy lúc 7 giờ sáng."),
          study("我们下午上课。", "Wǒmen xiàwǔ shàngkè.", "Chúng tôi học vào buổi chiều."),
          study("他晚上回家。", "Tā wǎnshang huí jiā.", "Anh ấy về nhà vào buổi tối.")
        ])
      ],
      studyExercises: buildExercises(
        [{ question: "Nối từ với nghĩa.", prompt: ["1. 点", "2. 分", "3. 半"], options: ["a. phút", "b. rưỡi", "c. giờ"], answer: "1-c, 2-a, 3-b" }],
        [{ question: "Điền từ thích hợp.", prompt: ["现在几___？", "八点___。", "我___上七点起床。"], answer: "点 / 半 / 早" }],
        [{ question: "Câu nào đúng để hỏi giờ hiện tại?", options: ["A. 现在几号？", "B. 现在几点？", "C. 现在在哪儿？"], answer: "B. 现在几点？" }],
        [{ question: "Hoàn thành hội thoại.", prompt: ["A: 现在几点？", "B: ____________", "A: 你几点上课？"], answer: "B: 现在八点。" }],
        "Tự kiểm tra: bạn có thể nói giờ chẵn, giờ có phút và giờ rưỡi chưa?"
      ),
      quickSummary: {
        words: ["现在", "几点", "点", "分", "半", "早上", "下午", "晚上"],
        patterns: ["现在几点？", "我八点半上课。", "我晚上学习汉语。"],
        reminder: "Nói giờ: 点 / 分 / 半; nói lúc nào làm gì: thời gian đứng trước động từ."
      }
    }),
    hsk1Lesson({
      number: 12,
      titleChinese: "明天天气怎么样？",
      titlePinyin: "Míngtiān tiānqì zěnmeyàng?",
      vietnameseTitle: "Ngày mai thời tiết thế nào?",
      objective: "Hỏi và mô tả thời tiết cơ bản bằng 好, 热, 冷, 下雨 và thời gian như 今天, 明天.",
      vocabulary: [
        vocab("明天", "míngtiān", "ngày mai", "danh từ thời gian", "Từ chỉ ngày kế tiếp.", "明天天气怎么样？", "Míngtiān tiānqì zěnmeyàng?", "Ngày mai thời tiết thế nào?"),
        vocab("天气", "tiānqì", "thời tiết", "danh từ", "Chủ đề chính của bài.", "今天天气很好。", "Jīntiān tiānqì hěn hǎo.", "Hôm nay thời tiết rất đẹp."),
        vocab("怎么样", "zěnmeyàng", "thế nào", "đại từ nghi vấn", "Dùng để hỏi tình trạng, mức độ.", "明天天气怎么样？", "Míngtiān tiānqì zěnmeyàng?", "Ngày mai thời tiết thế nào?"),
        vocab("热", "rè", "nóng", "tính từ", "Dùng để nói thời tiết hoặc cảm giác nóng.", "今天很热。", "Jīntiān hěn rè.", "Hôm nay rất nóng."),
        vocab("冷", "lěng", "lạnh", "tính từ", "Trạng thái ngược với nóng.", "明天不冷。", "Míngtiān bù lěng.", "Ngày mai không lạnh."),
        vocab("下雨", "xiàyǔ", "mưa", "động từ", "Dùng để nói trời mưa.", "今天下雨吗？", "Jīntiān xiàyǔ ma?", "Hôm nay có mưa không?"),
        vocab("好", "hǎo", "đẹp; tốt", "tính từ", "Dùng trong nhận xét thời tiết đơn giản.", "今天天气很好。", "Jīntiān tiānqì hěn hǎo.", "Hôm nay thời tiết rất đẹp."),
        vocab("今天", "jīntiān", "hôm nay", "danh từ thời gian", "Mốc so sánh với 明天.", "今天天气不热。", "Jīntiān tiānqì bú rè.", "Hôm nay thời tiết không nóng.")
      ],
      dialogueBlocks: [
        dialogueBlock("Hỏi thời tiết ngày mai", "Đúng trọng tâm tên bài.", [
          study("A: 明天天气怎么样？", "A: Míngtiān tiānqì zěnmeyàng?", "A: Ngày mai thời tiết thế nào?"),
          study("B: 明天天气很好。", "B: Míngtiān tiānqì hěn hǎo.", "B: Ngày mai thời tiết rất đẹp."),
          study("A: 热吗？", "A: Rè ma?", "A: Có nóng không?"),
          study("B: 不热。", "B: Bú rè.", "B: Không nóng.")
        ]),
        dialogueBlock("Nói về hôm nay", "So sánh với ngày mai.", [
          study("A: 今天天气怎么样？", "A: Jīntiān tiānqì zěnmeyàng?", "A: Hôm nay thời tiết thế nào?"),
          study("B: 今天天气很热。", "B: Jīntiān tiānqì hěn rè.", "B: Hôm nay thời tiết rất nóng."),
          study("A: 下雨吗？", "A: Xiàyǔ ma?", "A: Có mưa không?"),
          study("B: 不下雨。", "B: Bù xiàyǔ.", "B: Không mưa.")
        ]),
        dialogueBlock("Nói lạnh hay không", "Luyện tính từ thời tiết.", [
          study("A: 明天冷吗？", "A: Míngtiān lěng ma?", "A: Ngày mai có lạnh không?"),
          study("B: 不冷。", "B: Bù lěng.", "B: Không lạnh."),
          study("A: 今天呢？", "A: Jīntiān ne?", "A: Còn hôm nay thì sao?"),
          study("B: 今天也不冷。", "B: Jīntiān yě bù lěng.", "B: Hôm nay cũng không lạnh.")
        ]),
        dialogueBlock("Chuẩn bị đi ra ngoài", "Ứng dụng thời tiết vào đời sống.", [
          study("A: 我们明天出去吗？", "A: Wǒmen míngtiān chūqù ma?", "A: Ngày mai chúng ta đi ra ngoài không?"),
          study("B: 可以，明天天气好。", "B: Kěyǐ, míngtiān tiānqì hǎo.", "B: Được, ngày mai thời tiết đẹp."),
          study("A: 今天呢？", "A: Jīntiān ne?", "A: Còn hôm nay thì sao?"),
          study("B: 今天下雨。", "B: Jīntiān xiàyǔ.", "B: Hôm nay trời mưa.")
        ])
      ],
      grammarNotes: [
        grammarNote("1. Hỏi tình trạng với 怎么样", "怎么样 dùng để hỏi tình hình hoặc mức độ của một việc.", study("明天天气怎么样？", "Míngtiān tiānqì zěnmeyàng?", "Ngày mai thời tiết thế nào?"), [
          study("今天天气怎么样？", "Jīntiān tiānqì zěnmeyàng?", "Hôm nay thời tiết thế nào?"),
          study("你的汉语怎么样？", "Nǐ de Hànyǔ zěnmeyàng?", "Tiếng Trung của bạn thế nào?"),
          study("这本书怎么样？", "Zhè běn shū zěnmeyàng?", "Cuốn sách này thế nào?")
        ]),
        grammarNote("2. Tính từ thời tiết với 很", "Khi mô tả thời tiết, thường dùng 很 trước tính từ như 好, 热, 冷.", study("今天天气很好。", "Jīntiān tiānqì hěn hǎo.", "Hôm nay thời tiết rất đẹp."), [
          study("今天天气很热。", "Jīntiān tiānqì hěn rè.", "Hôm nay thời tiết rất nóng."),
          study("今天天气很冷。", "Jīntiān tiānqì hěn lěng.", "Hôm nay thời tiết rất lạnh."),
          study("明天天气很好。", "Míngtiān tiānqì hěn hǎo.", "Ngày mai thời tiết rất đẹp.")
        ]),
        grammarNote("3. Phủ định đơn giản với 不", "Khi nói không nóng, không lạnh, dùng 不 trước tính từ hoặc động từ.", study("明天不冷。", "Míngtiān bù lěng.", "Ngày mai không lạnh."), [
          study("今天不热。", "Jīntiān bú rè.", "Hôm nay không nóng."),
          study("今天不下雨。", "Jīntiān bù xiàyǔ.", "Hôm nay không mưa."),
          study("明天天气不好。", "Míngtiān tiānqì bù hǎo.", "Ngày mai thời tiết không đẹp.")
        ])
      ],
      studyExercises: buildExercises(
        [{ question: "Nối từ với nghĩa.", prompt: ["1. 天气", "2. 热", "3. 冷"], options: ["a. lạnh", "b. thời tiết", "c. nóng"], answer: "1-b, 2-c, 3-a" }],
        [{ question: "Điền từ thích hợp.", prompt: ["明天___气怎么样？", "今天很___。", "今天下___吗？"], answer: "天 / 热 / 雨" }],
        [{ question: "Muốn hỏi 'Ngày mai thời tiết thế nào?', chọn câu nào?", options: ["A. 明天几号？", "B. 明天天气怎么样？", "C. 明天几点？"], answer: "B. 明天天气怎么样？" }],
        [{ question: "Hoàn thành hội thoại.", prompt: ["A: 明天天气怎么样？", "B: ____________", "A: 热吗？"], answer: "B: 明天天气很好。" }],
        "Tự kiểm tra: bạn có thể nói trời đẹp, nóng, lạnh, mưa và hỏi thời tiết ngày mai chưa?"
      ),
      quickSummary: {
        words: ["明天", "天气", "怎么样", "热", "冷", "下雨", "好"],
        patterns: ["明天天气怎么样？", "今天天气很热。", "明天不冷。"],
        reminder: "Hỏi thời tiết dùng 怎么样; mô tả thời tiết thường dùng 很 + tính từ."
      }
    }),
    hsk1Lesson({
      number: 13,
      titleChinese: "他在学做中国菜呢。",
      titlePinyin: "Tā zài xué zuò Zhōngguó cài ne.",
      vietnameseTitle: "Anh ấy đang học nấu món ăn Trung Quốc.",
      objective: "Nói hành động đang diễn ra bằng 在 ... 呢 và mô tả việc đang học làm một việc.",
      vocabulary: [
        vocab("在", "zài", "đang", "phó từ", "Khi đứng trước động từ, 在 cho biết hành động đang diễn ra.", "他在学习。", "Tā zài xuéxí.", "Anh ấy đang học."),
        vocab("学", "xué", "học", "động từ", "Động từ rất quen thuộc trong HSK 1.", "我在学汉语。", "Wǒ zài xué Hànyǔ.", "Tôi đang học tiếng Trung."),
        vocab("做", "zuò", "làm; nấu", "động từ", "Trong bài này dùng với món ăn.", "她在做饭。", "Tā zài zuò fàn.", "Cô ấy đang nấu cơm."),
        vocab("中国菜", "Zhōngguó cài", "món ăn Trung Quốc", "danh từ", "Nội dung trọng tâm của bài.", "他在学做中国菜。", "Tā zài xué zuò Zhōngguó cài.", "Anh ấy đang học nấu món ăn Trung Quốc."),
        vocab("呢", "ne", "đấy; đang ... đấy", "trợ từ", "Đặt cuối câu để làm nổi bật hành động đang diễn ra.", "他在做饭呢。", "Tā zài zuò fàn ne.", "Anh ấy đang nấu cơm đấy."),
        vocab("饭店", "fàndiàn", "nhà hàng", "danh từ", "Nơi ăn uống hoặc làm việc với món ăn.", "他们在饭店吃饭。", "Tāmen zài fàndiàn chīfàn.", "Họ ăn cơm ở nhà hàng."),
        vocab("做饭", "zuòfàn", "nấu cơm; nấu ăn", "động từ", "Hành động rất gần với 中国菜.", "妈妈在做饭。", "Māma zài zuòfàn.", "Mẹ đang nấu cơm."),
        vocab("一起", "yìqǐ", "cùng nhau", "phó từ", "Có thể dùng để rủ nhau làm việc gì.", "我们一起学做菜吧。", "Wǒmen yìqǐ xué zuò cài ba.", "Chúng ta cùng học nấu ăn nhé.")
      ],
      dialogueBlocks: [
        dialogueBlock("Anh ấy đang làm gì", "Đúng trọng tâm tên bài.", [
          study("A: 他在做什么呢？", "A: Tā zài zuò shénme ne?", "A: Anh ấy đang làm gì vậy?"),
          study("B: 他在学做中国菜呢。", "B: Tā zài xué zuò Zhōngguó cài ne.", "B: Anh ấy đang học nấu món ăn Trung Quốc."),
          study("A: 在家学吗？", "A: Zài jiā xué ma?", "A: Học ở nhà à?"),
          study("B: 对，在家学。", "B: Duì, zài jiā xué.", "B: Đúng, học ở nhà.")
        ]),
        dialogueBlock("Mẹ đang nấu cơm", "Mở rộng sang người thân.", [
          study("A: 你妈妈在哪儿？", "A: Nǐ māma zài nǎr?", "A: Mẹ bạn ở đâu?"),
          study("B: 她在厨房做饭呢。", "B: Tā zài chúfáng zuòfàn ne.", "B: Bà ấy đang nấu cơm ở bếp."),
          study("A: 你呢？", "A: Nǐ ne?", "A: Còn bạn thì sao?"),
          study("B: 我在看书。", "B: Wǒ zài kàn shū.", "B: Tôi đang đọc sách.")
        ]),
        dialogueBlock("Học cùng nhau", "Dùng 一起 với một hành động đang làm.", [
          study("A: 你们在学什么呢？", "A: Nǐmen zài xué shénme ne?", "A: Các bạn đang học gì vậy?"),
          study("B: 我们在学做中国菜。", "B: Wǒmen zài xué zuò Zhōngguó cài.", "B: Chúng tôi đang học nấu món ăn Trung Quốc."),
          study("A: 我也想学。", "A: Wǒ yě xiǎng xué.", "A: Tôi cũng muốn học."),
          study("B: 那我们一起学吧。", "B: Nà wǒmen yìqǐ xué ba.", "B: Vậy chúng ta cùng học nhé.")
        ]),
        dialogueBlock("Ăn ở nhà hàng", "Gắn 中国菜 với nhà hàng.", [
          study("A: 你喜欢中国菜吗？", "A: Nǐ xǐhuan Zhōngguó cài ma?", "A: Bạn thích món ăn Trung Quốc không?"),
          study("B: 喜欢。", "B: Xǐhuan.", "B: Thích."),
          study("A: 我们去饭店吧。", "A: Wǒmen qù fàndiàn ba.", "A: Chúng ta đi nhà hàng nhé."),
          study("B: 好。", "B: Hǎo.", "B: Được.")
        ])
      ],
      grammarNotes: [
        grammarNote("1. 在 + động từ", "Khi nói một hành động đang diễn ra, đặt 在 trước động từ.", study("他在学习。", "Tā zài xuéxí.", "Anh ấy đang học."), [
          study("我在看书。", "Wǒ zài kàn shū.", "Tôi đang đọc sách."),
          study("她在做饭。", "Tā zài zuòfàn.", "Cô ấy đang nấu cơm."),
          study("我们在说汉语。", "Wǒmen zài shuō Hànyǔ.", "Chúng tôi đang nói tiếng Trung.")
        ]),
        grammarNote("2. 在 ... 呢", "呢 ở cuối câu làm câu nói tự nhiên hơn khi mô tả việc đang xảy ra ngay lúc nói.", study("他在学做中国菜呢。", "Tā zài xué zuò Zhōngguó cài ne.", "Anh ấy đang học nấu món ăn Trung Quốc."), [
          study("妈妈在做饭呢。", "Māma zài zuòfàn ne.", "Mẹ đang nấu cơm đấy."),
          study("老师在上课呢。", "Lǎoshī zài shàngkè ne.", "Thầy/cô đang dạy học đấy."),
          study("他在看电视呢。", "Tā zài kàn diànshì ne.", "Anh ấy đang xem ti vi đấy.")
        ]),
        grammarNote("3. 学做 + danh từ", "学做 nghĩa là học làm / học nấu một thứ gì đó. Trong bài này, đối tượng là 中国菜.", study("学做中国菜", "Xué zuò Zhōngguó cài", "Học nấu món ăn Trung Quốc"), [
          study("我在学做饭。", "Wǒ zài xué zuòfàn.", "Tôi đang học nấu cơm."),
          study("她在学做中国菜。", "Tā zài xué zuò Zhōngguó cài.", "Cô ấy đang học nấu món ăn Trung Quốc."),
          study("我们一起学做菜。", "Wǒmen yìqǐ xué zuò cài.", "Chúng tôi cùng học nấu ăn.")
        ])
      ],
      studyExercises: buildExercises(
        [{ question: "Nối từ với nghĩa.", prompt: ["1. 在", "2. 做", "3. 中国菜"], options: ["a. làm / nấu", "b. món ăn Trung Quốc", "c. đang"], answer: "1-c, 2-a, 3-b" }],
        [{ question: "Điền từ thích hợp.", prompt: ["他___学做中国菜呢。", "妈妈在___饭。", "我们一起学做___。"], answer: "在 / 做 / 菜" }],
        [{ question: "Câu nào đúng để nói 'Anh ấy đang học nấu món ăn Trung Quốc'?", options: ["A. 他学在做中国菜呢。", "B. 他在学做中国菜呢。", "C. 他做中国菜在学呢。"], answer: "B. 他在学做中国菜呢。" }],
        [{ question: "Hoàn thành hội thoại.", prompt: ["A: 他在做什么呢？", "B: ____________", "A: 在家学吗？"], answer: "B: 他在学做中国菜呢。" }],
        "Tự kiểm tra: bạn có thể nói một hành động đang diễn ra bằng 在 ... 呢 chưa?"
      ),
      quickSummary: {
        words: ["在", "学", "做", "中国菜", "呢", "做饭", "一起"],
        patterns: ["他在学做中国菜呢。", "妈妈在做饭呢。", "我们一起学做菜吧。"],
        reminder: "Muốn nhấn mạnh hành động đang diễn ra ngay lúc nói, dùng 在 + động từ + 呢."
      }
    }),
    hsk1Lesson({
      number: 14,
      titleChinese: "她买了不少衣服。",
      titlePinyin: "Tā mǎile bù shǎo yīfu.",
      vietnameseTitle: "Cô ấy đã mua nhiều quần áo.",
      objective: "Nói việc đã mua, số lượng khá nhiều và dùng 了 để chỉ hành động đã hoàn thành.",
      vocabulary: [
        vocab("买", "mǎi", "mua", "động từ", "Động từ chính của bài.", "她买了不少衣服。", "Tā mǎile bù shǎo yīfu.", "Cô ấy đã mua nhiều quần áo."),
        vocab("了", "le", "đã; rồi", "trợ từ", "Đặt sau động từ để nói hành động đã xảy ra.", "我买了两本书。", "Wǒ mǎile liǎng běn shū.", "Tôi đã mua hai quyển sách."),
        vocab("不少", "bù shǎo", "khá nhiều", "số lượng từ", "Dùng để nói số lượng tương đối nhiều.", "今天我买了不少东西。", "Jīntiān wǒ mǎile bù shǎo dōngxi.", "Hôm nay tôi đã mua khá nhiều đồ."),
        vocab("衣服", "yīfu", "quần áo", "danh từ", "Đồ vật trung tâm của bài.", "她喜欢买衣服。", "Tā xǐhuan mǎi yīfu.", "Cô ấy thích mua quần áo."),
        vocab("件", "jiàn", "cái; chiếc", "lượng từ", "Lượng từ thường dùng cho quần áo.", "我买了两件衣服。", "Wǒ mǎile liǎng jiàn yīfu.", "Tôi đã mua hai bộ quần áo."),
        vocab("裤子", "kùzi", "quần", "danh từ", "Một loại quần áo cơ bản.", "她买了一条裤子。", "Tā mǎile yì tiáo kùzi.", "Cô ấy đã mua một chiếc quần."),
        vocab("便宜", "piányi", "rẻ", "tính từ", "Dùng khi nói giá dễ chịu.", "这件衣服很便宜。", "Zhè jiàn yīfu hěn piányi.", "Bộ quần áo này rất rẻ."),
        vocab("贵", "guì", "đắt", "tính từ", "Đối lập với 便宜.", "那件不贵。", "Nà jiàn bú guì.", "Bộ kia không đắt.")
      ],
      dialogueBlocks: [
        dialogueBlock("Mua khá nhiều quần áo", "Đúng trọng tâm tên bài.", [
          study("A: 她去哪儿了？", "A: Tā qù nǎr le?", "A: Cô ấy đã đi đâu?"),
          study("B: 她去商店了。", "B: Tā qù shāngdiàn le.", "B: Cô ấy đã đi cửa hàng."),
          study("A: 她买了什么？", "A: Tā mǎile shénme?", "A: Cô ấy đã mua gì?"),
          study("B: 她买了不少衣服。", "B: Tā mǎile bù shǎo yīfu.", "B: Cô ấy đã mua nhiều quần áo.")
        ]),
        dialogueBlock("Hỏi số lượng", "Luyện 件 với 衣服.", [
          study("A: 她买了几件衣服？", "A: Tā mǎile jǐ jiàn yīfu?", "A: Cô ấy đã mua mấy bộ quần áo?"),
          study("B: 她买了两件。", "B: Tā mǎile liǎng jiàn.", "B: Cô ấy đã mua hai bộ."),
          study("A: 她也买裤子了吗？", "A: Tā yě mǎi kùzi le ma?", "A: Cô ấy cũng đã mua quần à?"),
          study("B: 买了。", "B: Mǎile.", "B: Có mua rồi.")
        ]),
        dialogueBlock("Nhận xét giá", "Luyện 便宜 và 贵.", [
          study("A: 这件衣服贵吗？", "A: Zhè jiàn yīfu guì ma?", "A: Bộ quần áo này có đắt không?"),
          study("B: 不贵，很便宜。", "B: Bú guì, hěn piányi.", "B: Không đắt, rất rẻ."),
          study("A: 那件呢？", "A: Nà jiàn ne?", "A: Còn bộ kia thì sao?"),
          study("B: 那件有一点儿贵。", "B: Nà jiàn yǒu yìdiǎnr guì.", "B: Bộ kia hơi đắt một chút.")
        ]),
        dialogueBlock("Mua đồ cho mẹ", "Ứng dụng thực tế gần gũi.", [
          study("A: 你买了什么？", "A: Nǐ mǎile shénme?", "A: Bạn đã mua gì?"),
          study("B: 我买了两件衣服。", "B: Wǒ mǎile liǎng jiàn yīfu.", "B: Tôi đã mua hai bộ quần áo."),
          study("A: 给谁买的？", "A: Gěi shéi mǎi de?", "A: Mua cho ai vậy?"),
          study("B: 给我妈妈买的。", "B: Gěi wǒ māma mǎi de.", "B: Mua cho mẹ tôi.")
        ])
      ],
      grammarNotes: [
        grammarNote("1. Động từ + 了", "Khi muốn nói một hành động đã hoàn thành, đặt 了 sau động từ.", study("她买了衣服。", "Tā mǎile yīfu.", "Cô ấy đã mua quần áo."), [
          study("我买了两本书。", "Wǒ mǎile liǎng běn shū.", "Tôi đã mua hai quyển sách."),
          study("他去了学校。", "Tā qùle xuéxiào.", "Anh ấy đã đến trường."),
          study("我们吃了饭。", "Wǒmen chīle fàn.", "Chúng tôi đã ăn cơm.")
        ]),
        grammarNote("2. 不少 + danh từ", "不少 nghĩa là khá nhiều, không ít. Nó đứng trước danh từ hoặc cụm danh từ.", study("不少衣服", "Bù shǎo yīfu", "Khá nhiều quần áo"), [
          study("我买了不少东西。", "Wǒ mǎile bù shǎo dōngxi.", "Tôi đã mua khá nhiều đồ."),
          study("他有不少朋友。", "Tā yǒu bù shǎo péngyou.", "Anh ấy có khá nhiều bạn."),
          study("我们学了不少汉字。", "Wǒmen xuéle bù shǎo Hànzì.", "Chúng tôi đã học khá nhiều chữ Hán.")
        ]),
        grammarNote("3. Lượng từ 件 cho quần áo", "Khi đếm quần áo, có thể dùng 件 trước 衣服. Đây là lượng từ rất thực tế.", study("两件衣服", "Liǎng jiàn yīfu", "Hai bộ quần áo"), [
          study("我买了一件衣服。", "Wǒ mǎile yí jiàn yīfu.", "Tôi đã mua một bộ quần áo."),
          study("她买了两件衣服。", "Tā mǎile liǎng jiàn yīfu.", "Cô ấy đã mua hai bộ quần áo."),
          study("这件衣服很便宜。", "Zhè jiàn yīfu hěn piányi.", "Bộ quần áo này rất rẻ.")
        ])
      ],
      studyExercises: buildExercises(
        [{ question: "Nối từ với nghĩa.", prompt: ["1. 买", "2. 衣服", "3. 不少"], options: ["a. khá nhiều", "b. mua", "c. quần áo"], answer: "1-b, 2-c, 3-a" }],
        [{ question: "Điền từ thích hợp.", prompt: ["她买___不少衣服。", "我买了两___衣服。", "这件衣服很便___。"], answer: "了 / 件 / 宜" }],
        [{ question: "Câu nào đúng để nói 'Cô ấy đã mua nhiều quần áo'?", options: ["A. 她了买不少衣服。", "B. 她买了不少衣服。", "C. 她不少买了衣服。"], answer: "B. 她买了不少衣服。" }],
        [{ question: "Hoàn thành hội thoại.", prompt: ["A: 她买了什么？", "B: ____________", "A: 她买了几件衣服？"], answer: "B: 她买了不少衣服。" }],
        "Tự kiểm tra: bạn có thể nói một việc đã làm xong bằng động từ + 了 chưa?"
      ),
      quickSummary: {
        words: ["买", "了", "不少", "衣服", "件", "便宜", "贵"],
        patterns: ["她买了不少衣服。", "我买了两件衣服。", "这件衣服很便宜。"],
        reminder: "Nói việc đã xảy ra: động từ + 了. Nói số lượng khá nhiều: 不少 + danh từ."
      }
    }),
    hsk1Lesson({
      number: 15,
      titleChinese: "我是坐飞机来的。",
      titlePinyin: "Wǒ shì zuò fēijī lái de.",
      vietnameseTitle: "Tôi đáp máy bay đến đây.",
      objective: "Nói cách mình đến một nơi bằng phương tiện gì và làm quen với mẫu 是...来的 rất cơ bản.",
      vocabulary: [
        vocab("坐", "zuò", "đi; ngồi", "động từ", "Trong bài này, 坐 dùng với phương tiện giao thông.", "我是坐飞机来的。", "Wǒ shì zuò fēijī lái de.", "Tôi đến đây bằng máy bay."),
        vocab("飞机", "fēijī", "máy bay", "danh từ", "Phương tiện trung tâm của bài.", "我坐飞机来。", "Wǒ zuò fēijī lái.", "Tôi đi máy bay đến."),
        vocab("火车", "huǒchē", "tàu hỏa", "danh từ", "Phương tiện dùng để so sánh với máy bay.", "他是坐火车来的。", "Tā shì zuò huǒchē lái de.", "Anh ấy đến bằng tàu hỏa."),
        vocab("来的", "lái de", "đến bằng; đến theo cách", "cụm ngữ pháp", "Xuất hiện trong mẫu 是...来的.", "我是昨天来的。", "Wǒ shì zuótiān lái de.", "Tôi đến hôm qua."),
        vocab("从", "cóng", "từ", "giới từ", "Dùng để nói nơi xuất phát.", "我是从河内来的。", "Wǒ shì cóng Hénèi lái de.", "Tôi đến từ Hà Nội."),
        vocab("北京", "Běijīng", "Bắc Kinh", "danh từ riêng", "Nơi đến hoặc nơi đi trong bài.", "我是从北京来的。", "Wǒ shì cóng Běijīng lái de.", "Tôi đến từ Bắc Kinh."),
        vocab("昨天", "zuótiān", "hôm qua", "danh từ thời gian", "Có thể kết hợp với 来的.", "我是昨天来的。", "Wǒ shì zuótiān lái de.", "Tôi đến hôm qua."),
        vocab("今天", "jīntiān", "hôm nay", "danh từ thời gian", "Dùng để so sánh với hôm qua.", "他是今天来的。", "Tā shì jīntiān lái de.", "Anh ấy đến hôm nay.")
      ],
      dialogueBlocks: [
        dialogueBlock("Bạn đến bằng gì", "Đúng trọng tâm tên bài.", [
          study("A: 你是怎么来的？", "A: Nǐ shì zěnme lái de?", "A: Bạn đến đây bằng cách nào?"),
          study("B: 我是坐飞机来的。", "B: Wǒ shì zuò fēijī lái de.", "B: Tôi đến bằng máy bay."),
          study("A: 从河内来的吗？", "A: Cóng Hénèi lái de ma?", "A: Đến từ Hà Nội à?"),
          study("B: 对。", "B: Duì.", "B: Đúng vậy.")
        ]),
        dialogueBlock("So sánh phương tiện", "Máy bay và tàu hỏa.", [
          study("A: 他也是坐飞机来的吗？", "A: Tā yě shì zuò fēijī lái de ma?", "A: Anh ấy cũng đến bằng máy bay à?"),
          study("B: 不是，他是坐火车来的。", "B: Bú shì, tā shì zuò huǒchē lái de.", "B: Không, anh ấy đến bằng tàu hỏa."),
          study("A: 他从哪儿来？", "A: Tā cóng nǎr lái?", "A: Anh ấy đến từ đâu?"),
          study("B: 他从北京来。", "B: Tā cóng Běijīng lái.", "B: Anh ấy đến từ Bắc Kinh.")
        ]),
        dialogueBlock("Hỏi thời gian đến", "Kết hợp 来的 với thời gian.", [
          study("A: 你是昨天来的还是今天来的？", "A: Nǐ shì zuótiān lái de háishi jīntiān lái de?", "A: Bạn đến hôm qua hay hôm nay?"),
          study("B: 我是昨天来的。", "B: Wǒ shì zuótiān lái de.", "B: Tôi đến hôm qua."),
          study("A: 你累吗？", "A: Nǐ lèi ma?", "A: Bạn có mệt không?"),
          study("B: 还好。", "B: Hái hǎo.", "B: Cũng ổn.")
        ]),
        dialogueBlock("Nói nơi xuất phát", "Dùng 从 + địa điểm.", [
          study("A: 你是从哪儿来的？", "A: Nǐ shì cóng nǎr lái de?", "A: Bạn đến từ đâu?"),
          study("B: 我是从北京来的。", "B: Wǒ shì cóng Běijīng lái de.", "B: Tôi đến từ Bắc Kinh."),
          study("A: 你是坐飞机来的？", "A: Nǐ shì zuò fēijī lái de?", "A: Bạn đến bằng máy bay à?"),
          study("B: 对。", "B: Duì.", "B: Đúng.")
        ])
      ],
      grammarNotes: [
        grammarNote("1. 是...来的", "Mẫu này dùng để nhấn vào cách đến, thời gian đến hoặc nơi xuất phát.", study("我是坐飞机来的。", "Wǒ shì zuò fēijī lái de.", "Tôi đến bằng máy bay."), [
          study("他是坐火车来的。", "Tā shì zuò huǒchē lái de.", "Anh ấy đến bằng tàu hỏa."),
          study("我是昨天来的。", "Wǒ shì zuótiān lái de.", "Tôi đến hôm qua."),
          study("我是从北京来的。", "Wǒ shì cóng Běijīng lái de.", "Tôi đến từ Bắc Kinh.")
        ]),
        grammarNote("2. 坐 + phương tiện", "Muốn nói đi bằng phương tiện gì, đặt 坐 trước tên phương tiện.", study("坐飞机", "Zuò fēijī", "Đi bằng máy bay"), [
          study("我坐飞机来。", "Wǒ zuò fēijī lái.", "Tôi đi máy bay đến."),
          study("他坐火车来。", "Tā zuò huǒchē lái.", "Anh ấy đi tàu hỏa đến."),
          study("我们坐车去学校。", "Wǒmen zuò chē qù xuéxiào.", "Chúng tôi đi xe đến trường.")
        ]),
        grammarNote("3. 从 + nơi chốn + 来", "Dùng 从 để nói điểm xuất phát. Có thể dùng riêng hoặc trong mẫu 是...来的.", study("我是从河内来的。", "Wǒ shì cóng Hénèi lái de.", "Tôi đến từ Hà Nội."), [
          study("他从北京来。", "Tā cóng Běijīng lái.", "Anh ấy đến từ Bắc Kinh."),
          study("我们从学校来。", "Wǒmen cóng xuéxiào lái.", "Chúng tôi đến từ trường."),
          study("她是从上海来的。", "Tā shì cóng Shànghǎi lái de.", "Cô ấy đến từ Thượng Hải.")
        ])
      ],
      studyExercises: buildExercises(
        [{ question: "Nối từ với nghĩa.", prompt: ["1. 飞机", "2. 火车", "3. 从"], options: ["a. tàu hỏa", "b. từ", "c. máy bay"], answer: "1-c, 2-a, 3-b" }],
        [{ question: "Điền từ thích hợp.", prompt: ["我是坐飞___来的。", "他是___北京来的。", "我是昨天来___。"], answer: "机 / 从 / 的" }],
        [{ question: "Câu nào đúng để nói 'Tôi đến bằng máy bay'?", options: ["A. 我是飞机坐来的。", "B. 我是坐飞机来的。", "C. 我飞机是坐来的。"], answer: "B. 我是坐飞机来的。" }],
        [{ question: "Hoàn thành hội thoại.", prompt: ["A: 你是怎么来的？", "B: ____________", "A: 你是从哪儿来的？"], answer: "B: 我是坐飞机来的。" }],
        "Tự kiểm tra: bạn có thể nói mình đến bằng gì, từ đâu và đến khi nào bằng mẫu 是...来的 chưa?"
      ),
      quickSummary: {
        words: ["坐", "飞机", "火车", "来的", "从", "北京", "昨天"],
        patterns: ["我是坐飞机来的。", "我是从北京来的。", "我是昨天来的。"],
        reminder: "Mẫu 是...来的 giúp nhấn mạnh cách đến, nơi đến từ đâu hoặc thời điểm đến."
      }
    })
  ]
};

function study(chinese, pinyin, meaning) {
  return { chinese, pinyin, meaning };
}

function vocab(hanzi, pinyin, meaning, type, detail, sampleChinese, samplePinyin, sampleMeaning) {
  return {
    hanzi,
    pinyin,
    meaning,
    type,
    detail,
    sample: study(sampleChinese, samplePinyin, sampleMeaning)
  };
}

function grammarNote(title, text, pattern, examples) {
  return { title, text, pattern, examples };
}

function buildExercises(matching, fillBlanks, multipleChoice, dialogueCompletion, selfCheck) {
  return { matching, fillBlanks, multipleChoice, dialogueCompletion, selfCheck };
}

const hsk2Course = {
  id: "hsk2",
  label: "HSK 2",
  overview: "HSK 6 được khóa theo đúng 40 bài của HSK Standard Course 6A và 6B. Giai đoạn này giữ nguyên layout hiện tại và triển khai lesson page theo cùng study flow.",
  lessons: [
    {
      id: "hsk2-lesson-1",
      number: 1,
      title: "Bài 1: Lịch học và tìm phòng học",
      objective: "Hỏi giờ học, tìm đúng lớp và nói vị trí của phòng học trong khuôn viên trường.",
      vocabulary: [
        vocab("课", "kè", "buổi học; tiết học", "danh từ", "Từ cơ bản để nói về môn học hoặc giờ học.", "我们下午有汉语课。", "Wǒmen xiàwǔ yǒu Hànyǔ kè.", "Chiều nay chúng tôi có tiết tiếng Trung."),
        vocab("上课", "shàngkè", "vào học", "động từ", "Dùng khi bắt đầu giờ học.", "我们八点上课。", "Wǒmen bā diǎn shàngkè.", "Chúng tôi vào học lúc 8 giờ."),
        vocab("下课", "xiàkè", "tan học", "động từ", "Dùng khi kết thúc buổi học.", "我们十一点半下课。", "Wǒmen shíyī diǎn bàn xiàkè.", "Chúng tôi tan học lúc 11 giờ rưỡi."),
        vocab("教室", "jiàoshì", "phòng học", "danh từ", "Nơi diễn ra buổi học.", "教室在二楼。", "Jiàoshì zài èr lóu.", "Phòng học ở tầng hai."),
        vocab("楼", "lóu", "tầng; tòa nhà", "danh từ", "HSK 2 hay dùng để chỉ vị trí trong trường.", "图书馆在那栋楼里。", "Túshūguǎn zài nà dòng lóu lǐ.", "Thư viện ở trong tòa nhà kia."),
        vocab("前面", "qiánmiàn", "phía trước", "danh từ vị trí", "Thường đi sau danh từ nơi chốn.", "老师站在教室前面。", "Lǎoshī zhàn zài jiàoshì qiánmiàn.", "Thầy/cô đứng ở phía trước lớp."),
        vocab("旁边", "pángbiān", "bên cạnh", "danh từ vị trí", "Dùng để nói hai nơi gần nhau.", "商店在学校旁边。", "Shāngdiàn zài xuéxiào pángbiān.", "Cửa hàng ở bên cạnh trường."),
        vocab("找", "zhǎo", "tìm", "động từ", "Dùng khi đi tìm người hoặc địa điểm.", "我在找二零三教室。", "Wǒ zài zhǎo èr líng sān jiàoshì.", "Tôi đang tìm phòng 203."),
        vocab("现在", "xiànzài", "bây giờ", "danh từ thời gian", "Dùng để chỉ thời điểm hiện tại.", "现在几点？", "Xiànzài jǐ diǎn?", "Bây giờ là mấy giờ?"),
        vocab("准备", "zhǔnbèi", "chuẩn bị", "động từ", "Dùng trước giờ học hoặc hoạt động.", "我准备去上课。", "Wǒ zhǔnbèi qù shàngkè.", "Tôi chuẩn bị đi học.")
      ],
      dialogue: [
        study("A: 你们几点上课？", "A: Nǐmen jǐ diǎn shàngkè?", "A: Các bạn vào học lúc mấy giờ?"),
        study("B: 我们八点半上课，现在我要找教室。", "B: Wǒmen bā diǎn bàn shàngkè, xiànzài wǒ yào zhǎo jiàoshì.", "B: Chúng tôi vào học lúc 8 giờ rưỡi, bây giờ tôi phải tìm phòng học."),
        study("A: 你的教室在哪儿？", "A: Nǐ de jiàoshì zài nǎr?", "A: Phòng học của bạn ở đâu?"),
        study("B: 在图书馆旁边，三楼前面那间。", "B: Zài túshūguǎn pángbiān, sān lóu qiánmiàn nà jiān.", "B: Ở bên cạnh thư viện, là phòng phía trước ở tầng ba."),
        study("A: 我也去那边，我们一起走吧。", "A: Wǒ yě qù nàbiān, wǒmen yìqǐ zǒu ba.", "A: Tôi cũng đi về phía đó, chúng ta cùng đi nhé.")
      ],
      grammarNotes: [
        grammarNote("1. 在 + nơi chốn", "Dùng 在 để nói người hoặc vật ở đâu. Trong HSK 2, mẫu này đi nhiều với từ chỉ vị trí như 前面, 后面, 旁边.", study("教室在图书馆旁边。", "Jiàoshì zài túshūguǎn pángbiān.", "Phòng học ở bên cạnh thư viện."), [
          study("老师在教室前面。", "Lǎoshī zài jiàoshì qiánmiàn.", "Thầy/cô ở phía trước lớp."),
          study("商店在学校旁边。", "Shāngdiàn zài xuéxiào pángbiān.", "Cửa hàng ở bên cạnh trường."),
          study("书在桌子上。", "Shū zài zhuōzi shàng.", "Sách ở trên bàn.")
        ]),
        grammarNote("2. Hỏi địa điểm với 在哪儿", "Muốn hỏi một người hoặc địa điểm ở đâu, đặt 在哪儿 sau chủ ngữ. Đây là mẫu hỏi rất thường gặp ở HSK 2.", study("你的教室在哪儿？", "Nǐ de jiàoshì zài nǎr?", "Phòng học của bạn ở đâu?"), [
          study("食堂在哪儿？", "Shítáng zài nǎr?", "Nhà ăn ở đâu?"),
          study("老师在哪儿？", "Lǎoshī zài nǎr?", "Thầy/cô ở đâu?"),
          study("你的书在哪儿？", "Nǐ de shū zài nǎr?", "Sách của bạn ở đâu?")
        ]),
        grammarNote("3. 一起 + động từ", "一起 đứng trước động từ để nói cùng làm một việc. Mẫu này thường dùng trong lời rủ hoặc kế hoạch đơn giản.", study("我们一起走吧。", "Wǒmen yìqǐ zǒu ba.", "Chúng ta cùng đi nhé."), [
          study("我们一起上课。", "Wǒmen yìqǐ shàngkè.", "Chúng ta cùng vào học."),
          study("我想跟你一起去。", "Wǒ xiǎng gēn nǐ yìqǐ qù.", "Tôi muốn đi cùng bạn."),
          study("下课以后我们一起吃饭。", "Xiàkè yǐhòu wǒmen yìqǐ chīfàn.", "Sau giờ học chúng ta cùng ăn cơm.")
        ])
      ],
      studyExercises: buildExercises(
        [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 上课", "2. 教室", "3. 旁边"], options: ["a. phòng học", "b. vào học", "c. bên cạnh"], answer: "1-b, 2-a, 3-c" }],
        [{ question: "Điền từ còn thiếu.", prompt: ["教室___图书馆旁边。", "我们八点半___课。", "我在___二零三教室。"], answer: "在 / 上 / 找" }],
        [{ question: "Câu nào đúng để hỏi phòng học ở đâu?", options: ["A. 教室几点上课？", "B. 教室在哪儿？", "C. 教室是谁？"], answer: "B. 教室在哪儿？" }],
        [{ question: "Hoàn thành hội thoại.", prompt: ["A: 你的教室在哪儿？", "B: ____________", "A: 我们一起走吧。"], answer: "B: 在图书馆旁边。" }],
        "Tự kiểm tra: bạn có thể hỏi giờ học, hỏi phòng học ở đâu và chỉ vị trí bằng 在 + nơi chốn không?"
      ),
      summary: "Bài này giúp bạn nói được giờ học, tìm lớp và mô tả vị trí đơn giản trong trường bằng 在, 在哪儿 và 一起.",
      quickSummary: {
        words: ["上课", "下课", "教室", "旁边", "找", "一起"],
        patterns: ["教室在哪儿？", "教室在图书馆旁边。", "我们一起走吧。"],
        reminder: "Khi nói vị trí, hãy xác định nơi chính trước rồi mới thêm từ chỉ vị trí như 旁边, 前面."
      }
    },
    {
      id: "hsk2-lesson-2",
      number: 2,
      title: "Bài 2: Thời gian biểu trong ngày",
      objective: "Nói về giờ giấc hằng ngày, trình tự công việc và hoạt động theo thói quen.",
      vocabulary: [
        vocab("早上", "zǎoshang", "buổi sáng", "danh từ thời gian", "Chỉ thời gian trong ngày.", "我早上七点起床。", "Wǒ zǎoshang qī diǎn qǐchuáng.", "Tôi dậy lúc 7 giờ sáng."),
        vocab("中午", "zhōngwǔ", "buổi trưa", "danh từ thời gian", "Hay dùng với 吃饭, 休息.", "我们中午十二点吃饭。", "Wǒmen zhōngwǔ shí'èr diǎn chīfàn.", "Chúng tôi ăn cơm lúc 12 giờ trưa."),
        vocab("晚上", "wǎnshang", "buổi tối", "danh từ thời gian", "Thường đi với học, xem phim, nghỉ ngơi.", "我晚上学习汉语。", "Wǒ wǎnshang xuéxí Hànyǔ.", "Tôi học tiếng Trung vào buổi tối."),
        vocab("开始", "kāishǐ", "bắt đầu", "động từ", "Dùng cho giờ học, cuộc họp, công việc.", "电影七点开始。", "Diànyǐng qī diǎn kāishǐ.", "Bộ phim bắt đầu lúc 7 giờ."),
        vocab("结束", "jiéshù", "kết thúc", "động từ", "Ngược với 开始.", "课九点结束。", "Kè jiǔ diǎn jiéshù.", "Tiết học kết thúc lúc 9 giờ."),
        vocab("每天", "měitiān", "mỗi ngày", "trạng từ thời gian", "Đặt đầu câu hoặc trước động từ.", "我每天练习汉语。", "Wǒ měitiān liànxí Hànyǔ.", "Mỗi ngày tôi luyện tiếng Trung."),
        vocab("先", "xiān", "trước", "phó từ", "Dùng trong mẫu 先...再....", "我先吃饭，再上课。", "Wǒ xiān chīfàn, zài shàngkè.", "Tôi ăn cơm trước rồi mới đi học."),
        vocab("再", "zài", "sau đó; rồi", "phó từ", "Đi sau 先 để nói trình tự.", "我们先看书，再写字。", "Wǒmen xiān kàn shū, zài xiězì.", "Chúng tôi đọc sách trước rồi viết chữ."),
        vocab("一起", "yìqǐ", "cùng nhau", "phó từ", "Nhấn mạnh làm việc cùng nhau.", "晚上我们一起学习。", "Wǎnshang wǒmen yìqǐ xuéxí.", "Buổi tối chúng tôi học cùng nhau."),
        vocab("休息", "xiūxi", "nghỉ ngơi", "động từ", "Dùng trong kế hoạch sinh hoạt.", "中午我休息一会儿。", "Zhōngwǔ wǒ xiūxi yíhuìr.", "Buổi trưa tôi nghỉ một lát.")
      ],
      dialogue: [
        study("A: 你每天几点起床？", "A: Nǐ měitiān jǐ diǎn qǐchuáng?", "A: Mỗi ngày bạn dậy lúc mấy giờ?"),
        study("B: 我早上七点起床，七点半出门。", "B: Wǒ zǎoshang qī diǎn qǐchuáng, qī diǎn bàn chūmén.", "B: Tôi dậy lúc 7 giờ sáng và ra khỏi nhà lúc 7 giờ rưỡi."),
        study("A: 你先吃早饭还是先上课？", "A: Nǐ xiān chī zǎofàn háishi xiān shàngkè?", "A: Bạn ăn sáng trước hay vào học trước?"),
        study("B: 我先吃早饭，再去教室。", "B: Wǒ xiān chī zǎofàn, zài qù jiàoshì.", "B: Tôi ăn sáng trước rồi mới đi tới lớp."),
        study("A: 晚上我们一起练习吧。", "A: Wǎnshang wǒmen yìqǐ liànxí ba.", "A: Tối nay chúng ta cùng luyện nhé.")
      ],
      grammarNotes: [
        grammarNote("1. 先...再...", "Mẫu này dùng để nói rõ thứ tự hai hành động. Hành động sau 再 xảy ra sau khi hành động trước đã làm xong.", study("我先吃饭，再去上课。", "Wǒ xiān chīfàn, zài qù shàngkè.", "Tôi ăn cơm trước rồi mới đi học."), [
          study("我们先看书，再做练习。", "Wǒmen xiān kàn shū, zài zuò liànxí.", "Chúng tôi đọc sách trước rồi làm bài tập."),
          study("他先回家，再给我打电话。", "Tā xiān huí jiā, zài gěi wǒ dǎ diànhuà.", "Anh ấy về nhà trước rồi gọi điện cho tôi."),
          study("你先休息，再学习。", "Nǐ xiān xiūxi, zài xuéxí.", "Bạn nghỉ trước rồi học tiếp.")
        ]),
        grammarNote("2. 每天 + động từ", "每天 đứng đầu câu hoặc trước động từ để nói thói quen lặp lại hàng ngày.", study("我每天晚上学习汉语。", "Wǒ měitiān wǎnshang xuéxí Hànyǔ.", "Mỗi tối tôi học tiếng Trung."), [
          study("她每天早上跑步。", "Tā měitiān zǎoshang pǎobù.", "Cô ấy chạy bộ mỗi sáng."),
          study("我们每天都有课。", "Wǒmen měitiān dōu yǒu kè.", "Ngày nào chúng tôi cũng có lớp."),
          study("我每天练习写汉字。", "Wǒ měitiān liànxí xiě Hànzì.", "Mỗi ngày tôi luyện viết chữ Hán.")
        ]),
        grammarNote("3. 还是 trong câu hỏi lựa chọn", "Khi hỏi giữa hai phương án, dùng A 还是 B. Đây là câu hỏi chọn một phương án, không phải câu yes/no.", study("你先吃饭还是先上课？", "Nǐ xiān chīfàn háishi xiān shàngkè?", "Bạn ăn cơm trước hay vào học trước?"), [
          study("你喝茶还是喝咖啡？", "Nǐ hē chá háishi hē kāfēi?", "Bạn uống trà hay cà phê?"),
          study("周末你去公园还是去商店？", "Zhōumò nǐ qù gōngyuán háishi qù shāngdiàn?", "Cuối tuần bạn đi công viên hay cửa hàng?"),
          study("我们坐地铁还是坐公共汽车？", "Wǒmen zuò dìtiě háishi zuò gōnggòng qìchē?", "Chúng ta đi tàu điện ngầm hay xe buýt?")
        ])
      ],
      studyExercises: buildExercises(
        [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 开始", "2. 结束", "3. 休息"], options: ["a. nghỉ ngơi", "b. bắt đầu", "c. kết thúc"], answer: "1-b, 2-c, 3-a" }],
        [{ question: "Điền từ vào chỗ trống.", prompt: ["我___吃饭，再去教室。", "我们___晚上学习。", "电影七点___。"], answer: "先 / 每天 / 开始" }],
        [{ question: "Câu nào là câu hỏi lựa chọn?", options: ["A. 你几点起床？", "B. 你喝茶还是喝咖啡？", "C. 你是老师吗？"], answer: "B. 你喝茶还是喝咖啡？" }],
        [{ question: "Hoàn thành hội thoại.", prompt: ["A: 你每天几点起床？", "B: ____________", "A: 晚上我们一起练习吧。"], answer: "B: 我早上七点起床。" }],
        "Tự kiểm tra: bạn có thể dùng 先...再... để nói lịch sinh hoạt của mình bằng 2 đến 3 câu không?"
      ),
      summary: "Bạn đã học cách nói giờ giấc hằng ngày, sắp xếp thứ tự hành động và đặt câu hỏi lựa chọn đơn giản.",
      quickSummary: {
        words: ["每天", "开始", "结束", "先", "再", "休息"],
        patterns: ["我先吃饭，再去上课。", "我每天晚上学习汉语。", "你喝茶还是喝咖啡？"],
        reminder: "Đừng dùng 吗 trong câu hỏi có 还是; đây là kiểu câu chọn giữa hai phương án."
      }
    }
  ]
};

hsk2Course.lessons.push(
  {
    id: "hsk2-lesson-3",
    number: 3,
    title: "Bài 3: Gia đình và quan hệ gần gũi",
    objective: "Nói về người thân, quan hệ gia đình và hỏi thông tin đơn giản về gia đình của người khác.",
    vocabulary: [
      vocab("家人", "jiārén", "người nhà", "danh từ", "Cách gọi chung cho các thành viên trong gia đình.", "我的家人都在越南。", "Wǒ de jiārén dōu zài Yuènán.", "Người nhà của tôi đều ở Việt Nam."),
      vocab("哥哥", "gēge", "anh trai", "danh từ", "Thành viên gia đình rất thường gặp.", "我哥哥在公司工作。", "Wǒ gēge zài gōngsī gōngzuò.", "Anh trai tôi làm việc ở công ty."),
      vocab("姐姐", "jiějie", "chị gái", "danh từ", "Dùng trong giới thiệu gia đình.", "我姐姐会说英语。", "Wǒ jiějie huì shuō Yīngyǔ.", "Chị gái tôi biết nói tiếng Anh."),
      vocab("孩子", "háizi", "đứa trẻ; con", "danh từ", "Dùng để nói về con cái hoặc trẻ nhỏ.", "那个孩子很可爱。", "Nàge háizi hěn kě'ài.", "Đứa trẻ kia rất đáng yêu."),
      vocab("结婚", "jiéhūn", "kết hôn", "động từ", "Từ quen thuộc khi nói về gia đình ở HSK 2.", "我哥哥去年结婚了。", "Wǒ gēge qùnián jiéhūn le.", "Anh trai tôi kết hôn năm ngoái."),
      vocab("一起", "yìqǐ", "cùng nhau", "phó từ", "Thường dùng khi nói hoạt động gia đình.", "周末我们一起吃饭。", "Zhōumò wǒmen yìqǐ chīfàn.", "Cuối tuần chúng tôi ăn cơm cùng nhau.")
    ],
    dialogue: [
      study("A: 你家有几口人？", "A: Nǐ jiā yǒu jǐ kǒu rén?", "A: Nhà bạn có mấy người?"),
      study("B: 我家有五口人，还有一个哥哥和一个姐姐。", "B: Wǒ jiā yǒu wǔ kǒu rén, hái yǒu yí ge gēge hé yí ge jiějie.", "B: Nhà tôi có 5 người, còn có một anh trai và một chị gái."),
      study("A: 你们周末常常做什么？", "A: Nǐmen zhōumò chángcháng zuò shénme?", "A: Cuối tuần gia đình bạn thường làm gì?"),
      study("B: 我们常常一起吃饭，有时候也一起去看电影。", "B: Wǒmen chángcháng yìqǐ chīfàn, yǒushíhou yě yìqǐ qù kàn diànyǐng.", "B: Chúng tôi thường ăn cơm cùng nhau, đôi khi cũng cùng đi xem phim.")
    ],
    grammarNotes: [
      grammarNote("1. 有 để nói gia đình có bao nhiêu người", "Sau 家 dùng 有 để nói số thành viên. Đây là mẫu rất quen thuộc khi giới thiệu gia đình.", study("我家有五口人。", "Wǒ jiā yǒu wǔ kǒu rén.", "Nhà tôi có 5 người."), [
        study("我家有一个哥哥。", "Wǒ jiā yǒu yí ge gēge.", "Nhà tôi có một anh trai."),
        study("她家有两个孩子。", "Tā jiā yǒu liǎng ge háizi.", "Nhà cô ấy có hai người con.")
      ]),
      grammarNote("2. 常常 + động từ", "常常 đứng trước động từ để nói thói quen thường xuyên nhưng không phải lúc nào cũng như vậy.", study("我们常常一起吃饭。", "Wǒmen chángcháng yìqǐ chīfàn.", "Chúng tôi thường ăn cơm cùng nhau."), [
        study("我周末常常回家。", "Wǒ zhōumò chángcháng huí jiā.", "Cuối tuần tôi thường về nhà."),
        study("他常常给家人打电话。", "Tā chángcháng gěi jiārén dǎ diànhuà.", "Anh ấy thường gọi điện cho người nhà.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa.", prompt: ["1. 家人", "2. 哥哥", "3. 结婚"], options: ["a. kết hôn", "b. người nhà", "c. anh trai"], answer: "1-b, 2-c, 3-a" }],
      [{ question: "Điền từ đúng.", prompt: ["我家___五口人。", "我有一个___姐。", "周末我们___起吃饭。"], answer: "有 / 姐 / 一" }],
      [{ question: "Câu nào dùng để hỏi số người trong gia đình?", options: ["A. 你家有几口人？", "B. 你住哪儿？", "C. 你为什么来？"], answer: "A. 你家有几口人？" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 你家有几口人？", "B: ____________", "A: 你们周末常常做什么？"], answer: "B: 我家有五口人。" }],
      "Tự kiểm tra: bạn có thể giới thiệu ngắn về số người trong gia đình và một hoạt động gia đình cuối tuần không?"
    ),
    summary: "Bài này giúp bạn nói về gia đình gần gũi hơn và mô tả thói quen đơn giản của người thân.",
    quickSummary: {
      words: ["家人", "哥哥", "姐姐", "孩子", "结婚", "一起"],
      patterns: ["我家有五口人。", "我们常常一起吃饭。"],
      reminder: "Khi nói số người trong nhà, dùng 口 làm lượng từ cho người trong gia đình."
    }
  },
  {
    id: "hsk2-lesson-4",
    number: 4,
    title: "Bài 4: Đồ ăn và đồ uống hằng ngày",
    objective: "Nói về món mình thích, đồ uống thường dùng và yêu cầu đồ ăn đơn giản.",
    vocabulary: [
      vocab("早餐", "zǎocān", "bữa sáng", "danh từ", "Một chủ đề rất quen thuộc trong HSK 2.", "我早餐常常喝牛奶。", "Wǒ zǎocān chángcháng hē niúnǎi.", "Bữa sáng tôi thường uống sữa."),
      vocab("牛奶", "niúnǎi", "sữa", "danh từ", "Đồ uống cơ bản.", "我每天早上喝牛奶。", "Wǒ měitiān zǎoshang hē niúnǎi.", "Mỗi sáng tôi uống sữa."),
      vocab("鸡蛋", "jīdàn", "trứng gà", "danh từ", "Đồ ăn thường gặp.", "我早餐吃两个鸡蛋。", "Wǒ zǎocān chī liǎng ge jīdàn.", "Bữa sáng tôi ăn hai quả trứng."),
      vocab("面包", "miànbāo", "bánh mì", "danh từ", "Món ăn rất quen thuộc.", "今天我买了一些面包。", "Jīntiān wǒ mǎi le yìxiē miànbāo.", "Hôm nay tôi đã mua một ít bánh mì."),
      vocab("果汁", "guǒzhī", "nước ép", "danh từ", "Đồ uống dễ dùng trong gọi món.", "我想喝一杯果汁。", "Wǒ xiǎng hē yì bēi guǒzhī.", "Tôi muốn uống một cốc nước ép."),
      vocab("饱", "bǎo", "no", "tính từ", "Dùng để nói cảm giác sau khi ăn.", "我已经吃饱了。", "Wǒ yǐjīng chī bǎo le.", "Tôi đã ăn no rồi.")
    ],
    dialogue: [
      study("A: 你早餐常常吃什么？", "A: Nǐ zǎocān chángcháng chī shénme?", "A: Bữa sáng bạn thường ăn gì?"),
      study("B: 我常常吃面包和鸡蛋，还喝一杯牛奶。", "B: Wǒ chángcháng chī miànbāo hé jīdàn, hái hē yì bēi niúnǎi.", "B: Tôi thường ăn bánh mì và trứng, còn uống một cốc sữa."),
      study("A: 今天你想喝果汁吗？", "A: Jīntiān nǐ xiǎng hē guǒzhī ma?", "A: Hôm nay bạn muốn uống nước ép không?"),
      study("B: 不用了，我已经吃饱了。", "B: Bú yòng le, wǒ yǐjīng chī bǎo le.", "B: Không cần nữa, tôi đã ăn no rồi.")
    ],
    grammarNotes: [
      grammarNote("1. 常常 để nói thói quen ăn uống", "常常 đứng trước động từ để nói món hoặc đồ uống bạn thường dùng.", study("我常常喝牛奶。", "Wǒ chángcháng hē niúnǎi.", "Tôi thường uống sữa."), [
        study("她常常吃面包。", "Tā chángcháng chī miànbāo.", "Cô ấy thường ăn bánh mì."),
        study("我们常常一起吃早餐。", "Wǒmen chángcháng yìqǐ chī zǎocān.", "Chúng tôi thường ăn sáng cùng nhau.")
      ]),
      grammarNote("2. 已经...了", "Đã học ở HSK 2 và rất hữu ích khi nói mình đã ăn xong hay không cần thêm đồ nữa.", study("我已经吃饱了。", "Wǒ yǐjīng chī bǎo le.", "Tôi đã ăn no rồi."), [
        study("我已经喝了一杯茶。", "Wǒ yǐjīng hē le yì bēi chá.", "Tôi đã uống một cốc trà rồi."),
        study("他已经买了面包。", "Tā yǐjīng mǎi le miànbāo.", "Anh ấy đã mua bánh mì rồi.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa.", prompt: ["1. 早餐", "2. 果汁", "3. 饱"], options: ["a. nước ép", "b. bữa sáng", "c. no"], answer: "1-b, 2-a, 3-c" }],
      [{ question: "Điền từ đúng.", prompt: ["我早餐常常喝牛___。", "我已经吃___了。", "我想喝一杯果___。"], answer: "奶 / 饱 / 汁" }],
      [{ question: "Câu nào nói thói quen ăn sáng?", options: ["A. 我常常吃面包。", "B. 你在哪儿？", "C. 这是老师。"], answer: "A. 我常常吃面包。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 你早餐常常吃什么？", "B: ____________", "A: 今天你想喝果汁吗？"], answer: "B: 我常常吃面包和鸡蛋。" }],
      "Tự kiểm tra: bạn có thể nói bữa sáng thường ngày của mình bằng 2 câu ngắn không?"
    ),
    summary: "Bài này giúp bạn nói về món ăn và đồ uống hằng ngày ở mức tự nhiên, ngắn gọn.",
    quickSummary: {
      words: ["早餐", "牛奶", "鸡蛋", "面包", "果汁", "饱"],
      patterns: ["我常常吃面包。", "我已经吃饱了。"],
      reminder: "Khi nói đã ăn xong và không cần thêm nữa, 已经...了 rất tự nhiên."
    }
  },
  {
    id: "hsk2-lesson-5",
    number: 5,
    title: "Bài 5: Mua sắm đơn giản",
    objective: "Hỏi giá, nhận xét đồ vật và yêu cầu thử hoặc xem thêm trong cửa hàng.",
    vocabulary: [
      vocab("衣服", "yīfu", "quần áo", "danh từ", "Từ rất thường gặp khi mua sắm.", "这件衣服很好看。", "Zhè jiàn yīfu hěn hǎokàn.", "Bộ quần áo này rất đẹp."),
      vocab("裤子", "kùzi", "quần", "danh từ", "Món đồ quen thuộc trong bài mua sắm.", "这条裤子有点儿贵。", "Zhè tiáo kùzi yǒudiǎnr guì.", "Chiếc quần này hơi đắt."),
      vocab("便宜", "piányi", "rẻ", "tính từ", "Nhận xét về giá cả.", "那件比较便宜。", "Nà jiàn bǐjiào piányi.", "Cái kia rẻ hơn."),
      vocab("贵", "guì", "đắt", "tính từ", "Ngược với 便宜.", "这个太贵了。", "Zhège tài guì le.", "Cái này đắt quá."),
      vocab("件", "jiàn", "chiếc; bộ", "lượng từ", "Hay dùng với quần áo.", "我想买两件衣服。", "Wǒ xiǎng mǎi liǎng jiàn yīfu.", "Tôi muốn mua hai bộ quần áo."),
      vocab("试", "shì", "thử", "động từ", "Dùng khi thử đồ.", "我可以试一下吗？", "Wǒ kěyǐ shì yíxià ma?", "Tôi có thể thử một chút không?")
    ],
    dialogue: [
      study("A: 你想买什么？", "A: Nǐ xiǎng mǎi shénme?", "A: Bạn muốn mua gì?"),
      study("B: 我想买一件衣服，可是这件有点儿贵。", "B: Wǒ xiǎng mǎi yí jiàn yīfu, kěshì zhè jiàn yǒudiǎnr guì.", "B: Tôi muốn mua một chiếc áo, nhưng cái này hơi đắt."),
      study("A: 那边那件比较便宜，你可以试一下。", "A: Nàbiān nà jiàn bǐjiào piányi, nǐ kěyǐ shì yíxià.", "A: Cái bên kia rẻ hơn, bạn có thể thử một chút."),
      study("B: 好，我先看看。", "B: Hǎo, wǒ xiān kànkan.", "B: Được, tôi xem trước một chút.")
    ],
    grammarNotes: [
      grammarNote("1. 有点儿 + tính từ", "有点儿 dùng để nói mức độ hơi... với sắc thái nhẹ.", study("这条裤子有点儿贵。", "Zhè tiáo kùzi yǒudiǎnr guì.", "Chiếc quần này hơi đắt."), [
        study("今天天气有点儿冷。", "Jīntiān tiānqì yǒudiǎnr lěng.", "Hôm nay thời tiết hơi lạnh."),
        study("我今天有点儿累。", "Wǒ jīntiān yǒudiǎnr lèi.", "Hôm nay tôi hơi mệt.")
      ]),
      grammarNote("2. 可以 + động từ", "Có thể dùng 可以 để xin phép hoặc gợi ý một cách lịch sự.", study("我可以试一下吗？", "Wǒ kěyǐ shì yíxià ma?", "Tôi có thể thử một chút không?"), [
        study("你可以先看看。", "Nǐ kěyǐ xiān kànkan.", "Bạn có thể xem trước một chút."),
        study("我可以用一下这个吗？", "Wǒ kěyǐ yòng yíxià zhège ma?", "Tôi có thể dùng cái này một chút không?")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa.", prompt: ["1. 衣服", "2. 便宜", "3. 试"], options: ["a. quần áo", "b. thử", "c. rẻ"], answer: "1-a, 2-c, 3-b" }],
      [{ question: "Điền từ đúng.", prompt: ["这条裤子有点儿___。", "我想买一___衣服。", "我可以___一下吗？"], answer: "贵 / 件 / 试" }],
      [{ question: "Câu nào dùng để xin thử đồ?", options: ["A. 我可以试一下吗？", "B. 你喜欢什么？", "C. 今天天气怎么样？"], answer: "A. 我可以试一下吗？" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 你想买什么？", "B: ____________", "A: 那边那件比较便宜。"], answer: "B: 我想买一件衣服。" }],
      "Tự kiểm tra: bạn có thể nói một món đồ muốn mua và nhận xét nó hơi đắt hay rẻ không?"
    ),
    summary: "Bài này giúp bạn mua sắm đơn giản hơn bằng cách nhận xét giá và xin phép thử đồ lịch sự.",
    quickSummary: {
      words: ["衣服", "裤子", "便宜", "贵", "件", "试"],
      patterns: ["这条裤子有点儿贵。", "我可以试一下吗？"],
      reminder: "有点儿 thường dùng với cảm giác hoặc nhận xét hơi bất tiện, hơi không vừa ý."
    }
  },
  {
    id: "hsk2-lesson-6",
    number: 6,
    title: "Bài 6: Thời gian và ngày tháng",
    objective: "Hỏi giờ, hỏi ngày và sắp xếp thời gian gặp nhau một cách cơ bản.",
    vocabulary: [
      vocab("时间", "shíjiān", "thời gian", "danh từ", "Dùng rộng trong HSK 2 khi sắp xếp lịch.", "我现在没有时间。", "Wǒ xiànzài méiyǒu shíjiān.", "Bây giờ tôi không có thời gian."),
      vocab("点", "diǎn", "giờ", "lượng từ thời gian", "Dùng khi nói giờ chẵn.", "我们八点见面。", "Wǒmen bā diǎn jiànmiàn.", "Chúng tôi gặp nhau lúc 8 giờ."),
      vocab("半", "bàn", "rưỡi", "số từ", "Dùng trong giờ giấc như 八点半.", "现在八点半。", "Xiànzài bā diǎn bàn.", "Bây giờ là 8 giờ rưỡi."),
      vocab("号", "hào", "ngày", "lượng từ ngày", "Dùng khi nói ngày trong tháng.", "今天几号？", "Jīntiān jǐ hào?", "Hôm nay là ngày mấy?"),
      vocab("星期", "xīngqī", "thứ; tuần", "danh từ thời gian", "Dùng trong lịch hẹn theo tuần.", "今天星期三。", "Jīntiān xīngqī sān.", "Hôm nay là thứ Tư."),
      vocab("以后", "yǐhòu", "sau khi; sau đó", "danh từ/giới từ thời gian", "Dùng để nối hoạt động theo thời gian.", "下课以后我们去吃饭。", "Xiàkè yǐhòu wǒmen qù chīfàn.", "Sau giờ học chúng tôi đi ăn cơm.")
    ],
    dialogue: [
      study("A: 你明天几点有时间？", "A: Nǐ míngtiān jǐ diǎn yǒu shíjiān?", "A: Ngày mai mấy giờ bạn rảnh?"),
      study("B: 我下午三点以后有时间。", "B: Wǒ xiàwǔ sān diǎn yǐhòu yǒu shíjiān.", "B: Chiều mai sau 3 giờ tôi rảnh."),
      study("A: 好，那我们三点半见面吧。", "A: Hǎo, nà wǒmen sān diǎn bàn jiànmiàn ba.", "A: Được, vậy chúng ta gặp nhau lúc 3 giờ rưỡi nhé."),
      study("B: 可以，明天是十五号，对吗？", "B: Kěyǐ, míngtiān shì shíwǔ hào, duì ma?", "B: Được, ngày mai là ngày 15 đúng không?")
    ],
    grammarNotes: [
      grammarNote("1. Thời điểm + 以后", "以后 đặt sau thời gian hoặc hành động để nói sau thời điểm đó.", study("下午三点以后我有时间。", "Xiàwǔ sān diǎn yǐhòu wǒ yǒu shíjiān.", "Sau 3 giờ chiều tôi có thời gian."), [
        study("下课以后我们去吃饭。", "Xiàkè yǐhòu wǒmen qù chīfàn.", "Sau giờ học chúng tôi đi ăn cơm."),
        study("工作以后他回家。", "Gōngzuò yǐhòu tā huí jiā.", "Sau khi làm việc xong anh ấy về nhà.")
      ]),
      grammarNote("2. Hỏi ngày với 几号 / 星期几", "Ngày trong tháng dùng 几号, còn thứ trong tuần dùng 星期几.", study("今天几号？", "Jīntiān jǐ hào?", "Hôm nay là ngày mấy?"), [
        study("今天星期几？", "Jīntiān xīngqī jǐ?", "Hôm nay là thứ mấy?"),
        study("明天星期五。", "Míngtiān xīngqī wǔ.", "Ngày mai là thứ Sáu.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa.", prompt: ["1. 点", "2. 半", "3. 号"], options: ["a. ngày", "b. giờ", "c. rưỡi"], answer: "1-b, 2-c, 3-a" }],
      [{ question: "Điền từ đúng.", prompt: ["我们三___半见面。", "今天几___？", "下课___后我们去吃饭。"], answer: "点 / 号 / 以" }],
      [{ question: "Câu nào dùng để hỏi ngày trong tháng?", options: ["A. 今天几号？", "B. 今天去哪儿？", "C. 你几点起床？"], answer: "A. 今天几号？" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 你明天几点有时间？", "B: ____________", "A: 好，那我们三点半见。"], answer: "B: 我下午三点以后有时间。" }],
      "Tự kiểm tra: bạn có thể hẹn một người gặp vào giờ cụ thể và xác nhận ngày không?"
    ),
    summary: "Bài này giúp bạn hỏi thời gian, hỏi ngày và lên lịch gặp nhau ở mức rất thực dụng.",
    quickSummary: {
      words: ["时间", "点", "半", "号", "星期", "以后"],
      patterns: ["下午三点以后我有时间。", "今天几号？"],
      reminder: "Phân biệt rõ 几号 để hỏi ngày trong tháng và 星期几 để hỏi thứ trong tuần."
    }
  }
);

hsk2Course.lessons.push(
  {
    id: "hsk2-lesson-7",
    number: 7,
    title: "Bài 7: Giao thông và đi lại",
    objective: "Nói cách đi lại hằng ngày, đổi phương tiện và mô tả quãng đường ngắn.",
    vocabulary: [
      vocab("地铁", "dìtiě", "tàu điện ngầm", "danh từ", "Phương tiện công cộng rất phổ biến.", "我坐地铁去学校。", "Wǒ zuò dìtiě qù xuéxiào.", "Tôi đi học bằng tàu điện ngầm."),
      vocab("公共汽车", "gōnggòng qìchē", "xe buýt", "danh từ", "Phương tiện công cộng cơ bản.", "他坐公共汽车上班。", "Tā zuò gōnggòng qìchē shàngbān.", "Anh ấy đi làm bằng xe buýt."),
      vocab("站", "zhàn", "trạm; ga", "danh từ", "Dùng cho điểm lên xuống xe.", "地铁站在前面。", "Dìtiě zhàn zài qiánmiàn.", "Ga tàu điện ngầm ở phía trước."),
      vocab("下车", "xiàchē", "xuống xe", "động từ", "Dùng khi tới điểm cần xuống.", "到第二站下车。", "Dào dì-èr zhàn xiàchē.", "Xuống ở trạm thứ hai."),
      vocab("从", "cóng", "từ", "giới từ", "Chỉ điểm bắt đầu.", "我从家里出发。", "Wǒ cóng jiālǐ chūfā.", "Tôi xuất phát từ nhà."),
      vocab("到", "dào", "đến", "động từ", "Chỉ điểm đích.", "我们八点到学校。", "Wǒmen bā diǎn dào xuéxiào.", "Chúng tôi đến trường lúc 8 giờ.")
    ],
    dialogue: [
      study("A: 你每天怎么去学校？", "A: Nǐ měitiān zěnme qù xuéxiào?", "A: Mỗi ngày bạn đi học bằng cách nào?"),
      study("B: 我先坐公共汽车，到地铁站以后再坐地铁。", "B: Wǒ xiān zuò gōnggòng qìchē, dào dìtiě zhàn yǐhòu zài zuò dìtiě.", "B: Tôi đi xe buýt trước, sau khi đến ga tàu điện thì đi tàu điện tiếp."),
      study("A: 你在哪一站下车？", "A: Nǐ zài nǎ yí zhàn xiàchē?", "A: Bạn xuống ở trạm nào?"),
      study("B: 我在学校那一站下车，然后走路五分钟。", "B: Wǒ zài xuéxiào nà yí zhàn xiàchē, ránhòu zǒulù wǔ fēnzhōng.", "B: Tôi xuống ở trạm trường, sau đó đi bộ 5 phút.")
    ],
    grammarNotes: [
      grammarNote("1. 坐 + phương tiện + 去 + nơi", "Mẫu này dùng để nói rõ đi đâu bằng phương tiện nào.", study("我坐地铁去学校。", "Wǒ zuò dìtiě qù xuéxiào.", "Tôi đi học bằng tàu điện ngầm."), [
        study("他坐公共汽车去公司。", "Tā zuò gōnggòng qìchē qù gōngsī.", "Anh ấy đi công ty bằng xe buýt."),
        study("我们走路去饭店。", "Wǒmen zǒulù qù fàndiàn.", "Chúng tôi đi bộ tới nhà hàng.")
      ]),
      grammarNote("2. 从...到...", "Dùng để nói quãng đường hoặc tuyến đi giữa hai điểm.", study("从家里到学校要二十分钟。", "Cóng jiālǐ dào xuéxiào yào èrshí fēnzhōng.", "Từ nhà đến trường mất 20 phút."), [
        study("从这儿到公司很近。", "Cóng zhèr dào gōngsī hěn jìn.", "Từ đây đến công ty rất gần."),
        study("从饭店到地铁站怎么走？", "Cóng fàndiàn dào dìtiě zhàn zěnme zǒu?", "Từ nhà hàng đến ga tàu điện đi thế nào?")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa.", prompt: ["1. 地铁", "2. 下车", "3. 站"], options: ["a. ga; trạm", "b. xuống xe", "c. tàu điện ngầm"], answer: "1-c, 2-b, 3-a" }],
      [{ question: "Điền từ đúng.", prompt: ["我坐___去学校。", "到第二___下车。", "___家里到学校要二十分钟。"], answer: "地铁 / 站 / 从" }],
      [{ question: "Câu nào mô tả tuyến đi giữa hai nơi?", options: ["A. 从家里到学校要二十分钟。", "B. 你喜欢什么？", "C. 今天冷吗？"], answer: "A. 从家里到学校要二十分钟。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 你每天怎么去学校？", "B: ____________", "A: 你在哪一站下车？"], answer: "B: 我先坐公共汽车，再坐地铁。" }],
      "Tự kiểm tra: bạn có thể mô tả ngắn đường đi từ nhà đến trường bằng 2 câu không?"
    ),
    summary: "Bài này giúp bạn nói rõ cách đi lại, đổi phương tiện và mô tả quãng đường hằng ngày.",
    quickSummary: {
      words: ["地铁", "公共汽车", "站", "下车", "从", "到"],
      patterns: ["我坐地铁去学校。", "从家里到学校要二十分钟。"],
      reminder: "Khi nói lộ trình, nên nêu điểm bắt đầu với 从 rồi mới tới điểm đích với 到."
    }
  },
  {
    id: "hsk2-lesson-8",
    number: 8,
    title: "Bài 8: Thời tiết và cảm giác",
    objective: "Nói về thời tiết, cảm giác nóng lạnh và lời khuyên rất cơ bản.",
    vocabulary: [
      vocab("天气", "tiānqì", "thời tiết", "danh từ", "Chủ đề giao tiếp rất thường gặp.", "今天天气很好。", "Jīntiān tiānqì hěn hǎo.", "Hôm nay thời tiết rất đẹp."),
      vocab("下雨", "xiàyǔ", "mưa", "động từ", "Dùng để nói trời mưa.", "外面下雨了。", "Wàimiàn xiàyǔ le.", "Ngoài trời mưa rồi."),
      vocab("冷", "lěng", "lạnh", "tính từ", "Dùng cho thời tiết hoặc cảm giác cơ thể.", "今天有点儿冷。", "Jīntiān yǒudiǎnr lěng.", "Hôm nay hơi lạnh."),
      vocab("热", "rè", "nóng", "tính từ", "Ngược với 冷.", "下午很热。", "Xiàwǔ hěn rè.", "Buổi chiều rất nóng."),
      vocab("伞", "sǎn", "ô", "danh từ", "Đồ vật hay mang theo khi mưa.", "下雨的时候别忘了带伞。", "Xiàyǔ de shíhou bié wàng le dài sǎn.", "Khi trời mưa đừng quên mang ô."),
      vocab("带", "dài", "mang theo", "động từ", "Dùng với ô, sách, túi.", "你应该带伞。", "Nǐ yīnggāi dài sǎn.", "Bạn nên mang ô.")
    ],
    dialogue: [
      study("A: 今天天气怎么样？", "A: Jīntiān tiānqì zěnmeyàng?", "A: Hôm nay thời tiết thế nào?"),
      study("B: 上午不冷，可是下午可能下雨。", "B: Shàngwǔ bù lěng, kěshì xiàwǔ kěnéng xiàyǔ.", "B: Buổi sáng không lạnh, nhưng chiều có thể mưa."),
      study("A: 那我应该带什么？", "A: Nà wǒ yīnggāi dài shénme?", "A: Vậy tôi nên mang gì?"),
      study("B: 你应该带伞，也可以穿一件外衣。", "B: Nǐ yīnggāi dài sǎn, yě kěyǐ chuān yí jiàn wàiyī.", "B: Bạn nên mang ô, cũng có thể mặc một chiếc áo khoác.")
    ],
    grammarNotes: [
      grammarNote("1. 应该 + động từ", "应该 dùng để đưa ra lời khuyên hoặc đề nghị nên làm gì.", study("你应该带伞。", "Nǐ yīnggāi dài sǎn.", "Bạn nên mang ô."), [
        study("你应该早点儿回家。", "Nǐ yīnggāi zǎodiǎnr huí jiā.", "Bạn nên về nhà sớm hơn."),
        study("我们应该先看天气。", "Wǒmen yīnggāi xiān kàn tiānqì.", "Chúng ta nên xem thời tiết trước.")
      ]),
      grammarNote("2. 可是 để nối hai ý trái nhau", "可是 dùng khi ý sau trái hoặc khác rõ so với ý trước.", study("上午不冷，可是下午可能下雨。", "Shàngwǔ bù lěng, kěshì xiàwǔ kěnéng xiàyǔ.", "Buổi sáng không lạnh nhưng chiều có thể mưa."), [
        study("这件衣服好看，可是有点儿贵。", "Zhè jiàn yīfu hǎokàn, kěshì yǒudiǎnr guì.", "Bộ quần áo này đẹp nhưng hơi đắt."),
        study("我想去，可是今天没有时间。", "Wǒ xiǎng qù, kěshì jīntiān méiyǒu shíjiān.", "Tôi muốn đi nhưng hôm nay không có thời gian.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa.", prompt: ["1. 天气", "2. 伞", "3. 带"], options: ["a. ô", "b. thời tiết", "c. mang theo"], answer: "1-b, 2-a, 3-c" }],
      [{ question: "Điền từ đúng.", prompt: ["今天有点儿___。", "你应该带___。", "下午可能下___。"], answer: "冷 / 伞 / 雨" }],
      [{ question: "Câu nào dùng để hỏi về thời tiết?", options: ["A. 今天天气怎么样？", "B. 你叫什么名字？", "C. 你去哪儿？"], answer: "A. 今天天气怎么样？" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 今天天气怎么样？", "B: ____________", "A: 那我应该带什么？"], answer: "B: 上午不冷，可是下午可能下雨。" }],
      "Tự kiểm tra: bạn có thể mô tả thời tiết hôm nay và nói nên mang gì khi ra ngoài không?"
    ),
    summary: "Bài này giúp bạn mô tả thời tiết và đưa lời khuyên thực tế, ngắn gọn cho người khác.",
    quickSummary: {
      words: ["天气", "下雨", "冷", "热", "伞", "带"],
      patterns: ["今天天气怎么样？", "你应该带伞。"],
      reminder: "Khi muốn nối hai ý trái nhau, 可是 sẽ tự nhiên hơn nói tách thành hai câu rời."
    }
  },
  {
    id: "hsk2-lesson-9",
    number: 9,
    title: "Bài 9: Trường học và công việc",
    objective: "Nói về việc học, việc làm, lịch bận và lý do không thể tham gia một hoạt động.",
    vocabulary: [
      vocab("公司", "gōngsī", "công ty", "danh từ", "Nơi làm việc phổ biến.", "我哥哥在公司工作。", "Wǒ gēge zài gōngsī gōngzuò.", "Anh tôi làm ở công ty."),
      vocab("同事", "tóngshì", "đồng nghiệp", "danh từ", "Người làm cùng công ty.", "我的同事很友好。", "Wǒ de tóngshì hěn yǒuhǎo.", "Đồng nghiệp của tôi rất thân thiện."),
      vocab("作业", "zuòyè", "bài tập về nhà", "danh từ", "Một phần quen thuộc trong việc học.", "今天老师给我们很多作业。", "Jīntiān lǎoshī gěi wǒmen hěnduō zuòyè.", "Hôm nay thầy/cô cho chúng tôi nhiều bài tập."),
      vocab("问题", "wèntí", "vấn đề; câu hỏi", "danh từ", "Dùng trong học tập và công việc.", "我有一个问题想问你。", "Wǒ yǒu yí ge wèntí xiǎng wèn nǐ.", "Tôi có một câu hỏi muốn hỏi bạn."),
      vocab("忙", "máng", "bận", "tính từ", "Dùng khi nói lịch làm việc hoặc học tập.", "我最近很忙。", "Wǒ zuìjìn hěn máng.", "Gần đây tôi rất bận."),
      vocab("帮助", "bāngzhù", "giúp đỡ", "động từ/danh từ", "Từ rất hữu ích trong tình huống thực tế.", "谢谢你的帮助。", "Xièxie nǐ de bāngzhù.", "Cảm ơn sự giúp đỡ của bạn.")
    ],
    dialogue: [
      study("A: 你今天晚上有时间吗？", "A: Nǐ jīntiān wǎnshang yǒu shíjiān ma?", "A: Tối nay bạn có thời gian không?"),
      study("B: 不好意思，我今天很忙，因为还有很多作业。", "B: Bù hǎoyìsi, wǒ jīntiān hěn máng, yīnwèi hái yǒu hěnduō zuòyè.", "B: Xin lỗi, hôm nay tôi rất bận vì vẫn còn nhiều bài tập."),
      study("A: 那你做完以后可以给我打电话。", "A: Nà nǐ zuòwán yǐhòu kěyǐ gěi wǒ dǎ diànhuà.", "A: Vậy sau khi làm xong bạn có thể gọi điện cho tôi."),
      study("B: 好，如果我有问题，也想请你帮助我。", "B: Hǎo, rúguǒ wǒ yǒu wèntí, yě xiǎng qǐng nǐ bāngzhù wǒ.", "B: Được, nếu tôi có vấn đề, tôi cũng muốn nhờ bạn giúp.")
    ],
    grammarNotes: [
      grammarNote("1. 因为...所以...", "Mẫu cơ bản để nói lý do và kết quả rõ ràng.", study("因为我今天很忙，所以不能出去。", "Yīnwèi wǒ jīntiān hěn máng, suǒyǐ bù néng chūqù.", "Vì hôm nay tôi rất bận nên không thể ra ngoài."), [
        study("因为下雨，所以我坐地铁。", "Yīnwèi xiàyǔ, suǒyǐ wǒ zuò dìtiě.", "Vì trời mưa nên tôi đi tàu điện ngầm."),
        study("因为有作业，所以我晚上不看电影。", "Yīnwèi yǒu zuòyè, suǒyǐ wǒ wǎnshang bù kàn diànyǐng.", "Vì có bài tập nên tối tôi không xem phim.")
      ]),
      grammarNote("2. 如果...，就...", "Nếu muốn nói điều kiện rất đơn giản, có thể dùng 如果...就....", study("如果我有问题，就给你打电话。", "Rúguǒ wǒ yǒu wèntí, jiù gěi nǐ dǎ diànhuà.", "Nếu tôi có vấn đề thì sẽ gọi điện cho bạn."), [
        study("如果明天下雨，我们就不去了。", "Rúguǒ míngtiān xiàyǔ, wǒmen jiù bù qù le.", "Nếu ngày mai mưa thì chúng tôi sẽ không đi."),
        study("如果你有时间，就来我家吧。", "Rúguǒ nǐ yǒu shíjiān, jiù lái wǒ jiā ba.", "Nếu bạn có thời gian thì đến nhà tôi nhé.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa.", prompt: ["1. 作业", "2. 忙", "3. 帮助"], options: ["a. bận", "b. giúp đỡ", "c. bài tập"], answer: "1-c, 2-a, 3-b" }],
      [{ question: "Điền từ đúng.", prompt: ["因为我很___，所以不能去。", "我有一个问___。", "谢谢你的帮___。"], answer: "忙 / 题 / 助" }],
      [{ question: "Câu nào nói điều kiện đơn giản?", options: ["A. 如果你有时间，就来吧。", "B. 你在哪儿？", "C. 今天几号？"], answer: "A. 如果你有时间，就来吧。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 你今天晚上有时间吗？", "B: ____________", "A: 那你做完以后给我打电话。"], answer: "B: 不好意思，我今天很忙。" }],
      "Tự kiểm tra: bạn có thể nói lý do mình bận và hẹn nói chuyện lại sau bằng 2 câu ngắn không?"
    ),
    summary: "Bài này giúp bạn nói về học tập, công việc và lý do không thể tham gia một hoạt động ở mức HSK 2.",
    quickSummary: {
      words: ["公司", "同事", "作业", "问题", "忙", "帮助"],
      patterns: ["因为我今天很忙，所以不能去。", "如果你有时间，就来吧。"],
      reminder: "Nếu mới học, nên giữ đủ cả vì-sao và kết-quả để câu rõ hơn."
    }
  },
  {
    id: "hsk2-lesson-10",
    number: 10,
    title: "Bài 10: Hỏi đơn giản và lên kế hoạch",
    objective: "Hỏi thông tin cần thiết, kiểm tra sự thuận tiện và lên kế hoạch ngắn cho cuối tuần.",
    vocabulary: [
      vocab("周末", "zhōumò", "cuối tuần", "danh từ thời gian", "Thời điểm hay được dùng để lên kế hoạch.", "周末你有空吗？", "Zhōumò nǐ yǒu kòng ma?", "Cuối tuần bạn có rảnh không?"),
      vocab("见面", "jiànmiàn", "gặp mặt", "động từ", "Dùng khi hẹn gặp trực tiếp.", "我们下午见面吧。", "Wǒmen xiàwǔ jiànmiàn ba.", "Chiều nay chúng ta gặp nhau nhé."),
      vocab("方便", "fāngbiàn", "tiện", "tính từ", "Dùng để hỏi xem thời gian nào có tiện không.", "明天下午方便吗？", "Míngtiān xiàwǔ fāngbiàn ma?", "Chiều mai có tiện không?"),
      vocab("准时", "zhǔnshí", "đúng giờ", "tính từ/phó từ", "Dùng khi xác nhận sẽ đến đúng giờ.", "我会准时到。", "Wǒ huì zhǔnshí dào.", "Tôi sẽ đến đúng giờ."),
      vocab("打算", "dǎsuan", "dự định", "động từ", "Dùng để nói kế hoạch gần.", "我打算周末去公园。", "Wǒ dǎsuan zhōumò qù gōngyuán.", "Tôi dự định cuối tuần đi công viên."),
      vocab("准备", "zhǔnbèi", "chuẩn bị", "động từ", "Dùng khi đã có kế hoạch sơ bộ.", "我准备先写作业。", "Wǒ zhǔnbèi xiān xiě zuòyè.", "Tôi chuẩn bị viết bài tập trước.")
    ],
    dialogue: [
      study("A: 周末你打算做什么？", "A: Zhōumò nǐ dǎsuan zuò shénme?", "A: Cuối tuần bạn dự định làm gì?"),
      study("B: 我打算先写作业，再和朋友见面。", "B: Wǒ dǎsuan xiān xiě zuòyè, zài hé péngyou jiànmiàn.", "B: Tôi dự định viết bài tập trước rồi gặp bạn."),
      study("A: 明天下午三点方便吗？", "A: Míngtiān xiàwǔ sān diǎn fāngbiàn ma?", "A: Chiều mai 3 giờ có tiện không?"),
      study("B: 方便，我会准时到。", "B: Fāngbiàn, wǒ huì zhǔnshí dào.", "B: Tiện, tôi sẽ đến đúng giờ.")
    ],
    grammarNotes: [
      grammarNote("1. 打算 + động từ", "打算 diễn tả dự định khá rõ trong tương lai gần.", study("我打算周末去公园。", "Wǒ dǎsuan zhōumò qù gōngyuán.", "Tôi dự định cuối tuần đi công viên."), [
        study("他打算明天去商店。", "Tā dǎsuan míngtiān qù shāngdiàn.", "Anh ấy dự định ngày mai đi cửa hàng."),
        study("我们打算下午见面。", "Wǒmen dǎsuan xiàwǔ jiànmiàn.", "Chúng tôi dự định gặp nhau vào buổi chiều.")
      ]),
      grammarNote("2. ...方便吗？", "Mẫu này dùng để hỏi thời gian, cách làm hay hoạt động nào có tiện cho người nghe hay không.", study("明天下午三点方便吗？", "Míngtiān xiàwǔ sān diǎn fāngbiàn ma?", "Chiều mai 3 giờ có tiện không?"), [
        study("现在说话方便吗？", "Xiànzài shuōhuà fāngbiàn ma?", "Bây giờ nói chuyện có tiện không?"),
        study("周末一起吃饭方便吗？", "Zhōumò yìqǐ chīfàn fāngbiàn ma?", "Cuối tuần cùng ăn cơm có tiện không?")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa.", prompt: ["1. 周末", "2. 方便", "3. 准时"], options: ["a. đúng giờ", "b. tiện", "c. cuối tuần"], answer: "1-c, 2-b, 3-a" }],
      [{ question: "Điền từ đúng.", prompt: ["我打___周末去公园。", "明天下午方便___？", "我会准___到。"], answer: "算 / 吗 / 时" }],
      [{ question: "Câu nào dùng để hỏi kế hoạch cuối tuần?", options: ["A. 周末你打算做什么？", "B. 今天几号？", "C. 你为什么来？"], answer: "A. 周末你打算做什么？" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 周末你打算做什么？", "B: ____________", "A: 明天下午三点方便吗？"], answer: "B: 我打算先写作业，再和朋友见面。" }],
      "Tự kiểm tra: bạn có thể nói kế hoạch cuối tuần của mình và hỏi một thời điểm có tiện hay không?"
    ),
    summary: "Bài cuối của HSK 2 giúp bạn hỏi thông tin cần thiết và lên một kế hoạch cuối tuần ngắn, rõ ràng.",
    quickSummary: {
      words: ["周末", "见面", "方便", "准时", "打算", "准备"],
      patterns: ["周末你打算做什么？", "明天下午三点方便吗？", "我会准时到。"],
      reminder: "Khi hẹn gặp, nên nói rõ thời điểm và xác nhận lại sự thuận tiện của người kia."
    }
  }
);

hsk2Course.lessons.push(
  {
    id: "hsk2-lesson-11",
    number: 11,
    title: "Bài 11: Gọi điện và để lại lời nhắn",
    objective: "Hỏi người nghe có tiện nói chuyện không, để lại lời nhắn ngắn và hẹn gọi lại.",
    vocabulary: [
      vocab("接", "jiē", "nghe; nhận", "động từ", "Thường dùng với điện thoại.", "刚才我没接到你的电话。", "Gāngcái wǒ méi jiēdào nǐ de diànhuà.", "Vừa nãy tôi không nghe được điện thoại của bạn."),
      vocab("留言", "liúyán", "để lại lời nhắn", "động từ/danh từ", "Dùng khi người kia không nghe máy.", "你可以给他留言。", "Nǐ kěyǐ gěi tā liúyán.", "Bạn có thể để lại lời nhắn cho anh ấy."),
      vocab("回电话", "huí diànhuà", "gọi lại", "động từ", "Dùng khi hẹn gọi lại sau.", "我下课以后给你回电话。", "Wǒ xiàkè yǐhòu gěi nǐ huí diànhuà.", "Sau giờ học tôi sẽ gọi lại cho bạn."),
      vocab("方便", "fāngbiàn", "tiện", "tính từ", "Dùng để hỏi có tiện nghe máy hay không.", "你现在接电话方便吗？", "Nǐ xiànzài jiē diànhuà fāngbiàn ma?", "Bây giờ bạn nghe điện thoại có tiện không?"),
      vocab("马上", "mǎshàng", "ngay", "phó từ", "Dùng khi nói thời gian rất gần.", "他马上就回来。", "Tā mǎshàng jiù huílai.", "Anh ấy sẽ quay lại ngay."),
      vocab("转告", "zhuǎngào", "nhắn lại; báo lại", "động từ", "Dùng khi truyền lời nhắn cho người khác.", "麻烦你帮我转告他一声。", "Máfan nǐ bāng wǒ zhuǎngào tā yì shēng.", "Phiền bạn nhắn lại với anh ấy giúp tôi.")
    ],
    dialogue: [
      study("A: 你好，请问张老师在吗？", "A: Nǐ hǎo, qǐngwèn Zhāng lǎoshī zài ma?", "A: Xin chào, cho tôi hỏi thầy/cô Trương có ở đó không?"),
      study("B: 他现在不在，您要不要留言？", "B: Tā xiànzài bú zài, nín yào bú yào liúyán?", "B: Bây giờ thầy/cô ấy không có ở đây, anh/chị có muốn để lại lời nhắn không?"),
      study("A: 好，麻烦你转告他，明天下午的时间我已经确认了。", "A: Hǎo, máfan nǐ zhuǎngào tā, míngtiān xiàwǔ de shíjiān wǒ yǐjīng quèrèn le.", "A: Được, phiền bạn nhắn với thầy/cô ấy là tôi đã xác nhận thời gian chiều mai rồi."),
      study("B: 没问题，他回来以后我会马上告诉他。", "B: Méi wèntí, tā huílai yǐhòu wǒ huì mǎshàng gàosu tā.", "B: Không vấn đề gì, sau khi thầy/cô ấy quay lại tôi sẽ báo ngay.")
    ],
    grammarNotes: [
      grammarNote("1. 要不要 + động từ", "要不要 dùng để hỏi nhanh xem đối phương có muốn làm điều gì hay không.", study("您要不要留言？", "Nín yào bú yào liúyán?", "Anh/chị có muốn để lại lời nhắn không?"), [
        study("你要不要一起去？", "Nǐ yào bú yào yìqǐ qù?", "Bạn có muốn đi cùng không?"),
        study("我们要不要现在出发？", "Wǒmen yào bú yào xiànzài chūfā?", "Chúng ta có nên xuất phát ngay bây giờ không?")
      ]),
      grammarNote("2. ...以后...", "以后 đặt sau thời điểm hoặc hành động để chỉ việc xảy ra sau đó.", study("他回来以后我会马上告诉他。", "Tā huílai yǐhòu wǒ huì mǎshàng gàosu tā.", "Sau khi anh ấy quay lại tôi sẽ báo ngay với anh ấy."), [
        study("下课以后我给你回电话。", "Xiàkè yǐhòu wǒ gěi nǐ huí diànhuà.", "Sau giờ học tôi sẽ gọi lại cho bạn."),
        study("开完会以后我们再讨论。", "Kāiwán huì yǐhòu wǒmen zài tǎolùn.", "Sau khi họp xong chúng ta sẽ thảo luận tiếp.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa phù hợp.", prompt: ["1. 留言", "2. 回电话", "3. 转告"], options: ["a. gọi lại", "b. nhắn lại", "c. để lại lời nhắn"], answer: "1-c, 2-a, 3-b" }],
      [{ question: "Điền từ thích hợp.", prompt: ["您要不要留___？", "我下课以后给你回电___。", "麻烦你帮我转___他一声。"], answer: "言 / 话 / 告" }],
      [{ question: "Câu nào dùng 要不要 đúng?", options: ["A. 您要不要留言？", "B. 您留言不要要？", "C. 要留言您不要？"], answer: "A. 您要不要留言？" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 张老师在吗？", "B: ____________", "A: 好，麻烦你转告他。"], answer: "B: 他现在不在，您要不要留言？" }],
      "Tự kiểm tra: bạn có thể gọi điện, để lại lời nhắn và hẹn gọi lại bằng tiếng Trung không?"
    ),
    summary: "Bài này giúp bạn xử lý tình huống gọi điện hằng ngày như nhờ chuyển lời, để lại lời nhắn và gọi lại sau.",
    quickSummary: {
      words: ["接", "留言", "回电话", "方便", "马上", "转告"],
      patterns: ["您要不要留言？", "下课以后我给你回电话。"],
      reminder: "Trong ngữ cảnh điện thoại, 要不要 và 以后 giúp câu ngắn gọn nhưng rất tự nhiên."
    }
  },
  {
    id: "hsk2-lesson-12",
    number: 12,
    title: "Bài 12: Cuối tuần và hoạt động giải trí",
    objective: "Nói về hoạt động giải trí cuối tuần, rủ bạn bè tham gia và mô tả sở thích lúc rảnh.",
    vocabulary: [
      vocab("放松", "fàngsōng", "thư giãn", "động từ", "Dùng khi nói nghỉ ngơi sau học tập hoặc làm việc.", "周末我想好好放松一下。", "Zhōumò wǒ xiǎng hǎohāo fàngsōng yíxià.", "Cuối tuần tôi muốn thư giãn thật tốt một chút."),
      vocab("爬山", "páshān", "leo núi", "động từ", "Hoạt động ngoài trời phổ biến.", "天气好的时候我们常常去爬山。", "Tiānqì hǎo de shíhou wǒmen chángcháng qù páshān.", "Khi thời tiết đẹp chúng tôi thường đi leo núi."),
      vocab("热闹", "rènao", "nhộn nhịp", "tính từ", "Dùng để mô tả nơi chốn hoặc không khí.", "周末的夜市特别热闹。", "Zhōumò de yèshì tèbié rènao.", "Chợ đêm cuối tuần đặc biệt nhộn nhịp."),
      vocab("展览", "zhǎnlǎn", "triển lãm", "danh từ", "Một loại hoạt động giải trí, văn hóa.", "这个展览听说很有意思。", "Zhège zhǎnlǎn tīngshuō hěn yǒuyìsi.", "Nghe nói triển lãm này rất thú vị."),
      vocab("顺路", "shùnlù", "tiện đường", "tính từ/phó từ", "Dùng khi kết hợp nhiều việc trong một chuyến đi.", "如果你顺路，可以先来接我。", "Rúguǒ nǐ shùnlù, kěyǐ xiān lái jiē wǒ.", "Nếu tiện đường, bạn có thể ghé đón tôi trước."),
      vocab("正好", "zhènghǎo", "đúng lúc; vừa khớp", "phó từ", "Dùng khi nói thời gian hay điều kiện rất vừa.", "我下午正好有空。", "Wǒ xiàwǔ zhènghǎo yǒu kòng.", "Chiều tôi đúng lúc rảnh.")
    ],
    dialogue: [
      study("A: 这个周末你打算做什么？", "A: Zhège zhōumò nǐ dǎsuan zuò shénme?", "A: Cuối tuần này bạn dự định làm gì?"),
      study("B: 如果天气不错，我想先去爬山，下午再去看一个展览。", "B: Rúguǒ tiānqì búcuò, wǒ xiǎng xiān qù páshān, xiàwǔ zài qù kàn yí ge zhǎnlǎn.", "B: Nếu thời tiết ổn, tôi muốn đi leo núi trước, chiều lại đi xem một triển lãm."),
      study("A: 听起来很不错。我下午正好有空，要不要一起去？", "A: Tīngqilai hěn búcuò. Wǒ xiàwǔ zhènghǎo yǒu kòng, yào bú yào yìqǐ qù?", "A: Nghe rất ổn. Chiều tôi đúng lúc rảnh, có muốn đi cùng không?"),
      study("B: 当然可以。如果你顺路，也可以先来我家附近见面。", "B: Dāngrán kěyǐ. Rúguǒ nǐ shùnlù, yě kěyǐ xiān lái wǒ jiā fùjìn jiànmiàn.", "B: Tất nhiên được. Nếu tiện đường, bạn cũng có thể ghé gần nhà tôi gặp trước.")
    ],
    grammarNotes: [
      grammarNote("1. 正好", "正好 dùng để nói một điều gì đó rất đúng lúc hoặc vừa khớp với tình huống.", study("我下午正好有空。", "Wǒ xiàwǔ zhènghǎo yǒu kòng.", "Chiều tôi đúng lúc rảnh."), [
        study("我正好也想去那边。", "Wǒ zhènghǎo yě xiǎng qù nàbian.", "Tôi cũng đúng lúc muốn đi về phía đó."),
        study("这个时间正好。", "Zhège shíjiān zhènghǎo.", "Thời gian này vừa đúng.")
      ]),
      grammarNote("2. 听起来...", "Dùng để phản hồi một kế hoạch, ý tưởng hoặc thông tin vừa nghe.", study("听起来很不错。", "Tīngqilai hěn búcuò.", "Nghe có vẻ rất ổn."), [
        study("这个办法听起来很简单。", "Zhège bànfǎ tīngqilai hěn jiǎndān.", "Cách này nghe có vẻ rất đơn giản."),
        study("他的建议听起来很合理。", "Tā de jiànyì tīngqilai hěn hélǐ.", "Đề nghị của anh ấy nghe có vẻ rất hợp lý.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 放松", "2. 热闹", "3. 展览"], options: ["a. nhộn nhịp", "b. thư giãn", "c. triển lãm"], answer: "1-b, 2-a, 3-c" }],
      [{ question: "Điền từ còn thiếu.", prompt: ["周末我想好好放___一下。", "这个展___听说很有意思。", "我下午正___有空。"], answer: "松 / 览 / 好" }],
      [{ question: "Câu nào dùng 正好 đúng?", options: ["A. 我下午正好有空。", "B. 我有空正好下午。", "C. 正好我下午空有。"], answer: "A. 我下午正好有空。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 这个周末你打算做什么？", "B: ____________", "A: 听起来很不错。"], answer: "B: 如果天气不错，我想先去爬山，下午再去看一个展览。" }],
      "Tự kiểm tra: bạn có thể nói một kế hoạch cuối tuần và rủ bạn bè đi cùng một cách tự nhiên không?"
    ),
    summary: "Bài này giúp bạn nói về hoạt động giải trí cuối tuần và phản hồi kế hoạch của người khác tự nhiên hơn.",
    quickSummary: {
      words: ["放松", "爬山", "热闹", "展览", "顺路", "正好"],
      patterns: ["我下午正好有空。", "听起来很不错。"],
      reminder: "正好 và 听起来 rất hữu ích khi phản hồi một lời rủ hoặc một kế hoạch cuối tuần."
    }
  }
);

hsk2Course.lessons.push(
  {
    id: "hsk2-lesson-13",
    number: 13,
    title: "Bài 13: Nhà ở và việc nhà",
    objective: "Mô tả phòng ở, nói về việc dọn dẹp và sắp xếp đồ đạc trong sinh hoạt hằng ngày.",
    vocabulary: [
      vocab("打扫", "dǎsǎo", "dọn dẹp", "động từ", "Dùng khi nói việc nhà hằng ngày.", "周末我常常打扫房间。", "Zhōumò wǒ chángcháng dǎsǎo fángjiān.", "Cuối tuần tôi thường dọn phòng."),
      vocab("收拾", "shōushi", "sắp xếp; thu dọn", "động từ", "Dùng khi dọn đồ đạc cho gọn.", "请你先把桌子收拾一下。", "Qǐng nǐ xiān bǎ zhuōzi shōushi yíxià.", "Bạn hãy dọn chiếc bàn trước một chút."),
      vocab("乱", "luàn", "bừa bộn", "tính từ", "Dùng để mô tả phòng hoặc bàn làm việc.", "我的房间有时候有点儿乱。", "Wǒ de fángjiān yǒushíhou yǒudiǎnr luàn.", "Phòng của tôi đôi khi hơi bừa bộn."),
      vocab("干净", "gānjìng", "sạch sẽ", "tính từ", "Ngược với bừa bộn.", "收拾完以后房间会更干净。", "Shōushi wán yǐhòu fángjiān huì gèng gānjìng.", "Sau khi dọn xong phòng sẽ sạch hơn."),
      vocab("厨房", "chúfáng", "nhà bếp", "danh từ", "Một khu vực trong nhà thường được nói tới.", "厨房里还有很多东西。", "Chúfáng lǐ hái yǒu hěnduō dōngxi.", "Trong bếp vẫn còn nhiều đồ."),
      vocab("搬", "bān", "chuyển; bê", "động từ", "Dùng khi chuyển đồ đạc hoặc chuyển nhà.", "这些箱子太重了，我一个人搬不动。", "Zhèxiē xiāngzi tài zhòng le, wǒ yí ge rén bān bu dòng.", "Những thùng này nặng quá, một mình tôi không bê nổi.")
    ],
    dialogue: [
      study("A: 你的房间怎么这么乱？最近很忙吗？", "A: Nǐ de fángjiān zěnme zhème luàn? Zuìjìn hěn máng ma?", "A: Phòng bạn sao lại bừa bộn thế? Gần đây bận lắm à?"),
      study("B: 对，我这几天一直没时间打扫。", "B: Duì, wǒ zhè jǐ tiān yìzhí méi shíjiān dǎsǎo.", "B: Đúng vậy, mấy ngày nay tôi suốt không có thời gian dọn dẹp."),
      study("A: 那我们先把桌子和书架收拾一下吧。", "A: Nà wǒmen xiān bǎ zhuōzi hé shūjià shōushi yíxià ba.", "A: Vậy chúng ta dọn chiếc bàn và giá sách trước nhé."),
      study("B: 好，收拾完以后我再去打扫厨房。", "B: Hǎo, shōushi wán yǐhòu wǒ zài qù dǎsǎo chúfáng.", "B: Được, sau khi dọn xong tôi sẽ đi dọn bếp tiếp.")
    ],
    grammarNotes: [
      grammarNote("1. 一直没...", "一直没... dùng để nhấn mạnh một tình trạng kéo dài tới hiện tại vẫn chưa thay đổi.", study("我这几天一直没时间打扫。", "Wǒ zhè jǐ tiān yìzhí méi shíjiān dǎsǎo.", "Mấy ngày nay tôi suốt không có thời gian dọn dẹp."), [
        study("我一直没机会跟他谈。", "Wǒ yìzhí méi jīhuì gēn tā tán.", "Tôi vẫn chưa có cơ hội nói chuyện với anh ấy."),
        study("她一直没回来。", "Tā yìzhí méi huílai.", "Cô ấy vẫn chưa quay về.")
      ]),
      grammarNote("2. ...完以后...", "完以后 nhấn mạnh phải hoàn thành xong việc trước rồi mới làm việc tiếp theo.", study("收拾完以后我再去打扫厨房。", "Shōushi wán yǐhòu wǒ zài qù dǎsǎo chúfáng.", "Sau khi dọn xong tôi sẽ đi dọn bếp tiếp."), [
        study("写完作业以后我们去吃饭。", "Xiě wán zuòyè yǐhòu wǒmen qù chīfàn.", "Sau khi viết xong bài tập chúng tôi đi ăn cơm."),
        study("开完会以后给我发消息。", "Kāi wán huì yǐhòu gěi wǒ fā xiāoxi.", "Sau khi họp xong hãy nhắn tin cho tôi.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa phù hợp.", prompt: ["1. 打扫", "2. 干净", "3. 搬"], options: ["a. sạch sẽ", "b. chuyển; bê", "c. dọn dẹp"], answer: "1-c, 2-a, 3-b" }],
      [{ question: "Điền từ còn thiếu.", prompt: ["我的房间有点儿___。", "周末我常常打___房间。", "这些箱子太重了，我搬不___。"], answer: "乱 / 扫 / 动" }],
      [{ question: "Câu nào dùng 一直没... đúng?", options: ["A. 我这几天一直没时间打扫。", "B. 我一直时间没打扫。", "C. 我没一直打扫时间。"], answer: "A. 我这几天一直没时间打扫。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 你的房间怎么这么乱？", "B: ____________", "A: 那我们先把桌子收拾一下吧。"], answer: "B: 我这几天一直没时间打扫。" }],
      "Tự kiểm tra: bạn có thể mô tả phòng mình và nói thứ tự các việc nhà cần làm không?"
    ),
    summary: "Bài này giúp bạn nói về nhà ở và việc nhà tự nhiên hơn, nhất là khi cần mô tả phòng bừa bộn hay kế hoạch dọn dẹp.",
    quickSummary: {
      words: ["打扫", "收拾", "乱", "干净", "厨房", "搬"],
      patterns: ["我这几天一直没时间打扫。", "收拾完以后我再去打扫厨房。"],
      reminder: "一直没... rất hữu ích khi nói một tình trạng kéo dài tới hiện tại vẫn chưa thay đổi."
    }
  },
  {
    id: "hsk2-lesson-14",
    number: 14,
    title: "Bài 14: Dịch vụ và giải quyết việc hằng ngày",
    objective: "Hỏi thông tin dịch vụ, giải thích một vấn đề đơn giản và nhờ nhân viên xử lý giúp.",
    vocabulary: [
      vocab("服务员", "fúwùyuán", "nhân viên phục vụ", "danh từ", "Dùng trong cửa hàng, nhà hàng hoặc quầy dịch vụ.", "服务员，请问这个可以换吗？", "Fúwùyuán, qǐngwèn zhège kěyǐ huàn ma?", "Nhân viên ơi, xin hỏi cái này có thể đổi không?"),
      vocab("发票", "fāpiào", "hóa đơn", "danh từ", "Từ quen thuộc khi mua sắm hoặc thanh toán.", "请问你要发票吗？", "Qǐngwèn nǐ yào fāpiào ma?", "Xin hỏi bạn có cần hóa đơn không?"),
      vocab("尺寸", "chǐcùn", "kích cỡ", "danh từ", "Dùng khi nói quần áo hoặc đồ vật.", "这个尺寸对我来说有点儿小。", "Zhège chǐcùn duì wǒ lái shuō yǒudiǎnr xiǎo.", "Kích cỡ này đối với tôi hơi nhỏ."),
      vocab("合适", "héshì", "phù hợp", "tính từ", "Dùng khi nói cỡ, thời gian hoặc cách làm phù hợp.", "这件衣服不太合适。", "Zhè jiàn yīfu bù tài héshì.", "Bộ quần áo này không quá phù hợp."),
      vocab("修", "xiū", "sửa", "động từ", "Dùng khi đồ vật bị hỏng và cần sửa.", "手机坏了，得拿去修。", "Shǒujī huài le, děi ná qù xiū.", "Điện thoại hỏng rồi, phải mang đi sửa."),
      vocab("问题", "wèntí", "vấn đề", "danh từ", "Dùng để mô tả lỗi hoặc việc phát sinh.", "这个问题今天能解决吗？", "Zhège wèntí jīntiān néng jiějué ma?", "Vấn đề này hôm nay có thể giải quyết không?")
    ],
    dialogue: [
      study("A: 服务员，不好意思，这件衣服的尺寸对我来说有点儿小。", "A: Fúwùyuán, bù hǎoyìsi, zhè jiàn yīfu de chǐcùn duì wǒ lái shuō yǒudiǎnr xiǎo.", "A: Nhân viên ơi, xin lỗi, kích cỡ của bộ đồ này đối với tôi hơi nhỏ."),
      study("B: 那您想换一件大一点儿的吗？", "B: Nà nín xiǎng huàn yí jiàn dà yìdiǎnr de ma?", "B: Vậy anh/chị muốn đổi sang một chiếc lớn hơn một chút phải không?"),
      study("A: 如果没有合适的，我就不买了。", "A: Rúguǒ méiyǒu héshì de, wǒ jiù bù mǎi le.", "A: Nếu không có cỡ phù hợp thì tôi sẽ không mua nữa."),
      study("B: 没关系，我先帮您找一下，也可以顺便给您开发票。", "B: Méi guānxi, wǒ xiān bāng nín zhǎo yíxià, yě kěyǐ shùnbiàn gěi nín kāi fāpiào.", "B: Không sao, tôi tìm giúp anh/chị trước một chút, đồng thời cũng có thể xuất hóa đơn cho anh/chị.")
    ],
    grammarNotes: [
      grammarNote("1. 对...来说...", "Mẫu này dùng để nói đánh giá từ góc nhìn hoặc nhu cầu của một người.", study("这个尺寸对我来说有点儿小。", "Zhège chǐcùn duì wǒ lái shuō yǒudiǎnr xiǎo.", "Kích cỡ này đối với tôi hơi nhỏ."), [
        study("这个时间对我来说不太方便。", "Zhège shíjiān duì wǒ lái shuō bù tài fāngbiàn.", "Thời gian này đối với tôi không quá tiện."),
        study("这个办法对我们来说更简单。", "Zhège bànfǎ duì wǒmen lái shuō gèng jiǎndān.", "Cách này đối với chúng tôi đơn giản hơn.")
      ]),
      grammarNote("2. 如果...，就...", "Dùng để nói phương án sẽ xảy ra khi điều kiện nào đó xuất hiện.", study("如果没有合适的，我就不买了。", "Rúguǒ méiyǒu héshì de, wǒ jiù bù mǎi le.", "Nếu không có cái phù hợp thì tôi sẽ không mua nữa."), [
        study("如果今天修不好，我明天再来。", "Rúguǒ jīntiān xiū bù hǎo, wǒ míngtiān zài lái.", "Nếu hôm nay sửa không xong, mai tôi sẽ quay lại."),
        study("如果你有问题，就给我打电话。", "Rúguǒ nǐ yǒu wèntí, jiù gěi wǒ dǎ diànhuà.", "Nếu bạn có vấn đề thì gọi điện cho tôi.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa phù hợp.", prompt: ["1. 发票", "2. 尺寸", "3. 修"], options: ["a. sửa", "b. hóa đơn", "c. kích cỡ"], answer: "1-b, 2-c, 3-a" }],
      [{ question: "Điền từ còn thiếu.", prompt: ["这个尺___对我来说有点儿小。", "手机坏了，得拿去___。", "如果没有合适的，我就不___了。"], answer: "寸 / 修 / 买" }],
      [{ question: "Câu nào dùng 对...来说... đúng?", options: ["A. 这个尺寸对我来说有点儿小。", "B. 对这个尺寸我来说小。", "C. 这个尺寸来说对我小。"], answer: "A. 这个尺寸对我来说有点儿小。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 这件衣服的尺寸对我来说有点儿小。", "B: ____________", "A: 如果没有合适的，我就不买了。"], answer: "B: 那您想换一件大一点儿的吗？" }],
      "Tự kiểm tra: bạn có thể giải thích một vấn đề dịch vụ đơn giản và nói phương án khác nếu không giải quyết được không?"
    ),
    summary: "Bài này giúp bạn xử lý các tình huống dịch vụ thực tế như đổi cỡ, hỏi hóa đơn và giải thích vấn đề đơn giản.",
    quickSummary: {
      words: ["服务员", "发票", "尺寸", "合适", "修", "问题"],
      patterns: ["这个尺寸对我来说有点儿小。", "如果没有合适的，我就不买了。"],
      reminder: "对...来说... rất hữu ích khi bạn cần nói rõ nhu cầu cá nhân trong tình huống dịch vụ."
    }
  },
  {
    id: "hsk2-lesson-15",
    number: 15,
    title: "Bài 15: Sức khỏe và vấn đề hằng ngày",
    objective: "Mô tả rõ hơn tình trạng không khỏe, hỏi thăm người khác và đưa lời khuyên đơn giản, thực tế.",
    vocabulary: [
      vocab("不舒服", "bù shūfu", "không khỏe", "tính từ", "Cách nói chung khi cơ thể không ổn.", "我今天有点儿不舒服。", "Wǒ jīntiān yǒudiǎnr bù shūfu.", "Hôm nay tôi hơi không khỏe."),
      vocab("症状", "zhèngzhuàng", "triệu chứng", "danh từ", "Dùng để nói các dấu hiệu của bệnh.", "这些症状已经两天了。", "Zhèxiē zhèngzhuàng yǐjīng liǎng tiān le.", "Những triệu chứng này đã kéo dài hai ngày rồi."),
      vocab("影响", "yǐngxiǎng", "ảnh hưởng", "động từ/danh từ", "Dùng khi vấn đề sức khỏe ảnh hưởng sinh hoạt.", "这个问题已经影响我的工作了。", "Zhège wèntí yǐjīng yǐngxiǎng wǒ de gōngzuò le.", "Vấn đề này đã ảnh hưởng tới công việc của tôi rồi."),
      vocab("按时", "ànshí", "đúng giờ", "phó từ", "Thường dùng với uống thuốc, đi ngủ.", "你要按时吃药。", "Nǐ yào ànshí chī yào.", "Bạn phải uống thuốc đúng giờ."),
      vocab("恢复", "huīfù", "hồi phục", "động từ", "Dùng sau khi nghỉ ngơi hoặc chữa trị.", "希望你很快就能恢复。", "Xīwàng nǐ hěn kuài jiù néng huīfù.", "Hy vọng bạn sẽ sớm hồi phục."),
      vocab("休息", "xiūxi", "nghỉ ngơi", "động từ", "Từ rất quan trọng trong chủ đề sức khỏe.", "医生让我多休息两天。", "Yīshēng ràng wǒ duō xiūxi liǎng tiān.", "Bác sĩ bảo tôi nghỉ thêm hai ngày.")
    ],
    dialogue: [
      study("A: 你今天看起来不太舒服，怎么了？", "A: Nǐ jīntiān kànqilai bú tài shūfu, zěnme le?", "A: Hôm nay trông bạn không được khỏe lắm, sao vậy?"),
      study("B: 这两天一直头疼，而且晚上总是睡不好。", "B: Zhè liǎng tiān yìzhí tóuténg, érqiě wǎnshang zǒngshì shuì bù hǎo.", "B: Hai ngày nay tôi cứ đau đầu, hơn nữa buổi tối luôn ngủ không ngon."),
      study("A: 这些症状已经影响工作了吗？", "A: Zhèxiē zhèngzhuàng yǐjīng yǐngxiǎng gōngzuò le ma?", "A: Những triệu chứng này đã ảnh hưởng đến công việc chưa?"),
      study("B: 有一点儿，不过医生说只要按时吃药，多休息，很快就会恢复。", "B: Yǒu yìdiǎnr, búguò yīshēng shuō zhǐyào ànshí chī yào, duō xiūxi, hěn kuài jiù huì huīfù.", "B: Có một chút, nhưng bác sĩ nói chỉ cần uống thuốc đúng giờ và nghỉ nhiều thì sẽ sớm hồi phục.")
    ],
    grammarNotes: [
      grammarNote("1. 而且", "而且 dùng để thêm một thông tin cùng hướng, mạnh hơn 也 và mang tính bổ sung rõ ràng.", study("这两天一直头疼，而且晚上总是睡不好。", "Zhè liǎng tiān yìzhí tóuténg, érqiě wǎnshang zǒngshì shuì bù hǎo.", "Hai ngày nay cứ đau đầu, hơn nữa buổi tối luôn ngủ không ngon."), [
        study("这个地方安静，而且交通很方便。", "Zhège dìfang ānjìng, érqiě jiāotōng hěn fāngbiàn.", "Nơi này yên tĩnh, hơn nữa giao thông rất thuận tiện."),
        study("他不但来了，而且还带了资料。", "Tā búdàn lái le, érqiě hái dài le zīliào.", "Anh ấy không chỉ đến mà còn mang theo tài liệu.")
      ]),
      grammarNote("2. 只要...，就...", "Mẫu này diễn tả điều kiện đủ: chỉ cần làm điều gì đó thì kết quả sẽ xảy ra.", study("只要按时吃药，多休息，很快就会恢复。", "Zhǐyào ànshí chī yào, duō xiūxi, hěn kuài jiù huì huīfù.", "Chỉ cần uống thuốc đúng giờ và nghỉ nhiều thì sẽ sớm hồi phục."), [
        study("只要你坚持练习，就会进步。", "Zhǐyào nǐ jiānchí liànxí, jiù huì jìnbù.", "Chỉ cần bạn kiên trì luyện tập thì sẽ tiến bộ."),
        study("只要天气好，我们就出去走走。", "Zhǐyào tiānqì hǎo, wǒmen jiù chūqù zǒuzou.", "Chỉ cần thời tiết đẹp thì chúng tôi sẽ ra ngoài đi dạo.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa phù hợp.", prompt: ["1. 症状", "2. 影响", "3. 恢复"], options: ["a. hồi phục", "b. triệu chứng", "c. ảnh hưởng"], answer: "1-b, 2-c, 3-a" }],
      [{ question: "Điền từ thích hợp.", prompt: ["这些症___已经两天了。", "你要按___吃药。", "希望你很快就能恢___。"], answer: "状 / 时 / 复" }],
      [{ question: "Câu nào dùng 只要...就... đúng?", options: ["A. 只要按时吃药，就会恢复。", "B. 只要就按时吃药恢复。", "C. 按时吃药只要恢复就。"], answer: "A. 只要按时吃药，就会恢复。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 这些症状已经影响工作了吗？", "B: ____________", "A: 那你一定要多休息。"], answer: "B: 有一点儿，不过医生说只要按时吃药，多休息，很快就会恢复。" }],
      "Tự kiểm tra: bạn có thể mô tả rõ triệu chứng của mình và nói bác sĩ khuyên làm gì không?"
    ),
    summary: "Bài này giúp bạn nói rõ hơn về sức khỏe, ảnh hưởng của việc không khỏe và cách hồi phục trong đời sống hằng ngày.",
    quickSummary: {
      words: ["不舒服", "症状", "影响", "按时", "恢复", "休息"],
      patterns: ["而且晚上总是睡不好。", "只要按时吃药，就会恢复。"],
      reminder: "只要...就... rất hữu ích khi muốn nói điều kiện đủ để có kết quả tích cực."
    }
  }
);

function hsk2Lesson({
  number,
  titleChinese,
  titlePinyin,
  vietnameseTitle,
  objective,
  vocabulary,
  dialogueBlocks,
  grammarNotes,
  studyExercises,
  quickSummary
}) {
  return {
    id: `hsk2-lesson-${number}`,
    number,
    title: `Bài ${number}: ${vietnameseTitle}`,
    titleChinese,
    titlePinyin,
    objective,
    vocabulary,
    dialogueBlocks,
    grammarNotes,
    studyExercises,
    quickSummary
  };
}

const hsk2ReferenceLessons = [
  hsk2Lesson({
    number: 1,
    titleChinese: "九点半去学校。",
    titlePinyin: "Jiǔ diǎn bàn qù xuéxiào.",
    vietnameseTitle: "9 giờ rưỡi đi đến trường.",
    objective: "Nói giờ giấc đi học, hỏi thời gian bắt đầu buổi học và mô tả lịch đến trường bằng câu ngắn ở mức HSK 2.",
    vocabulary: [
      vocab("九点半", "jiǔ diǎn bàn", "9 giờ rưỡi", "cụm thời gian", "Dùng để nói thời điểm cụ thể.", "我们九点半去学校。", "Wǒmen jiǔ diǎn bàn qù xuéxiào.", "Chúng tôi đi đến trường lúc 9 giờ rưỡi."),
      vocab("学校", "xuéxiào", "trường học", "danh từ", "Nơi học tập thường ngày.", "我哥哥在学校学习。", "Wǒ gēge zài xuéxiào xuéxí.", "Anh trai tôi học ở trường."),
      vocab("去", "qù", "đi", "động từ", "Dùng để nói đi đến một nơi.", "我现在去教室。", "Wǒ xiànzài qù jiàoshì.", "Bây giờ tôi đi đến lớp."),
      vocab("迟到", "chídào", "đến muộn", "động từ", "Hay dùng khi nói về giờ học, giờ làm.", "今天我没迟到。", "Jīntiān wǒ méi chídào.", "Hôm nay tôi không đến muộn."),
      vocab("早上", "zǎoshang", "buổi sáng", "danh từ thời gian", "Thời gian rất hay gặp trong HSK 2.", "早上我七点起床。", "Zǎoshang wǒ qī diǎn qǐchuáng.", "Buổi sáng tôi dậy lúc 7 giờ."),
      vocab("教室", "jiàoshì", "phòng học", "danh từ", "Nơi diễn ra buổi học.", "教室在二楼。", "Jiàoshì zài èr lóu.", "Phòng học ở tầng hai.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Hỏi giờ đi học.", [
        study("A: 你几点去学校？", "A: Nǐ jǐ diǎn qù xuéxiào?", "A: Bạn đi đến trường lúc mấy giờ?"),
        study("B: 我九点半去学校。", "B: Wǒ jiǔ diǎn bàn qù xuéxiào.", "B: Tôi đi đến trường lúc 9 giờ rưỡi."),
        study("A: 你会迟到吗？", "A: Nǐ huì chídào ma?", "A: Bạn có bị muộn không?")
      ]),
      dialogueBlock("Tình huống 2", "Hỏi giờ vào lớp.", [
        study("A: 汉语课几点开始？", "A: Hànyǔ kè jǐ diǎn kāishǐ?", "A: Tiết tiếng Trung bắt đầu lúc mấy giờ?"),
        study("B: 十点开始。", "B: Shí diǎn kāishǐ.", "B: Bắt đầu lúc 10 giờ."),
        study("A: 那我们早点去吧。", "A: Nà wǒmen zǎodiǎn qù ba.", "A: Vậy chúng ta đi sớm một chút nhé.")
      ]),
      dialogueBlock("Tình huống 3", "Nói lý do đến muộn.", [
        study("A: 你今天怎么来得这么晚？", "A: Nǐ jīntiān zěnme lái de zhème wǎn?", "A: Hôm nay sao bạn đến muộn thế?"),
        study("B: 路上有点儿堵，所以我迟到了。", "B: Lùshang yǒudiǎnr dǔ, suǒyǐ wǒ chídào le.", "B: Trên đường hơi tắc, nên tôi đến muộn."),
        study("A: 下次早点出门吧。", "A: Xià cì zǎodiǎn chūmén ba.", "A: Lần sau ra khỏi nhà sớm hơn nhé.")
      ]),
      dialogueBlock("Tình huống 4", "Rủ nhau đi học.", [
        study("A: 明天你还去学校吗？", "A: Míngtiān nǐ hái qù xuéxiào ma?", "A: Ngày mai bạn vẫn đi học chứ?"),
        study("B: 去，我们一起去吧。", "B: Qù, wǒmen yìqǐ qù ba.", "B: Có, chúng ta cùng đi nhé."),
        study("A: 好，九点见。", "A: Hǎo, jiǔ diǎn jiàn.", "A: Được, 9 giờ gặp nhé.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. Cách nói giờ với 点 và 半", "Trong HSK 2, người học cần nói giờ tự nhiên hơn, ví dụ 九点半, 十一点, 七点二十. 点 chỉ giờ, 半 là rưỡi.", study("九点半去学校。", "Jiǔ diǎn bàn qù xuéxiào.", "9 giờ rưỡi đi đến trường."), [
        study("现在十点。", "Xiànzài shí diǎn.", "Bây giờ là 10 giờ."),
        study("我们七点半吃早饭。", "Wǒmen qī diǎn bàn chī zǎofàn.", "Chúng tôi ăn sáng lúc 7 giờ rưỡi.")
      ]),
      grammarNote("2. 去 + nơi chốn", "去 đứng trước địa điểm để nói đi đến đâu. Nếu thêm thời gian ở đầu câu, câu sẽ tự nhiên hơn.", study("我九点半去学校。", "Wǒ jiǔ diǎn bàn qù xuéxiào.", "Tôi đi đến trường lúc 9 giờ rưỡi."), [
        study("我现在去教室。", "Wǒ xiànzài qù jiàoshì.", "Bây giờ tôi đi đến lớp."),
        study("明天他去医院。", "Míngtiān tā qù yīyuàn.", "Ngày mai anh ấy đi bệnh viện.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 学校", "2. 迟到", "3. 九点半"], options: ["a. đến muộn", "b. trường học", "c. 9 giờ rưỡi"], answer: "1-b, 2-a, 3-c" }],
      [{ question: "Điền từ còn thiếu.", prompt: ["我___点半去学校。", "今天我没___到。", "教室在二___。"], answer: "九 / 迟 / 楼" }],
      [{ question: "Câu nào đúng?", options: ["A. 我学校去九点半。", "B. 我九点半去学校。", "C. 我去九点半学校。"], answer: "B. 我九点半去学校。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 你几点去学校？", "B: ____________", "A: 好，我们一起去吧。"], answer: "B: 我九点半去学校。" }],
      "Tự kiểm tra: bạn có thể nói một câu hoàn chỉnh về giờ đi học của mình mà không nhìn bài không?"
    ),
    quickSummary: {
      words: ["九点半", "学校", "去", "迟到", "早上", "教室"],
      patterns: ["我九点半去学校。", "你几点去学校？", "汉语课几点开始？"],
      reminder: "Khi nói giờ trong tiếng Trung, đặt cụm thời gian trước động từ sẽ tự nhiên hơn."
    }
  }),
  hsk2Lesson({
    number: 2,
    titleChinese: "我每天很忙。",
    titlePinyin: "Wǒ měitiān hěn máng.",
    vietnameseTitle: "Mỗi ngày tôi đều rất bận.",
    objective: "Mô tả lịch sinh hoạt hằng ngày, nói việc làm theo thói quen và dùng trạng từ thời gian một cách tự nhiên hơn.",
    vocabulary: [
      vocab("每天", "měitiān", "mỗi ngày", "trạng từ thời gian", "Dùng để nói thói quen lặp lại.", "我每天都看书。", "Wǒ měitiān dōu kàn shū.", "Mỗi ngày tôi đều đọc sách."),
      vocab("忙", "máng", "bận", "tính từ", "Dùng để nói nhiều việc, ít thời gian.", "这几天我很忙。", "Zhè jǐ tiān wǒ hěn máng.", "Mấy ngày nay tôi rất bận."),
      vocab("起床", "qǐchuáng", "thức dậy", "động từ", "Một hoạt động cơ bản trong ngày.", "我七点起床。", "Wǒ qī diǎn qǐchuáng.", "Tôi dậy lúc 7 giờ."),
      vocab("睡觉", "shuìjiào", "đi ngủ", "động từ", "Thường đi với 晚上.", "我晚上十一点睡觉。", "Wǒ wǎnshang shíyī diǎn shuìjiào.", "Tôi đi ngủ lúc 11 giờ tối."),
      vocab("先", "xiān", "trước", "phó từ", "Dùng trong mẫu 先...再....", "我先吃饭。", "Wǒ xiān chīfàn.", "Tôi ăn cơm trước."),
      vocab("再", "zài", "sau đó, rồi", "phó từ", "Dùng sau 先 để nói thứ tự.", "再去上班。", "Zài qù shàngbān.", "Rồi đi làm.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Hỏi lịch mỗi ngày.", [
        study("A: 你每天忙吗？", "A: Nǐ měitiān máng ma?", "A: Mỗi ngày bạn có bận không?"),
        study("B: 很忙，我早上上课，晚上做练习。", "B: Hěn máng, wǒ zǎoshang shàngkè, wǎnshang zuò liànxí.", "B: Rất bận, buổi sáng tôi đi học, buổi tối làm bài tập."),
        study("A: 那你几点睡觉？", "A: Nà nǐ jǐ diǎn shuìjiào?", "A: Vậy bạn đi ngủ lúc mấy giờ?")
      ]),
      dialogueBlock("Tình huống 2", "Nói trình tự công việc.", [
        study("A: 你下课以后做什么？", "A: Nǐ xiàkè yǐhòu zuò shénme?", "A: Sau giờ học bạn làm gì?"),
        study("B: 我先吃饭，再回家。", "B: Wǒ xiān chīfàn, zài huí jiā.", "B: Tôi ăn cơm trước, rồi về nhà."),
        study("A: 你每天都这样吗？", "A: Nǐ měitiān dōu zhèyàng ma?", "A: Ngày nào bạn cũng như vậy à?")
      ]),
      dialogueBlock("Tình huống 3", "Kể việc cuối ngày.", [
        study("A: 你晚上还学习吗？", "A: Nǐ wǎnshang hái xuéxí ma?", "A: Buổi tối bạn còn học nữa không?"),
        study("B: 学，我每天晚上都看汉语书。", "B: Xué, wǒ měitiān wǎnshang dōu kàn Hànyǔ shū.", "B: Có, tối nào tôi cũng đọc sách tiếng Trung."),
        study("A: 怪不得你进步这么快。", "A: Guàibude nǐ jìnbù zhème kuài.", "A: Thảo nào bạn tiến bộ nhanh thế.")
      ]),
      dialogueBlock("Tình huống 4", "Nhận xét thói quen.", [
        study("A: 你每天都很早起床。", "A: Nǐ měitiān dōu hěn zǎo qǐchuáng.", "A: Ngày nào bạn cũng dậy rất sớm."),
        study("B: 对，不然我来不及。", "B: Duì, bùrán wǒ láibují.", "B: Đúng vậy, không thì tôi không kịp."),
        study("A: 你的生活真有规律。", "A: Nǐ de shēnghuó zhēn yǒu guīlǜ.", "A: Sinh hoạt của bạn thật có quy luật.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 每天 + động từ", "每天 dùng để nhấn mạnh thói quen diễn ra lặp lại. Có thể đi với 都 để làm câu tự nhiên hơn.", study("我每天都很忙。", "Wǒ měitiān dōu hěn máng.", "Mỗi ngày tôi đều rất bận."), [
        study("我每天看书。", "Wǒ měitiān kàn shū.", "Mỗi ngày tôi đọc sách."),
        study("她每天六点起床。", "Tā měitiān liù diǎn qǐchuáng.", "Ngày nào cô ấy cũng dậy lúc 6 giờ.")
      ]),
      grammarNote("2. 先...再...", "Mẫu này dùng để nói hai hành động theo thứ tự trước sau rõ ràng.", study("我先吃饭，再回家。", "Wǒ xiān chīfàn, zài huí jiā.", "Tôi ăn cơm trước, rồi về nhà."), [
        study("你先休息，再学习。", "Nǐ xiān xiūxi, zài xuéxí.", "Bạn nghỉ trước, rồi học tiếp."),
        study("我们先买票，再进去。", "Wǒmen xiān mǎi piào, zài jìnqù.", "Chúng tôi mua vé trước, rồi đi vào.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 每天", "2. 忙", "3. 起床"], options: ["a. bận", "b. mỗi ngày", "c. thức dậy"], answer: "1-b, 2-a, 3-c" }],
      [{ question: "Điền từ còn thiếu.", prompt: ["我___天都很忙。", "我先吃饭，___回家。", "她晚上十一点睡___。"], answer: "每 / 再 / 觉" }],
      [{ question: "Câu nào đúng?", options: ["A. 我每天都很忙。", "B. 我都每天很忙。", "C. 我很忙都每天。"], answer: "A. 我每天都很忙。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 你下课以后做什么？", "B: ____________", "A: 好，那你先去吧。"], answer: "B: 我先吃饭，再回家。" }],
      "Tự kiểm tra: bạn có thể mô tả 3 việc mình làm mỗi ngày bằng tiếng Trung không?"
    ),
    quickSummary: {
      words: ["每天", "忙", "起床", "睡觉", "先", "再"],
      patterns: ["我每天都很忙。", "我先吃饭，再回家。", "你每天几点起床？"],
      reminder: "Khi kể lịch sinh hoạt, hãy đặt từ thời gian trước rồi mới nói hoạt động."
    }
  }),
  hsk2Lesson({
    number: 3,
    titleChinese: "你家有几口人？",
    titlePinyin: "Nǐ jiā yǒu jǐ kǒu rén?",
    vietnameseTitle: "Nhà bạn có mấy người?",
    objective: "Giới thiệu gia đình, hỏi số người trong nhà và dùng lượng từ 口 trong ngữ cảnh gia đình.",
    vocabulary: [
      vocab("家", "jiā", "nhà; gia đình", "danh từ", "Có thể chỉ nơi ở hoặc người thân trong nhà.", "我家在河内。", "Wǒ jiā zài Hénèi.", "Nhà tôi ở Hà Nội."),
      vocab("口", "kǒu", "người (lượng từ)", "lượng từ", "Dùng khi đếm người trong gia đình.", "你家有几口人？", "Nǐ jiā yǒu jǐ kǒu rén?", "Nhà bạn có mấy người?"),
      vocab("爸爸", "bàba", "bố", "danh từ", "Từ chỉ thành viên trong gia đình.", "我爸爸是老师。", "Wǒ bàba shì lǎoshī.", "Bố tôi là giáo viên."),
      vocab("妈妈", "māma", "mẹ", "danh từ", "Từ chỉ người thân rất cơ bản.", "我妈妈在家。", "Wǒ māma zài jiā.", "Mẹ tôi ở nhà."),
      vocab("哥哥", "gēge", "anh trai", "danh từ", "Dùng trong giới thiệu gia đình.", "我哥哥会开车。", "Wǒ gēge huì kāichē.", "Anh trai tôi biết lái xe."),
      vocab("妹妹", "mèimei", "em gái", "danh từ", "Dùng khi nói về anh chị em.", "我妹妹今年十岁。", "Wǒ mèimei jīnnián shí suì.", "Em gái tôi năm nay 10 tuổi.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Hỏi số người trong nhà.", [
        study("A: 你家有几口人？", "A: Nǐ jiā yǒu jǐ kǒu rén?", "A: Nhà bạn có mấy người?"),
        study("B: 我家有四口人。", "B: Wǒ jiā yǒu sì kǒu rén.", "B: Nhà tôi có 4 người."),
        study("A: 都有谁？", "A: Dōu yǒu shéi?", "A: Gồm có những ai?")
      ]),
      dialogueBlock("Tình huống 2", "Giới thiệu bố mẹ.", [
        study("A: 你爸爸做什么工作？", "A: Nǐ bàba zuò shénme gōngzuò?", "A: Bố bạn làm nghề gì?"),
        study("B: 我爸爸是医生，我妈妈是老师。", "B: Wǒ bàba shì yīshēng, wǒ māma shì lǎoshī.", "B: Bố tôi là bác sĩ, mẹ tôi là giáo viên."),
        study("A: 他们工作都很忙吧。", "A: Tāmen gōngzuò dōu hěn máng ba.", "A: Chắc công việc của họ đều bận nhỉ.")
      ]),
      dialogueBlock("Tình huống 3", "Nói về anh chị em.", [
        study("A: 你有哥哥或者妹妹吗？", "A: Nǐ yǒu gēge huòzhě mèimei ma?", "A: Bạn có anh trai hoặc em gái không?"),
        study("B: 我有一个哥哥，也有一个妹妹。", "B: Wǒ yǒu yí ge gēge, yě yǒu yí ge mèimei.", "B: Tôi có một anh trai, cũng có một em gái."),
        study("A: 你们家真热闹。", "A: Nǐmen jiā zhēn rènào.", "A: Nhà bạn thật đông vui.")
      ]),
      dialogueBlock("Tình huống 4", "So sánh gia đình.", [
        study("A: 你家人多吗？", "A: Nǐ jiārén duō ma?", "A: Nhà bạn đông người không?"),
        study("B: 还可以，不算多。", "B: Hái kěyǐ, bú suàn duō.", "B: Cũng được, không tính là đông."),
        study("A: 我家只有三口人。", "A: Wǒ jiā zhǐyǒu sān kǒu rén.", "A: Nhà tôi chỉ có 3 người.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 有 + số lượng + 口人", "Khi nói số người trong gia đình, dùng lượng từ 口 thay vì 个. Đây là cách nói rất phổ biến trong HSK 2.", study("我家有四口人。", "Wǒ jiā yǒu sì kǒu rén.", "Nhà tôi có 4 người."), [
        study("你家有几口人？", "Nǐ jiā yǒu jǐ kǒu rén?", "Nhà bạn có mấy người?"),
        study("他们家有五口人。", "Tāmen jiā yǒu wǔ kǒu rén.", "Nhà họ có 5 người.")
      ]),
      grammarNote("2. 也 dùng để thêm thông tin tương tự", "也 đứng trước động từ để nói 'cũng'. Trong bài gia đình, mẫu này giúp thêm người hoặc thêm thông tin song song.", study("我也有一个妹妹。", "Wǒ yě yǒu yí ge mèimei.", "Tôi cũng có một em gái."), [
        study("我爸爸是老师，我妈妈也是老师。", "Wǒ bàba shì lǎoshī, wǒ māma yě shì lǎoshī.", "Bố tôi là giáo viên, mẹ tôi cũng là giáo viên."),
        study("他会开车，我哥哥也会。", "Tā huì kāichē, wǒ gēge yě huì.", "Anh ấy biết lái xe, anh trai tôi cũng biết.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 爸爸", "2. 妹妹", "3. 口"], options: ["a. bố", "b. em gái", "c. lượng từ đếm người trong nhà"], answer: "1-a, 2-b, 3-c" }],
      [{ question: "Điền từ còn thiếu.", prompt: ["你家有几___人？", "我___有一个哥哥。", "我家有四___人。"], answer: "口 / 也 / 口" }],
      [{ question: "Câu nào đúng?", options: ["A. 我家有四个人口。", "B. 我家有四口人。", "C. 我家四有口人。"], answer: "B. 我家有四口人。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 你家有几口人？", "B: ____________", "A: 都有谁？"], answer: "B: 我家有四口人。" }],
      "Tự kiểm tra: bạn có thể tự giới thiệu ngắn về gia đình mình bằng 3 đến 4 câu không?"
    ),
    quickSummary: {
      words: ["家", "口", "爸爸", "妈妈", "哥哥", "妹妹"],
      patterns: ["你家有几口人？", "我家有四口人。", "我也有一个妹妹。"],
      reminder: "Khi đếm người trong gia đình, ưu tiên dùng 口 chứ không dùng 个."
    }
  }),
  hsk2Lesson({
    number: 4,
    titleChinese: "我想学太极拳。",
    titlePinyin: "Wǒ xiǎng xué tàijíquán.",
    vietnameseTitle: "Tôi muốn học Thái Cực Quyền.",
    objective: "Nói mong muốn, sở thích và kế hoạch học một kỹ năng mới bằng mẫu câu đơn giản ở mức HSK 2.",
    vocabulary: [
      vocab("想", "xiǎng", "muốn", "động từ", "Dùng để nói mong muốn.", "我想学汉语。", "Wǒ xiǎng xué Hànyǔ.", "Tôi muốn học tiếng Trung."),
      vocab("学", "xué", "học", "động từ", "Dùng với kỹ năng, ngôn ngữ, môn thể thao.", "她在学做饭。", "Tā zài xué zuòfàn.", "Cô ấy đang học nấu ăn."),
      vocab("太极拳", "tàijíquán", "Thái Cực Quyền", "danh từ", "Môn võ quen thuộc trong giáo trình HSK 2.", "我想学太极拳。", "Wǒ xiǎng xué tàijíquán.", "Tôi muốn học Thái Cực Quyền."),
      vocab("觉得", "juéde", "cảm thấy, thấy rằng", "động từ", "Dùng để nêu ý kiến cá nhân.", "我觉得很有意思。", "Wǒ juéde hěn yǒuyìsi.", "Tôi thấy rất thú vị."),
      vocab("有意思", "yǒuyìsi", "thú vị", "tính từ", "Dùng để nhận xét người, việc, hoạt động.", "这本书很有意思。", "Zhè běn shū hěn yǒuyìsi.", "Quyển sách này rất thú vị."),
      vocab("一起", "yìqǐ", "cùng nhau", "phó từ", "Hay dùng khi rủ người khác cùng làm gì đó.", "我们一起学吧。", "Wǒmen yìqǐ xué ba.", "Chúng ta cùng học nhé.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Nói mong muốn học.", [
        study("A: 你最近想学什么？", "A: Nǐ zuìjìn xiǎng xué shénme?", "A: Gần đây bạn muốn học gì?"),
        study("B: 我想学太极拳。", "B: Wǒ xiǎng xué tàijíquán.", "B: Tôi muốn học Thái Cực Quyền."),
        study("A: 为什么？", "A: Wèishénme?", "A: Vì sao?")
      ]),
      dialogueBlock("Tình huống 2", "Nêu cảm nhận.", [
        study("A: 你觉得太极拳怎么样？", "A: Nǐ juéde tàijíquán zěnmeyàng?", "A: Bạn thấy Thái Cực Quyền thế nào?"),
        study("B: 我觉得很有意思。", "B: Wǒ juéde hěn yǒuyìsi.", "B: Tôi thấy rất thú vị."),
        study("A: 我也想试试。", "A: Wǒ yě xiǎng shìshi.", "A: Tôi cũng muốn thử.")
      ]),
      dialogueBlock("Tình huống 3", "Rủ bạn cùng học.", [
        study("A: 周末你有时间吗？", "A: Zhōumò nǐ yǒu shíjiān ma?", "A: Cuối tuần bạn có thời gian không?"),
        study("B: 有，我们可以一起学。", "B: Yǒu, wǒmen kěyǐ yìqǐ xué.", "B: Có, chúng ta có thể học cùng nhau."),
        study("A: 好啊，我很高兴。", "A: Hǎo a, wǒ hěn gāoxìng.", "A: Được đấy, tôi rất vui.")
      ]),
      dialogueBlock("Tình huống 4", "Nói khó hay dễ.", [
        study("A: 你觉得难吗？", "A: Nǐ juéde nán ma?", "A: Bạn thấy có khó không?"),
        study("B: 一开始有一点儿难。", "B: Yì kāishǐ yǒu yìdiǎnr nán.", "B: Lúc đầu hơi khó một chút."),
        study("A: 多练习就好了。", "A: Duō liànxí jiù hǎo le.", "A: Luyện nhiều thì sẽ ổn thôi.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 想 + động từ", "想 đặt trước động từ để nói muốn làm gì. Đây là mẫu rất thường gặp trong chủ đề sở thích và kế hoạch.", study("我想学太极拳。", "Wǒ xiǎng xué tàijíquán.", "Tôi muốn học Thái Cực Quyền."), [
        study("我想喝茶。", "Wǒ xiǎng hē chá.", "Tôi muốn uống trà."),
        study("他想去中国。", "Tā xiǎng qù Zhōngguó.", "Anh ấy muốn đi Trung Quốc.")
      ]),
      grammarNote("2. 觉得 + tính từ/cụm nhận xét", "觉得 dùng để nêu cảm nhận hoặc ý kiến cá nhân về một việc.", study("我觉得很有意思。", "Wǒ juéde hěn yǒuyìsi.", "Tôi thấy rất thú vị."), [
        study("我觉得这本书不错。", "Wǒ juéde zhè běn shū búcuò.", "Tôi thấy quyển sách này khá hay."),
        study("她觉得汉语不太难。", "Tā juéde Hànyǔ bú tài nán.", "Cô ấy thấy tiếng Trung không quá khó.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 想", "2. 太极拳", "3. 觉得"], options: ["a. cảm thấy", "b. muốn", "c. Thái Cực Quyền"], answer: "1-b, 2-c, 3-a" }],
      [{ question: "Điền từ còn thiếu.", prompt: ["我___学太极拳。", "我___得很有意思。", "我们可以一___学。"], answer: "想 / 觉 / 起" }],
      [{ question: "Câu nào đúng?", options: ["A. 我想学太极拳。", "B. 我学想太极拳。", "C. 我太极拳想学。"], answer: "A. 我想学太极拳。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 你最近想学什么？", "B: ____________", "A: 我也想试试。"], answer: "B: 我想学太极拳。" }],
      "Tự kiểm tra: bạn có thể nói mình muốn học gì và cảm thấy môn đó thế nào không?"
    ),
    quickSummary: {
      words: ["想", "学", "太极拳", "觉得", "有意思", "一起"],
      patterns: ["我想学太极拳。", "我觉得很有意思。", "我们可以一起学。"],
      reminder: "Muốn nói mong muốn, dùng 想; muốn nói cảm nhận, dùng 觉得."
    }
  }),
  hsk2Lesson({
    number: 5,
    titleChinese: "下雨了，我没带伞。",
    titlePinyin: "Xiàyǔ le, wǒ méi dài sǎn.",
    vietnameseTitle: "Trời mưa rồi, tôi không mang ô.",
    objective: "Nói thời tiết thay đổi, mô tả việc vừa xảy ra và giải thích rằng mình quên mang theo đồ dùng cần thiết.",
    vocabulary: [
      vocab("下雨", "xiàyǔ", "mưa", "động từ", "Dùng để nói trời mưa.", "外边下雨了。", "Wàibian xiàyǔ le.", "Ngoài trời mưa rồi."),
      vocab("伞", "sǎn", "ô", "danh từ", "Vật dụng hay dùng khi trời mưa.", "我今天没带伞。", "Wǒ jīntiān méi dài sǎn.", "Hôm nay tôi không mang ô."),
      vocab("带", "dài", "mang theo", "động từ", "Dùng để nói mang đồ gì theo người.", "你带书了吗？", "Nǐ dài shū le ma?", "Bạn mang sách chưa?"),
      vocab("忘", "wàng", "quên", "động từ", "Dùng để nói quên làm gì hoặc quên mang gì.", "我忘了带伞。", "Wǒ wàng le dài sǎn.", "Tôi quên mang ô."),
      vocab("外边", "wàibian", "bên ngoài", "danh từ vị trí", "Nói về thời tiết hoặc sự việc bên ngoài.", "外边风很大。", "Wàibian fēng hěn dà.", "Bên ngoài gió rất to."),
      vocab("一起", "yìqǐ", "cùng nhau", "phó từ", "Hay dùng khi đề nghị đi chung.", "我们一起走吧。", "Wǒmen yìqǐ zǒu ba.", "Chúng ta cùng đi nhé.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Phát hiện trời mưa.", [
        study("A: 外边下雨了。", "A: Wàibian xiàyǔ le.", "A: Ngoài trời mưa rồi."),
        study("B: 是吗？我还没看。", "B: Shì ma? Wǒ hái méi kàn.", "B: Thế à? Tôi vẫn chưa nhìn thấy."),
        study("A: 你带伞了吗？", "A: Nǐ dài sǎn le ma?", "A: Bạn mang ô chưa?")
      ]),
      dialogueBlock("Tình huống 2", "Nói mình quên mang ô.", [
        study("A: 糟了，我没带伞。", "A: Zāo le, wǒ méi dài sǎn.", "A: Chết rồi, tôi không mang ô."),
        study("B: 你是忘了吗？", "B: Nǐ shì wàng le ma?", "B: Bạn quên rồi à?"),
        study("A: 对，我早上走得太快了。", "A: Duì, wǒ zǎoshang zǒu de tài kuài le.", "A: Đúng, sáng nay tôi đi vội quá.")
      ]),
      dialogueBlock("Tình huống 3", "Mời đi chung ô.", [
        study("A: 我带了，我们一起走吧。", "A: Wǒ dài le, wǒmen yìqǐ zǒu ba.", "A: Tôi có mang, chúng ta cùng đi nhé."),
        study("B: 那太好了，谢谢你。", "B: Nà tài hǎo le, xièxie nǐ.", "B: Thế thì tốt quá, cảm ơn bạn."),
        study("A: 不客气。", "A: Bú kèqi.", "A: Không có gì.")
      ]),
      dialogueBlock("Tình huống 4", "Nhắc cho lần sau.", [
        study("A: 明天天气也不好。", "A: Míngtiān tiānqì yě bù hǎo.", "A: Ngày mai thời tiết cũng không đẹp."),
        study("B: 那我一定带伞。", "B: Nà wǒ yídìng dài sǎn.", "B: Vậy tôi nhất định sẽ mang ô."),
        study("A: 别再忘了。", "A: Bié zài wàng le.", "A: Đừng quên nữa nhé.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. ...了 để nói tình huống mới xảy ra", "Khi thời tiết hoặc hoàn cảnh vừa thay đổi, thêm 了 vào cuối câu để báo tình huống mới.", study("下雨了。", "Xiàyǔ le.", "Trời mưa rồi."), [
        study("天黑了。", "Tiān hēi le.", "Trời tối rồi."),
        study("上课了。", "Shàngkè le.", "Vào học rồi.")
      ]),
      grammarNote("2. 没 + động từ", "没 dùng để phủ định hành động đã không xảy ra hoặc chưa làm. Trong bài này, rất hay gặp với 带.", study("我没带伞。", "Wǒ méi dài sǎn.", "Tôi không mang ô."), [
        study("我没买。", "Wǒ méi mǎi.", "Tôi không mua."),
        study("他没来。", "Tā méi lái.", "Anh ấy không đến.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 下雨", "2. 伞", "3. 忘"], options: ["a. quên", "b. ô", "c. mưa"], answer: "1-c, 2-b, 3-a" }],
      [{ question: "Điền từ còn thiếu.", prompt: ["外边下___了。", "我没带___。", "我___了带伞。"], answer: "雨 / 伞 / 忘" }],
      [{ question: "Câu nào đúng?", options: ["A. 我没带伞。", "B. 我带没伞。", "C. 我伞没带。"], answer: "A. 我没带伞。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 外边下雨了。你带伞了吗？", "B: ____________", "A: 那我们一起走吧。"], answer: "B: 我没带伞。" }],
      "Tự kiểm tra: bạn có thể nói về một tình huống bất ngờ và giải thích mình quên mang gì không?"
    ),
    quickSummary: {
      words: ["下雨", "伞", "带", "忘", "外边", "一起"],
      patterns: ["下雨了。", "我没带伞。", "我们一起走吧。"],
      reminder: "Muốn nói tình huống mới xảy ra, thêm 了; muốn nói không làm hoặc không mang, dùng 没."
    }
  }),
  hsk2Lesson({
    number: 6,
    titleChinese: "我坐地铁去。",
    titlePinyin: "Wǒ zuò dìtiě qù.",
    vietnameseTitle: "Tôi đi bằng tàu điện ngầm.",
    objective: "Nói phương tiện đi lại, cách đến một nơi và chọn phương án di chuyển phù hợp trong đời sống hằng ngày.",
    vocabulary: [
      vocab("坐", "zuò", "đi bằng; ngồi", "động từ", "Trong giao thông, 坐 dùng với phương tiện.", "我坐地铁去公司。", "Wǒ zuò dìtiě qù gōngsī.", "Tôi đi công ty bằng tàu điện ngầm."),
      vocab("地铁", "dìtiě", "tàu điện ngầm", "danh từ", "Phương tiện công cộng phổ biến.", "北京的地铁很方便。", "Běijīng de dìtiě hěn fāngbiàn.", "Tàu điện ngầm ở Bắc Kinh rất tiện."),
      vocab("公共汽车", "gōnggòng qìchē", "xe buýt", "danh từ", "Phương tiện công cộng cơ bản trong HSK 2.", "我有时候坐公共汽车。", "Wǒ yǒu shíhou zuò gōnggòng qìchē.", "Có lúc tôi đi xe buýt."),
      vocab("站", "zhàn", "trạm; ga", "danh từ", "Dùng trong giao thông.", "地铁站在前边。", "Dìtiě zhàn zài qiánbian.", "Ga tàu điện ngầm ở phía trước."),
      vocab("换", "huàn", "đổi, chuyển", "động từ", "Dùng khi phải đổi xe, đổi tàu.", "你要在这儿换车。", "Nǐ yào zài zhèr huàn chē.", "Bạn phải đổi xe ở đây."),
      vocab("方便", "fāngbiàn", "tiện", "tính từ", "Dùng để nhận xét phương tiện hoặc cách đi.", "坐地铁很方便。", "Zuò dìtiě hěn fāngbiàn.", "Đi tàu điện ngầm rất tiện.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Hỏi cách đi.", [
        study("A: 你怎么去学校？", "A: Nǐ zěnme qù xuéxiào?", "A: Bạn đi đến trường bằng cách nào?"),
        study("B: 我坐地铁去。", "B: Wǒ zuò dìtiě qù.", "B: Tôi đi bằng tàu điện ngầm."),
        study("A: 快不快？", "A: Kuài bu kuài?", "A: Có nhanh không?")
      ]),
      dialogueBlock("Tình huống 2", "So sánh phương tiện.", [
        study("A: 你为什么不坐公共汽车？", "A: Nǐ wèishénme bù zuò gōnggòng qìchē?", "A: Sao bạn không đi xe buýt?"),
        study("B: 因为坐地铁更方便。", "B: Yīnwèi zuò dìtiě gèng fāngbiàn.", "B: Vì đi tàu điện ngầm tiện hơn."),
        study("A: 我明白了。", "A: Wǒ míngbai le.", "A: Tôi hiểu rồi.")
      ]),
      dialogueBlock("Tình huống 3", "Hỏi đường đến ga.", [
        study("A: 请问，地铁站在哪儿？", "A: Qǐngwèn, dìtiě zhàn zài nǎr?", "A: Xin hỏi, ga tàu điện ngầm ở đâu?"),
        study("B: 在前边，你走五分钟就到了。", "B: Zài qiánbian, nǐ zǒu wǔ fēnzhōng jiù dào le.", "B: Ở phía trước, bạn đi bộ 5 phút là tới."),
        study("A: 谢谢。", "A: Xièxie.", "A: Cảm ơn.")
      ]),
      dialogueBlock("Tình huống 4", "Nói phải đổi xe.", [
        study("A: 你直接去吗？", "A: Nǐ zhíjiē qù ma?", "A: Bạn đi thẳng đến luôn à?"),
        study("B: 不是，我要在那儿换车。", "B: Bú shì, wǒ yào zài nàr huàn chē.", "B: Không, tôi phải đổi xe ở đó."),
        study("A: 那你路上小心。", "A: Nà nǐ lùshang xiǎoxīn.", "A: Vậy bạn đi đường cẩn thận nhé.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 坐 + phương tiện + 去", "Muốn nói đi đâu bằng phương tiện gì, dùng 坐 trước tên phương tiện và 去 trước nơi đến.", study("我坐地铁去学校。", "Wǒ zuò dìtiě qù xuéxiào.", "Tôi đi đến trường bằng tàu điện ngầm."), [
        study("他坐公共汽车去公司。", "Tā zuò gōnggòng qìchē qù gōngsī.", "Anh ấy đi công ty bằng xe buýt."),
        study("我们坐车去。", "Wǒmen zuò chē qù.", "Chúng tôi đi bằng xe.")
      ]),
      grammarNote("2. 更 + tính từ", "更 dùng để nói 'hơn' trong so sánh đơn giản, thường gặp trong nhận xét tiện hơn, nhanh hơn, rẻ hơn.", study("坐地铁更方便。", "Zuò dìtiě gèng fāngbiàn.", "Đi tàu điện ngầm tiện hơn."), [
        study("今天更冷。", "Jīntiān gèng lěng.", "Hôm nay lạnh hơn."),
        study("这个办法更好。", "Zhège bànfǎ gèng hǎo.", "Cách này tốt hơn.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 地铁", "2. 换", "3. 方便"], options: ["a. chuyển, đổi", "b. tiện", "c. tàu điện ngầm"], answer: "1-c, 2-a, 3-b" }],
      [{ question: "Điền từ còn thiếu.", prompt: ["我坐地___去。", "你要在这儿___车。", "坐地铁很方___。"], answer: "铁 / 换 / 便" }],
      [{ question: "Câu nào đúng?", options: ["A. 我去坐地铁。", "B. 我坐地铁去。", "C. 我地铁坐去。"], answer: "B. 我坐地铁去。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 你怎么去学校？", "B: ____________", "A: 好，那很方便。"], answer: "B: 我坐地铁去。" }],
      "Tự kiểm tra: bạn có thể nói mình đi học hoặc đi làm bằng phương tiện gì và có phải đổi xe không?"
    ),
    quickSummary: {
      words: ["坐", "地铁", "公共汽车", "站", "换", "方便"],
      patterns: ["我坐地铁去。", "地铁站在哪儿？", "坐地铁更方便。"],
      reminder: "Muốn nói phương tiện, đặt 坐 trước tên phương tiện rồi mới nói nơi đến."
    }
  }),
  hsk2Lesson({
    number: 7,
    titleChinese: "你的车是新的还是旧的？",
    titlePinyin: "Nǐ de chē shì xīn de háishi jiù de?",
    vietnameseTitle: "Xe của bạn là mới hay cũ?",
    objective: "Miêu tả đồ vật bằng tính từ cơ bản và hỏi lựa chọn giữa hai khả năng ở mức HSK 2.",
    vocabulary: [
      vocab("车", "chē", "xe", "danh từ", "Dùng để chỉ xe nói chung.", "这是我的车。", "Zhè shì wǒ de chē.", "Đây là xe của tôi."),
      vocab("新", "xīn", "mới", "tính từ", "Dùng để miêu tả đồ vật còn mới.", "这辆车很新。", "Zhè liàng chē hěn xīn.", "Chiếc xe này rất mới."),
      vocab("旧", "jiù", "cũ", "tính từ", "Trái nghĩa với 新.", "那辆车有点儿旧。", "Nà liàng chē yǒudiǎnr jiù.", "Chiếc xe kia hơi cũ."),
      vocab("颜色", "yánsè", "màu sắc", "danh từ", "Dùng để hỏi màu của đồ vật.", "这件衣服是什么颜色？", "Zhè jiàn yīfu shì shénme yánsè?", "Bộ quần áo này màu gì?"),
      vocab("黑", "hēi", "đen", "tính từ", "Màu cơ bản hay gặp.", "我的车是黑的。", "Wǒ de chē shì hēi de.", "Xe của tôi màu đen."),
      vocab("白", "bái", "trắng", "tính từ", "Màu cơ bản hay dùng.", "她喜欢白的。", "Tā xǐhuan bái de.", "Cô ấy thích màu trắng.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Hỏi xe mới hay cũ.", [
        study("A: 你的车是新的还是旧的？", "A: Nǐ de chē shì xīn de háishi jiù de?", "A: Xe của bạn là mới hay cũ?"),
        study("B: 是新的。", "B: Shì xīn de.", "B: Là xe mới."),
        study("A: 看起来很漂亮。", "A: Kànqilai hěn piàoliang.", "A: Trông rất đẹp.")
      ]),
      dialogueBlock("Tình huống 2", "Hỏi màu sắc.", [
        study("A: 你的车是什么颜色？", "A: Nǐ de chē shì shénme yánsè?", "A: Xe của bạn màu gì?"),
        study("B: 是黑的。", "B: Shì hēi de.", "B: Màu đen."),
        study("A: 我觉得黑的很好看。", "A: Wǒ juéde hēi de hěn hǎokàn.", "A: Tôi thấy màu đen rất đẹp.")
      ]),
      dialogueBlock("Tình huống 3", "Nói xe cũ nhưng dùng tốt.", [
        study("A: 那辆车是你的吧？", "A: Nà liàng chē shì nǐ de ba?", "A: Chiếc xe kia là của bạn nhỉ?"),
        study("B: 对，虽然有点儿旧，但是还很好。", "B: Duì, suīrán yǒudiǎnr jiù, dànshì hái hěn hǎo.", "B: Đúng, tuy hơi cũ nhưng vẫn rất tốt."),
        study("A: 那也不错。", "A: Nà yě búcuò.", "A: Vậy cũng tốt.")
      ]),
      dialogueBlock("Tình huống 4", "Hỏi chọn cái nào.", [
        study("A: 你喜欢黑的还是白的？", "A: Nǐ xǐhuan hēi de háishi bái de?", "A: Bạn thích màu đen hay màu trắng?"),
        study("B: 我喜欢白的。", "B: Wǒ xǐhuan bái de.", "B: Tôi thích màu trắng."),
        study("A: 我喜欢黑的。", "A: Wǒ xǐhuan hēi de.", "A: Tôi thích màu đen.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. A 还是 B trong câu hỏi lựa chọn", "还是 dùng trong câu hỏi khi người nói muốn người nghe chọn một trong hai phương án.", study("你的车是新的还是旧的？", "Nǐ de chē shì xīn de háishi jiù de?", "Xe của bạn là mới hay cũ?"), [
        study("你喝茶还是喝咖啡？", "Nǐ hē chá háishi hē kāfēi?", "Bạn uống trà hay cà phê?"),
        study("你喜欢黑的还是白的？", "Nǐ xǐhuan hēi de háishi bái de?", "Bạn thích màu đen hay màu trắng?")
      ]),
      grammarNote("2. Tính từ + 的 để chỉ loại đồ vật", "Khi đã biết đang nói về đồ vật nào, có thể dùng tính từ + 的 để nói ngắn gọn.", study("我的车是黑的。", "Wǒ de chē shì hēi de.", "Xe của tôi là màu đen."), [
        study("我喜欢新的。", "Wǒ xǐhuan xīn de.", "Tôi thích cái mới."),
        study("白的比较好看。", "Bái de bǐjiào hǎokàn.", "Màu trắng nhìn đẹp hơn.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 新", "2. 旧", "3. 颜色"], options: ["a. cũ", "b. màu sắc", "c. mới"], answer: "1-c, 2-a, 3-b" }],
      [{ question: "Điền từ còn thiếu.", prompt: ["你的车是新___还是旧___？", "这件衣服是什么颜___？", "我喜欢白___。"], answer: "的 / 的 / 色 / 的" }],
      [{ question: "Câu nào đúng?", options: ["A. 你喜欢黑的还是白的？", "B. 你喜欢还是黑的白的？", "C. 你黑的还是白的喜欢？"], answer: "A. 你喜欢黑的还是白的？" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 你的车是什么颜色？", "B: ____________", "A: 我觉得很好看。"], answer: "B: 是黑的。" }],
      "Tự kiểm tra: bạn có thể miêu tả một đồ vật quanh mình bằng 2 đến 3 tính từ đơn giản không?"
    ),
    quickSummary: {
      words: ["车", "新", "旧", "颜色", "黑", "白"],
      patterns: ["你的车是新的还是旧的？", "我的车是黑的。", "你喜欢黑的还是白的？"],
      reminder: "还是 dùng để hỏi lựa chọn; tính từ + 的 giúp nói ngắn gọn hơn."
    }
  }),
  hsk2Lesson({
    number: 8,
    titleChinese: "你们家离公司远吗？",
    titlePinyin: "Nǐmen jiā lí gōngsī yuǎn ma?",
    vietnameseTitle: "Nhà bạn cách công ty xa không?",
    objective: "Hỏi khoảng cách, nói gần xa giữa hai địa điểm và mô tả thời gian di chuyển hằng ngày.",
    vocabulary: [
      vocab("离", "lí", "cách", "giới từ/động từ", "Dùng để nói khoảng cách giữa hai nơi.", "我家离学校很近。", "Wǒ jiā lí xuéxiào hěn jìn.", "Nhà tôi gần trường."),
      vocab("公司", "gōngsī", "công ty", "danh từ", "Nơi làm việc.", "我爸爸在公司工作。", "Wǒ bàba zài gōngsī gōngzuò.", "Bố tôi làm việc ở công ty."),
      vocab("远", "yuǎn", "xa", "tính từ", "Dùng với 离 để hỏi khoảng cách.", "我家离这儿不远。", "Wǒ jiā lí zhèr bù yuǎn.", "Nhà tôi không xa chỗ này."),
      vocab("近", "jìn", "gần", "tính từ", "Trái nghĩa với 远.", "学校离我家很近。", "Xuéxiào lí wǒ jiā hěn jìn.", "Trường gần nhà tôi."),
      vocab("分钟", "fēnzhōng", "phút", "danh từ lượng", "Dùng để nói thời gian di chuyển.", "坐车要二十分钟。", "Zuò chē yào èrshí fēnzhōng.", "Đi xe mất 20 phút."),
      vocab("开车", "kāichē", "lái xe, đi xe", "động từ", "Dùng khi nói đi bằng xe riêng.", "我爸爸开车上班。", "Wǒ bàba kāichē shàngbān.", "Bố tôi lái xe đi làm.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Hỏi nhà xa hay gần.", [
        study("A: 你们家离公司远吗？", "A: Nǐmen jiā lí gōngsī yuǎn ma?", "A: Nhà bạn cách công ty xa không?"),
        study("B: 不太远。", "B: Bú tài yuǎn.", "B: Không quá xa."),
        study("A: 那就方便多了。", "A: Nà jiù fāngbiàn duō le.", "A: Vậy tiện hơn nhiều rồi.")
      ]),
      dialogueBlock("Tình huống 2", "Nói thời gian đi đường.", [
        study("A: 你上班要多长时间？", "A: Nǐ shàngbān yào duō cháng shíjiān?", "A: Bạn đi làm mất bao lâu?"),
        study("B: 开车大概要二十分钟。", "B: Kāichē dàgài yào èrshí fēnzhōng.", "B: Lái xe mất khoảng 20 phút."),
        study("A: 那不算长。", "A: Nà bú suàn cháng.", "A: Vậy không tính là lâu.")
      ]),
      dialogueBlock("Tình huống 3", "So sánh gần xa.", [
        study("A: 你们学校离你家近吗？", "A: Nǐmen xuéxiào lí nǐ jiā jìn ma?", "A: Trường bạn gần nhà không?"),
        study("B: 很近，走路就到。", "B: Hěn jìn, zǒulù jiù dào.", "B: Rất gần, đi bộ là đến."),
        study("A: 真好。", "A: Zhēn hǎo.", "A: Thật tốt.")
      ]),
      dialogueBlock("Tình huống 4", "Nói đường xa.", [
        study("A: 你怎么每天来这么早？", "A: Nǐ zěnme měitiān lái zhème zǎo?", "A: Sao ngày nào bạn cũng đến sớm thế?"),
        study("B: 因为我家离学校有点儿远。", "B: Yīnwèi wǒ jiā lí xuéxiào yǒudiǎnr yuǎn.", "B: Vì nhà tôi hơi xa trường."),
        study("A: 原来是这样。", "A: Yuánlái shì zhèyàng.", "A: Ra là vậy.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. A 离 B + 近/远", "Mẫu này dùng để nói khoảng cách giữa hai nơi. Trật tự rất quan trọng: nơi A + 离 + nơi B + gần/xa.", study("我家离公司不远。", "Wǒ jiā lí gōngsī bù yuǎn.", "Nhà tôi không xa công ty."), [
        study("学校离我家很近。", "Xuéxiào lí wǒ jiā hěn jìn.", "Trường rất gần nhà tôi."),
        study("地铁站离这儿远吗？", "Dìtiě zhàn lí zhèr yuǎn ma?", "Ga tàu điện ngầm cách đây xa không?")
      ]),
      grammarNote("2. 要 + thời lượng", "Muốn nói làm việc gì mất bao lâu, có thể dùng 要 + số lượng thời gian.", study("开车要二十分钟。", "Kāichē yào èrshí fēnzhōng.", "Lái xe mất 20 phút."), [
        study("走路要十分钟。", "Zǒulù yào shí fēnzhōng.", "Đi bộ mất 10 phút."),
        study("坐地铁要半个小时。", "Zuò dìtiě yào bàn ge xiǎoshí.", "Đi tàu điện ngầm mất nửa tiếng.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 离", "2. 远", "3. 分钟"], options: ["a. cách", "b. phút", "c. xa"], answer: "1-a, 2-c, 3-b" }],
      [{ question: "Điền từ còn thiếu.", prompt: ["我家___公司不远。", "开车要二十___钟。", "学校离我家很___。"], answer: "离 / 分 / 近" }],
      [{ question: "Câu nào đúng?", options: ["A. 我家离公司远吗？", "B. 我家远吗离公司？", "C. 离公司我家远吗？"], answer: "A. 我家离公司远吗？" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 你们家离公司远吗？", "B: ____________", "A: 那很方便。"], answer: "B: 不太远。" }],
      "Tự kiểm tra: bạn có thể nói nhà mình cách trường hay chỗ làm xa hay gần và mất bao lâu để đi không?"
    ),
    quickSummary: {
      words: ["离", "公司", "远", "近", "分钟", "开车"],
      patterns: ["你们家离公司远吗？", "我家离公司不远。", "开车要二十分钟。"],
      reminder: "Hãy nhớ trật tự cố định của mẫu A 离 B + 近/远."
    }
  }),
  hsk2Lesson({
    number: 9,
    titleChinese: "你今天晚上有空儿吗？",
    titlePinyin: "Nǐ jīntiān wǎnshang yǒu kòngr ma?",
    vietnameseTitle: "Tối nay bạn có rảnh không?",
    objective: "Hỏi thời gian rảnh, mời người khác đi đâu đó và trả lời lời hẹn bằng câu ngắn tự nhiên hơn.",
    vocabulary: [
      vocab("有空儿", "yǒu kòngr", "rảnh", "cụm động từ", "Dùng để hỏi ai có thời gian rảnh hay không.", "你明天有空儿吗？", "Nǐ míngtiān yǒu kòngr ma?", "Ngày mai bạn có rảnh không?"),
      vocab("晚上", "wǎnshang", "buổi tối", "danh từ thời gian", "Thời điểm hẹn gặp phổ biến.", "今天晚上我不忙。", "Jīntiān wǎnshang wǒ bù máng.", "Tối nay tôi không bận."),
      vocab("见面", "jiànmiàn", "gặp mặt", "động từ", "Dùng trong lời hẹn.", "我们明天见面吧。", "Wǒmen míngtiān jiànmiàn ba.", "Ngày mai chúng ta gặp nhau nhé."),
      vocab("电影", "diànyǐng", "phim", "danh từ", "Nội dung thường gặp khi hẹn đi chơi.", "我想看电影。", "Wǒ xiǎng kàn diànyǐng.", "Tôi muốn xem phim."),
      vocab("一起", "yìqǐ", "cùng nhau", "phó từ", "Dùng khi rủ đi cùng.", "我们一起去吧。", "Wǒmen yìqǐ qù ba.", "Chúng ta cùng đi nhé."),
      vocab("可以", "kěyǐ", "có thể, được", "động từ khuyết thiếu", "Dùng khi đồng ý hoặc hỏi khả năng.", "今天晚上可以。", "Jīntiān wǎnshang kěyǐ.", "Tối nay thì được.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Hỏi có rảnh không.", [
        study("A: 你今天晚上有空儿吗？", "A: Nǐ jīntiān wǎnshang yǒu kòngr ma?", "A: Tối nay bạn có rảnh không?"),
        study("B: 有，怎么了？", "B: Yǒu, zěnme le?", "B: Có, sao vậy?"),
        study("A: 我想请你吃饭。", "A: Wǒ xiǎng qǐng nǐ chīfàn.", "A: Tôi muốn mời bạn ăn cơm.")
      ]),
      dialogueBlock("Tình huống 2", "Rủ đi xem phim.", [
        study("A: 你想不想一起看电影？", "A: Nǐ xiǎng bu xiǎng yìqǐ kàn diànyǐng?", "A: Bạn có muốn cùng đi xem phim không?"),
        study("B: 好啊，我很想去。", "B: Hǎo a, wǒ hěn xiǎng qù.", "B: Được đấy, tôi rất muốn đi."),
        study("A: 那我们七点见。", "A: Nà wǒmen qī diǎn jiàn.", "A: Vậy 7 giờ gặp nhé.")
      ]),
      dialogueBlock("Tình huống 3", "Không rảnh và hẹn lại.", [
        study("A: 你今晚能出来吗？", "A: Nǐ jīnwǎn néng chūlái ma?", "A: Tối nay bạn có thể ra ngoài không?"),
        study("B: 不好意思，我今天晚上没空儿。", "B: Bù hǎoyìsi, wǒ jīntiān wǎnshang méi kòngr.", "B: Xin lỗi, tối nay tôi không rảnh."),
        study("A: 那我们明天再见面吧。", "A: Nà wǒmen míngtiān zài jiànmiàn ba.", "A: Vậy ngày mai chúng ta gặp nhé.")
      ]),
      dialogueBlock("Tình huống 4", "Chốt kế hoạch.", [
        study("A: 你几点方便？", "A: Nǐ jǐ diǎn fāngbiàn?", "A: Mấy giờ bạn tiện?"),
        study("B: 七点以后都可以。", "B: Qī diǎn yǐhòu dōu kěyǐ.", "B: Sau 7 giờ thì đều được."),
        study("A: 好，那我到时候给你打电话。", "A: Hǎo, nà wǒ dàoshíhou gěi nǐ dǎ diànhuà.", "A: Được, đến lúc đó tôi gọi cho bạn.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 有空儿 / 没空儿", "Đây là cách hỏi và trả lời rất thông dụng khi muốn hẹn gặp. Có thể dùng trong nói chuyện đời thường.", study("你今天晚上有空儿吗？", "Nǐ jīntiān wǎnshang yǒu kòngr ma?", "Tối nay bạn có rảnh không?"), [
        study("我明天没空儿。", "Wǒ míngtiān méi kòngr.", "Ngày mai tôi không rảnh."),
        study("周末我有空儿。", "Zhōumò wǒ yǒu kòngr.", "Cuối tuần tôi rảnh.")
      ]),
      grammarNote("2. 想不想 + động từ", "Mẫu này dùng để hỏi nhẹ nhàng xem người nghe có muốn làm gì không.", study("你想不想一起看电影？", "Nǐ xiǎng bu xiǎng yìqǐ kàn diànyǐng?", "Bạn có muốn cùng đi xem phim không?"), [
        study("你想不想喝点儿茶？", "Nǐ xiǎng bu xiǎng hē diǎnr chá?", "Bạn có muốn uống chút trà không?"),
        study("你想不想明天去？", "Nǐ xiǎng bu xiǎng míngtiān qù?", "Bạn có muốn ngày mai đi không?")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 有空儿", "2. 电影", "3. 见面"], options: ["a. rảnh", "b. gặp mặt", "c. phim"], answer: "1-a, 2-c, 3-b" }],
      [{ question: "Điền từ còn thiếu.", prompt: ["你今天晚___有空儿吗？", "我们一起看电___吧。", "明天再见___吧。"], answer: "上 / 影 / 面" }],
      [{ question: "Câu nào đúng?", options: ["A. 你今天晚上有空儿吗？", "B. 你有空儿今天晚上吗？", "C. 今天晚上你吗有空儿？"], answer: "A. 你今天晚上有空儿吗？" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 你今天晚上有空儿吗？", "B: ____________", "A: 那我们一起看电影吧。"], answer: "B: 有。" }],
      "Tự kiểm tra: bạn có thể rủ một người bạn đi ăn hoặc đi xem phim bằng tiếng Trung không?"
    ),
    quickSummary: {
      words: ["有空儿", "晚上", "见面", "电影", "一起", "可以"],
      patterns: ["你今天晚上有空儿吗？", "你想不想一起看电影？", "七点以后都可以。"],
      reminder: "Khi hẹn gặp, dùng 有空儿 để hỏi trước, rồi mới đề nghị hoạt động cụ thể."
    }
  }),
  hsk2Lesson({
    number: 10,
    titleChinese: "我能试试吗？",
    titlePinyin: "Wǒ néng shìshi ma?",
    vietnameseTitle: "Tôi có thể thử không?",
    objective: "Hỏi xin phép thử đồ hoặc dùng thử vật gì đó trong ngữ cảnh mua sắm thường ngày.",
    vocabulary: [
      vocab("能", "néng", "có thể", "động từ khuyết thiếu", "Dùng để hỏi khả năng hoặc xin phép.", "我能进去吗？", "Wǒ néng jìnqù ma?", "Tôi có thể vào không?"),
      vocab("试试", "shìshi", "thử", "động từ", "Lặp động từ để làm nhẹ câu.", "我想试试这件衣服。", "Wǒ xiǎng shìshi zhè jiàn yīfu.", "Tôi muốn thử bộ quần áo này."),
      vocab("件", "jiàn", "cái, chiếc (áo quần)", "lượng từ", "Dùng với áo, váy, đồ mặc.", "这件衣服很好看。", "Zhè jiàn yīfu hěn hǎokàn.", "Bộ quần áo này rất đẹp."),
      vocab("衣服", "yīfu", "quần áo", "danh từ", "Từ rất thường gặp trong mua sắm.", "我想买一件衣服。", "Wǒ xiǎng mǎi yí jiàn yīfu.", "Tôi muốn mua một bộ quần áo."),
      vocab("大小", "dàxiǎo", "kích cỡ", "danh từ", "Dùng khi hỏi đồ có vừa không.", "这件衣服大小正好。", "Zhè jiàn yīfu dàxiǎo zhènghǎo.", "Kích cỡ bộ quần áo này vừa đẹp."),
      vocab("合适", "héshì", "vừa, phù hợp", "tính từ", "Dùng khi thử đồ hoặc chọn đồ.", "这件很合适。", "Zhè jiàn hěn héshì.", "Bộ này rất vừa.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Hỏi xin thử đồ.", [
        study("A: 我能试试吗？", "A: Wǒ néng shìshi ma?", "A: Tôi có thể thử không?"),
        study("B: 当然可以。", "B: Dāngrán kěyǐ.", "B: Tất nhiên là được."),
        study("A: 谢谢。", "A: Xièxie.", "A: Cảm ơn.")
      ]),
      dialogueBlock("Tình huống 2", "Nói về kích cỡ.", [
        study("A: 这件衣服有点儿小。", "A: Zhè jiàn yīfu yǒudiǎnr xiǎo.", "A: Bộ quần áo này hơi nhỏ."),
        study("B: 那你试试大一点儿的。", "B: Nà nǐ shìshi dà yìdiǎnr de.", "B: Vậy bạn thử cỡ lớn hơn một chút đi."),
        study("A: 好，我看看。", "A: Hǎo, wǒ kànkan.", "A: Được, tôi xem thử.")
      ]),
      dialogueBlock("Tình huống 3", "Nói đồ vừa.", [
        study("A: 这件怎么样？", "A: Zhè jiàn zěnmeyàng?", "A: Bộ này thế nào?"),
        study("B: 我觉得很合适。", "B: Wǒ juéde hěn héshì.", "B: Tôi thấy rất vừa."),
        study("A: 颜色也不错。", "A: Yánsè yě búcuò.", "A: Màu sắc cũng đẹp.")
      ]),
      dialogueBlock("Tình huống 4", "Quyết định mua.", [
        study("A: 你要这件吗？", "A: Nǐ yào zhè jiàn ma?", "A: Bạn lấy bộ này chứ?"),
        study("B: 要，这件大小正好。", "B: Yào, zhè jiàn dàxiǎo zhènghǎo.", "B: Lấy, bộ này cỡ vừa đẹp."),
        study("A: 好，我给你拿。", "A: Hǎo, wǒ gěi nǐ ná.", "A: Được, tôi lấy cho bạn.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 能...吗？", "Mẫu này dùng để xin phép hoặc hỏi khả năng. Trong mua sắm, câu thường gặp là 我能试试吗？", study("我能试试吗？", "Wǒ néng shìshi ma?", "Tôi có thể thử không?"), [
        study("我能进去吗？", "Wǒ néng jìnqù ma?", "Tôi có thể vào không?"),
        study("我能看看吗？", "Wǒ néng kànkan ma?", "Tôi có thể xem không?")
      ]),
      grammarNote("2. Động từ lặp lại để làm nhẹ câu", "Lặp động từ như 试试, 看看 làm lời nói tự nhiên và nhẹ nhàng hơn.", study("你试试这件。", "Nǐ shìshi zhè jiàn.", "Bạn thử bộ này xem."), [
        study("你看看这个。", "Nǐ kànkan zhège.", "Bạn xem cái này thử."),
        study("我们想想吧。", "Wǒmen xiǎngxiang ba.", "Chúng ta nghĩ thử nhé.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 试试", "2. 件", "3. 合适"], options: ["a. thử", "b. chiếc/cái (đồ mặc)", "c. phù hợp, vừa"], answer: "1-a, 2-b, 3-c" }],
      [{ question: "Điền từ còn thiếu.", prompt: ["我___试试吗？", "这___衣服很好看。", "我觉得很合___。"], answer: "能 / 件 / 适" }],
      [{ question: "Câu nào đúng?", options: ["A. 我能试试吗？", "B. 我试试能吗？", "C. 能我试试吗？"], answer: "A. 我能试试吗？" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 我能试试吗？", "B: ____________", "A: 谢谢。"], answer: "B: 当然可以。" }],
      "Tự kiểm tra: bạn có thể dùng tiếng Trung để hỏi thử áo quần hoặc hỏi món đồ có vừa không?"
    ),
    quickSummary: {
      words: ["能", "试试", "件", "衣服", "大小", "合适"],
      patterns: ["我能试试吗？", "这件衣服有点儿小。", "这件大小正好。"],
      reminder: "Khi xin phép trong cửa hàng, dùng 能...吗？ sẽ tự nhiên và lịch sự."
    }
  }),
  hsk2Lesson({
    number: 11,
    titleChinese: "今天比昨天冷。",
    titlePinyin: "Jīntiān bǐ zuótiān lěng.",
    vietnameseTitle: "Hôm nay lạnh hơn hôm qua.",
    objective: "So sánh thời tiết và những đặc điểm đơn giản bằng cấu trúc 比 ở mức HSK 2.",
    vocabulary: [
      vocab("比", "bǐ", "hơn (so sánh)", "giới từ", "Từ chính trong câu so sánh.", "今天比昨天冷。", "Jīntiān bǐ zuótiān lěng.", "Hôm nay lạnh hơn hôm qua."),
      vocab("昨天", "zuótiān", "hôm qua", "danh từ thời gian", "Thường dùng làm mốc so sánh.", "昨天很热。", "Zuótiān hěn rè.", "Hôm qua rất nóng."),
      vocab("冷", "lěng", "lạnh", "tính từ", "Dùng để nói thời tiết.", "今天有点儿冷。", "Jīntiān yǒudiǎnr lěng.", "Hôm nay hơi lạnh."),
      vocab("热", "rè", "nóng", "tính từ", "Trái nghĩa với 冷.", "夏天很热。", "Xiàtiān hěn rè.", "Mùa hè rất nóng."),
      vocab("高", "gāo", "cao", "tính từ", "Cũng dùng trong so sánh người/vật.", "他比我高。", "Tā bǐ wǒ gāo.", "Anh ấy cao hơn tôi."),
      vocab("低", "dī", "thấp", "tính từ", "Trái nghĩa với 高.", "今天气温很低。", "Jīntiān qìwēn hěn dī.", "Nhiệt độ hôm nay rất thấp.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "So sánh thời tiết hai ngày.", [
        study("A: 今天比昨天冷。", "A: Jīntiān bǐ zuótiān lěng.", "A: Hôm nay lạnh hơn hôm qua."),
        study("B: 对，我早上都穿外套了。", "B: Duì, wǒ zǎoshang dōu chuān wàitào le.", "B: Đúng, sáng nay tôi còn mặc áo khoác rồi."),
        study("A: 明天可能更冷。", "A: Míngtiān kěnéng gèng lěng.", "A: Ngày mai có thể còn lạnh hơn.")
      ]),
      dialogueBlock("Tình huống 2", "So sánh hai nơi.", [
        study("A: 北京比这儿冷吗？", "A: Běijīng bǐ zhèr lěng ma?", "A: Bắc Kinh có lạnh hơn chỗ này không?"),
        study("B: 冬天的时候比这儿冷得多。", "B: Dōngtiān de shíhou bǐ zhèr lěng de duō.", "B: Vào mùa đông thì lạnh hơn đây nhiều."),
        study("A: 那我要多带点儿衣服。", "A: Nà wǒ yào duō dài diǎnr yīfu.", "A: Vậy tôi phải mang thêm ít quần áo.")
      ]),
      dialogueBlock("Tình huống 3", "So sánh người.", [
        study("A: 你弟弟高吗？", "A: Nǐ dìdi gāo ma?", "A: Em trai bạn có cao không?"),
        study("B: 他比我高一点儿。", "B: Tā bǐ wǒ gāo yìdiǎnr.", "B: Em ấy cao hơn tôi một chút."),
        study("A: 真看不出来。", "A: Zhēn kànbuchūlái.", "A: Thật không nhìn ra.")
      ]),
      dialogueBlock("Tình huống 4", "So sánh đơn giản khác.", [
        study("A: 这个房间比那个大。", "A: Zhège fángjiān bǐ nàge dà.", "A: Căn phòng này lớn hơn căn kia."),
        study("B: 对，但是那个更安静。", "B: Duì, dànshì nàge gèng ānjìng.", "B: Đúng, nhưng căn kia yên tĩnh hơn."),
        study("A: 那也不错。", "A: Nà yě búcuò.", "A: Vậy cũng tốt.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. A 比 B + tính từ", "Đây là mẫu so sánh cơ bản nhất ở HSK 2. Trật tự không được đảo.", study("今天比昨天冷。", "Jīntiān bǐ zuótiān lěng.", "Hôm nay lạnh hơn hôm qua."), [
        study("他比我高。", "Tā bǐ wǒ gāo.", "Anh ấy cao hơn tôi."),
        study("这个房间比那个大。", "Zhège fángjiān bǐ nàge dà.", "Phòng này lớn hơn phòng kia.")
      ]),
      grammarNote("2. 比... + tính từ + 一点儿 / 得多", "Muốn nói hơn một chút thì thêm 一点儿; muốn nói hơn nhiều thì thêm 得多.", study("他比我高一点儿。", "Tā bǐ wǒ gāo yìdiǎnr.", "Anh ấy cao hơn tôi một chút."), [
        study("冬天比春天冷得多。", "Dōngtiān bǐ chūntiān lěng de duō.", "Mùa đông lạnh hơn mùa xuân nhiều."),
        study("这条路比那条近一点儿。", "Zhè tiáo lù bǐ nà tiáo jìn yìdiǎnr.", "Con đường này gần hơn con kia một chút.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 比", "2. 冷", "3. 昨天"], options: ["a. hôm qua", "b. lạnh", "c. hơn (so sánh)"], answer: "1-c, 2-b, 3-a" }],
      [{ question: "Điền từ còn thiếu.", prompt: ["今天___昨天冷。", "他比我高一___儿。", "夏天比冬天___得多。"], answer: "比 / 点 / 热" }],
      [{ question: "Câu nào đúng?", options: ["A. 今天比昨天冷。", "B. 今天昨天比冷。", "C. 比今天昨天冷。"], answer: "A. 今天比昨天冷。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 北京比这儿冷吗？", "B: ____________", "A: 那我要多带点儿衣服。"], answer: "B: 冬天的时候比这儿冷得多。" }],
      "Tự kiểm tra: bạn có thể so sánh hôm nay với hôm qua hoặc so sánh hai người, hai đồ vật bằng 比 không?"
    ),
    quickSummary: {
      words: ["比", "昨天", "冷", "热", "高", "低"],
      patterns: ["今天比昨天冷。", "他比我高一点儿。", "冬天比春天冷得多。"],
      reminder: "Trong câu so sánh với 比, luôn đặt đối tượng được so với ở giữa A và B."
    }
  }),
  hsk2Lesson({
    number: 12,
    titleChinese: "把重要的东西放在我这儿吧。",
    titlePinyin: "Bǎ zhòngyào de dōngxi fàng zài wǒ zhèr ba.",
    vietnameseTitle: "Hãy để đồ quan trọng ở chỗ tôi đi.",
    objective: "Làm quen với mẫu 把 đơn giản trong ngữ cảnh đặt để đồ vật và nhờ người khác giữ hộ vật quan trọng.",
    vocabulary: [
      vocab("把", "bǎ", "hãy, đưa tân ngữ lên trước", "giới từ/giới ngữ", "Mẫu 把 đơn giản rất hay gặp trong HSK 2.", "把书放在桌子上。", "Bǎ shū fàng zài zhuōzi shàng.", "Hãy đặt sách lên bàn."),
      vocab("重要", "zhòngyào", "quan trọng", "tính từ", "Dùng để nói vật hoặc việc đáng chú ý.", "这是很重要的东西。", "Zhè shì hěn zhòngyào de dōngxi.", "Đây là đồ rất quan trọng."),
      vocab("东西", "dōngxi", "đồ vật", "danh từ", "Từ chỉ vật nói chung.", "你的东西都在这儿。", "Nǐ de dōngxi dōu zài zhèr.", "Đồ của bạn đều ở đây."),
      vocab("放", "fàng", "đặt, để", "động từ", "Dùng khi đặt một vật ở đâu.", "把杯子放这儿。", "Bǎ bēizi fàng zhèr.", "Hãy đặt cái cốc ở đây."),
      vocab("这儿", "zhèr", "ở đây", "danh từ vị trí", "Dùng trong khẩu ngữ miền Bắc và sách HSK.", "你坐这儿吧。", "Nǐ zuò zhèr ba.", "Bạn ngồi đây đi."),
      vocab("小心", "xiǎoxīn", "cẩn thận", "động từ/tính từ", "Dùng để nhắc chú ý đồ đạc.", "路上小心。", "Lùshang xiǎoxīn.", "Đi đường cẩn thận nhé.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Nhờ giữ đồ.", [
        study("A: 这个包很重要。", "A: Zhège bāo hěn zhòngyào.", "A: Cái túi này rất quan trọng."),
        study("B: 那你把它放在我这儿吧。", "B: Nà nǐ bǎ tā fàng zài wǒ zhèr ba.", "B: Vậy bạn để nó ở chỗ tôi đi."),
        study("A: 好，谢谢你。", "A: Hǎo, xièxie nǐ.", "A: Được, cảm ơn bạn.")
      ]),
      dialogueBlock("Tình huống 2", "Dặn để đồ đúng chỗ.", [
        study("A: 请把书放在桌子上。", "A: Qǐng bǎ shū fàng zài zhuōzi shàng.", "A: Xin hãy đặt sách lên bàn."),
        study("B: 放这儿可以吗？", "B: Fàng zhèr kěyǐ ma?", "B: Đặt ở đây được không?"),
        study("A: 可以。", "A: Kěyǐ.", "A: Được.")
      ]),
      dialogueBlock("Tình huống 3", "Nhắc vì đồ quan trọng.", [
        study("A: 别把手机放在外边。", "A: Bié bǎ shǒujī fàng zài wàibian.", "A: Đừng để điện thoại ở ngoài."),
        study("B: 为什么？", "B: Wèishénme?", "B: Tại sao?"),
        study("A: 因为那是很重要的东西。", "A: Yīnwèi nà shì hěn zhòngyào de dōngxi.", "A: Vì đó là đồ rất quan trọng.")
      ]),
      dialogueBlock("Tình huống 4", "Gửi đồ rồi đi.", [
        study("A: 我先走了，东西放你这儿。", "A: Wǒ xiān zǒu le, dōngxi fàng nǐ zhèr.", "A: Tôi đi trước nhé, đồ để ở chỗ bạn."),
        study("B: 好，你放心吧。", "B: Hǎo, nǐ fàngxīn ba.", "B: Được, bạn cứ yên tâm."),
        study("A: 回来以后我再拿。", "A: Huílai yǐhòu wǒ zài ná.", "A: Quay lại rồi tôi lấy sau.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 把 + tân ngữ + động từ + nơi chốn", "Mẫu 把 đơn giản dùng khi muốn nhấn mạnh xử lý một đồ vật như đặt, để, cầm, đưa.", study("把重要的东西放在我这儿吧。", "Bǎ zhòngyào de dōngxi fàng zài wǒ zhèr ba.", "Hãy để đồ quan trọng ở chỗ tôi đi."), [
        study("把书放在桌子上。", "Bǎ shū fàng zài zhuōzi shàng.", "Hãy đặt sách lên bàn."),
        study("把杯子拿过来。", "Bǎ bēizi ná guòlái.", "Hãy mang cái cốc lại đây.")
      ]),
      grammarNote("2. Động từ + 在 + nơi chốn", "Sau khi dùng 把, vị trí cuối cùng của đồ vật thường được nói bằng 在 + nơi chốn.", study("把包放在我这儿。", "Bǎ bāo fàng zài wǒ zhèr.", "Hãy để túi ở chỗ tôi."), [
        study("把手机放在包里。", "Bǎ shǒujī fàng zài bāo lǐ.", "Hãy để điện thoại vào trong túi."),
        study("把衣服放在椅子上。", "Bǎ yīfu fàng zài yǐzi shàng.", "Hãy đặt quần áo lên ghế.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 把", "2. 重要", "3. 放"], options: ["a. quan trọng", "b. đặt, để", "c. mẫu 把"], answer: "1-c, 2-a, 3-b" }],
      [{ question: "Điền từ còn thiếu.", prompt: ["___书放在桌子上。", "这是很重___的东西。", "把包放在我这___吧。"], answer: "把 / 要 / 儿" }],
      [{ question: "Câu nào đúng?", options: ["A. 把书放在桌子上。", "B. 放把书在桌子上。", "C. 书把放在桌子上。"], answer: "A. 把书放在桌子上。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 这个包很重要。", "B: ____________", "A: 好，谢谢你。"], answer: "B: 那你把它放在我这儿吧。" }],
      "Tự kiểm tra: bạn có thể nhờ ai đó giữ hộ một món đồ bằng mẫu 把 đơn giản không?"
    ),
    quickSummary: {
      words: ["把", "重要", "东西", "放", "这儿", "小心"],
      patterns: ["把重要的东西放在我这儿吧。", "把书放在桌子上。", "别把手机放在外边。"],
      reminder: "Mẫu 把 chỉ dùng tự nhiên khi hành động xử lý đồ vật rất rõ ràng."
    }
  }),
  hsk2Lesson({
    number: 13,
    titleChinese: "还没下班呢。",
    titlePinyin: "Hái méi xiàbān ne.",
    vietnameseTitle: "Vẫn chưa tan làm.",
    objective: "Nói về công việc đang dở, trạng thái chưa hoàn thành và giải thích vì sao chưa thể rời đi.",
    vocabulary: [
      vocab("还", "hái", "vẫn còn", "phó từ", "Dùng để nói trạng thái tiếp tục.", "我还在公司。", "Wǒ hái zài gōngsī.", "Tôi vẫn còn ở công ty."),
      vocab("下班", "xiàbān", "tan làm", "động từ", "Từ rất quan trọng trong chủ đề công việc.", "我六点下班。", "Wǒ liù diǎn xiàbān.", "Tôi tan làm lúc 6 giờ."),
      vocab("呢", "ne", "đấy, mà", "trợ từ", "Hay đặt cuối câu để nhấn trạng thái hiện tại.", "我还没下班呢。", "Wǒ hái méi xiàbān ne.", "Tôi vẫn chưa tan làm đâu."),
      vocab("工作", "gōngzuò", "công việc; làm việc", "danh từ/động từ", "Từ rất hay gặp trong HSK 2.", "我的工作很多。", "Wǒ de gōngzuò hěn duō.", "Công việc của tôi rất nhiều."),
      vocab("完成", "wánchéng", "hoàn thành", "động từ", "Dùng để nói làm xong việc.", "我还没完成。", "Wǒ hái méi wánchéng.", "Tôi vẫn chưa hoàn thành."),
      vocab("等", "děng", "đợi", "động từ", "Hay dùng trong lời hẹn.", "你等我一下。", "Nǐ děng wǒ yíxià.", "Bạn đợi tôi một lát.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Hỏi tan làm chưa.", [
        study("A: 你下班了吗？", "A: Nǐ xiàbān le ma?", "A: Bạn tan làm chưa?"),
        study("B: 还没下班呢。", "B: Hái méi xiàbān ne.", "B: Vẫn chưa tan làm đâu."),
        study("A: 那我等你一会儿。", "A: Nà wǒ děng nǐ yíhuìr.", "A: Vậy tôi đợi bạn một lát.")
      ]),
      dialogueBlock("Tình huống 2", "Giải thích vì sao chưa xong.", [
        study("A: 你怎么还在公司？", "A: Nǐ zěnme hái zài gōngsī?", "A: Sao bạn vẫn còn ở công ty?"),
        study("B: 因为我的工作还没完成。", "B: Yīnwèi wǒ de gōngzuò hái méi wánchéng.", "B: Vì công việc của tôi vẫn chưa hoàn thành."),
        study("A: 那你先忙吧。", "A: Nà nǐ xiān máng ba.", "A: Vậy bạn làm việc tiếp đi nhé.")
      ]),
      dialogueBlock("Tình huống 3", "Hẹn lại sau khi xong việc.", [
        study("A: 你什么时候能走？", "A: Nǐ shénme shíhou néng zǒu?", "A: Khi nào bạn có thể đi được?"),
        study("B: 再过半个小时吧。", "B: Zài guò bàn ge xiǎoshí ba.", "B: Chắc nửa tiếng nữa."),
        study("A: 好，我在楼下等你。", "A: Hǎo, wǒ zài lóuxià děng nǐ.", "A: Được, tôi đợi bạn ở dưới lầu.")
      ]),
      dialogueBlock("Tình huống 4", "Nói việc đang tiếp tục.", [
        study("A: 大家都走了吗？", "A: Dàjiā dōu zǒu le ma?", "A: Mọi người đi hết rồi à?"),
        study("B: 没有，我同事也还在工作呢。", "B: Méiyǒu, wǒ tóngshì yě hái zài gōngzuò ne.", "B: Chưa, đồng nghiệp tôi cũng vẫn đang làm việc."),
        study("A: 你们真辛苦。", "A: Nǐmen zhēn xīnkǔ.", "A: Các bạn vất vả thật.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 还没 + động từ + 呢", "Mẫu này diễn tả một việc vẫn chưa hoàn thành tại thời điểm đang nói.", study("我还没下班呢。", "Wǒ hái méi xiàbān ne.", "Tôi vẫn chưa tan làm đâu."), [
        study("我还没吃饭呢。", "Wǒ hái méi chīfàn ne.", "Tôi vẫn chưa ăn cơm đâu."),
        study("他还没回来呢。", "Tā hái méi huílai ne.", "Anh ấy vẫn chưa về đâu.")
      ]),
      grammarNote("2. 还在 + động từ", "Muốn nhấn mạnh hành động vẫn đang tiếp diễn, dùng 还在 + động từ.", study("我还在工作。", "Wǒ hái zài gōngzuò.", "Tôi vẫn còn đang làm việc."), [
        study("她还在看书。", "Tā hái zài kàn shū.", "Cô ấy vẫn còn đang đọc sách."),
        study("我们还在等你。", "Wǒmen hái zài děng nǐ.", "Chúng tôi vẫn đang đợi bạn.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 下班", "2. 完成", "3. 等"], options: ["a. đợi", "b. tan làm", "c. hoàn thành"], answer: "1-b, 2-c, 3-a" }],
      [{ question: "Điền từ còn thiếu.", prompt: ["我还没下___呢。", "工作还没完___。", "你___我一下。"], answer: "班 / 成 / 等" }],
      [{ question: "Câu nào đúng?", options: ["A. 我还没下班呢。", "B. 我没还下班呢。", "C. 还我没下班呢。"], answer: "A. 我还没下班呢。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 你下班了吗？", "B: ____________", "A: 那我等你一会儿。"], answer: "B: 还没下班呢。" }],
      "Tự kiểm tra: bạn có thể nói một việc mình vẫn chưa làm xong bằng mẫu 还没...呢 không?"
    ),
    quickSummary: {
      words: ["还", "下班", "呢", "工作", "完成", "等"],
      patterns: ["还没下班呢。", "我的工作还没完成。", "我还在公司。"],
      reminder: "Muốn nhấn trạng thái 'vẫn chưa', dùng 还没...呢."
    }
  }),
  hsk2Lesson({
    number: 14,
    titleChinese: "他把我的手机号码记错了。",
    titlePinyin: "Tā bǎ wǒ de shǒujī hàomǎ jì cuò le.",
    vietnameseTitle: "Anh ấy đã ghi nhầm số điện thoại của tôi.",
    objective: "Nói về số điện thoại, việc ghi nhớ sai và kết quả sai của một hành động bằng mẫu kết quả đơn giản.",
    vocabulary: [
      vocab("手机", "shǒujī", "điện thoại di động", "danh từ", "Vật dụng liên lạc phổ biến.", "这是我的手机。", "Zhè shì wǒ de shǒujī.", "Đây là điện thoại của tôi."),
      vocab("号码", "hàomǎ", "số", "danh từ", "Dùng với điện thoại, phòng, xe.", "你的手机号码是多少？", "Nǐ de shǒujī hàomǎ shì duōshao?", "Số điện thoại của bạn là bao nhiêu?"),
      vocab("记", "jì", "ghi nhớ", "động từ", "Dùng khi nhớ hoặc ghi chép thông tin.", "我记住了。", "Wǒ jìzhù le.", "Tôi nhớ rồi."),
      vocab("错", "cuò", "sai", "tính từ/kết quả bổ ngữ", "Hay đứng sau động từ như 记错, 写错.", "你记错了。", "Nǐ jì cuò le.", "Bạn nhớ sai rồi."),
      vocab("再", "zài", "lại, một lần nữa", "phó từ", "Dùng khi nhờ lặp lại.", "请你再说一遍。", "Qǐng nǐ zài shuō yí biàn.", "Xin bạn nói lại một lần nữa."),
      vocab("一遍", "yí biàn", "một lần", "lượng từ động tác", "Dùng khi yêu cầu lặp lại.", "你再说一遍。", "Nǐ zài shuō yí biàn.", "Bạn nói lại một lần nữa.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Đọc số điện thoại.", [
        study("A: 你的手机号码是多少？", "A: Nǐ de shǒujī hàomǎ shì duōshao?", "A: Số điện thoại của bạn là bao nhiêu?"),
        study("B: 是一三八……", "B: Shì yī sān bā...", "B: Là 138..."),
        study("A: 好，我记一下。", "A: Hǎo, wǒ jì yíxià.", "A: Được, tôi ghi lại một chút.")
      ]),
      dialogueBlock("Tình huống 2", "Phát hiện ghi sai.", [
        study("A: 你怎么没收到我的消息？", "A: Nǐ zěnme méi shōudào wǒ de xiāoxi?", "A: Sao bạn không nhận được tin nhắn của tôi?"),
        study("B: 可能是你把我的手机号码记错了。", "B: Kěnéng shì nǐ bǎ wǒ de shǒujī hàomǎ jì cuò le.", "B: Có thể là bạn đã ghi nhầm số điện thoại của tôi."),
        study("A: 啊，原来是这样。", "A: A, yuánlái shì zhèyàng.", "A: À, ra là vậy.")
      ]),
      dialogueBlock("Tình huống 3", "Nhờ đọc lại.", [
        study("A: 不好意思，你再说一遍吧。", "A: Bù hǎoyìsi, nǐ zài shuō yí biàn ba.", "A: Xin lỗi, bạn nói lại một lần nữa nhé."),
        study("B: 好，我慢一点儿说。", "B: Hǎo, wǒ màn yìdiǎnr shuō.", "B: Được, tôi sẽ nói chậm hơn một chút."),
        study("A: 这次我记清楚了。", "A: Zhè cì wǒ jì qīngchu le.", "A: Lần này tôi ghi rõ rồi.")
      ]),
      dialogueBlock("Tình huống 4", "Xác nhận lại thông tin.", [
        study("A: 你的是一三八……对吗？", "A: Nǐ de shì yī sān bā... duì ma?", "A: Của bạn là 138... đúng không?"),
        study("B: 对，这次没错。", "B: Duì, zhè cì méi cuò.", "B: Đúng, lần này không sai."),
        study("A: 太好了。", "A: Tài hǎo le.", "A: Tốt quá.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. Động từ + 错", "错 đứng sau động từ để nói hành động làm sai, ví dụ 记错, 写错, 说错.", study("他把我的手机号码记错了。", "Tā bǎ wǒ de shǒujī hàomǎ jì cuò le.", "Anh ấy đã ghi nhầm số điện thoại của tôi."), [
        study("我写错了一个字。", "Wǒ xiě cuò le yí ge zì.", "Tôi viết sai một chữ."),
        study("他昨天说错了。", "Tā zuótiān shuō cuò le.", "Hôm qua anh ấy nói sai.")
      ]),
      grammarNote("2. 再 + động từ + 一遍", "Muốn nhờ ai lặp lại một lần nữa, dùng 再 + động từ + 一遍.", study("你再说一遍吧。", "Nǐ zài shuō yí biàn ba.", "Bạn nói lại một lần nữa nhé."), [
        study("请你再写一遍。", "Qǐng nǐ zài xiě yí biàn.", "Xin bạn viết lại một lần nữa."),
        study("老师再读一遍。", "Lǎoshī zài dú yí biàn.", "Thầy/cô đọc lại một lần nữa.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 手机", "2. 号码", "3. 错"], options: ["a. số", "b. sai", "c. điện thoại di động"], answer: "1-c, 2-a, 3-b" }],
      [{ question: "Điền từ còn thiếu.", prompt: ["你的手机号___是多少？", "他把我的号码记___了。", "请你再说一___。"], answer: "码 / 错 / 遍" }],
      [{ question: "Câu nào đúng?", options: ["A. 你再说一遍吧。", "B. 你一遍再说吧。", "C. 再你说一遍吧。"], answer: "A. 你再说一遍吧。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 你怎么没收到我的消息？", "B: ____________", "A: 那你再说一遍吧。"], answer: "B: 可能是你把我的手机号码记错了。" }],
      "Tự kiểm tra: bạn có thể đọc số điện thoại, nhờ người khác lặp lại và nói ai đó đã ghi sai chưa?"
    ),
    quickSummary: {
      words: ["手机", "号码", "记", "错", "再", "一遍"],
      patterns: ["你的手机号码是多少？", "他把我的手机号码记错了。", "你再说一遍吧。"],
      reminder: "Muốn nói làm sai, thêm 错 sau động từ; muốn nhờ lặp lại, dùng 再...一遍."
    }
  }),
  hsk2Lesson({
    number: 15,
    titleChinese: "我们是坐飞机来的。",
    titlePinyin: "Wǒmen shì zuò fēijī lái de.",
    vietnameseTitle: "Chúng tôi đã đến đây bằng máy bay.",
    objective: "Nói cách mình đến một nơi, thời điểm đến hoặc nơi xuất phát bằng mẫu 是...来的 ở mức HSK 2.",
    vocabulary: [
      vocab("飞机", "fēijī", "máy bay", "danh từ", "Phương tiện đường hàng không.", "我们坐飞机来。", "Wǒmen zuò fēijī lái.", "Chúng tôi đến bằng máy bay."),
      vocab("火车", "huǒchē", "tàu hỏa", "danh từ", "Phương tiện giao thông phổ biến.", "他坐火车来的。", "Tā zuò huǒchē lái de.", "Anh ấy đến bằng tàu hỏa."),
      vocab("来", "lái", "đến", "động từ", "Dùng để nói hướng về nơi người nói đang ở.", "你怎么来的？", "Nǐ zěnme lái de?", "Bạn đến đây bằng cách nào?"),
      vocab("从", "cóng", "từ", "giới từ", "Dùng để nói nơi xuất phát.", "我们从河内来的。", "Wǒmen cóng Hénèi lái de.", "Chúng tôi đến từ Hà Nội."),
      vocab("机场", "jīchǎng", "sân bay", "danh từ", "Nơi đi/đến bằng máy bay.", "机场离这儿远吗？", "Jīchǎng lí zhèr yuǎn ma?", "Sân bay cách đây xa không?"),
      vocab("旅行", "lǚxíng", "du lịch, chuyến đi", "danh từ/động từ", "Chủ đề kết thúc HSK 2 rất phù hợp.", "这次旅行很开心。", "Zhè cì lǚxíng hěn kāixīn.", "Chuyến đi này rất vui.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Hỏi đi bằng gì.", [
        study("A: 你们是怎么来的？", "A: Nǐmen shì zěnme lái de?", "A: Các bạn đến đây bằng cách nào?"),
        study("B: 我们是坐飞机来的。", "B: Wǒmen shì zuò fēijī lái de.", "B: Chúng tôi đến bằng máy bay."),
        study("A: 路上顺利吗？", "A: Lùshang shùnlì ma?", "A: Trên đường có thuận lợi không?")
      ]),
      dialogueBlock("Tình huống 2", "Nói nơi xuất phát.", [
        study("A: 你们从哪儿来的？", "A: Nǐmen cóng nǎr lái de?", "A: Các bạn đến từ đâu?"),
        study("B: 我们从河内来的。", "B: Wǒmen cóng Hénèi lái de.", "B: Chúng tôi đến từ Hà Nội."),
        study("A: 欢迎你们。", "A: Huānyíng nǐmen.", "A: Chào mừng các bạn.")
      ]),
      dialogueBlock("Tình huống 3", "Nói thời điểm đến.", [
        study("A: 你们是什么时候来的？", "A: Nǐmen shì shénme shíhou lái de?", "A: Các bạn đến khi nào?"),
        study("B: 我们是昨天晚上来的。", "B: Wǒmen shì zuótiān wǎnshang lái de.", "B: Chúng tôi đến tối qua."),
        study("A: 那一定很累。", "A: Nà yídìng hěn lèi.", "A: Vậy chắc hẳn rất mệt.")
      ]),
      dialogueBlock("Tình huống 4", "So sánh phương tiện.", [
        study("A: 为什么不坐火车？", "A: Wèishénme bù zuò huǒchē?", "A: Sao không đi tàu hỏa?"),
        study("B: 因为坐飞机更快。", "B: Yīnwèi zuò fēijī gèng kuài.", "B: Vì đi máy bay nhanh hơn."),
        study("A: 原来是这样。", "A: Yuánlái shì zhèyàng.", "A: Ra là vậy.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 是...来的", "Mẫu này dùng để nhấn mạnh cách đến, thời gian đến hoặc nơi xuất phát.", study("我们是坐飞机来的。", "Wǒmen shì zuò fēijī lái de.", "Chúng tôi đến bằng máy bay."), [
        study("我是昨天来的。", "Wǒ shì zuótiān lái de.", "Tôi đến hôm qua."),
        study("他是从上海来的。", "Tā shì cóng Shànghǎi lái de.", "Anh ấy đến từ Thượng Hải.")
      ]),
      grammarNote("2. 从 + nơi chốn + 来", "Muốn nói đến từ đâu, dùng 从 trước địa điểm xuất phát.", study("我们从河内来的。", "Wǒmen cóng Hénèi lái de.", "Chúng tôi đến từ Hà Nội."), [
        study("她从北京来。", "Tā cóng Běijīng lái.", "Cô ấy đến từ Bắc Kinh."),
        study("你从哪儿来的？", "Nǐ cóng nǎr lái de?", "Bạn đến từ đâu?")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 飞机", "2. 火车", "3. 从"], options: ["a. tàu hỏa", "b. từ", "c. máy bay"], answer: "1-c, 2-a, 3-b" }],
      [{ question: "Điền từ còn thiếu.", prompt: ["我们是坐飞___来的。", "你们从哪___来的？", "他是昨___来的。"], answer: "机 / 儿 / 天" }],
      [{ question: "Câu nào đúng?", options: ["A. 我们是坐飞机来的。", "B. 我们坐是飞机来的。", "C. 我们是飞机坐来的。"], answer: "A. 我们是坐飞机来的。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 你们是怎么来的？", "B: ____________", "A: 路上顺利吗？"], answer: "B: 我们是坐飞机来的。" }],
      "Tự kiểm tra: bạn có thể nói mình đến từ đâu, đến khi nào và đi bằng phương tiện gì bằng mẫu 是...来的 không?"
    ),
    quickSummary: {
      words: ["飞机", "火车", "来", "从", "机场", "旅行"],
      patterns: ["我们是坐飞机来的。", "我们从河内来的。", "你们是什么时候来的？"],
      reminder: "Mẫu 是...来的 rất hữu ích để nhấn mạnh cách đến, thời gian đến hoặc nơi xuất phát."
    }
  })
];

hsk2Course.overview = "HSK 2 được khóa theo 15 bài của HSK Standard Course 2: du lịch, sinh hoạt hằng ngày, miêu tả đồ vật, công việc, mua sắm, ăn uống, khoảng cách, hẹn gặp, bài tập, so sánh, thời tiết, trạng thái, trải nghiệm và chủ đề năm mới.";
hsk2Course.lessons = hsk2ReferenceLessons;

const hsk2OfficialStructure = {
  1: {
    chinese: "九月去北京旅游最好",
    pinyin: "Jiǔ yuè qù Běijīng lǚyóu zuì hǎo",
    vietnamese: "Tháng chín đi du lịch Bắc Kinh là đẹp nhất.",
    objective: "Nói về thời điểm thích hợp để đi du lịch, hỏi mùa trong năm và diễn đạt mức độ bằng 最 ở mức HSK 2."
  },
  2: {
    chinese: "我每天六点起床",
    pinyin: "Wǒ měitiān liù diǎn qǐchuáng",
    vietnamese: "Mỗi ngày tôi dậy lúc 6 giờ.",
    objective: "Mô tả lịch sinh hoạt hằng ngày, nói giờ giấc cố định và kể chuỗi hoạt động trong ngày bằng câu ngắn tự nhiên."
  },
  3: {
    chinese: "左边那个红色的是我的",
    pinyin: "Zuǒbian nàge hóngsè de shì wǒ de",
    vietnamese: "Cái màu đỏ ở bên trái là của tôi.",
    objective: "Chỉ vị trí, màu sắc và xác định đồ vật thuộc về ai bằng 的 trong ngữ cảnh miêu tả đơn giản."
  },
  4: {
    chinese: "这个工作是他帮我介绍的",
    pinyin: "Zhège gōngzuò shì tā bāng wǒ jièshào de",
    vietnamese: "Công việc này là do anh ấy giới thiệu giúp tôi.",
    objective: "Giới thiệu công việc, nói ai giúp mình làm một việc và làm quen với cách nhấn mạnh thông tin bằng 是…的."
  },
  5: {
    chinese: "就买这件吧",
    pinyin: "Jiù mǎi zhè jiàn ba",
    vietnamese: "Vậy mua chiếc này đi.",
    objective: "Mua sắm cơ bản, so sánh lựa chọn đơn giản và đưa ra quyết định ngắn gọn trong cửa hàng."
  },
  6: {
    chinese: "你怎么不吃了",
    pinyin: "Nǐ zěnme bù chī le",
    vietnamese: "Sao bạn không ăn nữa?",
    objective: "Nói về ăn uống, phản ứng trước thay đổi trong hành động và dùng 了 trong ngữ cảnh giao tiếp hằng ngày."
  },
  7: {
    chinese: "你家离公司远吗",
    pinyin: "Nǐ jiā lí gōngsī yuǎn ma",
    vietnamese: "Nhà bạn cách công ty xa không?",
    objective: "Hỏi khoảng cách, mô tả nơi ở và nơi làm việc, dùng 离 để nói gần xa."
  },
  8: {
    chinese: "让我想想再告诉你",
    pinyin: "Ràng wǒ xiǎngxiang zài gàosu nǐ",
    vietnamese: "Để tôi nghĩ rồi nói cho bạn sau.",
    objective: "Câu giờ lịch sự, xin thêm thời gian suy nghĩ và nối hai hành động bằng 再."
  },
  9: {
    chinese: "题太多，我没做完",
    pinyin: "Tí tài duō, wǒ méi zuò wán",
    vietnamese: "Bài nhiều quá, tôi chưa làm xong.",
    objective: "Mô tả khối lượng công việc, nói chưa hoàn thành và dùng kết quả bổ ngữ đơn giản như 做完."
  },
  10: {
    chinese: "别找了，手机在桌子上呢",
    pinyin: "Bié zhǎo le, shǒujī zài zhuōzi shàng ne",
    vietnamese: "Đừng tìm nữa, điện thoại ở trên bàn đây.",
    objective: "Chỉ vị trí đồ vật, ngăn người khác tiếp tục làm việc gì đó và dùng 呢 để nhấn trạng thái hiện tại."
  },
  11: {
    chinese: "他比我大三岁",
    pinyin: "Tā bǐ wǒ dà sān suì",
    vietnamese: "Anh ấy lớn hơn tôi 3 tuổi.",
    objective: "So sánh người và sự vật bằng 比, nói chênh lệch cụ thể ở mức cơ bản."
  },
  12: {
    chinese: "你穿得太少了",
    pinyin: "Nǐ chuān de tài shǎo le",
    vietnamese: "Bạn mặc ít quá.",
    objective: "Nói về quần áo, thời tiết và mức độ quá nhiều hoặc quá ít bằng 太…了 trong tình huống đời thường."
  },
  13: {
    chinese: "门开着呢",
    pinyin: "Mén kāizhe ne",
    vietnamese: "Cửa đang mở đấy.",
    objective: "Mô tả trạng thái đang mở, đang đặt, đang treo bằng 着 trong ngữ cảnh quan sát trực tiếp."
  },
  14: {
    chinese: "你看过那个电影吗",
    pinyin: "Nǐ kànguo nàge diànyǐng ma",
    vietnamese: "Bạn đã xem bộ phim đó chưa?",
    objective: "Hỏi và trả lời về trải nghiệm đã từng có bằng 过, nói về phim ảnh và hoạt động giải trí."
  },
  15: {
    chinese: "新年就要到了",
    pinyin: "Xīnnián jiù yào dào le",
    vietnamese: "Năm mới sắp đến rồi.",
    objective: "Nói về sự việc sắp xảy ra, kế hoạch gần trong tương lai và không khí trước dịp lễ bằng 就要."
  }
};

hsk2Course.lessons.forEach((lesson) => {
  const official = hsk2OfficialStructure[lesson.number];
  if (!official) {
    return;
  }

  lesson.titleChinese = official.chinese;
  lesson.titlePinyin = official.pinyin;
  lesson.vietnameseTitle = official.vietnamese;
  lesson.title = `Bài ${lesson.number}: ${official.vietnamese}`;
  lesson.objective = official.objective;
});

const hsk2VocabularyExtras = {
  1: [
    vocab("课本", "kèběn", "sách giáo khoa", "danh từ", "Dùng trong ngữ cảnh đi học và chuẩn bị bài.", "我把课本放在书包里了。", "Wǒ bǎ kèběn fàng zài shūbāo lǐ le.", "Tôi đã để sách giáo khoa vào cặp rồi."),
    vocab("门口", "ménkǒu", "cửa ra vào", "danh từ vị trí", "Thường dùng khi hẹn gặp trong trường.", "我们在学校门口见。", "Wǒmen zài xuéxiào ménkǒu jiàn.", "Chúng ta gặp nhau ở cổng trường.")
  ],
  2: [
    vocab("锻炼", "duànliàn", "rèn luyện; tập thể dục", "động từ", "Dùng khi nói thói quen giữ sức khỏe.", "我每天早上都去锻炼。", "Wǒ měitiān zǎoshang dōu qù duànliàn.", "Sáng nào tôi cũng đi tập thể dục."),
    vocab("复习", "fùxí", "ôn tập", "động từ", "Dùng khi nói lịch học buổi tối.", "晚上我要复习今天的课。", "Wǎnshang wǒ yào fùxí jīntiān de kè.", "Buổi tối tôi phải ôn lại bài hôm nay.")
  ],
  3: [
    vocab("孩子", "háizi", "con; trẻ em", "danh từ", "Dùng khi nói chung về con cái.", "他们有两个孩子。", "Tāmen yǒu liǎng ge háizi.", "Họ có hai người con."),
    vocab("妻子", "qīzi", "vợ", "danh từ", "Từ gia đình thường gặp ở HSK 2.", "他和妻子都在医院工作。", "Tā hé qīzi dōu zài yīyuàn gōngzuò.", "Anh ấy và vợ đều làm ở bệnh viện.")
  ],
  4: [
    vocab("爱好", "àihào", "sở thích", "danh từ", "Dùng để nói điều mình thích làm.", "我的爱好是听音乐。", "Wǒ de àihào shì tīng yīnyuè.", "Sở thích của tôi là nghe nhạc."),
    vocab("参加", "cānjiā", "tham gia", "động từ", "Dùng trong lớp học, hoạt động, câu lạc bộ.", "我想参加学校的活动。", "Wǒ xiǎng cānjiā xuéxiào de huódòng.", "Tôi muốn tham gia hoạt động của trường.")
  ],
  5: [
    vocab("湿", "shī", "ướt", "tính từ", "Thường dùng khi trời mưa.", "衣服都湿了。", "Yīfu dōu shī le.", "Quần áo đều ướt cả rồi."),
    vocab("着急", "zháojí", "sốt ruột; lo", "tính từ/động từ", "Dùng khi gặp rắc rối bất ngờ.", "别着急，我有伞。", "Bié zháojí, wǒ yǒu sǎn.", "Đừng lo, tôi có ô.")
  ],
  6: [
    vocab("出口", "chūkǒu", "lối ra", "danh từ", "Hay gặp ở ga tàu, tàu điện ngầm.", "请问出口在哪儿？", "Qǐngwèn chūkǒu zài nǎr?", "Xin hỏi lối ra ở đâu?"),
    vocab("地铁站", "dìtiě zhàn", "ga tàu điện ngầm", "danh từ", "Dùng khi hỏi đường đi tàu điện ngầm.", "地铁站离这儿很近。", "Dìtiě zhàn lí zhèr hěn jìn.", "Ga tàu điện ngầm gần đây lắm.")
  ],
  7: [
    vocab("贵", "guì", "đắt", "tính từ", "Hay dùng khi so sánh đồ vật.", "这个有点儿贵。", "Zhège yǒudiǎnr guì.", "Cái này hơi đắt."),
    vocab("便宜", "piányi", "rẻ", "tính từ", "Từ trái nghĩa với 贵.", "那家店比较便宜。", "Nà jiā diàn bǐjiào piányi.", "Cửa hàng kia rẻ hơn.")
  ],
  8: [
    vocab("附近", "fùjìn", "gần đây; khu vực gần", "danh từ", "Dùng khi nói về nơi ở hay công ty.", "公司附近有一家饭店。", "Gōngsī fùjìn yǒu yì jiā fàndiàn.", "Gần công ty có một nhà hàng."),
    vocab("搬家", "bānjiā", "chuyển nhà", "động từ", "Liên quan đến nơi ở và khoảng cách mới.", "我们下个月要搬家。", "Wǒmen xià ge yuè yào bānjiā.", "Tháng sau chúng tôi sẽ chuyển nhà.")
  ],
  9: [
    vocab("约", "yuē", "hẹn", "động từ", "Dùng khi hẹn gặp bạn bè.", "我想约你周末见面。", "Wǒ xiǎng yuē nǐ zhōumò jiànmiàn.", "Tôi muốn hẹn bạn gặp cuối tuần."),
    vocab("方便", "fāngbiàn", "tiện", "tính từ", "Dùng để hỏi người khác có tiện không.", "你什么时候方便？", "Nǐ shénme shíhou fāngbiàn?", "Lúc nào bạn tiện?")
  ],
  10: [
    vocab("试衣间", "shìyījiān", "phòng thử đồ", "danh từ", "Rất hay dùng trong mua sắm quần áo.", "试衣间在那边。", "Shìyījiān zài nàbiān.", "Phòng thử đồ ở bên kia."),
    vocab("颜色", "yánsè", "màu sắc", "danh từ", "Dùng khi chọn đồ.", "这个颜色我很喜欢。", "Zhège yánsè wǒ hěn xǐhuan.", "Tôi rất thích màu này.")
  ],
  11: [
    vocab("温度", "wēndù", "nhiệt độ", "danh từ", "Dùng trong bài so sánh thời tiết.", "今天的温度比昨天低。", "Jīntiān de wēndù bǐ zuótiān dī.", "Nhiệt độ hôm nay thấp hơn hôm qua."),
    vocab("暖和", "nuǎnhuo", "ấm áp", "tính từ", "Từ đối lập mềm hơn với 冷.", "今天中午很暖和。", "Jīntiān zhōngwǔ hěn nuǎnhuo.", "Trưa nay rất ấm.")
  ],
  12: [
    vocab("空调", "kōngtiáo", "điều hòa", "danh từ", "Đồ điện thường gặp trong nhắc nhở.", "别忘了把空调关了。", "Bié wàng le bǎ kōngtiáo guān le.", "Đừng quên tắt điều hòa."),
    vocab("钥匙", "yàoshi", "chìa khóa", "danh từ", "Đồ vật hay được nhờ giữ hoặc đặt đúng chỗ.", "你的钥匙放在桌子上。", "Nǐ de yàoshi fàng zài zhuōzi shàng.", "Chìa khóa của bạn để trên bàn.")
  ],
  13: [
    vocab("同事", "tóngshì", "đồng nghiệp", "danh từ", "Liên quan đến môi trường công việc.", "我同事也还没下班。", "Wǒ tóngshì yě hái méi xiàbān.", "Đồng nghiệp tôi cũng vẫn chưa tan làm."),
    vocab("加班", "jiābān", "làm thêm giờ", "động từ", "Dùng khi chưa thể tan làm đúng giờ.", "今天晚上我要加班。", "Jīntiān wǎnshang wǒ yào jiābān.", "Tối nay tôi phải làm thêm giờ.")
  ],
  14: [
    vocab("联系", "liánxì", "liên lạc", "động từ", "Dùng khi gọi điện hoặc nhắn lại.", "你以后怎么联系我？", "Nǐ yǐhòu zěnme liánxì wǒ?", "Sau này bạn liên lạc với tôi thế nào?"),
    vocab("短信", "duǎnxìn", "tin nhắn", "danh từ", "Dùng cùng điện thoại và số điện thoại.", "我给你发短信了。", "Wǒ gěi nǐ fā duǎnxìn le.", "Tôi đã nhắn tin cho bạn rồi.")
  ],
  15: [
    vocab("行李", "xíngli", "hành lý", "danh từ", "Từ rất phù hợp với chủ đề đi lại.", "我们的行李很多。", "Wǒmen de xíngli hěn duō.", "Hành lý của chúng tôi rất nhiều."),
    vocab("护照", "hùzhào", "hộ chiếu", "danh từ", "Giấy tờ thường gặp khi đi máy bay.", "别忘了带护照。", "Bié wàng le dài hùzhào.", "Đừng quên mang hộ chiếu.")
  ]
};

hsk2Course.lessons.forEach((lesson) => {
  const extras = hsk2VocabularyExtras[lesson.number];
  if (extras) {
    lesson.vocabulary.push(...extras);
  }
});

const hsk2VocabularyMore = {
  1: [
    vocab("准时", "zhǔnshí", "đúng giờ", "tính từ/phó từ", "Dùng khi nói đến trường hay vào lớp đúng giờ.", "他每天都准时到学校。", "Tā měitiān dōu zhǔnshí dào xuéxiào.", "Ngày nào anh ấy cũng đến trường đúng giờ."),
    vocab("迟", "chí", "muộn", "tính từ", "Dùng trong nói giờ giấc, thường đi với 到.", "今天我来得有点儿迟。", "Jīntiān wǒ lái de yǒudiǎnr chí.", "Hôm nay tôi đến hơi muộn."),
    vocab("楼上", "lóushàng", "trên lầu", "danh từ vị trí", "Dùng để chỉ vị trí lớp học hay phòng.", "老师在楼上等我们。", "Lǎoshī zài lóushàng děng wǒmen.", "Thầy/cô đang đợi chúng tôi trên lầu."),
    vocab("楼下", "lóuxià", "dưới lầu", "danh từ vị trí", "Thường dùng khi hẹn gặp.", "我们在楼下见吧。", "Wǒmen zài lóuxià jiàn ba.", "Chúng ta gặp nhau dưới lầu nhé.")
  ],
  2: [
    vocab("洗澡", "xǐzǎo", "tắm", "động từ", "Một hoạt động sinh hoạt hằng ngày.", "我晚上回家以后先洗澡。", "Wǒ wǎnshang huí jiā yǐhòu xiān xǐzǎo.", "Tối về nhà tôi tắm trước."),
    vocab("出门", "chūmén", "ra khỏi nhà", "động từ", "Dùng khi kể lịch trình buổi sáng.", "我七点半出门。", "Wǒ qī diǎn bàn chūmén.", "Tôi ra khỏi nhà lúc 7 giờ rưỡi."),
    vocab("马上", "mǎshàng", "ngay lập tức", "phó từ", "Dùng khi nói việc xảy ra ngay sau đó.", "我吃完饭马上去上课。", "Wǒ chī wánfàn mǎshàng qù shàngkè.", "Ăn xong tôi đi học ngay."),
    vocab("习惯", "xíguàn", "thói quen; quen", "danh từ/động từ", "Dùng để nói nếp sinh hoạt.", "我已经习惯早睡早起了。", "Wǒ yǐjīng xíguàn zǎoshuì zǎoqǐ le.", "Tôi đã quen ngủ sớm dậy sớm rồi.")
  ],
  3: [
    vocab("丈夫", "zhàngfu", "chồng", "danh từ", "Từ gia đình hay gặp trong HSK 2.", "她丈夫在银行工作。", "Tā zhàngfu zài yínháng gōngzuò.", "Chồng cô ấy làm việc ở ngân hàng."),
    vocab("姐姐", "jiějie", "chị gái", "danh từ", "Từ chỉ người thân trong gia đình.", "我姐姐今年大学毕业。", "Wǒ jiějie jīnnián dàxué bìyè.", "Chị gái tôi năm nay tốt nghiệp đại học."),
    vocab("弟弟", "dìdi", "em trai", "danh từ", "Dùng khi giới thiệu anh chị em.", "我弟弟还在上中学。", "Wǒ dìdi hái zài shàng zhōngxué.", "Em trai tôi vẫn đang học trung học."),
    vocab("爷爷", "yéye", "ông nội/ông", "danh từ", "Từ gia đình cơ bản.", "我爷爷今年七十岁了。", "Wǒ yéye jīnnián qīshí suì le.", "Ông tôi năm nay 70 tuổi rồi.")
  ],
  4: [
    vocab("运动", "yùndòng", "vận động; thể thao", "danh từ/động từ", "Dùng khi nói hoạt động yêu thích.", "我喜欢运动，特别是游泳。", "Wǒ xǐhuan yùndòng, tèbié shì yóuyǒng.", "Tôi thích thể thao, đặc biệt là bơi."),
    vocab("练习", "liànxí", "luyện tập", "động từ/danh từ", "Dùng khi học một kỹ năng mới.", "你每天都要练习。", "Nǐ měitiān dōu yào liànxí.", "Ngày nào bạn cũng phải luyện tập."),
    vocab("老师", "lǎoshī", "thầy cô; giáo viên", "danh từ", "Dùng khi học kỹ năng với người hướng dẫn.", "我的太极拳老师很认真。", "Wǒ de tàijíquán lǎoshī hěn rènzhēn.", "Thầy dạy Thái Cực Quyền của tôi rất nghiêm túc."),
    vocab("开始", "kāishǐ", "bắt đầu", "động từ", "Dùng khi nói bắt đầu học một môn mới.", "我下个月开始学太极拳。", "Wǒ xià ge yuè kāishǐ xué tàijíquán.", "Tháng sau tôi bắt đầu học Thái Cực Quyền.")
  ],
  5: [
    vocab("天气预报", "tiānqì yùbào", "dự báo thời tiết", "danh từ", "Liên quan trực tiếp đến bài thời tiết.", "我每天都看天气预报。", "Wǒ měitiān dōu kàn tiānqì yùbào.", "Ngày nào tôi cũng xem dự báo thời tiết."),
    vocab("刮风", "guāfēng", "có gió", "động từ", "Dùng cùng mưa nắng để nói thời tiết.", "外边刮风了。", "Wàibian guāfēng le.", "Ngoài trời nổi gió rồi."),
    vocab("下雪", "xiàxuě", "có tuyết rơi", "động từ", "Một kiểu thời tiết cơ bản.", "北京冬天常常下雪。", "Běijīng dōngtiān chángcháng xiàxuě.", "Mùa đông Bắc Kinh thường có tuyết rơi."),
    vocab("晴", "qíng", "trời quang, nắng đẹp", "tính từ", "Dùng đối lập với mưa.", "明天可能是晴天。", "Míngtiān kěnéng shì qíngtiān.", "Ngày mai có thể trời sẽ nắng đẹp.")
  ],
  6: [
    vocab("出租车", "chūzūchē", "taxi", "danh từ", "Phương tiện đi lại thường gặp.", "来不及了，我们坐出租车吧。", "Lái bují le, wǒmen zuò chūzūchē ba.", "Không kịp rồi, chúng ta đi taxi nhé."),
    vocab("骑车", "qíchē", "đi xe đạp", "động từ", "Một cách đi lại phổ biến.", "天气好的时候我骑车去。", "Tiānqì hǎo de shíhou wǒ qíchē qù.", "Khi thời tiết đẹp tôi đi xe đạp."),
    vocab("到", "dào", "đến", "động từ", "Dùng để nói tới nơi.", "你几点到公司？", "Nǐ jǐ diǎn dào gōngsī?", "Bạn đến công ty lúc mấy giờ?"),
    vocab("路上", "lùshang", "trên đường", "danh từ vị trí", "Hay dùng khi kể việc di chuyển.", "我在路上给你打电话。", "Wǒ zài lùshang gěi nǐ dǎ diànhuà.", "Tôi gọi điện cho bạn khi đang trên đường.")
  ],
  7: [
    vocab("辆", "liàng", "chiếc (xe)", "lượng từ", "Dùng cho xe cộ.", "这辆车是我哥哥的。", "Zhè liàng chē shì wǒ gēge de.", "Chiếc xe này là của anh trai tôi."),
    vocab("漂亮", "piàoliang", "đẹp", "tính từ", "Dùng khi nhận xét xe hay đồ vật.", "这辆新车很漂亮。", "Zhè liàng xīn chē hěn piàoliang.", "Chiếc xe mới này rất đẹp."),
    vocab("干净", "gānjìng", "sạch", "tính từ", "Dùng trong nhận xét đồ vật.", "这辆车又新又干净。", "Zhè liàng chē yòu xīn yòu gānjìng.", "Chiếc xe này vừa mới vừa sạch."),
    vocab("贵一点儿", "guì yìdiǎnr", "đắt hơn một chút", "cụm tính từ", "Dùng trong so sánh đơn giản.", "这个颜色贵一点儿。", "Zhège yánsè guì yìdiǎnr.", "Màu này đắt hơn một chút.")
  ],
  8: [
    vocab("离开", "líkāi", "rời khỏi", "động từ", "Dùng khi nói rời nhà hay công ty.", "我七点离开家。", "Wǒ qī diǎn líkāi jiā.", "Tôi rời nhà lúc 7 giờ."),
    vocab("公里", "gōnglǐ", "kilômét", "danh từ lượng", "Dùng khi nói khoảng cách cụ thể.", "学校离我家五公里。", "Xuéxiào lí wǒ jiā wǔ gōnglǐ.", "Trường cách nhà tôi 5 km."),
    vocab("步行", "bùxíng", "đi bộ", "động từ/danh từ", "Một cách di chuyển phổ biến.", "从这儿步行十分钟就到了。", "Cóng zhèr bùxíng shí fēnzhōng jiù dào le.", "Từ đây đi bộ 10 phút là tới."),
    vocab("大概", "dàgài", "khoảng, đại khái", "phó từ", "Dùng khi ước lượng thời gian hoặc khoảng cách.", "开车大概要十五分钟。", "Kāichē dàgài yào shíwǔ fēnzhōng.", "Lái xe mất khoảng 15 phút.")
  ],
  9: [
    vocab("请", "qǐng", "mời", "động từ", "Dùng khi mời ai đi ăn hoặc gặp mặt.", "今天晚上我请你吃饭。", "Jīntiān wǎnshang wǒ qǐng nǐ chīfàn.", "Tối nay tôi mời bạn ăn cơm."),
    vocab("晚点儿", "wǎndiǎnr", "muộn hơn một chút", "phó từ", "Dùng khi đổi giờ hẹn.", "我们晚点儿见吧。", "Wǒmen wǎndiǎnr jiàn ba.", "Chúng ta gặp muộn hơn một chút nhé."),
    vocab("地方", "dìfang", "địa điểm; chỗ", "danh từ", "Dùng khi chọn nơi gặp.", "你想在哪个地方见面？", "Nǐ xiǎng zài nǎ ge dìfang jiànmiàn?", "Bạn muốn gặp ở đâu?"),
    vocab("门票", "ménpiào", "vé vào cửa", "danh từ", "Phù hợp với ngữ cảnh đi xem phim hoặc hoạt động.", "电影票和门票我都可以买。", "Diànyǐngpiào hé ménpiào wǒ dōu kěyǐ mǎi.", "Vé phim hay vé vào cửa tôi đều có thể mua.")
  ],
  10: [
    vocab("服务员", "fúwùyuán", "nhân viên phục vụ", "danh từ", "Từ thường gặp trong cửa hàng.", "服务员，这件衣服有大的吗？", "Fúwùyuán, zhè jiàn yīfu yǒu dà de ma?", "Nhân viên ơi, bộ này có cỡ lớn không?"),
    vocab("贵", "guì", "đắt", "tính từ", "Rất hay dùng trong mua sắm.", "这件有点儿贵。", "Zhè jiàn yǒudiǎnr guì.", "Bộ này hơi đắt."),
    vocab("便宜一点儿", "piányi yìdiǎnr", "rẻ hơn một chút", "cụm tính từ", "Dùng khi mặc cả nhẹ.", "有没有便宜一点儿的？", "Yǒu méiyǒu piányi yìdiǎnr de?", "Có loại rẻ hơn một chút không?"),
    vocab("喜欢", "xǐhuan", "thích", "động từ", "Dùng khi chọn đồ.", "我很喜欢这个颜色。", "Wǒ hěn xǐhuan zhège yánsè.", "Tôi rất thích màu này.")
  ],
  11: [
    vocab("季节", "jìjié", "mùa", "danh từ", "Dùng khi so sánh thời tiết theo mùa.", "我最喜欢春天这个季节。", "Wǒ zuì xǐhuan chūntiān zhège jìjié.", "Tôi thích mùa xuân nhất."),
    vocab("春天", "chūntiān", "mùa xuân", "danh từ thời gian", "Một mùa cơ bản trong HSK 2.", "春天比冬天暖和。", "Chūntiān bǐ dōngtiān nuǎnhuo.", "Mùa xuân ấm hơn mùa đông."),
    vocab("冬天", "dōngtiān", "mùa đông", "danh từ thời gian", "Dùng trong so sánh thời tiết.", "冬天这儿很冷。", "Dōngtiān zhèr hěn lěng.", "Mùa đông ở đây rất lạnh."),
    vocab("风", "fēng", "gió", "danh từ", "Dùng khi miêu tả thời tiết.", "今天风比昨天大。", "Jīntiān fēng bǐ zuótiān dà.", "Hôm nay gió lớn hơn hôm qua.")
  ],
  12: [
    vocab("关", "guān", "đóng, tắt", "động từ", "Thường dùng với điều hòa, cửa, đèn.", "请把门关上。", "Qǐng bǎ mén guān shàng.", "Xin hãy đóng cửa lại."),
    vocab("打开", "dǎkāi", "mở", "động từ", "Động từ đối lập với 关.", "你把窗户打开吧。", "Nǐ bǎ chuānghu dǎkāi ba.", "Bạn mở cửa sổ ra nhé."),
    vocab("窗户", "chuānghu", "cửa sổ", "danh từ", "Đồ vật thường gặp trong bài đặt để.", "窗户旁边有一张桌子。", "Chuānghu pángbiān yǒu yì zhāng zhuōzi.", "Bên cạnh cửa sổ có một cái bàn."),
    vocab("冰箱", "bīngxiāng", "tủ lạnh", "danh từ", "Dùng trong mẫu 把 khi đặt đồ ăn, đồ uống.", "请把水放进冰箱里。", "Qǐng bǎ shuǐ fàng jìn bīngxiāng lǐ.", "Hãy để nước vào trong tủ lạnh.")
  ],
  13: [
    vocab("经理", "jīnglǐ", "quản lý", "danh từ", "Liên quan đến ngữ cảnh công việc.", "经理还在办公室。", "Jīnglǐ hái zài bàngōngshì.", "Quản lý vẫn còn ở văn phòng."),
    vocab("办公室", "bàngōngshì", "văn phòng", "danh từ", "Nơi làm việc quen thuộc.", "我现在还在办公室。", "Wǒ xiànzài hái zài bàngōngshì.", "Hiện tại tôi vẫn còn ở văn phòng."),
    vocab("任务", "rènwu", "nhiệm vụ", "danh từ", "Dùng khi nói việc chưa làm xong.", "今天的任务还没完成。", "Jīntiān de rènwu hái méi wánchéng.", "Nhiệm vụ hôm nay vẫn chưa hoàn thành."),
    vocab("先走", "xiān zǒu", "đi trước", "cụm động từ", "Dùng khi người khác phải ở lại làm việc.", "你先走吧，我还要加班。", "Nǐ xiān zǒu ba, wǒ hái yào jiābān.", "Bạn đi trước đi, tôi còn phải tăng ca.")
  ],
  14: [
    vocab("号码本", "hàomǎběn", "sổ ghi số điện thoại", "danh từ", "Phù hợp với chủ đề ghi nhầm số.", "他的号码本放在桌子上。", "Tā de hàomǎběn fàng zài zhuōzi shàng.", "Sổ ghi số điện thoại của anh ấy để trên bàn."),
    vocab("写错", "xiě cuò", "viết sai", "động từ kết quả", "Cùng nhóm với 记错.", "我把一个字写错了。", "Wǒ bǎ yí ge zì xiě cuò le.", "Tôi viết sai một chữ."),
    vocab("清楚", "qīngchu", "rõ ràng", "tính từ", "Dùng khi xác nhận thông tin.", "请你说清楚一点儿。", "Qǐng nǐ shuō qīngchu yìdiǎnr.", "Xin bạn nói rõ hơn một chút."),
    vocab("确认", "quèrèn", "xác nhận", "động từ", "Dùng khi kiểm tra lại số điện thoại.", "我们再确认一遍吧。", "Wǒmen zài quèrèn yí biàn ba.", "Chúng ta xác nhận lại một lần nữa nhé.")
  ],
  15: [
    vocab("顺利", "shùnlì", "thuận lợi", "tính từ", "Dùng khi hỏi chuyến đi có ổn không.", "这次旅行很顺利。", "Zhè cì lǚxíng hěn shùnlì.", "Chuyến đi lần này rất thuận lợi."),
    vocab("登机", "dēngjī", "lên máy bay", "động từ", "Phù hợp với chủ đề đi máy bay.", "我们已经登机了。", "Wǒmen yǐjīng dēngjī le.", "Chúng tôi đã lên máy bay rồi."),
    vocab("航班", "hángbān", "chuyến bay", "danh từ", "Từ rất liên quan đến đi máy bay.", "我们的航班晚上八点起飞。", "Wǒmen de hángbān wǎnshang bā diǎn qǐfēi.", "Chuyến bay của chúng tôi cất cánh lúc 8 giờ tối."),
    vocab("起飞", "qǐfēi", "cất cánh", "động từ", "Dùng khi nói lịch máy bay.", "飞机已经起飞了。", "Fēijī yǐjīng qǐfēi le.", "Máy bay đã cất cánh rồi.")
  ]
};

hsk2Course.lessons.forEach((lesson) => {
  const extras = hsk2VocabularyMore[lesson.number];
  if (extras) {
    lesson.vocabulary.push(...extras);
  }
});

const hsk2VocabularyTextContext = {
  1: [
    vocab("上课", "shàngkè", "lên lớp; học", "động từ", "Dùng trực tiếp trong ngữ cảnh đến trường và vào lớp đúng giờ.", "我们九点四十开始上课。", "Wǒmen jiǔ diǎn sìshí kāishǐ shàngkè.", "Chúng tôi bắt đầu vào lớp lúc 9 giờ 40."),
    vocab("迟到", "chídào", "đi muộn", "động từ", "Dùng khi đến lớp hoặc đến chỗ hẹn quá giờ.", "今天路上很堵，我差点儿迟到。", "Jīntiān lùshang hěn dǔ, wǒ chàdiǎnr chídào.", "Hôm nay đường đông nên suýt nữa tôi đi muộn."),
    vocab("等", "děng", "đợi", "động từ", "Hay đi cùng việc hẹn gặp trước cửa lớp hay trước cổng trường.", "你先进去吧，我在门口等老师。", "Nǐ xiān jìnqù ba, wǒ zài ménkǒu děng lǎoshī.", "Bạn vào trước đi, tôi đợi thầy/cô ở cửa.")
  ],
  2: [
    vocab("洗脸", "xǐliǎn", "rửa mặt", "động từ", "Một hoạt động rất cơ bản trong lịch sinh hoạt buổi sáng.", "我起床以后先洗脸。", "Wǒ qǐchuáng yǐhòu xiān xǐliǎn.", "Tôi dậy xong thì rửa mặt trước."),
    vocab("早饭", "zǎofàn", "bữa sáng", "danh từ", "Dùng khi kể lại thói quen ăn uống mỗi ngày.", "我每天七点吃早饭。", "Wǒ měitiān qī diǎn chī zǎofàn.", "Mỗi ngày tôi ăn sáng lúc 7 giờ."),
    vocab("上午", "shàngwǔ", "buổi sáng", "danh từ thời gian", "Dùng để chia khung giờ trong ngày.", "上午我有两节汉语课。", "Shàngwǔ wǒ yǒu liǎng jié Hànyǔ kè.", "Buổi sáng tôi có hai tiết tiếng Trung.")
  ],
  3: [
    vocab("介绍", "jièshào", "giới thiệu", "động từ", "Dùng khi giới thiệu thành viên trong gia đình.", "我想给你介绍一下我的家人。", "Wǒ xiǎng gěi nǐ jièshào yíxià wǒ de jiārén.", "Tôi muốn giới thiệu sơ qua gia đình tôi với bạn."),
    vocab("家人", "jiārén", "người nhà", "danh từ", "Cách gọi chung các thành viên gia đình.", "周末我常常和家人一起吃饭。", "Zhōumò wǒ chángcháng hé jiārén yìqǐ chīfàn.", "Cuối tuần tôi thường ăn cơm cùng người nhà."),
    vocab("一家", "yìjiā", "cả nhà", "danh từ/cụm danh từ", "Dùng khi nói cả gia đình làm gì cùng nhau.", "过年的时候我们一家都回老家。", "Guònián de shíhou wǒmen yìjiā dōu huí lǎojiā.", "Đến Tết cả nhà tôi đều về quê.")
  ],
  4: [
    vocab("感兴趣", "gǎn xìngqù", "có hứng thú", "động từ/tính từ", "Dùng để nói mình thấy hứng thú với một môn học hay hoạt động.", "我对中国功夫很感兴趣。", "Wǒ duì Zhōngguó gōngfu hěn gǎn xìngqù.", "Tôi rất hứng thú với võ thuật Trung Quốc."),
    vocab("当然", "dāngrán", "đương nhiên", "phó từ", "Dùng để đáp lại tự nhiên trong hội thoại.", "你想一起去吗？当然可以。", "Nǐ xiǎng yìqǐ qù ma? Dāngrán kěyǐ.", "Bạn muốn đi cùng không? Đương nhiên là được."),
    vocab("容易", "róngyì", "dễ", "tính từ", "Dùng để nói mức độ khó dễ của việc học.", "太极拳看起来慢，可是不太容易。", "Tàijíquán kànqilai màn, kěshì bú tài róngyì.", "Thái Cực Quyền trông có vẻ chậm nhưng không quá dễ.")
  ],
  5: [
    vocab("忘记", "wàngjì", "quên", "động từ", "Rất hợp với ngữ cảnh quên mang ô khi trời mưa.", "我早上太忙，忘记带伞了。", "Wǒ zǎoshang tài máng, wàngjì dài sǎn le.", "Sáng nay tôi bận quá nên quên mang ô."),
    vocab("突然", "tūrán", "đột nhiên", "phó từ", "Dùng khi thời tiết thay đổi bất ngờ.", "下午突然下雨了。", "Xiàwǔ tūrán xiàyǔ le.", "Buổi chiều đột nhiên trời mưa."),
    vocab("淋湿", "línshī", "bị ướt mưa", "động từ", "Dùng khi người hay đồ vật bị mưa làm ướt.", "你快进来，别淋湿了。", "Nǐ kuài jìnlái, bié línshī le.", "Bạn vào nhanh đi, đừng để bị ướt mưa.")
  ],
  6: [
    vocab("拐", "guǎi", "rẽ", "động từ", "Dùng khi chỉ đường hay mô tả tuyến đường đi.", "你到前面再往左拐。", "Nǐ dào qiánmiàn zài wǎng zuǒ guǎi.", "Bạn đến phía trước rồi rẽ trái tiếp."),
    vocab("右边", "yòubian", "bên phải", "danh từ vị trí", "Dùng trong chỉ đường, đi lại.", "地铁站就在银行右边。", "Dìtiě zhàn jiù zài yínháng yòubian.", "Ga tàu điện ngầm ở ngay bên phải ngân hàng."),
    vocab("方便", "fāngbiàn", "tiện", "tính từ", "Dùng khi so sánh cách đi lại nào tiện hơn.", "坐地铁去比较方便。", "Zuò dìtiě qù bǐjiào fāngbiàn.", "Đi bằng tàu điện ngầm thì tiện hơn.")
  ],
  7: [
    vocab("一样", "yíyàng", "giống nhau", "tính từ", "Dùng khi so sánh hai món đồ hay hai chiếc xe.", "这两辆车的颜色不一样。", "Zhè liǎng liàng chē de yánsè bù yíyàng.", "Màu của hai chiếc xe này không giống nhau."),
    vocab("选择", "xuǎnzé", "lựa chọn", "động từ/danh từ", "Dùng khi phải chọn giữa mới và cũ, đắt và rẻ.", "买新的还是旧的，你自己选择吧。", "Mǎi xīn de háishi jiù de, nǐ zìjǐ xuǎnzé ba.", "Mua cái mới hay cái cũ, bạn tự chọn nhé."),
    vocab("合适", "héshì", "phù hợp", "tính từ", "Dùng khi đánh giá món đồ có phù hợp nhu cầu không.", "对我来说，这辆旧车更合适。", "Duì wǒ lái shuō, zhè liàng jiù chē gèng héshì.", "Đối với tôi, chiếc xe cũ này phù hợp hơn.")
  ],
  8: [
    vocab("上班", "shàngbān", "đi làm", "động từ", "Dùng khi nói khoảng cách từ nhà đến công ty.", "我每天八点出门去上班。", "Wǒ měitiān bā diǎn chūmén qù shàngbān.", "Mỗi ngày tôi ra khỏi nhà lúc 8 giờ để đi làm."),
    vocab("方便", "fāngbiàn", "thuận tiện", "tính từ", "Dùng khi đánh giá chỗ ở gần hay xa công ty.", "住在公司附近很方便。", "Zhù zài gōngsī fùjìn hěn fāngbiàn.", "Sống gần công ty rất thuận tiện."),
    vocab("搬到", "bāndào", "chuyển đến", "động từ", "Dùng khi nói chuyển nhà đến nơi ở mới.", "我们下个月搬到公司附近。", "Wǒmen xià ge yuè bāndào gōngsī fùjìn.", "Tháng sau chúng tôi chuyển đến gần công ty.")
  ],
  9: [
    vocab("邀请", "yāoqǐng", "mời", "động từ", "Dùng trong ngữ cảnh rủ bạn đi ăn hay đi chơi.", "我想邀请你周末一起去看电影。", "Wǒ xiǎng yāoqǐng nǐ zhōumò yìqǐ qù kàn diànyǐng.", "Tôi muốn mời bạn cuối tuần đi xem phim cùng."),
    vocab("见面", "jiànmiàn", "gặp mặt", "động từ", "Dùng khi hẹn thời gian và địa điểm gặp nhau.", "我们晚上七点见面吧。", "Wǒmen wǎnshang qī diǎn jiànmiàn ba.", "Chúng ta gặp nhau lúc 7 giờ tối nhé."),
    vocab("改天", "gǎitiān", "hôm khác", "danh từ thời gian", "Dùng khi cần đổi lịch hẹn.", "今天我没空，我们改天再约吧。", "Jīntiān wǒ méi kòng, wǒmen gǎitiān zài yuē ba.", "Hôm nay tôi không rảnh, chúng ta hẹn hôm khác nhé.")
  ],
  10: [
    vocab("裤子", "kùzi", "quần", "danh từ", "Từ mua sắm rất cơ bản, hợp với ngữ cảnh thử đồ.", "这条裤子我能试试吗？", "Zhè tiáo kùzi wǒ néng shìshi ma?", "Tôi có thể thử chiếc quần này không?"),
    vocab("裙子", "qúnzi", "váy", "danh từ", "Một loại quần áo hay xuất hiện trong bài mua sắm.", "她觉得这条裙子很好看。", "Tā juéde zhè tiáo qúnzi hěn hǎokàn.", "Cô ấy thấy chiếc váy này rất đẹp."),
    vocab("件", "jiàn", "cái/chiếc (áo quần)", "lượng từ", "Dùng với áo, váy, áo khoác trong mua sắm.", "这件衣服有别的颜色吗？", "Zhè jiàn yīfu yǒu bié de yánsè ma?", "Bộ quần áo này có màu khác không?")
  ],
  11: [
    vocab("阴", "yīn", "âm u", "tính từ", "Dùng để mô tả trời không nắng.", "今天外边有点儿阴。", "Jīntiān wàibian yǒudiǎnr yīn.", "Hôm nay ngoài trời hơi âm u."),
    vocab("凉快", "liángkuai", "mát", "tính từ", "Dùng để so sánh cảm giác thời tiết.", "晚上比中午凉快多了。", "Wǎnshang bǐ zhōngwǔ liángkuai duō le.", "Buổi tối mát hơn buổi trưa nhiều."),
    vocab("舒服", "shūfu", "dễ chịu", "tính từ", "Dùng để nói thời tiết phù hợp, thoải mái.", "春天的天气最舒服。", "Chūntiān de tiānqì zuì shūfu.", "Thời tiết mùa xuân dễ chịu nhất.")
  ],
  12: [
    vocab("记得", "jìde", "nhớ", "động từ", "Dùng trong lời nhắc nhớ cất hay tắt một vật gì đó.", "你记得把门关好。", "Nǐ jìde bǎ mén guān hǎo.", "Bạn nhớ đóng cửa cẩn thận nhé."),
    vocab("小心", "xiǎoxīn", "cẩn thận", "tính từ/phó từ", "Hay dùng trong lời nhắc nhẹ.", "这些东西很重要，你要小心一点儿。", "Zhèxiē dōngxi hěn zhòngyào, nǐ yào xiǎoxīn yìdiǎnr.", "Những đồ này rất quan trọng, bạn phải cẩn thận một chút."),
    vocab("保管", "bǎoguǎn", "giữ hộ; bảo quản", "động từ", "Dùng khi nhờ người khác giữ đồ quan trọng.", "你先帮我保管一下吧。", "Nǐ xiān bāng wǒ bǎoguǎn yíxià ba.", "Bạn giữ giúp tôi trước một chút nhé.")
  ],
  13: [
    vocab("开会", "kāihuì", "họp", "động từ", "Dùng khi giải thích vì sao chưa tan làm.", "经理还在开会，所以大家都没下班。", "Jīnglǐ hái zài kāihuì, suǒyǐ dàjiā dōu méi xiàbān.", "Quản lý vẫn đang họp nên mọi người đều chưa tan làm."),
    vocab("完成", "wánchéng", "hoàn thành", "động từ", "Dùng khi nói nhiệm vụ công việc đã xong hay chưa.", "这份工作今天必须完成。", "Zhè fèn gōngzuò jīntiān bìxū wánchéng.", "Công việc này hôm nay nhất định phải hoàn thành."),
    vocab("辛苦", "xīnkǔ", "vất vả", "tính từ", "Dùng để nhận xét lịch làm việc bận rộn.", "你最近天天加班，真辛苦。", "Nǐ zuìjìn tiāntiān jiābān, zhēn xīnkǔ.", "Gần đây ngày nào bạn cũng tăng ca, thật vất vả.")
  ],
  14: [
    vocab("号码", "hàomǎ", "số; số hiệu", "danh từ", "Dùng trực tiếp trong ngữ cảnh số điện thoại.", "请再说一遍你的手机号码。", "Qǐng zài shuō yí biàn nǐ de shǒujī hàomǎ.", "Xin hãy đọc lại số điện thoại của bạn một lần nữa."),
    vocab("重新", "chóngxīn", "lại; lại một lần nữa", "phó từ", "Dùng khi cần ghi lại hay nói lại thông tin.", "你再重新写一遍吧。", "Nǐ zài chóngxīn xiě yí biàn ba.", "Bạn viết lại thêm một lần nữa nhé."),
    vocab("拨错", "bōcuò", "bấm/gọi sai", "động từ kết quả", "Rất hợp với bài về số điện thoại và ghi nhầm.", "不好意思，我刚才拨错号码了。", "Bù hǎoyìsi, wǒ gāngcái bōcuò hàomǎ le.", "Xin lỗi, vừa nãy tôi bấm nhầm số rồi.")
  ],
  15: [
    vocab("机场", "jīchǎng", "sân bay", "danh từ", "Địa điểm chính trong chủ đề đi máy bay.", "我们下午三点到机场。", "Wǒmen xiàwǔ sān diǎn dào jīchǎng.", "Chúng tôi đến sân bay lúc 3 giờ chiều."),
    vocab("出发", "chūfā", "xuất phát", "động từ", "Dùng khi nói thời gian bắt đầu chuyến đi.", "我们明天早上六点出发。", "Wǒmen míngtiān zǎoshang liù diǎn chūfā.", "Sáng mai chúng tôi xuất phát lúc 6 giờ."),
    vocab("到达", "dàodá", "đến nơi", "động từ", "Dùng để nói kết quả của chuyến đi.", "飞机晚上九点到达北京。", "Fēijī wǎnshang jiǔ diǎn dàodá Běijīng.", "Máy bay đến Bắc Kinh lúc 9 giờ tối.")
  ]
};

hsk2Course.lessons.forEach((lesson) => {
  const extras = hsk2VocabularyTextContext[lesson.number];
  if (extras) {
    lesson.vocabulary.push(...extras);
  }
});

const hsk2VocabularyDeepExpansion = {
  1: [
    vocab("旅游", "lǚyóu", "du lịch", "động từ/danh từ", "Từ trung tâm của bài nói về đi Bắc Kinh vào thời điểm phù hợp.", "我想秋天去北京旅游。", "Wǒ xiǎng qiūtiān qù Běijīng lǚyóu.", "Tôi muốn mùa thu đi du lịch Bắc Kinh."),
    vocab("季节", "jìjié", "mùa", "danh từ", "Dùng để nói thời điểm đẹp nhất trong năm.", "北京的秋天是我最喜欢的季节。", "Běijīng de qiūtiān shì wǒ zuì xǐhuan de jìjié.", "Mùa thu ở Bắc Kinh là mùa tôi thích nhất."),
    vocab("秋天", "qiūtiān", "mùa thu", "danh từ thời gian", "Gắn trực tiếp với chủ đề bài 1 về du lịch Bắc Kinh.", "很多人觉得秋天去北京最好。", "Hěn duō rén juéde qiūtiān qù Běijīng zuì hǎo.", "Nhiều người thấy mùa thu đi Bắc Kinh là đẹp nhất.")
  ],
  2: [
    vocab("刷牙", "shuāyá", "đánh răng", "động từ", "Một hoạt động sinh hoạt rất cơ bản trong bài kể lịch ngày.", "我起床以后先刷牙。", "Wǒ qǐchuáng yǐhòu xiān shuāyá.", "Tôi dậy xong thì đánh răng trước."),
    vocab("中午", "zhōngwǔ", "buổi trưa", "danh từ thời gian", "Dùng để nối lịch sinh hoạt trong ngày.", "中午我在学校吃饭。", "Zhōngwǔ wǒ zài xuéxiào chīfàn.", "Buổi trưa tôi ăn ở trường."),
    vocab("晚上", "wǎnshang", "buổi tối", "danh từ thời gian", "Dùng để mô tả phần cuối ngày trong lịch sinh hoạt.", "晚上我常常复习生词。", "Wǎnshang wǒ chángcháng fùxí shēngcí.", "Buổi tối tôi thường ôn từ mới.")
  ],
  3: [
    vocab("左边", "zuǒbian", "bên trái", "danh từ vị trí", "Từ khóa trực tiếp của bài miêu tả đồ vật.", "左边那个书包是我的。", "Zuǒbian nàge shūbāo shì wǒ de.", "Cái cặp ở bên trái là của tôi."),
    vocab("红色", "hóngsè", "màu đỏ", "danh từ/tính từ", "Dùng để mô tả màu sắc của đồ vật.", "我喜欢红色的杯子。", "Wǒ xǐhuan hóngsè de bēizi.", "Tôi thích cái cốc màu đỏ."),
    vocab("颜色", "yánsè", "màu sắc", "danh từ", "Dùng khi hỏi và mô tả đồ vật cụ thể.", "这件衣服的颜色很好看。", "Zhè jiàn yīfu de yánsè hěn hǎokàn.", "Màu của bộ quần áo này rất đẹp.")
  ],
  4: [
    vocab("介绍", "jièshào", "giới thiệu", "động từ", "Động từ trung tâm của bài nói về công việc do ai giới thiệu.", "这个工作是朋友给我介绍的。", "Zhège gōngzuò shì péngyou gěi wǒ jièshào de.", "Công việc này là bạn tôi giới thiệu cho tôi."),
    vocab("工作", "gōngzuò", "công việc", "danh từ/động từ", "Từ khóa chính của bài 4.", "这个工作离我家比较近。", "Zhège gōngzuò lí wǒ jiā bǐjiào jìn.", "Công việc này cách nhà tôi khá gần."),
    vocab("帮", "bāng", "giúp", "động từ", "Dùng khi nói ai giúp mình làm việc gì.", "他常常帮我找资料。", "Tā chángcháng bāng wǒ zhǎo zīliào.", "Anh ấy thường giúp tôi tìm tài liệu.")
  ],
  5: [
    vocab("商店", "shāngdiàn", "cửa hàng", "danh từ", "Dùng trong ngữ cảnh mua sắm hằng ngày.", "这家商店的衣服不贵。", "Zhè jiā shāngdiàn de yīfu bú guì.", "Quần áo ở cửa hàng này không đắt."),
    vocab("决定", "juédìng", "quyết định", "động từ/danh từ", "Dùng khi chốt mua món đồ nào.", "我看了半天，终于决定买这件。", "Wǒ kàn le bàntiān, zhōngyú juédìng mǎi zhè jiàn.", "Tôi xem khá lâu, cuối cùng quyết định mua chiếc này."),
    vocab("合身", "héshēn", "vừa người", "tính từ", "Dùng khi đánh giá quần áo sau khi thử.", "这件衣服很合身。", "Zhè jiàn yīfu hěn héshēn.", "Bộ quần áo này rất vừa người.")
  ],
  6: [
    vocab("吃完", "chīwán", "ăn xong", "động từ kết quả", "Dùng để nhấn mạnh hành động ăn đã hoàn tất.", "我已经吃完了。", "Wǒ yǐjīng chīwán le.", "Tôi đã ăn xong rồi."),
    vocab("饿", "è", "đói", "tính từ", "Dùng khi nói lý do muốn ăn hoặc không ăn nữa.", "我现在不饿。", "Wǒ xiànzài bú è.", "Bây giờ tôi không đói."),
    vocab("菜", "cài", "món ăn", "danh từ", "Từ cơ bản trong hội thoại bàn ăn.", "今天的菜很好吃。", "Jīntiān de cài hěn hǎochī.", "Món ăn hôm nay rất ngon.")
  ],
  7: [
    vocab("远", "yuǎn", "xa", "tính từ", "Dùng trực tiếp trong bài hỏi khoảng cách.", "我家离学校不太远。", "Wǒ jiā lí xuéxiào bú tài yuǎn.", "Nhà tôi không xa trường lắm."),
    vocab("近", "jìn", "gần", "tính từ", "Dùng đối lập với 远.", "公司离地铁站很近。", "Gōngsī lí dìtiě zhàn hěn jìn.", "Công ty rất gần ga tàu điện ngầm."),
    vocab("公司", "gōngsī", "công ty", "danh từ", "Địa điểm chính trong bài 7.", "我爸爸在这家公司工作。", "Wǒ bàba zài zhè jiā gōngsī gōngzuò.", "Bố tôi làm việc ở công ty này.")
  ],
  8: [
    vocab("想想", "xiǎngxiang", "nghĩ một chút", "động từ lặp", "Dùng để nói mình cần thêm chút thời gian.", "这个问题让我先想想。", "Zhège wèntí ràng wǒ xiān xiǎngxiang.", "Vấn đề này để tôi nghĩ một chút trước."),
    vocab("告诉", "gàosu", "nói cho; báo cho", "động từ", "Dùng khi hứa sẽ nói lại sau.", "我晚上再告诉你结果。", "Wǒ wǎnshang zài gàosu nǐ jiéguǒ.", "Tối tôi sẽ báo kết quả cho bạn."),
    vocab("一会儿", "yíhuìr", "một lát", "danh từ thời gian", "Dùng để xin thêm ít thời gian trước khi trả lời.", "你等我一会儿。", "Nǐ děng wǒ yíhuìr.", "Bạn đợi tôi một lát nhé.")
  ],
  9: [
    vocab("题", "tí", "câu/bài", "danh từ", "Từ khóa chính của bài nói về bài tập nhiều.", "今天的题有点儿难。", "Jīntiān de tí yǒudiǎnr nán.", "Bài hôm nay hơi khó."),
    vocab("做完", "zuòwán", "làm xong", "động từ kết quả", "Dùng để nói đã hoàn thành bài chưa.", "我晚上一定把作业做完。", "Wǒ wǎnshang yídìng bǎ zuòyè zuòwán.", "Tối nay tôi nhất định sẽ làm xong bài tập."),
    vocab("简单", "jiǎndān", "đơn giản", "tính từ", "Dùng để nhận xét bài dễ hay khó.", "前面的题比较简单。", "Qiánmiàn de tí bǐjiào jiǎndān.", "Những câu phía trước khá đơn giản.")
  ],
  10: [
    vocab("桌子", "zhuōzi", "cái bàn", "danh từ", "Vị trí chính trong câu mẫu của bài.", "手机在桌子上。", "Shǒujī zài zhuōzi shàng.", "Điện thoại ở trên bàn."),
    vocab("上面", "shàngmian", "phía trên", "danh từ vị trí", "Dùng để xác định vị trí đồ vật.", "书在桌子上面。", "Shū zài zhuōzi shàngmian.", "Sách ở phía trên bàn."),
    vocab("下面", "xiàmian", "phía dưới", "danh từ vị trí", "Dùng cùng nhóm từ vị trí trong bài.", "椅子下面有一个包。", "Yǐzi xiàmian yǒu yí ge bāo.", "Phía dưới ghế có một cái túi.")
  ],
  11: [
    vocab("比", "bǐ", "so với", "giới từ/động từ", "Từ khóa ngữ pháp chính của bài so sánh.", "今天比昨天冷。", "Jīntiān bǐ zuótiān lěng.", "Hôm nay lạnh hơn hôm qua."),
    vocab("岁", "suì", "tuổi", "lượng từ", "Dùng khi nói tuổi tác và chênh lệch tuổi.", "我妹妹今年十八岁。", "Wǒ mèimei jīnnián shíbā suì.", "Em gái tôi năm nay 18 tuổi."),
    vocab("高", "gāo", "cao", "tính từ", "Dùng trong so sánh người và đồ vật.", "他比我高一点儿。", "Tā bǐ wǒ gāo yìdiǎnr.", "Anh ấy cao hơn tôi một chút.")
  ],
  12: [
    vocab("穿", "chuān", "mặc", "động từ", "Động từ trung tâm của bài 12.", "今天外边很冷，你多穿一点儿。", "Jīntiān wàibian hěn lěng, nǐ duō chuān yìdiǎnr.", "Hôm nay ngoài trời rất lạnh, bạn mặc thêm chút đi."),
    vocab("少", "shǎo", "ít", "tính từ", "Dùng để nói mặc ít quá, ăn ít quá.", "你今天穿得太少了。", "Nǐ jīntiān chuān de tài shǎo le.", "Hôm nay bạn mặc ít quá."),
    vocab("外套", "wàitào", "áo khoác", "danh từ", "Từ rất sát ngữ cảnh bài về quần áo và thời tiết.", "出门的时候别忘了穿外套。", "Chūmén de shíhou bié wàng le chuān wàitào.", "Khi ra ngoài đừng quên mặc áo khoác.")
  ],
  13: [
    vocab("开着", "kāizhe", "đang mở", "động từ trạng thái", "Từ trung tâm của bài trạng thái với 着.", "门开着呢。", "Mén kāizhe ne.", "Cửa đang mở đấy."),
    vocab("关着", "guānzhe", "đang đóng", "động từ trạng thái", "Dùng đối chiếu với 开着.", "窗户关着，房间里有点儿热。", "Chuānghu guānzhe, fángjiān li yǒudiǎnr rè.", "Cửa sổ đang đóng nên trong phòng hơi nóng."),
    vocab("挂着", "guàzhe", "đang treo", "động từ trạng thái", "Một mẫu rất điển hình với 着.", "墙上挂着一张地图。", "Qiáng shàng guàzhe yì zhāng dìtú.", "Trên tường đang treo một tấm bản đồ.")
  ],
  14: [
    vocab("看过", "kànguo", "đã từng xem", "động từ", "Dùng để hỏi trải nghiệm đã từng có.", "你看过这部电影吗？", "Nǐ kànguo zhè bù diànyǐng ma?", "Bạn đã xem bộ phim này chưa?"),
    vocab("电影", "diànyǐng", "phim", "danh từ", "Từ chủ đề chính của bài 14.", "这部电影很有意思。", "Zhè bù diànyǐng hěn yǒuyìsi.", "Bộ phim này rất thú vị."),
    vocab("次", "cì", "lần", "lượng từ", "Dùng để nói đã từng làm việc gì mấy lần.", "我看过两次。", "Wǒ kànguo liǎng cì.", "Tôi đã xem hai lần.")
  ],
  15: [
    vocab("新年", "xīnnián", "năm mới", "danh từ", "Từ khóa trung tâm của bài cuối HSK 2.", "新年快到了，大家都很高兴。", "Xīnnián kuài dào le, dàjiā dōu hěn gāoxìng.", "Năm mới sắp đến rồi, mọi người đều rất vui."),
    vocab("要", "yào", "sắp; sẽ", "động từ phụ trợ", "Dùng trong mẫu 就要 để nói việc sắp xảy ra.", "火车要开了。", "Huǒchē yào kāi le.", "Tàu sắp chạy rồi."),
    vocab("准备", "zhǔnbèi", "chuẩn bị", "động từ/danh từ", "Dùng khi nói chuẩn bị cho dịp năm mới.", "我们在准备新年的礼物。", "Wǒmen zài zhǔnbèi xīnnián de lǐwù.", "Chúng tôi đang chuẩn bị quà năm mới.")
  ]
};

hsk2Course.lessons.forEach((lesson) => {
  const extras = hsk2VocabularyDeepExpansion[lesson.number];
  if (extras) {
    lesson.vocabulary.push(...extras);
  }
});

const hsk2VocabularyFourTextsExpansion = {
  1: [
    vocab("北京", "Běijīng", "Bắc Kinh", "danh từ riêng", "Địa điểm trung tâm của bài.", "很多人第一次来中国就想去北京看看。", "Hěn duō rén dì yī cì lái Zhōngguó jiù xiǎng qù Běijīng kànkan.", "Nhiều người lần đầu đến Trung Quốc là muốn đi Bắc Kinh xem thử."),
    vocab("最好", "zuì hǎo", "tốt nhất", "phó từ/tính từ", "Dùng để nói lựa chọn tối ưu theo thời gian hoặc điều kiện.", "九月去那儿旅游最好。", "Jiǔ yuè qù nàr lǚyóu zuì hǎo.", "Tháng chín đi du lịch ở đó là tốt nhất."),
    vocab("天气", "tiānqì", "thời tiết", "danh từ", "Hay đi cùng chủ đề du lịch và mùa.", "去旅行以前最好先看看天气。", "Qù lǚxíng yǐqián zuì hǎo xiān kànkan tiānqì.", "Trước khi đi du lịch tốt nhất nên xem thời tiết trước."),
    vocab("风景", "fēngjǐng", "phong cảnh", "danh từ", "Dùng để nói lý do nên đi du lịch vào một mùa nào đó.", "秋天的时候，那里的风景特别好看。", "Qiūtiān de shíhou, nàlǐ de fēngjǐng tèbié hǎokàn.", "Vào mùa thu, phong cảnh ở đó đặc biệt đẹp.")
  ],
  2: [
    vocab("早饭", "zǎofàn", "bữa sáng", "danh từ", "Một phần quen thuộc của lịch sinh hoạt.", "我每天七点吃早饭。", "Wǒ měitiān qī diǎn chī zǎofàn.", "Mỗi ngày tôi ăn sáng lúc 7 giờ."),
    vocab("上班", "shàngbān", "đi làm", "động từ", "Dùng trong lịch hằng ngày của người đi làm.", "我爸爸八点去上班。", "Wǒ bàba bā diǎn qù shàngbān.", "Bố tôi đi làm lúc 8 giờ."),
    vocab("休息", "xiūxi", "nghỉ ngơi", "động từ", "Dùng để nói nhịp sinh hoạt hợp lý.", "吃完晚饭以后我休息一会儿。", "Chī wán wǎnfàn yǐhòu wǒ xiūxi yíhuìr.", "Ăn tối xong tôi nghỉ một lát."),
    vocab("规律", "guīlǜ", "có quy luật, nề nếp", "tính từ/danh từ", "Dùng để nhận xét sinh hoạt hằng ngày.", "他的生活很规律。", "Tā de shēnghuó hěn guīlǜ.", "Cuộc sống của anh ấy rất có nề nếp.")
  ],
  3: [
    vocab("右边", "yòubian", "bên phải", "danh từ vị trí", "Dùng cùng nhóm từ vị trí trong bài.", "右边那个黑色的包不是我的。", "Yòubian nàge hēisè de bāo bú shì wǒ de.", "Cái túi màu đen ở bên phải không phải của tôi."),
    vocab("黑色", "hēisè", "màu đen", "danh từ/tính từ", "Mở rộng nhóm màu sắc trong bài.", "我想买一件黑色的外套。", "Wǒ xiǎng mǎi yí jiàn hēisè de wàitào.", "Tôi muốn mua một chiếc áo khoác màu đen."),
    vocab("那个", "nàge", "cái đó, cái kia", "đại từ chỉ định", "Thường đi cùng vị trí và màu sắc.", "左边那个红色的是我的。", "Zuǒbian nàge hóngsè de shì wǒ de.", "Cái màu đỏ ở bên trái là của tôi."),
    vocab("一样", "yíyàng", "giống nhau", "tính từ", "Hay dùng khi so đồ vật.", "这两个杯子的颜色不一样。", "Zhè liǎng ge bēizi de yánsè bù yíyàng.", "Màu của hai cái cốc này không giống nhau.")
  ],
  4: [
    vocab("帮忙", "bāngmáng", "giúp đỡ", "động từ", "Dùng trong ngữ cảnh nhờ giới thiệu công việc.", "谢谢你帮忙介绍这个工作。", "Xièxie nǐ bāngmáng jièshào zhège gōngzuò.", "Cảm ơn bạn đã giúp giới thiệu công việc này."),
    vocab("面试", "miànshì", "phỏng vấn", "danh từ/động từ", "Phù hợp với chủ đề tìm việc.", "下星期我要去面试。", "Xià xīngqī wǒ yào qù miànshì.", "Tuần sau tôi phải đi phỏng vấn."),
    vocab("经验", "jīngyàn", "kinh nghiệm", "danh từ", "Dùng khi nói công việc và tuyển dụng.", "这个工作不太要求经验。", "Zhège gōngzuò bú tài yāoqiú jīngyàn.", "Công việc này không quá yêu cầu kinh nghiệm."),
    vocab("合适", "héshì", "phù hợp", "tính từ", "Dùng để nhận xét công việc có hợp với mình không.", "我觉得这个工作比较合适。", "Wǒ juéde zhège gōngzuò bǐjiào héshì.", "Tôi thấy công việc này khá phù hợp.")
  ],
  5: [
    vocab("试", "shì", "thử", "động từ", "Động từ rất hay dùng khi mua quần áo.", "这件衣服我可以试一下吗？", "Zhè jiàn yīfu wǒ kěyǐ shì yíxià ma?", "Bộ quần áo này tôi có thể thử một chút không?"),
    vocab("件", "jiàn", "cái/bộ (quần áo)", "lượng từ", "Lượng từ chính trong bài mua đồ.", "就买这件吧。", "Jiù mǎi zhè jiàn ba.", "Vậy mua chiếc này đi."),
    vocab("便宜", "piányi", "rẻ", "tính từ", "Dùng khi so sánh giá tiền.", "这件比那件便宜一点儿。", "Zhè jiàn bǐ nà jiàn piányi yìdiǎnr.", "Cái này rẻ hơn cái kia một chút."),
    vocab("贵", "guì", "đắt", "tính từ", "Đi cùng 便宜 trong chủ đề mua sắm.", "太贵了，我再看看别的。", "Tài guì le, wǒ zài kànkan bié de.", "Đắt quá, tôi xem cái khác vậy.")
  ],
  6: [
    vocab("饱", "bǎo", "no", "tính từ", "Đi với 吃 để nói đã ăn đủ.", "我已经吃饱了。", "Wǒ yǐjīng chī bǎo le.", "Tôi đã ăn no rồi."),
    vocab("味道", "wèidào", "mùi vị", "danh từ", "Dùng để nhận xét món ăn.", "今天的菜味道不错。", "Jīntiān de cài wèidào búcuò.", "Mùi vị món ăn hôm nay khá ổn."),
    vocab("再", "zài", "nữa", "phó từ", "Trong bài này hay dùng để nói không ăn thêm nữa.", "我不想再吃了。", "Wǒ bù xiǎng zài chī le.", "Tôi không muốn ăn nữa."),
    vocab("一点儿", "yìdiǎnr", "một chút", "số lượng nhỏ", "Dùng để làm nhẹ nhận xét về đồ ăn.", "我只想喝一点儿汤。", "Wǒ zhǐ xiǎng hē yìdiǎnr tāng.", "Tôi chỉ muốn uống một chút canh.")
  ],
  7: [
    vocab("离", "lí", "cách", "giới từ/động từ", "Từ khóa ngữ pháp của bài khoảng cách.", "你家离公司远吗？", "Nǐ jiā lí gōngsī yuǎn ma?", "Nhà bạn cách công ty xa không?"),
    vocab("附近", "fùjìn", "gần đó, lân cận", "danh từ/tính từ", "Dùng để nói nơi ở gần công ty hoặc ga tàu.", "公司附近有一个超市。", "Gōngsī fùjìn yǒu yí ge chāoshì.", "Gần công ty có một siêu thị."),
    vocab("地铁站", "dìtiě zhàn", "ga tàu điện ngầm", "danh từ", "Mở rộng ngữ cảnh đi lại hằng ngày.", "我家离地铁站很近。", "Wǒ jiā lí dìtiě zhàn hěn jìn.", "Nhà tôi rất gần ga tàu điện ngầm."),
    vocab("方便", "fāngbiàn", "thuận tiện", "tính từ", "Dùng để nhận xét vị trí ở.", "住在公司附近很方便。", "Zhù zài gōngsī fùjìn hěn fāngbiàn.", "Sống gần công ty rất thuận tiện.")
  ],
  8: [
    vocab("再", "zài", "rồi, sau đó", "phó từ", "Từ khóa của bài xin thêm thời gian suy nghĩ.", "让我想想再告诉你。", "Ràng wǒ xiǎngxiang zài gàosu nǐ.", "Để tôi nghĩ rồi nói cho bạn sau."),
    vocab("决定", "juédìng", "quyết định", "danh từ/động từ", "Dùng khi sau khi nghĩ xong mới chốt.", "这个问题我明天再决定。", "Zhège wèntí wǒ míngtiān zài juédìng.", "Vấn đề này ngày mai tôi quyết định tiếp."),
    vocab("着急", "zháojí", "sốt ruột, vội", "tính từ/động từ", "Phù hợp với ngữ cảnh không nên trả lời vội.", "你别着急，让我先想想。", "Nǐ bié zháojí, ràng wǒ xiān xiǎngxiang.", "Bạn đừng sốt ruột, để tôi nghĩ trước đã."),
    vocab("回答", "huídá", "trả lời", "động từ/danh từ", "Dùng khi nói sẽ trả lời sau.", "这个问题我现在还不能回答。", "Zhège wèntí wǒ xiànzài hái bùnéng huídá.", "Vấn đề này bây giờ tôi vẫn chưa thể trả lời.")
  ],
  9: [
    vocab("做不完", "zuò bu wán", "làm không xong", "động từ bổ ngữ", "Dùng trực tiếp với bài quá nhiều.", "题太多了，我今天做不完。", "Tí tài duō le, wǒ jīntiān zuò bu wán.", "Bài nhiều quá, hôm nay tôi làm không xong."),
    vocab("作业", "zuòyè", "bài tập về nhà", "danh từ", "Ngữ cảnh quen thuộc của bài học.", "老师今天给了很多作业。", "Lǎoshī jīntiān gěi le hěn duō zuòyè.", "Hôm nay thầy/cô giao rất nhiều bài tập."),
    vocab("练习", "liànxí", "bài luyện tập; luyện tập", "danh từ/động từ", "Mở rộng nhóm từ học tập.", "这部分练习我还没做完。", "Zhè bùfen liànxí wǒ hái méi zuòwán.", "Phần bài luyện tập này tôi vẫn chưa làm xong."),
    vocab("认真", "rènzhēn", "nghiêm túc", "tính từ/trạng từ", "Dùng khi nói cách làm bài.", "你这么认真，一定能慢慢做完。", "Nǐ zhème rènzhēn, yídìng néng mànmàn zuòwán.", "Bạn nghiêm túc như vậy, nhất định sẽ dần làm xong.")
  ],
  10: [
    vocab("找", "zhǎo", "tìm", "động từ", "Động từ trọng tâm của bài tìm điện thoại.", "别找了，手机在桌子上呢。", "Bié zhǎo le, shǒujī zài zhuōzi shàng ne.", "Đừng tìm nữa, điện thoại ở trên bàn đây."),
    vocab("呢", "ne", "đấy, mà", "trợ từ ngữ khí", "Dùng để nhấn mạnh trạng thái đang hiện hữu.", "钥匙在包里呢。", "Yàoshi zài bāo lǐ ne.", "Chìa khóa ở trong túi mà."),
    vocab("旁边", "pángbiān", "bên cạnh", "danh từ vị trí", "Mở rộng nhóm vị trí đồ vật.", "杯子就在电脑旁边。", "Bēizi jiù zài diànnǎo pángbiān.", "Cái cốc ở ngay bên cạnh máy tính."),
    vocab("包", "bāo", "túi, cặp", "danh từ", "Dùng để nói nơi đồ vật thường được để.", "手机是不是在你的包里？", "Shǒujī shì bu shì zài nǐ de bāo lǐ?", "Điện thoại có phải ở trong túi của bạn không?")
  ],
  11: [
    vocab("比", "bǐ", "hơn, so với", "giới từ", "Từ khóa ngữ pháp chính của bài.", "他比我大三岁。", "Tā bǐ wǒ dà sān suì.", "Anh ấy lớn hơn tôi ba tuổi."),
    vocab("大", "dà", "lớn hơn", "tính từ", "Dùng khi so tuổi hoặc mức độ.", "我哥哥比我大。", "Wǒ gēge bǐ wǒ dà.", "Anh trai tôi lớn hơn tôi."),
    vocab("小", "xiǎo", "nhỏ, ít tuổi hơn", "tính từ", "Dùng đối lập với 大 trong bài so sánh tuổi.", "她比我小两岁。", "Tā bǐ wǒ xiǎo liǎng suì.", "Cô ấy nhỏ hơn tôi hai tuổi."),
    vocab("一点儿", "yìdiǎnr", "một chút", "mức độ nhỏ", "Dùng trong so sánh nhẹ.", "这件衣服比那件贵一点儿。", "Zhè jiàn yīfu bǐ nà jiàn guì yìdiǎnr.", "Bộ quần áo này đắt hơn bộ kia một chút.")
  ],
  12: [
    vocab("穿得", "chuān de", "mặc đến mức", "cấu trúc bổ ngữ", "Dùng trong câu mẫu 你穿得太少了。", "你今天穿得太少了。", "Nǐ jīntiān chuān de tài shǎo le.", "Hôm nay bạn mặc ít quá."),
    vocab("太...了", "tài... le", "quá...", "cấu trúc mức độ", "Dùng để nhấn mức độ quá mức.", "今天外边太冷了。", "Jīntiān wàibian tài lěng le.", "Hôm nay ngoài trời lạnh quá."),
    vocab("冷", "lěng", "lạnh", "tính từ", "Đi cùng bài quần áo và thời tiết.", "外边很冷，你多穿一点儿吧。", "Wàibian hěn lěng, nǐ duō chuān yìdiǎnr ba.", "Ngoài trời rất lạnh, bạn mặc thêm chút đi."),
    vocab("多", "duō", "nhiều hơn", "phó từ/tính từ", "Dùng để khuyên làm thêm một chút.", "你可以多穿一件外套。", "Nǐ kěyǐ duō chuān yí jiàn wàitào.", "Bạn có thể mặc thêm một chiếc áo khoác.")
  ],
  13: [
    vocab("门", "mén", "cửa", "danh từ", "Đồ vật chính của bài trạng thái.", "门开着呢。", "Mén kāizhe ne.", "Cửa đang mở đấy."),
    vocab("开着", "kāizhe", "đang mở", "trạng thái với 着", "Diễn tả trạng thái còn tiếp tục.", "窗户也开着。", "Chuānghu yě kāizhe.", "Cửa sổ cũng đang mở."),
    vocab("灯", "dēng", "đèn", "danh từ", "Rất phù hợp với mẫu trạng thái 着.", "灯还亮着呢。", "Dēng hái liàngzhe ne.", "Đèn vẫn còn đang sáng đấy."),
    vocab("亮着", "liàngzhe", "đang sáng", "trạng thái với 着", "Dùng song song với 开着.", "教室里的灯一直亮着。", "Jiàoshì lǐ de dēng yìzhí liàngzhe.", "Đèn trong lớp vẫn sáng suốt.")
  ],
  14: [
    vocab("过", "guo", "đã từng", "trợ từ động thái", "Từ khóa ngữ pháp chính của bài trải nghiệm.", "你看过那个电影吗？", "Nǐ kànguo nàge diànyǐng ma?", "Bạn đã xem bộ phim đó chưa?"),
    vocab("部", "bù", "bộ (phim)", "lượng từ", "Lượng từ chuẩn khi nói về phim.", "这部电影很有意思。", "Zhè bù diànyǐng hěn yǒuyìsi.", "Bộ phim này rất thú vị."),
    vocab("意思", "yìsi", "ý nghĩa; thú vị", "danh từ/tính từ", "Trong khẩu ngữ hay dùng 有意思.", "这个电影很有意思。", "Zhège diànyǐng hěn yǒuyìsi.", "Bộ phim này rất thú vị."),
    vocab("一次", "yí cì", "một lần", "lượng từ", "Dùng khi nói trải nghiệm bao nhiêu lần.", "我只看过一次。", "Wǒ zhǐ kànguo yí cì.", "Tôi chỉ xem một lần thôi.")
  ],
  15: [
    vocab("春节", "Chūnjié", "Tết mùa xuân", "danh từ riêng", "Mở rộng chủ đề năm mới trong bài cuối HSK 2.", "春节以前，大家都很忙。", "Chūnjié yǐqián, dàjiā dōu hěn máng.", "Trước Tết, mọi người đều rất bận."),
    vocab("快", "kuài", "sắp", "phó từ/tính từ", "Dùng khi nói sự việc sắp xảy ra.", "新年快到了。", "Xīnnián kuài dào le.", "Năm mới sắp đến rồi."),
    vocab("礼物", "lǐwù", "quà", "danh từ", "Phù hợp với bối cảnh chuẩn bị năm mới.", "我想给朋友买一点儿礼物。", "Wǒ xiǎng gěi péngyou mǎi yìdiǎnr lǐwù.", "Tôi muốn mua một ít quà cho bạn bè."),
    vocab("热闹", "rènao", "náo nhiệt", "tính từ", "Dùng để miêu tả không khí ngày lễ.", "过年的时候街上特别热闹。", "Guònián de shíhou jiēshang tèbié rènao.", "Vào dịp năm mới trên phố đặc biệt náo nhiệt.")
  ]
};

hsk2Course.lessons.forEach((lesson) => {
  const extras = hsk2VocabularyFourTextsExpansion[lesson.number];
  if (extras) {
    lesson.vocabulary.push(...extras);
  }
});

const hsk3Course = {
  id: "hsk3",
  label: "HSK 3",
  overview: "HSK 6 được khóa theo đúng 40 bài của HSK Standard Course 6A và 6B. Giai đoạn này giữ nguyên layout hiện tại và triển khai lesson page theo cùng study flow.",
  lessons: []
};

hsk3Course.lessons.push(
  {
    id: "hsk3-lesson-1",
    number: 1,
    title: "Bài 1: Thói quen hằng ngày và thay đổi nhỏ",
    objective: "Mô tả lịch sinh hoạt chi tiết hơn, nói về thói quen đã thay đổi và cách sắp xếp thời gian trong ngày.",
    vocabulary: [
      vocab("习惯", "xíguàn", "thói quen", "danh từ/động từ", "Dùng để nói việc làm thường xuyên trong thời gian dài.", "我已经习惯早起了。", "Wǒ yǐjīng xíguàn zǎoqǐ le.", "Tôi đã quen với việc dậy sớm rồi."),
      vocab("安排", "ānpái", "sắp xếp", "động từ/danh từ", "Dùng khi nói cách tổ chức thời gian.", "我想先安排一下明天的时间。", "Wǒ xiǎng xiān ānpái yíxià míngtiān de shíjiān.", "Tôi muốn sắp xếp thời gian ngày mai trước một chút."),
      vocab("提高", "tígāo", "nâng cao", "động từ", "Hay dùng với trình độ, hiệu quả, tốc độ.", "我想提高汉语水平。", "Wǒ xiǎng tígāo Hànyǔ shuǐpíng.", "Tôi muốn nâng cao trình độ tiếng Trung."),
      vocab("坚持", "jiānchí", "kiên trì", "động từ", "Dùng khi nói tiếp tục làm điều gì đều đặn.", "如果坚持练习，进步会更快。", "Rúguǒ jiānchí liànxí, jìnbù huì gèng kuài.", "Nếu kiên trì luyện tập, tiến bộ sẽ nhanh hơn."),
      vocab("效率", "xiàolǜ", "hiệu suất", "danh từ", "Dùng khi nói kết quả làm việc hoặc học tập.", "早上学习的时候效率比较高。", "Zǎoshang xuéxí de shíhou xiàolǜ bǐjiào gāo.", "Khi học vào buổi sáng thì hiệu suất khá cao."),
      vocab("越来越", "yuèláiyuè", "ngày càng", "phó từ", "Dùng để nói sự thay đổi tăng dần theo thời gian.", "我的生活越来越规律了。", "Wǒ de shēnghuó yuèláiyuè guīlǜ le.", "Cuộc sống của tôi ngày càng có nề nếp hơn.")
    ],
    dialogue: [
      study("A: 你最近的生活怎么样？", "A: Nǐ zuìjìn de shēnghuó zěnmeyàng?", "A: Dạo gần đây cuộc sống của bạn thế nào?"),
      study("B: 我现在每天六点半起床，生活越来越规律了。", "B: Wǒ xiànzài měitiān liù diǎn bàn qǐchuáng, shēnghuó yuèláiyuè guīlǜ le.", "B: Bây giờ ngày nào tôi cũng dậy lúc 6 giờ rưỡi, cuộc sống ngày càng nề nếp hơn."),
      study("A: 你为什么改变这个习惯？", "A: Nǐ wèishénme gǎibiàn zhège xíguàn?", "A: Tại sao bạn thay đổi thói quen này?"),
      study("B: 因为我想提高学习效率，所以每天晚上都会先安排第二天的时间。", "B: Yīnwèi wǒ xiǎng tígāo xuéxí xiàolǜ, suǒyǐ měitiān wǎnshang dōu huì xiān ānpái dì-èr tiān de shíjiān.", "B: Vì tôi muốn nâng cao hiệu quả học tập nên tối nào cũng sắp xếp thời gian cho ngày hôm sau trước.")
    ],
    grammarNotes: [
      grammarNote("1. 越来越 + tính từ / động từ", "越来越 dùng để nói một sự thay đổi diễn ra dần dần theo hướng tăng lên hoặc rõ hơn.", study("我的生活越来越规律了。", "Wǒ de shēnghuó yuèláiyuè guīlǜ le.", "Cuộc sống của tôi ngày càng có nề nếp hơn."), [
        study("他的汉语越来越好了。", "Tā de Hànyǔ yuèláiyuè hǎo le.", "Tiếng Trung của anh ấy ngày càng tốt hơn."),
        study("最近天气越来越热了。", "Zuìjìn tiānqì yuèláiyuè rè le.", "Gần đây thời tiết ngày càng nóng hơn.")
      ]),
      grammarNote("2. ...的时候...", "的时候 dùng để đặt một hành động vào khung thời gian hoặc hoàn cảnh cụ thể.", study("早上学习的时候效率比较高。", "Zǎoshang xuéxí de shíhou xiàolǜ bǐjiào gāo.", "Khi học vào buổi sáng thì hiệu suất khá cao."), [
        study("我坐地铁的时候常常听中文。", "Wǒ zuò dìtiě de shíhou chángcháng tīng Zhōngwén.", "Khi đi tàu điện ngầm tôi thường nghe tiếng Trung."),
        study("做作业的时候别看手机。", "Zuò zuòyè de shíhou bié kàn shǒujī.", "Khi làm bài tập đừng xem điện thoại.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa.", prompt: ["1. 习惯", "2. 提高", "3. 效率"], options: ["a. hiệu suất", "b. nâng cao", "c. thói quen"], answer: "1-c, 2-b, 3-a" }],
      [{ question: "Điền từ thích hợp.", prompt: ["我的生活___来越规律了。", "我想___高汉语水平。", "每天晚上我先___排第二天的时间。"], answer: "越 / 提 / 安" }],
      [{ question: "Câu nào diễn tả sự thay đổi tăng dần?", options: ["A. 我的汉语越来越好了。", "B. 我昨天去学校。", "C. 你喜欢什么？"], answer: "A. 我的汉语越来越好了。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 你最近的生活怎么样？", "B: ____________", "A: 你为什么改变这个习惯？"], answer: "B: 我现在每天六点半起床，生活越来越规律了。" }],
      "Tự kiểm tra: bạn có thể nói một thói quen mới của mình và giải thích lý do thay đổi nó không?"
    ),
    summary: "Bài này giúp bạn mô tả thói quen hằng ngày ở mức chi tiết hơn và nói về sự thay đổi dần theo thời gian.",
    quickSummary: {
      words: ["习惯", "安排", "提高", "坚持", "效率", "越来越"],
      patterns: ["生活越来越规律了。", "早上学习的时候效率比较高。"],
      reminder: "越来越 thường đi với sự thay đổi kéo dài, không dùng cho một thay đổi xảy ra ngay lập tức."
    }
  },
  {
    id: "hsk3-lesson-2",
    number: 2,
    title: "Bài 2: Ở lớp và mượn đồ học tập",
    objective: "Xử lý tình huống trong lớp học như hỏi bài, mượn tài liệu và nhờ giải thích lại.",
    vocabulary: [
      vocab("复习", "fùxí", "ôn tập", "động từ", "Dùng để nói việc xem lại bài đã học.", "晚上我会先复习今天的内容。", "Wǎnshang wǒ huì xiān fùxí jīntiān de nèiróng.", "Buổi tối tôi sẽ ôn lại nội dung hôm nay trước."),
      vocab("预习", "yùxí", "xem trước bài", "động từ", "Ngược với 复习, dùng trước buổi học mới.", "老师让我们明天先预习课文。", "Lǎoshī ràng wǒmen míngtiān xiān yùxí kèwén.", "Thầy/cô bảo chúng tôi ngày mai xem trước bài khóa."),
      vocab("材料", "cáiliào", "tài liệu", "danh từ", "Từ dùng nhiều trong học tập và công việc.", "这份材料我还没看完。", "Zhè fèn cáiliào wǒ hái méi kànwán.", "Tài liệu này tôi vẫn chưa đọc xong."),
      vocab("解释", "jiěshì", "giải thích", "động từ/danh từ", "Dùng khi cần làm rõ nội dung khó.", "你能不能再解释一遍？", "Nǐ néng bù néng zài jiěshì yí biàn?", "Bạn có thể giải thích lại một lần nữa được không?"),
      vocab("记住", "jìzhù", "ghi nhớ", "động từ", "Dùng khi học từ mới, mẫu câu.", "这个语法点我总是记不住。", "Zhège yǔfǎ diǎn wǒ zǒngshì jì bu zhù.", "Điểm ngữ pháp này tôi cứ không nhớ được."),
      vocab("借", "jiè", "mượn", "động từ", "Dùng khi mượn sách, bút, tài liệu.", "我想借一下你的词典。", "Wǒ xiǎng jiè yíxià nǐ de cídiǎn.", "Tôi muốn mượn từ điển của bạn một chút.")
    ],
    dialogue: [
      study("A: 你把今天老师发的材料看完了吗？", "A: Nǐ bǎ jīntiān lǎoshī fā de cáiliào kànwán le ma?", "A: Bạn đã đọc xong tài liệu thầy/cô phát hôm nay chưa?"),
      study("B: 还没有，有几个地方我没听懂。", "B: Hái méiyǒu, yǒu jǐ ge dìfang wǒ méi tīngdǒng.", "B: Vẫn chưa, có vài chỗ tôi chưa hiểu khi nghe."),
      study("A: 你要是愿意，我可以先借你我的笔记。", "A: Nǐ yàoshi yuànyì, wǒ kěyǐ xiān jiè nǐ wǒ de bǐjì.", "A: Nếu bạn muốn, tôi có thể cho bạn mượn ghi chú của tôi trước."),
      study("B: 太好了。你还能不能再给我解释一遍这个语法点？", "B: Tài hǎo le. Nǐ hái néng bù néng zài gěi wǒ jiěshì yí biàn zhège yǔfǎ diǎn?", "B: Tốt quá. Bạn có thể giải thích lại điểm ngữ pháp này cho tôi một lần nữa không?")
    ],
    grammarNotes: [
      grammarNote("1. 还没(有)...", "还没有 dùng để nói một việc đến hiện tại vẫn chưa hoàn thành.", study("我还没有看完。", "Wǒ hái méiyǒu kànwán.", "Tôi vẫn chưa đọc xong."), [
        study("我还没听懂这个问题。", "Wǒ hái méi tīngdǒng zhège wèntí.", "Tôi vẫn chưa hiểu câu hỏi này."),
        study("他还没有回来。", "Tā hái méiyǒu huílai.", "Anh ấy vẫn chưa quay về.")
      ]),
      grammarNote("2. 要是...，就/可以...", "要是 thường dùng trong khẩu ngữ để đưa ra điều kiện gần gũi hơn 如果.", study("你要是愿意，我可以先借你笔记。", "Nǐ yàoshi yuànyì, wǒ kěyǐ xiān jiè nǐ bǐjì.", "Nếu bạn đồng ý, tôi có thể cho bạn mượn ghi chú trước."), [
        study("你要是有问题，就问我。", "Nǐ yàoshi yǒu wèntí, jiù wèn wǒ.", "Nếu bạn có câu hỏi thì hỏi tôi."),
        study("你要是没时间，我们明天再说。", "Nǐ yàoshi méi shíjiān, wǒmen míngtiān zài shuō.", "Nếu bạn không có thời gian thì ngày mai chúng ta nói tiếp.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa phù hợp.", prompt: ["1. 复习", "2. 材料", "3. 借"], options: ["a. tài liệu", "b. ôn tập", "c. mượn"], answer: "1-b, 2-a, 3-c" }],
      [{ question: "Điền từ còn thiếu.", prompt: ["我还没___完这份材料。", "这个语法点我记不___。", "我可以先___你我的笔记。"], answer: "看 / 住 / 借" }],
      [{ question: "Câu nào dùng để nói một việc vẫn chưa xong?", options: ["A. 我还没有看完。", "B. 我已经看完了。", "C. 我天天都看。"], answer: "A. 我还没有看完。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 你把今天的材料看完了吗？", "B: ____________", "A: 那我先借你我的笔记。"], answer: "B: 还没有，有几个地方我没听懂。" }],
      "Tự kiểm tra: bạn có thể nhờ bạn học cho mượn ghi chú và giải thích lại một điểm khó không?"
    ),
    summary: "Bài này giúp bạn xử lý các tình huống học tập thực tế hơn như chưa hiểu bài, mượn tài liệu và nhờ giải thích lại.",
    quickSummary: {
      words: ["复习", "预习", "材料", "解释", "记住", "借"],
      patterns: ["我还没有看完。", "你要是愿意，我可以先借你笔记。"],
      reminder: "还没有 nhấn mạnh việc chưa hoàn thành tới hiện tại, rất hữu ích trong lớp học."
    }
  },
  {
    id: "hsk3-lesson-3",
    number: 3,
    title: "Bài 3: Văn phòng và lịch làm việc",
    objective: "Nói về việc đi làm, lịch họp, trao đổi với đồng nghiệp và sắp xếp công việc trong ngày.",
    vocabulary: [
      vocab("会议", "huìyì", "cuộc họp", "danh từ", "Từ cơ bản trong môi trường văn phòng.", "下午三点我们有一个会议。", "Xiàwǔ sān diǎn wǒmen yǒu yí ge huìyì.", "Chiều 3 giờ chúng tôi có một cuộc họp."),
      vocab("同事", "tóngshì", "đồng nghiệp", "danh từ", "Người làm việc cùng công ty.", "我的同事工作很认真。", "Wǒ de tóngshì gōngzuò hěn rènzhēn.", "Đồng nghiệp của tôi làm việc rất nghiêm túc."),
      vocab("通知", "tōngzhī", "thông báo", "động từ/danh từ", "Dùng khi báo tin công việc.", "经理刚刚通知我们改时间了。", "Jīnglǐ gānggang tōngzhī wǒmen gǎi shíjiān le.", "Quản lý vừa thông báo với chúng tôi là đã đổi giờ."),
      vocab("准时", "zhǔnshí", "đúng giờ", "tính từ/phó từ", "Rất quan trọng trong môi trường công việc.", "请大家准时参加会议。", "Qǐng dàjiā zhǔnshí cānjiā huìyì.", "Mời mọi người tham gia họp đúng giờ."),
      vocab("推迟", "tuīchí", "hoãn lại", "động từ", "Dùng khi dời lịch hoặc lùi thời gian.", "会议推迟到四点了。", "Huìyì tuīchí dào sì diǎn le.", "Cuộc họp đã bị hoãn đến 4 giờ."),
      vocab("完成", "wánchéng", "hoàn thành", "động từ", "Dùng khi nói xong nhiệm vụ.", "我今天一定完成这个工作。", "Wǒ jīntiān yídìng wánchéng zhège gōngzuò.", "Hôm nay tôi nhất định hoàn thành công việc này.")
    ],
    dialogue: [
      study("A: 你看到经理刚才发的通知了吗？", "A: Nǐ kàndào jīnglǐ gāngcái fā de tōngzhī le ma?", "A: Bạn đã thấy thông báo quản lý vừa gửi chưa?"),
      study("B: 看到了，下午的会议推迟到四点了。", "B: Kàndào le, xiàwǔ de huìyì tuīchí dào sì diǎn le.", "B: Thấy rồi, cuộc họp chiều đã lùi tới 4 giờ."),
      study("A: 那太好了，我就有时间先完成手上的工作。", "A: Nà tài hǎo le, wǒ jiù yǒu shíjiān xiān wánchéng shǒushàng de gōngzuò.", "A: Tốt quá, vậy tôi có thời gian hoàn thành công việc đang làm trước."),
      study("B: 不过我们还是要准时到会议室。", "B: Búguò wǒmen háishi yào zhǔnshí dào huìyìshì.", "B: Nhưng chúng ta vẫn phải đến phòng họp đúng giờ.")
    ],
    grammarNotes: [
      grammarNote("1. 把 + tân ngữ + động từ / kết quả", "把 nhấn mạnh cách xử lý trực tiếp lên một đối tượng cụ thể, rất hay gặp trong ngữ cảnh học tập và công việc.", study("请把这个文件发给我。", "Qǐng bǎ zhège wénjiàn fā gěi wǒ.", "Hãy gửi tài liệu này cho tôi."), [
        study("我已经把材料看完了。", "Wǒ yǐjīng bǎ cáiliào kànwán le.", "Tôi đã đọc xong tài liệu rồi."),
        study("你先把这个问题写下来。", "Nǐ xiān bǎ zhège wèntí xiě xiàlai.", "Bạn hãy viết câu hỏi này xuống trước.")
      ]),
      grammarNote("2. 还是 để nhấn mạnh 'vẫn' trong quyết định", "Trong HSK 3, 还是 còn thường dùng với nghĩa 'vẫn nên / vẫn phải' khi đưa ra lựa chọn sau khi cân nhắc.", study("我们还是要准时到会议室。", "Wǒmen háishi yào zhǔnshí dào huìyìshì.", "Chúng ta vẫn phải đến phòng họp đúng giờ."), [
        study("下雨了，我们还是坐地铁吧。", "Xiàyǔ le, wǒmen háishi zuò dìtiě ba.", "Trời mưa rồi, chúng ta vẫn nên đi tàu điện ngầm."),
        study("这个问题很难，你还是先问老师吧。", "Zhège wèntí hěn nán, nǐ háishi xiān wèn lǎoshī ba.", "Vấn đề này khó lắm, bạn vẫn nên hỏi thầy/cô trước.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 会议", "2. 推迟", "3. 完成"], options: ["a. hoàn thành", "b. hoãn lại", "c. cuộc họp"], answer: "1-c, 2-b, 3-a" }],
      [{ question: "Điền từ phù hợp.", prompt: ["会议推___到四点了。", "请大家___时参加会议。", "我今天一定___成这个工作。"], answer: "迟 / 准 / 完" }],
      [{ question: "Câu nào dùng 把 đúng?", options: ["A. 请把这个文件发给我。", "B. 请这个文件把发给我。", "C. 把请文件给我。"], answer: "A. 请把这个文件发给我。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 你看到经理发的通知了吗？", "B: ____________", "A: 那我就先完成手上的工作。"], answer: "B: 看到了，下午的会议推迟到四点了。" }],
      "Tự kiểm tra: bạn có thể báo lại một thay đổi lịch họp và nói mình sẽ làm gì trước không?"
    ),
    summary: "Bài này giúp bạn xử lý tình huống văn phòng cơ bản hơn: đọc thông báo, đổi lịch và sắp xếp lại công việc.",
    quickSummary: {
      words: ["会议", "同事", "通知", "准时", "推迟", "完成"],
      patterns: ["请把这个文件发给我。", "我们还是要准时到会议室。"],
      reminder: "把 thường đi khi bạn muốn nhấn mạnh kết quả xử lý trên một vật hoặc nội dung cụ thể."
    }
  }
);

hsk3Course.lessons.push(
  {
    id: "hsk3-lesson-7",
    number: 7,
    title: "Bài 7: Nhờ giúp đỡ và xử lý vấn đề nhỏ",
    objective: "Hỏi xin hỗ trợ, mô tả vấn đề đang gặp phải và phản hồi lịch sự khi được giúp đỡ.",
    vocabulary: [
      vocab("麻烦", "máfan", "phiền; làm phiền", "động từ/tính từ", "Thường dùng rất lịch sự trong lời nhờ giúp.", "麻烦你帮我看一下。", "Máfan nǐ bāng wǒ kàn yíxià.", "Phiền bạn xem giúp tôi một chút."),
      vocab("故障", "gùzhàng", "trục trặc; hỏng", "danh từ", "Dùng cho máy móc, thiết bị hoặc hệ thống.", "电脑突然出了故障。", "Diànnǎo tūrán chū le gùzhàng.", "Máy tính đột nhiên bị trục trặc."),
      vocab("着急", "zháojí", "sốt ruột; lo gấp", "tính từ/động từ", "Dùng khi gặp vấn đề cần giải quyết nhanh.", "别着急，我们一起想办法。", "Bié zháojí, wǒmen yìqǐ xiǎng bànfǎ.", "Đừng sốt ruột, chúng ta cùng nghĩ cách."),
      vocab("办法", "bànfǎ", "cách; biện pháp", "danh từ", "Hay dùng khi nói tìm giải pháp.", "我得先想个办法。", "Wǒ děi xiān xiǎng ge bànfǎ.", "Tôi phải nghĩ ra một cách trước."),
      vocab("顺便", "shùnbiàn", "tiện thể", "phó từ", "Dùng khi nhờ ai đó làm thêm một việc cùng lúc.", "你去办公室的时候，顺便帮我打印一下吧。", "Nǐ qù bàngōngshì de shíhou, shùnbiàn bāng wǒ dǎyìn yíxià ba.", "Khi bạn đi văn phòng thì tiện thể in giúp tôi một chút nhé."),
      vocab("解决", "jiějué", "giải quyết", "động từ", "Dùng khi nói xử lý vấn đề đến xong.", "这个问题已经解决了。", "Zhège wèntí yǐjīng jiějué le.", "Vấn đề này đã được giải quyết rồi.")
    ],
    dialogue: [
      study("A: 不好意思，麻烦你帮我看一下这台电脑，好像出了点儿故障。", "A: Bù hǎoyìsi, máfan nǐ bāng wǒ kàn yíxià zhè tái diànnǎo, hǎoxiàng chū le diǎnr gùzhàng.", "A: Xin lỗi, phiền bạn xem giúp tôi cái máy tính này một chút, hình như nó bị trục trặc."),
      study("B: 别着急，我先看看能不能马上解决。", "B: Bié zháojí, wǒ xiān kànkan néng bù néng mǎshàng jiějué.", "B: Đừng sốt ruột, tôi xem trước xem có thể giải quyết ngay được không."),
      study("A: 如果现在不方便，也没关系。", "A: Rúguǒ xiànzài bù fāngbiàn, yě méi guānxi.", "A: Nếu bây giờ không tiện thì cũng không sao."),
      study("B: 没事，我去办公室的时候顺便帮你问一下技术同事。", "B: Méishi, wǒ qù bàngōngshì de shíhou shùnbiàn bāng nǐ wèn yíxià jìshù tóngshì.", "B: Không sao, khi tôi vào văn phòng sẽ tiện thể hỏi giúp bạn đồng nghiệp kỹ thuật.")
    ],
    grammarNotes: [
      grammarNote("1. 麻烦 + người + động từ", "麻烦 đặt trước lời nhờ giúp để làm câu nói lịch sự, mềm hơn và tự nhiên hơn.", study("麻烦你帮我看一下。", "Máfan nǐ bāng wǒ kàn yíxià.", "Phiền bạn xem giúp tôi một chút."), [
        study("麻烦你把门关一下。", "Máfan nǐ bǎ mén guān yíxià.", "Phiền bạn đóng cửa giúp một chút."),
        study("麻烦你再说一遍。", "Máfan nǐ zài shuō yí biàn.", "Phiền bạn nói lại một lần nữa.")
      ]),
      grammarNote("2. 能不能 + động từ", "能不能 là cách hỏi khả năng hoặc xin giúp đỡ một cách trực tiếp nhưng vẫn lịch sự.", study("你能不能帮我打印一下？", "Nǐ néng bù néng bāng wǒ dǎyìn yíxià?", "Bạn có thể giúp tôi in một chút được không?"), [
        study("你能不能再解释一下？", "Nǐ néng bù néng zài jiěshì yíxià?", "Bạn có thể giải thích thêm một chút được không?"),
        study("你能不能早点来？", "Nǐ néng bù néng zǎodiǎn lái?", "Bạn có thể đến sớm hơn một chút không?")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 故障", "2. 办法", "3. 解决"], options: ["a. giải quyết", "b. trục trặc", "c. cách; biện pháp"], answer: "1-b, 2-c, 3-a" }],
      [{ question: "Điền từ còn thiếu.", prompt: ["电脑出了___障。", "别着___，我们一起想办法。", "这个问题已经解___了。"], answer: "故 / 急 / 决" }],
      [{ question: "Câu nào là lời nhờ giúp lịch sự?", options: ["A. 麻烦你帮我看一下。", "B. 你为什么不看？", "C. 你马上来。"], answer: "A. 麻烦你帮我看一下。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 麻烦你帮我看一下这台电脑。", "B: ____________", "A: 如果现在不方便，也没关系。"], answer: "B: 别着急，我先看看能不能马上解决。" }],
      "Tự kiểm tra: bạn có thể mô tả một vấn đề nhỏ và nhờ người khác giúp bằng cách nói lịch sự không?"
    ),
    summary: "Bài này giúp bạn nhờ giúp đỡ tự nhiên hơn và mô tả rõ vấn đề đang gặp phải trong đời sống hằng ngày.",
    quickSummary: {
      words: ["麻烦", "故障", "着急", "办法", "顺便", "解决"],
      patterns: ["麻烦你帮我看一下。", "你能不能帮我打印一下？"],
      reminder: "麻烦... giúp câu nhờ vả lịch sự hơn, đặc biệt hữu ích trong môi trường học tập và công việc."
    }
  },
  {
    id: "hsk3-lesson-8",
    number: 8,
    title: "Bài 8: Nêu ý kiến và giải thích lý do",
    objective: "Đưa ra ý kiến cá nhân, nêu lý do đơn giản và phản hồi ý kiến của người khác.",
    vocabulary: [
      vocab("意见", "yìjiàn", "ý kiến", "danh từ", "Dùng trong thảo luận hoặc làm việc nhóm.", "你有什么意见吗？", "Nǐ yǒu shénme yìjiàn ma?", "Bạn có ý kiến gì không?"),
      vocab("看法", "kànfǎ", "cách nhìn; quan điểm", "danh từ", "Dùng để hỏi hoặc nói quan điểm cá nhân.", "我跟你的看法不太一样。", "Wǒ gēn nǐ de kànfǎ bù tài yíyàng.", "Quan điểm của tôi không hoàn toàn giống bạn."),
      vocab("原因", "yuányīn", "nguyên nhân", "danh từ", "Dùng để giải thích lý do cụ thể.", "主要原因是时间不够。", "Zhǔyào yuányīn shì shíjiān bú gòu.", "Nguyên nhân chính là không đủ thời gian."),
      vocab("适合", "shìhé", "phù hợp", "động từ/tính từ", "Dùng khi đánh giá một lựa chọn.", "这个办法更适合现在的情况。", "Zhège bànfǎ gèng shìhé xiànzài de qíngkuàng.", "Cách này phù hợp hơn với tình hình hiện tại."),
      vocab("情况", "qíngkuàng", "tình hình", "danh từ", "Dùng trong thảo luận, giải thích hoàn cảnh.", "目前的情况比我们想的复杂一点儿。", "Mùqián de qíngkuàng bǐ wǒmen xiǎng de fùzá yìdiǎnr.", "Tình hình hiện tại phức tạp hơn chúng tôi nghĩ một chút."),
      vocab("同意", "tóngyì", "đồng ý", "động từ", "Dùng để phản hồi lại ý kiến người khác.", "我基本上同意你的意见。", "Wǒ jīběnshang tóngyì nǐ de yìjiàn.", "Về cơ bản tôi đồng ý với ý kiến của bạn.")
    ],
    dialogue: [
      study("A: 关于这次活动，你有什么看法？", "A: Guānyú zhè cì huódòng, nǐ yǒu shénme kànfǎ?", "A: Về hoạt động lần này, bạn có quan điểm gì không?"),
      study("B: 我觉得把时间改到下午更合适，主要原因是很多人上午都有课。", "B: Wǒ juéde bǎ shíjiān gǎi dào xiàwǔ gèng héshì, zhǔyào yuányīn shì hěnduō rén shàngwǔ dōu yǒu kè.", "B: Tôi thấy chuyển thời gian sang buổi chiều sẽ phù hợp hơn, nguyên nhân chính là nhiều người sáng đều có lớp."),
      study("A: 你的意见很有道理，不过下午教室可能不太好找。", "A: Nǐ de yìjiàn hěn yǒu dàolǐ, búguò xiàwǔ jiàoshì kěnéng bù tài hǎo zhǎo.", "A: Ý kiến của bạn rất có lý, nhưng chiều có thể khó tìm lớp học hơn."),
      study("B: 那我们可以先确认一下情况，再决定。", "B: Nà wǒmen kěyǐ xiān quèrèn yíxià qíngkuàng, zài juédìng.", "B: Vậy chúng ta có thể xác nhận tình hình trước rồi mới quyết định.")
    ],
    grammarNotes: [
      grammarNote("1. 关于...", "关于 đặt ở đầu câu để giới thiệu chủ đề đang được thảo luận.", study("关于这次活动，我有一个建议。", "Guānyú zhè cì huódòng, wǒ yǒu yí ge jiànyì.", "Về hoạt động lần này, tôi có một đề nghị."), [
        study("关于这个问题，我们以后再谈。", "Guānyú zhège wèntí, wǒmen yǐhòu zài tán.", "Về vấn đề này, sau này chúng ta sẽ bàn tiếp."),
        study("关于学习方法，你怎么看？", "Guānyú xuéxí fāngfǎ, nǐ zěnme kàn?", "Về phương pháp học, bạn nghĩ thế nào?")
      ]),
      grammarNote("2. 主要原因是...", "Mẫu này dùng để giải thích một lý do chính, rõ ràng và mạch lạc hơn chỉ dùng 因为.", study("主要原因是很多人上午都有课。", "Zhǔyào yuányīn shì hěnduō rén shàngwǔ dōu yǒu kè.", "Nguyên nhân chính là nhiều người sáng đều có lớp."), [
        study("主要原因是我们准备得不够。", "Zhǔyào yuányīn shì wǒmen zhǔnbèi de bú gòu.", "Nguyên nhân chính là chúng tôi chuẩn bị chưa đủ."),
        study("主要原因是时间太紧。", "Zhǔyào yuányīn shì shíjiān tài jǐn.", "Nguyên nhân chính là thời gian quá gấp.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa phù hợp.", prompt: ["1. 意见", "2. 原因", "3. 同意"], options: ["a. đồng ý", "b. nguyên nhân", "c. ý kiến"], answer: "1-c, 2-b, 3-a" }],
      [{ question: "Điền từ thích hợp.", prompt: ["关于这次活___，你有什么看法？", "主要原___是时间不够。", "我基本上同___你的意见。"], answer: "动 / 因 / 意" }],
      [{ question: "Câu nào dùng 主要原因是... đúng?", options: ["A. 主要原因是很多人上午都有课。", "B. 主要原因很多人上午都有课。", "C. 是主要原因很多人上午有课。"], answer: "A. 主要原因是很多人上午都有课。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 关于这次活动，你有什么看法？", "B: ____________", "A: 你的意见很有道理。"], answer: "B: 我觉得把时间改到下午更合适。" }],
      "Tự kiểm tra: bạn có thể nêu một ý kiến của mình và đưa ra một lý do chính cho ý kiến đó không?"
    ),
    summary: "Bài này giúp bạn nói ý kiến cá nhân và giải thích lý do rõ ràng hơn trong các tình huống thảo luận đơn giản.",
    quickSummary: {
      words: ["意见", "看法", "原因", "适合", "情况", "同意"],
      patterns: ["关于这次活动，你有什么看法？", "主要原因是很多人上午都有课。"],
      reminder: "Khi giải thích ý kiến, dùng một lý do chính sẽ giúp câu nói rõ và dễ theo hơn."
    }
  },
  {
    id: "hsk3-lesson-9",
    number: 9,
    title: "Bài 9: Mua sắm và sử dụng dịch vụ",
    objective: "Xử lý các tình huống dịch vụ cơ bản như đổi hàng, hỏi hóa đơn và giải thích vấn đề với nhân viên.",
    vocabulary: [
      vocab("服务员", "fúwùyuán", "nhân viên phục vụ", "danh từ", "Dùng trong cửa hàng, nhà hàng, quầy dịch vụ.", "服务员，请问这件可以换吗？", "Fúwùyuán, qǐngwèn zhè jiàn kěyǐ huàn ma?", "Nhân viên ơi, xin hỏi cái này có thể đổi được không?"),
      vocab("退", "tuì", "trả lại; hoàn", "động từ", "Dùng trong việc trả hàng hoặc hoàn tiền.", "这件衣服我想退。", "Zhè jiàn yīfu wǒ xiǎng tuì.", "Bộ đồ này tôi muốn trả lại."),
      vocab("换", "huàn", "đổi", "động từ", "Dùng khi đổi sản phẩm hoặc kích cỡ.", "我可以换一个大一点儿的吗？", "Wǒ kěyǐ huàn yí ge dà yìdiǎnr de ma?", "Tôi có thể đổi sang cái to hơn một chút không?"),
      vocab("发票", "fāpiào", "hóa đơn", "danh từ", "Từ thường gặp trong mua sắm và công việc.", "请问你要发票吗？", "Qǐngwèn nǐ yào fāpiào ma?", "Xin hỏi bạn có cần hóa đơn không?"),
      vocab("尺寸", "chǐcùn", "kích cỡ", "danh từ", "Dùng khi nói quần áo, giày dép.", "这个尺寸对我来说有点儿小。", "Zhège chǐcùn duì wǒ lái shuō yǒudiǎnr xiǎo.", "Kích cỡ này đối với tôi hơi nhỏ."),
      vocab("质量", "zhìliàng", "chất lượng", "danh từ", "Dùng khi nhận xét hoặc khiếu nại về hàng hóa.", "这件商品的质量还不错。", "Zhè jiàn shāngpǐn de zhìliàng hái búcuò.", "Chất lượng của món hàng này khá ổn.")
    ],
    dialogue: [
      study("A: 不好意思，这件衣服的尺寸有点儿小，我想换一件。", "A: Bù hǎoyìsi, zhè jiàn yīfu de chǐcùn yǒudiǎnr xiǎo, wǒ xiǎng huàn yí jiàn.", "A: Xin lỗi, kích cỡ của bộ đồ này hơi nhỏ, tôi muốn đổi một bộ khác."),
      study("B: 可以，请问你带发票了吗？", "B: Kěyǐ, qǐngwèn nǐ dài fāpiào le ma?", "B: Được, xin hỏi bạn có mang hóa đơn không?"),
      study("A: 带了，不过如果没有合适的尺寸，我也可以退。", "A: Dài le, búguò rúguǒ méiyǒu héshì de chǐcùn, wǒ yě kěyǐ tuì.", "A: Có mang, nhưng nếu không có cỡ phù hợp thì tôi cũng có thể trả lại."),
      study("B: 你先别着急，我帮你找找看。", "B: Nǐ xiān bié zháojí, wǒ bāng nǐ zhǎozhao kàn.", "B: Bạn đừng vội, tôi tìm giúp bạn thử xem.")
    ],
    grammarNotes: [
      grammarNote("1. 对...来说...", "Mẫu này dùng để nêu đánh giá từ góc nhìn của một người cụ thể.", study("这个尺寸对我来说有点儿小。", "Zhège chǐcùn duì wǒ lái shuō yǒudiǎnr xiǎo.", "Kích cỡ này đối với tôi hơi nhỏ."), [
        study("这份工作对他来说很重要。", "Zhè fèn gōngzuò duì tā lái shuō hěn zhòngyào.", "Công việc này rất quan trọng đối với anh ấy."),
        study("晚上学习对我来说效率更高。", "Wǎnshang xuéxí duì wǒ lái shuō xiàolǜ gèng gāo.", "Đối với tôi, học vào buổi tối hiệu quả hơn.")
      ]),
      grammarNote("2. 要是 / 如果没有..., 就 / 也可以...", "Mẫu này dùng để trình bày một phương án khác nếu điều mong muốn không xảy ra.", study("如果没有合适的尺寸，我也可以退。", "Rúguǒ méiyǒu héshì de chǐcùn, wǒ yě kěyǐ tuì.", "Nếu không có cỡ phù hợp, tôi cũng có thể trả lại."), [
        study("如果今天修不好，我明天再来。", "Rúguǒ jīntiān xiū bù hǎo, wǒ míngtiān zài lái.", "Nếu hôm nay sửa không xong, mai tôi sẽ quay lại."),
        study("要是没有票，我们就改时间。", "Yàoshi méiyǒu piào, wǒmen jiù gǎi shíjiān.", "Nếu không có vé, chúng tôi sẽ đổi thời gian.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 发票", "2. 尺寸", "3. 质量"], options: ["a. kích cỡ", "b. hóa đơn", "c. chất lượng"], answer: "1-b, 2-a, 3-c" }],
      [{ question: "Điền từ phù hợp.", prompt: ["请问你带发___了吗？", "这个尺___有点儿小。", "我想___一件大一点儿的。"], answer: "票 / 寸 / 换" }],
      [{ question: "Câu nào dùng 对...来说... đúng?", options: ["A. 这个尺寸对我来说有点儿小。", "B. 这个尺寸来说我对有点儿小。", "C. 对这个尺寸我来说小。"], answer: "A. 这个尺寸对我来说有点儿小。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 这件衣服的尺寸有点儿小，我想换一件。", "B: ____________", "A: 带了，不过如果没有合适的尺寸，我也可以退。"], answer: "B: 可以，请问你带发票了吗？" }],
      "Tự kiểm tra: bạn có thể giải thích lý do muốn đổi hàng và nói phương án khác nếu không có sản phẩm phù hợp không?"
    ),
    summary: "Bài này giúp bạn xử lý các tình huống mua sắm và dịch vụ thực tế hơn, đặc biệt là đổi hoặc trả hàng.",
    quickSummary: {
      words: ["服务员", "退", "换", "发票", "尺寸", "质量"],
      patterns: ["这个尺寸对我来说有点儿小。", "如果没有合适的尺寸，我也可以退。"],
      reminder: "对...来说... rất hữu ích khi bạn cần giải thích lý do đánh giá theo nhu cầu cá nhân."
    }
  },
  {
    id: "hsk3-lesson-10",
    number: 10,
    title: "Bài 10: Sức khỏe và vấn đề hằng ngày",
    objective: "Mô tả rõ hơn tình trạng sức khỏe, nguyên nhân có thể có và cách xử lý các vấn đề thường ngày.",
    vocabulary: [
      vocab("症状", "zhèngzhuàng", "triệu chứng", "danh từ", "Dùng khi mô tả tình trạng bệnh cụ thể hơn.", "这些症状已经两天了。", "Zhèxiē zhèngzhuàng yǐjīng liǎng tiān le.", "Những triệu chứng này đã kéo dài hai ngày rồi."),
      vocab("严重", "yánzhòng", "nghiêm trọng", "tính từ", "Dùng khi đánh giá mức độ vấn đề.", "现在还不算太严重。", "Xiànzài hái bú suàn tài yánzhòng.", "Bây giờ vẫn chưa quá nghiêm trọng."),
      vocab("休息", "xiūxi", "nghỉ ngơi", "động từ", "Tiếp tục rất quan trọng trong chủ đề sức khỏe.", "医生让我多休息两天。", "Yīshēng ràng wǒ duō xiūxi liǎng tiān.", "Bác sĩ bảo tôi nghỉ thêm hai ngày."),
      vocab("按时", "ànshí", "đúng giờ; đúng thời điểm", "phó từ", "Thường dùng với uống thuốc, ăn cơm, đi ngủ.", "你要按时吃药。", "Nǐ yào ànshí chī yào.", "Bạn phải uống thuốc đúng giờ."),
      vocab("影响", "yǐngxiǎng", "ảnh hưởng", "động từ/danh từ", "Dùng khi nói bệnh ảnh hưởng công việc, học tập.", "这个问题已经影响我的工作了。", "Zhège wèntí yǐjīng yǐngxiǎng wǒ de gōngzuò le.", "Vấn đề này đã ảnh hưởng đến công việc của tôi rồi."),
      vocab("恢复", "huīfù", "hồi phục", "động từ", "Dùng sau khi nghỉ ngơi hoặc chữa trị.", "希望你很快就能恢复。", "Xīwàng nǐ hěn kuài jiù néng huīfù.", "Hy vọng bạn sẽ sớm hồi phục.")
    ],
    dialogue: [
      study("A: 你今天看起来不太舒服，是不是还没恢复？", "A: Nǐ jīntiān kànqilai bú tài shūfu, shì bú shì hái méi huīfù?", "A: Hôm nay trông bạn không được khỏe lắm, có phải vẫn chưa hồi phục không?"),
      study("B: 对，这两天一直头疼，而且晚上总是睡不好。", "B: Duì, zhè liǎng tiān yìzhí tóuténg, érqiě wǎnshang zǒngshì shuì bù hǎo.", "B: Đúng vậy, hai ngày nay tôi cứ đau đầu, hơn nữa buổi tối luôn ngủ không ngon."),
      study("A: 这些症状已经影响工作了吗？", "A: Zhèxiē zhèngzhuàng yǐjīng yǐngxiǎng gōngzuò le ma?", "A: Những triệu chứng này đã ảnh hưởng đến công việc chưa?"),
      study("B: 有一点儿，不过医生说只要按时吃药，多休息，很快就会恢复。", "B: Yǒu yìdiǎnr, búguò yīshēng shuō zhǐyào ànshí chī yào, duō xiūxi, hěn kuài jiù huì huīfù.", "B: Có một chút, nhưng bác sĩ nói chỉ cần uống thuốc đúng giờ và nghỉ nhiều thì sẽ sớm hồi phục.")
    ],
    grammarNotes: [
      grammarNote("1. 而且", "而且 dùng để thêm một thông tin cùng hướng, thường mạnh hơn 也 và mang tính bổ sung rõ ràng.", study("这两天一直头疼，而且晚上总是睡不好。", "Zhè liǎng tiān yìzhí tóuténg, érqiě wǎnshang zǒngshì shuì bù hǎo.", "Hai ngày nay cứ đau đầu, hơn nữa buổi tối luôn ngủ không ngon."), [
        study("他不但来了，而且还带了资料。", "Tā búdàn lái le, érqiě hái dài le zīliào.", "Anh ấy không chỉ đến mà còn mang theo tài liệu."),
        study("这个地方安静，而且交通很方便。", "Zhège dìfang ānjìng, érqiě jiāotōng hěn fāngbiàn.", "Nơi này yên tĩnh, hơn nữa giao thông rất thuận tiện.")
      ]),
      grammarNote("2. 只要...，就...", "Mẫu này diễn tả điều kiện đủ: chỉ cần làm điều gì đó thì kết quả sẽ xảy ra.", study("只要按时吃药，多休息，很快就会恢复。", "Zhǐyào ànshí chī yào, duō xiūxi, hěn kuài jiù huì huīfù.", "Chỉ cần uống thuốc đúng giờ và nghỉ nhiều thì sẽ sớm hồi phục."), [
        study("只要你坚持练习，就会进步。", "Zhǐyào nǐ jiānchí liànxí, jiù huì jìnbù.", "Chỉ cần bạn kiên trì luyện tập thì sẽ tiến bộ."),
        study("只要天气好，我们就出去走走。", "Zhǐyào tiānqì hǎo, wǒmen jiù chūqù zǒuzou.", "Chỉ cần thời tiết đẹp thì chúng tôi sẽ ra ngoài đi dạo.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa phù hợp.", prompt: ["1. 症状", "2. 影响", "3. 恢复"], options: ["a. hồi phục", "b. triệu chứng", "c. ảnh hưởng"], answer: "1-b, 2-c, 3-a" }],
      [{ question: "Điền từ thích hợp.", prompt: ["这些症___已经两天了。", "你要按___吃药。", "希望你很快就能恢___。"], answer: "状 / 时 / 复" }],
      [{ question: "Câu nào dùng 只要...就... đúng?", options: ["A. 只要按时吃药，就会恢复。", "B. 只要就按时吃药恢复。", "C. 按时吃药只要恢复就。"], answer: "A. 只要按时吃药，就会恢复。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 这些症状已经影响工作了吗？", "B: ____________", "A: 那你一定要多休息。"], answer: "B: 有一点儿，不过医生说只要按时吃药，多休息，很快就会恢复。" }],
      "Tự kiểm tra: bạn có thể mô tả rõ triệu chứng của mình và nói bác sĩ khuyên làm gì không?"
    ),
    summary: "Bài này giúp bạn mô tả vấn đề sức khỏe rõ hơn và nói về nguyên nhân, ảnh hưởng cũng như cách hồi phục.",
    quickSummary: {
      words: ["症状", "严重", "休息", "按时", "影响", "恢复"],
      patterns: ["而且晚上总是睡不好。", "只要按时吃药，就会恢复。"],
      reminder: "只要...就... rất hữu ích khi bạn muốn nói điều kiện đủ để đạt một kết quả tích cực."
    }
  }
);

hsk3Course.lessons.push(
  {
    id: "hsk3-lesson-4",
    number: 4,
    title: "Bài 4: Đi du lịch và hỏi thông tin đường đi",
    objective: "Mô tả kế hoạch đi lại, hỏi thông tin ở ga hoặc bến xe và xử lý thay đổi nhỏ trong hành trình.",
    vocabulary: [
      vocab("出发", "chūfā", "xuất phát", "động từ", "Dùng khi bắt đầu một chuyến đi.", "我们明天早上七点出发。", "Wǒmen míngtiān zǎoshang qī diǎn chūfā.", "Chúng tôi xuất phát lúc 7 giờ sáng mai."),
      vocab("到达", "dàodá", "đến nơi", "động từ", "Trang trọng hơn 到, hay gặp trong thông báo.", "火车下午两点到达。", "Huǒchē xiàwǔ liǎng diǎn dàodá.", "Tàu đến nơi lúc 2 giờ chiều."),
      vocab("换", "huàn", "đổi; chuyển", "động từ", "Dùng khi đổi tàu, đổi xe, đổi vé.", "我们要在上海换车。", "Wǒmen yào zài Shànghǎi huànchē.", "Chúng tôi phải đổi xe ở Thượng Hải."),
      vocab("路线", "lùxiàn", "tuyến đường", "danh từ", "Dùng khi nói đường đi hoặc phương án đi lại.", "这条路线比较快。", "Zhè tiáo lùxiàn bǐjiào kuài.", "Tuyến đường này khá nhanh."),
      vocab("顺利", "shùnlì", "thuận lợi", "tính từ", "Dùng khi chuyến đi hoặc công việc diễn ra tốt.", "希望你们一路顺利。", "Xīwàng nǐmen yílù shùnlì.", "Hy vọng chuyến đi của các bạn thuận lợi."),
      vocab("麻烦", "máfan", "phiền; rắc rối", "tính từ/danh từ", "Dùng khi gặp vấn đề trong đi lại.", "如果下雨，路上会比较麻烦。", "Rúguǒ xiàyǔ, lùshang huì bǐjiào máfan.", "Nếu trời mưa, đi đường sẽ khá phiền.")
    ],
    dialogue: [
      study("A: 你们这次旅行打算怎么走？", "A: Nǐmen zhè cì lǚxíng dǎsuan zěnme zǒu?", "A: Chuyến đi lần này các bạn dự định đi thế nào?"),
      study("B: 我们明天早上先坐高铁，到上海以后再换车。", "B: Wǒmen míngtiān zǎoshang xiān zuò gāotiě, dào Shànghǎi yǐhòu zài huànchē.", "B: Sáng mai chúng tôi đi tàu cao tốc trước, sau khi đến Thượng Hải sẽ đổi xe."),
      study("A: 这条路线会不会太麻烦？", "A: Zhè tiáo lùxiàn huì bu huì tài máfan?", "A: Tuyến đường này có quá phiền không?"),
      study("B: 不会，虽然时间长一点儿，但是比较顺利。", "B: Bú huì, suīrán shíjiān cháng yìdiǎnr, dànshì bǐjiào shùnlì.", "B: Không đâu, tuy thời gian dài hơn một chút nhưng khá thuận lợi.")
    ],
    grammarNotes: [
      grammarNote("1. 虽然...，但是...", "Mẫu này dùng để nêu một điểm bất lợi trước, rồi đưa ra kết luận hoặc nhận xét quan trọng hơn ở sau.", study("虽然时间长一点儿，但是比较顺利。", "Suīrán shíjiān cháng yìdiǎnr, dànshì bǐjiào shùnlì.", "Tuy thời gian dài hơn một chút nhưng khá thuận lợi."), [
        study("虽然有点儿贵，但是很方便。", "Suīrán yǒudiǎnr guì, dànshì hěn fāngbiàn.", "Tuy hơi đắt nhưng rất tiện."),
        study("虽然我很累，但是还是想去。", "Suīrán wǒ hěn lèi, dànshì háishi xiǎng qù.", "Tuy tôi rất mệt nhưng vẫn muốn đi.")
      ]),
      grammarNote("2. 会不会 + tính từ / động từ", "会不会 dùng để hỏi khả năng hoặc lo lắng nhẹ về một tình huống trong tương lai gần.", study("这条路线会不会太麻烦？", "Zhè tiáo lùxiàn huì bu huì tài máfan?", "Tuyến đường này có quá phiền không?"), [
        study("明天会不会下雨？", "Míngtiān huì bu huì xiàyǔ?", "Ngày mai có mưa không?"),
        study("现在去会不会太晚？", "Xiànzài qù huì bu huì tài wǎn?", "Bây giờ đi có quá muộn không?")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa phù hợp.", prompt: ["1. 出发", "2. 换", "3. 顺利"], options: ["a. đổi; chuyển", "b. thuận lợi", "c. xuất phát"], answer: "1-c, 2-a, 3-b" }],
      [{ question: "Điền từ còn thiếu.", prompt: ["我们明天早上七点___发。", "到上海以后再___车。", "希望你们一路顺___。"], answer: "出 / 换 / 利" }],
      [{ question: "Câu nào dùng 虽然...但是... đúng?", options: ["A. 虽然时间长一点儿，但是比较顺利。", "B. 虽然比较顺利，但是时间长一点儿。", "C. 虽然但是时间长一点儿。"], answer: "A. 虽然时间长一点儿，但是比较顺利。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 你们这次旅行打算怎么走？", "B: ____________", "A: 这条路线会不会太麻烦？"], answer: "B: 我们明天早上先坐高铁，到上海以后再换车。" }],
      "Tự kiểm tra: bạn có thể mô tả một hành trình ngắn và nói ưu, nhược điểm của tuyến đi đó không?"
    ),
    summary: "Bài này giúp bạn mô tả việc đi lại và hỏi về kế hoạch di chuyển ở mức chi tiết hơn HSK 2.",
    quickSummary: {
      words: ["出发", "到达", "换", "路线", "顺利", "麻烦"],
      patterns: ["虽然时间长一点儿，但是比较顺利。", "这条路线会不会太麻烦？"],
      reminder: "虽然...但是... rất hữu ích khi cần cân nhắc ưu và nhược điểm của một phương án."
    }
  },
  {
    id: "hsk3-lesson-5",
    number: 5,
    title: "Bài 5: Sắp xếp kế hoạch và thay đổi lịch hẹn",
    objective: "Lên kế hoạch chi tiết hơn, thương lượng thay đổi giờ hẹn và giải thích lý do.",
    vocabulary: [
      vocab("原来", "yuánlái", "ban đầu; hóa ra", "phó từ", "Dùng khi nói kế hoạch cũ hoặc nhận ra điều gì đó.", "我们原来打算星期六出发。", "Wǒmen yuánlái dǎsuan xīngqīliù chūfā.", "Ban đầu chúng tôi dự định xuất phát vào thứ Bảy."),
      vocab("改", "gǎi", "đổi; sửa", "động từ", "Dùng khi thay đổi thời gian, kế hoạch.", "我们得改一下时间。", "Wǒmen děi gǎi yíxià shíjiān.", "Chúng tôi phải đổi lại thời gian một chút."),
      vocab("联系", "liánxì", "liên lạc", "động từ", "Dùng khi giữ liên lạc để xác nhận kế hoạch.", "到时候我再联系你。", "Dào shíhou wǒ zài liánxì nǐ.", "Đến lúc đó tôi sẽ liên lạc lại với bạn."),
      vocab("临时", "línshí", "đột xuất; tạm thời", "tính từ/phó từ", "Dùng khi có thay đổi gấp.", "今天下午公司临时开会。", "Jīntiān xiàwǔ gōngsī línshí kāihuì.", "Chiều nay công ty đột xuất họp."),
      vocab("合适", "héshì", "phù hợp", "tính từ", "Dùng để nói một lựa chọn vừa và thuận tiện.", "如果你不忙，星期天更合适。", "Rúguǒ nǐ bù máng, xīngqītiān gèng héshì.", "Nếu bạn không bận, Chủ nhật sẽ phù hợp hơn."),
      vocab("确认", "quèrèn", "xác nhận", "động từ", "Dùng khi chốt lại thông tin.", "我晚上再跟你确认一下。", "Wǒ wǎnshang zài gēn nǐ quèrèn yíxià.", "Tối tôi sẽ xác nhận lại với bạn một chút.")
    ],
    dialogue: [
      study("A: 我们原来不是说好星期六见面吗？", "A: Wǒmen yuánlái bú shì shuō hǎo xīngqīliù jiànmiàn ma?", "A: Ban đầu chúng ta không phải đã thống nhất gặp vào thứ Bảy sao?"),
      study("B: 对，不过我下午临时要开会，所以得改一下时间。", "B: Duì, búguò wǒ xiàwǔ línshí yào kāihuì, suǒyǐ děi gǎi yíxià shíjiān.", "B: Đúng, nhưng chiều tôi đột xuất phải họp nên phải đổi lại thời gian một chút."),
      study("A: 那改到星期天怎么样？", "A: Nà gǎi dào xīngqītiān zěnmeyàng?", "A: Vậy đổi sang Chủ nhật thì sao?"),
      study("B: 可以，如果没别的事情，星期天下午更合适。到时候我再联系你。", "B: Kěyǐ, rúguǒ méi bié de shìqing, xīngqītiān xiàwǔ gèng héshì. Dào shíhou wǒ zài liánxì nǐ.", "B: Được, nếu không có việc gì khác thì chiều Chủ nhật sẽ hợp hơn. Đến lúc đó tôi sẽ liên lạc lại với bạn.")
    ],
    grammarNotes: [
      grammarNote("1. 不是说好...吗？", "Mẫu này dùng để nhắc lại điều hai bên đã thống nhất trước đó, thường mang sắc thái nhắc nhớ nhẹ.", study("我们不是说好星期六见面吗？", "Wǒmen bú shì shuō hǎo xīngqīliù jiànmiàn ma?", "Chúng ta không phải đã nói là sẽ gặp vào thứ Bảy sao?"), [
        study("你不是说好今天来吗？", "Nǐ bú shì shuō hǎo jīntiān lái ma?", "Bạn không phải đã nói là hôm nay sẽ đến sao?"),
        study("我们不是已经确认了吗？", "Wǒmen bú shì yǐjīng quèrèn le ma?", "Chúng ta không phải đã xác nhận rồi sao?")
      ]),
      grammarNote("2. 得 + động từ", "得 trong khẩu ngữ thường có nghĩa là 'phải, cần phải' do hoàn cảnh yêu cầu.", study("我得改一下时间。", "Wǒ děi gǎi yíxià shíjiān.", "Tôi phải đổi lại thời gian một chút."), [
        study("我得先回公司。", "Wǒ děi xiān huí gōngsī.", "Tôi phải quay lại công ty trước."),
        study("你得早点儿休息。", "Nǐ děi zǎodiǎnr xiūxi.", "Bạn phải nghỉ sớm hơn một chút.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa phù hợp.", prompt: ["1. 原来", "2. 临时", "3. 确认"], options: ["a. xác nhận", "b. ban đầu", "c. đột xuất"], answer: "1-b, 2-c, 3-a" }],
      [{ question: "Điền từ thích hợp.", prompt: ["我们原来打___星期六出发。", "今天下午临___开会。", "我晚上再跟你确___一下。"], answer: "算 / 时 / 认" }],
      [{ question: "Câu nào dùng 得 đúng?", options: ["A. 我得改一下时间。", "B. 我改得一下时间。", "C. 我得时间改。"], answer: "A. 我得改一下时间。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 我们原来不是说好星期六见面吗？", "B: ____________", "A: 那改到星期天怎么样？"], answer: "B: 对，不过我下午临时要开会，所以得改一下时间。" }],
      "Tự kiểm tra: bạn có thể đổi lịch hẹn với người khác và giải thích lý do một cách lịch sự không?"
    ),
    summary: "Bài này giúp bạn thương lượng thay đổi kế hoạch và xác nhận lại lịch hẹn ở mức tự nhiên hơn.",
    quickSummary: {
      words: ["原来", "改", "联系", "临时", "合适", "确认"],
      patterns: ["我们不是说好星期六见面吗？", "我得改一下时间。"],
      reminder: "得 trong khẩu ngữ thường diễn tả việc phải làm do tình huống, rất hữu ích khi đổi kế hoạch."
    }
  },
  {
    id: "hsk3-lesson-6",
    number: 6,
    title: "Bài 6: Kể trải nghiệm và việc đã từng làm",
    objective: "Nói về trải nghiệm cá nhân, điều đã từng thử và cảm nhận sau trải nghiệm đó.",
    vocabulary: [
      vocab("经历", "jīnglì", "trải nghiệm", "danh từ/động từ", "Dùng để nói những điều bản thân từng trải qua.", "这次旅行是一次特别的经历。", "Zhè cì lǚxíng shì yí cì tèbié de jīnglì.", "Chuyến đi này là một trải nghiệm đặc biệt."),
      vocab("尝试", "chángshì", "thử", "động từ/danh từ", "Dùng khi nói việc thử điều mới.", "我想尝试一下当地的小吃。", "Wǒ xiǎng chángshì yíxià dāngdì de xiǎochī.", "Tôi muốn thử món ăn vặt địa phương một chút."),
      vocab("印象", "yìnxiàng", "ấn tượng", "danh từ", "Dùng khi đánh giá sau một chuyến đi hoặc sự kiện.", "那个地方给我留下了很深的印象。", "Nàge dìfang gěi wǒ liúxià le hěn shēn de yìnxiàng.", "Nơi đó để lại cho tôi ấn tượng rất sâu."),
      vocab("特别", "tèbié", "đặc biệt", "tính từ/phó từ", "Dùng để nhấn mạnh cảm xúc hoặc đặc điểm.", "我特别喜欢那个城市。", "Wǒ tèbié xǐhuan nàge chéngshì.", "Tôi đặc biệt thích thành phố đó."),
      vocab("后来", "hòulái", "sau đó", "phó từ", "Dùng để kể tiếp diễn biến câu chuyện.", "后来我们又去了一个博物馆。", "Hòulái wǒmen yòu qù le yí ge bówùguǎn.", "Sau đó chúng tôi lại đi đến một bảo tàng."),
      vocab("结果", "jiéguǒ", "kết quả", "danh từ/phó từ", "Dùng để chuyển sang phần kết quả cuối cùng.", "结果大家都很满意。", "Jiéguǒ dàjiā dōu hěn mǎnyì.", "Kết quả là mọi người đều rất hài lòng.")
    ],
    dialogue: [
      study("A: 你上个月去北京玩儿得怎么样？", "A: Nǐ shàng ge yuè qù Běijīng wánr de zěnmeyàng?", "A: Tháng trước bạn đi Bắc Kinh chơi thế nào?"),
      study("B: 很不错。这是我第一次一个人去旅行，所以印象特别深。", "B: Hěn búcuò. Zhè shì wǒ dì-yī cì yí ge rén qù lǚxíng, suǒyǐ yìnxiàng tèbié shēn.", "B: Rất tốt. Đây là lần đầu tiên tôi đi du lịch một mình nên ấn tượng đặc biệt sâu."),
      study("A: 你在那边都尝试了什么？", "A: Nǐ zài nàbian dōu chángshì le shénme?", "A: Ở đó bạn đã thử những gì?"),
      study("B: 我尝试了很多当地小吃，后来还认识了几个新朋友。", "B: Wǒ chángshì le hěnduō dāngdì xiǎochī, hòulái hái rènshi le jǐ ge xīn péngyou.", "B: Tôi đã thử nhiều món ăn địa phương, sau đó còn quen thêm vài người bạn mới.")
    ],
    grammarNotes: [
      grammarNote("1. 第一次 + động từ", "Mẫu này dùng để nhấn mạnh đây là lần đầu xảy ra một trải nghiệm nào đó.", study("这是我第一次一个人去旅行。", "Zhè shì wǒ dì-yī cì yí ge rén qù lǚxíng.", "Đây là lần đầu tiên tôi đi du lịch một mình."), [
        study("这是我第一次坐飞机。", "Zhè shì wǒ dì-yī cì zuò fēijī.", "Đây là lần đầu tiên tôi đi máy bay."),
        study("这是她第一次参加比赛。", "Zhè shì tā dì-yī cì cānjiā bǐsài.", "Đây là lần đầu cô ấy tham gia cuộc thi.")
      ]),
      grammarNote("2. ...了..., 后来...", "Khi kể trải nghiệm, có thể dùng động từ + 了 để nói việc đã xảy ra, sau đó dùng 后来 để kể tiếp diễn biến.", study("我尝试了很多当地小吃，后来还认识了几个新朋友。", "Wǒ chángshì le hěnduō dāngdì xiǎochī, hòulái hái rènshi le jǐ ge xīn péngyou.", "Tôi đã thử nhiều món ăn địa phương, sau đó còn quen thêm vài người bạn mới."), [
        study("我们先去了公园，后来又去看电影。", "Wǒmen xiān qù le gōngyuán, hòulái yòu qù kàn diànyǐng.", "Chúng tôi đi công viên trước, sau đó lại đi xem phim."),
        study("他先问了老师，后来自己明白了。", "Tā xiān wèn le lǎoshī, hòulái zìjǐ míngbai le.", "Anh ấy hỏi thầy/cô trước, sau đó tự mình hiểu ra.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 经历", "2. 印象", "3. 结果"], options: ["a. ấn tượng", "b. trải nghiệm", "c. kết quả"], answer: "1-b, 2-a, 3-c" }],
      [{ question: "Điền từ phù hợp.", prompt: ["这是我第___次一个人去旅行。", "那个地方给我留下了很深的印___。", "后___我们又去了一个博物馆。"], answer: "一 / 象 / 来" }],
      [{ question: "Câu nào nói đây là lần đầu tiên?", options: ["A. 这是我第一次坐飞机。", "B. 我昨天坐飞机。", "C. 我很喜欢飞机。"], answer: "A. 这是我第一次坐飞机。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 你上个月去北京玩儿得怎么样？", "B: ____________", "A: 你在那边都尝试了什么？"], answer: "B: 很不错。这是我第一次一个人去旅行，所以印象特别深。" }],
      "Tự kiểm tra: bạn có thể kể một trải nghiệm gần đây của mình bằng 3 câu ngắn không?"
    ),
    summary: "Bài này giúp bạn kể trải nghiệm cá nhân tự nhiên hơn và sắp xếp diễn biến câu chuyện rõ ràng.",
    quickSummary: {
      words: ["经历", "尝试", "印象", "特别", "后来", "结果"],
      patterns: ["这是我第一次一个人去旅行。", "后来我们又去了一个博物馆。"],
      reminder: "Khi kể trải nghiệm, hãy nói mốc mở đầu trước rồi dùng 后来 để triển khai tiếp."
    }
  }
);

hsk3Course.lessons.push(
  {
    id: "hsk3-lesson-11",
    number: 11,
    title: "Bài 11: Học tập và thi cử",
    objective: "Nói về việc chuẩn bị thi, áp lực học tập và kế hoạch ôn tập hiệu quả hơn.",
    vocabulary: [
      vocab("考试", "kǎoshì", "kỳ thi; thi", "danh từ/động từ", "Dùng khi nói về việc kiểm tra hoặc thi chính thức.", "下周我们有一次很重要的考试。", "Xià zhōu wǒmen yǒu yí cì hěn zhòngyào de kǎoshì.", "Tuần sau chúng tôi có một kỳ thi rất quan trọng."),
      vocab("成绩", "chéngjì", "thành tích; điểm số", "danh từ", "Dùng khi nói kết quả học tập.", "这次考试的成绩比上次好一点儿。", "Zhè cì kǎoshì de chéngjì bǐ shàng cì hǎo yìdiǎnr.", "Điểm thi lần này tốt hơn lần trước một chút."),
      vocab("进步", "jìnbù", "tiến bộ", "động từ/danh từ", "Dùng để nói sự cải thiện trong học tập.", "只要坚持练习，就一定会有进步。", "Zhǐyào jiānchí liànxí, jiù yídìng huì yǒu jìnbù.", "Chỉ cần kiên trì luyện tập thì nhất định sẽ có tiến bộ."),
      vocab("复习", "fùxí", "ôn tập", "động từ", "Dùng khi chuẩn bị trước bài kiểm tra.", "我打算今天晚上先复习语法。", "Wǒ dǎsuan jīntiān wǎnshang xiān fùxí yǔfǎ.", "Tôi dự định tối nay ôn ngữ pháp trước."),
      vocab("压力", "yālì", "áp lực", "danh từ", "Dùng khi nói cảm giác căng thẳng trong học tập hoặc công việc.", "最近学习压力有点儿大。", "Zuìjìn xuéxí yālì yǒudiǎnr dà.", "Gần đây áp lực học tập hơi lớn."),
      vocab("方法", "fāngfǎ", "phương pháp", "danh từ", "Dùng khi nói cách học hoặc cách làm việc hiệu quả.", "我觉得这个学习方法很适合我。", "Wǒ juéde zhège xuéxí fāngfǎ hěn shìhé wǒ.", "Tôi thấy phương pháp học này rất phù hợp với mình.")
    ],
    dialogue: [
      study("A: 下周就要考试了，你最近复习得怎么样？", "A: Xià zhōu jiù yào kǎoshì le, nǐ zuìjìn fùxí de zěnmeyàng?", "A: Tuần sau là thi rồi, dạo này bạn ôn tập thế nào?"),
      study("B: 还可以，不过学习压力有点儿大。", "B: Hái kěyǐ, búguò xuéxí yālì yǒudiǎnr dà.", "B: Cũng được, nhưng áp lực học tập hơi lớn."),
      study("A: 你现在最担心什么？", "A: Nǐ xiànzài zuì dānxīn shénme?", "A: Hiện giờ bạn lo nhất điều gì?"),
      study("B: 我最担心听力部分，因为我觉得自己的反应还不够快。", "B: Wǒ zuì dānxīn tīnglì bùfen, yīnwèi wǒ juéde zìjǐ de fǎnyìng hái bú gòu kuài.", "B: Tôi lo nhất phần nghe, vì tôi thấy phản ứng của mình vẫn chưa đủ nhanh.")
    ],
    grammarNotes: [
      grammarNote("1. 越...越...", "Mẫu này dùng để nói hai sự thay đổi cùng tăng hoặc cùng giảm theo nhau.", study("我越复习越有信心。", "Wǒ yuè fùxí yuè yǒu xìnxīn.", "Tôi càng ôn tập càng có tự tin."), [
        study("天气越热，我越想喝水。", "Tiānqì yuè rè, wǒ yuè xiǎng hē shuǐ.", "Càng nóng tôi càng muốn uống nước."),
        study("他越练习，发音越标准。", "Tā yuè liànxí, fāyīn yuè biāozhǔn.", "Anh ấy càng luyện tập thì phát âm càng chuẩn.")
      ]),
      grammarNote("2. 还不够 + tính từ / động từ", "Dùng để nói mức độ hiện tại vẫn chưa đạt yêu cầu mong muốn.", study("我的反应还不够快。", "Wǒ de fǎnyìng hái bú gòu kuài.", "Phản ứng của tôi vẫn chưa đủ nhanh."), [
        study("这个解释还不够清楚。", "Zhège jiěshì hái bú gòu qīngchu.", "Lời giải thích này vẫn chưa đủ rõ."),
        study("我们准备得还不够。", "Wǒmen zhǔnbèi de hái bú gòu.", "Chúng tôi vẫn chuẩn bị chưa đủ.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 考试", "2. 成绩", "3. 压力"], options: ["a. áp lực", "b. điểm số", "c. kỳ thi"], answer: "1-c, 2-b, 3-a" }],
      [{ question: "Điền từ thích hợp.", prompt: ["下周我们有一次很重要的考___。", "最近学习压___有点儿大。", "这个学习方___很适合我。"], answer: "试 / 力 / 法" }],
      [{ question: "Câu nào dùng 越...越... đúng?", options: ["A. 我越复习越有信心。", "B. 我越有信心复习越。", "C. 我复习越越有信心。"], answer: "A. 我越复习越有信心。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 下周就要考试了，你最近复习得怎么样？", "B: ____________", "A: 你现在最担心什么？"], answer: "B: 还可以，不过学习压力有点儿大。" }],
      "Tự kiểm tra: bạn có thể nói điều mình lo nhất trước kỳ thi và giải thích vì sao không?"
    ),
    summary: "Bài này giúp bạn nói về thi cử, áp lực học tập và cách tự đánh giá việc ôn tập rõ hơn.",
    quickSummary: {
      words: ["考试", "成绩", "进步", "复习", "压力", "方法"],
      patterns: ["我越复习越有信心。", "我的反应还不够快。"],
      reminder: "越...越... rất hữu ích khi nói sự thay đổi dần trong quá trình học tập."
    }
  },
  {
    id: "hsk3-lesson-12",
    number: 12,
    title: "Bài 12: Đi làm và trao đổi nhiệm vụ",
    objective: "Nói về nhiệm vụ công việc, phân chia việc cần làm và tiến độ hoàn thành.",
    vocabulary: [
      vocab("任务", "rènwu", "nhiệm vụ", "danh từ", "Dùng để nói phần việc cần hoàn thành.", "今天我的任务比较多。", "Jīntiān wǒ de rènwu bǐjiào duō.", "Hôm nay nhiệm vụ của tôi khá nhiều."),
      vocab("负责", "fùzé", "phụ trách", "động từ/tính từ", "Dùng khi phân công ai lo phần nào.", "我负责准备会议材料。", "Wǒ fùzé zhǔnbèi huìyì cáiliào.", "Tôi phụ trách chuẩn bị tài liệu họp."),
      vocab("进度", "jìndù", "tiến độ", "danh từ", "Dùng khi nói công việc đang tới đâu.", "这个项目的进度怎么样？", "Zhège xiàngmù de jìndù zěnmeyàng?", "Tiến độ của dự án này thế nào?"),
      vocab("提前", "tíqián", "trước thời hạn", "phó từ/động từ", "Dùng khi làm sớm hơn kế hoạch.", "如果可以，我们最好提前完成。", "Rúguǒ kěyǐ, wǒmen zuìhǎo tíqián wánchéng.", "Nếu có thể, tốt nhất là chúng ta hoàn thành sớm hơn."),
      vocab("合作", "hézuò", "hợp tác", "động từ/danh từ", "Dùng trong làm việc nhóm.", "这次合作比我们想的更顺利。", "Zhè cì hézuò bǐ wǒmen xiǎng de gèng shùnlì.", "Lần hợp tác này thuận lợi hơn chúng tôi nghĩ."),
      vocab("提醒", "tíxǐng", "nhắc nhở", "động từ", "Dùng khi cần nhắc ai về thời gian hoặc việc cần làm.", "谢谢你提醒我别忘了开会。", "Xièxie nǐ tíxǐng wǒ bié wàng le kāihuì.", "Cảm ơn bạn đã nhắc tôi đừng quên cuộc họp.")
    ],
    dialogue: [
      study("A: 今天下午的任务你都安排好了吗？", "A: Jīntiān xiàwǔ de rènwu nǐ dōu ānpái hǎo le ma?", "A: Nhiệm vụ chiều nay bạn đã sắp xếp xong hết chưa?"),
      study("B: 差不多了，我负责准备材料，他负责联系客户。", "B: Chàbuduō le, wǒ fùzé zhǔnbèi cáiliào, tā fùzé liánxì kèhù.", "B: Gần xong rồi, tôi phụ trách chuẩn bị tài liệu, anh ấy phụ trách liên lạc khách hàng."),
      study("A: 这个进度比昨天快多了。", "A: Zhège jìndù bǐ zuótiān kuài duō le.", "A: Tiến độ này nhanh hơn hôm qua nhiều."),
      study("B: 对，如果没有别的问题，我们应该能提前完成。", "B: Duì, rúguǒ méiyǒu bié de wèntí, wǒmen yīnggāi néng tíqián wánchéng.", "B: Đúng vậy, nếu không có vấn đề gì khác, chúng tôi chắc có thể hoàn thành sớm.")
    ],
    grammarNotes: [
      grammarNote("1. 差不多", "差不多 dùng để nói gần hoàn thành, gần đúng hoặc gần đạt mức mong muốn.", study("差不多了。", "Chàbuduō le.", "Gần xong rồi."), [
        study("我们准备得差不多了。", "Wǒmen zhǔnbèi de chàbuduō le.", "Chúng tôi chuẩn bị gần xong rồi."),
        study("现在快到时间了，差不多该出发了。", "Xiànzài kuài dào shíjiān le, chàbuduō gāi chūfā le.", "Bây giờ gần đến giờ rồi, gần như nên xuất phát thôi.")
      ]),
      grammarNote("2. 比... + tính từ + 多了 / 一点儿", "HSK 3 bắt đầu dùng so sánh linh hoạt hơn để nhấn mạnh mức chênh lệch.", study("这个进度比昨天快多了。", "Zhège jìndù bǐ zuótiān kuài duō le.", "Tiến độ này nhanh hơn hôm qua nhiều."), [
        study("今天的工作比昨天轻松一点儿。", "Jīntiān de gōngzuò bǐ zuótiān qīngsōng yìdiǎnr.", "Công việc hôm nay nhẹ hơn hôm qua một chút."),
        study("这个方法比原来的简单多了。", "Zhège fāngfǎ bǐ yuánlái de jiǎndān duō le.", "Cách này đơn giản hơn cách cũ nhiều.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa phù hợp.", prompt: ["1. 任务", "2. 进度", "3. 提醒"], options: ["a. nhắc nhở", "b. nhiệm vụ", "c. tiến độ"], answer: "1-b, 2-c, 3-a" }],
      [{ question: "Điền từ thích hợp.", prompt: ["我负___准备会议材料。", "这个项___的进度怎么样？", "谢谢你提___我别忘了开会。"], answer: "责 / 目 / 醒" }],
      [{ question: "Câu nào dùng 差不多 đúng?", options: ["A. 差不多了。", "B. 多差不了。", "C. 差不多准备。"], answer: "A. 差不多了。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 今天下午的任务你都安排好了吗？", "B: ____________", "A: 这个进度比昨天快多了。"], answer: "B: 差不多了，我负责准备材料。" }],
      "Tự kiểm tra: bạn có thể nói mình phụ trách phần nào và đánh giá tiến độ công việc bằng một câu so sánh không?"
    ),
    summary: "Bài này giúp bạn trao đổi công việc cụ thể hơn và đánh giá tiến độ bằng cách nói tự nhiên, ngắn gọn.",
    quickSummary: {
      words: ["任务", "负责", "进度", "提前", "合作", "提醒"],
      patterns: ["差不多了。", "这个进度比昨天快多了。"],
      reminder: "比...多了 giúp câu so sánh rõ mức chênh lệch hơn so với chỉ dùng 比 thông thường."
    }
  },
  {
    id: "hsk3-lesson-13",
    number: 13,
    title: "Bài 13: Chuyến đi và giải quyết sự cố",
    objective: "Mô tả sự cố nhỏ trong chuyến đi, tìm cách xử lý và xin giúp đỡ khi cần.",
    vocabulary: [
      vocab("丢", "diū", "làm mất", "động từ", "Dùng khi nói mất đồ trong chuyến đi hoặc hằng ngày.", "我好像把车票丢了。", "Wǒ hǎoxiàng bǎ chēpiào diū le.", "Hình như tôi đã làm mất vé xe rồi."),
      vocab("护照", "hùzhào", "hộ chiếu", "danh từ", "Từ quen thuộc trong chủ đề du lịch quốc tế.", "出国的时候一定要带好护照。", "Chūguó de shíhou yídìng yào dài hǎo hùzhào.", "Khi ra nước ngoài nhất định phải mang theo hộ chiếu cẩn thận."),
      vocab("着急", "zháojí", "sốt ruột", "tính từ/động từ", "Dùng khi gặp vấn đề cần xử lý nhanh.", "别着急，我们先想办法。", "Bié zháojí, wǒmen xiān xiǎng bànfǎ.", "Đừng sốt ruột, chúng ta cùng nghĩ cách trước."),
      vocab("检查", "jiǎnchá", "kiểm tra", "động từ", "Dùng khi rà soát đồ đạc hoặc tình huống.", "你先检查一下包里还有什么。", "Nǐ xiān jiǎnchá yíxià bāo lǐ hái yǒu shénme.", "Bạn hãy kiểm tra xem trong túi vẫn còn gì trước."),
      vocab("联系", "liánxì", "liên lạc", "động từ", "Dùng khi cần gọi hoặc nhắn để nhờ giúp.", "我马上联系车站工作人员。", "Wǒ mǎshàng liánxì chēzhàn gōngzuò rényuán.", "Tôi sẽ liên lạc nhân viên nhà ga ngay."),
      vocab("终于", "zhōngyú", "cuối cùng thì", "phó từ", "Dùng khi vấn đề sau một lúc đã được giải quyết.", "我们终于找到了。", "Wǒmen zhōngyú zhǎodào le.", "Cuối cùng chúng tôi cũng tìm thấy rồi.")
    ],
    dialogue: [
      study("A: 怎么了？你怎么看起来这么着急？", "A: Zěnme le? Nǐ zěnme kànqilai zhème zháojí?", "A: Sao vậy? Sao trông bạn sốt ruột thế?"),
      study("B: 我好像把车票丢了，刚才找了半天也没找到。", "B: Wǒ hǎoxiàng bǎ chēpiào diū le, gāngcái zhǎo le bàntiān yě méi zhǎodào.", "B: Hình như tôi làm mất vé xe rồi, vừa nãy tìm mãi mà vẫn không thấy."),
      study("A: 你先别着急，检查一下包里和外套口袋。", "A: Nǐ xiān bié zháojí, jiǎnchá yíxià bāo lǐ hé wàitào kǒudai.", "A: Bạn đừng vội, kiểm tra túi và túi áo khoác trước đã."),
      study("B: 找到了！原来在这里，真是吓我一跳。", "B: Zhǎodào le! Yuánlái zài zhèlǐ, zhēn shì xià wǒ yí tiào.", "B: Tìm thấy rồi! Hóa ra ở đây, thật sự làm tôi giật cả mình.")
    ],
    grammarNotes: [
      grammarNote("1. 把 + đồ vật + động từ + 了", "Mẫu này rất hay dùng khi nói ai đó đã làm gì với một vật cụ thể, đặc biệt trong tình huống phát sinh vấn đề.", study("我把车票丢了。", "Wǒ bǎ chēpiào diū le.", "Tôi đã làm mất vé xe."), [
        study("他把手机忘在办公室了。", "Tā bǎ shǒujī wàng zài bàngōngshì le.", "Anh ấy để quên điện thoại ở văn phòng."),
        study("我把地址写错了。", "Wǒ bǎ dìzhǐ xiě cuò le.", "Tôi đã viết sai địa chỉ.")
      ]),
      grammarNote("2. 找了半天 / 想了半天", "Mẫu này diễn tả đã làm một việc khá lâu nhưng kết quả chưa chắc thành công ngay.", study("我找了半天也没找到。", "Wǒ zhǎo le bàntiān yě méi zhǎodào.", "Tôi tìm mãi mà vẫn không thấy."), [
        study("我想了半天，还是没明白。", "Wǒ xiǎng le bàntiān, háishi méi míngbai.", "Tôi nghĩ mãi mà vẫn chưa hiểu."),
        study("他看了半天，才看懂这封邮件。", "Tā kàn le bàntiān, cái kàndǒng zhè fēng yóujiàn.", "Anh ấy đọc khá lâu rồi mới hiểu bức email này.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 丢", "2. 护照", "3. 检查"], options: ["a. hộ chiếu", "b. kiểm tra", "c. làm mất"], answer: "1-c, 2-a, 3-b" }],
      [{ question: "Điền từ phù hợp.", prompt: ["我好像把车票___了。", "你先检___一下包里。", "我们终___找到了。"], answer: "丢 / 查 / 于" }],
      [{ question: "Câu nào dùng 把 đúng?", options: ["A. 我把车票丢了。", "B. 我车票把丢了。", "C. 把我车票丢了。"], answer: "A. 我把车票丢了。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 怎么了？", "B: ____________", "A: 你先别着急，检查一下包里。"], answer: "B: 我好像把车票丢了。" }],
      "Tự kiểm tra: bạn có thể mô tả một sự cố nhỏ trong chuyến đi và nói cách xử lý đầu tiên không?"
    ),
    summary: "Bài này giúp bạn nói rõ vấn đề phát sinh trong chuyến đi và phản ứng một cách bình tĩnh, hợp lý hơn.",
    quickSummary: {
      words: ["丢", "护照", "着急", "检查", "联系", "终于"],
      patterns: ["我把车票丢了。", "我找了半天也没找到。"],
      reminder: "把 rất hữu ích khi mô tả sự cố xảy ra với một đồ vật cụ thể."
    }
  },
  {
    id: "hsk3-lesson-14",
    number: 14,
    title: "Bài 14: Mua sắm thông minh và so sánh lựa chọn",
    objective: "So sánh sản phẩm, đánh giá ưu nhược điểm và giải thích vì sao chọn một phương án.",
    vocabulary: [
      vocab("价格", "jiàgé", "giá cả", "danh từ", "Dùng khi so sánh đồ vật hoặc dịch vụ.", "这个价格我觉得还可以接受。", "Zhège jiàgé wǒ juéde hái kěyǐ jiēshòu.", "Tôi thấy mức giá này vẫn có thể chấp nhận."),
      vocab("质量", "zhìliàng", "chất lượng", "danh từ", "Dùng khi đánh giá món hàng.", "虽然价格高一点儿，但是质量更好。", "Suīrán jiàgé gāo yìdiǎnr, dànshì zhìliàng gèng hǎo.", "Tuy giá cao hơn một chút nhưng chất lượng tốt hơn."),
      vocab("值得", "zhídé", "đáng", "động từ", "Dùng để nói một thứ đáng mua hay đáng thử.", "我觉得这本书很值得买。", "Wǒ juéde zhè běn shū hěn zhídé mǎi.", "Tôi thấy quyển sách này rất đáng mua."),
      vocab("便宜", "piányi", "rẻ", "tính từ", "Dùng tiếp ở mức so sánh rõ hơn.", "这家店比较便宜。", "Zhè jiā diàn bǐjiào piányi.", "Cửa hàng này khá rẻ."),
      vocab("适合", "shìhé", "phù hợp", "động từ/tính từ", "Dùng để nói lựa chọn hợp với nhu cầu.", "这个颜色更适合你。", "Zhège yánsè gèng shìhé nǐ.", "Màu này hợp với bạn hơn."),
      vocab("考虑", "kǎolǜ", "cân nhắc", "động từ", "Dùng khi chưa quyết định ngay.", "我想再考虑一下。", "Wǒ xiǎng zài kǎolǜ yíxià.", "Tôi muốn cân nhắc thêm một chút.")
    ],
    dialogue: [
      study("A: 这两台电脑你更喜欢哪一台？", "A: Zhè liǎng tái diànnǎo nǐ gèng xǐhuan nǎ yì tái?", "A: Hai chiếc máy tính này bạn thích chiếc nào hơn?"),
      study("B: 左边那台虽然贵一点儿，但是质量更好，我觉得更值得买。", "B: Zuǒbian nà tái suīrán guì yìdiǎnr, dànshì zhìliàng gèng hǎo, wǒ juéde gèng zhídé mǎi.", "B: Chiếc bên trái tuy đắt hơn một chút nhưng chất lượng tốt hơn, tôi thấy đáng mua hơn."),
      study("A: 右边那台也不错，而且比较轻。", "A: Yòubian nà tái yě búcuò, érqiě bǐjiào qīng.", "A: Chiếc bên phải cũng không tệ, hơn nữa khá nhẹ."),
      study("B: 对，所以我还想再考虑一下。", "B: Duì, suǒyǐ wǒ hái xiǎng zài kǎolǜ yíxià.", "B: Đúng vậy, nên tôi vẫn muốn cân nhắc thêm một chút.")
    ],
    grammarNotes: [
      grammarNote("1. 更...", "更 dùng để nhấn mạnh mức độ hơn trong so sánh, thường đi với tính từ hoặc động từ thể hiện đánh giá.", study("这个颜色更适合你。", "Zhège yánsè gèng shìhé nǐ.", "Màu này hợp với bạn hơn."), [
        study("这家店更便宜。", "Zhè jiā diàn gèng piányi.", "Cửa hàng này rẻ hơn."),
        study("这个办法更简单。", "Zhège bànfǎ gèng jiǎndān.", "Cách này đơn giản hơn.")
      ]),
      grammarNote("2. 虽然...，但是...", "Tiếp tục rất hữu ích ở HSK 3 khi bạn cân nhắc ưu và nhược điểm của hai lựa chọn.", study("虽然贵一点儿，但是质量更好。", "Suīrán guì yìdiǎnr, dànshì zhìliàng gèng hǎo.", "Tuy đắt hơn một chút nhưng chất lượng tốt hơn."), [
        study("虽然这家店远一点儿，但是服务更好。", "Suīrán zhè jiā diàn yuǎn yìdiǎnr, dànshì fúwù gèng hǎo.", "Tuy cửa hàng này xa hơn một chút nhưng dịch vụ tốt hơn."),
        study("虽然这个颜色很普通，但是很适合你。", "Suīrán zhège yánsè hěn pǔtōng, dànshì hěn shìhé nǐ.", "Tuy màu này khá bình thường nhưng rất hợp với bạn.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa phù hợp.", prompt: ["1. 价格", "2. 值得", "3. 考虑"], options: ["a. giá cả", "b. cân nhắc", "c. đáng"], answer: "1-a, 2-c, 3-b" }],
      [{ question: "Điền từ thích hợp.", prompt: ["虽然价格高一点儿，但是质___更好。", "我觉得这本书很值___买。", "我想再考___一下。"], answer: "量 / 得 / 虑" }],
      [{ question: "Câu nào dùng 更 đúng?", options: ["A. 这个颜色更适合你。", "B. 这个更你适合颜色。", "C. 更这个颜色适合你。"], answer: "A. 这个颜色更适合你。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 这两台电脑你更喜欢哪一台？", "B: ____________", "A: 右边那台也不错。"], answer: "B: 左边那台虽然贵一点儿，但是质量更好。" }],
      "Tự kiểm tra: bạn có thể so sánh hai món đồ và nói rõ vì sao mình vẫn chưa quyết định ngay không?"
    ),
    summary: "Bài này giúp bạn so sánh lựa chọn ở mức tự nhiên hơn và giải thích rõ vì sao một phương án đáng cân nhắc hơn.",
    quickSummary: {
      words: ["价格", "质量", "值得", "便宜", "适合", "考虑"],
      patterns: ["这个颜色更适合你。", "虽然贵一点儿，但是质量更好。"],
      reminder: "Khi cần cân nhắc, dùng 虽然...但是... sẽ giúp bạn trình bày hai mặt của vấn đề rõ ràng hơn."
    }
  },
  {
    id: "hsk3-lesson-15",
    number: 15,
    title: "Bài 15: Tổng hợp giao tiếp HSK 3",
    objective: "Tổng hợp các kỹ năng HSK 3 qua chủ đề sắp xếp kế hoạch, giải thích lý do, xử lý vấn đề và nêu ý kiến.",
    vocabulary: [
      vocab("情况", "qíngkuàng", "tình hình", "danh từ", "Dùng khi tổng kết hoặc giải thích bối cảnh.", "先让我了解一下具体情况。", "Xiān ràng wǒ liǎojiě yíxià jùtǐ qíngkuàng.", "Để tôi hiểu rõ tình hình cụ thể trước đã."),
      vocab("具体", "jùtǐ", "cụ thể", "tính từ", "Dùng khi cần thêm thông tin rõ ràng.", "你能不能说得更具体一点儿？", "Nǐ néng bù néng shuō de gèng jùtǐ yìdiǎnr?", "Bạn có thể nói cụ thể hơn một chút được không?"),
      vocab("建议", "jiànyì", "đề nghị; gợi ý", "danh từ/động từ", "Dùng khi nêu cách giải quyết hoặc đề xuất.", "我有一个建议，大家可以参考一下。", "Wǒ yǒu yí ge jiànyì, dàjiā kěyǐ cānkǎo yíxià.", "Tôi có một đề nghị, mọi người có thể tham khảo một chút."),
      vocab("决定", "juédìng", "quyết định", "động từ/danh từ", "Dùng khi chốt lại sau khi thảo luận.", "我们得早点儿做决定。", "Wǒmen děi zǎodiǎnr zuò juédìng.", "Chúng ta phải ra quyết định sớm hơn một chút."),
      vocab("继续", "jìxù", "tiếp tục", "động từ", "Dùng khi một việc vẫn cần làm tiếp.", "如果没问题，我们就继续。", "Rúguǒ méi wèntí, wǒmen jiù jìxù.", "Nếu không có vấn đề gì, chúng ta sẽ tiếp tục."),
      vocab("总结", "zǒngjié", "tổng kết", "động từ/danh từ", "Dùng để gom lại kết quả hoặc ý chính sau khi trao đổi.", "最后我想简单总结一下。", "Zuìhòu wǒ xiǎng jiǎndān zǒngjié yíxià.", "Cuối cùng tôi muốn tổng kết đơn giản một chút.")
    ],
    dialogue: [
      study("A: 现在的情况比我们原来想的复杂一点儿，你有什么建议？", "A: Xiànzài de qíngkuàng bǐ wǒmen yuánlái xiǎng de fùzá yìdiǎnr, nǐ yǒu shénme jiànyì?", "A: Tình hình hiện tại phức tạp hơn chúng ta nghĩ ban đầu một chút, bạn có đề nghị gì không?"),
      study("B: 我觉得我们应该先把问题分开，一个一个解决。", "B: Wǒ juéde wǒmen yīnggāi xiān bǎ wèntí fēnkāi, yí ge yí ge jiějué.", "B: Tôi nghĩ chúng ta nên tách vấn đề ra trước, rồi giải quyết từng cái một."),
      study("A: 这个办法听起来不错，不过时间够吗？", "A: Zhège bànfǎ tīngqilai búcuò, búguò shíjiān gòu ma?", "A: Cách này nghe có vẻ ổn, nhưng thời gian có đủ không?"),
      study("B: 只要大家合作得好，我想我们今天就能做出决定。", "B: Zhǐyào dàjiā hézuò de hǎo, wǒ xiǎng wǒmen jīntiān jiù néng zuòchū juédìng.", "B: Chỉ cần mọi người phối hợp tốt, tôi nghĩ hôm nay chúng ta có thể đưa ra quyết định.")
    ],
    grammarNotes: [
      grammarNote("1. 一个一个 + động từ", "Mẫu này dùng để nói làm từng việc một theo thứ tự, rất rõ ràng và thực tế.", study("我们一个一个解决。", "Wǒmen yí ge yí ge jiějué.", "Chúng ta giải quyết từng cái một."), [
        study("老师一个一个回答问题。", "Lǎoshī yí ge yí ge huídá wèntí.", "Thầy/cô trả lời từng câu hỏi một."),
        study("你先把材料一个一个整理好。", "Nǐ xiān bǎ cáiliào yí ge yí ge zhěnglǐ hǎo.", "Bạn hãy sắp xếp tài liệu từng phần một trước.")
      ]),
      grammarNote("2. 只要...，就...", "Ở bài tổng hợp này, mẫu này tiếp tục dùng để nói điều kiện đủ khi đưa ra kế hoạch hay dự đoán.", study("只要大家合作得好，我们今天就能做出决定。", "Zhǐyào dàjiā hézuò de hǎo, wǒmen jīntiān jiù néng zuòchū juédìng.", "Chỉ cần mọi người phối hợp tốt thì hôm nay chúng ta có thể đưa ra quyết định."), [
        study("只要安排得合理，时间就够。", "Zhǐyào ānpái de hélǐ, shíjiān jiù gòu.", "Chỉ cần sắp xếp hợp lý thì thời gian sẽ đủ."),
        study("只要方法对了，学习就会轻松一点儿。", "Zhǐyào fāngfǎ duì le, xuéxí jiù huì qīngsōng yìdiǎnr.", "Chỉ cần phương pháp đúng thì việc học sẽ nhẹ nhàng hơn một chút.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa phù hợp.", prompt: ["1. 情况", "2. 建议", "3. 总结"], options: ["a. đề nghị", "b. tình hình", "c. tổng kết"], answer: "1-b, 2-a, 3-c" }],
      [{ question: "Điền từ thích hợp.", prompt: ["先让我了解一下具体情___。", "我有一个建___。", "最后我想简单总___一下。"], answer: "况 / 议 / 结" }],
      [{ question: "Câu nào dùng 一个一个 đúng?", options: ["A. 我们一个一个解决。", "B. 我们解决一个一个。", "C. 一个我们一个解决。"], answer: "A. 我们一个一个解决。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 现在的情况比我们原来想的复杂一点儿，你有什么建议？", "B: ____________", "A: 这个办法听起来不错。"], answer: "B: 我觉得我们应该先把问题分开，一个一个解决。" }],
      "Tự kiểm tra: bạn có thể tóm tắt một tình huống, đưa ra đề nghị và nói điều kiện để kế hoạch thành công không?"
    ),
    summary: "Bài cuối HSK 3 tổng hợp cách trình bày tình huống, đưa ra đề nghị, phân tích kế hoạch và chốt quyết định.",
    quickSummary: {
      words: ["情况", "具体", "建议", "决定", "继续", "总结"],
      patterns: ["我们一个一个解决。", "只要大家合作得好，我们今天就能做出决定。"],
      reminder: "Bài tổng hợp nên ưu tiên diễn đạt rõ tình hình trước, sau đó mới nêu đề nghị và kết luận."
    }
  }
);

hsk3Course.lessons.sort((a, b) => a.number - b.number);

const hsk3OfficialStructure = [
  { number: 1, chinese: "你周末有什么打算？", pinyin: "Nǐ zhōumò yǒu shénme dǎsuan?", vietnamese: "Cuối tuần bạn có dự định gì?", topic: "Kế hoạch cuối tuần và dự định gần" },
  { number: 2, chinese: "他什么时候回来？", pinyin: "Tā shénme shíhou huílai?", vietnamese: "Khi nào anh ấy quay lại?", topic: "Thời điểm trở về và chờ ai đó quay lại" },
  { number: 3, chinese: "桌子上放着很多饮料。", pinyin: "Zhuōzi shàng fàngzhe hěn duō yǐnliào.", vietnamese: "Trên bàn đang đặt rất nhiều đồ uống.", topic: "Miêu tả trạng thái tồn tại của đồ vật" },
  { number: 4, chinese: "她总是笑着跟客人说话。", pinyin: "Tā zǒng shì xiàozhe gēn kèrén shuōhuà.", vietnamese: "Cô ấy luôn cười khi nói chuyện với khách.", topic: "Cách thức hành động và giao tiếp với khách" },
  { number: 5, chinese: "我最近越来越胖了。", pinyin: "Wǒ zuìjìn yuèláiyuè pàng le.", vietnamese: "Dạo này tôi ngày càng béo lên.", topic: "Thay đổi dần dần, sức khỏe và cơ thể" },
  { number: 6, chinese: "怎么突然找不到了？", pinyin: "Zěnme tūrán zhǎobudào le?", vietnamese: "Sao đột nhiên lại không tìm thấy nữa?", topic: "Mất đồ, không tìm thấy, xử lý tình huống" },
  { number: 7, chinese: "我跟她都认识五年了。", pinyin: "Wǒ gēn tā dōu rènshi wǔ nián le.", vietnamese: "Tôi với cô ấy quen nhau 5 năm rồi.", topic: "Thời lượng quan hệ và quen nhau bao lâu" },
  { number: 8, chinese: "你去哪儿我就去哪儿。", pinyin: "Nǐ qù nǎr wǒ jiù qù nǎr.", vietnamese: "Bạn đi đâu thì tôi đi đó.", topic: "Theo kế hoạch của người khác và điều kiện đơn giản" },
  { number: 9, chinese: "她的汉语说得跟中国人一样好。", pinyin: "Tā de Hànyǔ shuō de gēn Zhōngguórén yíyàng hǎo.", vietnamese: "Tiếng Trung của cô ấy nói hay như người Trung Quốc.", topic: "Bổ ngữ trình độ và so sánh giống nhau" },
  { number: 10, chinese: "数学比历史难多了。", pinyin: "Shùxué bǐ lìshǐ nán duō le.", vietnamese: "Toán khó hơn Lịch sử nhiều.", topic: "So sánh mức độ rõ ràng hơn" },
  { number: 11, chinese: "别忘了把空调关了。", pinyin: "Bié wàng le bǎ kōngtiáo guān le.", vietnamese: "Đừng quên tắt điều hòa nhé.", topic: "Nhắc nhở, quên làm gì, mẫu 把 kết quả" },
  { number: 12, chinese: "把重要的东西放在我这儿吧。", pinyin: "Bǎ zhòngyào de dōngxi fàng zài wǒ zhèr ba.", vietnamese: "Hãy để đồ quan trọng ở chỗ tôi đi.", topic: "Đặt để đồ vật, gửi giữ, mẫu 把" },
  { number: 13, chinese: "我是走回来的。", pinyin: "Wǒ shì zǒu huílai de.", vietnamese: "Tôi đi bộ quay về.", topic: "Cách quay về và nhấn mạnh phương thức" },
  { number: 14, chinese: "请把水果拿过来。", pinyin: "Qǐng bǎ shuǐguǒ ná guòlai.", vietnamese: "Làm ơn cầm hoa quả mang lại đây.", topic: "Hướng di chuyển của đồ vật, 过来/过去" },
  { number: 15, chinese: "其他都没有问题。", pinyin: "Qítā dōu méiyǒu wèntí.", vietnamese: "Những phần khác đều không có vấn đề gì.", topic: "Phần còn lại đều ổn, tổng kết vấn đề" },
  { number: 16, chinese: "我现在累得下了班就想睡觉。", pinyin: "Wǒ xiànzài lèi de xià le bān jiù xiǎng shuìjiào.", vietnamese: "Bây giờ tôi mệt đến mức tan làm là chỉ muốn ngủ.", topic: "Mức độ mệt và kết quả kéo theo" },
  { number: 17, chinese: "谁都有办法看好你的“病”。", pinyin: "Shéi dōu yǒu bànfǎ kàn hǎo nǐ de “bìng”.", vietnamese: "Ai cũng có cách chữa “bệnh” của bạn.", topic: "Ai cũng có cách, giải quyết vấn đề" },
  { number: 18, chinese: "我相信他们会统一的。", pinyin: "Wǒ xiāngxìn tāmen huì tǒngyī de.", vietnamese: "Tôi tin họ sẽ thống nhất được.", topic: "Tin tưởng, dự đoán kết quả, đồng thuận" },
  { number: 19, chinese: "你没看出来吗？", pinyin: "Nǐ méi kàn chūlái ma?", vietnamese: "Bạn không nhìn ra sao?", topic: "Nhận ra hay không, bổ ngữ kết quả" },
  { number: 20, chinese: "我被他影响了。", pinyin: "Wǒ bèi tā yǐngxiǎng le.", vietnamese: "Tôi đã bị anh ấy ảnh hưởng.", topic: "Câu bị động đơn giản và tác động ảnh hưởng" }
];

hsk3Course.overview = "HSK 3 đã được khóa lại theo structure chuẩn 20 bài của HSK Standard Course 3. Nội dung chi tiết từng bài sẽ được viết lại bám đúng textbook order này.";
hsk3Course.lessons = hsk3OfficialStructure.map((lesson) => ({
  id: `hsk3-lesson-${lesson.number}`,
  number: lesson.number,
  title: `Bài ${lesson.number}: ${lesson.vietnamese}`,
  titleChinese: lesson.chinese,
  titlePinyin: lesson.pinyin,
  vietnameseTitle: lesson.vietnamese,
  objective: `Bài này tập trung vào chủ đề: ${lesson.topic}. Nội dung chi tiết sẽ được viết lại theo đúng textbook order của HSK 3.`,
  placeholder: true
}));

const hsk3DetailedLessons = {
  1: {
    objective: "Nói về kế hoạch cuối tuần, hỏi dự định của người khác, sắp xếp hoạt động theo thứ tự và trả lời linh hoạt khi chưa quyết định xong.",
    vocabulary: [
      vocab("周末", "zhōumò", "cuối tuần", "danh từ thời gian", "Thời gian trung tâm của bài 1.", "周末我一般不在公司。", "Zhōumò wǒ yìbān bú zài gōngsī.", "Cuối tuần tôi thường không ở công ty."),
      vocab("打算", "dǎsuan", "dự định", "động từ/danh từ", "Dùng để nói kế hoạch gần trong tương lai.", "你周末有什么打算？", "Nǐ zhōumò yǒu shénme dǎsuan?", "Cuối tuần bạn có dự định gì?"),
      vocab("计划", "jìhuà", "kế hoạch", "danh từ/động từ", "Dùng khi nói cụ thể hơn về việc muốn làm.", "我的计划是周六先休息。", "Wǒ de jìhuà shì zhōuliù xiān xiūxi.", "Kế hoạch của tôi là thứ Bảy nghỉ ngơi trước."),
      vocab("见面", "jiànmiàn", "gặp mặt", "động từ", "Dùng khi hẹn bạn bè cuối tuần.", "我们周日下午见面吧。", "Wǒmen zhōurì xiàwǔ jiànmiàn ba.", "Chiều Chủ nhật chúng ta gặp nhau nhé."),
      vocab("爬山", "páshān", "leo núi", "động từ", "Một hoạt động cuối tuần thường gặp.", "天气好的时候我喜欢去爬山。", "Tiānqì hǎo de shíhou wǒ xǐhuan qù páshān.", "Khi thời tiết đẹp tôi thích đi leo núi."),
      vocab("参观", "cānguān", "tham quan", "động từ", "Dùng khi đi bảo tàng, triển lãm hay một nơi mới.", "我们打算去参观一个博物馆。", "Wǒmen dǎsuan qù cānguān yí ge bówùguǎn.", "Chúng tôi dự định đi tham quan một bảo tàng."),
      vocab("先", "xiān", "trước", "phó từ", "Dùng để sắp xếp thứ tự hoạt động.", "我想先做作业，再出去。", "Wǒ xiǎng xiān zuò zuòyè, zài chūqù.", "Tôi muốn làm bài tập trước rồi mới ra ngoài."),
      vocab("再", "zài", "rồi; sau đó", "phó từ", "Thường đi với 先 để nói trình tự.", "我们先吃饭，再去看电影。", "Wǒmen xiān chīfàn, zài qù kàn diànyǐng.", "Chúng tôi ăn cơm trước rồi mới đi xem phim.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Hỏi kế hoạch cuối tuần.", [
        study("A: 你周末有什么打算？", "A: Nǐ zhōumò yǒu shénme dǎsuan?", "A: Cuối tuần bạn có dự định gì?"),
        study("B: 我打算在家休息一下。", "B: Wǒ dǎsuan zài jiā xiūxi yíxià.", "B: Tôi dự định ở nhà nghỉ một chút."),
        study("A: 那星期天呢？", "A: Nà xīngqītiān ne?", "A: Thế còn Chủ nhật thì sao?")
      ]),
      dialogueBlock("Tình huống 2", "Rủ bạn đi ra ngoài.", [
        study("A: 如果你有空，我们一起去爬山吧。", "A: Rúguǒ nǐ yǒu kòng, wǒmen yìqǐ qù páshān ba.", "A: Nếu bạn rảnh, chúng ta cùng đi leo núi nhé."),
        study("B: 好啊，我正想出去走走。", "B: Hǎo a, wǒ zhèng xiǎng chūqù zǒuzou.", "B: Được đấy, tôi cũng đang muốn ra ngoài đi dạo."),
        study("A: 那我晚上再跟你确认时间。", "A: Nà wǒ wǎnshang zài gēn nǐ quèrèn shíjiān.", "A: Vậy tối tôi sẽ xác nhận lại thời gian với bạn.")
      ]),
      dialogueBlock("Tình huống 3", "Nói kế hoạch theo thứ tự.", [
        study("A: 你星期六打算怎么安排？", "A: Nǐ xīngqīliù dǎsuan zěnme ānpái?", "A: Thứ Bảy bạn định sắp xếp thế nào?"),
        study("B: 我先做作业，再去看电影。", "B: Wǒ xiān zuò zuòyè, zài qù kàn diànyǐng.", "B: Tôi làm bài tập trước, rồi đi xem phim."),
        study("A: 这样安排挺不错的。", "A: Zhèyàng ānpái tǐng búcuò de.", "A: Sắp xếp như vậy khá ổn đấy.")
      ]),
      dialogueBlock("Tình huống 4", "Chưa quyết định xong.", [
        study("A: 你已经想好了吗？", "A: Nǐ yǐjīng xiǎng hǎo le ma?", "A: Bạn nghĩ xong chưa?"),
        study("B: 还没有，让我想想再告诉你。", "B: Hái méiyǒu, ràng wǒ xiǎngxiang zài gàosu nǐ.", "B: Vẫn chưa, để tôi nghĩ rồi nói với bạn sau."),
        study("A: 好，那你别太晚。", "A: Hǎo, nà nǐ bié tài wǎn.", "A: Được, nhưng bạn đừng để muộn quá nhé.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 打算 + động từ", "打算 dùng để nói dự định gần, thường là kế hoạch đã nghĩ sơ bộ nhưng vẫn có thể thay đổi.", study("我打算周末去参观博物馆。", "Wǒ dǎsuan zhōumò qù cānguān bówùguǎn.", "Tôi dự định cuối tuần đi tham quan bảo tàng."), [
        study("你明天打算几点出门？", "Nǐ míngtiān dǎsuan jǐ diǎn chūmén?", "Ngày mai bạn dự định ra ngoài lúc mấy giờ?"),
        study("我们打算下午见面。", "Wǒmen dǎsuan xiàwǔ jiànmiàn.", "Chúng tôi dự định chiều gặp nhau.")
      ]),
      grammarNote("2. 先...再...", "先...再... dùng để sắp xếp hai hành động theo đúng thứ tự trước sau. Đây là mẫu rất hay dùng khi nói kế hoạch.", study("我先做作业，再去看电影。", "Wǒ xiān zuò zuòyè, zài qù kàn diànyǐng.", "Tôi làm bài tập trước rồi đi xem phim."), [
        study("我们先吃饭，再出发。", "Wǒmen xiān chīfàn, zài chūfā.", "Chúng tôi ăn cơm trước rồi xuất phát."),
        study("你先休息一下，再继续。", "Nǐ xiān xiūxi yíxià, zài jìxù.", "Bạn nghỉ một chút trước rồi làm tiếp.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 打算", "2. 周末", "3. 参观"], options: ["a. cuối tuần", "b. tham quan", "c. dự định"], answer: "1-c, 2-a, 3-b" }],
      [{ question: "Điền từ thích hợp.", prompt: ["我___做作业，再出去。", "你周末有什么___？", "我们打算去___一个博物馆。"], answer: "先 / 打算 / 参观" }],
      [{ question: "Câu nào đúng?", options: ["A. 我先去看电影，再做作业。", "B. 我再先去看电影。", "C. 我打算先再去。"], answer: "A. 我先去看电影，再做作业。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 你周末有什么打算？", "B: ____________", "A: 好，那我晚上再联系你。"], answer: "B: 我还没想好，让我想想再告诉你。" }],
      "Tự kiểm tra: bạn có thể nói ngắn gọn kế hoạch cuối tuần của mình bằng 2 đến 3 câu không?"
    ),
    quickSummary: {
      words: ["周末", "打算", "计划", "见面", "先", "再"],
      patterns: ["你周末有什么打算？", "我先做作业，再去看电影。"],
      reminder: "打算 dùng cho dự định gần. Khi kể kế hoạch, ưu tiên nói thời gian trước rồi mới nói hoạt động."
    }
  },
  2: {
    objective: "Hỏi thời điểm ai đó quay lại, nói lịch trình về đến nơi, giải thích vì sao chưa về và diễn đạt việc vừa về xong hoặc sắp về.",
    vocabulary: [
      vocab("回来", "huílai", "quay lại", "động từ", "Động từ trung tâm của bài 2.", "他什么时候回来？", "Tā shénme shíhou huílai?", "Khi nào anh ấy quay lại?"),
      vocab("出差", "chūchāi", "đi công tác", "động từ", "Hay dùng trong ngữ cảnh chờ ai đó từ nơi khác về.", "经理昨天出差去了。", "Jīnglǐ zuótiān chūchāi qù le.", "Quản lý hôm qua đi công tác rồi."),
      vocab("航班", "hángbān", "chuyến bay", "danh từ", "Dùng khi nói giờ về bằng máy bay.", "他的航班晚上九点到。", "Tā de hángbān wǎnshang jiǔ diǎn dào.", "Chuyến bay của anh ấy đến lúc 9 giờ tối."),
      vocab("接", "jiē", "đón", "động từ", "Dùng khi ra sân bay, ga tàu đón người.", "我明天去机场接他。", "Wǒ míngtiān qù jīchǎng jiē tā.", "Ngày mai tôi sẽ ra sân bay đón anh ấy."),
      vocab("晚点", "wǎndiǎn", "muộn giờ", "động từ/tính từ", "Dùng khi tàu xe hay chuyến bay đến muộn.", "火车今天晚点了。", "Huǒchē jīntiān wǎndiǎn le.", "Hôm nay tàu đến muộn giờ rồi."),
      vocab("刚", "gāng", "vừa mới", "phó từ", "Dùng để nói việc mới xảy ra cách đây không lâu.", "他刚回来。", "Tā gāng huílai.", "Anh ấy vừa mới quay lại."),
      vocab("已经", "yǐjīng", "đã", "phó từ", "Dùng để nhấn mạnh việc đã hoàn tất.", "他已经到家了。", "Tā yǐjīng dào jiā le.", "Anh ấy đã về đến nhà rồi."),
      vocab("还", "hái", "vẫn còn; còn chưa", "phó từ", "Dùng khi người đó vẫn chưa quay lại.", "他还没回来。", "Tā hái méi huílai.", "Anh ấy vẫn chưa quay lại.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Hỏi khi nào quay lại.", [
        study("A: 他什么时候回来？", "A: Tā shénme shíhou huílai?", "A: Khi nào anh ấy quay lại?"),
        study("B: 他说明天下午回来。", "B: Tā shuō míngtiān xiàwǔ huílai.", "B: Anh ấy nói chiều mai sẽ quay lại."),
        study("A: 那我们明天再联系他吧。", "A: Nà wǒmen míngtiān zài liánxì tā ba.", "A: Vậy ngày mai chúng ta liên lạc lại với anh ấy nhé.")
      ]),
      dialogueBlock("Tình huống 2", "Giải thích vì sao chưa về.", [
        study("A: 他怎么还没回来？", "A: Tā zěnme hái méi huílai?", "A: Sao anh ấy vẫn chưa quay lại?"),
        study("B: 听说今天航班晚点了。", "B: Tīngshuō jīntiān hángbān wǎndiǎn le.", "B: Nghe nói hôm nay chuyến bay bị muộn."),
        study("A: 怪不得你一直在等电话。", "A: Guàibude nǐ yìzhí zài děng diànhuà.", "A: Bảo sao bạn cứ chờ điện thoại mãi.")
      ]),
      dialogueBlock("Tình huống 3", "Vừa mới quay lại.", [
        study("A: 你怎么知道他到北京了？", "A: Nǐ zěnme zhīdào tā dào Běijīng le?", "A: Sao bạn biết anh ấy đã đến Bắc Kinh rồi?"),
        study("B: 因为他刚给我发了消息。", "B: Yīnwèi tā gāng gěi wǒ fā le xiāoxi.", "B: Vì anh ấy vừa nhắn tin cho tôi."),
        study("A: 那他应该快到家了。", "A: Nà tā yīnggāi kuài dào jiā le.", "A: Vậy chắc anh ấy sắp về đến nhà rồi.")
      ]),
      dialogueBlock("Tình huống 4", "Đi đón người khác.", [
        study("A: 你明天有空吗？", "A: Nǐ míngtiān yǒu kòng ma?", "A: Ngày mai bạn có rảnh không?"),
        study("B: 上午没有，因为我要去机场接朋友。", "B: Shàngwǔ méiyǒu, yīnwèi wǒ yào qù jīchǎng jiē péngyou.", "B: Buổi sáng thì không, vì tôi phải ra sân bay đón bạn."),
        study("A: 好，那我们下午见。", "A: Hǎo, nà wǒmen xiàwǔ jiàn.", "A: Được, vậy chiều gặp nhé.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 还没 + động từ", "还没 dùng để nói đến hiện tại một việc vẫn chưa xảy ra hoặc chưa hoàn thành.", study("他还没回来。", "Tā hái méi huílai.", "Anh ấy vẫn chưa quay lại."), [
        study("飞机还没到。", "Fēijī hái méi dào.", "Máy bay vẫn chưa đến."),
        study("他还没下班。", "Tā hái méi xiàbān.", "Anh ấy vẫn chưa tan làm.")
      ]),
      grammarNote("2. 刚 + động từ", "刚 dùng khi một việc vừa mới xảy ra cách đây rất ngắn. Nó thường đi với thông tin mới nhận được.", study("他刚给我发了消息。", "Tā gāng gěi wǒ fā le xiāoxi.", "Anh ấy vừa mới nhắn tin cho tôi."), [
        study("我刚到家。", "Wǒ gāng dào jiā.", "Tôi vừa mới về đến nhà."),
        study("她刚走。", "Tā gāng zǒu.", "Cô ấy vừa mới đi.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 回来", "2. 接", "3. 晚点"], options: ["a. đón", "b. quay lại", "c. muộn giờ"], answer: "1-b, 2-a, 3-c" }],
      [{ question: "Điền từ thích hợp.", prompt: ["他___没回来。", "我明天去机场___他。", "他刚给我发了___。"], answer: "还 / 接 / 消息" }],
      [{ question: "Câu nào đúng?", options: ["A. 他刚回来。", "B. 他回来刚。", "C. 他还刚回来没。"], answer: "A. 他刚回来。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 他什么时候回来？", "B: ____________", "A: 好，那我明天下午再来。"], answer: "B: 他说明天下午回来。" }],
      "Tự kiểm tra: bạn có thể hỏi ai đó khi nào quay lại và trả lời bằng 还没 hoặc 刚 không?"
    ),
    quickSummary: {
      words: ["回来", "接", "航班", "晚点", "刚", "还"],
      patterns: ["他什么时候回来？", "他还没回来。", "他刚给我发了消息。"],
      reminder: "还没 nhấn mạnh việc chưa xảy ra tới hiện tại; 刚 nhấn mạnh việc vừa mới xảy ra."
    }
  },
  3: {
    objective: "Miêu tả trạng thái đồ vật đang được đặt ở đâu, nói trong phòng có gì và dùng 着 để diễn đạt trạng thái kéo dài trước mắt.",
    vocabulary: [
      vocab("放着", "fàngzhe", "đang đặt", "động từ trạng thái", "Dùng khi một đồ vật đang ở trong trạng thái được đặt ở đâu đó.", "桌子上放着很多饮料。", "Zhuōzi shàng fàngzhe hěn duō yǐnliào.", "Trên bàn đang đặt rất nhiều đồ uống."),
      vocab("饮料", "yǐnliào", "đồ uống", "danh từ", "Từ trung tâm của bài 3.", "冰箱里有很多饮料。", "Bīngxiāng li yǒu hěn duō yǐnliào.", "Trong tủ lạnh có rất nhiều đồ uống."),
      vocab("桌子", "zhuōzi", "cái bàn", "danh từ", "Địa điểm đặt đồ vật quen thuộc.", "桌子上还有两本杂志。", "Zhuōzi shàng hái yǒu liǎng běn zázhì.", "Trên bàn còn có hai quyển tạp chí."),
      vocab("旁边", "pángbiān", "bên cạnh", "danh từ vị trí", "Dùng khi miêu tả vị trí của vật khác nhau.", "桌子旁边放着一把椅子。", "Zhuōzi pángbiān fàngzhe yì bǎ yǐzi.", "Bên cạnh bàn đang đặt một cái ghế."),
      vocab("瓶子", "píngzi", "chai, lọ", "danh từ", "Dùng để đếm đồ uống cụ thể.", "桌子上放着三个瓶子。", "Zhuōzi shàng fàngzhe sān ge píngzi.", "Trên bàn đang để ba cái chai."),
      vocab("杂志", "zázhì", "tạp chí", "danh từ", "Vật thường thấy trong văn phòng hoặc phòng khách.", "沙发上放着一本杂志。", "Shāfā shàng fàngzhe yì běn zázhì.", "Trên ghế sofa đang để một quyển tạp chí."),
      vocab("墙上", "qiáng shàng", "trên tường", "danh từ vị trí", "Dùng trong các câu trạng thái với 着.", "墙上挂着一张照片。", "Qiáng shàng guàzhe yì zhāng zhàopiàn.", "Trên tường đang treo một tấm ảnh."),
      vocab("挂着", "guàzhe", "đang treo", "động từ trạng thái", "Dùng song song với 放着 để mở rộng miêu tả trạng thái.", "门口挂着一件外套。", "Ménkǒu guàzhe yí jiàn wàitào.", "Ở cửa đang treo một chiếc áo khoác.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Mô tả trên bàn có gì.", [
        study("A: 桌子上放着什么？", "A: Zhuōzi shàng fàngzhe shénme?", "A: Trên bàn đang để gì thế?"),
        study("B: 放着很多饮料，还有几个杯子。", "B: Fàngzhe hěn duō yǐnliào, hái yǒu jǐ ge bēizi.", "B: Đang để rất nhiều đồ uống, còn có mấy cái cốc nữa."),
        study("A: 怪不得房间里这么热闹。", "A: Guàibude fángjiān li zhème rènào.", "A: Bảo sao trong phòng lại náo nhiệt thế.")
      ]),
      dialogueBlock("Tình huống 2", "Tìm đồ vật trong phòng.", [
        study("A: 你的杂志在哪儿？", "A: Nǐ de zázhì zài nǎr?", "A: Tạp chí của bạn ở đâu?"),
        study("B: 沙发上放着一本，桌子旁边还有一本。", "B: Shāfā shàng fàngzhe yì běn, zhuōzi pángbiān hái yǒu yì běn.", "B: Trên sofa đang để một quyển, bên cạnh bàn còn một quyển nữa."),
        study("A: 那我先看桌子旁边那本。", "A: Nà wǒ xiān kàn zhuōzi pángbiān nà běn.", "A: Vậy tôi xem quyển cạnh bàn trước.")
      ]),
      dialogueBlock("Tình huống 3", "Quan sát tường và cửa.", [
        study("A: 墙上挂着的那张照片是谁拍的？", "A: Qiáng shàng guàzhe de nà zhāng zhàopiàn shì shéi pāi de?", "A: Tấm ảnh đang treo trên tường kia là ai chụp vậy?"),
        study("B: 是我哥哥拍的。", "B: Shì wǒ gēge pāi de.", "B: Là anh trai tôi chụp."),
        study("A: 门口挂着的外套也是你的吗？", "A: Ménkǒu guàzhe de wàitào yě shì nǐ de ma?", "A: Chiếc áo khoác đang treo ở cửa cũng là của bạn à?")
      ]),
      dialogueBlock("Tình huống 4", "Chuẩn bị cho buổi gặp mặt.", [
        study("A: 客人快到了，东西都准备好了吗？", "A: Kèrén kuài dào le, dōngxi dōu zhǔnbèi hǎo le ma?", "A: Khách sắp đến rồi, mọi thứ chuẩn bị xong chưa?"),
        study("B: 差不多了，桌子上已经放着饮料了。", "B: Chàbuduō le, zhuōzi shàng yǐjīng fàngzhe yǐnliào le.", "B: Gần xong rồi, trên bàn đã đặt đồ uống rồi."),
        study("A: 好，那我再把水果拿过来。", "A: Hǎo, nà wǒ zài bǎ shuǐguǒ ná guòlai.", "A: Được, vậy tôi mang hoa quả lại thêm.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. Động từ + 着", "着 ở đây diễn tả trạng thái đang tồn tại trước mắt, không nhấn mạnh hành động đang diễn ra mà nhấn mạnh kết quả đang được giữ nguyên.", study("桌子上放着很多饮料。", "Zhuōzi shàng fàngzhe hěn duō yǐnliào.", "Trên bàn đang đặt rất nhiều đồ uống."), [
        study("门口挂着一件外套。", "Ménkǒu guàzhe yí jiàn wàitào.", "Ở cửa đang treo một chiếc áo khoác."),
        study("墙上写着三个字。", "Qiáng shàng xiězhe sān ge zì.", "Trên tường đang viết ba chữ.")
      ]),
      grammarNote("2. Nơi chốn + động từ着 + danh từ", "Mẫu này rất hay dùng để miêu tả bố cục trong phòng hay trạng thái tồn tại của đồ vật.", study("桌子旁边放着一把椅子。", "Zhuōzi pángbiān fàngzhe yì bǎ yǐzi.", "Bên cạnh bàn đang đặt một cái ghế."), [
        study("窗户旁边站着一个人。", "Chuānghu pángbiān zhànzhe yí ge rén.", "Bên cạnh cửa sổ đang đứng một người."),
        study("床上放着两件衣服。", "Chuáng shàng fàngzhe liǎng jiàn yīfu.", "Trên giường đang để hai bộ quần áo.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 放着", "2. 饮料", "3. 杂志"], options: ["a. đồ uống", "b. đang đặt", "c. tạp chí"], answer: "1-b, 2-a, 3-c" }],
      [{ question: "Điền từ thích hợp.", prompt: ["桌子上___很多饮料。", "墙上___一张照片。", "桌子旁边有一把___。"], answer: "放着 / 挂着 / 椅子" }],
      [{ question: "Câu nào đúng?", options: ["A. 桌子上放着很多饮料。", "B. 桌子上很多饮料放着。", "C. 放着桌子上很多饮料。"], answer: "A. 桌子上放着很多饮料。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 桌子上放着什么？", "B: ____________", "A: 那我先去拿杯子。"], answer: "B: 放着很多饮料，还有几个杯子。" }],
      "Tự kiểm tra: bạn có thể nhìn quanh phòng và nói 2 câu có 着 để miêu tả trạng thái đồ vật không?"
    ),
    quickSummary: {
      words: ["放着", "饮料", "桌子", "旁边", "瓶子", "挂着"],
      patterns: ["桌子上放着很多饮料。", "桌子旁边放着一把椅子。"],
      reminder: "着 trong bài này dùng để tả trạng thái đang tồn tại, không dùng để kể chuỗi hành động."
    }
  },
  4: {
    objective: "Mô tả cách thức hành động, cách giao tiếp với khách và dùng 着 để nói hành động đi kèm trong lúc nói chuyện hay phục vụ.",
    vocabulary: [
      vocab("笑着", "xiàozhe", "cười khi đang...", "động từ trạng thái", "Dùng để nói một hành động đi kèm trong khi làm việc khác.", "她总是笑着跟客人说话。", "Tā zǒng shì xiàozhe gēn kèrén shuōhuà.", "Cô ấy luôn cười khi nói chuyện với khách."),
      vocab("客人", "kèrén", "khách", "danh từ", "Nhân vật trung tâm trong bài giao tiếp phục vụ.", "今天店里来了很多客人。", "Jīntiān diàn li lái le hěn duō kèrén.", "Hôm nay trong cửa hàng có rất nhiều khách."),
      vocab("说话", "shuōhuà", "nói chuyện", "động từ", "Dùng để nói cách giao tiếp với người khác.", "你跟他说话的时候别太快。", "Nǐ gēn tā shuōhuà de shíhou bié tài kuài.", "Khi nói chuyện với anh ấy đừng nói quá nhanh."),
      vocab("热情", "rèqíng", "nhiệt tình", "tính từ", "Dùng khi nhận xét thái độ với khách.", "她对客人一直很热情。", "Tā duì kèrén yìzhí hěn rèqíng.", "Cô ấy luôn rất nhiệt tình với khách."),
      vocab("服务员", "fúwùyuán", "nhân viên phục vụ", "danh từ", "Phù hợp với ngữ cảnh giao tiếp trong cửa hàng, nhà hàng.", "那位服务员说话很客气。", "Nà wèi fúwùyuán shuōhuà hěn kèqi.", "Nhân viên phục vụ kia nói chuyện rất lịch sự."),
      vocab("客气", "kèqi", "lịch sự, khách sáo", "tính từ", "Dùng để miêu tả cách nói năng.", "他说话很客气。", "Tā shuōhuà hěn kèqi.", "Anh ấy nói chuyện rất lịch sự."),
      vocab("一边", "yìbiān", "một bên; vừa...vừa...", "danh từ/phó từ", "Dùng để nói hai hành động diễn ra cùng lúc.", "她一边笑，一边说。", "Tā yìbiān xiào, yìbiān shuō.", "Cô ấy vừa cười vừa nói."),
      vocab("介绍", "jièshào", "giới thiệu", "động từ", "Dùng khi giới thiệu món ăn hay dịch vụ cho khách.", "服务员正在给客人介绍菜单。", "Fúwùyuán zhèngzài gěi kèrén jièshào càidān.", "Nhân viên đang giới thiệu thực đơn cho khách.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Nói về một nhân viên phục vụ.", [
        study("A: 你觉得新来的服务员怎么样？", "A: Nǐ juéde xīn lái de fúwùyuán zěnmeyàng?", "A: Bạn thấy nhân viên mới đến thế nào?"),
        study("B: 她很热情，总是笑着跟客人说话。", "B: Tā hěn rèqíng, zǒng shì xiàozhe gēn kèrén shuōhuà.", "B: Cô ấy rất nhiệt tình, luôn cười khi nói chuyện với khách."),
        study("A: 怪不得客人都很喜欢她。", "A: Guàibude kèrén dōu hěn xǐhuan tā.", "A: Bảo sao khách đều rất quý cô ấy.")
      ]),
      dialogueBlock("Tình huống 2", "Giới thiệu món cho khách.", [
        study("A: 这道菜怎么样？", "A: Zhè dào cài zěnmeyàng?", "A: Món này thế nào?"),
        study("B: 服务员笑着给我们介绍了半天。", "B: Fúwùyuán xiàozhe gěi wǒmen jièshào le bàntiān.", "B: Nhân viên vừa cười vừa giới thiệu cho chúng tôi khá lâu."),
        study("A: 那说明她对工作很认真。", "A: Nà shuōmíng tā duì gōngzuò hěn rènzhēn.", "A: Vậy chứng tỏ cô ấy rất nghiêm túc với công việc.")
      ]),
      dialogueBlock("Tình huống 3", "Nhận xét cách nói chuyện.", [
        study("A: 他说话快不快？", "A: Tā shuōhuà kuài bu kuài?", "A: Anh ấy nói chuyện có nhanh không?"),
        study("B: 不快，而且很客气。", "B: Bú kuài, érqiě hěn kèqi.", "B: Không nhanh, hơn nữa còn rất lịch sự."),
        study("A: 那第一次来的客人应该也不会紧张。", "A: Nà dì-yī cì lái de kèrén yīnggāi yě bú huì jǐnzhāng.", "A: Vậy khách lần đầu đến chắc cũng sẽ không căng thẳng.")
      ]),
      dialogueBlock("Tình huống 4", "Vừa làm vừa nói.", [
        study("A: 她怎么一边收拾桌子，一边还能聊天？", "A: Tā zěnme yìbiān shōushi zhuōzi, yìbiān hái néng liáotiān?", "A: Sao cô ấy vừa dọn bàn vừa còn có thể trò chuyện nữa?"),
        study("B: 因为她已经习惯了这样的工作。", "B: Yīnwèi tā yǐjīng xíguàn le zhèyàng de gōngzuò.", "B: Vì cô ấy đã quen với kiểu công việc như vậy rồi."),
        study("A: 难怪看起来那么自然。", "A: Nánguài kànqilai nàme zìrán.", "A: Thảo nào nhìn lại tự nhiên như thế.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. Động từ + 着 + động từ", "Mẫu này dùng để nói một hành động đi kèm, xảy ra song song với hành động chính.", study("她总是笑着跟客人说话。", "Tā zǒng shì xiàozhe gēn kèrén shuōhuà.", "Cô ấy luôn cười khi nói chuyện với khách."), [
        study("他站着给大家介绍。", "Tā zhànzhe gěi dàjiā jièshào.", "Anh ấy đứng giới thiệu cho mọi người."),
        study("孩子哭着找妈妈。", "Háizi kūzhe zhǎo māma.", "Đứa trẻ vừa khóc vừa tìm mẹ.")
      ]),
      grammarNote("2. 一边...一边...", "一边...一边... dùng khi hai hành động được thực hiện đồng thời bởi cùng một chủ ngữ.", study("她一边笑，一边说。", "Tā yìbiān xiào, yìbiān shuō.", "Cô ấy vừa cười vừa nói."), [
        study("我一边听音乐，一边做作业。", "Wǒ yìbiān tīng yīnyuè, yìbiān zuò zuòyè.", "Tôi vừa nghe nhạc vừa làm bài tập."),
        study("他一边走，一边打电话。", "Tā yìbiān zǒu, yìbiān dǎ diànhuà.", "Anh ấy vừa đi vừa gọi điện.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 客人", "2. 热情", "3. 客气"], options: ["a. lịch sự", "b. khách", "c. nhiệt tình"], answer: "1-b, 2-c, 3-a" }],
      [{ question: "Điền từ thích hợp.", prompt: ["她总是笑___跟客人说话。", "那位服务员很___情。", "她一边收拾桌子，一边跟客人___话。"], answer: "着 / 热 / 说" }],
      [{ question: "Câu nào đúng?", options: ["A. 她笑着跟客人说话。", "B. 她着笑跟客人说话。", "C. 她跟客人着笑说话。"], answer: "A. 她笑着跟客人说话。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 你觉得新来的服务员怎么样？", "B: ____________", "A: 怪不得客人都很喜欢她。"], answer: "B: 她很热情，总是笑着跟客人说话。" }],
      "Tự kiểm tra: bạn có thể dùng 1 câu với 着 và 1 câu với 一边...一边... để tả cách ai đó làm việc không?"
    ),
    quickSummary: {
      words: ["笑着", "客人", "热情", "客气", "一边", "介绍"],
      patterns: ["她总是笑着跟客人说话。", "她一边笑，一边说。"],
      reminder: "着 trong bài này nói hành động đi kèm; 一边...一边... nhấn hai việc cùng diễn ra rõ hơn."
    }
  },
  5: {
    objective: "Nói về thay đổi dần dần của cơ thể, thói quen sinh hoạt không tốt, giải thích nguyên nhân đơn giản và nêu cách cải thiện sức khỏe.",
    vocabulary: [
      vocab("最近", "zuìjìn", "gần đây", "danh từ thời gian", "Từ mở đầu rất hay dùng khi nói thay đổi gần đây.", "我最近有点儿忙。", "Wǒ zuìjìn yǒudiǎnr máng.", "Gần đây tôi hơi bận."),
      vocab("越来越", "yuèláiyuè", "ngày càng", "phó từ", "Từ khóa chính của bài 5.", "我最近越来越胖了。", "Wǒ zuìjìn yuèláiyuè pàng le.", "Dạo này tôi ngày càng béo lên."),
      vocab("胖", "pàng", "béo", "tính từ", "Dùng để nói thay đổi cơ thể.", "我觉得自己胖了一点儿。", "Wǒ juéde zìjǐ pàng le yìdiǎnr.", "Tôi thấy mình béo lên một chút."),
      vocab("锻炼", "duànliàn", "rèn luyện, tập luyện", "động từ", "Cách cải thiện sức khỏe rất phổ biến.", "最近我很少锻炼。", "Zuìjìn wǒ hěn shǎo duànliàn.", "Gần đây tôi rất ít tập luyện."),
      vocab("体重", "tǐzhòng", "cân nặng", "danh từ", "Dùng khi nói số cân tăng hay giảm.", "我的体重比以前高了两公斤。", "Wǒ de tǐzhòng bǐ yǐqián gāo le liǎng gōngjīn.", "Cân nặng của tôi cao hơn trước 2 ký."),
      vocab("健康", "jiànkāng", "sức khỏe; khỏe mạnh", "danh từ/tính từ", "Dùng để nói mục tiêu cải thiện cơ thể.", "锻炼对身体健康很重要。", "Duànliàn duì shēntǐ jiànkāng hěn zhòngyào.", "Tập luyện rất quan trọng cho sức khỏe."),
      vocab("晚饭", "wǎnfàn", "bữa tối", "danh từ", "Hay đi với thói quen ăn uống không điều độ.", "我晚饭常常吃得太晚。", "Wǒ wǎnfàn chángcháng chī de tài wǎn.", "Tôi thường ăn tối quá muộn."),
      vocab("习惯", "xíguàn", "thói quen; quen", "danh từ/động từ", "Dùng khi nói nguyên nhân tăng cân là thói quen sống.", "这个习惯得改一改。", "Zhège xíguàn děi gǎi yigǎi.", "Thói quen này cần phải sửa lại.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Nói về thay đổi cơ thể.", [
        study("A: 你最近怎么了？我觉得你越来越胖了。", "A: Nǐ zuìjìn zěnme le? Wǒ juéde nǐ yuèláiyuè pàng le.", "A: Dạo này bạn sao thế? Tôi thấy bạn ngày càng béo lên."),
        study("B: 是啊，我自己也发现了。", "B: Shì a, wǒ zìjǐ yě fāxiàn le.", "B: Đúng vậy, chính tôi cũng nhận ra rồi."),
        study("A: 你最近是不是太累了，也没时间锻炼？", "A: Nǐ zuìjìn shì bu shì tài lèi le, yě méi shíjiān duànliàn?", "A: Có phải dạo này bạn quá mệt, lại không có thời gian tập luyện không?")
      ]),
      dialogueBlock("Tình huống 2", "Giải thích nguyên nhân.", [
        study("A: 你为什么会胖得这么快？", "A: Nǐ wèishénme huì pàng de zhème kuài?", "A: Tại sao bạn lại béo lên nhanh như vậy?"),
        study("B: 因为我最近常常吃夜宵，晚饭也吃得很晚。", "B: Yīnwèi wǒ zuìjìn chángcháng chī yèxiāo, wǎnfàn yě chī de hěn wǎn.", "B: Vì gần đây tôi thường ăn đêm, bữa tối cũng ăn rất muộn."),
        study("A: 这样下去对健康不太好。", "A: Zhèyàng xiàqù duì jiànkāng bú tài hǎo.", "A: Cứ như vậy thì không tốt cho sức khỏe đâu.")
      ]),
      dialogueBlock("Tình huống 3", "Đưa lời khuyên.", [
        study("A: 那你打算怎么办？", "A: Nà nǐ dǎsuan zěnme bàn?", "A: Vậy bạn định làm thế nào?"),
        study("B: 我打算从这个星期开始每天锻炼半个小时。", "B: Wǒ dǎsuan cóng zhège xīngqī kāishǐ měitiān duànliàn bàn ge xiǎoshí.", "B: Tôi dự định từ tuần này bắt đầu mỗi ngày tập nửa tiếng."),
        study("A: 这样坚持下去应该会有变化。", "A: Zhèyàng jiānchí xiàqù yīnggāi huì yǒu biànhuà.", "A: Cứ kiên trì như vậy chắc sẽ có thay đổi.")
      ]),
      dialogueBlock("Tình huống 4", "So sánh với trước đây.", [
        study("A: 你的体重现在比以前高多少？", "A: Nǐ de tǐzhòng xiànzài bǐ yǐqián gāo duōshao?", "A: Cân nặng bây giờ của bạn cao hơn trước bao nhiêu?"),
        study("B: 大概高了两公斤。", "B: Dàgài gāo le liǎng gōngjīn.", "B: Khoảng tăng 2 ký."),
        study("A: 那确实得早点儿注意了。", "A: Nà quèshí děi zǎodiǎnr zhùyì le.", "A: Vậy đúng là phải chú ý sớm hơn rồi.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 越来越 + tính từ/động từ", "越来越 dùng để diễn đạt một thay đổi tăng dần hoặc rõ dần theo thời gian.", study("我最近越来越胖了。", "Wǒ zuìjìn yuèláiyuè pàng le.", "Dạo này tôi ngày càng béo lên."), [
        study("天气越来越热了。", "Tiānqì yuèláiyuè rè le.", "Thời tiết ngày càng nóng hơn."),
        study("他的汉语说得越来越好了。", "Tā de Hànyǔ shuō de yuèláiyuè hǎo le.", "Tiếng Trung của anh ấy ngày càng nói tốt hơn.")
      ]),
      grammarNote("2. 因为...所以...", "因为...所以... dùng để giải thích nguyên nhân và kết quả một cách rõ ràng, rất hợp khi nói về thói quen sống.", study("因为我最近常常吃夜宵，所以越来越胖了。", "Yīnwèi wǒ zuìjìn chángcháng chī yèxiāo, suǒyǐ yuèláiyuè pàng le.", "Vì gần đây tôi thường ăn đêm nên ngày càng béo lên."), [
        study("因为工作太忙，所以我没时间锻炼。", "Yīnwèi gōngzuò tài máng, suǒyǐ wǒ méi shíjiān duànliàn.", "Vì công việc quá bận nên tôi không có thời gian tập luyện."),
        study("因为晚上睡得太晚，所以白天很累。", "Yīnwèi wǎnshang shuì de tài wǎn, suǒyǐ báitiān hěn lèi.", "Vì tối ngủ quá muộn nên ban ngày rất mệt.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 越来越", "2. 锻炼", "3. 体重"], options: ["a. tập luyện", "b. cân nặng", "c. ngày càng"], answer: "1-c, 2-a, 3-b" }],
      [{ question: "Điền từ thích hợp.", prompt: ["我最近___来越胖了。", "最近我很少___炼。", "我的___重比以前高了两公斤。"], answer: "越 / 锻 / 体" }],
      [{ question: "Câu nào đúng?", options: ["A. 我最近越来越胖了。", "B. 我最近越来胖越了。", "C. 我最近胖了越来越。"], answer: "A. 我最近越来越胖了。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 你最近怎么了？我觉得你越来越胖了。", "B: ____________", "A: 那你得早点儿锻炼。"], answer: "B: 是啊，我自己也发现了。" }],
      "Tự kiểm tra: bạn có thể nói một thay đổi gần đây của bản thân bằng 越来越 và giải thích nguyên nhân bằng 因为...所以... không?"
    ),
    quickSummary: {
      words: ["最近", "越来越", "胖", "锻炼", "健康", "体重"],
      patterns: ["我最近越来越胖了。", "因为我最近常常吃夜宵，所以越来越胖了。"],
      reminder: "越来越 nhấn thay đổi dần dần; nếu muốn nói rõ lý do, thêm 因为...所以... ngay sau đó."
    }
  },
  6: {
    objective: "Nói về việc đột nhiên không tìm thấy đồ vật, nhớ lại mình đã để ở đâu, hỏi người khác có nhìn thấy không và diễn đạt kết quả tìm kiếm.",
    vocabulary: [
      vocab("突然", "tūrán", "đột nhiên", "phó từ", "Dùng khi một việc xảy ra bất ngờ.", "我突然想起来那把钥匙在哪儿了。", "Wǒ tūrán xiǎngqilai nà bǎ yàoshi zài nǎr le.", "Tôi đột nhiên nhớ ra chiếc chìa khóa đó ở đâu rồi."),
      vocab("找到", "zhǎodào", "tìm thấy", "động từ", "Kết quả là đã tìm ra được.", "我终于找到手机了。", "Wǒ zhōngyú zhǎodào shǒujī le.", "Cuối cùng tôi đã tìm thấy điện thoại rồi."),
      vocab("找不到", "zhǎobudào", "không tìm thấy", "động từ", "Kết quả là tìm mà không ra.", "我怎么也找不到那本词典。", "Wǒ zěnme yě zhǎobudào nà běn cídiǎn.", "Tôi thế nào cũng không tìm thấy cuốn từ điển đó."),
      vocab("钥匙", "yàoshi", "chìa khóa", "danh từ", "Đồ vật rất hay bị quên hoặc thất lạc.", "我的钥匙不在包里。", "Wǒ de yàoshi bú zài bāo lǐ.", "Chìa khóa của tôi không ở trong túi."),
      vocab("包", "bāo", "túi, cặp", "danh từ", "Nơi thường cất đồ cá nhân.", "你先看看包里有没有。", "Nǐ xiān kànkan bāo lǐ yǒu méiyǒu.", "Bạn hãy xem trước trong túi có không."),
      vocab("忘", "wàng", "quên", "động từ", "Hay dùng khi quên mang hoặc quên để đồ ở đâu.", "我可能把伞忘在教室了。", "Wǒ kěnéng bǎ sǎn wàng zài jiàoshì le.", "Có thể tôi đã quên chiếc ô ở lớp học."),
      vocab("可能", "kěnéng", "có thể", "phó từ/động từ", "Dùng khi chưa chắc chắn.", "他可能已经回办公室了。", "Tā kěnéng yǐjīng huí bàngōngshì le.", "Có thể anh ấy đã về văn phòng rồi."),
      vocab("里面", "lǐmiàn", "bên trong", "danh từ vị trí", "Dùng để nói vị trí đồ vật ở trong thứ gì đó.", "抽屉里面什么都没有。", "Chōuti lǐmiàn shénme dōu méiyǒu.", "Bên trong ngăn kéo không có gì cả.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Phát hiện không thấy đồ.", [
        study("A: 我的钥匙怎么突然找不到了？", "A: Wǒ de yàoshi zěnme tūrán zhǎobudào le?", "A: Sao chìa khóa của tôi đột nhiên không tìm thấy nữa rồi?"),
        study("B: 你先别着急，刚才你用过吗？", "B: Nǐ xiān bié zháojí, gāngcái nǐ yòngguo ma?", "B: Bạn đừng vội lo, lúc nãy bạn có dùng không?"),
        study("A: 用过，可是现在包里没有。", "A: Yòngguo, kěshì xiànzài bāo lǐ méiyǒu.", "A: Có dùng, nhưng bây giờ trong túi lại không có.")
      ]),
      dialogueBlock("Tình huống 2", "Nhớ lại nơi có thể để quên.", [
        study("A: 你是不是忘在办公室了？", "A: Nǐ shì bú shì wàng zài bàngōngshì le?", "A: Có phải bạn để quên ở văn phòng rồi không?"),
        study("B: 有可能，我下午去那儿拿文件了。", "B: Yǒu kěnéng, wǒ xiàwǔ qù nàr ná wénjiàn le.", "B: Cũng có thể, chiều nay tôi có đến đó lấy tài liệu."),
        study("A: 那你快回去看看吧。", "A: Nà nǐ kuài huíqù kànkan ba.", "A: Vậy bạn mau quay lại xem thử đi.")
      ]),
      dialogueBlock("Tình huống 3", "Hỏi người khác có thấy không.", [
        study("A: 你看见我的手机了吗？", "A: Nǐ kànjian wǒ de shǒujī le ma?", "A: Bạn có nhìn thấy điện thoại của tôi không?"),
        study("B: 没看见，你找过桌子下面没有？", "B: Méi kànjian, nǐ zhǎoguo zhuōzi xiàmiàn méiyǒu?", "B: Không thấy, bạn đã tìm dưới gầm bàn chưa?"),
        study("A: 还没有，我现在就去找。", "A: Hái méiyǒu, wǒ xiànzài jiù qù zhǎo.", "A: Vẫn chưa, bây giờ tôi đi tìm ngay.")
      ]),
      dialogueBlock("Tình huống 4", "Cuối cùng tìm thấy rồi.", [
        study("A: 找到了吗？", "A: Zhǎodào le ma?", "A: Tìm thấy chưa?"),
        study("B: 找到了，在抽屉里面。", "B: Zhǎodào le, zài chōuti lǐmiàn.", "B: Tìm thấy rồi, ở trong ngăn kéo."),
        study("A: 怪不得刚才一直找不到。", "A: Guàibude gāngcái yìzhí zhǎobudào.", "A: Bảo sao lúc nãy tìm mãi không thấy.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. Động từ + 到 / 不到", "Bổ ngữ kết quả 到 cho biết đã đạt được kết quả. 不到 cho biết làm nhưng không đạt được kết quả đó.", study("找到 / 找不到", "zhǎodào / zhǎobudào", "tìm thấy / không tìm thấy"), [
        study("我终于找到钥匙了。", "Wǒ zhōngyú zhǎodào yàoshi le.", "Cuối cùng tôi đã tìm thấy chìa khóa rồi."),
        study("我怎么也找不到那本书。", "Wǒ zěnme yě zhǎobudào nà běn shū.", "Tôi thế nào cũng không tìm thấy cuốn sách đó."),
        study("他听不到你说的话。", "Tā tīngbudào nǐ shuō de huà.", "Anh ấy không nghe thấy lời bạn nói.")
      ]),
      grammarNote("2. 忘在 + nơi chốn", "Khi muốn nói để quên một vật ở đâu, có thể dùng 忘在 + địa điểm. Đây là mẫu rất thực dụng khi nói về đồ thất lạc.", study("我把钥匙忘在办公室了。", "Wǒ bǎ yàoshi wàng zài bàngōngshì le.", "Tôi đã để quên chìa khóa ở văn phòng rồi."), [
        study("我可能把书忘在教室了。", "Wǒ kěnéng bǎ shū wàng zài jiàoshì le.", "Có thể tôi đã để quên sách ở lớp học."),
        study("她把钱包忘在出租车上了。", "Tā bǎ qiánbāo wàng zài chūzūchē shàng le.", "Cô ấy đã để quên ví trên taxi."),
        study("你是不是把手机忘在家里了？", "Nǐ shì bú shì bǎ shǒujī wàng zài jiālǐ le?", "Có phải bạn để quên điện thoại ở nhà rồi không?")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 突然", "2. 找不到", "3. 钥匙"], options: ["a. chìa khóa", "b. đột nhiên", "c. không tìm thấy"], answer: "1-b, 2-c, 3-a" }],
      [{ question: "Điền từ thích hợp.", prompt: ["我的手机怎么___然找不到了？", "我终于找___那本词典了。", "你是不是把钥匙忘在办公室___？"], answer: "突 / 到 / 了" }],
      [{ question: "Câu nào đúng?", options: ["A. 我找不到我的包了。", "B. 我找我的包不到了。", "C. 我不到找我的包了。"], answer: "A. 我找不到我的包了。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 你看见我的钥匙了吗？", "B: ____________", "A: 那我去办公室看看。"], answer: "B: 没看见，你是不是忘在办公室了？" }],
      "Tự kiểm tra: bạn có thể nói 2 câu về việc làm mất hoặc để quên đồ bằng 找不到 và 忘在 không?"
    ),
    quickSummary: {
      words: ["突然", "找到", "找不到", "钥匙", "忘", "可能"],
      patterns: ["我的钥匙怎么突然找不到了？", "我把钥匙忘在办公室了。"],
      reminder: "Đừng chỉ nói 找. Nếu muốn nhấn kết quả, hãy dùng rõ 找到 hoặc 找不到."
    }
  },
  7: {
    objective: "Nói về việc quen biết ai đó trong bao lâu, nhắc lại quá trình quen nhau và diễn đạt một mối quan hệ đã kéo dài đến hiện tại.",
    vocabulary: [
      vocab("认识", "rènshi", "quen, biết", "động từ", "Dùng cho việc biết hoặc quen một người.", "我认识她很多年了。", "Wǒ rènshi tā hěn duō nián le.", "Tôi quen cô ấy nhiều năm rồi."),
      vocab("五年", "wǔ nián", "năm năm", "cụm thời lượng", "Dùng để nói khoảng thời gian kéo dài.", "我们认识五年了。", "Wǒmen rènshi wǔ nián le.", "Chúng tôi quen nhau năm năm rồi."),
      vocab("同事", "tóngshì", "đồng nghiệp", "danh từ", "Người làm cùng nơi.", "她以前是我的同事。", "Tā yǐqián shì wǒ de tóngshì.", "Trước đây cô ấy là đồng nghiệp của tôi."),
      vocab("以前", "yǐqián", "trước đây", "danh từ thời gian", "Dùng để nói bối cảnh quen biết ban đầu.", "我们以前在一个公司工作。", "Wǒmen yǐqián zài yí ge gōngsī gōngzuò.", "Trước đây chúng tôi làm ở cùng một công ty."),
      vocab("后来", "hòulái", "sau đó", "danh từ thời gian", "Dùng để nối các giai đoạn sự việc.", "后来她去上海了。", "Hòulái tā qù Shànghǎi le.", "Sau đó cô ấy đi Thượng Hải."),
      vocab("联系", "liánxì", "liên lạc", "động từ/danh từ", "Dùng khi nói vẫn giữ quan hệ.", "我们现在还常常联系。", "Wǒmen xiànzài hái chángcháng liánxì.", "Bây giờ chúng tôi vẫn thường xuyên liên lạc."),
      vocab("毕业", "bìyè", "tốt nghiệp", "động từ", "Mốc thời gian hay gặp khi kể chuyện quen biết.", "大学毕业以后我们还见过几次。", "Dàxué bìyè yǐhòu wǒmen hái jiànguo jǐ cì.", "Sau khi tốt nghiệp đại học chúng tôi còn gặp vài lần."),
      vocab("一直", "yìzhí", "suốt, luôn", "phó từ", "Nhấn việc kéo dài liên tục.", "我们一直是好朋友。", "Wǒmen yìzhí shì hǎo péngyou.", "Chúng tôi vẫn luôn là bạn tốt.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Nói đã quen nhau bao lâu.", [
        study("A: 你跟她认识多久了？", "A: Nǐ gēn tā rènshi duōjiǔ le?", "A: Bạn quen cô ấy bao lâu rồi?"),
        study("B: 我跟她都认识五年了。", "B: Wǒ gēn tā dōu rènshi wǔ nián le.", "B: Tôi và cô ấy quen nhau năm năm rồi."),
        study("A: 原来你们认识这么久了。", "A: Yuánlái nǐmen rènshi zhème jiǔ le.", "A: Hóa ra hai người quen nhau lâu như vậy rồi.")
      ]),
      dialogueBlock("Tình huống 2", "Kể lại lúc mới quen.", [
        study("A: 你们是怎么认识的？", "A: Nǐmen shì zěnme rènshi de?", "A: Hai người quen nhau như thế nào?"),
        study("B: 我们以前在一个公司工作，她那时候是我的同事。", "B: Wǒmen yǐqián zài yí ge gōngsī gōngzuò, tā nà shíhou shì wǒ de tóngshì.", "B: Trước đây chúng tôi làm ở cùng một công ty, lúc đó cô ấy là đồng nghiệp của tôi."),
        study("A: 怪不得你们这么熟。", "A: Guàibude nǐmen zhème shú.", "A: Bảo sao hai người thân như vậy.")
      ]),
      dialogueBlock("Tình huống 3", "Nói vẫn còn liên lạc.", [
        study("A: 她后来不是去上海了吗？", "A: Tā hòulái bú shì qù Shànghǎi le ma?", "A: Sau đó chẳng phải cô ấy đã đi Thượng Hải rồi sao?"),
        study("B: 对，但是我们一直有联系。", "B: Duì, dànshì wǒmen yìzhí yǒu liánxì.", "B: Đúng, nhưng chúng tôi vẫn luôn có liên lạc."),
        study("A: 那你们关系真不错。", "A: Nà nǐmen guānxi zhēn búcuò.", "A: Vậy quan hệ của hai người thật tốt.")
      ]),
      dialogueBlock("Tình huống 4", "Nhắc lại mốc sau khi tốt nghiệp.", [
        study("A: 你大学毕业以后还见过她吗？", "A: Nǐ dàxué bìyè yǐhòu hái jiànguo tā ma?", "A: Sau khi tốt nghiệp đại học bạn còn gặp cô ấy không?"),
        study("B: 见过，我们去年还一起吃过饭。", "B: Jiànguo, wǒmen qùnián hái yìqǐ chīguo fàn.", "B: Có gặp, năm ngoái chúng tôi còn ăn cơm cùng nhau."),
        study("A: 那你们感情一定很好。", "A: Nà nǐmen gǎnqíng yídìng hěn hǎo.", "A: Vậy tình cảm của hai người chắc chắn rất tốt.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. Động từ + thời lượng + 了", "Mẫu này diễn tả một hành động hoặc trạng thái bắt đầu từ trước và vẫn kéo dài đến hiện tại.", study("我们认识五年了。", "Wǒmen rènshi wǔ nián le.", "Chúng tôi quen nhau năm năm rồi."), [
        study("我在这家公司工作三年了。", "Wǒ zài zhè jiā gōngsī gōngzuò sān nián le.", "Tôi làm ở công ty này ba năm rồi."),
        study("他学汉语两个月了。", "Tā xué Hànyǔ liǎng ge yuè le.", "Anh ấy học tiếng Trung hai tháng rồi."),
        study("我们住在这里很久了。", "Wǒmen zhù zài zhèlǐ hěn jiǔ le.", "Chúng tôi sống ở đây lâu rồi.")
      ]),
      grammarNote("2. 一直 + động từ / trạng thái", "一直 nhấn việc duy trì liên tục, không bị ngắt quãng trong một khoảng thời gian.", study("我们一直有联系。", "Wǒmen yìzhí yǒu liánxì.", "Chúng tôi vẫn luôn có liên lạc."), [
        study("她一直想去中国留学。", "Tā yìzhí xiǎng qù Zhōngguó liúxué.", "Cô ấy luôn muốn sang Trung Quốc du học."),
        study("我一直记得那件事。", "Wǒ yìzhí jìde nà jiàn shì.", "Tôi vẫn luôn nhớ chuyện đó."),
        study("他一直住在北京。", "Tā yìzhí zhù zài Běijīng.", "Anh ấy vẫn luôn sống ở Bắc Kinh.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 认识", "2. 同事", "3. 联系"], options: ["a. đồng nghiệp", "b. liên lạc", "c. quen, biết"], answer: "1-c, 2-a, 3-b" }],
      [{ question: "Điền từ thích hợp.", prompt: ["我们认识五___了。", "她以前是我的同___。", "后来我们还一直有联___。"], answer: "年 / 事 / 系" }],
      [{ question: "Câu nào đúng?", options: ["A. 我们认识五年了。", "B. 我们五年了认识。", "C. 我们了认识五年。"], answer: "A. 我们认识五年了。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 你们是怎么认识的？", "B: ____________", "A: 怪不得你们这么熟。"], answer: "B: 我们以前在一个公司工作，她那时候是我的同事。" }],
      "Tự kiểm tra: bạn có thể dùng 认识...了 để nói mình đã quen một người bao lâu chưa?"
    ),
    quickSummary: {
      words: ["认识", "五年", "同事", "以前", "后来", "联系"],
      patterns: ["我们认识五年了。", "我们一直有联系。"],
      reminder: "Khi muốn nói thời lượng kéo dài đến hiện tại, đừng quên đặt 了 ở cuối câu."
    }
  },
  8: {
    objective: "Nói về việc đi cùng ai đó, bày tỏ sẽ theo người khác đến cùng một nơi và dùng mẫu câu '...就...' để nhấn kết quả theo điều kiện phía trước.",
    vocabulary: [
      vocab("去哪儿", "qù nǎr", "đi đâu", "cụm nghi vấn", "Dùng để hỏi đích đến.", "你们今天去哪儿？", "Nǐmen jīntiān qù nǎr?", "Hôm nay các bạn đi đâu?"),
      vocab("就", "jiù", "thì, sẽ", "phó từ", "Trong bài này dùng để nối điều kiện và kết quả rất trực tiếp.", "你去哪儿我就去哪儿。", "Nǐ qù nǎr wǒ jiù qù nǎr.", "Bạn đi đâu tôi đi đó."),
      vocab("一起", "yìqǐ", "cùng nhau", "phó từ", "Dùng khi hai người đi cùng hoặc làm cùng.", "我们一起去火车站吧。", "Wǒmen yìqǐ qù huǒchēzhàn ba.", "Chúng ta cùng đi ga tàu nhé."),
      vocab("决定", "juédìng", "quyết định", "động từ/danh từ", "Dùng khi đã chốt kế hoạch.", "你决定好了吗？", "Nǐ juédìng hǎo le ma?", "Bạn quyết định xong chưa?"),
      vocab("跟", "gēn", "theo, với", "giới từ/động từ", "Dùng khi đi cùng hoặc theo ai đó.", "今天我跟朋友一起去。", "Jīntiān wǒ gēn péngyou yìqǐ qù.", "Hôm nay tôi đi cùng bạn."),
      vocab("方便", "fāngbiàn", "thuận tiện", "tính từ", "Dùng khi cân nhắc kế hoạch đi lại.", "下午去比较方便。", "Xiàwǔ qù bǐjiào fāngbiàn.", "Chiều đi thì tiện hơn."),
      vocab("顺便", "shùnbiàn", "tiện thể", "phó từ", "Dùng khi kết hợp thêm một việc khác.", "我们顺便去买点儿水果吧。", "Wǒmen shùnbiàn qù mǎi diǎnr shuǐguǒ ba.", "Chúng ta tiện thể đi mua ít trái cây nhé."),
      vocab("等", "děng", "đợi", "động từ", "Dùng khi một người cần chờ người khác rồi mới đi.", "你先等我十分钟。", "Nǐ xiān děng wǒ shí fēnzhōng.", "Bạn đợi tôi mười phút trước nhé.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Nói sẽ đi cùng người khác.", [
        study("A: 你今天下午去哪儿？", "A: Nǐ jīntiān xiàwǔ qù nǎr?", "A: Chiều nay bạn đi đâu?"),
        study("B: 我去图书馆，你去哪儿我就跟你去哪儿。", "B: Wǒ qù túshūguǎn, nǐ qù nǎr wǒ jiù gēn nǐ qù nǎr.", "B: Tôi đi thư viện, còn bạn đi đâu thì tôi đi cùng bạn đến đó."),
        study("A: 那我们还是一起去图书馆吧。", "A: Nà wǒmen háishi yìqǐ qù túshūguǎn ba.", "A: Vậy thôi chúng ta cứ cùng đi thư viện nhé.")
      ]),
      dialogueBlock("Tình huống 2", "Chưa quyết định xong địa điểm.", [
        study("A: 你决定好周末去哪儿了吗？", "A: Nǐ juédìng hǎo zhōumò qù nǎr le ma?", "A: Bạn quyết định xong cuối tuần đi đâu chưa?"),
        study("B: 还没有，你去哪儿我就去哪儿。", "B: Hái méiyǒu, nǐ qù nǎr wǒ jiù qù nǎr.", "B: Vẫn chưa, bạn đi đâu tôi đi đó."),
        study("A: 那我们去郊区走走吧。", "A: Nà wǒmen qù jiāoqū zǒuzou ba.", "A: Vậy chúng ta đi vùng ngoại ô dạo một chút nhé.")
      ]),
      dialogueBlock("Tình huống 3", "Chờ nhau rồi cùng đi.", [
        study("A: 你先等我一会儿，我马上下楼。", "A: Nǐ xiān děng wǒ yíhuìr, wǒ mǎshàng xiàlóu.", "A: Bạn đợi tôi một lát, tôi xuống ngay."),
        study("B: 好，我在门口等你。", "B: Hǎo, wǒ zài ménkǒu děng nǐ.", "B: Được, tôi đợi bạn ở cửa."),
        study("A: 等我到了，我们就一起出发。", "A: Děng wǒ dào le, wǒmen jiù yìqǐ chūfā.", "A: Khi tôi xuống đến nơi, chúng ta sẽ cùng xuất phát.")
      ]),
      dialogueBlock("Tình huống 4", "Tiện thể làm thêm việc khác.", [
        study("A: 去超市方便吗？", "A: Qù chāoshì fāngbiàn ma?", "A: Đi siêu thị có tiện không?"),
        study("B: 方便，我们去学校的时候顺便去一趟。", "B: Fāngbiàn, wǒmen qù xuéxiào de shíhou shùnbiàn qù yí tàng.", "B: Tiện, lúc đi trường chúng ta tiện thể ghé một chuyến."),
        study("A: 好，那就这么安排。", "A: Hǎo, nà jiù zhème ānpái.", "A: Được, vậy sắp xếp như thế nhé.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. Nghi vấn từ + 就 + nghi vấn từ", "Mẫu này dùng để nói '...thì...' theo cách rất tự nhiên, thường thể hiện sẽ theo người kia hoặc làm đúng theo tình huống phía trước.", study("你去哪儿我就去哪儿。", "Nǐ qù nǎr wǒ jiù qù nǎr.", "Bạn đi đâu tôi đi đó."), [
        study("你什么时候走，我就什么时候走。", "Nǐ shénme shíhou zǒu, wǒ jiù shénme shíhou zǒu.", "Bạn đi lúc nào thì tôi đi lúc đó."),
        study("你吃什么，我就吃什么。", "Nǐ chī shénme, wǒ jiù chī shénme.", "Bạn ăn gì thì tôi ăn đó."),
        study("你住哪儿，我就住哪儿附近。", "Nǐ zhù nǎr, wǒ jiù zhù nǎr fùjìn.", "Bạn ở đâu thì tôi ở gần đó.")
      ]),
      grammarNote("2. 先...，就...", "先 nêu điều kiện hoặc bước đầu tiên; 就 nhấn việc sau đó xảy ra ngay hoặc theo logic rất trực tiếp.", study("等我到了，我们就一起出发。", "Děng wǒ dào le, wǒmen jiù yìqǐ chūfā.", "Khi tôi đến nơi, chúng ta sẽ cùng xuất phát."), [
        study("你先休息一下，我就去买票。", "Nǐ xiān xiūxi yíxià, wǒ jiù qù mǎi piào.", "Bạn nghỉ một lát trước, tôi đi mua vé ngay."),
        study("他一回家就做饭。", "Tā yì huí jiā jiù zuòfàn.", "Anh ấy cứ về đến nhà là nấu cơm ngay."),
        study("你到了就给我打电话。", "Nǐ dào le jiù gěi wǒ dǎ diànhuà.", "Bạn đến nơi thì gọi điện cho tôi ngay.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 就", "2. 顺便", "3. 等"], options: ["a. tiện thể", "b. đợi", "c. thì, sẽ"], answer: "1-c, 2-a, 3-b" }],
      [{ question: "Điền từ thích hợp.", prompt: ["你去哪儿我___去哪儿。", "你先___我十分钟。", "我们去学校的时候___便去超市。"], answer: "就 / 等 / 顺" }],
      [{ question: "Câu nào đúng?", options: ["A. 你去哪儿我就去哪儿。", "B. 你去哪儿我去哪儿就。", "C. 你就去哪儿我去哪儿。"], answer: "A. 你去哪儿我就去哪儿。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 你决定好周末去哪儿了吗？", "B: ____________", "A: 那我们去郊区走走吧。"], answer: "B: 还没有，你去哪儿我就去哪儿。" }],
      "Tự kiểm tra: bạn có thể dùng mẫu 你...我就... để nói sẽ đi theo kế hoạch của người khác không?"
    ),
    quickSummary: {
      words: ["去哪儿", "就", "一起", "决定", "跟", "顺便"],
      patterns: ["你去哪儿我就去哪儿。", "你到了就给我打电话。"],
      reminder: "就 trong bài này không chỉ là 'liền'. Nó còn giúp nối điều kiện phía trước với kết quả phía sau rất gọn."
    }
  },
  9: {
    objective: "Miêu tả khả năng nói tiếng Trung của người khác, dùng bổ ngữ trạng thái với 得 và so sánh ngang bằng bằng 跟...一样.",
    vocabulary: [
      vocab("汉语", "Hànyǔ", "tiếng Trung", "danh từ", "Ngôn ngữ được đem ra nhận xét trong bài.", "她的汉语说得很好。", "Tā de Hànyǔ shuō de hěn hǎo.", "Tiếng Trung của cô ấy nói rất tốt."),
      vocab("说得", "shuō de", "nói một cách...", "cụm bổ ngữ", "Dùng trước phần đánh giá mức độ nói.", "他说得很清楚。", "Tā shuō de hěn qīngchu.", "Anh ấy nói rất rõ."),
      vocab("跟", "gēn", "với, như", "giới từ", "Trong bài này dùng trong mẫu 跟...一样.", "她说得跟老师一样认真。", "Tā shuō de gēn lǎoshī yíyàng rènzhēn.", "Cô ấy nói nghiêm túc như giáo viên."),
      vocab("一样", "yíyàng", "giống nhau", "tính từ", "Dùng để so sánh ngang bằng.", "这两个句子的意思一样。", "Zhè liǎng ge jùzi de yìsi yíyàng.", "Ý nghĩa của hai câu này giống nhau."),
      vocab("清楚", "qīngchu", "rõ ràng", "tính từ", "Hay dùng để nhận xét cách nói.", "你再说清楚一点儿。", "Nǐ zài shuō qīngchu yìdiǎnr.", "Bạn nói rõ hơn một chút nữa đi."),
      vocab("发音", "fāyīn", "phát âm", "danh từ/động từ", "Một tiêu chí đánh giá việc nói ngoại ngữ.", "她的发音很标准。", "Tā de fāyīn hěn biāozhǔn.", "Phát âm của cô ấy rất chuẩn."),
      vocab("标准", "biāozhǔn", "chuẩn", "tính từ", "Dùng để nói phát âm hay cách nói rất đúng.", "他的普通话说得很标准。", "Tā de pǔtōnghuà shuō de hěn biāozhǔn.", "Anh ấy nói phổ thông rất chuẩn."),
      vocab("认真", "rènzhēn", "nghiêm túc", "tính từ", "Dùng để nhận xét cách học hoặc cách nói.", "她学汉语很认真。", "Tā xué Hànyǔ hěn rènzhēn.", "Cô ấy học tiếng Trung rất nghiêm túc.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Khen khả năng nói của bạn học.", [
        study("A: 她的汉语怎么这么好？", "A: Tā de Hànyǔ zěnme zhème hǎo?", "A: Sao tiếng Trung của cô ấy lại tốt thế?"),
        study("B: 她的汉语说得跟中国人一样好。", "B: Tā de Hànyǔ shuō de gēn Zhōngguórén yíyàng hǎo.", "B: Tiếng Trung của cô ấy nói tốt như người Trung Quốc vậy."),
        study("A: 怪不得大家都喜欢跟她聊天。", "A: Guàibude dàjiā dōu xǐhuan gēn tā liáotiān.", "A: Bảo sao mọi người đều thích nói chuyện với cô ấy.")
      ]),
      dialogueBlock("Tình huống 2", "Nhận xét phát âm.", [
        study("A: 你觉得她的发音怎么样？", "A: Nǐ juéde tā de fāyīn zěnmeyàng?", "A: Bạn thấy phát âm của cô ấy thế nào?"),
        study("B: 很标准，而且说得很清楚。", "B: Hěn biāozhǔn, érqiě shuō de hěn qīngchu.", "B: Rất chuẩn, hơn nữa còn nói rất rõ."),
        study("A: 难怪老师常常表扬她。", "A: Nánguài lǎoshī chángcháng biǎoyáng tā.", "A: Thảo nào giáo viên thường xuyên khen cô ấy.")
      ]),
      dialogueBlock("Tình huống 3", "So sánh với người khác.", [
        study("A: 你的汉语也不错。", "A: Nǐ de Hànyǔ yě búcuò.", "A: Tiếng Trung của bạn cũng không tệ."),
        study("B: 还差得远呢，我说得没有她那么自然。", "B: Hái chà de yuǎn ne, wǒ shuō de méiyǒu tā nàme zìrán.", "B: Vẫn còn kém xa, tôi nói không tự nhiên được như cô ấy."),
        study("A: 但是你发音越来越好了。", "A: Dànshì nǐ fāyīn yuèláiyuè hǎo le.", "A: Nhưng phát âm của bạn ngày càng tốt hơn rồi.")
      ]),
      dialogueBlock("Tình huống 4", "Nói về cách học.", [
        study("A: 她为什么进步这么快？", "A: Tā wèishénme jìnbù zhème kuài?", "A: Tại sao cô ấy tiến bộ nhanh như vậy?"),
        study("B: 因为她学得很认真，每天都练习发音。", "B: Yīnwèi tā xué de hěn rènzhēn, měitiān dōu liànxí fāyīn.", "B: Vì cô ấy học rất nghiêm túc, mỗi ngày đều luyện phát âm."),
        study("A: 原来是这样。", "A: Yuánlái shì zhèyàng.", "A: Ra là vậy.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. Động từ + 得 + bổ ngữ", "得 đặt sau động từ để bổ sung cách thức, mức độ hoặc kết quả của hành động đó.", study("她的汉语说得很清楚。", "Tā de Hànyǔ shuō de hěn qīngchu.", "Tiếng Trung của cô ấy nói rất rõ."), [
        study("他写得很认真。", "Tā xiě de hěn rènzhēn.", "Anh ấy viết rất nghiêm túc."),
        study("你跑得太快了。", "Nǐ pǎo de tài kuài le.", "Bạn chạy nhanh quá."),
        study("她唱得不错。", "Tā chàng de búcuò.", "Cô ấy hát không tệ.")
      ]),
      grammarNote("2. 跟...一样 + tính từ", "Mẫu này dùng để so sánh ngang bằng: hai người hoặc hai vật có mức độ giống nhau ở một điểm nào đó.", study("她的汉语说得跟中国人一样好。", "Tā de Hànyǔ shuō de gēn Zhōngguórén yíyàng hǎo.", "Cô ấy nói tiếng Trung hay như người Trung Quốc."), [
        study("这件衣服跟那件一样贵。", "Zhè jiàn yīfu gēn nà jiàn yíyàng guì.", "Bộ quần áo này đắt như bộ kia."),
        study("我弟弟长得跟我一样高。", "Wǒ dìdi zhǎng de gēn wǒ yíyàng gāo.", "Em trai tôi cao bằng tôi."),
        study("今天跟昨天一样冷。", "Jīntiān gēn zuótiān yíyàng lěng.", "Hôm nay lạnh như hôm qua.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 发音", "2. 标准", "3. 一样"], options: ["a. giống nhau", "b. phát âm", "c. chuẩn"], answer: "1-b, 2-c, 3-a" }],
      [{ question: "Điền từ thích hợp.", prompt: ["她的汉语说___很清楚。", "她说得跟中国人一___好。", "她的发音很标___。"], answer: "得 / 样 / 准" }],
      [{ question: "Câu nào đúng?", options: ["A. 她说得跟中国人一样好。", "B. 她跟中国人得一样说好。", "C. 她说跟中国人得一样好。"], answer: "A. 她说得跟中国人一样好。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 你觉得她的发音怎么样？", "B: ____________", "A: 难怪老师常常表扬她。"], answer: "B: 很标准，而且说得很清楚。" }],
      "Tự kiểm tra: bạn có thể dùng 得 để nhận xét cách nói của ai đó và dùng 跟...一样 để so sánh ngang bằng không?"
    ),
    quickSummary: {
      words: ["说得", "一样", "清楚", "发音", "标准", "认真"],
      patterns: ["她的汉语说得跟中国人一样好。", "她说得很清楚。"],
      reminder: "Khi nhận xét cách làm một việc, hãy ưu tiên mẫu động từ + 得 + bổ ngữ."
    }
  },
  10: {
    objective: "So sánh hai môn học hoặc hai sự vật, diễn đạt mức độ chênh lệch rõ hơn bằng 比 và 多了, đồng thời nói cảm nhận cá nhân về mức độ khó dễ.",
    vocabulary: [
      vocab("数学", "shùxué", "toán", "danh từ", "Một môn học quen thuộc để so sánh độ khó.", "数学比历史难。", "Shùxué bǐ lìshǐ nán.", "Toán khó hơn lịch sử."),
      vocab("历史", "lìshǐ", "lịch sử", "danh từ", "Môn học dùng làm đối tượng so sánh.", "我最近在复习历史。", "Wǒ zuìjìn zài fùxí lìshǐ.", "Gần đây tôi đang ôn lịch sử."),
      vocab("难", "nán", "khó", "tính từ", "Tính từ chính của bài 10.", "这个问题不太难。", "Zhège wèntí bú tài nán.", "Vấn đề này không quá khó."),
      vocab("容易", "róngyì", "dễ", "tính từ", "Dùng để nói ngược lại với 难.", "语法比生词容易一点儿。", "Yǔfǎ bǐ shēngcí róngyì yìdiǎnr.", "Ngữ pháp dễ hơn từ mới một chút."),
      vocab("多了", "duō le", "hơn nhiều", "bổ ngữ mức độ", "Dùng sau tính từ để nhấn chênh lệch lớn.", "今天比昨天冷多了。", "Jīntiān bǐ zuótiān lěng duō le.", "Hôm nay lạnh hơn hôm qua nhiều."),
      vocab("简单", "jiǎndān", "đơn giản", "tính từ", "Dùng để nhận xét bài tập hoặc môn học.", "前面的练习比较简单。", "Qiánmiàn de liànxí bǐjiào jiǎndān.", "Bài tập phía trước tương đối đơn giản."),
      vocab("复习", "fùxí", "ôn tập", "động từ", "Hay dùng trong ngữ cảnh học tập.", "考试前我要先复习数学。", "Kǎoshì qián wǒ yào xiān fùxí shùxué.", "Trước khi thi tôi phải ôn toán trước."),
      vocab("考试", "kǎoshì", "kỳ thi; thi", "danh từ/động từ", "Ngữ cảnh dễ phát sinh so sánh môn khó dễ.", "下周我们有两门考试。", "Xià zhōu wǒmen yǒu liǎng mén kǎoshì.", "Tuần sau chúng tôi có hai môn thi.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "So sánh hai môn học.", [
        study("A: 你觉得数学和历史哪个更难？", "A: Nǐ juéde shùxué hé lìshǐ nǎge gèng nán?", "A: Bạn thấy toán và lịch sử môn nào khó hơn?"),
        study("B: 我觉得数学比历史难多了。", "B: Wǒ juéde shùxué bǐ lìshǐ nán duō le.", "B: Tôi thấy toán khó hơn lịch sử nhiều."),
        study("A: 可是我觉得历史更难记。", "A: Kěshì wǒ juéde lìshǐ gèng nán jì.", "A: Nhưng tôi thấy lịch sử khó nhớ hơn.")
      ]),
      dialogueBlock("Tình huống 2", "Nói môn nào dễ hơn.", [
        study("A: 你为什么喜欢上历史课？", "A: Nǐ wèishénme xǐhuan shàng lìshǐ kè?", "A: Tại sao bạn thích học lịch sử?"),
        study("B: 因为我觉得历史比数学容易一点儿。", "B: Yīnwèi wǒ juéde lìshǐ bǐ shùxué róngyì yìdiǎnr.", "B: Vì tôi thấy lịch sử dễ hơn toán một chút."),
        study("A: 那你复习起来应该轻松一些。", "A: Nà nǐ fùxí qǐlai yīnggāi qīngsōng yìxiē.", "A: Vậy lúc ôn tập chắc bạn thoải mái hơn một chút.")
      ]),
      dialogueBlock("Tình huống 3", "Chuẩn bị trước kỳ thi.", [
        study("A: 下周考试你先复习哪门课？", "A: Xià zhōu kǎoshì nǐ xiān fùxí nǎ mén kè?", "A: Tuần sau thi, bạn sẽ ôn môn nào trước?"),
        study("B: 我先复习数学，因为这门课比别的课难得多。", "B: Wǒ xiān fùxí shùxué, yīnwèi zhè mén kè bǐ bié de kè nán de duō.", "B: Tôi ôn toán trước vì môn này khó hơn các môn khác nhiều."),
        study("A: 那你今天晚上要辛苦了。", "A: Nà nǐ jīntiān wǎnshang yào xīnkǔ le.", "A: Vậy tối nay bạn sẽ vất vả rồi.")
      ]),
      dialogueBlock("Tình huống 4", "So sánh bài tập hôm nay với hôm qua.", [
        study("A: 今天老师留的作业怎么样？", "A: Jīntiān lǎoshī liú de zuòyè zěnmeyàng?", "A: Bài tập giáo viên giao hôm nay thế nào?"),
        study("B: 比昨天难多了，我做了很久还没做完。", "B: Bǐ zuótiān nán duō le, wǒ zuò le hěn jiǔ hái méi zuòwán.", "B: Khó hơn hôm qua nhiều, tôi làm rất lâu mà vẫn chưa xong."),
        study("A: 那我们一会儿一起讨论吧。", "A: Nà wǒmen yíhuìr yìqǐ tǎolùn ba.", "A: Vậy một lát nữa chúng ta cùng thảo luận nhé.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. A 比 B + tính từ", "比 dùng để so sánh hai sự vật, người hoặc tình huống. Phần sau 比 thường là tính từ hoặc cụm miêu tả mức độ.", study("数学比历史难。", "Shùxué bǐ lìshǐ nán.", "Toán khó hơn lịch sử."), [
        study("今天比昨天冷。", "Jīntiān bǐ zuótiān lěng.", "Hôm nay lạnh hơn hôm qua."),
        study("这本书比那本书贵。", "Zhè běn shū bǐ nà běn shū guì.", "Cuốn sách này đắt hơn cuốn kia."),
        study("我弟弟比我高。", "Wǒ dìdi bǐ wǒ gāo.", "Em trai tôi cao hơn tôi.")
      ]),
      grammarNote("2. Tính từ + 多了 / 一点儿", "Sau cấu trúc 比, có thể thêm 多了 để nhấn chênh lệch lớn, hoặc 一点儿 để nói chênh lệch nhẹ.", study("数学比历史难多了。", "Shùxué bǐ lìshǐ nán duō le.", "Toán khó hơn lịch sử nhiều."), [
        study("历史比数学容易一点儿。", "Lìshǐ bǐ shùxué róngyì yìdiǎnr.", "Lịch sử dễ hơn toán một chút."),
        study("今天比昨天忙多了。", "Jīntiān bǐ zuótiān máng duō le.", "Hôm nay bận hơn hôm qua nhiều."),
        study("这条路比那条路近一点儿。", "Zhè tiáo lù bǐ nà tiáo lù jìn yìdiǎnr.", "Con đường này gần hơn con đường kia một chút.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 数学", "2. 难", "3. 复习"], options: ["a. khó", "b. toán", "c. ôn tập"], answer: "1-b, 2-a, 3-c" }],
      [{ question: "Điền từ thích hợp.", prompt: ["数学比历史难___了。", "历史比数学容易一___儿。", "考试前我要先复___数学。"], answer: "多 / 点 / 习" }],
      [{ question: "Câu nào đúng?", options: ["A. 数学比历史难多了。", "B. 数学难比历史多了。", "C. 数学比难历史多了。"], answer: "A. 数学比历史难多了。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 你觉得数学和历史哪个更难？", "B: ____________", "A: 可是我觉得历史更难记。"], answer: "B: 我觉得数学比历史难多了。" }],
      "Tự kiểm tra: bạn có thể so sánh hai môn học bằng 比 và tự thêm 多了 hoặc 一点儿 đúng chỗ không?"
    ),
    quickSummary: {
      words: ["数学", "历史", "难", "容易", "多了", "复习"],
      patterns: ["数学比历史难多了。", "历史比数学容易一点儿。"],
      reminder: "So sánh bằng 比 xong, hãy cân nhắc thêm 多了 hay 一点儿 để mức độ tự nhiên hơn."
    }
  },
  11: {
    objective: "Nhắc người khác đừng quên làm một việc, đặc biệt là tắt điều hòa hoặc các thiết bị điện trước khi rời đi.",
    vocabulary: [
      vocab("别", "bié", "đừng", "phó từ", "Dùng để nhắc hoặc ngăn người khác đừng làm/quên một việc.", "别着急，我们还有时间。", "Bié zháojí, wǒmen hái yǒu shíjiān.", "Đừng vội, chúng ta vẫn còn thời gian."),
      vocab("忘", "wàng", "quên", "động từ", "Từ chính của bài khi nhắc người khác nhớ một việc.", "别忘了带钥匙。", "Bié wàng le dài yàoshi.", "Đừng quên mang chìa khóa."),
      vocab("空调", "kōngtiáo", "điều hòa", "danh từ", "Thiết bị điện rất hay xuất hiện trong ngữ cảnh nhắc nhở.", "教室里的空调还开着。", "Jiàoshì lǐ de kōngtiáo hái kāizhe.", "Điều hòa trong lớp vẫn còn đang bật."),
      vocab("关", "guān", "tắt; đóng", "động từ", "Dùng để tắt điều hòa, tắt đèn hoặc đóng cửa.", "请把灯关一下。", "Qǐng bǎ dēng guān yíxià.", "Làm ơn tắt đèn giúp một chút."),
      vocab("开着", "kāizhe", "đang mở/bật", "trạng thái", "Dùng để miêu tả trạng thái vẫn đang bật.", "窗户开着呢。", "Chuānghu kāizhe ne.", "Cửa sổ vẫn đang mở."),
      vocab("出门", "chūmén", "ra ngoài, ra khỏi cửa", "động từ", "Ngữ cảnh thường đi cùng lời nhắc trước khi rời đi.", "出门以前记得关门。", "Chūmén yǐqián jìde guānmén.", "Trước khi ra ngoài nhớ đóng cửa."),
      vocab("电", "diàn", "điện", "danh từ", "Dùng trong ngữ cảnh tiết kiệm điện.", "这样太浪费电了。", "Zhèyàng tài làngfèi diàn le.", "Như vậy lãng phí điện quá."),
      vocab("浪费", "làngfèi", "lãng phí", "động từ/tính từ", "Dùng khi nhắc nhở tiết kiệm điện, nước.", "空调开一天很浪费。", "Kōngtiáo kāi yì tiān hěn làngfèi.", "Bật điều hòa cả ngày thì rất lãng phí.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Nhắc trước khi ra khỏi phòng.", [
        study("A: 你走的时候别忘了把空调关了。", "A: Nǐ zǒu de shíhou bié wàng le bǎ kōngtiáo guān le.", "A: Lúc đi bạn đừng quên tắt điều hòa nhé."),
        study("B: 好，我一会儿就关。", "B: Hǎo, wǒ yíhuìr jiù guān.", "B: Được, lát nữa tôi sẽ tắt."),
        study("A: 还有灯，也别忘了。", "A: Hái yǒu dēng, yě bié wàng le.", "A: Còn đèn nữa, cũng đừng quên nhé.")
      ]),
      dialogueBlock("Tình huống 2", "Phát hiện quên tắt thiết bị.", [
        study("A: 你刚才出去的时候关空调了吗？", "A: Nǐ gāngcái chūqù de shíhou guān kōngtiáo le ma?", "A: Lúc nãy bạn ra ngoài có tắt điều hòa không?"),
        study("B: 哎呀，我忘了。", "B: Āiyā, wǒ wàng le.", "B: Ôi, tôi quên mất rồi."),
        study("A: 那快回去关一下吧。", "A: Nà kuài huíqù guān yíxià ba.", "A: Vậy mau quay lại tắt đi nhé.")
      ]),
      dialogueBlock("Tình huống 3", "Nói lý do phải tắt điều hòa.", [
        study("A: 空调一直开着，不太好吧？", "A: Kōngtiáo yìzhí kāizhe, bú tài hǎo ba?", "A: Điều hòa cứ bật mãi như vậy thì không ổn lắm nhỉ?"),
        study("B: 对，太浪费电了。", "B: Duì, tài làngfèi diàn le.", "B: Đúng, lãng phí điện quá."),
        study("A: 所以出门以前一定要检查一下。", "A: Suǒyǐ chūmén yǐqián yídìng yào jiǎnchá yíxià.", "A: Vì vậy trước khi ra ngoài nhất định phải kiểm tra một chút.")
      ]),
      dialogueBlock("Tình huống 4", "Nhắc bạn cùng phòng.", [
        study("A: 我先下楼了。", "A: Wǒ xiān xiàlóu le.", "A: Tôi xuống dưới trước nhé."),
        study("B: 好，你放心，我走的时候会把门和空调都关好。", "B: Hǎo, nǐ fàngxīn, wǒ zǒu de shíhou huì bǎ mén hé kōngtiáo dōu guān hǎo.", "B: Được, bạn yên tâm, lúc đi tôi sẽ đóng cửa và tắt điều hòa cẩn thận."),
        study("A: 那就麻烦你了。", "A: Nà jiù máfan nǐ le.", "A: Vậy làm phiền bạn nhé.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 别 + động từ", "别 dùng để khuyên, nhắc hoặc ngăn người khác đừng làm một việc. Trong bài này nó thường đi với 忘.", study("别忘了把空调关了。", "Bié wàng le bǎ kōngtiáo guān le.", "Đừng quên tắt điều hòa nhé."), [
        study("别着急，我们慢慢说。", "Bié zháojí, wǒmen mànman shuō.", "Đừng vội, chúng ta nói từ từ."),
        study("别忘了带学生证。", "Bié wàng le dài xuéshēngzhèng.", "Đừng quên mang thẻ sinh viên."),
        study("别说得太快。", "Bié shuō de tài kuài.", "Đừng nói nhanh quá.")
      ]),
      grammarNote("2. 把 + tân ngữ + động từ + kết quả", "把 nhấn việc xử lý trực tiếp lên tân ngữ, và phía sau thường có kết quả như 关了, 放好, 拿过来.", study("把空调关了", "bǎ kōngtiáo guān le", "tắt điều hòa đi"), [
        study("请把门关上。", "Qǐng bǎ mén guānshang.", "Làm ơn đóng cửa lại."),
        study("你把书放好。", "Nǐ bǎ shū fàng hǎo.", "Bạn cất sách cho gọn."),
        study("我把灯关了。", "Wǒ bǎ dēng guān le.", "Tôi đã tắt đèn rồi.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 空调", "2. 关", "3. 浪费"], options: ["a. tắt", "b. điều hòa", "c. lãng phí"], answer: "1-b, 2-a, 3-c" }],
      [{ question: "Điền từ thích hợp.", prompt: ["别___了把空调关了。", "空调一直开着，太浪___电了。", "你走的时候把门关___。"], answer: "忘 / 费 / 好" }],
      [{ question: "Câu nào đúng?", options: ["A. 别忘了把空调关了。", "B. 别把空调忘了关了。", "C. 空调别忘了了关。"], answer: "A. 别忘了把空调关了。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 你刚才出去的时候关空调了吗？", "B: ____________", "A: 那快回去关一下吧。"], answer: "B: 哎呀，我忘了。" }],
      "Tự kiểm tra: bạn có thể nhắc ai đó đừng quên làm một việc bằng 别忘了... không?"
    ),
    quickSummary: {
      words: ["别", "忘", "空调", "关", "出门", "浪费"],
      patterns: ["别忘了把空调关了。", "空调一直开着，太浪费电了。"],
      reminder: "Khi cần lời nhắc tự nhiên, hãy nhớ cặp rất hay dùng: 别忘了 + 把..."
    }
  },
  12: {
    objective: "Hướng dẫn người khác cất hoặc gửi giữ đồ quan trọng, dùng 把 để nói nơi đặt đồ và diễn đạt cảm giác yên tâm khi giao đồ cho người khác giữ.",
    vocabulary: [
      vocab("重要", "zhòngyào", "quan trọng", "tính từ", "Dùng để nhấn mức độ cần giữ cẩn thận.", "这些文件很重要。", "Zhèxiē wénjiàn hěn zhòngyào.", "Những tài liệu này rất quan trọng."),
      vocab("东西", "dōngxi", "đồ đạc, đồ vật", "danh từ", "Cách gọi chung cho vật dụng.", "重要的东西别乱放。", "Zhòngyào de dōngxi bié luàn fàng.", "Đồ quan trọng đừng để lung tung."),
      vocab("放", "fàng", "đặt, để", "động từ", "Động từ trung tâm của bài.", "请把书放在桌子上。", "Qǐng bǎ shū fàng zài zhuōzi shàng.", "Làm ơn đặt sách lên bàn."),
      vocab("这儿", "zhèr", "chỗ này, ở đây", "đại từ nơi chốn", "Dùng khi nói đặt đồ ở chỗ người nói.", "你先放在我这儿吧。", "Nǐ xiān fàng zài wǒ zhèr ba.", "Bạn cứ để ở chỗ tôi trước đi."),
      vocab("保管", "bǎoguǎn", "giữ hộ, bảo quản", "động từ", "Dùng khi nhận giữ đồ cho người khác.", "我帮你保管一天。", "Wǒ bāng nǐ bǎoguǎn yì tiān.", "Tôi giữ giúp bạn một ngày."),
      vocab("放心", "fàngxīn", "yên tâm", "động từ/tính từ", "Dùng khi trấn an người khác.", "你放心，我不会弄丢。", "Nǐ fàngxīn, wǒ bú huì nòngdiū.", "Bạn yên tâm, tôi sẽ không làm mất đâu."),
      vocab("文件", "wénjiàn", "tài liệu", "danh từ", "Đồ vật thường cần giữ cẩn thận.", "这些文件不能弄湿。", "Zhèxiē wénjiàn bù néng nòng shī.", "Những tài liệu này không được làm ướt."),
      vocab("拿走", "názǒu", "cầm mang đi", "động từ", "Dùng khi nói sau đó sẽ quay lại lấy.", "你明天再来拿走吧。", "Nǐ míngtiān zài lái názǒu ba.", "Ngày mai bạn lại đến lấy mang đi nhé.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Nhờ giữ đồ quan trọng.", [
        study("A: 这些文件太重要了，我怕放在办公室不安全。", "A: Zhèxiē wénjiàn tài zhòngyào le, wǒ pà fàng zài bàngōngshì bù ānquán.", "A: Những tài liệu này quan trọng quá, tôi sợ để ở văn phòng không an toàn."),
        study("B: 那你把重要的东西放在我这儿吧。", "B: Nà nǐ bǎ zhòngyào de dōngxi fàng zài wǒ zhèr ba.", "B: Vậy bạn để đồ quan trọng ở chỗ tôi đi."),
        study("A: 好，那就麻烦你帮我保管一下。", "A: Hǎo, nà jiù máfan nǐ bāng wǒ bǎoguǎn yíxià.", "A: Được, vậy phiền bạn giữ giúp tôi một chút.")
      ]),
      dialogueBlock("Tình huống 2", "Trấn an người gửi đồ.", [
        study("A: 放在你这儿真的没问题吗？", "A: Fàng zài nǐ zhèr zhēn de méi wèntí ma?", "A: Để ở chỗ bạn thật sự không vấn đề gì chứ?"),
        study("B: 你放心，我会把它放好的。", "B: Nǐ fàngxīn, wǒ huì bǎ tā fàng hǎo de.", "B: Bạn yên tâm, tôi sẽ cất nó cẩn thận."),
        study("A: 那我明天下午来拿。", "A: Nà wǒ míngtiān xiàwǔ lái ná.", "A: Vậy chiều mai tôi đến lấy.")
      ]),
      dialogueBlock("Tình huống 3", "Dặn vị trí cụ thể.", [
        study("A: 你把包放在哪儿了？", "A: Nǐ bǎ bāo fàng zài nǎr le?", "A: Bạn đã để túi ở đâu rồi?"),
        study("B: 我把它放在柜子里面了。", "B: Wǒ bǎ tā fàng zài guìzi lǐmiàn le.", "B: Tôi đã để nó trong tủ rồi."),
        study("A: 那就好，那里比较安全。", "A: Nà jiù hǎo, nàlǐ bǐjiào ānquán.", "A: Vậy thì tốt, chỗ đó tương đối an toàn.")
      ]),
      dialogueBlock("Tình huống 4", "Hẹn lúc quay lại lấy đồ.", [
        study("A: 这些东西我什么时候来拿比较方便？", "A: Zhèxiē dōngxi wǒ shénme shíhou lái ná bǐjiào fāngbiàn?", "A: Những đồ này tôi đến lấy lúc nào thì tiện hơn?"),
        study("B: 明天上午吧，到时候我在办公室。", "B: Míngtiān shàngwǔ ba, dào shíhou wǒ zài bàngōngshì.", "B: Sáng mai nhé, lúc đó tôi ở văn phòng."),
        study("A: 好，我拿走以后再谢谢你。", "A: Hǎo, wǒ názǒu yǐhòu zài xièxie nǐ.", "A: Được, sau khi lấy mang đi tôi sẽ cảm ơn bạn sau.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 把 + tân ngữ + 放在 + nơi chốn", "Mẫu này dùng để nói chủ động đặt một vật vào vị trí cụ thể. Đây là cấu trúc rất thực dụng khi chỉ dẫn người khác cất đồ.", study("把重要的东西放在我这儿吧。", "Bǎ zhòngyào de dōngxi fàng zài wǒ zhèr ba.", "Hãy để đồ quan trọng ở chỗ tôi đi."), [
        study("请把书放在桌子上。", "Qǐng bǎ shū fàng zài zhuōzi shàng.", "Làm ơn đặt sách lên bàn."),
        study("我把钥匙放在包里了。", "Wǒ bǎ yàoshi fàng zài bāo lǐ le.", "Tôi đã để chìa khóa trong túi rồi."),
        study("你把杯子放在那边吧。", "Nǐ bǎ bēizi fàng zài nàbiān ba.", "Bạn để cái cốc ở phía đó nhé.")
      ]),
      grammarNote("2. 放好 / 收好", "Sau động từ có thể thêm 好 để nhấn việc đã được sắp xếp ổn, cất cẩn thận hoặc làm đến nơi đến chốn.", study("我会把它放好的。", "Wǒ huì bǎ tā fàng hǎo de.", "Tôi sẽ cất nó cẩn thận."), [
        study("请把这些文件收好。", "Qǐng bǎ zhèxiē wénjiàn shōu hǎo.", "Làm ơn cất những tài liệu này cho cẩn thận."),
        study("我已经把东西整理好了。", "Wǒ yǐjīng bǎ dōngxi zhěnglǐ hǎo le.", "Tôi đã sắp xếp đồ đạc xong cẩn thận rồi."),
        study("你先把护照拿好。", "Nǐ xiān bǎ hùzhào ná hǎo.", "Bạn cầm hộ chiếu cho chắc trước đi.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 重要", "2. 保管", "3. 放心"], options: ["a. yên tâm", "b. giữ hộ", "c. quan trọng"], answer: "1-c, 2-b, 3-a" }],
      [{ question: "Điền từ thích hợp.", prompt: ["把重要的东___放在我这儿吧。", "你放___，我会帮你保管。", "这些文___很重要。"], answer: "西 / 心 / 件" }],
      [{ question: "Câu nào đúng?", options: ["A. 把重要的东西放在我这儿吧。", "B. 把我这儿放在重要的东西吧。", "C. 东西把重要的放在我这儿吧。"], answer: "A. 把重要的东西放在我这儿吧。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 放在你这儿真的没问题吗？", "B: ____________", "A: 那我明天下午来拿。"], answer: "B: 你放心，我会把它放好的。" }],
      "Tự kiểm tra: bạn có thể dùng 把...放在... để nói rõ mình đặt đồ ở đâu không?"
    ),
    quickSummary: {
      words: ["重要", "东西", "放", "这儿", "保管", "放心"],
      patterns: ["把重要的东西放在我这儿吧。", "你放心，我会把它放好的。"],
      reminder: "Khi nói cất đồ, hãy nói rõ 2 phần: vật gì và đặt ở đâu."
    }
  },
  13: {
    objective: "Nói về cách mình quay về bằng phương tiện nào hoặc bằng cách gì, và dùng mẫu 是...回来的 để nhấn mạnh phương thức thực hiện.",
    vocabulary: [
      vocab("走", "zǒu", "đi bộ", "động từ", "Trong bài này dùng để chỉ cách di chuyển bằng chân.", "我是走回来的。", "Wǒ shì zǒu huílai de.", "Tôi đi bộ quay về."),
      vocab("回来", "huílai", "quay lại", "động từ", "Động từ chỉ hướng về phía người nói hoặc nơi nói.", "他已经回来了。", "Tā yǐjīng huílai le.", "Anh ấy đã quay lại rồi."),
      vocab("打车", "dǎchē", "đi taxi", "động từ", "Một cách quay về phổ biến trong thành phố.", "太晚了，我准备打车回去。", "Tài wǎn le, wǒ zhǔnbèi dǎchē huíqù.", "Muộn quá rồi, tôi định đi taxi về."),
      vocab("地铁", "dìtiě", "tàu điện ngầm", "danh từ", "Phương tiện giao thông công cộng hay dùng.", "我平时坐地铁上班。", "Wǒ píngshí zuò dìtiě shàngbān.", "Bình thường tôi đi tàu điện ngầm đi làm."),
      vocab("堵车", "dǔchē", "tắc đường", "động từ/danh từ", "Lý do khiến việc đi lại bị chậm.", "今天路上有点儿堵车。", "Jīntiān lùshang yǒudiǎnr dǔchē.", "Hôm nay trên đường hơi tắc."),
      vocab("顺路", "shùnlù", "thuận đường", "tính từ", "Dùng khi nói đi cùng ai đó tiện đường.", "如果顺路，你可以跟我一起走。", "Rúguǒ shùnlù, nǐ kěyǐ gēn wǒ yìqǐ zǒu.", "Nếu thuận đường, bạn có thể đi cùng tôi."),
      vocab("骑车", "qíchē", "đi xe đạp", "động từ", "Một cách di chuyển khác để so sánh.", "天气好的时候我喜欢骑车。", "Tiānqì hǎo de shíhou wǒ xǐhuan qíchē.", "Khi trời đẹp tôi thích đi xe đạp."),
      vocab("路上", "lùshang", "trên đường", "danh từ nơi chốn", "Dùng để kể chuyện xảy ra trong lúc đi về.", "我在路上碰见了一个老同学。", "Wǒ zài lùshang pèngjiàn le yí ge lǎo tóngxué.", "Tôi gặp một bạn học cũ trên đường.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Hỏi đối phương quay về bằng cách nào.", [
        study("A: 昨天晚上你怎么回来的？", "A: Zuótiān wǎnshang nǐ zěnme huílai de?", "A: Tối qua bạn quay về bằng cách nào?"),
        study("B: 我是走回来的。", "B: Wǒ shì zǒu huílai de.", "B: Tôi đi bộ quay về."),
        study("A: 那么远，你怎么没打车？", "A: Nàme yuǎn, nǐ zěnme méi dǎchē?", "A: Xa như vậy, sao bạn không đi taxi?")
      ]),
      dialogueBlock("Tình huống 2", "Giải thích vì sao chọn cách đó.", [
        study("A: 你为什么走回来？", "A: Nǐ wèishénme zǒu huílai?", "A: Tại sao bạn lại đi bộ về?"),
        study("B: 因为昨天晚上路上堵车，我觉得走路更快。", "B: Yīnwèi zuótiān wǎnshang lùshang dǔchē, wǒ juéde zǒulù gèng kuài.", "B: Vì tối qua đường bị tắc, tôi thấy đi bộ còn nhanh hơn."),
        study("A: 原来是这样。", "A: Yuánlái shì zhèyàng.", "A: Ra là vậy.")
      ]),
      dialogueBlock("Tình huống 3", "So sánh các cách quay về.", [
        study("A: 你平时是坐地铁回来还是骑车回来？", "A: Nǐ píngshí shì zuò dìtiě huílai háishi qíchē huílai?", "A: Bình thường bạn đi tàu điện ngầm về hay đi xe đạp về?"),
        study("B: 如果天气好，我一般骑车回来。", "B: Rúguǒ tiānqì hǎo, wǒ yìbān qíchē huílai.", "B: Nếu thời tiết đẹp, tôi thường đi xe đạp về."),
        study("A: 那还挺方便的。", "A: Nà hái tǐng fāngbiàn de.", "A: Vậy cũng khá tiện đấy.")
      ]),
      dialogueBlock("Tình huống 4", "Đi cùng người khác nếu thuận đường.", [
        study("A: 今天你怎么回去？", "A: Jīntiān nǐ zěnme huíqu?", "A: Hôm nay bạn về bằng cách nào?"),
        study("B: 还没想好，如果顺路我就跟同事一起走。", "B: Hái méi xiǎng hǎo, rúguǒ shùnlù wǒ jiù gēn tóngshì yìqǐ zǒu.", "B: Vẫn chưa nghĩ xong, nếu thuận đường tôi sẽ đi cùng đồng nghiệp."),
        study("A: 好，那你到家了告诉我。", "A: Hǎo, nà nǐ dào jiā le gàosu wǒ.", "A: Được, vậy bạn về đến nhà thì báo tôi nhé.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 是 + cách thức + động từ + 来/去 + 的", "Mẫu này dùng để nhấn mạnh cách thức, phương tiện hoặc chi tiết mà một hành động đã xảy ra.", study("我是走回来的。", "Wǒ shì zǒu huílai de.", "Tôi đi bộ quay về."), [
        study("他是坐地铁来的。", "Tā shì zuò dìtiě lái de.", "Anh ấy đến bằng tàu điện ngầm."),
        study("我们是开车去的。", "Wǒmen shì kāichē qù de.", "Chúng tôi đi bằng ô tô."),
        study("她是跟朋友一起回来的。", "Tā shì gēn péngyou yìqǐ huílai de.", "Cô ấy quay về cùng bạn.")
      ]),
      grammarNote("2. 怎么 + động từ + 来/去", "怎么 đặt trước động từ để hỏi cách thức thực hiện hành động, nhất là phương tiện hoặc con đường đi lại.", study("你怎么回来的？", "Nǐ zěnme huílai de?", "Bạn quay về bằng cách nào?"), [
        study("你怎么来的？", "Nǐ zěnme lái de?", "Bạn đến đây bằng cách nào?"),
        study("他怎么去学校？", "Tā zěnme qù xuéxiào?", "Anh ấy đi đến trường bằng cách nào?"),
        study("你昨天怎么回家的？", "Nǐ zuótiān zěnme huí jiā de?", "Hôm qua bạn về nhà bằng cách nào?")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 走", "2. 打车", "3. 堵车"], options: ["a. tắc đường", "b. đi taxi", "c. đi bộ"], answer: "1-c, 2-b, 3-a" }],
      [{ question: "Điền từ thích hợp.", prompt: ["我是___回来的。", "昨天路上有点儿堵___。", "如果顺___，我就跟你一起走。"], answer: "走 / 车 / 路" }],
      [{ question: "Câu nào đúng?", options: ["A. 我是走回来的。", "B. 我是回来走的。", "C. 我走是回来的。"], answer: "A. 我是走回来的。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 昨天晚上你怎么回来的？", "B: ____________", "A: 那么远，你怎么没打车？"], answer: "B: 我是走回来的。" }],
      "Tự kiểm tra: bạn có thể dùng 是...回来的 để nhấn mạnh mình về bằng phương tiện nào không?"
    ),
    quickSummary: {
      words: ["走", "回来", "打车", "地铁", "堵车", "顺路"],
      patterns: ["我是走回来的。", "你怎么回来的？"],
      reminder: "Muốn nhấn mạnh cách đi, hãy dùng mẫu 是...来的 / 是...回去的, không chỉ nói đơn giản bằng động từ."
    }
  },
  14: {
    objective: "Yêu cầu người khác cầm một vật mang lại gần mình, phân biệt hướng 过来/过去 và dùng 把 trong câu mệnh lệnh ngắn.",
    vocabulary: [
      vocab("水果", "shuǐguǒ", "trái cây", "danh từ", "Vật được dùng trong yêu cầu cầm mang lại đây.", "请把水果拿过来。", "Qǐng bǎ shuǐguǒ ná guòlai.", "Làm ơn cầm hoa quả mang lại đây."),
      vocab("拿", "ná", "cầm, lấy", "động từ", "Động từ cơ bản để nói cầm vật.", "你先把杯子拿起来。", "Nǐ xiān bǎ bēizi ná qǐlai.", "Bạn cầm cái cốc lên trước đi."),
      vocab("过来", "guòlai", "lại đây", "bổ ngữ hướng", "Hướng về phía người nói.", "你快过来看看。", "Nǐ kuài guòlai kànkan.", "Bạn mau lại đây xem thử."),
      vocab("过去", "guòqu", "qua đó", "bổ ngữ hướng", "Hướng rời xa người nói.", "你把文件拿过去吧。", "Nǐ bǎ wénjiàn ná guòqu ba.", "Bạn cầm tài liệu mang qua đó nhé."),
      vocab("递", "dì", "đưa tận tay", "động từ", "Dùng khi trao vật cho ai.", "请把那支笔递给我。", "Qǐng bǎ nà zhī bǐ dì gěi wǒ.", "Làm ơn đưa cây bút đó cho tôi."),
      vocab("那边", "nàbiān", "phía bên kia", "đại từ nơi chốn", "Dùng khi phân biệt hướng đồ vật.", "水果在那边的桌子上。", "Shuǐguǒ zài nàbiān de zhuōzi shàng.", "Trái cây ở trên cái bàn phía bên kia."),
      vocab("盘子", "pánzi", "cái đĩa", "danh từ", "Dùng trong tình huống bưng đồ ăn hoặc trái cây.", "水果在盘子里。", "Shuǐguǒ zài pánzi lǐ.", "Trái cây ở trong đĩa."),
      vocab("小心", "xiǎoxīn", "cẩn thận", "tính từ/động từ", "Dùng khi mang đồ dễ rơi hoặc nặng.", "你拿的时候小心一点儿。", "Nǐ ná de shíhou xiǎoxīn yìdiǎnr.", "Lúc cầm bạn cẩn thận một chút.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Nhờ mang trái cây lại đây.", [
        study("A: 请把水果拿过来。", "A: Qǐng bǎ shuǐguǒ ná guòlai.", "A: Làm ơn cầm trái cây mang lại đây."),
        study("B: 好，是这盘吗？", "B: Hǎo, shì zhè pán ma?", "B: Được, là đĩa này phải không?"),
        study("A: 对，就是那盘。", "A: Duì, jiùshì nà pán.", "A: Đúng, chính là đĩa đó.")
      ]),
      dialogueBlock("Tình huống 2", "Phân biệt 过来 và 过去.", [
        study("A: 我现在不方便过去，你帮我拿过来吧。", "A: Wǒ xiànzài bù fāngbiàn guòqu, nǐ bāng wǒ ná guòlai ba.", "A: Bây giờ tôi không tiện qua đó, bạn giúp tôi cầm mang lại đây nhé."),
        study("B: 那这些文件也要拿过来吗？", "B: Nà zhèxiē wénjiàn yě yào ná guòlai ma?", "B: Vậy những tài liệu này cũng cần mang lại đây không?"),
        study("A: 不用，文件你拿过去给老师。", "A: Búyòng, wénjiàn nǐ ná guòqu gěi lǎoshī.", "A: Không cần, tài liệu thì bạn cầm mang qua đó cho giáo viên.")
      ]),
      dialogueBlock("Tình huống 3", "Đưa tận tay cho người khác.", [
        study("A: 那支笔在你旁边吗？", "A: Nà zhī bǐ zài nǐ pángbiān ma?", "A: Cây bút đó ở bên cạnh bạn phải không?"),
        study("B: 在。", "B: Zài.", "B: Ở đây."),
        study("A: 请你把它递给我。", "A: Qǐng nǐ bǎ tā dì gěi wǒ.", "A: Làm ơn đưa nó cho tôi."),
        study("B: 给，你拿好。", "B: Gěi, nǐ ná hǎo.", "B: Đây, bạn cầm cho chắc nhé.")
      ]),
      dialogueBlock("Tình huống 4", "Nhắc cẩn thận khi bê đồ.", [
        study("A: 水果在盘子里，你拿的时候小心一点儿。", "A: Shuǐguǒ zài pánzi lǐ, nǐ ná de shíhou xiǎoxīn yìdiǎnr.", "A: Trái cây ở trong đĩa, lúc cầm bạn cẩn thận một chút."),
        study("B: 知道了，我会慢一点儿。", "B: Zhīdào le, wǒ huì màn yìdiǎnr.", "B: Biết rồi, tôi sẽ đi chậm một chút."),
        study("A: 别掉在地上。", "A: Bié diào zài dìshang.", "A: Đừng làm rơi xuống đất nhé.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. Động từ + 过来 / 过去", "过来 chỉ hướng về phía người nói; 过去 chỉ hướng rời xa người nói sang phía bên kia.", study("请把水果拿过来。", "Qǐng bǎ shuǐguǒ ná guòlai.", "Làm ơn cầm trái cây mang lại đây."), [
        study("你把椅子搬过来吧。", "Nǐ bǎ yǐzi bān guòlai ba.", "Bạn bê cái ghế lại đây nhé."),
        study("请把文件送过去。", "Qǐng bǎ wénjiàn sòng guòqu.", "Làm ơn mang tài liệu qua đó."),
        study("老师叫我过去一下。", "Lǎoshī jiào wǒ guòqu yíxià.", "Giáo viên gọi tôi qua đó một lát.")
      ]),
      grammarNote("2. 把 + vật + 拿/递 + bổ ngữ hướng", "Khi yêu cầu xử lý một đồ vật cụ thể rồi mang theo hướng nào đó, cấu trúc 把 rất tự nhiên và gọn.", study("请把水果拿过来。", "Qǐng bǎ shuǐguǒ ná guòlai.", "Làm ơn cầm trái cây mang lại đây."), [
        study("请把书拿过去给他。", "Qǐng bǎ shū ná guòqu gěi tā.", "Làm ơn cầm sách mang qua đó cho anh ấy."),
        study("你把那支笔递给我。", "Nǐ bǎ nà zhī bǐ dì gěi wǒ.", "Bạn đưa cây bút đó cho tôi."),
        study("把杯子拿过来放这儿。", "Bǎ bēizi ná guòlai fàng zhèr.", "Cầm cốc mang lại đây đặt chỗ này.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 过来", "2. 过去", "3. 递"], options: ["a. qua đó", "b. đưa tận tay", "c. lại đây"], answer: "1-c, 2-a, 3-b" }],
      [{ question: "Điền từ thích hợp.", prompt: ["请把水果拿___来。", "你把文件拿过___给老师。", "那支笔请递___我。"], answer: "过 / 去 / 给" }],
      [{ question: "Câu nào đúng?", options: ["A. 请把水果拿过来。", "B. 请把过来水果拿。", "C. 水果请拿把过来。"], answer: "A. 请把水果拿过来。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 我现在不方便过去，你帮我拿过来吧。", "B: ____________", "A: 不用，文件你拿过去给老师。"], answer: "B: 那这些文件也要拿过来吗？" }],
      "Tự kiểm tra: bạn có thể phân biệt rõ khi nào dùng 过来 và khi nào dùng 过去 không?"
    ),
    quickSummary: {
      words: ["水果", "拿", "过来", "过去", "递", "盘子"],
      patterns: ["请把水果拿过来。", "你把文件拿过去给老师。"],
      reminder: "Muốn chọn đúng 过来 hay 过去, hãy luôn xác định hướng đang nhìn từ phía ai."
    }
  },
  15: {
    objective: "Tổng kết tình huống xử lý công việc hoặc kiểm tra nhiều mục khác nhau, rồi kết luận rằng các phần còn lại đều không có vấn đề.",
    vocabulary: [
      vocab("其他", "qítā", "những cái khác, còn lại", "đại từ/tính từ", "Dùng để chỉ các phần không nhắc đích danh.", "其他问题我们明天再说。", "Qítā wèntí wǒmen míngtiān zài shuō.", "Những vấn đề khác ngày mai chúng ta nói tiếp."),
      vocab("问题", "wèntí", "vấn đề", "danh từ", "Từ trung tâm của bài.", "这个问题不太严重。", "Zhège wèntí bú tài yánzhòng.", "Vấn đề này không quá nghiêm trọng."),
      vocab("检查", "jiǎnchá", "kiểm tra", "động từ", "Dùng khi rà lại từng mục một.", "我刚才又检查了一遍。", "Wǒ gāngcái yòu jiǎnchá le yí biàn.", "Lúc nãy tôi đã kiểm tra lại thêm một lần."),
      vocab("没问题", "méi wèntí", "không vấn đề gì", "cụm giao tiếp", "Câu xác nhận mọi thứ ổn.", "时间没问题。", "Shíjiān méi wèntí.", "Thời gian không có vấn đề gì."),
      vocab("除了", "chúle", "ngoài ra, trừ ra", "giới từ", "Dùng khi tách một mục ra khỏi phần còn lại.", "除了这个，其他都很好。", "Chúle zhège, qítā dōu hěn hǎo.", "Ngoài cái này ra, những phần khác đều tốt."),
      vocab("安排", "ānpái", "sắp xếp", "danh từ/động từ", "Dùng trong công việc, kế hoạch, lịch trình.", "今天的安排基本没问题。", "Jīntiān de ānpái jīběn méi wèntí.", "Sắp xếp hôm nay cơ bản không có vấn đề."),
      vocab("基本", "jīběn", "cơ bản", "phó từ/tính từ", "Dùng để nói hầu hết đã ổn.", "资料已经基本准备好了。", "Zīliào yǐjīng jīběn zhǔnbèi hǎo le.", "Tài liệu về cơ bản đã chuẩn bị xong."),
      vocab("解决", "jiějué", "giải quyết", "động từ", "Dùng khi nói vấn đề đã xử lý xong.", "这个问题已经解决了。", "Zhège wèntí yǐjīng jiějué le.", "Vấn đề này đã được giải quyết rồi.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Kiểm tra từng phần việc.", [
        study("A: 材料、时间和地点你都确认了吗？", "A: Cáiliào, shíjiān hé dìdiǎn nǐ dōu quèrèn le ma?", "A: Tài liệu, thời gian và địa điểm bạn đều xác nhận rồi chứ?"),
        study("B: 我刚才都检查过了，其他都没有问题。", "B: Wǒ gāngcái dōu jiǎncháguo le, qítā dōu méiyǒu wèntí.", "B: Lúc nãy tôi đã kiểm tra hết rồi, những phần khác đều không có vấn đề."),
        study("A: 那就好，我们可以放心了。", "A: Nà jiù hǎo, wǒmen kěyǐ fàngxīn le.", "A: Vậy thì tốt, chúng ta có thể yên tâm rồi.")
      ]),
      dialogueBlock("Tình huống 2", "Tách một mục ra khỏi phần còn lại.", [
        study("A: 现在还有什么问题吗？", "A: Xiànzài hái yǒu shénme wèntí ma?", "A: Bây giờ còn vấn đề gì nữa không?"),
        study("B: 除了时间要改一下，其他都没有问题。", "B: Chúle shíjiān yào gǎi yíxià, qítā dōu méiyǒu wèntí.", "B: Ngoài việc cần sửa lại thời gian một chút, những phần khác đều không có vấn đề."),
        study("A: 好，那我们就只改这一点。", "A: Hǎo, nà wǒmen jiù zhǐ gǎi zhè yìdiǎn.", "A: Được, vậy chúng ta chỉ sửa đúng điểm này thôi.")
      ]),
      dialogueBlock("Tình huống 3", "Nói vấn đề đã được giải quyết.", [
        study("A: 昨天那个问题解决了吗？", "A: Zuótiān nàge wèntí jiějué le ma?", "A: Vấn đề hôm qua đã được giải quyết chưa?"),
        study("B: 解决了，所以其他安排都可以照常进行。", "B: Jiějué le, suǒyǐ qítā ānpái dōu kěyǐ zhàocháng jìnxíng.", "B: Giải quyết rồi, vì vậy các sắp xếp khác đều có thể tiến hành như bình thường."),
        study("A: 那太好了。", "A: Nà tài hǎo le.", "A: Vậy thì tốt quá.")
      ]),
      dialogueBlock("Tình huống 4", "Xác nhận lại lần cuối.", [
        study("A: 你再帮我看一遍吧。", "A: Nǐ zài bāng wǒ kàn yí biàn ba.", "A: Bạn giúp tôi xem lại một lần nữa nhé."),
        study("B: 好，我看过了，基本都没问题。", "B: Hǎo, wǒ kànguo le, jīběn dōu méi wèntí.", "B: Được, tôi xem rồi, về cơ bản đều không có vấn đề."),
        study("A: 谢谢你，这样我就放心了。", "A: Xièxie nǐ, zhèyàng wǒ jiù fàngxīn le.", "A: Cảm ơn bạn, như vậy tôi yên tâm rồi.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 其他都没有问题", "Mẫu này dùng để kết luận sau khi đã kiểm tra nhiều mục, nhấn rằng phần còn lại đều ổn.", study("其他都没有问题。", "Qítā dōu méiyǒu wèntí.", "Những phần còn lại đều không có vấn đề."), [
        study("其他材料都准备好了。", "Qítā cáiliào dōu zhǔnbèi hǎo le.", "Các tài liệu còn lại đều chuẩn bị xong rồi."),
        study("除了这一页，其他都看懂了。", "Chúle zhè yí yè, qítā dōu kàndǒng le.", "Ngoài trang này ra, những phần khác đều hiểu rồi."),
        study("其他价格都可以接受。", "Qítā jiàgé dōu kěyǐ jiēshòu.", "Các mức giá còn lại đều có thể chấp nhận được.")
      ]),
      grammarNote("2. 除了...，其他都...", "除了 dùng để tách một phần ngoại lệ ra, sau đó kết luận phần còn lại bằng 其他都...", study("除了时间要改一下，其他都没有问题。", "Chúle shíjiān yào gǎi yíxià, qítā dōu méiyǒu wèntí.", "Ngoài việc cần sửa lại thời gian một chút, những phần khác đều không có vấn đề."), [
        study("除了这个词，其他我都认识。", "Chúle zhège cí, qítā wǒ dōu rènshi.", "Ngoài từ này ra, những từ khác tôi đều biết."),
        study("除了天气有点儿冷，其他都很好。", "Chúle tiānqì yǒudiǎnr lěng, qítā dōu hěn hǎo.", "Ngoài việc thời tiết hơi lạnh, những thứ khác đều tốt."),
        study("除了他没来，其他人都到了。", "Chúle tā méi lái, qítā rén dōu dào le.", "Ngoài anh ấy chưa đến, những người khác đều đến rồi.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 其他", "2. 检查", "3. 解决"], options: ["a. giải quyết", "b. kiểm tra", "c. những cái khác"], answer: "1-c, 2-b, 3-a" }],
      [{ question: "Điền từ thích hợp.", prompt: ["其___都没有问题。", "我刚才又检___了一遍。", "这个问题已经解___了。"], answer: "他 / 查 / 决" }],
      [{ question: "Câu nào đúng?", options: ["A. 其他都没有问题。", "B. 其他没有都问题。", "C. 其他问题都没有。"], answer: "A. 其他都没有问题。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 现在还有什么问题吗？", "B: ____________", "A: 好，那我们就只改这一点。"], answer: "B: 除了时间要改一下，其他都没有问题。" }],
      "Tự kiểm tra: bạn có thể dùng 除了...其他都... để nói chỉ còn một điểm cần sửa không?"
    ),
    quickSummary: {
      words: ["其他", "问题", "检查", "没问题", "除了", "安排"],
      patterns: ["其他都没有问题。", "除了时间要改一下，其他都没有问题。"],
      reminder: "Khi muốn kết luận ngắn gọn sau khi rà soát, 其他都没有问题 là một mẫu rất thực dụng."
    }
  },
  16: {
    objective: "Miêu tả mức độ mệt đến mức tan làm chỉ muốn ngủ, và dùng bổ ngữ mức độ với 得 để nói kết quả kéo theo sau trạng thái.",
    vocabulary: [
      vocab("累", "lèi", "mệt", "tính từ", "Từ trung tâm của bài khi nói mức độ mệt.", "我今天特别累。", "Wǒ jīntiān tèbié lèi.", "Hôm nay tôi đặc biệt mệt."),
      vocab("下班", "xiàbān", "tan làm", "động từ", "Thời điểm kết thúc giờ làm việc.", "我一般六点下班。", "Wǒ yìbān liù diǎn xiàbān.", "Tôi thường tan làm lúc 6 giờ."),
      vocab("睡觉", "shuìjiào", "ngủ", "động từ", "Kết quả thường thấy khi quá mệt.", "我回家以后想早点儿睡觉。", "Wǒ huí jiā yǐhòu xiǎng zǎodiǎnr shuìjiào.", "Sau khi về nhà tôi muốn ngủ sớm."),
      vocab("加班", "jiābān", "làm thêm giờ", "động từ", "Nguyên nhân thường dẫn đến quá mệt.", "这两天我一直在加班。", "Zhè liǎng tiān wǒ yìzhí zài jiābān.", "Hai ngày nay tôi vẫn luôn tăng ca."),
      vocab("精神", "jīngshen", "tinh thần, tỉnh táo", "danh từ/tính từ", "Dùng để nói người còn tỉnh táo hay không.", "今天我一点儿精神都没有。", "Jīntiān wǒ yìdiǎnr jīngshen dōu méiyǒu.", "Hôm nay tôi chẳng còn chút tỉnh táo nào."),
      vocab("休息", "xiūxi", "nghỉ ngơi", "động từ", "Cách khắc phục khi cơ thể quá mệt.", "你应该早点儿休息。", "Nǐ yīnggāi zǎodiǎnr xiūxi.", "Bạn nên nghỉ ngơi sớm hơn."),
      vocab("马上", "mǎshàng", "ngay lập tức", "phó từ", "Dùng khi kết quả xảy ra gần như ngay lập tức.", "我一到家就马上洗澡。", "Wǒ yí dào jiā jiù mǎshàng xǐzǎo.", "Về đến nhà là tôi đi tắm ngay."),
      vocab("周末", "zhōumò", "cuối tuần", "danh từ thời gian", "Dùng khi so sánh trạng thái giữa ngày thường và cuối tuần.", "周末我一般会睡得晚一点儿。", "Zhōumò wǒ yìbān huì shuì de wǎn yìdiǎnr.", "Cuối tuần tôi thường ngủ muộn hơn một chút.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Than mệt sau giờ làm.", [
        study("A: 你最近怎么这么累？", "A: Nǐ zuìjìn zěnme zhème lèi?", "A: Dạo này sao bạn mệt thế?"),
        study("B: 我现在累得下了班就想睡觉。", "B: Wǒ xiànzài lèi de xià le bān jiù xiǎng shuìjiào.", "B: Bây giờ tôi mệt đến mức tan làm là chỉ muốn ngủ."),
        study("A: 你是不是最近总加班？", "A: Nǐ shì bú shì zuìjìn zǒng jiābān?", "A: Có phải gần đây bạn toàn tăng ca không?")
      ]),
      dialogueBlock("Tình huống 2", "Nói nguyên nhân và hậu quả.", [
        study("A: 这几天工作很忙吗？", "A: Zhè jǐ tiān gōngzuò hěn máng ma?", "A: Mấy ngày nay công việc bận lắm à?"),
        study("B: 很忙，而且每天回家都很晚。", "B: Hěn máng, érqiě měitiān huí jiā dōu hěn wǎn.", "B: Rất bận, hơn nữa ngày nào về nhà cũng rất muộn."),
        study("A: 怪不得你一点儿精神都没有。", "A: Guàibude nǐ yìdiǎnr jīngshen dōu méiyǒu.", "A: Bảo sao bạn chẳng còn chút tỉnh táo nào.")
      ]),
      dialogueBlock("Tình huống 3", "Khuyên người khác nghỉ ngơi.", [
        study("A: 今天晚上你还打算看书吗？", "A: Jīntiān wǎnshang nǐ hái dǎsuan kànshū ma?", "A: Tối nay bạn còn định đọc sách nữa không?"),
        study("B: 不看了，我回家以后想马上睡觉。", "B: Bù kàn le, wǒ huí jiā yǐhòu xiǎng mǎshàng shuìjiào.", "B: Không đọc nữa, về nhà là tôi muốn ngủ ngay."),
        study("A: 那你就早点儿休息吧。", "A: Nà nǐ jiù zǎodiǎnr xiūxi ba.", "A: Vậy bạn nghỉ sớm đi.")
      ]),
      dialogueBlock("Tình huống 4", "So sánh với cuối tuần.", [
        study("A: 周末你也这么累吗？", "A: Zhōumò nǐ yě zhème lèi ma?", "A: Cuối tuần bạn cũng mệt như vậy à?"),
        study("B: 没有，周末我可以多睡一会儿。", "B: Méiyǒu, zhōumò wǒ kěyǐ duō shuì yíhuìr.", "B: Không, cuối tuần tôi có thể ngủ thêm một lúc."),
        study("A: 那你平时真的太辛苦了。", "A: Nà nǐ píngshí zhēn de tài xīnkǔ le.", "A: Vậy bình thường bạn đúng là quá vất vả rồi.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. Tính từ + 得 + kết quả", "得 đặt sau tính từ hoặc động từ để dẫn ra mức độ mạnh đến mức gây ra một kết quả cụ thể.", study("累得下了班就想睡觉。", "Lèi de xià le bān jiù xiǎng shuìjiào.", "Mệt đến mức tan làm là chỉ muốn ngủ."), [
        study("他高兴得一直笑。", "Tā gāoxìng de yìzhí xiào.", "Anh ấy vui đến mức cười mãi."),
        study("今天热得大家都不想出门。", "Jīntiān rè de dàjiā dōu bù xiǎng chūmén.", "Hôm nay nóng đến mức ai cũng không muốn ra ngoài."),
        study("我忙得连饭都没时间吃。", "Wǒ máng de lián fàn dōu méi shíjiān chī.", "Tôi bận đến mức ngay cả ăn cơm cũng không có thời gian.")
      ]),
      grammarNote("2. Vừa... là... với 就", "就 nhấn việc phía sau xảy ra rất nhanh hoặc gần như ngay lập tức sau điều kiện phía trước.", study("下了班就想睡觉。", "Xià le bān jiù xiǎng shuìjiào.", "Tan làm là chỉ muốn ngủ."), [
        study("我一回家就洗澡。", "Wǒ yì huí jiā jiù xǐzǎo.", "Tôi cứ về đến nhà là đi tắm."),
        study("他一坐下就开始看手机。", "Tā yí zuòxia jiù kāishǐ kàn shǒujī.", "Anh ấy vừa ngồi xuống là bắt đầu xem điện thoại."),
        study("你到了公司就给我发消息。", "Nǐ dào le gōngsī jiù gěi wǒ fā xiāoxi.", "Bạn đến công ty là nhắn tin cho tôi ngay.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 累", "2. 下班", "3. 加班"], options: ["a. tăng ca", "b. mệt", "c. tan làm"], answer: "1-b, 2-c, 3-a" }],
      [{ question: "Điền từ thích hợp.", prompt: ["我现在累___下了班就想睡觉。", "这两天我一直在加___。", "你应该早点儿休___。"], answer: "得 / 班 / 息" }],
      [{ question: "Câu nào đúng?", options: ["A. 我累得下了班就想睡觉。", "B. 我累下了班得就想睡觉。", "C. 我得累下了班就想睡觉。"], answer: "A. 我累得下了班就想睡觉。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 你最近怎么这么累？", "B: ____________", "A: 你是不是最近总加班？"], answer: "B: 我现在累得下了班就想睡觉。" }],
      "Tự kiểm tra: bạn có thể dùng 得 để nói một trạng thái mạnh đến mức gây ra kết quả không?"
    ),
    quickSummary: {
      words: ["累", "下班", "睡觉", "加班", "精神", "休息"],
      patterns: ["我现在累得下了班就想睡觉。", "我一回家就洗澡。"],
      reminder: "Khi muốn nói 'đến mức...', hãy nghĩ ngay đến mẫu 得 + kết quả phía sau."
    }
  },
  17: {
    objective: "Diễn đạt ý 'ai cũng có cách', dùng 谁都... để khái quát rộng và nói về việc giúp người khác sửa một thói quen hoặc vấn đề.",
    vocabulary: [
      vocab("谁都", "shéi dōu", "ai cũng", "đại từ khái quát", "Dùng để nói mọi người đều như nhau trong một nhận xét.", "这个问题谁都知道。", "Zhège wèntí shéi dōu zhīdào.", "Vấn đề này ai cũng biết."),
      vocab("办法", "bànfǎ", "cách, biện pháp", "danh từ", "Dùng khi nói có cách giải quyết một việc.", "我们总会想到办法的。", "Wǒmen zǒng huì xiǎngdào bànfǎ de.", "Chúng ta rồi cũng sẽ nghĩ ra cách thôi."),
      vocab("看好", "kànhǎo", "chữa khỏi; xử lý cho ổn", "động từ kết quả", "Trong bài dùng theo nghĩa làm cho vấn đề được xử lý ổn.", "这个小毛病很快就能看好。", "Zhège xiǎo máobìng hěn kuài jiù néng kànhǎo.", "Cái tật nhỏ này rất nhanh là có thể chữa ổn."),
      vocab("病", "bìng", "bệnh", "danh từ", "Trong tiêu đề mang nghĩa rộng, có thể là vấn đề hoặc thói quen xấu.", "你这不是大病，别太担心。", "Nǐ zhè bú shì dà bìng, bié tài dānxīn.", "Bạn không phải bệnh nặng, đừng lo quá."),
      vocab("毛病", "máobìng", "tật xấu; trục trặc", "danh từ", "Dùng để nói lỗi nhỏ hoặc thói quen xấu.", "他有个爱忘事的毛病。", "Tā yǒu ge ài wàngshì de máobìng.", "Anh ấy có tật hay quên."),
      vocab("改", "gǎi", "sửa, thay đổi", "động từ", "Dùng khi nói sửa một thói quen hoặc lỗi.", "这个习惯得慢慢改。", "Zhège xíguàn děi mànman gǎi.", "Thói quen này phải sửa từ từ."),
      vocab("建议", "jiànyì", "gợi ý, khuyên", "danh từ/động từ", "Dùng khi người khác đưa cách giúp mình.", "医生给了我一些建议。", "Yīshēng gěi le wǒ yìxiē jiànyì.", "Bác sĩ đã cho tôi một vài lời khuyên."),
      vocab("坚持", "jiānchí", "kiên trì", "động từ", "Dùng khi giải quyết vấn đề cần thời gian.", "只要坚持，就会有变化。", "Zhǐyào jiānchí, jiù huì yǒu biànhuà.", "Chỉ cần kiên trì thì sẽ có thay đổi.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "An ủi khi người khác lo lắng.", [
        study("A: 我这个毛病是不是很难改？", "A: Wǒ zhège máobìng shì bú shì hěn nán gǎi?", "A: Cái tật này của tôi có phải rất khó sửa không?"),
        study("B: 别担心，谁都有办法看好你的“病”。", "B: Bié dānxīn, shéi dōu yǒu bànfǎ kànhǎo nǐ de “bìng”.", "B: Đừng lo, ai cũng có cách chữa cái “bệnh” của bạn."),
        study("A: 听你这么说，我放心多了。", "A: Tīng nǐ zhème shuō, wǒ fàngxīn duō le.", "A: Nghe bạn nói như vậy, tôi yên tâm hơn nhiều rồi.")
      ]),
      dialogueBlock("Tình huống 2", "Đưa lời khuyên cụ thể.", [
        study("A: 那你觉得我应该怎么改？", "A: Nà nǐ juéde wǒ yīnggāi zěnme gǎi?", "A: Vậy bạn thấy tôi nên sửa thế nào?"),
        study("B: 先从小地方开始改，别一下子要求太高。", "B: Xiān cóng xiǎo dìfang kāishǐ gǎi, bié yíxiàzi yāoqiú tài gāo.", "B: Hãy bắt đầu sửa từ những chỗ nhỏ trước, đừng đòi hỏi quá cao ngay lập tức."),
        study("A: 这样我可能更容易坚持。", "A: Zhèyàng wǒ kěnéng gèng róngyì jiānchí.", "A: Như vậy có thể tôi sẽ dễ kiên trì hơn.")
      ]),
      dialogueBlock("Tình huống 3", "Nói ai cũng có kinh nghiệm.", [
        study("A: 你怎么知道这么多办法？", "A: Nǐ zěnme zhīdào zhème duō bànfǎ?", "A: Sao bạn biết nhiều cách như vậy?"),
        study("B: 因为这种问题谁都遇到过。", "B: Yīnwèi zhè zhǒng wèntí shéi dōu yùdàoguo.", "B: Vì kiểu vấn đề này ai cũng từng gặp."),
        study("A: 原来不是只有我一个人这样。", "A: Yuánlái bú shì zhǐyǒu wǒ yí ge rén zhèyàng.", "A: Hóa ra không phải chỉ mình tôi như vậy.")
      ]),
      dialogueBlock("Tình huống 4", "Khuyến khích kiên trì.", [
        study("A: 我试了两天，还没有明显变化。", "A: Wǒ shì le liǎng tiān, hái méiyǒu míngxiǎn biànhuà.", "A: Tôi thử hai ngày rồi mà vẫn chưa có thay đổi rõ rệt."),
        study("B: 这种事不能着急，只要坚持就会慢慢好起来。", "B: Zhè zhǒng shì bù néng zháojí, zhǐyào jiānchí jiù huì mànman hǎo qǐlai.", "B: Chuyện này không thể vội, chỉ cần kiên trì thì sẽ dần tốt lên."),
        study("A: 好，我再坚持一段时间。", "A: Hǎo, wǒ zài jiānchí yí duàn shíjiān.", "A: Được, tôi sẽ kiên trì thêm một thời gian nữa.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 谁都...", "谁都 dùng để khái quát rộng, nhấn rằng bất kỳ ai cũng như nhau trong nhận xét đó.", study("谁都有办法。", "Shéi dōu yǒu bànfǎ.", "Ai cũng có cách."), [
        study("这句话谁都会说。", "Zhè jù huà shéi dōu huì shuō.", "Câu này ai cũng biết nói."),
        study("这种问题谁都可能遇到。", "Zhè zhǒng wèntí shéi dōu kěnéng yùdào.", "Kiểu vấn đề này ai cũng có thể gặp."),
        study("谁都不想迟到。", "Shéi dōu bù xiǎng chídào.", "Ai cũng không muốn đến muộn.")
      ]),
      grammarNote("2. 只要...就...", "Mẫu này dùng để nêu điều kiện đơn giản: chỉ cần thỏa mãn điều kiện phía trước thì kết quả phía sau sẽ xảy ra.", study("只要坚持，就会慢慢好起来。", "Zhǐyào jiānchí, jiù huì mànman hǎo qǐlai.", "Chỉ cần kiên trì thì sẽ dần tốt lên."), [
        study("只要你早点睡，就不会这么累。", "Zhǐyào nǐ zǎodiǎn shuì, jiù bú huì zhème lèi.", "Chỉ cần bạn ngủ sớm hơn thì sẽ không mệt như vậy."),
        study("只要多练习，发音就会进步。", "Zhǐyào duō liànxí, fāyīn jiù huì jìnbù.", "Chỉ cần luyện nhiều thì phát âm sẽ tiến bộ."),
        study("只要有时间，我就帮你。", "Zhǐyào yǒu shíjiān, wǒ jiù bāng nǐ.", "Chỉ cần có thời gian thì tôi sẽ giúp bạn.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 办法", "2. 毛病", "3. 坚持"], options: ["a. kiên trì", "b. cách, biện pháp", "c. tật xấu, trục trặc"], answer: "1-b, 2-c, 3-a" }],
      [{ question: "Điền từ thích hợp.", prompt: ["谁都___办法看好你的“病”。", "这种问题谁都遇到___。", "只要坚持，___会慢慢好起来。"], answer: "有 / 过 / 就" }],
      [{ question: "Câu nào đúng?", options: ["A. 谁都有办法。", "B. 谁有都办法。", "C. 谁都办法有。"], answer: "A. 谁都有办法。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 我这个毛病是不是很难改？", "B: ____________", "A: 听你这么说，我放心多了。"], answer: "B: 别担心，谁都有办法看好你的“病”。" }],
      "Tự kiểm tra: bạn có thể dùng 谁都... để khái quát và dùng 只要...就... để khuyên người khác không?"
    ),
    quickSummary: {
      words: ["谁都", "办法", "看好", "毛病", "改", "坚持"],
      patterns: ["谁都有办法看好你的“病”。", "只要坚持，就会慢慢好起来。"],
      reminder: "谁都 giúp câu khái quát mạnh hơn; 只要...就... giúp lời khuyên cụ thể và thực tế hơn."
    }
  },
  18: {
    objective: "Bày tỏ niềm tin hoặc dự đoán về việc người khác sẽ đạt được sự thống nhất, và dùng 会...的 để nói điều mình tin là sẽ xảy ra.",
    vocabulary: [
      vocab("相信", "xiāngxìn", "tin tưởng", "động từ", "Động từ trung tâm của bài 18.", "我相信他会来的。", "Wǒ xiāngxìn tā huì lái de.", "Tôi tin anh ấy sẽ đến."),
      vocab("统一", "tǒngyī", "thống nhất", "động từ/tính từ", "Dùng khi nhiều người có cùng ý kiến hoặc quyết định.", "大家最后还是统一了看法。", "Dàjiā zuìhòu háishi tǒngyī le kànfǎ.", "Cuối cùng mọi người vẫn thống nhất ý kiến."),
      vocab("意见", "yìjiàn", "ý kiến", "danh từ", "Thường là thứ cần được thống nhất.", "我们先听听大家的意见。", "Wǒmen xiān tīngting dàjiā de yìjiàn.", "Chúng ta nghe thử ý kiến của mọi người trước."),
      vocab("讨论", "tǎolùn", "thảo luận", "động từ", "Bước trước khi đi đến thống nhất.", "这个问题我们明天再讨论。", "Zhège wèntí wǒmen míngtiān zài tǎolùn.", "Vấn đề này ngày mai chúng ta thảo luận tiếp."),
      vocab("最后", "zuìhòu", "cuối cùng", "danh từ/phó từ", "Dùng khi nói kết quả cuối cùng.", "最后他们还是同意了。", "Zuìhòu tāmen háishi tóngyì le.", "Cuối cùng họ vẫn đồng ý."),
      vocab("决定", "juédìng", "quyết định", "danh từ/động từ", "Kết quả của việc thảo luận.", "这个决定很重要。", "Zhège juédìng hěn zhòngyào.", "Quyết định này rất quan trọng."),
      vocab("会", "huì", "sẽ", "động từ năng nguyện", "Dùng khi dự đoán khả năng cao sẽ xảy ra.", "我觉得他会同意的。", "Wǒ juéde tā huì tóngyì de.", "Tôi thấy anh ấy sẽ đồng ý thôi."),
      vocab("一定", "yídìng", "nhất định, chắc chắn", "phó từ", "Dùng để tăng mức độ tin chắc.", "只要再谈一次，就一定能解决。", "Zhǐyào zài tán yí cì, jiù yídìng néng jiějué.", "Chỉ cần nói chuyện thêm một lần nữa thì nhất định sẽ giải quyết được.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Tin rằng mọi người sẽ thống nhất.", [
        study("A: 他们开了这么久的会，怎么还没出来？", "A: Tāmen kāi le zhème jiǔ de huì, zěnme hái méi chūlai?", "A: Họ họp lâu như vậy rồi sao vẫn chưa ra?"),
        study("B: 我相信他们会统一的。", "B: Wǒ xiāngxìn tāmen huì tǒngyī de.", "B: Tôi tin họ sẽ thống nhất được."),
        study("A: 希望最后能有一个清楚的决定。", "A: Xīwàng zuìhòu néng yǒu yí ge qīngchu de juédìng.", "A: Hy vọng cuối cùng sẽ có một quyết định rõ ràng.")
      ]),
      dialogueBlock("Tình huống 2", "Đánh giá tiến trình thảo luận.", [
        study("A: 现在他们的意见还不一样吗？", "A: Xiànzài tāmen de yìjiàn hái bù yíyàng ma?", "A: Bây giờ ý kiến của họ vẫn chưa giống nhau à?"),
        study("B: 还有一点儿不同，不过已经接近了。", "B: Hái yǒu yìdiǎnr bùtóng, búguò yǐjīng jiējìn le.", "B: Vẫn còn hơi khác một chút, nhưng đã gần nhau rồi."),
        study("A: 那就好，继续讨论应该会有结果。", "A: Nà jiù hǎo, jìxù tǎolùn yīnggāi huì yǒu jiéguǒ.", "A: Vậy thì tốt, tiếp tục thảo luận chắc sẽ có kết quả.")
      ]),
      dialogueBlock("Tình huống 3", "Khuyến khích người khác tin tưởng.", [
        study("A: 我有点儿担心，他们会不会一直吵下去。", "A: Wǒ yǒudiǎnr dānxīn, tāmen huì bu huì yìzhí chǎo xiàqù.", "A: Tôi hơi lo, không biết họ có tranh cãi mãi không."),
        study("B: 不会的，他们都是很讲道理的人。", "B: Bú huì de, tāmen dōu shì hěn jiǎng dàolǐ de rén.", "B: Không đâu, họ đều là những người rất biết điều."),
        study("A: 听你这么说，我就放心一些了。", "A: Tīng nǐ zhème shuō, wǒ jiù fàngxīn yìxiē le.", "A: Nghe bạn nói vậy tôi yên tâm hơn một chút rồi.")
      ]),
      dialogueBlock("Tình huống 4", "Nói kết quả sau cuộc họp.", [
        study("A: 会议结束了吗？", "A: Huìyì jiéshù le ma?", "A: Cuộc họp kết thúc chưa?"),
        study("B: 结束了，最后他们统一了意见。", "B: Jiéshù le, zuìhòu tāmen tǒngyī le yìjiàn.", "B: Kết thúc rồi, cuối cùng họ đã thống nhất ý kiến."),
        study("A: 那太好了，事情终于可以往前走了。", "A: Nà tài hǎo le, shìqing zhōngyú kěyǐ wǎng qián zǒu le.", "A: Vậy thì tốt quá, công việc cuối cùng có thể tiến lên rồi.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 会...的", "会...的 dùng để bày tỏ dự đoán hoặc niềm tin rằng một việc sẽ xảy ra trong tương lai gần hoặc theo logic tình huống.", study("我相信他们会统一的。", "Wǒ xiāngxìn tāmen huì tǒngyī de.", "Tôi tin họ sẽ thống nhất được."), [
        study("他会来的。", "Tā huì lái de.", "Anh ấy sẽ đến thôi."),
        study("你放心，她会理解的。", "Nǐ fàngxīn, tā huì lǐjiě de.", "Bạn yên tâm, cô ấy sẽ hiểu thôi."),
        study("事情会慢慢好起来的。", "Shìqing huì mànman hǎo qǐlai de.", "Mọi việc sẽ dần tốt lên thôi.")
      ]),
      grammarNote("2. 统一 + tân ngữ / 统一了 + kết quả", "统一 có thể đi trực tiếp với 意见, 看法, 标准... để nói nhiều bên đi đến cùng một kết luận.", study("他们统一了意见。", "Tāmen tǒngyī le yìjiàn.", "Họ đã thống nhất ý kiến."), [
        study("我们先统一一下时间。", "Wǒmen xiān tǒngyī yíxià shíjiān.", "Chúng ta thống nhất thời gian trước một chút."),
        study("大家终于统一了看法。", "Dàjiā zhōngyú tǒngyī le kànfǎ.", "Cuối cùng mọi người đã thống nhất quan điểm."),
        study("老师要求统一格式。", "Lǎoshī yāoqiú tǒngyī géshì.", "Giáo viên yêu cầu thống nhất định dạng.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 相信", "2. 统一", "3. 意见"], options: ["a. ý kiến", "b. tin tưởng", "c. thống nhất"], answer: "1-b, 2-c, 3-a" }],
      [{ question: "Điền từ thích hợp.", prompt: ["我___信他们会统一的。", "最后他们统一了意___。", "这个决___很重要。"], answer: "相 / 见 / 定" }],
      [{ question: "Câu nào đúng?", options: ["A. 我相信他们会统一的。", "B. 我相信会他们统一的。", "C. 我他们相信会统一的。"], answer: "A. 我相信他们会统一的。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 他们开了这么久的会，怎么还没出来？", "B: ____________", "A: 希望最后能有一个清楚的决定。"], answer: "B: 我相信他们会统一的。" }],
      "Tự kiểm tra: bạn có thể dùng 会...的 để nói điều mình tin chắc sẽ xảy ra không?"
    ),
    quickSummary: {
      words: ["相信", "统一", "意见", "讨论", "决定", "会"],
      patterns: ["我相信他们会统一的。", "最后他们统一了意见。"],
      reminder: "会...的 phù hợp khi bạn muốn câu nghe chắc chắn nhưng vẫn tự nhiên, không quá cứng như 一定."
    }
  },
  19: {
    objective: "Nói về việc có nhận ra điều gì đó hay không, dùng bổ ngữ kết quả 出来 để nhấn việc nhìn ra, nghe ra hoặc cảm nhận ra dấu hiệu từ bề ngoài.",
    vocabulary: [
      vocab("看出来", "kànchūlái", "nhìn ra, nhận ra", "động từ kết quả", "Bổ ngữ kết quả chỉ việc quan sát rồi nhận ra được.", "你没看出来吗？", "Nǐ méi kànchūlái ma?", "Bạn không nhìn ra sao?"),
      vocab("变化", "biànhuà", "sự thay đổi", "danh từ/động từ", "Điều thường được nhận ra bằng mắt.", "他的变化很大。", "Tā de biànhuà hěn dà.", "Sự thay đổi của anh ấy rất lớn."),
      vocab("表情", "biǎoqíng", "biểu cảm", "danh từ", "Dấu hiệu hay dùng để đoán tâm trạng.", "从她的表情就能看出来。", "Cóng tā de biǎoqíng jiù néng kànchūlái.", "Chỉ nhìn biểu cảm của cô ấy là có thể nhận ra."),
      vocab("心情", "xīnqíng", "tâm trạng", "danh từ", "Thứ có thể được đoán ra qua nét mặt hoặc giọng nói.", "今天他的心情不太好。", "Jīntiān tā de xīnqíng bú tài hǎo.", "Hôm nay tâm trạng anh ấy không tốt lắm."),
      vocab("明显", "míngxiǎn", "rõ ràng", "tính từ", "Dùng khi dấu hiệu khá dễ nhận thấy.", "变化已经很明显了。", "Biànhuà yǐjīng hěn míngxiǎn le.", "Sự thay đổi đã rất rõ rồi."),
      vocab("听出来", "tīngchūlái", "nghe ra", "động từ kết quả", "Nghe để nhận ra cảm xúc, giọng vùng miền hoặc ý nghĩa ngầm.", "我一听就听出来了。", "Wǒ yì tīng jiù tīngchūlái le.", "Tôi vừa nghe là đã nghe ra rồi."),
      vocab("装", "zhuāng", "giả vờ", "động từ", "Dùng khi ai đó cố che giấu nhưng vẫn bị nhận ra.", "你别装了，我早就看出来了。", "Nǐ bié zhuāng le, wǒ zǎo jiù kànchūlái le.", "Bạn đừng giả vờ nữa, tôi nhận ra từ sớm rồi."),
      vocab("其实", "qíshí", "thật ra", "phó từ", "Dùng để nói điều thật sự đằng sau vẻ bề ngoài.", "其实他早就知道了。", "Qíshí tā zǎo jiù zhīdào le.", "Thật ra anh ấy biết từ lâu rồi.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Nhận ra sự thay đổi của người khác.", [
        study("A: 你没看出来吗？她今天特别高兴。", "A: Nǐ méi kànchūlái ma? Tā jīntiān tèbié gāoxìng.", "A: Bạn không nhìn ra sao? Hôm nay cô ấy đặc biệt vui."),
        study("B: 我刚才只觉得她说话比较快。", "B: Wǒ gāngcái zhǐ juéde tā shuōhuà bǐjiào kuài.", "B: Lúc nãy tôi chỉ thấy cô ấy nói hơi nhanh thôi."),
        study("A: 你看她的表情就知道了。", "A: Nǐ kàn tā de biǎoqíng jiù zhīdào le.", "A: Bạn nhìn biểu cảm của cô ấy là biết ngay.")
      ]),
      dialogueBlock("Tình huống 2", "Nghe ra tâm trạng.", [
        study("A: 他在电话里怎么说的？", "A: Tā zài diànhuà lǐ zěnme shuō de?", "A: Anh ấy nói trên điện thoại thế nào?"),
        study("B: 他虽然没直接说，可是我听出来他有点儿着急。", "B: Tā suīrán méi zhíjiē shuō, kěshì wǒ tīngchūlái tā yǒudiǎnr zháojí.", "B: Tuy anh ấy không nói thẳng, nhưng tôi nghe ra anh ấy hơi sốt ruột."),
        study("A: 原来你这么了解他。", "A: Yuánlái nǐ zhème liǎojiě tā.", "A: Hóa ra bạn hiểu anh ấy như vậy.")
      ]),
      dialogueBlock("Tình huống 3", "Bị người khác nhận ra.", [
        study("A: 你是不是在装没事？", "A: Nǐ shì bú shì zài zhuāng méishì?", "A: Có phải bạn đang giả vờ như không có chuyện gì không?"),
        study("B: 没有啊。", "B: Méiyǒu a.", "B: Không mà."),
        study("A: 你别装了，我早就看出来了。", "A: Nǐ bié zhuāng le, wǒ zǎo jiù kànchūlái le.", "A: Đừng giả vờ nữa, tôi nhận ra từ lâu rồi.")
      ]),
      dialogueBlock("Tình huống 4", "Nói dấu hiệu không đủ rõ.", [
        study("A: 他的变化这么明显，你怎么看不出来？", "A: Tā de biànhuà zhème míngxiǎn, nǐ zěnme kànbuchūlái?", "A: Sự thay đổi của anh ấy rõ như vậy, sao bạn lại không nhìn ra?"),
        study("B: 因为我最近太忙，没注意这些小细节。", "B: Yīnwèi wǒ zuìjìn tài máng, méi zhùyì zhèxiē xiǎo xìjié.", "B: Vì gần đây tôi quá bận, không chú ý đến những chi tiết nhỏ này."),
        study("A: 那你以后得看仔细一点儿。", "A: Nà nǐ yǐhòu děi kàn zǐxì yìdiǎnr.", "A: Vậy sau này bạn phải nhìn kỹ hơn một chút.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. Động từ + 出来", "出来 trong bài này là bổ ngữ kết quả, cho biết từ việc nhìn, nghe, nếm... mà rút ra được nhận biết nào đó.", study("你没看出来吗？", "Nǐ méi kànchūlái ma?", "Bạn không nhìn ra sao?"), [
        study("我听出来他不太高兴。", "Wǒ tīngchūlái tā bú tài gāoxìng.", "Tôi nghe ra anh ấy không vui lắm."),
        study("你吃得出来这里面放了什么吗？", "Nǐ chīdechūlái zhèlǐmiàn fàng le shénme ma?", "Bạn ăn có nhận ra bên trong này cho gì không?"),
        study("从照片里看得出来他们很熟。", "Cóng zhàopiàn lǐ kàndechūlái tāmen hěn shú.", "Nhìn từ ảnh có thể nhận ra họ rất thân.")
      ]),
      grammarNote("2. 没看出来 / 看不出来", "没看出来 nhấn kết quả chưa xảy ra trong thực tế; 看不出来 nhấn không có khả năng nhận ra trong tình huống đó.", study("我没看出来。", "Wǒ méi kànchūlái.", "Tôi đã không nhận ra."), [
        study("这么远，我看不出来是谁。", "Zhème yuǎn, wǒ kànbuchūlái shì shéi.", "Xa thế này tôi không nhìn ra là ai."),
        study("刚开始我没听出来他的意思。", "Gāng kāishǐ wǒ méi tīngchūlái tā de yìsi.", "Lúc đầu tôi không nghe ra ý của anh ấy."),
        study("她化了妆，我差点儿看不出来。", "Tā huà le zhuāng, wǒ chàdiǎnr kànbuchūlái.", "Cô ấy trang điểm rồi, tôi suýt không nhận ra.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 看出来", "2. 表情", "3. 明显"], options: ["a. rõ ràng", "b. biểu cảm", "c. nhìn ra"], answer: "1-c, 2-b, 3-a" }],
      [{ question: "Điền từ thích hợp.", prompt: ["你没看___来吗？", "从她的表___就能看出来。", "变化已经很明___了。"], answer: "出 / 情 / 显" }],
      [{ question: "Câu nào đúng?", options: ["A. 你没看出来吗？", "B. 你没出来看吗？", "C. 你看没出来吗？"], answer: "A. 你没看出来吗？" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 你是不是在装没事？", "B: 没有啊。", "A: ____________"], answer: "A: 你别装了，我早就看出来了。" }],
      "Tự kiểm tra: bạn có thể phân biệt xem khi nào nên dùng 没看出来 và khi nào nên dùng 看不出来 không?"
    ),
    quickSummary: {
      words: ["看出来", "变化", "表情", "心情", "明显", "听出来"],
      patterns: ["你没看出来吗？", "我听出来他有点儿着急。"],
      reminder: "Nếu muốn nói 'nhận ra từ dấu hiệu', bổ ngữ kết quả 出来 là lựa chọn tự nhiên nhất."
    }
  },
  20: {
    objective: "Hiểu và dùng câu bị động đơn giản với 被 để nói mình bị người khác ảnh hưởng và diễn đạt tác động đó theo hướng tích cực hoặc tiêu cực.",
    vocabulary: [
      vocab("被", "bèi", "bị", "giới từ", "Dấu hiệu nổi bật của câu bị động trong bài cuối.", "我被他影响了。", "Wǒ bèi tā yǐngxiǎng le.", "Tôi đã bị anh ấy ảnh hưởng."),
      vocab("影响", "yǐngxiǎng", "ảnh hưởng", "động từ/danh từ", "Động từ trung tâm của bài.", "他的习惯影响了我。", "Tā de xíguàn yǐngxiǎng le wǒ.", "Thói quen của anh ấy đã ảnh hưởng đến tôi."),
      vocab("习惯", "xíguàn", "thói quen", "danh từ/động từ", "Nguồn ảnh hưởng thường gặp trong đời sống.", "我慢慢习惯了早起。", "Wǒ mànman xíguàn le zǎoqǐ.", "Tôi dần quen với việc dậy sớm."),
      vocab("改变", "gǎibiàn", "thay đổi", "động từ/danh từ", "Kết quả thường xuất hiện sau khi bị ảnh hưởng.", "这件事改变了我的想法。", "Zhè jiàn shì gǎibiàn le wǒ de xiǎngfǎ.", "Việc này đã thay đổi suy nghĩ của tôi."),
      vocab("想法", "xiǎngfǎ", "suy nghĩ, ý nghĩ", "danh từ", "Thứ có thể bị người khác tác động.", "他的想法跟以前不一样了。", "Tā de xiǎngfǎ gēn yǐqián bù yíyàng le.", "Suy nghĩ của anh ấy đã khác trước rồi."),
      vocab("积极", "jījí", "tích cực", "tính từ", "Dùng khi nói ảnh hưởng tốt.", "最近他的态度很积极。", "Zuìjìn tā de tàidù hěn jījí.", "Gần đây thái độ của anh ấy rất tích cực."),
      vocab("态度", "tàidù", "thái độ", "danh từ", "Một mặt dễ bị ảnh hưởng bởi người xung quanh.", "老师常常提醒我们注意学习态度。", "Lǎoshī chángcháng tíxǐng wǒmen zhùyì xuéxí tàidù.", "Giáo viên thường nhắc chúng tôi chú ý thái độ học tập."),
      vocab("慢慢", "mànman", "dần dần", "phó từ", "Dùng khi ảnh hưởng diễn ra không ngay lập tức.", "我慢慢被他影响了。", "Wǒ mànman bèi tā yǐngxiǎng le.", "Tôi đã dần bị anh ấy ảnh hưởng.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Nói mình bị ảnh hưởng bởi người khác.", [
        study("A: 你最近怎么也开始早起了？", "A: Nǐ zuìjìn zěnme yě kāishǐ zǎoqǐ le?", "A: Gần đây sao bạn cũng bắt đầu dậy sớm vậy?"),
        study("B: 我被他影响了。", "B: Wǒ bèi tā yǐngxiǎng le.", "B: Tôi đã bị anh ấy ảnh hưởng."),
        study("A: 看来他的习惯真的不错。", "A: Kànlái tā de xíguàn zhēn de búcuò.", "A: Xem ra thói quen của anh ấy thật sự không tệ.")
      ]),
      dialogueBlock("Tình huống 2", "Nói ảnh hưởng tích cực.", [
        study("A: 以前你不是不喜欢运动吗？", "A: Yǐqián nǐ bú shì bù xǐhuan yùndòng ma?", "A: Trước đây chẳng phải bạn không thích vận động sao?"),
        study("B: 对，不过最近我常跟他一起跑步，慢慢被他影响了。", "B: Duì, búguò zuìjìn wǒ cháng gēn tā yìqǐ pǎobù, mànman bèi tā yǐngxiǎng le.", "B: Đúng, nhưng gần đây tôi thường chạy bộ cùng anh ấy, dần dần bị anh ấy ảnh hưởng."),
        study("A: 这算是好影响。", "A: Zhè suàn shì hǎo yǐngxiǎng.", "A: Đây được tính là ảnh hưởng tốt.")
      ]),
      dialogueBlock("Tình huống 3", "Nói suy nghĩ bị thay đổi.", [
        study("A: 你为什么突然想去旅行了？", "A: Nǐ wèishénme tūrán xiǎng qù lǚxíng le?", "A: Tại sao bạn đột nhiên lại muốn đi du lịch?"),
        study("B: 因为听了他的经历以后，我的想法被改变了。", "B: Yīnwèi tīng le tā de jīnglì yǐhòu, wǒ de xiǎngfǎ bèi gǎibiàn le.", "B: Vì sau khi nghe trải nghiệm của anh ấy, suy nghĩ của tôi đã bị thay đổi."),
        study("A: 原来人真的会互相影响。", "A: Yuánlái rén zhēn de huì hùxiāng yǐngxiǎng.", "A: Hóa ra con người thật sự sẽ ảnh hưởng lẫn nhau.")
      ]),
      dialogueBlock("Tình huống 4", "Nhận xét sự thay đổi về thái độ.", [
        study("A: 最近他的学习态度积极多了。", "A: Zuìjìn tā de xuéxí tàidù jījí duō le.", "A: Gần đây thái độ học tập của anh ấy tích cực hơn nhiều."),
        study("B: 是啊，他大概也是被身边的人影响了。", "B: Shì a, tā dàgài yě shì bèi shēnbiān de rén yǐngxiǎng le.", "B: Đúng vậy, chắc anh ấy cũng bị những người xung quanh ảnh hưởng."),
        study("A: 好环境真的很重要。", "A: Hǎo huánjìng zhēn de hěn zhòngyào.", "A: Môi trường tốt đúng là rất quan trọng.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 被 + người/vật + động từ", "Bị động với 被 dùng khi chủ ngữ là người/vật chịu tác động của hành động.", study("我被他影响了。", "Wǒ bèi tā yǐngxiǎng le.", "Tôi đã bị anh ấy ảnh hưởng."), [
        study("他被老师表扬了。", "Tā bèi lǎoshī biǎoyáng le.", "Anh ấy đã được giáo viên khen."),
        study("我的手机被弟弟拿走了。", "Wǒ de shǒujī bèi dìdi názǒu le.", "Điện thoại của tôi đã bị em trai cầm đi."),
        study("她被这件事感动了。", "Tā bèi zhè jiàn shì gǎndòng le.", "Cô ấy đã bị việc này làm cảm động.")
      ]),
      grammarNote("2. Bị ảnh hưởng rồi dẫn đến thay đổi", "Có thể dùng 被 ảnh hưởng rồi nối tiếp bằng câu nói kết quả thay đổi về thói quen, suy nghĩ hoặc thái độ.", study("我慢慢被他影响了。", "Wǒ mànman bèi tā yǐngxiǎng le.", "Tôi đã dần bị anh ấy ảnh hưởng."), [
        study("我的想法被改变了。", "Wǒ de xiǎngfǎ bèi gǎibiàn le.", "Suy nghĩ của tôi đã bị thay đổi."),
        study("他被大家的热情影响了。", "Tā bèi dàjiā de rèqíng yǐngxiǎng le.", "Anh ấy đã bị sự nhiệt tình của mọi người ảnh hưởng."),
        study("我被她的态度打动了。", "Wǒ bèi tā de tàidù dǎdòng le.", "Tôi đã bị thái độ của cô ấy làm xúc động.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 被", "2. 影响", "3. 态度"], options: ["a. thái độ", "b. bị", "c. ảnh hưởng"], answer: "1-b, 2-c, 3-a" }],
      [{ question: "Điền từ thích hợp.", prompt: ["我___他影响了。", "他的习惯影___了我。", "我的想法被改___了。"], answer: "被 / 响 / 变" }],
      [{ question: "Câu nào đúng?", options: ["A. 我被他影响了。", "B. 我他被影响了。", "C. 我影响了被他。"], answer: "A. 我被他影响了。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 你最近怎么也开始早起了？", "B: ____________", "A: 看来他的习惯真的不错。"], answer: "B: 我被他影响了。" }],
      "Tự kiểm tra: bạn có thể tự nói một câu bị động với 被 về việc mình bị ai đó ảnh hưởng không?"
    ),
    quickSummary: {
      words: ["被", "影响", "习惯", "改变", "想法", "态度"],
      patterns: ["我被他影响了。", "我的想法被改变了。"],
      reminder: "Khi chủ ngữ là bên chịu tác động, hãy cân nhắc dùng 被 để câu rõ và tự nhiên hơn."
    }
  }
};

const hsk3VocabularyFourTextsExpansion = {};

const hsk3DialogueDefaultNotes = [
  "Mở chủ đề bằng một tình huống gần với bài khóa để người học nhận ra ngữ cảnh dùng câu.",
  "Làm rõ mẫu câu hoặc điểm ngữ pháp trọng tâm đang được luyện trong bài.",
  "Mở rộng thêm một góc dùng tự nhiên để người học thấy cách áp dụng ngoài lớp học.",
  "Khép lại bằng tình huống ngắn giúp liên hệ nội dung bài với giao tiếp hằng ngày."
];

hsk3Course.lessons = hsk3Course.lessons.map((lesson) => {
  const detailed = hsk3DetailedLessons[lesson.number];
  const extraVocabulary = hsk3VocabularyFourTextsExpansion[lesson.number] || [];
  return detailed
    ? {
        ...lesson,
        ...detailed,
        vocabulary: [...detailed.vocabulary, ...extraVocabulary],
        dialogueBlocks: detailed.dialogueBlocks.map((block, index) => ({
          ...block,
          note: block.note || hsk3DialogueDefaultNotes[index] || ""
        })),
        placeholder: false
      }
    : lesson;
});

function createPlaceholderCourse(id, label, focus) {
  return {
    id,
    label,
    overview: `${label} sẽ giữ cùng bố cục bài học hiện tại. Nội dung chi tiết sẽ được phát triển theo đúng độ khó của cấp độ này.`,
    lessons: Array.from({ length: 10 }, (_, index) => ({
      id: `${id}-lesson-${index + 1}`,
      number: index + 1,
      title: `Bài ${index + 1}: ${focus}`,
      objective: `Placeholder cho ${label}. Bài chi tiết sẽ dùng cùng cấu trúc: Vocabulary, Dialogue, Grammar, Exercises, Quick Summary.`,
      placeholder: true,
      summary: `${label} đang được giữ chỗ theo cùng hệ thống điều hướng. Khi mở rộng, từng bài sẽ đi theo đúng study flow hiện tại.`,
      quickSummary: {
        words: [label, "placeholder"],
        patterns: [`${label} lesson structure`],
        reminder: "Giữ nguyên bố cục và phong cách học như HSK 1."
      }
    }))
  };
}

const hsk4OfficialStructure = [
  { number: 1, chinese: "简单的爱情", pinyin: "Jiǎndān de àiqíng", vietnamese: "Tình yêu giản dị", topic: "Tình cảm, quan hệ và cách kể chuyện ngắn có chiều sâu cảm xúc" },
  { number: 2, chinese: "真正的朋友", pinyin: "Zhēnzhèng de péngyou", vietnamese: "Người bạn thật sự", topic: "Tình bạn, sự tin cậy và đánh giá quan hệ giữa người với người" },
  { number: 3, chinese: "经理对我印象不错", pinyin: "Jīnglǐ duì wǒ yìnxiàng búcuò", vietnamese: "Quản lý có ấn tượng khá tốt về tôi", topic: "Phỏng vấn, công việc, ấn tượng và giao tiếp nơi làm việc" },
  { number: 4, chinese: "不要太着急赚钱", pinyin: "Búyào tài zháojí zhuànqián", vietnamese: "Đừng quá vội kiếm tiền", topic: "Lời khuyên về cuộc sống, công việc và thứ tự ưu tiên" },
  { number: 5, chinese: "只买对的，不买贵的", pinyin: "Zhǐ mǎi duì de, bù mǎi guì de", vietnamese: "Chỉ mua thứ phù hợp, không mua thứ đắt", topic: "Mua sắm, giá trị sử dụng và lựa chọn hợp lý" },
  { number: 6, chinese: "一分钱一分货", pinyin: "Yì fēn qián yì fēn huò", vietnamese: "Tiền nào của nấy", topic: "Chất lượng, giá cả và nhận xét khi mua hàng" },
  { number: 7, chinese: "最好的医生是自己", pinyin: "Zuì hǎo de yīshēng shì zìjǐ", vietnamese: "Bác sĩ tốt nhất là chính mình", topic: "Sức khỏe, thói quen sống và tự chăm sóc bản thân" },
  { number: 8, chinese: "生活中不缺少美", pinyin: "Shēnghuó zhōng bù quēshǎo měi", vietnamese: "Trong cuộc sống không thiếu cái đẹp", topic: "Cảm nhận cái đẹp, quan sát đời sống và góc nhìn cá nhân" },
  { number: 9, chinese: "阳光总在风雨后", pinyin: "Yángguāng zǒng zài fēngyǔ hòu", vietnamese: "Ánh nắng luôn đến sau mưa gió", topic: "Khó khăn, động viên tinh thần và vượt qua thử thách" },
  { number: 10, chinese: "幸福的标准", pinyin: "Xìngfú de biāozhǔn", vietnamese: "Tiêu chuẩn của hạnh phúc", topic: "Quan điểm sống, giá trị cá nhân và tranh luận nhẹ" },
  { number: 11, chinese: "读书好，读好书，好读书", pinyin: "Dúshū hǎo, dú hǎo shū, hào dúshū", vietnamese: "Đọc sách là tốt, đọc sách hay, yêu thích đọc sách", topic: "Đọc sách, thói quen học tập và giá trị của tri thức" },
  { number: 12, chinese: "用心发现世界", pinyin: "Yòngxīn fāxiàn shìjiè", vietnamese: "Dùng trái tim để khám phá thế giới", topic: "Quan sát xã hội, trải nghiệm cá nhân và nhận thức về thế giới" },
  { number: 13, chinese: "喝着茶看京剧", pinyin: "Hēzhe chá kàn Jīngjù", vietnamese: "Vừa uống trà vừa xem Kinh kịch", topic: "Văn hóa truyền thống, trải nghiệm nghệ thuật và miêu tả hoạt động đồng thời" },
  { number: 14, chinese: "保护地球母亲", pinyin: "Bǎohù dìqiú mǔqīn", vietnamese: "Bảo vệ Mẹ Trái Đất", topic: "Môi trường, ý thức bảo vệ thiên nhiên và hành động cộng đồng" },
  { number: 15, chinese: "教育孩子的艺术", pinyin: "Jiàoyù háizi de yìshù", vietnamese: "Nghệ thuật giáo dục trẻ em", topic: "Giáo dục, nuôi dạy trẻ và trao đổi quan điểm" },
  { number: 16, chinese: "生活可以更美好", pinyin: "Shēnghuó kěyǐ gèng měihǎo", vietnamese: "Cuộc sống có thể đẹp hơn", topic: "Cải thiện chất lượng sống và thái độ sống tích cực" },
  { number: 17, chinese: "人与自然", pinyin: "Rén yǔ zìrán", vietnamese: "Con người và thiên nhiên", topic: "Quan hệ giữa con người và tự nhiên" },
  { number: 18, chinese: "科技与世界", pinyin: "Kējì yǔ shìjiè", vietnamese: "Khoa học công nghệ và thế giới", topic: "Công nghệ, xã hội hiện đại và tác động toàn cầu" },
  { number: 19, chinese: "生活的味道", pinyin: "Shēnghuó de wèidào", vietnamese: "Hương vị của cuộc sống", topic: "Trải nghiệm sống, cảm nhận đời thường và ngôn ngữ biểu đạt tinh tế hơn" },
  { number: 20, chinese: "路上的风景", pinyin: "Lùshang de fēngjǐng", vietnamese: "Phong cảnh trên đường", topic: "Du lịch, góc nhìn trên hành trình và ý nghĩa của trải nghiệm" }
];

const hsk4Course = {
  id: "hsk4",
  label: "HSK 4",
  overview: "HSK 6 được khóa theo đúng 40 bài của HSK Standard Course 6A và 6B. Giai đoạn này giữ nguyên layout hiện tại và triển khai lesson page theo cùng study flow.",
  lessons: hsk4OfficialStructure.map((lesson) => ({
    id: `hsk4-lesson-${lesson.number}`,
    number: lesson.number,
    title: `Bài ${lesson.number}: ${lesson.vietnamese}`,
    titleChinese: lesson.chinese,
    titlePinyin: lesson.pinyin,
    vietnameseTitle: lesson.vietnamese,
    objective: `Bài này tập trung vào chủ đề: ${lesson.topic}. Nội dung chi tiết sẽ được viết theo cùng lesson flow hiện tại khi bắt đầu build HSK 4.`,
    placeholder: true,
    summary: `Placeholder chuẩn cho ${lesson.chinese}. Khi viết nội dung chi tiết, bài này sẽ dùng đúng cấu trúc: Vocabulary, Dialogue, Grammar, Exercises, Quick Summary.`,
    quickSummary: {
      words: ["HSK 4", `Bài ${lesson.number}`],
      patterns: [lesson.chinese],
      reminder: "HSK 4 hiện đã được khóa đúng thứ tự bài; nội dung chi tiết sẽ được phát triển theo lesson order này."
    }
  }))
};

const hsk4DetailedLessons = {
  1: {
    objective: "Đọc và nói về một mối quan hệ tình cảm giản dị, diễn đạt cảm xúc chân thành và nhận xét điều gì mới là quan trọng trong một mối quan hệ.",
    vocabulary: [
      vocab("爱情", "àiqíng", "tình yêu", "danh từ", "Chủ đề trung tâm của bài 1.", "他们觉得简单的爱情最让人安心。", "Tāmen juéde jiǎndān de àiqíng zuì ràng rén ānxīn.", "Họ thấy tình yêu giản dị là thứ khiến người ta yên lòng nhất."),
      vocab("简单", "jiǎndān", "đơn giản, giản dị", "tính từ", "Dùng để nói về lối sống hoặc kiểu tình cảm không phức tạp.", "她喜欢简单一点儿的生活。", "Tā xǐhuan jiǎndān yìdiǎnr de shēnghuó.", "Cô ấy thích cuộc sống giản dị hơn một chút."),
      vocab("关心", "guānxīn", "quan tâm", "động từ", "Một hành động nhỏ nhưng quan trọng trong quan hệ.", "真正关心你的人会注意你的变化。", "Zhēnzhèng guānxīn nǐ de rén huì zhùyì nǐ de biànhuà.", "Người thật sự quan tâm bạn sẽ chú ý đến những thay đổi của bạn."),
      vocab("照顾", "zhàogù", "chăm sóc", "động từ", "Dùng khi nói hành động thực tế hơn lời nói.", "生病的时候他一直照顾我。", "Shēngbìng de shíhou tā yìzhí zhàogù wǒ.", "Lúc tôi ốm anh ấy đã luôn chăm sóc tôi."),
      vocab("浪漫", "làngmàn", "lãng mạn", "tính từ", "Dùng để so sánh với kiểu tình cảm giản dị nhưng bền.", "有的人觉得浪漫比礼物更重要。", "Yǒu de rén juéde làngmàn bǐ lǐwù gèng zhòngyào.", "Có người thấy sự lãng mạn còn quan trọng hơn quà tặng."),
      vocab("礼物", "lǐwù", "món quà", "danh từ", "Biểu hiện vật chất trong mối quan hệ.", "他送给她的礼物并不贵。", "Tā sòng gěi tā de lǐwù bìng bú guì.", "Món quà anh ấy tặng cô ấy không đắt."),
      vocab("感动", "gǎndòng", "cảm động", "động từ/tính từ", "Kết quả cảm xúc trước một hành động chân thành.", "那件小事让我很感动。", "Nà jiàn xiǎoshì ràng wǒ hěn gǎndòng.", "Chuyện nhỏ đó khiến tôi rất cảm động."),
      vocab("陪", "péi", "ở bên, đi cùng", "động từ", "Một hành động giản dị nhưng có ý nghĩa lớn.", "忙的时候有人陪你，感觉很不一样。", "Máng de shíhou yǒu rén péi nǐ, gǎnjué hěn bù yíyàng.", "Lúc bận rộn mà có người ở bên bạn thì cảm giác rất khác.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Nói điều quan trọng trong tình yêu.", [
        study("A: 你觉得什么样的爱情最好？", "A: Nǐ juéde shénme yàng de àiqíng zuì hǎo?", "A: Bạn thấy kiểu tình yêu nào là tốt nhất?"),
        study("B: 我觉得简单的爱情最好，不一定要特别浪漫。", "B: Wǒ juéde jiǎndān de àiqíng zuì hǎo, bù yídìng yào tèbié làngmàn.", "B: Tôi thấy tình yêu giản dị là tốt nhất, không nhất thiết phải quá lãng mạn."),
        study("A: 只要两个人能互相关心就很好了。", "A: Zhǐyào liǎng ge rén néng hùxiāng guānxīn jiù hěn hǎo le.", "A: Chỉ cần hai người có thể quan tâm lẫn nhau là tốt rồi.")
      ]),
      dialogueBlock("Tình huống 2", "Một hành động nhỏ nhưng làm người khác cảm động.", [
        study("A: 他送过你最特别的礼物是什么？", "A: Tā sòngguo nǐ zuì tèbié de lǐwù shì shénme?", "A: Món quà đặc biệt nhất anh ấy từng tặng bạn là gì?"),
        study("B: 其实不是什么贵的东西，只是一顿他亲手做的晚饭。", "B: Qíshí bú shì shénme guì de dōngxi, zhǐshì yí dùn tā qīnshǒu zuò de wǎnfàn.", "B: Thật ra không phải thứ gì đắt, chỉ là một bữa tối do chính tay anh ấy nấu."),
        study("A: 这样的礼物反而更让人感动。", "A: Zhèyàng de lǐwù fǎn'ér gèng ràng rén gǎndòng.", "A: Món quà như vậy ngược lại còn khiến người ta cảm động hơn.")
      ]),
      dialogueBlock("Tình huống 3", "So sánh lời nói và hành động.", [
        study("A: 你觉得说得好听重要，还是做得到重要？", "A: Nǐ juéde shuō de hǎotīng zhòngyào, háishi zuò de dào zhòngyào?", "A: Bạn thấy nói hay quan trọng hay làm được mới quan trọng?"),
        study("B: 当然是做得到更重要。", "B: Dāngrán shì zuò de dào gèng zhòngyào.", "B: Đương nhiên là làm được mới quan trọng hơn."),
        study("A: 对，真正关心你的人会用行动说明。", "A: Duì, zhēnzhèng guānxīn nǐ de rén huì yòng xíngdòng shuōmíng.", "A: Đúng, người thật sự quan tâm bạn sẽ dùng hành động để nói rõ.")
      ]),
      dialogueBlock("Tình huống 4", "Ở bên nhau lúc khó khăn.", [
        study("A: 你为什么一直觉得他特别可靠？", "A: Nǐ wèishénme yìzhí juéde tā tèbié kěkào?", "A: Tại sao bạn luôn thấy anh ấy đặc biệt đáng tin?"),
        study("B: 因为我最难的时候，他一直在我身边陪着我。", "B: Yīnwèi wǒ zuì nán de shíhou, tā yìzhí zài wǒ shēnbiān péizhe wǒ.", "B: Vì lúc tôi khó khăn nhất, anh ấy vẫn luôn ở bên cạnh tôi."),
        study("A: 这样的感情确实很难得。", "A: Zhèyàng de gǎnqíng quèshí hěn nándé.", "A: Tình cảm như vậy quả thật rất hiếm.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 不一定...", "不一定 dùng để làm mềm nhận định, cho biết một điều không phải lúc nào cũng đúng hoặc không bắt buộc phải như vậy.", study("不一定要特别浪漫。", "Bù yídìng yào tèbié làngmàn.", "Không nhất thiết phải quá lãng mạn."), [
        study("爱情不一定和礼物有关系。", "Àiqíng bù yídìng hé lǐwù yǒu guānxi.", "Tình yêu không nhất thiết có liên quan đến quà tặng."),
        study("贵的东西不一定最适合你。", "Guì de dōngxi bù yídìng zuì shìhé nǐ.", "Đồ đắt chưa chắc là thứ hợp với bạn nhất."),
        study("说得多不一定做得到。", "Shuō de duō bù yídìng zuò de dào.", "Nói nhiều chưa chắc làm được.")
      ]),
      grammarNote("2. 只要...就...", "Mẫu này dùng để nêu điều kiện đủ: chỉ cần có điều kiện phía trước thì kết quả phía sau là đủ tốt hoặc sẽ xảy ra.", study("只要两个人能互相关心就很好了。", "Zhǐyào liǎng ge rén néng hùxiāng guānxīn jiù hěn hǎo le.", "Chỉ cần hai người có thể quan tâm lẫn nhau là tốt rồi."), [
        study("只要他在，我就放心。", "Zhǐyào tā zài, wǒ jiù fàngxīn.", "Chỉ cần anh ấy ở đây là tôi yên tâm."),
        study("只要你愿意说，我就愿意听。", "Zhǐyào nǐ yuànyì shuō, wǒ jiù yuànyì tīng.", "Chỉ cần bạn muốn nói thì tôi sẵn sàng nghe."),
        study("只要彼此相信，问题就不大。", "Zhǐyào bǐcǐ xiāngxìn, wèntí jiù bù dà.", "Chỉ cần tin nhau thì vấn đề sẽ không lớn.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 关心", "2. 感动", "3. 陪"], options: ["a. cảm động", "b. quan tâm", "c. ở bên, đi cùng"], answer: "1-b, 2-a, 3-c" }],
      [{ question: "Điền từ thích hợp.", prompt: ["简单的爱___最好。", "只要两个人能互相关___就很好了。", "这样的礼物更让人感___。"], answer: "情 / 心 / 动" }],
      [{ question: "Câu nào đúng?", options: ["A. 贵的东西不一定最适合你。", "B. 贵的东西一定不最适合你。", "C. 贵的东西不适合一定你。"], answer: "A. 贵的东西不一定最适合你。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 你觉得什么样的爱情最好？", "B: ____________", "A: 只要两个人能互相关心就很好了。"], answer: "B: 我觉得简单的爱情最好，不一定要特别浪漫。" }],
      "Tự kiểm tra: bạn có thể dùng 不一定 và 只要...就... để nói quan điểm về một mối quan hệ không?"
    ),
    quickSummary: {
      words: ["爱情", "简单", "关心", "照顾", "感动", "陪"],
      patterns: ["我觉得简单的爱情最好。", "只要两个人能互相关心就很好了。"],
      reminder: "Bài này không cần từ quá khó. Trọng tâm là nói cảm xúc chân thành bằng câu rõ, tự nhiên."
    }
  },
  2: {
    objective: "Nhận diện một người bạn thật sự qua hành động, sự giúp đỡ và cách đối xử trong lúc khó khăn.",
    vocabulary: [
      vocab("真正", "zhēnzhèng", "thật sự", "tính từ", "Dùng để nhấn mạnh bản chất thật, không chỉ bề ngoài.", "真正的朋友不会只说好听的话。", "Zhēnzhèng de péngyou bú huì zhǐ shuō hǎotīng de huà.", "Người bạn thật sự sẽ không chỉ nói những lời hay."),
      vocab("朋友", "péngyou", "bạn", "danh từ", "Từ trung tâm của bài.", "我有几个关系很近的朋友。", "Wǒ yǒu jǐ ge guānxi hěn jìn de péngyou.", "Tôi có vài người bạn rất thân."),
      vocab("帮助", "bāngzhù", "giúp đỡ", "động từ/danh từ", "Một dấu hiệu quan trọng của tình bạn thật.", "最困难的时候他给了我很大的帮助。", "Zuì kùnnan de shíhou tā gěi le wǒ hěn dà de bāngzhù.", "Lúc khó khăn nhất anh ấy đã giúp tôi rất nhiều."),
      vocab("困难", "kùnnan", "khó khăn", "danh từ/tính từ", "Ngữ cảnh để nhìn rõ tình bạn.", "遇到困难的时候最能看清一个人。", "Yùdào kùnnan de shíhou zuì néng kànqīng yí ge rén.", "Khi gặp khó khăn là lúc nhìn rõ một con người nhất."),
      vocab("信任", "xìnrèn", "tin tưởng", "động từ/danh từ", "Nền tảng quan trọng của tình bạn thật.", "我很信任这个朋友。", "Wǒ hěn xìnrèn zhège péngyou.", "Tôi rất tin người bạn này."),
      vocab("误会", "wùhuì", "hiểu lầm", "danh từ/động từ", "Thứ có thể xuất hiện nhưng cần được giải thích rõ.", "有误会的时候要早点儿说明白。", "Yǒu wùhuì de shíhou yào zǎodiǎnr shuō míngbai.", "Khi có hiểu lầm thì nên nói rõ sớm."),
      vocab("原谅", "yuánliàng", "tha thứ", "động từ", "Một biểu hiện của quan hệ bền vững.", "真正的朋友更容易互相原谅。", "Zhēnzhèng de péngyou gèng róngyì hùxiāng yuánliàng.", "Bạn thật sự sẽ dễ tha thứ cho nhau hơn."),
      vocab("失望", "shīwàng", "thất vọng", "tính từ/động từ", "Cảm xúc khi một quan hệ không như mong đợi.", "朋友之间最怕让对方失望。", "Péngyou zhījiān zuì pà ràng duìfāng shīwàng.", "Giữa bạn bè điều đáng sợ nhất là làm đối phương thất vọng.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Nói thế nào là bạn thật sự.", [
        study("A: 你觉得什么样的人才算真正的朋友？", "A: Nǐ juéde shénme yàng de rén cái suàn zhēnzhèng de péngyou?", "A: Bạn thấy người như thế nào mới được tính là bạn thật sự?"),
        study("B: 我觉得在你最困难的时候还愿意帮助你的人，才算真正的朋友。", "B: Wǒ juéde zài nǐ zuì kùnnan de shíhou hái yuànyì bāngzhù nǐ de rén, cái suàn zhēnzhèng de péngyou.", "B: Tôi thấy người vẫn sẵn lòng giúp bạn lúc bạn khó khăn nhất mới được tính là bạn thật sự."),
        study("A: 我也很同意。", "A: Wǒ yě hěn tóngyì.", "A: Tôi cũng rất đồng ý.")
      ]),
      dialogueBlock("Tình huống 2", "Bạn thật sẽ nói thật.", [
        study("A: 他每次都直接告诉我哪里做得不好。", "A: Tā měi cì dōu zhíjiē gàosu wǒ nǎli zuò de bù hǎo.", "A: Lần nào anh ấy cũng nói thẳng với tôi chỗ nào tôi làm chưa tốt."),
        study("B: 这样的人反而值得信任。", "B: Zhèyàng de rén fǎn'ér zhídé xìnrèn.", "B: Người như vậy ngược lại mới đáng tin."),
        study("A: 对，因为他说这些不是为了伤害我。", "A: Duì, yīnwèi tā shuō zhèxiē bú shì wèile shānghài wǒ.", "A: Đúng, vì anh ấy nói những điều đó không phải để làm tổn thương tôi.")
      ]),
      dialogueBlock("Tình huống 3", "Giải quyết hiểu lầm.", [
        study("A: 你们前两天不是还有点儿误会吗？", "A: Nǐmen qián liǎng tiān bú shì hái yǒudiǎnr wùhuì ma?", "A: Chẳng phải hai hôm trước hai người vẫn còn hiểu lầm nhau sao?"),
        study("B: 对，不过我们已经说清楚了。", "B: Duì, búguò wǒmen yǐjīng shuō qīngchu le.", "B: Đúng, nhưng chúng tôi đã nói rõ rồi."),
        study("A: 真正的朋友确实不应该因为小事失去信任。", "A: Zhēnzhèng de péngyou quèshí bù yīnggāi yīnwèi xiǎoshì shīqù xìnrèn.", "A: Bạn thật sự đúng là không nên vì chuyện nhỏ mà mất lòng tin.")
      ]),
      dialogueBlock("Tình huống 4", "Tha thứ và tiếp tục tin nhau.", [
        study("A: 如果朋友做错了事，你会原谅他吗？", "A: Rúguǒ péngyou zuò cuò le shì, nǐ huì yuánliàng tā ma?", "A: Nếu bạn mình làm sai, bạn có tha thứ cho anh ấy không?"),
        study("B: 如果他是真心的，我会给他一次机会。", "B: Rúguǒ tā shì zhēnxīn de, wǒ huì gěi tā yí cì jīhuì.", "B: Nếu anh ấy là thật lòng, tôi sẽ cho anh ấy một cơ hội."),
        study("A: 这样友情才可能更长久。", "A: Zhèyàng yǒuqíng cái kěnéng gèng chángjiǔ.", "A: Có như vậy tình bạn mới có thể bền lâu hơn.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. ...才...", "才 dùng để nhấn mạnh điều kiện hoặc tiêu chuẩn cần có thì mới có thể đi đến kết luận phía sau.", study("这样的人才算真正的朋友。", "Zhèyàng de rén cái suàn zhēnzhèng de péngyou.", "Người như vậy mới được tính là bạn thật sự."), [
        study("想说清楚这件事，先冷静下来才行。", "Xiǎng shuō qīngchu zhè jiàn shì, xiān lěngjìng xiàlai cái xíng.", "Muốn nói rõ chuyện này thì trước hết phải bình tĩnh mới được."),
        study("只有互相信任，关系才会长久。", "Zhǐyǒu hùxiāng xìnrèn, guānxi cái huì chángjiǔ.", "Chỉ khi tin nhau thì mối quan hệ mới bền lâu."),
        study("遇到困难还能帮助你的人，才值得珍惜。", "Yùdào kùnnan hái néng bāngzhù nǐ de rén, cái zhídé zhēnxī.", "Người vẫn có thể giúp bạn lúc khó khăn mới đáng trân trọng.")
      ]),
      grammarNote("2. 反而", "反而 dùng khi kết quả thực tế trái với điều người ta thường nghĩ hoặc trái với vẻ bề ngoài ban đầu.", study("这样的人反而值得信任。", "Zhèyàng de rén fǎn'ér zhídé xìnrèn.", "Người như vậy ngược lại mới đáng tin."), [
        study("他说话不多，反而让人觉得更可靠。", "Tā shuōhuà bù duō, fǎn'ér ràng rén juéde gèng kěkào.", "Anh ấy nói không nhiều, ngược lại khiến người ta thấy đáng tin hơn."),
        study("两个人说开了，关系反而更近了。", "Liǎng ge rén shuō kāi le, guānxi fǎn'ér gèng jìn le.", "Hai người nói rõ rồi thì quan hệ ngược lại còn gần hơn."),
        study("那次误会以后，我们反而更了解彼此了。", "Nà cì wùhuì yǐhòu, wǒmen fǎn'ér gèng liǎojiě bǐcǐ le.", "Sau lần hiểu lầm đó, ngược lại chúng tôi còn hiểu nhau hơn.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 信任", "2. 误会", "3. 原谅"], options: ["a. tha thứ", "b. tin tưởng", "c. hiểu lầm"], answer: "1-b, 2-c, 3-a" }],
      [{ question: "Điền từ thích hợp.", prompt: ["这样的人___算真正的朋友。", "有误___的时候要早点儿说明白。", "这样的人反___值得信任。"], answer: "才 / 会 / 而" }],
      [{ question: "Câu nào đúng?", options: ["A. 这样的人才算真正的朋友。", "B. 这样的人算才真正的朋友。", "C. 这样才的人算真正的朋友。"], answer: "A. 这样的人才算真正的朋友。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 你觉得什么样的人才算真正的朋友？", "B: ____________", "A: 我也很同意。"], answer: "B: 我觉得在你最困难的时候还愿意帮助你的人，才算真正的朋友。" }],
      "Tự kiểm tra: bạn có thể dùng 才 để nói tiêu chuẩn của một mối quan hệ thật sự không?"
    ),
    quickSummary: {
      words: ["真正", "朋友", "帮助", "困难", "信任", "误会"],
      patterns: ["这样的人才算真正的朋友。", "这样的人反而值得信任。"],
      reminder: "Bài này quan trọng ở logic câu: tiêu chuẩn nào mới đủ để kết luận đó là 'bạn thật sự'."
    }
  },
  3: {
    objective: "Diễn đạt ấn tượng của người quản lý về bản thân, nói về phỏng vấn và giao tiếp nơi làm việc bằng ngôn ngữ tự nhiên hơn HSK 3.",
    vocabulary: [
      vocab("经理", "jīnglǐ", "quản lý", "danh từ", "Người đánh giá hoặc phỏng vấn trong bài.", "经理对他印象一直不错。", "Jīnglǐ duì tā yìnxiàng yìzhí búcuò.", "Quản lý vẫn luôn có ấn tượng khá tốt về anh ấy."),
      vocab("印象", "yìnxiàng", "ấn tượng", "danh từ", "Dùng để nói cảm nhận chung về một người.", "第一印象有时候会影响后面的判断。", "Dì-yī yìnxiàng yǒushíhou huì yǐngxiǎng hòumiàn de pànduàn.", "Ấn tượng đầu tiên đôi khi sẽ ảnh hưởng đến đánh giá về sau."),
      vocab("不错", "búcuò", "khá tốt, không tệ", "tính từ", "Cách đánh giá nhẹ nhưng tích cực.", "你今天的表现很不错。", "Nǐ jīntiān de biǎoxiàn hěn búcuò.", "Hôm nay phần thể hiện của bạn khá tốt."),
      vocab("面试", "miànshì", "phỏng vấn", "danh từ/động từ", "Ngữ cảnh chính của bài học.", "下周我要去参加一个面试。", "Xià zhōu wǒ yào qù cānjiā yí ge miànshì.", "Tuần sau tôi phải đi tham gia một buổi phỏng vấn."),
      vocab("表现", "biǎoxiàn", "thể hiện", "danh từ/động từ", "Dùng khi nói cách mình trả lời hoặc làm việc.", "他在面试中的表现很自然。", "Tā zài miànshì zhōng de biǎoxiàn hěn zìrán.", "Phần thể hiện của anh ấy trong buổi phỏng vấn rất tự nhiên."),
      vocab("介绍", "jièshào", "giới thiệu", "động từ/danh từ", "Dùng khi tự giới thiệu hoặc nói về kinh nghiệm.", "一开始我先简单介绍了自己。", "Yì kāishǐ wǒ xiān jiǎndān jièshào le zìjǐ.", "Ngay lúc đầu tôi đã giới thiệu ngắn gọn về bản thân."),
      vocab("经验", "jīngyàn", "kinh nghiệm", "danh từ", "Một yếu tố quan trọng trong công việc.", "这份工作对经验的要求比较高。", "Zhè fèn gōngzuò duì jīngyàn de yāoqiú bǐjiào gāo.", "Công việc này có yêu cầu về kinh nghiệm tương đối cao."),
      vocab("首先", "shǒuxiān", "trước hết", "phó từ", "Dùng để trình bày ý theo thứ tự rõ ràng.", "首先我要感谢经理给我这个机会。", "Shǒuxiān wǒ yào gǎnxiè jīnglǐ gěi wǒ zhège jīhuì.", "Trước hết tôi muốn cảm ơn quản lý đã cho tôi cơ hội này.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Nói kết quả sau buổi phỏng vấn.", [
        study("A: 你昨天的面试怎么样？", "A: Nǐ zuótiān de miànshì zěnmeyàng?", "A: Buổi phỏng vấn hôm qua của bạn thế nào?"),
        study("B: 还可以，听说经理对我印象不错。", "B: Hái kěyǐ, tīngshuō jīnglǐ duì wǒ yìnxiàng búcuò.", "B: Cũng được, nghe nói quản lý có ấn tượng khá tốt về tôi."),
        study("A: 那说明你的表现应该挺好的。", "A: Nà shuōmíng nǐ de biǎoxiàn yīnggāi tǐng hǎo de.", "A: Vậy chứng tỏ phần thể hiện của bạn chắc khá tốt.")
      ]),
      dialogueBlock("Tình huống 2", "Kể mình đã giới thiệu thế nào.", [
        study("A: 面试一开始你说了些什么？", "A: Miànshì yì kāishǐ nǐ shuō le xiē shénme?", "A: Lúc bắt đầu phỏng vấn bạn đã nói những gì?"),
        study("B: 首先我简单介绍了自己的工作经验。", "B: Shǒuxiān wǒ jiǎndān jièshào le zìjǐ de gōngzuò jīngyàn.", "B: Trước hết tôi đã giới thiệu ngắn gọn về kinh nghiệm làm việc của mình."),
        study("A: 这样很清楚，也很自然。", "A: Zhèyàng hěn qīngchu, yě hěn zìrán.", "A: Làm vậy rất rõ ràng, cũng rất tự nhiên.")
      ]),
      dialogueBlock("Tình huống 3", "Nói vì sao quản lý có ấn tượng tốt.", [
        study("A: 你觉得经理为什么对你印象不错？", "A: Nǐ juéde jīnglǐ wèishénme duì nǐ yìnxiàng búcuò?", "A: Bạn thấy tại sao quản lý lại có ấn tượng khá tốt về bạn?"),
        study("B: 可能因为我回答问题比较真诚，而且很有条理。", "B: Kěnéng yīnwèi wǒ huídá wèntí bǐjiào zhēnchéng, érqiě hěn yǒu tiáolǐ.", "B: Có thể vì tôi trả lời câu hỏi khá chân thành, hơn nữa rất có trình tự."),
        study("A: 对，面试的时候这一点很重要。", "A: Duì, miànshì de shíhou zhè yìdiǎn hěn zhòngyào.", "A: Đúng, lúc phỏng vấn điểm này rất quan trọng.")
      ]),
      dialogueBlock("Tình huống 4", "Đưa lời khuyên cho lần sau.", [
        study("A: 如果下次还有第二轮面试，你最想准备什么？", "A: Rúguǒ xià cì hái yǒu dì-èr lún miànshì, nǐ zuì xiǎng zhǔnbèi shénme?", "A: Nếu lần sau còn có vòng phỏng vấn thứ hai, bạn muốn chuẩn bị gì nhất?"),
        study("B: 我想把项目经验说得更具体一点儿。", "B: Wǒ xiǎng bǎ xiàngmù jīngyàn shuō de gèng jùtǐ yìdiǎnr.", "B: Tôi muốn nói về kinh nghiệm dự án cụ thể hơn một chút."),
        study("A: 那样经理会更了解你的能力。", "A: Nàyyàng jīnglǐ huì gèng liǎojiě nǐ de nénglì.", "A: Như vậy quản lý sẽ hiểu rõ hơn năng lực của bạn.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 对...印象不错", "Đây là cụm đánh giá rất hay dùng trong ngữ cảnh công việc hoặc lần đầu gặp mặt, nghĩa là có cảm nhận tích cực chung về ai đó.", study("经理对我印象不错。", "Jīnglǐ duì wǒ yìnxiàng búcuò.", "Quản lý có ấn tượng khá tốt về tôi."), [
        study("老师对她印象很好。", "Lǎoshī duì tā yìnxiàng hěn hǎo.", "Giáo viên có ấn tượng rất tốt về cô ấy."),
        study("大家对这个新同事印象不错。", "Dàjiā duì zhège xīn tóngshì yìnxiàng búcuò.", "Mọi người có ấn tượng khá tốt về đồng nghiệp mới này."),
        study("他第一次见客户就给人留下了好印象。", "Tā dì-yī cì jiàn kèhù jiù gěi rén liúxià le hǎo yìnxiàng.", "Lần đầu gặp khách hàng anh ấy đã để lại ấn tượng tốt.")
      ]),
      grammarNote("2. 首先...其次...", "Mẫu này giúp trình bày ý theo thứ tự rõ ràng hơn, rất phù hợp với tự giới thiệu, giải thích và phỏng vấn.", study("首先我简单介绍了自己的工作经验。", "Shǒuxiān wǒ jiǎndān jièshào le zìjǐ de gōngzuò jīngyàn.", "Trước hết tôi đã giới thiệu ngắn gọn về kinh nghiệm làm việc của mình."), [
        study("首先要了解情况，其次再做决定。", "Shǒuxiān yào liǎojiě qíngkuàng, qícì zài zuò juédìng.", "Trước hết phải hiểu tình hình, sau đó mới ra quyết định."),
        study("首先他说了问题，其次提出了解决办法。", "Shǒuxiān tā shuō le wèntí, qícì tíchū le jiějué bànfǎ.", "Trước hết anh ấy nói về vấn đề, sau đó đưa ra cách giải quyết."),
        study("首先要有信心，其次要准备充分。", "Shǒuxiān yào yǒu xìnxīn, qícì yào zhǔnbèi chōngfèn.", "Trước hết phải có tự tin, sau đó phải chuẩn bị đầy đủ.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 印象", "2. 面试", "3. 经验"], options: ["a. kinh nghiệm", "b. ấn tượng", "c. phỏng vấn"], answer: "1-b, 2-c, 3-a" }],
      [{ question: "Điền từ thích hợp.", prompt: ["经理对我印___不错。", "下周我要去参加一个面___。", "首先我简单介___了自己。"], answer: "象 / 试 / 绍" }],
      [{ question: "Câu nào đúng?", options: ["A. 经理对我印象不错。", "B. 经理印象对我不错。", "C. 对我经理印象不错。"], answer: "A. 经理对我印象不错。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 你昨天的面试怎么样？", "B: ____________", "A: 那说明你的表现应该挺好的。"], answer: "B: 还可以，听说经理对我印象不错。" }],
      "Tự kiểm tra: bạn có thể tự giới thiệu ngắn về kinh nghiệm của mình bằng 首先...其次... không?"
    ),
    quickSummary: {
      words: ["经理", "印象", "不错", "面试", "表现", "经验"],
      patterns: ["经理对我印象不错。", "首先我简单介绍了自己的工作经验。"],
      reminder: "Bài này quan trọng ở cách nói tự nhiên, rõ ý và có trình tự khi tự giới thiệu trong môi trường công việc."
    }
  },
  4: {
    objective: "Đưa lời khuyên về việc đừng quá vội kiếm tiền, nói rõ suy nghĩ sai ban đầu và diễn đạt việc nên làm theo thứ tự ưu tiên hợp lý hơn.",
    vocabulary: [
      vocab("着急", "zháojí", "vội, sốt ruột", "tính từ/động từ", "Từ trung tâm để nói không nên quá nóng vội.", "不要太着急做决定。", "Búyào tài zháojí zuò juédìng.", "Đừng quá vội đưa ra quyết định."),
      vocab("赚钱", "zhuànqián", "kiếm tiền", "động từ", "Mục tiêu bị nói tới trong tiêu đề bài.", "很多年轻人一毕业就想赚钱。", "Hěn duō niánqīngrén yí bìyè jiù xiǎng zhuànqián.", "Rất nhiều người trẻ vừa tốt nghiệp là muốn kiếm tiền ngay."),
      vocab("以为", "yǐwéi", "tưởng rằng", "động từ", "Dùng khi nói về nhận thức ban đầu không đúng.", "我以前以为有钱就一定快乐。", "Wǒ yǐqián yǐwéi yǒu qián jiù yídìng kuàilè.", "Trước đây tôi từng nghĩ có tiền thì nhất định sẽ hạnh phúc."),
      vocab("原来", "yuánlái", "hóa ra", "phó từ", "Dùng khi nhận ra sự thật khác với suy nghĩ ban đầu.", "原来问题没我想得那么简单。", "Yuánlái wèntí méi wǒ xiǎng de nàme jiǎndān.", "Hóa ra vấn đề không đơn giản như tôi nghĩ."),
      vocab("按照", "ànzhào", "theo, căn cứ theo", "giới từ", "Dùng khi khuyên làm việc theo kế hoạch hoặc trật tự.", "做事要按照计划一步一步来。", "Zuòshì yào ànzhào jìhuà yí bù yí bù lái.", "Làm việc phải theo kế hoạch từng bước một."),
      vocab("计划", "jìhuà", "kế hoạch", "danh từ/động từ", "Cơ sở để sắp xếp thứ tự ưu tiên.", "没有计划就容易着急。", "Méiyǒu jìhuà jiù róngyì zháojí.", "Không có kế hoạch thì rất dễ sốt ruột."),
      vocab("经验", "jīngyàn", "kinh nghiệm", "danh từ", "Điều quan trọng không kém tiền bạc ở giai đoạn đầu.", "年轻的时候积累经验很重要。", "Niánqīng de shíhou jīlěi jīngyàn hěn zhòngyào.", "Khi còn trẻ tích lũy kinh nghiệm rất quan trọng."),
      vocab("甚至", "shènzhì", "thậm chí", "phó từ", "Dùng khi đẩy mức độ nhận xét lên cao hơn.", "太着急甚至会做错决定。", "Tài zháojí shènzhì huì zuò cuò juédìng.", "Quá vội thậm chí còn có thể đưa ra quyết định sai.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Khuyên đừng quá vội kiếm tiền.", [
        study("A: 我现在最想做的事就是赶快多赚点儿钱。", "A: Wǒ xiànzài zuì xiǎng zuò de shì jiùshì gǎnkuài duō zhuàn diǎnr qián.", "A: Việc tôi muốn làm nhất bây giờ là mau mau kiếm thêm nhiều tiền."),
        study("B: 你先别这么着急赚钱。", "B: Nǐ xiān bié zhème zháojí zhuànqián.", "B: Bạn đừng vội vã kiếm tiền như vậy đã."),
        study("A: 可是我总觉得越早赚钱越好。", "A: Kěshì wǒ zǒng juéde yuè zǎo zhuànqián yuè hǎo.", "A: Nhưng tôi cứ thấy kiếm tiền càng sớm càng tốt.")
      ]),
      dialogueBlock("Tình huống 2", "Nói về suy nghĩ sai ban đầu.", [
        study("A: 我以前也这么想。", "A: Wǒ yǐqián yě zhème xiǎng.", "A: Trước đây tôi cũng từng nghĩ như vậy."),
        study("B: 那后来呢？", "B: Nà hòulái ne?", "B: Thế sau đó thì sao?"),
        study("A: 后来我才明白，原来经验和能力比一时的收入更重要。", "A: Hòulái wǒ cái míngbai, yuánlái jīngyàn hé nénglì bǐ yìshí de shōurù gèng zhòngyào.", "A: Sau này tôi mới hiểu, hóa ra kinh nghiệm và năng lực còn quan trọng hơn thu nhập nhất thời.")
      ]),
      dialogueBlock("Tình huống 3", "Khuyên làm việc có kế hoạch.", [
        study("A: 那我现在最应该做什么？", "A: Nà wǒ xiànzài zuì yīnggāi zuò shénme?", "A: Vậy bây giờ điều tôi nên làm nhất là gì?"),
        study("B: 先按照计划把基础做好，再考虑收入的问题。", "B: Xiān ànzhào jìhuà bǎ jīchǔ zuò hǎo, zài kǎolǜ shōurù de wèntí.", "B: Trước hết hãy làm tốt nền tảng theo kế hoạch, rồi mới nghĩ đến chuyện thu nhập."),
        study("A: 这样想确实更踏实。", "A: Zhèyàng xiǎng quèshí gèng tāshi.", "A: Nghĩ như vậy quả thật thấy vững hơn.")
      ]),
      dialogueBlock("Tình huống 4", "Nói hậu quả của việc quá vội.", [
        study("A: 太着急会有什么问题吗？", "A: Tài zháojí huì yǒu shénme wèntí ma?", "A: Quá vội thì sẽ có vấn đề gì à?"),
        study("B: 会，甚至可能因为看得不够清楚而做错决定。", "B: Huì, shènzhì kěnéng yīnwèi kàn de bù gòu qīngchu ér zuò cuò juédìng.", "B: Có, thậm chí còn có thể vì nhìn chưa đủ rõ mà ra quyết định sai."),
        study("A: 看来慢一点儿不一定是坏事。", "A: Kànlái màn yìdiǎnr bù yídìng shì huàishì.", "A: Xem ra chậm lại một chút chưa chắc đã là điều xấu.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 以为 / 原来", "以为 dùng cho suy nghĩ ban đầu có thể không đúng; 原来 dùng khi phát hiện ra sự thật khác với suy nghĩ đó.", study("我以前以为有钱就一定快乐，后来才知道原来不是这样。", "Wǒ yǐqián yǐwéi yǒu qián jiù yídìng kuàilè, hòulái cái zhīdào yuánlái bú shì zhèyàng.", "Trước đây tôi từng nghĩ có tiền thì nhất định hạnh phúc, sau này mới biết hóa ra không phải vậy."), [
        study("我以为他已经走了，原来他还在办公室。", "Wǒ yǐwéi tā yǐjīng zǒu le, yuánlái tā hái zài bàngōngshì.", "Tôi tưởng anh ấy đi rồi, hóa ra anh ấy vẫn ở văn phòng."),
        study("我以为这件事很简单，原来并不容易。", "Wǒ yǐwéi zhè jiàn shì hěn jiǎndān, yuánlái bìng bù róngyì.", "Tôi tưởng chuyện này rất đơn giản, hóa ra không dễ."),
        study("原来大家早就知道了。", "Yuánlái dàjiā zǎo jiù zhīdào le.", "Hóa ra mọi người đã biết từ lâu.")
      ]),
      grammarNote("2. 按照...", "按照 dùng để nói làm theo tiêu chuẩn, kế hoạch, quy định hoặc trật tự nào đó.", study("先按照计划把基础做好。", "Xiān ànzhào jìhuà bǎ jīchǔ zuò hǎo.", "Trước hết hãy làm tốt nền tảng theo kế hoạch."), [
        study("请按照顺序回答问题。", "Qǐng ànzhào shùnxù huídá wèntí.", "Xin hãy trả lời câu hỏi theo thứ tự."),
        study("我们得按照公司的要求来。", "Wǒmen děi ànzhào gōngsī de yāoqiú lái.", "Chúng ta phải làm theo yêu cầu của công ty."),
        study("按照这个办法做，效率会高一些。", "Ànzhào zhège bànfǎ zuò, xiàolǜ huì gāo yìxiē.", "Làm theo cách này thì hiệu quả sẽ cao hơn một chút.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 着急", "2. 以为", "3. 按照"], options: ["a. tưởng rằng", "b. theo, căn cứ theo", "c. sốt ruột, vội"], answer: "1-c, 2-a, 3-b" }],
      [{ question: "Điền từ thích hợp.", prompt: ["不要太着急赚___。", "我以前以___有钱就一定快乐。", "先按___计划把基础做好。"], answer: "钱 / 为 / 照" }],
      [{ question: "Câu nào đúng?", options: ["A. 原来经验和能力更重要。", "B. 原来更重要经验和能力。", "C. 经验和能力原来更重要了是。"], answer: "A. 原来经验和能力更重要。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 那我现在最应该做什么？", "B: ____________", "A: 这样想确实更踏实。"], answer: "B: 先按照计划把基础做好，再考虑收入的问题。" }],
      "Tự kiểm tra: bạn có thể dùng 以为 / 原来 để nói sự khác nhau giữa suy nghĩ ban đầu và điều mình hiểu ra sau đó không?"
    ),
    quickSummary: {
      words: ["着急", "赚钱", "以为", "原来", "按照", "经验"],
      patterns: ["不要太着急赚钱。", "先按照计划把基础做好，再考虑收入的问题。"],
      reminder: "Bài này không chỉ nói về tiền. Trọng tâm là học cách nhìn xa và sắp thứ tự ưu tiên hợp lý."
    }
  },
  5: {
    objective: "Thảo luận về mua sắm hợp lý, phân biệt giữa thứ phù hợp và thứ đắt tiền, và diễn đạt tiêu chí lựa chọn mang tính cá nhân hơn.",
    vocabulary: [
      vocab("对", "duì", "đúng, phù hợp", "tính từ", "Trong tiêu đề mang nghĩa 'hợp với nhu cầu của mình'.", "只买对的，不买贵的。", "Zhǐ mǎi duì de, bù mǎi guì de.", "Chỉ mua thứ phù hợp, không mua thứ đắt."),
      vocab("贵", "guì", "đắt", "tính từ", "Tiêu chí bị đặt ở vị trí thứ yếu trong bài.", "这件衣服有点儿贵。", "Zhè jiàn yīfu yǒudiǎnr guì.", "Bộ quần áo này hơi đắt."),
      vocab("适合", "shìhé", "phù hợp", "động từ/tính từ", "Từ then chốt để nói tiêu chí mua hàng.", "适合自己的才最重要。", "Shìhé zìjǐ de cái zuì zhòngyào.", "Thứ phù hợp với mình mới là quan trọng nhất."),
      vocab("质量", "zhìliàng", "chất lượng", "danh từ", "Một tiêu chí quan trọng hơn giá trong nhiều trường hợp.", "买东西不能只看价格，还要看质量。", "Mǎi dōngxi bù néng zhǐ kàn jiàgé, hái yào kàn zhìliàng.", "Mua đồ không thể chỉ nhìn giá, còn phải nhìn chất lượng."),
      vocab("价格", "jiàgé", "giá cả", "danh từ", "Tiêu chí dễ thấy nhưng chưa đủ để quyết định.", "这个价格对学生来说不低。", "Zhège jiàgé duì xuéshēng lái shuō bù dī.", "Mức giá này đối với sinh viên mà nói thì không thấp."),
      vocab("牌子", "páizi", "thương hiệu", "danh từ", "Thứ nhiều người quan tâm khi mua sắm.", "有的人买东西很看重牌子。", "Yǒu de rén mǎi dōngxi hěn kànzhòng páizi.", "Có người rất coi trọng thương hiệu khi mua hàng."),
      vocab("实用", "shíyòng", "thực dụng, dùng được", "tính từ", "Tiêu chí trái với chỉ chạy theo vẻ ngoài hoặc giá cao.", "我更喜欢实用一点儿的东西。", "Wǒ gèng xǐhuan shíyòng yìdiǎnr de dōngxi.", "Tôi thích đồ thực dụng hơn một chút."),
      vocab("尤其", "yóuqí", "đặc biệt là", "phó từ", "Dùng để nhấn mạnh một yếu tố trong số nhiều tiêu chí.", "买电子产品的时候，尤其要注意质量。", "Mǎi diànzǐ chǎnpǐn de shíhou, yóuqí yào zhùyì zhìliàng.", "Lúc mua đồ điện tử, đặc biệt phải chú ý chất lượng.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Nói tiêu chí mua hàng.", [
        study("A: 你买东西的时候最看重什么？", "A: Nǐ mǎi dōngxi de shíhou zuì kànzhòng shénme?", "A: Khi mua đồ bạn coi trọng điều gì nhất?"),
        study("B: 我觉得只买对的，不买贵的。", "B: Wǒ juéde zhǐ mǎi duì de, bù mǎi guì de.", "B: Tôi thấy chỉ mua thứ phù hợp, không mua thứ đắt."),
        study("A: 听起来很理性。", "A: Tīngqilai hěn lǐxìng.", "A: Nghe rất lý trí.")
      ]),
      dialogueBlock("Tình huống 2", "Giá cao chưa chắc phù hợp.", [
        study("A: 这双鞋虽然贵，但是很多人都说很好。", "A: Zhè shuāng xié suīrán guì, dànshì hěn duō rén dōu shuō hěn hǎo.", "A: Đôi giày này tuy đắt nhưng rất nhiều người đều nói là tốt."),
        study("B: 贵不一定就适合你，还是得自己试一试。", "B: Guì bù yídìng jiù shìhé nǐ, háishi děi zìjǐ shì yí shì.", "B: Đắt chưa chắc đã hợp với bạn, vẫn phải tự thử mới được."),
        study("A: 对，尤其是鞋子，舒服最重要。", "A: Duì, yóuqí shì xiézi, shūfu zuì zhòngyào.", "A: Đúng, đặc biệt là giày dép thì thoải mái là quan trọng nhất.")
      ]),
      dialogueBlock("Tình huống 3", "So sánh thương hiệu và chất lượng.", [
        study("A: 你买手机很看重牌子吗？", "A: Nǐ mǎi shǒujī hěn kànzhòng páizi ma?", "A: Bạn mua điện thoại có coi trọng thương hiệu lắm không?"),
        study("B: 我会看牌子，不过更看重质量和实用性。", "B: Wǒ huì kàn páizi, búguò gèng kànzhòng zhìliàng hé shíyòngxìng.", "B: Tôi có xem thương hiệu, nhưng coi trọng chất lượng và tính thực dụng hơn."),
        study("A: 看来你买东西很少冲动。", "A: Kànlái nǐ mǎi dōngxi hěn shǎo chōngdòng.", "A: Xem ra bạn mua đồ rất ít khi bốc đồng.")
      ]),
      dialogueBlock("Tình huống 4", "Giá cả theo từng đối tượng.", [
        study("A: 这个价格你觉得怎么样？", "A: Zhège jiàgé nǐ juéde zěnmeyàng?", "A: Bạn thấy mức giá này thế nào?"),
        study("B: 对学生来说有点儿高，对上班的人来说可能还好。", "B: Duì xuéshēng lái shuō yǒudiǎnr gāo, duì shàngbān de rén lái shuō kěnéng hái hǎo.", "B: Đối với sinh viên thì hơi cao, còn đối với người đi làm thì có thể vẫn ổn."),
        study("A: 所以买东西还是要看自己的需要。", "A: Suǒyǐ mǎi dōngxi háishi yào kàn zìjǐ de xūyào.", "A: Vì vậy mua đồ vẫn phải nhìn vào nhu cầu của bản thân.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 对...来说", "Mẫu này dùng để chỉ rõ góc nhìn hoặc tiêu chuẩn đánh giá theo một đối tượng cụ thể.", study("对学生来说，这个价格不低。", "Duì xuéshēng lái shuō, zhège jiàgé bù dī.", "Đối với sinh viên mà nói, mức giá này không thấp."), [
        study("对我来说，实用比牌子更重要。", "Duì wǒ lái shuō, shíyòng bǐ páizi gèng zhòngyào.", "Đối với tôi mà nói, tính thực dụng quan trọng hơn thương hiệu."),
        study("对年轻人来说，这种设计很有吸引力。", "Duì niánqīngrén lái shuō, zhè zhǒng shèjì hěn yǒu xīyǐnlì.", "Đối với người trẻ mà nói, kiểu thiết kế này rất hấp dẫn."),
        study("对第一次买房的人来说，位置很重要。", "Duì dì-yī cì mǎifáng de rén lái shuō, wèizhi hěn zhòngyào.", "Đối với người mua nhà lần đầu mà nói, vị trí rất quan trọng.")
      ]),
      grammarNote("2. 尤其", "尤其 dùng để nhấn mạnh một trường hợp, một yếu tố hoặc một đối tượng đặc biệt quan trọng trong số nhiều cái.", study("买电子产品的时候，尤其要注意质量。", "Mǎi diànzǐ chǎnpǐn de shíhou, yóuqí yào zhùyì zhìliàng.", "Khi mua đồ điện tử, đặc biệt phải chú ý chất lượng."), [
        study("天气冷的时候，尤其要注意保暖。", "Tiānqì lěng de shíhou, yóuqí yào zhùyì bǎonuǎn.", "Khi trời lạnh, đặc biệt phải chú ý giữ ấm."),
        study("我喜欢各种水果，尤其喜欢芒果。", "Wǒ xǐhuan gè zhǒng shuǐguǒ, yóuqí xǐhuan mángguǒ.", "Tôi thích nhiều loại trái cây, đặc biệt thích xoài."),
        study("这家店的服务不错，尤其是售后服务。", "Zhè jiā diàn de fúwù búcuò, yóuqí shì shòuhòu fúwù.", "Dịch vụ của cửa hàng này khá tốt, đặc biệt là dịch vụ sau bán hàng.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 适合", "2. 质量", "3. 尤其"], options: ["a. đặc biệt là", "b. chất lượng", "c. phù hợp"], answer: "1-c, 2-b, 3-a" }],
      [{ question: "Điền từ thích hợp.", prompt: ["只买对的，不买___的。", "买东西不能只看价___。", "对学生来___，这个价格有点儿高。"], answer: "贵 / 格 / 说" }],
      [{ question: "Câu nào đúng?", options: ["A. 对我来说，实用比牌子更重要。", "B. 对我实用来说比牌子更重要。", "C. 对我来说比牌子更重要实用。"], answer: "A. 对我来说，实用比牌子更重要。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 你买东西的时候最看重什么？", "B: ____________", "A: 听起来很理性。"], answer: "B: 我觉得只买对的，不买贵的。" }],
      "Tự kiểm tra: bạn có thể dùng 对...来说 để nói tiêu chí mua hàng của mình rõ hơn không?"
    ),
    quickSummary: {
      words: ["对", "贵", "适合", "质量", "价格", "实用"],
      patterns: ["只买对的，不买贵的。", "对学生来说，这个价格有点儿高。"],
      reminder: "Bài này không chỉ là mua sắm. Trọng tâm là cách đánh giá 'phù hợp' theo nhu cầu thật của mình."
    }
  },
  6: {
    objective: "Nói về chất lượng và giá cả, giải thích vì sao có món đáng mua hơn món khác, và dùng những cách nói gần HSK 4 hơn để đánh giá hàng hóa.",
    vocabulary: [
      vocab("一分钱一分货", "yì fēn qián yì fēn huò", "tiền nào của nấy", "thành ngữ", "Thành ngữ trung tâm của bài.", "虽然贵一点儿，但真是一分钱一分货。", "Suīrán guì yìdiǎnr, dàn zhēn shì yì fēn qián yì fēn huò.", "Tuy đắt hơn một chút, nhưng đúng là tiền nào của nấy."),
      vocab("货", "huò", "hàng hóa", "danh từ", "Dùng trong ngữ cảnh mua bán và chất lượng hàng.", "这批货看起来质量不错。", "Zhè pī huò kànqilai zhìliàng búcuò.", "Lô hàng này nhìn có chất lượng khá tốt."),
      vocab("竟然", "jìngrán", "thật không ngờ", "phó từ", "Dùng khi kết quả cao hoặc thấp hơn dự đoán.", "这么便宜的东西竟然也这么好用。", "Zhème piányi de dōngxi jìngrán yě zhème hǎoyòng.", "Đồ rẻ thế này mà lại dùng tốt đến vậy."),
      vocab("值得", "zhídé", "đáng", "động từ", "Dùng để nói món hàng hoặc việc gì đó xứng đáng.", "这个价格虽然高一点儿，但很值得。", "Zhège jiàgé suīrán gāo yìdiǎnr, dàn hěn zhídé.", "Giá này tuy cao hơn một chút nhưng rất đáng."),
      vocab("其中", "qízhōng", "trong đó", "đại từ", "Dùng để chọn ra một phần trong nhiều lựa chọn.", "这些品牌里，其中这个最受欢迎。", "Zhèxiē pǐnpái lǐ, qízhōng zhège zuì shòu huānyíng.", "Trong các thương hiệu này, cái này được ưa chuộng nhất."),
      vocab("耐用", "nàiyòng", "bền, dùng được lâu", "tính từ", "Tiêu chí quan trọng khi đánh giá đồ dùng.", "我更喜欢耐用一点儿的东西。", "Wǒ gèng xǐhuan nàiyòng yìdiǎnr de dōngxi.", "Tôi thích đồ bền hơn một chút."),
      vocab("便宜", "piányi", "rẻ", "tính từ", "Dùng để so sánh với 贵.", "便宜的不一定不实用。", "Piányi de bù yídìng bù shíyòng.", "Đồ rẻ chưa chắc đã không thực dụng."),
      vocab("划算", "huásuàn", "đáng tiền, hời", "tính từ", "Dùng để nói món hàng có tỷ lệ giá/chất lượng tốt.", "这次活动的时候买最划算。", "Zhè cì huódòng de shíhou mǎi zuì huásuàn.", "Mua lúc đợt khuyến mãi này là đáng tiền nhất.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Đánh giá món hàng đắt hơn nhưng tốt hơn.", [
        study("A: 这两件衣服差得有点儿多，一个很便宜，一个很贵。", "A: Zhè liǎng jiàn yīfu chà de yǒudiǎnr duō, yí ge hěn piányi, yí ge hěn guì.", "A: Hai bộ quần áo này chênh nhau khá nhiều, một bộ rất rẻ, một bộ rất đắt."),
        study("B: 不过贵的那件质量明显更好，一分钱一分货。", "B: Búguò guì de nà jiàn zhìliàng míngxiǎn gèng hǎo, yì fēn qián yì fēn huò.", "B: Nhưng bộ đắt hơn chất lượng rõ ràng tốt hơn, đúng là tiền nào của nấy."),
        study("A: 听你这么说，我也有点儿想买贵的了。", "A: Tīng nǐ zhème shuō, wǒ yě yǒudiǎnr xiǎng mǎi guì de le.", "A: Nghe bạn nói vậy tôi cũng hơi muốn mua bộ đắt rồi.")
      ]),
      dialogueBlock("Tình huống 2", "Bất ngờ vì hàng rẻ mà tốt.", [
        study("A: 这个杯子很便宜，你觉得能买吗？", "A: Zhège bēizi hěn piányi, nǐ juéde néng mǎi ma?", "A: Cái cốc này rất rẻ, bạn thấy có nên mua không?"),
        study("B: 我看过评价，竟然不少人都说它很耐用。", "B: Wǒ kànguo píngjià, jìngrán bù shǎo rén dōu shuō tā hěn nàiyòng.", "B: Tôi đã xem đánh giá, thật không ngờ khá nhiều người đều nói nó rất bền."),
        study("A: 那看来便宜的东西也不一定差。", "A: Nà kànlái piányi de dōngxi yě bù yídìng chà.", "A: Vậy xem ra đồ rẻ cũng chưa chắc đã kém.")
      ]),
      dialogueBlock("Tình huống 3", "Chọn món đáng tiền nhất trong nhiều món.", [
        study("A: 这几个牌子你最推荐哪个？", "A: Zhè jǐ ge páizi nǐ zuì tuījiàn nǎge?", "A: Trong mấy thương hiệu này bạn đề xuất cái nào nhất?"),
        study("B: 其中这个最划算，价格合理，质量也稳定。", "B: Qízhōng zhège zuì huásuàn, jiàgé hélǐ, zhìliàng yě wěndìng.", "B: Trong đó cái này đáng tiền nhất, giá hợp lý mà chất lượng cũng ổn định."),
        study("A: 那我先看看它的详细介绍。", "A: Nà wǒ xiān kànkan tā de xiángxì jièshào.", "A: Vậy tôi xem phần giới thiệu chi tiết của nó trước.")
      ]),
      dialogueBlock("Tình huống 4", "Giá cao nhưng vẫn đáng mua.", [
        study("A: 这个包有点儿超出我的预算。", "A: Zhège bāo yǒudiǎnr chāochū wǒ de yùsuàn.", "A: Cái túi này hơi vượt quá ngân sách của tôi."),
        study("B: 是贵了一点儿，不过材料好，设计也很实用，我觉得挺值得。", "B: Shì guì le yìdiǎnr, búguò cáiliào hǎo, shèjì yě hěn shíyòng, wǒ juéde tǐng zhídé.", "B: Là đắt hơn một chút thật, nhưng chất liệu tốt, thiết kế cũng rất thực dụng, tôi thấy khá đáng."),
        study("A: 那我再考虑一下。", "A: Nà wǒ zài kǎolǜ yíxià.", "A: Vậy tôi sẽ cân nhắc thêm một chút.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 竟然", "竟然 dùng khi kết quả thật sự vượt ngoài dự đoán của người nói, có thể theo hướng tích cực hoặc tiêu cực.", study("这么便宜的东西竟然也这么好用。", "Zhème piányi de dōngxi jìngrán yě zhème hǎoyòng.", "Đồ rẻ thế này mà lại dùng tốt đến vậy."), [
        study("他竟然一个人把这件事做完了。", "Tā jìngrán yí ge rén bǎ zhè jiàn shì zuòwán le.", "Anh ấy thật không ngờ lại tự mình làm xong chuyện này."),
        study("这么晚了，店里竟然还有这么多人。", "Zhème wǎn le, diàn lǐ jìngrán hái yǒu zhème duō rén.", "Muộn thế này mà cửa hàng vẫn còn nhiều người như vậy."),
        study("他平时很少说话，今天竟然说了这么多。", "Tā píngshí hěn shǎo shuōhuà, jīntiān jìngrán shuō le zhème duō.", "Bình thường anh ấy ít nói mà hôm nay lại nói nhiều như vậy.")
      ]),
      grammarNote("2. 值得 + động từ / 值得", "值得 dùng để nói một việc, món đồ hoặc lựa chọn có giá trị đủ để bỏ công, bỏ tiền hoặc bỏ thời gian.", study("这个价格虽然高一点儿，但很值得。", "Zhège jiàgé suīrán gāo yìdiǎnr, dàn hěn zhídé.", "Giá này tuy cao hơn một chút nhưng rất đáng."), [
        study("这本书很值得买。", "Zhè běn shū hěn zhídé mǎi.", "Cuốn sách này rất đáng mua."),
        study("这个地方值得去一次。", "Zhège dìfang zhídé qù yí cì.", "Nơi này rất đáng đi một lần."),
        study("这些经验很值得我们学习。", "Zhèxiē jīngyàn hěn zhídé wǒmen xuéxí.", "Những kinh nghiệm này rất đáng để chúng ta học.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 值得", "2. 耐用", "3. 划算"], options: ["a. bền", "b. đáng", "c. đáng tiền"], answer: "1-b, 2-a, 3-c" }],
      [{ question: "Điền từ thích hợp.", prompt: ["一分钱一分___。", "这么便宜的东西___然也这么好用。", "这个价格虽然高一点儿，但很值___。"], answer: "货 / 竟 / 得" }],
      [{ question: "Câu nào đúng?", options: ["A. 这么便宜的东西竟然也这么好用。", "B. 这么便宜的东西也这么好用竟然。", "C. 竟然这么便宜的东西也好用这么。"], answer: "A. 这么便宜的东西竟然也这么好用。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 这几个牌子你最推荐哪个？", "B: ____________", "A: 那我先看看它的详细介绍。"], answer: "B: 其中这个最划算，价格合理，质量也稳定。" }],
      "Tự kiểm tra: bạn có thể dùng 竟然 để nói điều khiến mình bất ngờ khi mua hàng không?"
    ),
    quickSummary: {
      words: ["一分钱一分货", "竟然", "值得", "其中", "耐用", "划算"],
      patterns: ["一分钱一分货。", "这个价格虽然高一点儿，但很值得。"],
      reminder: "Bài này không chỉ so sánh đắt rẻ. Trọng tâm là biết đánh giá giá trị thật của món hàng."
    }
  },
  7: {
    objective: "Nói về sức khỏe và thói quen sống, diễn đạt ý bác sĩ tốt nhất là chính mình và nhấn vai trò của việc tự quan sát cơ thể.",
    vocabulary: [
      vocab("医生", "yīshēng", "bác sĩ", "danh từ", "Từ chính trong tiêu đề bài.", "最好的医生不一定总在医院里。", "Zuì hǎo de yīshēng bù yídìng zǒng zài yīyuàn lǐ.", "Bác sĩ tốt nhất không nhất thiết lúc nào cũng ở bệnh viện."),
      vocab("自己", "zìjǐ", "chính mình, bản thân", "đại từ", "Dùng để nhấn mạnh vai trò tự chăm sóc bản thân.", "照顾自己也是一种能力。", "Zhàogù zìjǐ yě shì yì zhǒng nénglì.", "Biết chăm sóc bản thân cũng là một loại năng lực."),
      vocab("身体", "shēntǐ", "cơ thể, sức khỏe", "danh từ", "Đối tượng cần được quan sát và chăm sóc.", "你最近要多注意自己的身体。", "Nǐ zuìjìn yào duō zhùyì zìjǐ de shēntǐ.", "Gần đây bạn phải chú ý đến cơ thể của mình hơn."),
      vocab("习惯", "xíguàn", "thói quen; quen", "danh từ/động từ", "Yếu tố quan trọng ảnh hưởng trực tiếp tới sức khỏe.", "很多小毛病都和坏习惯有关系。", "Hěn duō xiǎo máobìng dōu hé huài xíguàn yǒu guānxi.", "Nhiều vấn đề sức khỏe nhỏ đều có liên quan đến thói quen xấu."),
      vocab("锻炼", "duànliàn", "rèn luyện, tập luyện", "động từ", "Một cách tự chăm sóc bản thân.", "每天锻炼半个小时对身体很好。", "Měitiān duànliàn bàn ge xiǎoshí duì shēntǐ hěn hǎo.", "Mỗi ngày tập luyện nửa tiếng rất tốt cho cơ thể."),
      vocab("来不及", "láibují", "không kịp", "động từ/bổ ngữ", "Dùng khi bận đến mức không kịp chăm sóc bản thân.", "工作太忙的时候，我常常来不及吃早饭。", "Gōngzuò tài máng de shíhou, wǒ chángcháng láibují chī zǎofàn.", "Khi công việc quá bận tôi thường không kịp ăn sáng."),
      vocab("估计", "gūjì", "ước chừng, đoán", "động từ", "Dùng khi tự phán đoán tình trạng sức khỏe.", "我估计他只是太累了。", "Wǒ gūjì tā zhǐshì tài lèi le.", "Tôi đoán anh ấy chỉ là quá mệt thôi."),
      vocab("及时", "jíshí", "kịp thời", "tính từ/phó từ", "Dùng khi nói phát hiện và xử lý vấn đề sớm.", "身体不舒服的时候要及时休息。", "Shēntǐ bù shūfu de shíhou yào jíshí xiūxi.", "Lúc cơ thể không khỏe phải nghỉ ngơi kịp thời.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Nói ý nghĩa của tiêu đề bài.", [
        study("A: 你怎么理解“最好的医生是自己”这句话？", "A: Nǐ zěnme lǐjiě 'Zuì hǎo de yīshēng shì zìjǐ' zhè jù huà?", "A: Bạn hiểu câu 'bác sĩ tốt nhất là chính mình' như thế nào?"),
        study("B: 我的理解是，很多时候先照顾好自己，比等生病了再着急更重要。", "B: Wǒ de lǐjiě shì, hěn duō shíhou xiān zhàogù hǎo zìjǐ, bǐ děng shēngbìng le zài zháojí gèng zhòngyào.", "B: Tôi hiểu là, nhiều lúc chăm sóc bản thân cho tốt trước còn quan trọng hơn đợi đến khi bị bệnh rồi mới lo."),
        study("A: 对，预防往往比治疗更重要。", "A: Duì, yùfáng wǎngwǎng bǐ zhìliáo gèng zhòngyào.", "A: Đúng, phòng ngừa thường quan trọng hơn chữa trị.")
      ]),
      dialogueBlock("Tình huống 2", "Nói về thói quen xấu.", [
        study("A: 你最近身体怎么样？", "A: Nǐ zuìjìn shēntǐ zěnmeyàng?", "A: Gần đây sức khỏe bạn thế nào?"),
        study("B: 不太好，可能和我最近总熬夜有关系。", "B: Bú tài hǎo, kěnéng hé wǒ zuìjìn zǒng áoyè yǒu guānxi.", "B: Không được tốt lắm, có thể liên quan đến việc gần đây tôi toàn thức khuya."),
        study("A: 这种坏习惯得早点儿改。", "A: Zhè zhǒng huài xíguàn děi zǎodiǎnr gǎi.", "A: Kiểu thói quen xấu này phải sửa sớm hơn.")
      ]),
      dialogueBlock("Tình huống 3", "Bận quá nên không kịp chăm sóc sức khỏe.", [
        study("A: 你早饭吃了吗？", "A: Nǐ zǎofàn chī le ma?", "A: Bạn ăn sáng chưa?"),
        study("B: 今天早上又来不及吃。", "B: Jīntiān zǎoshang yòu láibují chī.", "B: Sáng nay lại không kịp ăn."),
        study("A: 再忙也不能总这样，对身体不好。", "A: Zài máng yě bù néng zǒng zhèyàng, duì shēntǐ bù hǎo.", "A: Dù bận mấy cũng không thể cứ như vậy mãi, không tốt cho cơ thể.")
      ]),
      dialogueBlock("Tình huống 4", "Đưa lời khuyên thực tế.", [
        study("A: 那你觉得我应该先做什么？", "A: Nà nǐ juéde wǒ yīnggāi xiān zuò shénme?", "A: Vậy bạn thấy tôi nên làm gì trước?"),
        study("B: 先把睡觉和吃饭的时间安排好，再慢慢开始锻炼。", "B: Xiān bǎ shuìjiào hé chīfàn de shíjiān ānpái hǎo, zài mànman kāishǐ duànliàn.", "B: Trước hết hãy sắp xếp ổn thời gian ngủ nghỉ và ăn uống, rồi từ từ bắt đầu tập luyện."),
        study("A: 这样听起来比较做得到。", "A: Zhèyàng tīngqilai bǐjiào zuò de dào.", "A: Nghe như vậy thì có vẻ làm được hơn.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 来不及 + động từ", "来不及 dùng khi vì thiếu thời gian nên không kịp làm một việc.", study("我今天早上来不及吃早饭。", "Wǒ jīntiān zǎoshang láibují chī zǎofàn.", "Sáng nay tôi không kịp ăn sáng."), [
        study("我下班太晚，来不及去超市了。", "Wǒ xiàbān tài wǎn, láibují qù chāoshì le.", "Tôi tan làm quá muộn, không kịp đi siêu thị nữa."),
        study("他连解释都来不及。", "Tā lián jiěshì dōu láibují.", "Anh ấy ngay cả giải thích cũng không kịp."),
        study("如果现在不走，就来不及了。", "Rúguǒ xiànzài bù zǒu, jiù láibují le.", "Nếu bây giờ không đi thì sẽ không kịp nữa.")
      ]),
      grammarNote("2. 估计", "估计 dùng khi người nói đưa ra phán đoán dựa trên quan sát nhưng chưa hoàn toàn chắc chắn.", study("我估计他只是太累了。", "Wǒ gūjì tā zhǐshì tài lèi le.", "Tôi đoán anh ấy chỉ là quá mệt thôi."), [
        study("我估计这两天他不会来了。", "Wǒ gūjì zhè liǎng tiān tā bú huì lái le.", "Tôi đoán hai ngày này anh ấy sẽ không đến."),
        study("从他的样子看，我估计问题不大。", "Cóng tā de yàngzi kàn, wǒ gūjì wèntí bù dà.", "Nhìn dáng vẻ của anh ấy, tôi đoán vấn đề không lớn."),
        study("医生估计我休息几天就会好。", "Yīshēng gūjì wǒ xiūxi jǐ tiān jiù huì hǎo.", "Bác sĩ đoán tôi nghỉ vài ngày là sẽ khỏi.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 来不及", "2. 估计", "3. 及时"], options: ["a. ước chừng, đoán", "b. không kịp", "c. kịp thời"], answer: "1-b, 2-a, 3-c" }],
      [{ question: "Điền từ thích hợp.", prompt: ["今天早上我来不___吃早饭。", "我估___他只是太累了。", "身体不舒服的时候要及___休息。"], answer: "及 / 计 / 时" }],
      [{ question: "Câu nào đúng?", options: ["A. 我今天早上来不及吃早饭。", "B. 我今天早上吃早饭来不及。", "C. 我来不及今天早上吃早饭。"], answer: "A. 我今天早上来不及吃早饭。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 你最近身体怎么样？", "B: ____________", "A: 这种坏习惯得早点儿改。"], answer: "B: 不太好，可能和我最近总熬夜有关系。" }],
      "Tự kiểm tra: bạn có thể dùng 来不及 và 估计 để nói về tình trạng sức khỏe và lịch sinh hoạt của mình không?"
    ),
    quickSummary: {
      words: ["医生", "自己", "身体", "习惯", "来不及", "估计"],
      patterns: ["最好的医生是自己。", "我今天早上来不及吃早饭。"],
      reminder: "Bài này nhấn mạnh một ý rất thực tế: muốn khỏe hơn, trước hết phải tự hiểu và tự chăm sóc chính mình."
    }
  },
  8: {
    objective: "Nói về vẻ đẹp trong cuộc sống thường ngày, diễn đạt điều gì làm con người cảm động hoặc chú ý hơn, và dùng ngôn ngữ mang tính nhận xét sâu hơn HSK 3.",
    vocabulary: [
      vocab("缺少", "quēshǎo", "thiếu", "động từ", "Dùng trong tiêu đề để nói cuộc sống không thiếu cái đẹp.", "生活中并不缺少美。", "Shēnghuó zhōng bìng bù quēshǎo měi.", "Trong cuộc sống thật ra không thiếu cái đẹp."),
      vocab("美", "měi", "cái đẹp; đẹp", "danh từ/tính từ", "Từ trung tâm của bài.", "美不一定在特别大的事情里。", "Měi bù yídìng zài tèbié dà de shìqing lǐ.", "Cái đẹp không nhất thiết nằm ở những việc quá lớn lao."),
      vocab("发现", "fāxiàn", "phát hiện, nhận ra", "động từ", "Dùng khi nói nhận ra vẻ đẹp quanh mình.", "只要认真看，就会发现很多美。", "Zhǐyào rènzhēn kàn, jiù huì fāxiàn hěn duō měi.", "Chỉ cần nhìn nghiêm túc thì sẽ phát hiện ra rất nhiều điều đẹp."),
      vocab("往往", "wǎngwǎng", "thường thường", "phó từ", "Dùng để nói quy luật hay hiện tượng thường thấy.", "真正打动人的，往往是最普通的小事。", "Zhēnzhèng dǎdòng rén de, wǎngwǎng shì zuì pǔtōng de xiǎoshì.", "Điều thật sự làm người ta cảm động thường lại là những chuyện nhỏ bình thường nhất."),
      vocab("因此", "yīncǐ", "vì vậy, bởi thế", "liên từ", "Dùng để nối nhận xét và kết luận.", "我们看问题的方式不同，因此感受也不一样。", "Wǒmen kàn wèntí de fāngshì bùtóng, yīncǐ gǎnshòu yě bù yíyàng.", "Cách chúng ta nhìn vấn đề khác nhau, vì vậy cảm nhận cũng không giống nhau."),
      vocab("使", "shǐ", "khiến, làm cho", "động từ", "Dùng để nói một điều nào đó làm con người thay đổi cảm xúc.", "这些小事使我重新注意到身边的美。", "Zhèxiē xiǎoshì shǐ wǒ chóngxīn zhùyìdào shēnbiān de měi.", "Những chuyện nhỏ này khiến tôi lại chú ý đến vẻ đẹp xung quanh."),
      vocab("普通", "pǔtōng", "bình thường", "tính từ", "Dùng để nói vẻ đẹp đôi khi ở điều rất đời thường.", "最普通的生活里也有很多温暖。", "Zuì pǔtōng de shēnghuó lǐ yě yǒu hěn duō wēnnuǎn.", "Trong cuộc sống bình thường nhất cũng có rất nhiều sự ấm áp."),
      vocab("细节", "xìjié", "chi tiết", "danh từ", "Nơi thường chứa vẻ đẹp nhỏ mà dễ bị bỏ qua.", "很多美都藏在小细节里。", "Hěn duō měi dōu cáng zài xiǎo xìjié lǐ.", "Nhiều điều đẹp đều ẩn trong những chi tiết nhỏ.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Nói cuộc sống không thiếu cái đẹp.", [
        study("A: 你为什么这么喜欢拍街上的小场景？", "A: Nǐ wèishénme zhème xǐhuan pāi jiēshang de xiǎo chǎngjǐng?", "A: Tại sao bạn lại thích chụp những cảnh nhỏ ngoài phố như vậy?"),
        study("B: 因为我觉得生活中并不缺少美，只是很多时候我们没注意到。", "B: Yīnwèi wǒ juéde shēnghuó zhōng bìng bù quēshǎo měi, zhǐshì hěn duō shíhou wǒmen méi zhùyìdào.", "B: Vì tôi thấy trong cuộc sống thật ra không thiếu cái đẹp, chỉ là nhiều lúc chúng ta không để ý tới."),
        study("A: 这样想真有意思。", "A: Zhèyàng xiǎng zhēn yǒu yìsi.", "A: Nghĩ như vậy thật thú vị.")
      ]),
      dialogueBlock("Tình huống 2", "Vẻ đẹp thường nằm ở chuyện nhỏ.", [
        study("A: 你说的美，指的是特别的风景吗？", "A: Nǐ shuō de měi, zhǐ de shì tèbié de fēngjǐng ma?", "A: Cái đẹp bạn nói có phải là những phong cảnh đặc biệt không?"),
        study("B: 不一定，往往最打动人的反而是很普通的小事。", "B: Bù yídìng, wǎngwǎng zuì dǎdòng rén de fǎn'ér shì hěn pǔtōng de xiǎoshì.", "B: Không nhất thiết, thứ thường làm người ta cảm động nhất ngược lại là những chuyện nhỏ rất bình thường."),
        study("A: 比如有人默默帮助别人。", "A: Bǐrú yǒu rén mòmò bāngzhù biérén.", "A: Ví dụ như có người lặng lẽ giúp đỡ người khác.")
      ]),
      dialogueBlock("Tình huống 3", "Một chi tiết khiến người nói thay đổi cảm nhận.", [
        study("A: 最近有什么事让你特别感动吗？", "A: Zuìjìn yǒu shénme shì ràng nǐ tèbié gǎndòng ma?", "A: Gần đây có chuyện gì khiến bạn đặc biệt cảm động không?"),
        study("B: 有，一个小朋友在车上主动给老人让座，这件事使我想了很多。", "B: Yǒu, yí ge xiǎo péngyou zài chē shang zhǔdòng gěi lǎorén ràngzuò, zhè jiàn shì shǐ wǒ xiǎng le hěn duō.", "B: Có, một em nhỏ trên xe chủ động nhường chỗ cho người già, chuyện đó khiến tôi nghĩ rất nhiều."),
        study("A: 这样的细节确实很有力量。", "A: Zhèyàng de xìjié quèshí hěn yǒu lìliàng.", "A: Những chi tiết như vậy quả thật rất có sức mạnh.")
      ]),
      dialogueBlock("Tình huống 4", "Nói lý do mỗi người cảm nhận khác nhau.", [
        study("A: 为什么同样的事情，有的人很感动，有的人却没什么感觉？", "A: Wèishénme tóngyàng de shìqing, yǒu de rén hěn gǎndòng, yǒu de rén què méi shénme gǎnjué?", "A: Tại sao cùng một chuyện mà có người rất cảm động, có người lại không có cảm giác gì?"),
        study("B: 因为每个人看世界的方式不一样，因此感受也不一样。", "B: Yīnwèi měi ge rén kàn shìjiè de fāngshì bù yíyàng, yīncǐ gǎnshòu yě bù yíyàng.", "B: Vì cách mỗi người nhìn thế giới không giống nhau, vì vậy cảm nhận cũng khác nhau."),
        study("A: 听起来很有道理。", "A: Tīngqilai hěn yǒu dàolǐ.", "A: Nghe rất có lý.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 使", "使 là động từ mang nghĩa 'khiến', thường dùng trong văn viết hoặc phát biểu trang trọng hơn, giúp câu có sắc thái HSK 4 rõ hơn.", study("这件事使我重新注意到身边的美。", "Zhè jiàn shì shǐ wǒ chóngxīn zhùyìdào shēnbiān de měi.", "Chuyện này khiến tôi lại chú ý đến vẻ đẹp xung quanh."), [
        study("这次经历使我改变了看法。", "Zhè cì jīnglì shǐ wǒ gǎibiàn le kànfǎ.", "Trải nghiệm lần này khiến tôi thay đổi cách nhìn."),
        study("他的笑容使我一下子轻松了很多。", "Tā de xiàoróng shǐ wǒ yíxiàzi qīngsōng le hěn duō.", "Nụ cười của anh ấy khiến tôi nhẹ nhõm hơn rất nhiều."),
        study("这些照片使人想起自己的童年。", "Zhèxiē zhàopiàn shǐ rén xiǎngqǐ zìjǐ de tóngnián.", "Những bức ảnh này khiến người ta nhớ lại tuổi thơ của mình.")
      ]),
      grammarNote("2. 因此 / 往往", "因此 dùng để nối kết luận; 往往 dùng để nói điều thường xảy ra theo quy luật hoặc trải nghiệm chung.", study("每个人看世界的方式不一样，因此感受也不一样。", "Měi ge rén kàn shìjiè de fāngshì bù yíyàng, yīncǐ gǎnshòu yě bù yíyàng.", "Cách mỗi người nhìn thế giới khác nhau, vì vậy cảm nhận cũng không giống nhau."), [
        study("真正打动人的，往往是最普通的小事。", "Zhēnzhèng dǎdòng rén de, wǎngwǎng shì zuì pǔtōng de xiǎoshì.", "Điều thật sự làm người ta cảm động thường lại là những chuyện nhỏ bình thường nhất."),
        study("他工作很认真，因此大家都很信任他。", "Tā gōngzuò hěn rènzhēn, yīncǐ dàjiā dōu hěn xìnrèn tā.", "Anh ấy làm việc rất nghiêm túc, vì vậy mọi người đều tin anh ấy."),
        study("生活中往往是小细节最让人难忘。", "Shēnghuó zhōng wǎngwǎng shì xiǎo xìjié zuì ràng rén nánwàng.", "Trong cuộc sống, thường chính những chi tiết nhỏ là thứ khiến người ta khó quên nhất.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 缺少", "2. 使", "3. 细节"], options: ["a. chi tiết", "b. thiếu", "c. khiến"], answer: "1-b, 2-c, 3-a" }],
      [{ question: "Điền từ thích hợp.", prompt: ["生活中并不___少美。", "这件事___我想了很多。", "很多美都藏在小细___里。"], answer: "缺 / 使 / 节" }],
      [{ question: "Câu nào đúng?", options: ["A. 生活中并不缺少美。", "B. 生活中不并缺少美。", "C. 并不生活中缺少美。"], answer: "A. 生活中并不缺少美。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 你为什么这么喜欢拍街上的小场景？", "B: ____________", "A: 这样想真有意思。"], answer: "B: 因为我觉得生活中并不缺少美，只是很多时候我们没注意到。" }],
      "Tự kiểm tra: bạn có thể dùng 使 hoặc 因此 để nói điều gì đã làm mình thay đổi cách nhìn không?"
    ),
    quickSummary: {
      words: ["缺少", "美", "发现", "往往", "因此", "细节"],
      patterns: ["生活中并不缺少美。", "真正打动人的，往往是最普通的小事。"],
      reminder: "Bài này quan trọng ở cách biểu đạt suy nghĩ tinh tế hơn, không chỉ kể sự việc đơn thuần."
    }
  },
  9: {
    objective: "Nói về khó khăn, hy vọng và việc vượt qua thử thách, dùng ngôn ngữ mang tính động viên và nhận thức rõ tiến trình sau thất bại.",
    vocabulary: [
      vocab("阳光", "yángguāng", "ánh nắng", "danh từ", "Biểu tượng cho hy vọng và điều tốt đẹp sau khó khăn.", "阳光总在风雨后。", "Yángguāng zǒng zài fēngyǔ hòu.", "Ánh nắng luôn đến sau mưa gió."),
      vocab("风雨", "fēngyǔ", "mưa gió; khó khăn", "danh từ", "Trong bài mang nghĩa ẩn dụ cho thử thách.", "每个人都会遇到自己的风雨。", "Měi ge rén dōu huì yùdào zìjǐ de fēngyǔ.", "Mỗi người đều sẽ gặp những mưa gió của riêng mình."),
      vocab("难道", "nándào", "chẳng lẽ", "phó từ", "Dùng trong câu hỏi tu từ để nhấn cảm xúc.", "难道你就这样放弃吗？", "Nándào nǐ jiù zhèyàng fàngqì ma?", "Chẳng lẽ bạn cứ thế bỏ cuộc sao?"),
      vocab("通过", "tōngguò", "thông qua; vượt qua", "động từ/giới từ", "Dùng khi nói vượt qua kỳ thi, khó khăn hoặc nhờ cách nào đó mà đạt kết quả.", "通过这次考试以后，他更有信心了。", "Tōngguò zhè cì kǎoshì yǐhòu, tā gèng yǒu xìnxīn le.", "Sau khi vượt qua kỳ thi này, anh ấy tự tin hơn."),
      vocab("结果", "jiéguǒ", "kết quả", "danh từ/liên từ", "Dùng khi kể điều xảy ra cuối cùng.", "努力了很久，结果还是失败了。", "Nǔlì le hěn jiǔ, jiéguǒ háishi shībài le.", "Cố gắng lâu rồi, kết quả vẫn thất bại."),
      vocab("失败", "shībài", "thất bại", "động từ/danh từ", "Một phần tự nhiên của quá trình vượt khó.", "一次失败不代表永远失败。", "Yí cì shībài bù dàibiǎo yǒngyuǎn shībài.", "Một lần thất bại không có nghĩa là mãi mãi thất bại."),
      vocab("信心", "xìnxīn", "tự tin, niềm tin", "danh từ", "Thứ thường bị mất đi sau khó khăn nhưng cũng có thể lấy lại.", "遇到问题的时候最不能丢的是信心。", "Yùdào wèntí de shíhou zuì bù néng diū de shì xìnxīn.", "Lúc gặp vấn đề điều không thể đánh mất nhất là niềm tin."),
      vocab("坚持", "jiānchí", "kiên trì", "động từ", "Cách đối mặt quan trọng sau khi gặp thất bại.", "只要坚持，总会看到变化。", "Zhǐyào jiānchí, zǒng huì kàndào biànhuà.", "Chỉ cần kiên trì, rồi sẽ thấy thay đổi.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Động viên người vừa thất bại.", [
        study("A: 我这次考试又没通过，真的有点儿失望。", "A: Wǒ zhè cì kǎoshì yòu méi tōngguò, zhēn de yǒudiǎnr shīwàng.", "A: Lần thi này tôi lại không qua, thật sự hơi thất vọng."),
        study("B: 一次失败不代表什么，阳光总在风雨后。", "B: Yí cì shībài bù dàibiǎo shénme, yángguāng zǒng zài fēngyǔ hòu.", "B: Một lần thất bại không nói lên điều gì, ánh nắng luôn đến sau mưa gió."),
        study("A: 听你这么说，我感觉好一点儿了。", "A: Tīng nǐ zhème shuō, wǒ gǎnjué hǎo yìdiǎnr le.", "A: Nghe bạn nói vậy tôi thấy khá hơn một chút rồi.")
      ]),
      dialogueBlock("Tình huống 2", "Dùng câu hỏi tu từ để khuyên.", [
        study("A: 我觉得自己可能真的不行。", "A: Wǒ juéde zìjǐ kěnéng zhēn de bù xíng.", "A: Tôi cảm thấy có lẽ mình thật sự không làm được."),
        study("B: 难道你就这样放弃吗？你以前不是一直很努力吗？", "B: Nándào nǐ jiù zhèyàng fàngqì ma? Nǐ yǐqián bú shì yìzhí hěn nǔlì ma?", "B: Chẳng lẽ bạn cứ thế bỏ cuộc sao? Trước đây chẳng phải bạn vẫn luôn rất cố gắng sao?"),
        study("A: 我只是一下子没信心了。", "A: Wǒ zhǐshì yíxiàzi méi xìnxīn le.", "A: Chỉ là nhất thời tôi mất tự tin thôi.")
      ]),
      dialogueBlock("Tình huống 3", "Nhìn lại kết quả để rút kinh nghiệm.", [
        study("A: 那这次失败以后你打算怎么办？", "A: Nà zhè cì shībài yǐhòu nǐ dǎsuan zěnme bàn?", "A: Vậy sau lần thất bại này bạn định làm thế nào?"),
        study("B: 我想先看看问题到底在哪儿，然后再调整方法。", "B: Wǒ xiǎng xiān kànkan wèntí dàodǐ zài nǎr, ránhòu zài tiáozhěng fāngfǎ.", "B: Tôi muốn xem vấn đề rốt cuộc nằm ở đâu trước, rồi mới điều chỉnh cách làm."),
        study("A: 这样处理很理智。", "A: Zhèyàng chǔlǐ hěn lǐzhì.", "A: Xử lý như vậy rất lý trí.")
      ]),
      dialogueBlock("Tình huống 4", "Nhấn quá trình vượt qua khó khăn.", [
        study("A: 你现在为什么看起来这么平静？", "A: Nǐ xiànzài wèishénme kànqilai zhème píngjìng?", "A: Bây giờ sao bạn trông bình tĩnh thế?"),
        study("B: 因为我明白了，很多成长都要通过风雨才能得到。", "B: Yīnwèi wǒ míngbai le, hěn duō chéngzhǎng dōu yào tōngguò fēngyǔ cáinéng dédào.", "B: Vì tôi hiểu ra rồi, rất nhiều trưởng thành đều phải thông qua mưa gió mới có được."),
        study("A: 这句话我会记住的。", "A: Zhè jù huà wǒ huì jìzhù de.", "A: Tôi sẽ nhớ câu này.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 难道 + câu nghi vấn", "难道 thường dùng để tạo câu hỏi tu từ, nhấn mạnh cảm xúc mạnh như ngạc nhiên, không đồng tình hoặc thúc giục suy nghĩ lại.", study("难道你就这样放弃吗？", "Nándào nǐ jiù zhèyàng fàngqì ma?", "Chẳng lẽ bạn cứ thế bỏ cuộc sao?"), [
        study("难道你一点儿都不后悔吗？", "Nándào nǐ yìdiǎnr dōu bù hòuhuǐ ma?", "Chẳng lẽ bạn không hối hận chút nào sao?"),
        study("难道这不是最好的办法吗？", "Nándào zhè bú shì zuì hǎo de bànfǎ ma?", "Chẳng lẽ đây không phải là cách tốt nhất sao?"),
        study("难道我们现在就没有别的选择了吗？", "Nándào wǒmen xiànzài jiù méiyǒu bié de xuǎnzé le ma?", "Chẳng lẽ bây giờ chúng ta thật sự không còn lựa chọn nào khác sao?")
      ]),
      grammarNote("2. 通过", "通过 vừa có thể làm động từ 'vượt qua', vừa có thể làm giới từ chỉ 'thông qua phương thức nào đó'.", study("通过这次考试以后，他更有信心了。", "Tōngguò zhè cì kǎoshì yǐhòu, tā gèng yǒu xìnxīn le.", "Sau khi vượt qua kỳ thi này, anh ấy tự tin hơn."), [
        study("我们通过讨论解决了这个问题。", "Wǒmen tōngguò tǎolùn jiějué le zhège wèntí.", "Chúng tôi đã thông qua thảo luận mà giải quyết được vấn đề này."),
        study("他终于通过了面试。", "Tā zhōngyú tōngguò le miànshì.", "Cuối cùng anh ấy đã vượt qua buổi phỏng vấn."),
        study("很多成长都要通过困难才能得到。", "Hěn duō chéngzhǎng dōu yào tōngguò kùnnan cáinéng dédào.", "Rất nhiều trưởng thành đều phải thông qua khó khăn mới có được.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 风雨", "2. 结果", "3. 信心"], options: ["a. kết quả", "b. niềm tin, tự tin", "c. mưa gió; khó khăn"], answer: "1-c, 2-a, 3-b" }],
      [{ question: "Điền từ thích hợp.", prompt: ["阳光总在风___后。", "难___你就这样放弃吗？", "通过这次考试以后，他更有信___了。"], answer: "雨 / 道 / 心" }],
      [{ question: "Câu nào đúng?", options: ["A. 难道你就这样放弃吗？", "B. 难道你放弃就这样吗？", "C. 你难道就这样吗放弃？"], answer: "A. 难道你就这样放弃吗？" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 我这次考试又没通过，真的有点儿失望。", "B: ____________", "A: 听你这么说，我感觉好一点儿了。"], answer: "B: 一次失败不代表什么，阳光总在风雨后。" }],
      "Tự kiểm tra: bạn có thể dùng 难道 để động viên ai đó suy nghĩ lại sau khi muốn bỏ cuộc không?"
    ),
    quickSummary: {
      words: ["阳光", "风雨", "难道", "通过", "结果", "信心"],
      patterns: ["阳光总在风雨后。", "难道你就这样放弃吗？"],
      reminder: "Bài này cần giọng nói có sức nâng tinh thần. Đừng chỉ dịch ý, hãy nói sao cho có lực."
    }
  },
  10: {
    objective: "Thảo luận về tiêu chuẩn của hạnh phúc, so sánh các góc nhìn khác nhau và diễn đạt ý kiến cá nhân ở mức trừu tượng hơn HSK 3.",
    vocabulary: [
      vocab("幸福", "xìngfú", "hạnh phúc", "danh từ/tính từ", "Chủ đề trung tâm của bài 10.", "每个人对幸福的理解都不一样。", "Měi ge rén duì xìngfú de lǐjiě dōu bù yíyàng.", "Cách hiểu về hạnh phúc của mỗi người đều không giống nhau."),
      vocab("标准", "biāozhǔn", "tiêu chuẩn", "danh từ", "Dùng để nói điều kiện đánh giá điều gì là đủ tốt.", "幸福其实没有唯一的标准。", "Xìngfú qíshí méiyǒu wéiyī de biāozhǔn.", "Hạnh phúc thật ra không có một tiêu chuẩn duy nhất."),
      vocab("不过", "búguò", "chỉ là, tuy nhiên", "liên từ/phó từ", "Dùng để điều chỉnh nhẹ ý phía trước.", "钱当然重要，不过不是全部。", "Qián dāngrán zhòngyào, búguò bú shì quánbù.", "Tiền đương nhiên quan trọng, nhưng không phải là tất cả."),
      vocab("确实", "quèshí", "quả thật", "phó từ", "Dùng để xác nhận một nhận xét là đúng.", "这件事确实值得认真想一想。", "Zhè jiàn shì quèshí zhídé rènzhēn xiǎng yì xiǎng.", "Chuyện này quả thật đáng suy nghĩ nghiêm túc."),
      vocab("由于", "yóuyú", "do, bởi vì", "giới từ/liên từ", "Dùng để nêu nguyên nhân trang trọng hơn 因为.", "由于工作不同，大家的选择也不同。", "Yóuyú gōngzuò bùtóng, dàjiā de xuǎnzé yě bùtóng.", "Do công việc khác nhau, lựa chọn của mọi người cũng khác nhau."),
      vocab("比如", "bǐrú", "ví dụ như", "liên từ", "Dùng để đưa ví dụ minh họa rõ hơn cho ý trừu tượng.", "比如，有的人觉得自由比收入更重要。", "Bǐrú, yǒu de rén juéde zìyóu bǐ shōurù gèng zhòngyào.", "Ví dụ, có người thấy tự do còn quan trọng hơn thu nhập."),
      vocab("自由", "zìyóu", "tự do", "danh từ/tính từ", "Một tiêu chí hạnh phúc thường gặp.", "对她来说，自由是一种幸福。", "Duì tā lái shuō, zìyóu shì yì zhǒng xìngfú.", "Đối với cô ấy, tự do là một dạng hạnh phúc."),
      vocab("满足", "mǎnzú", "thỏa mãn, mãn nguyện", "động từ/tính từ", "Dùng để nói cảm giác đủ đầy về tinh thần.", "有时候简单的生活更容易让人满足。", "Yǒushíhou jiǎndān de shēnghuó gèng róngyì ràng rén mǎnzú.", "Đôi khi cuộc sống giản dị lại dễ khiến người ta thấy mãn nguyện hơn.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Hỏi tiêu chuẩn của hạnh phúc.", [
        study("A: 你觉得什么才算幸福？", "A: Nǐ juéde shénme cái suàn xìngfú?", "A: Bạn thấy thế nào mới được tính là hạnh phúc?"),
        study("B: 我觉得幸福没有固定的标准。", "B: Wǒ juéde xìngfú méiyǒu gùdìng de biāozhǔn.", "B: Tôi thấy hạnh phúc không có một tiêu chuẩn cố định."),
        study("A: 对，每个人在乎的东西都不一样。", "A: Duì, měi ge rén zàihu de dōngxi dōu bù yíyàng.", "A: Đúng, thứ mỗi người coi trọng đều không giống nhau.")
      ]),
      dialogueBlock("Tình huống 2", "So sánh các góc nhìn khác nhau.", [
        study("A: 有的人觉得有钱就是幸福。", "A: Yǒu de rén juéde yǒu qián jiùshì xìngfú.", "A: Có người cảm thấy có tiền chính là hạnh phúc."),
        study("B: 钱当然重要，不过不是全部。", "B: Qián dāngrán zhòngyào, búguò bú shì quánbù.", "B: Tiền đương nhiên quan trọng, nhưng không phải là tất cả."),
        study("A: 比如，还有人更看重自由或者陪伴。", "A: Bǐrú, hái yǒu rén gèng kànzhòng zìyóu huòzhě péibàn.", "A: Ví dụ, cũng có người coi trọng tự do hoặc sự đồng hành hơn.")
      ]),
      dialogueBlock("Tình huống 3", "Nói nguyên nhân vì sao tiêu chuẩn khác nhau.", [
        study("A: 为什么每个人对幸福的理解差这么多？", "A: Wèishénme měi ge rén duì xìngfú de lǐjiě chà zhème duō?", "A: Tại sao cách hiểu về hạnh phúc của mỗi người lại khác nhau đến vậy?"),
        study("B: 由于成长经历和生活环境不同，标准自然也不同。", "B: Yóuyú chéngzhǎng jīnglì hé shēnghuó huánjìng bùtóng, biāozhǔn zìrán yě bùtóng.", "B: Do trải nghiệm trưởng thành và môi trường sống khác nhau, tiêu chuẩn đương nhiên cũng khác nhau."),
        study("A: 这句话确实很有道理。", "A: Zhè jù huà quèshí hěn yǒu dàolǐ.", "A: Câu này quả thật rất có lý.")
      ]),
      dialogueBlock("Tình huống 4", "Nói hạnh phúc giản dị hơn nhiều người nghĩ.", [
        study("A: 那你的标准是什么？", "A: Nà nǐ de biāozhǔn shì shénme?", "A: Vậy tiêu chuẩn của bạn là gì?"),
        study("B: 对我来说，身体健康，家人平安，心里满足，就已经很幸福了。", "B: Duì wǒ lái shuō, shēntǐ jiànkāng, jiārén píng'ān, xīnlǐ mǎnzú, jiù yǐjīng hěn xìngfú le.", "B: Đối với tôi, sức khỏe tốt, gia đình bình an, trong lòng thấy mãn nguyện thì đã rất hạnh phúc rồi."),
        study("A: 听起来简单，其实并不容易。", "A: Tīngqilai jiǎndān, qíshí bìng bù róngyì.", "A: Nghe có vẻ đơn giản, nhưng thật ra không dễ.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 不过 / 确实", "不过 dùng để chuyển ý nhẹ, không quá đối lập; 确实 dùng để xác nhận một điều đúng hoặc đáng công nhận.", study("钱当然重要，不过不是全部。", "Qián dāngrán zhòngyào, búguò bú shì quánbù.", "Tiền đương nhiên quan trọng, nhưng không phải là tất cả."), [
        study("这份工作不错，不过压力有点儿大。", "Zhè fèn gōngzuò búcuò, búguò yālì yǒudiǎnr dà.", "Công việc này không tệ, nhưng áp lực hơi lớn."),
        study("他说得确实有道理。", "Tā shuō de quèshí yǒu dàolǐ.", "Anh ấy nói quả thật có lý."),
        study("你的方法确实比我的更有效。", "Nǐ de fāngfǎ quèshí bǐ wǒ de gèng yǒuxiào.", "Cách của bạn quả thật hiệu quả hơn cách của tôi.")
      ]),
      grammarNote("2. 由于... / 比如...", "由于 dùng để nêu nguyên nhân trang trọng hơn; 比如 dùng để đưa ví dụ làm rõ ý trừu tượng.", study("由于成长经历不同，大家的标准也不同。", "Yóuyú chéngzhǎng jīnglì bùtóng, dàjiā de biāozhǔn yě bùtóng.", "Do trải nghiệm trưởng thành khác nhau, tiêu chuẩn của mọi người cũng khác nhau."), [
        study("由于时间不够，我们先说到这儿。", "Yóuyú shíjiān bù gòu, wǒmen xiān shuō dào zhèr.", "Do không đủ thời gian, chúng ta nói đến đây trước."),
        study("比如，有的人更需要安全感。", "Bǐrú, yǒu de rén gèng xūyào ānquángǎn.", "Ví dụ, có người cần cảm giác an toàn hơn."),
        study("比如周末和家人一起吃饭，对很多人来说就是幸福。", "Bǐrú zhōumò hé jiārén yìqǐ chīfàn, duì hěn duō rén lái shuō jiùshì xìngfú.", "Ví dụ, cuối tuần ăn cơm với gia đình, đối với nhiều người mà nói đã là hạnh phúc.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 幸福", "2. 标准", "3. 满足"], options: ["a. mãn nguyện, thỏa mãn", "b. hạnh phúc", "c. tiêu chuẩn"], answer: "1-b, 2-c, 3-a" }],
      [{ question: "Điền từ thích hợp.", prompt: ["幸福没有固定的标___。", "___于成长经历不同，大家的选择也不同。", "钱当然重要，不___不是全部。"], answer: "准 / 由 / 过" }],
      [{ question: "Câu nào đúng?", options: ["A. 钱当然重要，不过不是全部。", "B. 钱当然重要，不是全部不过。", "C. 不过钱当然重要不是全部。"], answer: "A. 钱当然重要，不过不是全部。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 你觉得什么才算幸福？", "B: ____________", "A: 对，每个人在乎的东西都不一样。"], answer: "B: 我觉得幸福没有固定的标准。" }],
      "Tự kiểm tra: bạn có thể nói tiêu chuẩn hạnh phúc của mình bằng 2 đến 3 câu mang tính quan điểm cá nhân không?"
    ),
    quickSummary: {
      words: ["幸福", "标准", "不过", "确实", "由于", "满足"],
      patterns: ["幸福没有固定的标准。", "对我来说，身体健康，家人平安，就已经很幸福了。"],
      reminder: "Bài này cần giọng nói chín hơn HSK 3: ít kể chuyện hơn, nhiều nhận xét và lập luận cá nhân hơn."
    }
  },
  11: {
    objective: "Trao đổi về lợi ích của việc đọc sách, thói quen đọc và cách diễn đạt quan điểm ở mức HSK 4 với các cụm lặp có chủ đích.",
    vocabulary: [
      vocab("读书", "dúshū", "đọc sách", "động từ", "Dùng trong nghĩa chung là việc đọc và học từ sách.", "她每天睡觉前都会读书。", "Tā měitiān shuìjiào qián dōu huì dúshū.", "Cô ấy mỗi ngày trước khi ngủ đều đọc sách."),
      vocab("习惯", "xíguàn", "thói quen", "danh từ/động từ", "Có thể nói thói quen đọc, thói quen học.", "好的读书习惯需要慢慢培养。", "Hǎo de dúshū xíguàn xūyào mànmàn péiyǎng.", "Thói quen đọc sách tốt cần được hình thành dần dần."),
      vocab("培养", "péiyǎng", "bồi dưỡng, hình thành", "động từ", "Hay đi với 兴趣, 习惯, 能力.", "老师希望学生从小培养阅读兴趣。", "Lǎoshī xīwàng xuéshēng cóng xiǎo péiyǎng yuèdú xìngqù.", "Giáo viên hy vọng học sinh từ nhỏ hình thành hứng thú đọc sách."),
      vocab("知识", "zhīshi", "kiến thức", "danh từ", "Dùng để nói giá trị thực tế của việc đọc.", "书能帮助我们积累知识。", "Shū néng bāngzhù wǒmen jīlěi zhīshi.", "Sách có thể giúp chúng ta tích lũy kiến thức."),
      vocab("积累", "jīlěi", "tích lũy", "động từ", "Đi với 经验, 知识, 词汇.", "学语言要靠长期积累。", "Xué yǔyán yào kào chángqī jīlěi.", "Học ngôn ngữ phải dựa vào tích lũy lâu dài."),
      vocab("影响", "yǐngxiǎng", "ảnh hưởng", "danh từ/động từ", "Có thể nói sách ảnh hưởng đến suy nghĩ của con người.", "一本好书会影响人的想法。", "Yì běn hǎo shū huì yǐngxiǎng rén de xiǎngfǎ.", "Một cuốn sách hay sẽ ảnh hưởng đến suy nghĩ của con người."),
      vocab("建议", "jiànyì", "kiến nghị; khuyên", "danh từ/động từ", "Hay dùng khi giới thiệu sách cho người khác.", "老师建议我们多读一些经典作品。", "Lǎoshī jiànyì wǒmen duō dú yìxiē jīngdiǎn zuòpǐn.", "Giáo viên khuyên chúng tôi đọc thêm một số tác phẩm kinh điển."),
      vocab("经典", "jīngdiǎn", "kinh điển", "tính từ/danh từ", "Dùng để nói tác phẩm có giá trị lâu dài.", "这本书虽然老，但是很经典。", "Zhè běn shū suīrán lǎo, dànshì hěn jīngdiǎn.", "Cuốn sách này tuy cũ nhưng rất kinh điển.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Trao đổi thói quen đọc sách.", [
        study("A: 你平时有读书的习惯吗？", "A: Nǐ píngshí yǒu dúshū de xíguàn ma?", "A: Bình thường bạn có thói quen đọc sách không?"),
        study("B: 有，不过以前坚持得不太好。", "B: Yǒu, búguò yǐqián jiānchí de bú tài hǎo.", "B: Có, nhưng trước đây tôi duy trì không được tốt lắm."),
        study("A: 习惯本来就需要慢慢培养。", "A: Xíguàn běnlái jiù xūyào mànmàn péiyǎng.", "A: Thói quen vốn dĩ cần được hình thành từ từ.")
      ]),
      dialogueBlock("Tình huống 2", "Nói lợi ích của việc đọc.", [
        study("A: 你觉得读书最大的好处是什么？", "A: Nǐ juéde dúshū zuì dà de hǎochu shì shénme?", "A: Bạn thấy lợi ích lớn nhất của việc đọc sách là gì?"),
        study("B: 不但能积累知识，还能让人看问题更全面。", "B: Búdàn néng jīlěi zhīshi, hái néng ràng rén kàn wèntí gèng quánmiàn.", "B: Không những có thể tích lũy kiến thức, mà còn khiến con người nhìn vấn đề toàn diện hơn."),
        study("A: 我同意，一本好书的影响可能很长。", "A: Wǒ tóngyì, yì běn hǎo shū de yǐngxiǎng kěnéng hěn cháng.", "A: Tôi đồng ý, ảnh hưởng của một cuốn sách hay có thể rất lâu dài.")
      ]),
      dialogueBlock("Tình huống 3", "Giới thiệu sách cho bạn.", [
        study("A: 最近你在看什么书？", "A: Zuìjìn nǐ zài kàn shénme shū?", "A: Gần đây bạn đang đọc sách gì?"),
        study("B: 我在看一本关于历史的书，内容不难，而且很有意思。", "B: Wǒ zài kàn yì běn guānyú lìshǐ de shū, nèiróng bù nán, érqiě hěn yǒu yìsi.", "B: Tôi đang đọc một cuốn sách về lịch sử, nội dung không khó mà còn rất thú vị."),
        study("A: 听起来不错，你能不能推荐给我？", "A: Tīngqilai búcuò, nǐ néng bu néng tuījiàn gěi wǒ?", "A: Nghe hay đấy, bạn có thể giới thiệu cho tôi không?")
      ]),
      dialogueBlock("Tình huống 4", "Bàn về cách chọn sách.", [
        study("A: 书那么多，你一般怎么选？", "A: Shū nàme duō, nǐ yìbān zěnme xuǎn?", "A: Sách nhiều như vậy, thường bạn chọn thế nào?"),
        study("B: 我先看是不是自己感兴趣，再看是不是值得花时间。", "B: Wǒ xiān kàn shì bú shì zìjǐ gǎn xìngqù, zài kàn shì bú shì zhídé huā shíjiān.", "B: Tôi trước hết xem có phải thứ mình hứng thú không, rồi xem có đáng để dành thời gian hay không."),
        study("A: 难怪你读的书都挺有质量。", "A: Nánguài nǐ dú de shū dōu tǐng yǒu zhìliàng.", "A: Bảo sao những cuốn sách bạn đọc đều khá chất lượng.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 不但……还……", "Mẫu này dùng để nối hai lợi ích, hai đặc điểm hoặc hai hành động có quan hệ tăng tiến.", study("读书不但能积累知识，还能帮助我们思考。", "Dúshū búdàn néng jīlěi zhīshi, hái néng bāngzhù wǒmen sīkǎo.", "Đọc sách không những có thể tích lũy kiến thức, mà còn giúp chúng ta suy nghĩ."), [
        study("这本书不但内容丰富，还很容易理解。", "Zhè běn shū búdàn nèiróng fēngfù, hái hěn róngyì lǐjiě.", "Cuốn sách này không những nội dung phong phú mà còn rất dễ hiểu."),
        study("他不但喜欢看书，还喜欢记笔记。", "Tā búdàn xǐhuan kàn shū, hái xǐhuan jì bǐjì.", "Anh ấy không những thích đọc sách mà còn thích ghi chép."),
        study("阅读不但能提高语言能力，还能扩大眼界。", "Yuèdú búdàn néng tígāo yǔyán nénglì, hái néng kuòdà yǎnjiè.", "Đọc không những có thể nâng cao năng lực ngôn ngữ mà còn mở rộng tầm mắt.")
      ]),
      grammarNote("2. 先……再……", "先 dùng để nói việc làm trước, 再 dùng để nói bước tiếp theo. Mẫu này rất hay gặp khi trình bày phương pháp hoặc thói quen.", study("我先看目录，再决定要不要买。", "Wǒ xiān kàn mùlù, zài juédìng yào bu yào mǎi.", "Tôi xem mục lục trước, rồi mới quyết định có mua hay không."), [
        study("你先选一本感兴趣的，再慢慢培养习惯。", "Nǐ xiān xuǎn yì běn gǎn xìngqù de, zài mànmàn péiyǎng xíguàn.", "Bạn chọn trước một cuốn mình thấy hứng thú, rồi dần dần hình thành thói quen."),
        study("我先读一遍，再查不懂的词。", "Wǒ xiān dú yí biàn, zài chá bù dǒng de cí.", "Tôi đọc trước một lượt, rồi tra những từ không hiểu."),
        study("我们先听听大家的意见，再做决定。", "Wǒmen xiān tīngting dàjiā de yìjiàn, zài zuò juédìng.", "Chúng ta nghe ý kiến của mọi người trước, rồi mới quyết định.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 积累", "2. 习惯", "3. 经典"], options: ["a. kinh điển", "b. tích lũy", "c. thói quen"], answer: "1-b, 2-c, 3-a" }],
      [{ question: "Điền từ thích hợp.", prompt: ["读书不但能积累知___，还能帮助思考。", "好习惯需要慢慢培___。", "老师建___我们多读一些好书。"], answer: "识 / 养 / 议" }],
      [{ question: "Câu nào đúng?", options: ["A. 我先看目录，再决定要不要买。", "B. 我再看目录，先决定要不要买。", "C. 我先决定要不要买，再看目录先。"], answer: "A. 我先看目录，再决定要不要买。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 你觉得读书最大的好处是什么？", "B: ____________", "A: 我同意，一本好书的影响可能很长。"], answer: "B: 不但能积累知识，还能让人看问题更全面。" }],
      "Tự kiểm tra: bạn có thể nói ngắn gọn vì sao mình nên đọc sách bằng mẫu 不但……还…… không?"
    ),
    quickSummary: {
      words: ["读书", "习惯", "培养", "知识", "积累", "影响"],
      patterns: ["读书不但能积累知识，还能帮助我们思考。", "我先看目录，再决定要不要买。"],
      reminder: "Bài này cần diễn đạt quan điểm có thứ tự. Đừng chỉ nói thích hay không thích, hãy nói vì sao."
    }
  },
  12: {
    objective: "Diễn đạt cách quan sát xã hội và nhận ra giá trị xung quanh bằng ngôn ngữ mô tả, đánh giá và suy ngẫm ở mức HSK 4.",
    vocabulary: [
      vocab("发现", "fāxiàn", "phát hiện ra", "động từ", "Không chỉ là nhìn thấy, mà là nhận ra điều có ý nghĩa.", "只要仔细观察，你就会发现很多细节。", "Zhǐyào zǐxì guānchá, nǐ jiù huì fāxiàn hěn duō xìjié.", "Chỉ cần quan sát kỹ, bạn sẽ phát hiện ra nhiều chi tiết."),
      vocab("用心", "yòngxīn", "dùng tâm, để tâm", "động từ/trạng ngữ", "Dùng để nói làm gì đó một cách chú ý và chân thành.", "只要用心，就能发现生活中的美。", "Zhǐyào yòngxīn, jiù néng fāxiàn shēnghuó zhōng de měi.", "Chỉ cần để tâm, sẽ có thể phát hiện cái đẹp trong cuộc sống."),
      vocab("细节", "xìjié", "chi tiết", "danh từ", "Những điểm nhỏ nhưng quan trọng.", "真正打动人的往往是细节。", "Zhēnzhèng dǎdòng rén de wǎngwǎng shì xìjié.", "Điều thực sự làm người ta cảm động thường là chi tiết."),
      vocab("观察", "guānchá", "quan sát", "động từ", "Hay dùng khi nói cách hiểu người và hiểu xã hội.", "他喜欢站在路边观察来往的人。", "Tā xǐhuan zhàn zài lùbiān guānchá láiwǎng de rén.", "Anh ấy thích đứng bên đường quan sát người qua lại."),
      vocab("普通", "pǔtōng", "bình thường", "tính từ", "Dùng để nói sự vật quen thuộc hằng ngày.", "普通的日子里也有值得珍惜的东西。", "Pǔtōng de rìzi lǐ yě yǒu zhídé zhēnxī de dōngxi.", "Trong những ngày bình thường cũng có những thứ đáng trân trọng."),
      vocab("珍惜", "zhēnxī", "trân trọng", "động từ", "Hay đi với 时间, 机会, 感情.", "我们应该珍惜身边的人和事。", "Wǒmen yīnggāi zhēnxī shēnbiān de rén hé shì.", "Chúng ta nên trân trọng người và việc bên cạnh mình."),
      vocab("角度", "jiǎodù", "góc độ", "danh từ", "Dùng để nói cách nhìn một vấn đề.", "换个角度看，问题就没那么难了。", "Huàn ge jiǎodù kàn, wèntí jiù méi nàme nán le.", "Đổi góc nhìn, vấn đề sẽ không khó đến thế."),
      vocab("感受", "gǎnshòu", "cảm nhận", "danh từ/động từ", "Dùng để nói trải nghiệm và cảm xúc cá nhân.", "每个人对同一件事的感受都可能不同。", "Měi ge rén duì tóng yí jiàn shì de gǎnshòu dōu kěnéng bùtóng.", "Cảm nhận của mỗi người về cùng một việc đều có thể khác nhau.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Nói về việc chú ý những điều nhỏ.", [
        study("A: 你怎么总能发现别人没注意到的东西？", "A: Nǐ zěnme zǒng néng fāxiàn biérén méi zhùyì dào de dōngxi?", "A: Sao bạn luôn phát hiện được những thứ người khác không để ý vậy?"),
        study("B: 我只是比较喜欢观察细节。", "B: Wǒ zhǐshì bǐjiào xǐhuan guānchá xìjié.", "B: Tôi chỉ là khá thích quan sát chi tiết thôi."),
        study("A: 难怪你写出来的东西总是很真实。", "A: Nánguài nǐ xiě chūlai de dōngxi zǒngshì hěn zhēnshí.", "A: Bảo sao những gì bạn viết ra luôn rất chân thực.")
      ]),
      dialogueBlock("Tình huống 2", "Bàn về cái đẹp trong đời thường.", [
        study("A: 生活里真的有那么多值得写的东西吗？", "A: Shēnghuó lǐ zhēn de yǒu nàme duō zhídé xiě de dōngxi ma?", "A: Trong cuộc sống thật sự có nhiều điều đáng viết đến vậy sao?"),
        study("B: 当然有，只是很多人没有用心去看。", "B: Dāngrán yǒu, zhǐshì hěn duō rén méiyǒu yòngxīn qù kàn.", "B: Đương nhiên có, chỉ là nhiều người không dùng tâm để nhìn."),
        study("A: 这么说，普通的生活也能打动人。", "A: Zhème shuō, pǔtōng de shēnghuó yě néng dǎdòng rén.", "A: Nói vậy thì cuộc sống bình thường cũng có thể làm người ta cảm động.")
      ]),
      dialogueBlock("Tình huống 3", "Đổi góc nhìn để hiểu vấn đề.", [
        study("A: 我总觉得最近的生活很单调。", "A: Wǒ zǒng juéde zuìjìn de shēnghuó hěn dāndiào.", "A: Tôi luôn cảm thấy cuộc sống gần đây rất đơn điệu."),
        study("B: 也许你可以换个角度看看。", "B: Yěxǔ nǐ kěyǐ huàn ge jiǎodù kànkan.", "B: Có lẽ bạn có thể đổi góc độ mà nhìn thử."),
        study("A: 你的意思是从细节里找变化吗？", "A: Nǐ de yìsi shì cóng xìjié lǐ zhǎo biànhuà ma?", "A: Ý bạn là tìm sự thay đổi từ trong chi tiết phải không?")
      ]),
      dialogueBlock("Tình huống 4", "Nói cảm nhận cá nhân.", [
        study("A: 同一条路，你每天都走，不会觉得没意思吗？", "A: Tóng yì tiáo lù, nǐ měitiān dōu zǒu, bú huì juéde méi yìsi ma?", "A: Cùng một con đường, ngày nào bạn cũng đi, không thấy chán sao?"),
        study("B: 不会，因为每天看到的人、听到的声音都不一样。", "B: Bú huì, yīnwèi měitiān kàndào de rén, tīngdào de shēngyīn dōu bù yíyàng.", "B: Không, vì người nhìn thấy mỗi ngày, âm thanh nghe thấy mỗi ngày đều không giống nhau."),
        study("A: 原来你真的很会感受生活。", "A: Yuánlái nǐ zhēn de hěn huì gǎnshòu shēnghuó.", "A: Hóa ra bạn thật sự rất biết cảm nhận cuộc sống.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 只要……就……", "Mẫu này dùng để nói điều kiện đủ: chỉ cần có điều kiện trước, kết quả sau thường sẽ xảy ra.", study("只要用心，就能发现生活中的美。", "Zhǐyào yòngxīn, jiù néng fāxiàn shēnghuó zhōng de měi.", "Chỉ cần để tâm, sẽ có thể phát hiện cái đẹp trong cuộc sống."), [
        study("只要你愿意观察，就会看到很多细节。", "Zhǐyào nǐ yuànyì guānchá, jiù huì kàndào hěn duō xìjié.", "Chỉ cần bạn muốn quan sát, sẽ nhìn thấy nhiều chi tiết."),
        study("只要换个角度，问题可能就简单了。", "Zhǐyào huàn ge jiǎodù, wèntí kěnéng jiù jiǎndān le.", "Chỉ cần đổi góc nhìn, vấn đề có thể sẽ đơn giản hơn."),
        study("只要认真感受，普通的日子也不普通。", "Zhǐyào rènzhēn gǎnshòu, pǔtōng de rìzi yě bù pǔtōng.", "Chỉ cần cảm nhận nghiêm túc, những ngày bình thường cũng không còn bình thường.")
      ]),
      grammarNote("2. 从……里……", "Từ cấu trúc này giúp nói rõ bạn tìm, nhìn ra hay học được điều gì từ trong một phạm vi nào đó.", study("我们可以从细节里看出一个人的态度。", "Wǒmen kěyǐ cóng xìjié lǐ kàn chū yí ge rén de tàidu.", "Chúng ta có thể nhìn ra thái độ của một người từ trong chi tiết."), [
        study("他从普通人的故事里得到了很多力量。", "Tā cóng pǔtōng rén de gùshi lǐ dédào le hěn duō lìliàng.", "Anh ấy đã có được rất nhiều sức mạnh từ những câu chuyện của người bình thường."),
        study("我想从这次经历里学一点儿东西。", "Wǒ xiǎng cóng zhè cì jīnglì lǐ xué yìdiǎnr dōngxi.", "Tôi muốn học được chút gì đó từ trải nghiệm lần này."),
        study("你能从他的眼神里看出他很累。", "Nǐ néng cóng tā de yǎnshén lǐ kàn chū tā hěn lèi.", "Bạn có thể nhìn ra từ ánh mắt anh ấy rằng anh ấy rất mệt.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 细节", "2. 珍惜", "3. 角度"], options: ["a. trân trọng", "b. chi tiết", "c. góc độ"], answer: "1-b, 2-a, 3-c" }],
      [{ question: "Điền từ thích hợp.", prompt: ["只要用___，就能发现生活中的美。", "真正打动人的往往是细___。", "换个角___看，问题就没那么难了。"], answer: "心 / 节 / 度" }],
      [{ question: "Câu nào đúng?", options: ["A. 只要你愿意观察，就会看到很多细节。", "B. 只要你观察愿意，就会很多看到细节。", "C. 就会看到很多细节，只要你愿意观察。"], answer: "A. 只要你愿意观察，就会看到很多细节。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 生活里真的有那么多值得写的东西吗？", "B: ____________", "A: 这么说，普通的生活也能打动人。"], answer: "B: 当然有，只是很多人没有用心去看。" }],
      "Tự kiểm tra: bạn có thể dùng 只要……就…… để nói cách phát hiện điều tốt đẹp trong cuộc sống không?"
    ),
    quickSummary: {
      words: ["发现", "用心", "细节", "观察", "角度", "感受"],
      patterns: ["只要用心，就能发现生活中的美。", "我们可以从细节里看出一个人的态度。"],
      reminder: "Bài này cần giọng mô tả có chiều sâu. Hãy tập nói từ quan sát cụ thể rồi mới rút ra nhận xét."
    }
  },
  13: {
    objective: "Nói về trải nghiệm văn hóa truyền thống, mô tả hành động đồng thời và diễn đạt cảm nhận cá nhân tự nhiên hơn.",
    vocabulary: [
      vocab("京剧", "jīngjù", "Kinh kịch", "danh từ", "Loại hình sân khấu truyền thống nổi tiếng của Trung Quốc.", "很多外国人也开始喜欢看京剧。", "Hěn duō wàiguó rén yě kāishǐ xǐhuan kàn jīngjù.", "Nhiều người nước ngoài cũng bắt đầu thích xem Kinh kịch."),
      vocab("传统", "chuántǒng", "truyền thống", "danh từ/tính từ", "Dùng để nói nghệ thuật, văn hóa, thói quen lâu đời.", "我对传统文化越来越感兴趣。", "Wǒ duì chuántǒng wénhuà yuèláiyuè gǎn xìngqù.", "Tôi ngày càng hứng thú với văn hóa truyền thống."),
      vocab("表演", "biǎoyǎn", "biểu diễn", "động từ/danh từ", "Dùng để nói buổi diễn hoặc việc biểu diễn.", "台上的表演很精彩。", "Táishàng de biǎoyǎn hěn jīngcǎi.", "Phần biểu diễn trên sân khấu rất đặc sắc."),
      vocab("演员", "yǎnyuán", "diễn viên", "danh từ", "Người biểu diễn trên sân khấu hoặc trong phim.", "那个演员一开口，全场就安静下来了。", "Nàge yǎnyuán yì kāikǒu, quánchǎng jiù ānjìng xiàlái le.", "Diễn viên đó vừa cất giọng, cả khán phòng liền yên tĩnh lại."),
      vocab("味道", "wèidào", "hương vị; phong vị", "danh từ", "Ngoài nghĩa món ăn, còn có thể nói hương vị văn hóa.", "老戏院里有一种特别的味道。", "Lǎo xìyuàn lǐ yǒu yì zhǒng tèbié de wèidào.", "Trong rạp hát cũ có một phong vị rất đặc biệt."),
      vocab("一边", "yìbiān", "vừa... vừa...", "cấu trúc", "Dùng để nói hai hành động diễn ra đồng thời.", "他一边看，一边听别人介绍。", "Tā yìbiān kàn, yìbiān tīng biérén jièshào.", "Anh ấy vừa xem vừa nghe người khác giới thiệu."),
      vocab("介绍", "jièshào", "giới thiệu", "động từ/danh từ", "Dùng khi ai đó giải thích bối cảnh văn hóa cho người khác.", "朋友先给我介绍了京剧的基本特点。", "Péngyou xiān gěi wǒ jièshào le jīngjù de jīběn tèdiǎn.", "Bạn tôi trước tiên giới thiệu cho tôi những đặc điểm cơ bản của Kinh kịch."),
      vocab("热闹", "rènao", "náo nhiệt", "tính từ", "Mô tả không khí đông vui của buổi biểu diễn hoặc nơi tụ họp.", "节日的时候戏院附近特别热闹。", "Jiérì de shíhou xìyuàn fùjìn tèbié rènao.", "Vào dịp lễ, khu vực gần rạp hát đặc biệt náo nhiệt.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Lần đầu đi xem Kinh kịch.", [
        study("A: 你以前看过京剧吗？", "A: Nǐ yǐqián kànguo jīngjù ma?", "A: Trước đây bạn đã từng xem Kinh kịch chưa?"),
        study("B: 没有，这是我第一次进戏院。", "B: Méiyǒu, zhè shì wǒ dìyī cì jìn xìyuàn.", "B: Chưa, đây là lần đầu tiên tôi vào rạp hát."),
        study("A: 那今天你可以慢慢感受一下传统艺术的味道。", "A: Nà jīntiān nǐ kěyǐ mànmàn gǎnshòu yíxià chuántǒng yìshù de wèidào.", "A: Vậy hôm nay bạn có thể từ từ cảm nhận phong vị của nghệ thuật truyền thống.")
      ]),
      dialogueBlock("Tình huống 2", "Nghe giới thiệu trước khi xem.", [
        study("A: 你听得懂演员唱的内容吗？", "A: Nǐ tīng de dǒng yǎnyuán chàng de nèiróng ma?", "A: Bạn có nghe hiểu nội dung diễn viên hát không?"),
        study("B: 还不能完全听懂，所以我一边看字幕，一边听朋友介绍。", "B: Hái bù néng wánquán tīng dǒng, suǒyǐ wǒ yìbiān kàn zìmù, yìbiān tīng péngyou jièshào.", "B: Tôi vẫn chưa thể hiểu hoàn toàn, nên vừa xem phụ đề vừa nghe bạn giới thiệu."),
        study("A: 这样看起来会轻松很多。", "A: Zhèyàng kànqilai huì qīngsōng hěn duō.", "A: Xem như vậy sẽ nhẹ nhàng hơn nhiều.")
      ]),
      dialogueBlock("Tình huống 3", "Nói cảm nhận sau buổi diễn.", [
        study("A: 看完以后，你最大的感受是什么？", "A: Kàn wán yǐhòu, nǐ zuì dà de gǎnshòu shì shénme?", "A: Sau khi xem xong, cảm nhận lớn nhất của bạn là gì?"),
        study("B: 我觉得演员的表演很细，动作和声音都很讲究。", "B: Wǒ juéde yǎnyuán de biǎoyǎn hěn xì, dòngzuò hé shēngyīn dōu hěn jiǎngjiu.", "B: Tôi thấy diễn xuất của diễn viên rất tinh tế, động tác và âm thanh đều rất trau chuốt."),
        study("A: 对，真正吸引人的就是这种细节。", "A: Duì, zhēnzhèng xīyǐn rén de jiùshì zhè zhǒng xìjié.", "A: Đúng, thứ thật sự thu hút người ta chính là kiểu chi tiết như vậy.")
      ]),
      dialogueBlock("Tình huống 4", "Liên hệ văn hóa và đời sống hiện đại.", [
        study("A: 你觉得年轻人为什么也应该接触京剧？", "A: Nǐ juéde niánqīngrén wèishénme yě yīnggāi jiēchù jīngjù?", "A: Bạn thấy vì sao người trẻ cũng nên tiếp xúc với Kinh kịch?"),
        study("B: 因为传统文化不是离我们很远的东西，而是生活的一部分。", "B: Yīnwèi chuántǒng wénhuà bú shì lí wǒmen hěn yuǎn de dōngxi, érshì shēnghuó de yí bùfen.", "B: Vì văn hóa truyền thống không phải thứ rất xa chúng ta, mà là một phần của cuộc sống."),
        study("A: 说得好，了解它以后会更懂自己的文化。", "A: Shuō de hǎo, liǎojiě tā yǐhòu huì gèng dǒng zìjǐ de wénhuà.", "A: Nói hay lắm, sau khi hiểu nó sẽ hiểu văn hóa của mình hơn.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 一边……一边……", "Mẫu này dùng để diễn đạt hai hành động xảy ra đồng thời. Hai vế thường là những việc có thể diễn ra song song.", study("我一边看字幕，一边听朋友介绍。", "Wǒ yìbiān kàn zìmù, yìbiān tīng péngyou jièshào.", "Tôi vừa xem phụ đề vừa nghe bạn giới thiệu."), [
        study("他一边喝茶，一边看京剧。", "Tā yìbiān hē chá, yìbiān kàn jīngjù.", "Anh ấy vừa uống trà vừa xem Kinh kịch."),
        study("妈妈一边做饭，一边听广播。", "Māma yìbiān zuòfàn, yìbiān tīng guǎngbō.", "Mẹ vừa nấu cơm vừa nghe radio."),
        study("我们一边走，一边聊刚才的表演。", "Wǒmen yìbiān zǒu, yìbiān liáo gāngcái de biǎoyǎn.", "Chúng tôi vừa đi vừa trò chuyện về màn biểu diễn lúc nãy.")
      ]),
      grammarNote("2. 不是……而是……", "Mẫu này dùng để chỉnh lại nhận định: không phải A, mà là B. Rất hữu ích khi giải thích quan điểm.", study("传统文化不是离我们很远的东西，而是生活的一部分。", "Chuántǒng wénhuà bú shì lí wǒmen hěn yuǎn de dōngxi, érshì shēnghuó de yí bùfen.", "Văn hóa truyền thống không phải thứ rất xa chúng ta, mà là một phần của cuộc sống."), [
        study("我来这儿不是为了买东西，而是想看看这家老戏院。", "Wǒ lái zhèr bú shì wèile mǎi dōngxi, érshì xiǎng kànkan zhè jiā lǎo xìyuàn.", "Tôi đến đây không phải để mua đồ, mà là muốn xem rạp hát cũ này."),
        study("吸引我的不是热闹，而是表演里的细节。", "Xīyǐn wǒ de bú shì rènao, érshì biǎoyǎn lǐ de xìjié.", "Điều thu hút tôi không phải sự náo nhiệt, mà là những chi tiết trong biểu diễn."),
        study("他学京剧不是一时兴趣，而是真心喜欢。", "Tā xué jīngjù bú shì yìshí xìngqù, érshì zhēnxīn xǐhuan.", "Anh ấy học Kinh kịch không phải hứng thú nhất thời, mà là thật lòng thích.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 京剧", "2. 传统", "3. 演员"], options: ["a. truyền thống", "b. diễn viên", "c. Kinh kịch"], answer: "1-c, 2-a, 3-b" }],
      [{ question: "Điền từ thích hợp.", prompt: ["我一___看字幕，一边听朋友介绍。", "传统文化不是离我们很远的东西，___是生活的一部分。", "那个演员的表___很精彩。"], answer: "边 / 而 / 演" }],
      [{ question: "Câu nào đúng?", options: ["A. 他一边喝茶，一边看京剧。", "B. 他一边看京剧，喝茶一边。", "C. 一边他喝茶，一边看京剧他。"], answer: "A. 他一边喝茶，一边看京剧。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 你听得懂演员唱的内容吗？", "B: ____________", "A: 这样看起来会轻松很多。"], answer: "B: 还不能完全听懂，所以我一边看字幕，一边听朋友介绍。" }],
      "Tự kiểm tra: bạn có thể dùng 不是……而是…… để nói vì sao mình thích một loại hình nghệ thuật không?"
    ),
    quickSummary: {
      words: ["京剧", "传统", "表演", "演员", "一边", "介绍"],
      patterns: ["我一边看字幕，一边听朋友介绍。", "传统文化不是离我们很远的东西，而是生活的一部分。"],
      reminder: "Bài này cần nói có cảm nhận thật. Khi mô tả văn hóa, đừng chỉ nói hay, hãy nói cái gì hay."
    }
  },
  14: {
    objective: "Bàn về môi trường, hành vi bảo vệ thiên nhiên và trách nhiệm cá nhân bằng ngôn ngữ thuyết phục rõ ràng hơn.",
    vocabulary: [
      vocab("保护", "bǎohù", "bảo vệ", "động từ", "Động từ trung tâm của bài.", "保护环境不是一句口号。", "Bǎohù huánjìng bú shì yí jù kǒuhào.", "Bảo vệ môi trường không phải chỉ là một khẩu hiệu."),
      vocab("地球", "dìqiú", "Trái Đất", "danh từ", "Hay đi với 母亲 trong tiêu đề mang sắc thái nhân hóa.", "我们只有一个地球。", "Wǒmen zhǐ yǒu yí ge dìqiú.", "Chúng ta chỉ có một Trái Đất."),
      vocab("环境", "huánjìng", "môi trường", "danh từ", "Bao gồm môi trường sống, tự nhiên, xung quanh.", "很多城市都在努力改善环境。", "Hěn duō chéngshì dōu zài nǔlì gǎishàn huánjìng.", "Nhiều thành phố đều đang nỗ lực cải thiện môi trường."),
      vocab("垃圾", "lājī", "rác", "danh từ", "Dùng trong chủ đề phân loại rác và ô nhiễm.", "请不要把垃圾随便扔在地上。", "Qǐng búyào bǎ lājī suíbiàn rēng zài dìshang.", "Xin đừng vứt rác bừa bãi trên mặt đất."),
      vocab("污染", "wūrǎn", "ô nhiễm", "danh từ/động từ", "Có thể dùng cho không khí, nước, tiếng ồn.", "空气污染会直接影响健康。", "Kōngqì wūrǎn huì zhíjiē yǐngxiǎng jiànkāng.", "Ô nhiễm không khí sẽ trực tiếp ảnh hưởng đến sức khỏe."),
      vocab("减少", "jiǎnshǎo", "giảm bớt", "động từ", "Hay đi với 使用, 浪费, 排放.", "我们应该尽量减少一次性用品的使用。", "Wǒmen yīnggāi jǐnliàng jiǎnshǎo yícìxìng yòngpǐn de shǐyòng.", "Chúng ta nên cố gắng giảm việc sử dụng đồ dùng một lần."),
      vocab("浪费", "làngfèi", "lãng phí", "động từ/danh từ", "Hay đi với 水, 电, 时间, 资源.", "浪费水和电其实就是浪费资源。", "Làngfèi shuǐ hé diàn qíshí jiùshì làngfèi zīyuán.", "Lãng phí nước và điện thực ra chính là lãng phí tài nguyên."),
      vocab("责任", "zérèn", "trách nhiệm", "danh từ", "Dùng khi nhấn mạnh nghĩa vụ cá nhân và tập thể.", "保护地球是每个人的责任。", "Bǎohù dìqiú shì měi ge rén de zérèn.", "Bảo vệ Trái Đất là trách nhiệm của mỗi người.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Nói về thói quen nhỏ hằng ngày.", [
        study("A: 你平时会特别注意环保吗？", "A: Nǐ píngshí huì tèbié zhùyì huánbǎo ma?", "A: Bình thường bạn có đặc biệt chú ý bảo vệ môi trường không?"),
        study("B: 会，比如出门我都会自己带水杯。", "B: Huì, bǐrú chūmén wǒ dōu huì zìjǐ dài shuǐbēi.", "B: Có, ví dụ ra ngoài tôi đều tự mang cốc nước."),
        study("A: 这样的习惯坚持下来很有意义。", "A: Zhèyàng de xíguàn jiānchí xiàlái hěn yǒu yìyì.", "A: Thói quen như vậy kiên trì lâu dài rất có ý nghĩa.")
      ]),
      dialogueBlock("Tình huống 2", "Bàn về vấn đề rác và ô nhiễm.", [
        study("A: 你有没有发现，公园里乱扔垃圾的人还是不少。", "A: Nǐ yǒu méiyǒu fāxiàn, gōngyuán lǐ luàn rēng lājī de rén háishi bù shǎo.", "A: Bạn có nhận ra rằng trong công viên vẫn còn khá nhiều người vứt rác bừa bãi không?"),
        study("B: 是啊，如果大家都不注意，环境就会越来越差。", "B: Shì a, rúguǒ dàjiā dōu bú zhùyì, huánjìng jiù huì yuèláiyuè chà.", "B: Đúng vậy, nếu mọi người đều không chú ý, môi trường sẽ ngày càng tệ."),
        study("A: 所以宣传和管理都很重要。", "A: Suǒyǐ xuānchuán hé guǎnlǐ dōu hěn zhòngyào.", "A: Vì vậy tuyên truyền và quản lý đều rất quan trọng.")
      ]),
      dialogueBlock("Tình huống 3", "Nói trách nhiệm cá nhân.", [
        study("A: 有人觉得一个人的力量太小了。", "A: Yǒurén juéde yí ge rén de lìliàng tài xiǎo le.", "A: Có người cảm thấy sức của một người quá nhỏ."),
        study("B: 虽然小，但每个人都做一点儿，结果就会不一样。", "B: Suīrán xiǎo, dàn měi ge rén dōu zuò yìdiǎnr, jiéguǒ jiù huì bù yíyàng.", "B: Tuy nhỏ, nhưng mỗi người đều làm một chút thì kết quả sẽ khác."),
        study("A: 对，保护地球本来就是每个人的责任。", "A: Duì, bǎohù dìqiú běnlái jiùshì měi ge rén de zérèn.", "A: Đúng, bảo vệ Trái Đất vốn là trách nhiệm của mỗi người.")
      ]),
      dialogueBlock("Tình huống 4", "Đề xuất việc có thể làm ngay.", [
        study("A: 那我们现在能做些什么？", "A: Nà wǒmen xiànzài néng zuò xiē shénme?", "A: Vậy bây giờ chúng ta có thể làm gì?"),
        study("B: 先从减少浪费开始，比如少用一次性东西，出门尽量坐公交。", "B: Xiān cóng jiǎnshǎo làngfèi kāishǐ, bǐrú shǎo yòng yícìxìng dōngxi, chūmén jǐnliàng zuò gōngjiāo.", "B: Hãy bắt đầu từ việc giảm lãng phí, ví dụ dùng ít đồ một lần hơn, ra ngoài thì cố gắng đi xe buýt."),
        study("A: 这样说就具体多了，也更容易做到。", "A: Zhèyàng shuō jiù jùtǐ duō le, yě gèng róngyì zuòdào.", "A: Nói như vậy thì cụ thể hơn nhiều, cũng dễ làm hơn.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 如果……就……", "Mẫu điều kiện rất phổ biến, nhưng ở HSK 4 cần dùng để lập luận rõ ràng hơn và gắn với hậu quả cụ thể.", study("如果大家都不注意，环境就会越来越差。", "Rúguǒ dàjiā dōu bú zhùyì, huánjìng jiù huì yuèláiyuè chà.", "Nếu mọi người đều không chú ý, môi trường sẽ ngày càng tệ."), [
        study("如果继续浪费资源，问题会更严重。", "Rúguǒ jìxù làngfèi zīyuán, wèntí huì gèng yánzhòng.", "Nếu tiếp tục lãng phí tài nguyên, vấn đề sẽ nghiêm trọng hơn."),
        study("如果我们少开车，空气可能会好一些。", "Rúguǒ wǒmen shǎo kāichē, kōngqì kěnéng huì hǎo yìxiē.", "Nếu chúng ta ít lái xe hơn, không khí có thể sẽ tốt hơn một chút."),
        study("如果孩子从小养成好习惯，长大以后更容易坚持。", "Rúguǒ háizi cóng xiǎo yǎngchéng hǎo xíguàn, zhǎngdà yǐhòu gèng róngyì jiānchí.", "Nếu trẻ em từ nhỏ hình thành thói quen tốt, sau khi lớn lên sẽ càng dễ duy trì.")
      ]),
      grammarNote("2. 从……开始", "Dùng để nói điểm bắt đầu của hành động hoặc phương án xử lý. Mẫu này rất phù hợp khi đưa ra đề xuất thực tế.", study("先从减少浪费开始。", "Xiān cóng jiǎnshǎo làngfèi kāishǐ.", "Trước tiên hãy bắt đầu từ việc giảm lãng phí."), [
        study("我们可以从垃圾分类开始做。", "Wǒmen kěyǐ cóng lājī fēnlèi kāishǐ zuò.", "Chúng ta có thể bắt đầu làm từ việc phân loại rác."),
        study("改变生活方式要从小事开始。", "Gǎibiàn shēnghuó fāngshì yào cóng xiǎoshì kāishǐ.", "Thay đổi cách sống cần bắt đầu từ việc nhỏ."),
        study("想保护环境，就从今天开始吧。", "Xiǎng bǎohù huánjìng, jiù cóng jīntiān kāishǐ ba.", "Muốn bảo vệ môi trường thì hãy bắt đầu từ hôm nay đi.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 污染", "2. 浪费", "3. 责任"], options: ["a. trách nhiệm", "b. lãng phí", "c. ô nhiễm"], answer: "1-c, 2-b, 3-a" }],
      [{ question: "Điền từ thích hợp.", prompt: ["保护___境不是一句口号。", "我们应该尽量减___一次性用品的使用。", "保护地球是每个人的责___。"], answer: "环 / 少 / 任" }],
      [{ question: "Câu nào đúng?", options: ["A. 如果大家都不注意，环境就会越来越差。", "B. 如果环境就会越来越差，大家都不注意。", "C. 大家都不注意，如果环境就会越来越差。"], answer: "A. 如果大家都不注意，环境就会越来越差。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 那我们现在能做些什么？", "B: ____________", "A: 这样说就具体多了，也更容易做到。"], answer: "B: 先从减少浪费开始，比如少用一次性东西，出门尽量坐公交。" }],
      "Tự kiểm tra: bạn có thể nói hai việc mình có thể làm ngay hôm nay để bảo vệ môi trường không?"
    ),
    quickSummary: {
      words: ["保护", "环境", "垃圾", "污染", "减少", "责任"],
      patterns: ["如果大家都不注意，环境就会越来越差。", "先从减少浪费开始。"],
      reminder: "Bài này không nên nói quá chung chung. Hãy luyện nói từ vấn đề cụ thể sang giải pháp cụ thể."
    }
  },
  15: {
    objective: "Thảo luận về giáo dục trẻ em, cách hướng dẫn con và diễn đạt quan điểm một cách cân bằng, có lý do và có ví dụ.",
    vocabulary: [
      vocab("教育", "jiàoyù", "giáo dục", "danh từ/động từ", "Từ trung tâm của bài, dùng rộng cho dạy dỗ và bồi dưỡng.", "教育孩子不能只靠批评。", "Jiàoyù háizi bùnéng zhǐ kào pīpíng.", "Giáo dục trẻ em không thể chỉ dựa vào phê bình."),
      vocab("孩子", "háizi", "trẻ em; con cái", "danh từ", "Dùng trong mọi ngữ cảnh nuôi dạy.", "每个孩子都有自己的特点。", "Měi ge háizi dōu yǒu zìjǐ de tèdiǎn.", "Mỗi đứa trẻ đều có đặc điểm riêng của mình."),
      vocab("耐心", "nàixīn", "kiên nhẫn", "danh từ/tính từ", "Yếu tố quan trọng khi hướng dẫn trẻ.", "和孩子说话的时候要有耐心。", "Hé háizi shuōhuà de shíhou yào yǒu nàixīn.", "Khi nói chuyện với trẻ phải có kiên nhẫn."),
      vocab("鼓励", "gǔlì", "khích lệ", "động từ/danh từ", "Dùng khi nhấn mạnh giáo dục tích cực.", "一句鼓励的话可能改变孩子很多。", "Yí jù gǔlì de huà kěnéng gǎibiàn háizi hěn duō.", "Một câu khích lệ có thể thay đổi đứa trẻ rất nhiều."),
      vocab("批评", "pīpíng", "phê bình", "động từ/danh từ", "Dùng đúng mức mới có hiệu quả.", "批评太多会让孩子越来越没信心。", "Pīpíng tài duō huì ràng háizi yuèláiyuè méi xìnxīn.", "Phê bình quá nhiều sẽ khiến trẻ ngày càng mất tự tin."),
      vocab("表扬", "biǎoyáng", "khen ngợi", "động từ/danh từ", "Thường đi với 鼓励 nhưng không nên dùng tùy tiện.", "做得好的时候应该及时表扬。", "Zuò de hǎo de shíhou yīnggāi jíshí biǎoyáng.", "Khi làm tốt thì nên khen ngợi kịp thời."),
      vocab("方式", "fāngshì", "cách thức", "danh từ", "Dùng để nói phương pháp giáo dục.", "不同的孩子需要不同的教育方式。", "Bùtóng de háizi xūyào bùtóng de jiàoyù fāngshì.", "Những đứa trẻ khác nhau cần những cách giáo dục khác nhau."),
      vocab("成长", "chéngzhǎng", "trưởng thành", "động từ/danh từ", "Dùng để nói quá trình lớn lên cả về tâm lý lẫn kỹ năng.", "父母应该陪着孩子一起成长。", "Fùmǔ yīnggāi péizhe háizi yìqǐ chéngzhǎng.", "Cha mẹ nên đồng hành cùng con trưởng thành.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Nói về vai trò của kiên nhẫn.", [
        study("A: 你觉得教育孩子最重要的是什么？", "A: Nǐ juéde jiàoyù háizi zuì zhòngyào de shì shénme?", "A: Bạn thấy điều quan trọng nhất khi giáo dục trẻ em là gì?"),
        study("B: 我觉得首先要有耐心。", "B: Wǒ juéde shǒuxiān yào yǒu nàixīn.", "B: Tôi thấy trước hết phải có kiên nhẫn."),
        study("A: 对，没有耐心的话，很难真正了解孩子。", "A: Duì, méiyǒu nàixīn de huà, hěn nán zhēnzhèng liǎojiě háizi.", "A: Đúng, nếu không có kiên nhẫn thì rất khó thật sự hiểu trẻ.")
      ]),
      dialogueBlock("Tình huống 2", "Bàn về khen và chê.", [
        study("A: 孩子做错事的时候，应该怎么处理？", "A: Háizi zuò cuò shì de shíhou, yīnggāi zěnme chǔlǐ?", "A: Khi trẻ làm sai, nên xử lý thế nào?"),
        study("B: 当然要指出来，不过不能只知道批评。", "B: Dāngrán yào zhǐ chūlai, búguò bùnéng zhǐ zhīdào pīpíng.", "B: Đương nhiên phải chỉ ra, nhưng không thể chỉ biết phê bình."),
        study("A: 是，做得好的时候也要及时表扬和鼓励。", "A: Shì, zuò de hǎo de shíhou yě yào jíshí biǎoyáng hé gǔlì.", "A: Đúng, khi làm tốt cũng phải kịp thời khen ngợi và khích lệ.")
      ]),
      dialogueBlock("Tình huống 3", "Nói mỗi đứa trẻ cần cách khác nhau.", [
        study("A: 你觉得所有孩子都能用同一种方法教育吗？", "A: Nǐ juéde suǒyǒu háizi dōu néng yòng tóng yì zhǒng fāngfǎ jiàoyù ma?", "A: Bạn thấy có thể dùng cùng một cách để giáo dục mọi đứa trẻ không?"),
        study("B: 不能，每个孩子的性格和接受方式都不一样。", "B: Bùnéng, měi ge háizi de xìnggé hé jiēshòu fāngshì dōu bù yíyàng.", "B: Không thể, tính cách và cách tiếp nhận của mỗi đứa trẻ đều không giống nhau."),
        study("A: 所以真正好的教育一定很灵活。", "A: Suǒyǐ zhēnzhèng hǎo de jiàoyù yídìng hěn línghuó.", "A: Vì vậy giáo dục thực sự tốt nhất định phải rất linh hoạt.")
      ]),
      dialogueBlock("Tình huống 4", "Nói về sự đồng hành cùng con.", [
        study("A: 有些父母总希望孩子马上变优秀。", "A: Yǒuxiē fùmǔ zǒng xīwàng háizi mǎshàng biàn yōuxiù.", "A: Có một số cha mẹ luôn hy vọng con cái lập tức trở nên xuất sắc."),
        study("B: 其实成长需要时间，父母更应该陪着孩子一起进步。", "B: Qíshí chéngzhǎng xūyào shíjiān, fùmǔ gèng yīnggāi péizhe háizi yìqǐ jìnbù.", "B: Thật ra trưởng thành cần thời gian, cha mẹ càng nên đồng hành cùng con tiến bộ."),
        study("A: 这才是更长久、更有力量的做法。", "A: Zhè cái shì gèng chángjiǔ, gèng yǒu lìliàng de zuòfǎ.", "A: Đó mới là cách làm lâu dài và có sức mạnh hơn.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 没有……的话，……", "Mẫu này dùng để nêu điều kiện thiếu hụt: nếu không có A thì rất khó xuất hiện kết quả B.", study("没有耐心的话，很难真正了解孩子。", "Méiyǒu nàixīn de huà, hěn nán zhēnzhèng liǎojiě háizi.", "Nếu không có kiên nhẫn thì rất khó thật sự hiểu trẻ."), [
        study("没有沟通的话，问题只会越来越多。", "Méiyǒu gōutōng de huà, wèntí zhǐ huì yuèláiyuè duō.", "Nếu không có giao tiếp, vấn đề sẽ chỉ ngày càng nhiều."),
        study("没有信任的话，孩子不愿意说心里话。", "Méiyǒu xìnrèn de huà, háizi bù yuànyì shuō xīnlǐ huà.", "Nếu không có sự tin tưởng, trẻ sẽ không muốn nói lời thật lòng."),
        study("没有合适的方法的话，教育效果不会太好。", "Méiyǒu héshì de fāngfǎ de huà, jiàoyù xiàoguǒ bú huì tài hǎo.", "Nếu không có phương pháp phù hợp, hiệu quả giáo dục sẽ không quá tốt.")
      ]),
      grammarNote("2. 做得好的时候 / 做错事的时候", "Cấu trúc động từ + 得/错 + 的时候 giúp xác định thời điểm theo kết quả hay trạng thái của hành động.", study("做得好的时候也要及时表扬。", "Zuò de hǎo de shíhou yě yào jíshí biǎoyáng.", "Khi làm tốt cũng phải kịp thời khen ngợi."), [
        study("孩子遇到困难的时候，需要更多鼓励。", "Háizi yùdào kùnnan de shíhou, xūyào gèng duō gǔlì.", "Khi trẻ gặp khó khăn, cần nhiều sự khích lệ hơn."),
        study("他说错话的时候，老师没有马上批评他。", "Tā shuō cuò huà de shíhou, lǎoshī méiyǒu mǎshàng pīpíng tā.", "Khi cậu ấy nói sai, giáo viên đã không phê bình cậu ấy ngay lập tức."),
        study("孩子表现好的时候，父母应该让他知道。", "Háizi biǎoxiàn hǎo de shíhou, fùmǔ yīnggāi ràng tā zhīdào.", "Khi trẻ thể hiện tốt, cha mẹ nên để trẻ biết điều đó.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 鼓励", "2. 批评", "3. 成长"], options: ["a. trưởng thành", "b. khích lệ", "c. phê bình"], answer: "1-b, 2-c, 3-a" }],
      [{ question: "Điền từ thích hợp.", prompt: ["教育孩子不能只靠批___。", "和孩子说话的时候要有耐___。", "不同的孩子需要不同的教育方___。"], answer: "评 / 心 / 式" }],
      [{ question: "Câu nào đúng?", options: ["A. 没有耐心的话，很难真正了解孩子。", "B. 很难真正了解孩子，没有耐心的话很。", "C. 没有耐心很难的话真正了解孩子。"], answer: "A. 没有耐心的话，很难真正了解孩子。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 孩子做错事的时候，应该怎么处理？", "B: ____________", "A: 是，做得好的时候也要及时表扬和鼓励。"], answer: "B: 当然要指出来，不过不能只知道批评。" }],
      "Tự kiểm tra: bạn có thể nói hai nguyên tắc mình cho là quan trọng nhất trong giáo dục trẻ em không?"
    ),
    quickSummary: {
      words: ["教育", "孩子", "耐心", "鼓励", "批评", "成长"],
      patterns: ["没有耐心的话，很难真正了解孩子。", "做得好的时候也要及时表扬。"],
      reminder: "Bài này cần thái độ cân bằng. Khi nói quan điểm, tránh cực đoan kiểu chỉ khen hoặc chỉ chê."
    }
  },
  16: {
    objective: "Thảo luận về cách cải thiện chất lượng sống, cân bằng công việc và đời sống cá nhân bằng ngôn ngữ HSK 4 tự nhiên hơn.",
    vocabulary: [
      vocab("美好", "měihǎo", "tốt đẹp", "tính từ", "Dùng để mô tả cuộc sống, tương lai hoặc trải nghiệm đáng mong muốn.", "只要调整一下节奏，生活就会更美好。", "Zhǐyào tiáozhěng yíxià jiézòu, shēnghuó jiù huì gèng měihǎo.", "Chỉ cần điều chỉnh lại nhịp sống một chút, cuộc sống sẽ tốt đẹp hơn."),
      vocab("平衡", "pínghéng", "cân bằng", "danh từ/động từ", "Hay dùng khi nói cân bằng công việc và nghỉ ngơi.", "工作和生活之间需要找到平衡。", "Gōngzuò hé shēnghuó zhījiān xūyào zhǎodào pínghéng.", "Giữa công việc và cuộc sống cần tìm được sự cân bằng."),
      vocab("节奏", "jiézòu", "nhịp độ", "danh từ", "Dùng để nói tốc độ sinh hoạt hoặc làm việc.", "城市生活的节奏越来越快。", "Chéngshì shēnghuó de jiézòu yuèláiyuè kuài.", "Nhịp sống thành phố ngày càng nhanh."),
      vocab("压力", "yālì", "áp lực", "danh từ", "Dùng cho công việc, học tập, cuộc sống.", "压力太大的时候，人容易忽略自己。", "Yālì tài dà de shíhou, rén róngyì hūlüè zìjǐ.", "Khi áp lực quá lớn, con người dễ bỏ quên chính mình."),
      vocab("改变", "gǎibiàn", "thay đổi", "động từ/danh từ", "Dùng khi nói cải thiện thói quen hoặc lối sống.", "有些小改变能让生活轻松很多。", "Yǒuxiē xiǎo gǎibiàn néng ràng shēnghuó qīngsōng hěn duō.", "Một số thay đổi nhỏ có thể khiến cuộc sống nhẹ nhàng hơn nhiều."),
      vocab("坚持", "jiānchí", "kiên trì", "động từ", "Đi với thói quen tốt hoặc kế hoạch lâu dài.", "真正有用的方法都需要坚持。", "Zhēnzhèng yǒuyòng de fāngfǎ dōu xūyào jiānchí.", "Những phương pháp thực sự hữu ích đều cần sự kiên trì."),
      vocab("放松", "fàngsōng", "thư giãn", "động từ/tính từ", "Dùng cho trạng thái cơ thể hoặc tinh thần.", "下班以后我会听音乐让自己放松。", "Xiàbān yǐhòu wǒ huì tīng yīnyuè ràng zìjǐ fàngsōng.", "Sau giờ làm tôi sẽ nghe nhạc để tự thư giãn."),
      vocab("习惯", "xíguàn", "thói quen", "danh từ/động từ", "Ở bài này thiên về thói quen sống lành mạnh.", "好生活往往是从好习惯开始的。", "Hǎo shēnghuó wǎngwǎng shì cóng hǎo xíguàn kāishǐ de.", "Cuộc sống tốt đẹp thường bắt đầu từ những thói quen tốt.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Nói về nhịp sống quá nhanh.", [
        study("A: 你最近看起来很累。", "A: Nǐ zuìjìn kànqilai hěn lèi.", "A: Gần đây trông bạn rất mệt."),
        study("B: 是啊，最近生活节奏太快了。", "B: Shì a, zuìjìn shēnghuó jiézòu tài kuài le.", "B: Đúng vậy, dạo này nhịp sống quá nhanh."),
        study("A: 如果一直这样，身体和心情都会受影响。", "A: Rúguǒ yìzhí zhèyàng, shēntǐ hé xīnqíng dōu huì shòu yǐngxiǎng.", "A: Nếu cứ thế này mãi, cả cơ thể lẫn tâm trạng đều sẽ bị ảnh hưởng.")
      ]),
      dialogueBlock("Tình huống 2", "Bàn về cách cải thiện cuộc sống.", [
        study("A: 那你打算怎么改变？", "A: Nà nǐ dǎsuan zěnme gǎibiàn?", "A: Vậy bạn định thay đổi thế nào?"),
        study("B: 我想先早点睡觉，再把周末留一点儿时间给自己。", "B: Wǒ xiǎng xiān zǎodiǎn shuìjiào, zài bǎ zhōumò liú yìdiǎnr shíjiān gěi zìjǐ.", "B: Tôi muốn trước hết đi ngủ sớm hơn, rồi để lại chút thời gian cuối tuần cho bản thân."),
        study("A: 这个办法很实际，而且不难开始。", "A: Zhège bànfǎ hěn shíjì, érqiě bù nán kāishǐ.", "A: Cách này rất thực tế, mà cũng không khó bắt đầu.")
      ]),
      dialogueBlock("Tình huống 3", "Nói về cân bằng công việc và cuộc sống.", [
        study("A: 你觉得工作和生活真的能平衡吗？", "A: Nǐ juéde gōngzuò hé shēnghuó zhēn de néng pínghéng ma?", "A: Bạn thấy công việc và cuộc sống thật sự có thể cân bằng không?"),
        study("B: 我觉得可以，但需要有意识地安排时间。", "B: Wǒ juéde kěyǐ, dàn xūyào yǒu yìshi de ānpái shíjiān.", "B: Tôi nghĩ là có thể, nhưng cần sắp xếp thời gian một cách có ý thức."),
        study("A: 听起来，平衡不是自然发生的。", "A: Tīngqilai, pínghéng bú shì zìrán fāshēng de.", "A: Nghe có vẻ, sự cân bằng không tự nhiên mà có.")
      ]),
      dialogueBlock("Tình huống 4", "Nhấn mạnh việc kiên trì thói quen tốt.", [
        study("A: 我也试过调整生活方式，可是总坚持不下来。", "A: Wǒ yě shìguo tiáozhěng shēnghuó fāngshì, kěshì zǒng jiānchí bu xiàlái.", "A: Tôi cũng từng thử điều chỉnh cách sống, nhưng luôn không duy trì nổi."),
        study("B: 别一下子要求太高，先从一个小习惯开始。", "B: Bié yíxiàzi yāoqiú tài gāo, xiān cóng yí ge xiǎo xíguàn kāishǐ.", "B: Đừng đòi hỏi quá cao ngay lập tức, hãy bắt đầu từ một thói quen nhỏ trước."),
        study("A: 对，能坚持下去比开始更重要。", "A: Duì, néng jiānchí xiàqù bǐ kāishǐ gèng zhòngyào.", "A: Đúng, có thể duy trì tiếp còn quan trọng hơn việc bắt đầu.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 如果……，……都会……", "Mẫu này nhấn mạnh nhiều kết quả cùng bị ảnh hưởng bởi một điều kiện hoặc nguyên nhân.", study("如果一直这样，身体和心情都会受影响。", "Rúguǒ yìzhí zhèyàng, shēntǐ hé xīnqíng dōu huì shòu yǐngxiǎng.", "Nếu cứ thế này mãi, cả cơ thể lẫn tâm trạng đều sẽ bị ảnh hưởng."), [
        study("如果休息不够，工作效率和注意力都会下降。", "Rúguǒ xiūxi bù gòu, gōngzuò xiàolǜ hé zhùyìlì dōu huì xiàjiàng.", "Nếu nghỉ ngơi không đủ, hiệu suất công việc và sức chú ý đều sẽ giảm."),
        study("如果总给自己太大压力，身体和情绪都会累。", "Rúguǒ zǒng gěi zìjǐ tài dà yālì, shēntǐ hé qíngxù dōu huì lèi.", "Nếu luôn tạo áp lực quá lớn cho bản thân, cả cơ thể lẫn cảm xúc đều sẽ mệt."),
        study("如果生活没有节奏，很多计划都会被打乱。", "Rúguǒ shēnghuó méiyǒu jiézòu, hěn duō jìhuà dōu huì bèi dǎluàn.", "Nếu cuộc sống không có nhịp độ, nhiều kế hoạch đều sẽ bị đảo lộn.")
      ]),
      grammarNote("2. 先……再…… / 从……开始", "Hai mẫu này rất hợp để nói phương án thay đổi theo từng bước, tránh nói chung chung.", study("我想先早点睡觉，再把周末留一点儿时间给自己。", "Wǒ xiǎng xiān zǎodiǎn shuìjiào, zài bǎ zhōumò liú yìdiǎnr shíjiān gěi zìjǐ.", "Tôi muốn trước hết đi ngủ sớm hơn, rồi để lại chút thời gian cuối tuần cho bản thân."), [
        study("先从一个小习惯开始，更容易坚持。", "Xiān cóng yí ge xiǎo xíguàn kāishǐ, gèng róngyì jiānchí.", "Hãy bắt đầu từ một thói quen nhỏ trước, sẽ dễ kiên trì hơn."),
        study("我们先想清楚问题，再决定怎么改变。", "Wǒmen xiān xiǎng qīngchu wèntí, zài juédìng zěnme gǎibiàn.", "Chúng ta nghĩ rõ vấn đề trước, rồi mới quyết định thay đổi thế nào."),
        study("先安排好时间，再谈平衡生活。", "Xiān ānpái hǎo shíjiān, zài tán pínghéng shēnghuó.", "Hãy sắp xếp thời gian ổn thỏa trước, rồi mới nói đến cân bằng cuộc sống.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 平衡", "2. 节奏", "3. 放松"], options: ["a. thư giãn", "b. cân bằng", "c. nhịp độ"], answer: "1-b, 2-c, 3-a" }],
      [{ question: "Điền từ thích hợp.", prompt: ["工作和生活之间需要找到平___。", "最近生活节___太快了。", "好生活往往是从好习___开始的。"], answer: "衡 / 奏 / 惯" }],
      [{ question: "Câu nào đúng?", options: ["A. 先从一个小习惯开始，更容易坚持。", "B. 更容易坚持，先从一个小习惯开始。", "C. 先一个小习惯从开始，更容易坚持。"], answer: "A. 先从一个小习惯开始，更容易坚持。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 那你打算怎么改变？", "B: ____________", "A: 这个办法很实际，而且不难开始。"], answer: "B: 我想先早点睡觉，再把周末留一点儿时间给自己。" }],
      "Tự kiểm tra: bạn có thể nói một thay đổi nhỏ có thể làm cho cuộc sống của mình tốt hơn không?"
    ),
    quickSummary: {
      words: ["美好", "平衡", "节奏", "压力", "改变", "坚持"],
      patterns: ["如果一直这样，身体和心情都会受影响。", "先从一个小习惯开始。"],
      reminder: "Bài này phù hợp để luyện nói theo hướng giải pháp: vấn đề gì, vì sao, bắt đầu sửa từ đâu."
    }
  },
  17: {
    objective: "Trao đổi về quan hệ giữa con người và thiên nhiên, phát triển cách nói nguyên nhân, hậu quả và trách nhiệm ở mức trừu tượng hơn.",
    vocabulary: [
      vocab("自然", "zìrán", "tự nhiên", "danh từ/tính từ", "Từ trung tâm của bài, thường đi với 环境, 资源, 规律.", "人类应该学会尊重自然。", "Rénlèi yīnggāi xuéhuì zūnzhòng zìrán.", "Loài người nên học cách tôn trọng tự nhiên."),
      vocab("人类", "rénlèi", "loài người", "danh từ", "Dùng khi nói ở phạm vi rộng hơn cá nhân hay xã hội nhỏ.", "人类的发展不能完全脱离自然。", "Rénlèi de fāzhǎn bùnéng wánquán tuōlí zìrán.", "Sự phát triển của loài người không thể hoàn toàn tách rời tự nhiên."),
      vocab("资源", "zīyuán", "tài nguyên", "danh từ", "Hay đi với 保护, 利用, 浪费.", "自然资源不是用不完的。", "Zìrán zīyuán bú shì yòng bu wán de.", "Tài nguyên thiên nhiên không phải là dùng mãi không hết."),
      vocab("尊重", "zūnzhòng", "tôn trọng", "động từ", "Không chỉ dùng với con người, mà còn với quy luật tự nhiên.", "只有尊重自然，才能更好地发展。", "Zhǐyǒu zūnzhòng zìrán, cáinéng gèng hǎo de fāzhǎn.", "Chỉ khi tôn trọng tự nhiên mới có thể phát triển tốt hơn."),
      vocab("破坏", "pòhuài", "phá hoại", "động từ/danh từ", "Dùng khi nói tác động tiêu cực lên môi trường.", "过度开发会破坏生态平衡。", "Guòdù kāifā huì pòhuài shēngtài pínghéng.", "Khai thác quá mức sẽ phá hoại cân bằng sinh thái."),
      vocab("生态", "shēngtài", "sinh thái", "danh từ/tính từ", "Hay gặp trong cụm 生态环境, 生态平衡.", "保护生态不是一件小事。", "Bǎohù shēngtài bú shì yí jiàn xiǎoshì.", "Bảo vệ sinh thái không phải là chuyện nhỏ."),
      vocab("影响", "yǐngxiǎng", "ảnh hưởng", "danh từ/động từ", "Ở bài này thiên về ảnh hưởng lâu dài giữa người và môi trường.", "环境的变化会影响每个人的生活。", "Huánjìng de biànhuà huì yǐngxiǎng měi ge rén de shēnghuó.", "Sự thay đổi của môi trường sẽ ảnh hưởng đến cuộc sống của mỗi người."),
      vocab("和谐", "héxié", "hài hòa", "tính từ", "Thường dùng để nói quan hệ lý tưởng giữa người và thiên nhiên.", "人与自然应该和谐相处。", "Rén yǔ zìrán yīnggāi héxié xiāngchǔ.", "Con người và tự nhiên nên chung sống hài hòa.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Nói về sự phụ thuộc của con người vào tự nhiên.", [
        study("A: 有时候人们总觉得科技能解决一切。", "A: Yǒushíhou rénmen zǒng juéde kējì néng jiějué yíqiè.", "A: Đôi khi mọi người luôn cảm thấy công nghệ có thể giải quyết mọi thứ."),
        study("B: 但人类的发展还是离不开自然。", "B: Dàn rénlèi de fāzhǎn háishi líbukāi zìrán.", "B: Nhưng sự phát triển của loài người vẫn không thể tách rời tự nhiên."),
        study("A: 对，我们的生活本来就依靠土地、水和空气。", "A: Duì, wǒmen de shēnghuó běnlái jiù yīkào tǔdì, shuǐ hé kōngqì.", "A: Đúng, cuộc sống của chúng ta vốn dĩ dựa vào đất đai, nước và không khí.")
      ]),
      dialogueBlock("Tình huống 2", "Bàn về hậu quả của khai thác quá mức.", [
        study("A: 为什么现在很多人开始担心生态问题？", "A: Wèishénme xiànzài hěn duō rén kāishǐ dānxīn shēngtài wèntí?", "A: Vì sao hiện nay nhiều người bắt đầu lo lắng về vấn đề sinh thái?"),
        study("B: 因为过度开发和浪费资源会带来长期影响。", "B: Yīnwèi guòdù kāifā hé làngfèi zīyuán huì dàilái chángqī yǐngxiǎng.", "B: Vì khai thác quá mức và lãng phí tài nguyên sẽ mang lại ảnh hưởng lâu dài."),
        study("A: 这些影响最后还是会回到人类自己身上。", "A: Zhèxiē yǐngxiǎng zuìhòu háishi huì huídào rénlèi zìjǐ shēnshang.", "A: Những ảnh hưởng này cuối cùng vẫn sẽ quay lại chính loài người.")
      ]),
      dialogueBlock("Tình huống 3", "Nói trách nhiệm và thái độ.", [
        study("A: 那我们应该怎么看待自然？", "A: Nà wǒmen yīnggāi zěnme kàndài zìrán?", "A: Vậy chúng ta nên nhìn nhận tự nhiên thế nào?"),
        study("B: 我觉得最重要的是尊重，而不是只想着利用。", "B: Wǒ juéde zuì zhòngyào de shì zūnzhòng, ér bú shì zhǐ xiǎngzhe lìyòng.", "B: Tôi thấy quan trọng nhất là tôn trọng, chứ không phải chỉ nghĩ đến việc khai thác."),
        study("A: 只有这样，人与自然才能更和谐。", "A: Zhǐyǒu zhèyàng, rén yǔ zìrán cái néng gèng héxié.", "A: Chỉ như vậy, con người và tự nhiên mới có thể hài hòa hơn.")
      ]),
      dialogueBlock("Tình huống 4", "Liên hệ đến hành động thực tế.", [
        study("A: 听起来这些道理都很大，可是跟我们的日常生活有关系吗？", "A: Tīngqilai zhèxiē dàolǐ dōu hěn dà, kěshì gēn wǒmen de rìcháng shēnghuó yǒu guānxi ma?", "A: Nghe có vẻ những đạo lý này đều rất lớn, nhưng có liên quan đến cuộc sống thường ngày của chúng ta không?"),
        study("B: 当然有，比如节约资源、减少浪费，都是具体行动。", "B: Dāngrán yǒu, bǐrú jiéyuē zīyuán, jiǎnshǎo làngfèi, dōu shì jùtǐ xíngdòng.", "B: Đương nhiên là có, ví dụ tiết kiệm tài nguyên, giảm lãng phí, đều là hành động cụ thể."),
        study("A: 原来人与自然的关系离我们并不远。", "A: Yuánlái rén yǔ zìrán de guānxi lí wǒmen bìng bù yuǎn.", "A: Hóa ra quan hệ giữa con người và tự nhiên không hề xa chúng ta.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 离不开 / 依靠", "离不开 nhấn mạnh không thể tách rời; 依靠 nhấn mạnh dựa vào điều gì để tồn tại hoặc phát triển.", study("人类的发展还是离不开自然。", "Rénlèi de fāzhǎn háishi líbukāi zìrán.", "Sự phát triển của loài người vẫn không thể tách rời tự nhiên."), [
        study("现代生活离不开能源和技术。", "Xiàndài shēnghuó líbukāi néngyuán hé jìshù.", "Cuộc sống hiện đại không thể tách rời năng lượng và công nghệ."),
        study("农业一直依靠土地和水。", "Nóngyè yìzhí yīkào tǔdì hé shuǐ.", "Nông nghiệp luôn dựa vào đất đai và nước."),
        study("一个社会的发展不能只依靠速度。", "Yí ge shèhuì de fāzhǎn bùnéng zhǐ yīkào sùdù.", "Sự phát triển của một xã hội không thể chỉ dựa vào tốc độ.")
      ]),
      grammarNote("2. 只有……才……", "Mẫu này nhấn mạnh điều kiện cần. Chỉ khi có điều kiện trước thì kết quả sau mới xuất hiện.", study("只有尊重自然，才能更好地发展。", "Zhǐyǒu zūnzhòng zìrán, cáinéng gèng hǎo de fāzhǎn.", "Chỉ khi tôn trọng tự nhiên mới có thể phát triển tốt hơn."), [
        study("只有减少破坏，生态才会慢慢恢复。", "Zhǐyǒu jiǎnshǎo pòhuài, shēngtài cái huì mànmàn huīfù.", "Chỉ khi giảm sự phá hoại, sinh thái mới dần dần hồi phục."),
        study("只有每个人都行动起来，变化才会真正出现。", "Zhǐyǒu měi ge rén dōu xíngdòng qǐlai, biànhuà cái huì zhēnzhèng chūxiàn.", "Chỉ khi mọi người đều hành động, thay đổi mới thật sự xuất hiện."),
        study("只有理解问题的根源，才可能找到办法。", "Zhǐyǒu lǐjiě wèntí de gēnyuán, cái kěnéng zhǎodào bànfǎ.", "Chỉ khi hiểu gốc rễ của vấn đề mới có thể tìm ra cách.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 资源", "2. 破坏", "3. 和谐"], options: ["a. hài hòa", "b. tài nguyên", "c. phá hoại"], answer: "1-b, 2-c, 3-a" }],
      [{ question: "Điền từ thích hợp.", prompt: ["人类的发展还是离不开自___。", "过度开发会破坏生___平衡。", "只有尊重自然，___能更好地发展。"], answer: "然 / 态 / 才" }],
      [{ question: "Câu nào đúng?", options: ["A. 只有尊重自然，人与自然才能更和谐。", "B. 只有人与自然才能更和谐，尊重自然。", "C. 尊重自然，只有人与自然才能更和谐。"], answer: "A. 只有尊重自然，人与自然才能更和谐。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 那我们应该怎么看待自然？", "B: ____________", "A: 只有这样，人与自然才能更和谐。"], answer: "B: 我觉得最重要的是尊重，而不是只想着利用。" }],
      "Tự kiểm tra: bạn có thể dùng 只有……才…… để nói điều kiện cần cho việc bảo vệ thiên nhiên không?"
    ),
    quickSummary: {
      words: ["自然", "人类", "资源", "尊重", "生态", "和谐"],
      patterns: ["人类的发展还是离不开自然。", "只有尊重自然，才能更好地发展。"],
      reminder: "Bài này cần tư duy quan hệ hai chiều: con người ảnh hưởng thiên nhiên, và thiên nhiên cũng ảnh hưởng lại con người."
    }
  },
  18: {
    objective: "Thảo luận về công nghệ, tiện ích hiện đại và tác động xã hội của tiến bộ kỹ thuật bằng lập luận rõ ràng hơn.",
    vocabulary: [
      vocab("科技", "kējì", "khoa học công nghệ", "danh từ", "Chủ đề trung tâm của bài 18.", "现代科技已经改变了很多人的生活方式。", "Xiàndài kējì yǐjīng gǎibiàn le hěn duō rén de shēnghuó fāngshì.", "Khoa học công nghệ hiện đại đã thay đổi cách sống của rất nhiều người."),
      vocab("发展", "fāzhǎn", "phát triển", "động từ/danh từ", "Dùng trong công nghệ, kinh tế, xã hội.", "科技发展得越快，人们越需要适应变化。", "Kējì fāzhǎn de yuè kuài, rénmen yuè xūyào shìyìng biànhuà.", "Công nghệ phát triển càng nhanh, con người càng cần thích ứng với thay đổi."),
      vocab("方便", "fāngbiàn", "thuận tiện", "tính từ/động từ", "Hay dùng để nói lợi ích trực tiếp của công nghệ.", "手机支付让生活方便了很多。", "Shǒujī zhīfù ràng shēnghuó fāngbiàn le hěn duō.", "Thanh toán bằng điện thoại khiến cuộc sống thuận tiện hơn rất nhiều."),
      vocab("效率", "xiàolǜ", "hiệu suất", "danh từ", "Dùng khi nói công nghệ giúp tiết kiệm thời gian.", "技术进步提高了工作效率。", "Jìshù jìnbù tígāo le gōngzuò xiàolǜ.", "Tiến bộ kỹ thuật đã nâng cao hiệu suất công việc."),
      vocab("适应", "shìyìng", "thích ứng", "động từ", "Dùng khi con người phải theo kịp thay đổi mới.", "很多人还在努力适应新的工作方式。", "Hěn duō rén hái zài nǔlì shìyìng xīn de gōngzuò fāngshì.", "Nhiều người vẫn đang cố gắng thích ứng với cách làm việc mới."),
      vocab("交流", "jiāoliú", "giao lưu; giao tiếp", "động từ/danh từ", "Dùng cho giao tiếp giữa người với người hoặc giữa các khu vực.", "网络让远距离交流变得更容易。", "Wǎngluò ràng yuǎn jùlí jiāoliú biàn de gèng róngyì.", "Mạng internet khiến giao tiếp từ xa trở nên dễ hơn."),
      vocab("影响", "yǐngxiǎng", "ảnh hưởng", "danh từ/động từ", "Ở bài này nói cả tích cực lẫn tiêu cực.", "科技对世界的影响越来越深。", "Kējì duì shìjiè de yǐngxiǎng yuèláiyuè shēn.", "Ảnh hưởng của công nghệ đối với thế giới ngày càng sâu."),
      vocab("依赖", "yīlài", "phụ thuộc", "động từ/danh từ", "Thường dùng để cảnh báo mặt trái của tiện ích công nghệ.", "如果太依赖手机，人会越来越少思考。", "Rúguǒ tài yīlài shǒujī, rén huì yuèláiyuè shǎo sīkǎo.", "Nếu quá phụ thuộc vào điện thoại, con người sẽ ngày càng suy nghĩ ít đi.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Nói về thay đổi do công nghệ mang lại.", [
        study("A: 你有没有觉得这几年生活变化特别快？", "A: Nǐ yǒu méiyǒu juéde zhè jǐ nián shēnghuó biànhuà tèbié kuài?", "A: Bạn có thấy mấy năm nay cuộc sống thay đổi đặc biệt nhanh không?"),
        study("B: 有，很多变化都是科技带来的。", "B: Yǒu, hěn duō biànhuà dōu shì kējì dàilái de.", "B: Có, rất nhiều thay đổi đều do công nghệ mang lại."),
        study("A: 比如以前要排队做的事，现在手机上就能完成。", "A: Bǐrú yǐqián yào páiduì zuò de shì, xiànzài shǒujī shàng jiù néng wánchéng.", "A: Ví dụ những việc trước đây phải xếp hàng làm, bây giờ chỉ cần làm trên điện thoại là xong.")
      ]),
      dialogueBlock("Tình huống 2", "Nói lợi ích thực tế.", [
        study("A: 你觉得科技最大的好处是什么？", "A: Nǐ juéde kējì zuì dà de hǎochu shì shénme?", "A: Bạn thấy lợi ích lớn nhất của công nghệ là gì?"),
        study("B: 我觉得是提高效率，也让交流更方便。", "B: Wǒ juéde shì tígāo xiàolǜ, yě ràng jiāoliú gèng fāngbiàn.", "B: Tôi thấy là nâng cao hiệu suất, đồng thời khiến giao tiếp thuận tiện hơn."),
        study("A: 对，尤其是在工作和学习上特别明显。", "A: Duì, yóuqí shì zài gōngzuò hé xuéxí shàng tèbié míngxiǎn.", "A: Đúng, đặc biệt là trong công việc và học tập thì rất rõ.")
      ]),
      dialogueBlock("Tình huống 3", "Bàn về mặt trái.", [
        study("A: 不过科技是不是也带来了一些问题？", "A: Búguò kējì shì bú shì yě dàilái le yìxiē wèntí?", "A: Nhưng liệu công nghệ có mang đến một số vấn đề không?"),
        study("B: 当然，比如有的人越来越依赖手机，面对面交流反而少了。", "B: Dāngrán, bǐrú yǒu de rén yuèláiyuè yīlài shǒujī, miànduìmiàn jiāoliú fǎn'ér shǎo le.", "B: Đương nhiên, ví dụ có người ngày càng phụ thuộc vào điện thoại, còn giao tiếp trực tiếp lại ít đi."),
        study("A: 所以关键不是科技本身，而是我们怎么使用。", "A: Suǒyǐ guānjiàn bú shì kējì běnshēn, érshì wǒmen zěnme shǐyòng.", "A: Vì vậy điểm mấu chốt không phải là bản thân công nghệ, mà là chúng ta sử dụng nó thế nào.")
      ]),
      dialogueBlock("Tình huống 4", "Nói về khả năng thích ứng.", [
        study("A: 有些长辈觉得新技术太复杂。", "A: Yǒuxiē zhǎngbèi juéde xīn jìshù tài fùzá.", "A: Có một số người lớn tuổi cảm thấy công nghệ mới quá phức tạp."),
        study("B: 是，因为科技发展太快，很多人还来不及适应。", "B: Shì, yīnwèi kējì fāzhǎn tài kuài, hěn duō rén hái láibují shìyìng.", "B: Đúng, vì công nghệ phát triển quá nhanh, nhiều người còn chưa kịp thích ứng."),
        study("A: 所以技术进步也应该考虑不同人群的需要。", "A: Suǒyǐ jìshù jìnbù yě yīnggāi kǎolǜ bùtóng rénqún de xūyào.", "A: Vì vậy tiến bộ kỹ thuật cũng nên cân nhắc nhu cầu của các nhóm người khác nhau.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 越……越……", "Mẫu này diễn đạt hai mặt thay đổi song song. HSK 4 dùng nhiều để nêu xu hướng xã hội.", study("科技发展得越快，人们越需要适应变化。", "Kējì fāzhǎn de yuè kuài, rénmen yuè xūyào shìyìng biànhuà.", "Công nghệ phát triển càng nhanh, con người càng cần thích ứng với thay đổi."), [
        study("生活节奏越快，人们越希望提高效率。", "Shēnghuó jiézòu yuè kuài, rénmen yuè xīwàng tígāo xiàolǜ.", "Nhịp sống càng nhanh, con người càng muốn nâng cao hiệu suất."),
        study("技术越先进，使用起来不一定越简单。", "Jìshù yuè xiānjìn, shǐyòng qǐlai bù yídìng yuè jiǎndān.", "Kỹ thuật càng tiên tiến, dùng chưa chắc đã càng đơn giản."),
        study("人越依赖工具，越需要学会控制自己。", "Rén yuè yīlài gōngjù, yuè xūyào xuéhuì kòngzhì zìjǐ.", "Con người càng phụ thuộc vào công cụ, càng cần học cách kiểm soát bản thân.")
      ]),
      grammarNote("2. 关键不是……而是……", "Mẫu này giúp chốt luận điểm: trọng tâm không nằm ở A mà nằm ở B.", study("关键不是科技本身，而是我们怎么使用。", "Guānjiàn bú shì kējì běnshēn, érshì wǒmen zěnme shǐyòng.", "Điểm mấu chốt không phải là bản thân công nghệ, mà là chúng ta sử dụng nó thế nào."), [
        study("问题不是工具太多，而是方法不对。", "Wèntí bú shì gōngjù tài duō, érshì fāngfǎ bú duì.", "Vấn đề không phải là công cụ quá nhiều, mà là phương pháp không đúng."),
        study("重点不是学得快，而是学得扎实。", "Zhòngdiǎn bú shì xué de kuài, érshì xué de zhāshi.", "Trọng điểm không phải là học nhanh, mà là học chắc."),
        study("影响世界的不是单一技术，而是技术背后的选择。", "Yǐngxiǎng shìjiè de bú shì dānyī jìshù, érshì jìshù bèihòu de xuǎnzé.", "Thứ ảnh hưởng đến thế giới không phải là một công nghệ đơn lẻ, mà là lựa chọn phía sau công nghệ.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 科技", "2. 效率", "3. 依赖"], options: ["a. hiệu suất", "b. khoa học công nghệ", "c. phụ thuộc"], answer: "1-b, 2-a, 3-c" }],
      [{ question: "Điền từ thích hợp.", prompt: ["手机支付让生活方___了很多。", "科技发展得越快，人们越需要适___变化。", "科技对世界的影___越来越深。"], answer: "便 / 应 / 响" }],
      [{ question: "Câu nào đúng?", options: ["A. 关键不是科技本身，而是我们怎么使用。", "B. 关键不是我们怎么使用，而是科技本身怎么。", "C. 关键而是不是科技本身，我们怎么使用。"], answer: "A. 关键不是科技本身，而是我们怎么使用。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 不过科技是不是也带来了一些问题？", "B: ____________", "A: 所以关键不是科技本身，而是我们怎么使用。"], answer: "B: 当然，比如有的人越来越依赖手机，面对面交流反而少了。" }],
      "Tự kiểm tra: bạn có thể nói một lợi ích và một mặt trái của công nghệ bằng hai câu ngắn không?"
    ),
    quickSummary: {
      words: ["科技", "发展", "效率", "适应", "交流", "依赖"],
      patterns: ["科技发展得越快，人们越需要适应变化。", "关键不是科技本身，而是我们怎么使用。"],
      reminder: "Bài này cần trình bày hai mặt của vấn đề. Đừng chỉ khen công nghệ hoặc chỉ phê phán nó."
    }
  },
  19: {
    objective: "Diễn đạt cảm nhận về những điều nhỏ trong đời sống, từ hương vị món ăn đến cảm xúc gia đình và ký ức cá nhân.",
    vocabulary: [
      vocab("味道", "wèidào", "hương vị; mùi vị; dư vị", "danh từ", "Ở bài này dùng cả nghĩa món ăn lẫn dư vị cuộc sống.", "这道菜让我想起了小时候的味道。", "Zhè dào cài ràng wǒ xiǎngqǐ le xiǎoshíhou de wèidào.", "Món ăn này khiến tôi nhớ lại hương vị của thời thơ ấu."),
      vocab("熟悉", "shúxī", "quen thuộc", "tính từ/động từ", "Dùng để nói mùi vị, âm thanh, nơi chốn quen thuộc.", "一闻到这个味道，我就觉得很熟悉。", "Yì wéndào zhège wèidào, wǒ jiù juéde hěn shúxī.", "Vừa ngửi thấy mùi này, tôi đã thấy rất quen thuộc."),
      vocab("记忆", "jìyì", "ký ức", "danh từ/động từ", "Hay đi với 留下, 唤起.", "有些味道会把人的记忆一下子带回来。", "Yǒuxiē wèidào huì bǎ rén de jìyì yíxiàzi dài huílai.", "Có những mùi vị sẽ lập tức mang ký ức của con người trở lại."),
      vocab("怀念", "huáiniàn", "hoài niệm, nhớ nhung", "động từ", "Dùng để nhớ người, nơi chốn, thời gian cũ.", "离开家以后，我常常怀念妈妈做的饭。", "Líkāi jiā yǐhòu, wǒ chángcháng huáiniàn māma zuò de fàn.", "Sau khi rời nhà, tôi thường nhớ những món mẹ nấu."),
      vocab("简单", "jiǎndān", "đơn giản", "tính từ", "Bài này nhấn mạnh cái giản dị trong đời sống.", "最让人怀念的往往是最简单的味道。", "Zuì ràng rén huáiniàn de wǎngwǎng shì zuì jiǎndān de wèidào.", "Điều khiến người ta nhớ nhất thường là hương vị giản dị nhất."),
      vocab("温暖", "wēnnuǎn", "ấm áp", "tính từ/danh từ", "Dùng cả cho cảm giác vật lý lẫn cảm xúc.", "那个味道里有一种家的温暖。", "Nàge wèidào lǐ yǒu yì zhǒng jiā de wēnnuǎn.", "Trong hương vị đó có một sự ấm áp của gia đình."),
      vocab("平常", "píngcháng", "bình thường", "tính từ", "Dùng để nói những điều quen thuộc nhưng đáng quý.", "平常的日子里也有特别的味道。", "Píngcháng de rìzi lǐ yě yǒu tèbié de wèidào.", "Trong những ngày bình thường cũng có hương vị rất đặc biệt."),
      vocab("感动", "gǎndòng", "cảm động", "động từ/tính từ", "Thường xuất hiện khi nói về ký ức cá nhân.", "真正让人感动的，不一定是复杂的东西。", "Zhēnzhèng ràng rén gǎndòng de, bù yídìng shì fùzá de dōngxi.", "Điều thực sự làm người ta cảm động chưa chắc đã là thứ phức tạp.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Nhắc đến hương vị tuổi thơ.", [
        study("A: 这汤的味道怎么样？", "A: Zhè tāng de wèidào zěnmeyàng?", "A: Hương vị của món canh này thế nào?"),
        study("B: 很简单，可是一喝就让我想起小时候。", "B: Hěn jiǎndān, kěshì yì hē jiù ràng wǒ xiǎngqǐ xiǎoshíhou.", "B: Rất đơn giản, nhưng vừa uống là khiến tôi nhớ đến thời thơ ấu."),
        study("A: 看来有些味道真的会带着记忆回来。", "A: Kànlai yǒuxiē wèidào zhēn de huì dàizhe jìyì huílai.", "A: Có vẻ một số hương vị thật sự sẽ mang ký ức quay trở lại.")
      ]),
      dialogueBlock("Tình huống 2", "Nói món ăn quen thuộc có giá trị tình cảm.", [
        study("A: 你最怀念的味道是什么？", "A: Nǐ zuì huáiniàn de wèidào shì shénme?", "A: Hương vị bạn nhớ nhất là gì?"),
        study("B: 其实不是多贵的菜，就是妈妈以前常做的家常饭。", "B: Qíshí bú shì duō guì de cài, jiùshì māma yǐqián cháng zuò de jiāchángfàn.", "B: Thật ra không phải món gì đắt tiền, chỉ là cơm nhà mẹ thường nấu trước đây."),
        study("A: 越平常的东西，有时候越让人感动。", "A: Yuè píngcháng de dōngxi, yǒushíhou yuè ràng rén gǎndòng.", "A: Đồ vật càng bình thường, đôi khi càng khiến người ta cảm động.")
      ]),
      dialogueBlock("Tình huống 3", "Nhấn mạnh sự quen thuộc và ấm áp.", [
        study("A: 为什么很多人一闻到某个味道就会突然安静下来？", "A: Wèishénme hěn duō rén yì wéndào mǒu ge wèidào jiù huì tūrán ānjìng xiàlái?", "A: Vì sao nhiều người vừa ngửi thấy một mùi nào đó là bỗng nhiên trở nên im lặng?"),
        study("B: 因为那个味道太熟悉了，里面可能有家的温暖。", "B: Yīnwèi nàge wèidào tài shúxī le, lǐmiàn kěnéng yǒu jiā de wēnnuǎn.", "B: Vì mùi vị đó quá quen thuộc, bên trong có thể chứa sự ấm áp của gia đình."),
        study("A: 原来味道不只是味道，也是感情。", "A: Yuánlái wèidào bú zhǐshì wèidào, yě shì gǎnqíng.", "A: Hóa ra hương vị không chỉ là hương vị, mà còn là tình cảm.")
      ]),
      dialogueBlock("Tình huống 4", "Liên hệ cuộc sống hiện tại.", [
        study("A: 现在生活这么快，你还会认真感受这些小事吗？", "A: Xiànzài shēnghuó zhème kuài, nǐ hái huì rènzhēn gǎnshòu zhèxiē xiǎoshì ma?", "A: Bây giờ cuộc sống nhanh như vậy, bạn vẫn còn cảm nhận nghiêm túc những việc nhỏ này chứ?"),
        study("B: 会，因为这些平常的小事最能提醒我什么叫生活。", "B: Huì, yīnwèi zhèxiē píngcháng de xiǎoshì zuì néng tíxǐng wǒ shénme jiào shēnghuó.", "B: Có, vì chính những việc nhỏ bình thường này nhắc tôi rõ nhất thế nào là cuộc sống."),
        study("A: 说得真好，生活的味道可能就在这些细节里。", "A: Shuō de zhēn hǎo, shēnghuó de wèidào kěnéng jiù zài zhèxiē xìjié lǐ.", "A: Nói thật hay, hương vị của cuộc sống có lẽ nằm ngay trong những chi tiết này.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 一……就……", "Mẫu này nhấn mạnh phản ứng xảy ra rất nhanh ngay sau hành động đầu tiên.", study("一闻到这个味道，我就觉得很熟悉。", "Yì wéndào zhège wèidào, wǒ jiù juéde hěn shúxī.", "Vừa ngửi thấy mùi này, tôi đã thấy rất quen thuộc."), [
        study("一听到那首歌，我就想起大学时候。", "Yì tīngdào nà shǒu gē, wǒ jiù xiǎngqǐ dàxué shíhou.", "Vừa nghe bài hát đó, tôi đã nhớ đến thời đại học."),
        study("一回到家，我就闻到了熟悉的饭菜香。", "Yì huídào jiā, wǒ jiù wéndào le shúxī de fàncài xiāng.", "Vừa về đến nhà, tôi đã ngửi thấy mùi cơm canh quen thuộc."),
        study("一想到这件事，她就忍不住笑。", "Yì xiǎngdào zhè jiàn shì, tā jiù rěnbuzhù xiào.", "Vừa nghĩ đến chuyện đó là cô ấy lại không nhịn được cười.")
      ]),
      grammarNote("2. 越……越…… / 不只是……也是……", "Hai mẫu này giúp diễn đạt cảm xúc tinh tế hơn: một bên là xu hướng tăng dần, một bên là mở rộng ý nghĩa của sự vật.", study("越平常的东西，有时候越让人感动。", "Yuè píngcháng de dōngxi, yǒushíhou yuè ràng rén gǎndòng.", "Đồ vật càng bình thường, đôi khi càng khiến người ta cảm động."), [
        study("越简单的味道，越容易让人怀念。", "Yuè jiǎndān de wèidào, yuè róngyì ràng rén huáiniàn.", "Hương vị càng đơn giản, càng dễ khiến người ta hoài niệm."),
        study("味道不只是味道，也是记忆。", "Wèidào bú zhǐshì wèidào, yě shì jìyì.", "Hương vị không chỉ là hương vị, mà còn là ký ức."),
        study("家常饭不只是食物，也是家的感觉。", "Jiāchángfàn bú zhǐshì shíwù, yě shì jiā de gǎnjué.", "Cơm nhà không chỉ là thức ăn, mà còn là cảm giác của gia đình.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 记忆", "2. 怀念", "3. 温暖"], options: ["a. ấm áp", "b. ký ức", "c. hoài niệm"], answer: "1-b, 2-c, 3-a" }],
      [{ question: "Điền từ thích hợp.", prompt: ["有些味道会把人的记___一下子带回来。", "离开家以后，我常常怀___妈妈做的饭。", "那个味道里有一种家的温___。"], answer: "忆 / 念 / 暖" }],
      [{ question: "Câu nào đúng?", options: ["A. 一闻到这个味道，我就觉得很熟悉。", "B. 我就觉得很熟悉，一闻到这个味道。", "C. 一闻到很熟悉，我就觉得这个味道。"], answer: "A. 一闻到这个味道，我就觉得很熟悉。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 你最怀念的味道是什么？", "B: ____________", "A: 越平常的东西，有时候越让人感动。"], answer: "B: 其实不是多贵的菜，就是妈妈以前常做的家常饭。" }],
      "Tự kiểm tra: bạn có thể nói một hương vị khiến mình nhớ nhà bằng 2 đến 3 câu không?"
    ),
    quickSummary: {
      words: ["味道", "熟悉", "记忆", "怀念", "温暖", "感动"],
      patterns: ["一闻到这个味道，我就觉得很熟悉。", "味道不只是味道，也是记忆。"],
      reminder: "Bài này cần nói chậm hơn và có cảm xúc hơn. Mục tiêu không phải kể món ăn, mà là kể ý nghĩa đằng sau nó."
    }
  },
  20: {
    objective: "Nói về hành trình, cảnh vật trên đường và những điều con người học được từ trải nghiệm di chuyển, quan sát và trưởng thành.",
    vocabulary: [
      vocab("风景", "fēngjǐng", "phong cảnh", "danh từ", "Không chỉ là cảnh vật nhìn thấy mà còn có thể mang ý nghĩa trải nghiệm.", "旅行中最难忘的不一定是目的地，也可能是路上的风景。", "Lǚxíng zhōng zuì nánwàng de bù yídìng shì mùdìdì, yě kěnéng shì lùshang de fēngjǐng.", "Điều khó quên nhất trong chuyến đi chưa chắc là điểm đến, mà cũng có thể là phong cảnh trên đường."),
      vocab("旅途", "lǚtú", "hành trình", "danh từ", "Dùng thay cho 旅行 khi nhấn mạnh quá trình trên đường.", "这次旅途虽然不长，但很有意义。", "Zhè cì lǚtú suīrán bù cháng, dàn hěn yǒu yìyì.", "Hành trình lần này tuy không dài nhưng rất có ý nghĩa."),
      vocab("目的地", "mùdìdì", "điểm đến", "danh từ", "Hay đi với 到达, 不是唯一重要的东西.", "有时候目的地并不是最重要的。", "Yǒushíhou mùdìdì bìng bú shì zuì zhòngyào de.", "Đôi khi điểm đến không phải là điều quan trọng nhất."),
      vocab("经历", "jīnglì", "trải nghiệm", "danh từ/động từ", "Dùng để nói điều đã trải qua trong chuyến đi.", "正是这些经历让人慢慢成熟。", "Zhèng shì zhèxiē jīnglì ràng rén mànmàn chéngshú.", "Chính những trải nghiệm này khiến con người dần trưởng thành."),
      vocab("陌生", "mòshēng", "xa lạ", "tính từ", "Hay dùng để nói người, nơi hoặc cảm giác ban đầu.", "刚到一个陌生的地方，心里总会有点儿紧张。", "Gāng dào yí ge mòshēng de dìfang, xīnli zǒng huì yǒudiǎnr jǐnzhāng.", "Vừa đến một nơi xa lạ, trong lòng luôn có chút căng thẳng."),
      vocab("熟悉", "shúxī", "quen thuộc", "tính từ/động từ", "Trong bài này đối lập với 陌生.", "走着走着，那个城市也慢慢变得熟悉了。", "Zǒuzhe zǒuzhe, nàge chéngshì yě mànmàn biàn de shúxī le.", "Đi mãi đi mãi, thành phố đó cũng dần trở nên quen thuộc."),
      vocab("收获", "shōuhuò", "thu hoạch, điều nhận được", "danh từ/động từ", "Dùng để nói kết quả tinh thần của chuyến đi.", "这次旅行最大的收获不是照片，而是看法的变化。", "Zhè cì lǚxíng zuì dà de shōuhuò bú shì zhàopiàn, érshì kànfǎ de biànhuà.", "Thu hoạch lớn nhất của chuyến đi này không phải là ảnh chụp, mà là sự thay đổi trong cách nhìn."),
      vocab("途中", "túzhōng", "trên đường, trong quá trình đi", "danh từ/trạng ngữ", "Dùng khi mô tả điều xảy ra giữa hành trình.", "途中遇到的问题也让我们学到了很多。", "Túzhōng yùdào de wèntí yě ràng wǒmen xuédào le hěn duō.", "Những vấn đề gặp phải trên đường cũng khiến chúng tôi học được rất nhiều.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Nói điểm đến và quá trình trên đường.", [
        study("A: 这次旅行你最喜欢哪儿？", "A: Zhè cì lǚxíng nǐ zuì xǐhuan nǎr?", "A: Chuyến đi lần này bạn thích nơi nào nhất?"),
        study("B: 其实最让我难忘的不是目的地，而是路上的风景。", "B: Qíshí zuì ràng wǒ nánwàng de bú shì mùdìdì, érshì lùshang de fēngjǐng.", "B: Thật ra điều khiến tôi khó quên nhất không phải là điểm đến, mà là phong cảnh trên đường."),
        study("A: 看来这次旅途给你的感受很深。", "A: Kànlai zhè cì lǚtú gěi nǐ de gǎnshòu hěn shēn.", "A: Có vẻ hành trình lần này đã để lại cảm nhận rất sâu cho bạn.")
      ]),
      dialogueBlock("Tình huống 2", "Mô tả cảm giác từ xa lạ đến quen thuộc.", [
        study("A: 第一次去那个地方的时候，你紧张吗？", "A: Dìyī cì qù nàge dìfang de shíhou, nǐ jǐnzhāng ma?", "A: Lần đầu đến nơi đó, bạn có căng thẳng không?"),
        study("B: 有一点儿，毕竟一开始什么都很陌生。", "B: Yǒu yìdiǎnr, bìjìng yì kāishǐ shénme dōu hěn mòshēng.", "B: Có một chút, dù sao lúc đầu mọi thứ đều rất xa lạ."),
        study("A: 不过走着走着，也就慢慢熟悉了。", "A: Búguò zǒuzhe zǒuzhe, yě jiù mànmàn shúxī le.", "A: Nhưng đi dần đi dần thì cũng chậm rãi trở nên quen thuộc thôi.")
      ]),
      dialogueBlock("Tình huống 3", "Nói về điều học được trên đường.", [
        study("A: 这一路上你最大的收获是什么？", "A: Zhè yí lùshang nǐ zuì dà de shōuhuò shì shénme?", "A: Trên suốt quãng đường này, thu hoạch lớn nhất của bạn là gì?"),
        study("B: 我发现看世界的时候，也是在重新认识自己。", "B: Wǒ fāxiàn kàn shìjiè de shíhou, yě shì zài chóngxīn rènshi zìjǐ.", "B: Tôi nhận ra rằng khi nhìn thế giới, cũng là lúc đang nhận thức lại chính mình."),
        study("A: 这句话听起来很有意思，也很有力量。", "A: Zhè jù huà tīngqilai hěn yǒu yìsi, yě hěn yǒu lìliàng.", "A: Câu này nghe vừa thú vị vừa có sức nặng.")
      ]),
      dialogueBlock("Tình huống 4", "Liên hệ khó khăn và trưởng thành.", [
        study("A: 旅途中遇到问题的时候，你会觉得烦吗？", "A: Lǚtú zhōng yùdào wèntí de shíhou, nǐ huì juéde fán ma?", "A: Khi gặp vấn đề trong hành trình, bạn có thấy phiền không?"),
        study("B: 当时会，可是后来发现正是这些经历让我成长了。", "B: Dāngshí huì, kěshì hòulái fāxiàn zhèng shì zhèxiē jīnglì ràng wǒ chéngzhǎng le.", "B: Lúc đó thì có, nhưng sau này tôi nhận ra chính những trải nghiệm ấy đã khiến tôi trưởng thành."),
        study("A: 所以路上的风景不只是看到的，也是经历到的。", "A: Suǒyǐ lùshang de fēngjǐng bú zhǐshì kàndào de, yě shì jīnglì dào de.", "A: Vì vậy phong cảnh trên đường không chỉ là thứ nhìn thấy, mà còn là thứ đã trải qua.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 不是……而是…… / 不只是……也是……", "Hai mẫu này đều dùng để chuyển trọng tâm từ điều người ta thường nghĩ sang điều người nói muốn nhấn mạnh.", study("最让我难忘的不是目的地，而是路上的风景。", "Zuì ràng wǒ nánwàng de bú shì mùdìdì, érshì lùshang de fēngjǐng.", "Điều khiến tôi khó quên nhất không phải là điểm đến, mà là phong cảnh trên đường."), [
        study("这次旅行的意义不只是放松，也是学习。", "Zhè cì lǚxíng de yìyì bú zhǐshì fàngsōng, yě shì xuéxí.", "Ý nghĩa của chuyến đi này không chỉ là thư giãn, mà còn là học hỏi."),
        study("让我成长的不是顺利，而是途中遇到的困难。", "Ràng wǒ chéngzhǎng de bú shì shùnlì, érshì túzhōng yùdào de kùnnan.", "Thứ khiến tôi trưởng thành không phải là sự suôn sẻ, mà là những khó khăn gặp phải trên đường."),
        study("风景不只是山水，也是人和故事。", "Fēngjǐng bú zhǐshì shānshuǐ, yě shì rén hé gùshi.", "Phong cảnh không chỉ là núi sông, mà còn là con người và câu chuyện.")
      ]),
      grammarNote("2. 走着走着 / 想着想着", "Dạng lặp động từ + 着 giúp diễn đạt trạng thái phát triển dần trong quá trình diễn ra hành động.", study("走着走着，那个城市也慢慢变得熟悉了。", "Zǒuzhe zǒuzhe, nàge chéngshì yě mànmàn biàn de shúxī le.", "Đi mãi đi mãi, thành phố đó cũng dần trở nên quen thuộc."), [
        study("看着看着，我突然觉得这条路很美。", "Kànzhe kànzhe, wǒ tūrán juéde zhè tiáo lù hěn měi.", "Nhìn mãi nhìn mãi, tôi bỗng thấy con đường này rất đẹp."),
        study("聊着聊着，我们就忘了时间。", "Liáozhe liáozhe, wǒmen jiù wàng le shíjiān.", "Trò chuyện mãi trò chuyện mãi, chúng tôi quên mất thời gian."),
        study("想着想着，我明白了这次旅行的意义。", "Xiǎngzhe xiǎngzhe, wǒ míngbai le zhè cì lǚxíng de yìyì.", "Nghĩ mãi nghĩ mãi, tôi hiểu ra ý nghĩa của chuyến đi này.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 风景", "2. 旅途", "3. 收获"], options: ["a. thu hoạch, điều nhận được", "b. phong cảnh", "c. hành trình"], answer: "1-b, 2-c, 3-a" }],
      [{ question: "Điền từ thích hợp.", prompt: ["有时候目___地并不是最重要的。", "途中遇到的问题也让我们学到了很多。", "刚到一个陌生的地方，心里总会有点儿紧___。"], answer: "的 / 途 / 张" }],
      [{ question: "Câu nào đúng?", options: ["A. 最让我难忘的不是目的地，而是路上的风景。", "B. 最让我难忘的而是不是目的地，路上的风景。", "C. 路上的风景不是目的地，而是最让我难忘的。"], answer: "A. 最让我难忘的不是目的地，而是路上的风景。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 这一路上你最大的收获是什么？", "B: ____________", "A: 这句话听起来很有意思，也很有力量。"], answer: "B: 我发现看世界的时候，也是在重新认识自己。" }],
      "Tự kiểm tra: bạn có thể nói một điều mình học được từ một chuyến đi bằng 2 đến 3 câu không?"
    ),
    quickSummary: {
      words: ["风景", "旅途", "目的地", "经历", "收获", "途中"],
      patterns: ["最让我难忘的不是目的地，而是路上的风景。", "走着走着，那个城市也慢慢变得熟悉了。"],
      reminder: "Bài này nên nói theo trục trải nghiệm: đi đâu, thấy gì, học được gì."
    }
  }
};

hsk4Course.lessons = hsk4Course.lessons.map((lesson) => {
  const detailed = hsk4DetailedLessons[lesson.number];
  return detailed ? { ...lesson, ...detailed, placeholder: false } : lesson;
});

const hsk5OfficialStructure = [
  { number: 1, chinese: "爱的细节", pinyin: "Ài de xìjié", vietnamese: "Chi tiết của tình yêu", topic: "Tình cảm, hành động nhỏ và ý nghĩa của sự quan tâm" },
  { number: 2, chinese: "留串钥匙给父母", pinyin: "Liú chuàn yàoshi gěi fùmǔ", vietnamese: "Để lại một chùm chìa khóa cho cha mẹ", topic: "Gia đình, cha mẹ lớn tuổi và trách nhiệm chăm sóc" },
  { number: 3, chinese: "人生有选择，一切可改变", pinyin: "Rénshēng yǒu xuǎnzé, yíqiè kě gǎibiàn", vietnamese: "Cuộc đời có lựa chọn, mọi thứ đều có thể thay đổi", topic: "Lựa chọn cuộc sống, thay đổi bản thân và thái độ chủ động" },
  { number: 4, chinese: "子路背米", pinyin: "Zǐlù bēi mǐ", vietnamese: "Tử Lộ cõng gạo", topic: "Điển cố, hiếu thảo và giá trị đạo đức truyền thống" },
  { number: 5, chinese: "济南的泉水", pinyin: "Jǐnán de quánshuǐ", vietnamese: "Suối nước ở Tế Nam", topic: "Danh lam, địa lý văn hóa và miêu tả phong cảnh" },
  { number: 6, chinese: "除夕的由来", pinyin: "Chúxī de yóulái", vietnamese: "Nguồn gốc của đêm giao thừa", topic: "Phong tục năm mới, truyền thuyết và văn hóa dân gian" },
  { number: 7, chinese: "成语故事两则", pinyin: "Chéngyǔ gùshi liǎng zé", vietnamese: "Hai câu chuyện thành ngữ", topic: "Thành ngữ, chuyện kể ngắn và ý nghĩa rút ra" },
  { number: 8, chinese: "“朝三暮四”的古今义", pinyin: "“Cháo sān mù sì” de gǔjīn yì", vietnamese: "Nghĩa xưa và nay của “triều tam mộ tứ”", topic: "Biến đổi nghĩa của từ ngữ và hiểu ngôn ngữ theo bối cảnh" },
  { number: 9, chinese: "别样鲁迅", pinyin: "Biéyàng Lǔ Xùn", vietnamese: "Một Lỗ Tấn khác", topic: "Nhân vật văn hóa, góc nhìn mới và chân dung con người" },
  { number: 10, chinese: "争论的奇迹", pinyin: "Zhēnglùn de qíjì", vietnamese: "Kỳ tích của tranh luận", topic: "Tranh luận, giao tiếp và sức mạnh của trao đổi ý kiến" },
  { number: 11, chinese: "闹钟的危害", pinyin: "Nàozhōng de wēihài", vietnamese: "Tác hại của đồng hồ báo thức", topic: "Sức khỏe, thói quen ngủ nghỉ và góc nhìn phản biện" },
  { number: 12, chinese: "海外用户玩儿微信", pinyin: "Hǎiwài yònghù wánr Wēixìn", vietnamese: "Người dùng ở nước ngoài dùng WeChat", topic: "Công nghệ, mạng xã hội và thay đổi trong giao tiếp hiện đại" },
  { number: 13, chinese: "锯掉生活的“筐底”", pinyin: "Jù diào shēnghuó de “kuāngdǐ”", vietnamese: "Cưa bỏ “đáy giỏ” của cuộc sống", topic: "Áp lực đời sống, hình ảnh ẩn dụ và cách giảm gánh nặng" },
  { number: 14, chinese: "北京的四合院", pinyin: "Běijīng de sìhéyuàn", vietnamese: "Tứ hợp viện ở Bắc Kinh", topic: "Kiến trúc truyền thống, đời sống cư trú và văn hóa đô thị" },
  { number: 15, chinese: "纸上谈兵", pinyin: "Zhǐshàng tánbīng", vietnamese: "Bàn chuyện binh trên giấy", topic: "Thành ngữ lịch sử, khoảng cách giữa lý thuyết và thực tế" },
  { number: 16, chinese: "体重与节食", pinyin: "Tǐzhòng yǔ jiéshí", vietnamese: "Cân nặng và ăn kiêng", topic: "Sức khỏe, vóc dáng và quan điểm về giảm cân" },
  { number: 17, chinese: "在最美好的时刻离开", pinyin: "Zài zuì měihǎo de shíkè líkāi", vietnamese: "Rời đi vào thời khắc đẹp nhất", topic: "Lựa chọn, kết thúc đúng lúc và giá trị của thời điểm" },
  { number: 18, chinese: "抽象艺术美不美", pinyin: "Chōuxiàng yìshù měi bu měi", vietnamese: "Nghệ thuật trừu tượng có đẹp không", topic: "Nghệ thuật, thẩm mỹ và tranh luận quan điểm" },
  { number: 19, chinese: "家乡的萝卜饼", pinyin: "Jiāxiāng de luóbo bǐng", vietnamese: "Bánh củ cải của quê hương", topic: "Quê hương, ẩm thực ký ức và tình cảm bản quán" },
  { number: 20, chinese: "小人书摊", pinyin: "Xiǎorénshū tān", vietnamese: "Sạp truyện tranh nhỏ", topic: "Ký ức tuổi thơ, sách truyện và đời sống đường phố" },
  { number: 21, chinese: "汉字叔叔：一个美国人的汉字情缘", pinyin: "Hànzì shūshu: yí ge Měiguórén de Hànzì qíngyuán", vietnamese: "Chú Hán tự: mối duyên chữ Hán của một người Mỹ", topic: "Ngôn ngữ, chữ Hán và đam mê học tập xuyên văn hóa" },
  { number: 22, chinese: "阅读与思考", pinyin: "Yuèdú yǔ sīkǎo", vietnamese: "Đọc và suy nghĩ", topic: "Đọc hiểu, tư duy và mối quan hệ giữa tri thức với suy luận" },
  { number: 23, chinese: "放手", pinyin: "Fàngshǒu", vietnamese: "Buông tay", topic: "Quan hệ gia đình, nuôi dạy con và học cách buông đúng lúc" },
  { number: 24, chinese: "支教行动", pinyin: "Zhījiào xíngdòng", vietnamese: "Hoạt động tình nguyện giảng dạy", topic: "Giáo dục cộng đồng, thiện nguyện và trách nhiệm xã hội" },
  { number: 25, chinese: "给自己加满水", pinyin: "Gěi zìjǐ jiā mǎn shuǐ", vietnamese: "Tự đổ đầy nước cho mình", topic: "Tự khích lệ, nội lực cá nhân và trạng thái tinh thần" },
  { number: 26, chinese: "你属于哪一种“忙”", pinyin: "Nǐ shǔyú nǎ yì zhǒng “máng”", vietnamese: "Bạn thuộc kiểu “bận” nào", topic: "Lối sống bận rộn, quản lý thời gian và tự đánh giá bản thân" },
  { number: 27, chinese: "下棋", pinyin: "Xià qí", vietnamese: "Chơi cờ", topic: "Chiến lược, nhẫn nại và cách suy nghĩ có tính tính toán" },
  { number: 28, chinese: "最受欢迎的毕业生", pinyin: "Zuì shòu huānyíng de bìyèshēng", vietnamese: "Sinh viên tốt nghiệp được yêu thích nhất", topic: "Giáo dục, tuyển dụng và phẩm chất được xã hội đánh giá cao" },
  { number: 29, chinese: "培养对手", pinyin: "Péiyǎng duìshǒu", vietnamese: "Bồi dưỡng đối thủ", topic: "Cạnh tranh, phát triển bản thân và tư duy dài hạn" },
  { number: 30, chinese: "竞争让市场更高效", pinyin: "Jìngzhēng ràng shìchǎng gèng gāoxiào", vietnamese: "Cạnh tranh khiến thị trường hiệu quả hơn", topic: "Kinh tế, thị trường và lập luận xã hội" },
  { number: 31, chinese: "登门槛效应", pinyin: "Dēng ménkǎn xiàoyìng", vietnamese: "Hiệu ứng bước qua ngưỡng cửa", topic: "Tâm lý học hành vi và cách con người bị thuyết phục" },
  { number: 32, chinese: "身边的环保", pinyin: "Shēnbiān de huánbǎo", vietnamese: "Bảo vệ môi trường quanh ta", topic: "Môi trường, hành vi thường ngày và thay đổi từ việc nhỏ" },
  { number: 33, chinese: "以堵治堵——缓解交通有妙招", pinyin: "Yǐ dǔ zhì dǔ —— huǎnjiě jiāotōng yǒu miàozhāo", vietnamese: "Lấy tắc trị tắc: có mẹo hay để giảm ùn tắc giao thông", topic: "Giao thông đô thị, chính sách công và giải pháp ngược chiều" },
  { number: 34, chinese: "鸟儿的护肤术", pinyin: "Niǎor de hùfū shù", vietnamese: "Bí quyết chăm sóc lông của loài chim", topic: "Động vật, quan sát tự nhiên và tri thức khoa học đời sống" },
  { number: 35, chinese: "植物会出汗", pinyin: "Zhíwù huì chūhàn", vietnamese: "Thực vật cũng biết đổ mồ hôi", topic: "Khoa học phổ thông, thực vật và cách giải thích hiện tượng tự nhiên" },
  { number: 36, chinese: "老舍与养花", pinyin: "Lǎo Shě yǔ yǎng huā", vietnamese: "Lão Xá và việc trồng hoa", topic: "Văn học, thú vui đời sống và mối liên hệ giữa con người với thiên nhiên" }
];

const hsk5Course = {
  id: "hsk5",
  label: "HSK 5",
  overview: "HSK 6 được khóa theo đúng 40 bài của HSK Standard Course 6A và 6B. Giai đoạn này giữ nguyên layout hiện tại và triển khai lesson page theo cùng study flow.",
  lessons: hsk5OfficialStructure.map((lesson) => ({
    id: `hsk5-lesson-${lesson.number}`,
    number: lesson.number,
    title: `Bài ${lesson.number}: ${lesson.vietnamese}`,
    titleChinese: lesson.chinese,
    titlePinyin: lesson.pinyin,
    vietnameseTitle: lesson.vietnamese,
    objective: `Bài này tập trung vào chủ đề: ${lesson.topic}. Nội dung chi tiết sẽ được viết theo cùng lesson flow hiện tại khi bắt đầu build HSK 5.`,
    placeholder: true,
    summary: `Placeholder chuẩn cho ${lesson.chinese}. Khi viết nội dung chi tiết, bài này sẽ dùng đúng cấu trúc: Vocabulary, Dialogue, Grammar, Exercises, Quick Summary.`,
    quickSummary: {
      words: ["HSK 5", `Bài ${lesson.number}`],
      patterns: [lesson.chinese],
      reminder: "HSK 5 hiện đã được khóa đúng thứ tự bài; nội dung chi tiết sẽ được phát triển theo lesson order này."
    }
  }))
};

const hsk5DetailedLessons = {
  1: {
    objective: "Thảo luận về những chi tiết nhỏ trong tình yêu, phân biệt giữa biểu hiện bề ngoài và sự quan tâm thật sự bằng ngôn ngữ HSK 5 tự nhiên hơn.",
    vocabulary: [
      vocab("细节", "xìjié", "chi tiết", "danh từ", "Trong bài này nhấn mạnh những điều nhỏ nhưng có sức nặng trong quan hệ.", "很多感情上的变化都藏在细节里。", "Hěn duō gǎnqíng shàng de biànhuà dōu cáng zài xìjié lǐ.", "Rất nhiều thay đổi trong tình cảm đều ẩn trong những chi tiết nhỏ."),
      vocab("体贴", "tǐtiē", "chu đáo, biết quan tâm", "tính từ/động từ", "Dùng để nói sự quan tâm tinh tế, không khoa trương.", "真正体贴的人往往不太会说大话。", "Zhēnzhèng tǐtiē de rén wǎngwǎng bú tài huì shuō dàhuà.", "Người thật sự chu đáo thường lại không hay nói lời lớn."),
      vocab("忽视", "hūshì", "xem nhẹ, bỏ qua", "động từ", "Hay dùng để nói vô tình không chú ý đến nhu cầu của người khác.", "最容易被忽视的，常常是最重要的细节。", "Zuì róngyì bèi hūshì de, chángcháng shì zuì zhòngyào de xìjié.", "Thứ dễ bị bỏ qua nhất thường lại là chi tiết quan trọng nhất."),
      vocab("表达", "biǎodá", "biểu đạt", "động từ/danh từ", "Dùng cho cách thể hiện tình cảm bằng lời nói hoặc hành động.", "爱不一定靠语言表达出来。", "Ài bù yídìng kào yǔyán biǎodá chūlai.", "Tình yêu không nhất thiết phải được biểu đạt bằng lời."),
      vocab("关怀", "guānhuái", "sự quan tâm, chăm nom", "danh từ/động từ", "Trang trọng hơn 关心, thường dùng ở HSK 5.", "她从细小的动作里感受到了对方的关怀。", "Tā cóng xìxiǎo de dòngzuò lǐ gǎnshòu dào le duìfāng de guānhuái.", "Cô ấy cảm nhận được sự quan tâm của đối phương từ những động tác nhỏ."),
      vocab("平凡", "píngfán", "bình dị, tầm thường", "tính từ", "Trong bài này không mang nghĩa tiêu cực, mà nhấn vào sự giản dị bền lâu.", "平凡的日子更能看出感情的分量。", "Píngfán de rìzi gèng néng kàn chū gǎnqíng de fènliàng.", "Những ngày bình dị càng cho thấy trọng lượng của tình cảm."),
      vocab("依赖", "yīlài", "phụ thuộc; dựa vào", "động từ/danh từ", "Dùng để nói cảm giác tin cậy nhưng không mất đi độc lập.", "真正的感情不是单方面的依赖。", "Zhēnzhèng de gǎnqíng bú shì dānfāngmiàn de yīlài.", "Tình cảm thật sự không phải là sự phụ thuộc một chiều."),
      vocab("珍惜", "zhēnxī", "trân trọng", "động từ", "Từ khóa khi nói cách giữ gìn một mối quan hệ.", "懂得珍惜的人，更容易拥有长久的关系。", "Dǒngde zhēnxī de rén, gèng róngyì yōngyǒu chángjiǔ de guānxi.", "Người biết trân trọng sẽ dễ có mối quan hệ bền lâu hơn.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Nói điều gì làm người ta cảm nhận được tình yêu.", [
        study("A: 你觉得爱情里最重要的是什么？", "A: Nǐ juéde àiqíng lǐ zuì zhòngyào de shì shénme?", "A: Bạn thấy điều quan trọng nhất trong tình yêu là gì?"),
        study("B: 我觉得不是轰轰烈烈，而是那些容易被忽视的细节。", "B: Wǒ juéde bú shì hōnghōnglièliè, érshì nàxiē róngyì bèi hūshì de xìjié.", "B: Tôi thấy không phải những điều quá mãnh liệt, mà là những chi tiết dễ bị bỏ qua."),
        study("A: 对，越平凡的时候，越能看出一个人是不是真的在乎你。", "A: Duì, yuè píngfán de shíhou, yuè néng kàn chū yí ge rén shì bú shì zhēn de zàihu nǐ.", "A: Đúng, lúc càng bình dị càng nhìn ra một người có thật sự để ý bạn hay không.")
      ]),
      dialogueBlock("Tình huống 2", "So sánh lời nói và hành động.", [
        study("A: 有的人很会说，可是未必做得到。", "A: Yǒu de rén hěn huì shuō, kěshì wèibì zuò de dào.", "A: Có người rất biết nói, nhưng chưa chắc làm được."),
        study("B: 所以我更看重行动，因为行动最能表达关怀。", "B: Suǒyǐ wǒ gèng kànzhòng xíngdòng, yīnwèi xíngdòng zuì néng biǎodá guānhuái.", "B: Vì vậy tôi coi trọng hành động hơn, vì hành động biểu đạt sự quan tâm rõ nhất."),
        study("A: 说得对，真正体贴的人不一定话多。", "A: Shuō de duì, zhēnzhèng tǐtiē de rén bù yídìng huà duō.", "A: Nói đúng, người thật sự chu đáo chưa chắc nói nhiều.")
      ]),
      dialogueBlock("Tình huống 3", "Bàn về sự phụ thuộc trong quan hệ.", [
        study("A: 你觉得两个人在一起是不是一定会互相依赖？", "A: Nǐ juéde liǎng ge rén zài yìqǐ shì bú shì yídìng huì hùxiāng yīlài?", "A: Bạn thấy hai người ở bên nhau có nhất định sẽ dựa vào nhau không?"),
        study("B: 会有依赖，但不应该失去各自的空间。", "B: Huì yǒu yīlài, dàn bù yīnggāi shīqù gèzì de kōngjiān.", "B: Sẽ có sự dựa vào nhau, nhưng không nên mất đi không gian riêng của mỗi người."),
        study("A: 嗯，好的感情应该让人更安心，而不是更累。", "A: Èn, hǎo de gǎnqíng yīnggāi ràng rén gèng ānxīn, ér bú shì gèng lèi.", "A: Ừm, tình cảm tốt nên khiến người ta an lòng hơn, chứ không phải mệt mỏi hơn.")
      ]),
      dialogueBlock("Tình huống 4", "Nói về cách gìn giữ một mối quan hệ.", [
        study("A: 你觉得感情为什么会慢慢变淡？", "A: Nǐ juéde gǎnqíng wèishénme huì mànmàn biàn dàn?", "A: Bạn thấy vì sao tình cảm lại dần dần nhạt đi?"),
        study("B: 很多时候不是没有爱了，而是忽视了那些本来应该珍惜的小事。", "B: Hěn duō shíhou bú shì méiyǒu ài le, érshì hūshì le nàxiē běnlái yīnggāi zhēnxī de xiǎoshì.", "B: Nhiều khi không phải là hết yêu, mà là đã bỏ qua những việc nhỏ vốn nên được trân trọng."),
        study("A: 所以能不能走得长久，常常就看这些小地方。", "A: Suǒyǐ néng bu néng zǒu de chángjiǔ, chángcháng jiù kàn zhèxiē xiǎo dìfang.", "A: Vì vậy có thể đi lâu dài hay không thường lại phụ thuộc vào những chỗ nhỏ như thế.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 不是……而是……", "Ở HSK 5, mẫu này thường không chỉ dùng để sửa thông tin, mà còn để điều chỉnh trọng tâm tư duy của người nghe.", study("我觉得不是轰轰烈烈，而是那些容易被忽视的细节。", "Wǒ juéde bú shì hōnghōnglièliè, érshì nàxiē róngyì bèi hūshì de xìjié.", "Tôi thấy điều quan trọng không phải là sự mãnh liệt, mà là những chi tiết dễ bị bỏ qua."), [
        study("问题不是他不爱你，而是他不懂得表达。", "Wèntí bú shì tā bù ài nǐ, érshì tā bù dǒngde biǎodá.", "Vấn đề không phải là anh ấy không yêu bạn, mà là anh ấy không biết cách biểu đạt."),
        study("让人失望的不是一句话，而是长期的忽视。", "Ràng rén shīwàng de bú shì yí jù huà, érshì chángqī de hūshì.", "Điều làm người ta thất vọng không phải là một câu nói, mà là sự xem nhẹ kéo dài."),
        study("真正重要的不是形式，而是心意。", "Zhēnzhèng zhòngyào de bú shì xíngshì, érshì xīnyì.", "Điều thật sự quan trọng không phải là hình thức, mà là tấm lòng.")
      ]),
      grammarNote("2. 越……越……", "Mẫu này ở bài này dùng để nhấn mạnh nghịch lý quen thuộc: càng bình thường lại càng nhìn rõ bản chất.", study("越平凡的时候，越能看出一个人是不是真的在乎你。", "Yuè píngfán de shíhou, yuè néng kàn chū yí ge rén shì bú shì zhēn de zàihu nǐ.", "Lúc càng bình dị càng nhìn ra một người có thật sự để ý bạn hay không."), [
        study("越是小事，越能看出一个人的态度。", "Yuè shì xiǎoshì, yuè néng kàn chū yí ge rén de tàidu.", "Càng là việc nhỏ càng nhìn ra thái độ của một người."),
        study("越想走得长久，越要学会珍惜细节。", "Yuè xiǎng zǒu de chángjiǔ, yuè yào xuéhuì zhēnxī xìjié.", "Càng muốn đi lâu dài càng phải học cách trân trọng chi tiết."),
        study("越是安静的关怀，越让人难忘。", "Yuè shì ānjìng de guānhuái, yuè ràng rén nánwàng.", "Sự quan tâm càng âm thầm càng khiến người ta khó quên.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 体贴", "2. 忽视", "3. 珍惜"], options: ["a. chu đáo", "b. xem nhẹ", "c. trân trọng"], answer: "1-a, 2-b, 3-c" }],
      [{ question: "Điền từ thích hợp.", prompt: ["很多感情上的变化都藏在细___里。", "真正体___的人不一定话多。", "懂得珍___的人，更容易拥有长久的关系。"], answer: "节 / 贴 / 惜" }],
      [{ question: "Câu nào đúng?", options: ["A. 真正重要的不是形式，而是心意。", "B. 真正重要的而是不是形式，心意。", "C. 形式不是真正重要，而是心意的。"], answer: "A. 真正重要的不是形式，而是心意。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 你觉得爱情里最重要的是什么？", "B: ____________", "A: 对，越平凡的时候，越能看出一个人是不是真的在乎你。"], answer: "B: 我觉得不是轰轰烈烈，而是那些容易被忽视的细节。" }],
      "Tự kiểm tra: bạn có thể nói 2 câu về điều mình coi trọng nhất trong một mối quan hệ không?"
    ),
    quickSummary: {
      words: ["细节", "体贴", "忽视", "关怀", "平凡", "珍惜"],
      patterns: ["真正重要的不是形式，而是心意。", "越平凡的时候，越能看出一个人是不是真的在乎你。"],
      reminder: "Bài này cần nói tinh hơn HSK 4: ít kể chuyện thẳng, nhiều nhận xét về ý nghĩa của hành động nhỏ."
    }
  },
  2: {
    objective: "Bàn về mối quan hệ giữa con cái và cha mẹ lớn tuổi, nhấn mạnh sự quan tâm thực tế thay vì chỉ lo lắng bằng lời nói.",
    vocabulary: [
      vocab("钥匙", "yàoshi", "chìa khóa", "danh từ", "Trong bài này mang cả nghĩa vật dụng và biểu tượng của sự tin tưởng.", "她把家里的钥匙留给了父母。", "Tā bǎ jiālǐ de yàoshi liú gěi le fùmǔ.", "Cô ấy đã để lại chìa khóa nhà cho cha mẹ."),
      vocab("父母", "fùmǔ", "cha mẹ", "danh từ", "Từ trung tâm của bài.", "父母年纪大了以后，更需要陪伴。", "Fùmǔ niánjì dà le yǐhòu, gèng xūyào péibàn.", "Cha mẹ sau khi lớn tuổi sẽ càng cần sự đồng hành."),
      vocab("照应", "zhàoyìng", "trông nom, để ý giúp", "động từ", "Trang trọng hơn 照顾, thường dùng trong đời sống thực tế.", "邻居平时也会帮忙照应一下。", "Línjū píngshí yě huì bāngmáng zhàoyìng yíxià.", "Hàng xóm bình thường cũng sẽ giúp trông nom một chút."),
      vocab("放心", "fàngxīn", "yên tâm", "động từ/tính từ", "Dùng rất nhiều khi nói về cha mẹ và con cái.", "把钥匙留给父母以后，我心里更放心了。", "Bǎ yàoshi liú gěi fùmǔ yǐhòu, wǒ xīnli gèng fàngxīn le.", "Sau khi để chìa khóa cho cha mẹ, trong lòng tôi thấy yên tâm hơn."),
      vocab("独自", "dúzì", "một mình", "phó từ", "Dùng khi nói người lớn tuổi sống một mình.", "他们不愿意父母独自在家太久。", "Tāmen bù yuànyì fùmǔ dúzì zài jiā tài jiǔ.", "Họ không muốn cha mẹ ở nhà một mình quá lâu."),
      vocab("习惯", "xíguàn", "thói quen", "danh từ/động từ", "Bài này nhấn mạnh sự khác biệt trong lối sống giữa các thế hệ.", "老人的生活习惯往往比较固定。", "Lǎorén de shēnghuó xíguàn wǎngwǎng bǐjiào gùdìng.", "Thói quen sinh hoạt của người lớn tuổi thường khá cố định."),
      vocab("麻烦", "máfan", "phiền; phiền phức", "tính từ/động từ/danh từ", "Hay dùng khi cha mẹ ngại làm phiền con cái.", "父母总怕给孩子添麻烦。", "Fùmǔ zǒng pà gěi háizi tiān máfan.", "Cha mẹ luôn sợ làm phiền con cái."),
      vocab("陪伴", "péibàn", "đồng hành, ở bên", "động từ/danh từ", "Điểm trọng tâm về mặt tình cảm trong bài này.", "有时候陪伴比礼物更重要。", "Yǒushíhou péibàn bǐ lǐwù gèng zhòngyào.", "Đôi khi sự đồng hành còn quan trọng hơn quà tặng.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Vì sao để lại chìa khóa cho cha mẹ.", [
        study("A: 你为什么要留一串钥匙给父母？", "A: Nǐ wèishénme yào liú yí chuàn yàoshi gěi fùmǔ?", "A: Vì sao bạn muốn để lại một chùm chìa khóa cho cha mẹ?"),
        study("B: 因为他们年纪大了，我希望有事的时候能更方便照应。", "B: Yīnwèi tāmen niánjì dà le, wǒ xīwàng yǒushì de shíhou néng gèng fāngbiàn zhàoyìng.", "B: Vì họ đã lớn tuổi, tôi hy vọng khi có việc sẽ tiện trông nom hơn."),
        study("A: 这样做确实让人更放心。", "A: Zhèyàng zuò quèshí ràng rén gèng fàngxīn.", "A: Làm như vậy quả thật khiến người ta yên tâm hơn.")
      ]),
      dialogueBlock("Tình huống 2", "Cha mẹ ngại làm phiền con.", [
        study("A: 你父母会不会觉得这样太麻烦你了？", "A: Nǐ fùmǔ huì bú huì juéde zhèyàng tài máfan nǐ le?", "A: Cha mẹ bạn có thấy như vậy là làm phiền bạn quá không?"),
        study("B: 会，他们总说自己可以照顾自己。", "B: Huì, tāmen zǒng shuō zìjǐ kěyǐ zhàogù zìjǐ.", "B: Có, họ luôn nói họ có thể tự chăm sóc bản thân."),
        study("A: 其实老人越这么说，孩子越不放心。", "A: Qíshí lǎorén yuè zhème shuō, háizi yuè bù fàngxīn.", "A: Thật ra người lớn tuổi càng nói vậy thì con cái càng không yên tâm.")
      ]),
      dialogueBlock("Tình huống 3", "Khác biệt giữa chăm sóc vật chất và ở bên.", [
        study("A: 你平时也经常给父母买东西吧？", "A: Nǐ píngshí yě jīngcháng gěi fùmǔ mǎi dōngxi ba?", "A: Bình thường bạn cũng hay mua đồ cho cha mẹ nhỉ?"),
        study("B: 买是会买，但我越来越觉得陪伴更重要。", "B: Mǎi shì huì mǎi, dàn wǒ yuèláiyuè juéde péibàn gèng zhòngyào.", "B: Mua thì có mua, nhưng tôi ngày càng cảm thấy sự ở bên còn quan trọng hơn."),
        study("A: 对，很多时候老人需要的不是东西，而是有人说说话。", "A: Duì, hěn duō shíhou lǎorén xūyào de bú shì dōngxi, érshì yǒu rén shuōshuo huà.", "A: Đúng, nhiều khi thứ người lớn tuổi cần không phải đồ vật, mà là có người trò chuyện.")
      ]),
      dialogueBlock("Tình huống 4", "Nói về trách nhiệm không nên trì hoãn.", [
        study("A: 你现在这么忙，还顾得上父母吗？", "A: Nǐ xiànzài zhème máng, hái gùde shàng fùmǔ ma?", "A: Bây giờ bạn bận như vậy, còn chăm lo được cho cha mẹ không?"),
        study("B: 再忙也得想办法，因为等到以后后悔就来不及了。", "B: Zài máng yě děi xiǎng bànfǎ, yīnwèi děng dào yǐhòu hòuhuǐ jiù láibují le.", "B: Dù bận đến đâu cũng phải nghĩ cách, vì đợi đến sau này hối hận thì đã không kịp nữa."),
        study("A: 说得对，有些事真的不能总往后推。", "A: Shuō de duì, yǒuxiē shì zhēn de bùnéng zǒng wǎng hòu tuī.", "A: Nói đúng, có những việc thật sự không thể cứ mãi đẩy về sau.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 越……越……", "Ở bài này mẫu này dùng để nhấn mạnh cảm xúc của con cái khi cha mẹ càng tỏ ra không muốn phiền.", study("老人越这么说，孩子越不放心。", "Lǎorén yuè zhème shuō, háizi yuè bù fàngxīn.", "Người lớn tuổi càng nói như vậy thì con cái càng không yên tâm."), [
        study("父母越说没事，孩子越想回家看看。", "Fùmǔ yuè shuō méi shì, háizi yuè xiǎng huí jiā kànkan.", "Cha mẹ càng nói không sao thì con cái càng muốn về nhà thăm."),
        study("年纪越大，越需要别人照应。", "Niánjì yuè dà, yuè xūyào biérén zhàoyìng.", "Tuổi càng cao càng cần người khác trông nom."),
        study("离家越久，越容易发现陪伴的重要。", "Lí jiā yuè jiǔ, yuè róngyì fāxiàn péibàn de zhòngyào.", "Xa nhà càng lâu càng dễ nhận ra tầm quan trọng của sự đồng hành.")
      ]),
      grammarNote("2. 再……也得……", "Mẫu này diễn đạt điều bắt buộc phải làm dù điều kiện phía trước có khó thế nào.", study("再忙也得想办法。", "Zài máng yě děi xiǎng bànfǎ.", "Dù bận đến đâu cũng phải nghĩ cách."), [
        study("再累也得抽时间给父母打个电话。", "Zài lèi yě děi chōu shíjiān gěi fùmǔ dǎ ge diànhuà.", "Dù mệt đến đâu cũng phải dành thời gian gọi điện cho cha mẹ."),
        study("再远也得回去看看。", "Zài yuǎn yě děi huíqu kànkan.", "Dù xa đến đâu cũng phải về thăm."),
        study("再麻烦也得提前安排好。", "Zài máfan yě děi tíqián ānpái hǎo.", "Dù phiền đến đâu cũng phải sắp xếp ổn thỏa từ trước.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 照应", "2. 陪伴", "3. 放心"], options: ["a. yên tâm", "b. đồng hành, ở bên", "c. trông nom"], answer: "1-c, 2-b, 3-a" }],
      [{ question: "Điền từ thích hợp.", prompt: ["他们总怕给孩子添麻___。", "有时候陪___比礼物更重要。", "把钥匙留给父母以后，我更放___了。"], answer: "烦 / 伴 / 心" }],
      [{ question: "Câu nào đúng?", options: ["A. 再忙也得想办法。", "B. 再忙也办法得想。", "C. 想办法再忙也得。"], answer: "A. 再忙也得想办法。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 你为什么要留一串钥匙给父母？", "B: ____________", "A: 这样做确实让人更放心。"], answer: "B: 因为他们年纪大了，我希望有事的时候能更方便照应。" }],
      "Tự kiểm tra: bạn có thể nói 2 việc cụ thể mình nên làm cho cha mẹ lớn tuổi không?"
    ),
    quickSummary: {
      words: ["钥匙", "父母", "照应", "放心", "麻烦", "陪伴"],
      patterns: ["老人越这么说，孩子越不放心。", "再忙也得想办法。"],
      reminder: "Bài này cần nói thực hơn HSK 4: ít khẩu hiệu, nhiều việc làm cụ thể và cảm xúc thực tế."
    }
  },
  3: {
    objective: "Diễn đạt quan điểm về lựa chọn trong cuộc sống, nhấn mạnh khả năng thay đổi của con người khi dám chịu trách nhiệm cho quyết định của mình.",
    vocabulary: [
      vocab("选择", "xuǎnzé", "lựa chọn", "danh từ/động từ", "Từ trọng tâm của bài 3.", "人生中很多变化都从选择开始。", "Rénshēng zhōng hěn duō biànhuà dōu cóng xuǎnzé kāishǐ.", "Rất nhiều thay đổi trong cuộc đời bắt đầu từ lựa chọn."),
      vocab("改变", "gǎibiàn", "thay đổi", "động từ/danh từ", "Dùng cho thay đổi bản thân, hoàn cảnh, cách nghĩ.", "真正的改变往往先从想法开始。", "Zhēnzhèng de gǎibiàn wǎngwǎng xiān cóng xiǎngfǎ kāishǐ.", "Sự thay đổi thật sự thường bắt đầu từ suy nghĩ."),
      vocab("决定", "juédìng", "quyết định", "danh từ/động từ", "Liên quan trực tiếp đến việc chịu trách nhiệm với lựa chọn.", "做决定之前，他会先想清楚后果。", "Zuò juédìng zhīqián, tā huì xiān xiǎng qīngchu hòuguǒ.", "Trước khi quyết định, anh ấy sẽ nghĩ rõ hậu quả."),
      vocab("后果", "hòuguǒ", "hậu quả", "danh từ", "Thường đi với 承担, 考虑.", "每个选择都可能带来不同的后果。", "Měi ge xuǎnzé dōu kěnéng dàilái bùtóng de hòuguǒ.", "Mỗi lựa chọn đều có thể mang lại hậu quả khác nhau."),
      vocab("承担", "chéngdān", "gánh vác, chịu", "động từ", "Thường dùng trong cụm 承担责任 / 承担后果.", "既然是自己的决定，就要学会承担。", "Jìrán shì zìjǐ de juédìng, jiù yào xuéhuì chéngdān.", "Nếu đã là quyết định của mình thì phải học cách gánh vác."),
      vocab("机会", "jīhuì", "cơ hội", "danh từ", "Liên hệ giữa chọn lựa và khả năng thay đổi số phận.", "有些机会一旦错过，就很难再回来。", "Yǒuxiē jīhuì yídàn cuòguò, jiù hěn nán zài huílai.", "Có những cơ hội một khi bỏ lỡ thì rất khó quay lại."),
      vocab("主动", "zhǔdòng", "chủ động", "tính từ/phó từ", "Từ khóa khi nói thay đổi không chờ hoàn cảnh đẩy đi.", "你越主动，生活给你的可能性就越多。", "Nǐ yuè zhǔdòng, shēnghuó gěi nǐ de kěnéngxìng jiù yuè duō.", "Bạn càng chủ động thì cuộc sống càng cho bạn nhiều khả năng hơn."),
      vocab("可能", "kěnéng", "khả năng; có thể", "danh từ/phó từ", "Bài này hay dùng trong cách nghĩ mở về tương lai.", "只要不放弃，就还有改变的可能。", "Zhǐyào bù fàngqì, jiù hái yǒu gǎibiàn de kěnéng.", "Chỉ cần không từ bỏ thì vẫn còn khả năng thay đổi.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Nói cuộc đời có thể thay đổi nhờ lựa chọn.", [
        study("A: 你相信人生真的可以改变吗？", "A: Nǐ xiāngxìn rénshēng zhēn de kěyǐ gǎibiàn ma?", "A: Bạn có tin cuộc đời thật sự có thể thay đổi không?"),
        study("B: 我相信，只要还有选择，就还有改变的可能。", "B: Wǒ xiāngxìn, zhǐyào hái yǒu xuǎnzé, jiù hái yǒu gǎibiàn de kěnéng.", "B: Tôi tin, chỉ cần còn lựa chọn thì vẫn còn khả năng thay đổi."),
        study("A: 这句话让我觉得很有力量。", "A: Zhè jù huà ràng wǒ juéde hěn yǒu lìliàng.", "A: Câu này khiến tôi cảm thấy rất có sức mạnh.")
      ]),
      dialogueBlock("Tình huống 2", "Nói về trách nhiệm của quyết định.", [
        study("A: 可是很多人不是没有机会，而是不敢决定。", "A: Kěshì hěn duō rén bú shì méiyǒu jīhuì, érshì bù gǎn juédìng.", "A: Nhưng nhiều người không phải là không có cơ hội, mà là không dám quyết định."),
        study("B: 因为一旦做出选择，就得承担后果。", "B: Yīnwèi yídàn zuò chū xuǎnzé, jiù děi chéngdān hòuguǒ.", "B: Vì một khi đã đưa ra lựa chọn thì phải gánh hậu quả."),
        study("A: 也就是说，自由和责任往往是一起出现的。", "A: Yě jiùshì shuō, zìyóu hé zérèn wǎngwǎng shì yìqǐ chūxiàn de.", "A: Có nghĩa là tự do và trách nhiệm thường xuất hiện cùng nhau.")
      ]),
      dialogueBlock("Tình huống 3", "Khuyến khích chủ động thay vì chờ đợi.", [
        study("A: 如果现在的生活不满意，你会怎么办？", "A: Rúguǒ xiànzài de shēnghuó bù mǎnyì, nǐ huì zěnme bàn?", "A: Nếu không hài lòng với cuộc sống hiện tại, bạn sẽ làm gì?"),
        study("B: 我会先想清楚自己要什么，然后主动去争取。", "B: Wǒ huì xiān xiǎng qīngchu zìjǐ yào shénme, ránhòu zhǔdòng qù zhēngqǔ.", "B: Tôi sẽ nghĩ rõ mình muốn gì trước, rồi chủ động đi tranh thủ."),
        study("A: 对，光抱怨是不会带来改变的。", "A: Duì, guāng bàoyuàn shì bú huì dàilái gǎibiàn de.", "A: Đúng, chỉ than phiền thì sẽ không mang lại thay đổi.")
      ]),
      dialogueBlock("Tình huống 4", "Nhìn lại lựa chọn cũ.", [
        study("A: 你后悔过以前做的某个决定吗？", "A: Nǐ hòuhuǐguo yǐqián zuò de mǒu ge juédìng ma?", "A: Bạn từng hối hận về một quyết định nào đó trước đây chưa?"),
        study("B: 当然有，不过我现在更愿意把它当成经历。", "B: Dāngrán yǒu, búguò wǒ xiànzài gèng yuànyì bǎ tā dàngchéng jīnglì.", "B: Đương nhiên là có, nhưng giờ tôi muốn xem nó như một trải nghiệm hơn."),
        study("A: 能这样想，说明你真的成长了。", "A: Néng zhèyàng xiǎng, shuōmíng nǐ zhēn de chéngzhǎng le.", "A: Có thể nghĩ như vậy chứng tỏ bạn thật sự đã trưởng thành.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 只要……就…… / 还有……的可能", "Ở HSK 5, mẫu này thường dùng để mở ra hướng suy nghĩ tích cực nhưng không đơn giản hóa vấn đề.", study("只要还有选择，就还有改变的可能。", "Zhǐyào hái yǒu xuǎnzé, jiù hái yǒu gǎibiàn de kěnéng.", "Chỉ cần còn lựa chọn thì vẫn còn khả năng thay đổi."), [
        study("只要愿意开始，就不算太晚。", "Zhǐyào yuànyì kāishǐ, jiù bù suàn tài wǎn.", "Chỉ cần sẵn sàng bắt đầu thì vẫn chưa phải quá muộn."),
        study("只要不放弃，就还有机会。", "Zhǐyào bù fàngqì, jiù hái yǒu jīhuì.", "Chỉ cần không từ bỏ thì vẫn còn cơ hội."),
        study("只要想清楚方向，就更容易做决定。", "Zhǐyào xiǎng qīngchu fāngxiàng, jiù gèng róngyì zuò juédìng.", "Chỉ cần nghĩ rõ phương hướng thì sẽ dễ quyết định hơn.")
      ]),
      grammarNote("2. 一旦……就…… / 既然……就……", "Hai mẫu này dùng để nói điều kiện kéo theo hậu quả hoặc nghĩa vụ khá mạnh.", study("一旦做出选择，就得承担后果。", "Yídàn zuò chū xuǎnzé, jiù děi chéngdān hòuguǒ.", "Một khi đã đưa ra lựa chọn thì phải gánh hậu quả."), [
        study("一旦错过机会，可能很难再回来。", "Yídàn cuòguò jīhuì, kěnéng hěn nán zài huílai.", "Một khi bỏ lỡ cơ hội thì có thể rất khó quay lại."),
        study("既然是自己的决定，就不要总怪别人。", "Jìrán shì zìjǐ de juédìng, jiù búyào zǒng guài biérén.", "Nếu đã là quyết định của mình thì đừng cứ trách người khác."),
        study("既然想改变，就得主动一点儿。", "Jìrán xiǎng gǎibiàn, jiù děi zhǔdòng yìdiǎnr.", "Nếu đã muốn thay đổi thì phải chủ động hơn một chút.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 选择", "2. 承担", "3. 主动"], options: ["a. chủ động", "b. lựa chọn", "c. gánh vác"], answer: "1-b, 2-c, 3-a" }],
      [{ question: "Điền từ thích hợp.", prompt: ["每个选择都可能带来不同的后___。", "既然是自己的决定，就要学会承___。", "你越主___，生活给你的可能性就越多。"], answer: "果 / 担 / 动" }],
      [{ question: "Câu nào đúng?", options: ["A. 一旦做出选择，就得承担后果。", "B. 一旦承担后果，就得做出选择。", "C. 做出选择一旦，就得承担后果。"], answer: "A. 一旦做出选择，就得承担后果。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 你相信人生真的可以改变吗？", "B: ____________", "A: 这句话让我觉得很有力量。"], answer: "B: 我相信，只要还有选择，就还有改变的可能。" }],
      "Tự kiểm tra: bạn có thể nói một thay đổi mình muốn làm và cái giá mình sẵn sàng chịu không?"
    ),
    quickSummary: {
      words: ["选择", "改变", "决定", "后果", "承担", "主动"],
      patterns: ["只要还有选择，就还有改变的可能。", "一旦做出选择，就得承担后果。"],
      reminder: "Bài này cần nói có trách nhiệm hơn HSK 4: không chỉ nói muốn gì, mà còn nói chấp nhận điều gì."
    }
  },
  4: {
    objective: "Đọc và bàn về điển cố Tử Lộ cõng gạo, từ đó diễn đạt suy nghĩ về hiếu thảo, ân hận và giá trị của việc làm đúng lúc.",
    vocabulary: [
      vocab("背", "bēi", "cõng, vác trên lưng", "động từ", "Trong bài này là hành động cụ thể gắn với lòng hiếu thảo.", "他年轻的时候常常背米回家。", "Tā niánqīng de shíhou chángcháng bēi mǐ huí jiā.", "Lúc còn trẻ anh ấy thường cõng gạo về nhà."),
      vocab("孝顺", "xiàoshùn", "hiếu thảo", "tính từ/động từ", "Từ khóa đạo đức trung tâm của bài.", "人们常常用这件事来称赞他很孝顺。", "Rénmen chángcháng yòng zhè jiàn shì lái chēngzàn tā hěn xiàoshùn.", "Mọi người thường dùng chuyện này để khen anh ấy rất hiếu thảo."),
      vocab("贫穷", "pínqióng", "nghèo khó", "tính từ/danh từ", "Bối cảnh xuất phát của câu chuyện.", "那时候家里条件很差，生活也很贫穷。", "Nà shíhou jiālǐ tiáojiàn hěn chà, shēnghuó yě hěn pínqióng.", "Khi ấy điều kiện gia đình rất kém, cuộc sống cũng rất nghèo khó."),
      vocab("后悔", "hòuhuǐ", "hối hận", "động từ/tính từ", "Bài này nhấn vào sự nuối tiếc khi không còn cơ hội nữa.", "等到明白的时候再后悔，往往已经晚了。", "Děng dào míngbai de shíhou zài hòuhuǐ, wǎngwǎng yǐjīng wǎn le.", "Đợi đến khi hiểu ra rồi mới hối hận thì thường đã muộn."),
      vocab("来不及", "láibují", "không kịp", "động từ", "Thường xuất hiện khi nói cơ hội hiếu thảo đã trôi qua.", "有些事情等到想做的时候，已经来不及了。", "Yǒuxiē shìqing děng dào xiǎng zuò de shíhou, yǐjīng láibují le.", "Có những việc đợi đến lúc muốn làm thì đã không kịp nữa."),
      vocab("奉养", "fèngyǎng", "phụng dưỡng", "động từ", "Trang trọng hơn 照顾, thường dùng khi nói về cha mẹ.", "他后来虽然有条件了，却没有机会再奉养父母。", "Tā hòulái suīrán yǒu tiáojiàn le, què méiyǒu jīhuì zài fèngyǎng fùmǔ.", "Sau này tuy anh ấy đã có điều kiện hơn, nhưng không còn cơ hội phụng dưỡng cha mẹ nữa."),
      vocab("难得", "nándé", "đáng quý, hiếm có", "tính từ", "Dùng để khen phẩm chất tốt.", "在困难的时候还能想到父母，这一点很难得。", "Zài kùnnan de shíhou hái néng xiǎngdào fùmǔ, zhè yìdiǎn hěn nándé.", "Trong lúc khó khăn mà vẫn nghĩ đến cha mẹ, điểm này rất đáng quý."),
      vocab("及时", "jíshí", "kịp thời", "phó từ/tính từ", "Bài học rút ra là việc tốt nên làm kịp thời.", "该表达的关心要及时说出来。", "Gāi biǎodá de guānxīn yào jíshí shuō chūlai.", "Sự quan tâm cần thể hiện thì phải nói ra kịp thời.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Nói tóm tắt câu chuyện.", [
        study("A: 你听过“子路背米”的故事吗？", "A: Nǐ tīngguo “Zǐlù bēi mǐ” de gùshi ma?", "A: Bạn từng nghe câu chuyện “Tử Lộ cõng gạo” chưa?"),
        study("B: 听过，说的是他家里很穷的时候，还想着让父母吃得好一点儿。", "B: Tīngguo, shuō de shì tā jiālǐ hěn qióng de shíhou, hái xiǎngzhe ràng fùmǔ chī de hǎo yìdiǎnr.", "B: Có, câu chuyện nói rằng lúc nhà anh ấy rất nghèo, anh ấy vẫn nghĩ đến việc để cha mẹ ăn tốt hơn một chút."),
        study("A: 所以大家一直把这个故事当作孝顺的例子。", "A: Suǒyǐ dàjiā yìzhí bǎ zhège gùshi dàngzuò xiàoshùn de lìzi.", "A: Vì vậy mọi người luôn xem câu chuyện này như một ví dụ về lòng hiếu thảo.")
      ]),
      dialogueBlock("Tình huống 2", "Bài học từ sự hối tiếc.", [
        study("A: 这个故事最让你感动的地方是什么？", "A: Zhège gùshi zuì ràng nǐ gǎndòng de dìfang shì shénme?", "A: Điều trong câu chuyện này làm bạn cảm động nhất là gì?"),
        study("B: 是他后来虽然有条件了，却没有机会再奉养父母。", "B: Shì tā hòulái suīrán yǒu tiáojiàn le, què méiyǒu jīhuì zài fèngyǎng fùmǔ.", "B: Là việc sau này tuy anh ấy đã có điều kiện hơn, nhưng không còn cơ hội phụng dưỡng cha mẹ nữa."),
        study("A: 对，这种后悔比贫穷更让人难受。", "A: Duì, zhè zhǒng hòuhuǐ bǐ pínqióng gèng ràng rén nánshòu.", "A: Đúng, kiểu hối hận này còn khiến người ta khó chịu hơn cả nghèo khó.")
      ]),
      dialogueBlock("Tình huống 3", "Liên hệ đời sống hiện đại.", [
        study("A: 现在的人生活条件好了，可为什么还是常常遗憾？", "A: Xiànzài de rén shēnghuó tiáojiàn hǎo le, kě wèishénme háishi chángcháng yíhàn?", "A: Người thời nay điều kiện sống tốt hơn rồi, nhưng vì sao vẫn thường tiếc nuối?"),
        study("B: 因为很多人总觉得以后还有时间，结果一拖再拖。", "B: Yīnwèi hěn duō rén zǒng juéde yǐhòu hái yǒu shíjiān, jiéguǒ yì tuō zài tuō.", "B: Vì nhiều người luôn nghĩ sau này vẫn còn thời gian, kết quả là kéo dài mãi."),
        study("A: 所以真正重要的事不能总等以后。", "A: Suǒyǐ zhēnzhèng zhòngyào de shì bùnéng zǒng děng yǐhòu.", "A: Vì vậy những việc thực sự quan trọng không thể cứ mãi đợi đến sau này.")
      ]),
      dialogueBlock("Tình huống 4", "Rút ra bài học ứng xử.", [
        study("A: 那你从这个故事里学到了什么？", "A: Nà nǐ cóng zhège gùshi lǐ xuédào le shénme?", "A: Vậy bạn học được điều gì từ câu chuyện này?"),
        study("B: 我觉得该表达的爱和关心要及时，不然等后悔的时候就来不及了。", "B: Wǒ juéde gāi biǎodá de ài hé guānxīn yào jíshí, bùrán děng hòuhuǐ de shíhou jiù láibují le.", "B: Tôi thấy tình yêu và sự quan tâm cần thể hiện thì phải kịp thời, nếu không đợi đến lúc hối hận sẽ không còn kịp nữa."),
        study("A: 这也是这个故事到现在还打动人的原因。", "A: Zhè yě shì zhège gùshi dào xiànzài hái dǎdòng rén de yuányīn.", "A: Đó cũng là lý do câu chuyện này đến giờ vẫn còn chạm đến lòng người.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 虽然……却……", "Mẫu này dùng để diễn đạt sự đối lập có sắc thái mạnh hơn 虽然……但是…… trong văn viết và kể chuyện.", study("他后来虽然有条件了，却没有机会再奉养父母。", "Tā hòulái suīrán yǒu tiáojiàn le, què méiyǒu jīhuì zài fèngyǎng fùmǔ.", "Sau này tuy anh ấy đã có điều kiện hơn, nhưng không còn cơ hội phụng dưỡng cha mẹ nữa."), [
        study("她虽然没说什么，心里却一直记着这件事。", "Tā suīrán méi shuō shénme, xīnli què yìzhí jìzhe zhè jiàn shì.", "Cô ấy tuy không nói gì, nhưng trong lòng vẫn luôn nhớ chuyện này."),
        study("我们虽然天天见面，却很少认真聊天。", "Wǒmen suīrán tiāntiān jiànmiàn, què hěn shǎo rènzhēn liáotiān.", "Chúng tôi tuy gặp nhau mỗi ngày, nhưng rất ít khi trò chuyện nghiêm túc."),
        study("他虽然年轻，却比很多人更懂事。", "Tā suīrán niánqīng, què bǐ hěn duō rén gèng dǒngshì.", "Anh ấy tuy còn trẻ, nhưng hiểu chuyện hơn nhiều người.")
      ]),
      grammarNote("2. 该……要…… / 不然……就……", "Hai mẫu này giúp biến bài học đạo đức thành lời khuyên thực tế có điều kiện và hậu quả rõ ràng.", study("该表达的爱和关心要及时，不然等后悔的时候就来不及了。", "Gāi biǎodá de ài hé guānxīn yào jíshí, bùrán děng hòuhuǐ de shíhou jiù láibují le.", "Tình yêu và sự quan tâm cần thể hiện thì phải kịp thời, nếu không đợi đến lúc hối hận sẽ không còn kịp nữa."), [
        study("该说的话要早点儿说，不然容易留下遗憾。", "Gāi shuō de huà yào zǎodiǎnr shuō, bùrán róngyì liúxià yíhàn.", "Điều cần nói thì nên nói sớm, nếu không dễ để lại tiếc nuối."),
        study("该做的事要及时去做，不然机会就过去了。", "Gāi zuò de shì yào jíshí qù zuò, bùrán jīhuì jiù guòqù le.", "Việc cần làm thì phải làm kịp thời, nếu không cơ hội sẽ trôi qua."),
        study("该陪父母的时候就多陪一陪，不然以后可能会后悔。", "Gāi péi fùmǔ de shíhou jiù duō péi yì péi, bùrán yǐhòu kěnéng huì hòuhuǐ.", "Lúc cần ở bên cha mẹ thì hãy ở bên nhiều hơn một chút, nếu không sau này có thể sẽ hối hận.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 孝顺", "2. 奉养", "3. 后悔"], options: ["a. hiếu thảo", "b. hối hận", "c. phụng dưỡng"], answer: "1-a, 2-c, 3-b" }],
      [{ question: "Điền từ thích hợp.", prompt: ["有些事情等到想做的时候，已经来不___了。", "他后来虽然有条件了，却没有机会再奉___父母。", "该表达的关心要及___说出来。"], answer: "及 / 养 / 时" }],
      [{ question: "Câu nào đúng?", options: ["A. 他后来虽然有条件了，却没有机会再奉养父母。", "B. 他后来虽然有条件了，再奉养父母却没有机会。", "C. 虽然他后来有条件了，没有机会却再奉养父母。"], answer: "A. 他后来虽然有条件了，却没有机会再奉养父母。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 那你从这个故事里学到了什么？", "B: ____________", "A: 这也是这个故事到现在还打动人的原因。"], answer: "B: 我觉得该表达的爱和关心要及时，不然等后悔的时候就来不及了。" }],
      "Tự kiểm tra: bạn có thể nói một việc với gia đình mà mình không nên trì hoãn nữa không?"
    ),
    quickSummary: {
      words: ["背", "孝顺", "后悔", "来不及", "奉养", "及时"],
      patterns: ["他后来虽然有条件了，却没有机会再奉养父母。", "该表达的爱和关心要及时。"],
      reminder: "Bài này cần giữ giọng kể chín hơn: kể chuyện xong phải rút ra ý nghĩa sống, không dừng ở câu chuyện."
    }
  },
  5: {
    objective: "Miêu tả phong cảnh Tế Nam và nói về vẻ đẹp của một thành phố bằng ngôn ngữ giàu hình ảnh hơn, nhưng vẫn rõ cấu trúc cho người học Việt Nam.",
    vocabulary: [
      vocab("泉水", "quánshuǐ", "nước suối", "danh từ", "Từ trung tâm của bài về Tế Nam.", "济南最有名的就是城里的泉水。", "Jǐnán zuì yǒumíng de jiùshì chéng lǐ de quánshuǐ.", "Thứ nổi tiếng nhất ở Tế Nam chính là các dòng suối trong thành phố."),
      vocab("清澈", "qīngchè", "trong veo", "tính từ", "Hay dùng để mô tả nước, ánh mắt, âm thanh.", "泉水清澈得连水底都能看见。", "Quánshuǐ qīngchè de lián shuǐdǐ dōu néng kànjiàn.", "Nước suối trong đến mức có thể nhìn thấy cả đáy nước."),
      vocab("景色", "jǐngsè", "cảnh sắc", "danh từ", "Mang sắc thái văn viết hơn 风景.", "这里的景色和别的城市很不一样。", "Zhèlǐ de jǐngsè hé bié de chéngshì hěn bù yíyàng.", "Cảnh sắc nơi đây rất khác với những thành phố khác."),
      vocab("流动", "liúdòng", "chảy, lưu động", "động từ/tính từ", "Dùng để diễn tả sức sống của nước hoặc nhịp chuyển động của cảnh vật.", "城里的很多地方都能看到泉水流动。", "Chéng lǐ de hěn duō dìfang dōu néng kàndào quánshuǐ liúdòng.", "Rất nhiều nơi trong thành phố đều có thể thấy nước suối chảy."),
      vocab("自然", "zìrán", "tự nhiên", "tính từ/danh từ", "Bài này nhấn mạnh vẻ đẹp tự nhiên hòa vào đời sống con người.", "这里的美让人觉得既自然又安静。", "Zhèlǐ de měi ràng rén juéde jì zìrán yòu ānjìng.", "Vẻ đẹp nơi đây khiến người ta cảm thấy vừa tự nhiên vừa yên tĩnh."),
      vocab("形成", "xíngchéng", "hình thành", "động từ", "Dùng để nói nguyên nhân tạo nên đặc trưng cảnh quan.", "这些泉眼经过很长时间才形成现在的样子。", "Zhèxiē quányǎn jīngguò hěn cháng shíjiān cái xíngchéng xiànzài de yàngzi.", "Những miệng suối này phải trải qua thời gian rất dài mới hình thành dáng vẻ hiện tại."),
      vocab("名胜", "míngshèng", "danh thắng", "danh từ", "Hay đi với 古迹, 风景区.", "很多游客是为了这里的名胜和泉水来的。", "Hěn duō yóukè shì wèile zhèlǐ de míngshèng hé quánshuǐ lái de.", "Nhiều du khách đến đây là vì danh thắng và các dòng suối của nơi này."),
      vocab("安静", "ānjìng", "yên tĩnh", "tính từ", "Dùng để diễn đạt cảm giác thành phố có nhịp riêng.", "站在泉边的时候，人很容易安静下来。", "Zhàn zài quán biān de shíhou, rén hěn róngyì ānjìng xiàlái.", "Khi đứng bên suối, con người rất dễ trở nên lắng lại.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Giới thiệu nét nổi bật của Tế Nam.", [
        study("A: 你去过济南吗？", "A: Nǐ qùguo Jǐnán ma?", "A: Bạn từng đến Tế Nam chưa?"),
        study("B: 去过，最让我印象深刻的就是那里的泉水。", "B: Qùguo, zuì ràng wǒ yìnxiàng shēnkè de jiùshì nàlǐ de quánshuǐ.", "B: Rồi, thứ làm tôi ấn tượng sâu nhất chính là những dòng suối ở đó."),
        study("A: 听说那里的泉水跟城市生活连在一起。", "A: Tīngshuō nàlǐ de quánshuǐ gēn chéngshì shēnghuó lián zài yìqǐ.", "A: Nghe nói các dòng suối ở đó gắn liền với đời sống thành phố.")
      ]),
      dialogueBlock("Tình huống 2", "Miêu tả vẻ đẹp của nước suối.", [
        study("A: 这些泉水到底特别在哪儿？", "A: Zhèxiē quánshuǐ dàodǐ tèbié zài nǎr?", "A: Rốt cuộc những dòng suối này đặc biệt ở điểm nào?"),
        study("B: 水特别清澈，而且很多地方都能看见它自然地流动。", "B: Shuǐ tèbié qīngchè, érqiě hěn duō dìfang dōu néng kànjiàn tā zìrán de liúdòng.", "B: Nước đặc biệt trong veo, hơn nữa ở nhiều nơi đều có thể thấy nó chảy một cách tự nhiên."),
        study("A: 这样一来，整个城市的景色都会显得很有灵气。", "A: Zhèyàng yì lái, zhěng ge chéngshì de jǐngsè dōu huì xiǎnde hěn yǒu língqì.", "A: Như vậy toàn bộ cảnh sắc thành phố sẽ toát lên vẻ rất có hồn.")
      ]),
      dialogueBlock("Tình huống 3", "Nói cảm giác cá nhân khi đứng bên suối.", [
        study("A: 你最喜欢哪里的风景？", "A: Nǐ zuì xǐhuan nǎlǐ de fēngjǐng?", "A: Bạn thích phong cảnh ở đâu nhất?"),
        study("B: 我喜欢站在泉边看水慢慢流，那种感觉很安静。", "B: Wǒ xǐhuan zhàn zài quán biān kàn shuǐ mànmàn liú, nà zhǒng gǎnjué hěn ānjìng.", "B: Tôi thích đứng bên suối nhìn nước chảy chậm rãi, cảm giác đó rất yên tĩnh."),
        study("A: 看来那里的美不是热闹的，而是耐看的。", "A: Kànlai nàlǐ de měi bú shì rènao de, érshì nàikàn de.", "A: Có vẻ cái đẹp ở đó không phải kiểu náo nhiệt, mà là kiểu càng ngắm càng thấy đẹp.")
      ]),
      dialogueBlock("Tình huống 4", "Liên hệ danh thắng và văn hóa địa phương.", [
        study("A: 除了泉水，济南还有什么值得看？", "A: Chúle quánshuǐ, Jǐnán hái yǒu shénme zhídé kàn?", "A: Ngoài các dòng suối, Tế Nam còn có gì đáng xem nữa?"),
        study("B: 还有很多跟泉水有关的名胜和老街，走一走就能感觉到这座城市的气质。", "B: Hái yǒu hěn duō gēn quánshuǐ yǒuguān de míngshèng hé lǎojiē, zǒu yì zǒu jiù néng gǎnjué dào zhè zuò chéngshì de qìzhì.", "B: Còn có rất nhiều danh thắng và phố cổ liên quan đến suối, chỉ cần đi một vòng là có thể cảm nhận được khí chất của thành phố này."),
        study("A: 这样听下来，我越来越想去看看了。", "A: Zhèyàng tīng xialai, wǒ yuèláiyuè xiǎng qù kànkan le.", "A: Nghe như vậy xong, tôi càng lúc càng muốn đến xem thử.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 连……都…… / ……得……", "Hai mẫu này rất hay dùng trong miêu tả HSK 5: một mẫu để nhấn mạnh mức độ, một mẫu để bổ sung kết quả/miêu tả.", study("泉水清澈得连水底都能看见。", "Quánshuǐ qīngchè de lián shuǐdǐ dōu néng kànjiàn.", "Nước suối trong đến mức có thể nhìn thấy cả đáy nước."), [
        study("风景美得让人不想离开。", "Fēngjǐng měi de ràng rén bù xiǎng líkāi.", "Phong cảnh đẹp đến mức khiến người ta không muốn rời đi."),
        study("这里安静得连说话声都显得特别清楚。", "Zhèlǐ ānjìng de lián shuōhuà shēng dōu xiǎnde tèbié qīngchu.", "Nơi đây yên tĩnh đến mức cả tiếng nói chuyện cũng trở nên rất rõ."),
        study("泉水清得连倒影都像画一样。", "Quánshuǐ qīng de lián dàoyǐng dōu xiàng huà yíyàng.", "Nước suối trong đến mức cả bóng phản chiếu cũng như tranh.")
      ]),
      grammarNote("2. 一……就…… / 这样一来", "Một mẫu nhấn mạnh phản ứng ngay lập tức, một mẫu dùng để nối kết quả logic trong mô tả và giải thích.", study("走一走就能感觉到这座城市的气质。", "Zǒu yì zǒu jiù néng gǎnjué dào zhè zuò chéngshì de qìzhì.", "Chỉ cần đi dạo một chút là có thể cảm nhận được khí chất của thành phố này."), [
        study("一站在泉边，人就容易安静下来。", "Yí zhàn zài quán biān, rén jiù róngyì ānjìng xiàlái.", "Vừa đứng bên suối là con người dễ lắng lại."),
        study("这样一来，城市和自然就更像连在了一起。", "Zhèyàng yì lái, chéngshì hé zìrán jiù gèng xiàng lián zài le yìqǐ.", "Như vậy thành phố và tự nhiên dường như càng gắn vào nhau hơn."),
        study("这样一来，游客就不只是看风景，也是在感受生活。", "Zhèyàng yì lái, yóukè jiù bú zhǐshì kàn fēngjǐng, yě shì zài gǎnshòu shēnghuó.", "Như vậy du khách không chỉ ngắm phong cảnh mà còn đang cảm nhận cuộc sống.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 清澈", "2. 名胜", "3. 形成"], options: ["a. danh thắng", "b. trong veo", "c. hình thành"], answer: "1-b, 2-a, 3-c" }],
      [{ question: "Điền từ thích hợp.", prompt: ["泉水清___得连水底都能看见。", "很多游客是为了这里的名___来的。", "这些泉眼经过很长时间才形___现在的样子。"], answer: "澈 / 胜 / 成" }],
      [{ question: "Câu nào đúng?", options: ["A. 走一走就能感觉到这座城市的气质。", "B. 走一走这座城市就能感觉到的气质。", "C. 感觉到这座城市的气质就能走一走。"], answer: "A. 走一走就能感觉到这座城市的气质。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 这些泉水到底特别在哪儿？", "B: ____________", "A: 这样一来，整个城市的景色都会显得很有灵气。"], answer: "B: 水特别清澈，而且很多地方都能看见它自然地流动。" }],
      "Tự kiểm tra: bạn có thể dùng 2 đến 3 câu để miêu tả một phong cảnh khiến mình ấn tượng không?"
    ),
    quickSummary: {
      words: ["泉水", "清澈", "景色", "流动", "形成", "名胜"],
      patterns: ["泉水清澈得连水底都能看见。", "走一走就能感觉到这座城市的气质。"],
      reminder: "Bài này cần miêu tả có hình ảnh hơn HSK 4, nhưng câu vẫn phải rõ và dễ theo dõi."
    }
  },
  6: {
    objective: "Giải thích nguồn gốc của đêm giao thừa, kể lại truyền thuyết dân gian và liên hệ với phong tục Tết bằng ngôn ngữ HSK 5.",
    vocabulary: [
      vocab("除夕", "Chúxī", "đêm giao thừa", "danh từ", "Ngày cuối cùng của năm âm lịch trong văn hóa Trung Quốc.", "除夕晚上，全家都会一起吃年夜饭。", "Chúxī wǎnshang, quánjiā dōu huì yìqǐ chī niányèfàn.", "Tối giao thừa, cả nhà đều sẽ cùng ăn bữa cơm tất niên."),
      vocab("由来", "yóulái", "nguồn gốc", "danh từ", "Dùng để hỏi hoặc giải thích vì sao một phong tục xuất hiện.", "很多传统节日都有自己的由来。", "Hěn duō chuántǒng jiérì dōu yǒu zìjǐ de yóulái.", "Nhiều ngày lễ truyền thống đều có nguồn gốc riêng của mình."),
      vocab("传说", "chuánshuō", "truyền thuyết", "danh từ/động từ", "Bài này dùng để kể câu chuyện dân gian về 年.", "关于除夕的由来，有一个很有名的传说。", "Guānyú Chúxī de yóulái, yǒu yí ge hěn yǒumíng de chuánshuō.", "Về nguồn gốc của giao thừa, có một truyền thuyết rất nổi tiếng."),
      vocab("吓跑", "xiàpǎo", "dọa chạy mất", "động từ", "Dùng trong chuyện dân gian với quái vật 年.", "人们用红色和响声把怪物吓跑了。", "Rénmen yòng hóngsè hé xiǎngshēng bǎ guàiwù xiàpǎo le.", "Mọi người dùng màu đỏ và tiếng động để dọa con quái vật bỏ chạy."),
      vocab("风俗", "fēngsú", "phong tục", "danh từ", "Liên hệ truyền thuyết với tập quán đời sống.", "很多风俗其实都和古老传说有关。", "Hěn duō fēngsú qíshí dōu hé gǔlǎo chuánshuō yǒuguān.", "Nhiều phong tục thật ra đều có liên quan đến truyền thuyết cổ xưa."),
      vocab("热闹", "rènao", "náo nhiệt", "tính từ", "Mô tả không khí Tết và đêm giao thừa.", "除夕那天，街上和家里都特别热闹。", "Chúxī nà tiān, jiē shàng hé jiālǐ dōu tèbié rènao.", "Ngày giao thừa, ngoài phố và trong nhà đều đặc biệt náo nhiệt."),
      vocab("燃放", "ránfàng", "đốt, bắn", "động từ", "Hay đi với 烟花, 鞭炮.", "以前很多地方都会燃放鞭炮。", "Yǐqián hěn duō dìfang dōu huì ránfàng biānpào.", "Trước đây nhiều nơi đều đốt pháo."),
      vocab("象征", "xiàngzhēng", "tượng trưng", "động từ/danh từ", "Giúp nối từ truyền thuyết sang ý nghĩa văn hóa.", "贴春联和挂红灯笼都象征着吉祥。", "Tiē chūnlián hé guà hóng dēnglóng dōu xiàngzhēngzhe jíxiáng.", "Dán câu đối Tết và treo lồng đèn đỏ đều tượng trưng cho may mắn.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Hỏi về nguồn gốc giao thừa.", [
        study("A: 你知道“除夕”这个名字是怎么来的吗？", "A: Nǐ zhīdào “Chúxī” zhège míngzi shì zěnme lái de ma?", "A: Bạn có biết tên gọi “giao thừa” này có nguồn gốc thế nào không?"),
        study("B: 大概知道一点儿，听说和一个古老的传说有关。", "B: Dàgài zhīdào yìdiǎnr, tīngshuō hé yí ge gǔlǎo de chuánshuō yǒuguān.", "B: Tôi biết sơ một chút, nghe nói có liên quan đến một truyền thuyết cổ xưa."),
        study("A: 对，很多现在的风俗其实就是从那个故事里来的。", "A: Duì, hěn duō xiànzài de fēngsú qíshí jiùshì cóng nàge gùshi lǐ lái de.", "A: Đúng, nhiều phong tục hiện nay thật ra chính là từ câu chuyện đó mà ra.")
      ]),
      dialogueBlock("Tình huống 2", "Kể lại ý chính của truyền thuyết.", [
        study("A: 传说里最关键的内容是什么？", "A: Chuánshuō lǐ zuì guānjiàn de nèiróng shì shénme?", "A: Nội dung mấu chốt nhất trong truyền thuyết là gì?"),
        study("B: 据说以前有一种怪物每到年底都会出来，所以人们想办法把它吓跑。", "B: Jùshuō yǐqián yǒu yì zhǒng guàiwù měi dào niándǐ dōu huì chūlai, suǒyǐ rénmen xiǎng bànfǎ bǎ tā xiàpǎo.", "B: Nghe nói trước đây có một con quái vật cứ đến cuối năm là xuất hiện, nên mọi người tìm cách dọa nó chạy mất."),
        study("A: 难怪红色和鞭炮后来都变得这么重要。", "A: Nánguài hóngsè hé biānpào hòulái dōu biàn de zhème zhòngyào.", "A: Bảo sao màu đỏ và pháo sau này đều trở nên quan trọng như vậy.")
      ]),
      dialogueBlock("Tình huống 3", "Nối truyền thuyết với phong tục ngày nay.", [
        study("A: 现在很多地方已经不怎么放鞭炮了。", "A: Xiànzài hěn duō dìfang yǐjīng bù zěnme fàng biānpào le.", "A: Bây giờ nhiều nơi đã không còn đốt pháo nhiều nữa."),
        study("B: 是，不过贴春联、吃年夜饭这些风俗还是保留了下来。", "B: Shì, búguò tiē chūnlián, chī niányèfàn zhèxiē fēngsú háishi bǎoliú le xialai.", "B: Đúng, nhưng những phong tục như dán câu đối, ăn cơm tất niên vẫn được giữ lại."),
        study("A: 这说明传统不一定完全照旧，但它的意义还在。", "A: Zhè shuōmíng chuántǒng bù yídìng wánquán zhàojiù, dàn tā de yìyì hái zài.", "A: Điều đó cho thấy truyền thống chưa chắc giữ nguyên hoàn toàn, nhưng ý nghĩa của nó vẫn còn.")
      ]),
      dialogueBlock("Tình huống 4", "Nói ý nghĩa của giao thừa với gia đình.", [
        study("A: 对你来说，除夕最重要的是什么？", "A: Duì nǐ lái shuō, Chúxī zuì zhòngyào de shì shénme?", "A: Đối với bạn, điều quan trọng nhất của đêm giao thừa là gì?"),
        study("B: 不是吃什么，而是一家人能不能坐在一起。", "B: Bú shì chī shénme, érshì yì jiā rén néng bu néng zuò zài yìqǐ.", "B: Không phải là ăn gì, mà là cả gia đình có thể ngồi cùng nhau hay không."),
        study("A: 说得好，热闹背后真正珍贵的是团圆。", "A: Shuō de hǎo, rènao bèihòu zhēnzhèng zhēnguì de shì tuányuán.", "A: Nói hay lắm, phía sau sự náo nhiệt, điều quý nhất thật ra là đoàn viên.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 据说…… / 每到……就……", "据说 dùng để dẫn thông tin mang tính truyền kể; 每到……就…… dùng để nói tình huống lặp lại theo thời điểm.", study("据说以前有一种怪物每到年底都会出来。", "Jùshuō yǐqián yǒu yì zhǒng guàiwù měi dào niándǐ dōu huì chūlai.", "Nghe nói trước đây có một con quái vật cứ đến cuối năm là xuất hiện."), [
        study("据说这座老城有很多有意思的故事。", "Jùshuō zhè zuò lǎochéng yǒu hěn duō yǒu yìsi de gùshi.", "Nghe nói thành cổ này có rất nhiều câu chuyện thú vị."),
        study("每到春节，很多人都会回家团圆。", "Měi dào Chūnjié, hěn duō rén dōu huì huí jiā tuányuán.", "Cứ đến Tết xuân là rất nhiều người sẽ về nhà đoàn viên."),
        study("每到冬天，这里就特别安静。", "Měi dào dōngtiān, zhèlǐ jiù tèbié ānjìng.", "Cứ đến mùa đông là nơi này đặc biệt yên tĩnh.")
      ]),
      grammarNote("2. 不一定……但…… / 不是……而是……", "Hai mẫu này giúp nói rõ quan điểm về việc giữ truyền thống theo cách linh hoạt, không cực đoan.", study("传统不一定完全照旧，但它的意义还在。", "Chuántǒng bù yídìng wánquán zhàojiù, dàn tā de yìyì hái zài.", "Truyền thống chưa chắc giữ nguyên hoàn toàn, nhưng ý nghĩa của nó vẫn còn."), [
        study("重要的不是形式，而是人们记得它为什么存在。", "Zhòngyào de bú shì xíngshì, érshì rénmen jìde tā wèishénme cúnzài.", "Điều quan trọng không phải là hình thức, mà là con người nhớ vì sao nó tồn tại."),
        study("风俗不一定每年都一样，但团圆的心情不会变。", "Fēngsú bù yídìng měinián dōu yíyàng, dàn tuányuán de xīnqíng bú huì biàn.", "Phong tục chưa chắc năm nào cũng giống nhau, nhưng cảm xúc đoàn viên thì không đổi."),
        study("除夕最珍贵的不是热闹，而是家人在一起。", "Chúxī zuì zhēnguì de bú shì rènao, érshì jiārén zài yìqǐ.", "Điều quý nhất của giao thừa không phải là sự náo nhiệt, mà là gia đình ở bên nhau.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 由来", "2. 风俗", "3. 象征"], options: ["a. phong tục", "b. tượng trưng", "c. nguồn gốc"], answer: "1-c, 2-a, 3-b" }],
      [{ question: "Điền từ thích hợp.", prompt: ["关于除夕的___来，有一个很有名的传说。", "人们用红色和响声把怪物吓___了。", "贴春联都象___着吉祥。"], answer: "由 / 跑 / 征" }],
      [{ question: "Câu nào đúng?", options: ["A. 传统不一定完全照旧，但它的意义还在。", "B. 传统意义还在，但它不一定完全照旧。", "C. 传统完全照旧不一定，但它的意义还在。"], answer: "A. 传统不一定完全照旧，但它的意义还在。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 对你来说，除夕最重要的是什么？", "B: ____________", "A: 说得好，热闹背后真正珍贵的是团圆。"], answer: "B: 不是吃什么，而是一家人能不能坐在一起。" }],
      "Tự kiểm tra: bạn có thể dùng 2 đến 3 câu để giải thích một phong tục Tết mà mình thấy có ý nghĩa không?"
    ),
    quickSummary: {
      words: ["除夕", "由来", "传说", "风俗", "热闹", "象征"],
      patterns: ["据说以前有一种怪物每到年底都会出来。", "传统不一定完全照旧，但它的意义还在。"],
      reminder: "Bài này cần kể chuyện xong rồi nối được sang văn hóa, không chỉ dừng ở truyền thuyết."
    }
  },
  7: {
    objective: "Kể lại hai câu chuyện thành ngữ, rút ra bài học và diễn đạt ý nghĩa của thành ngữ trong bối cảnh hiện đại.",
    vocabulary: [
      vocab("成语", "chéngyǔ", "thành ngữ", "danh từ", "Trung tâm của bài 7.", "很多成语后面都有一个有意思的故事。", "Hěn duō chéngyǔ hòumiàn dōu yǒu yí ge yǒu yìsi de gùshi.", "Đằng sau nhiều thành ngữ đều có một câu chuyện thú vị."),
      vocab("故事", "gùshi", "câu chuyện", "danh từ", "Dùng trong kể chuyện và rút ý nghĩa.", "先知道故事，才更容易理解这个成语。", "Xiān zhīdào gùshi, cái gèng róngyì lǐjiě zhège chéngyǔ.", "Phải biết câu chuyện trước thì mới dễ hiểu thành ngữ này hơn."),
      vocab("道理", "dàolǐ", "đạo lý, lẽ phải", "danh từ", "Thành ngữ thường được dùng để gửi gắm một bài học.", "这些故事短，但是里面的道理不简单。", "Zhèxiē gùshi duǎn, dànshì lǐmiàn de dàolǐ bù jiǎndān.", "Những câu chuyện này ngắn, nhưng đạo lý bên trong không hề đơn giản."),
      vocab("教训", "jiàoxun", "bài học cảnh tỉnh", "danh từ", "Khác với 道理 ở sắc thái thực tế và có giá phải trả.", "有些成语听起来有趣，其实包含很深的教训。", "Yǒuxiē chéngyǔ tīngqilai yǒuqù, qíshí bāohán hěn shēn de jiàoxun.", "Có những thành ngữ nghe thú vị nhưng thật ra chứa bài học rất sâu."),
      vocab("启发", "qǐfā", "gợi mở, gợi cảm hứng", "động từ/danh từ", "Dùng khi thành ngữ khiến người ta suy nghĩ thêm.", "这个故事给我最大的启发是不要只看表面。", "Zhège gùshi gěi wǒ zuì dà de qǐfā shì búyào zhǐ kàn biǎomiàn.", "Gợi mở lớn nhất mà câu chuyện này cho tôi là đừng chỉ nhìn bề mặt."),
      vocab("表面", "biǎomiàn", "bề mặt", "danh từ", "Thường dùng trong thành ngữ và phê phán nhận thức hời hợt.", "有些事情看起来简单，其实不能只看表面。", "Yǒuxiē shìqing kànqilai jiǎndān, qíshí bùnéng zhǐ kàn biǎomiàn.", "Có những việc trông có vẻ đơn giản, nhưng thật ra không thể chỉ nhìn bề mặt."),
      vocab("误解", "wùjiě", "hiểu lầm", "danh từ/động từ", "Dùng khi con người tiếp nhận sai ý nghĩa của hành động hay câu nói.", "不了解背景的话，很容易误解别人。", "Bù liǎojiě bèijǐng de huà, hěn róngyì wùjiě biérén.", "Nếu không hiểu bối cảnh thì rất dễ hiểu lầm người khác."),
      vocab("提醒", "tíxǐng", "nhắc nhở", "động từ/danh từ", "Thành ngữ thường được dùng như một cách nhắc nhở súc tích.", "有时候一个成语就能提醒我们很多事。", "Yǒushíhou yí ge chéngyǔ jiù néng tíxǐng wǒmen hěn duō shì.", "Đôi khi chỉ một thành ngữ cũng có thể nhắc nhở chúng ta rất nhiều điều.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Nói vì sao học thành ngữ cần biết chuyện đằng sau.", [
        study("A: 你觉得学成语难吗？", "A: Nǐ juéde xué chéngyǔ nán ma?", "A: Bạn thấy học thành ngữ khó không?"),
        study("B: 只记字面意思的话挺难的，可是知道故事以后就容易多了。", "B: Zhǐ jì zìmiàn yìsi de huà tǐng nán de, kěshì zhīdào gùshi yǐhòu jiù róngyì duō le.", "B: Nếu chỉ nhớ nghĩa trên mặt chữ thì khá khó, nhưng sau khi biết câu chuyện sẽ dễ hơn nhiều."),
        study("A: 对，因为很多成语真正有意思的地方就在背景里。", "A: Duì, yīnwèi hěn duō chéngyǔ zhēnzhèng yǒu yìsi de dìfang jiù zài bèijǐng lǐ.", "A: Đúng, vì chỗ thật sự thú vị của nhiều thành ngữ nằm ở bối cảnh phía sau.")
      ]),
      dialogueBlock("Tình huống 2", "Rút bài học từ câu chuyện.", [
        study("A: 那你听完故事以后，一般会注意什么？", "A: Nà nǐ tīng wán gùshi yǐhòu, yìbān huì zhùyì shénme?", "A: Vậy sau khi nghe xong câu chuyện, bạn thường chú ý điều gì?"),
        study("B: 我会想这个故事到底想提醒人什么。", "B: Wǒ huì xiǎng zhège gùshi dàodǐ xiǎng tíxǐng rén shénme.", "B: Tôi sẽ nghĩ xem rốt cuộc câu chuyện này muốn nhắc nhở con người điều gì."),
        study("A: 是，成语短，但背后的道理往往很深。", "A: Shì, chéngyǔ duǎn, dàn bèihòu de dàolǐ wǎngwǎng hěn shēn.", "A: Đúng, thành ngữ ngắn nhưng đạo lý phía sau thường rất sâu.")
      ]),
      dialogueBlock("Tình huống 3", "Liên hệ thành ngữ với đời sống hiện đại.", [
        study("A: 这些古老的故事对现在的人还有启发吗？", "A: Zhèxiē gǔlǎo de gùshi duì xiànzài de rén hái yǒu qǐfā ma?", "A: Những câu chuyện cổ xưa này còn có gợi mở gì cho người hiện nay không?"),
        study("B: 当然有，因为人虽然生活方式变了，但很多问题并没有变。", "B: Dāngrán yǒu, yīnwèi rén suīrán shēnghuó fāngshì biàn le, dàn hěn duō wèntí bìng méiyǒu biàn.", "B: Đương nhiên là có, vì con người tuy cách sống thay đổi, nhưng nhiều vấn đề thì không hề thay đổi."),
        study("A: 这么说，成语其实也是一种浓缩的经验。", "A: Zhème shuō, chéngyǔ qíshí yě shì yì zhǒng nóngsuō de jīngyàn.", "A: Nói vậy thì thành ngữ thật ra cũng là một dạng kinh nghiệm cô đọng.")
      ]),
      dialogueBlock("Tình huống 4", "Tránh hiểu sai thành ngữ.", [
        study("A: 有时候我知道一个成语，可是不敢乱用。", "A: Yǒushíhou wǒ zhīdào yí ge chéngyǔ, kěshì bù gǎn luàn yòng.", "A: Đôi khi tôi biết một thành ngữ, nhưng không dám dùng bừa."),
        study("B: 这很正常，如果不了解背景，很容易误解它真正的意思。", "B: Zhè hěn zhèngcháng, rúguǒ bù liǎojiě bèijǐng, hěn róngyì wùjiě tā zhēnzhèng de yìsi.", "B: Điều đó rất bình thường, nếu không hiểu bối cảnh thì rất dễ hiểu sai nghĩa thực của nó."),
        study("A: 看来学成语，不能只背词，还得理解故事。", "A: Kànlai xué chéngyǔ, bùnéng zhǐ bèi cí, hái děi lǐjiě gùshi.", "A: Xem ra học thành ngữ không thể chỉ học từ, mà còn phải hiểu câu chuyện.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 只要……就…… / 如果……的话……", "Bài này dùng các mẫu điều kiện để nói rõ khi nào việc học thành ngữ trở nên dễ hay dễ bị sai.", study("知道故事以后就容易多了。", "Zhīdào gùshi yǐhòu jiù róngyì duō le.", "Sau khi biết câu chuyện thì sẽ dễ hơn nhiều."), [
        study("只要了解背景，就更容易记住成语。", "Zhǐyào liǎojiě bèijǐng, jiù gèng róngyì jìzhù chéngyǔ.", "Chỉ cần hiểu bối cảnh thì sẽ dễ nhớ thành ngữ hơn."),
        study("如果只背字面意思的话，很容易用错。", "Rúguǒ zhǐ bèi zìmiàn yìsi de huà, hěn róngyì yòng cuò.", "Nếu chỉ học nghĩa trên mặt chữ thì rất dễ dùng sai."),
        study("只要多联系实际，成语就不会显得那么远。", "Zhǐyào duō liánxì shíjì, chéngyǔ jiù bú huì xiǎnde nàme yuǎn.", "Chỉ cần liên hệ nhiều với thực tế, thành ngữ sẽ không còn quá xa cách.")
      ]),
      grammarNote("2. 虽然……但…… / 不能只……还得……", "Hai mẫu này giúp nối quá khứ với hiện tại và nhấn mạnh phương pháp học đầy đủ hơn.", study("人虽然生活方式变了，但很多问题并没有变。", "Rén suīrán shēnghuó fāngshì biàn le, dàn hěn duō wèntí bìng méiyǒu biàn.", "Con người tuy cách sống đã thay đổi, nhưng nhiều vấn đề thì không hề thay đổi."), [
        study("学成语不能只背词，还得理解故事。", "Xué chéngyǔ bùnéng zhǐ bèi cí, hái děi lǐjiě gùshi.", "Học thành ngữ không thể chỉ học từ, mà còn phải hiểu câu chuyện."),
        study("虽然故事很老，但道理到现在还成立。", "Suīrán gùshi hěn lǎo, dàn dàolǐ dào xiànzài hái chénglì.", "Tuy câu chuyện rất cũ, nhưng đạo lý đến giờ vẫn đúng."),
        study("理解不能只停在表面，还得想到它想提醒什么。", "Lǐjiě bùnéng zhǐ tíng zài biǎomiàn, hái děi xiǎng dào tā xiǎng tíxǐng shénme.", "Sự hiểu không thể chỉ dừng ở bề mặt, mà còn phải nghĩ đến việc nó muốn nhắc điều gì.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 成语", "2. 启发", "3. 误解"], options: ["a. gợi mở", "b. thành ngữ", "c. hiểu lầm"], answer: "1-b, 2-a, 3-c" }],
      [{ question: "Điền từ thích hợp.", prompt: ["很多成语后面都有一个有意思的故___。", "有些成语其实包含很深的教___。", "如果不了解背景，很容易误___它真正的意思。"], answer: "事 / 训 / 解" }],
      [{ question: "Câu nào đúng?", options: ["A. 学成语不能只背词，还得理解故事。", "B. 学成语不能只故事，还得理解背词。", "C. 学成语还得理解故事，不能只背词。"], answer: "A. 学成语不能只背词，还得理解故事。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 这些古老的故事对现在的人还有启发吗？", "B: ____________", "A: 这么说，成语其实也是一种浓缩的经验。"], answer: "B: 当然有，因为人虽然生活方式变了，但很多问题并没有变。" }],
      "Tự kiểm tra: bạn có thể nói vì sao học thành ngữ không thể chỉ học nghĩa bề mặt không?"
    ),
    quickSummary: {
      words: ["成语", "故事", "道理", "教训", "启发", "提醒"],
      patterns: ["学成语不能只背词，还得理解故事。", "虽然故事很老，但道理到现在还成立。"],
      reminder: "Bài này cần nói được 'ý nghĩa đằng sau'. Đó là chỗ HSK 5 khác rõ HSK 4."
    }
  },
  8: {
    objective: "Hiểu và diễn đạt sự thay đổi nghĩa của thành ngữ theo thời gian, đồng thời luyện cách phân biệt nghĩa gốc và nghĩa hiện nay trong giao tiếp.",
    vocabulary: [
      vocab("古今", "gǔjīn", "xưa và nay", "danh từ", "Thường dùng khi so sánh nghĩa cũ và nghĩa hiện đại.", "这个词的古今意思不完全一样。", "Zhège cí de gǔjīn yìsi bù wánquán yíyàng.", "Nghĩa xưa và nay của từ này không hoàn toàn giống nhau."),
      vocab("意思", "yìsi", "ý nghĩa", "danh từ", "Từ cơ bản nhưng trong bài này đi vào phân tích nghĩa.", "理解一个词，不能只看它现在的意思。", "Lǐjiě yí ge cí, bùnéng zhǐ kàn tā xiànzài de yìsi.", "Hiểu một từ không thể chỉ nhìn vào nghĩa hiện tại của nó."),
      vocab("变化", "biànhuà", "sự thay đổi", "danh từ/động từ", "Dùng cho sự thay đổi nghĩa của từ qua thời gian.", "语言的意思会随着时代发生变化。", "Yǔyán de yìsi huì suízhe shídài fāshēng biànhuà.", "Ý nghĩa của ngôn ngữ sẽ thay đổi theo thời đại."),
      vocab("理解", "lǐjiě", "hiểu, lý giải", "động từ/danh từ", "Bài này nhấn vào hiểu theo bối cảnh lịch sử.", "如果不了解背景，就可能理解错。", "Rúguǒ bù liǎojiě bèijǐng, jiù kěnéng lǐjiě cuò.", "Nếu không hiểu bối cảnh thì có thể sẽ hiểu sai."),
      vocab("背景", "bèijǐng", "bối cảnh", "danh từ", "Giúp giải thích vì sao nghĩa từ thay đổi.", "很多词语的变化都和历史背景有关。", "Hěn duō cíyǔ de biànhuà dōu hé lìshǐ bèijǐng yǒuguān.", "Sự thay đổi của nhiều từ ngữ đều có liên quan đến bối cảnh lịch sử."),
      vocab("现代", "xiàndài", "hiện đại", "danh từ/tính từ", "Dùng khi so sánh với cổ nghĩa.", "这个成语在现代汉语里的用法更多了。", "Zhège chéngyǔ zài xiàndài Hànyǔ lǐ de yòngfǎ gèng duō le.", "Cách dùng của thành ngữ này trong tiếng Hán hiện đại đã nhiều hơn."),
      vocab("误用", "wùyòng", "dùng sai", "động từ/danh từ", "Dùng khi người học áp nghĩa không đúng bối cảnh.", "不了解古义的时候，很容易误用这个词。", "Bù liǎojiě gǔyì de shíhou, hěn róngyì wùyòng zhège cí.", "Khi không hiểu nghĩa cổ thì rất dễ dùng sai từ này."),
      vocab("固定", "gùdìng", "cố định", "tính từ/động từ", "Dùng để nhấn rằng nghĩa từ không phải lúc nào cũng bất biến.", "词语的意思并不是永远固定的。", "Cíyǔ de yìsi bìng bú shì yǒngyuǎn gùdìng de.", "Ý nghĩa của từ ngữ không phải mãi mãi cố định.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Hỏi vì sao một thành ngữ lại có hai cách hiểu.", [
        study("A: 为什么同一个成语会有古今不同的意思？", "A: Wèishénme tóng yí ge chéngyǔ huì yǒu gǔjīn bùtóng de yìsi?", "A: Vì sao cùng một thành ngữ lại có nghĩa xưa và nay khác nhau?"),
        study("B: 因为语言会随着社会和时代慢慢变化。", "B: Yīnwèi yǔyán huì suízhe shèhuì hé shídài mànmàn biànhuà.", "B: Vì ngôn ngữ sẽ dần thay đổi theo xã hội và thời đại."),
        study("A: 原来成语也不是一直都不变的。", "A: Yuánlái chéngyǔ yě bú shì yìzhí dōu bú biàn de.", "A: Hóa ra thành ngữ cũng không phải lúc nào cũng bất biến.")
      ]),
      dialogueBlock("Tình huống 2", "Giải thích vì sao phải nhìn bối cảnh.", [
        study("A: 那学习这种成语的时候最要注意什么？", "A: Nà xuéxí zhè zhǒng chéngyǔ de shíhou zuì yào zhùyì shénme?", "A: Vậy khi học loại thành ngữ này cần chú ý điều gì nhất?"),
        study("B: 最重要的是看背景，不然很可能只理解了一半。", "B: Zuì zhòngyào de shì kàn bèijǐng, bùrán hěn kěnéng zhǐ lǐjiě le yí bàn.", "B: Điều quan trọng nhất là nhìn vào bối cảnh, nếu không rất có thể chỉ hiểu được một nửa."),
        study("A: 对，背景不一样，重点也可能完全不同。", "A: Duì, bèijǐng bù yíyàng, zhòngdiǎn yě kěnéng wánquán bùtóng.", "A: Đúng, bối cảnh khác nhau thì trọng điểm cũng có thể hoàn toàn khác.")
      ]),
      dialogueBlock("Tình huống 3", "Liên hệ với việc dùng từ hiện đại.", [
        study("A: 既然现代用法更常见，那还需要知道古义吗？", "A: Jìrán xiàndài yòngfǎ gèng chángjiàn, nà hái xūyào zhīdào gǔyì ma?", "A: Nếu cách dùng hiện đại phổ biến hơn, vậy còn cần biết nghĩa cổ không?"),
        study("B: 需要，因为知道古义以后，对词的理解会更完整。", "B: Xūyào, yīnwèi zhīdào gǔyì yǐhòu, duì cí de lǐjiě huì gèng wánzhěng.", "B: Cần, vì sau khi biết nghĩa cổ thì sự hiểu về từ sẽ đầy đủ hơn."),
        study("A: 而且这样也更不容易误用。", "A: Érqiě zhèyàng yě gèng bù róngyì wùyòng.", "A: Hơn nữa như vậy cũng càng khó dùng sai hơn.")
      ]),
      dialogueBlock("Tình huống 4", "Rút ra cách học đúng.", [
        study("A: 那你现在怎么学这种词？", "A: Nà nǐ xiànzài zěnme xué zhè zhǒng cí?", "A: Vậy bây giờ bạn học loại từ này thế nào?"),
        study("B: 我会先记现在怎么用，再去了解它原来的意思。", "B: Wǒ huì xiān jì xiànzài zěnme yòng, zài qù liǎojiě tā yuánlái de yìsi.", "B: Tôi sẽ nhớ trước cách dùng hiện nay, rồi sau đó tìm hiểu nghĩa ban đầu của nó."),
        study("A: 这样学很有效，也比较不容易乱。", "A: Zhèyàng xué hěn yǒuxiào, yě bǐjiào bù róngyì luàn.", "A: Học như vậy rất hiệu quả, cũng ít bị rối hơn.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 随着…… / 并不是……", "Mẫu này giúp nói về sự thay đổi có quá trình, đồng thời phủ định những suy nghĩ tuyệt đối.", study("语言会随着社会和时代慢慢变化。", "Yǔyán huì suízhe shèhuì hé shídài mànmàn biànhuà.", "Ngôn ngữ sẽ dần thay đổi theo xã hội và thời đại."), [
        study("很多说法会随着环境变化。", "Hěn duō shuōfǎ huì suízhe huánjìng biànhuà.", "Nhiều cách nói sẽ thay đổi theo môi trường."),
        study("词语的意思并不是永远固定的。", "Cíyǔ de yìsi bìng bú shì yǒngyuǎn gùdìng de.", "Ý nghĩa của từ ngữ không phải mãi mãi cố định."),
        study("语言并不是越老越难懂，关键是你怎么学。", "Yǔyán bìng bú shì yuè lǎo yuè nán dǒng, guānjiàn shì nǐ zěnme xué.", "Ngôn ngữ không phải càng cũ càng khó hiểu, mấu chốt là bạn học thế nào.")
      ]),
      grammarNote("2. 既然……那…… / 先……再……", "Một mẫu để nêu tiền đề rồi đặt câu hỏi hoặc đưa kết luận; một mẫu để nói phương pháp học theo trình tự.", study("既然现代用法更常见，那还需要知道古义吗？", "Jìrán xiàndài yòngfǎ gèng chángjiàn, nà hái xūyào zhīdào gǔyì ma?", "Nếu cách dùng hiện đại phổ biến hơn, vậy còn cần biết nghĩa cổ không?"), [
        study("既然背景这么重要，那就不能只背字面意思。", "Jìrán bèijǐng zhème zhòngyào, nà jiù bùnéng zhǐ bèi zìmiàn yìsi.", "Nếu bối cảnh quan trọng như vậy thì không thể chỉ học nghĩa mặt chữ."),
        study("我会先记现在怎么用，再去了解它原来的意思。", "Wǒ huì xiān jì xiànzài zěnme yòng, zài qù liǎojiě tā yuánlái de yìsi.", "Tôi sẽ nhớ trước cách dùng hiện nay, rồi sau đó tìm hiểu nghĩa ban đầu của nó."),
        study("先知道大概意思，再看它为什么会变化。", "Xiān zhīdào dàgài yìsi, zài kàn tā wèishénme huì biànhuà.", "Hãy biết nghĩa khái quát trước, rồi xem vì sao nó lại thay đổi.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 古今", "2. 误用", "3. 固定"], options: ["a. dùng sai", "b. cố định", "c. xưa và nay"], answer: "1-c, 2-a, 3-b" }],
      [{ question: "Điền từ thích hợp.", prompt: ["很多词语的变化都和历史背___有关。", "如果不了解古义的时候，很容易误___这个词。", "词语的意思并不是永远固___的。"], answer: "景 / 用 / 定" }],
      [{ question: "Câu nào đúng?", options: ["A. 我会先记现在怎么用，再去了解它原来的意思。", "B. 我会再去了解它原来的意思，先记现在怎么用。", "C. 先我会记现在怎么用，再去了解它原来的意思。"], answer: "A. 我会先记现在怎么用，再去了解它原来的意思。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 那学习这种成语的时候最要注意什么？", "B: ____________", "A: 对，背景不一样，重点也可能完全不同。"], answer: "B: 最重要的是看背景，不然很可能只理解了一半。" }],
      "Tự kiểm tra: bạn có thể giải thích vì sao học nghĩa của từ phải nhìn cả bối cảnh lịch sử không?"
    ),
    quickSummary: {
      words: ["古今", "意思", "变化", "理解", "背景", "误用"],
      patterns: ["语言会随着社会和时代慢慢变化。", "我会先记现在怎么用，再去了解它原来的意思。"],
      reminder: "Bài này cần tư duy giải thích nhiều hơn kể chuyện. Trọng tâm là vì sao nghĩa thay đổi."
    }
  },
  9: {
    objective: "Khắc họa một góc nhìn khác về Lỗ Tấn, giúp người học trình bày chân dung nhân vật văn hóa bằng nhận xét nhiều chiều hơn.",
    vocabulary: [
      vocab("别样", "biéyàng", "khác lạ, theo một góc khác", "tính từ", "Dùng để nói một cách nhìn không quen thuộc.", "这篇文章写出了一个别样的鲁迅。", "Zhè piān wénzhāng xiě chū le yí ge biéyàng de Lǔ Xùn.", "Bài viết này đã khắc họa một Lỗ Tấn khác lạ."),
      vocab("作家", "zuòjiā", "nhà văn", "danh từ", "Từ trung tâm khi nói về Lỗ Tấn.", "很多人都知道鲁迅是一位重要的作家。", "Hěn duō rén dōu zhīdào Lǔ Xùn shì yí wèi zhòngyào de zuòjiā.", "Rất nhiều người đều biết Lỗ Tấn là một nhà văn quan trọng."),
      vocab("形象", "xíngxiàng", "hình tượng, hình ảnh", "danh từ", "Dùng để nói hình ảnh một nhân vật trong nhận thức công chúng.", "人们心里的鲁迅形象往往比较严肃。", "Rénmen xīnli de Lǔ Xùn xíngxiàng wǎngwǎng bǐjiào yánsù.", "Hình ảnh Lỗ Tấn trong lòng mọi người thường khá nghiêm nghị."),
      vocab("严肃", "yánsù", "nghiêm túc, nghiêm nghị", "tính từ", "Thường là ấn tượng phổ biến về nhân vật nổi tiếng.", "一提到鲁迅，很多人首先想到的是严肃。", "Yì tídào Lǔ Xùn, hěn duō rén shǒuxiān xiǎngdào de shì yánsù.", "Vừa nhắc đến Lỗ Tấn, điều nhiều người nghĩ đến đầu tiên là sự nghiêm nghị."),
      vocab("幽默", "yōumò", "hài hước", "tính từ/danh từ", "Giúp tạo góc nhìn đối lập với hình ảnh quen thuộc.", "其实他在生活里也有很幽默的一面。", "Qíshí tā zài shēnghuó lǐ yě yǒu hěn yōumò de yí miàn.", "Thật ra trong cuộc sống ông cũng có một mặt rất hài hước."),
      vocab("亲近", "qīnjìn", "gần gũi", "tính từ/động từ", "Dùng để mô tả cảm giác về một nhân vật khi hiểu hơn về đời thường của họ.", "了解他的日常以后，会觉得他更亲近。", "Liǎojiě tā de rìcháng yǐhòu, huì juéde tā gèng qīnjìn.", "Sau khi hiểu đời thường của ông, người ta sẽ thấy ông gần gũi hơn."),
      vocab("一面", "yí miàn", "một mặt, một khía cạnh", "lượng từ/danh từ", "Hay dùng trong cụm 某人……的一面.", "每个人都有外人不太熟悉的一面。", "Měi ge rén dōu yǒu wàirén bú tài shúxī de yí miàn.", "Mỗi người đều có một mặt mà người ngoài không quá quen thuộc."),
      vocab("认识", "rènshi", "nhận thức, hiểu", "động từ", "Trong bài này là nhận thức lại về một nhân vật nổi tiếng.", "换个角度认识鲁迅，会有新的感受。", "Huàn ge jiǎodù rènshi Lǔ Xùn, huì yǒu xīn de gǎnshòu.", "Nhìn nhận Lỗ Tấn từ góc độ khác sẽ có cảm nhận mới.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Nói ấn tượng quen thuộc về Lỗ Tấn.", [
        study("A: 你提到鲁迅的时候，脑子里首先出现的是什么形象？", "A: Nǐ tídào Lǔ Xùn de shíhou, nǎozi lǐ shǒuxiān chūxiàn de shì shénme xíngxiàng?", "A: Khi nhắc đến Lỗ Tấn, hình ảnh đầu tiên hiện lên trong đầu bạn là gì?"),
        study("B: 我以前总觉得他很严肃，好像离普通人很远。", "B: Wǒ yǐqián zǒng juéde tā hěn yánsù, hǎoxiàng lí pǔtōng rén hěn yuǎn.", "B: Trước đây tôi luôn thấy ông rất nghiêm nghị, như thể rất xa người bình thường."),
        study("A: 这也是很多人的第一印象。", "A: Zhè yě shì hěn duō rén de dì-yī yìnxiàng.", "A: Đó cũng là ấn tượng đầu tiên của rất nhiều người.")
      ]),
      dialogueBlock("Tình huống 2", "Phát hiện một mặt khác của nhân vật.", [
        study("A: 那后来为什么你觉得他“别样”了？", "A: Nà hòulái wèishénme nǐ juéde tā “biéyàng” le?", "A: Vậy vì sao sau này bạn lại thấy ông “khác đi”?"),
        study("B: 因为我读了一些写他生活细节的文章，发现他也有幽默、温和的一面。", "B: Yīnwèi wǒ dú le yìxiē xiě tā shēnghuó xìjié de wénzhāng, fāxiàn tā yě yǒu yōumò, wēnhé de yí miàn.", "B: Vì tôi đã đọc một số bài viết về chi tiết đời sống của ông, và phát hiện ông cũng có một mặt hài hước, ôn hòa."),
        study("A: 原来一个人被记住的形象，不一定就是他的全部。", "A: Yuánlái yí ge rén bèi jìzhù de xíngxiàng, bù yídìng jiùshì tā de quánbù.", "A: Hóa ra hình ảnh khiến một người được nhớ đến chưa chắc đã là toàn bộ con người họ.")
      ]),
      dialogueBlock("Tình huống 3", "Liên hệ cách hiểu nhân vật văn hóa.", [
        study("A: 你觉得我们为什么容易把名人看得太单一？", "A: Nǐ juéde wǒmen wèishénme róngyì bǎ míngrén kàn de tài dānyī?", "A: Bạn thấy vì sao chúng ta dễ nhìn người nổi tiếng quá đơn nhất?"),
        study("B: 因为我们常常只记住最有代表性的一面。", "B: Yīnwèi wǒmen chángcháng zhǐ jìzhù zuì yǒu dàibiǎoxìng de yí miàn.", "B: Vì chúng ta thường chỉ nhớ mặt có tính đại diện nhất của họ."),
        study("A: 所以换个角度认识他们，其实也是重新认识历史。", "A: Suǒyǐ huàn ge jiǎodù rènshi tāmen, qíshí yě shì chóngxīn rènshi lìshǐ.", "A: Vì vậy nhìn nhận họ từ góc độ khác cũng chính là nhận thức lại lịch sử.")
      ]),
      dialogueBlock("Tình huống 4", "Nói cảm nhận sau khi hiểu hơn về Lỗ Tấn.", [
        study("A: 现在你还觉得鲁迅离我们很远吗？", "A: Xiànzài nǐ hái juéde Lǔ Xùn lí wǒmen hěn yuǎn ma?", "A: Bây giờ bạn còn cảm thấy Lỗ Tấn xa chúng ta không?"),
        study("B: 不会了，反而觉得他比以前更亲近。", "B: Bú huì le, fǎn'ér juéde tā bǐ yǐqián gèng qīnjìn.", "B: Không nữa, ngược lại còn thấy ông gần gũi hơn trước."),
        study("A: 看来真正的了解，总是比简单的印象更有力量。", "A: Kànlai zhēnzhèng de liǎojiě, zǒng shì bǐ jiǎndān de yìnxiàng gèng yǒu lìliàng.", "A: Có vẻ sự thấu hiểu thật sự luôn có sức mạnh hơn một ấn tượng đơn giản.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 不一定就是…… / 反而……", "Hai mẫu này giúp điều chỉnh cái nhìn quen thuộc: cái được nhớ nhiều chưa chắc là toàn bộ, và kết quả thực tế có thể ngược lại.", study("一个人被记住的形象，不一定就是他的全部。", "Yí ge rén bèi jìzhù de xíngxiàng, bù yídìng jiùshì tā de quánbù.", "Hình ảnh khiến một người được nhớ đến chưa chắc đã là toàn bộ con người họ."), [
        study("最有名的一面，不一定就是最真实的一面。", "Zuì yǒumíng de yí miàn, bù yídìng jiùshì zuì zhēnshí de yí miàn.", "Mặt nổi tiếng nhất chưa chắc đã là mặt chân thực nhất."),
        study("原来了解得越多，反而越觉得他亲近。", "Yuánlái liǎojiě de yuè duō, fǎn'ér yuè juéde tā qīnjìn.", "Hóa ra càng hiểu nhiều lại càng thấy ông gần gũi."),
        study("看上去很严肃的人，反而可能很有幽默感。", "Kànshangqù hěn yánsù de rén, fǎn'ér kěnéng hěn yǒu yōumògǎn.", "Người trông có vẻ rất nghiêm nghị ngược lại có thể rất hài hước.")
      ]),
      grammarNote("2. 把……看得…… / 换个角度……", "Mẫu 把……看得…… rất thường gặp khi nói đánh giá; 换个角度 dùng để đề xuất cách tiếp cận mới.", study("我们为什么容易把名人看得太单一？", "Wǒmen wèishénme róngyì bǎ míngrén kàn de tài dānyī?", "Vì sao chúng ta dễ nhìn người nổi tiếng quá đơn nhất?"), [
        study("不要把一个人的形象看得太固定。", "Búyào bǎ yí ge rén de xíngxiàng kàn de tài gùdìng.", "Đừng nhìn hình ảnh của một người quá cố định."),
        study("换个角度认识鲁迅，会有新的感受。", "Huàn ge jiǎodù rènshi Lǔ Xùn, huì yǒu xīn de gǎnshòu.", "Nhìn nhận Lỗ Tấn từ góc độ khác sẽ có cảm nhận mới."),
        study("换个角度看，历史人物也会更真实。", "Huàn ge jiǎodù kàn, lìshǐ rénwù yě huì gèng zhēnshí.", "Nếu nhìn từ góc độ khác, nhân vật lịch sử cũng sẽ chân thực hơn.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 形象", "2. 幽默", "3. 亲近"], options: ["a. hài hước", "b. gần gũi", "c. hình tượng"], answer: "1-c, 2-a, 3-b" }],
      [{ question: "Điền từ thích hợp.", prompt: ["人们心里的鲁迅形___往往比较严肃。", "发现他也有幽___的一面。", "现在反而觉得他更亲___。"], answer: "象 / 默 / 近" }],
      [{ question: "Câu nào đúng?", options: ["A. 一个人被记住的形象，不一定就是他的全部。", "B. 一个人被记住的全部，不一定就是他的形象。", "C. 形象被记住的一个人，不一定就是他的全部。"], answer: "A. 一个人被记住的形象，不一定就是他的全部。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 那后来为什么你觉得他“别样”了？", "B: ____________", "A: 原来一个人被记住的形象，不一定就是他的全部。"], answer: "B: 因为我读了一些写他生活细节的文章，发现他也有幽默、温和的一面。" }],
      "Tự kiểm tra: bạn có thể dùng 2 đến 3 câu để nói về một nhân vật nổi tiếng theo góc nhìn khác với ấn tượng phổ biến không?"
    ),
    quickSummary: {
      words: ["别样", "作家", "形象", "严肃", "幽默", "亲近"],
      patterns: ["一个人被记住的形象，不一定就是他的全部。", "换个角度认识鲁迅，会有新的感受。"],
      reminder: "Bài này cần biết chuyển từ mô tả nhân vật sang nhận xét về cách xã hội ghi nhớ một con người."
    }
  },
  10: {
    objective: "Thảo luận về giá trị của tranh luận, phân biệt tranh luận hiệu quả với cãi vã vô ích, và dùng ngôn ngữ lập luận rõ ràng hơn.",
    vocabulary: [
      vocab("争论", "zhēnglùn", "tranh luận", "động từ/danh từ", "Từ trung tâm của bài 10.", "很多好主意都是在争论中慢慢出现的。", "Hěn duō hǎo zhǔyi dōu shì zài zhēnglùn zhōng mànmàn chūxiàn de.", "Rất nhiều ý hay đều dần xuất hiện trong quá trình tranh luận."),
      vocab("观点", "guāndiǎn", "quan điểm", "danh từ", "Dùng khi trình bày ý kiến cá nhân trong tranh luận.", "真正的争论不是重复观点，而是解释观点。", "Zhēnzhèng de zhēnglùn bú shì chóngfù guāndiǎn, érshì jiěshì guāndiǎn.", "Tranh luận thật sự không phải lặp lại quan điểm, mà là giải thích quan điểm."),
      vocab("说服", "shuōfú", "thuyết phục", "động từ", "Mục tiêu của tranh luận lý trí.", "你要想说服别人，先得把理由说清楚。", "Nǐ yào xiǎng shuōfú biérén, xiān děi bǎ lǐyóu shuō qīngchu.", "Muốn thuyết phục người khác, trước tiên phải nói rõ lý do."),
      vocab("理由", "lǐyóu", "lý do", "danh từ", "Nền tảng của tranh luận có logic.", "没有理由的坚持，往往很难让人接受。", "Méiyǒu lǐyóu de jiānchí, wǎngwǎng hěn nán ràng rén jiēshòu.", "Sự kiên trì không có lý do thường rất khó được người khác chấp nhận."),
      vocab("情绪", "qíngxù", "cảm xúc", "danh từ", "Dùng để phân biệt tranh luận lý trí với cãi vã cảm tính.", "一旦情绪上来了，争论就容易变味。", "Yídàn qíngxù shànglai le, zhēnglùn jiù róngyì biàn wèi.", "Một khi cảm xúc dâng lên, tranh luận sẽ dễ biến chất."),
      vocab("冷静", "lěngjìng", "bình tĩnh", "tính từ/động từ", "Điều kiện quan trọng để tranh luận hiệu quả.", "真正会争论的人，往往越关键的时候越冷静。", "Zhēnzhèng huì zhēnglùn de rén, wǎngwǎng yuè guānjiàn de shíhou yuè lěngjìng.", "Người thật sự biết tranh luận thường càng vào lúc then chốt càng bình tĩnh."),
      vocab("交换", "jiāohuàn", "trao đổi", "động từ", "Mang sắc thái ôn hòa hơn với 争论.", "与其说是争论，不如说是在交换想法。", "Yǔqí shuō shì zhēnglùn, bùrú shuō shì zài jiāohuàn xiǎngfǎ.", "Thay vì nói là tranh luận, có lẽ nên nói là đang trao đổi suy nghĩ."),
      vocab("奇迹", "qíjì", "kỳ tích", "danh từ", "Tiêu đề nhấn rằng tranh luận đúng cách có thể tạo ra kết quả ngoài mong đợi.", "有时候一次深入的争论真的能带来奇迹。", "Yǒushíhou yí cì shēnrù de zhēnglùn zhēn de néng dàilái qíjì.", "Đôi khi một cuộc tranh luận sâu sắc thật sự có thể mang lại kỳ tích.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Nói vì sao tranh luận không hẳn là điều xấu.", [
        study("A: 你觉得争论是不是很容易伤感情？", "A: Nǐ juéde zhēnglùn shì bú shì hěn róngyì shāng gǎnqíng?", "A: Bạn thấy tranh luận có phải rất dễ làm tổn thương tình cảm không?"),
        study("B: 不一定，要看争的是什么、怎么争。", "B: Bù yídìng, yào kàn zhēng de shì shénme, zěnme zhēng.", "B: Chưa chắc, còn phải xem tranh luận về điều gì và tranh luận thế nào."),
        study("A: 也就是说，问题不在争论本身，而在方式。", "A: Yě jiùshì shuō, wèntí bú zài zhēnglùn běnshēn, ér zài fāngshì.", "A: Có nghĩa là vấn đề không nằm ở bản thân tranh luận, mà ở cách thức.")
      ]),
      dialogueBlock("Tình huống 2", "Phân biệt tranh luận với cãi nhau.", [
        study("A: 那什么样的争论才算有意义？", "A: Nà shénme yàng de zhēnglùn cái suàn yǒu yìyì?", "A: Vậy kiểu tranh luận nào mới được tính là có ý nghĩa?"),
        study("B: 我觉得双方都愿意听，也愿意解释自己的理由，这才有意义。", "B: Wǒ juéde shuāngfāng dōu yuànyì tīng, yě yuànyì jiěshì zìjǐ de lǐyóu, zhè cái yǒu yìyì.", "B: Tôi thấy khi cả hai bên đều sẵn sàng lắng nghe và giải thích lý do của mình thì mới có ý nghĩa."),
        study("A: 如果只想赢，那就不是争论，而是吵架了。", "A: Rúguǒ zhǐ xiǎng yíng, nà jiù bú shì zhēnglùn, érshì chǎojià le.", "A: Nếu chỉ muốn thắng thì đó không còn là tranh luận, mà là cãi nhau rồi.")
      ]),
      dialogueBlock("Tình huống 3", "Nhấn mạnh vai trò của bình tĩnh.", [
        study("A: 为什么有些争论越说越乱？", "A: Wèishénme yǒuxiē zhēnglùn yuè shuō yuè luàn?", "A: Vì sao có những cuộc tranh luận càng nói càng rối?"),
        study("B: 因为一旦情绪上来了，大家就不再关心理由，只关心输赢。", "B: Yīnwèi yídàn qíngxù shànglai le, dàjiā jiù bú zài guānxīn lǐyóu, zhǐ guānxīn shūyíng.", "B: Vì một khi cảm xúc dâng lên, mọi người sẽ აღარ quan tâm đến lý do nữa, mà chỉ quan tâm thắng thua."),
        study("A: 所以越关键的时候越要冷静。", "A: Suǒyǐ yuè guānjiàn de shíhou yuè yào lěngjìng.", "A: Vì vậy càng vào lúc then chốt càng phải bình tĩnh.")
      ]),
      dialogueBlock("Tình huống 4", "Nói tranh luận tốt có thể tạo ra kết quả bất ngờ.", [
        study("A: 你相信争论真的能带来奇迹吗？", "A: Nǐ xiāngxìn zhēnglùn zhēn de néng dàilái qíjì ma?", "A: Bạn tin tranh luận thật sự có thể mang lại kỳ tích không?"),
        study("B: 我相信，因为很多创新都来自不同观点的碰撞。", "B: Wǒ xiāngxìn, yīnwèi hěn duō chuàngxīn dōu láizì bùtóng guāndiǎn de pèngzhuàng.", "B: Tôi tin, vì rất nhiều đổi mới đều đến từ sự va chạm giữa các quan điểm khác nhau."),
        study("A: 这样看，好的争论其实是在一起把问题想得更清楚。", "A: Zhèyàng kàn, hǎo de zhēnglùn qíshí shì zài yìqǐ bǎ wèntí xiǎng de gèng qīngchu.", "A: Nhìn như vậy thì tranh luận tốt thật ra là cùng nhau nghĩ cho vấn đề rõ hơn.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 问题不在……而在…… / 这才……", "Hai mẫu này rất hay gặp ở HSK 5 khi cần chốt trọng tâm lập luận và đưa ra tiêu chuẩn rõ ràng.", study("问题不在争论本身，而在方式。", "Wèntí bú zài zhēnglùn běnshēn, ér zài fāngshì.", "Vấn đề không nằm ở bản thân tranh luận, mà ở cách thức."), [
        study("问题不在观点不同，而在能不能互相听懂。", "Wèntí bú zài guāndiǎn bùtóng, ér zài néng bu néng hùxiāng tīng dǒng.", "Vấn đề không nằm ở việc quan điểm khác nhau, mà ở chỗ có thể hiểu nhau hay không."),
        study("双方都愿意解释理由，这才叫交流。", "Shuāngfāng dōu yuànyì jiěshì lǐyóu, zhè cái jiào jiāoliú.", "Cả hai bên đều sẵn sàng giải thích lý do thì đó mới gọi là trao đổi."),
        study("只有能把问题说清楚，这才算真正有效。", "Zhǐyǒu néng bǎ wèntí shuō qīngchu, zhè cái suàn zhēnzhèng yǒuxiào.", "Chỉ khi có thể nói rõ vấn đề thì mới thật sự được tính là hiệu quả.")
      ]),
      grammarNote("2. 一旦……就…… / 越……越……", "Bài này dùng để mô tả quá trình tranh luận biến chất hoặc đi đúng hướng tùy vào trạng thái của người tham gia.", study("一旦情绪上来了，争论就容易变味。", "Yídàn qíngxù shànglai le, zhēnglùn jiù róngyì biàn wèi.", "Một khi cảm xúc dâng lên, tranh luận sẽ dễ biến chất."), [
        study("一旦只关心输赢，就听不进别人的话了。", "Yídàn zhǐ guānxīn shūyíng, jiù tīng bu jìn biérén de huà le.", "Một khi chỉ quan tâm thắng thua thì sẽ không nghe lọt lời người khác nữa."),
        study("越愿意听，越容易说服别人。", "Yuè yuànyì tīng, yuè róngyì shuōfú biérén.", "Càng sẵn sàng lắng nghe càng dễ thuyết phục người khác."),
        study("越冷静，越能看清问题真正在哪里。", "Yuè lěngjìng, yuè néng kàn qīng wèntí zhēnzhèng zài nǎlǐ.", "Càng bình tĩnh càng có thể nhìn rõ vấn đề thật sự nằm ở đâu.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 观点", "2. 说服", "3. 情绪"], options: ["a. cảm xúc", "b. quan điểm", "c. thuyết phục"], answer: "1-b, 2-c, 3-a" }],
      [{ question: "Điền từ thích hợp.", prompt: ["很多好主意都是在争___中慢慢出现的。", "你要想说___别人，先得把理由说清楚。", "一旦情___上来了，争论就容易变味。"], answer: "论 / 服 / 绪" }],
      [{ question: "Câu nào đúng?", options: ["A. 问题不在争论本身，而在方式。", "B. 问题不在方式，而在争论本身方式。", "C. 争论本身不在问题，而在方式。"], answer: "A. 问题不在争论本身，而在方式。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 那什么样的争论才算有意义？", "B: ____________", "A: 如果只想赢，那就不是争论，而是吵架了。"], answer: "B: 我觉得双方都愿意听，也愿意解释自己的理由，这才有意义。" }],
      "Tự kiểm tra: bạn có thể dùng 2 câu để phân biệt tranh luận có ích và cãi nhau không?"
    ),
    quickSummary: {
      words: ["争论", "观点", "说服", "理由", "情绪", "冷静"],
      patterns: ["问题不在争论本身，而在方式。", "一旦情绪上来了，争论就容易变味。"],
      reminder: "Bài này cần lập luận rõ hơn HSK 4: phải nói được tiêu chuẩn nào khiến tranh luận trở nên có ích."
    }
  },
  11: {
    objective: "Phân tích tác hại của đồng hồ báo thức đối với giấc ngủ và bàn về nhịp sống hiện đại bằng giọng phản biện rõ ràng.",
    vocabulary: [
      vocab("闹钟", "nàozhōng", "đồng hồ báo thức", "danh từ", "Vật quen thuộc nhưng được nhìn lại theo góc độ sức khỏe.", "很多人每天都被闹钟叫醒。", "Hěn duō rén měitiān dōu bèi nàozhōng jiàoxǐng.", "Rất nhiều người mỗi ngày đều bị đồng hồ báo thức đánh thức."),
      vocab("危害", "wēihài", "tác hại", "danh từ/động từ", "Dùng để nêu hậu quả tiêu cực lâu dài.", "长期睡眠不足的危害很大。", "Chángqī shuìmián bùzú de wēihài hěn dà.", "Tác hại của việc thiếu ngủ kéo dài rất lớn."),
      vocab("睡眠", "shuìmián", "giấc ngủ", "danh từ", "Từ trung tâm khi nói về chất lượng nghỉ ngơi.", "高质量的睡眠比睡得久更重要。", "Gāo zhìliàng de shuìmián bǐ shuì de jiǔ gèng zhòngyào.", "Giấc ngủ chất lượng cao còn quan trọng hơn ngủ lâu."),
      vocab("打断", "dǎduàn", "cắt ngang", "động từ", "Dùng khi nói báo thức làm gián đoạn nhịp ngủ tự nhiên.", "闹钟有时候会把深度睡眠打断。", "Nàozhōng yǒushíhou huì bǎ shēndù shuìmián dǎduàn.", "Đồng hồ báo thức đôi khi sẽ cắt ngang giấc ngủ sâu."),
      vocab("状态", "zhuàngtài", "trạng thái", "danh từ", "Hay đi với 精神状态, 工作状态.", "睡不好会直接影响第二天的状态。", "Shuì bù hǎo huì zhíjiē yǐngxiǎng dì-èr tiān de zhuàngtài.", "Ngủ không ngon sẽ ảnh hưởng trực tiếp đến trạng thái của ngày hôm sau."),
      vocab("自然醒", "zìrán xǐng", "tự tỉnh giấc", "cụm động từ", "Đối lập với 被闹钟叫醒.", "周末能自然醒的时候，我感觉轻松很多。", "Zhōumò néng zìrán xǐng de shíhou, wǒ gǎnjué qīngsōng hěn duō.", "Lúc cuối tuần có thể tự tỉnh giấc, tôi thấy nhẹ nhàng hơn nhiều."),
      vocab("节奏", "jiézòu", "nhịp độ", "danh từ", "Dùng để nối giấc ngủ với nhịp sống hiện đại.", "生活节奏太快，很多人根本睡不够。", "Shēnghuó jiézòu tài kuài, hěn duō rén gēnběn shuì bu gòu.", "Nhịp sống quá nhanh, nhiều người căn bản ngủ không đủ."),
      vocab("恢复", "huīfù", "phục hồi", "động từ", "Dùng cho năng lượng, thể lực, tinh thần.", "身体需要在睡眠中慢慢恢复。", "Shēntǐ xūyào zài shuìmián zhōng mànmàn huīfù.", "Cơ thể cần dần phục hồi trong lúc ngủ.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Nói vì sao báo thức khiến người ta mệt.", [
        study("A: 你早上是不是经常被闹钟吵醒？", "A: Nǐ zǎoshang shì bú shì jīngcháng bèi nàozhōng chǎoxǐng?", "A: Buổi sáng bạn có thường bị đồng hồ báo thức làm tỉnh giấc không?"),
        study("B: 是，而且每次一响，我都会觉得特别累。", "B: Shì, érqiě měi cì yì xiǎng, wǒ dōu huì juéde tèbié lèi.", "B: Có, mà mỗi lần nó kêu là tôi đều cảm thấy đặc biệt mệt."),
        study("A: 因为它可能把你的睡眠节奏一下子打断了。", "A: Yīnwèi tā kěnéng bǎ nǐ de shuìmián jiézòu yíxiàzi dǎduàn le.", "A: Vì nó có thể đã cắt ngang nhịp ngủ của bạn một cách đột ngột.")
      ]),
      dialogueBlock("Tình huống 2", "So sánh tự tỉnh giấc với bị đánh thức.", [
        study("A: 你周末不设闹钟的时候会怎么样？", "A: Nǐ zhōumò bú shè nàozhōng de shíhou huì zěnmeyàng?", "A: Cuối tuần khi không đặt báo thức thì bạn thế nào?"),
        study("B: 我通常自然醒，而且整个人状态会好很多。", "B: Wǒ tōngcháng zìrán xǐng, érqiě zhěng ge rén zhuàngtài huì hǎo hěn duō.", "B: Tôi thường tự tỉnh giấc, mà trạng thái toàn thân sẽ tốt hơn rất nhiều."),
        study("A: 看来身体自己知道什么时候该醒。", "A: Kànlai shēntǐ zìjǐ zhīdào shénme shíhou gāi xǐng.", "A: Có vẻ cơ thể tự nó biết lúc nào nên tỉnh.")
      ]),
      dialogueBlock("Tình huống 3", "Bàn về nhịp sống hiện đại.", [
        study("A: 那为什么大家还是离不开闹钟？", "A: Nà wèishénme dàjiā háishi líbukāi nàozhōng?", "A: Vậy vì sao mọi người vẫn không thể tách khỏi đồng hồ báo thức?"),
        study("B: 因为生活节奏太快，很多人晚上睡得晚，早上又必须准时起。", "B: Yīnwèi shēnghuó jiézòu tài kuài, hěn duō rén wǎnshang shuì de wǎn, zǎoshang yòu bìxū zhǔnshí qǐ.", "B: Vì nhịp sống quá nhanh, nhiều người tối ngủ muộn mà sáng lại buộc phải dậy đúng giờ."),
        study("A: 所以问题不只是闹钟，而是整个作息方式。", "A: Suǒyǐ wèntí bú zhǐshì nàozhōng, érshì zhěng ge zuòxī fāngshì.", "A: Vì vậy vấn đề không chỉ là đồng hồ báo thức, mà là cả cách sinh hoạt.")
      ]),
      dialogueBlock("Tình huống 4", "Nói giải pháp thực tế.", [
        study("A: 那有没有办法减少这种危害？", "A: Nà yǒu méiyǒu bànfǎ jiǎnshǎo zhè zhǒng wēihài?", "A: Vậy có cách nào giảm bớt kiểu tác hại này không?"),
        study("B: 我觉得最根本的办法还是早点儿睡，而不是只靠设更多闹钟。", "B: Wǒ juéde zuì gēnběn de bànfǎ háishi zǎodiǎnr shuì, ér bú shì zhǐ kào shè gèng duō nàozhōng.", "B: Tôi thấy cách căn bản nhất vẫn là ngủ sớm hơn, chứ không phải chỉ dựa vào việc đặt thêm nhiều báo thức."),
        study("A: 对，不改变晚上，早上就很难真正轻松。", "A: Duì, bù gǎibiàn wǎnshang, zǎoshang jiù hěn nán zhēnzhèng qīngsōng.", "A: Đúng, không thay đổi buổi tối thì buổi sáng rất khó thật sự nhẹ nhàng.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 不只是……而是……", "Mẫu này giúp đẩy tranh luận đi xa hơn biểu hiện bề mặt để chạm vào nguyên nhân sâu hơn.", study("问题不只是闹钟，而是整个作息方式。", "Wèntí bú zhǐshì nàozhōng, érshì zhěng ge zuòxī fāngshì.", "Vấn đề không chỉ là đồng hồ báo thức, mà là cả cách sinh hoạt."), [
        study("疲劳不只是因为睡得少，而是因为睡得不规律。", "Píláo bú zhǐshì yīnwèi shuì de shǎo, érshì yīnwèi shuì de bù guīlǜ.", "Mệt mỏi không chỉ vì ngủ ít, mà là vì ngủ không điều độ."),
        study("危害不只是第二天没精神，而是长期恢复不过来。", "Wēihài bú zhǐshì dì-èr tiān méi jīngshen, érshì chángqī huīfù bù guòlai.", "Tác hại không chỉ là hôm sau thiếu tỉnh táo, mà là lâu dài không hồi phục nổi."),
        study("解决办法不只是少设闹钟，而是调整节奏。", "Jiějué bànfǎ bú zhǐshì shǎo shè nàozhōng, érshì tiáozhěng jiézòu.", "Cách giải quyết không chỉ là đặt ít báo thức hơn, mà là điều chỉnh nhịp sống.")
      ]),
      grammarNote("2. 一……就…… / 越……越……", "Một mẫu nhấn phản ứng tức thì, một mẫu mô tả xu hướng ngày càng mạnh lên.", study("每次一响，我都会觉得特别累。", "Měi cì yì xiǎng, wǒ dōu huì juéde tèbié lèi.", "Mỗi lần nó kêu là tôi đều cảm thấy đặc biệt mệt."), [
        study("一被叫醒，我就很难马上进入状态。", "Yí bèi jiàoxǐng, wǒ jiù hěn nán mǎshàng jìnrù zhuàngtài.", "Vừa bị đánh thức là tôi rất khó vào trạng thái ngay."),
        study("睡得越晚，第二天越难恢复。", "Shuì de yuè wǎn, dì-èr tiān yuè nán huīfù.", "Ngủ càng muộn, hôm sau càng khó hồi phục."),
        study("生活节奏越快，人越需要高质量的休息。", "Shēnghuó jiézòu yuè kuài, rén yuè xūyào gāo zhìliàng de xiūxi.", "Nhịp sống càng nhanh, con người càng cần nghỉ ngơi chất lượng cao.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 睡眠", "2. 打断", "3. 恢复"], options: ["a. phục hồi", "b. giấc ngủ", "c. cắt ngang"], answer: "1-b, 2-c, 3-a" }],
      [{ question: "Điền từ thích hợp.", prompt: ["闹钟有时候会把深度睡___打断。", "睡不好会影响第二天的状___。", "身体需要在睡眠中慢慢恢___。"], answer: "眠 / 态 / 复" }],
      [{ question: "Câu nào đúng?", options: ["A. 问题不只是闹钟，而是整个作息方式。", "B. 问题而是不只是闹钟，整个作息方式。", "C. 闹钟不只是问题，而是整个作息方式。"], answer: "A. 问题不只是闹钟，而是整个作息方式。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 那为什么大家还是离不开闹钟？", "B: ____________", "A: 所以问题不只是闹钟，而是整个作息方式。"], answer: "B: 因为生活节奏太快，很多人晚上睡得晚，早上又必须准时起。" }],
      "Tự kiểm tra: bạn có thể nói 2 nguyên nhân khiến người hiện đại ngủ không đủ không?"
    ),
    quickSummary: {
      words: ["闹钟", "危害", "睡眠", "状态", "节奏", "恢复"],
      patterns: ["问题不只是闹钟，而是整个作息方式。", "睡得越晚，第二天越难恢复。"],
      reminder: "Bài này cần biết chuyển từ hiện tượng nhỏ sang phân tích lối sống phía sau."
    }
  },
  12: {
    objective: "Nói về việc người dùng ở nước ngoài dùng WeChat, từ đó phân tích cách công nghệ thay đổi giao tiếp và đời sống xuyên biên giới.",
    vocabulary: [
      vocab("海外", "hǎiwài", "hải ngoại, ở nước ngoài", "danh từ/tính từ", "Dùng để nói người dùng sống ngoài Trung Quốc.", "越来越多的海外用户也开始使用微信。", "Yuèláiyuè duō de hǎiwài yònghù yě kāishǐ shǐyòng Wēixìn.", "Ngày càng nhiều người dùng ở nước ngoài cũng bắt đầu dùng WeChat."),
      vocab("用户", "yònghù", "người dùng", "danh từ", "Từ quen thuộc trong ngữ cảnh ứng dụng và công nghệ.", "不同国家的用户使用习惯也不一样。", "Bùtóng guójiā de yònghù shǐyòng xíguàn yě bù yíyàng.", "Thói quen sử dụng của người dùng ở các nước khác nhau cũng không giống nhau."),
      vocab("联系", "liánxì", "liên lạc", "động từ/danh từ", "Nối việc dùng ứng dụng với giao tiếp đời thường.", "微信让大家和家人的联系方便了很多。", "Wēixìn ràng dàjiā hé jiārén de liánxì fāngbiàn le hěn duō.", "WeChat khiến việc liên lạc với gia đình của mọi người tiện hơn rất nhiều."),
      vocab("功能", "gōngnéng", "chức năng", "danh từ", "Phân tích vì sao ứng dụng được yêu thích.", "它的功能越来越多，不只是聊天。", "Tā de gōngnéng yuèláiyuè duō, bú zhǐshì liáotiān.", "Chức năng của nó ngày càng nhiều, không chỉ là trò chuyện."),
      vocab("习惯", "xíguàn", "thói quen", "danh từ/động từ", "Dùng để nói công nghệ dần thay đổi hành vi hằng ngày.", "很多人的生活习惯都被手机改变了。", "Hěn duō rén de shēnghuó xíguàn dōu bèi shǒujī gǎibiàn le.", "Thói quen sinh hoạt của nhiều người đều đã bị điện thoại thay đổi."),
      vocab("分享", "fēnxiǎng", "chia sẻ", "động từ", "Nói về hình thức giao tiếp mới qua mạng xã hội.", "大家现在更习惯在朋友圈里分享生活。", "Dàjiā xiànzài gèng xíguàn zài Péngyouquān lǐ fēnxiǎng shēnghuó.", "Bây giờ mọi người quen chia sẻ cuộc sống trong vòng bạn bè hơn."),
      vocab("距离", "jùlí", "khoảng cách", "danh từ", "Dùng khi nói công nghệ làm ngắn khoảng cách địa lý.", "技术缩短了人与人之间的距离。", "Jìshù suōduǎn le rén yǔ rén zhījiān de jùlí.", "Công nghệ đã rút ngắn khoảng cách giữa người với người."),
      vocab("依赖", "yīlài", "phụ thuộc", "động từ/danh từ", "Giúp bàn cả mặt thuận tiện lẫn mặt trái.", "方便的同时，人们也越来越依赖它。", "Fāngbiàn de tóngshí, rénmen yě yuèláiyuè yīlài tā.", "Trong khi tiện hơn, con người cũng ngày càng phụ thuộc vào nó.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Nói vì sao người ở nước ngoài cũng dùng WeChat.", [
        study("A: 为什么很多海外用户也开始玩儿微信？", "A: Wèishénme hěn duō hǎiwài yònghù yě kāishǐ wánr Wēixìn?", "A: Vì sao nhiều người dùng ở nước ngoài cũng bắt đầu dùng WeChat?"),
        study("B: 因为它不只是聊天工具，还能满足很多生活需要。", "B: Yīnwèi tā bú zhǐshì liáotiān gōngjù, hái néng mǎnzú hěn duō shēnghuó xūyào.", "B: Vì nó không chỉ là công cụ trò chuyện, mà còn có thể đáp ứng nhiều nhu cầu sinh hoạt."),
        study("A: 所以它在国外也慢慢形成了自己的使用场景。", "A: Suǒyǐ tā zài guówài yě mànmàn xíngchéng le zìjǐ de shǐyòng chǎngjǐng.", "A: Vì vậy nó ở nước ngoài cũng dần hình thành những bối cảnh sử dụng riêng.")
      ]),
      dialogueBlock("Tình huống 2", "Nói việc liên lạc trở nên gần hơn.", [
        study("A: 你觉得它最大的好处是什么？", "A: Nǐ juéde tā zuì dà de hǎochu shì shénme?", "A: Bạn thấy lợi ích lớn nhất của nó là gì?"),
        study("B: 我觉得是缩短了距离，尤其对在国外生活的人来说。", "B: Wǒ juéde shì suōduǎn le jùlí, yóuqí duì zài guówài shēnghuó de rén lái shuō.", "B: Tôi thấy là nó rút ngắn khoảng cách, đặc biệt đối với những người sống ở nước ngoài."),
        study("A: 对，以前联系一次很麻烦，现在随时都能说话。", "A: Duì, yǐqián liánxì yí cì hěn máfan, xiànzài suíshí dōu néng shuōhuà.", "A: Đúng, trước đây liên lạc một lần rất phiền, bây giờ lúc nào cũng có thể nói chuyện.")
      ]),
      dialogueBlock("Tình huống 3", "Nhấn mạnh việc công nghệ thay đổi thói quen.", [
        study("A: 不过你有没有觉得，大家现在越来越离不开手机了？", "A: Búguò nǐ yǒu méiyǒu juéde, dàjiā xiànzài yuèláiyuè líbukāi shǒujī le?", "A: Nhưng bạn có thấy bây giờ mọi người ngày càng không thể rời điện thoại không?"),
        study("B: 有，方便是方便，可是也确实改变了很多人的生活习惯。", "B: Yǒu, fāngbiàn shì fāngbiàn, kěshì yě quèshí gǎibiàn le hěn duō rén de shēnghuó xíguàn.", "B: Có, tiện thì đúng là tiện, nhưng cũng thật sự đã thay đổi thói quen sinh hoạt của nhiều người."),
        study("A: 也就是说，工具越好用，人越要学会控制自己。", "A: Yě jiùshì shuō, gōngjù yuè hǎo yòng, rén yuè yào xuéhuì kòngzhì zìjǐ.", "A: Có nghĩa là công cụ càng dễ dùng thì con người càng phải học cách kiểm soát bản thân.")
      ]),
      dialogueBlock("Tình huống 4", "Nói mặt tích cực và tiêu cực cùng lúc.", [
        study("A: 那你总体上怎么看这种变化？", "A: Nà nǐ zǒngtǐ shàng zěnme kàn zhè zhǒng biànhuà?", "A: Vậy nhìn tổng thể bạn đánh giá sự thay đổi này thế nào?"),
        study("B: 我觉得它让沟通更方便，但也提醒我们不要太依赖一种方式。", "B: Wǒ juéde tā ràng gōutōng gèng fāngbiàn, dàn yě tíxǐng wǒmen búyào tài yīlài yì zhǒng fāngshì.", "B: Tôi thấy nó khiến giao tiếp tiện hơn, nhưng cũng nhắc chúng ta đừng quá phụ thuộc vào một cách thức."),
        study("A: 说得对，技术越发达，越需要清楚自己在怎么用它。", "A: Shuō de duì, jìshù yuè fādá, yuè xūyào qīngchu zìjǐ zài zěnme yòng tā.", "A: Nói đúng, kỹ thuật càng phát triển thì càng cần rõ mình đang dùng nó thế nào.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 不只是……还…… / 尤其对……来说", "Hai cấu trúc này giúp mở rộng lập luận từ chức năng cơ bản sang tác động lớn hơn đối với một nhóm người.", study("它不只是聊天工具，还能满足很多生活需要。", "Tā bú zhǐshì liáotiān gōngjù, hái néng mǎnzú hěn duō shēnghuó xūyào.", "Nó không chỉ là công cụ trò chuyện, mà còn có thể đáp ứng nhiều nhu cầu sinh hoạt."), [
        study("它不只是一个应用，还影响了很多人的交流方式。", "Tā bú zhǐshì yí ge yìngyòng, hái yǐngxiǎng le hěn duō rén de jiāoliú fāngshì.", "Nó không chỉ là một ứng dụng, mà còn ảnh hưởng đến cách giao tiếp của nhiều người."),
        study("尤其对在国外生活的人来说，这种联系方式很重要。", "Yóuqí duì zài guówài shēnghuó de rén lái shuō, zhè zhǒng liánxì fāngshì hěn zhòngyào.", "Đặc biệt đối với người sống ở nước ngoài, kiểu liên lạc này rất quan trọng."),
        study("尤其对家人分散在不同国家的人来说，它更有意义。", "Yóuqí duì jiārén fēnsàn zài bùtóng guójiā de rén lái shuō, tā gèng yǒu yìyì.", "Đặc biệt đối với những người có gia đình phân tán ở các nước khác nhau, nó càng có ý nghĩa.")
      ]),
      grammarNote("2. 越……越…… / 方便是方便，可是……", "Một mẫu nói xu hướng tăng dần, một mẫu vừa thừa nhận điểm tốt vừa chuyển sang mặt cần cân nhắc.", study("工具越好用，人越要学会控制自己。", "Gōngjù yuè hǎo yòng, rén yuè yào xuéhuì kòngzhì zìjǐ.", "Công cụ càng dễ dùng thì con người càng phải học cách kiểm soát bản thân."), [
        study("技术越发达，选择越多。", "Jìshù yuè fādá, xuǎnzé yuè duō.", "Kỹ thuật càng phát triển, lựa chọn càng nhiều."),
        study("方便是方便，可是太依赖也会有问题。", "Fāngbiàn shì fāngbiàn, kěshì tài yīlài yě huì yǒu wèntí.", "Tiện thì đúng là tiện, nhưng phụ thuộc quá cũng sẽ có vấn đề."),
        study("交流越快，越需要想清楚自己说了什么。", "Jiāoliú yuè kuài, yuè xūyào xiǎng qīngchu zìjǐ shuō le shénme.", "Giao tiếp càng nhanh thì càng cần nghĩ rõ mình đã nói gì.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 海外", "2. 功能", "3. 依赖"], options: ["a. chức năng", "b. hải ngoại", "c. phụ thuộc"], answer: "1-b, 2-a, 3-c" }],
      [{ question: "Điền từ thích hợp.", prompt: ["不同国家的用___使用习惯也不一样。", "技术缩短了人与人之间的距___。", "大家现在更习惯在朋友圈里分___生活。"], answer: "户 / 离 / 享" }],
      [{ question: "Câu nào đúng?", options: ["A. 工具越好用，人越要学会控制自己。", "B. 工具越学会控制自己，人越好用。", "C. 人越要学会控制自己，工具越好用。"], answer: "A. 工具越好用，人越要学会控制自己。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 你觉得它最大的好处是什么？", "B: ____________", "A: 对，以前联系一次很麻烦，现在随时都能说话。"], answer: "B: 我觉得是缩短了距离，尤其对在国外生活的人来说。" }],
      "Tự kiểm tra: bạn có thể nói 1 lợi ích và 1 mặt trái của ứng dụng nhắn tin hiện đại không?"
    ),
    quickSummary: {
      words: ["海外", "用户", "联系", "功能", "距离", "依赖"],
      patterns: ["它不只是聊天工具，还能满足很多生活需要。", "工具越好用，人越要学会控制自己。"],
      reminder: "Bài này cần biết nói hai mặt của công nghệ: tiện, nhưng không nên mất kiểm soát."
    }
  },
  13: {
    objective: "Diễn đạt áp lực cuộc sống bằng hình ảnh ẩn dụ “đáy giỏ”, từ đó bàn về việc giảm bớt gánh nặng và thay đổi cách sống.",
    vocabulary: [
      vocab("锯掉", "jù diào", "cưa bỏ", "động từ", "Trong bài này mang tính ẩn dụ, không chỉ là hành động vật lý.", "有时候最需要做的，不是继续装，而是锯掉多余的部分。", "Yǒushíhou zuì xūyào zuò de, bú shì jìxù zhuāng, érshì jù diào duōyú de bùfen.", "Đôi khi điều cần làm nhất không phải là tiếp tục chất thêm, mà là cưa bỏ phần dư thừa."),
      vocab("筐底", "kuāngdǐ", "đáy giỏ", "danh từ", "Hình ảnh trung tâm của ẩn dụ trong bài.", "这个“筐底”其实代表一种生活负担。", "Zhège “kuāngdǐ” qíshí dàibiǎo yì zhǒng shēnghuó fùdān.", "Cái “đáy giỏ” này thật ra đại diện cho một loại gánh nặng cuộc sống."),
      vocab("负担", "fùdān", "gánh nặng", "danh từ/động từ", "Dùng cho áp lực tinh thần hoặc việc phải gánh quá nhiều.", "人活得太累，往往是因为背的负担太多。", "Rén huó de tài lèi, wǎngwǎng shì yīnwèi bēi de fùdān tài duō.", "Con người sống quá mệt thường là vì gánh quá nhiều."),
      vocab("减轻", "jiǎnqīng", "giảm nhẹ", "động từ", "Mục tiêu chính của việc thay đổi lối sống.", "学会减轻负担，也是一种能力。", "Xuéhuì jiǎnqīng fùdān, yě shì yì zhǒng nénglì.", "Học cách giảm nhẹ gánh nặng cũng là một năng lực."),
      vocab("必要", "bìyào", "cần thiết", "tính từ/danh từ", "Dùng để chọn lọc điều nên giữ lại trong cuộc sống.", "不是所有事情都像我们想的那样必要。", "Bú shì suǒyǒu shìqing dōu xiàng wǒmen xiǎng de nàyyàng bìyào.", "Không phải mọi chuyện đều cần thiết như chúng ta nghĩ."),
      vocab("舍弃", "shěqì", "bỏ đi, từ bỏ", "động từ", "Nhấn vào việc dám bỏ bớt điều không còn cần.", "如果不会舍弃，就很难轻松下来。", "Rúguǒ bú huì shěqì, jiù hěn nán qīngsōng xialai.", "Nếu không biết bỏ bớt thì rất khó nhẹ người hơn."),
      vocab("轻松", "qīngsōng", "nhẹ nhàng, thư thái", "tính từ", "Trạng thái đích mà bài này hướng đến.", "有时候轻松不是因为做得少，而是放下得及时。", "Yǒushíhou qīngsōng bú shì yīnwèi zuò de shǎo, érshì fàngxia de jíshí.", "Đôi khi nhẹ nhõm không phải vì làm ít, mà vì buông xuống kịp lúc."),
      vocab("选择", "xuǎnzé", "chọn lựa", "danh từ/động từ", "Bài này nhấn việc bớt đi cũng là một lựa chọn.", "怎么选择，决定了你生活的重量。", "Zěnme xuǎnzé, juédìng le nǐ shēnghuó de zhòngliàng.", "Cách bạn lựa chọn quyết định trọng lượng cuộc sống của bạn.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Giải thích hình ảnh ẩn dụ của bài.", [
        study("A: 你怎么理解“锯掉生活的筐底”这句话？", "A: Nǐ zěnme lǐjiě “jù diào shēnghuó de kuāngdǐ” zhè jù huà?", "A: Bạn hiểu câu “cưa bỏ đáy giỏ của cuộc sống” thế nào?"),
        study("B: 我觉得它不是让人放弃一切，而是提醒人别背太多没必要的东西。", "B: Wǒ juéde tā bú shì ràng rén fàngqì yíqiè, érshì tíxǐng rén bié bēi tài duō méi bìyào de dōngxi.", "B: Tôi thấy nó không phải bảo con người từ bỏ mọi thứ, mà nhắc đừng mang quá nhiều thứ không cần thiết."),
        study("A: 也就是说，减轻负担本身就是一种智慧。", "A: Yě jiùshì shuō, jiǎnqīng fùdān běnshēn jiùshì yì zhǒng zhìhuì.", "A: Có nghĩa là việc giảm gánh nặng tự nó đã là một loại trí tuệ.")
      ]),
      dialogueBlock("Tình huống 2", "Nói vì sao con người sống quá nặng.", [
        study("A: 你觉得人为什么常常活得很累？", "A: Nǐ juéde rén wèishénme chángcháng huó de hěn lèi?", "A: Bạn thấy vì sao con người thường sống rất mệt?"),
        study("B: 因为总觉得什么都不能少，什么都得抓住。", "B: Yīnwèi zǒng juéde shénme dōu bùnéng shǎo, shénme dōu děi zhuāzhù.", "B: Vì luôn cảm thấy thứ gì cũng không thể thiếu, thứ gì cũng phải giữ chặt."),
        study("A: 可是抓得越多，人反而越不轻松。", "A: Kěshì zhuā de yuè duō, rén fǎn'ér yuè bù qīngsōng.", "A: Nhưng càng nắm nhiều thì con người ngược lại càng không thư thái.")
      ]),
      dialogueBlock("Tình huống 3", "Nói việc bớt đi cũng là năng lực.", [
        study("A: 你觉得什么最难放下？", "A: Nǐ juéde shénme zuì nán fàngxia?", "A: Bạn thấy điều gì khó buông nhất?"),
        study("B: 不是东西本身难放，而是我们舍不得那个“万一以后有用”的想法。", "B: Bú shì dōngxi běnshēn nán fàng, érshì wǒmen shěbude nàge “wànyī yǐhòu yǒuyòng” de xiǎngfǎ.", "B: Không phải bản thân đồ vật khó buông, mà là chúng ta không nỡ bỏ ý nghĩ “lỡ sau này còn dùng”."),
        study("A: 原来真正重的，不一定是东西，而可能是心里的犹豫。", "A: Yuánlái zhēnzhèng zhòng de, bù yídìng shì dōngxi, ér kěnéng shì xīnli de yóuyù.", "A: Hóa ra thứ thật sự nặng chưa chắc là đồ vật, mà có thể là sự do dự trong lòng.")
      ]),
      dialogueBlock("Tình huống 4", "Rút ra bài học sống.", [
        study("A: 那你现在会怎么做？", "A: Nà nǐ xiànzài huì zěnme zuò?", "A: Vậy bây giờ bạn sẽ làm thế nào?"),
        study("B: 我会定期看看哪些事已经不再必要，然后主动舍弃一点儿。", "B: Wǒ huì dìngqī kànkan nǎxiē shì yǐjīng bú zài bìyào, ránhòu zhǔdòng shěqì yìdiǎnr.", "B: Tôi sẽ định kỳ xem có những việc nào đã không còn cần thiết nữa, rồi chủ động bỏ bớt đi một chút."),
        study("A: 这样生活才可能慢慢变得更轻松。", "A: Zhèyàng shēnghuó cái kěnéng mànmàn biàn de gèng qīngsōng.", "A: Có như vậy cuộc sống mới có thể dần trở nên nhẹ nhõm hơn.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 不是……而是…… / 不一定……而可能……", "Hai mẫu này rất hợp với bài mang tính ẩn dụ, vì chúng giúp bóc tách nghĩa bề mặt và nghĩa sâu hơn.", study("它不是让人放弃一切，而是提醒人别背太多没必要的东西。", "Tā bú shì ràng rén fàngqì yíqiè, érshì tíxǐng rén bié bēi tài duō méi bìyào de dōngxi.", "Nó không phải bảo con người từ bỏ mọi thứ, mà nhắc đừng mang quá nhiều thứ không cần thiết."), [
        study("真正重的，不一定是东西，而可能是心里的犹豫。", "Zhēnzhèng zhòng de, bù yídìng shì dōngxi, ér kěnéng shì xīnli de yóuyù.", "Thứ thật sự nặng chưa chắc là đồ vật, mà có thể là sự do dự trong lòng."),
        study("问题不是事情太多，而是不会选择。", "Wèntí bú shì shìqing tài duō, érshì bú huì xuǎnzé.", "Vấn đề không phải là việc quá nhiều, mà là không biết chọn lựa."),
        study("轻松不一定来自拥有更少，而可能来自想得更清楚。", "Qīngsōng bù yídìng láizì yōngyǒu gèng shǎo, ér kěnéng láizì xiǎng de gèng qīngchu.", "Sự nhẹ nhõm chưa chắc đến từ việc có ít hơn, mà có thể đến từ việc nghĩ rõ hơn.")
      ]),
      grammarNote("2. 越……越…… / 定期……然后……", "Một mẫu nói quy luật tâm lý, một mẫu nói cách hành động có tính thực tế.", study("抓得越多，人反而越不轻松。", "Zhuā de yuè duō, rén fǎn'ér yuè bù qīngsōng.", "Càng nắm nhiều thì con người ngược lại càng không thư thái."), [
        study("想留的越多，生活越显得沉重。", "Xiǎng liú de yuè duō, shēnghuó yuè xiǎnde chénzhòng.", "Càng muốn giữ lại nhiều thì cuộc sống càng trở nên nặng nề."),
        study("我会定期看看哪些事已经不再必要，然后主动舍弃一点儿。", "Wǒ huì dìngqī kànkan nǎxiē shì yǐjīng bú zài bìyào, ránhòu zhǔdòng shěqì yìdiǎnr.", "Tôi sẽ định kỳ xem có những việc nào đã không còn cần thiết nữa, rồi chủ động bỏ bớt đi một chút."),
        study("先看清楚，再决定放下什么。", "Xiān kàn qīngchu, zài juédìng fàngxia shénme.", "Hãy nhìn rõ trước, rồi mới quyết định buông thứ gì.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 负担", "2. 舍弃", "3. 轻松"], options: ["a. bỏ đi", "b. gánh nặng", "c. nhẹ nhõm"], answer: "1-b, 2-a, 3-c" }],
      [{ question: "Điền từ thích hợp.", prompt: ["学会减___负担，也是一种能力。", "如果不会舍___，就很难轻松下来。", "这个“筐底”其实代表一种生活负___。"], answer: "轻 / 弃 / 担" }],
      [{ question: "Câu nào đúng?", options: ["A. 问题不是事情太多，而是不会选择。", "B. 问题而是不会选择，不是事情太多。", "C. 事情太多不是问题，而是不会选择。"], answer: "A. 问题不是事情太多，而是不会选择。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 你怎么理解“锯掉生活的筐底”这句话？", "B: ____________", "A: 也就是说，减轻负担本身就是一种智慧。"], answer: "B: 我觉得它不是让人放弃一切，而是提醒人别背太多没必要的东西。" }],
      "Tự kiểm tra: bạn có thể nói một thứ mình nên bỏ bớt đi để sống nhẹ hơn không?"
    ),
    quickSummary: {
      words: ["锯掉", "筐底", "负担", "减轻", "舍弃", "轻松"],
      patterns: ["它不是让人放弃一切，而是提醒人别背太多没必要的东西。", "抓得越多，人反而越不轻松。"],
      reminder: "Bài này cần biết nói bằng ẩn dụ nhưng vẫn phải kéo được về việc sống cụ thể."
    }
  },
  14: {
    objective: "Miêu tả tứ hợp viện Bắc Kinh như một không gian văn hóa sống, không chỉ là kiến trúc mà còn là cách con người cư trú và giao tiếp.",
    vocabulary: [
      vocab("四合院", "sìhéyuàn", "tứ hợp viện", "danh từ", "Kiểu kiến trúc sân nhà truyền thống đặc trưng của Bắc Kinh.", "北京的四合院不仅是一种房子，也是一种生活方式。", "Běijīng de sìhéyuàn bùjǐn shì yì zhǒng fángzi, yě shì yì zhǒng shēnghuó fāngshì.", "Tứ hợp viện ở Bắc Kinh không chỉ là một kiểu nhà, mà còn là một cách sống."),
      vocab("院子", "yuànzi", "sân nhà", "danh từ", "Không gian trung tâm của tứ hợp viện.", "一走进院子，就能感觉到一种安静。", "Yì zǒu jìn yuànzi, jiù néng gǎnjué dào yì zhǒng ānjìng.", "Vừa bước vào sân nhà là có thể cảm nhận được một sự yên tĩnh."),
      vocab("邻里", "línlǐ", "láng giềng", "danh từ", "Liên hệ giữa kiến trúc và quan hệ cộng đồng.", "过去的四合院生活里，邻里关系往往很近。", "Guòqù de sìhéyuàn shēnghuó lǐ, línlǐ guānxi wǎngwǎng hěn jìn.", "Trong đời sống tứ hợp viện trước đây, quan hệ láng giềng thường rất gần gũi."),
      vocab("传统", "chuántǒng", "truyền thống", "danh từ/tính từ", "Giúp giải thích vì sao tứ hợp viện có giá trị vượt khỏi công năng ở.", "它既有居住功能，也带着浓厚的传统气息。", "Tā jì yǒu jūzhù gōngnéng, yě dàizhe nónghòu de chuántǒng qìxī.", "Nó vừa có chức năng cư trú, vừa mang đậm không khí truyền thống."),
      vocab("布局", "bùjú", "bố cục", "danh từ/động từ", "Dùng khi nói sắp xếp không gian trong kiến trúc.", "四合院的布局反映了过去的家庭观念。", "Sìhéyuàn de bùjú fǎnyìng le guòqù de jiātíng guānniàn.", "Bố cục của tứ hợp viện phản ánh quan niệm gia đình trước đây."),
      vocab("气息", "qìxī", "khí chất, hơi thở", "danh từ", "Dùng để nói bầu không khí văn hóa của không gian sống.", "老院子里总有一种安静而温暖的气息。", "Lǎo yuànzi lǐ zǒng yǒu yì zhǒng ānjìng ér wēnnuǎn de qìxī.", "Trong sân nhà cũ luôn có một bầu không khí yên tĩnh mà ấm áp."),
      vocab("保存", "bǎocún", "giữ gìn, bảo tồn", "động từ", "Liên hệ giữa bảo tồn kiến trúc và bảo tồn ký ức đô thị.", "如果不及时保存，这些老建筑就会越来越少。", "Rúguǒ bù jíshí bǎocún, zhèxiē lǎo jiànzhù jiù huì yuèláiyuè shǎo.", "Nếu không kịp thời giữ gìn, những kiến trúc cũ này sẽ ngày càng ít đi."),
      vocab("生活方式", "shēnghuó fāngshì", "cách sống", "danh từ", "Giúp nối từ kiến trúc sang con người.", "建筑本身会影响一个地方的生活方式。", "Jiànzhù běnshēn huì yǐngxiǎng yí ge dìfang de shēnghuó fāngshì.", "Bản thân kiến trúc sẽ ảnh hưởng đến cách sống của một nơi.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Nói vì sao tứ hợp viện đặc biệt.", [
        study("A: 你去看过北京的四合院吗？", "A: Nǐ qù kànguo Běijīng de sìhéyuàn ma?", "A: Bạn từng đến xem tứ hợp viện ở Bắc Kinh chưa?"),
        study("B: 看过，我觉得它和普通房子最大的不同，是一进去就能感觉到生活气息。", "B: Kànguo, wǒ juéde tā hé pǔtōng fángzi zuì dà de bùtóng, shì yí jìnqù jiù néng gǎnjué dào shēnghuó qìxī.", "B: Rồi, tôi thấy điểm khác lớn nhất giữa nó và nhà bình thường là vừa bước vào đã cảm nhận được hơi thở cuộc sống."),
        study("A: 对，它不像单纯的建筑，更像一个完整的小世界。", "A: Duì, tā bú xiàng dānchún de jiànzhù, gèng xiàng yí ge wánzhěng de xiǎo shìjiè.", "A: Đúng, nó không giống một công trình đơn thuần mà giống một thế giới nhỏ hoàn chỉnh hơn.")
      ]),
      dialogueBlock("Tình huống 2", "Nối kiến trúc với quan hệ gia đình.", [
        study("A: 四合院的布局为什么那么受重视？", "A: Sìhéyuàn de bùjú wèishénme nàme shòu zhòngshì?", "A: Vì sao bố cục của tứ hợp viện lại được coi trọng như vậy?"),
        study("B: 因为它不只是空间安排，也反映了过去家庭内部的关系。", "B: Yīnwèi tā bú zhǐshì kōngjiān ānpái, yě fǎnyìng le guòqù jiātíng nèibù de guānxi.", "B: Vì nó không chỉ là sắp xếp không gian, mà còn phản ánh quan hệ bên trong gia đình trước đây."),
        study("A: 原来房子的样子，也会说明人怎么生活。", "A: Yuánlái fángzi de yàngzi, yě huì shuōmíng rén zěnme shēnghuó.", "A: Hóa ra dáng vẻ của ngôi nhà cũng sẽ nói lên con người sống thế nào.")
      ]),
      dialogueBlock("Tình huống 3", "Nói về láng giềng và cộng đồng.", [
        study("A: 现在住楼房的人，可能很久都不认识邻居。", "A: Xiànzài zhù lóufáng de rén, kěnéng hěn jiǔ dōu bù rènshi línjū.", "A: Người sống ở chung cư bây giờ có thể lâu lắm cũng không quen hàng xóm."),
        study("B: 所以很多人怀念四合院，不只是怀念房子，也是怀念那种邻里关系。", "B: Suǒyǐ hěn duō rén huáiniàn sìhéyuàn, bú zhǐshì huáiniàn fángzi, yě shì huáiniàn nà zhǒng línlǐ guānxi.", "B: Vì vậy nhiều người nhớ tứ hợp viện không chỉ là nhớ ngôi nhà, mà còn là nhớ kiểu quan hệ láng giềng đó."),
        study("A: 这么说，建筑里也保存着人的感情。", "A: Zhème shuō, jiànzhù lǐ yě bǎocúnzhe rén de gǎnqíng.", "A: Nói vậy thì trong kiến trúc cũng đang lưu giữ tình cảm của con người.")
      ]),
      dialogueBlock("Tình huống 4", "Nói về bảo tồn và hiện đại hóa.", [
        study("A: 可是老房子维修起来也很麻烦吧？", "A: Kěshì lǎo fángzi wéixiū qǐlai yě hěn máfan ba?", "A: Nhưng nhà cũ sửa chữa cũng rất phiền đúng không?"),
        study("B: 是，不过如果只考虑方便，不考虑保存，很多传统就会慢慢消失。", "B: Shì, búguò rúguǒ zhǐ kǎolǜ fāngbiàn, bù kǎolǜ bǎocún, hěn duō chuántǒng jiù huì mànmàn xiāoshī.", "B: Đúng, nhưng nếu chỉ nghĩ đến tiện lợi mà không nghĩ đến bảo tồn, nhiều truyền thống sẽ dần biến mất."),
        study("A: 所以真正难的，是在现代生活和传统价值之间找到平衡。", "A: Suǒyǐ zhēnzhèng nán de, shì zài xiàndài shēnghuó hé chuántǒng jiàzhí zhījiān zhǎodào pínghéng.", "A: Vì vậy điều thật sự khó là tìm được sự cân bằng giữa đời sống hiện đại và giá trị truyền thống.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 不只是……也…… / 更像……", "Bài này dùng để kéo người học ra khỏi cách nhìn thuần vật chất sang cách nhìn văn hóa.", study("它不只是空间安排，也反映了过去家庭内部的关系。", "Tā bú zhǐshì kōngjiān ānpái, yě fǎnyìng le guòqù jiātíng nèibù de guānxi.", "Nó không chỉ là sắp xếp không gian, mà còn phản ánh quan hệ bên trong gia đình trước đây."), [
        study("四合院不只是房子，也是一种生活方式。", "Sìhéyuàn bú zhǐshì fángzi, yě shì yì zhǒng shēnghuó fāngshì.", "Tứ hợp viện không chỉ là nhà ở, mà còn là một cách sống."),
        study("它不像单纯的建筑，更像一个完整的小世界。", "Tā bú xiàng dānchún de jiànzhù, gèng xiàng yí ge wánzhěng de xiǎo shìjiè.", "Nó không giống một công trình đơn thuần mà giống một thế giới nhỏ hoàn chỉnh hơn."),
        study("人们怀念的不只是院子，也是院子里的关系。", "Rénmen huáiniàn de bú zhǐshì yuànzi, yě shì yuànzi lǐ de guānxi.", "Điều con người nhớ không chỉ là cái sân, mà còn là các mối quan hệ trong sân đó.")
      ]),
      grammarNote("2. 如果只……不…… / 真正难的，是……", "Hai mẫu này giúp phát biểu quan điểm bảo tồn theo lối giải thích rõ trọng tâm.", study("如果只考虑方便，不考虑保存，很多传统就会慢慢消失。", "Rúguǒ zhǐ kǎolǜ fāngbiàn, bù kǎolǜ bǎocún, hěn duō chuántǒng jiù huì mànmàn xiāoshī.", "Nếu chỉ nghĩ đến tiện lợi mà không nghĩ đến bảo tồn, nhiều truyền thống sẽ dần biến mất."), [
        study("如果只看实用价值，就很难理解老建筑。", "Rúguǒ zhǐ kàn shíyòng jiàzhí, jiù hěn nán lǐjiě lǎo jiànzhù.", "Nếu chỉ nhìn giá trị sử dụng thì rất khó hiểu kiến trúc cũ."),
        study("真正难的，是怎么让传统继续活在现代生活里。", "Zhēnzhèng nán de, shì zěnme ràng chuántǒng jìxù huó zài xiàndài shēnghuó lǐ.", "Điều thật sự khó là làm sao để truyền thống tiếp tục sống trong đời sống hiện đại."),
        study("真正值得保存的，不只是外形，还有里面的气息。", "Zhēnzhèng zhídé bǎocún de, bú zhǐshì wàixíng, hái yǒu lǐmiàn de qìxī.", "Điều thật sự đáng giữ gìn không chỉ là hình dáng bên ngoài, mà còn là khí chất bên trong.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 四合院", "2. 布局", "3. 保存"], options: ["a. bảo tồn, giữ gìn", "b. tứ hợp viện", "c. bố cục"], answer: "1-b, 2-c, 3-a" }],
      [{ question: "Điền từ thích hợp.", prompt: ["四合院的布___反映了过去的家庭观念。", "很多人怀念的不只是房子，也是那种邻___关系。", "如果不及时保___，这些老建筑就会越来越少。"], answer: "局 / 里 / 存" }],
      [{ question: "Câu nào đúng?", options: ["A. 四合院不只是房子，也是一种生活方式。", "B. 四合院也不是只房子，是一种生活方式。", "C. 房子不只是四合院，也是一种生活方式。"], answer: "A. 四合院不只是房子，也是一种生活方式。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 四合院的布局为什么那么受重视？", "B: ____________", "A: 原来房子的样子，也会说明人怎么生活。"], answer: "B: 因为它不只是空间安排，也反映了过去家庭内部的关系。" }],
      "Tự kiểm tra: bạn có thể nói vì sao một kiểu kiến trúc lại phản ánh cách sống của con người không?"
    ),
    quickSummary: {
      words: ["四合院", "院子", "邻里", "布局", "保存", "生活方式"],
      patterns: ["四合院不只是房子，也是一种生活方式。", "真正难的，是在现代生活和传统价值之间找到平衡。"],
      reminder: "Bài này cần nối được từ kiến trúc sang con người, từ hình thức sang cách sống."
    }
  },
  15: {
    objective: "Giải thích thành ngữ 'chỉ thượng đàm binh', phân biệt giữa lý thuyết và thực hành, và nêu quan điểm về kinh nghiệm thực tế.",
    vocabulary: [
      vocab("纸上谈兵", "Zhǐshàng tánbīng", "bàn chuyện binh trên giấy", "thành ngữ", "Chỉ nói lý thuyết suông mà thiếu kinh nghiệm thực tế.", "很多计划听起来很好，做起来才知道是不是纸上谈兵。", "Hěn duō jìhuà tīngqilai hěn hǎo, zuò qǐlai cái zhīdào shì bú shì Zhǐshàng tánbīng.", "Nhiều kế hoạch nghe thì rất hay, nhưng làm rồi mới biết có phải chỉ là lý thuyết suông hay không."),
      vocab("理论", "lǐlùn", "lý luận", "danh từ", "Dùng để chỉ tri thức trên sách vở hoặc suy luận.", "理论当然重要，但不能代替经验。", "Lǐlùn dāngrán zhòngyào, dàn bùnéng dàitì jīngyàn.", "Lý luận đương nhiên quan trọng, nhưng không thể thay thế kinh nghiệm."),
      vocab("实践", "shíjiàn", "thực tiễn; thực hành", "danh từ/động từ", "Đối lập với lý thuyết trong bài này.", "很多事情必须在实践中才能真正明白。", "Hěn duō shìqing bìxū zài shíjiàn zhōng cáinéng zhēnzhèng míngbai.", "Nhiều việc phải ở trong thực tiễn mới có thể thật sự hiểu."),
      vocab("经验", "jīngyàn", "kinh nghiệm", "danh từ", "Thứ giúp con người tránh chỉ nói suông.", "没有经验的人，常常把问题想得太简单。", "Méiyǒu jīngyàn de rén, chángcháng bǎ wèntí xiǎng de tài jiǎndān.", "Người không có kinh nghiệm thường nghĩ vấn đề quá đơn giản."),
      vocab("空谈", "kōngtán", "nói suông", "động từ/danh từ", "Mạnh hơn 只说，不做.", "如果只有空谈，事情永远不会往前走。", "Rúguǒ zhǐyǒu kōngtán, shìqing yǒngyuǎn bú huì wǎng qián zǒu.", "Nếu chỉ có nói suông, mọi việc sẽ không bao giờ tiến lên phía trước."),
      vocab("实际", "shíjì", "thực tế", "danh từ/tính từ", "Giúp kéo lập luận về điều có thể thực hiện.", "考虑问题的时候，不能离开实际情况。", "Kǎolǜ wèntí de shíhou, bùnéng líkāi shíjì qíngkuàng.", "Khi cân nhắc vấn đề, không thể tách rời tình hình thực tế."),
      vocab("脱离", "tuōlí", "tách rời", "động từ", "Thường dùng với 现实, 实际, 群众.", "一旦脱离实际，再好的想法也容易出问题。", "Yídàn tuōlí shíjì, zài hǎo de xiǎngfǎ yě róngyì chū wèntí.", "Một khi tách rời thực tế, ý tưởng hay đến mấy cũng dễ gặp vấn đề."),
      vocab("检验", "jiǎnyàn", "kiểm nghiệm", "động từ/danh từ", "Thực tiễn là nơi kiểm nghiệm đúng sai của ý tưởng.", "一个办法有没有用，最终还得靠实践来检验。", "Yí ge bànfǎ yǒu méiyǒu yòng, zuìzhōng hái děi kào shíjiàn lái jiǎnyàn.", "Một phương pháp có hiệu quả hay không, cuối cùng vẫn phải dựa vào thực tiễn để kiểm nghiệm.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Giải thích ý nghĩa thành ngữ.", [
        study("A: 你怎么理解“纸上谈兵”这个成语？", "A: Nǐ zěnme lǐjiě “Zhǐshàng tánbīng” zhège chéngyǔ?", "A: Bạn hiểu thành ngữ “bàn chuyện binh trên giấy” như thế nào?"),
        study("B: 我觉得它是在批评那些只会说理论、不会解决实际问题的人。", "B: Wǒ juéde tā shì zài pīpíng nàxiē zhǐ huì shuō lǐlùn, bú huì jiějué shíjì wèntí de rén.", "B: Tôi thấy nó phê phán những người chỉ biết nói lý thuyết mà không biết giải quyết vấn đề thực tế."),
        study("A: 对，所以这个成语到现在还是很常用。", "A: Duì, suǒyǐ zhège chéngyǔ dào xiànzài háishi hěn chángyòng.", "A: Đúng, vì vậy thành ngữ này đến bây giờ vẫn còn rất hay dùng.")
      ]),
      dialogueBlock("Tình huống 2", "Nói vai trò của thực tiễn.", [
        study("A: 那是不是理论就不重要了？", "A: Nà shì bú shì lǐlùn jiù bù zhòngyào le?", "A: Vậy có phải là lý luận không còn quan trọng nữa không?"),
        study("B: 当然不是，问题是理论不能脱离实践。", "B: Dāngrán bú shì, wèntí shì lǐlùn bùnéng tuōlí shíjiàn.", "B: Đương nhiên không phải, vấn đề là lý luận không thể tách khỏi thực tiễn."),
        study("A: 也就是说，知道怎么想和知道怎么做，是两回事。", "A: Yě jiùshì shuō, zhīdào zěnme xiǎng hé zhīdào zěnme zuò, shì liǎng huí shì.", "A: Có nghĩa là biết nghĩ thế nào và biết làm thế nào là hai chuyện khác nhau.")
      ]),
      dialogueBlock("Tình huống 3", "Liên hệ công việc và học tập.", [
        study("A: 这种问题在工作里是不是特别常见？", "A: Zhè zhǒng wèntí zài gōngzuò lǐ shì bú shì tèbié chángjiàn?", "A: Kiểu vấn đề này có phải đặc biệt thường gặp trong công việc không?"),
        study("B: 很常见，有些人做计划的时候特别有信心，可是真正执行时就发现漏洞很多。", "B: Hěn chángjiàn, yǒuxiē rén zuò jìhuà de shíhou tèbié yǒu xìnxīn, kěshì zhēnzhèng zhíxíng shí jiù fāxiàn lòudòng hěn duō.", "B: Rất thường gặp, có người lúc lập kế hoạch thì rất tự tin, nhưng đến khi thực hiện mới phát hiện rất nhiều lỗ hổng."),
        study("A: 所以一个办法有没有用，还是得让现实来回答。", "A: Suǒyǐ yí ge bànfǎ yǒu méiyǒu yòng, háishi děi ràng xiànshí lái huídá.", "A: Vì vậy một cách làm có hiệu quả hay không vẫn phải để thực tế trả lời.")
      ]),
      dialogueBlock("Tình huống 4", "Rút ra thái độ đúng.", [
        study("A: 那我们应该怎么避免纸上谈兵？", "A: Nà wǒmen yīnggāi zěnme bìmiǎn Zhǐshàng tánbīng?", "A: Vậy chúng ta nên làm gì để tránh rơi vào lý thuyết suông?"),
        study("B: 我觉得一边学习理论，一边在小范围里多试、多做。", "B: Wǒ juéde yìbiān xuéxí lǐlùn, yìbiān zài xiǎo fànwéi lǐ duō shì, duō zuò.", "B: Tôi thấy nên vừa học lý luận, vừa thử và làm nhiều hơn trong phạm vi nhỏ."),
        study("A: 对，只有经过检验的想法，才更值得相信。", "A: Duì, zhǐyǒu jīngguò jiǎnyàn de xiǎngfǎ, cái gèng zhídé xiāngxìn.", "A: Đúng, chỉ những ý tưởng đã qua kiểm nghiệm mới càng đáng tin hơn.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 不是……而是…… / 不能脱离……", "Hai mẫu này giúp nói rõ tranh luận không phải phủ nhận lý thuyết, mà là nhấn mạnh điều kiện để lý thuyết có giá trị.", study("问题是理论不能脱离实践。", "Wèntí shì lǐlùn bùnéng tuōlí shíjiàn.", "Vấn đề là lý luận không thể tách khỏi thực tiễn."), [
        study("重要的不是说得多，而是做得出来。", "Zhòngyào de bú shì shuō de duō, érshì zuò de chūlai.", "Điều quan trọng không phải là nói nhiều, mà là làm ra được."),
        study("计划不能脱离实际情况。", "Jìhuà bùnéng tuōlí shíjì qíngkuàng.", "Kế hoạch không thể tách khỏi tình hình thực tế."),
        study("学习不能脱离问题本身。", "Xuéxí bùnéng tuōlí wèntí běnshēn.", "Việc học không thể tách khỏi chính vấn đề đó.")
      ]),
      grammarNote("2. 一边……一边…… / 只有……才……", "Một mẫu nói phương pháp kết hợp, một mẫu nhấn điều kiện cần để đánh giá ý tưởng.", study("我觉得一边学习理论，一边在小范围里多试、多做。", "Wǒ juéde yìbiān xuéxí lǐlùn, yìbiān zài xiǎo fànwéi lǐ duō shì, duō zuò.", "Tôi thấy nên vừa học lý luận, vừa thử và làm nhiều hơn trong phạm vi nhỏ."), [
        study("一边总结经验，一边调整方法。", "Yìbiān zǒngjié jīngyàn, yìbiān tiáozhěng fāngfǎ.", "Vừa tổng kết kinh nghiệm vừa điều chỉnh phương pháp."),
        study("只有经过实践检验，理论才更有说服力。", "Zhǐyǒu jīngguò shíjiàn jiǎnyàn, lǐlùn cái gèng yǒu shuōfúlì.", "Chỉ khi được thực tiễn kiểm nghiệm thì lý luận mới càng có sức thuyết phục."),
        study("只有真正做过，才知道难点在哪里。", "Zhǐyǒu zhēnzhèng zuòguo, cái zhīdào nándiǎn zài nǎlǐ.", "Chỉ khi thật sự làm rồi mới biết điểm khó nằm ở đâu.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 理论", "2. 实践", "3. 检验"], options: ["a. kiểm nghiệm", "b. lý luận", "c. thực tiễn"], answer: "1-b, 2-c, 3-a" }],
      [{ question: "Điền từ thích hợp.", prompt: ["理论当然重要，但不能代___经验。", "一旦脱离实___，再好的想法也容易出问题。", "最终还得靠实践来检___。"], answer: "替 / 际 / 验" }],
      [{ question: "Câu nào đúng?", options: ["A. 重要的不是说得多，而是做得出来。", "B. 重要而是不是说得多，做得出来。", "C. 做得出来不是重要的，而是说得多。"], answer: "A. 重要的不是说得多，而是做得出来。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 那是不是理论就不重要了？", "B: ____________", "A: 也就是说，知道怎么想和知道怎么做，是两回事。"], answer: "B: 当然不是，问题是理论不能脱离实践。" }],
      "Tự kiểm tra: bạn có thể dùng 2 câu để giải thích vì sao kinh nghiệm thực tế quan trọng không?"
    ),
    quickSummary: {
      words: ["纸上谈兵", "理论", "实践", "经验", "实际", "检验"],
      patterns: ["问题是理论不能脱离实践。", "只有经过实践检验，理论才更有说服力。"],
      reminder: "Bài này cần biết nối lý thuyết với việc làm. Nếu chỉ giải thích thành ngữ mà không liên hệ thực tế thì chưa đủ."
    }
  },
  16: {
    objective: "Thảo luận về cân nặng và ăn kiêng, phân biệt giữa giảm cân mù quáng và cách nhìn khoa học, cân bằng về sức khỏe.",
    vocabulary: [
      vocab("体重", "tǐzhòng", "cân nặng", "danh từ", "Chủ đề trung tâm của bài 16.", "很多人一提到体重就会感到压力。", "Hěn duō rén yì tídào tǐzhòng jiù huì gǎndào yālì.", "Rất nhiều người vừa nhắc đến cân nặng là đã thấy áp lực."),
      vocab("节食", "jiéshí", "ăn kiêng", "động từ/danh từ", "Trong bài này nhấn mạnh cần hiểu đúng, không cực đoan.", "过度节食不一定能带来健康。", "Guòdù jiéshí bù yídìng néng dàilái jiànkāng.", "Ăn kiêng quá mức chưa chắc đã mang lại sức khỏe."),
      vocab("健康", "jiànkāng", "sức khỏe, khỏe mạnh", "danh từ/tính từ", "Tiêu chuẩn quan trọng hơn con số cân nặng.", "真正重要的不是瘦，而是健康。", "Zhēnzhèng zhòngyào de bú shì shòu, érshì jiànkāng.", "Điều thật sự quan trọng không phải là gầy, mà là khỏe mạnh."),
      vocab("控制", "kòngzhì", "kiểm soát", "động từ", "Dùng cho ăn uống, cảm xúc, thói quen.", "控制饮食不等于什么都不能吃。", "Kòngzhì yǐnshí bù děngyú shénme dōu bùnéng chī.", "Kiểm soát ăn uống không có nghĩa là cái gì cũng không được ăn."),
      vocab("均衡", "jūnhéng", "cân bằng", "tính từ", "Dùng cho dinh dưỡng và lối sống.", "均衡饮食比一味节食更重要。", "Jūnhéng yǐnshí bǐ yíwèi jiéshí gèng zhòngyào.", "Ăn uống cân bằng quan trọng hơn việc chỉ chăm chăm ăn kiêng."),
      vocab("效果", "xiàoguǒ", "hiệu quả", "danh từ", "Giúp phân biệt cách làm ngắn hạn và bền vững.", "短时间看起来有效果的方法，不一定适合长期坚持。", "Duǎn shíjiān kànqilai yǒu xiàoguǒ de fāngfǎ, bù yídìng shìhé chángqī jiānchí.", "Phương pháp nhìn có hiệu quả trong thời gian ngắn chưa chắc phù hợp để duy trì lâu dài."),
      vocab("反弹", "fǎntán", "tăng trở lại, bật lại", "động từ/danh từ", "Hay dùng khi nói giảm cân không khoa học.", "减得太快，后来反弹得也快。", "Jiǎn de tài kuài, hòulái fǎntán de yě kuài.", "Giảm quá nhanh thì sau đó tăng trở lại cũng nhanh."),
      vocab("坚持", "jiānchí", "kiên trì", "động từ", "Chìa khóa của thay đổi bền vững.", "真正有效的方法，是你能长期坚持的方法。", "Zhēnzhèng yǒuxiào de fāngfǎ, shì nǐ néng chángqī jiānchí de fāngfǎ.", "Phương pháp thật sự hiệu quả là phương pháp bạn có thể kiên trì lâu dài.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Nói vì sao nhiều người ám ảnh cân nặng.", [
        study("A: 你觉得为什么很多人对体重这么敏感？", "A: Nǐ juéde wèishénme hěn duō rén duì tǐzhòng zhème mǐngǎn?", "A: Bạn thấy vì sao nhiều người lại nhạy cảm với cân nặng như vậy?"),
        study("B: 因为大家总把瘦和好看、健康直接联系在一起。", "B: Yīnwèi dàjiā zǒng bǎ shòu hé hǎokàn, jiànkāng zhíjiē liánxì zài yìqǐ.", "B: Vì mọi người thường gắn trực tiếp việc gầy với đẹp và khỏe."),
        study("A: 可是这两件事其实不完全一样。", "A: Kěshì zhè liǎng jiàn shì qíshí bù wánquán yíyàng.", "A: Nhưng thật ra hai việc đó không hoàn toàn giống nhau.")
      ]),
      dialogueBlock("Tình huống 2", "Phản biện ăn kiêng cực đoan.", [
        study("A: 你赞成节食减肥吗？", "A: Nǐ zànchéng jiéshí jiǎnféi ma?", "A: Bạn có tán thành giảm cân bằng cách ăn kiêng không?"),
        study("B: 我不反对控制饮食，但反对什么都不吃的那种节食。", "B: Wǒ bú fǎnduì kòngzhì yǐnshí, dàn fǎnduì shénme dōu bù chī de nà zhǒng jiéshí.", "B: Tôi không phản đối việc kiểm soát ăn uống, nhưng phản đối kiểu ăn kiêng cái gì cũng không ăn."),
        study("A: 对，那样短期可能有效果，长期却容易反弹。", "A: Duì, nà yàng duǎnqī kěnéng yǒu xiàoguǒ, chángqī què róngyì fǎntán.", "A: Đúng, như vậy ngắn hạn có thể có hiệu quả, nhưng dài hạn lại dễ tăng trở lại.")
      ]),
      dialogueBlock("Tình huống 3", "Nhấn mạnh sức khỏe và cân bằng.", [
        study("A: 那你觉得什么样的方法比较合理？", "A: Nà nǐ juéde shénme yàng de fāngfǎ bǐjiào hélǐ?", "A: Vậy bạn thấy phương pháp nào hợp lý hơn?"),
        study("B: 我觉得还是均衡饮食加上规律运动比较可靠。", "B: Wǒ juéde háishi jūnhéng yǐnshí jiā shàng guīlǜ yùndòng bǐjiào kěkào.", "B: Tôi thấy vẫn là ăn uống cân bằng cộng với vận động điều độ thì đáng tin hơn."),
        study("A: 听起来虽然慢一点儿，但更健康。", "A: Tīngqilai suīrán màn yìdiǎnr, dàn gèng jiànkāng.", "A: Nghe có vẻ chậm hơn một chút, nhưng lành mạnh hơn.")
      ]),
      dialogueBlock("Tình huống 4", "Nói về thay đổi bền vững.", [
        study("A: 为什么很多人明知道方法不健康，还是会去试？", "A: Wèishénme hěn duō rén míngzhī dào fāngfǎ bù jiànkāng, háishi huì qù shì?", "A: Vì sao nhiều người dù biết phương pháp không lành mạnh vẫn thử?"),
        study("B: 因为大家都希望快点看到结果。", "B: Yīnwèi dàjiā dōu xīwàng kuài diǎn kàndào jiéguǒ.", "B: Vì mọi người đều hy vọng nhanh chóng nhìn thấy kết quả."),
        study("A: 可真正有效的，往往是那些你愿意坚持很久的方法。", "A: Kě zhēnzhèng yǒuxiào de, wǎngwǎng shì nàxiē nǐ yuànyì jiānchí hěn jiǔ de fāngfǎ.", "A: Nhưng thứ thật sự hiệu quả thường là những phương pháp bạn sẵn sàng kiên trì rất lâu.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 不等于…… / 不一定……", "Hai mẫu này giúp sửa những suy nghĩ quá đơn giản về cân nặng và ăn kiêng.", study("控制饮食不等于什么都不能吃。", "Kòngzhì yǐnshí bù děngyú shénme dōu bùnéng chī.", "Kiểm soát ăn uống không có nghĩa là cái gì cũng không được ăn."), [
        study("瘦不等于健康。", "Shòu bù děngyú jiànkāng.", "Gầy không đồng nghĩa với khỏe mạnh."),
        study("看起来有效果的方法，不一定适合长期坚持。", "Kànqilai yǒu xiàoguǒ de fāngfǎ, bù yídìng shìhé chángqī jiānchí.", "Phương pháp nhìn có hiệu quả chưa chắc phù hợp để duy trì lâu dài."),
        study("节食不一定能解决问题，关键是整体生活方式。", "Jiéshí bù yídìng néng jiějué wèntí, guānjiàn shì zhěngtǐ shēnghuó fāngshì.", "Ăn kiêng chưa chắc giải quyết được vấn đề, mấu chốt là lối sống tổng thể.")
      ]),
      grammarNote("2. 虽然……但…… / 真正……的是……", "Một mẫu dùng để chấp nhận tiến độ chậm nhưng tích cực hơn, một mẫu để chốt tiêu chuẩn đúng.", study("听起来虽然慢一点儿，但更健康。", "Tīngqilai suīrán màn yìdiǎnr, dàn gèng jiànkāng.", "Nghe có vẻ chậm hơn một chút, nhưng lành mạnh hơn."), [
        study("真正重要的不是瘦，而是健康。", "Zhēnzhèng zhòngyào de bú shì shòu, érshì jiànkāng.", "Điều thật sự quan trọng không phải là gầy, mà là khỏe mạnh."),
        study("虽然变化慢一点儿，但身体更容易接受。", "Suīrán biànhuà màn yìdiǎnr, dàn shēntǐ gèng róngyì jiēshòu.", "Tuy thay đổi chậm hơn một chút, nhưng cơ thể dễ chấp nhận hơn."),
        study("真正有效的，是那些你愿意坚持很久的方法。", "Zhēnzhèng yǒuxiào de, shì nàxiē nǐ yuànyì jiānchí hěn jiǔ de fāngfǎ.", "Điều thật sự hiệu quả là những phương pháp bạn sẵn sàng kiên trì rất lâu.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 节食", "2. 反弹", "3. 均衡"], options: ["a. tăng trở lại", "b. cân bằng", "c. ăn kiêng"], answer: "1-c, 2-a, 3-b" }],
      [{ question: "Điền từ thích hợp.", prompt: ["控制饮食不等___什么都不能吃。", "短期可能有效果，长期却容易反___。", "真正有效的方法，是你能长期坚___的方法。"], answer: "于 / 弹 / 持" }],
      [{ question: "Câu nào đúng?", options: ["A. 控制饮食不等于什么都不能吃。", "B. 控制饮食什么都不等于不能吃。", "C. 什么都不能吃不等于控制饮食。"], answer: "A. 控制饮食不等于什么都不能吃。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 那你觉得什么样的方法比较合理？", "B: ____________", "A: 听起来虽然慢一点儿，但更健康。"], answer: "B: 我觉得还是均衡饮食加上规律运动比较可靠。" }],
      "Tự kiểm tra: bạn có thể nói một nguyên tắc giảm cân lành mạnh mà mình đồng ý nhất không?"
    ),
    quickSummary: {
      words: ["体重", "节食", "健康", "均衡", "反弹", "坚持"],
      patterns: ["控制饮食不等于什么都不能吃。", "真正有效的，是那些你愿意坚持很久的方法。"],
      reminder: "Bài này cần giọng nói cân bằng và khoa học, tránh cực đoan kiểu chỉ nhanh hay chỉ đẹp."
    }
  },
  17: {
    objective: "Thảo luận về việc rời đi đúng lúc, giá trị của thời điểm đẹp nhất và cảm giác tiếc nuối trong lựa chọn.",
    vocabulary: [
      vocab("时刻", "shíkè", "thời khắc", "danh từ", "Dùng cho thời điểm có ý nghĩa đặc biệt.", "有些时刻一旦过去，就很难再回来。", "Yǒuxiē shíkè yídàn guòqù, jiù hěn nán zài huílai.", "Có những thời khắc một khi qua rồi thì rất khó quay lại."),
      vocab("离开", "líkāi", "rời đi", "động từ", "Trong bài này mang nghĩa cả thực tế lẫn biểu tượng.", "在最美好的时候离开，其实并不容易。", "Zài zuì měihǎo de shíhou líkāi, qíshí bìng bù róngyì.", "Rời đi vào lúc đẹp nhất thật ra không hề dễ."),
      vocab("留恋", "liúliàn", "lưu luyến", "động từ/tính từ", "Dùng khi còn nhiều tình cảm với người hoặc nơi chốn.", "越是美好的东西，越让人留恋。", "Yuè shì měihǎo de dōngxi, yuè ràng rén liúliàn.", "Thứ càng đẹp lại càng khiến con người lưu luyến."),
      vocab("遗憾", "yíhàn", "tiếc nuối", "danh từ/động từ", "Bài này bàn về quan hệ giữa tiếc nuối và lựa chọn.", "很多遗憾并不来自失去，而是来自犹豫。", "Hěn duō yíhàn bìng bù láizì shīqù, érshì láizì yóuyù.", "Nhiều tiếc nuối không đến từ mất mát, mà đến từ do dự."),
      vocab("保留", "bǎoliú", "giữ lại", "động từ", "Dùng khi nói giữ lại ký ức hoặc ấn tượng đẹp.", "有时候离开，是为了把最好的印象保留下来。", "Yǒushíhou líkāi, shì wèile bǎ zuì hǎo de yìnxiàng bǎoliú xialai.", "Đôi khi rời đi là để giữ lại ấn tượng đẹp nhất."),
      vocab("巅峰", "diānfēng", "đỉnh cao", "danh từ", "Dùng cho thời điểm đẹp nhất của sự nghiệp, quan hệ, nghệ thuật.", "不是每个人都能在巅峰时做出冷静的选择。", "Bú shì měi ge rén dōu néng zài diānfēng shí zuò chū lěngjìng de xuǎnzé.", "Không phải ai cũng có thể đưa ra lựa chọn bình tĩnh lúc ở đỉnh cao."),
      vocab("犹豫", "yóuyù", "do dự", "động từ/tính từ", "Trái với sự dứt khoát của bài này.", "越犹豫，有时候越容易错过最好的时机。", "Yuè yóuyù, yǒushíhou yuè róngyì cuòguò zuì hǎo de shíjī.", "Càng do dự đôi khi càng dễ bỏ lỡ thời cơ tốt nhất."),
      vocab("时机", "shíjī", "thời cơ", "danh từ", "Giúp phân biệt thời điểm chung với thời điểm thích hợp.", "知道什么时候该离开，也是一种判断时机的能力。", "Zhīdào shénme shíhou gāi líkāi, yě shì yì zhǒng pànduàn shíjī de nénglì.", "Biết khi nào nên rời đi cũng là một năng lực phán đoán thời cơ.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Nói vì sao rời đi lúc đẹp nhất lại khó.", [
        study("A: 你觉得人在最美好的时刻离开，为什么这么难？", "A: Nǐ juéde rén zài zuì měihǎo de shíkè líkāi, wèishénme zhème nán?", "A: Bạn thấy vì sao con người khó rời đi vào thời khắc đẹp nhất đến vậy?"),
        study("B: 因为越美好，越让人留恋，也越舍不得放手。", "B: Yīnwèi yuè měihǎo, yuè ràng rén liúliàn, yě yuè shěbude fàngshǒu.", "B: Vì càng đẹp thì càng khiến người ta lưu luyến, cũng càng không nỡ buông tay."),
        study("A: 对，所以真正困难的不是离开，而是判断什么时候该离开。", "A: Duì, suǒyǐ zhēnzhèng kùnnan de bú shì líkāi, érshì pànduàn shénme shíhou gāi líkāi.", "A: Đúng, vì vậy điều thực sự khó không phải là rời đi, mà là phán đoán khi nào nên rời đi.")
      ]),
      dialogueBlock("Tình huống 2", "Nói về việc giữ lại ấn tượng đẹp.", [
        study("A: 可是为什么不多留一会儿呢？", "A: Kěshì wèishénme bù duō liú yí huìr ne?", "A: Nhưng vì sao không ở lại thêm một chút nữa?"),
        study("B: 有时候多留一步，反而会把原来最好的感觉破坏掉。", "B: Yǒushíhou duō liú yí bù, fǎn'ér huì bǎ yuánlái zuì hǎo de gǎnjué pòhuài diào.", "B: Đôi khi ở lại thêm một bước, ngược lại lại phá hỏng cảm giác đẹp nhất ban đầu."),
        study("A: 原来离开，也可能是一种保留。", "A: Yuánlái líkāi, yě kěnéng shì yì zhǒng bǎoliú.", "A: Hóa ra rời đi cũng có thể là một cách giữ lại.")
      ]),
      dialogueBlock("Tình huống 3", "Liên hệ với thời cơ và do dự.", [
        study("A: 你觉得遗憾通常是怎么来的？", "A: Nǐ juéde yíhàn tōngcháng shì zěnme lái de?", "A: Bạn thấy tiếc nuối thường đến từ đâu?"),
        study("B: 很多时候不是做错了决定，而是该决定的时候一直犹豫。", "B: Hěn duō shíhou bú shì zuò cuò le juédìng, érshì gāi juédìng de shíhou yìzhí yóuyù.", "B: Nhiều khi không phải là đưa ra quyết định sai, mà là cứ do dự vào lúc cần quyết định."),
        study("A: 这么说，时机有时候比努力本身还重要。", "A: Zhème shuō, shíjī yǒushíhou bǐ nǔlì běnshēn hái zhòngyào.", "A: Nói vậy thì thời cơ đôi khi còn quan trọng hơn cả nỗ lực tự thân.")
      ]),
      dialogueBlock("Tình huống 4", "Nói về lựa chọn trưởng thành.", [
        study("A: 那你认为什么叫成熟的离开？", "A: Nà nǐ rènwéi shénme jiào chéngshú de líkāi?", "A: Vậy bạn cho rằng thế nào gọi là rời đi một cách trưởng thành?"),
        study("B: 不是因为失望才走，而是因为知道最好的部分已经出现过了。", "B: Bú shì yīnwèi shīwàng cái zǒu, érshì yīnwèi zhīdào zuì hǎo de bùfen yǐjīng chūxiàn guo le.", "B: Không phải vì thất vọng nên mới đi, mà là vì biết phần đẹp nhất đã từng xuất hiện rồi."),
        study("A: 这种选择听起来难，但也很有分寸。", "A: Zhè zhǒng xuǎnzé tīngqilai nán, dàn yě hěn yǒu fèncun.", "A: Kiểu lựa chọn này nghe thì khó, nhưng cũng rất có chừng mực.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 越……越…… / 不是……而是……", "Hai mẫu này giúp diễn đạt tâm lý phức tạp và chuyển ý từ cảm xúc sang phán đoán.", study("越美好，越让人留恋。", "Yuè měihǎo, yuè ràng rén liúliàn.", "Càng đẹp lại càng khiến người ta lưu luyến."), [
        study("越舍不得，越容易错过时机。", "Yuè shěbude, yuè róngyì cuòguò shíjī.", "Càng không nỡ càng dễ bỏ lỡ thời cơ."),
        study("真正困难的不是离开，而是判断什么时候该离开。", "Zhēnzhèng kùnnan de bú shì líkāi, érshì pànduàn shénme shíhou gāi líkāi.", "Điều thực sự khó không phải là rời đi, mà là phán đoán khi nào nên rời đi."),
        study("遗憾不是因为失去，而常常是因为犹豫。", "Yíhàn bú shì yīnwèi shīqù, ér chángcháng shì yīnwèi yóuyù.", "Tiếc nuối không phải vì mất đi, mà thường là vì do dự.")
      ]),
      grammarNote("2. 有时候……反而…… / 不是因为……才……", "Mẫu này phù hợp với những lập luận có vẻ ngược với trực giác ban đầu của người nghe.", study("有时候多留一步，反而会把原来最好的感觉破坏掉。", "Yǒushíhou duō liú yí bù, fǎn'ér huì bǎ yuánlái zuì hǎo de gǎnjué pòhuài diào.", "Đôi khi ở lại thêm một bước lại phá hỏng cảm giác đẹp nhất ban đầu."), [
        study("有时候离开，反而是一种保留。", "Yǒushíhou líkāi, fǎn'ér shì yì zhǒng bǎoliú.", "Đôi khi rời đi ngược lại là một cách giữ lại."),
        study("不是因为失望才走，而是因为知道该停了。", "Bú shì yīnwèi shīwàng cái zǒu, érshì yīnwèi zhīdào gāi tíng le.", "Không phải vì thất vọng mới đi, mà là vì biết đã đến lúc dừng."),
        study("不是因为不喜欢了，而是因为不想让它变味。", "Bú shì yīnwèi bù xǐhuan le, érshì yīnwèi bù xiǎng ràng tā biàn wèi.", "Không phải vì không còn thích nữa, mà là vì không muốn để nó biến chất.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 留恋", "2. 巅峰", "3. 时机"], options: ["a. thời cơ", "b. đỉnh cao", "c. lưu luyến"], answer: "1-c, 2-b, 3-a" }],
      [{ question: "Điền từ thích hợp.", prompt: ["越犹___，越容易错过最好的时机。", "有些时刻一旦过去，就很难再回___。", "有时候离开，是为了把最好的印象保___下来。"], answer: "豫 / 来 / 留" }],
      [{ question: "Câu nào đúng?", options: ["A. 真正困难的不是离开，而是判断什么时候该离开。", "B. 真正困难而不是离开，判断什么时候该离开。", "C. 判断什么时候该离开，不是真正困难的离开。"], answer: "A. 真正困难的不是离开，而是判断什么时候该离开。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 可是为什么不多留一会儿呢？", "B: ____________", "A: 原来离开，也可能是一种保留。"], answer: "B: 有时候多留一步，反而会把原来最好的感觉破坏掉。" }],
      "Tự kiểm tra: bạn có thể nói một ví dụ về việc 'rời đi đúng lúc' bằng 2 câu không?"
    ),
    quickSummary: {
      words: ["时刻", "离开", "留恋", "遗憾", "保留", "时机"],
      patterns: ["真正困难的不是离开，而是判断什么时候该离开。", "有时候离开，反而是一种保留。"],
      reminder: "Bài này cần giọng nói tinh và có độ chín, không nên nói quá trực diện hay quá nông."
    }
  },
  18: {
    objective: "Bàn về nghệ thuật trừu tượng, sự khác biệt trong cảm thụ thẩm mỹ và cách bảo vệ quan điểm mà vẫn tôn trọng góc nhìn khác.",
    vocabulary: [
      vocab("抽象", "chōuxiàng", "trừu tượng", "tính từ", "Từ trọng tâm của bài về nghệ thuật hiện đại.", "很多人一看到抽象艺术就说看不懂。", "Hěn duō rén yí kàndào chōuxiàng yìshù jiù shuō kàn bu dǒng.", "Nhiều người vừa nhìn thấy nghệ thuật trừu tượng là nói không hiểu."),
      vocab("艺术", "yìshù", "nghệ thuật", "danh từ", "Bài này đẩy từ cảm nhận trực tiếp sang thảo luận thẩm mỹ.", "艺术不一定只负责让人觉得好看。", "Yìshù bù yídìng zhǐ fùzé ràng rén juéde hǎokàn.", "Nghệ thuật chưa chắc chỉ có nhiệm vụ khiến người ta thấy đẹp."),
      vocab("欣赏", "xīnshǎng", "thưởng thức", "động từ", "Không chỉ là nhìn mà còn là cảm nhận và hiểu.", "每个人欣赏艺术的方式都不一样。", "Měi ge rén xīnshǎng yìshù de fāngshì dōu bù yíyàng.", "Cách mỗi người thưởng thức nghệ thuật đều không giống nhau."),
      vocab("感受", "gǎnshòu", "cảm nhận", "danh từ/động từ", "Cốt lõi của tranh luận về cái đẹp.", "有时候艺术作品最重要的不是内容，而是感受。", "Yǒushíhou yìshù zuòpǐn zuì zhòngyào de bú shì nèiróng, érshì gǎnshòu.", "Đôi khi điều quan trọng nhất của tác phẩm nghệ thuật không phải là nội dung, mà là cảm nhận."),
      vocab("标准", "biāozhǔn", "tiêu chuẩn", "danh từ", "Bài này đặt câu hỏi liệu cái đẹp có tiêu chuẩn chung hay không.", "审美是不是一定要有统一标准？", "Shěnměi shì bú shì yídìng yào yǒu tǒngyī biāozhǔn?", "Thẩm mỹ có nhất định phải có tiêu chuẩn thống nhất không?"),
      vocab("想象", "xiǎngxiàng", "tưởng tượng", "danh từ/động từ", "Giúp giải thích vì sao nghệ thuật trừu tượng không nói quá rõ.", "抽象艺术往往给观众留下更多想象空间。", "Chōuxiàng yìshù wǎngwǎng gěi guānzhòng liúxià gèng duō xiǎngxiàng kōngjiān.", "Nghệ thuật trừu tượng thường để lại nhiều không gian tưởng tượng hơn cho người xem."),
      vocab("表达", "biǎodá", "biểu đạt", "động từ/danh từ", "Từ khóa khi nói nghệ thuật không nhất thiết mô tả trực tiếp.", "艺术家不一定用清楚的形象来表达想法。", "Yìshùjiā bù yídìng yòng qīngchu de xíngxiàng lái biǎodá xiǎngfǎ.", "Nghệ sĩ chưa chắc dùng hình ảnh rõ ràng để biểu đạt ý tưởng."),
      vocab("接受", "jiēshòu", "chấp nhận", "động từ", "Dùng khi nói người xem có thể không hiểu nhưng vẫn có thể mở lòng.", "看不懂，不代表完全不能接受。", "Kàn bu dǒng, bù dàibiǎo wánquán bùnéng jiēshòu.", "Không hiểu không có nghĩa là hoàn toàn không thể tiếp nhận.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Nói phản ứng thường gặp với nghệ thuật trừu tượng.", [
        study("A: 你喜欢抽象艺术吗？", "A: Nǐ xǐhuan chōuxiàng yìshù ma?", "A: Bạn có thích nghệ thuật trừu tượng không?"),
        study("B: 以前不太喜欢，因为总觉得看不懂。", "B: Yǐqián bú tài xǐhuan, yīnwèi zǒng juéde kàn bu dǒng.", "B: Trước đây không thích lắm, vì luôn cảm thấy không hiểu."),
        study("A: 其实很多人第一次看都会有这种感觉。", "A: Qíshí hěn duō rén dì-yī cì kàn dōu huì yǒu zhè zhǒng gǎnjué.", "A: Thật ra rất nhiều người lần đầu nhìn đều có cảm giác đó.")
      ]),
      dialogueBlock("Tình huống 2", "Giải thích vì sao không hiểu vẫn có giá trị.", [
        study("A: 那既然看不懂，为什么还有人觉得它美？", "A: Nà jìrán kàn bu dǒng, wèishénme hái yǒu rén juéde tā měi?", "A: Vậy nếu đã không hiểu, vì sao vẫn có người thấy nó đẹp?"),
        study("B: 因为艺术不一定都要解释清楚，有时候它更重要的是引发感受和想象。", "B: Yīnwèi yìshù bù yídìng dōu yào jiěshì qīngchu, yǒushíhou tā gèng zhòngyào de shì yǐnfā gǎnshòu hé xiǎngxiàng.", "B: Vì nghệ thuật chưa chắc phải giải thích rõ mọi thứ, đôi khi điều quan trọng hơn là gợi lên cảm nhận và tưởng tượng."),
        study("A: 原来“看懂”不是欣赏的唯一标准。", "A: Yuánlái “kàn dǒng” bú shì xīnshǎng de wéiyī biāozhǔn.", "A: Hóa ra “hiểu” không phải là tiêu chuẩn duy nhất của việc thưởng thức.")
      ]),
      dialogueBlock("Tình huống 3", "Tôn trọng khác biệt thẩm mỹ.", [
        study("A: 那是不是每个人都可以说自己的感觉？", "A: Nà shì bú shì měi ge rén dōu kěyǐ shuō zìjǐ de gǎnjué?", "A: Vậy có phải mỗi người đều có thể nói cảm nhận của mình không?"),
        study("B: 当然可以，不过表达感受的时候，也要尊重别人不同的标准。", "B: Dāngrán kěyǐ, búguò biǎodá gǎnshòu de shíhou, yě yào zūnzhòng biérén bùtóng de biāozhǔn.", "B: Đương nhiên là có thể, nhưng khi biểu đạt cảm nhận cũng phải tôn trọng tiêu chuẩn khác của người khác."),
        study("A: 对，审美本来就很难只有一个答案。", "A: Duì, shěnměi běnlái jiù hěn nán zhǐ yǒu yí ge dá'àn.", "A: Đúng, thẩm mỹ vốn dĩ rất khó chỉ có một đáp án.")
      ]),
      dialogueBlock("Tình huống 4", "Nói về sự thay đổi trong cách nhìn.", [
        study("A: 那你现在怎么看抽象艺术？", "A: Nà nǐ xiànzài zěnme kàn chōuxiàng yìshù?", "A: Vậy bây giờ bạn nhìn nghệ thuật trừu tượng thế nào?"),
        study("B: 我现在不一定每次都喜欢，但愿意多看一会儿，再想一想它想表达什么。", "B: Wǒ xiànzài bù yídìng měi cì dōu xǐhuan, dàn yuànyì duō kàn yí huìr, zài xiǎng yì xiǎng tā xiǎng biǎodá shénme.", "B: Bây giờ tôi chưa chắc lần nào cũng thích, nhưng sẵn sàng nhìn lâu hơn một chút rồi nghĩ xem nó muốn biểu đạt điều gì."),
        study("A: 这已经是一种很好的欣赏方式了。", "A: Zhè yǐjīng shì yì zhǒng hěn hǎo de xīnshǎng fāngshì le.", "A: Như vậy đã là một cách thưởng thức rất tốt rồi.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 不一定…… / 不是……的唯一标准", "Hai mẫu này rất phù hợp để phá vỡ suy nghĩ cứng nhắc về cái đẹp và cách hiểu nghệ thuật.", study("看懂不是欣赏的唯一标准。", "Kàn dǒng bú shì xīnshǎng de wéiyī biāozhǔn.", "Hiểu không phải là tiêu chuẩn duy nhất của việc thưởng thức."), [
        study("艺术不一定都要解释清楚。", "Yìshù bù yídìng dōu yào jiěshì qīngchu.", "Nghệ thuật chưa chắc phải giải thích rõ mọi thứ."),
        study("喜欢不一定来自理解完整。", "Xǐhuan bù yídìng láizì lǐjiě wánzhěng.", "Sự thích thú chưa chắc đến từ việc hiểu trọn vẹn."),
        study("标准不是感受的唯一来源。", "Biāozhǔn bú shì gǎnshòu de wéiyī láiyuán.", "Tiêu chuẩn không phải là nguồn duy nhất của cảm nhận.")
      ]),
      grammarNote("2. 既然……为什么…… / 不过……也要……", "Một mẫu để đặt câu hỏi phản biện, một mẫu để thêm điều kiện tôn trọng trong tranh luận thẩm mỹ.", study("既然看不懂，为什么还有人觉得它美？", "Jìrán kàn bu dǒng, wèishénme hái yǒu rén juéde tā měi?", "Nếu đã không hiểu thì vì sao vẫn có người thấy nó đẹp?"), [
        study("不过表达感受的时候，也要尊重别人不同的标准。", "Búguò biǎodá gǎnshòu de shíhou, yě yào zūnzhòng biérén bùtóng de biāozhǔn.", "Nhưng khi biểu đạt cảm nhận cũng phải tôn trọng tiêu chuẩn khác của người khác."),
        study("既然审美没有唯一答案，为什么一定要别人和你一样？", "Jìrán shěnměi méiyǒu wéiyī dá'àn, wèishénme yídìng yào biérén hé nǐ yíyàng?", "Nếu thẩm mỹ không có đáp án duy nhất, vậy vì sao nhất định người khác phải giống bạn?"),
        study("不过看不懂的时候，也可以先接受自己的疑问。", "Búguò kàn bu dǒng de shíhou, yě kěyǐ xiān jiēshòu zìjǐ de yíwèn.", "Nhưng lúc không hiểu thì cũng có thể trước hết chấp nhận sự băn khoăn của chính mình.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 抽象", "2. 欣赏", "3. 标准"], options: ["a. thưởng thức", "b. trừu tượng", "c. tiêu chuẩn"], answer: "1-b, 2-a, 3-c" }],
      [{ question: "Điền từ thích hợp.", prompt: ["抽象艺术往往给观众留下更多想___空间。", "艺术家不一定用清楚的形象来表___想法。", "看不懂，不代表完全不能接___。"], answer: "象 / 达 / 受" }],
      [{ question: "Câu nào đúng?", options: ["A. 看懂不是欣赏的唯一标准。", "B. 看懂不是唯一的欣赏标准。", "C. 欣赏不是看懂的唯一标准。"], answer: "A. 看懂不是欣赏的唯一标准。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 那既然看不懂，为什么还有人觉得它美？", "B: ____________", "A: 原来“看懂”不是欣赏的唯一标准。"], answer: "B: 因为艺术不一定都要解释清楚，有时候它更重要的是引发感受和想象。" }],
      "Tự kiểm tra: bạn có thể nói vì sao một tác phẩm mình không hoàn toàn hiểu vẫn có thể có giá trị không?"
    ),
    quickSummary: {
      words: ["抽象", "艺术", "欣赏", "感受", "标准", "想象"],
      patterns: ["看懂不是欣赏的唯一标准。", "艺术不一定都要解释清楚。"],
      reminder: "Bài này cần giữ lập luận mở: bảo vệ cảm nhận của mình nhưng không phủ nhận cảm nhận của người khác."
    }
  },
  19: {
    objective: "Nói về món bánh củ cải quê nhà, từ món ăn cụ thể chuyển sang ký ức, bản quán và tình cảm với nơi chốn mình xuất thân.",
    vocabulary: [
      vocab("家乡", "jiāxiāng", "quê hương", "danh từ", "Từ trung tâm của bài 19.", "一提到家乡，他就会想起小时候的味道。", "Yì tídào jiāxiāng, tā jiù huì xiǎngqǐ xiǎoshíhou de wèidào.", "Vừa nhắc đến quê hương là anh ấy nhớ đến hương vị thời thơ ấu."),
      vocab("萝卜饼", "luóbo bǐng", "bánh củ cải", "danh từ", "Món ăn gắn với ký ức quê nhà trong bài.", "家乡的萝卜饼看起来普通，却总让人怀念。", "Jiāxiāng de luóbo bǐng kànqilai pǔtōng, què zǒng ràng rén huáiniàn.", "Bánh củ cải quê nhà nhìn thì bình thường nhưng luôn khiến người ta nhớ."),
      vocab("味道", "wèidào", "hương vị", "danh từ", "Ở bài này gắn chặt với cảm xúc và ký ức.", "有些味道一辈子都忘不了。", "Yǒuxiē wèidào yí bèizi dōu wàng bu liǎo.", "Có những hương vị cả đời cũng không quên được."),
      vocab("怀念", "huáiniàn", "hoài niệm, nhớ nhung", "động từ", "Dùng khi món ăn gợi lại người hoặc nơi chốn.", "离开家以后，我最怀念的就是那种简单的家常味。", "Líkāi jiā yǐhòu, wǒ zuì huáiniàn de jiùshì nà zhǒng jiǎndān de jiācháng wèi.", "Sau khi rời nhà, điều tôi nhớ nhất chính là kiểu hương vị nhà bình dị ấy."),
      vocab("朴素", "pǔsù", "mộc mạc", "tính từ", "Diễn tả món ăn hoặc cảm xúc không cầu kỳ nhưng sâu bền.", "越朴素的东西，有时候越能打动人。", "Yuè pǔsù de dōngxi, yǒushíhou yuè néng dǎdòng rén.", "Thứ càng mộc mạc đôi khi càng chạm đến lòng người."),
      vocab("手艺", "shǒuyì", "tay nghề", "danh từ", "Dùng khi nhắc người làm món ăn và cách làm truyền lại.", "这不只是食物，也是长辈留下来的手艺。", "Zhè bú zhǐshì shíwù, yě shì zhǎngbèi liú xialai de shǒuyì.", "Đây không chỉ là món ăn, mà còn là tay nghề do người lớn để lại."),
      vocab("记忆", "jìyì", "ký ức", "danh từ/động từ", "Món ăn là điểm tựa để nói về ký ức tập thể và cá nhân.", "食物有时候比照片更能保存记忆。", "Shíwù yǒushíhou bǐ zhàopiàn gèng néng bǎocún jìyì.", "Đôi khi món ăn còn lưu giữ ký ức tốt hơn ảnh chụp."),
      vocab("乡愁", "xiāngchóu", "nỗi nhớ quê", "danh từ", "Sắc thái trừu tượng hơn 怀念, phù hợp HSK 5.", "真正的乡愁，常常是从一口熟悉的味道开始的。", "Zhēnzhèng de xiāngchóu, chángcháng shì cóng yì kǒu shúxī de wèidào kāishǐ de.", "Nỗi nhớ quê thật sự thường bắt đầu từ một miếng hương vị quen thuộc.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Nói món ăn quê gợi nhớ mạnh nhất.", [
        study("A: 你最能代表家乡味道的一种食物是什么？", "A: Nǐ zuì néng dàibiǎo jiāxiāng wèidào de yì zhǒng shíwù shì shénme?", "A: Món ăn nào đại diện rõ nhất cho hương vị quê bạn?"),
        study("B: 对我来说，就是家乡的萝卜饼。", "B: Duì wǒ lái shuō, jiùshì jiāxiāng de luóbo bǐng.", "B: Đối với tôi, đó chính là bánh củ cải quê nhà."),
        study("A: 看来这种味道在你心里很特别。", "A: Kànlai zhè zhǒng wèidào zài nǐ xīnli hěn tèbié.", "A: Có vẻ hương vị đó trong lòng bạn rất đặc biệt.")
      ]),
      dialogueBlock("Tình huống 2", "Món ăn và ký ức gia đình.", [
        study("A: 它特别在哪儿？", "A: Tā tèbié zài nǎr?", "A: Nó đặc biệt ở điểm nào?"),
        study("B: 其实做法不复杂，可是一闻到那个味道，我就会想起家里人。", "B: Qíshí zuòfǎ bù fùzá, kěshì yì wéndào nàge wèidào, wǒ jiù huì xiǎngqǐ jiālǐ rén.", "B: Thật ra cách làm không phức tạp, nhưng vừa ngửi thấy mùi đó là tôi nhớ đến người nhà."),
        study("A: 原来真正难忘的不是菜本身，而是它带回来的记忆。", "A: Yuánlái zhēnzhèng nánwàng de bú shì cài běnshēn, érshì tā dài huílai de jìyì.", "A: Hóa ra thứ thật sự khó quên không phải là món ăn bản thân nó, mà là ký ức nó mang trở lại.")
      ]),
      dialogueBlock("Tình huống 3", "Từ món ăn đến tay nghề truyền lại.", [
        study("A: 现在还有人会做那种萝卜饼吗？", "A: Xiànzài hái yǒu rén huì zuò nà zhǒng luóbo bǐng ma?", "A: Bây giờ còn ai biết làm loại bánh củ cải đó không?"),
        study("B: 有，不过会做得最像的，还是家里的长辈。", "B: Yǒu, búguò huì zuò de zuì xiàng de, háishi jiālǐ de zhǎngbèi.", "B: Có, nhưng người làm giống nhất vẫn là các bậc lớn tuổi trong nhà."),
        study("A: 这么说，那不只是味道，也是手艺和生活方式。", "A: Zhème shuō, nà bú zhǐshì wèidào, yě shì shǒuyì hé shēnghuó fāngshì.", "A: Nói vậy thì đó không chỉ là hương vị, mà còn là tay nghề và cách sống.")
      ]),
      dialogueBlock("Tình huống 4", "Nói về nỗi nhớ quê hiện lên từ một món ăn.", [
        study("A: 你觉得乡愁最容易在什么时候出现？", "A: Nǐ juéde xiāngchóu zuì róngyì zài shénme shíhou chūxiàn?", "A: Bạn thấy nỗi nhớ quê dễ xuất hiện nhất vào lúc nào?"),
        study("B: 可能就是在一个陌生的地方，突然吃到一口熟悉的味道的时候。", "B: Kěnéng jiùshì zài yí ge mòshēng de dìfang, tūrán chī dào yì kǒu shúxī de wèidào de shíhou.", "B: Có lẽ chính là lúc ở một nơi xa lạ, bất ngờ ăn được một miếng hương vị quen thuộc."),
        study("A: 对，那一瞬间，整个人都会安静下来。", "A: Duì, nà yí shùnjiān, zhěng ge rén dōu huì ānjìng xialai.", "A: Đúng, vào khoảnh khắc đó, cả con người đều sẽ lắng lại.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 不是……而是…… / 不只是……也是……", "Bài này dùng hai mẫu này để chuyển từ món ăn cụ thể sang ý nghĩa tình cảm và ký ức.", study("真正难忘的不是菜本身，而是它带回来的记忆。", "Zhēnzhèng nánwàng de bú shì cài běnshēn, érshì tā dài huílai de jìyì.", "Thứ thật sự khó quên không phải là món ăn bản thân nó, mà là ký ức nó mang trở lại."), [
        study("那不只是味道，也是手艺和生活方式。", "Nà bú zhǐshì wèidào, yě shì shǒuyì hé shēnghuó fāngshì.", "Đó không chỉ là hương vị, mà còn là tay nghề và cách sống."),
        study("让人怀念的不是复杂，而是熟悉。", "Ràng rén huáiniàn de bú shì fùzá, érshì shúxī.", "Thứ khiến người ta nhớ không phải là sự phức tạp, mà là sự quen thuộc."),
        study("家乡菜不只是食物，也是感情的入口。", "Jiāxiāng cài bú zhǐshì shíwù, yě shì gǎnqíng de rùkǒu.", "Món ăn quê nhà không chỉ là thực phẩm, mà còn là lối vào của tình cảm.")
      ]),
      grammarNote("2. 一……就…… / 越……越……", "Một mẫu diễn tả ký ức bùng lên ngay lập tức, một mẫu nói sức mạnh của sự mộc mạc.", study("一闻到那个味道，我就会想起家里人。", "Yì wéndào nàge wèidào, wǒ jiù huì xiǎngqǐ jiālǐ rén.", "Vừa ngửi thấy mùi đó là tôi nhớ đến người nhà."), [
        study("越朴素的东西，有时候越能打动人。", "Yuè pǔsù de dōngxi, yǒushíhou yuè néng dǎdòng rén.", "Thứ càng mộc mạc đôi khi càng chạm đến lòng người."),
        study("一吃到那个味道，我就知道自己想家了。", "Yì chī dào nàge wèidào, wǒ jiù zhīdào zìjǐ xiǎng jiā le.", "Vừa ăn được hương vị đó là tôi biết mình nhớ nhà rồi."),
        study("越长大，越能理解一种普通食物里的感情。", "Yuè zhǎngdà, yuè néng lǐjiě yì zhǒng pǔtōng shíwù lǐ de gǎnqíng.", "Càng lớn lên càng có thể hiểu tình cảm trong một món ăn bình thường.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 朴素", "2. 乡愁", "3. 手艺"], options: ["a. tay nghề", "b. mộc mạc", "c. nỗi nhớ quê"], answer: "1-b, 2-c, 3-a" }],
      [{ question: "Điền từ thích hợp.", prompt: ["有些味道一辈子都忘不___。", "真正的乡___，常常是从一口熟悉的味道开始的。", "食物有时候比照片更能保存记___。"], answer: "了 / 愁 / 忆" }],
      [{ question: "Câu nào đúng?", options: ["A. 真正难忘的不是菜本身，而是它带回来的记忆。", "B. 真正难忘而不是菜本身，是它带回来的记忆。", "C. 菜本身不是真正难忘，而是它带回来的记忆。"], answer: "A. 真正难忘的不是菜本身，而是它带回来的记忆。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 它特别在哪儿？", "B: ____________", "A: 原来真正难忘的不是菜本身，而是它带回来的记忆。"], answer: "B: 其实做法不复杂，可是一闻到那个味道，我就会想起家里人。" }],
      "Tự kiểm tra: bạn có thể nói một món ăn khiến mình nhớ quê theo 2 đến 3 câu không?"
    ),
    quickSummary: {
      words: ["家乡", "萝卜饼", "怀念", "朴素", "记忆", "乡愁"],
      patterns: ["真正难忘的不是菜本身，而是它带回来的记忆。", "一闻到那个味道，我就会想起家里人。"],
      reminder: "Bài này cần chuyển được từ món ăn sang ký ức, từ ký ức sang tình cảm quê hương."
    }
  },
  20: {
    objective: "Khắc họa sạp truyện tranh nhỏ như một không gian ký ức tuổi thơ, từ đó nói về đọc sách, trí tưởng tượng và đời sống đường phố cũ.",
    vocabulary: [
      vocab("小人书", "xiǎorénshū", "truyện tranh nhỏ kiểu cũ", "danh từ", "Loại sách tranh gắn với ký ức tuổi thơ ở Trung Quốc.", "小时候很多孩子都喜欢看小人书。", "Xiǎoshíhou hěn duō háizi dōu xǐhuan kàn xiǎorénshū.", "Hồi nhỏ rất nhiều trẻ em đều thích xem truyện tranh nhỏ kiểu cũ."),
      vocab("书摊", "shūtān", "sạp sách", "danh từ", "Không gian đọc và thuê sách ngoài phố.", "那条街角的小书摊，留下了很多人的记忆。", "Nà tiáo jiējiǎo de xiǎo shūtān, liúxià le hěn duō rén de jìyì.", "Sạp sách nhỏ ở góc phố đó đã để lại ký ức cho rất nhiều người."),
      vocab("翻", "fān", "lật, giở", "động từ", "Diễn tả động tác gần gũi khi đọc sách giấy.", "孩子们常常站在那儿一页一页地翻。", "Háizimen chángcháng zhàn zài nàr yí yè yí yè de fān.", "Bọn trẻ thường đứng đó lật từng trang một."),
      vocab("故事", "gùshi", "câu chuyện", "danh từ", "Ở bài này là nội dung sách và cũng là hồi ức.", "那时候一本小书里也能装下一个完整的故事。", "Nà shíhou yì běn xiǎoshū lǐ yě néng zhuāng xià yí ge wánzhěng de gùshi.", "Hồi đó một cuốn sách nhỏ cũng có thể chứa cả một câu chuyện hoàn chỉnh."),
      vocab("想象", "xiǎngxiàng", "tưởng tượng", "danh từ/động từ", "Nhấn vào vai trò của đọc sách với trí tưởng tượng trẻ em.", "很多人的想象力，就是从这种阅读开始的。", "Hěn duō rén de xiǎngxiànglì, jiùshì cóng zhè zhǒng yuèdú kāishǐ de.", "Trí tưởng tượng của nhiều người chính là bắt đầu từ kiểu đọc như thế."),
      vocab("热闹", "rènao", "náo nhiệt", "tính từ", "Miêu tả khung cảnh đường phố cũ.", "放学以后，书摊旁边总是特别热闹。", "Fàngxué yǐhòu, shūtān pángbiān zǒngshì tèbié rènao.", "Sau giờ tan học, cạnh sạp sách luôn rất náo nhiệt."),
      vocab("怀旧", "huáijiù", "hoài cổ", "động từ/tính từ", "Phù hợp với không khí nhớ về quá khứ.", "长大以后再提起这些东西，人很容易怀旧。", "Zhǎngdà yǐhòu zài tíqǐ zhèxiē dōngxi, rén hěn róngyì huáijiù.", "Sau khi lớn lên, nhắc lại những thứ này con người rất dễ hoài cổ."),
      vocab("陪伴", "péibàn", "đồng hành", "động từ/danh từ", "Dùng để nói sách từng ở bên con người qua một giai đoạn.", "那些小书陪伴了很多人的童年。", "Nàxiē xiǎoshū péibàn le hěn duō rén de tóngnián.", "Những cuốn sách nhỏ ấy đã đồng hành với tuổi thơ của rất nhiều người.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Nhắc lại sạp truyện tranh tuổi thơ.", [
        study("A: 你小时候看过小人书吗？", "A: Nǐ xiǎoshíhou kànguo xiǎorénshū ma?", "A: Hồi nhỏ bạn từng xem truyện tranh nhỏ kiểu cũ chưa?"),
        study("B: 看过，那时候家附近就有一个小书摊。", "B: Kànguo, nà shíhou jiā fùjìn jiù yǒu yí ge xiǎo shūtān.", "B: Rồi, hồi đó gần nhà có một sạp sách nhỏ."),
        study("A: 听起来像是很多人共同的童年记忆。", "A: Tīngqilai xiàng shì hěn duō rén gòngtóng de tóngnián jìyì.", "A: Nghe như là ký ức tuổi thơ chung của rất nhiều người.")
      ]),
      dialogueBlock("Tình huống 2", "Nói vì sao truyện tranh nhỏ hấp dẫn.", [
        study("A: 现在想起来，你最喜欢那种地方的什么？", "A: Xiànzài xiǎng qǐlai, nǐ zuì xǐhuan nà zhǒng dìfang de shénme?", "A: Bây giờ nghĩ lại, bạn thích nhất điều gì ở kiểu nơi đó?"),
        study("B: 我喜欢那种随手翻开一本，就能进到另一个世界里的感觉。", "B: Wǒ xǐhuan nà zhǒng suíshǒu fān kāi yì běn, jiù néng jìn dào lìng yí ge shìjiè lǐ de gǎnjué.", "B: Tôi thích cảm giác chỉ cần tiện tay giở một cuốn ra là có thể bước vào một thế giới khác."),
        study("A: 原来那不只是看故事，也是在练习想象。", "A: Yuánlái nà bú zhǐshì kàn gùshi, yě shì zài liànxí xiǎngxiàng.", "A: Hóa ra đó không chỉ là đọc truyện, mà còn là đang luyện trí tưởng tượng.")
      ]),
      dialogueBlock("Tình huống 3", "Miêu tả không khí đường phố cũ.", [
        study("A: 书摊旁边是什么样的？", "A: Shūtān pángbiān shì shénme yàng de?", "A: Xung quanh sạp sách ấy như thế nào?"),
        study("B: 放学以后总是特别热闹，孩子们围在那儿，不停地翻书、聊天。", "B: Fàngxué yǐhòu zǒngshì tèbié rènao, háizimen wéi zài nàr, bù tíng de fān shū, liáotiān.", "B: Sau giờ tan học luôn đặc biệt náo nhiệt, bọn trẻ vây quanh đó, không ngừng giở sách và trò chuyện."),
        study("A: 这种画面现在越来越少见了。", "A: Zhè zhǒng huàmiàn xiànzài yuèláiyuè shǎo jiàn le.", "A: Hình ảnh như vậy bây giờ ngày càng hiếm thấy.")
      ]),
      dialogueBlock("Tình huống 4", "Nói vì sao người lớn dễ hoài cổ.", [
        study("A: 为什么人一长大，就会特别怀念这种小地方？", "A: Wèishénme rén yì zhǎngdà, jiù huì tèbié huáiniàn zhè zhǒng xiǎo dìfang?", "A: Vì sao con người cứ lớn lên là lại đặc biệt nhớ những nơi nhỏ như vậy?"),
        study("B: 因为它们不只是卖书的地方，也是很多人童年被陪伴过的地方。", "B: Yīnwèi tāmen bú zhǐshì mài shū de dìfang, yě shì hěn duō rén tóngnián bèi péibàn guo de dìfang.", "B: Vì chúng không chỉ là nơi bán sách, mà còn là nơi tuổi thơ của nhiều người từng được đồng hành."),
        study("A: 难怪一提到书摊，大家想到的都不只是书。", "A: Nánguài yì tídào shūtān, dàjiā xiǎngdào de dōu bú zhǐshì shū.", "A: Bảo sao vừa nhắc đến sạp sách thì thứ mọi người nghĩ đến không chỉ là sách.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 随手……就…… / 不只是……也是……", "Một mẫu diễn tả tính tự nhiên của hành động đọc, một mẫu mở rộng ý nghĩa xã hội và cảm xúc của địa điểm.", study("随手翻开一本，就能进到另一个世界里。", "Suíshǒu fān kāi yì běn, jiù néng jìn dào lìng yí ge shìjiè lǐ.", "Chỉ cần tiện tay giở một cuốn ra là có thể bước vào một thế giới khác."), [
        study("那些地方不只是卖书的地方，也是童年记忆的一部分。", "Nàxiē dìfang bú zhǐshì mài shū de dìfang, yě shì tóngnián jìyì de yí bùfen.", "Những nơi ấy không chỉ là chỗ bán sách, mà còn là một phần của ký ức tuổi thơ."),
        study("一翻开书，孩子就安静下来了。", "Yì fān kāi shū, háizi jiù ānjìng xialai.", "Vừa mở sách ra là đứa trẻ trở nên yên lặng."),
        study("它们不只是故事，也是想象的入口。", "Tāmen bú zhǐshì gùshi, yě shì xiǎngxiàng de rùkǒu.", "Chúng không chỉ là những câu chuyện, mà còn là lối vào của trí tưởng tượng.")
      ]),
      grammarNote("2. 越来越…… / 一提到……就……", "Một mẫu nói sự thay đổi theo thời gian, một mẫu nhấn phản ứng ký ức bật lên nhanh chóng.", study("这种画面现在越来越少见了。", "Zhè zhǒng huàmiàn xiànzài yuèláiyuè shǎo jiàn le.", "Hình ảnh như vậy bây giờ ngày càng hiếm thấy."), [
        study("人一提到童年，就容易怀旧。", "Rén yì tídào tóngnián, jiù róngyì huáijiù.", "Con người vừa nhắc đến tuổi thơ là dễ hoài cổ."),
        study("现在愿意站着翻书的人越来越少了。", "Xiànzài yuànyì zhànzhe fān shū de rén yuèláiyuè shǎo le.", "Bây giờ người sẵn sàng đứng lật sách ngày càng ít đi."),
        study("一提到小书摊，我就会想起放学后的街道。", "Yì tídào xiǎo shūtān, wǒ jiù huì xiǎngqǐ fàngxué hòu de jiēdào.", "Vừa nhắc đến sạp sách nhỏ là tôi nhớ đến con phố sau giờ tan học.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 书摊", "2. 怀旧", "3. 陪伴"], options: ["a. đồng hành", "b. sạp sách", "c. hoài cổ"], answer: "1-b, 2-c, 3-a" }],
      [{ question: "Điền từ thích hợp.", prompt: ["孩子们常常站在那儿一页一页地___。", "很多人的想象力，就是从这种阅___开始的。", "这种画面现在越来越少___了。"], answer: "翻 / 读 / 见" }],
      [{ question: "Câu nào đúng?", options: ["A. 它们不只是卖书的地方，也是很多人童年被陪伴过的地方。", "B. 它们也是很多人童年被陪伴过的地方，不只是卖书的地方。", "C. 它们不只是卖书的地方，也是童年很多人被陪伴过的地方。"], answer: "A. 它们不只是卖书的地方，也是很多人童年被陪伴过的地方。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 现在想起来，你最喜欢那种地方的什么？", "B: ____________", "A: 原来那不只是看故事，也是在练习想象。"], answer: "B: 我喜欢那种随手翻开一本，就能进到另一个世界里的感觉。" }],
      "Tự kiểm tra: bạn có thể nói một nơi nhỏ trong tuổi thơ mà mình vẫn nhớ đến bây giờ không?"
    ),
    quickSummary: {
      words: ["小人书", "书摊", "翻", "想象", "怀旧", "陪伴"],
      patterns: ["随手翻开一本，就能进到另一个世界里。", "它们不只是卖书的地方，也是很多人童年被陪伴过的地方。"],
      reminder: "Bài này cần kể cảnh, rồi từ cảnh kéo sang ký ức và cảm xúc."
    }
  },
  21: {
    objective: "Giới thiệu mối duyên chữ Hán của một người nước ngoài, từ đó nói về đam mê học tập và sức hấp dẫn của chữ viết Trung Hoa.",
    vocabulary: [
      vocab("汉字", "Hànzì", "chữ Hán", "danh từ", "Trung tâm của bài 21.", "很多人学习汉语，最难忘的部分就是汉字。", "Hěn duō rén xuéxí Hànyǔ, zuì nánwàng de bùfen jiùshì Hànzì.", "Rất nhiều người học tiếng Trung thấy phần khó quên nhất chính là chữ Hán."),
      vocab("情缘", "qíngyuán", "mối duyên tình cảm/gắn bó", "danh từ", "Dùng để nói sự gắn bó đặc biệt kéo dài lâu năm.", "他和汉字之间有一段很特别的情缘。", "Tā hé Hànzì zhījiān yǒu yí duàn hěn tèbié de qíngyuán.", "Giữa anh ấy và chữ Hán có một mối duyên rất đặc biệt."),
      vocab("着迷", "zháomí", "mê say", "động từ/tính từ", "Dùng khi nói người học bị chữ viết hấp dẫn sâu sắc.", "他第一次接触汉字就有点儿着迷了。", "Tā dì-yī cì jiēchù Hànzì jiù yǒudiǎnr zháomí le.", "Ngay lần đầu tiếp xúc với chữ Hán, anh ấy đã hơi mê rồi."),
      vocab("研究", "yánjiū", "nghiên cứu", "động từ/danh từ", "Bài này nhấn người học đi từ thích thú đến nghiên cứu nghiêm túc.", "兴趣如果够深，最后往往会变成长期研究。", "Xìngqù rúguǒ gòu shēn, zuìhòu wǎngwǎng huì biànchéng chángqī yánjiū.", "Nếu hứng thú đủ sâu, cuối cùng thường sẽ biến thành nghiên cứu lâu dài."),
      vocab("结构", "jiégòu", "cấu trúc", "danh từ", "Giúp nói chữ Hán không chỉ là hình vẽ mà có quy luật.", "他觉得汉字最有意思的地方在结构。", "Tā juéde Hànzì zuì yǒu yìsi de dìfang zài jiégòu.", "Anh ấy thấy điểm thú vị nhất của chữ Hán nằm ở cấu trúc."),
      vocab("魅力", "mèilì", "sức hấp dẫn", "danh từ", "Từ khóa để giải thích vì sao chữ Hán cuốn hút người học.", "汉字的魅力，不只在外形，也在文化背景。", "Hànzì de mèilì, bú zhǐ zài wàixíng, yě zài wénhuà bèijǐng.", "Sức hấp dẫn của chữ Hán không chỉ nằm ở hình thức bên ngoài, mà còn ở bối cảnh văn hóa."),
      vocab("跨文化", "kuà wénhuà", "xuyên văn hóa", "tính từ", "Dùng khi nói một người ngoại quốc say mê chữ Hán.", "这种兴趣本身就是一种跨文化的交流。", "Zhè zhǒng xìngqù běnshēn jiùshì yì zhǒng kuà wénhuà de jiāoliú.", "Bản thân hứng thú này đã là một kiểu giao lưu xuyên văn hóa."),
      vocab("坚持", "jiānchí", "kiên trì", "động từ", "Yếu tố cốt lõi biến hứng thú thành thành quả.", "没有长时间的坚持，就很难真正走进去。", "Méiyǒu cháng shíjiān de jiānchí, jiù hěn nán zhēnzhèng zǒu jìnqù.", "Không có sự kiên trì lâu dài thì rất khó thật sự đi sâu vào bên trong.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Nói vì sao người nước ngoài mê chữ Hán.", [
        study("A: 你觉得为什么会有外国人对汉字这么着迷？", "A: Nǐ juéde wèishénme huì yǒu wàiguórén duì Hànzì zhème zháomí?", "A: Bạn thấy vì sao lại có người nước ngoài mê chữ Hán đến vậy?"),
        study("B: 因为汉字不像普通拼音文字，它有自己的结构和文化背景。", "B: Yīnwèi Hànzì bú xiàng pǔtōng pīnyīn wénzì, tā yǒu zìjǐ de jiégòu hé wénhuà bèijǐng.", "B: Vì chữ Hán không giống chữ phiên âm thông thường, nó có cấu trúc và bối cảnh văn hóa riêng."),
        study("A: 所以有些人一接触，就会被它吸引。", "A: Suǒyǐ yǒuxiē rén yì jiēchù, jiù huì bèi tā xīyǐn.", "A: Vì vậy có những người vừa tiếp xúc là sẽ bị nó hấp dẫn.")
      ]),
      dialogueBlock("Tình huống 2", "Từ hứng thú đến nghiên cứu.", [
        study("A: 可是喜欢和研究，还是差很远吧？", "A: Kěshì xǐhuan hé yánjiū, háishi chà hěn yuǎn ba?", "A: Nhưng thích và nghiên cứu, vẫn khác rất xa đúng không?"),
        study("B: 对，不过真正的兴趣如果足够深，最后就会推动人一直学下去。", "B: Duì, búguò zhēnzhèng de xìngqù rúguǒ zúgòu shēn, zuìhòu jiù huì tuīdòng rén yìzhí xué xiaqu.", "B: Đúng, nhưng hứng thú thật sự nếu đủ sâu thì cuối cùng sẽ thúc đẩy con người học tiếp mãi."),
        study("A: 原来坚持的力量，是从喜欢开始的。", "A: Yuánlái jiānchí de lìliàng, shì cóng xǐhuan kāishǐ de.", "A: Hóa ra sức mạnh của kiên trì là bắt đầu từ sự yêu thích.")
      ]),
      dialogueBlock("Tình huống 3", "Nói về sức hấp dẫn của chữ viết.", [
        study("A: 你觉得汉字最大的魅力在哪儿？", "A: Nǐ juéde Hànzì zuì dà de mèilì zài nǎr?", "A: Bạn thấy sức hấp dẫn lớn nhất của chữ Hán nằm ở đâu?"),
        study("B: 我觉得一部分在外形，一部分在它背后藏着的文化。", "B: Wǒ juéde yí bùfen zài wàixíng, yí bùfen zài tā bèihòu cángzhe de wénhuà.", "B: Tôi thấy một phần nằm ở hình thức, một phần nằm ở nền văn hóa ẩn phía sau nó."),
        study("A: 这么说，学汉字其实也是在学看世界的方式。", "A: Zhème shuō, xué Hànzì qíshí yě shì zài xué kàn shìjiè de fāngshì.", "A: Nói vậy thì học chữ Hán thật ra cũng là đang học một cách nhìn thế giới.")
      ]),
      dialogueBlock("Tình huống 4", "Liên hệ giao lưu xuyên văn hóa.", [
        study("A: 一个美国人这么认真研究汉字，你觉得这说明什么？", "A: Yí ge Měiguórén zhème rènzhēn yánjiū Hànzì, nǐ juéde zhè shuōmíng shénme?", "A: Một người Mỹ nghiêm túc nghiên cứu chữ Hán như vậy, bạn thấy điều đó nói lên điều gì?"),
        study("B: 我觉得真正有魅力的文化，是可以跨越语言和国界的。", "B: Wǒ juéde zhēnzhèng yǒu mèilì de wénhuà, shì kěyǐ kuàyuè yǔyán hé guójiè de.", "B: Tôi thấy một nền văn hóa thật sự có sức hấp dẫn là nền văn hóa có thể vượt qua ngôn ngữ và biên giới."),
        study("A: 对，这也是学习最动人的地方。", "A: Duì, zhè yě shì xuéxí zuì dòngrén de dìfang.", "A: Đúng, đó cũng là chỗ cảm động nhất của việc học.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 不像…… / 一……就……", "Một mẫu dùng để nhấn mạnh nét khác biệt, một mẫu diễn tả phản ứng mạnh ngay từ lần tiếp xúc đầu tiên.", study("汉字不像普通拼音文字。", "Hànzì bú xiàng pǔtōng pīnyīn wénzì.", "Chữ Hán không giống chữ phiên âm thông thường."), [
        study("有些人一接触汉字，就会被它吸引。", "Yǒuxiē rén yì jiēchù Hànzì, jiù huì bèi tā xīyǐn.", "Có những người vừa tiếp xúc chữ Hán là đã bị nó hấp dẫn."),
        study("这种兴趣不像一时冲动，更像慢慢长出来的。", "Zhè zhǒng xìngqù bú xiàng yìshí chōngdòng, gèng xiàng mànmàn zhǎng chūlai de.", "Kiểu hứng thú này không giống bốc đồng nhất thời, mà giống như dần lớn lên."),
        study("一看结构，他就觉得很有意思。", "Yí kàn jiégòu, tā jiù juéde hěn yǒu yìsi.", "Vừa nhìn cấu trúc là anh ấy đã thấy rất thú vị.")
      ]),
      grammarNote("2. 如果……就…… / 真正……的，是……", "Mẫu điều kiện dùng để nói hứng thú chuyển thành nghiên cứu; mẫu thứ hai dùng để chốt luận điểm về giá trị văn hóa.", study("真正有魅力的文化，是可以跨越语言和国界的。", "Zhēnzhèng yǒu mèilì de wénhuà, shì kěyǐ kuàyuè yǔyán hé guójiè de.", "Một nền văn hóa thật sự có sức hấp dẫn là nền văn hóa có thể vượt qua ngôn ngữ và biên giới."), [
        study("兴趣如果足够深，最后就会推动人一直学下去。", "Xìngqù rúguǒ zúgòu shēn, zuìhòu jiù huì tuīdòng rén yìzhí xué xiaqu.", "Hứng thú nếu đủ sâu cuối cùng sẽ thúc đẩy con người học tiếp mãi."),
        study("真正难的，不是开始，而是长期坚持。", "Zhēnzhèng nán de, bú shì kāishǐ, érshì chángqī jiānchí.", "Điều thật sự khó không phải là bắt đầu, mà là kiên trì lâu dài."),
        study("如果只看外形，就很难理解汉字更深的魅力。", "Rúguǒ zhǐ kàn wàixíng, jiù hěn nán lǐjiě Hànzì gèng shēn de mèilì.", "Nếu chỉ nhìn hình thức bên ngoài thì rất khó hiểu được sức hấp dẫn sâu hơn của chữ Hán.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 情缘", "2. 结构", "3. 魅力"], options: ["a. sức hấp dẫn", "b. cấu trúc", "c. mối duyên gắn bó"], answer: "1-c, 2-b, 3-a" }],
      [{ question: "Điền từ thích hợp.", prompt: ["他和汉字之间有一段很特别的情___。", "他觉得汉字最有意思的地方在结___。", "没有长时间的坚___，就很难真正走进去。"], answer: "缘 / 构 / 持" }],
      [{ question: "Câu nào đúng?", options: ["A. 真正有魅力的文化，是可以跨越语言和国界的。", "B. 真正有魅力的文化，可以跨越语言和国界的是。", "C. 文化真正有魅力的，是可以跨越语言和国界。"], answer: "A. 真正有魅力的文化，是可以跨越语言和国界的。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 你觉得汉字最大的魅力在哪儿？", "B: ____________", "A: 这么说，学汉字其实也是在学看世界的方式。"], answer: "B: 我觉得一部分在外形，一部分在它背后藏着的文化。" }],
      "Tự kiểm tra: bạn có thể nói vì sao chữ Hán hấp dẫn người học nước ngoài bằng 2 đến 3 câu không?"
    ),
    quickSummary: {
      words: ["汉字", "情缘", "着迷", "结构", "魅力", "坚持"],
      patterns: ["有些人一接触汉字，就会被它吸引。", "真正有魅力的文化，是可以跨越语言和国界的。"],
      reminder: "Bài này cần nói vừa có tri thức ngôn ngữ vừa có cảm xúc học tập, không nghiêng hẳn về một phía."
    }
  },
  22: {
    objective: "Bàn về mối quan hệ giữa đọc và suy nghĩ, nhấn mạnh đọc không phải thu thập thông tin đơn thuần mà là quá trình hình thành tư duy.",
    vocabulary: [
      vocab("阅读", "yuèdú", "đọc", "danh từ/động từ", "Trung tâm của bài 22.", "阅读真正改变人的，不只是知识本身。", "Yuèdú zhēnzhèng gǎibiàn rén de, bú zhǐshì zhīshi běnshēn.", "Thứ việc đọc thật sự thay đổi ở con người không chỉ là kiến thức bản thân nó."),
      vocab("思考", "sīkǎo", "suy nghĩ", "động từ/danh từ", "Đặt ngang với đọc, không thấp hơn đọc.", "如果阅读没有带来思考，那就很难留下真正的东西。", "Rúguǒ yuèdú méiyǒu dàilái sīkǎo, nà jiù hěn nán liúxià zhēnzhèng de dōngxi.", "Nếu đọc không dẫn đến suy nghĩ thì rất khó留下 điều gì thật sự."),
      vocab("信息", "xìnxī", "thông tin", "danh từ", "Dùng để phân biệt với tri thức và suy nghĩ có chiều sâu.", "现在人每天接触的信息很多，但不一定都变成理解。", "Xiànzài rén měitiān jiēchù de xìnxī hěn duō, dàn bù yídìng dōu biànchéng lǐjiě.", "Con người ngày nay mỗi ngày tiếp xúc với rất nhiều thông tin, nhưng chưa chắc tất cả đều biến thành sự hiểu."),
      vocab("理解", "lǐjiě", "hiểu", "động từ/danh từ", "Đích đến sâu hơn của đọc.", "真正的理解往往比记住更难。", "Zhēnzhèng de lǐjiě wǎngwǎng bǐ jìzhù gèng nán.", "Sự hiểu thật sự thường khó hơn việc ghi nhớ."),
      vocab("判断", "pànduàn", "phán đoán", "danh từ/động từ", "Đọc và suy nghĩ giúp nâng cao năng lực này.", "没有自己的判断，人很容易被信息推着走。", "Méiyǒu zìjǐ de pànduàn, rén hěn róngyì bèi xìnxī tuīzhe zǒu.", "Không có phán đoán của riêng mình thì con người rất dễ bị thông tin đẩy đi."),
      vocab("消化", "xiāohuà", "tiêu hóa", "động từ", "Ẩn dụ học thuật cho việc xử lý thông tin đọc vào.", "书读得再多，如果不消化，也很难变成自己的东西。", "Shū dú de zài duō, rúguǒ bù xiāohuà, yě hěn nán biànchéng zìjǐ de dōngxi.", "Đọc sách nhiều đến đâu, nếu không tiêu hóa, cũng khó biến thành của mình."),
      vocab("形成", "xíngchéng", "hình thành", "động từ", "Dùng cho quan điểm, thói quen suy nghĩ, phương pháp.", "长期阅读会慢慢形成一个人的思维方式。", "Chángqī yuèdú huì mànmàn xíngchéng yí ge rén de sīwéi fāngshì.", "Đọc lâu dài sẽ dần hình thành cách tư duy của một người."),
      vocab("深度", "shēndù", "độ sâu", "danh từ", "Dùng khi so sánh đọc sâu với đọc lướt.", "现在最难的也许不是没有信息，而是缺少思考的深度。", "Xiànzài zuì nán de yěxǔ bú shì méiyǒu xìnxī, érshì quēshǎo sīkǎo de shēndù.", "Điều khó nhất hiện nay có lẽ không phải là thiếu thông tin, mà là thiếu độ sâu của suy nghĩ.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Nói đọc không chỉ là lấy thông tin.", [
        study("A: 你觉得阅读最重要的作用是什么？", "A: Nǐ juéde yuèdú zuì zhòngyào de zuòyòng shì shénme?", "A: Bạn thấy tác dụng quan trọng nhất của việc đọc là gì?"),
        study("B: 我觉得不是知道得更多，而是想得更清楚。", "B: Wǒ juéde bú shì zhīdào de gèng duō, érshì xiǎng de gèng qīngchu.", "B: Tôi thấy không phải là biết nhiều hơn, mà là nghĩ rõ hơn."),
        study("A: 这样说，阅读其实是在帮助人整理自己。", "A: Zhèyàng shuō, yuèdú qíshí shì zài bāngzhù rén zhěnglǐ zìjǐ.", "A: Nói như vậy thì việc đọc thật ra đang giúp con người tự sắp xếp bản thân.")
      ]),
      dialogueBlock("Tình huống 2", "Phân biệt đọc và hiểu.", [
        study("A: 可是现在很多人每天也读很多东西。", "A: Kěshì xiànzài hěn duō rén měitiān yě dú hěn duō dōngxi.", "A: Nhưng bây giờ nhiều người mỗi ngày cũng đọc rất nhiều thứ."),
        study("B: 对，不过接触信息多，不等于真正理解多。", "B: Duì, búguò jiēchù xìnxī duō, bù děngyú zhēnzhèng lǐjiě duō.", "B: Đúng, nhưng tiếp xúc nhiều thông tin không có nghĩa là thật sự hiểu nhiều."),
        study("A: 所以读完以后怎么消化，比读了多少更重要。", "A: Suǒyǐ dú wán yǐhòu zěnme xiāohuà, bǐ dú le duōshao gèng zhòngyào.", "A: Vì vậy sau khi đọc xong tiêu hóa thế nào còn quan trọng hơn đọc bao nhiêu.")
      ]),
      dialogueBlock("Tình huống 3", "Nói về phán đoán độc lập.", [
        study("A: 阅读真的会影响一个人的判断吗？", "A: Yuèdú zhēn de huì yǐngxiǎng yí ge rén de pànduàn ma?", "A: Việc đọc thật sự sẽ ảnh hưởng đến phán đoán của một người sao?"),
        study("B: 会，如果你长期思考，就不容易被表面的信息带着走。", "B: Huì, rúguǒ nǐ chángqī sīkǎo, jiù bù róngyì bèi biǎomiàn de xìnxī dàizhe zǒu.", "B: Có, nếu bạn suy nghĩ lâu dài thì sẽ không dễ bị thông tin bề mặt kéo đi."),
        study("A: 这么说，阅读最后影响的，其实是看世界的方法。", "A: Zhème shuō, yuèdú zuìhòu yǐngxiǎng de, qíshí shì kàn shìjiè de fāngfǎ.", "A: Nói vậy thì thứ mà việc đọc cuối cùng ảnh hưởng thật ra là cách nhìn thế giới.")
      ]),
      dialogueBlock("Tình huống 4", "Phản biện thời đại thông tin nhanh.", [
        study("A: 现在信息这么多，还需要慢慢读、慢慢想吗？", "A: Xiànzài xìnxī zhème duō, hái xūyào mànmàn dú, mànmàn xiǎng ma?", "A: Bây giờ thông tin nhiều như vậy, còn cần đọc chậm và nghĩ chậm nữa không?"),
        study("B: 我觉得越是信息多，越需要深度思考，不然人只会越来越乱。", "B: Wǒ juéde yuè shì xìnxī duō, yuè xūyào shēndù sīkǎo, bùrán rén zhǐ huì yuèláiyuè luàn.", "B: Tôi thấy càng nhiều thông tin thì càng cần suy nghĩ có độ sâu, nếu không con người sẽ chỉ ngày càng rối."),
        study("A: 对，真正的问题不是没得读，而是不知道怎么读。", "A: Duì, zhēnzhèng de wèntí bú shì méi de dú, érshì bù zhīdào zěnme dú.", "A: Đúng, vấn đề thật sự không phải là không có gì để đọc, mà là không biết phải đọc thế nào.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 不是……而是…… / 不等于……", "Bài này dùng hai mẫu này để kéo người học ra khỏi cách hiểu hẹp về đọc sách.", study("我觉得不是知道得更多，而是想得更清楚。", "Wǒ juéde bú shì zhīdào de gèng duō, érshì xiǎng de gèng qīngchu.", "Tôi thấy không phải là biết nhiều hơn, mà là nghĩ rõ hơn."), [
        study("接触信息多，不等于真正理解多。", "Jiēchù xìnxī duō, bù děngyú zhēnzhèng lǐjiě duō.", "Tiếp xúc nhiều thông tin không có nghĩa là thật sự hiểu nhiều."),
        study("阅读不是收集句子，而是形成判断。", "Yuèdú bú shì shōují jùzi, érshì xíngchéng pànduàn.", "Đọc không phải là thu thập câu chữ, mà là hình thành phán đoán."),
        study("读得快，不等于想得深。", "Dú de kuài, bù děngyú xiǎng de shēn.", "Đọc nhanh không có nghĩa là nghĩ sâu.")
      ]),
      grammarNote("2. 越是……越…… / 不是没……而是……", "Hai mẫu này phù hợp khi phân tích thời đại thông tin và nêu đúng trọng tâm vấn đề.", study("越是信息多，越需要深度思考。", "Yuè shì xìnxī duō, yuè xūyào shēndù sīkǎo.", "Càng nhiều thông tin thì càng cần suy nghĩ có độ sâu."), [
        study("越是容易得到的内容，越需要自己判断。", "Yuè shì róngyì dédào de nèiróng, yuè xūyào zìjǐ pànduàn.", "Nội dung càng dễ có được thì càng cần tự mình phán đoán."),
        study("真正的问题不是没得读，而是不知道怎么读。", "Zhēnzhèng de wèntí bú shì méi de dú, érshì bù zhīdào zěnme dú.", "Vấn đề thật sự không phải là không có gì để đọc, mà là không biết phải đọc thế nào."),
        study("现在不是没有知识，而是缺少把知识变成理解的过程。", "Xiànzài bú shì méiyǒu zhīshi, érshì quēshǎo bǎ zhīshi biànchéng lǐjiě de guòchéng.", "Hiện nay không phải là không có tri thức, mà là thiếu quá trình biến tri thức thành sự hiểu.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 判断", "2. 消化", "3. 深度"], options: ["a. độ sâu", "b. phán đoán", "c. tiêu hóa"], answer: "1-b, 2-c, 3-a" }],
      [{ question: "Điền từ thích hợp.", prompt: ["真正的理___往往比记住更难。", "没有自己的判___，人很容易被信息推着走。", "长期阅读会慢慢形___一个人的思维方式。"], answer: "解 / 断 / 成" }],
      [{ question: "Câu nào đúng?", options: ["A. 接触信息多，不等于真正理解多。", "B. 接触信息多，不真正理解等于多。", "C. 真正理解多，不等于接触信息多。"], answer: "A. 接触信息多，不等于真正理解多。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 可是现在很多人每天也读很多东西。", "B: ____________", "A: 所以读完以后怎么消化，比读了多少更重要。"], answer: "B: 对，不过接触信息多，不等于真正理解多。" }],
      "Tự kiểm tra: bạn có thể nói vì sao 'đọc nhiều' chưa chắc đã đồng nghĩa với 'nghĩ sâu' không?"
    ),
    quickSummary: {
      words: ["阅读", "思考", "信息", "理解", "判断", "深度"],
      patterns: ["接触信息多，不等于真正理解多。", "越是信息多，越需要深度思考。"],
      reminder: "Bài này cần nhấn vào chất lượng suy nghĩ, không chỉ số lượng thông tin."
    }
  },
  23: {
    objective: "Bàn về việc buông tay trong nuôi dạy con, phân biệt giữa yêu thương và kiểm soát quá mức bằng ngôn ngữ chín hơn.",
    vocabulary: [
      vocab("放手", "fàngshǒu", "buông tay", "động từ", "Trong bài này là cho con tự trưởng thành, không kiểm soát quá mức.", "真正的爱，有时候也意味着学会放手。", "Zhēnzhèng de ài, yǒushíhou yě yìwèizhe xuéhuì fàngshǒu.", "Tình yêu thật sự đôi khi cũng có nghĩa là học cách buông tay."),
      vocab("依赖", "yīlài", "phụ thuộc", "động từ/danh từ", "Dùng khi con cái quá dựa vào cha mẹ hoặc cha mẹ không yên tâm buông.", "如果一直不放手，孩子就容易形成依赖。", "Rúguǒ yìzhí bù fàngshǒu, háizi jiù róngyì xíngchéng yīlài.", "Nếu mãi không buông tay thì trẻ sẽ dễ hình thành sự phụ thuộc."),
      vocab("成长", "chéngzhǎng", "trưởng thành", "danh từ/động từ", "Trọng tâm kết quả của việc cha mẹ biết lùi lại đúng lúc.", "孩子的成长需要空间，也需要试错。", "Háizi de chéngzhǎng xūyào kōngjiān, yě xūyào shìcuò.", "Sự trưởng thành của trẻ cần không gian và cũng cần được thử sai."),
      vocab("独立", "dúlì", "độc lập", "tính từ", "Mục tiêu quan trọng của giáo dục gia đình.", "真正的独立，不是一个人什么都不怕。", "Zhēnzhèng de dúlì, bú shì yí ge rén shénme dōu bú pà.", "Sự độc lập thật sự không phải là một người chẳng sợ gì cả."),
      vocab("保护", "bǎohù", "bảo vệ", "động từ", "Dùng để phân biệt bảo vệ cần thiết và bao bọc quá mức.", "父母总想保护孩子，这是很自然的。", "Fùmǔ zǒng xiǎng bǎohù háizi, zhè shì hěn zìrán de.", "Cha mẹ luôn muốn bảo vệ con, điều đó rất tự nhiên."),
      vocab("尝试", "chángshì", "thử, thử nghiệm", "động từ/danh từ", "Dùng khi trẻ cần tự làm để học.", "不让孩子自己尝试，他就很难真正学会。", "Bù ràng háizi zìjǐ chángshì, tā jiù hěn nán zhēnzhèng xuéhuì.", "Nếu không để trẻ tự thử thì rất khó thật sự học được."),
      vocab("失败", "shībài", "thất bại", "danh từ/động từ", "Bài này nhìn thất bại như một phần bình thường của trưởng thành.", "有时候一次小小的失败，比很多提醒都有效。", "Yǒushíhou yí cì xiǎoxiǎo de shībài, bǐ hěn duō tíxǐng dōu yǒuxiào.", "Đôi khi một lần thất bại nhỏ còn hiệu quả hơn rất nhiều lời nhắc."),
      vocab("边界", "biānjiè", "ranh giới", "danh từ", "Giúp nói ranh giới giữa yêu thương và kiểm soát.", "爱和控制之间，其实需要很清楚的边界。", "Ài hé kòngzhì zhījiān, qíshí xūyào hěn qīngchu de biānjiè.", "Giữa yêu thương và kiểm soát thật ra cần một ranh giới rất rõ ràng.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Nói vì sao buông tay lại khó.", [
        study("A: 你觉得父母为什么总是很难放手？", "A: Nǐ juéde fùmǔ wèishénme zǒng shì hěn nán fàngshǒu?", "A: Bạn thấy vì sao cha mẹ luôn rất khó buông tay?"),
        study("B: 因为他们太爱孩子了，总担心孩子受委屈、走弯路。", "B: Yīnwèi tāmen tài ài háizi le, zǒng dānxīn háizi shòu wěiqu, zǒu wānlù.", "B: Vì họ quá yêu con, luôn lo con bị thiệt thòi hay đi đường vòng."),
        study("A: 这很自然，可是保护太多也可能变成一种限制。", "A: Zhè hěn zìrán, kěshì bǎohù tài duō yě kěnéng biànchéng yì zhǒng xiànzhì.", "A: Điều đó rất tự nhiên, nhưng bảo vệ quá nhiều cũng có thể biến thành một sự hạn chế.")
      ]),
      dialogueBlock("Tình huống 2", "Nói trẻ cần tự thử và tự sai.", [
        study("A: 那是不是应该让孩子什么都自己决定？", "A: Nà shì bú shì yīnggāi ràng háizi shénme dōu zìjǐ juédìng?", "A: Vậy có phải nên để trẻ tự quyết mọi thứ không?"),
        study("B: 也不是，关键是该提醒的时候提醒，该放手的时候放手。", "B: Yě bú shì, guānjiàn shì gāi tíxǐng de shíhou tíxǐng, gāi fàngshǒu de shíhou fàngshǒu.", "B: Cũng không phải, mấu chốt là lúc cần nhắc thì nhắc, lúc cần buông thì buông."),
        study("A: 对，不让孩子自己尝试，就永远学不会独立。", "A: Duì, bù ràng háizi zìjǐ chángshì, jiù yǒngyuǎn xué bu huì dúlì.", "A: Đúng, không để trẻ tự thử thì sẽ mãi không học được tính độc lập.")
      ]),
      dialogueBlock("Tình huống 3", "Nói về vai trò của thất bại.", [
        study("A: 可是如果孩子失败了怎么办？", "A: Kěshì rúguǒ háizi shībài le zěnme bàn?", "A: Nhưng nếu trẻ thất bại thì phải làm sao?"),
        study("B: 失败当然会难过，可有时候正是失败让人真正成长。", "B: Shībài dāngrán huì nánguò, kě yǒushíhou zhèng shì shībài ràng rén zhēnzhèng chéngzhǎng.", "B: Thất bại đương nhiên sẽ buồn, nhưng đôi khi chính thất bại mới khiến con người thật sự trưởng thành."),
        study("A: 这么说，父母不能总想着替孩子挡掉所有问题。", "A: Zhème shuō, fùmǔ bùnéng zǒng xiǎngzhe tì háizi dǎng diào suǒyǒu wèntí.", "A: Nói vậy thì cha mẹ không thể lúc nào cũng nghĩ đến chuyện chặn hết mọi vấn đề cho con.")
      ]),
      dialogueBlock("Tình huống 4", "Nói ranh giới của tình yêu đúng cách.", [
        study("A: 那你觉得爱和控制的边界在哪儿？", "A: Nà nǐ juéde ài hé kòngzhì de biānjiè zài nǎr?", "A: Vậy bạn thấy ranh giới giữa yêu thương và kiểm soát nằm ở đâu?"),
        study("B: 我觉得如果一件事是为了让孩子更依赖你，那可能就已经偏向控制了。", "B: Wǒ juéde rúguǒ yí jiàn shì shì wèile ràng háizi gèng yīlài nǐ, nà kěnéng jiù yǐjīng piānxiàng kòngzhì le.", "B: Tôi thấy nếu một việc được làm để khiến trẻ càng phụ thuộc vào bạn hơn, vậy có lẽ nó đã nghiêng sang kiểm soát rồi."),
        study("A: 这个标准很清楚，也很值得想一想。", "A: Zhège biāozhǔn hěn qīngchu, yě hěn zhídé xiǎng yì xiǎng.", "A: Tiêu chuẩn này rất rõ, cũng rất đáng để suy nghĩ.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 该……的时候…… / 不……就……", "Hai mẫu này rất hợp để nói nguyên tắc nuôi dạy có chừng mực và có hậu quả rõ.", study("该提醒的时候提醒，该放手的时候放手。", "Gāi tíxǐng de shíhou tíxǐng, gāi fàngshǒu de shíhou fàngshǒu.", "Lúc cần nhắc thì nhắc, lúc cần buông thì buông."), [
        study("不让孩子自己尝试，就永远学不会独立。", "Bù ràng háizi zìjǐ chángshì, jiù yǒngyuǎn xué bu huì dúlì.", "Không để trẻ tự thử thì sẽ mãi không học được tính độc lập."),
        study("该帮助的时候帮助，不该代替的时候就别代替。", "Gāi bāngzhù de shíhou bāngzhù, bù gāi dàitì de shíhou jiù bié dàitì.", "Lúc nên giúp thì giúp, lúc không nên làm thay thì đừng làm thay."),
        study("不经历一点失败，就很难真正长大。", "Bù jīnglì yìdiǎn shībài, jiù hěn nán zhēnzhèng zhǎngdà.", "Không trải qua chút thất bại thì rất khó thật sự trưởng thành.")
      ]),
      grammarNote("2. 如果……那…… / 正是……让……", "Một mẫu dùng để vạch ranh giới đánh giá, một mẫu nhấn vai trò tích cực của trải nghiệm khó.", study("正是失败让人真正成长。", "Zhèng shì shībài ràng rén zhēnzhèng chéngzhǎng.", "Chính thất bại mới khiến con người thật sự trưởng thành."), [
        study("如果一件事让孩子更依赖你，那可能就已经偏向控制了。", "Rúguǒ yí jiàn shì ràng háizi gèng yīlài nǐ, nà kěnéng jiù yǐjīng piānxiàng kòngzhì le.", "Nếu một việc khiến trẻ càng phụ thuộc vào bạn hơn thì có lẽ nó đã nghiêng sang kiểm soát rồi."),
        study("正是这些自己做过的事，才会留下真正的经验。", "Zhèng shì zhèxiē zìjǐ zuò guo de shì, cái huì liúxià zhēnzhèng de jīngyàn.", "Chính những việc tự mình từng làm mới để lại kinh nghiệm thật sự."),
        study("如果什么都替孩子安排好，他反而更难判断。", "Rúguǒ shénme dōu tì háizi ānpái hǎo, tā fǎn'ér gèng nán pànduàn.", "Nếu cái gì cũng sắp xếp sẵn cho trẻ thì ngược lại trẻ càng khó phán đoán.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 放手", "2. 边界", "3. 独立"], options: ["a. độc lập", "b. buông tay", "c. ranh giới"], answer: "1-b, 2-c, 3-a" }],
      [{ question: "Điền từ thích hợp.", prompt: ["如果一直不放手，孩子就容易形成依___。", "孩子的成___需要空间，也需要试错。", "爱和控制之间，其实需要很清楚的边___。"], answer: "赖 / 长 / 界" }],
      [{ question: "Câu nào đúng?", options: ["A. 该提醒的时候提醒，该放手的时候放手。", "B. 该提醒的时候放手，该放手的时候提醒。", "C. 提醒该的时候提醒，放手该的时候放手。"], answer: "A. 该提醒的时候提醒，该放手的时候放手。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 那是不是应该让孩子什么都自己决定？", "B: ____________", "A: 对，不让孩子自己尝试，就永远学不会独立。"], answer: "B: 也不是，关键是该提醒的时候提醒，该放手的时候放手。" }],
      "Tự kiểm tra: bạn có thể nói một ví dụ về việc 'giúp đúng mức' thay vì 'làm thay' không?"
    ),
    quickSummary: {
      words: ["放手", "依赖", "成长", "独立", "失败", "边界"],
      patterns: ["该提醒的时候提醒，该放手的时候放手。", "正是失败让人真正成长。"],
      reminder: "Bài này cần biết phân biệt yêu thương với kiểm soát, và nói ranh giới đó thật rõ."
    }
  },
  24: {
    objective: "Giới thiệu hoạt động dạy học tình nguyện, nhấn mạnh trách nhiệm xã hội, tác động hai chiều giữa người đi dạy và nơi được hỗ trợ.",
    vocabulary: [
      vocab("支教", "zhījiào", "tình nguyện giảng dạy hỗ trợ", "động từ/danh từ", "Trung tâm của bài 24.", "很多大学生毕业前都会考虑参加支教。", "Hěn duō dàxuéshēng bìyè qián dōu huì kǎolǜ cānjiā zhījiào.", "Nhiều sinh viên trước khi tốt nghiệp đều cân nhắc tham gia tình nguyện giảng dạy."),
      vocab("行动", "xíngdòng", "hành động", "danh từ/động từ", "Nhấn mạnh từ ý nghĩ đến việc làm cụ thể.", "真正有意义的行动，往往需要长期坚持。", "Zhēnzhèng yǒu yìyì de xíngdòng, wǎngwǎng xūyào chángqī jiānchí.", "Hành động thật sự có ý nghĩa thường cần kiên trì lâu dài."),
      vocab("地区", "dìqū", "khu vực", "danh từ", "Dùng khi nói nơi còn thiếu điều kiện giáo dục.", "有些地区的教育资源一直比较紧张。", "Yǒuxiē dìqū de jiàoyù zīyuán yìzhí bǐjiào jǐnzhāng.", "Tài nguyên giáo dục ở một số khu vực luôn khá thiếu."),
      vocab("资源", "zīyuán", "tài nguyên", "danh từ", "Đi với 教育资源 trong bài này.", "教育资源不平衡，会直接影响很多孩子。", "Jiàoyù zīyuán bù pínghéng, huì zhíjiē yǐngxiǎng hěn duō háizi.", "Tài nguyên giáo dục không cân bằng sẽ trực tiếp ảnh hưởng đến rất nhiều trẻ em."),
      vocab("经历", "jīnglì", "trải nghiệm", "danh từ/động từ", "Người tham gia支教 cũng được thay đổi qua trải nghiệm.", "对很多人来说，支教不只是付出，也是一次重要经历。", "Duì hěn duō rén lái shuō, zhījiào bú zhǐshì fùchū, yě shì yí cì zhòngyào jīnglì.", "Đối với nhiều người, dạy học tình nguyện không chỉ là cho đi, mà còn là một trải nghiệm quan trọng."),
      vocab("成长", "chéngzhǎng", "trưởng thành", "danh từ/động từ", "Dùng cho cả học sinh lẫn người đi tình nguyện.", "孩子在成长，去支教的人其实也在成长。", "Háizi zài chéngzhǎng, qù zhījiào de rén qíshí yě zài chéngzhǎng.", "Trẻ đang trưởng thành, người đi tình nguyện thật ra cũng đang trưởng thành."),
      vocab("投入", "tóurù", "dốc vào,投入", "động từ/tính từ", "Dùng khi nói thái độ nghiêm túc với việc thiện nguyện.", "真正投入进去以后，才能明白这件事的难和价值。", "Zhēnzhèng tóurù jìnqù yǐhòu, cái néng míngbai zhè jiàn shì de nán hé jiàzhí.", "Chỉ sau khi thật sự dốc mình vào mới hiểu độ khó và giá trị của việc này."),
      vocab("改变", "gǎibiàn", "thay đổi", "động từ/danh từ", "Bài này nhấn thay đổi thường không đến ngay nhưng có thật.", "教育带来的改变，有时候不是立刻看得见的。", "Jiàoyù dàilái de gǎibiàn, yǒushíhou bú shì lìkè kàn de jiàn de.", "Sự thay đổi mà giáo dục mang lại đôi khi không phải là thứ nhìn thấy ngay lập tức.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Nói vì sao nhiều người muốn đi支教.", [
        study("A: 你为什么对支教行动感兴趣？", "A: Nǐ wèishénme duì zhījiào xíngdòng gǎn xìngqù?", "A: Vì sao bạn hứng thú với hoạt động dạy học tình nguyện?"),
        study("B: 因为我一直觉得，教育资源不平衡是一个很现实的问题。", "B: Yīnwèi wǒ yìzhí juéde, jiàoyù zīyuán bù pínghéng shì yí ge hěn xiànshí de wèntí.", "B: Vì tôi luôn cảm thấy tài nguyên giáo dục không cân bằng là một vấn đề rất thực tế."),
        study("A: 所以你想把想法变成行动。", "A: Suǒyǐ nǐ xiǎng bǎ xiǎngfǎ biànchéng xíngdòng.", "A: Vì vậy bạn muốn biến suy nghĩ thành hành động.")
      ]),
      dialogueBlock("Tình huống 2", "Nói người đi dạy cũng được thay đổi.", [
        study("A: 你觉得支教最大的意义是什么？", "A: Nǐ juéde zhījiào zuì dà de yìyì shì shénme?", "A: Bạn thấy ý nghĩa lớn nhất của việc dạy học tình nguyện là gì?"),
        study("B: 我觉得不只是帮助别人，也是在重新认识自己。", "B: Wǒ juéde bú zhǐshì bāngzhù biérén, yě shì zài chóngxīn rènshi zìjǐ.", "B: Tôi thấy không chỉ là giúp người khác, mà còn là đang nhận thức lại chính mình."),
        study("A: 这么说，这种经历其实是双向的。", "A: Zhème shuō, zhè zhǒng jīnglì qíshí shì shuāngxiàng de.", "A: Nói vậy thì trải nghiệm này thật ra là hai chiều.")
      ]),
      dialogueBlock("Tình huống 3", "Nói về độ khó thật sự của công việc.", [
        study("A: 可是支教听起来很有意义，做起来应该也很辛苦吧？", "A: Kěshì zhījiào tīngqilai hěn yǒu yìyì, zuò qǐlai yīnggāi yě hěn xīnkǔ ba?", "A: Nhưng dạy học tình nguyện nghe rất có ý nghĩa, làm thì chắc cũng vất vả đúng không?"),
        study("B: 是，真正投入进去以后，才知道困难比想象的多。", "B: Shì, zhēnzhèng tóurù jìnqù yǐhòu, cái zhīdào kùnnan bǐ xiǎngxiàng de duō.", "B: Đúng, chỉ sau khi thật sự dấn vào mới biết khó khăn nhiều hơn tưởng tượng."),
        study("A: 不过也正因为这样，它的价值才更真实。", "A: Búguò yě zhèng yīnwèi zhèyàng, tā de jiàzhí cái gèng zhēnshí.", "A: Nhưng cũng chính vì thế mà giá trị của nó mới chân thực hơn.")
      ]),
      dialogueBlock("Tình huống 4", "Nói về thay đổi không đến ngay lập tức.", [
        study("A: 你觉得这种行动能马上带来改变吗？", "A: Nǐ juéde zhè zhǒng xíngdòng néng mǎshàng dàilái gǎibiàn ma?", "A: Bạn thấy kiểu hành động này có thể lập tức mang lại thay đổi không?"),
        study("B: 不一定，教育的影响往往是慢慢出现的。", "B: Bù yídìng, jiàoyù de yǐngxiǎng wǎngwǎng shì mànmàn chūxiàn de.", "B: Chưa chắc, ảnh hưởng của giáo dục thường xuất hiện dần dần."),
        study("A: 也许正因为慢，所以更需要有人愿意坚持。", "A: Yěxǔ zhèng yīnwèi màn, suǒyǐ gèng xūyào yǒu rén yuànyì jiānchí.", "A: Có lẽ chính vì nó chậm nên càng cần có người sẵn sàng kiên trì.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 不只是……也…… / 正因为……才……", "Hai mẫu này giúp nói rõ giá trị hai chiều và độ chân thực của hành động thiện nguyện.", study("我觉得不只是帮助别人，也是在重新认识自己。", "Wǒ juéde bú zhǐshì bāngzhù biérén, yě shì zài chóngxīn rènshi zìjǐ.", "Tôi thấy không chỉ là giúp người khác, mà còn là đang nhận thức lại chính mình."), [
        study("它不只是一次经历，也是一种责任训练。", "Tā bú zhǐshì yí cì jīnglì, yě shì yì zhǒng zérèn xùnliàn.", "Nó không chỉ là một trải nghiệm, mà còn là một sự rèn luyện trách nhiệm."),
        study("正因为困难多，它的价值才更真实。", "Zhèng yīnwèi kùnnan duō, tā de jiàzhí cái gèng zhēnshí.", "Chính vì khó khăn nhiều nên giá trị của nó mới chân thực hơn."),
        study("正因为改变来得慢，所以更需要坚持。", "Zhèng yīnwèi gǎibiàn lái de màn, suǒyǐ gèng xūyào jiānchí.", "Chính vì thay đổi đến chậm nên càng cần kiên trì.")
      ]),
      grammarNote("2. 真正……以后，才…… / 不一定……", "Một mẫu nhấn chỉ khi thực sự lao vào mới hiểu, một mẫu nhấn thay đổi không phải lúc nào cũng đến ngay.", study("真正投入进去以后，才知道困难比想象的多。", "Zhēnzhèng tóurù jìnqù yǐhòu, cái zhīdào kùnnan bǐ xiǎngxiàng de duō.", "Chỉ sau khi thật sự dấn vào mới biết khó khăn nhiều hơn tưởng tượng."), [
        study("真正去做以后，才知道书上没有写完所有答案。", "Zhēnzhèng qù zuò yǐhòu, cái zhīdào shū shàng méiyǒu xiě wán suǒyǒu dá'àn.", "Chỉ sau khi thật sự đi làm mới biết trên sách không viết hết mọi đáp án."),
        study("这种行动不一定马上见效。", "Zhè zhǒng xíngdòng bù yídìng mǎshàng jiànxiào.", "Kiểu hành động này chưa chắc có hiệu quả ngay."),
        study("影响不一定看得见，但不代表它不存在。", "Yǐngxiǎng bù yídìng kàn de jiàn, dàn bù dàibiǎo tā bù cúnzài.", "Ảnh hưởng chưa chắc nhìn thấy được, nhưng không có nghĩa là nó không tồn tại.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 支教", "2. 资源", "3. 投入"], options: ["a. tài nguyên", "b. dạy học tình nguyện", "c. dấn vào,投入"], answer: "1-b, 2-a, 3-c" }],
      [{ question: "Điền từ thích hợp.", prompt: ["教育资___不平衡，会影响很多孩子。", "真正投___进去以后，才知道困难比想象的多。", "教育带来的改___，有时候不是立刻看得见的。"], answer: "源 / 入 / 变" }],
      [{ question: "Câu nào đúng?", options: ["A. 我觉得不只是帮助别人，也是在重新认识自己。", "B. 我觉得也是在重新认识自己，不只是帮助别人。", "C. 我觉得帮助别人不只是在重新认识自己。"], answer: "A. 我觉得不只是帮助别人，也是在重新认识自己。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 你觉得这种行动能马上带来改变吗？", "B: ____________", "A: 也许正因为慢，所以更需要有人愿意坚持。"], answer: "B: 不一定，教育的影响往往是慢慢出现的。" }],
      "Tự kiểm tra: bạn có thể nói vì sao một việc có ý nghĩa chưa chắc thấy kết quả ngay không?"
    ),
    quickSummary: {
      words: ["支教", "行动", "资源", "经历", "投入", "改变"],
      patterns: ["我觉得不只是帮助别人，也是在重新认识自己。", "教育的影响往往是慢慢出现的。"],
      reminder: "Bài này cần nói được giá trị chậm mà sâu của giáo dục, không chỉ nói hùng hồn bề mặt."
    }
  },
  25: {
    objective: "Nói về việc tự tiếp thêm năng lượng cho bản thân, phân biệt nghỉ ngơi thật sự với chỉ chạy tiếp trong trạng thái cạn kiệt.",
    vocabulary: [
      vocab("加满", "jiā mǎn", "đổ đầy", "động từ", "Trong bài là ẩn dụ cho việc tự nạp lại năng lượng.", "人累的时候，也需要给自己加满水。", "Rén lèi de shíhou, yě xūyào gěi zìjǐ jiā mǎn shuǐ.", "Lúc mệt, con người cũng cần tự đổ đầy nước cho mình."),
      vocab("状态", "zhuàngtài", "trạng thái", "danh từ", "Dùng cho tinh thần và thể lực.", "状态不好的时候，做什么都容易出错。", "Zhuàngtài bù hǎo de shíhou, zuò shénme dōu róngyì chūcuò.", "Lúc trạng thái không tốt, làm gì cũng dễ sai."),
      vocab("消耗", "xiāohào", "tiêu hao", "động từ/danh từ", "Dùng để nói công việc và cảm xúc làm cạn năng lượng.", "长期的压力会不断消耗人的精力。", "Chángqī de yālì huì búduàn xiāohào rén de jīnglì.", "Áp lực kéo dài sẽ liên tục tiêu hao năng lượng của con người."),
      vocab("恢复", "huīfù", "phục hồi", "động từ", "Dùng cho sức lực, tinh thần, nhịp sống.", "如果不会及时恢复，人就容易一直紧张。", "Rúguǒ bú huì jíshí huīfù, rén jiù róngyì yìzhí jǐnzhāng.", "Nếu không biết phục hồi kịp thời thì con người sẽ dễ luôn căng thẳng."),
      vocab("照顾自己", "zhàogù zìjǐ", "chăm sóc bản thân", "cụm động từ", "Điểm trung tâm của bài 25.", "忙的时候更要记得照顾自己。", "Máng de shíhou gèng yào jìde zhàogù zìjǐ.", "Lúc bận càng phải nhớ chăm sóc bản thân."),
      vocab("透支", "tòuzhī", "thấu chi; dùng cạn trước", "động từ", "Ẩn dụ cho việc sống vượt quá sức mình.", "如果总靠意志硬撑，人迟早会被透支。", "Rúguǒ zǒng kào yìzhì yìng chēng, rén chízǎo huì bèi tòuzhī.", "Nếu luôn cố gắng gượng chỉ bằng ý chí thì sớm muộn con người cũng sẽ bị cạn kiệt."),
      vocab("节奏", "jiézòu", "nhịp độ", "danh từ", "Giúp nói cách điều chỉnh cách sống.", "先把节奏放慢一点儿，很多问题才看得清。", "Xiān bǎ jiézòu fàng màn yìdiǎnr, hěn duō wèntí cái kàn de qīng.", "Trước hết làm chậm nhịp lại một chút thì nhiều vấn đề mới nhìn rõ được."),
      vocab("补充", "bǔchōng", "bổ sung", "động từ", "Dùng cho năng lượng, thời gian nghỉ, sự bình tĩnh.", "真正的休息，不只是停下来，更是补充回来。", "Zhēnzhèng de xiūxi, bú zhǐshì tíng xialai, gèng shì bǔchōng huílai.", "Sự nghỉ ngơi thật sự không chỉ là dừng lại, mà còn là bổ sung trở lại.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Nói con người dễ quên chăm sóc mình.", [
        study("A: 你有没有发现，很多人都很会照顾别人，却不会照顾自己？", "A: Nǐ yǒu méiyǒu fāxiàn, hěn duō rén dōu hěn huì zhàogù biérén, què bú huì zhàogù zìjǐ?", "A: Bạn có nhận ra nhiều người rất biết chăm sóc người khác, nhưng lại không biết chăm sóc bản thân không?"),
        study("B: 有，因为大家总觉得自己的事可以先放一放。", "B: Yǒu, yīnwèi dàjiā zǒng juéde zìjǐ de shì kěyǐ xiān fàng yì fàng.", "B: Có, vì mọi người luôn cảm thấy việc của mình có thể để lại sau."),
        study("A: 可是如果一直这样，状态就会越来越差。", "A: Kěshì rúguǒ yìzhí zhèyàng, zhuàngtài jiù huì yuèláiyuè chà.", "A: Nhưng nếu cứ như vậy mãi thì trạng thái sẽ ngày càng tệ.")
      ]),
      dialogueBlock("Tình huống 2", "Nói về tiêu hao và phục hồi.", [
        study("A: 那你觉得人最容易在哪方面被消耗？", "A: Nà nǐ juéde rén zuì róngyì zài nǎ fāngmiàn bèi xiāohào?", "A: Vậy bạn thấy con người dễ bị tiêu hao nhất ở mặt nào?"),
        study("B: 我觉得不仅是体力，还有情绪和注意力。", "B: Wǒ juéde bùjǐn shì tǐlì, hái yǒu qíngxù hé zhùyìlì.", "B: Tôi thấy không chỉ là thể lực, mà còn có cảm xúc và sự chú ý."),
        study("A: 对，所以真正的恢复也不只是睡一觉那么简单。", "A: Duì, suǒyǐ zhēnzhèng de huīfù yě bú zhǐshì shuì yí jiào nàme jiǎndān.", "A: Đúng, vì vậy sự phục hồi thật sự cũng không chỉ đơn giản là ngủ một giấc.")
      ]),
      dialogueBlock("Tình huống 3", "Nói về việc sống thấu chi.", [
        study("A: 为什么有些人明明很累，还一直不停下来？", "A: Wèishénme yǒuxiē rén míngmíng hěn lèi, hái yìzhí bù tíng xialai?", "A: Vì sao có những người rõ ràng rất mệt mà vẫn không dừng lại?"),
        study("B: 因为他们以为只要再坚持一点儿，就不会有问题。", "B: Yīnwèi tāmen yǐwéi zhǐyào zài jiānchí yìdiǎnr, jiù bú huì yǒu wèntí.", "B: Vì họ nghĩ chỉ cần cố thêm một chút nữa thì sẽ không có vấn đề."),
        study("A: 可有时候问题不是不够努力，而是已经透支了。", "A: Kě yǒushíhou wèntí bú shì bú gòu nǔlì, érshì yǐjīng tòuzhī le.", "A: Nhưng đôi khi vấn đề không phải là chưa đủ nỗ lực, mà là đã thấu chi rồi.")
      ]),
      dialogueBlock("Tình huống 4", "Đưa ra cách tự nạp lại.", [
        study("A: 那怎么才算真的“给自己加满水”？", "A: Nà zěnme cái suàn zhēn de “gěi zìjǐ jiā mǎn shuǐ”?", "A: Vậy thế nào mới gọi là thật sự 'đổ đầy nước cho mình'?"),
        study("B: 我觉得是先把节奏放慢一点儿，再去做那些能让自己安静下来的事。", "B: Wǒ juéde shì xiān bǎ jiézòu fàng màn yìdiǎnr, zài qù zuò nàxiē néng ràng zìjǐ ānjìng xialai de shì.", "B: Tôi thấy là trước hết làm chậm nhịp lại một chút, rồi làm những việc có thể khiến mình lắng xuống."),
        study("A: 这样听起来，比单纯休息更像真正的恢复。", "A: Zhèyàng tīngqilai, bǐ dānchún xiūxi gèng xiàng zhēnzhèng de huīfù.", "A: Nghe như vậy thì nó giống sự phục hồi thật sự hơn là chỉ nghỉ đơn thuần.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 不仅……还有…… / 不只是……更是……", "Bài này dùng hai mẫu này để mở rộng cách hiểu về mệt mỏi và nghỉ ngơi.", study("我觉得不仅是体力，还有情绪和注意力。", "Wǒ juéde bùjǐn shì tǐlì, hái yǒu qíngxù hé zhùyìlì.", "Tôi thấy không chỉ là thể lực, mà còn có cảm xúc và sự chú ý."), [
        study("真正的休息，不只是停下来，更是补充回来。", "Zhēnzhèng de xiūxi, bú zhǐshì tíng xialai, gèng shì bǔchōng huílai.", "Sự nghỉ ngơi thật sự không chỉ là dừng lại, mà còn là bổ sung trở lại."),
        study("消耗的不仅是时间，还有人的判断和耐心。", "Xiāohào de bùjǐn shì shíjiān, hái yǒu rén de pànduàn hé nàixīn.", "Thứ bị tiêu hao không chỉ là thời gian, mà còn là phán đoán và sự kiên nhẫn của con người."),
        study("照顾自己不只是休息，更是重新安排节奏。", "Zhàogù zìjǐ bú zhǐshì xiūxi, gèng shì chóngxīn ānpái jiézòu.", "Chăm sóc bản thân không chỉ là nghỉ ngơi, mà còn là sắp xếp lại nhịp sống.")
      ]),
      grammarNote("2. 如果……就…… / 先……再……", "Hai mẫu này phù hợp khi nói hệ quả của việc không nghỉ và cách phục hồi theo trình tự.", study("如果一直这样，状态就会越来越差。", "Rúguǒ yìzhí zhèyàng, zhuàngtài jiù huì yuèláiyuè chà.", "Nếu cứ như vậy mãi thì trạng thái sẽ ngày càng tệ."), [
        study("如果总靠意志硬撑，人迟早会被透支。", "Rúguǒ zǒng kào yìzhì yìng chēng, rén chízǎo huì bèi tòuzhī.", "Nếu luôn cố gắng gượng chỉ bằng ý chí thì sớm muộn con người cũng sẽ bị thấu chi."),
        study("先把节奏放慢一点儿，再去做让自己安静下来的事。", "Xiān bǎ jiézòu fàng màn yìdiǎnr, zài qù zuò ràng zìjǐ ānjìng xialai de shì.", "Hãy làm chậm nhịp lại trước, rồi làm những việc khiến mình lắng xuống."),
        study("先承认自己累了，再谈怎么恢复。", "Xiān chéngrèn zìjǐ lèi le, zài tán zěnme huīfù.", "Hãy thừa nhận mình mệt trước, rồi mới bàn cách phục hồi.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 消耗", "2. 透支", "3. 补充"], options: ["a. bổ sung", "b. tiêu hao", "c. thấu chi, dùng cạn trước"], answer: "1-b, 2-c, 3-a" }],
      [{ question: "Điền từ thích hợp.", prompt: ["长期的压力会不断消___人的精力。", "真正的休息，不只是停下来，更是补___回来。", "如果总靠意志硬撑，人迟早会被透___。"], answer: "耗 / 充 / 支" }],
      [{ question: "Câu nào đúng?", options: ["A. 真正的休息，不只是停下来，更是补充回来。", "B. 真正的休息，更是不只是停下来，补充回来。", "C. 停下来不只是真正的休息，更是补充回来。"], answer: "A. 真正的休息，不只是停下来，更是补充回来。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 那怎么才算真的“给自己加满水”？", "B: ____________", "A: 这样听起来，比单纯休息更像真正的恢复。"], answer: "B: 我觉得是先把节奏放慢一点儿，再去做那些能让自己安静下来的事。" }],
      "Tự kiểm tra: bạn có thể nói một cách giúp mình phục hồi thật sự, không chỉ nghỉ cho có không?"
    ),
    quickSummary: {
      words: ["加满", "状态", "消耗", "恢复", "透支", "节奏"],
      patterns: ["真正的休息，不只是停下来，更是补充回来。", "如果总靠意志硬撑，人迟早会被透支。"],
      reminder: "Bài này cần nói về chăm sóc bản thân một cách tỉnh táo, không phải kiểu khẩu hiệu tự an ủi."
    }
  },
  26: {
    objective: "Phân tích các kiểu 'bận' khác nhau, từ bận thật đến bận do không biết sắp xếp, và giúp người học nói về quản lý thời gian rõ hơn.",
    vocabulary: [
      vocab("属于", "shǔyú", "thuộc về", "động từ", "Dùng để phân loại kiểu người hoặc kiểu trạng thái.", "你属于哪一种忙，其实和你的选择有关。", "Nǐ shǔyú nǎ yì zhǒng máng, qíshí hé nǐ de xuǎnzé yǒuguān.", "Bạn thuộc kiểu bận nào thật ra có liên quan đến lựa chọn của bạn."),
      vocab("安排", "ānpái", "sắp xếp", "động từ/danh từ", "Từ trọng tâm khi nói quản lý thời gian.", "很多问题并不是时间不够，而是不会安排。", "Hěn duō wèntí bìng bú shì shíjiān bù gòu, érshì bú huì ānpái.", "Nhiều vấn đề không phải là không đủ thời gian, mà là không biết sắp xếp."),
      vocab("效率", "xiàolǜ", "hiệu suất", "danh từ", "Giúp phân biệt bận nhiều với làm hiệu quả.", "忙不一定代表效率高。", "Máng bù yídìng dàibiǎo xiàolǜ gāo.", "Bận chưa chắc đã đại diện cho hiệu suất cao."),
      vocab("分配", "fēnpèi", "phân bổ", "động từ", "Dùng cho phân bổ thời gian và sức lực.", "时间怎么分配，会决定你一天的质量。", "Shíjiān zěnme fēnpèi, huì juédìng nǐ yì tiān de zhìliàng.", "Thời gian phân bổ thế nào sẽ quyết định chất lượng một ngày của bạn."),
      vocab("重点", "zhòngdiǎn", "trọng điểm", "danh từ", "Bài này nhấn không phải việc nào cũng nên đối xử như nhau.", "抓不住重点的人，往往会越忙越乱。", "Zhuā bu zhù zhòngdiǎn de rén, wǎngwǎng huì yuè máng yuè luàn.", "Người không nắm được trọng điểm thường sẽ càng bận càng rối."),
      vocab("拖延", "tuōyán", "trì hoãn", "động từ/danh từ", "Một nguyên nhân phổ biến khiến người ta 'bận giả'.", "有些人表面很忙，其实是在拖延真正重要的事。", "Yǒuxiē rén biǎomiàn hěn máng, qíshí shì zài tuōyán zhēnzhèng zhòngyào de shì.", "Có người bề ngoài rất bận, thật ra là đang trì hoãn việc quan trọng thật sự."),
      vocab("无效", "wúxiào", "vô hiệu, không hiệu quả", "tính từ", "Dùng để nói bận nhưng không tạo ra giá trị.", "无效的忙碌最容易让人觉得疲惫。", "Wúxiào de mánglù zuì róngyì ràng rén juéde píbèi.", "Sự bận rộn vô hiệu là thứ dễ khiến con người mệt mỏi nhất."),
      vocab("取舍", "qǔshě", "lựa chọn bỏ - giữ", "danh từ/động từ", "Kỹ năng cần có để bận đúng việc.", "真正会安排时间的人，一定懂得取舍。", "Zhēnzhèng huì ānpái shíjiān de rén, yídìng dǒngde qǔshě.", "Người thật sự biết sắp xếp thời gian nhất định phải biết chọn cái giữ cái bỏ.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Nói 'bận' không phải lúc nào cũng giống nhau.", [
        study("A: 你觉得“忙”只有一种吗？", "A: Nǐ juéde “máng” zhǐ yǒu yì zhǒng ma?", "A: Bạn thấy 'bận' chỉ có một kiểu thôi sao?"),
        study("B: 当然不是，有的人是真的事多，有的人是不会安排。", "B: Dāngrán bú shì, yǒu de rén shì zhēn de shì duō, yǒu de rén shì bú huì ānpái.", "B: Đương nhiên là không, có người thật sự việc nhiều, có người là không biết sắp xếp."),
        study("A: 这么说，表面上都忙，性质却可能完全不同。", "A: Zhème shuō, biǎomiàn shàng dōu máng, xìngzhì què kěnéng wánquán bùtóng.", "A: Nói vậy thì bề ngoài đều bận, nhưng tính chất có thể hoàn toàn khác.")
      ]),
      dialogueBlock("Tình huống 2", "Bận nhưng không hiệu quả.", [
        study("A: 你见过那种一直忙，却没什么结果的人吗？", "A: Nǐ jiànguo nà zhǒng yìzhí máng, què méi shénme jiéguǒ de rén ma?", "A: Bạn từng thấy kiểu người lúc nào cũng bận mà chẳng có mấy kết quả chưa?"),
        study("B: 见过，他们不是不努力，而是抓不住重点。", "B: Jiànguo, tāmen bú shì bù nǔlì, érshì zhuā bu zhù zhòngdiǎn.", "B: Rồi, họ không phải không nỗ lực, mà là không nắm được trọng điểm."),
        study("A: 对，所以忙不一定代表效率高。", "A: Duì, suǒyǐ máng bù yídìng dàibiǎo xiàolǜ gāo.", "A: Đúng, vì vậy bận chưa chắc đã đại diện cho hiệu suất cao.")
      ]),
      dialogueBlock("Tình huống 3", "Nói về trì hoãn trá hình.", [
        study("A: 有时候我觉得自己很忙，可是一天结束又不知道做了什么。", "A: Yǒushíhou wǒ juéde zìjǐ hěn máng, kěshì yì tiān jiéshù yòu bù zhīdào zuò le shénme.", "A: Đôi khi tôi thấy mình rất bận, nhưng hết ngày lại không biết đã làm được gì."),
        study("B: 那可能不是忙，而是在用忙碌掩盖拖延。", "B: Nà kěnéng bú shì máng, érshì zài yòng mánglù yǎngài tuōyán.", "B: Vậy có thể không phải là bận, mà là đang dùng sự bận rộn để che việc trì hoãn."),
        study("A: 这么一说，我好像明白问题在哪儿了。", "A: Zhème yì shuō, wǒ hǎoxiàng míngbai wèntí zài nǎr le.", "A: Nghe bạn nói vậy, hình như tôi đã hiểu vấn đề nằm ở đâu rồi.")
      ]),
      dialogueBlock("Tình huống 4", "Nói về cách sắp xếp đúng.", [
        study("A: 那怎样才算比较会安排时间？", "A: Nà zěnyàng cái suàn bǐjiào huì ānpái shíjiān?", "A: Vậy thế nào mới được tính là khá biết sắp xếp thời gian?"),
        study("B: 我觉得是先分清轻重，再决定哪些事现在做，哪些事可以不做。", "B: Wǒ juéde shì xiān fēn qīng qīngzhòng, zài juédìng nǎxiē shì xiànzài zuò, nǎxiē shì kěyǐ bù zuò.", "B: Tôi thấy là trước hết phân rõ nặng nhẹ, rồi quyết định việc nào làm ngay, việc nào có thể không làm."),
        study("A: 对，真正会安排的人，一定懂得取舍。", "A: Duì, zhēnzhèng huì ānpái de rén, yídìng dǒngde qǔshě.", "A: Đúng, người thật sự biết sắp xếp nhất định phải biết chọn bỏ - giữ.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 不是……而是…… / 不一定……", "Hai mẫu này rất phù hợp để sửa hiểu lầm phổ biến về 'bận' trong đời sống hiện đại.", study("他们不是不努力，而是抓不住重点。", "Tāmen bú shì bù nǔlì, érshì zhuā bu zhù zhòngdiǎn.", "Họ không phải không nỗ lực, mà là không nắm được trọng điểm."), [
        study("很多问题并不是时间不够，而是不会安排。", "Hěn duō wèntí bìng bú shì shíjiān bù gòu, érshì bú huì ānpái.", "Nhiều vấn đề không phải là không đủ thời gian, mà là không biết sắp xếp."),
        study("忙不一定代表效率高。", "Máng bù yídìng dàibiǎo xiàolǜ gāo.", "Bận chưa chắc đã đại diện cho hiệu suất cao."),
        study("累不一定说明你做了最重要的事。", "Lèi bù yídìng shuōmíng nǐ zuò le zuì zhòngyào de shì.", "Mệt chưa chắc chứng minh bạn đã làm việc quan trọng nhất.")
      ]),
      grammarNote("2. 先……再…… / 哪些……哪些……", "Hai mẫu này dùng để trình bày phương pháp quản lý thời gian có thứ tự và rõ tiêu chí.", study("先分清轻重，再决定哪些事现在做，哪些事可以不做。", "Xiān fēn qīng qīngzhòng, zài juédìng nǎxiē shì xiànzài zuò, nǎxiē shì kěyǐ bù zuò.", "Trước hết phân rõ nặng nhẹ, rồi quyết định việc nào làm ngay, việc nào có thể không làm."), [
        study("先抓重点，再谈数量。", "Xiān zhuā zhòngdiǎn, zài tán shùliàng.", "Hãy nắm trọng điểm trước, rồi mới nói đến số lượng."),
        study("先看有没有必要，再决定值不值得花时间。", "Xiān kàn yǒu méiyǒu bìyào, zài juédìng zhí bu zhídé huā shíjiān.", "Hãy xem có cần thiết không trước, rồi mới quyết định có đáng dành thời gian không."),
        study("哪些事要自己做，哪些事可以交出去，也是一种能力。", "Nǎxiē shì yào zìjǐ zuò, nǎxiē shì kěyǐ jiāo chūqu, yě shì yì zhǒng nénglì.", "Việc nào phải tự làm, việc nào có thể giao ra ngoài, cũng là một loại năng lực.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 效率", "2. 拖延", "3. 取舍"], options: ["a. lựa chọn bỏ - giữ", "b. hiệu suất", "c. trì hoãn"], answer: "1-b, 2-c, 3-a" }],
      [{ question: "Điền từ thích hợp.", prompt: ["忙不一定代表效___高。", "很多问题并不是时间不够，而是不会安___。", "真正会安排时间的人，一定懂得取___。"], answer: "率 / 排 / 舍" }],
      [{ question: "Câu nào đúng?", options: ["A. 很多问题并不是时间不够，而是不会安排。", "B. 很多问题并不是不会安排，而是时间不够。", "C. 时间不够并不是很多问题，而是不会安排。"], answer: "A. 很多问题并不是时间不够，而是不会安排。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 那怎样才算比较会安排时间？", "B: ____________", "A: 对，真正会安排的人，一定懂得取舍。"], answer: "B: 我觉得是先分清轻重，再决定哪些事现在做，哪些事可以不做。" }],
      "Tự kiểm tra: bạn có thể nói một việc mình nên bỏ bớt để đỡ 'bận giả' không?"
    ),
    quickSummary: {
      words: ["属于", "安排", "效率", "重点", "拖延", "取舍"],
      patterns: ["很多问题并不是时间不够，而是不会安排。", "先分清轻重，再决定哪些事现在做。"],
      reminder: "Bài này cần nói về 'bận' bằng phân tích, không chỉ than mệt hay than nhiều việc."
    }
  },
  27: {
    objective: "Nói về chơi cờ như một cách học suy nghĩ, nhẫn nại và nhìn xa hơn trước mắt; từ đó liên hệ sang lựa chọn trong đời sống.",
    vocabulary: [
      vocab("下棋", "xià qí", "chơi cờ", "động từ", "Chủ đề trung tâm của bài 27.", "很多人喜欢通过下棋来训练思考。", "Hěn duō rén xǐhuan tōngguò xià qí lái xùnliàn sīkǎo.", "Nhiều người thích thông qua chơi cờ để rèn luyện suy nghĩ."),
      vocab("棋局", "qíjú", "ván cờ, thế cờ", "danh từ", "Dùng để nói toàn cục chứ không chỉ từng nước.", "真正厉害的人，总能从棋局整体上思考。", "Zhēnzhèng lìhai de rén, zǒng néng cóng qíjú zhěngtǐ shàng sīkǎo.", "Người thật sự giỏi luôn có thể suy nghĩ từ toàn cục ván cờ."),
      vocab("耐心", "nàixīn", "kiên nhẫn", "danh từ/tính từ", "Đức tính quan trọng khi chơi cờ và xử lý việc lớn.", "下棋最考验人的，不只是聪明，还有耐心。", "Xià qí zuì kǎoyàn rén de, bú zhǐshì cōngming, hái yǒu nàixīn.", "Thứ mà chơi cờ thử thách con người nhất không chỉ là sự thông minh, mà còn là lòng kiên nhẫn."),
      vocab("布局", "bùjú", "bố cục; dàn trận", "danh từ/động từ", "Trong cờ là cách sắp đặt từ đầu, cũng dùng ẩn dụ cho kế hoạch sống.", "一开始的布局，往往会影响后面的发展。", "Yì kāishǐ de bùjú, wǎngwǎng huì yǐngxiǎng hòumiàn de fāzhǎn.", "Bố cục ban đầu thường sẽ ảnh hưởng đến sự phát triển về sau."),
      vocab("对手", "duìshǒu", "đối thủ", "danh từ", "Giúp nói học hỏi qua cạnh tranh.", "真正值得尊重的，是能让你进步的对手。", "Zhēnzhèng zhídé zūnzhòng de, shì néng ràng nǐ jìnbù de duìshǒu.", "Đối thủ thật sự đáng tôn trọng là đối thủ có thể khiến bạn tiến bộ."),
      vocab("判断", "pànduàn", "phán đoán", "danh từ/động từ", "Cờ giúp rèn năng lực này qua nhiều bước.", "每走一步，都需要判断后面的可能。", "Měi zǒu yí bù, dōu xūyào pànduàn hòumiàn de kěnéng.", "Mỗi bước đi đều cần phán đoán khả năng phía sau."),
      vocab("大局", "dàjú", "đại cục, toàn cục", "danh từ", "Dùng để nhấn nhìn xa hơn lợi ích trước mắt.", "只看眼前的人，往往容易忽略大局。", "Zhǐ kàn yǎnqián de rén, wǎngwǎng róngyì hūlüè dàjú.", "Người chỉ nhìn trước mắt thường dễ bỏ qua toàn cục."),
      vocab("得失", "déshī", "được mất", "danh từ", "Dùng để nói không nên chỉ tính từng chút một.", "高手不会只计较一步的得失。", "Gāoshǒu bú huì zhǐ jìjiào yí bù de déshī.", "Cao thủ sẽ không chỉ so đo được mất của một bước.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Nói chơi cờ rèn điều gì.", [
        study("A: 你为什么喜欢下棋？", "A: Nǐ wèishénme xǐhuan xià qí?", "A: Vì sao bạn thích chơi cờ?"),
        study("B: 因为它不只是娱乐，还能训练人怎么思考。", "B: Yīnwèi tā bú zhǐshì yúlè, hái néng xùnliàn rén zěnme sīkǎo.", "B: Vì nó không chỉ là giải trí, mà còn có thể rèn cách con người suy nghĩ."),
        study("A: 这么说，下棋其实是在练大脑。", "A: Zhème shuō, xià qí qíshí shì zài liàn dànǎo.", "A: Nói vậy thì chơi cờ thật ra là đang rèn luyện bộ não.")
      ]),
      dialogueBlock("Tình huống 2", "Nói về kiên nhẫn và toàn cục.", [
        study("A: 那你觉得下棋最难的是什么？", "A: Nà nǐ juéde xià qí zuì nán de shì shénme?", "A: Vậy bạn thấy điều khó nhất của chơi cờ là gì?"),
        study("B: 我觉得是不着急，只看一步的人，很难看到大局。", "B: Wǒ juéde shì bù zháojí, zhǐ kàn yí bù de rén, hěn nán kàndào dàjú.", "B: Tôi thấy là không nóng vội; người chỉ nhìn một bước sẽ rất khó thấy toàn cục."),
        study("A: 对，所以耐心比聪明更难。", "A: Duì, suǒyǐ nàixīn bǐ cōngming gèng nán.", "A: Đúng, vì vậy kiên nhẫn còn khó hơn thông minh.")
      ]),
      dialogueBlock("Tình huống 3", "Nói về đối thủ và tiến bộ.", [
        study("A: 输棋的时候你会很不高兴吗？", "A: Shū qí de shíhou nǐ huì hěn bù gāoxìng ma?", "A: Lúc thua cờ bạn có rất không vui không?"),
        study("B: 以前会，现在反而觉得好的对手很难得。", "B: Yǐqián huì, xiànzài fǎn'ér juéde hǎo de duìshǒu hěn nándé.", "B: Trước đây có, giờ ngược lại thấy đối thủ tốt rất khó có được."),
        study("A: 因为真正能逼你进步的，往往不是朋友，而是对手。", "A: Yīnwèi zhēnzhèng néng bī nǐ jìnbù de, wǎngwǎng bú shì péngyou, érshì duìshǒu.", "A: Vì thứ thật sự có thể ép bạn tiến bộ thường không phải là bạn bè, mà là đối thủ.")
      ]),
      dialogueBlock("Tình huống 4", "Liên hệ cờ và cuộc sống.", [
        study("A: 你觉得下棋和做人有什么相通的地方？", "A: Nǐ juéde xià qí hé zuòrén yǒu shénme xiāngtōng de dìfang?", "A: Bạn thấy chơi cờ và làm người có điểm nào thông nhau không?"),
        study("B: 我觉得都不能只计较眼前的得失，而要看更长远的结果。", "B: Wǒ juéde dōu bùnéng zhǐ jìjiào yǎnqián de déshī, ér yào kàn gèng chángyuǎn de jiéguǒ.", "B: Tôi thấy cả hai đều không thể chỉ so đo được mất trước mắt, mà phải nhìn kết quả lâu dài hơn."),
        study("A: 所以会下棋的人，往往也更容易学会取舍。", "A: Suǒyǐ huì xià qí de rén, wǎngwǎng yě gèng róngyì xuéhuì qǔshě.", "A: Vì vậy người biết chơi cờ thường cũng dễ học được cách lựa chọn bỏ - giữ hơn.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 不只是……还…… / 只……的人……", "Hai mẫu này rất hợp với bài phân tích một hoạt động từ nhiều lớp nghĩa khác nhau.", study("它不只是娱乐，还能训练人怎么思考。", "Tā bú zhǐshì yúlè, hái néng xùnliàn rén zěnme sīkǎo.", "Nó không chỉ là giải trí, mà còn có thể rèn cách con người suy nghĩ."), [
        study("只看一步的人，很难看到大局。", "Zhǐ kàn yí bù de rén, hěn nán kàndào dàjú.", "Người chỉ nhìn một bước sẽ rất khó thấy toàn cục."),
        study("下棋不只是看输赢，还要看布局和判断。", "Xià qí bú zhǐshì kàn shūyíng, hái yào kàn bùjú hé pànduàn.", "Chơi cờ không chỉ nhìn thắng thua, mà còn phải nhìn bố cục và phán đoán."),
        study("只顾眼前得失的人，往往走不远。", "Zhǐ gù yǎnqián déshī de rén, wǎngwǎng zǒu bù yuǎn.", "Người chỉ chăm vào được mất trước mắt thường không đi xa được.")
      ]),
      grammarNote("2. 反而…… / 不能只……而要……", "Một mẫu đảo ngược cảm xúc ban đầu, một mẫu nêu chuẩn suy nghĩ dài hạn.", study("现在反而觉得好的对手很难得。", "Xiànzài fǎn'ér juéde hǎo de duìshǒu hěn nándé.", "Giờ ngược lại thấy đối thủ tốt rất khó có được."), [
        study("不能只计较眼前的得失，而要看更长远的结果。", "Bùnéng zhǐ jìjiào yǎnqián de déshī, ér yào kàn gèng chángyuǎn de jiéguǒ.", "Không thể chỉ so đo được mất trước mắt, mà phải nhìn kết quả lâu dài hơn."),
        study("输了几次以后，我反而更知道自己差在哪儿。", "Shū le jǐ cì yǐhòu, wǒ fǎn'ér gèng zhīdào zìjǐ chà zài nǎr.", "Sau khi thua vài lần, ngược lại tôi càng biết mình kém ở đâu."),
        study("做判断不能只看眼前，而要想到后面几步。", "Zuò pànduàn bùnéng zhǐ kàn yǎnqián, ér yào xiǎngdào hòumiàn jǐ bù.", "Đưa ra phán đoán không thể chỉ nhìn trước mắt, mà phải nghĩ đến vài bước phía sau.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 棋局", "2. 大局", "3. 得失"], options: ["a. ván cờ, thế cờ", "b. được mất", "c. toàn cục"], answer: "1-a, 2-c, 3-b" }],
      [{ question: "Điền từ thích hợp.", prompt: ["一开始的布___，往往会影响后面的发展。", "每走一步，都需要判___后面的可能。", "高手不会只计较一步的得___。"], answer: "局 / 断 / 失" }],
      [{ question: "Câu nào đúng?", options: ["A. 不能只计较眼前的得失，而要看更长远的结果。", "B. 不能只眼前计较得失，而要看更长远的结果。", "C. 更长远的结果不能只计较眼前的得失，而要看。"], answer: "A. 不能只计较眼前的得失，而要看更长远的结果。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 那你觉得下棋最难的是什么？", "B: ____________", "A: 对，所以耐心比聪明更难。"], answer: "B: 我觉得是不着急，只看一步的人，很难看到大局。" }],
      "Tự kiểm tra: bạn có thể nói một điểm giống nhau giữa chơi cờ và làm việc trong đời sống không?"
    ),
    quickSummary: {
      words: ["下棋", "棋局", "耐心", "对手", "大局", "得失"],
      patterns: ["只看一步的人，很难看到大局。", "不能只计较眼前的得失，而要看更长远的结果。"],
      reminder: "Bài này cần nối từ hoạt động cụ thể sang bài học suy nghĩ dài hạn."
    }
  },
  28: {
    objective: "Bàn về tiêu chí của một sinh viên tốt nghiệp được đánh giá cao, nhấn vào năng lực thích ứng, thái độ và khả năng hợp tác chứ không chỉ điểm số.",
    vocabulary: [
      vocab("毕业生", "bìyèshēng", "sinh viên tốt nghiệp", "danh từ", "Từ trung tâm của bài.", "企业越来越重视毕业生的综合能力。", "Qǐyè yuèláiyuè zhòngshì bìyèshēng de zōnghé nénglì.", "Doanh nghiệp ngày càng coi trọng năng lực tổng hợp của sinh viên tốt nghiệp."),
      vocab("用人单位", "yòngrén dānwèi", "đơn vị tuyển dụng", "danh từ", "Chỉ công ty hoặc tổ chức tuyển người.", "很多用人单位更看重解决问题的能力。", "Hěn duō yòngrén dānwèi gèng kànzhòng jiějué wèntí de nénglì.", "Nhiều đơn vị tuyển dụng coi trọng hơn năng lực giải quyết vấn đề."),
      vocab("综合", "zōnghé", "tổng hợp", "tính từ/động từ", "Hay đi với 能力 hoặc 素质.", "综合表现往往比单一成绩更能说明问题。", "Zōnghé biǎoxiàn wǎngwǎng bǐ dānyī chéngjì gèng néng shuōmíng wèntí.", "Biểu hiện tổng hợp thường nói lên vấn đề tốt hơn thành tích đơn lẻ."),
      vocab("适应", "shìyìng", "thích ứng", "động từ", "Chỉ khả năng làm quen môi trường mới.", "进入新环境后，适应能力很重要。", "Jìnrù xīn huánjìng hòu, shìyìng nénglì hěn zhòngyào.", "Sau khi bước vào môi trường mới, năng lực thích ứng rất quan trọng."),
      vocab("合作", "hézuò", "hợp tác", "động từ/danh từ", "Một phẩm chất thiết yếu khi đi làm.", "只会自己做事，不会合作，也很难被欢迎。", "Zhǐ huì zìjǐ zuò shì, bú huì hézuò, yě hěn nán bèi huānyíng.", "Chỉ biết tự làm việc mà không biết hợp tác thì cũng khó được chào đón."),
      vocab("责任感", "zérèngǎn", "tinh thần trách nhiệm", "danh từ", "Thường được dùng khi nói đánh giá nhân sự.", "责任感强的人更容易得到信任。", "Zérèngǎn qiáng de rén gèng róngyì dédào xìnrèn.", "Người có tinh thần trách nhiệm mạnh dễ nhận được sự tin tưởng hơn."),
      vocab("主动", "zhǔdòng", "chủ động", "tính từ/trạng từ", "Không chờ bị nhắc mới làm.", "主动发现问题的人，往往更受欢迎。", "Zhǔdòng fāxiàn wèntí de rén, wǎngwǎng gèng shòu huānyíng.", "Người chủ động phát hiện vấn đề thường được yêu thích hơn."),
      vocab("潜力", "qiánlì", "tiềm lực, tiềm năng", "danh từ", "Không chỉ nhìn cái đang có mà còn nhìn khả năng phát triển.", "有时候，潜力比经验更值得培养。", "Yǒushíhou, qiánlì bǐ jīngyàn gèng zhídé péiyǎng.", "Có lúc tiềm năng đáng được bồi dưỡng hơn kinh nghiệm.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Nhà tuyển dụng nhìn điều gì ở sinh viên mới ra trường.", [
        study("A: 你觉得最受欢迎的毕业生一定是成绩最好的吗？", "A: Nǐ juéde zuì shòu huānyíng de bìyèshēng yídìng shì chéngjì zuì hǎo de ma?", "A: Bạn có nghĩ sinh viên tốt nghiệp được yêu thích nhất nhất định là người có thành tích tốt nhất không?"),
        study("B: 不一定，用人单位现在看得更全面。", "B: Bù yídìng, yòngrén dānwèi xiànzài kàn de gèng quánmiàn.", "B: Chưa chắc, các đơn vị tuyển dụng bây giờ nhìn toàn diện hơn."),
        study("A: 也就是说，成绩重要，但不是唯一标准。", "A: Yě jiùshì shuō, chéngjì zhòngyào, dàn bú shì wéiyī biāozhǔn.", "A: Tức là thành tích quan trọng, nhưng không phải tiêu chuẩn duy nhất.")
      ]),
      dialogueBlock("Tình huống 2", "Nói về thái độ làm việc.", [
        study("A: 那企业最看重什么？", "A: Nà qǐyè zuì kànzhòng shénme?", "A: Vậy doanh nghiệp coi trọng điều gì nhất?"),
        study("B: 我觉得是责任感和主动性。", "B: Wǒ juéde shì zérèngǎn hé zhǔdòngxìng.", "B: Tôi thấy là tinh thần trách nhiệm và tính chủ động."),
        study("A: 对，会做事重要，愿不愿意负责更重要。", "A: Duì, huì zuò shì zhòngyào, yuàn bu yuànyì fùzé gèng zhòngyào.", "A: Đúng, biết làm việc là quan trọng, nhưng có sẵn sàng chịu trách nhiệm còn quan trọng hơn.")
      ]),
      dialogueBlock("Tình huống 3", "Nói về thích ứng và học hỏi.", [
        study("A: 没有多少经验的毕业生，靠什么竞争？", "A: Méiyǒu duōshao jīngyàn de bìyèshēng, kào shénme jìngzhēng?", "A: Sinh viên tốt nghiệp chưa có nhiều kinh nghiệm thì cạnh tranh bằng gì?"),
        study("B: 可以靠学习能力和适应能力。", "B: Kěyǐ kào xuéxí nénglì hé shìyìng nénglì.", "B: Có thể dựa vào năng lực học hỏi và năng lực thích ứng."),
        study("A: 是啊，有潜力的人往往进步得更快。", "A: Shì a, yǒu qiánlì de rén wǎngwǎng jìnbù de gèng kuài.", "A: Đúng vậy, người có tiềm năng thường tiến bộ nhanh hơn.")
      ]),
      dialogueBlock("Tình huống 4", "Nói về làm việc nhóm.", [
        study("A: 现在很多工作都不是一个人能完成的。", "A: Xiànzài hěn duō gōngzuò dōu bú shì yí ge rén néng wánchéng de.", "A: Bây giờ nhiều công việc không phải một người có thể hoàn thành."),
        study("B: 所以会合作的人，更容易被团队接受。", "B: Suǒyǐ huì hézuò de rén, gèng róngyì bèi tuánduì jiēshòu.", "B: Vì vậy người biết hợp tác sẽ dễ được tập thể tiếp nhận hơn."),
        study("A: 真正受欢迎的人，往往既能独立，也能合作。", "A: Zhēnzhèng shòu huānyíng de rén, wǎngwǎng jì néng dúlì, yě néng hézuò.", "A: Người thật sự được chào đón thường vừa có thể độc lập vừa có thể hợp tác.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 不一定…… / 也就是说……", "Hai mẫu này giúp nói đánh giá một cách chặt chẽ, không tuyệt đối hóa tiêu chuẩn tuyển dụng.", study("最受欢迎的毕业生不一定是成绩最好的。", "Zuì shòu huānyíng de bìyèshēng bù yídìng shì chéngjì zuì hǎo de.", "Sinh viên tốt nghiệp được yêu thích nhất chưa chắc là người có thành tích tốt nhất."), [
        study("用人单位不一定只看分数。", "Yòngrén dānwèi bù yídìng zhǐ kàn fēnshù.", "Đơn vị tuyển dụng chưa chắc chỉ nhìn điểm số."),
        study("也就是说，综合能力越来越重要。", "Yě jiùshì shuō, zōnghé nénglì yuèláiyuè zhòngyào.", "Tức là năng lực tổng hợp ngày càng quan trọng."),
        study("也就是说，会学习的人更有发展空间。", "Yě jiùshì shuō, huì xuéxí de rén gèng yǒu fāzhǎn kōngjiān.", "Tức là người biết học hỏi có nhiều không gian phát triển hơn.")
      ]),
      grammarNote("2. 既……也…… / 靠……", "Một mẫu dùng để nêu hai năng lực song song, một mẫu để nói dựa vào điều gì để cạnh tranh.", study("真正受欢迎的人，往往既能独立，也能合作。", "Zhēnzhèng shòu huānyíng de rén, wǎngwǎng jì néng dúlì, yě néng hézuò.", "Người thật sự được chào đón thường vừa có thể độc lập vừa có thể hợp tác."), [
        study("毕业生可以靠学习能力和适应能力竞争。", "Bìyèshēng kěyǐ kào xuéxí nénglì hé shìyìng nénglì jìngzhēng.", "Sinh viên tốt nghiệp có thể cạnh tranh bằng năng lực học hỏi và năng lực thích ứng."),
        study("一个人既要有责任感，也要有合作精神。", "Yí ge rén jì yào yǒu zérèngǎn, yě yào yǒu hézuò jīngshén.", "Một người vừa phải có tinh thần trách nhiệm, vừa phải có tinh thần hợp tác."),
        study("没有经验的时候，可以先靠态度和潜力赢得机会。", "Méiyǒu jīngyàn de shíhou, kěyǐ xiān kào tàidu hé qiánlì yíngdé jīhuì.", "Khi chưa có kinh nghiệm, có thể trước hết dựa vào thái độ và tiềm năng để giành cơ hội.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 毕业生", "2. 责任感", "3. 潜力"], options: ["a. tiềm năng", "b. sinh viên tốt nghiệp", "c. tinh thần trách nhiệm"], answer: "1-b, 2-c, 3-a" }],
      [{ question: "Điền từ thích hợp.", prompt: ["用人单位现在看得更全___。", "主动发现问题的人，往往更受欢___。", "有潜力的人往往进步得更___。"], answer: "面 / 迎 / 快" }],
      [{ question: "Câu nào đúng?", options: ["A. 最受欢迎的毕业生不一定是成绩最好的。", "B. 最受欢迎的毕业生成绩不一定是最好的。", "C. 成绩最好的不一定是毕业生最受欢迎。"], answer: "A. 最受欢迎的毕业生不一定是成绩最好的。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 没有多少经验的毕业生，靠什么竞争？", "B: ____________", "A: 是啊，有潜力的人往往进步得更快。"], answer: "B: 可以靠学习能力和适应能力。" }],
      "Tự kiểm tra: bạn có thể nói 2 phẩm chất mà nhà tuyển dụng sẽ coi trọng ở sinh viên mới ra trường không?"
    ),
    quickSummary: {
      words: ["毕业生", "适应", "合作", "责任感", "主动", "潜力"],
      patterns: ["最受欢迎的毕业生不一定是成绩最好的。", "真正受欢迎的人，往往既能独立，也能合作。"],
      reminder: "Bài này cần nói về tiêu chí đánh giá con người một cách toàn diện, không nói hời hợt kiểu 'điểm cao là đủ'."
    }
  },
  29: {
    objective: "Giải thích vì sao một đối thủ tốt có thể thúc đẩy con người trưởng thành, từ đó nói về cạnh tranh lành mạnh và động lực tiến bộ.",
    vocabulary: [
      vocab("培养", "péiyǎng", "bồi dưỡng", "động từ", "Dùng khi nói phát triển năng lực hoặc thói quen.", "真正好的竞争，也能培养人的能力。", "Zhēnzhèng hǎo de jìngzhēng, yě néng péiyǎng rén de nénglì.", "Sự cạnh tranh tốt thật sự cũng có thể bồi dưỡng năng lực của con người."),
      vocab("对手", "duìshǒu", "đối thủ", "danh từ", "Ở đây mang nghĩa tích cực hơn thường thấy.", "有时候，对手比朋友更能让你看清自己。", "Yǒushíhou, duìshǒu bǐ péngyou gèng néng ràng nǐ kàn qīng zìjǐ.", "Có lúc đối thủ còn giúp bạn nhìn rõ bản thân hơn bạn bè."),
      vocab("竞争", "jìngzhēng", "cạnh tranh", "danh từ/động từ", "Chủ đề lớn của bài.", "没有竞争，很多潜力可能一直不会被激发出来。", "Méiyǒu jìngzhēng, hěn duō qiánlì kěnéng yìzhí bú huì bèi jīfā chūlai.", "Không có cạnh tranh, nhiều tiềm năng có thể mãi không được khơi ra."),
      vocab("激发", "jīfā", "khơi gợi, kích thích", "động từ", "Hay đi với 潜力、热情、动力.", "优秀的对手往往能激发人的斗志。", "Yōuxiù de duìshǒu wǎngwǎng néng jīfā rén de dòuzhì.", "Đối thủ giỏi thường có thể khơi dậy ý chí chiến đấu của con người."),
      vocab("压力", "yālì", "áp lực", "danh từ", "Bài này phân biệt áp lực xấu và áp lực có ích.", "适当的压力有时候反而能让人更专注。", "Shìdàng de yālì yǒushíhou fǎn'ér néng ràng rén gèng zhuānzhù.", "Áp lực vừa phải đôi khi ngược lại còn khiến con người tập trung hơn."),
      vocab("进步", "jìnbù", "tiến bộ", "danh từ/động từ", "Mục tiêu cuối cùng của cạnh tranh lành mạnh.", "如果只有舒服，没有压力，进步往往会变慢。", "Rúguǒ zhǐ yǒu shūfu, méiyǒu yālì, jìnbù wǎngwǎng huì biàn màn.", "Nếu chỉ có thoải mái mà không có áp lực, tiến bộ thường sẽ chậm lại."),
      vocab("尊重", "zūnzhòng", "tôn trọng", "động từ/danh từ", "Cạnh tranh lành mạnh phải có yếu tố này.", "真正的对手关系里，也应该有尊重。", "Zhēnzhèng de duìshǒu guānxì lǐ, yě yīnggāi yǒu zūnzhòng.", "Trong mối quan hệ đối thủ thật sự cũng nên có sự tôn trọng."),
      vocab("超越", "chāoyuè", "vượt qua", "động từ", "Không chỉ vượt người khác mà còn vượt chính mình.", "培养对手，最后也是在帮助自己不断超越。", "Péiyǎng duìshǒu, zuìhòu yě shì zài bāngzhù zìjǐ búduàn chāoyuè.", "Bồi dưỡng đối thủ cuối cùng cũng là đang giúp bản thân không ngừng vượt lên.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Đối thủ có thể là tài sản.", [
        study("A: 你觉得对手只是用来打败的吗？", "A: Nǐ juéde duìshǒu zhǐshì yòng lái dǎbài de ma?", "A: Bạn có nghĩ đối thủ chỉ là để đánh bại không?"),
        study("B: 不一定，好的对手也是一种资源。", "B: Bù yídìng, hǎo de duìshǒu yě shì yì zhǒng zīyuán.", "B: Chưa chắc, đối thủ tốt cũng là một loại nguồn lực."),
        study("A: 因为他会逼着你不断提高自己。", "A: Yīnwèi tā huì bīzhe nǐ búduàn tígāo zìjǐ.", "A: Vì họ sẽ thúc ép bạn không ngừng nâng cao bản thân.")
      ]),
      dialogueBlock("Tình huống 2", "Áp lực tốt và áp lực xấu.", [
        study("A: 可是竞争不是也会带来压力吗？", "A: Kěshì jìngzhēng bú shì yě huì dàilái yālì ma?", "A: Nhưng cạnh tranh chẳng phải cũng mang lại áp lực sao?"),
        study("B: 会，不过适当的压力有时候反而能让人更专注。", "B: Huì, búguò shìdàng de yālì yǒushíhou fǎn'ér néng ràng rén gèng zhuānzhù.", "B: Có, nhưng áp lực vừa phải đôi khi ngược lại còn giúp người ta tập trung hơn."),
        study("A: 所以关键不是有没有压力，而是怎么面对压力。", "A: Suǒyǐ guānjiàn bú shì yǒu méiyǒu yālì, érshì zěnme miànduì yālì.", "A: Vì vậy mấu chốt không phải có áp lực hay không, mà là đối diện với áp lực thế nào.")
      ]),
      dialogueBlock("Tình huống 3", "Cạnh tranh lành mạnh.", [
        study("A: 那什么样的竞争才算健康？", "A: Nà shénme yàng de jìngzhēng cái suàn jiànkāng?", "A: Vậy kiểu cạnh tranh nào mới được tính là lành mạnh?"),
        study("B: 我觉得是既想超越对方，也愿意尊重对方。", "B: Wǒ juéde shì jì xiǎng chāoyuè duìfāng, yě yuànyì zūnzhòng duìfāng.", "B: Tôi thấy là vừa muốn vượt qua đối phương, vừa sẵn lòng tôn trọng đối phương."),
        study("A: 对，没有尊重，竞争就容易变味。", "A: Duì, méiyǒu zūnzhòng, jìngzhēng jiù róngyì biànwèi.", "A: Đúng, không có tôn trọng thì cạnh tranh dễ biến chất.")
      ]),
      dialogueBlock("Tình huống 4", "Nuôi dưỡng đối thủ cũng là nuôi dưỡng bản thân.", [
        study("A: 可为什么有人说要‘培养对手’？", "A: Kě wèishénme yǒu rén shuō yào ‘péiyǎng duìshǒu’?", "A: Nhưng vì sao có người nói phải 'bồi dưỡng đối thủ'?"),
        study("B: 因为没有强的对手，自己也容易停下来。", "B: Yīnwèi méiyǒu qiáng de duìshǒu, zìjǐ yě róngyì tíng xiàlai.", "B: Vì không có đối thủ mạnh thì bản thân cũng dễ dừng lại."),
        study("A: 原来培养对手，最后也是培养自己。", "A: Yuánlái péiyǎng duìshǒu, zuìhòu yě shì péiyǎng zìjǐ.", "A: Ra là bồi dưỡng đối thủ cuối cùng cũng là bồi dưỡng chính mình.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 不一定……也是…… / 关键不是……而是……", "Dùng để chuyển cách nhìn từ đơn giản sang sâu hơn khi phân tích cạnh tranh.", study("好的对手也是一种资源。", "Hǎo de duìshǒu yě shì yì zhǒng zīyuán.", "Đối thủ tốt cũng là một loại nguồn lực."), [
        study("关键不是有没有压力，而是怎么面对压力。", "Guānjiàn bú shì yǒu méiyǒu yālì, érshì zěnme miànduì yālì.", "Mấu chốt không phải là có áp lực hay không, mà là đối diện với áp lực thế nào."),
        study("竞争不一定会伤害关系，也可能促进成长。", "Jìngzhēng bù yídìng huì shānghài guānxì, yě kěnéng cùjìn chéngzhǎng.", "Cạnh tranh chưa chắc làm tổn thương quan hệ, nó cũng có thể thúc đẩy trưởng thành."),
        study("好成绩不是唯一目标，关键是有没有进步。", "Hǎo chéngjì bú shì wéiyī mùbiāo, guānjiàn shì yǒu méiyǒu jìnbù.", "Thành tích tốt không phải mục tiêu duy nhất, mấu chốt là có tiến bộ hay không.")
      ]),
      grammarNote("2. 既……也…… / 没有……也……", "Một mẫu nói hai mặt cùng tồn tại, một mẫu nói hậu quả khi thiếu cạnh tranh.", study("我觉得是既想超越对方，也愿意尊重对方。", "Wǒ juéde shì jì xiǎng chāoyuè duìfāng, yě yuànyì zūnzhòng duìfāng.", "Tôi thấy là vừa muốn vượt qua đối phương, vừa sẵn lòng tôn trọng đối phương."), [
        study("没有强的对手，自己也容易停下来。", "Méiyǒu qiáng de duìshǒu, zìjǐ yě róngyì tíng xiàlai.", "Không có đối thủ mạnh thì bản thân cũng dễ dừng lại."),
        study("一个人既需要压力，也需要方向。", "Yí ge rén jì xūyào yālì, yě xūyào fāngxiàng.", "Một người vừa cần áp lực, vừa cần phương hướng."),
        study("没有竞争，很多潜力也不会被激发出来。", "Méiyǒu jìngzhēng, hěn duō qiánlì yě bú huì bèi jīfā chūlai.", "Không có cạnh tranh thì nhiều tiềm năng cũng sẽ không được khơi ra.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 激发", "2. 尊重", "3. 超越"], options: ["a. vượt qua", "b. khơi gợi", "c. tôn trọng"], answer: "1-b, 2-c, 3-a" }],
      [{ question: "Điền từ thích hợp.", prompt: ["真正好的竞争，也能培___人的能力。", "适当的压___有时候反而能让人更专注。", "没有竞争，很多潜力可能一直不会被激___出来。"], answer: "养 / 力 / 发" }],
      [{ question: "Câu nào đúng?", options: ["A. 关键不是有没有压力，而是怎么面对压力。", "B. 关键不是怎么面对压力，而是有没有压力。", "C. 有没有压力关键不是，而是怎么面对。"], answer: "A. 关键不是有没有压力，而是怎么面对压力。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 可为什么有人说要‘培养对手’？", "B: ____________", "A: 原来培养对手，最后也是培养自己。"], answer: "B: 因为没有强的对手，自己也容易停下来。" }],
      "Tự kiểm tra: bạn có thể giải thích vì sao một đối thủ tốt lại giúp mình tiến bộ không?"
    ),
    quickSummary: {
      words: ["培养", "对手", "竞争", "激发", "压力", "超越"],
      patterns: ["关键不是有没有压力，而是怎么面对压力。", "我觉得是既想超越对方，也愿意尊重对方。"],
      reminder: "Bài này cần nhấn vào cạnh tranh lành mạnh và giá trị phát triển bản thân."
    }
  },
  30: {
    objective: "Giải thích vì sao cạnh tranh có thể làm thị trường hiệu quả hơn, đồng thời nhấn rằng cạnh tranh chỉ có ích khi công bằng và hướng đến chất lượng.",
    vocabulary: [
      vocab("市场", "shìchǎng", "thị trường", "danh từ", "Khái niệm cốt lõi của bài kinh tế xã hội này.", "竞争会直接影响市场的活力。", "Jìngzhēng huì zhíjiē yǐngxiǎng shìchǎng de huólì.", "Cạnh tranh sẽ ảnh hưởng trực tiếp đến sức sống của thị trường."),
      vocab("高效", "gāoxiào", "hiệu quả cao", "tính từ", "Dùng để nói trạng thái vận hành tốt.", "一个更高效的市场，通常能让资源利用得更合理。", "Yí ge gèng gāoxiào de shìchǎng, tōngcháng néng ràng zīyuán lìyòng de gèng hélǐ.", "Một thị trường hiệu quả hơn thường có thể khiến tài nguyên được sử dụng hợp lý hơn."),
      vocab("资源", "zīyuán", "tài nguyên, nguồn lực", "danh từ", "Rất hay dùng trong lập luận kinh tế.", "竞争会推动资源流向更需要它的地方。", "Jìngzhēng huì tuīdòng zīyuán liúxiàng gèng xūyào tā de dìfang.", "Cạnh tranh sẽ thúc đẩy nguồn lực chảy đến nơi cần nó hơn."),
      vocab("价格", "jiàgé", "giá cả", "danh từ", "Một tác động thấy rõ của cạnh tranh.", "合理竞争往往会影响价格和服务。", "Hélǐ jìngzhēng wǎngwǎng huì yǐngxiǎng jiàgé hé fúwù.", "Cạnh tranh hợp lý thường ảnh hưởng đến giá cả và dịch vụ."),
      vocab("服务", "fúwù", "dịch vụ", "danh từ/động từ", "Đi cùng giá cả và chất lượng.", "只有服务不断提高，顾客才会留下来。", "Zhǐyǒu fúwù búduàn tígāo, gùkè cái huì liú xiàlai.", "Chỉ khi dịch vụ không ngừng nâng cao, khách hàng mới ở lại."),
      vocab("质量", "zhìliàng", "chất lượng", "danh từ", "Là mục tiêu chứ không chỉ là hạ giá.", "真正好的竞争，不是单纯压低价格，而是提高质量。", "Zhēnzhèng hǎo de jìngzhēng, bú shì dānchún yādī jiàgé, érshì tígāo zhìliàng.", "Cạnh tranh tốt thật sự không phải chỉ đơn thuần ép giá xuống, mà là nâng cao chất lượng."),
      vocab("公平", "gōngpíng", "công bằng", "tính từ/danh từ", "Điều kiện để cạnh tranh có ý nghĩa tích cực.", "没有公平规则，竞争就容易失去意义。", "Méiyǒu gōngpíng guīzé, jìngzhēng jiù róngyì shīqù yìyì.", "Không có quy tắc công bằng thì cạnh tranh dễ mất ý nghĩa."),
      vocab("消费者", "xiāofèizhě", "người tiêu dùng", "danh từ", "Nhân vật hưởng lợi cuối cùng trong bài lập luận này.", "竞争带来的变化，最后往往由消费者最先感受到。", "Jìngzhēng dàilái de biànhuà, zuìhòu wǎngwǎng yóu xiāofèizhě zuì xiān gǎnshòu dào.", "Những thay đổi do cạnh tranh mang lại cuối cùng thường được người tiêu dùng cảm nhận đầu tiên.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Cạnh tranh ảnh hưởng thị trường ra sao.", [
        study("A: 为什么有人说竞争能让市场更高效？", "A: Wèishénme yǒu rén shuō jìngzhēng néng ràng shìchǎng gèng gāoxiào?", "A: Vì sao có người nói cạnh tranh có thể làm thị trường hiệu quả hơn?"),
        study("B: 因为有竞争，企业就不能随便停在原地。", "B: Yīnwèi yǒu jìngzhēng, qǐyè jiù bùnéng suíbiàn tíng zài yuándì.", "B: Vì có cạnh tranh nên doanh nghiệp không thể tùy tiện đứng yên tại chỗ."),
        study("A: 也就是说，竞争会逼大家不断改进。", "A: Yě jiùshì shuō, jìngzhēng huì bī dàjiā búduàn gǎijìn.", "A: Tức là cạnh tranh sẽ buộc mọi người liên tục cải tiến.")
      ]),
      dialogueBlock("Tình huống 2", "Không chỉ là chuyện giá.", [
        study("A: 那竞争是不是就是比谁更便宜？", "A: Nà jìngzhēng shì bú shì jiùshì bǐ shéi gèng piányi?", "A: Vậy cạnh tranh có phải chỉ là xem ai rẻ hơn không?"),
        study("B: 不是，真正好的竞争，不是单纯压低价格，而是提高质量和服务。", "B: Bú shì, zhēnzhèng hǎo de jìngzhēng, bú shì dānchún yādī jiàgé, érshì tígāo zhìliàng hé fúwù.", "B: Không, cạnh tranh tốt thật sự không phải chỉ đơn thuần ép giá xuống, mà là nâng cao chất lượng và dịch vụ."),
        study("A: 这样最后受益的还是消费者。", "A: Zhèyàng zuìhòu shòuyì de háishi xiāofèizhě.", "A: Như vậy cuối cùng người hưởng lợi vẫn là người tiêu dùng.")
      ]),
      dialogueBlock("Tình huống 3", "Vai trò của quy tắc công bằng.", [
        study("A: 竞争是不是越激烈越好？", "A: Jìngzhēng shì bú shì yuè jīliè yuè hǎo?", "A: Cạnh tranh có phải càng gay gắt càng tốt không?"),
        study("B: 也不一定，没有公平规则，竞争就可能变成互相伤害。", "B: Yě bù yídìng, méiyǒu gōngpíng guīzé, jìngzhēng jiù kěnéng biànchéng hùxiāng shānghài.", "B: Cũng chưa chắc, không có quy tắc công bằng thì cạnh tranh có thể biến thành làm hại lẫn nhau."),
        study("A: 所以效率的前提，还是规则清楚。", "A: Suǒyǐ xiàolǜ de qiántí, háishi guīzé qīngchu.", "A: Vì vậy tiền đề của hiệu quả vẫn là quy tắc rõ ràng.")
      ]),
      dialogueBlock("Tình huống 4", "Nguồn lực chảy đến nơi hợp lý hơn.", [
        study("A: 竞争为什么还能影响资源流动？", "A: Jìngzhēng wèishénme hái néng yǐngxiǎng zīyuán liúdòng?", "A: Vì sao cạnh tranh còn có thể ảnh hưởng đến dòng chảy nguồn lực?"),
        study("B: 因为效率更高、服务更好的企业，更容易得到市场认可。", "B: Yīnwèi xiàolǜ gèng gāo, fúwù gèng hǎo de qǐyè, gèng róngyì dédào shìchǎng rènkě.", "B: Vì doanh nghiệp hiệu quả hơn và dịch vụ tốt hơn dễ được thị trường công nhận hơn."),
        study("A: 这样资源自然会流向更能把事情做好的地方。", "A: Zhèyàng zīyuán zìrán huì liúxiàng gèng néng bǎ shìqing zuò hǎo de dìfang.", "A: Như vậy nguồn lực tự nhiên sẽ chảy đến nơi có thể làm việc tốt hơn.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 因为……就…… / 也就是说……", "Dùng để nối nguyên nhân với tác động hệ thống một cách rõ ràng.", study("因为有竞争，企业就不能随便停在原地。", "Yīnwèi yǒu jìngzhēng, qǐyè jiù bùnéng suíbiàn tíng zài yuándì.", "Vì có cạnh tranh nên doanh nghiệp không thể tùy tiện đứng yên tại chỗ."), [
        study("因为效率更高，企业就更容易被选择。", "Yīnwèi xiàolǜ gèng gāo, qǐyè jiù gèng róngyì bèi xuǎnzé.", "Vì hiệu quả cao hơn nên doanh nghiệp dễ được lựa chọn hơn."),
        study("也就是说，竞争会推动改进。", "Yě jiùshì shuō, jìngzhēng huì tuīdòng gǎijìn.", "Tức là cạnh tranh sẽ thúc đẩy cải tiến."),
        study("也就是说，市场效率和服务质量是连在一起的。", "Yě jiùshì shuō, shìchǎng xiàolǜ hé fúwù zhìliàng shì lián zài yìqǐ de.", "Tức là hiệu quả thị trường và chất lượng dịch vụ gắn liền với nhau.")
      ]),
      grammarNote("2. 不是……而是…… / 越……越……", "Một mẫu để chỉnh cách hiểu sai, một mẫu để diễn tả xu hướng tăng cường.", study("真正好的竞争，不是单纯压低价格，而是提高质量和服务。", "Zhēnzhèng hǎo de jìngzhēng, bú shì dānchún yādī jiàgé, érshì tígāo zhìliàng hé fúwù.", "Cạnh tranh tốt thật sự không phải chỉ đơn thuần ép giá xuống, mà là nâng cao chất lượng và dịch vụ."), [
        study("规则越清楚，市场越容易健康发展。", "Guīzé yuè qīngchu, shìchǎng yuè róngyì jiànkāng fāzhǎn.", "Quy tắc càng rõ ràng thì thị trường càng dễ phát triển lành mạnh."),
        study("效率越高，资源利用得越合理。", "Xiàolǜ yuè gāo, zīyuán lìyòng de yuè hélǐ.", "Hiệu quả càng cao thì nguồn lực được sử dụng càng hợp lý."),
        study("竞争不是为了打倒别人，而是为了做得更好。", "Jìngzhēng bú shì wèile dǎdǎo biérén, érshì wèile zuò de gèng hǎo.", "Cạnh tranh không phải để đánh bại người khác, mà là để làm tốt hơn.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 市场", "2. 质量", "3. 消费者"], options: ["a. chất lượng", "b. thị trường", "c. người tiêu dùng"], answer: "1-b, 2-a, 3-c" }],
      [{ question: "Điền từ thích hợp.", prompt: ["竞争会直接影响市___的活力。", "真正好的竞争，不是单纯压低价___。", "没有公平规___，竞争就容易失去意义。"], answer: "场 / 格 / 则" }],
      [{ question: "Câu nào đúng?", options: ["A. 真正好的竞争，不是单纯压低价格，而是提高质量和服务。", "B. 真正好的竞争，不是提高质量和服务，而是压低价格。", "C. 单纯压低价格不是真正好的竞争，而是提高质量和服务不是。"], answer: "A. 真正好的竞争，不是单纯压低价格，而是提高质量和服务。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 竞争是不是越激烈越好？", "B: ____________", "A: 所以效率的前提，还是规则清楚。"], answer: "B: 也不一定，没有公平规则，竞争就可能变成互相伤害。" }],
      "Tự kiểm tra: bạn có thể nói một lợi ích và một điều kiện của cạnh tranh lành mạnh không?"
    ),
    quickSummary: {
      words: ["市场", "高效", "资源", "质量", "公平", "消费者"],
      patterns: ["真正好的竞争，不是单纯压低价格，而是提高质量和服务。", "规则越清楚，市场越容易健康发展。"],
      reminder: "Bài này phải giữ giọng phân tích xã hội, không nói kiểu cảm tính chung chung."
    }
  },
  31: {
    objective: "Giới thiệu hiệu ứng 'đăng môn khảm' trong tâm lý học hành vi và giải thích vì sao con người dễ tiếp tục chấp nhận yêu cầu lớn sau khi đã đồng ý với yêu cầu nhỏ.",
    vocabulary: [
      vocab("效应", "xiàoyìng", "hiệu ứng", "danh từ", "Dùng khi nói hiện tượng tâm lý hoặc xã hội.", "很多行为变化都和心理效应有关。", "Hěn duō xíngwéi biànhuà dōu hé xīnlǐ xiàoyìng yǒuguān.", "Nhiều thay đổi hành vi đều có liên quan đến hiệu ứng tâm lý."),
      vocab("请求", "qǐngqiú", "yêu cầu, đề nghị", "danh từ/động từ", "Bài này nói cách lời đề nghị thay đổi phản ứng của người khác.", "先提出一个小请求，更容易让对方接受。", "Xiān tíchū yí ge xiǎo qǐngqiú, gèng róngyì ràng duìfāng jiēshòu.", "Trước tiên đưa ra một yêu cầu nhỏ sẽ dễ khiến đối phương chấp nhận hơn."),
      vocab("接受", "jiēshòu", "chấp nhận", "động từ", "Đi với 请求、建议、安排.", "人一旦接受了第一步，后面往往更难拒绝。", "Rén yídàn jiēshòu le dìyī bù, hòumiàn wǎngwǎng gèng nán jùjué.", "Con người một khi đã chấp nhận bước đầu, về sau thường sẽ khó từ chối hơn."),
      vocab("拒绝", "jùjué", "từ chối", "động từ", "Đối lập với 接受.", "有时候，不是对方不会拒绝，而是已经进了第一步。", "Yǒushíhou, bú shì duìfāng bú huì jùjué, érshì yǐjīng jìn le dìyī bù.", "Đôi khi không phải đối phương không biết từ chối, mà là đã bước vào bước đầu tiên rồi."),
      vocab("逐渐", "zhújiàn", "dần dần", "phó từ", "Diễn tả quá trình tăng từng bước.", "要求如果逐渐增加，人往往不容易察觉变化。", "Yāoqiú rúguǒ zhújiàn zēngjiā, rén wǎngwǎng bù róngyì chájué biànhuà.", "Nếu yêu cầu tăng dần thì con người thường không dễ nhận ra sự thay đổi."),
      vocab("心理", "xīnlǐ", "tâm lý", "danh từ", "Bài này thiên về phân tích phản ứng bên trong.", "这种做法利用的是人的一致性心理。", "Zhè zhǒng zuòfǎ lìyòng de shì rén de yízhìxìng xīnlǐ.", "Cách làm này tận dụng tâm lý nhất quán của con người."),
      vocab("一致", "yízhì", "nhất quán", "tính từ", "Hay đi với 态度、行为、心理.", "人通常希望自己的行为前后一致。", "Rén tōngcháng xīwàng zìjǐ de xíngwéi qiánhòu yízhì.", "Con người thường mong hành vi của mình trước sau nhất quán."),
      vocab("影响", "yǐngxiǎng", "ảnh hưởng", "động từ/danh từ", "Kết nối tâm lý với hành vi cụ thể.", "一个小决定，有时会影响后面很多选择。", "Yí ge xiǎo juédìng, yǒushí huì yǐngxiǎng hòumiàn hěn duō xuǎnzé.", "Một quyết định nhỏ đôi khi sẽ ảnh hưởng đến rất nhiều lựa chọn phía sau.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Hiểu khái niệm hiệu ứng tâm lý.", [
        study("A: 什么是‘登门槛效应’？", "A: Shénme shì ‘Dēng ménkǎn xiàoyìng’?", "A: 'Hiệu ứng bước qua ngưỡng cửa' là gì?"),
        study("B: 简单说，就是先让你答应一件小事，再慢慢接受更大的要求。", "B: Jiǎndān shuō, jiùshì xiān ràng nǐ dāying yí jiàn xiǎo shì, zài mànmàn jiēshòu gèng dà de yāoqiú.", "B: Nói đơn giản, tức là trước hết khiến bạn đồng ý một việc nhỏ, rồi dần dần chấp nhận yêu cầu lớn hơn."),
        study("A: 原来关键在于‘先迈出第一步’。", "A: Yuánlái guānjiàn zài yú ‘xiān mài chū dì yī bù’.", "A: Ra là mấu chốt nằm ở việc 'trước hết bước ra bước đầu tiên'.")
      ]),
      dialogueBlock("Tình huống 2", "Vì sao con người dễ bị ảnh hưởng.", [
        study("A: 可是为什么答应了小事，就更容易答应大事？", "A: Kěshì wèishénme dāying le xiǎo shì, jiù gèng róngyì dāying dà shì?", "A: Nhưng vì sao đã đồng ý việc nhỏ thì lại dễ đồng ý việc lớn hơn?"),
        study("B: 因为人通常希望自己的行为前后一致。", "B: Yīnwèi rén tōngcháng xīwàng zìjǐ de xíngwéi qiánhòu yízhì.", "B: Vì con người thường mong hành vi của mình trước sau nhất quán."),
        study("A: 所以一旦开始，就不太愿意马上否定自己。", "A: Suǒyǐ yídàn kāishǐ, jiù bú tài yuànyì mǎshàng fǒudìng zìjǐ.", "A: Vì vậy một khi đã bắt đầu thì thường không muốn lập tức phủ định chính mình.")
      ]),
      dialogueBlock("Tình huống 3", "Ví dụ trong đời sống.", [
        study("A: 这种效应在生活里常见吗？", "A: Zhè zhǒng xiàoyìng zài shēnghuó lǐ chángjiàn ma?", "A: Hiệu ứng này có thường gặp trong đời sống không?"),
        study("B: 很常见，比如先请你帮一个小忙，后来再提出更复杂的请求。", "B: Hěn chángjiàn, bǐrú xiān qǐng nǐ bāng yí ge xiǎo máng, hòulái zài tíchū gèng fùzá de qǐngqiú.", "B: Rất thường gặp, ví dụ trước tiên nhờ bạn giúp một việc nhỏ, rồi sau đó đưa ra yêu cầu phức tạp hơn."),
        study("A: 如果不留意，确实很容易被一步一步带进去。", "A: Rúguǒ bù liúyì, quèshí hěn róngyì bèi yí bù yí bù dài jìnqu.", "A: Nếu không để ý thì quả thật rất dễ bị dẫn dắt từng bước vào trong.")
      ]),
      dialogueBlock("Tình huống 4", "Biết hiệu ứng để tự bảo vệ.", [
        study("A: 那知道这种效应以后，有什么用？", "A: Nà zhīdào zhè zhǒng xiàoyìng yǐhòu, yǒu shénme yòng?", "A: Vậy sau khi biết hiệu ứng này thì có ích gì?"),
        study("B: 至少我们可以在答应之前，先想清楚后面的可能。", "B: Zhìshǎo wǒmen kěyǐ zài dāying zhīqián, xiān xiǎng qīngchu hòumiàn de kěnéng.", "B: Ít nhất chúng ta có thể trước khi đồng ý thì nghĩ rõ các khả năng phía sau."),
        study("A: 对，知道规律，不是为了怀疑别人，而是为了更清醒。", "A: Duì, zhīdào guīlǜ, bú shì wèile huáiyí biérén, érshì wèile gèng qīngxing.", "A: Đúng, biết quy luật không phải để nghi ngờ người khác, mà là để tỉnh táo hơn.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 先……再…… / 一旦……就……", "Hai mẫu này rất hợp để giải thích cơ chế từng bước của hiệu ứng tâm lý.", study("先让你答应一件小事，再慢慢接受更大的要求。", "Xiān ràng nǐ dāying yí jiàn xiǎo shì, zài mànmàn jiēshòu gèng dà de yāoqiú.", "Trước hết khiến bạn đồng ý một việc nhỏ, rồi dần dần chấp nhận yêu cầu lớn hơn."), [
        study("一旦开始，就不太愿意马上否定自己。", "Yídàn kāishǐ, jiù bú tài yuànyì mǎshàng fǒudìng zìjǐ.", "Một khi đã bắt đầu thì thường không muốn lập tức phủ định chính mình."),
        study("先提出一个小请求，再看对方的反应。", "Xiān tíchū yí ge xiǎo qǐngqiú, zài kàn duìfāng de fǎnyìng.", "Trước tiên đưa ra một yêu cầu nhỏ, rồi xem phản ứng của đối phương."),
        study("一旦接受了第一步，后面往往更难拒绝。", "Yídàn jiēshòu le dìyī bù, hòumiàn wǎngwǎng gèng nán jùjué.", "Một khi đã chấp nhận bước đầu thì về sau thường khó từ chối hơn.")
      ]),
      grammarNote("2. 不是为了……而是为了…… / 如果……就……", "Dùng để nêu mục đích thật và điều kiện xảy ra trong đời sống.", study("知道规律，不是为了怀疑别人，而是为了更清醒。", "Zhīdào guīlǜ, bú shì wèile huáiyí biérén, érshì wèile gèng qīngxing.", "Biết quy luật không phải để nghi ngờ người khác, mà là để tỉnh táo hơn."), [
        study("如果不留意，就很容易被一步一步带进去。", "Rúguǒ bù liúyì, jiù hěn róngyì bèi yí bù yí bù dài jìnqu.", "Nếu không để ý thì rất dễ bị dẫn dắt từng bước vào trong."),
        study("这种方法不是为了欺骗别人，而是为了说明心理规律。", "Zhè zhǒng fāngfǎ bú shì wèile qīpiàn biérén, érshì wèile shuōmíng xīnlǐ guīlǜ.", "Cách này không phải để lừa người khác, mà là để giải thích quy luật tâm lý."),
        study("如果提前想到后果，就不容易随便答应。", "Rúguǒ tíqián xiǎngdào hòuguǒ, jiù bù róngyì suíbiàn dāying.", "Nếu nghĩ trước đến hậu quả thì sẽ không dễ tùy tiện đồng ý.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 效应", "2. 拒绝", "3. 一致"], options: ["a. từ chối", "b. nhất quán", "c. hiệu ứng"], answer: "1-c, 2-a, 3-b" }],
      [{ question: "Điền từ thích hợp.", prompt: ["很多行为变化都和心___效应有关。", "要求如果逐渐增加，人往往不容易察___变化。", "一个小决定，有时会影___后面很多选择。"], answer: "理 / 觉 / 响" }],
      [{ question: "Câu nào đúng?", options: ["A. 知道规律，不是为了怀疑别人，而是为了更清醒。", "B. 知道规律，而是为了更清醒，不是为了怀疑别人。", "C. 不是为了更清醒，而是为了怀疑别人知道规律。"], answer: "A. 知道规律，不是为了怀疑别人，而是为了更清醒。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 可是为什么答应了小事，就更容易答应大事？", "B: ____________", "A: 所以一旦开始，就不太愿意马上否定自己。"], answer: "B: 因为人通常希望自己的行为前后一致。" }],
      "Tự kiểm tra: bạn có thể tự nêu một ví dụ đời sống về việc người ta đồng ý từ việc nhỏ sang việc lớn không?"
    ),
    quickSummary: {
      words: ["效应", "请求", "接受", "拒绝", "一致", "影响"],
      patterns: ["先让你答应一件小事，再慢慢接受更大的要求。", "知道规律，不是为了怀疑别人，而是为了更清醒。"],
      reminder: "Bài này cần giải thích rõ cơ chế tâm lý từng bước, không chỉ nêu khái niệm."
    }
  },
  32: {
    objective: "Nói về bảo vệ môi trường từ những việc rất gần gũi trong sinh hoạt hàng ngày, nhấn vào thói quen nhỏ nhưng tác động bền vững.",
    vocabulary: [
      vocab("环保", "huánbǎo", "bảo vệ môi trường", "danh từ/tính từ", "Chủ đề chính của bài.", "环保并不一定非得从大事做起。", "Huánbǎo bìng bù yídìng fēi děi cóng dà shì zuò qǐ.", "Bảo vệ môi trường chưa chắc nhất định phải bắt đầu từ việc lớn."),
      vocab("垃圾", "lājī", "rác", "danh từ", "Hay đi với 分类、处理.", "垃圾如果分类得好，后面的处理就会容易很多。", "Lājī rúguǒ fēnlèi de hǎo, hòumiàn de chǔlǐ jiù huì róngyì hěn duō.", "Nếu rác được phân loại tốt thì việc xử lý về sau sẽ dễ hơn rất nhiều."),
      vocab("分类", "fēnlèi", "phân loại", "động từ/danh từ", "Một hành động cơ bản trong đời sống đô thị.", "很多城市已经开始强调垃圾分类。", "Hěn duō chéngshì yǐjīng kāishǐ qiángdiào lājī fēnlèi.", "Nhiều thành phố đã bắt đầu nhấn mạnh việc phân loại rác."),
      vocab("节约", "jiéyuē", "tiết kiệm", "động từ/tính từ", "Hay đi với 水、电、资源.", "节约水电，其实就是最直接的环保。", "Jiéyuē shuǐdiàn, qíshí jiùshì zuì zhíjiē de huánbǎo.", "Tiết kiệm nước điện thật ra chính là bảo vệ môi trường trực tiếp nhất."),
      vocab("一次性", "yícìxìng", "dùng một lần", "tính từ", "Rất hay xuất hiện trong bối cảnh môi trường.", "减少一次性用品，比想象中更重要。", "Jiǎnshǎo yícìxìng yòngpǐn, bǐ xiǎngxiàng zhōng gèng zhòngyào.", "Giảm đồ dùng một lần quan trọng hơn ta tưởng."),
      vocab("习惯", "xíguàn", "thói quen", "danh từ/động từ", "Bài này nhấn thay đổi lâu dài thông qua thói quen.", "真正难的不是知道道理，而是改变习惯。", "Zhēnzhèng nán de bú shì zhīdào dàoli, érshì gǎibiàn xíguàn.", "Điều thực sự khó không phải là biết lý lẽ, mà là thay đổi thói quen."),
      vocab("资源", "zīyuán", "nguồn lực, tài nguyên", "danh từ", "Từ khóa môi trường thường gặp.", "资源有限，所以更需要珍惜。", "Zīyuán yǒuxiàn, suǒyǐ gèng xūyào zhēnxī.", "Nguồn lực có hạn nên càng cần được trân trọng."),
      vocab("影响", "yǐngxiǎng", "ảnh hưởng", "động từ/danh từ", "Nối hành vi nhỏ với kết quả lớn.", "一个小习惯，长期下来也会产生明显影响。", "Yí ge xiǎo xíguàn, chángqī xiàlai yě huì chǎnshēng míngxiǎn yǐngxiǎng.", "Một thói quen nhỏ nếu kéo dài cũng sẽ tạo ra ảnh hưởng rõ rệt.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Bảo vệ môi trường không phải chuyện xa xôi.", [
        study("A: 一提到环保，很多人就觉得离自己很远。", "A: Yì tídào huánbǎo, hěn duō rén jiù juéde lí zìjǐ hěn yuǎn.", "A: Vừa nhắc đến bảo vệ môi trường là nhiều người thấy rất xa vời với bản thân."),
        study("B: 其实不远，像节约水电、少用一次性用品，就是很现实的做法。", "B: Qíshí bù yuǎn, xiàng jiéyuē shuǐdiàn, shǎo yòng yícìxìng yòngpǐn, jiùshì hěn xiànshí de zuòfǎ.", "B: Thật ra không xa, như tiết kiệm nước điện hay dùng ít đồ một lần chính là cách làm rất thực tế."),
        study("A: 原来环保可以从身边的小事开始。", "A: Yuánlái huánbǎo kěyǐ cóng shēnbiān de xiǎo shì kāishǐ.", "A: Ra là bảo vệ môi trường có thể bắt đầu từ những việc nhỏ quanh mình.")
      ]),
      dialogueBlock("Tình huống 2", "Phân loại rác.", [
        study("A: 你觉得垃圾分类麻烦吗？", "A: Nǐ juéde lājī fēnlèi máfan ma?", "A: Bạn thấy phân loại rác có phiền không?"),
        study("B: 刚开始会觉得麻烦，但养成习惯以后就自然了。", "B: Gāng kāishǐ huì juéde máfan, dàn yǎngchéng xíguàn yǐhòu jiù zìrán le.", "B: Ban đầu sẽ thấy phiền, nhưng sau khi hình thành thói quen thì sẽ thấy tự nhiên."),
        study("A: 而且前面分得清楚，后面处理也更方便。", "A: Érqiě qiánmiàn fēn de qīngchu, hòumiàn chǔlǐ yě gèng fāngbiàn.", "A: Hơn nữa phía trước phân rõ thì phía sau xử lý cũng tiện hơn.")
      ]),
      dialogueBlock("Tình huống 3", "Thay đổi thói quen khó ở đâu.", [
        study("A: 我发现大家都知道环保重要，可是真正做到的人不多。", "A: Wǒ fāxiàn dàjiā dōu zhīdào huánbǎo zhòngyào, kěshì zhēnzhèng zuòdào de rén bù duō.", "A: Tôi nhận ra ai cũng biết bảo vệ môi trường quan trọng, nhưng người thật sự làm được lại không nhiều."),
        study("B: 因为真正难的不是懂道理，而是改变习惯。", "B: Yīnwèi zhēnzhèng nán de bú shì dǒng dàoli, érshì gǎibiàn xíguàn.", "B: Vì điều khó thật sự không phải là hiểu đạo lý, mà là thay đổi thói quen."),
        study("A: 所以环保这件事，最后还是回到每天怎么生活。", "A: Suǒyǐ huánbǎo zhè jiàn shì, zuìhòu háishi huídào měitiān zěnme shēnghuó.", "A: Vì vậy chuyện bảo vệ môi trường cuối cùng vẫn quay lại cách ta sống mỗi ngày.")
      ]),
      dialogueBlock("Tình huống 4", "Việc nhỏ có tác động lớn.", [
        study("A: 小习惯真的能有什么大影响吗？", "A: Xiǎo xíguàn zhēn de néng yǒu shénme dà yǐngxiǎng ma?", "A: Thói quen nhỏ thật sự có thể tạo ra ảnh hưởng lớn gì sao?"),
        study("B: 一个人看起来不明显，但如果很多人都坚持，就会很不一样。", "B: Yí ge rén kàn qǐlai bù míngxiǎn, dàn rúguǒ hěn duō rén dōu jiānchí, jiù huì hěn bù yíyàng.", "B: Một người thì có vẻ không rõ, nhưng nếu nhiều người đều kiên trì thì sẽ rất khác."),
        study("A: 对，环保最怕的不是做得少，而是根本不开始。", "A: Duì, huánbǎo zuì pà de bú shì zuò de shǎo, érshì gēnběn bù kāishǐ.", "A: Đúng, điều bảo vệ môi trường sợ nhất không phải là làm ít, mà là hoàn toàn không bắt đầu.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 其实……就是…… / 从……开始", "Dùng để kéo một khái niệm lớn về gần với hành động cụ thể.", study("节约水电，其实就是最直接的环保。", "Jiéyuē shuǐdiàn, qíshí jiùshì zuì zhíjiē de huánbǎo.", "Tiết kiệm nước điện thật ra chính là bảo vệ môi trường trực tiếp nhất."), [
        study("环保可以从身边的小事开始。", "Huánbǎo kěyǐ cóng shēnbiān de xiǎo shì kāishǐ.", "Bảo vệ môi trường có thể bắt đầu từ những việc nhỏ quanh mình."),
        study("减少一次性用品，其实就是在减少浪费。", "Jiǎnshǎo yícìxìng yòngpǐn, qíshí jiùshì zài jiǎnshǎo làngfèi.", "Giảm đồ dùng một lần thực ra chính là đang giảm lãng phí."),
        study("改变环境，往往要从改变习惯开始。", "Gǎibiàn huánjìng, wǎngwǎng yào cóng gǎibiàn xíguàn kāishǐ.", "Thay đổi môi trường thường phải bắt đầu từ thay đổi thói quen.")
      ]),
      grammarNote("2. 不是……而是…… / 如果……就……", "Một mẫu nêu trọng điểm thật, một mẫu chỉ quan hệ điều kiện trong thay đổi hành vi.", study("真正难的不是知道道理，而是改变习惯。", "Zhēnzhèng nán de bú shì zhīdào dàoli, érshì gǎibiàn xíguàn.", "Điều thực sự khó không phải là biết đạo lý, mà là thay đổi thói quen."), [
        study("如果很多人都坚持，小习惯也会产生明显影响。", "Rúguǒ hěn duō rén dōu jiānchí, xiǎo xíguàn yě huì chǎnshēng míngxiǎn yǐngxiǎng.", "Nếu nhiều người đều kiên trì thì thói quen nhỏ cũng sẽ tạo ra ảnh hưởng rõ rệt."),
        study("环保最怕的不是做得少，而是根本不开始。", "Huánbǎo zuì pà de bú shì zuò de shǎo, érshì gēnběn bù kāishǐ.", "Điều bảo vệ môi trường sợ nhất không phải là làm ít, mà là hoàn toàn không bắt đầu."),
        study("如果分类做得清楚，后面的处理就会更容易。", "Rúguǒ fēnlèi zuò de qīngchu, hòumiàn de chǔlǐ jiù huì gèng róngyì.", "Nếu phân loại làm rõ ràng thì việc xử lý về sau sẽ dễ hơn.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 分类", "2. 节约", "3. 一次性"], options: ["a. dùng một lần", "b. phân loại", "c. tiết kiệm"], answer: "1-b, 2-c, 3-a" }],
      [{ question: "Điền từ thích hợp.", prompt: ["很多城市已经开始强调垃圾分___。", "真正难的不是知道道理，而是改变习___。", "一个小习惯，长期下来也会产生明显影___。"], answer: "类 / 惯 / 响" }],
      [{ question: "Câu nào đúng?", options: ["A. 真正难的不是知道道理，而是改变习惯。", "B. 真正难的不是改变习惯，而是知道道理。", "C. 不是真正难的知道道理，而是改变习惯。"], answer: "A. 真正难的不是知道道理，而是改变习惯。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 你觉得垃圾分类麻烦吗？", "B: ____________", "A: 而且前面分得清楚，后面处理也更方便。"], answer: "B: 刚开始会觉得麻烦，但养成习惯以后就自然了。" }],
      "Tự kiểm tra: bạn có thể nêu 3 hành động bảo vệ môi trường có thể làm ngay trong sinh hoạt hằng ngày không?"
    ),
    quickSummary: {
      words: ["环保", "垃圾", "分类", "节约", "习惯", "影响"],
      patterns: ["环保可以从身边的小事开始。", "真正难的不是知道道理，而是改变习惯。"],
      reminder: "Bài này cần nói cụ thể, gần đời sống, tránh nói về môi trường một cách quá to tát."
    }
  },
  33: {
    objective: "Phân tích ùn tắc giao thông và những giải pháp quản lý đô thị, nhấn vào góc nhìn hệ thống thay vì chỉ đổ lỗi cho một phía.",
    vocabulary: [
      vocab("缓解", "huǎnjiě", "giảm bớt", "động từ", "Hay dùng khi nói áp lực giao thông.", "很多城市都在寻找办法缓解交通压力。", "Hěn duō chéngshì dōu zài xúnzhǎo bànfǎ huǎnjiě jiāotōng yālì.", "Nhiều thành phố đều đang tìm cách giảm bớt áp lực giao thông."),
      vocab("交通", "jiāotōng", "giao thông", "danh từ", "Từ chủ đề trung tâm.", "交通问题往往和城市发展速度有关。", "Jiāotōng wèntí wǎngwǎng hé chéngshì fāzhǎn sùdù yǒuguān.", "Vấn đề giao thông thường liên quan đến tốc độ phát triển của thành phố."),
      vocab("拥堵", "yōngdǔ", "ùn tắc", "danh từ/tính từ", "Đi cùng 交通 rất thường xuyên.", "上下班高峰时段最容易出现交通拥堵。", "Shàngxiàbān gāofēng shíduàn zuì róngyì chūxiàn jiāotōng yōngdǔ.", "Khung giờ cao điểm đi làm về là lúc dễ xuất hiện ùn tắc giao thông nhất."),
      vocab("高峰", "gāofēng", "cao điểm", "danh từ", "Chỉ khoảng thời gian áp lực giao thông lớn nhất.", "如果高峰期大家都开车，堵车就很难避免。", "Rúguǒ gāofēngqī dàjiā dōu kāichē, dǔchē jiù hěn nán bìmiǎn.", "Nếu giờ cao điểm ai cũng lái xe thì tắc đường sẽ khó tránh."),
      vocab("措施", "cuòshī", "biện pháp", "danh từ", "Từ quan trọng khi nói giải pháp chính sách.", "只抱怨没有用，更重要的是拿出有效措施。", "Zhǐ bàoyuàn méiyǒu yòng, gèng zhòngyào de shì náchū yǒuxiào cuòshī.", "Chỉ than phiền thì vô ích, quan trọng hơn là đưa ra biện pháp hiệu quả."),
      vocab("公共交通", "gōnggòng jiāotōng", "giao thông công cộng", "danh từ", "Giải pháp thường được nhấn mạnh trong bài.", "公共交通越方便，私家车压力就越小。", "Gōnggòng jiāotōng yuè fāngbiàn, sījiāchē yālì jiù yuè xiǎo.", "Giao thông công cộng càng tiện thì áp lực xe cá nhân càng nhỏ."),
      vocab("效率", "xiàolǜ", "hiệu quả", "danh từ", "Dùng khi nói vận hành cả hệ thống.", "交通管理不能只看数量，还要看运行效率。", "Jiāotōng guǎnlǐ bùnéng zhǐ kàn shùliàng, hái yào kàn yùnxíng xiàolǜ.", "Quản lý giao thông không thể chỉ nhìn số lượng, mà còn phải nhìn hiệu quả vận hành."),
      vocab("限制", "xiànzhì", "hạn chế", "động từ/danh từ", "Một số chính sách sẽ dùng cách này.", "有时候，适当限制比一味修路更有效。", "Yǒushíhou, shìdàng xiànzhì bǐ yíwèi xiūlù gèng yǒuxiào.", "Có lúc hạn chế thích hợp còn hiệu quả hơn việc chỉ chăm chăm làm thêm đường.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Ùn tắc không chỉ do xe nhiều.", [
        study("A: 交通一堵，很多人第一反应就是‘车太多了’。", "A: Jiāotōng yì dǔ, hěn duō rén dìyī fǎnyìng jiùshì ‘chē tài duō le’.", "A: Hễ giao thông tắc là phản ứng đầu tiên của nhiều người là 'xe quá nhiều rồi'."),
        study("B: 车多当然是原因之一，但不是唯一原因。", "B: Chē duō dāngrán shì yuányīn zhī yī, dàn bú shì wéiyī yuányīn.", "B: Xe nhiều đương nhiên là một nguyên nhân, nhưng không phải nguyên nhân duy nhất."),
        study("A: 对，路线设计、管理效率、出行习惯都会影响结果。", "A: Duì, lùxiàn shèjì, guǎnlǐ xiàolǜ, chūxíng xíguàn dōu huì yǐngxiǎng jiéguǒ.", "A: Đúng, thiết kế tuyến đường, hiệu quả quản lý và thói quen di chuyển đều ảnh hưởng đến kết quả.")
      ]),
      dialogueBlock("Tình huống 2", "Công cộng hay cá nhân.", [
        study("A: 为什么很多城市都在大力发展公共交通？", "A: Wèishénme hěn duō chéngshì dōu zài dàlì fāzhǎn gōnggòng jiāotōng?", "A: Vì sao nhiều thành phố đều đang phát triển mạnh giao thông công cộng?"),
        study("B: 因为公共交通越方便，越能分散高峰期的压力。", "B: Yīnwèi gōnggòng jiāotōng yuè fāngbiàn, yuè néng fēnsàn gāofēngqī de yālì.", "B: Vì giao thông công cộng càng tiện thì càng có thể phân tán áp lực giờ cao điểm."),
        study("A: 如果每个人都自己开车，道路再宽也不够。", "A: Rúguǒ měi ge rén dōu zìjǐ kāichē, dàolù zài kuān yě bù gòu.", "A: Nếu ai cũng tự lái xe thì đường có rộng hơn nữa cũng không đủ.")
      ]),
      dialogueBlock("Tình huống 3", "Giải pháp không thể chỉ là làm đường.", [
        study("A: 那是不是多修路就能解决堵车？", "A: Nà shì bú shì duō xiū lù jiù néng jiějué dǔchē?", "A: Vậy có phải xây thêm nhiều đường là có thể giải quyết tắc đường không?"),
        study("B: 不一定，有时候适当限制比一味修路更有效。", "B: Bù yídìng, yǒushíhou shìdàng xiànzhì bǐ yíwèi xiū lù gèng yǒuxiào.", "B: Chưa chắc, có lúc hạn chế thích hợp còn hiệu quả hơn việc chỉ chăm chăm làm đường."),
        study("A: 原来治理交通，关键是让整个系统更合理。", "A: Yuánlái zhìlǐ jiāotōng, guānjiàn shì ràng zhěngge xìtǒng gèng hélǐ.", "A: Ra là quản lý giao thông, mấu chốt là khiến cả hệ thống hợp lý hơn.")
      ]),
      dialogueBlock("Tình huống 4", "Từ than phiền sang giải pháp.", [
        study("A: 面对堵车，大家最爱做的就是抱怨。", "A: Miànduì dǔchē, dàjiā zuì ài zuò de jiùshì bàoyuàn.", "A: Đối mặt với tắc đường, việc mà mọi người thích làm nhất là than phiền."),
        study("B: 只抱怨没有用，更重要的是找到真正有效的措施。", "B: Zhǐ bàoyuàn méiyǒu yòng, gèng zhòngyào de shì zhǎodào zhēnzhèng yǒuxiào de cuòshī.", "B: Chỉ than phiền thì vô ích, quan trọng hơn là tìm ra biện pháp thật sự hiệu quả."),
        study("A: 对，城市问题越复杂，越需要整体思考。", "A: Duì, chéngshì wèntí yuè fùzá, yuè xūyào zhěngtǐ sīkǎo.", "A: Đúng, vấn đề đô thị càng phức tạp thì càng cần suy nghĩ tổng thể.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 不仅……还…… / 如果……再……也……", "Dùng để mở rộng số lượng nguyên nhân và nhấn giới hạn của cách nghĩ đơn giản.", study("交通问题不仅和车多有关，还和管理效率有关。", "Jiāotōng wèntí bùjǐn hé chē duō yǒuguān, hái hé guǎnlǐ xiàolǜ yǒuguān.", "Vấn đề giao thông không chỉ liên quan đến việc xe nhiều mà còn liên quan đến hiệu quả quản lý."), [
        study("如果每个人都自己开车，道路再宽也不够。", "Rúguǒ měi ge rén dōu zìjǐ kāichē, dàolù zài kuān yě bù gòu.", "Nếu ai cũng tự lái xe thì đường có rộng hơn nữa cũng không đủ."),
        study("拥堵不仅出现在高峰期，还会影响整个城市节奏。", "Yōngdǔ bùjǐn chūxiàn zài gāofēngqī, hái huì yǐngxiǎng zhěngge chéngshì jiézòu.", "Ùn tắc không chỉ xuất hiện vào giờ cao điểm mà còn ảnh hưởng đến nhịp độ của cả thành phố."),
        study("如果管理效率低，措施再多也难见效果。", "Rúguǒ guǎnlǐ xiàolǜ dī, cuòshī zài duō yě nán jiàn xiàoguǒ.", "Nếu hiệu quả quản lý thấp thì có nhiều biện pháp hơn nữa cũng khó thấy hiệu quả.")
      ]),
      grammarNote("2. 不一定…… / 越……越……", "Phù hợp với kiểu lập luận chính sách và xu hướng hệ thống.", study("不一定多修路就能解决堵车。", "Bù yídìng duō xiū lù jiù néng jiějué dǔchē.", "Chưa chắc xây thêm nhiều đường là có thể giải quyết tắc đường."), [
        study("公共交通越方便，私家车压力就越小。", "Gōnggòng jiāotōng yuè fāngbiàn, sījiāchē yālì jiù yuè xiǎo.", "Giao thông công cộng càng tiện thì áp lực xe cá nhân càng nhỏ."),
        study("城市问题越复杂，越需要整体思考。", "Chéngshì wèntí yuè fùzá, yuè xūyào zhěngtǐ sīkǎo.", "Vấn đề đô thị càng phức tạp thì càng cần suy nghĩ tổng thể."),
        study("道路越堵，大家越能感受到管理的重要。", "Dàolù yuè dǔ, dàjiā yuè néng gǎnshòu dào guǎnlǐ de zhòngyào.", "Đường càng tắc thì mọi người càng cảm nhận được tầm quan trọng của quản lý.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 缓解", "2. 拥堵", "3. 措施"], options: ["a. biện pháp", "b. giảm bớt", "c. ùn tắc"], answer: "1-b, 2-c, 3-a" }],
      [{ question: "Điền từ thích hợp.", prompt: ["很多城市都在寻找办法缓___交通压力。", "上下班高___时段最容易出现交通拥堵。", "有时候，适当限___比一味修路更有效。"], answer: "解 / 峰 / 制" }],
      [{ question: "Câu nào đúng?", options: ["A. 公共交通越方便，私家车压力就越小。", "B. 私家车压力越小，公共交通就越方便。", "C. 越方便公共交通，越小私家车压力。"], answer: "A. 公共交通越方便，私家车压力就越小。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 那是不是多修路就能解决堵车？", "B: ____________", "A: 原来治理交通，关键是让整个系统更合理。"], answer: "B: 不一定，有时候适当限制比一味修路更有效。" }],
      "Tự kiểm tra: bạn có thể nói 2 nguyên nhân gây ùn tắc và 2 cách giảm ùn tắc không?"
    ),
    quickSummary: {
      words: ["缓解", "交通", "拥堵", "措施", "公共交通", "限制"],
      patterns: ["如果每个人都自己开车，道路再宽也不够。", "公共交通越方便，私家车压力就越小。"],
      reminder: "Bài này cần giữ góc nhìn hệ thống, tránh đổ nguyên nhân về một phía."
    }
  },
  34: {
    objective: "Giới thiệu cách loài chim chăm sóc bộ lông của mình và qua đó rèn cách miêu tả hiện tượng sinh học bằng tiếng Trung ở mức HSK 5.",
    vocabulary: [
      vocab("护肤", "hùfū", "chăm sóc da", "động từ/danh từ", "Ở đây dùng ẩn dụ vui khi nói về chim.", "文章用‘护肤术’这个说法，让科学内容变得更生动。", "Wénzhāng yòng ‘hùfū shù’ zhège shuōfǎ, ràng kēxué nèiróng biàn de gèng shēngdòng.", "Bài viết dùng cách gọi 'thuật chăm sóc da' khiến nội dung khoa học trở nên sinh động hơn."),
      vocab("羽毛", "yǔmáo", "lông vũ", "danh từ", "Từ trung tâm của bài.", "羽毛不仅关系到外表，还关系到飞行和保温。", "Yǔmáo bùjǐn guānxì dào wàibiǎo, hái guānxì dào fēixíng hé bǎowēn.", "Lông vũ không chỉ liên quan đến bề ngoài mà còn liên quan đến bay và giữ ấm."),
      vocab("清理", "qīnglǐ", "làm sạch, dọn sạch", "động từ", "Hay dùng cho việc tự làm sạch cơ thể.", "鸟儿会花很多时间清理自己的羽毛。", "Niǎor huì huā hěn duō shíjiān qīnglǐ zìjǐ de yǔmáo.", "Chim sẽ dành nhiều thời gian làm sạch lông của mình."),
      vocab("分泌", "fēnmì", "tiết ra", "động từ", "Từ sinh học rất hay gặp.", "有些鸟会利用腺体分泌的油脂保护羽毛。", "Yǒuxiē niǎo huì lìyòng xiàntǐ fēnmì de yóuzhī bǎohù yǔmáo.", "Có loài chim sẽ dùng chất dầu do tuyến tiết ra để bảo vệ lông."),
      vocab("油脂", "yóuzhī", "chất dầu", "danh từ", "Liên quan đến bảo vệ và chống nước.", "适量的油脂能让羽毛更顺，也更防水。", "Shìliàng de yóuzhī néng ràng yǔmáo gèng shùn, yě gèng fángshuǐ.", "Một lượng dầu thích hợp có thể khiến lông mượt hơn và cũng chống nước hơn."),
      vocab("保护", "bǎohù", "bảo vệ", "động từ", "Từ then chốt kết nối hiện tượng và chức năng.", "它们整理羽毛，其实是在保护身体。", "Tāmen zhěnglǐ yǔmáo, qíshí shì zài bǎohù shēntǐ.", "Chúng chỉnh lại lông thật ra là đang bảo vệ cơ thể."),
      vocab("功能", "gōngnéng", "chức năng", "danh từ", "Giúp miêu tả tác dụng sinh học rõ ràng hơn.", "羽毛的功能远远不只是好看。", "Yǔmáo de gōngnéng yuǎnyuǎn bù zhǐshì hǎokàn.", "Chức năng của lông vũ hoàn toàn không chỉ là đẹp."),
      vocab("观察", "guānchá", "quan sát", "động từ/danh từ", "Kỹ năng quan trọng với bài khoa học kiểu này.", "只要认真观察，就会发现自然界里处处有学问。", "Zhǐyào rènzhēn guānchá, jiù huì fāxiàn zìránjiè lǐ chùchù yǒu xuéwèn.", "Chỉ cần quan sát nghiêm túc thì sẽ phát hiện trong giới tự nhiên đâu đâu cũng có tri thức.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Vì sao chim mất nhiều thời gian chỉnh lông.", [
        study("A: 我以前一直以为鸟整理羽毛只是为了好看。", "A: Wǒ yǐqián yìzhí yǐwéi niǎo zhěnglǐ yǔmáo zhǐshì wèile hǎokàn.", "A: Trước đây tôi cứ nghĩ chim chỉnh lông chỉ là để đẹp."),
        study("B: 其实不只是这样，羽毛关系到保温、飞行和防水。", "B: Qíshí bú zhǐshì zhèyàng, yǔmáo guānxì dào bǎowēn, fēixíng hé fángshuǐ.", "B: Thật ra không chỉ như vậy, lông liên quan đến giữ ấm, bay và chống nước."),
        study("A: 原来整理羽毛是很重要的日常工作。", "A: Yuánlái zhěnglǐ yǔmáo shì hěn zhòngyào de rìcháng gōngzuò.", "A: Ra là chỉnh lông là công việc hằng ngày rất quan trọng.")
      ]),
      dialogueBlock("Tình huống 2", "Cách chim bảo vệ lông.", [
        study("A: 那鸟儿怎么让羽毛保持状态呢？", "A: Nà niǎor zěnme ràng yǔmáo bǎochí zhuàngtài ne?", "A: Vậy chim làm thế nào để giữ lông ở trạng thái tốt?"),
        study("B: 有些鸟会利用腺体分泌的油脂，把羽毛整理得更顺。", "B: Yǒuxiē niǎo huì lìyòng xiàntǐ fēnmì de yóuzhī, bǎ yǔmáo zhěnglǐ de gèng shùn.", "B: Có loài chim dùng chất dầu do tuyến tiết ra để chỉnh lông mượt hơn."),
        study("A: 这么看，它们像是在给自己做护理。", "A: Zhème kàn, tāmen xiàng shì zài gěi zìjǐ zuò hùlǐ.", "A: Nhìn vậy thì chúng giống như đang tự chăm sóc cho mình.")
      ]),
      dialogueBlock("Tình huống 3", "Quan sát tự nhiên.", [
        study("A: 科学知识是不是都得从实验室里来？", "A: Kēxué zhīshi shì bú shì dōu děi cóng shíyànshì lǐ lái?", "A: Kiến thức khoa học có phải đều phải đến từ phòng thí nghiệm không?"),
        study("B: 不一定，很多时候认真观察自然，也能发现很多规律。", "B: Bù yídìng, hěn duō shíhou rènzhēn guānchá zìrán, yě néng fāxiàn hěn duō guīlǜ.", "B: Chưa chắc, nhiều khi quan sát thiên nhiên nghiêm túc cũng có thể phát hiện rất nhiều quy luật."),
        study("A: 这样说来，身边的小动物也是很好的老师。", "A: Zhèyàng shuōlái, shēnbiān de xiǎo dòngwù yě shì hěn hǎo de lǎoshī.", "A: Nói vậy thì những con vật nhỏ xung quanh cũng là những người thầy rất tốt.")
      ]),
      dialogueBlock("Tình huống 4", "Đổi cách nhìn về tự nhiên.", [
        study("A: 一篇看起来轻松的文章，为什么也能让人学到很多？", "A: Yì piān kàn qǐlai qīngsōng de wénzhāng, wèishénme yě néng ràng rén xué dào hěn duō?", "A: Một bài viết có vẻ nhẹ nhàng sao cũng có thể khiến người ta học được nhiều như vậy?"),
        study("B: 因为它把复杂知识说得很生活化，让人更容易记住。", "B: Yīnwèi tā bǎ fùzá zhīshi shuō de hěn shēnghuóhuà, ràng rén gèng róngyì jìzhù.", "B: Vì nó diễn đạt tri thức phức tạp theo cách rất đời sống khiến người ta dễ nhớ hơn."),
        study("A: 对，科学如果说得清楚，就会离人很近。", "A: Duì, kēxué rúguǒ shuō de qīngchu, jiù huì lí rén hěn jìn.", "A: Đúng, khoa học nếu được nói rõ ràng thì sẽ rất gần gũi với con người.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 不只是……还…… / 把……得……", "Một mẫu dùng để mở rộng chức năng, một mẫu miêu tả cách xử lý cụ thể.", study("羽毛不仅关系到外表，还关系到飞行和保温。", "Yǔmáo bùjǐn guānxì dào wàibiǎo, hái guānxì dào fēixíng hé bǎowēn.", "Lông vũ không chỉ liên quan đến bề ngoài mà còn liên quan đến bay và giữ ấm."), [
        study("有些鸟会把羽毛整理得更顺。", "Yǒuxiē niǎo huì bǎ yǔmáo zhěnglǐ de gèng shùn.", "Có loài chim sẽ chỉnh lông mượt hơn."),
        study("羽毛的功能远远不只是好看。", "Yǔmáo de gōngnéng yuǎnyuǎn bù zhǐshì hǎokàn.", "Chức năng của lông vũ hoàn toàn không chỉ là đẹp."),
        study("它们把身体照顾得很仔细。", "Tāmen bǎ shēntǐ zhàogù de hěn zǐxì.", "Chúng chăm sóc cơ thể rất cẩn thận.")
      ]),
      grammarNote("2. 不一定……也能…… / 如果……就……", "Phù hợp với kiểu giải thích khoa học nhẹ nhàng, gần gũi.", study("很多时候认真观察自然，也能发现很多规律。", "Hěn duō shíhou rènzhēn guānchá zìrán, yě néng fāxiàn hěn duō guīlǜ.", "Nhiều khi quan sát thiên nhiên nghiêm túc cũng có thể phát hiện rất nhiều quy luật."), [
        study("科学知识不一定都得从实验室里来。", "Kēxué zhīshi bù yídìng dōu děi cóng shíyànshì lǐ lái.", "Kiến thức khoa học chưa chắc đều phải đến từ phòng thí nghiệm."),
        study("如果说得清楚，复杂知识也会变得容易理解。", "Rúguǒ shuō de qīngchu, fùzá zhīshi yě huì biàn de róngyì lǐjiě.", "Nếu nói rõ ràng thì tri thức phức tạp cũng sẽ trở nên dễ hiểu."),
        study("如果愿意观察，生活里到处都有值得学习的东西。", "Rúguǒ yuànyì guānchá, shēnghuó lǐ dàochù dōu yǒu zhídé xuéxí de dōngxi.", "Nếu sẵn lòng quan sát thì trong đời sống ở đâu cũng có thứ đáng học.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 羽毛", "2. 分泌", "3. 观察"], options: ["a. quan sát", "b. lông vũ", "c. tiết ra"], answer: "1-b, 2-c, 3-a" }],
      [{ question: "Điền từ thích hợp.", prompt: ["鸟儿会花很多时间清___自己的羽毛。", "适量的油___能让羽毛更顺。", "只要认真观___，就会发现自然界里处处有学问。"], answer: "理 / 脂 / 察" }],
      [{ question: "Câu nào đúng?", options: ["A. 羽毛不仅关系到外表，还关系到飞行和保温。", "B. 羽毛不仅关系到飞行，还关系到外表和保温。", "C. 外表不仅关系到羽毛，还关系到飞行和保温。"], answer: "A. 羽毛不仅关系到外表，还关系到飞行和保温。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 科学知识是不是都得从实验室里来？", "B: ____________", "A: 这样说来，身边的小动物也是很好的老师。"], answer: "B: 不一定，很多时候认真观察自然，也能发现很多规律。" }],
      "Tự kiểm tra: bạn có thể nói 2 chức năng của lông chim ngoài việc 'đẹp' không?"
    ),
    quickSummary: {
      words: ["羽毛", "清理", "分泌", "保护", "功能", "观察"],
      patterns: ["羽毛不仅关系到外表，还关系到飞行和保温。", "很多时候认真观察自然，也能发现很多规律。"],
      reminder: "Bài này nên giữ giọng khoa học dễ hiểu, có tính quan sát đời sống."
    }
  },
  35: {
    objective: "Giải thích hiện tượng thực vật 'đổ mồ hôi' theo cách phổ thông, giúp người học nói về khoa học tự nhiên bằng câu rõ ràng và logic hơn.",
    vocabulary: [
      vocab("植物", "zhíwù", "thực vật", "danh từ", "Chủ đề chính của bài.", "植物虽然不会说话，但它们一直在和环境发生关系。", "Zhíwù suīrán bú huì shuōhuà, dàn tāmen yìzhí zài hé huánjìng fāshēng guānxì.", "Thực vật tuy không biết nói nhưng chúng luôn có mối liên hệ với môi trường."),
      vocab("出汗", "chūhàn", "đổ mồ hôi", "động từ", "Ở đây là cách nói gần gũi để giải thích hiện tượng sinh học.", "文章说植物也会‘出汗’，是为了帮助人理解复杂现象。", "Wénzhāng shuō zhíwù yě huì ‘chūhàn’, shì wèile bāngzhù rén lǐjiě fùzá xiànxiàng.", "Bài viết nói thực vật cũng 'đổ mồ hôi' là để giúp người ta hiểu hiện tượng phức tạp."),
      vocab("水分", "shuǐfèn", "nước, độ ẩm", "danh từ", "Khái niệm quan trọng trong bài khoa học này.", "植物会通过叶子释放一部分水分。", "Zhíwù huì tōngguò yèzi shìfàng yí bùfen shuǐfèn.", "Thực vật sẽ giải phóng một phần nước thông qua lá."),
      vocab("叶子", "yèzi", "lá", "danh từ", "Bộ phận được nhắc nhiều trong bài.", "很多变化看起来发生在叶子上，其实和整株植物有关。", "Hěn duō biànhuà kàn qǐlai fāshēng zài yèzi shàng, qíshí hé zhěng zhū zhíwù yǒuguān.", "Nhiều thay đổi nhìn như xảy ra ở lá nhưng thực ra liên quan đến cả cây."),
      vocab("蒸发", "zhēngfā", "bốc hơi", "động từ/danh từ", "Giúp giải thích nước rời khỏi bề mặt lá.", "水分从叶子表面蒸发出去，是一种自然过程。", "Shuǐfèn cóng yèzi biǎomiàn zhēngfā chūqu, shì yì zhǒng zìrán guòchéng.", "Nước bốc hơi ra từ bề mặt lá là một quá trình tự nhiên."),
      vocab("调节", "tiáojié", "điều tiết", "động từ", "Liên kết hiện tượng với chức năng.", "植物这样做，也是为了调节自身状态。", "Zhíwù zhèyàng zuò, yě shì wèile tiáojié zìshēn zhuàngtài.", "Thực vật làm như vậy cũng là để điều tiết trạng thái của chính mình."),
      vocab("温度", "wēndù", "nhiệt độ", "danh từ", "Liên hệ giữa cây và môi trường.", "水分的蒸发会帮助植物调节温度。", "Shuǐfèn de zhēngfā huì bāngzhù zhíwù tiáojié wēndù.", "Sự bốc hơi của nước sẽ giúp thực vật điều tiết nhiệt độ."),
      vocab("过程", "guòchéng", "quá trình", "danh từ", "Giúp diễn đạt khoa học ổn hơn.", "理解科学问题，常常要先看清它的过程。", "Lǐjiě kēxué wèntí, chángcháng yào xiān kàn qīng tā de guòchéng.", "Để hiểu vấn đề khoa học, thường phải nhìn rõ quá trình của nó trước.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Thực vật cũng 'đổ mồ hôi'.", [
        study("A: 你听过‘植物会出汗’这种说法吗？", "A: Nǐ tīngguo ‘zhíwù huì chūhàn’ zhè zhǒng shuōfǎ ma?", "A: Bạn từng nghe cách nói 'thực vật biết đổ mồ hôi' chưa?"),
        study("B: 听过，一开始我也觉得很奇怪。", "B: Tīngguo, yì kāishǐ wǒ yě juéde hěn qíguài.", "B: Rồi, lúc đầu tôi cũng thấy rất lạ."),
        study("A: 后来才知道，这是一种帮助人理解的说法。", "A: Hòulái cái zhīdào, zhè shì yì zhǒng bāngzhù rén lǐjiě de shuōfǎ.", "A: Sau này mới biết đây là một cách nói giúp người ta dễ hiểu.")
      ]),
      dialogueBlock("Tình huống 2", "Nước đi ra khỏi lá bằng cách nào.", [
        study("A: 那植物的‘出汗’到底指什么？", "A: Nà zhíwù de ‘chūhàn’ dàodǐ zhǐ shénme?", "A: Vậy 'đổ mồ hôi' của thực vật rốt cuộc chỉ điều gì?"),
        study("B: 指的是水分通过叶子慢慢蒸发出去。", "B: Zhǐ de shì shuǐfèn tōngguò yèzi mànmàn zhēngfā chūqu.", "B: Chỉ việc nước từ từ bốc hơi ra ngoài thông qua lá."),
        study("A: 原来它并不是像人那样流汗。", "A: Yuánlái tā bìng bú shì xiàng rén nàyyàng liúhàn.", "A: Ra là nó hoàn toàn không phải chảy mồ hôi như con người.")
      ]),
      dialogueBlock("Tình huống 3", "Tác dụng của hiện tượng này.", [
        study("A: 那这种过程有什么作用？", "A: Nà zhè zhǒng guòchéng yǒu shénme zuòyòng?", "A: Vậy quá trình này có tác dụng gì?"),
        study("B: 它能帮助植物调节温度，也和吸收、运输水分有关。", "B: Tā néng bāngzhù zhíwù tiáojié wēndù, yě hé xīshōu, yùnshū shuǐfèn yǒuguān.", "B: Nó có thể giúp thực vật điều tiết nhiệt độ, đồng thời liên quan đến hấp thụ và vận chuyển nước."),
        study("A: 看来一个简单现象，背后其实有很多功能。", "A: Kànlái yí ge jiǎndān xiànxiàng, bèihòu qíshí yǒu hěn duō gōngnéng.", "A: Xem ra một hiện tượng đơn giản mà đằng sau thật ra có rất nhiều chức năng.")
      ]),
      dialogueBlock("Tình huống 4", "Giải thích khoa học theo cách gần gũi.", [
        study("A: 为什么科学文章喜欢用‘植物会出汗’这种说法？", "A: Wèishénme kēxué wénzhāng xǐhuan yòng ‘zhíwù huì chūhàn’ zhè zhǒng shuōfǎ?", "A: Vì sao bài viết khoa học thích dùng cách nói 'thực vật biết đổ mồ hôi'?"),
        study("B: 因为这样更容易把抽象过程讲清楚。", "B: Yīnwèi zhèyàng gèng róngyì bǎ chōuxiàng guòchéng jiǎng qīngchu.", "B: Vì như vậy dễ diễn giải rõ quá trình trừu tượng hơn."),
        study("A: 对，把复杂知识说简单，本身就是一种能力。", "A: Duì, bǎ fùzá zhīshi shuō jiǎndān, běnshēn jiùshì yì zhǒng nénglì.", "A: Đúng, nói kiến thức phức tạp cho đơn giản bản thân nó đã là một loại năng lực.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 指的是…… / 并不是……那样……", "Phù hợp khi giải thích một khái niệm khoa học bằng ngôn ngữ đời thường.", study("植物的‘出汗’指的是水分通过叶子慢慢蒸发出去。", "Zhíwù de ‘chūhàn’ zhǐ de shì shuǐfèn tōngguò yèzi mànmàn zhēngfā chūqu.", "Cái gọi là 'đổ mồ hôi' của thực vật chỉ việc nước từ từ bốc hơi ra ngoài thông qua lá."), [
        study("它并不是像人那样流汗。", "Tā bìng bú shì xiàng rén nàyyàng liúhàn.", "Nó hoàn toàn không phải chảy mồ hôi như con người."),
        study("这里说的‘出汗’，其实是一种形象表达。", "Zhèlǐ shuō de ‘chūhàn’, qíshí shì yì zhǒng xíngxiàng biǎodá.", "Cái gọi là 'đổ mồ hôi' ở đây thực ra là một cách diễn đạt hình tượng."),
        study("文章说的重点，指的是植物和水分之间的关系。", "Wénzhāng shuō de zhòngdiǎn, zhǐ de shì zhíwù hé shuǐfèn zhījiān de guānxì.", "Trọng điểm mà bài viết muốn nói chỉ mối quan hệ giữa thực vật và nước.")
      ]),
      grammarNote("2. 能帮助……也和……有关 / 把……讲清楚", "Một mẫu nối chức năng, một mẫu nhấn cách trình bày khoa học rõ ràng.", study("它能帮助植物调节温度，也和吸收、运输水分有关。", "Tā néng bāngzhù zhíwù tiáojié wēndù, yě hé xīshōu, yùnshū shuǐfèn yǒuguān.", "Nó có thể giúp thực vật điều tiết nhiệt độ, đồng thời liên quan đến hấp thụ và vận chuyển nước."), [
        study("这样说更容易把抽象过程讲清楚。", "Zhèyàng shuō gèng róngyì bǎ chōuxiàng guòchéng jiǎng qīngchu.", "Nói như vậy dễ diễn giải rõ quá trình trừu tượng hơn."),
        study("一个自然现象往往也和很多条件有关。", "Yí ge zìrán xiànxiàng wǎngwǎng yě hé hěn duō tiáojiàn yǒuguān.", "Một hiện tượng tự nhiên thường cũng liên quan đến nhiều điều kiện."),
        study("理解科学问题，常常要把过程看清楚。", "Lǐjiě kēxué wèntí, chángcháng yào bǎ guòchéng kàn qīngchu.", "Để hiểu vấn đề khoa học, thường phải nhìn rõ quá trình.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 水分", "2. 蒸发", "3. 调节"], options: ["a. điều tiết", "b. bốc hơi", "c. nước, độ ẩm"], answer: "1-c, 2-b, 3-a" }],
      [{ question: "Điền từ thích hợp.", prompt: ["植物会通过叶子释___一部分水分。", "水分从叶子表面蒸___出去。", "理解科学问题，常常要先看清它的过___。"], answer: "放 / 发 / 程" }],
      [{ question: "Câu nào đúng?", options: ["A. 植物的‘出汗’指的是水分通过叶子慢慢蒸发出去。", "B. 植物的‘出汗’指的是叶子通过水分慢慢蒸发出去。", "C. 水分的‘出汗’指的是植物通过叶子慢慢蒸发出去。"], answer: "A. 植物的‘出汗’指的是水分通过叶子慢慢蒸发出去。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 那这种过程有什么作用？", "B: ____________", "A: 看来一个简单现象，背后其实有很多功能。"], answer: "B: 它能帮助植物调节温度，也和吸收、运输水分有关。" }],
      "Tự kiểm tra: bạn có thể giải thích ngắn gọn vì sao bài viết dùng cách nói '植物会出汗' không?"
    ),
    quickSummary: {
      words: ["植物", "水分", "叶子", "蒸发", "调节", "过程"],
      patterns: ["植物的‘出汗’指的是水分通过叶子慢慢蒸发出去。", "这样说更容易把抽象过程讲清楚。"],
      reminder: "Bài này cần giải thích khoa học bằng ngôn ngữ đơn giản nhưng vẫn chính xác."
    }
  },
  36: {
    objective: "Giới thiệu mối liên hệ giữa nhà văn Lão Xá và thú trồng hoa, qua đó luyện cách đọc hiểu văn học gần gũi với đời sống và nói về niềm vui thanh nhã.",
    vocabulary: [
      vocab("养花", "yǎng huā", "trồng/chăm hoa", "động từ", "Hoạt động trung tâm của bài.", "对有些人来说，养花不仅是爱好，也是一种生活态度。", "Duì yǒuxiē rén lái shuō, yǎng huā bùjǐn shì àihào, yě shì yì zhǒng shēnghuó tàidu.", "Đối với một số người, trồng hoa không chỉ là sở thích mà còn là một thái độ sống."),
      vocab("作家", "zuòjiā", "nhà văn", "danh từ", "Dùng để giới thiệu Lão Xá như một người viết văn.", "很多作家的生活兴趣，也能反映他们的性格。", "Hěn duō zuòjiā de shēnghuó xìngqù, yě néng fǎnyìng tāmen de xìnggé.", "Sở thích đời sống của nhiều nhà văn cũng có thể phản ánh tính cách của họ."),
      vocab("乐趣", "lèqù", "niềm vui, thú vị", "danh từ", "Bài này nhấn niềm vui không quá ồn ào nhưng rất sâu.", "养花的乐趣，往往藏在每天细小的照顾里。", "Yǎng huā de lèqù, wǎngwǎng cáng zài měitiān xìxiǎo de zhàogù lǐ.", "Niềm vui của việc trồng hoa thường ẩn trong sự chăm sóc nhỏ nhặt mỗi ngày."),
      vocab("照顾", "zhàogù", "chăm sóc", "động từ", "Đi với cây cối, con người, cuộc sống.", "花虽然不会说话，但也需要人细心照顾。", "Huā suīrán bú huì shuōhuà, dàn yě xūyào rén xìxīn zhàogù.", "Hoa tuy không biết nói nhưng cũng cần con người chăm sóc cẩn thận."),
      vocab("耐心", "nàixīn", "kiên nhẫn", "danh từ/tính từ", "Trồng hoa cần thời gian chứ không thể gấp.", "没有耐心的人，很难真正体会养花的过程。", "Méiyǒu nàixīn de rén, hěn nán zhēnzhèng tǐhuì yǎng huā de guòchéng.", "Người không có kiên nhẫn rất khó thật sự cảm nhận quá trình trồng hoa."),
      vocab("收获", "shōuhuò", "thu hoạch; thu nhận", "danh từ/động từ", "Không chỉ là hoa nở mà còn là tâm trạng.", "养花带来的收获，有时候不只是花开。", "Yǎng huā dàilái de shōuhuò, yǒushíhou bù zhǐshì huā kāi.", "Thành quả mà việc trồng hoa mang lại đôi khi không chỉ là hoa nở."),
      vocab("性格", "xìnggé", "tính cách", "danh từ", "Kết nối thú vui với con người.", "一个人的爱好，常常能看出他的性格。", "Yí ge rén de àihào, chángcháng néng kàn chū tā de xìnggé.", "Sở thích của một người thường có thể nhìn ra tính cách của họ."),
      vocab("平静", "píngjìng", "bình tĩnh, yên bình", "tính từ", "Bài này nói niềm vui sống chậm và yên ổn.", "在忙碌生活里，养花能给人一种平静。", "Zài mánglù shēnghuó lǐ, yǎng huā néng gěi rén yì zhǒng píngjìng.", "Trong đời sống bận rộn, trồng hoa có thể mang lại cho con người một sự yên bình.")
    ],
    dialogueBlocks: [
      dialogueBlock("Tình huống 1", "Nhà văn và thú trồng hoa.", [
        study("A: 你觉得一个作家的爱好重要吗？", "A: Nǐ juéde yí ge zuòjiā de àihào zhòngyào ma?", "A: Bạn thấy sở thích của một nhà văn có quan trọng không?"),
        study("B: 重要，因为爱好常常能让我们看见他的另一面。", "B: Zhòngyào, yīnwèi àihào chángcháng néng ràng wǒmen kànjiàn tā de lìng yí miàn.", "B: Quan trọng, vì sở thích thường khiến chúng ta nhìn thấy một mặt khác của họ."),
        study("A: 像老舍喜欢养花，就让人感觉他离生活很近。", "A: Xiàng Lǎo Shě xǐhuan yǎng huā, jiù ràng rén gǎnjué tā lí shēnghuó hěn jìn.", "A: Như Lão Xá thích trồng hoa khiến người ta cảm thấy ông rất gần gũi với đời sống.")
      ]),
      dialogueBlock("Tình huống 2", "Trồng hoa cần điều gì.", [
        study("A: 养花看起来轻松，其实容易吗？", "A: Yǎng huā kàn qǐlai qīngsōng, qíshí róngyì ma?", "A: Trồng hoa nhìn có vẻ nhẹ nhàng, thật ra có dễ không?"),
        study("B: 不一定，花虽然安静，但也需要耐心和细心。", "B: Bù yídìng, huā suīrán ānjìng, dàn yě xūyào nàixīn hé xìxīn.", "B: Chưa chắc, hoa tuy yên lặng nhưng cũng cần sự kiên nhẫn và tỉ mỉ."),
        study("A: 所以照顾花，其实也是在磨自己的性子。", "A: Suǒyǐ zhàogù huā, qíshí yě shì zài mó zìjǐ de xìngzi.", "A: Vì vậy chăm hoa thực ra cũng là đang mài giũa tính nết của chính mình.")
      ]),
      dialogueBlock("Tình huống 3", "Niềm vui của thú chăm hoa.", [
        study("A: 那养花最大的乐趣是什么？", "A: Nà yǎng huā zuì dà de lèqù shì shénme?", "A: Vậy niềm vui lớn nhất của trồng hoa là gì?"),
        study("B: 我觉得不只是等它开花，而是看着它一点一点长大。", "B: Wǒ juéde bù zhǐshì děng tā kāihuā, érshì kànzhe tā yì diǎn yì diǎn zhǎng dà.", "B: Tôi thấy không chỉ là chờ nó nở hoa, mà là nhìn nó lớn lên từng chút một."),
        study("A: 这样说来，收获其实早就在过程里了。", "A: Zhèyàng shuōlái, shōuhuò qíshí zǎo jiù zài guòchéng lǐ le.", "A: Nói vậy thì thành quả thật ra đã nằm trong quá trình từ sớm rồi.")
      ]),
      dialogueBlock("Tình huống 4", "Thú vui tao nhã trong đời sống nhanh.", [
        study("A: 现在生活这么快，为什么还有人喜欢养花？", "A: Xiànzài shēnghuó zhème kuài, wèishénme hái yǒu rén xǐhuan yǎng huā?", "A: Cuộc sống bây giờ nhanh như thế, vì sao vẫn có người thích trồng hoa?"),
        study("B: 因为它能让人慢下来，也能让心里更平静。", "B: Yīnwèi tā néng ràng rén màn xiàlai, yě néng ràng xīnli gèng píngjìng.", "B: Vì nó có thể khiến con người chậm lại, đồng thời làm lòng mình yên bình hơn."),
        study("A: 也许这正是很多人重新喜欢自然生活的原因。", "A: Yěxǔ zhè zhèng shì hěn duō rén chóngxīn xǐhuan zìrán shēnghuó de yuányīn.", "A: Có lẽ đây chính là lý do nhiều người lại yêu thích đời sống tự nhiên.")
      ])
    ],
    grammarNotes: [
      grammarNote("1. 不仅……也…… / 虽然……但……", "Phù hợp khi miêu tả một sở thích vừa cụ thể vừa mang ý nghĩa tinh thần.", study("对有些人来说，养花不仅是爱好，也是一种生活态度。", "Duì yǒuxiē rén lái shuō, yǎng huā bùjǐn shì àihào, yě shì yì zhǒng shēnghuó tàidu.", "Đối với một số người, trồng hoa không chỉ là sở thích mà còn là một thái độ sống."), [
        study("花虽然不会说话，但也需要人细心照顾。", "Huā suīrán bú huì shuōhuà, dàn yě xūyào rén xìxīn zhàogù.", "Hoa tuy không biết nói nhưng cũng cần con người chăm sóc cẩn thận."),
        study("作家的爱好不仅能反映生活，也能反映性格。", "Zuòjiā de àihào bùjǐn néng fǎnyìng shēnghuó, yě néng fǎnyìng xìnggé.", "Sở thích của nhà văn không chỉ phản ánh đời sống mà còn phản ánh tính cách."),
        study("生活虽然很忙，但人还是需要一点平静。", "Shēnghuó suīrán hěn máng, dàn rén háishi xūyào yì diǎn píngjìng.", "Cuộc sống tuy rất bận nhưng con người vẫn cần một chút yên bình.")
      ]),
      grammarNote("2. 不只是……而是…… / 看着……", "Dùng để nêu giá trị thực của quá trình trồng hoa và cảm giác kéo dài theo thời gian.", study("养花的乐趣，不只是等它开花，而是看着它一点一点长大。", "Yǎng huā de lèqù, bù zhǐshì děng tā kāihuā, érshì kànzhe tā yì diǎn yì diǎn zhǎng dà.", "Niềm vui của việc trồng hoa không chỉ là chờ nó nở mà là nhìn nó lớn lên từng chút một."), [
        study("收获有时候不只是结果，而是过程里的变化。", "Shōuhuò yǒushíhou bù zhǐshì jiéguǒ, érshì guòchéng lǐ de biànhuà.", "Thành quả đôi khi không chỉ là kết quả mà còn là sự thay đổi trong quá trình."),
        study("看着花慢慢长大，人也会变得更有耐心。", "Kànzhe huā mànmàn zhǎng dà, rén yě huì biàn de gèng yǒu nàixīn.", "Nhìn hoa lớn dần, con người cũng sẽ trở nên kiên nhẫn hơn."),
        study("照顾植物，不只是照顾它们，也是整理自己的心情。", "Zhàogù zhíwù, bù zhǐshì zhàogù tāmen, yě shì zhěnglǐ zìjǐ de xīnqíng.", "Chăm cây không chỉ là chăm chúng mà cũng là sắp xếp lại tâm trạng của mình.")
      ])
    ],
    studyExercises: buildExercises(
      [{ question: "Nối từ với nghĩa đúng.", prompt: ["1. 养花", "2. 乐趣", "3. 平静"], options: ["a. niềm vui", "b. yên bình", "c. trồng/chăm hoa"], answer: "1-c, 2-a, 3-b" }],
      [{ question: "Điền từ thích hợp.", prompt: ["花虽然不会说话，但也需要人细心照___。", "没有耐心的人，很难真正体会养花的过___。", "在忙碌生活里，养花能给人一种平___。"], answer: "顾 / 程 / 静" }],
      [{ question: "Câu nào đúng?", options: ["A. 养花的乐趣，不只是等它开花，而是看着它一点一点长大。", "B. 养花的乐趣，而是看着它一点一点长大，不只是等它开花。", "C. 不只是养花的乐趣等它开花，而是看着它一点一点长大。"], answer: "A. 养花的乐趣，不只是等它开花，而是看着它一点一点长大。" }],
      [{ question: "Hoàn thành hội thoại.", prompt: ["A: 现在生活这么快，为什么还有人喜欢养花？", "B: ____________", "A: 也许这正是很多人重新喜欢自然生活的原因。"], answer: "B: 因为它能让人慢下来，也能让心里更平静。" }],
      "Tự kiểm tra: bạn có thể nói 2 điều mà việc chăm hoa mang lại ngoài việc hoa nở không?"
    ),
    quickSummary: {
      words: ["养花", "乐趣", "照顾", "耐心", "收获", "平静"],
      patterns: ["养花不仅是爱好，也是一种生活态度。", "养花的乐趣，不只是等它开花，而是看着它一点一点长大。"],
      reminder: "Bài này cần giữ nhịp văn nhẹ, gần văn học và giàu cảm nhận đời sống."
    }
  }
};

const hsk5VocabularySupplements = {
  1: [
    vocab("细节", "xìjié", "chi tiết", "danh từ", "Nhấn vào những điều nhỏ nhưng có ý nghĩa trong tình cảm.", "真正打动人的，往往不是大事，而是细节。", "Zhēnzhèng dǎdòng rén de, wǎngwǎng bú shì dàshì, érshì xìjié.", "Thứ thật sự làm người ta cảm động thường không phải chuyện lớn mà là chi tiết nhỏ."),
    vocab("关心", "guānxīn", "quan tâm", "động từ/danh từ", "Từ cơ bản để nói về sự để ý đến người khác.", "细心的关心比空话更有力量。", "Xìxīn de guānxīn bǐ kōnghuà gèng yǒu lìliang.", "Sự quan tâm tinh tế có sức mạnh hơn lời nói suông."),
    vocab("陪伴", "péibàn", "đồng hành, ở bên", "động từ/danh từ", "Hay dùng trong bài về tình cảm và gia đình.", "长久的陪伴常常比热闹的表达更重要。", "Chángjiǔ de péibàn chángcháng bǐ rènào de biǎodá gèng zhòngyào.", "Sự đồng hành lâu dài thường quan trọng hơn biểu đạt ồn ào."),
    vocab("表达", "biǎodá", "biểu đạt", "động từ/danh từ", "Dùng khi nói cách bày tỏ tình cảm.", "爱如果不懂得表达，别人不一定能感受到。", "Ài rúguǒ bù dǒngde biǎodá, biérén bù yídìng néng gǎnshòu dào.", "Nếu tình yêu không biết cách biểu đạt thì người khác chưa chắc cảm nhận được.")
  ],
  2: [
    vocab("钥匙", "yàoshi", "chìa khóa", "danh từ", "Vật nhỏ nhưng gắn với sự tin tưởng và an tâm.", "把钥匙留给父母，是一种很实际的关心。", "Bǎ yàoshi liú gěi fùmǔ, shì yì zhǒng hěn shíjì de guānxīn.", "Để chìa khóa lại cho cha mẹ là một sự quan tâm rất thực tế."),
    vocab("父母", "fùmǔ", "cha mẹ", "danh từ", "Từ trọng tâm của bài.", "很多人长大以后，才慢慢理解父母的需要。", "Hěn duō rén zhǎngdà yǐhòu, cái mànmàn lǐjiě fùmǔ de xūyào.", "Nhiều người sau khi trưởng thành mới dần hiểu nhu cầu của cha mẹ."),
    vocab("放心", "fàngxīn", "yên tâm", "động từ/tính từ", "Hay dùng trong giao tiếp gia đình.", "让父母放心，本身就是一种责任。", "Ràng fùmǔ fàngxīn, běnshēn jiùshì yì zhǒng zérèn.", "Khiến cha mẹ yên tâm bản thân nó đã là một trách nhiệm."),
    vocab("照应", "zhàoyìng", "trông nom, lo liệu", "động từ", "Dùng khi nói chăm lo lẫn nhau trong gia đình.", "家人之间能互相照应，生活就会稳定很多。", "Jiārén zhījiān néng hùxiāng zhàoyìng, shēnghuó jiù huì wěndìng hěn duō.", "Người trong gia đình có thể chăm lo lẫn nhau thì cuộc sống sẽ ổn định hơn nhiều.")
  ],
  3: [
    vocab("选择", "xuǎnzé", "lựa chọn", "danh từ/động từ", "Khái niệm trung tâm khi nói về hướng đi cuộc đời.", "人生的很多变化，都从一次选择开始。", "Rénshēng de hěn duō biànhuà, dōu cóng yí cì xuǎnzé kāishǐ.", "Nhiều thay đổi của cuộc đời đều bắt đầu từ một lựa chọn."),
    vocab("改变", "gǎibiàn", "thay đổi", "động từ/danh từ", "Đi cùng suy nghĩ, hoàn cảnh và tương lai.", "只要方向对，任何时候开始改变都不晚。", "Zhǐyào fāngxiàng duì, rènhé shíhou kāishǐ gǎibiàn dōu bù wǎn.", "Chỉ cần hướng đúng thì bắt đầu thay đổi lúc nào cũng không muộn."),
    vocab("方向", "fāngxiàng", "phương hướng", "danh từ", "Dùng để nói mục tiêu và con đường.", "努力之前先看清方向，会少走很多弯路。", "Nǔlì zhīqián xiān kàn qīng fāngxiàng, huì shǎo zǒu hěn duō wānlù.", "Trước khi nỗ lực mà nhìn rõ phương hướng thì sẽ bớt đi nhiều đường vòng."),
    vocab("重新", "chóngxīn", "một lần nữa, lại", "phó từ", "Hay dùng khi nói bắt đầu lại.", "人有时候需要勇气，才能重新选择自己的生活。", "Rén yǒushíhou xūyào yǒngqì, cáinéng chóngxīn xuǎnzé zìjǐ de shēnghuó.", "Con người đôi khi cần dũng khí mới có thể chọn lại cuộc sống của mình.")
  ],
  4: [
    vocab("背", "bēi", "cõng, mang trên lưng", "động từ", "Từ gắn trực tiếp với điển tích của bài.", "他小时候常常帮家里背东西。", "Tā xiǎoshíhou chángcháng bāng jiāli bēi dōngxi.", "Hồi nhỏ anh ấy thường giúp gia đình cõng đồ."),
    vocab("孝顺", "xiàoshùn", "hiếu thảo", "tính từ/động từ", "Khái niệm văn hóa quan trọng.", "真正的孝顺，不只是说好听的话。", "Zhēnzhèng de xiàoshùn, bù zhǐshì shuō hǎotīng de huà.", "Hiếu thảo thật sự không chỉ là nói lời dễ nghe."),
    vocab("辛苦", "xīnkǔ", "vất vả", "tính từ/động từ", "Dùng để nói công sức và sự chịu đựng.", "为了家人辛苦一点，有时候也是值得的。", "Wèile jiārén xīnkǔ yìdiǎn, yǒushíhou yě shì zhídé de.", "Vì gia đình mà vất vả hơn một chút đôi khi cũng là đáng."),
    vocab("坚持", "jiānchí", "kiên trì", "động từ", "Giúp nối đạo hiếu với hành động lâu dài.", "真正打动人的，往往是长期的坚持。", "Zhēnzhèng dǎdòng rén de, wǎngwǎng shì chángqī de jiānchí.", "Thứ thật sự làm người ta cảm động thường là sự kiên trì lâu dài.")
  ],
  5: [
    vocab("泉水", "quánshuǐ", "nước suối", "danh từ", "Từ then chốt của bài về Tế Nam.", "济南最让人难忘的，就是城里的泉水。", "Jǐnán zuì ràng rén nánwàng de, jiùshì chéng lǐ de quánshuǐ.", "Thứ khiến người ta khó quên nhất ở Tế Nam chính là nước suối trong thành phố."),
    vocab("清澈", "qīngchè", "trong veo", "tính từ", "Miêu tả nước hoặc ánh mắt rất tự nhiên.", "泉水清澈见底，给人很安静的感觉。", "Quánshuǐ qīngchè jiàn dǐ, gěi rén hěn ānjìng de gǎnjué.", "Nước suối trong veo nhìn thấu đáy, mang lại cảm giác rất yên tĩnh."),
    vocab("景色", "jǐngsè", "phong cảnh", "danh từ", "Dùng để tả vẻ đẹp thành phố.", "一个城市的景色，常常和它的气质有关。", "Yí ge chéngshì de jǐngsè, chángcháng hé tā de qìzhì yǒuguān.", "Phong cảnh của một thành phố thường liên quan đến khí chất của nó."),
    vocab("城市", "chéngshì", "thành phố", "danh từ", "Từ nền tảng cho bài văn hóa địa phương.", "有些城市是靠高楼让人记住的，有些城市是靠水。", "Yǒuxiē chéngshì shì kào gāolóu ràng rén jìzhù de, yǒuxiē chéngshì shì kào shuǐ.", "Có thành phố khiến người ta nhớ nhờ nhà cao tầng, có thành phố nhờ nước.")
  ],
  6: [
    vocab("除夕", "Chúxī", "đêm giao thừa", "danh từ", "Từ chủ đề của bài phong tục.", "除夕是很多家庭一年中最重视的晚上。", "Chúxī shì hěn duō jiātíng yì nián zhōng zuì zhòngshì de wǎnshang.", "Đêm giao thừa là buổi tối được nhiều gia đình coi trọng nhất trong năm."),
    vocab("由来", "yóulái", "nguồn gốc", "danh từ", "Thường dùng khi giải thích phong tục hoặc tên gọi.", "了解节日的由来，会让传统更有意思。", "Liǎojiě jiérì de yóulái, huì ràng chuántǒng gèng yǒuyìsi.", "Hiểu nguồn gốc ngày lễ sẽ khiến truyền thống thú vị hơn."),
    vocab("传说", "chuánshuō", "truyền thuyết", "danh từ", "Hay xuất hiện trong bài kể nguồn gốc phong tục.", "很多节日背后，都有流传很久的传说。", "Hěn duō jiérì bèihòu, dōu yǒu liúchuán hěn jiǔ de chuánshuō.", "Đằng sau nhiều ngày lễ đều có những truyền thuyết lưu truyền rất lâu."),
    vocab("团圆", "tuányuán", "đoàn viên", "động từ/danh từ", "Nói về sum họp gia đình.", "过年最重要的意义之一，就是一家人团圆。", "Guònián zuì zhòngyào de yìyì zhī yī, jiùshì yì jiā rén tuányuán.", "Một trong những ý nghĩa quan trọng nhất của năm mới là cả gia đình đoàn tụ.")
  ],
  7: [
    vocab("成语", "chéngyǔ", "thành ngữ", "danh từ", "Nền tảng của bài.", "很多成语背后，都藏着完整的故事。", "Hěn duō chéngyǔ bèihòu, dōu cángzhe wánzhěng de gùshi.", "Đằng sau nhiều thành ngữ đều ẩn một câu chuyện hoàn chỉnh."),
    vocab("故事", "gùshi", "câu chuyện", "danh từ", "Dùng để nối ngôn ngữ với hoàn cảnh hình thành.", "把成语放回故事里，意思就更容易懂了。", "Bǎ chéngyǔ fàng huí gùshi lǐ, yìsi jiù gèng róngyì dǒng le.", "Đặt thành ngữ trở lại câu chuyện thì nghĩa sẽ dễ hiểu hơn."),
    vocab("启发", "qǐfā", "gợi mở, khơi gợi", "động từ/danh từ", "Dùng khi nói điều rút ra sau câu chuyện.", "好的故事不仅好听，还能给人启发。", "Hǎo de gùshi bùjǐn hǎotīng, hái néng gěi rén qǐfā.", "Câu chuyện hay không chỉ dễ nghe mà còn có thể cho người ta gợi mở."),
    vocab("道理", "dàoli", "đạo lý, lẽ phải", "danh từ", "Từ quen thuộc trong bài học rút ra.", "成语故事常常用很短的话讲很深的道理。", "Chéngyǔ gùshi chángcháng yòng hěn duǎn de huà jiǎng hěn shēn de dàoli.", "Câu chuyện thành ngữ thường dùng lời rất ngắn để nói đạo lý rất sâu.")
  ],
  8: [
    vocab("古今", "gǔjīn", "xưa và nay", "danh từ", "Dùng để so sánh nghĩa cũ và nghĩa mới.", "这个词的古今意义并不完全一样。", "Zhège cí de gǔjīn yìyì bìng bù wánquán yíyàng.", "Nghĩa xưa và nay của từ này không hoàn toàn giống nhau."),
    vocab("意义", "yìyì", "ý nghĩa", "danh từ", "Từ học thuật cơ bản khi nói ngôn ngữ.", "一个词的意义会随着时代发生变化。", "Yí ge cí de yìyì huì suízhe shídài fāshēng biànhuà.", "Ý nghĩa của một từ sẽ thay đổi theo thời đại."),
    vocab("变化", "biànhuà", "thay đổi", "danh từ/động từ", "Dùng để nói về phát triển ngôn ngữ.", "语言的变化往往反映社会的变化。", "Yǔyán de biànhuà wǎngwǎng fǎnyìng shèhuì de biànhuà.", "Sự thay đổi của ngôn ngữ thường phản ánh sự thay đổi của xã hội."),
    vocab("语言", "yǔyán", "ngôn ngữ", "danh từ", "Chủ đề bao quát của bài.", "研究语言，不只是研究词语本身。", "Yánjiū yǔyán, bù zhǐshì yánjiū cíyǔ běnshēn.", "Nghiên cứu ngôn ngữ không chỉ là nghiên cứu bản thân từ ngữ.")
  ],
  9: [
    vocab("作家", "zuòjiā", "nhà văn", "danh từ", "Khái niệm nền cho bài về Lỗ Tấn.", "鲁迅不仅是作家，也是一个时代的思想者。", "Lǔ Xùn bùjǐn shì zuòjiā, yě shì yí ge shídài de sīxiǎngzhě.", "Lỗ Tấn không chỉ là nhà văn mà còn là một nhà tư tưởng của một thời đại."),
    vocab("作品", "zuòpǐn", "tác phẩm", "danh từ", "Dùng khi nói về di sản văn học.", "理解一个作家，不能只看一两篇作品。", "Lǐjiě yí ge zuòjiā, bùnéng zhǐ kàn yì liǎng piān zuòpǐn.", "Để hiểu một nhà văn thì không thể chỉ nhìn một hai tác phẩm."),
    vocab("时代", "shídài", "thời đại", "danh từ", "Kết nối nhà văn với bối cảnh xã hội.", "一个作家往往离不开他所处的时代。", "Yí ge zuòjiā wǎngwǎng lí bù kāi tā suǒ chǔ de shídài.", "Một nhà văn thường không tách rời thời đại mà mình sống."),
    vocab("深刻", "shēnkè", "sâu sắc", "tính từ", "Hay dùng để đánh giá góc nhìn và tư tưởng.", "真正深刻的文字，常常让人读完以后还会继续想。", "Zhēnzhèng shēnkè de wénzì, chángcháng ràng rén dú wán yǐhòu hái huì jìxù xiǎng.", "Những lời văn thật sự sâu sắc thường khiến người ta đọc xong vẫn còn nghĩ tiếp.")
  ],
  10: [
    vocab("争论", "zhēnglùn", "tranh luận", "danh từ/động từ", "Từ trung tâm của bài.", "有时候，一场好的争论比一个标准答案更有价值。", "Yǒushíhou, yì chǎng hǎo de zhēnglùn bǐ yí ge biāozhǔn dá'àn gèng yǒu jiàzhí.", "Đôi khi một cuộc tranh luận hay còn có giá trị hơn một đáp án chuẩn."),
    vocab("观点", "guāndiǎn", "quan điểm", "danh từ", "Dùng khi trình bày và phản biện ý kiến.", "表达观点的时候，逻辑比情绪更重要。", "Biǎodá guāndiǎn de shíhou, luójí bǐ qíngxù gèng zhòngyào.", "Khi trình bày quan điểm thì logic quan trọng hơn cảm xúc."),
    vocab("说服", "shuōfú", "thuyết phục", "động từ", "Liên quan trực tiếp đến hiệu quả tranh luận.", "真正能说服人的，不是声音大，而是理由充分。", "Zhēnzhèng néng shuōfú rén de, bú shì shēngyīn dà, érshì lǐyóu chōngfèn.", "Thứ thật sự có thể thuyết phục người khác không phải là nói to mà là lý do đầy đủ."),
    vocab("奇迹", "qíjì", "kỳ tích", "danh từ", "Trong bài mang nghĩa kết quả bất ngờ từ đối thoại.", "有些变化看起来像奇迹，其实来自长期沟通。", "Yǒuxiē biànhuà kàn qǐlai xiàng qíjì, qíshí láizì chángqī gōutōng.", "Có những thay đổi nhìn như kỳ tích nhưng thật ra đến từ giao tiếp lâu dài.")
  ],
  11: [
    vocab("闹钟", "nàozhōng", "đồng hồ báo thức", "danh từ", "Từ chủ đề chính.", "很多人一天的开始，都是被闹钟叫醒的。", "Hěn duō rén yì tiān de kāishǐ, dōu shì bèi nàozhōng jiàoxǐng de.", "Khởi đầu một ngày của nhiều người đều là bị đồng hồ báo thức đánh thức."),
    vocab("睡眠", "shuìmián", "giấc ngủ", "danh từ", "Liên quan trực tiếp đến sức khỏe.", "长期缺少高质量睡眠，会影响人的状态。", "Chángqī quēshǎo gāo zhìliàng shuìmián, huì yǐngxiǎng rén de zhuàngtài.", "Thiếu giấc ngủ chất lượng cao trong thời gian dài sẽ ảnh hưởng đến trạng thái của con người."),
    vocab("危害", "wēihài", "tác hại", "danh từ/động từ", "Dùng khi phân tích thói quen xấu.", "很多习惯的危害，不会马上表现出来。", "Hěn duō xíguàn de wēihài, bú huì mǎshàng biǎoxiàn chūlai.", "Tác hại của nhiều thói quen sẽ không biểu hiện ra ngay lập tức."),
    vocab("生物钟", "shēngwùzhōng", "đồng hồ sinh học", "danh từ", "Từ quan trọng trong bài về nhịp sống cơ thể.", "如果总被打断，生物钟就容易变乱。", "Rúguǒ zǒng bèi dǎduàn, shēngwùzhōng jiù róngyì biàn luàn.", "Nếu liên tục bị gián đoạn thì đồng hồ sinh học sẽ dễ bị rối.")
  ],
  12: [
    vocab("海外", "hǎiwài", "hải ngoại, ở nước ngoài", "danh từ/tính từ", "Hay dùng khi nói người dùng ở ngoài Trung Quốc.", "很多海外用户通过微信和家人保持联系。", "Hěn duō hǎiwài yònghù tōngguò Wēixìn hé jiārén bǎochí liánxì.", "Nhiều người dùng ở nước ngoài giữ liên lạc với gia đình qua WeChat."),
    vocab("用户", "yònghù", "người dùng", "danh từ", "Từ công nghệ rất phổ biến.", "一个产品为什么受欢迎，往往要看用户真正需要什么。", "Yí ge chǎnpǐn wèishénme shòu huānyíng, wǎngwǎng yào kàn yònghù zhēnzhèng xūyào shénme.", "Một sản phẩm vì sao được ưa chuộng thường phải xem người dùng thực sự cần gì."),
    vocab("功能", "gōngnéng", "tính năng, chức năng", "danh từ", "Hay đi với APP và thiết bị số.", "只有功能方便，用户才愿意长期使用。", "Zhǐyǒu gōngnéng fāngbiàn, yònghù cái yuànyì chángqī shǐyòng.", "Chỉ khi tính năng thuận tiện thì người dùng mới sẵn lòng sử dụng lâu dài."),
    vocab("沟通", "gōutōng", "giao tiếp, trao đổi", "động từ/danh từ", "Mục đích cốt lõi của các ứng dụng nhắn tin.", "技术变化再快，沟通的需要始终不会减少。", "Jìshù biànhuà zài kuài, gōutōng de xūyào shǐzhōng bú huì jiǎnshǎo.", "Dù công nghệ thay đổi nhanh đến đâu thì nhu cầu giao tiếp vẫn không giảm.")
  ],
  13: [
    vocab("比喻", "bǐyù", "ẩn dụ, ví von", "danh từ/động từ", "Bài này dùng hình ảnh để nói áp lực sống.", "好的比喻能把复杂的心理说得很直观。", "Hǎo de bǐyù néng bǎ fùzá de xīnlǐ shuō de hěn zhíguān.", "Ẩn dụ hay có thể diễn tả tâm lý phức tạp một cách rất trực quan."),
    vocab("负担", "fùdān", "gánh nặng", "danh từ/động từ", "Hay đi với 心理 hoặc 生活.", "有些负担不是来自事情多，而是来自想得太多。", "Yǒuxiē fùdān bú shì láizì shìqing duō, érshì láizì xiǎng de tài duō.", "Có những gánh nặng không đến từ nhiều việc mà đến từ nghĩ quá nhiều."),
    vocab("减掉", "jiǎndiào", "cắt bỏ, bớt đi", "động từ", "Phù hợp với hình ảnh 'cưa bỏ đáy giỏ'.", "如果不学会减掉没必要的东西，人就会越来越累。", "Rúguǒ bù xuéhuì jiǎndiào méi bìyào de dōngxi, rén jiù huì yuèláiyuè lèi.", "Nếu không học cách bớt đi những thứ không cần thiết thì con người sẽ càng ngày càng mệt."),
    vocab("压力", "yālì", "áp lực", "danh từ", "Từ trục của bài.", "很多时候，压力不是不能承受，而是没有整理。", "Hěn duō shíhou, yālì bú shì bùnéng chéngshòu, érshì méiyǒu zhěnglǐ.", "Nhiều khi áp lực không phải không thể chịu được mà là chưa được sắp xếp lại.")
  ],
  14: [
    vocab("四合院", "sìhéyuàn", "tứ hợp viện", "danh từ", "Từ khóa trực tiếp của bài.", "四合院不仅是一种建筑，也是一种生活方式。", "Sìhéyuàn bùjǐn shì yì zhǒng jiànzhù, yě shì yì zhǒng shēnghuó fāngshì.", "Tứ hợp viện không chỉ là một kiểu kiến trúc mà còn là một cách sống."),
    vocab("胡同", "hútòng", "ngõ nhỏ Bắc Kinh", "danh từ", "Liên hệ chặt với không gian sống truyền thống.", "老北京的胡同里，藏着很多城市记忆。", "Lǎo Běijīng de hútòng lǐ, cángzhe hěn duō chéngshì jìyì.", "Trong những con ngõ cũ của Bắc Kinh ẩn chứa nhiều ký ức đô thị."),
    vocab("院子", "yuànzi", "sân, khoảng sân", "danh từ", "Dùng để tả không gian ở truyền thống.", "有院子的生活，常常让人更容易感到安静。", "Yǒu yuànzi de shēnghuó, chángcháng ràng rén gèng róngyì gǎndào ānjìng.", "Cuộc sống có sân thường khiến người ta dễ cảm thấy yên tĩnh hơn."),
    vocab("传统", "chuántǒng", "truyền thống", "danh từ/tính từ", "Khái niệm bao quát trong bài kiến trúc văn hóa.", "真正的传统，不只是被保存，还要被理解。", "Zhēnzhèng de chuántǒng, bù zhǐshì bèi bǎocún, hái yào bèi lǐjiě.", "Truyền thống thật sự không chỉ được gìn giữ mà còn phải được hiểu.")
  ],
  15: [
    vocab("理论", "lǐlùn", "lý thuyết", "danh từ", "Đối lập với thực tế trong bài.", "没有实践支持的理论，很容易离生活越来越远。", "Méiyǒu shíjiàn zhīchí de lǐlùn, hěn róngyì lí shēnghuó yuèláiyuè yuǎn.", "Lý thuyết không có thực tiễn hỗ trợ rất dễ ngày càng xa rời đời sống."),
    vocab("实践", "shíjiàn", "thực tiễn, thực hành", "danh từ/động từ", "Là điểm kiểm chứng của hiểu biết.", "很多事情只有放到实践里，才能看出问题。", "Hěn duō shìqing zhǐyǒu fàng dào shíjiàn lǐ, cáinéng kàn chū wèntí.", "Nhiều việc chỉ khi đặt vào thực tiễn mới nhìn ra vấn đề."),
    vocab("空谈", "kōngtán", "nói suông", "danh từ/động từ", "Liên hệ trực tiếp với thành ngữ của bài.", "如果只有计划没有行动，最后就容易变成空谈。", "Rúguǒ zhǐyǒu jìhuà méiyǒu xíngdòng, zuìhòu jiù róngyì biànchéng kōngtán.", "Nếu chỉ có kế hoạch mà không có hành động thì cuối cùng dễ biến thành nói suông."),
    vocab("经验", "jīngyàn", "kinh nghiệm", "danh từ", "Dùng để nối với phán đoán thực tế.", "经验不是天生有的，而是在做事中慢慢积累的。", "Jīngyàn bú shì tiānshēng yǒu de, érshì zài zuò shì zhōng mànmàn jīlěi de.", "Kinh nghiệm không phải tự nhiên mà có, mà được tích lũy dần trong quá trình làm việc.")
  ],
  16: [
    vocab("体重", "tǐzhòng", "cân nặng", "danh từ", "Từ khóa của bài sức khỏe.", "很多人一提到体重，首先想到的就是节食。", "Hěn duō rén yì tídào tǐzhòng, shǒuxiān xiǎngdào de jiùshì jiéshí.", "Nhiều người vừa nhắc đến cân nặng là điều đầu tiên nghĩ đến là ăn kiêng."),
    vocab("节食", "jiéshí", "ăn kiêng", "động từ", "Dùng khi nói giảm ăn để kiểm soát cân nặng.", "盲目节食不一定会带来真正的健康。", "Mángmù jiéshí bù yídìng huì dàilái zhēnzhèng de jiànkāng.", "Ăn kiêng mù quáng chưa chắc mang lại sức khỏe thật sự."),
    vocab("营养", "yíngyǎng", "dinh dưỡng", "danh từ", "Khái niệm cần cân bằng khi nói đến ăn uống.", "如果只减量，不管营养，身体就容易出问题。", "Rúguǒ zhǐ jiǎn liàng, bù guǎn yíngyǎng, shēntǐ jiù róngyì chū wèntí.", "Nếu chỉ giảm lượng mà không quan tâm dinh dưỡng thì cơ thể dễ xảy ra vấn đề."),
    vocab("健康", "jiànkāng", "sức khỏe, khỏe mạnh", "danh từ/tính từ", "Mục tiêu cao hơn việc chỉ giảm cân.", "真正重要的不是变瘦，而是保持健康。", "Zhēnzhèng zhòngyào de bú shì biàn shòu, érshì bǎochí jiànkāng.", "Điều thật sự quan trọng không phải là gầy đi mà là giữ được sức khỏe.")
  ],
  17: [
    vocab("离开", "líkāi", "rời đi", "động từ", "Từ then chốt của bài.", "有时候，在合适的时候离开，也是一种智慧。", "Yǒushíhou, zài héshì de shíhou líkāi, yě shì yì zhǒng zhìhuì.", "Đôi khi rời đi vào lúc thích hợp cũng là một kiểu khôn ngoan."),
    vocab("时刻", "shíkè", "thời khắc", "danh từ", "Dùng để nói khoảnh khắc có ý nghĩa.", "并不是每个时刻都适合继续停留。", "Bìng bú shì měi ge shíkè dōu shìhé jìxù tíngliú.", "Không phải thời khắc nào cũng thích hợp để tiếp tục ở lại."),
    vocab("留下", "liúxià", "ở lại; để lại", "động từ", "Thường đặt đối lập với 离开.", "懂得什么时候离开，也是一种对留下的尊重。", "Dǒngde shénme shíhou líkāi, yě shì yì zhǒng duì liúxià de zūnzhòng.", "Biết lúc nào nên rời đi cũng là một dạng tôn trọng đối với việc ở lại."),
    vocab("决定", "juédìng", "quyết định", "danh từ/động từ", "Dùng khi nói lựa chọn khó khăn.", "很多重要决定，往往都和放弃有关。", "Hěn duō zhòngyào juédìng, wǎngwǎng dōu hé fàngqì yǒuguān.", "Nhiều quyết định quan trọng thường đều liên quan đến việc từ bỏ.")
  ],
  18: [
    vocab("抽象", "chōuxiàng", "trừu tượng", "tính từ", "Từ nền của bài nghệ thuật.", "抽象艺术常常先让人感觉陌生。", "Chōuxiàng yìshù chángcháng xiān ràng rén gǎnjué mòshēng.", "Nghệ thuật trừu tượng thường trước hết khiến người ta cảm thấy xa lạ."),
    vocab("艺术", "yìshù", "nghệ thuật", "danh từ", "Chủ đề trực tiếp của bài.", "艺术有时候不是立刻看懂，而是慢慢感受。", "Yìshù yǒushíhou bú shì lìkè kàndǒng, érshì mànmàn gǎnshòu.", "Nghệ thuật đôi khi không phải hiểu ngay mà là cảm dần dần."),
    vocab("理解", "lǐjiě", "hiểu", "động từ/danh từ", "Dùng khi nói sự tiếp cận tác phẩm.", "看不懂不代表没有价值，只是还没进入理解的角度。", "Kàn bu dǒng bù dàibiǎo méiyǒu jiàzhí, zhǐshì hái méi jìnrù lǐjiě de jiǎodù.", "Không hiểu không có nghĩa là không có giá trị, chỉ là chưa đi vào góc độ hiểu phù hợp."),
    vocab("审美", "shěnměi", "thẩm mỹ", "danh từ", "Bài này bàn đến việc gu thẩm mỹ khác nhau.", "不同的人，审美经验往往很不一样。", "Bùtóng de rén, shěnměi jīngyàn wǎngwǎng hěn bù yíyàng.", "Những người khác nhau thường có trải nghiệm thẩm mỹ rất khác nhau.")
  ],
  19: [
    vocab("家乡", "jiāxiāng", "quê hương", "danh từ", "Từ khóa cảm xúc của bài.", "离开家乡久了，味道反而更容易让人想起过去。", "Líkāi jiāxiāng jiǔ le, wèidào fǎn'ér gèng róngyì ràng rén xiǎng qǐ guòqù.", "Rời quê lâu rồi thì hương vị ngược lại càng dễ khiến người ta nhớ về quá khứ."),
    vocab("萝卜饼", "luóbo bǐng", "bánh củ cải", "danh từ", "Món ăn gắn với ký ức quê nhà.", "一块普通的萝卜饼，也可能藏着很深的感情。", "Yí kuài pǔtōng de luóbo bǐng, yě kěnéng cángzhe hěn shēn de gǎnqíng.", "Một chiếc bánh củ cải bình thường cũng có thể chứa đựng tình cảm rất sâu."),
    vocab("味道", "wèidào", "mùi vị", "danh từ", "Dùng cả nghĩa thực lẫn nghĩa ký ức.", "有些味道一出现，人就会立刻想到童年。", "Yǒuxiē wèidào yí chūxiàn, rén jiù huì lìkè xiǎngdào tóngnián.", "Có những mùi vị vừa xuất hiện là người ta lập tức nghĩ đến tuổi thơ."),
    vocab("怀念", "huáiniàn", "nhớ nhung, hoài niệm", "động từ/danh từ", "Hay dùng khi nói món ăn quê.", "人怀念的往往不是食物本身，而是食物后面的生活。", "Rén huáiniàn de wǎngwǎng bú shì shíwù běnshēn, érshì shíwù hòumiàn de shēnghuó.", "Thứ con người hoài niệm thường không phải món ăn bản thân nó mà là cuộc sống phía sau món ăn.")
  ],
  20: [
    vocab("小人书", "xiǎorénshū", "truyện tranh cũ, liên hoàn họa", "danh từ", "Đồ vật gắn với tuổi thơ nhiều thế hệ.", "现在很少见的小人书，曾经陪很多孩子长大。", "Xiànzài hěn shǎo jiàn de xiǎorénshū, céngjīng péi hěn duō háizi zhǎngdà.", "Loại truyện tranh cũ nay ít thấy từng đồng hành với nhiều đứa trẻ lớn lên."),
    vocab("摊子", "tānzi", "sạp, quầy nhỏ", "danh từ", "Dùng để nói điểm bán hàng nhỏ ngoài phố.", "那个摊子虽然不大，却装着很多人的回忆。", "Nàge tānzi suīrán bú dà, què zhuāngzhe hěn duō rén de huíyì.", "Cái sạp ấy tuy không lớn nhưng chứa đựng ký ức của rất nhiều người."),
    vocab("街头", "jiētóu", "đầu phố, ngoài phố", "danh từ", "Miêu tả không gian đời thường.", "街头的小摊，常常最能留下一个时代的味道。", "Jiētóu de xiǎotān, chángcháng zuì néng liúxià yí ge shídài de wèidào.", "Những sạp nhỏ ngoài phố thường giữ lại rõ nhất hương vị của một thời đại."),
    vocab("回忆", "huíyì", "ký ức", "danh từ/động từ", "Bài này rất đậm sắc thái hồi tưởng.", "很多回忆，并不是靠大事留下的。", "Hěn duō huíyì, bìng bú shì kào dàshì liúxià de.", "Nhiều ký ức không phải được lưu lại nhờ chuyện lớn.")
  ],
  21: [
    vocab("汉字", "Hànzì", "chữ Hán", "danh từ", "Từ trung tâm của bài.", "很多人学习汉字，不只是为了考试。", "Hěn duō rén xuéxí Hànzì, bù zhǐshì wèile kǎoshì.", "Nhiều người học chữ Hán không chỉ vì thi cử."),
    vocab("着迷", "zháomí", "say mê", "động từ/tính từ", "Diễn tả mức độ hứng thú mạnh.", "真正的兴趣一旦产生，人就很容易着迷。", "Zhēnzhèng de xìngqù yídàn chǎnshēng, rén jiù hěn róngyì zháomí.", "Một khi hứng thú thật sự sinh ra thì con người rất dễ say mê."),
    vocab("研究", "yánjiū", "nghiên cứu", "động từ/danh từ", "Phù hợp với nhân vật học chữ Hán nghiêm túc.", "他把爱好慢慢变成了长期研究。", "Tā bǎ àihào mànmàn biànchéng le chángqī yánjiū.", "Anh ấy dần biến sở thích thành nghiên cứu lâu dài."),
    vocab("文化", "wénhuà", "văn hóa", "danh từ", "Chữ Hán không chỉ là ngôn ngữ mà còn là văn hóa.", "学习汉字，常常也是在接近另一种文化。", "Xuéxí Hànzì, chángcháng yě shì zài jiējìn lìng yì zhǒng wénhuà.", "Học chữ Hán thường cũng là đang đến gần một nền văn hóa khác.")
  ],
  22: [
    vocab("阅读", "yuèdú", "đọc", "động từ/danh từ", "Từ trục của bài.", "真正有效的阅读，不只是看完内容。", "Zhēnzhèng yǒuxiào de yuèdú, bù zhǐshì kàn wán nèiróng.", "Việc đọc thật sự hiệu quả không chỉ là xem xong nội dung."),
    vocab("思考", "sīkǎo", "suy nghĩ", "động từ/danh từ", "Đi cùng 阅读 rất tự nhiên.", "如果阅读后没有思考，印象往往留不久。", "Rúguǒ yuèdú hòu méiyǒu sīkǎo, yìnxiàng wǎngwǎng liú bù jiǔ.", "Nếu sau khi đọc mà không suy nghĩ thì ấn tượng thường không giữ được lâu."),
    vocab("习惯", "xíguàn", "thói quen", "danh từ/động từ", "Dùng để nói cách hình thành việc đọc lâu dài.", "把阅读变成习惯，比一时努力更重要。", "Bǎ yuèdú biànchéng xíguàn, bǐ yìshí nǔlì gèng zhòngyào.", "Biến việc đọc thành thói quen quan trọng hơn nỗ lực nhất thời."),
    vocab("判断", "pànduàn", "phán đoán", "danh từ/động từ", "Kết quả cao hơn của việc đọc có suy nghĩ.", "阅读的价值之一，就是帮助人提高判断力。", "Yuèdú de jiàzhí zhī yī, jiùshì bāngzhù rén tígāo pànduànlì.", "Một trong những giá trị của việc đọc là giúp con người nâng cao năng lực phán đoán.")
  ],
  23: [
    vocab("放手", "fàngshǒu", "buông tay", "động từ", "Từ khóa của bài nuôi dạy con.", "很多爱不是抓紧，而是在合适的时候放手。", "Hěn duō ài bú shì zhuājǐn, érshì zài héshì de shíhou fàngshǒu.", "Nhiều kiểu yêu thương không phải là nắm chặt mà là buông tay vào lúc thích hợp."),
    vocab("成长", "chéngzhǎng", "trưởng thành", "danh từ/động từ", "Liên kết cha mẹ và con cái.", "没有空间，孩子的成长就容易受限制。", "Méiyǒu kōngjiān, háizi de chéngzhǎng jiù róngyì shòu xiànzhì.", "Không có không gian thì sự trưởng thành của trẻ dễ bị hạn chế."),
    vocab("依赖", "yīlài", "phụ thuộc", "động từ/danh từ", "Là điều cần giảm dần trong giáo dục.", "照顾得太多，有时候会让孩子更依赖。", "Zhàogù de tài duō, yǒushíhou huì ràng háizi gèng yīlài.", "Chăm quá nhiều đôi khi sẽ khiến trẻ phụ thuộc hơn."),
    vocab("独立", "dúlì", "độc lập", "tính từ/trạng từ", "Mục tiêu quan trọng của việc giáo dục.", "真正的帮助，不是代替，而是让对方学会独立。", "Zhēnzhèng de bāngzhù, bú shì dàitì, érshì ràng duìfāng xuéhuì dúlì.", "Sự giúp đỡ thật sự không phải là làm thay mà là khiến đối phương học được cách độc lập.")
  ],
  24: [
    vocab("支教", "zhījiào", "đi dạy tình nguyện", "động từ/danh từ", "Từ khóa của bài thiện nguyện giáo dục.", "很多年轻人愿意去偏远地区支教。", "Hěn duō niánqīng rén yuànyì qù piānyuǎn dìqū zhījiào.", "Nhiều người trẻ sẵn lòng đến vùng xa để dạy học tình nguyện."),
    vocab("山区", "shānqū", "vùng núi", "danh từ", "Thường gắn với bối cảnh giáo dục thiếu thốn.", "山区学校面临的问题，往往不只是设备不足。", "Shānqū xuéxiào miànlín de wèntí, wǎngwǎng bù zhǐshì shèbèi bùzú.", "Những vấn đề mà trường học vùng núi đối mặt thường không chỉ là thiếu thiết bị."),
    vocab("志愿者", "zhìyuànzhě", "tình nguyện viên", "danh từ", "Nhân vật chính của bài.", "一个认真负责的志愿者，可能会影响很多孩子。", "Yí ge rènzhēn fùzé de zhìyuànzhě, kěnéng huì yǐngxiǎng hěn duō háizi.", "Một tình nguyện viên nghiêm túc và có trách nhiệm có thể ảnh hưởng đến rất nhiều trẻ em."),
    vocab("改变", "gǎibiàn", "thay đổi", "động từ/danh từ", "Trong bài mang nghĩa giáo dục tạo ra thay đổi lâu dài.", "教育真正的改变，往往不会在一天之内出现。", "Jiàoyù zhēnzhèng de gǎibiàn, wǎngwǎng bú huì zài yì tiān zhīnèi chūxiàn.", "Sự thay đổi thật sự của giáo dục thường sẽ không xuất hiện chỉ trong một ngày.")
  ],
  25: [
    vocab("恢复", "huīfù", "khôi phục", "động từ", "Dùng khi nói lấy lại sức và trạng thái.", "如果长期只付出不恢复，人很快就会空下来。", "Rúguǒ chángqī zhǐ fùchū bù huīfù, rén hěn kuài jiù huì kōng xiàlai.", "Nếu trong thời gian dài chỉ cho đi mà không phục hồi thì con người sẽ nhanh chóng cạn đi."),
    vocab("状态", "zhuàngtài", "trạng thái", "danh từ", "Hay đi với 身体、心理、工作.", "一个人的状态，和他怎么休息有很大关系。", "Yí ge rén de zhuàngtài, hé tā zěnme xiūxi yǒu hěn dà guānxi.", "Trạng thái của một người có liên quan lớn đến cách họ nghỉ ngơi."),
    vocab("内心", "nèixīn", "nội tâm", "danh từ", "Bài này nói cả về sức lực bên trong.", "真正缺水的时候，往往不是身体，而是内心。", "Zhēnzhèng quē shuǐ de shíhou, wǎngwǎng bú shì shēntǐ, érshì nèixīn.", "Khi thật sự thiếu 'nước' thì thường không phải cơ thể mà là nội tâm."),
    vocab("消耗", "xiāohào", "hao tổn, tiêu hao", "động từ/danh từ", "Dùng để nói sự mệt mỏi kéo dài.", "如果一直高强度消耗，热情也会慢慢下降。", "Rúguǒ yìzhí gāoqiángdù xiāohào, rèqíng yě huì mànmàn xiàjiàng.", "Nếu liên tục hao tổn cường độ cao thì nhiệt tình cũng sẽ từ từ giảm xuống.")
  ],
  26: [
    vocab("时间", "shíjiān", "thời gian", "danh từ", "Gốc của toàn bộ bài về bận rộn.", "很多人不是没有时间，而是不知道时间去了哪儿。", "Hěn duō rén bú shì méiyǒu shíjiān, érshì bù zhīdào shíjiān qù le nǎr.", "Nhiều người không phải là không có thời gian mà là không biết thời gian đã đi đâu."),
    vocab("专注", "zhuānzhù", "tập trung", "động từ/tính từ", "Đi ngược với kiểu bận nhưng loạn.", "真正高效的人，往往很会专注。", "Zhēnzhèng gāoxiào de rén, wǎngwǎng hěn huì zhuānzhù.", "Người thật sự hiệu quả thường rất biết tập trung."),
    vocab("节奏", "jiézòu", "nhịp độ", "danh từ", "Dùng để nói nhịp sống và nhịp làm việc.", "一旦节奏乱了，再忙也未必有结果。", "Yídàn jiézòu luàn le, zài máng yě wèibì yǒu jiéguǒ.", "Một khi nhịp độ rối thì dù bận hơn nữa cũng chưa chắc có kết quả."),
    vocab("分清", "fēnqīng", "phân rõ", "động từ", "Liên quan trực tiếp tới ưu tiên công việc.", "如果不能分清轻重，人就容易一直被事情推着走。", "Rúguǒ bùnéng fēnqīng qīngzhòng, rén jiù róngyì yìzhí bèi shìqing tuīzhe zǒu.", "Nếu không thể phân rõ nặng nhẹ thì con người dễ luôn bị công việc đẩy đi.")
  ],
  27: [
    vocab("棋子", "qízǐ", "quân cờ", "danh từ", "Từ cơ bản của ngữ cảnh chơi cờ.", "每一颗棋子的位置，都可能影响最后的结果。", "Měi yì kē qízǐ de wèizhi, dōu kěnéng yǐngxiǎng zuìhòu de jiéguǒ.", "Vị trí của mỗi quân cờ đều có thể ảnh hưởng đến kết quả cuối cùng."),
    vocab("局面", "júmiàn", "cục diện, thế trận", "danh từ", "Dùng để nói tình thế tổng quát.", "高手不会只看一步，而会先判断整个局面。", "Gāoshǒu bú huì zhǐ kàn yí bù, ér huì xiān pànduàn zhěngge júmiàn.", "Cao thủ sẽ không chỉ nhìn một bước mà sẽ phán đoán toàn bộ cục diện trước."),
    vocab("输赢", "shūyíng", "thắng thua", "danh từ", "Dùng trong cả cờ và đời sống.", "如果太在意一时的输赢，就容易看不到长远。", "Rúguǒ tài zàiyì yìshí de shūyíng, jiù róngyì kàn bú dào chángyuǎn.", "Nếu quá để ý thắng thua nhất thời thì dễ không nhìn thấy lâu dài."),
    vocab("思路", "sīlù", "mạch suy nghĩ", "danh từ", "Kết nối chơi cờ với tư duy.", "下棋能帮人训练更清楚的思路。", "Xià qí néng bāng rén xùnliàn gèng qīngchu de sīlù.", "Chơi cờ có thể giúp con người rèn mạch suy nghĩ rõ ràng hơn.")
  ],
  28: [
    vocab("招聘", "zhāopìn", "tuyển dụng", "động từ/danh từ", "Liên quan trực tiếp tới sinh viên mới ra trường.", "现在很多企业在招聘时更看重综合素质。", "Xiànzài hěn duō qǐyè zài zhāopìn shí gèng kànzhòng zōnghé sùzhì.", "Bây giờ nhiều doanh nghiệp khi tuyển dụng coi trọng tố chất tổng hợp hơn."),
    vocab("能力", "nénglì", "năng lực", "danh từ", "Từ bao trùm cho các kỹ năng nghề nghiệp.", "学历可以让人进门，能力才能让人留下。", "Xuélì kěyǐ ràng rén jìnmén, nénglì cáinéng ràng rén liúxià.", "Bằng cấp có thể giúp người ta bước vào cửa, còn năng lực mới có thể giữ người ta ở lại."),
    vocab("态度", "tàidu", "thái độ", "danh từ", "Đi đôi với trách nhiệm và chủ động.", "很多时候，态度会比经验更先被看见。", "Hěn duō shíhou, tàidu huì bǐ jīngyàn gèng xiān bèi kànjiàn.", "Nhiều lúc thái độ được nhìn thấy trước cả kinh nghiệm."),
    vocab("团队", "tuánduì", "đội nhóm", "danh từ", "Dùng khi nói cộng tác trong công việc.", "一个不能融入团队的人，很难长期受欢迎。", "Yí ge bùnéng róngrù tuánduì de rén, hěn nán chángqī shòu huānyíng.", "Một người không thể hòa nhập tập thể thì khó được chào đón lâu dài.")
  ],
  29: [
    vocab("竞争者", "jìngzhēngzhě", "đối thủ cạnh tranh", "danh từ", "Mở rộng từ 对手 theo sắc thái xã hội hơn.", "真正的竞争者，往往也是最好的提醒者。", "Zhēnzhèng de jìngzhēngzhě, wǎngwǎng yě shì zuì hǎo de tíxǐng zhě.", "Đối thủ cạnh tranh thực sự thường cũng là người nhắc nhở tốt nhất."),
    vocab("激励", "jīlì", "khích lệ", "động từ/danh từ", "Đi cùng động lực tiến bộ.", "好的对手能给人长期的激励。", "Hǎo de duìshǒu néng gěi rén chángqī de jīlì.", "Đối thủ tốt có thể mang lại sự khích lệ dài hạn cho con người."),
    vocab("水平", "shuǐpíng", "trình độ", "danh từ", "Dùng để nói tiêu chuẩn cạnh tranh.", "如果没有高水平的对手，人很容易停在原地。", "Rúguǒ méiyǒu gāo shuǐpíng de duìshǒu, rén hěn róngyì tíng zài yuándì.", "Nếu không có đối thủ trình độ cao thì con người rất dễ đứng yên tại chỗ."),
    vocab("成长", "chéngzhǎng", "trưởng thành", "danh từ/động từ", "Bài này nối cạnh tranh với sự trưởng thành.", "有时候，让人成长最快的，正是压力和比较。", "Yǒushíhou, ràng rén chéngzhǎng zuì kuài de, zhèng shì yālì hé bǐjiào.", "Đôi khi thứ khiến con người trưởng thành nhanh nhất chính là áp lực và sự so sánh.")
  ],
  30: [
    vocab("企业", "qǐyè", "doanh nghiệp", "danh từ", "Thành phần chính của thị trường.", "企业之间的竞争，会影响整个市场的节奏。", "Qǐyè zhījiān de jìngzhēng, huì yǐngxiǎng zhěngge shìchǎng de jiézòu.", "Sự cạnh tranh giữa các doanh nghiệp sẽ ảnh hưởng đến nhịp độ của cả thị trường."),
    vocab("成本", "chéngběn", "chi phí", "danh từ", "Hay đi cùng giá và hiệu quả.", "只有控制好成本，企业才更可能长期发展。", "Zhǐyǒu kòngzhì hǎo chéngběn, qǐyè cái gèng kěnéng chángqī fāzhǎn.", "Chỉ khi kiểm soát tốt chi phí thì doanh nghiệp mới có khả năng phát triển lâu dài hơn."),
    vocab("创新", "chuàngxīn", "đổi mới, sáng tạo", "động từ/danh từ", "Một kết quả tích cực của cạnh tranh.", "没有创新，只靠降价，很难真正提高竞争力。", "Méiyǒu chuàngxīn, zhǐ kào jiàngjià, hěn nán zhēnzhèng tígāo jìngzhēnglì.", "Không có đổi mới mà chỉ dựa vào giảm giá thì khó thật sự nâng cao sức cạnh tranh."),
    vocab("需求", "xūqiú", "nhu cầu", "danh từ", "Liên kết người tiêu dùng với thị trường.", "市场变化得快，是因为需求一直在变。", "Shìchǎng biànhuà de kuài, shì yīnwèi xūqiú yìzhí zài biàn.", "Thị trường thay đổi nhanh là vì nhu cầu luôn luôn thay đổi.")
  ],
  31: [
    vocab("心理效应", "xīnlǐ xiàoyìng", "hiệu ứng tâm lý", "danh từ", "Cách gọi đầy đủ của hiện tượng trong bài.", "很多看似普通的决定，其实都受心理效应影响。", "Hěn duō kànsì pǔtōng de juédìng, qíshí dōu shòu xīnlǐ xiàoyìng yǐngxiǎng.", "Nhiều quyết định có vẻ bình thường thật ra đều chịu ảnh hưởng của hiệu ứng tâm lý."),
    vocab("逐步", "zhúbù", "từng bước", "phó từ", "Dùng để nói yêu cầu tăng dần.", "要求如果逐步增加，人就更不容易察觉。", "Yāoqiú rúguǒ zhúbù zēngjiā, rén jiù gèng bù róngyì chájué.", "Nếu yêu cầu tăng dần từng bước thì con người càng khó nhận ra hơn."),
    vocab("同意", "tóngyì", "đồng ý", "động từ/danh từ", "Liên kết với 接受 và 拒绝.", "一旦先同意了小事，后面就更难突然拒绝。", "Yídàn xiān tóngyì le xiǎoshì, hòumiàn jiù gèng nán tūrán jùjué.", "Một khi đã đồng ý việc nhỏ trước thì về sau càng khó đột ngột từ chối."),
    vocab("选择", "xuǎnzé", "lựa chọn", "danh từ/động từ", "Nhấn vào ảnh hưởng lan sang quyết định sau.", "前面的选择，常常会影响后面的判断。", "Qiánmiàn de xuǎnzé, chángcháng huì yǐngxiǎng hòumiàn de pànduàn.", "Lựa chọn phía trước thường sẽ ảnh hưởng đến phán đoán phía sau.")
  ],
  32: [
    vocab("环境", "huánjìng", "môi trường", "danh từ", "Từ rộng hơn bao trùm nội dung bài.", "保护环境，不一定非要从大项目开始。", "Bǎohù huánjìng, bù yídìng fēi yào cóng dà xiàngmù kāishǐ.", "Bảo vệ môi trường chưa chắc nhất định phải bắt đầu từ dự án lớn."),
    vocab("节能", "jiénéng", "tiết kiệm năng lượng", "động từ/tính từ", "Mở rộng từ tiết kiệm nước điện.", "节能不是口号，而是每天都能做的选择。", "Jiénéng bú shì kǒuhào, érshì měitiān dōu néng zuò de xuǎnzé.", "Tiết kiệm năng lượng không phải khẩu hiệu mà là lựa chọn có thể làm mỗi ngày."),
    vocab("减少", "jiǎnshǎo", "giảm bớt", "động từ", "Hay đi với rác, lãng phí, dùng một lần.", "只要每个人都减少一点浪费，结果就会很不一样。", "Zhǐyào měi ge rén dōu jiǎnshǎo yìdiǎn làngfèi, jiéguǒ jiù huì hěn bù yíyàng.", "Chỉ cần mỗi người giảm lãng phí một chút thì kết quả sẽ rất khác."),
    vocab("重复利用", "chóngfù lìyòng", "tái sử dụng", "động từ", "Một hành động rất gần với chủ đề bài.", "能重复利用的东西，就不要轻易扔掉。", "Néng chóngfù lìyòng de dōngxi, jiù bú yào qīngyì rēngdiào.", "Những thứ có thể tái sử dụng thì đừng dễ dàng vứt đi.")
  ],
  33: [
    vocab("出行", "chūxíng", "đi lại, di chuyển", "động từ/danh từ", "Khái niệm rộng hơn riêng giao thông.", "城市管理应该从整体出行需求出发。", "Chéngshì guǎnlǐ yīnggāi cóng zhěngtǐ chūxíng xūqiú chūfā.", "Quản lý đô thị nên xuất phát từ nhu cầu đi lại tổng thể."),
    vocab("政策", "zhèngcè", "chính sách", "danh từ", "Dùng khi nói giải pháp cấp quản lý.", "交通问题复杂，所以更需要长期政策。", "Jiāotōng wèntí fùzá, suǒyǐ gèng xūyào chángqī zhèngcè.", "Vấn đề giao thông phức tạp nên càng cần chính sách dài hạn."),
    vocab("路况", "lùkuàng", "tình trạng đường xá", "danh từ", "Từ thực tế trong bối cảnh giao thông.", "上路之前先看路况，可以节省很多时间。", "Shànglù zhīqián xiān kàn lùkuàng, kěyǐ jiéshěng hěn duō shíjiān.", "Trước khi lên đường mà xem tình trạng đường xá thì có thể tiết kiệm rất nhiều thời gian."),
    vocab("停车", "tíngchē", "đỗ xe", "động từ/danh từ", "Một phần quan trọng của giao thông đô thị.", "如果停车管理做得不好，道路压力也会增加。", "Rúguǒ tíngchē guǎnlǐ zuò de bù hǎo, dàolù yālì yě huì zēngjiā.", "Nếu quản lý đỗ xe làm không tốt thì áp lực đường xá cũng sẽ tăng lên.")
  ],
  34: [
    vocab("鸟类", "niǎolèi", "loài chim", "danh từ", "Khái niệm khoa học rộng hơn 鸟儿.", "不同鸟类在整理羽毛时会有不同方式。", "Bùtóng niǎolèi zài zhěnglǐ yǔmáo shí huì yǒu bùtóng fāngshì.", "Các loài chim khác nhau sẽ có cách chỉnh lông khác nhau."),
    vocab("防水", "fángshuǐ", "chống nước", "động từ/tính từ", "Chức năng quan trọng của lông.", "羽毛保持防水，对很多鸟来说很重要。", "Yǔmáo bǎochí fángshuǐ, duì hěn duō niǎo lái shuō hěn zhòngyào.", "Lông giữ được tính chống nước rất quan trọng đối với nhiều loài chim."),
    vocab("清洁", "qīngjié", "làm sạch, sạch sẽ", "động từ/tính từ", "Mở rộng từ 清理 sang sắc thái khoa học hơn.", "动物保持身体清洁，也是一种生存需要。", "Dòngwù bǎochí shēntǐ qīngjié, yě shì yì zhǒng shēngcún xūyào.", "Động vật giữ cơ thể sạch sẽ cũng là một nhu cầu sinh tồn."),
    vocab("自然界", "zìránjiè", "giới tự nhiên", "danh từ", "Hay dùng trong bài quan sát khoa học.", "只要认真看，自然界里处处都有值得研究的现象。", "Zhǐyào rènzhēn kàn, zìránjiè lǐ chùchù dōu yǒu zhídé yánjiū de xiànxiàng.", "Chỉ cần quan sát nghiêm túc thì trong giới tự nhiên ở đâu cũng có hiện tượng đáng nghiên cứu.")
  ],
  35: [
    vocab("气孔", "qìkǒng", "khí khổng", "danh từ", "Khái niệm khoa học liên quan trực tiếp đến lá cây.", "植物通过叶子上的气孔和外界交换水分与空气。", "Zhíwù tōngguò yèzi shàng de qìkǒng hé wàijiè jiāohuàn shuǐfèn yǔ kōngqì.", "Thực vật thông qua khí khổng trên lá để trao đổi nước và không khí với bên ngoài."),
    vocab("蒸腾", "zhēngténg", "thoát hơi nước", "danh từ/động từ", "Thuật ngữ phù hợp với bài khoa học phổ thông.", "植物蒸腾作用和温度变化有密切关系。", "Zhíwù zhēngténg zuòyòng hé wēndù biànhuà yǒu mìqiè guānxi.", "Hiện tượng thoát hơi nước của thực vật có quan hệ mật thiết với sự thay đổi nhiệt độ."),
    vocab("现象", "xiànxiàng", "hiện tượng", "danh từ", "Từ mô tả khoa học cơ bản.", "看懂一个现象，往往要先看清它发生的过程。", "Kàndǒng yí ge xiànxiàng, wǎngwǎng yào xiān kàn qīng tā fāshēng de guòchéng.", "Muốn hiểu một hiện tượng thì thường phải nhìn rõ quá trình xảy ra của nó trước."),
    vocab("吸收", "xīshōu", "hấp thụ", "động từ", "Liên hệ với nước và dinh dưỡng.", "植物一边吸收水分，一边也在不断调节自己。", "Zhíwù yìbiān xīshōu shuǐfèn, yìbiān yě zài búduàn tiáojié zìjǐ.", "Thực vật vừa hấp thụ nước vừa liên tục điều tiết bản thân.")
  ],
  36: [
    vocab("老舍", "Lǎo Shě", "Lão Xá", "danh từ riêng", "Nhân vật trung tâm của bài.", "通过养花，人们能看到老舍生活里很温和的一面。", "Tōngguò yǎng huā, rénmen néng kàndào Lǎo Shě shēnghuó lǐ hěn wēnhé de yí miàn.", "Thông qua việc trồng hoa, người ta có thể thấy một mặt rất ôn hòa trong đời sống của Lão Xá."),
    vocab("花草", "huācǎo", "hoa cỏ", "danh từ", "Từ rộng hơn cho thế giới cây cảnh.", "很多人照顾花草，其实是在照顾自己的心情。", "Hěn duō rén zhàogù huācǎo, qíshí shì zài zhàogù zìjǐ de xīnqíng.", "Nhiều người chăm sóc hoa cỏ thật ra là đang chăm sóc tâm trạng của chính mình."),
    vocab("兴趣", "xìngqù", "hứng thú, sở thích", "danh từ", "Liên hệ nhà văn với đời sống riêng.", "一个人的兴趣，常常能解释他为什么那样生活。", "Yí ge rén de xìngqù, chángcháng néng jiěshì tā wèishénme nàyyàng shēnghuó.", "Sở thích của một người thường có thể giải thích vì sao họ sống như thế."),
    vocab("情趣", "qíngqù", "thú vị tao nhã, tình thú sống", "danh từ", "Từ phù hợp với bài văn học và đời sống.", "平常生活里如果有一点情趣，日子就会更耐看。", "Píngcháng shēnghuó lǐ rúguǒ yǒu yì diǎn qíngqù, rìzi jiù huì gèng nàikàn.", "Nếu trong đời sống thường ngày có một chút thú vị tao nhã thì ngày tháng sẽ đáng ngắm hơn.")
  ]
};

const hsk5DialogueDefaultNotes = [
  "Mở chủ đề bằng một tình huống gần với bài khóa.",
  "Làm rõ điểm chính hoặc mâu thuẫn trung tâm của bài.",
  "Mở rộng cách nhìn để người học hiểu sâu hơn ý bài.",
  "Liên hệ lại ý nghĩa chính của bài và ứng dụng vào đời sống."
];

hsk5Course.lessons = hsk5Course.lessons.map((lesson) => {
  const detailed = hsk5DetailedLessons[lesson.number];
  const extraVocabulary = hsk5VocabularySupplements[lesson.number] || [];
  return detailed ? {
    ...lesson,
    ...detailed,
    vocabulary: [...detailed.vocabulary, ...extraVocabulary],
    dialogueBlocks: detailed.dialogueBlocks.map((block, index) => ({
      ...block,
      note: block.note || hsk5DialogueDefaultNotes[index] || ""
    })),
    placeholder: false
  } : lesson;
});

const hsk6OfficialStructure = [
  { number: 1, chinese: "孩子给我们的启示", pinyin: "Háizi gěi wǒmen de qǐshì", vietnamese: "Những điều trẻ con gợi mở cho chúng ta", topic: "Quan sát trẻ em, góc nhìn sống đơn giản và bài học người lớn thường bỏ qua" },
  { number: 2, chinese: "父母之爱", pinyin: "Fùmǔ zhī ài", vietnamese: "Tình yêu của cha mẹ", topic: "Tình thân, sự hy sinh thầm lặng và cách nhìn trưởng thành hơn về cha mẹ" },
  { number: 3, chinese: "一盒月饼", pinyin: "Yì hé yuèbǐng", vietnamese: "Một hộp bánh trung thu", topic: "Quà tặng, tình thân gia đình và ý nghĩa phía sau vật nhỏ" },
  { number: 4, chinese: "完美的胜利", pinyin: "Wánměi de shènglì", vietnamese: "Một chiến thắng hoàn hảo", topic: "Thi đấu, áp lực, bước ngoặt bất ngờ và nhìn lại thành công" },
  { number: 5, chinese: "学一门外语需要理由吗", pinyin: "Xué yì mén wàiyǔ xūyào lǐyóu ma", vietnamese: "Học một ngoại ngữ có cần lý do không?", topic: "Động lực học ngoại ngữ, giá trị dài hạn và thay đổi nhận thức" },
  { number: 6, chinese: "当好职场插班生", pinyin: "Dāng hǎo zhíchǎng chābānshēng", vietnamese: "Trở thành người mới hòa nhập tốt nơi công sở", topic: "Môi trường công sở, thích nghi nhanh và ứng xử khi mới vào làm" },
  { number: 7, chinese: "我的人生我做主", pinyin: "Wǒ de rénshēng wǒ zuòzhǔ", vietnamese: "Cuộc đời tôi do tôi quyết định", topic: "Chủ động lựa chọn cuộc sống và chịu trách nhiệm với quyết định cá nhân" },
  { number: 8, chinese: "遇见原来的我", pinyin: "Yùjiàn yuánlái de wǒ", vietnamese: "Gặp lại chính mình của ngày trước", topic: "Nhìn lại bản thân, ký ức cũ và thay đổi theo thời gian" },
  { number: 9, chinese: "不用手机的日子", pinyin: "Bù yòng shǒujī de rìzi", vietnamese: "Những ngày không dùng điện thoại", topic: "Đời sống không điện thoại và thay đổi trong nhịp sống hiện đại" },
  { number: 10, chinese: "全球化视野中的中国饮食", pinyin: "Quánqiúhuà shìyě zhōng de Zhōngguó yǐnshí", vietnamese: "Ẩm thực Trung Quốc trong tầm nhìn toàn cầu hóa", topic: "Ẩm thực, giao lưu văn hóa và bản sắc trong bối cảnh toàn cầu" },
  { number: 11, chinese: "我不在时，猫在干什么", pinyin: "Wǒ bú zài shí, māo zài gàn shénme", vietnamese: "Khi tôi không ở nhà, mèo đang làm gì?", topic: "Quan sát động vật, trí tò mò và cuộc sống ngoài tầm nhìn con người" },
  { number: 12, chinese: "我们都爱白噪音", pinyin: "Wǒmen dōu ài bái zàoyīn", vietnamese: "Chúng ta đều thích tiếng ồn trắng", topic: "Âm thanh, giấc ngủ và thói quen điều chỉnh môi trường sống" },
  { number: 13, chinese: "从旅游指南看世事变迁", pinyin: "Cóng lǚyóu zhǐnán kàn shìshì biànqiān", vietnamese: "Nhìn sự đổi thay của thời cuộc qua sách hướng dẫn du lịch", topic: "Lịch sử xã hội, thay đổi đô thị và góc nhìn từ tài liệu đời thường" },
  { number: 14, chinese: "背着电饭锅拍北极", pinyin: "Bēizhe diànfànguō pāi Běijí", vietnamese: "Đeo nồi cơm điện trên lưng để chụp Bắc Cực", topic: "Nhiếp ảnh, hành trình khám phá và chuẩn bị trong điều kiện khắc nghiệt" },
  { number: 15, chinese: "山脉上的雕刻", pinyin: "Shānmài shàng de diāokè", vietnamese: "Những nét chạm khắc trên dãy núi", topic: "Thiên nhiên, địa chất và cách con người đọc dấu vết của thời gian" },
  { number: 16, chinese: "徐健和他的野生动物摄影师们", pinyin: "Xú Jiàn hé tā de yěshēng dòngwù shèyǐngshīmen", vietnamese: "Từ Kiện và những nhiếp ảnh gia động vật hoang dã của anh ấy", topic: "Nhiếp ảnh động vật, nghề nghiệp chuyên môn và tinh thần hợp tác" },
  { number: 17, chinese: "小动物眼中的慢世界", pinyin: "Xiǎo dòngwù yǎnzhōng de màn shìjiè", vietnamese: "Thế giới chậm trong mắt loài vật nhỏ", topic: "Nhịp cảm nhận khác nhau của sinh vật và góc nhìn khoa học" },
  { number: 18, chinese: "神奇的丝瓜", pinyin: "Shénqí de sīguā", vietnamese: "Quả mướp kỳ diệu", topic: "Thực vật quen thuộc, công dụng bất ngờ và tri thức dân gian" },
  { number: 19, chinese: "无阳光的深海世界", pinyin: "Wú yángguāng de shēnhǎi shìjiè", vietnamese: "Thế giới biển sâu không có ánh nắng", topic: "Hệ sinh thái biển sâu và khả năng thích nghi của sự sống" },
  { number: 20, chinese: "金鸡窝", pinyin: "Jīnjīwō", vietnamese: "Ổ gà vàng", topic: "Câu chuyện dân gian, ký ức quê nhà và biểu tượng của may mắn" },
  { number: 21, chinese: "未来商店", pinyin: "Wèilái shāngdiàn", vietnamese: "Cửa hàng tương lai", topic: "Bán lẻ thông minh, tự động hóa và thay đổi trải nghiệm mua sắm" },
  { number: 22, chinese: "2050年的汽车什么样", pinyin: "Èrlíngwǔlíng nián de qìchē shénme yàng", vietnamese: "Ô tô năm 2050 sẽ như thế nào?", topic: "Phương tiện tương lai, công nghệ và nhu cầu xã hội mới" },
  { number: 23, chinese: "大数据时代", pinyin: "Dà shùjù shídài", vietnamese: "Thời đại dữ liệu lớn", topic: "Dữ liệu lớn, công nghệ số và quyền riêng tư" },
  { number: 24, chinese: "体育明星们的离奇遭遇", pinyin: "Tǐyù míngxīngmen de líqí zāoyù", vietnamese: "Những trải nghiệm ly kỳ của các ngôi sao thể thao", topic: "Người nổi tiếng, truyền thông và tình huống bất ngờ nơi công cộng" },
  { number: 25, chinese: "草船借箭", pinyin: "Cǎochuán jiè jiàn", vietnamese: "Thuyền cỏ mượn tên", topic: "Điển cố lịch sử, mưu lược và trí tuệ ứng biến" },
  { number: 26, chinese: "奇异的灯光", pinyin: "Qíyì de dēngguāng", vietnamese: "Những ánh sáng kỳ lạ", topic: "Hiện tượng thiên nhiên, tò mò khoa học và suy đoán hợp lý" },
  { number: 27, chinese: "完璧归赵", pinyin: "Wánbì guī Zhào", vietnamese: "Trả ngọc nguyên vẹn về nước Triệu", topic: "Điển cố lịch sử, ngoại giao và bản lĩnh cá nhân" },
  { number: 28, chinese: "高山流水遇知音", pinyin: "Gāoshān liúshuǐ yù zhīyīn", vietnamese: "Cao sơn lưu thủy gặp tri âm", topic: "Tình tri kỷ, nghệ thuật và sự thấu hiểu sâu sắc" },
  { number: 29, chinese: "“笑”的备忘录", pinyin: "‘Xiào’ de bèiwànglù", vietnamese: "Bản ghi nhớ về tiếng cười", topic: "Tiếng cười, tâm lý học và ý nghĩa xã hội của cảm xúc" },
  { number: 30, chinese: "你睡好了吗", pinyin: "Nǐ shuì hǎo le ma", vietnamese: "Bạn ngủ ngon chưa?", topic: "Giấc ngủ, sức khỏe và ảnh hưởng của lối sống hiện đại" },
  { number: 31, chinese: "运动的学问", pinyin: "Yùndòng de xuéwen", vietnamese: "Cái học trong việc vận động", topic: "Khoa học vận động, luyện tập hợp lý và hiểu cơ thể" },
  { number: 32, chinese: "有时，不妨悲伤", pinyin: "Yǒushí, bùfáng bēishāng", vietnamese: "Có lúc, buồn một chút cũng không sao", topic: "Cảm xúc tiêu cực, chữa lành và cân bằng tinh thần" },
  { number: 33, chinese: "怀念慢生活", pinyin: "Huáiniàn màn shēnghuó", vietnamese: "Hoài niệm về nhịp sống chậm", topic: "Nhịp sống chậm, áp lực hiện đại và lựa chọn sống có ý thức" },
  { number: 34, chinese: "为文物而生的人", pinyin: "Wèi wénwù ér shēng de rén", vietnamese: "Người sinh ra vì cổ vật", topic: "Bảo tồn di sản, đam mê nghề nghiệp và gìn giữ ký ức văn hóa" },
  { number: 35, chinese: "走进木版年画", pinyin: "Zǒujìn mùbǎn niánhuà", vietnamese: "Bước vào thế giới tranh Tết khắc gỗ", topic: "Mỹ thuật dân gian, nghề thủ công và truyền thống ngày Tết" },
  { number: 36, chinese: "中国古代书院", pinyin: "Zhōngguó gǔdài shūyuàn", vietnamese: "Học viện cổ đại Trung Quốc", topic: "Giáo dục cổ đại, học thuật và không gian nuôi dưỡng tri thức" },
  { number: 37, chinese: "警察的故事", pinyin: "Jǐngchá de gùshi", vietnamese: "Câu chuyện của người cảnh sát", topic: "Nghề cảnh sát, trách nhiệm công cộng và những tình huống thực tế" },
  { number: 38, chinese: "慧眼捕捉商机", pinyin: "Huìyǎn bǔzhuō shāngjī", vietnamese: "Con mắt tinh tường nắm bắt cơ hội kinh doanh", topic: "Cơ hội kinh doanh, quan sát thị trường và phản ứng nhanh" },
  { number: 39, chinese: "互联网时代的生活", pinyin: "Hùliánwǎng shídài de shēnghuó", vietnamese: "Cuộc sống trong thời đại Internet", topic: "Internet, đời sống số và thay đổi trong hành vi xã hội" },
  { number: 40, chinese: "人类超能力会改变世界纪录吗", pinyin: "Rénlèi chāonénglì huì gǎibiàn shìjiè jìlù ma", vietnamese: "Siêu năng lực của con người có làm thay đổi kỷ lục thế giới không?", topic: "Giới hạn con người, thành tích thể thao và tưởng tượng khoa học" }
];

const hsk6Course = {
  id: "hsk6",
  label: "HSK 6",
  overview: "HSK 6 được khóa theo đúng 40 bài của HSK Standard Course 6A và 6B. Giai đoạn này giữ nguyên layout hiện tại và triển khai lesson page theo cùng study flow.",
  lessons: hsk6OfficialStructure.map((lesson) => ({
    id: `hsk6-lesson-${lesson.number}`,
    number: lesson.number,
    title: `Bài ${lesson.number}: ${lesson.vietnamese}`,
    titleChinese: lesson.chinese,
    titlePinyin: lesson.pinyin,
    vietnameseTitle: lesson.vietnamese,
    objective: `Bài này tập trung vào chủ đề: ${lesson.topic}. Nội dung chi tiết sẽ được viết theo cùng lesson flow hiện tại khi bắt đầu build HSK 6.`,
    placeholder: true,
    summary: `Placeholder chuẩn cho ${lesson.chinese}. Khi viết nội dung chi tiết, bài này sẽ dùng đúng cấu trúc: Vocabulary, Dialogue, Grammar, Exercises, Quick Summary.`
  }))
};

const hsk6DetailedLessons = {};

const hsk6VocabularySupplements = {};

const hsk6VocabularyDeepExpansion = {};

const hsk6DialogueDefaultNotes = [
  "Mở chủ đề bằng một tình huống gần với bài khóa để người học nắm được bối cảnh dùng từ.",
  "Làm rõ ý chính hoặc xung đột nhận thức nằm ở giữa bài.",
  "Mở rộng thêm một góc nhìn giúp người học thấy lớp nghĩa sâu hơn của chủ đề.",
  "Khép lại bằng kết luận ngắn để nối nội dung bài với cách diễn đạt thực tế."
];

const hsk6DialogueNoteOverrides = {};

hsk6Course.lessons = hsk6Course.lessons.map((lesson) => {
  const detailed = hsk6DetailedLessons[lesson.number];
  const extraVocabulary = hsk6VocabularySupplements[lesson.number] || [];
  const deepExtraVocabulary = hsk6VocabularyDeepExpansion[lesson.number] || [];
  const noteOverrides = hsk6DialogueNoteOverrides[lesson.number] || [];
  return detailed ? {
    ...lesson,
    ...detailed,
    vocabulary: [...detailed.vocabulary, ...extraVocabulary, ...deepExtraVocabulary],
    dialogueBlocks: detailed.dialogueBlocks.map((block, index) => ({
      ...block,
      note: block.note || noteOverrides[index] || hsk6DialogueDefaultNotes[index] || ""
    })),
    placeholder: false
  } : lesson;
});

const lessonHead = document.getElementById("lessonHead");
const lessonSections = document.getElementById("lessonSections");
const levelTabs = document.getElementById("levelTabs");
const lessonTabs = document.getElementById("lessonTabs");
const sectionNav = document.getElementById("sectionNav");

const courseLevels = {
  hsk1: {
    id: "hsk1",
    label: "HSK 1",
    overview: "HSK 6 được khóa theo đúng 40 bài của HSK Standard Course 6A và 6B. Giai đoạn này giữ nguyên layout hiện tại và triển khai lesson page theo cùng study flow.",
    lessons: hsk1Course.lessons
  },
  hsk2: hsk2Course,
  hsk3: hsk3Course,
  hsk4: hsk4Course,
  hsk5: hsk5Course,
  hsk6: hsk6Course
};

const lessonTitleMeta = {
  hsk1: {
    1: { chinese: "你好！", pinyin: "Nǐ hǎo!" },
    2: { chinese: "谢谢你！", pinyin: "Xièxie nǐ!" },
    3: { chinese: "你叫什么名字？", pinyin: "Nǐ jiào shénme míngzi?" },
    4: { chinese: "她是我的汉语老师。", pinyin: "Tā shì wǒ de Hànyǔ lǎoshī." },
    5: { chinese: "她女儿今年二十岁。", pinyin: "Tā nǚ'ér jīnnián èrshí suì." },
    6: { chinese: "我会说汉语。", pinyin: "Wǒ huì shuō Hànyǔ." },
    7: { chinese: "今天几号？", pinyin: "Jīntiān jǐ hào?" },
    8: { chinese: "我想喝茶。", pinyin: "Wǒ xiǎng hē chá." },
    9: { chinese: "你儿子在哪儿工作？", pinyin: "Nǐ érzi zài nǎr gōngzuò?" },
    10: { chinese: "我能坐这儿吗？", pinyin: "Wǒ néng zuò zhèr ma?" },
    11: { chinese: "现在几点？", pinyin: "Xiànzài jǐ diǎn?" },
    12: { chinese: "明天天气怎么样？", pinyin: "Míngtiān tiānqì zěnmeyàng?" },
    13: { chinese: "他在学做中国菜呢。", pinyin: "Tā zài xué zuò Zhōngguó cài ne." },
    14: { chinese: "她买了不少衣服。", pinyin: "Tā mǎile bù shǎo yīfu." },
    15: { chinese: "我是坐飞机来的。", pinyin: "Wǒ shì zuò fēijī lái de." }
  },
  hsk2: {
    1: { chinese: "九月去北京旅游最好", pinyin: "Jiǔ yuè qù Běijīng lǚyóu zuì hǎo" },
    2: { chinese: "我每天六点起床", pinyin: "Wǒ měitiān liù diǎn qǐchuáng" },
    3: { chinese: "左边那个红色的是我的", pinyin: "Zuǒbian nàge hóngsè de shì wǒ de" },
    4: { chinese: "这个工作是他帮我介绍的", pinyin: "Zhège gōngzuò shì tā bāng wǒ jièshào de" },
    5: { chinese: "就买这件吧", pinyin: "Jiù mǎi zhè jiàn ba" },
    6: { chinese: "你怎么不吃了", pinyin: "Nǐ zěnme bù chī le" },
    7: { chinese: "你家离公司远吗", pinyin: "Nǐ jiā lí gōngsī yuǎn ma" },
    8: { chinese: "让我想想再告诉你", pinyin: "Ràng wǒ xiǎngxiang zài gàosu nǐ" },
    9: { chinese: "题太多，我没做完", pinyin: "Tí tài duō, wǒ méi zuò wán" },
    10: { chinese: "别找了，手机在桌子上呢", pinyin: "Bié zhǎo le, shǒujī zài zhuōzi shàng ne" },
    11: { chinese: "他比我大三岁", pinyin: "Tā bǐ wǒ dà sān suì" },
    12: { chinese: "你穿得太少了", pinyin: "Nǐ chuān de tài shǎo le" },
    13: { chinese: "门开着呢", pinyin: "Mén kāizhe ne" },
    14: { chinese: "你看过那个电影吗", pinyin: "Nǐ kànguo nàge diànyǐng ma" },
    15: { chinese: "新年就要到了", pinyin: "Xīnnián jiù yào dào le" }
  },
  hsk3: {
    1: { chinese: "你周末有什么打算？", pinyin: "Nǐ zhōumò yǒu shénme dǎsuan?" },
    2: { chinese: "他什么时候回来？", pinyin: "Tā shénme shíhou huílai?" },
    3: { chinese: "桌子上放着很多饮料。", pinyin: "Zhuōzi shàng fàngzhe hěn duō yǐnliào." },
    4: { chinese: "她总是笑着跟客人说话。", pinyin: "Tā zǒng shì xiàozhe gēn kèrén shuōhuà." },
    5: { chinese: "我最近越来越胖了。", pinyin: "Wǒ zuìjìn yuèláiyuè pàng le." },
    6: { chinese: "怎么突然找不到了？", pinyin: "Zěnme tūrán zhǎobudào le?" },
    7: { chinese: "我跟她都认识五年了。", pinyin: "Wǒ gēn tā dōu rènshi wǔ nián le." },
    8: { chinese: "你去哪儿我就去哪儿。", pinyin: "Nǐ qù nǎr wǒ jiù qù nǎr." },
    9: { chinese: "她的汉语说得跟中国人一样好。", pinyin: "Tā de Hànyǔ shuō de gēn Zhōngguórén yíyàng hǎo." },
    10: { chinese: "数学比历史难多了。", pinyin: "Shùxué bǐ lìshǐ nán duō le." },
    11: { chinese: "别忘了把空调关了。", pinyin: "Bié wàng le bǎ kōngtiáo guān le." },
    12: { chinese: "把重要的东西放在我这儿吧。", pinyin: "Bǎ zhòngyào de dōngxi fàng zài wǒ zhèr ba." },
    13: { chinese: "我是走回来的。", pinyin: "Wǒ shì zǒu huílai de." },
    14: { chinese: "请把水果拿过来。", pinyin: "Qǐng bǎ shuǐguǒ ná guòlai." },
    15: { chinese: "其他都没有问题。", pinyin: "Qítā dōu méiyǒu wèntí." },
    16: { chinese: "我现在累得下了班就想睡觉。", pinyin: "Wǒ xiànzài lèi de xià le bān jiù xiǎng shuìjiào." },
    17: { chinese: "谁都有办法看好你的“病”。", pinyin: "Shéi dōu yǒu bànfǎ kàn hǎo nǐ de “bìng”." },
    18: { chinese: "我相信他们会统一的。", pinyin: "Wǒ xiāngxìn tāmen huì tǒngyī de." },
    19: { chinese: "你没看出来吗？", pinyin: "Nǐ méi kàn chūlái ma?" },
    20: { chinese: "我被他影响了。", pinyin: "Wǒ bèi tā yǐngxiǎng le." }
  },
  hsk4: {
    1: { chinese: "简单的爱情", pinyin: "Jiǎndān de àiqíng" },
    2: { chinese: "真正的朋友", pinyin: "Zhēnzhèng de péngyou" },
    3: { chinese: "经理对我印象不错", pinyin: "Jīnglǐ duì wǒ yìnxiàng búcuò" },
    4: { chinese: "不要太着急赚钱", pinyin: "Búyào tài zháojí zhuànqián" },
    5: { chinese: "只买对的，不买贵的", pinyin: "Zhǐ mǎi duì de, bù mǎi guì de" },
    6: { chinese: "一分钱一分货", pinyin: "Yì fēn qián yì fēn huò" },
    7: { chinese: "最好的医生是自己", pinyin: "Zuì hǎo de yīshēng shì zìjǐ" },
    8: { chinese: "生活中不缺少美", pinyin: "Shēnghuó zhōng bù quēshǎo měi" },
    9: { chinese: "阳光总在风雨后", pinyin: "Yángguāng zǒng zài fēngyǔ hòu" },
    10: { chinese: "幸福的标准", pinyin: "Xìngfú de biāozhǔn" },
    11: { chinese: "读书好，读好书，好读书", pinyin: "Dúshū hǎo, dú hǎo shū, hào dúshū" },
    12: { chinese: "用心发现世界", pinyin: "Yòngxīn fāxiàn shìjiè" },
    13: { chinese: "喝着茶看京剧", pinyin: "Hēzhe chá kàn Jīngjù" },
    14: { chinese: "保护地球母亲", pinyin: "Bǎohù dìqiú mǔqīn" },
    15: { chinese: "教育孩子的艺术", pinyin: "Jiàoyù háizi de yìshù" },
    16: { chinese: "生活可以更美好", pinyin: "Shēnghuó kěyǐ gèng měihǎo" },
    17: { chinese: "人与自然", pinyin: "Rén yǔ zìrán" },
    18: { chinese: "科技与世界", pinyin: "Kējì yǔ shìjiè" },
    19: { chinese: "生活的味道", pinyin: "Shēnghuó de wèidào" },
    20: { chinese: "路上的风景", pinyin: "Lùshang de fēngjǐng" }
  },
  hsk5: {
    1: { chinese: "爱的细节", pinyin: "Ài de xìjié" },
    2: { chinese: "留串钥匙给父母", pinyin: "Liú chuàn yàoshi gěi fùmǔ" },
    3: { chinese: "人生有选择，一切可改变", pinyin: "Rénshēng yǒu xuǎnzé, yíqiè kě gǎibiàn" },
    4: { chinese: "子路背米", pinyin: "Zǐlù bēi mǐ" },
    5: { chinese: "济南的泉水", pinyin: "Jǐnán de quánshuǐ" },
    6: { chinese: "除夕的由来", pinyin: "Chúxī de yóulái" },
    7: { chinese: "成语故事两则", pinyin: "Chéngyǔ gùshi liǎng zé" },
    8: { chinese: "“朝三暮四”的古今义", pinyin: "“Cháo sān mù sì” de gǔjīn yì" },
    9: { chinese: "别样鲁迅", pinyin: "Biéyàng Lǔ Xùn" },
    10: { chinese: "争论的奇迹", pinyin: "Zhēnglùn de qíjì" },
    11: { chinese: "闹钟的危害", pinyin: "Nàozhōng de wēihài" },
    12: { chinese: "海外用户玩儿微信", pinyin: "Hǎiwài yònghù wánr Wēixìn" },
    13: { chinese: "锯掉生活的“筐底”", pinyin: "Jù diào shēnghuó de “kuāngdǐ”" },
    14: { chinese: "北京的四合院", pinyin: "Běijīng de sìhéyuàn" },
    15: { chinese: "纸上谈兵", pinyin: "Zhǐshàng tánbīng" },
    16: { chinese: "体重与节食", pinyin: "Tǐzhòng yǔ jiéshí" },
    17: { chinese: "在最美好的时刻离开", pinyin: "Zài zuì měihǎo de shíkè líkāi" },
    18: { chinese: "抽象艺术美不美", pinyin: "Chōuxiàng yìshù měi bu měi" },
    19: { chinese: "家乡的萝卜饼", pinyin: "Jiāxiāng de luóbo bǐng" },
    20: { chinese: "小人书摊", pinyin: "Xiǎorénshū tān" },
    21: { chinese: "汉字叔叔：一个美国人的汉字情缘", pinyin: "Hànzì shūshu: yí ge Měiguórén de Hànzì qíngyuán" },
    22: { chinese: "阅读与思考", pinyin: "Yuèdú yǔ sīkǎo" },
    23: { chinese: "放手", pinyin: "Fàngshǒu" },
    24: { chinese: "支教行动", pinyin: "Zhījiào xíngdòng" },
    25: { chinese: "给自己加满水", pinyin: "Gěi zìjǐ jiā mǎn shuǐ" },
    26: { chinese: "你属于哪一种“忙”", pinyin: "Nǐ shǔyú nǎ yì zhǒng “máng”" },
    27: { chinese: "下棋", pinyin: "Xià qí" },
    28: { chinese: "最受欢迎的毕业生", pinyin: "Zuì shòu huānyíng de bìyèshēng" },
    29: { chinese: "培养对手", pinyin: "Péiyǎng duìshǒu" },
    30: { chinese: "竞争让市场更高效", pinyin: "Jìngzhēng ràng shìchǎng gèng gāoxiào" },
    31: { chinese: "登门槛效应", pinyin: "Dēng ménkǎn xiàoyìng" },
    32: { chinese: "身边的环保", pinyin: "Shēnbiān de huánbǎo" },
    33: { chinese: "以堵治堵——缓解交通有妙招", pinyin: "Yǐ dǔ zhì dǔ —— huǎnjiě jiāotōng yǒu miàozhāo" },
    34: { chinese: "鸟儿的护肤术", pinyin: "Niǎor de hùfū shù" },
    35: { chinese: "植物会出汗", pinyin: "Zhíwù huì chūhàn" },
    36: { chinese: "老舍与养花", pinyin: "Lǎo Shě yǔ yǎng huā" }
  }
};

const STORAGE_KEYS = {
  level: "hsk-study-active-level",
  lesson: "hsk-study-active-lesson",
  scroll: "hsk-study-scroll-y"
};

let activeLevelId = "hsk1";
let activeLessonId = courseLevels.hsk1.lessons[0].id;
let sectionObserver;

const baseSectionLinks = [
  { id: "lesson-vocabulary", label: "Từ vựng" },
  { id: "lesson-dialogue", label: "Hội thoại" },
  { id: "lesson-grammar", label: "Ngữ pháp" },
  { id: "lesson-exercises", label: "Bài tập" },
  { id: "lesson-summary", label: "Tóm tắt nhanh" }
];

function getSectionLinks(course = getCurrentCourse()) {
  return baseSectionLinks;
}

function renderActiveLesson() {
  const course = getCurrentCourse();
  const lesson = getCurrentLesson(course);
  renderLevelTabs();
  renderLessonTabs();
  renderSectionNav();
  renderLessonHead(course, lesson);
  renderLessonSections(lesson);
  setupSectionObserver();
}

function saveSelectionState() {
  try {
    localStorage.setItem(STORAGE_KEYS.level, activeLevelId);
    localStorage.setItem(STORAGE_KEYS.lesson, activeLessonId);
  } catch (error) {
    console.warn("Không lưu được trạng thái bài học.", error);
  }
}

function saveScrollState() {
  try {
    localStorage.setItem(STORAGE_KEYS.scroll, String(window.scrollY));
  } catch (error) {
    console.warn("Không lưu được vị trí đọc.", error);
  }
}

function restoreSavedState() {
  try {
    const savedLevelId = localStorage.getItem(STORAGE_KEYS.level);
    const savedLessonId = localStorage.getItem(STORAGE_KEYS.lesson);

    if (savedLevelId && courseLevels[savedLevelId]) {
      activeLevelId = savedLevelId;
    }

    const course = getCurrentCourse();
    const lessonExists = course.lessons.some((lesson) => lesson.id === savedLessonId);
    activeLessonId = lessonExists ? savedLessonId : course.lessons[0].id;
  } catch (error) {
    console.warn("Không đọc được trạng thái đã lưu.", error);
    activeLevelId = "hsk1";
    activeLessonId = courseLevels.hsk1.lessons[0].id;
  }
}

function restoreScrollState() {
  try {
    const savedScroll = localStorage.getItem(STORAGE_KEYS.scroll);
    const scrollY = Number(savedScroll);

    if (!Number.isFinite(scrollY) || scrollY < 0) {
      return;
    }

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo({ top: scrollY, behavior: "auto" });
      });
    });
  } catch (error) {
    console.warn("Không khôi phục được vị trí đọc.", error);
  }
}

function renderLessonTabs() {
  const course = getCurrentCourse();
  lessonTabs.innerHTML = course.lessons
    .map((lesson) => `
      <button class="lesson-tab ${lesson.id === activeLessonId ? "active" : ""}" type="button" data-lesson-id="${lesson.id}">
        Bài ${lesson.number}
      </button>
    `)
    .join("");
}

function renderLevelTabs() {
  levelTabs.innerHTML = Object.values(courseLevels)
    .map((course) => `
      <button class="level-tab ${course.id === activeLevelId ? "active" : ""}" type="button" data-level-id="${course.id}">
        ${course.label}
      </button>
    `)
    .join("");
}

function renderSectionNav() {
  sectionNav.innerHTML = getSectionLinks()
    .map((item, index) => `
      <a class="section-nav-link ${index === 0 ? "active" : ""}" href="#${item.id}" data-section-target="${item.id}">
        ${item.label}
      </a>
    `)
    .join("");
}

function normalizeStudyText(text = "") {
  return text.replace(/\s+/g, "").replace(/[“”]/g, "\"").trim();
}

function splitStudyPattern(text = "") {
  return text
    .split(/(?<=[。！？])/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function getStudyFocusSources(lesson) {
  return [
    ...lesson.vocabulary
      .map((item) => item.sample)
      .filter((item) => item?.chinese && item?.pinyin && item?.meaning),
    ...lesson.dialogueBlocks.flatMap((block) => block.lines || []),
    ...lesson.grammarNotes.flatMap((note) => [note.pattern, ...(note.examples || [])])
  ];
}

function findStudyFocusItem(lesson, chinese) {
  const target = normalizeStudyText(chinese);
  return getStudyFocusSources(lesson).find((item) => normalizeStudyText(item.chinese) === target) || null;
}

function resolveStudyFocusItem(lesson, chinese) {
  const directMatch = findStudyFocusItem(lesson, chinese);
  if (directMatch) {
    return directMatch;
  }

  const parts = splitStudyPattern(chinese);
  if (parts.length > 1) {
    const resolvedParts = parts
      .map((part) => findStudyFocusItem(lesson, part))
      .filter(Boolean);

    if (resolvedParts.length === parts.length) {
      return {
        chinese,
        pinyin: resolvedParts.map((item) => item.pinyin).join(" "),
        meaning: resolvedParts.map((item) => item.meaning).join(" ")
      };
    }
  }

  return {
    chinese,
    pinyin: "Pinyin sẽ được bổ sung theo mẫu câu trong bài.",
    meaning: "Nghĩa tiếng Việt bám theo mẫu trọng tâm của bài học."
  };
}

function getStudyFocusItems(course, lesson) {
  const focusPatterns = lesson.quickSummary?.patterns?.slice(0, 2) || [course.overview];
  return focusPatterns.map((pattern) => resolveStudyFocusItem(lesson, pattern));
}

function renderLessonHead(course, lesson) {
  const titleMeta = getLessonTitleMeta(course, lesson);
  const focusItems = getStudyFocusItems(course, lesson);
  lessonHead.innerHTML = `
    <div class="lesson-head-grid">
      <div>
        <p class="eyebrow">${course.label} • Bài ${lesson.number}</p>
        <h2 class="lesson-title lesson-title-cn">${titleMeta.chinese}</h2>
        <p class="lesson-title-pinyin">${titleMeta.pinyin}</p>
        <p class="lesson-title-vn">${titleMeta.vietnamese}</p>
        <p class="lesson-sub">${lesson.objective}</p>
      </div>
      <div class="info-card">
        <p class="info-label">Study Focus</p>
        <div class="study-focus-list">
          ${focusItems.map((item) => `
            <div class="study-focus-item">
              <p class="study-focus-cn">${item.chinese}</p>
              <p class="study-focus-py">${item.pinyin}</p>
              <p class="study-focus-vn">${item.meaning}</p>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `;
}

function getLessonTitleMeta(course, lesson) {
  const meta = lessonTitleMeta[course.id]?.[lesson.number];
  const vietnamese = lesson.title.replace(/^Bài\s+\d+:\s*/, "");

  return {
    chinese: lesson.titleChinese || meta?.chinese || lesson.title,
    pinyin: lesson.titlePinyin || meta?.pinyin || "",
    vietnamese
  };
}

function renderLessonSections(lesson) {
  lessonSections.innerHTML = lesson.placeholder ? renderPlaceholderLesson(lesson) : renderStudySections(lesson);
}

function renderStudySections(lesson) {
  return `
    ${renderVocabularySection(lesson)}
    ${renderDialogueSection(lesson)}
    ${renderGrammarSection(lesson)}
    ${renderExercisesSection(lesson)}
    ${renderQuickSummarySection(lesson)}
  `;
}

function renderVocabularySection(lesson) {
  return `
    <section class="section-card" id="lesson-vocabulary">
      <div class="section-head">
        <p class="eyebrow">1. Vocabulary</p>
        <h3>Từ vựng trọng tâm</h3>
      </div>
      <div class="vocab-table">
        <div class="vocab-row lesson1-head">
          <span>Chữ Hán</span>
          <span>Pinyin</span>
          <span>Nghĩa tiếng Việt</span>
          <span>Từ loại</span>
          <span>Ví dụ ngắn</span>
        </div>
        ${lesson.vocabulary.map((item) => `
          <div class="vocab-row lesson1-vocab-row">
            <span class="hanzi">${item.hanzi}</span>
            <span>${item.pinyin}</span>
            <span class="vocab-meaning">${item.meaning}${item.detail ? `<br><span class="footer-note">${item.detail}</span>` : ""}</span>
            <span class="vocab-type">${item.type}</span>
            <div class="vocab-example-card">
              <p class="vocab-example-cn">${item.sample?.chinese || "..."}</p>
              <p class="vocab-example-py">${item.sample?.pinyin || ""}</p>
              <p class="vocab-example-vn">${item.sample?.meaning || ""}</p>
            </div>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

function renderDialogueSection(lesson) {
  const dialogueBlocks = getDialogueBlocks(lesson);
  return `
    <section class="section-card" id="lesson-dialogue">
      <div class="section-head">
        <p class="eyebrow">2. Dialogue</p>
        <h3>Hội thoại bài học theo tình huống</h3>
      </div>
      <div class="dialogue-grid">
        ${dialogueBlocks.map((block, index) => `
          <div class="dialogue-card">
            <div class="dialogue-card-head">
              <p class="info-label">Tình huống ${index + 1}</p>
              <h4 class="dialogue-card-title">${block.title}</h4>
              ${block.note ? `<p class="dialogue-card-note">${block.note}</p>` : ""}
            </div>
            <div class="dialogue-box">
              ${block.lines.map((line) => `
                <div class="dialogue-line">
                  <p class="hanzi">${line.chinese}</p>
                  <p class="text-line">${line.pinyin}</p>
                  <p class="text-line">${line.meaning}</p>
                </div>
              `).join("")}
            </div>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

function getDialogueBlocks(lesson) {
  if (lesson.dialogueBlocks?.length) {
    return lesson.dialogueBlocks.slice(0, 4);
  }

  const baseDialogue = normalizeDialogueLines(lesson.dialogue || []);
  const chunks = chunkDialogueLines(baseDialogue, 2);
  const sampleLines = buildDialogueSupplementLines(lesson);

  const blocks = [
    {
      title: "Mở đầu bài học",
      note: "Tình huống làm quen với nội dung chính",
      lines: chunks[0] || sampleLines.slice(0, 2)
    },
    {
      title: "Trao đổi chính",
      note: "Hỏi đáp trọng tâm của bài",
      lines: chunks[1] || sampleLines.slice(2, 4)
    },
    {
      title: "Mở rộng thực hành",
      note: "Luyện thêm bằng câu ngắn quen thuộc",
      lines: chunks[2] || sampleLines.slice(4, 6)
    },
    {
      title: "Ứng dụng nhanh",
      note: "Một tình huống gần với đời sống thật",
      lines: chunks[3] || sampleLines.slice(6, 8)
    }
  ];

  return blocks.map((block) => ({
    ...block,
    lines: block.lines?.length ? block.lines : sampleLines.slice(0, 2)
  }));
}

function normalizeDialogueLines(lines) {
  return lines.map((line) => ({
    chinese: line.chinese,
    pinyin: line.pinyin,
    meaning: line.meaning
  }));
}

function chunkDialogueLines(lines, size) {
  const chunks = [];
  for (let index = 0; index < lines.length; index += size) {
    chunks.push(lines.slice(index, index + size));
  }
  return chunks;
}

function buildDialogueSupplementLines(lesson) {
  const samples = lesson.vocabulary
    .filter((item) => item.sample?.chinese && item.sample?.pinyin && item.sample?.meaning)
    .slice(0, 8)
    .map((item, index) => {
      const speaker = index % 2 === 0 ? "A" : "B";
      return {
        chinese: formatDialogueSpeaker(item.sample.chinese, speaker),
        pinyin: formatDialogueSpeaker(item.sample.pinyin, speaker),
        meaning: formatDialogueSpeaker(item.sample.meaning, speaker)
      };
    });

  if (samples.length >= 8) {
    return samples;
  }

  const fallback = normalizeDialogueLines(lesson.dialogue || []);
  while (samples.length < 8 && fallback.length > 0) {
    const line = fallback[samples.length % fallback.length];
    samples.push(line);
  }

  return samples;
}

function formatDialogueSpeaker(text, speaker) {
  return /^[A-Z]:\s/.test(text) ? text : `${speaker}: ${text}`;
}

function renderGrammarSection(lesson) {
  return `
    <section class="section-card" id="lesson-grammar">
      <div class="section-head">
        <p class="eyebrow">3. Grammar</p>
        <h3>Ngữ pháp chính của bài</h3>
      </div>
      <div class="menu-list">
        ${lesson.grammarNotes.map((note, index) => `
          <div class="info-card">
            <p class="info-label">Điểm ${index + 1}</p>
            <p class="info-value"><strong>${note.title}</strong><br>${note.text}</p>
            ${note.pattern ? renderGrammarPattern(note.pattern) : ""}
            ${note.example ? renderGrammarModel(note.example) : ""}
            ${renderGrammarExamples(note)}
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

const grammarSentenceGuide = {
  "你好": { pinyin: "Nǐ hǎo.", meaning: "Xin chào." },
  "您好": { pinyin: "Nín hǎo.", meaning: "Xin chào ạ." },
  "你好。": { pinyin: "Nǐ hǎo.", meaning: "Xin chào." },
  "您好。": { pinyin: "Nín hǎo.", meaning: "Xin chào ạ." },
  "您好，老师。": { pinyin: "Nín hǎo, lǎoshī.", meaning: "Em chào thầy/cô ạ." },
  "你叫什么名字？": { pinyin: "Nǐ jiào shénme míngzi?", meaning: "Bạn tên là gì?" },
  "我叫安。": { pinyin: "Wǒ jiào Ān.", meaning: "Tôi tên là An." },
  "我叫南。": { pinyin: "Wǒ jiào Nán.", meaning: "Tôi tên là Nam." },
  "你是学生。": { pinyin: "Nǐ shì xuésheng.", meaning: "Bạn là học sinh/sinh viên." },
  "你是学生吗？": { pinyin: "Nǐ shì xuésheng ma?", meaning: "Bạn là học sinh/sinh viên phải không?" },
  "是，我是学生。": { pinyin: "Shì, wǒ shì xuésheng.", meaning: "Đúng, tôi là học sinh/sinh viên." },
  "我叫安。你呢？": { pinyin: "Wǒ jiào Ān. Nǐ ne?", meaning: "Tôi tên là An. Còn bạn thì sao?" },
  "我是学生，你呢？": { pinyin: "Wǒ shì xuésheng, nǐ ne?", meaning: "Tôi là học sinh/sinh viên, còn bạn thì sao?" },
  "您好，我叫林。您呢？": { pinyin: "Nín hǎo, wǒ jiào Lín. Nín ne?", meaning: "Xin chào ạ, tôi tên là Linh. Còn thầy/cô thì sao ạ?" },
  "很高兴认识你。": { pinyin: "Hěn gāoxìng rènshi nǐ.", meaning: "Rất vui được làm quen với bạn." },
  "我也很高兴认识你。": { pinyin: "Wǒ yě hěn gāoxìng rènshi nǐ.", meaning: "Tôi cũng rất vui được làm quen với bạn." },
  "你好，很高兴认识你。": { pinyin: "Nǐ hǎo, hěn gāoxìng rènshi nǐ.", meaning: "Xin chào, rất vui được làm quen với bạn." },
  "我是越南人。": { pinyin: "Wǒ shì Yuènán rén.", meaning: "Tôi là người Việt Nam." },
  "她是老师。": { pinyin: "Tā shì lǎoshī.", meaning: "Cô ấy là giáo viên." },
  "他是学生。": { pinyin: "Tā shì xuésheng.", meaning: "Anh ấy là học sinh/sinh viên." },
  "你是哪国人？": { pinyin: "Nǐ shì nǎ guó rén?", meaning: "Bạn là người nước nào?" },
  "他是哪国人？": { pinyin: "Tā shì nǎ guó rén?", meaning: "Anh ấy là người nước nào?" },
  "她是中国人。": { pinyin: "Tā shì Zhōngguó rén.", meaning: "Cô ấy là người Trung Quốc." },
  "不是，我是学生。": { pinyin: "Bú shì, wǒ shì xuésheng.", meaning: "Không, tôi là học sinh/sinh viên." },
  "你是老师吗？": { pinyin: "Nǐ shì lǎoshī ma?", meaning: "Bạn là giáo viên phải không?" },
  "不是。": { pinyin: "Bú shì.", meaning: "Không phải." },
  "你几岁？": { pinyin: "Nǐ jǐ suì?", meaning: "Bạn mấy tuổi?" },
  "我十八岁。": { pinyin: "Wǒ shíbā suì.", meaning: "Tôi 18 tuổi." },
  "他二十岁。": { pinyin: "Tā èrshí suì.", meaning: "Anh ấy 20 tuổi." },
  "三个人": { pinyin: "Sān ge rén.", meaning: "Ba người." },
  "一个人": { pinyin: "Yí ge rén.", meaning: "Một người." },
  "二个学生": { pinyin: "Èr ge xuésheng.", meaning: "Hai học sinh/sinh viên." },
  "四个人": { pinyin: "Sì ge rén.", meaning: "Bốn người." },
  "我家有四个人。": { pinyin: "Wǒ jiā yǒu sì ge rén.", meaning: "Nhà tôi có bốn người." },
  "我家有三个人。": { pinyin: "Wǒ jiā yǒu sān ge rén.", meaning: "Nhà tôi có ba người." },
  "学校有十个学生。": { pinyin: "Xuéxiào yǒu shí ge xuésheng.", meaning: "Trường có mười học sinh." },
  "这儿有二本书。": { pinyin: "Zhèr yǒu èr běn shū.", meaning: "Ở đây có hai quyển sách." },
  "五月八号": { pinyin: "Wǔ yuè bā hào.", meaning: "Ngày 8 tháng 5." },
  "今天五月八号。": { pinyin: "Jīntiān wǔ yuè bā hào.", meaning: "Hôm nay là ngày 8 tháng 5." },
  "今天三月二号。": { pinyin: "Jīntiān sān yuè èr hào.", meaning: "Hôm nay là ngày 2 tháng 3." },
  "明天六月一号。": { pinyin: "Míngtiān liù yuè yī hào.", meaning: "Ngày mai là ngày 1 tháng 6." },
  "现在几点？": { pinyin: "Xiànzài jǐ diǎn?", meaning: "Bây giờ là mấy giờ?" },
  "现在八点。": { pinyin: "Xiànzài bā diǎn.", meaning: "Bây giờ là 8 giờ." },
  "现在三点。": { pinyin: "Xiànzài sān diǎn.", meaning: "Bây giờ là 3 giờ." },
  "今天星期五。": { pinyin: "Jīntiān xīngqīwǔ.", meaning: "Hôm nay là thứ sáu." },
  "今天星期一。": { pinyin: "Jīntiān xīngqīyī.", meaning: "Hôm nay là thứ hai." },
  "明天见。": { pinyin: "Míngtiān jiàn.", meaning: "Ngày mai gặp nhé." },
  "今天三号。": { pinyin: "Jīntiān sān hào.", meaning: "Hôm nay là ngày 3." },
  "我的妈妈": { pinyin: "Wǒ de māma.", meaning: "Mẹ của tôi." },
  "我的爸爸": { pinyin: "Wǒ de bàba.", meaning: "Bố của tôi." },
  "你的姐姐": { pinyin: "Nǐ de jiějie.", meaning: "Chị gái của bạn." },
  "这是我的家。": { pinyin: "Zhè shì wǒ de jiā.", meaning: "Đây là nhà của tôi." },
  "这是我妈妈。": { pinyin: "Zhè shì wǒ māma.", meaning: "Đây là mẹ tôi." },
  "那是我爸爸。": { pinyin: "Nà shì wǒ bàba.", meaning: "Kia là bố tôi." },
  "这是谁？": { pinyin: "Zhè shì shéi?", meaning: "Đây là ai?" },
  "那是谁？": { pinyin: "Nà shì shéi?", meaning: "Kia là ai?" },
  "他是谁？": { pinyin: "Tā shì shéi?", meaning: "Anh ấy là ai?" },
  "我在学校。": { pinyin: "Wǒ zài xuéxiào.", meaning: "Tôi ở trường." },
  "我在教室。": { pinyin: "Wǒ zài jiàoshì.", meaning: "Tôi ở lớp học." },
  "老师在这儿。": { pinyin: "Lǎoshī zài zhèr.", meaning: "Giáo viên ở đây." },
  "书在桌子上。": { pinyin: "Shū zài zhuōzi shàng.", meaning: "Sách ở trên bàn." },
  "教室在哪儿？": { pinyin: "Jiàoshì zài nǎr?", meaning: "Lớp học ở đâu?" },
  "你在哪儿？": { pinyin: "Nǐ zài nǎr?", meaning: "Bạn ở đâu?" },
  "书在哪儿？": { pinyin: "Shū zài nǎr?", meaning: "Sách ở đâu?" },
  "老师在哪儿？": { pinyin: "Lǎoshī zài nǎr?", meaning: "Giáo viên ở đâu?" },
  "在桌子上": { pinyin: "Zài zhuōzi shàng.", meaning: "Ở trên bàn." },
  "笔在书上。": { pinyin: "Bǐ zài shū shàng.", meaning: "Bút ở trên sách." },
  "杯子在桌子上。": { pinyin: "Bēizi zài zhuōzi shàng.", meaning: "Cái cốc ở trên bàn." },
  "我喜欢吃米饭。": { pinyin: "Wǒ xǐhuan chī mǐfàn.", meaning: "Tôi thích ăn cơm." },
  "我喜欢喝茶。": { pinyin: "Wǒ xǐhuan hē chá.", meaning: "Tôi thích uống trà." },
  "他喜欢面条。": { pinyin: "Tā xǐhuan miàntiáo.", meaning: "Anh ấy thích mì." },
  "我喜欢吃苹果。": { pinyin: "Wǒ xǐhuan chī píngguǒ.", meaning: "Tôi thích ăn táo." },
  "我不喜欢喝茶。": { pinyin: "Wǒ bù xǐhuan hē chá.", meaning: "Tôi không thích uống trà." },
  "我不喜欢咖啡。": { pinyin: "Wǒ bù xǐhuan kāfēi.", meaning: "Tôi không thích cà phê." },
  "他不喜欢米饭。": { pinyin: "Tā bù xǐhuan mǐfàn.", meaning: "Anh ấy không thích cơm." },
  "你不喜欢茶吗？": { pinyin: "Nǐ bù xǐhuan chá ma?", meaning: "Bạn không thích trà à?" },
  "你喜欢吃什么？": { pinyin: "Nǐ xǐhuan chī shénme?", meaning: "Bạn thích ăn gì?" },
  "你喝什么？": { pinyin: "Nǐ hē shénme?", meaning: "Bạn uống gì?" },
  "你喜欢什么？": { pinyin: "Nǐ xǐhuan shénme?", meaning: "Bạn thích gì?" },
  "这个多少钱？": { pinyin: "Zhè ge duōshao qián?", meaning: "Cái này bao nhiêu tiền?" },
  "那个多少钱？": { pinyin: "Nà ge duōshao qián?", meaning: "Cái kia bao nhiêu tiền?" },
  "苹果多少钱？": { pinyin: "Píngguǒ duōshao qián?", meaning: "Táo bao nhiêu tiền?" },
  "这个书多少钱？": { pinyin: "Zhè ge shū duōshao qián?", meaning: "Cuốn sách này bao nhiêu tiền?" },
  "我要这个。": { pinyin: "Wǒ yào zhè ge.", meaning: "Tôi lấy cái này." },
  "我要那个。": { pinyin: "Wǒ yào nà ge.", meaning: "Tôi lấy cái kia." },
  "我要两个苹果。": { pinyin: "Wǒ yào liǎng ge píngguǒ.", meaning: "Tôi lấy hai quả táo." },
  "我不要这个。": { pinyin: "Wǒ bú yào zhè ge.", meaning: "Tôi không lấy cái này." },
  "两个苹果": { pinyin: "Liǎng ge píngguǒ.", meaning: "Hai quả táo." },
  "一个苹果": { pinyin: "Yí ge píngguǒ.", meaning: "Một quả táo." },
  "两个杯子": { pinyin: "Liǎng ge bēizi.", meaning: "Hai cái cốc." },
  "我晚上学习。": { pinyin: "Wǒ wǎnshang xuéxí.", meaning: "Tôi học vào buổi tối." },
  "我早上起床。": { pinyin: "Wǒ zǎoshang qǐchuáng.", meaning: "Tôi thức dậy vào buổi sáng." },
  "他晚上工作。": { pinyin: "Tā wǎnshang gōngzuò.", meaning: "Anh ấy làm việc vào buổi tối." },
  "我们下午回家。": { pinyin: "Wǒmen xiàwǔ huí jiā.", meaning: "Chúng tôi về nhà vào buổi chiều." },
  "我六点起床。": { pinyin: "Wǒ liù diǎn qǐchuáng.", meaning: "Tôi thức dậy lúc 6 giờ." },
  "我八点学习。": { pinyin: "Wǒ bā diǎn xuéxí.", meaning: "Tôi học lúc 8 giờ." },
  "他十点睡觉。": { pinyin: "Tā shí diǎn shuìjiào.", meaning: "Anh ấy đi ngủ lúc 10 giờ." },
  "我们七点回家。": { pinyin: "Wǒmen qī diǎn huí jiā.", meaning: "Chúng tôi về nhà lúc 7 giờ." },
  "我们都学习汉语。": { pinyin: "Wǒmen dōu xuéxí Hànyǔ.", meaning: "Chúng tôi đều học tiếng Trung." },
  "我们都喜欢汉语。": { pinyin: "Wǒmen dōu xǐhuan Hànyǔ.", meaning: "Chúng tôi đều thích tiếng Trung." },
  "他们都是学生。": { pinyin: "Tāmen dōu shì xuésheng.", meaning: "Họ đều là học sinh/sinh viên." },
  "我们都回家。": { pinyin: "Wǒmen dōu huí jiā.", meaning: "Chúng tôi đều về nhà." },
  "你来吗？": { pinyin: "Nǐ lái ma?", meaning: "Bạn có đến không?" },
  "我去学校。": { pinyin: "Wǒ qù xuéxiào.", meaning: "Tôi đi đến trường." },
  "你来学校吗？": { pinyin: "Nǐ lái xuéxiào ma?", meaning: "Bạn đến trường không?" },
  "明天你来吗？": { pinyin: "Míngtiān nǐ lái ma?", meaning: "Ngày mai bạn có đến không?" },
  "我们一起学习。": { pinyin: "Wǒmen yìqǐ xuéxí.", meaning: "Chúng tôi cùng học." },
  "我们一起去。": { pinyin: "Wǒmen yìqǐ qù.", meaning: "Chúng tôi cùng đi." },
  "我们一起吃饭。": { pinyin: "Wǒmen yìqǐ chīfàn.", meaning: "Chúng tôi cùng ăn cơm." },
  "我们一起看书。": { pinyin: "Wǒmen yìqǐ kàn shū.", meaning: "Chúng tôi cùng đọc sách." },
  "老师，明天见。": { pinyin: "Lǎoshī, míngtiān jiàn.", meaning: "Thầy/cô, ngày mai gặp ạ." },
  "同学，明天见。": { pinyin: "Tóngxué, míngtiān jiàn.", meaning: "Bạn học, ngày mai gặp nhé." },
  "我去商店。": { pinyin: "Wǒ qù shāngdiàn.", meaning: "Tôi đi cửa hàng." },
  "他去饭店。": { pinyin: "Tā qù fàndiàn.", meaning: "Anh ấy đi nhà hàng." },
  "我们去商店。": { pinyin: "Wǒmen qù shāngdiàn.", meaning: "Chúng tôi đi cửa hàng." },
  "我回家。": { pinyin: "Wǒ huí jiā.", meaning: "Tôi về nhà." },
  "他回学校。": { pinyin: "Tā huí xuéxiào.", meaning: "Anh ấy quay lại trường." },
  "你去哪儿？": { pinyin: "Nǐ qù nǎr?", meaning: "Bạn đi đâu?" },
  "他去哪儿？": { pinyin: "Tā qù nǎr?", meaning: "Anh ấy đi đâu?" },
  "你去商店吗？": { pinyin: "Nǐ qù shāngdiàn ma?", meaning: "Bạn đi cửa hàng không?" },
  "今天天气很好。": { pinyin: "Jīntiān tiānqì hěn hǎo.", meaning: "Hôm nay thời tiết rất đẹp." },
  "今天天气很热。": { pinyin: "Jīntiān tiānqì hěn rè.", meaning: "Hôm nay thời tiết rất nóng." },
  "今天天气不冷。": { pinyin: "Jīntiān tiānqì bù lěng.", meaning: "Hôm nay thời tiết không lạnh." },
  "今天不热。": { pinyin: "Jīntiān bú rè.", meaning: "Hôm nay không nóng." },
  "今天不冷。": { pinyin: "Jīntiān bù lěng.", meaning: "Hôm nay không lạnh." },
  "天气不好。": { pinyin: "Tiānqì bù hǎo.", meaning: "Thời tiết không đẹp." },
  "明天不热。": { pinyin: "Míngtiān bú rè.", meaning: "Ngày mai không nóng." },
  "今天冷吗？": { pinyin: "Jīntiān lěng ma?", meaning: "Hôm nay lạnh không?" },
  "今天热吗？": { pinyin: "Jīntiān rè ma?", meaning: "Hôm nay nóng không?" },
  "明天冷吗？": { pinyin: "Míngtiān lěng ma?", meaning: "Ngày mai lạnh không?" },
  "天气好吗？": { pinyin: "Tiānqì hǎo ma?", meaning: "Thời tiết đẹp không?" },
  "我有汉语书。": { pinyin: "Wǒ yǒu Hànyǔ shū.", meaning: "Tôi có sách tiếng Trung." },
  "我有书。": { pinyin: "Wǒ yǒu shū.", meaning: "Tôi có sách." },
  "他有朋友。": { pinyin: "Tā yǒu péngyou.", meaning: "Anh ấy có bạn." },
  "我有一个哥哥。": { pinyin: "Wǒ yǒu yí ge gēge.", meaning: "Tôi có một anh trai." },
  "我没有姐姐。": { pinyin: "Wǒ méiyǒu jiějie.", meaning: "Tôi không có chị gái." },
  "我没有书。": { pinyin: "Wǒ méiyǒu shū.", meaning: "Tôi không có sách." },
  "她没有哥哥。": { pinyin: "Tā méiyǒu gēge.", meaning: "Cô ấy không có anh trai." },
  "我没有汉语书。": { pinyin: "Wǒ méiyǒu Hànyǔ shū.", meaning: "Tôi không có sách tiếng Trung." },
  "你有书吗？": { pinyin: "Nǐ yǒu shū ma?", meaning: "Bạn có sách không?" },
  "你有汉语书吗？": { pinyin: "Nǐ yǒu Hànyǔ shū ma?", meaning: "Bạn có sách tiếng Trung không?" },
  "你有姐姐吗？": { pinyin: "Nǐ yǒu jiějie ma?", meaning: "Bạn có chị gái không?" },
  "他有朋友吗？": { pinyin: "Tā yǒu péngyou ma?", meaning: "Anh ấy có bạn không?" },
  "她是谁？": { pinyin: "Tā shì shéi?", meaning: "Cô ấy là ai?" },
  "你做什么？": { pinyin: "Nǐ zuò shénme?", meaning: "Bạn làm gì?" },
  "你看什么？": { pinyin: "Nǐ kàn shénme?", meaning: "Bạn xem gì?" },
  "你写什么？": { pinyin: "Nǐ xiě shénme?", meaning: "Bạn viết gì?" },
  "我也写汉字。": { pinyin: "Wǒ yě xiě Hànzì.", meaning: "Tôi cũng viết chữ Hán." },
  "我也学习汉语。": { pinyin: "Wǒ yě xuéxí Hànyǔ.", meaning: "Tôi cũng học tiếng Trung." },
  "他也看书。": { pinyin: "Tā yě kàn shū.", meaning: "Anh ấy cũng đọc sách." },
  "我们也去。": { pinyin: "Wǒmen yě qù.", meaning: "Chúng tôi cũng đi." },
  "我是学生。": { pinyin: "Wǒ shì xuésheng.", meaning: "Tôi là học sinh/sinh viên." },
  "你学习汉语吗？": { pinyin: "Nǐ xuéxí Hànyǔ ma?", meaning: "Bạn có học tiếng Trung không?" }
};

function renderGrammarPattern(pattern) {
  const items = normalizeGrammarItems(pattern, "Mẫu:");
  return `
    <div class="grammar-study-wrap">
      <p class="footer-note"><strong>Mẫu câu</strong></p>
      <div class="grammar-study-list">
        ${items.map((item) => renderGrammarStudyBlock(item)).join("")}
      </div>
    </div>
  `;
}

function renderGrammarModel(example) {
  const items = normalizeGrammarItems(example, "Ví dụ:");
  return `
    <div class="grammar-study-wrap">
      <p class="footer-note"><strong>Câu mẫu</strong></p>
      <div class="grammar-study-list">
        ${items.map((item) => renderGrammarStudyBlock(item)).join("")}
      </div>
    </div>
  `;
}

function normalizeGrammarItems(value, prefix = "") {
  if (!value) {
    return [];
  }

  if (Array.isArray(value)) {
    return value;
  }

  if (typeof value === "object") {
    return [value];
  }

  const raw = prefix ? value.replace(new RegExp(`^${prefix}\\s*`), "") : value;
  return raw
    .split(/\s*\/\s*|\s*→\s*/)
    .filter(Boolean)
    .map((item) => item.trim());
}

function renderGrammarExamples(note) {
  if (note.examples?.length) {
    return `
      <div class="grammar-study-wrap mini-example-list">
        <p class="footer-note"><strong>Ví dụ</strong></p>
        <div class="grammar-study-list">
          ${note.examples.map((item) => renderGrammarStudyBlock(item)).join("")}
        </div>
      </div>
    `;
  }

  const title = note.title;
  const examplesMap = {
    "1. Lời chào cơ bản: 你好 / 您好": [
      "你好，同学。",
      "您好，老师。",
      "您好，王老师。"
    ],
    "2. Hỏi và trả lời về tên với 叫": [
      "你叫什么名字？",
      "我叫安。",
      "我叫南。"
    ],
    "3. Câu hỏi có/không với 吗": [
      "你是学生吗？",
      "他是老师吗？",
      "是，我是学生。"
    ],
    "4. Dùng 呢 để hỏi lại cho tự nhiên": [
      "我叫安。你呢？",
      "我是学生，你呢？",
      "您好，我叫林。您呢？"
    ],
    "5. Cụm giao tiếp hoàn chỉnh 很高兴认识你": [
      "很高兴认识你。",
      "我也很高兴认识你。",
      "你好，很高兴认识你。"
    ]
  };

  const examples = examplesMap[title] || [];
  return examples.length
    ? `
      <div class="grammar-study-wrap mini-example-list">
        <p class="footer-note"><strong>Ví dụ</strong></p>
        <div class="grammar-study-list">
          ${examples.map((item) => renderGrammarStudyBlock(item)).join("")}
        </div>
      </div>
    `
    : "";
}

function renderGrammarStudyBlock(sentence) {
  const item = typeof sentence === "string"
    ? { chinese: sentence, ...(grammarSentenceGuide[sentence] || {}) }
    : sentence;
  return `
    <div class="grammar-study-card">
      <p class="grammar-study-cn">${item.chinese || ""}</p>
      <p class="grammar-study-py">${item.pinyin || ""}</p>
      <p class="grammar-study-vn">${item.meaning || ""}</p>
    </div>
  `;
}

function renderExercisesSection(lesson) {
  return `
    <section class="section-card" id="lesson-exercises">
      <div class="section-head">
        <p class="eyebrow">4. Exercises</p>
        <h3>Bài tập luyện ngay sau phần ngữ pháp</h3>
      </div>
      <div class="practice-layout">
        ${lesson.studyExercises.matching.map((item) => renderExerciseCard("Matching", item.question, renderListBody(item.prompt, item.options), item.answer)).join("")}
        ${lesson.studyExercises.fillBlanks.map((item) => renderExerciseCard("Fill in the Blank", item.question, renderListBody(item.prompt), item.answer)).join("")}
        ${lesson.studyExercises.multipleChoice.map((item) => renderExerciseCard("Multiple Choice", item.question, renderListBody(item.options), item.answer)).join("")}
        ${lesson.studyExercises.dialogueCompletion.map((item) => renderExerciseCard("Dialogue Completion", item.question, renderDialogueBody(item.prompt), item.answer)).join("")}
      </div>
    </section>
  `;
}

function renderListBody(lines, extraLines = []) {
  return `
    <div class="menu-list">
      ${lines.map((line) => `<div class="menu-link">${line}</div>`).join("")}
      ${extraLines.map((line) => `<div class="menu-link">${line}</div>`).join("")}
    </div>
  `;
}

function renderDialogueBody(lines) {
  return `
    <div class="dialogue-box">
      ${lines.map((line) => `
        <div class="dialogue-line">
          <p class="hanzi">${line}</p>
        </div>
      `).join("")}
    </div>
  `;
}

function renderExerciseCard(label, title, body, answer) {
  return `
    <div class="exercise-card">
      <p class="eyebrow">${label}</p>
      <h3>${title}</h3>
      ${body}
      <button class="answer-toggle" type="button">Xem đáp án</button>
      <div class="exercise-answer" hidden>
        <strong>Đáp án:</strong> ${answer}
      </div>
    </div>
  `;
}

function renderQuickSummarySection(lesson) {
  return `
    <section class="section-card" id="lesson-summary">
      <div class="section-head">
        <p class="eyebrow">5. Quick Summary</p>
        <h3>Tóm tắt nhanh</h3>
      </div>
      <div class="practice-layout">
        <div class="exercise-card">
          <p class="eyebrow">Key Words</p>
          <div class="menu-list">
            ${lesson.quickSummary.words.map((item) => `<div class="menu-link">${item}</div>`).join("")}
          </div>
        </div>
        <div class="exercise-card">
          <p class="eyebrow">Key Patterns</p>
          <div class="menu-list">
            ${lesson.quickSummary.patterns.map((item) => `<div class="menu-link">${item}</div>`).join("")}
          </div>
        </div>
      </div>
      <div class="info-card summary-card">
        <p class="info-label">Self-check Reminder</p>
        <p class="info-value">${lesson.quickSummary.reminder}</p>
        <p class="footer-note">${lesson.studyExercises.selfCheck}</p>
      </div>
    </section>
  `;
}

function renderTextListSection(label, title, items) {
  return `
    <section class="section-card">
      <div class="section-head">
        <p class="eyebrow">${label}</p>
        <h3>${title}</h3>
      </div>
      <div class="menu-list">
        ${items.map((item) => `<div class="menu-link">${item}</div>`).join("")}
      </div>
    </section>
  `;
}

function renderCharacterSection(items) {
  return `
    <section class="section-card">
      <div class="section-head">
        <p class="eyebrow">Characters</p>
        <h3>Chữ Hán cần chú ý</h3>
      </div>
      <div class="menu-list">
        ${items.map((item) => `
          <div class="info-card">
            <p class="hanzi">${item.hanzi}</p>
            <p class="info-value">${item.note}</p>
            ${item.practice ? `<p class="footer-note">${item.practice}</p>` : ""}
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

function renderWorkbookSection(workbook) {
  return `
    <section class="section-card">
      <div class="section-head">
        <p class="eyebrow">Workbook</p>
        <h3>Bài tập kiểu workbook</h3>
      </div>
      <div class="lesson-sections workbook-grid">
        ${renderWorkbookCard("Listening", workbook.listening)}
        ${renderWorkbookCard("Reading", workbook.reading)}
        ${renderWorkbookCard("Pronunciation", workbook.pronunciation)}
        ${renderWorkbookCard("Character Writing", workbook.characterWriting)}
        ${renderWorkbookCard("Matching", workbook.matching)}
        ${renderWorkbookCard("Fill in the Blank", workbook.fillBlanks)}
        ${renderWorkbookChoiceCard(workbook.multipleChoice)}
      </div>
    </section>
  `;
}

function renderWorkbookCard(title, items) {
  return `
    <div class="workbook-card compact-card">
      <p class="eyebrow">${title}</p>
      <div class="menu-list">
        ${items.map((item) => `<div class="menu-link">${item}</div>`).join("")}
      </div>
    </div>
  `;
}

function renderWorkbookChoiceCard(items) {
  return `
    <div class="workbook-card compact-card">
      <p class="eyebrow">Multiple Choice</p>
      <div class="menu-list">
        ${items.map((item) => `
          <div class="menu-link">
            <strong>${item.question}</strong><br>
            ${item.options.join(" / ")}<br>
            <span class="footer-note">Đáp án gợi ý: ${item.answer}</span>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function renderPlaceholderLesson(lesson) {
  const block = (id, label, text) => `
    <section class="section-card" id="${id}">
      <div class="section-head">
        <p class="eyebrow">${label}</p>
        <h3>${text}</h3>
      </div>
      <p class="placeholder-text">Nội dung chi tiết của bài này sẽ được viết theo cùng study flow: Vocabulary, Dialogue, Grammar, Exercises và Quick Summary.</p>
    </section>
  `;

  return [
    block("lesson-vocabulary", "1. Vocabulary", "Từ vựng"),
    block("lesson-dialogue", "2. Dialogue", "Hội thoại"),
    block("lesson-grammar", "3. Grammar", "Ngữ pháp"),
    block("lesson-exercises", "4. Exercises", "Bài tập"),
    block("lesson-summary", "5. Quick Summary", "Tóm tắt nhanh")
  ].join("");
}

function setupSectionObserver() {
  if (sectionObserver) {
    sectionObserver.disconnect();
  }

  const navLinks = Array.from(sectionNav.querySelectorAll(".section-nav-link"));
  const sections = getSectionLinks()
    .map((item) => document.getElementById(item.id))
    .filter(Boolean);

  const setActiveLink = (id) => {
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.dataset.sectionTarget === id);
    });
  };

  sectionObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visible.length > 0) {
        setActiveLink(visible[0].target.id);
      }
    },
    {
      rootMargin: "-20% 0px -60% 0px",
      threshold: [0.2, 0.5, 0.8]
    }
  );

  sections.forEach((section) => sectionObserver.observe(section));
}

lessonTabs.addEventListener("click", (event) => {
  const button = event.target.closest(".lesson-tab");
  if (!button) {
    return;
  }

  activeLessonId = button.dataset.lessonId;
  saveSelectionState();
  saveScrollState();
  renderActiveLesson();
});

levelTabs.addEventListener("click", (event) => {
  const button = event.target.closest(".level-tab");
  if (!button) {
    return;
  }

  activeLevelId = button.dataset.levelId;
  activeLessonId = getCurrentCourse().lessons[0].id;
  saveSelectionState();
  saveScrollState();
  renderActiveLesson();
});

lessonSections.addEventListener("click", (event) => {
  const button = event.target.closest(".answer-toggle");
  if (!button) {
    return;
  }

  const answerBox = button.nextElementSibling;
  if (!answerBox) {
    return;
  }

  const isHidden = answerBox.hasAttribute("hidden");
  if (isHidden) {
    answerBox.removeAttribute("hidden");
    button.textContent = "Ẩn đáp án";
  } else {
    answerBox.setAttribute("hidden", "");
    button.textContent = "Xem đáp án";
  }
});

window.addEventListener("scroll", saveScrollState, { passive: true });
window.addEventListener("beforeunload", saveScrollState);

restoreSavedState();
renderActiveLesson();
saveSelectionState();
restoreScrollState();

function getCurrentCourse() {
  return courseLevels[activeLevelId] || courseLevels.hsk1;
}

function getCurrentLesson(course = getCurrentCourse()) {
  return course.lessons.find((item) => item.id === activeLessonId) || course.lessons[0];
}

