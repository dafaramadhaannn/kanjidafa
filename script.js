const KANJI_DATA = [
  // Halaman 1 (1 - 41)
  { no: 1, kanji: "魚", kana: "さかな", romaji: "sakana", arti: "Ikan" },
  { no: 2, kanji: "肉", kana: "にく", romaji: "niku", arti: "Daging" },
  { no: 3, kanji: "卵", kana: "たまご", romaji: "tamago", arti: "Telur" },
  { no: 4, kanji: "水", kana: "みず", romaji: "mizu", arti: "Air" },
  { no: 5, kanji: "食べます", kana: "たべます", romaji: "tabemasu", arti: "Makan" },
  { no: 6, kanji: "飲みます", kana: "のみます", romaji: "nomimasu", arti: "Minum" },
  { no: 7, kanji: "大きい", kana: "おおきい", romaji: "ookii", arti: "Besar" },
  { no: 8, kanji: "小さい", kana: "ちいさい", romaji: "chiisai", arti: "Kecil" },
  { no: 9, kanji: "新しい", kana: "あたらしい", romaji: "atarashii", arti: "Baru" },
  { no: 10, kanji: "古い", kana: "ふるい", romaji: "furui", arti: "Lama, usang" },
  { no: 11, kanji: "〜時", kana: "〜じ", romaji: "~ji", arti: "~ jam" },
  { no: 12, kanji: "〜分", kana: "〜ふん、ぷん、ぶん", romaji: "~fun, pun, bun", arti: "~ menit" },
  { no: 13, kanji: "〜半", kana: "〜はん", romaji: "~han", arti: "~ setengah" },
  { no: 14, kanji: "月曜日", kana: "げつようび", romaji: "getsuyoubi", arti: "Senin" },
  { no: 15, kanji: "火曜日", kana: "かようび", romaji: "kayoubi", arti: "Selasa" },
  { no: 16, kanji: "水曜日", kana: "すいようび", romaji: "suiyoubi", arti: "Rabo" },
  { no: 17, kanji: "木曜日", kana: "もくようび", romaji: "mokuyoubi", arti: "Kamis" },
  { no: 18, kanji: "金曜日", kana: "きんようび", romaji: "kinyoubi", arti: "Jumat" },
  { no: 19, kanji: "土曜日", kana: "どようび", romaji: "doyoubi", arti: "Sabtu" },
  { no: 20, kanji: "日曜日", kana: "にちようび", romaji: "nichiyoubi", arti: "Minggu" },
  { no: 21, kanji: "言います", kana: "いいます", romaji: "iimasu", arti: "Berkata" },
  { no: 22, kanji: "話します", kana: "はなします", romaji: "hanashimasu", arti: "Berbicara" },
  { no: 23, kanji: "読みます", kana: "よみます", romaji: "yomimasu", arti: "Membaca" },
  { no: 24, kanji: "見ます", kana: "みます", romaji: "mimasu", arti: "Melihat" },
  { no: 25, kanji: "聞きます", kana: "ききます", romaji: "kikimasu", arti: "Mendengarkan" },
  { no: 26, kanji: "書きます", kana: "かきます", romaji: "kakimasu", arti: "Menulis" },
  { no: 27, kanji: "一", kana: "いち", romaji: "ichi", arti: "Satu" },
  { no: 28, kanji: "二", kana: "に", romaji: "ni", arti: "Dua" },
  { no: 29, kanji: "三", kana: "さん", romaji: "san", arti: "Tiga" },
  { no: 30, kanji: "四", kana: "よん、し", romaji: "yon, shi", arti: "Empat" },
  { no: 31, kanji: "五", kana: "ご", romaji: "go", arti: "Lima" },
  { no: 32, kanji: "六", kana: "ろく", romaji: "roku", arti: "Enam" },
  { no: 33, kanji: "七", kana: "なな、しち", romaji: "nana, shichi", arti: "Tujuh" },
  { no: 34, kanji: "八", kana: "はち", romaji: "hachi", arti: "Delapan" },
  { no: 35, kanji: "九", kana: "きゅう", romaji: "kyuu", arti: "Sembilan" },
  { no: 36, kanji: "十", kana: "じゅう", romaji: "juu", arti: "Sepuluh" },
  { no: 37, kanji: "〜年", kana: "〜ねん", romaji: "~nen", arti: "~ tahun" },
  { no: 38, kanji: "〜月", kana: "〜がつ", romaji: "~gatsu", arti: "~ bulan" },
  { no: 39, kanji: "〜日", kana: "〜にち", romaji: "~nichi", arti: "~ tanggal" },
  { no: 40, kanji: "東", kana: "ひがし", romaji: "higashi", arti: "Timur" },
  { no: 41, kanji: "西", kana: "にし", romaji: "nishi", arti: "Barat" },

  // Halaman 2 (42 - 85)
  { no: 42, kanji: "南", kana: "みなみ", romaji: "minami", arti: "Selatan" },
  { no: 43, kanji: "北", kana: "きた", romaji: "kita", arti: "Utara" },
  { no: 44, kanji: "〜口", kana: "〜ぐち", romaji: "~guchi", arti: "~ pintu" },
  { no: 45, kanji: "東口", kana: "ひがしぐち", romaji: "higashiguchi", arti: "Pintu timur" },
  { no: 46, kanji: "西口", kana: "にしぐち", romaji: "nishiguchi", arti: "Pintu barat" },
  { no: 47, kanji: "南口", kana: "みなみぐち", romaji: "minamiguchi", arti: "Pintu selatan" },
  { no: 48, kanji: "北口", kana: "きたぐち", romaji: "kitaguchi", arti: "Pintu utara" },
  { no: 49, kanji: "買います", kana: "かいます", romaji: "kaimasu", arti: "Membeli" },
  { no: 50, kanji: "買い物", kana: "かいもの", romaji: "kaimono", arti: "Belanja" },
  { no: 51, kanji: "お金", kana: "おかね", romaji: "okane", arti: "Uang" },
  { no: 52, kanji: "〜円", kana: "〜えん", romaji: "~en", arti: "~ yen" },
  { no: 53, kanji: "百", kana: "ひゃく", romaji: "hyaku", arti: "100" },
  { no: 54, kanji: "千", kana: "せん", romaji: "sen", arti: "1000" },
  { no: 55, kanji: "万", kana: "まん", romaji: "man", arti: "10000" },
  { no: 56, kanji: "百円", kana: "ひゃくえん", romaji: "hyakuen", arti: "100 yen" },
  { no: 57, kanji: "千円", kana: "せんえん", romaji: "senen", arti: "1000 yen" },
  { no: 58, kanji: "一万円", kana: "いちまんえん", romaji: "ichimanen", arti: "10000 yen" },
  { no: 59, kanji: "行きます", kana: "いきます", romaji: "ikimasu", arti: "Pergi" },
  { no: 60, kanji: "来ます", kana: "きます", romaji: "kimasu", arti: "Datang" },
  { no: 61, kanji: "会います", kana: "あいます", romaji: "aimasu", arti: "Bertemu" },
  { no: 62, kanji: "休みます", kana: "やすみます", romaji: "yasumimasu", arti: "Libur, istirahat" },
  { no: 63, kanji: "日本", kana: "にほん", romaji: "nihon", arti: "Jepang" },
  { no: 64, kanji: "東京", kana: "とうきょう", romaji: "toukyou", arti: "Tokyo" },
  { no: 65, kanji: "私", kana: "わたし", romaji: "watashi", arti: "Saya" },
  { no: 66, kanji: "父", kana: "ちち", romaji: "chichi", arti: "Ayah" },
  { no: 67, kanji: "母", kana: "はは", romaji: "haha", arti: "Ibu" },
  { no: 68, kanji: "子供", kana: "こども", romaji: "kodomo", arti: "Anak" },
  { no: 69, kanji: "男", kana: "おとこ", romaji: "otoko", arti: "Laki-laki" },
  { no: 70, kanji: "女", kana: "おんな", romaji: "onna", arti: "Perempuan" },
  { no: 71, kanji: "人", kana: "ひと", romaji: "hito", arti: "Orang" },
  { no: 72, kanji: "お父さん", kana: "おとうさん", romaji: "otousan", arti: "Ayah (orang lain)" },
  { no: 73, kanji: "お母さん", kana: "おかあさん", romaji: "okaasan", arti: "Ibu (orang lain)" },
  { no: 74, kanji: "何人", kana: "なんにん", romaji: "nannin", arti: "Berapa orang?" },
  { no: 75, kanji: "国", kana: "くに", romaji: "kuni", arti: "Negara" },
  { no: 76, kanji: "外国", kana: "がいこく", romaji: "gaikoku", arti: "Luar negri" },
  { no: 77, kanji: "〜語", kana: "〜ご", romaji: "~go", arti: "~ Bahasa" },
  { no: 78, kanji: "日本語", kana: "にほんご", romaji: "nihongo", arti: "Bahasa jepang" },
  { no: 79, kanji: "英語", kana: "えいご", romaji: "eigo", arti: "Bahasa inggris" },
  { no: 80, kanji: "中国語", kana: "ちゅうごくご", romaji: "chuugokugo", arti: "Bahasa china" },
  { no: 81, kanji: "〜人", kana: "〜じん／〜にん", romaji: "~jin / ~nin", arti: "~ orang" },
  { no: 82, kanji: "日本人", kana: "にほんじん", romaji: "nihonjin", arti: "Orang jepang" },
  { no: 83, kanji: "好き", kana: "すき", romaji: "suki", arti: "Suka" },
  { no: 84, kanji: "本", kana: "ほん", romaji: "hon", arti: "Buku" },
  { no: 85, kanji: "読書", kana: "どくしょ", romaji: "dokusho", arti: "Bacaan" },

  // Halaman 3 (86 - 129)
  { no: 86, kanji: "何", kana: "なに", romaji: "nani", arti: "Apa?" },
  { no: 87, kanji: "春", kana: "はる", romaji: "haru", arti: "Musim semi" },
  { no: 88, kanji: "夏", kana: "なつ", romaji: "natsu", arti: "Musim panas" },
  { no: 89, kanji: "秋", kana: "あき", romaji: "aki", arti: "Musim gugur" },
  { no: 90, kanji: "冬", kana: "ふゆ", romaji: "fuyu", arti: "Musim dingin" },
  { no: 91, kanji: "今", kana: "いま", romaji: "ima", arti: "Sekarang" },
  { no: 92, kanji: "花", kana: "はな", romaji: "hana", arti: "Bunga" },
  { no: 93, kanji: "海", kana: "うみ", romaji: "umi", arti: "Laut" },
  { no: 94, kanji: "山", kana: "やま", romaji: "yama", arti: "Gunung" },
  { no: 95, kanji: "川", kana: "かわ", romaji: "kawa", arti: "Sungai" },
  { no: 96, kanji: "今日", kana: "きょう", romaji: "kyou", arti: "Hari ini" },
  { no: 97, kanji: "天気", kana: "てんき", romaji: "tenki", arti: "Cuaca" },
  { no: 98, kanji: "晴れ", kana: "はれ", romaji: "hare", arti: "Cerah" },
  { no: 99, kanji: "雨", kana: "あめ", romaji: "ame", arti: "Hujan" },
  { no: 100, kanji: "雪", kana: "ゆき", romaji: "yuki", arti: "Salju" },
  { no: 101, kanji: "雲", kana: "くも", romaji: "kumo", arti: "Mendung" },
  { no: 102, kanji: "風", kana: "かぜ", romaji: "kaze", arti: "Angin" },
  { no: 103, kanji: "空", kana: "そら", romaji: "sora", arti: "Langit" },
  { no: 104, kanji: "町", kana: "まち", romaji: "machi", arti: "Kota" },
  { no: 105, kanji: "店", kana: "みせ", romaji: "mise", arti: "Toko" },
  { no: 106, kanji: "人気", kana: "にんき", romaji: "ninki", arti: "Popularitas, ketenaran" },
  { no: 107, kanji: "多い", kana: "おおい", romaji: "ooi", arti: "Banyak" },
  { no: 108, kanji: "少ない", kana: "すくない", romaji: "sukunai", arti: "Sedikit" },
  { no: 109, kanji: "高い", kana: "たかい", romaji: "takai", arti: "Mahal" },
  { no: 110, kanji: "安い", kana: "やすい", romaji: "yasui", arti: "Murah" },
  { no: 111, kanji: "広い", kana: "ひろい", romaji: "hiroi", arti: "Luas" },
  { no: 112, kanji: "道", kana: "みち", romaji: "michi", arti: "Jalan" },
  { no: 113, kanji: "通り", kana: "とおり", romaji: "toori", arti: "Jalan" },
  { no: 114, kanji: "右", kana: "みぎ", romaji: "migi", arti: "Kanan" },
  { no: 115, kanji: "左", kana: "ひだり", romaji: "hidari", arti: "Kiri" },
  { no: 116, kanji: "一つ", kana: "ひとつ", romaji: "hitotsu", arti: "Satu buah" },
  { no: 117, kanji: "二つ", kana: "ふたつ", romaji: "futatsu", arti: "Dua buah" },
  { no: 118, kanji: "赤い", kana: "あかい", romaji: "akai", arti: "Merah" },
  { no: 119, kanji: "青い", kana: "あおい", romaji: "aoi", arti: "Biru" },
  { no: 120, kanji: "黒い", kana: "くろい", romaji: "kuroi", arti: "Hitam" },
  { no: 121, kanji: "白い", kana: "しろい", romaji: "shiroi", arti: "Putih" },
  { no: 122, kanji: "時間", kana: "じかん", romaji: "jikan", arti: "Waktu" },
  { no: 123, kanji: "場所", kana: "ばしょ", romaji: "basho", arti: "Tempat" },
  { no: 124, kanji: "駅", kana: "えき", romaji: "eki", arti: "Stasiun" },
  { no: 125, kanji: "日", kana: "ひ", romaji: "hi", arti: "Matahari" },
  { no: 126, kanji: "出かけます", kana: "でかけます", romaji: "dekakemasu", arti: "Meninggalkan rumah" },
  { no: 127, kanji: "待ちます", kana: "まちます", romaji: "machimasu", arti: "Menunggu" },
  { no: 128, kanji: "止まります", kana: "とまります", romaji: "tomarimasu", arti: "Berhenti" },
  { no: 129, kanji: "食事", kana: "しょくじ", romaji: "shokuji", arti: "Makan bersama" },

  // Halaman 4 (130 - 173)
  { no: 130, kanji: "仕事", kana: "しごと", romaji: "shigoto", arti: "Pekerjaan" },
  { no: 131, kanji: "前", kana: "まえ", romaji: "mae", arti: "Sebelum" },
  { no: 132, kanji: "後", kana: "あと", romaji: "ato", arti: "Setelah" },
  { no: 133, kanji: "朝", kana: "あさ", romaji: "asa", arti: "Pagi" },
  { no: 134, kanji: "昼", kana: "ひる", romaji: "hiru", arti: "Siang" },
  { no: 135, kanji: "夜", kana: "よる", romaji: "yoru", arti: "Malam" },
  { no: 136, kanji: "乗ります", kana: "のります", romaji: "norimasu", arti: "Naik" },
  { no: 137, kanji: "学校", kana: "がっこう", romaji: "gakkou", arti: "Sekolahan" },
  { no: 138, kanji: "小学校", kana: "しょうがっこう", romaji: "shougakkou", arti: "SD" },
  { no: 139, kanji: "中学校", kana: "ちゅうがっこう", romaji: "chuugakkou", arti: "SMP" },
  { no: 140, kanji: "高校", kana: "こうこう", romaji: "koukou", arti: "SMA" },
  { no: 141, kanji: "大学", kana: "だいがく", romaji: "daigaku", arti: "Universitas" },
  { no: 142, kanji: "先生", kana: "せんせい", romaji: "sensei", arti: "Guru" },
  { no: 143, kanji: "学生", kana: "がくせい", romaji: "gakusei", arti: "Murid, siswa" },
  { no: 144, kanji: "〜年生", kana: "〜ねんせい", romaji: "~nensei", arti: "Kelas ~" },
  { no: 145, kanji: "勉強", kana: "べんきょう", romaji: "benkyou", arti: "Pelajaran" },
  { no: 146, kanji: "文化", kana: "ぶんか", romaji: "bunka", arti: "Kebudayaan" },
  { no: 147, kanji: "音楽", kana: "おんがく", romaji: "ongaku", arti: "Musik" },
  { no: 148, kanji: "旅行", kana: "りょこう", romaji: "ryokou", arti: "Wisata" },
  { no: 149, kanji: "留学", kana: "りゅうがく", romaji: "ryuugaku", arti: "Belajar di luar negri" },
  { no: 150, kanji: "友達", kana: "ともだち", romaji: "tomodachi", arti: "Teman" },
  { no: 151, kanji: "楽しい", kana: "たのしい", romaji: "tanoshii", arti: "Gembira" },
  { no: 152, kanji: "週", kana: "しゅう", romaji: "shuu", arti: "Minggu" },
  { no: 153, kanji: "〜回", kana: "〜かい", romaji: "~kai", arti: "~kali" },
  { no: 154, kanji: "食べ物", kana: "たべもの", romaji: "tabemono", arti: "Makanan" },
  { no: 155, kanji: "飲物", kana: "のみもの", romaji: "nomimono", arti: "Minuman" },
  { no: 156, kanji: "お茶", kana: "おちゃ", romaji: "ocha", arti: "Teh hijau" },
  { no: 157, kanji: "お酒", kana: "おさけ", romaji: "osake", arti: "Sake" },
  { no: 158, kanji: "作ります", kana: "つくります", romaji: "tsukurimasu", arti: "Membuat" },
  { no: 159, kanji: "持っていきます", kana: "もっていきます", romaji: "motteikimasu", arti: "Membawa pergi" },
  { no: 160, kanji: "お願いします", kana: "おねがいします", romaji: "onegaishimasu", arti: "Tolong" },
  { no: 161, kanji: "料理", kana: "りょうり", romaji: "ryouri", arti: "Masakan" },
  { no: 162, kanji: "味", kana: "あじ", romaji: "aji", arti: "Rasa" },
  { no: 163, kanji: "色", kana: "いろ", romaji: "iro", arti: "Warna" },
  { no: 164, kanji: "野菜", kana: "やさい", romaji: "yasai", arti: "Sayuran" },
  { no: 165, kanji: "少し", kana: "すこし", romaji: "sukoshi", arti: "Sedikit" },
  { no: 166, kanji: "中", kana: "なか", romaji: "naka", arti: "Dalam" },
  { no: 167, kanji: "入っています", kana: "はいっています", romaji: "haitteimasu", arti: "Masuk" },
  { no: 168, kanji: "会社", kana: "かいしゃ", romaji: "kaisha", arti: "Perusahaan" },
  { no: 169, kanji: "本社", kana: "ほんしゃ", romaji: "honsha", arti: "Kantor pusat" },
  { no: 170, kanji: "支社", kana: "ししゃ", romaji: "shisha", arti: "Kantor cabang" },
  { no: 171, kanji: "出張", kana: "しゅっちょう", romaji: "shucchou", arti: "Dinas luar kota" },
  { no: 172, kanji: "空港", kana: "くうこう", romaji: "kuukou", arti: "Bandara" },
  { no: 173, kanji: "出発", kana: "しゅっぱつ", romaji: "shuppatsu", arti: "Keberangkatan" },

  // Halaman 5 (174 - 217)
  { no: 174, kanji: "到着", kana: "とうちゃく", romaji: "touchaku", arti: "Kedatangan" },
  { no: 175, kanji: "午前", kana: "ごぜん", romaji: "gozen", arti: "AM" },
  { no: 176, kanji: "午後", kana: "ごご", romaji: "gogo", arti: "PM" },
  { no: 177, kanji: "自分", kana: "じぶん", romaji: "jibun", arti: "Sendiri" },
  { no: 178, kanji: "電話", kana: "でんわ", romaji: "denwa", arti: "Telepon" },
  { no: 179, kanji: "電気", kana: "でんき", romaji: "denki", arti: "Listrik" },
  { no: 180, kanji: "電車", kana: "でんしゃ", romaji: "densha", arti: "Kereta" },
  { no: 181, kanji: "車", kana: "くるま", romaji: "kuruma", arti: "Mobil" },
  { no: 182, kanji: "送ります", kana: "おくります", romaji: "okurimasu", arti: "Mengirim" },
  { no: 183, kanji: "使います", kana: "つかいます", romaji: "tsukaimasu", arti: "Menggunakan" },
  { no: 184, kanji: "借ります", kana: "かります", romaji: "karimasu", arti: "Meminjam" },
  { no: 185, kanji: "体", kana: "からだ", romaji: "karada", arti: "Badan" },
  { no: 186, kanji: "頭", kana: "あたま", romaji: "atama", arti: "Kepala" },
  { no: 187, kanji: "目", kana: "め", romaji: "me", arti: "Mata" },
  { no: 188, kanji: "口", kana: "くち", romaji: "kuchi", arti: "Mulut" },
  { no: 189, kanji: "耳", kana: "みみ", romaji: "mimi", arti: "Telinga" },
  { no: 190, kanji: "手", kana: "て", romaji: "te", arti: "Tangan" },
  { no: 191, kanji: "足", kana: "あし", romaji: "ashi", arti: "Kaki" },
  { no: 192, kanji: "上", kana: "うえ", romaji: "ue", arti: "Atas" },
  { no: 193, kanji: "下", kana: "した", romaji: "shita", arti: "Bawah" },
  { no: 194, kanji: "毎〜", kana: "まい〜", romaji: "mai~", arti: "~ setiap" },
  { no: 195, kanji: "毎朝", kana: "まいあさ", romaji: "maiasa", arti: "setiap pagi" },
  { no: 196, kanji: "毎日", kana: "まいにち", romaji: "mainichi", arti: "Setiap hari" },
  { no: 197, kanji: "週末", kana: "しゅうまつ", romaji: "shuumatsu", arti: "Akhir pekan" },
  { no: 198, kanji: "元気", kana: "げんき", romaji: "genki", arti: "Sehat" },
  { no: 199, kanji: "外", kana: "そと", romaji: "soto", arti: "Luar" },
  { no: 200, kanji: "起きます", kana: "おきます", romaji: "okimasu", arti: "Bangun tidur" },
  { no: 201, kanji: "歩きます", kana: "あるきます", romaji: "arukimasu", arti: "Berjalan" },
  { no: 202, kanji: "走ります", kana: "はしります", romaji: "hashirimasu", arti: "Berlari" },
  { no: 203, kanji: "泳ぎます", kana: "およぎます", romaji: "oyogimasu", arti: "Berenang" },
  { no: 204, kanji: "お祝い", kana: "おいわい", romaji: "oiwai", arti: "Perayaan" },
  { no: 205, kanji: "誕生日", kana: "たんじょうび", romaji: "tanjoubi", arti: "Ulang tahun" },
  { no: 206, kanji: "結婚", kana: "けっこん", romaji: "kekkon", arti: "Pernikahan" },
  { no: 207, kanji: "絵", kana: "え", romaji: "e", arti: "Gambar, lukisan" },
  { no: 208, kanji: "写真", kana: "しゃしん", romaji: "shashin", arti: "Foto" },
  { no: 209, kanji: "時計", kana: "とけい", romaji: "tokei", arti: "Jam" },
  { no: 210, kanji: "着ます", kana: "きます", romaji: "kimasu", arti: "Memakai pakaian" },
  { no: 211, kanji: "先〜", kana: "せん〜", romaji: "sen~", arti: "~lalu" },
  { no: 212, kanji: "先週", kana: "せんしゅう", romaji: "senshuu", arti: "Minggu lalu" },
  { no: 213, kanji: "今月", kana: "こんげつ", romaji: "kongetsu", arti: "Bulan ini" },
  { no: 214, kanji: "来年", kana: "らいねん", romaji: "rainen", arti: "Tahun depan" },
  { no: 215, kanji: "今年", kana: "ことし", romaji: "kotoshi", arti: "Tahun ini" },
  { no: 216, kanji: "去年", kana: "きょねん", romaji: "kyonen", arti: "Tahun lalu" },
  { no: 217, kanji: "家", kana: "いえ", romaji: "ie", arti: "Rumah" },

  // Halaman 6 (218 - 261)
  { no: 218, kanji: "思います", kana: "おもいます", romaji: "omoimasu", arti: "Mengira" },
  { no: 219, kanji: "自己紹介", kana: "じこしょうかい", romaji: "jikoshoukai", arti: "Perkenalan" },
  { no: 220, kanji: "名前", kana: "なまえ", romaji: "namae", arti: "Nama" },
  { no: 221, kanji: "意味", kana: "いみ", romaji: "imi", arti: "Arti" },
  { no: 222, kanji: "本屋", kana: "ほんや", romaji: "honya", arti: "Toko buku" },
  { no: 223, kanji: "近く", kana: "ちかく", romaji: "chikaku", arti: "Dekat" },
  { no: 224, kanji: "住みます", kana: "すみます", romaji: "sumimasu", arti: "Tinggal" },
  { no: 225, kanji: "働きます", kana: "はたらきます", romaji: "hatarakimasu", arti: "Bekerja" },
  { no: 226, kanji: "〜番目", kana: "〜ばんめ", romaji: "~banme", arti: "Urutan yang ~" },
  { no: 227, kanji: "兄", kana: "あに", romaji: "ani", arti: "Kakak laki2 (sendiri)" },
  { no: 228, kanji: "兄いさん", kana: "おにいさん", romaji: "oniisan", arti: "Kakak laki2 (orang lain)" },
  { no: 229, kanji: "姉", kana: "あね", romaji: "ane", arti: "Kakak perempuan (sendiri)" },
  { no: 230, kanji: "お姉さん", kana: "おねえさん", romaji: "oneesan", arti: "Kakak perempuan (orang lain)" },
  { no: 231, kanji: "弟", kana: "おとうと", romaji: "otouto", arti: "Adik laki2 (sendiri)" },
  { no: 232, kanji: "妹", kana: "いもうと", romaji: "imouto", arti: "Adik perempuan (sendiri)" },
  { no: 233, kanji: "家族", kana: "かぞく", romaji: "kazoku", arti: "Keluarga" },
  { no: 234, kanji: "長い", kana: "ながい", romaji: "nagai", arti: "Panjang" },
  { no: 235, kanji: "短い", kana: "みじかい", romaji: "mijikai", arti: "Pendek" },
  { no: 236, kanji: "低い", kana: "ひくい", romaji: "hikui", arti: "Rendah" },
  { no: 237, kanji: "上手", kana: "じょうず", romaji: "jouzu", arti: "Pandai" },
  { no: 238, kanji: "歌", kana: "うた", romaji: "uta", arti: "Lagu" },
  { no: 239, kanji: "歌います", kana: "うたいます", romaji: "utaimasu", arti: "Menyanyi" },
  { no: 240, kanji: "客", kana: "きゃく", romaji: "kyaku", arti: "Tamu" },
  { no: 241, kanji: "注文", kana: "ちゅうもん", romaji: "chuumon", arti: "Pesanan" },
  { no: 242, kanji: "洋食", kana: "ようしょく", romaji: "youshoku", arti: "Makanan barat" },
  { no: 243, kanji: "和食", kana: "わしょく", romaji: "washoku", arti: "Makanan jepang" },
  { no: 244, kanji: "牛肉", kana: "ぎゅうにく", romaji: "gyuuniku", arti: "Daging sapi" },
  { no: 245, kanji: "地方", kana: "ちほう", romaji: "chihou", arti: "Daerah, wilayah" },
  { no: 246, kanji: "有名", kana: "ゆうめい", romaji: "yuumei", arti: "Terkenal" },
  { no: 247, kanji: "生", kana: "なま", romaji: "nama", arti: "Mentah" },
  { no: 248, kanji: "冷たい", kana: "つめたい", romaji: "tsumetai", arti: "Dingin (benda)" },
  { no: 249, kanji: "ご飯", kana: "ごはん", romaji: "gohan", arti: "Nasi" },
  { no: 250, kanji: "塩", kana: "しお", romaji: "shio", arti: "Garam" },
  { no: 251, kanji: "全部", kana: "ぜんぶ", romaji: "zenbu", arti: "Semua" },
  { no: 252, kanji: "〜方", kana: "〜かた", romaji: "~kata", arti: "Cara~" },
  { no: 253, kanji: "食べ方", kana: "たべかた", romaji: "tabekata", arti: "Cara makan" },
  { no: 254, kanji: "熱い", kana: "あつい", romaji: "atsui", arti: "Panas" },
  { no: 255, kanji: "苦手", kana: "にがて", romaji: "nigate", arti: "Susah, berat, tidak begitu suka" },
  { no: 256, kanji: "入れます", kana: "いれます", romaji: "iremasu", arti: "Memasukkan" },
  { no: 257, kanji: "木", kana: "き", romaji: "ki", arti: "Pohon" },
  { no: 258, kanji: "森", kana: "もり", romaji: "mori", arti: "Hutan" },
  { no: 259, kanji: "島", kana: "しま", romaji: "shima", arti: "Pulau" },
  { no: 260, kanji: "自然", kana: "しぜん", romaji: "shizen", arti: "Alam" },
  { no: 261, kanji: "船", kana: "ふね", romaji: "fune", arti: "Kapal" },

  // Halaman 7 (262 - 305)
  { no: 262, kanji: "暑い", kana: "あつい", romaji: "atsui", arti: "Panas" },
  { no: 263, kanji: "帰ります", kana: "かえります", romaji: "kaerimasu", arti: "Pulang" },
  { no: 264, kanji: "予約します", kana: "よやくします", romaji: "yoyakushimasu", arti: "Memesan" },
  { no: 265, kanji: "運転します", kana: "うんてんします", romaji: "untenshimasu", arti: "Menyetir" },
  { no: 266, kanji: "〜中", kana: "〜ちゅう ／〜じゅう", romaji: "~chuu / ~juu", arti: "Sedang/dalam ~" },
  { no: 267, kanji: "旅行中", kana: "りょこうちゅう", romaji: "ryokouchuu", arti: "Sedang wisata" },
  { no: 268, kanji: "観光地", kana: "かんこうち", romaji: "kankouchi", arti: "Tempat wisata" },
  { no: 269, kanji: "女性", kana: "じょせい", romaji: "josei", arti: "Wanita" },
  { no: 270, kanji: "男性", kana: "だんせい", romaji: "dansei", arti: "Pria" },
  { no: 271, kanji: "動物", kana: "どうぶつ", romaji: "doubutsu", arti: "Hewan" },
  { no: 272, kanji: "空気", kana: "くうき", romaji: "kuuki", arti: "Udara" },
  { no: 273, kanji: "料金", kana: "りょうきん", romaji: "ryoukin", arti: "Biaya / tarif" },
  { no: 274, kanji: "無料", kana: "むりょう", romaji: "muryou", arti: "Gratis" },
  { no: 275, kanji: "明るい", kana: "あかるい", romaji: "akarui", arti: "Terang" },
  { no: 276, kanji: "便利", kana: "べんり", romaji: "benri", arti: "Praktis" },
  { no: 277, kanji: "一年中", kana: "いちねんじゅう", romaji: "ichinenjuu", arti: "Dalam satu tahun" },
  { no: 278, kanji: "受付", kana: "うけつけ", romaji: "uketsuke", arti: "Penerima tamu" },
  { no: 279, kanji: "広場", kana: "ひろば", romaji: "hiroba", arti: "Lapangan" },
  { no: 280, kanji: "問題", kana: "もんだい", romaji: "mondai", arti: "Soal, masalah" },
  { no: 281, kanji: "同じ", kana: "おなじ", romaji: "onaji", arti: "Sama" },
  { no: 282, kanji: "集まります", kana: "あつまります", romaji: "atsumarimasu", arti: "Berkumpul" },
  { no: 283, kanji: "始まります", kana: "はじまります", romaji: "hajimarimasu", arti: "Mulai" },
  { no: 284, kanji: "終わります", kana: "おわります", romaji: "owarimasu", arti: "Selesai" },
  { no: 285, kanji: "中止します", kana: "ちゅうしします", romaji: "chuushishimasu", arti: "Mengurungkan, membatalkan" },
  { no: 286, kanji: "教えます", kana: "おしえます", romaji: "oshiemasu", arti: "Memberitahu" },
  { no: 287, kanji: "祭り", kana: "まつり", romaji: "matsuri", arti: "Perayaan" },
  { no: 288, kanji: "日本祭り", kana: "にほんまつり", romaji: "nihonmatsuri", arti: "Perayaan jepang" },
  { no: 289, kanji: "会場", kana: "かいじょう", romaji: "kaijou", arti: "Ruang pertemuan" },
  { no: 290, kanji: "入場料", kana: "にゅうじょうりょう", romaji: "nyuujouryou", arti: "Tarif masuk" },
  { no: 291, kanji: "参加者", kana: "さんかしゃ", romaji: "sankasha", arti: "Peserta" },
  { no: 292, kanji: "急ぎます", kana: "いそぎます", romaji: "isogimasu", arti: "Buru-buru" },
  { no: 293, kanji: "決めます", kana: "きめます", romaji: "kimemasu", arti: "Menentukan" },
  { no: 294, kanji: "知ります", kana: "しります", romaji: "shirimasu", arti: "Kenal, tahu" },
  { no: 295, kanji: "正月", kana: "しょうがつ", romaji: "shougatsu", arti: "Tahun baru" },
  { no: 296, kanji: "年末", kana: "ねんまつ", romaji: "nenmatsu", arti: "Akhir tahun" },
  { no: 297, kanji: "年始", kana: "ねんし", romaji: "nenshi", arti: "Awal tahun" },
  { no: 298, kanji: "親", kana: "おや", romaji: "oya", arti: "Orang tua" },
  { no: 299, kanji: "忙しい", kana: "いそがしい", romaji: "isogashii", arti: "Sibuk" },
  { no: 300, kanji: "特別", kana: "とくべつ", romaji: "tokubetsu", arti: "Istimewa, special" },
  { no: 301, kanji: "帰国", kana: "きこく", romaji: "kikoku", arti: "Pulang ke negara" },
  { no: 302, kanji: "喜びます", kana: "よろこびます", romaji: "yorokobimasu", arti: "Merasa senang/gembira" },
  { no: 303, kanji: "幸せ", kana: "しあわせ", romaji: "shiawase", arti: "Bahagia" },
  { no: 304, kanji: "成長", kana: "せいちょう", romaji: "seichou", arti: "Pertumbuhan, perkembangan" },
  { no: 305, kanji: "長生き", kana: "ながいき", romaji: "nagaiki", arti: "Umur panjang, hidup lama" },

  // Halaman 8 (306 - 349)
  { no: 306, kanji: "願い事", kana: "ねがいごと", romaji: "negaigoto", arti: "Keinginan, kemauan, harapan" },
  { no: 307, kanji: "合格", kana: "ごうかく", romaji: "goukaku", arti: "Lulus" },
  { no: 308, kanji: "試験", kana: "しけん", romaji: "shiken", arti: "Ujian" },
  { no: 309, kanji: "大人", kana: "おとな", romaji: "otona", arti: "Orang Dewasa" },
  { no: 310, kanji: "〜式 (成人式)", kana: "〜しき (せいじんしき)", romaji: "~shiki (seijinshiki)", arti: "Upacara ~ (upacara kedewasaan)" },
  { no: 311, kanji: "〜市 (さいたま市)", kana: "〜し (さいたまし)", romaji: "~shi (saitamashi)", arti: "Kota~ (kota saitama)" },
  { no: 312, kanji: "商品", kana: "しょうひん", romaji: "shouhin", arti: "Barang dagangan" },
  { no: 313, kanji: "電気製品", kana: "でんきせいひん", romaji: "denkiseihin", arti: "Peralatan listrik" },
  { no: 314, kanji: "電子レンジ", kana: "でんしレンジ", romaji: "denshirenji", arti: "Oven" },
  { no: 315, kanji: "〜機 (そうじ機)", kana: "〜き (そうじき)", romaji: "~ki (soujiki)", arti: "Mesin~ (mesin penghisap debu)" },
  { no: 316, kanji: "店員", kana: "てんいん", romaji: "tenin", arti: "Penjaga toko" },
  { no: 317, kanji: "調子", kana: "ちょうし", romaji: "choushi", arti: "Keadaan, kondisi" },
  { no: 318, kanji: "悪い", kana: "わるい", romaji: "warui", arti: "Jelek" },
  { no: 319, kanji: "動きます", kana: "うごきます", romaji: "ugokimasu", arti: "Bergerak" },
  { no: 320, kanji: "考えます", kana: "かんがえます", romaji: "kangaemasu", arti: "Berfikir" },
  { no: 321, kanji: "音", kana: "おと", romaji: "oto", arti: "Suara" },
  { no: 322, kanji: "出ます", kana: "でます", romaji: "demasu", arti: "Keluar" },
  { no: 323, kanji: "機能", kana: "きのう", romaji: "kinou", arti: "Fungsi" },
  { no: 324, kanji: "省エネ", kana: "しょうエネ", romaji: "shouene", arti: "Penghematan energy" },
  { no: 325, kanji: "日本製", kana: "にほんせい", romaji: "nihonsei", arti: "Produk/buatan jepang" },
  { no: 326, kanji: "重い", kana: "おもい", romaji: "omoi", arti: "Berat" },
  { no: 327, kanji: "軽い", kana: "かるい", romaji: "karui", arti: "Ringan" },
  { no: 328, kanji: "静か", kana: "しずか", romaji: "shizuka", arti: "Tenang" },
  { no: 329, kanji: "早く", kana: "はやく", romaji: "hayaku", arti: "Cepat" },
  { no: 330, kanji: "方 (こっちの方)", kana: "ほう (こっちのほう)", romaji: "hou (kocchi no hou)", arti: "Arah (arah disini)" },
  { no: 331, kanji: "洗います", kana: "あらいます", romaji: "araimasu", arti: "Mencuci" },
  { no: 332, kanji: "満足します", kana: "まんぞくします", romaji: "manzokushimasu", arti: "Puas, merasa puas" },
  { no: 333, kanji: "京都", kana: "きょうと", romaji: "kyouto", arti: "Kyoto" },
  { no: 334, kanji: "神社", kana: "じんじゃ", romaji: "jinja", arti: "Kuil sinto" },
  { no: 335, kanji: "お寺", kana: "おてら", romaji: "otera", arti: "Kuil" },
  { no: 336, kanji: "仏教", kana: "ぶっきょう", romaji: "bukkyou", arti: "Agama budha" },
  { no: 337, kanji: "歴史", kana: "れきし", romaji: "rekishi", arti: "Sejarah" },
  { no: 338, kanji: "世界", kana: "せかい", romaji: "sekai", arti: "Dunia" },
  { no: 339, kanji: "中心", kana: "ちゅうしん", romaji: "chuushin", arti: "Pusat" },
  { no: 340, kanji: "〜世紀 (8世紀)", kana: "〜せいき (はっせいき)", romaji: "~seiki (hasseiki)", arti: "Abad~" },
  { no: 341, kanji: "〜的", kana: "〜てき", romaji: "~teki", arti: "Berbau~ / ke~ an" },
  { no: 342, kanji: "日本的", kana: "にほんてき", romaji: "nihonteki", arti: "Berbau jepang" },
  { no: 343, kanji: "歴史的", kana: "れきしてき", romaji: "rekishiteki", arti: "Bersejarah" },
  { no: 344, kanji: "飲食", kana: "いんしょく", romaji: "inshoku", arti: "Makan minum" },
  { no: 345, kanji: "禁止", kana: "きんし", romaji: "kinshi", arti: "Larangan" },
  { no: 346, kanji: "説明", kana: "せつめい", romaji: "setsumei", arti: "Penjelasan" },
  { no: 347, kanji: "道具", kana: "どうぐ", romaji: "dougu", arti: "Peralatan" },
  { no: 348, kanji: "博物館", kana: "はくぶつかん", romaji: "hakubutsukan", arti: "Museum" },
  { no: 349, kanji: "必要", kana: "ひつよう", romaji: "hitsuyou", arti: "Keperluan, kebutuhan" },

  // Halaman 9 (350 - 393)
  { no: 350, kanji: "〜階 (2階)", kana: "〜かい (にかい)", romaji: "~kai (nikai)", arti: "Lantai ~ (lantai 2)" },
  { no: 351, kanji: "油", kana: "あぶら", romaji: "abura", arti: "Minyak, oli" },
  { no: 352, kanji: "紙", kana: "かみ", romaji: "kami", arti: "Kertas" },
  { no: 353, kanji: "温度", kana: "おんど", romaji: "ondo", arti: "Suhu, derajat" },
  { no: 354, kanji: "活動", kana: "かつどう", romaji: "katsudou", arti: "Kegiatan, aktivitas" },
  { no: 355, kanji: "会議室", kana: "かいぎしつ", romaji: "kaigishitsu", arti: "Ruang rapat" },
  { no: 356, kanji: "寒い", kana: "さむい", romaji: "samui", arti: "Dingin (suhu)" },
  { no: 357, kanji: "出します", kana: "だします", romaji: "dashimasu", arti: "Mengeluarkan, mengirim (surat)" },
  { no: 358, kanji: "〜度 (28度)", kana: "〜ど (にじゅうはちど)", romaji: "~do (nijuuhachido)", arti: "~derajat (28 derajat)" },
  { no: 359, kanji: "〜点 (100点)", kana: "〜てん (100てん)", romaji: "~ten (hyakuten)", arti: "Nilai ~ (nilai 100)" },
  { no: 360, kanji: "服", kana: "ふく", romaji: "fuku", arti: "Baju, pakaian" },
  { no: 361, kanji: "自転車", kana: "じてんしゃ", romaji: "jitensha", arti: "Sepeda" },
  { no: 362, kanji: "自動車", kana: "じどうしゃ", romaji: "jidousha", arti: "Mobil" },
  { no: 363, kanji: "売ります", kana: "うります", romaji: "urimasu", arti: "Menjual" },
  { no: 364, kanji: "貸します", kana: "かします", romaji: "kashimasu", arti: "Meminjamkan" },
  { no: 365, kanji: "返します", kana: "かえします", romaji: "kaeshimasu", arti: "Mengembalikan" },
  { no: 366, kanji: "変わります", kana: "かわります", romaji: "kawarimasu", arti: "Mengganti" },
  { no: 367, kanji: "〜用", kana: "〜よう", romaji: "~you", arti: "Urusan, keperluan ~" },
  { no: 368, kanji: "子供用", kana: "こどもよう", romaji: "kodomoyou", arti: "Urusan anak" },
  { no: 369, kanji: "人生", kana: "じんせい", romaji: "jinsei", arti: "Kehidupan" },
  { no: 370, kanji: "歌手", kana: "かしゅ", romaji: "kashu", arti: "Penyanyi" },
  { no: 371, kanji: "選手", kana: "せんしゅ", romaji: "senshu", arti: "Atlit, pemain" },
  { no: 372, kanji: "画家", kana: "がか", romaji: "gaka", arti: "Pelukis" },
  { no: 373, kanji: "作家", kana: "さっか", romaji: "sakka", arti: "Pengarang" },
  { no: 374, kanji: "入学", kana: "にゅうがく", romaji: "nyuugaku", arti: "Masuk sekolah" },
  { no: 375, kanji: "卒業", kana: "そつぎょう", romaji: "sotsugyou", arti: "Lulus" },
  { no: 376, kanji: "病気", kana: "びょうき", romaji: "byouki", arti: "Sakit" },
  { no: 377, kanji: "若い", kana: "わかい", romaji: "wakai", arti: "Muda" },
  { no: 378, kanji: "生まれます", kana: "うまれます", romaji: "umaremasu", arti: "Lahir" },
  { no: 379, kanji: "思い出", kana: "おもいで", romaji: "omoide", arti: "Kenang-kenangan, kenangan" },
  { no: 380, kanji: "生活", kana: "せいかつ", romaji: "seikatsu", arti: "Kehidupan" },
  { no: 381, kanji: "映画", kana: "えいが", romaji: "eiga", arti: "Film" },
  { no: 382, kanji: "夫", kana: "おっと", romaji: "otto", arti: "Suami (sendiri)" },
  { no: 383, kanji: "妻", kana: "つま", romaji: "tsuma", arti: "Istri (sendiri)" },
  { no: 384, kanji: "両親", kana: "りょうしん", romaji: "ryoushin", arti: "Orang tua" },
  { no: 385, kanji: "不便", kana: "ふべん", romaji: "fuben", arti: "Tidak praktis" },
  { no: 386, kanji: "選びます", kana: "えらびます", romaji: "erabimasu", arti: "Memilih" },
  { no: 387, kanji: "寝ます", kana: "ねます", romaji: "nemasu", arti: "Tidur" },
  { no: 388, kanji: "サッカー場", kana: "サッカーじょう", romaji: "sakkaajou", arti: "Lapangan sepak bola" },
  { no: 389, kanji: "試合", kana: "しあい", romaji: "shiai", arti: "Pertandingan" },
  { no: 390, kanji: "日曜日", kana: "にちようび", romaji: "nichiyoubi", arti: "Minggu" },
  { no: 391, kanji: "強い", kana: "つよい", romaji: "tsuyoi", arti: "Kuat" },
  { no: 392, kanji: "弱い", kana: "よわい", romaji: "yowai", arti: "Lemah" },
  { no: 393, kanji: "勝ちます", kana: "かちます", romaji: "kachimasu", arti: "Menang" },

  // Halaman 10 (394 - 437)
  { no: 394, kanji: "負けます", kana: "まけます", romaji: "makemasu", arti: "Kalah" },
  { no: 395, kanji: "〜対〜 (2対1)", kana: "〜たい〜 (にたいいち)", romaji: "~tai~ (nitaiichi)", arti: "~lawan~ (2 lawan 1)" },
  { no: 396, kanji: "庭", kana: "にわ", romaji: "niwa", arti: "Halaman" },
  { no: 397, kanji: "公園", kana: "こうえん", romaji: "kouen", arti: "Taman" },
  { no: 398, kanji: "病院", kana: "びょういん", romaji: "byouin", arti: "Rumah sakit" },
  { no: 399, kanji: "交通", kana: "こうつう", romaji: "koutsuu", arti: "Lalu lintas" },
  { no: 400, kanji: "通勤", kana: "つうきん", romaji: "tsuukin", arti: "Perjalanan ke kantor" },
  { no: 401, kanji: "安全", kana: "あんぜん", romaji: "anzen", arti: "Keselamatan" },
  { no: 402, kanji: "危ない", kana: "あぶない", romaji: "abunai", arti: "Bahaya" },
  { no: 403, kanji: "遠い", kana: "とおい", romaji: "tooi", arti: "Jauh" },
  { no: 404, kanji: "努めます", kana: "つとめます", romaji: "tsutomemasu", arti: "Bekerja" },
  { no: 405, kanji: "〜以上 (2時間以上)", kana: "〜いじょう (にじかんいじょう)", romaji: "~ijou (nijikan ijou)", arti: "~ lebih (2 jam lebih)" },
  { no: 406, kanji: "〜以下 (6万円以下)", kana: "〜いか (ろくまんえんいか)", romaji: "~ika (rokumanen ika)", arti: "~kurang (kurang dari 6 man yen)" },
  { no: 407, kanji: "海外", kana: "かいがい", romaji: "kaigai", arti: "Luar negri" },
  { no: 408, kanji: "食生活", kana: "しょくせいかつ", romaji: "shokuseikatsu", arti: "Susunan makanan" },
  { no: 409, kanji: "健康", kana: "けんこう", romaji: "kenkou", arti: "Kesehatan" },
  { no: 410, kanji: "家庭料理", kana: "かていりょうり", romaji: "kateiryouri", arti: "Masakan rumah tangga" },
  { no: 411, kanji: "材料", kana: "ざいりょう", romaji: "zairyou", arti: "Bahan" },
  { no: 412, kanji: "量", kana: "りょう", romaji: "ryou", arti: "Jumlah, kuantitas, banyaknya" },
  { no: 413, kanji: "米", kana: "こめ", romaji: "kome", arti: "Beras" },
  { no: 414, kanji: "〜食", kana: "〜しょく", romaji: "~shoku", arti: "Makan ~" },
  { no: 415, kanji: "朝食", kana: "ちょうしょく", romaji: "choushoku", arti: "Makan pagi" },
  { no: 416, kanji: "昼食", kana: "ちゅうしょく", romaji: "chuushoku", arti: "Makan siang" },
  { no: 417, kanji: "夕食", kana: "ゆうしょく", romaji: "yuushoku", arti: "Makan malam" },
  { no: 418, kanji: "外食", kana: "がいしょく", romaji: "gaishoku", arti: "Makan di luar" },
  { no: 419, kanji: "定食", kana: "ていしょく", romaji: "teishoku", arti: "Makanan dengan menu tetap" },
  { no: 420, kanji: "住所", kana: "じゅうしょ", romaji: "juusho", arti: "Alamat" },
  { no: 421, kanji: "訪問", kana: "ほうもん", romaji: "houmon", arti: "Kunjungan" },
  { no: 422, kanji: "経験", kana: "けいけん", romaji: "keiken", arti: "Pengalaman" },
  { no: 423, kanji: "親切", kana: "しんせつ", romaji: "shinsetsu", arti: "Ramah" },
  { no: 424, kanji: "座ります", kana: "すわります", romaji: "suwarimasu", arti: "Duduk" },
  { no: 425, kanji: "立ちます", kana: "たちます", romaji: "tachimasu", arti: "Berdiri" },
  { no: 426, kanji: "〜観 (人生観)", kana: "〜かん (じんせいかん)", romaji: "~kan (jinseikan)", arti: "Pandangan ~ (pandangan hidup)" },
  { no: 427, kanji: "約〜 (約6年間)", kana: "やく〜 (やくろくねんかん)", romaji: "yaku~ (yaku rokunenkan)", arti: "Kira2, sekitar (sekitar 6 tahun)" },
  { no: 428, kanji: "計画", kana: "けいかく", romaji: "keikaku", arti: "Rencana, program" },
  { no: 429, kanji: "自信", kana: "じしん", romaji: "jishin", arti: "Percaya diri" },
  { no: 430, kanji: "方法", kana: "ほうほう", romaji: "houhou", arti: "Cara" },
  { no: 431, kanji: "目的", kana: "もくてき", romaji: "mokuteki", arti: "Tujuan" },
  { no: 432, kanji: "難しい", kana: "むずかしい", romaji: "muzukashii", arti: "Sulit" },
  { no: 433, kanji: "通じます", kana: "つうじます", romaji: "tsuujimasu", arti: "Mengalirkan, menguasai, berhubungan" },
  { no: 434, kanji: "習います", kana: "ならいます", romaji: "naraimasu", arti: "Belajar kepada" },
  { no: 435, kanji: "学びます", kana: "まなびます", romaji: "manabimasu", arti: "Belajar" },
  { no: 436, kanji: "〜級", kana: "〜きゅう", romaji: "~kyuu", arti: "Kelas, tingkat ~" },
  { no: 437, kanji: "初級", kana: "しょきゅう", romaji: "shokyuu", arti: "Kelas dasar" },

  // Halaman 12 (438 - 481)
  { no: 438, kanji: "中級", kana: "ちゅうきゅう", romaji: "chuukyuu", arti: "Kelas menengah" },
  { no: 439, kanji: "上級", kana: "じょうきゅう", romaji: "joukyuu", arti: "Kelas atas" },
  { no: 440, kanji: "相手", kana: "あいて", romaji: "aite", arti: "Pasangan, lawan" },
  { no: 441, kanji: "気持ち", kana: "きもち", romaji: "kimochi", arti: "Perasaan enak" },
  { no: 442, kanji: "恋人", kana: "こいびと", romaji: "koibito", arti: "Pacar" },
  { no: 443, kanji: "出会い", kana: "であい", romaji: "deai", arti: "Pertemuan" },
  { no: 444, kanji: "最近", kana: "さいきん", romaji: "saikin", arti: "Akhir-akhir ini" },
  { no: 445, kanji: "最高", kana: "さいこう", romaji: "saikou", arti: "Teratas, tertinggi" },
  { no: 446, kanji: "出席", kana: "しゅっせき", romaji: "shusseki", arti: "Kehadiran" },
  { no: 447, kanji: "招待", kana: "しょうたい", romaji: "shoutai", arti: "Undangan" },
  { no: 448, kanji: "〜合う (知り合う)", kana: "〜あう (しりあう)", romaji: "~au (shiriau)", arti: "Cocok ~ (kenal mengenal)" },
  { no: 449, kanji: "社会人", kana: "しゃかいじん", romaji: "shakaijin", arti: "Anggota masyarakat" },
  { no: 450, kanji: "職場", kana: "しょくば", romaji: "shokuba", arti: "Tempat kerja" },
  { no: 451, kanji: "給料", kana: "きゅうりょう", romaji: "kyuuryou", arti: "Gaji" },
  { no: 452, kanji: "人間関係", kana: "にんげんかんけい", romaji: "ningenkankei", arti: "Hubungan antar manusia" },
  { no: 453, kanji: "親友", kana: "しんゆう", romaji: "shinyuu", arti: "Teman karib" },
  { no: 454, kanji: "恋愛", kana: "れんあい", romaji: "ren'ai", arti: "Percintaan , asmara" },
  { no: 455, kanji: "相談", kana: "そうだん", romaji: "soudan", arti: "Musyawarah" },
  { no: 456, kanji: "心", kana: "こころ", romaji: "kokoro", arti: "Hati" },
  { no: 457, kanji: "心配", kana: "しんぱい", romaji: "shinpai", arti: "Khawatir" },
  { no: 458, kanji: "不安", kana: "ふあん", romaji: "fuan", arti: "Kegelisahan, kekhawatiran" },
  { no: 459, kanji: "お客様", kana: "おきゃくさま", romaji: "okyaku sama", arti: "Tamu" },
  { no: 460, kanji: "手続き", kana: "てつづき", romaji: "tetsuzuki", arti: "Prosedur" },
  { no: 461, kanji: "飛行機", kana: "ひこうき", romaji: "hikouki", arti: "Pesawat terbang" },
  { no: 462, kanji: "変更", kana: "へんこう", romaji: "henkou", arti: "Perubahan" },
  { no: 463, kanji: "予定", kana: "よてい", romaji: "yotei", arti: "Rencana" },
  { no: 464, kanji: "利用", kana: "りよう", romaji: "riyou", arti: "Penggunaan, pemakaian" },
  { no: 465, kanji: "忘れ物", kana: "わすれもの", romaji: "wasuremono", arti: "Benda yang tertinggal" },
  { no: 466, kanji: "助けます", kana: "たすけます", romaji: "tasukemasu", arti: "Menolong" },
  { no: 467, kanji: "〜航空 (ＪＦ航空)", kana: "〜こうくう (ＪＦこうくう)", romaji: "~koukuu (JF koukuu)", arti: "Penerbangan ~ (penerbangan JF)" },
  { no: 468, kanji: "〜便 (１１５便)", kana: "〜びん (いちいちごびん)", romaji: "~bin (ichiichigobin)", arti: "Penerbangan , pos (pos 115)" },
  { no: 469, kanji: "体力", kana: "たいりょく", romaji: "tairyoku", arti: "Kekuatan" },
  { no: 470, kanji: "協力", kana: "きょうりょく", romaji: "kyouryoku", arti: "Kerjasama" },
  { no: 471, kanji: "担当", kana: "たんとう", romaji: "tantou", arti: "Petugas" },
  { no: 472, kanji: "報告", kana: "ほうこく", romaji: "houkoku", arti: "Melapor" },
  { no: 473, kanji: "連絡", kana: "れんらく", romaji: "renraku", arti: "Menghubungi" },
  { no: 474, kanji: "募集", kana: "ぼしゅう", romaji: "boshuu", arti: "Penerimaan, perekrutan" },
  { no: 475, kanji: "輸出", kana: "ゆしゅつ", romaji: "yushutsu", arti: "Ekspor" },
  { no: 476, kanji: "輸入", kana: "ゆにゅう", romaji: "yunyuu", arti: "Impor" },
  { no: 477, kanji: "会話", kana: "かいわ", romaji: "kaiwa", arti: "Percakapan" },
  { no: 478, kanji: "形", kana: "かたち", romaji: "katachi", arti: "Bentuk" },
  { no: 479, kanji: "漢字", kana: "かんじ", romaji: "kanji", arti: "Kanji" },
  { no: 480, kanji: "答え", kana: "こたえ", romaji: "kotae", arti: "Jawaban" },
  { no: 481, kanji: "質問", kana: "しつもん", romaji: "shitsumon", arti: "Pertanyaan" },

  // Halaman 13 (482 - 525)
  { no: 482, kanji: "正しい", kana: "ただしい", romaji: "tadashii", arti: "Benar" },
  { no: 483, kanji: "読解", kana: "どっかい", romaji: "dokkai", arti: "Bacaan" },
  { no: 484, kanji: "表現", kana: "ひょうげん", romaji: "hyougen", arti: "Pengucapan" },
  { no: 485, kanji: "文", kana: "ぶん", romaji: "bun", arti: "Kalimat" },
  { no: 486, kanji: "文型", kana: "ぶんけい", romaji: "bunkei", arti: "Pola kalimat" },
  { no: 487, kanji: "文法", kana: "ぶんぽう", romaji: "bunpou", arti: "Tata Bahasa" },
  { no: 488, kanji: "もう一度", kana: "もういちど", romaji: "mou ichido", arti: "Sekali lagi" },
  { no: 489, kanji: "例", kana: "れい", romaji: "rei", arti: "Contoh" },
  { no: 490, kanji: "練習", kana: "れんしゅう", romaji: "renshuu", arti: "latihan" },
  { no: 491, kanji: "〜枚", kana: "〜まい", romaji: "~mai", arti: "~lembar" },
  { no: 492, kanji: "今週", kana: "こんしゅう", romaji: "konshuu", arti: "Minggu ini" },
  { no: 493, kanji: "今度", kana: "こんど", romaji: "kondo", arti: "Lain kali, yang akan datang" },
  { no: 494, kanji: "横", kana: "よこ", romaji: "yoko", arti: "Sebelah" },
  { no: 495, kanji: "押します", kana: "おします", romaji: "oshimasu", arti: "Menekan, mendorong" },
  { no: 496, kanji: "引きます", kana: "ひきます", romaji: "hikimasu", arti: "Menarik" },
  { no: 497, kanji: "温泉", kana: "おんせん", romaji: "onsen", arti: "Pemandian air panas" },
  { no: 498, kanji: "来週", kana: "らいしゅう", romaji: "raishuu", arti: "Minggu depan" },
  { no: 499, kanji: "犬", kana: "いぬ", romaji: "inu", arti: "Anjing" },
  { no: 500, kanji: "夕方", kana: "ゆうがた", romaji: "yuugata", arti: "Sore" },
  { no: 501, kanji: "季節", kana: "きせつ", romaji: "kisetsu", arti: "Musim" },
  { no: 502, kanji: "昨日", kana: "きのう", romaji: "kinou", arti: "Kemarin" },
  { no: 503, kanji: "明日", kana: "あした", romaji: "ashita", arti: "Besok" },
  { no: 504, kanji: "食堂", kana: "しょくどう", romaji: "shokudou", arti: "Kantin" },
  { no: 505, kanji: "銀行", kana: "ぎんこう", romaji: "ginkou", arti: "Bank" },
  { no: 506, kanji: "受付", kana: "うけつけ", romaji: "uketsuke", arti: "Resepsionis" },
  { no: 507, kanji: "門", kana: "もん", romaji: "mon", arti: "Pintu gerbang" },
  { no: 508, kanji: "登ります", kana: "のぼります", romaji: "noborimasu", arti: "Mendaki" },
  { no: 509, kanji: "教科書", kana: "きょうかしょ", romaji: "kyoukasho", arti: "Buku panduan" },
  { no: 510, kanji: "教室", kana: "きょうしつ", romaji: "kyoushitsu", arti: "Ruang kelas" },
  { no: 511, kanji: "参加します", kana: "さんかします", romaji: "sankashimasu", arti: "Berpartisipasi" },
  { no: 512, kanji: "用意します", kana: "よういします", romaji: "youishimasu", arti: "Menyiapkan" },
  { no: 513, kanji: "牛肉", kana: "ぎゅうにく", romaji: "gyuuniku", arti: "Daging sapi" },
  { no: 514, kanji: "豚肉", kana: "ぶたにく", romaji: "butaniku", arti: "Daging babi" },
  { no: 515, kanji: "皿", kana: "さら", romaji: "sara", arti: "Piring" },
  { no: 516, kanji: "お湯", kana: "おゆ", romaji: "oyu", arti: "Air panas" },
  { no: 517, kanji: "調理方法", kana: "ちょうりほうほう", romaji: "chourihouhou", arti: "Cara memasak" },
  { no: 518, kanji: "甘い", kana: "あまい", romaji: "amai", arti: "Manis" },
  { no: 519, kanji: "辛い", kana: "からい", romaji: "karai", arti: "Pedas" },
  { no: 520, kanji: "数字", kana: "すうじ", romaji: "suuji", arti: "Angka, bilangan" },
  { no: 521, kanji: "机", kana: "つくえ", romaji: "tsukue", arti: "Meja" },
  { no: 522, kanji: "都合", kana: "つごう", romaji: "tsugou", arti: "Keadaan" },
  { no: 523, kanji: "用事", kana: "ようじ", romaji: "youji", arti: "Keperluan" },
  { no: 524, kanji: "氏名", kana: "しめい", romaji: "shimei", arti: "Nama lengkap" },
  { no: 525, kanji: "理由", kana: "りゆう", romaji: "riyuu", arti: "Alasan" },

  // Halaman 14 (526 - 569)
  { no: 526, kanji: "別に", kana: "べつに", romaji: "betsuni", arti: "Beda-beda" },
  { no: 527, kanji: "連絡先", kana: "れんらくさき", romaji: "renrakusaki", arti: "Alamat yang dapat dihubungi" },
  { no: 528, kanji: "吸います", kana: "すいます", romaji: "suimasu", arti: "Menghisap" },
  { no: 529, kanji: "取ります", kana: "とります", romaji: "torimasu", arti: "Mengambil" },
  { no: 530, kanji: "伝えます", kana: "つたえます", romaji: "tsutaemasu", arti: "Menyampaikan" },
  { no: 531, kanji: "熱", kana: "ねつ", romaji: "netsu", arti: "Demam" },
  { no: 532, kanji: "薬", kana: "くすり", romaji: "kusuri", arti: "Obat" },
  { no: 533, kanji: "医者", kana: "いしゃ", romaji: "isha", arti: "Dokter" },
  { no: 534, kanji: "〜才", kana: "〜さい", romaji: "~sai", arti: "Bakat ~ / umur ~" },
  { no: 535, kanji: "眠い", kana: "ねむい", romaji: "nemui", arti: "Ngantuk" },
  { no: 536, kanji: "記入します", kana: "きにゅうします", romaji: "knyuushimasu", arti: "Mengisi di kertas" },
  { no: 537, kanji: "顔", kana: "かお", romaji: "kao", arti: "Wajah" },
  { no: 538, kanji: "泣きます", kana: "なきます", romaji: "nakimasu", arti: "Menangis" },
  { no: 539, kanji: "会計", kana: "かいけい", romaji: "kaikei", arti: "Pembayaran" },
  { no: 540, kanji: "電話番号", kana: "でんわばんごう", romaji: "denwabangou", arti: "Nomor telepon" },
  { no: 541, kanji: "牛乳", kana: "ぎゅうにゅう", romaji: "gyuunyuu", arti: "Susu sapi" },
  { no: 542, kanji: "禁煙", kana: "きんえん", romaji: "kin'en", arti: "Larangan merokok" },
  { no: 543, kanji: "自由", kana: "じゆう", romaji: "jiyuu", arti: "Bebas" },
  { no: 544, kanji: "切ります", kana: "きります", romaji: "kirimasu", arti: "Memotong" },
  { no: 545, kanji: "焼きます", kana: "やきます", romaji: "yakimasu", arti: "Memanggang" },
  { no: 546, kanji: "旅館", kana: "りょかん", romaji: "ryokan", arti: "Penginapan" },
  { no: 547, kanji: "遊びます", kana: "あそびます", romaji: "asobimasu", arti: "Bermain" },
  { no: 548, kanji: "調べます", kana: "しらべます", romaji: "shirabemasu", arti: "Memeriksa" },
  { no: 549, kanji: "事故", kana: "じこ", romaji: "jiko", arti: "Kecelakaan" },
  { no: 550, kanji: "故障", kana: "こしょう", romaji: "koshou", arti: "Kerusakan" },
  { no: 551, kanji: "指定席", kana: "していせき", romaji: "shiteiseki", arti: "Tempat duduk yang ditetapkan" },
  { no: 552, kanji: "光ります", kana: "ひかります", romaji: "hikarimasu", arti: "Bercahaya , bersinar" },
  { no: 553, kanji: "お知らせ", kana: "おしらせ", romaji: "oshirase", arti: "Pengumuman" },
  { no: 554, kanji: "水道", kana: "すいどう", romaji: "suidou", arti: "Ledeng" },
  { no: 555, kanji: "工事", kana: "こうじ", romaji: "kouji", arti: "Konstruksi" },
  { no: 556, kanji: "場合", kana: "ばあい", romaji: "baai", arti: "Kesempatan" },
  { no: 557, kanji: "条件", kana: "じょうけん", romaji: "jouken", arti: "Syarat-syarat, kondisi" },
  { no: 558, kanji: "開きます", kana: "ひらきます", romaji: "hirakimasu", arti: "Membuka" },
  { no: 559, kanji: "生産します", kana: "せいさんします", romaji: "seisanshimasu", arti: "Memproduksi" },
  { no: 560, kanji: "体験", kana: "たいけん", romaji: "taiken", arti: "Percobaan" },
  { no: 561, kanji: "国際交流", kana: "こくさいこうりゅう", romaji: "kokusaikouryuu", arti: "Pertukaran budaya internasional" },
  { no: 562, kanji: "申し込まます", kana: "もうしこみます", romaji: "moushikomimasu", arti: "Melamar (pekerjaan)" },
  { no: 563, kanji: "昨年", kana: "さくねん", romaji: "sakunen", arti: "Tahun lalu" },
  { no: 564, kanji: "毎年", kana: "まいとし", romaji: "maitoshi", arti: "Setiap tahun" },
  { no: 565, kanji: "袋", kana: "ふくろ", romaji: "fukuro", arti: "Kantong plastik" },
  { no: 566, kanji: "店長", kana: "てんちょう", romaji: "tenchou", arti: "Manajer toko" },
  { no: 567, kanji: "全員", kana: "ぜんいん", romaji: "zen'in", arti: "Semuanya" },
  { no: 568, kanji: "習慣", kana: "しゅうかん", romaji: "shuukan", arti: "Kebiasaan" },
  { no: 569, kanji: "普通", kana: "ふつう", romaji: "futsuu", arti: "Biasa" },

  // Halaman 15 (570 - 613)
  { no: 570, kanji: "暗い", kana: "くらい", romaji: "kurai", arti: "Gelap" },
  { no: 571, kanji: "怒ります", kana: "おこります", romaji: "okorimasu", arti: "Marah" },
  { no: 572, kanji: "入院します", kana: "にゅういんします", romaji: "nyuuinshimasu", arti: "Masuk rumah sakit" },
  { no: 573, kanji: "退院します", kana: "たいいんします", romaji: "taiinshimasu", arti: "Keluar rumah sakit" },
  { no: 574, kanji: "急に", kana: "きゅうに", romaji: "kyuuni", arti: "Tiba-tiba" },
  { no: 575, kanji: "営業します", kana: "えいぎょうします", romaji: "eigyoushimasu", arti: "Buka" },
  { no: 576, kanji: "案内します", kana: "あんないします", romaji: "annaishimasu", arti: "Memandu" },
  { no: 577, kanji: "値段", kana: "ねだん", romaji: "nedan", arti: "Harga" },
  { no: 578, kanji: "価格", kana: "かかく", romaji: "kakaku", arti: "Harga" },
  { no: 579, kanji: "消費税", kana: "しょうひぜい", romaji: "shouhizei", arti: "Pajak konsumen" },
  { no: 580, kanji: "税別", kana: "ぜいべつ", romaji: "zeibetsu", arti: "Harga belum termasuk pajak" },
  { no: 581, kanji: "図書館", kana: "としょかん", romaji: "toshokan", arti: "Perpustakaan" },
  { no: 582, kanji: "開きます", kana: "あきます", romaji: "akimasu", arti: "Terbuka" },
  { no: 583, kanji: "閉まります", kana: "しまります", romaji: "shimarimasu", arti: "Tertutup" },
  { no: 584, kanji: "利用します", kana: "りようします", romaji: "riyoushimasu", arti: "Menggunakan" },
  { no: 585, kanji: "窓口", kana: "まどぐち", romaji: "madoguchi", arti: "Konter , loket" },
  { no: 586, kanji: "郵便局", kana: "ゆうびんきょく", romaji: "yuubinkyoku", arti: "Kantor pos" },
  { no: 587, kanji: "近所", kana: "きんじょ", romaji: "kinjo", arti: "Tetangga" },
  { no: 588, kanji: "自動", kana: "じどう", romaji: "jidou", arti: "Otomatis" },
  { no: 589, kanji: "危険", kana: "きけん", romaji: "kiken", arti: "Bahaya" },
  { no: 590, kanji: "〜種類", kana: "〜しゅるい", romaji: "~shurui", arti: "~macam, jenis" },
  { no: 591, kanji: "消します", kana: "けします", romaji: "keshimasu", arti: "Memadamkan" },
  { no: 592, kanji: "捨てます", kana: "すてます", romaji: "sutemasu", arti: "Membuang" },
  { no: 593, kanji: "分けます", kana: "わけます", romaji: "wakemasu", arti: "Membagi" },
  { no: 594, kanji: "燃えます", kana: "もえます", romaji: "moemasu", arti: "Terbakar" },
  { no: 595, kanji: "設定します", kana: "せっていします", romaji: "setteishimasu", arti: "Mengeset, menyeting" },
  { no: 596, kanji: "地震", kana: "じしん", romaji: "jishin", arti: "Gempa" },
  { no: 597, kanji: "台風", kana: "たいふう", romaji: "taifuu", arti: "Angin topan" },
  { no: 598, kanji: "声", kana: "こえ", romaji: "koe", arti: "Suara (benda hidup)" },
  { no: 599, kanji: "大切な", kana: "たいせつな", romaji: "taisetsuna", arti: "Penting" },
  { no: 600, kanji: "進めます", kana: "すすめます", romaji: "susumemasu", arti: "Rekomendasi" },
  { no: 601, kanji: "授業", kana: "じゅぎょう", romaji: "jugyou", arti: "Pelajaran" },
  { no: 602, kanji: "大変な", kana: "たいへんな", romaji: "taihenna", arti: "Berat (perasaan)" },
  { no: 603, kanji: "困ります", kana: "こまります", romaji: "komarimasu", arti: "Susah" },
  { no: 604, kanji: "違います", kana: "ちがいます", romaji: "chigaimasu", arti: "Salah , berbeda" },
  { no: 605, kanji: "慣れます", kana: "なれます", romaji: "naremasu", arti: "terbiasa" },
  { no: 606, kanji: "増えます", kana: "ふえます", romaji: "fuemasu", arti: "Bertambah" },
  { no: 607, kanji: "笑います", kana: "わらいます", romaji: "waraimasu", arti: "Tertawa" },
  { no: 608, kanji: "苦労します", kana: "くろうします", romaji: "kuroushimasu", arti: "Bersakit-sakit (dalam usaha)" },
  { no: 609, kanji: "希望", kana: "きぼう", romaji: "kibou", arti: "Harapan, keinginan" },
  { no: 610, kanji: "特に", kana: "とくに", romaji: "tokuni", arti: "Terutama" },
  { no: 611, kanji: "建てます", kana: "たてます", romaji: "tatemasu", arti: "Mendirikan" },
  { no: 612, kanji: "続けます", kana: "つづけます", romaji: "tsuzukemasu", arti: "Melanjutkan" },
  { no: 613, kanji: "役に立ちます", kana: "やくにたちます", romaji: "yaku ni tachimasu", arti: "Bermanfaat" }
];

