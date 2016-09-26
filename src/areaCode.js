const areaInfo = {
  ET_REGION: {
    11: 'Addis Ababa',
    22: 'South East Ethiopia',
    25: 'East Ethiopia',
    33: 'North East Ethiopia',
    34: 'North Ethiopia',
    46: 'South Ethiopia',
    47: 'South West Ethiopia',
    57: 'West Ethiopia',
    58: 'North West Ethiopia',
  },
  AA_REGION: {
    1: 'Northern Addis Ababa',
    2: 'Western Addis Ababa',
    3: 'South West Addis Ababa',
    4: 'South Addis Ababa',
    5: 'Central Addis Ababa',
    6: 'Eastern Addis Ababa',
  },
  AA_SITES: {
    111: 'Arada I',
    112: 'Arada II',
    114: 'French Legasion',
    122: 'Sidist Kilo I',
    123: 'Sidist Kilo II',
    124: 'Sidist Kilo III',
    125: 'Sidist Kilo Rss I',
    127: 'Addisu Gebeya',
    131: 'Kuyu',
    132: 'Alem Ketema',
    133: 'Deber Tsige',
    134: 'Muke Turi',
    135: 'Fitche',
    155: 'Arada III',
    156: 'Arada IV',
    157: 'Arada V',
    158: 'Arada VI',
    186: 'Sululta',
    187: 'Goha Tsion',
    188: 'Chancho',
    213: 'Addis Ketema',
    236: 'Hagere Hiwot',
    237: 'Holeta Gent',
    238: 'Jeldu',
    258: 'Ginchi',
    259: 'Shegole',
    270: 'Asko',
    275: 'Addis Ketema II',
    276: 'Addis Ketema III',
    277: 'Addis Ketema IV',
    278: 'Addis Ketema VI',
    279: 'Kolfe',
    282: 'Guder',
    283: 'Addis Alem',
    284: 'Burayu',
    285: 'Wolenkomi',
    286: 'Enchini',
    320: 'Old Airport I',
    321: 'Mekanisa',
    330: 'Wolkite',
    331: 'Endibir',
    332: 'Gunchire',
    338: 'Sebeta',
    339: 'Teji',
    341: 'Ghion',
    342: 'Tullu Bollo',
    348: 'Jimmaber (Ayer Tena)',
    349: 'Keranyo',
    371: 'Old Airport II',
    372: 'Old Airport III',
    373: 'Old Airport  IV',
    374: 'Old Airport V',
    387: 'Alem Gena',
    416: 'Keira I',
    419: 'Hana Mariam',
    432: 'Dukem',
    433: 'Debre Zeit',
    434: 'Akaki',
    439: 'Kaliti',
    440: 'Nifas Silk III',
    442: 'Nifas Silk I',
    443: 'Nifas Silk II',
    465: 'Keria II',
    466: 'Keria III',
    467: 'Keira IV',
    468: 'Keria V',
    515: 'Filwoha II',
    517: 'Sheraton/DID',
    544: 'ECA',
    550: 'Filwoha IV',
    551: 'Filwoha III',
    552: 'Filwha VI',
    553: 'Filwha V',
    554: 'Filwha VII',
    618: 'Bole I',
    626: 'Bole Michael',
    629: 'Gerji',
    645: 'YekaI',
    646: 'Yeka II',
    647: 'Yeka Rss III',
    660: 'Kotebe',
    661: 'Bole II',
    662: 'Bole III',
    663: 'Bole IV',
    664: 'Bole V',
    665: 'Civil Aviation',
    669: 'Bole VI',
    680: 'Debre Sina',
    681: 'Debre Birehan',
    685: 'Mehal Meda',
    686: 'Sendafa',
    687: 'Sheno',
    688: 'Enwari',
  },
  'North Ethiopia': {
    440: 'Mekele I',
    441: 'Mekele II',
    442: 'Quiha',
    443: 'Wukro',
    444: 'Shire Endasselassie',
    445: 'Adigrat',
    446: 'Abi Adi',
    447: 'Senkata',
    448: 'Humera',
    550: 'Shiraro',
    551: 'Korem',
    552: 'Betemariam',
    554: 'A.Selam',
    555: 'Rama',
    556: 'Adi Daero',
    559: 'WLL-Mekele',
    660: 'Adi Gudem',
    661: 'Endabaguna',
    662: 'Mai-Tebri',
    663: 'Waja',
    771: 'Adwa',
    772: 'Inticho',
    773: 'Edaga-Hamus',
    774: 'Alemata',
    775: 'Axum',
  },
  'North East Ethiopia': {
    110: 'Kabe',
    111: 'Dessie I',
    112: 'Dessie II',
    113: 'Kobo Robit',
    114: 'Akesta',
    116: 'Wore-ilu',
    117: 'Tenta',
    118: 'Senbete',
    220: 'Mekana Selam',
    221: 'Bistima',
    222: 'Hayk',
    223: 'Mille',
    224: 'Wuchale',
    225: 'Elidar',
    226: 'Jama',
    330: 'Sirinka',
    331: 'Woldia',
    333: 'Mersa',
    334: 'Kobo',
    336: 'Lalibela',
    338: 'Bure',
    339: 'Manda',
    440: 'Sekota',
    444: 'Ansokia',
    550: 'Logia',
    551: 'Kombolcha',
    552: 'Harbu',
    553: 'Bati',
    554: 'Kemise',
    555: 'Assayta',
    556: 'Dupti',
    660: 'Majate',
    661: 'Epheson',
    664: 'Shoa Robit',
    666: 'Semera',
    667: 'Decheotto',
  },
  'East Ethiopia': {
    111: 'DireDawa I',
    112: 'Dire Dawa II',
    114: 'Shinile',
    115: 'Artshek',
    116: 'Melka Jeldu',
    332: 'Bedeno',
    333: 'Deder',
    334: 'Grawa',
    335: 'Chelenko',
    336: 'Kersa',
    337: 'Kobo',
    338: 'Kombolocha',
    441: 'Hirna',
    444: 'Miesso',
    446: 'Erer',
    447: 'Hurso',
    551: 'Asebe Teferi',
    554: 'Assebot',
    661: 'Alemaya',
    662: 'Aweday',
    665: 'Babile',
    666: 'Harar I',
    667: 'Harar II',
    669: 'Kebribeyah',
    771: 'Degahabur',
    772: 'Gursum',
    774: 'Kabri Dehar',
    775: 'Jigiga',
    776: 'Godie',
    777: 'Teferi Ber',
    779: 'Chinagson',
    880: 'Kelafo',
  },
  'South East Ethiopia': {
    111: 'Nazreth I',
    112: 'Nazreth II',
    113: 'Wolenchiti',
    114: 'Melkawarer',
    115: 'Alem Tena',
    116: 'Modjo',
    118: 'Meki',
    119: 'WLL-Nazreth',
    220: 'Wonji',
    221: 'Shoa',
    223: 'Arerti',
    224: 'Awash',
    225: 'Melkasa',
    226: 'Metehara',
    227: 'Agarfa',
    330: 'Sire',
    331: 'Asela',
    332: 'Bokoji',
    333: 'Dera',
    334: 'Huruta',
    335: 'Iteya',
    336: 'Assasa',
    337: 'Kersa',
    338: 'Sagure',
    339: 'Diksis',
    441: 'Abomsa',
    444: 'Ticho',
    446: 'Gobesa',
    447: 'Goro',
    661: 'Bale Goba',
    662: 'Gessera',
    663: 'Adaba',
    664: 'Ghinir',
    665: 'Robe',
    666: 'Dodolla',
    668: 'Dolomena',
  },
  'West Ethiopia': {
    227: 'Ghedo',
    550: 'Ejaji',
    555: 'Dembidolo',
    661: 'Nekemte',
    664: 'Fincha',
    665: 'Backo',
    666: 'Shambu',
    667: 'Arjo',
    668: 'Sire',
    771: 'Ghimbi',
    774: 'Nedjo',
    775: 'Assosa',
    776: 'Mendi',
    777: 'Billa',
    778: 'Guliso',
  },
  'North West Ethiopia': {
    111: 'Gonder',
    114: 'Azezo',
    119: 'Gilgel Beles',
    220: 'Bahir-dar I',
    221: 'Dangla',
    223: 'Durbette/ Abcheklite',
    224: 'Gimjabetmariam',
    225: 'Chagni/Metekel',
    226: 'Bahirdar II',
    227: 'Enjibara Kosober',
    229: 'Tilili',
    330: 'Merawi',
    331: 'Metema',
    332: 'Maksegnit',
    333: 'Chilga',
    334: 'Chewahit',
    335: 'Kola-deba',
    336: 'Delgi',
    338: 'Adet',
    440: 'Ebinat',
    441: 'Debre-tabour',
    443: 'Hamusit',
    444: 'Addis zemen',
    445: 'Nefas mewcha',
    446: 'Worota',
    447: 'Mekane-eyesus',
    448: 'Teda',
    550: 'Pawe',
    661: 'Motta',
    662: 'Keraniyo',
    663: 'Debre-work',
    664: 'Gunde-woin',
    665: 'Bichena',
    770: 'Mankusa',
    771: 'Debre-Markos I',
    772: 'Lumame',
    773: 'Denbecha',
    774: 'Bure',
    775: 'Finote-selam',
    776: 'Dejen',
    777: 'Amanuel',
    778: 'Debre Markos II',
    779: 'Jiga',
  },
  'South Ethiopia': {
    110: 'Shashamane I',
    111: 'Shashamane II',
    112: 'Kofele',
    114: 'Wondo Kela',
    115: 'Butajira',
    116: 'Arsi Negele',
    117: 'Adame Tulu',
    118: 'Kuyera',
    119: 'WLL-Shasemene',
    220: 'Awassa I',
    221: 'Awassa II',
    222: 'Wonda Basha',
    224: 'Aleta Wondo',
    225: 'Yirgalem',
    226: 'Leku',
    227: 'Chuko',
    331: 'Dilla',
    332: 'Yirga-Chefe',
    333: 'Wonago',
    334: 'Shakiso',
    335: 'Kibre-Mengist',
    441: 'Ziway',
    443: 'Hagere Mariam',
    444: 'Moyale',
    445: 'Negele Borena',
    446: 'Yabello',
    449: 'Dolo Odo',
    551: 'Wollayta',
    554: 'Durame',
    555: 'Hossena',
    556: 'Alaba Kulito',
    558: 'Enseno',
    559: 'Boditi',
    660: 'Kebado',
    771: 'Werabe',
    774: 'Gidole',
    777: 'Sawla',
    881: 'Arba Minch',
    882: 'Kibet',
    883: 'Buii',
    884: 'Arbaminch-WLL',
  },
  'South West Ethiopia': {
    111: 'Jimma I',
    112: 'Jimma II',
    113: 'Serbo',
    114: 'Assendabo',
    115: 'Omonada',
    116: 'Seka',
    117: 'Sekoru',
    118: 'Shebe',
    119: 'WLL-Jimma',
    221: 'Agaro',
    222: 'Ghembo',
    223: 'Dedo',
    224: 'Limmu Genet',
    225: 'Haro',
    226: 'Yebu',
    228: 'Atnago',
    229: 'Ghembe',
    331: 'Bonga',
    333: 'Yayo',
    334: 'Maji',
    335: 'Mizan Teferi',
    336: 'Aman',
    337: 'Chora',
    441: 'Metu',
    443: 'Dembi',
    444: 'Darimu',
    445: 'Bedele',
    446: 'Hurumu',
    551: 'Gambela',
    552: 'Itang',
    553: 'Jikawo',
    554: 'Gore',
    556: 'Tepi',
    558: 'Macha',
    559: 'Abebo',
  },
  MOBILE_CODE: {
    11: 'Addis Ababa, Ethiopia',
    14: 'North Ethiopia',
    15: 'East Ethiopia',
    16: 'South Ethiopia',
    17: 'West Ethiopia',
    18: 'North West Ethiopia',
  },
};

module.exports = areaInfo;