// State Aplikasi
let selectedIds = new Set(KANJI_DATA.map(k => k.no));
let currentPage = 1;
const itemsPerPage = 10;

let fcDeck = [];
let fcIndex = 0;

let quizQuestions = [];
let quizCurrentIdx = 0;
let quizScore = 0;
let quizWrongList = [];
let quizAnswered = false;

// --- NAVIGASI TAB ---
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    const target = btn.dataset.tab;
    document.getElementById(`tab-${target}`).classList.add('active');

    if (target === 'flashcard') initFlashcard();
  });
});

// --- FILTER RENTANG & CHECKBOX ---
function updateSelectedCount() {
  document.getElementById('selected-count').textContent = selectedIds.size;
}

document.getElementById('btn-apply-range').addEventListener('click', () => {
  const start = Math.max(1, parseInt(document.getElementById('range-start').value) || 1);
  const end = Math.min(613, parseInt(document.getElementById('range-end').value) || 613);
  selectedIds.clear();
  KANJI_DATA.forEach(item => {
    if (item.no >= start && item.no <= end) selectedIds.add(item.no);
  });
  currentPage = 1;
  renderTable();
  updateSelectedCount();
  if (document.getElementById('tab-flashcard').classList.contains('active')) initFlashcard();
});

document.getElementById('btn-select-all').addEventListener('click', () => {
  selectedIds = new Set(KANJI_DATA.map(k => k.no));
  currentPage = 1;
  renderTable();
  updateSelectedCount();
  if (document.getElementById('tab-flashcard').classList.contains('active')) initFlashcard();
});

document.getElementById('btn-unselect-all').addEventListener('click', () => {
  selectedIds.clear();
  renderTable();
  updateSelectedCount();
});

// --- TABEL DAFTAR KANJI & PAGINASI PER 10 KATA ---
const tableBody = document.getElementById('kanji-table-body');
const searchInput = document.getElementById('search-input');

function getFilteredData() {
  const q = searchInput.value.toLowerCase().trim();
  return KANJI_DATA.filter(item =>
    item.no.toString().includes(q) ||
    item.kanji.toLowerCase().includes(q) ||
    item.kana.toLowerCase().includes(q) ||
    item.romaji.toLowerCase().includes(q) ||
    item.arti.toLowerCase().includes(q)
  );
}

function renderTable() {
  const filtered = getFilteredData();
  const totalPages = Math.ceil(filtered.length / itemsPerPage) || 1;
  if (currentPage > totalPages) currentPage = totalPages;
  if (currentPage < 1) currentPage = 1;

  const startIdx = (currentPage - 1) * itemsPerPage;
  const pageItems = filtered.slice(startIdx, startIdx + itemsPerPage);

  tableBody.innerHTML = pageItems.map(item => `
    <tr>
      <td><input type="checkbox" class="row-check" data-no="${item.no}" ${selectedIds.has(item.no) ? 'checked' : ''}></td>
      <td>${item.no}</td>
      <td class="kanji-cell">${item.kanji}</td>
      <td>${item.kana}</td>
      <td class="romaji-cell">${item.romaji}</td>
      <td>${item.arti}</td>
    </tr>
  `).join('');

  document.getElementById('page-info').textContent = `Hal ${currentPage} dari ${totalPages} (Total ${filtered.length} kata)`;

  document.getElementById('btn-page-prev').disabled = currentPage === 1;
  document.getElementById('btn-page-next').disabled = currentPage === totalPages;

  document.querySelectorAll('.row-check').forEach(cb => {
    cb.addEventListener('change', (e) => {
      const no = parseInt(e.target.dataset.no);
      if (e.target.checked) selectedIds.add(no);
      else selectedIds.delete(no);
      updateSelectedCount();
    });
  });
}

document.getElementById('btn-page-prev').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    renderTable();
  }
});

document.getElementById('btn-page-next').addEventListener('click', () => {
  const filtered = getFilteredData();
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    renderTable();
  }
});

searchInput.addEventListener('input', () => {
  currentPage = 1;
  renderTable();
});

document.getElementById('check-visible').addEventListener('change', (e) => {
  const filtered = getFilteredData();
  const startIdx = (currentPage - 1) * itemsPerPage;
  const pageItems = filtered.slice(startIdx, startIdx + itemsPerPage);

  pageItems.forEach(item => {
    if (e.target.checked) selectedIds.add(item.no);
    else selectedIds.delete(item.no);
  });

  renderTable();
  updateSelectedCount();
});

// --- FLASHCARD 3D ---
const flashcardEl = document.getElementById('flashcard');
const cardFrontEl = document.getElementById('card-front');
const cardBackEl = document.getElementById('card-back');
const fcFrontMode = document.getElementById('fc-front-mode');

function getSelectedItems() {
  return KANJI_DATA.filter(item => selectedIds.has(item.no));
}

function initFlashcard() {
  fcDeck = getSelectedItems();
  fcIndex = 0;
  renderFlashcard();
}

function renderFlashcard() {
  flashcardEl.classList.remove('flipped');
  if (fcDeck.length === 0) {
    document.getElementById('fc-counter').textContent = '0 / 0';
    cardFrontEl.innerHTML = '<div class="fc-sub-text">Pilih minimal 1 kanji pada filter di atas.</div>';
    cardBackEl.innerHTML = '';
    return;
  }

  const item = fcDeck[fcIndex];
  const mode = fcFrontMode.value;
  document.getElementById('fc-counter').textContent = `${fcIndex + 1} / ${fcDeck.length}`;

  if (mode === 'kanji') {
    cardFrontEl.innerHTML = `<span class="fc-badge">No. ${item.no}</span><div class="fc-main-text">${item.kanji}</div>`;
    cardBackEl.innerHTML = `
      <span class="fc-badge">No. ${item.no}</span>
      <div class="fc-sub-text">${item.kana}</div>
      <div class="fc-romaji">${item.romaji}</div>
      <div class="fc-meaning">${item.arti}</div>
    `;
  } else if (mode === 'kanji-kana') {
    cardFrontEl.innerHTML = `
      <span class="fc-badge">No. ${item.no}</span>
      <div class="fc-main-text">${item.kanji}</div>
      <div class="fc-sub-text">${item.kana}</div>
      <div class="fc-romaji">${item.romaji}</div>
    `;
    cardBackEl.innerHTML = `<span class="fc-badge">No. ${item.no}</span><div class="fc-meaning">${item.arti}</div>`;
  } else if (mode === 'meaning') {
    cardFrontEl.innerHTML = `<span class="fc-badge">No. ${item.no}</span><div class="fc-meaning">${item.arti}</div>`;
    cardBackEl.innerHTML = `
      <span class="fc-badge">No. ${item.no}</span>
      <div class="fc-main-text">${item.kanji}</div>
      <div class="fc-sub-text">${item.kana}</div>
      <div class="fc-romaji">${item.romaji}</div>
    `;
  } else if (mode === 'romaji') {
    cardFrontEl.innerHTML = `<span class="fc-badge">No. ${item.no}</span><div class="fc-main-text" style="font-size:1.9rem">${item.romaji}</div>`;
    cardBackEl.innerHTML = `
      <span class="fc-badge">No. ${item.no}</span>
      <div class="fc-main-text">${item.kanji}</div>
      <div class="fc-sub-text">${item.kana}</div>
      <div class="fc-meaning">${item.arti}</div>
    `;
  }
}

document.getElementById('flashcard-scene').addEventListener('click', () => {
  if (fcDeck.length > 0) flashcardEl.classList.toggle('flipped');
});

document.getElementById('btn-fc-flip').addEventListener('click', () => {
  if (fcDeck.length > 0) flashcardEl.classList.toggle('flipped');
});

document.getElementById('btn-fc-prev').addEventListener('click', () => {
  if (fcDeck.length === 0) return;
  fcIndex = (fcIndex - 1 + fcDeck.length) % fcDeck.length;
  renderFlashcard();
});

document.getElementById('btn-fc-next').addEventListener('click', () => {
  if (fcDeck.length === 0) return;
  fcIndex = (fcIndex + 1) % fcDeck.length;
  renderFlashcard();
});

document.getElementById('btn-fc-shuffle').addEventListener('click', () => {
  fcDeck.sort(() => Math.random() - 0.5);
  fcIndex = 0;
  renderFlashcard();
});

fcFrontMode.addEventListener('change', renderFlashcard);

document.addEventListener('keydown', (e) => {
  if (!document.getElementById('tab-flashcard').classList.contains('active')) return;
  if (e.code === 'Space') { e.preventDefault(); flashcardEl.classList.toggle('flipped'); }
  if (e.code === 'ArrowRight') document.getElementById('btn-fc-next').click();
  if (e.code === 'ArrowLeft') document.getElementById('btn-fc-prev').click();
});

// --- KUIS ACAK ---
document.getElementById('btn-start-quiz').addEventListener('click', () => {
  const pool = getSelectedItems();
  if (pool.length < 4) {
    alert('Pilih minimal 4 kanji untuk memulai kuis.');
    return;
  }

  const limit = Math.min(pool.length, Math.max(1, parseInt(document.getElementById('quiz-limit').value) || 10));
  quizQuestions = [...pool].sort(() => Math.random() - 0.5).slice(0, limit);
  quizCurrentIdx = 0;
  quizScore = 0;
  quizWrongList = [];

  document.getElementById('quiz-setup').classList.add('hidden');
  document.getElementById('quiz-result').classList.add('hidden');
  document.getElementById('quiz-area').classList.remove('hidden');

  renderQuestion();
});

function renderQuestion() {
  quizAnswered = false;
  const item = quizQuestions[quizCurrentIdx];
  const type = document.getElementById('quiz-type').value;
  const qMode = document.getElementById('quiz-question-mode').value;

  document.getElementById('quiz-progress').textContent = `Soal ${quizCurrentIdx + 1} / ${quizQuestions.length}`;
  document.getElementById('quiz-score').textContent = `Skor: ${quizScore}`;
  document.getElementById('quiz-feedback').textContent = '';
  document.getElementById('btn-next-question').classList.add('hidden');

  const promptEl = document.getElementById('quiz-prompt');
  const subEl = document.getElementById('quiz-subprompt');

  if (qMode === 'kanji-to-meaning') {
    promptEl.textContent = item.kanji;
    subEl.textContent = `No. ${item.no} — Apa arti kanji ini?`;
  } else if (qMode === 'kanji-to-reading') {
    promptEl.textContent = item.kanji;
    subEl.textContent = `No. ${item.no} (${item.arti}) — Bagaimana cara bacanya?`;
  } else {
    promptEl.textContent = item.arti;
    subEl.textContent = `No. ${item.no} — Pilih/ketik kanji yang sesuai`;
  }

  const mcBox = document.getElementById('quiz-mc-options');
  const textBox = document.getElementById('quiz-text-box');

  if (type === 'mc') {
    mcBox.classList.remove('hidden');
    textBox.classList.add('hidden');

    const distractors = KANJI_DATA
      .filter(k => k.no !== item.no)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    const choices = [item, ...distractors].sort(() => Math.random() - 0.5);
    mcBox.innerHTML = choices.map(c => {
      let label = c.arti;
      if (qMode === 'kanji-to-reading') label = `${c.kana} (${c.romaji})`;
      else if (qMode === 'meaning-to-kanji') label = `${c.kanji} (${c.romaji})`;
      return `<button class="mc-btn" data-no="${c.no}">${label}</button>`;
    }).join('');

    mcBox.querySelectorAll('.mc-btn').forEach(btn => {
      btn.addEventListener('click', () => handleMcAnswer(btn, parseInt(btn.dataset.no), item));
    });
  } else {
    mcBox.classList.add('hidden');
    textBox.classList.remove('hidden');
    const input = document.getElementById('quiz-text-input');
    input.value = '';
    input.disabled = false;
    input.focus();
  }
}

function handleMcAnswer(btn, chosenNo, correctItem) {
  if (quizAnswered) return;
  quizAnswered = true;

  const isCorrect = chosenNo === correctItem.no;
  document.querySelectorAll('.mc-btn').forEach(b => {
    b.disabled = true;
    if (parseInt(b.dataset.no) === correctItem.no) b.classList.add('correct');
  });

  if (isCorrect) {
    quizScore++;
    document.getElementById('quiz-feedback').innerHTML = `<span style="color:var(--success)">Benar! ${correctItem.kanji} = ${correctItem.kana} (${correctItem.romaji}) — ${correctItem.arti}</span>`;
  } else {
    btn.classList.add('wrong');
    quizWrongList.push(correctItem);
    document.getElementById('quiz-feedback').innerHTML = `<span style="color:var(--danger)">Salah! Jawaban: ${correctItem.kanji} — ${correctItem.kana} (${correctItem.romaji}) — ${correctItem.arti}</span>`;
  }

  document.getElementById('quiz-score').textContent = `Skor: ${quizScore}`;
  document.getElementById('btn-next-question').classList.remove('hidden');
}

function normalizeText(str) {
  return str.toLowerCase().replace(/[~〜\(\)\s,\-\/]/g, '');
}

function handleTextAnswer() {
  if (quizAnswered) return;
  const input = document.getElementById('quiz-text-input');
  const userAns = normalizeText(input.value);
  if (!userAns) return;

  quizAnswered = true;
  input.disabled = true;

  const item = quizQuestions[quizCurrentIdx];
  const qMode = document.getElementById('quiz-question-mode').value;
  let isCorrect = false;

  if (qMode === 'kanji-to-meaning') {
    const validMeanings = item.arti.split(/[,\/]/).map(s => normalizeText(s));
    isCorrect = validMeanings.some(m => m && (m === userAns || (userAns.length >= 3 && m.includes(userAns))));
  } else if (qMode === 'kanji-to-reading') {
    const validReadings = [
      ...item.kana.split(/[、,\/]/).map(s => normalizeText(s)),
      ...item.romaji.split(/[、,\/]/).map(s => normalizeText(s))
    ];
    isCorrect = validReadings.some(r => r && r === userAns);
  } else {
    isCorrect = normalizeText(item.kanji) === userAns || normalizeText(item.kana) === userAns || normalizeText(item.romaji) === userAns;
  }

  if (isCorrect) {
    quizScore++;
    document.getElementById('quiz-feedback').innerHTML = `<span style="color:var(--success)">Benar! ${item.kanji} = ${item.kana} (${item.romaji}) — ${item.arti}</span>`;
  } else {
    quizWrongList.push(item);
    document.getElementById('quiz-feedback').innerHTML = `<span style="color:var(--danger)">Kurang tepat. Jawaban: ${item.kanji} — ${item.kana} (${item.romaji}) — ${item.arti}</span>`;
  }

  document.getElementById('quiz-score').textContent = `Skor: ${quizScore}`;
  document.getElementById('btn-next-question').classList.remove('hidden');
}

document.getElementById('btn-submit-text').addEventListener('click', handleTextAnswer);
document.getElementById('quiz-text-input').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    if (!quizAnswered) handleTextAnswer();
    else document.getElementById('btn-next-question').click();
  }
});

document.getElementById('btn-next-question').addEventListener('click', () => {
  quizCurrentIdx++;
  if (quizCurrentIdx < quizQuestions.length) {
    renderQuestion();
  } else {
    showQuizResult();
  }
});

function showQuizResult() {
  document.getElementById('quiz-area').classList.add('hidden');
  document.getElementById('quiz-result').classList.remove('hidden');
  const pct = Math.round((quizScore / quizQuestions.length) * 100);
  document.getElementById('final-score-text').textContent = `Skor Akhir: ${quizScore} dari ${quizQuestions.length} (${pct}%)`;

  const wrongContainer = document.getElementById('wrong-answers-list');
  if (quizWrongList.length === 0) {
    wrongContainer.innerHTML = '<p style="color:var(--success);font-weight:600;">Sempurna! Semua jawaban benar.</p>';
  } else {
    wrongContainer.innerHTML = '<h3>Perlu Diulang:</h3>' + quizWrongList.map(w =>
      `<div class="wrong-item"><strong>No.${w.no} ${w.kanji}</strong> — ${w.kana} (<em>${w.romaji}</em>) : ${w.arti}</div>`
    ).join('');
  }
}

document.getElementById('btn-restart-quiz').addEventListener('click', () => {
  document.getElementById('quiz-result').classList.add('hidden');
  document.getElementById('quiz-setup').classList.remove('hidden');
});

// Inisialisasi Awal
renderTable();
updateSelectedCount();