const data = [
  {
    Регион: "Алтайский край",
    Год: 2021,
    Показатель: 101,
  },
  {
    Регион: "Амурская область",
    Год: 2021,
    Показатель: 96,
  },
  {
    Регион: "Архангельская область",
    Год: 2021,
    Показатель: 109,
  },
  {
    Регион: "Астраханская область",
    Год: 2021,
    Показатель: 70,
  },
  {
    Регион: "Белгородская область",
    Год: 2021,
    Показатель: 81,
  },
  {
    Регион: "Брянская область",
    Год: 2021,
    Показатель: 51,
  },
  {
    Регион: "Владимирская область",
    Год: 2021,
    Показатель: 56,
  },
  {
    Регион: "Волгоградская область",
    Год: 2021,
    Показатель: 77,
  },
  {
    Регион: "Вологодская область",
    Год: 2021,
    Показатель: 90,
  },
  {
    Регион: "Воронежская область",
    Год: 2021,
    Показатель: 101,
  },
  {
    Регион: "г. Москва",
    Год: 2021,
    Показатель: 38,
  },
  {
    Регион: "г. Санкт-Петербург",
    Год: 2021,
    Показатель: 85,
  },
  {
    Регион: "г. Севастополь",
    Год: 2021,
    Показатель: 85,
  },
  {
    Регион: "Еврейская автономная область",
    Год: 2021,
    Показатель: 103,
  },
  {
    Регион: "Забайкальский край",
    Год: 2021,
    Показатель: 158,
  },
  {
    Регион: "Ивановская область",
    Год: 2021,
    Показатель: 56,
  },
  {
    Регион: "Иркутская область",
    Год: 2021,
    Показатель: 99,
  },
  {
    Регион: "Кабардино-Балкарская Республика",
    Год: 2021,
    Показатель: 216,
  },
  {
    Регион: "Калининградская область",
    Год: 2021,
    Показатель: 82,
  },
  {
    Регион: "Калужская область",
    Год: 2021,
    Показатель: 47,
  },
  {
    Регион: "Камчатский край",
    Год: 2021,
    Показатель: 89,
  },
  {
    Регион: "Карачаево-Черкесская Республика",
    Год: 2021,
    Показатель: 55,
  },
  {
    Регион: "Кемеровская область",
    Год: 2021,
    Показатель: 79,
  },
  {
    Регион: "Кировская область",
    Год: 2021,
    Показатель: 75,
  },
  {
    Регион: "Костромская область",
    Год: 2021,
    Показатель: 79,
  },
  {
    Регион: "Краснодарский край",
    Год: 2021,
    Показатель: 97,
  },
  {
    Регион: "Красноярский край",
    Год: 2021,
    Показатель: 93,
  },
  {
    Регион: "Курганская область",
    Год: 2021,
    Показатель: 136,
  },
  {
    Регион: "Курская область",
    Год: 2021,
    Показатель: 73,
  },
  {
    Регион: "Ленинградская область",
    Год: 2021,
    Показатель: 72,
  },
  {
    Регион: "Липецкая область",
    Год: 2021,
    Показатель: 108,
  },
  {
    Регион: "Магаданская область",
    Год: 2021,
    Показатель: 147,
  },
  {
    Регион: "Московская область",
    Год: 2021,
    Показатель: 66,
  },
  {
    Регион: "Мурманская область",
    Год: 2021,
    Показатель: 110,
  },
  {
    Регион: "Ненецкий автономный округ",
    Год: 2021,
    Показатель: 73,
  },
  {
    Регион: "Нижегородская область",
    Год: 2021,
    Показатель: 72,
  },
  {
    Регион: "Новгородская область",
    Год: 2021,
    Показатель: 68,
  },
  {
    Регион: "Новосибирская область",
    Год: 2021,
    Показатель: 89,
  },
  {
    Регион: "Омская область",
    Год: 2021,
    Показатель: 83,
  },
  {
    Регион: "Оренбургская область",
    Год: 2021,
    Показатель: 94,
  },
  {
    Регион: "Орловская область",
    Год: 2021,
    Показатель: 107,
  },
  {
    Регион: "Пензенская область",
    Год: 2021,
    Показатель: 350,
  },
  {
    Регион: "Пермский край",
    Год: 2021,
    Показатель: 74,
  },
  {
    Регион: "Приморский край",
    Год: 2021,
    Показатель: 65,
  },
  {
    Регион: "Псковская область",
    Год: 2021,
    Показатель: 53,
  },
  {
    Регион: "Республика Адыгея",
    Год: 2021,
    Показатель: 55,
  },
  {
    Регион: "Республика Алтай",
    Год: 2021,
    Показатель: 116,
  },
  {
    Регион: "Республика Башкортостан",
    Год: 2021,
    Показатель: 124,
  },
  {
    Регион: "Республика Бурятия",
    Год: 2021,
    Показатель: 105,
  },
  {
    Регион: "Республика Дагестан",
    Год: 2021,
    Показатель: 65,
  },
  {
    Регион: "Республика Ингушетия",
    Год: 2021,
    Показатель: 109,
  },
  {
    Регион: "Республика Калмыкия",
    Год: 2021,
    Показатель: 82,
  },
  {
    Регион: "Республика Карелия",
    Год: 2021,
    Показатель: 123,
  },
  {
    Регион: "Республика Коми",
    Год: 2021,
    Показатель: 134,
  },
  {
    Регион: "Республика Крым",
    Год: 2021,
    Показатель: 84,
  },
  {
    Регион: "Республика Марий Эл",
    Год: 2021,
    Показатель: 84,
  },
  {
    Регион: "Республика Мордовия",
    Год: 2021,
    Показатель: 183,
  },
  {
    Регион: "Республика Саха (Якутия)",
    Год: 2021,
    Показатель: 89,
  },
  {
    Регион: "Республика Северная Осетия - Алания",
    Год: 2021,
    Показатель: 39,
  },
  {
    Регион: "Республика Татарстан",
    Год: 2021,
    Показатель: 76,
  },
  {
    Регион: "Республика Тыва",
    Год: 2021,
    Показатель: 270,
  },
  {
    Регион: "Республика Хакасия",
    Год: 2021,
    Показатель: 97,
  },
  {
    Регион: "Ростовская область",
    Год: 2021,
    Показатель: 120,
  },
  {
    Регион: "Рязанская область",
    Год: 2021,
    Показатель: 48,
  },
  {
    Регион: "Самарская область",
    Год: 2021,
    Показатель: 155,
  },
  {
    Регион: "Саратовская область",
    Год: 2021,
    Показатель: 120,
  },
  {
    Регион: "Сахалинская область",
    Год: 2021,
    Показатель: 97,
  },
  {
    Регион: "Свердловская область",
    Год: 2021,
    Показатель: 105,
  },
  {
    Регион: "Смоленская область",
    Год: 2021,
    Показатель: 54,
  },
  {
    Регион: "Ставропольский край",
    Год: 2021,
    Показатель: 73,
  },
  {
    Регион: "Тамбовская область",
    Год: 2021,
    Показатель: 90,
  },
  {
    Регион: "Тверская область",
    Год: 2021,
    Показатель: 65,
  },
  {
    Регион: "Томская область",
    Год: 2021,
    Показатель: 76,
  },
  {
    Регион: "Тульская область",
    Год: 2021,
    Показатель: 52,
  },
  {
    Регион: "Тюменская область",
    Год: 2021,
    Показатель: 134,
  },
  {
    Регион: "Удмуртская Республика",
    Год: 2021,
    Показатель: 93,
  },
  {
    Регион: "Ульяновская область",
    Год: 2021,
    Показатель: 121,
  },
  {
    Регион: "Хабаровский край",
    Год: 2021,
    Показатель: 73,
  },
  {
    Регион: "Ханты-Мансийский автономный округ - Югра",
    Год: 2021,
    Показатель: 173,
  },
  {
    Регион: "Челябинская область",
    Год: 2021,
    Показатель: 79,
  },
  {
    Регион: "Чеченская Республика",
    Год: 2021,
    Показатель: 631,
  },
  {
    Регион: "Чувашская Республика",
    Год: 2021,
    Показатель: 77,
  },
  {
    Регион: "Чукотский автономный округ",
    Год: 2021,
    Показатель: 305,
  },
  {
    Регион: "Ямало-Ненецкий автономный округ",
    Год: 2021,
    Показатель: 142,
  },
  {
    Регион: "Ярославская область",
    Год: 2021,
    Показатель: 74,
  },
  {
    Регион: "Алтайский край",
    Год: 2022,
    Показатель: 51,
  },
  {
    Регион: "Амурская область",
    Год: 2022,
    Показатель: 68,
  },
  {
    Регион: "Архангельская область",
    Год: 2022,
    Показатель: 85,
  },
  {
    Регион: "Астраханская область",
    Год: 2022,
    Показатель: 80,
  },
  {
    Регион: "Белгородская область",
    Год: 2022,
    Показатель: 73,
  },
  {
    Регион: "Брянская область",
    Год: 2022,
    Показатель: 44,
  },
  {
    Регион: "Владимирская область",
    Год: 2022,
    Показатель: 40,
  },
  {
    Регион: "Волгоградская область",
    Год: 2022,
    Показатель: 87,
  },
  {
    Регион: "Вологодская область",
    Год: 2022,
    Показатель: 55,
  },
  {
    Регион: "Воронежская область",
    Год: 2022,
    Показатель: 100,
  },
  {
    Регион: "г. Москва",
    Год: 2022,
    Показатель: 34,
  },
  {
    Регион: "г. Санкт-Петербург",
    Год: 2022,
    Показатель: 77,
  },
  {
    Регион: "г. Севастополь",
    Год: 2022,
    Показатель: 84,
  },
  {
    Регион: "Еврейская автономная область",
    Год: 2022,
    Показатель: 85,
  },
  {
    Регион: "Забайкальский край",
    Год: 2022,
    Показатель: 107,
  },
  {
    Регион: "Ивановская область",
    Год: 2022,
    Показатель: 41,
  },
  {
    Регион: "Иркутская область",
    Год: 2022,
    Показатель: 102,
  },
  {
    Регион: "Кабардино-Балкарская Республика",
    Год: 2022,
    Показатель: 75,
  },
  {
    Регион: "Калининградская область",
    Год: 2022,
    Показатель: 63,
  },
  {
    Регион: "Калужская область",
    Год: 2022,
    Показатель: 70,
  },
  {
    Регион: "Камчатский край",
    Год: 2022,
    Показатель: 119,
  },
  {
    Регион: "Карачаево-Черкесская Республика",
    Год: 2022,
    Показатель: 48,
  },
  {
    Регион: "Кемеровская область",
    Год: 2022,
    Показатель: 60,
  },
  {
    Регион: "Кировская область",
    Год: 2022,
    Показатель: 77,
  },
  {
    Регион: "Костромская область",
    Год: 2022,
    Показатель: 56,
  },
  {
    Регион: "Краснодарский край",
    Год: 2022,
    Показатель: 56,
  },
  {
    Регион: "Красноярский край",
    Год: 2022,
    Показатель: 69,
  },
  {
    Регион: "Курганская область",
    Год: 2022,
    Показатель: 79,
  },
  {
    Регион: "Курская область",
    Год: 2022,
    Показатель: 68,
  },
  {
    Регион: "Ленинградская область",
    Год: 2022,
    Показатель: 61,
  },
  {
    Регион: "Липецкая область",
    Год: 2022,
    Показатель: 122,
  },
  {
    Регион: "Магаданская область",
    Год: 2022,
    Показатель: 114,
  },
  {
    Регион: "Московская область",
    Год: 2022,
    Показатель: 58,
  },
  {
    Регион: "Мурманская область",
    Год: 2022,
    Показатель: 109,
  },
  {
    Регион: "Ненецкий автономный округ",
    Год: 2022,
    Показатель: 47,
  },
  {
    Регион: "Нижегородская область",
    Год: 2022,
    Показатель: 62,
  },
  {
    Регион: "Новгородская область",
    Год: 2022,
    Показатель: 53,
  },
  {
    Регион: "Новосибирская область",
    Год: 2022,
    Показатель: 70,
  },
  {
    Регион: "Омская область",
    Год: 2022,
    Показатель: 64,
  },
  {
    Регион: "Оренбургская область",
    Год: 2022,
    Показатель: 70,
  },
  {
    Регион: "Орловская область",
    Год: 2022,
    Показатель: 70,
  },
  {
    Регион: "Пензенская область",
    Год: 2022,
    Показатель: 278,
  },
  {
    Регион: "Пермский край",
    Год: 2022,
    Показатель: 59,
  },
  {
    Регион: "Приморский край",
    Год: 2022,
    Показатель: 65,
  },
  {
    Регион: "Псковская область",
    Год: 2022,
    Показатель: 89,
  },
  {
    Регион: "Республика Адыгея",
    Год: 2022,
    Показатель: 35,
  },
  {
    Регион: "Республика Алтай",
    Год: 2022,
    Показатель: 77,
  },
  {
    Регион: "Республика Башкортостан",
    Год: 2022,
    Показатель: 103,
  },
  {
    Регион: "Республика Бурятия",
    Год: 2022,
    Показатель: 66,
  },
  {
    Регион: "Республика Дагестан",
    Год: 2022,
    Показатель: 48,
  },
  {
    Регион: "Республика Ингушетия",
    Год: 2022,
    Показатель: 185,
  },
  {
    Регион: "Республика Калмыкия",
    Год: 2022,
    Показатель: 50,
  },
  {
    Регион: "Республика Карелия",
    Год: 2022,
    Показатель: 116,
  },
  {
    Регион: "Республика Коми",
    Год: 2022,
    Показатель: 81,
  },
  {
    Регион: "Республика Крым",
    Год: 2022,
    Показатель: 84,
  },
  {
    Регион: "Республика Марий Эл",
    Год: 2022,
    Показатель: 63,
  },
  {
    Регион: "Республика Мордовия",
    Год: 2022,
    Показатель: 141,
  },
  {
    Регион: "Республика Саха (Якутия)",
    Год: 2022,
    Показатель: 57,
  },
  {
    Регион: "Республика Северная Осетия - Алания",
    Год: 2022,
    Показатель: 36,
  },
  {
    Регион: "Республика Татарстан",
    Год: 2022,
    Показатель: 54,
  },
  {
    Регион: "Республика Тыва",
    Год: 2022,
    Показатель: 183,
  },
  {
    Регион: "Республика Хакасия",
    Год: 2022,
    Показатель: 82,
  },
  {
    Регион: "Ростовская область",
    Год: 2022,
    Показатель: 89,
  },
  {
    Регион: "Рязанская область",
    Год: 2022,
    Показатель: 65,
  },
  {
    Регион: "Самарская область",
    Год: 2022,
    Показатель: 112,
  },
  {
    Регион: "Саратовская область",
    Год: 2022,
    Показатель: 136,
  },
  {
    Регион: "Сахалинская область",
    Год: 2022,
    Показатель: 85,
  },
  {
    Регион: "Свердловская область",
    Год: 2022,
    Показатель: 98,
  },
  {
    Регион: "Смоленская область",
    Год: 2022,
    Показатель: 62,
  },
  {
    Регион: "Ставропольский край",
    Год: 2022,
    Показатель: 52,
  },
  {
    Регион: "Тамбовская область",
    Год: 2022,
    Показатель: 120,
  },
  {
    Регион: "Тверская область",
    Год: 2022,
    Показатель: 51,
  },
  {
    Регион: "Томская область",
    Год: 2022,
    Показатель: 64,
  },
  {
    Регион: "Тульская область",
    Год: 2022,
    Показатель: 60,
  },
  {
    Регион: "Тюменская область",
    Год: 2022,
    Показатель: 106,
  },
  {
    Регион: "Удмуртская Республика",
    Год: 2022,
    Показатель: 93,
  },
  {
    Регион: "Ульяновская область",
    Год: 2022,
    Показатель: 78,
  },
  {
    Регион: "Хабаровский край",
    Год: 2022,
    Показатель: 54,
  },
  {
    Регион: "Ханты-Мансийский автономный округ - Югра",
    Год: 2022,
    Показатель: 76,
  },
  {
    Регион: "Челябинская область",
    Год: 2022,
    Показатель: 60,
  },
  {
    Регион: "Чеченская Республика",
    Год: 2022,
    Показатель: 113,
  },
  {
    Регион: "Чувашская Республика",
    Год: 2022,
    Показатель: 66,
  },
  {
    Регион: "Чукотский автономный округ",
    Год: 2022,
    Показатель: 153,
  },
  {
    Регион: "Ямало-Ненецкий автономный округ",
    Год: 2022,
    Показатель: 127,
  },
  {
    Регион: "Ярославская область",
    Год: 2022,
    Показатель: 40,
  },
  {
    Регион: "Алтайский край",
    Год: 2023,
    Показатель: 47,
  },
  {
    Регион: "Амурская область",
    Год: 2023,
    Показатель: 63,
  },
  {
    Регион: "Архангельская область",
    Год: 2023,
    Показатель: 27,
  },
  {
    Регион: "Астраханская область",
    Год: 2023,
    Показатель: 60,
  },
  {
    Регион: "Белгородская область",
    Год: 2023,
    Показатель: 46,
  },
  {
    Регион: "Брянская область",
    Год: 2023,
    Показатель: 26,
  },
  {
    Регион: "Владимирская область",
    Год: 2023,
    Показатель: 21,
  },
  {
    Регион: "Волгоградская область",
    Год: 2023,
    Показатель: 54,
  },
  {
    Регион: "Вологодская область",
    Год: 2023,
    Показатель: 20,
  },
  {
    Регион: "Воронежская область",
    Год: 2023,
    Показатель: 56,
  },
  {
    Регион: "г. Москва",
    Год: 2023,
    Показатель: 33,
  },
  {
    Регион: "г. Санкт-Петербург",
    Год: 2023,
    Показатель: 61,
  },
  {
    Регион: "г. Севастополь",
    Год: 2023,
    Показатель: 48,
  },
  {
    Регион: "Еврейская автономная область",
    Год: 2023,
    Показатель: 52,
  },
  {
    Регион: "Забайкальский край",
    Год: 2023,
    Показатель: 88,
  },
  {
    Регион: "Ивановская область",
    Год: 2023,
    Показатель: 28,
  },
  {
    Регион: "Иркутская область",
    Год: 2023,
    Показатель: 62,
  },
  {
    Регион: "Кабардино-Балкарская Республика",
    Год: 2023,
    Показатель: 50,
  },
  {
    Регион: "Калининградская область",
    Год: 2023,
    Показатель: 40,
  },
  {
    Регион: "Калужская область",
    Год: 2023,
    Показатель: 34,
  },
  {
    Регион: "Камчатский край",
    Год: 2023,
    Показатель: 70,
  },
  {
    Регион: "Карачаево-Черкесская Республика",
    Год: 2023,
    Показатель: 58,
  },
  {
    Регион: "Кемеровская область",
    Год: 2023,
    Показатель: 53,
  },
  {
    Регион: "Кировская область",
    Год: 2023,
    Показатель: 37,
  },
  {
    Регион: "Костромская область",
    Год: 2023,
    Показатель: 24,
  },
  {
    Регион: "Краснодарский край",
    Год: 2023,
    Показатель: 57,
  },
  {
    Регион: "Красноярский край",
    Год: 2023,
    Показатель: 60,
  },
  {
    Регион: "Курганская область",
    Год: 2023,
    Показатель: 57,
  },
  {
    Регион: "Курская область",
    Год: 2023,
    Показатель: 43,
  },
  {
    Регион: "Ленинградская область",
    Год: 2023,
    Показатель: 41,
  },
  {
    Регион: "Липецкая область",
    Год: 2023,
    Показатель: 78,
  },
  {
    Регион: "Магаданская область",
    Год: 2023,
    Показатель: 92,
  },
  {
    Регион: "Московская область",
    Год: 2023,
    Показатель: 43,
  },
  {
    Регион: "Мурманская область",
    Год: 2023,
    Показатель: 70,
  },
  {
    Регион: "Ненецкий автономный округ",
    Год: 2023,
    Показатель: 18,
  },
  {
    Регион: "Нижегородская область",
    Год: 2023,
    Показатель: 32,
  },
  {
    Регион: "Новгородская область",
    Год: 2023,
    Показатель: 35,
  },
  {
    Регион: "Новосибирская область",
    Год: 2023,
    Показатель: 60,
  },
  {
    Регион: "Омская область",
    Год: 2023,
    Показатель: 49,
  },
  {
    Регион: "Оренбургская область",
    Год: 2023,
    Показатель: 44,
  },
  {
    Регион: "Орловская область",
    Год: 2023,
    Показатель: 41,
  },
  {
    Регион: "Пензенская область",
    Год: 2023,
    Показатель: 305,
  },
  {
    Регион: "Пермский край",
    Год: 2023,
    Показатель: 29,
  },
  {
    Регион: "Приморский край",
    Год: 2023,
    Показатель: 46,
  },
  {
    Регион: "Псковская область",
    Год: 2023,
    Показатель: 35,
  },
  {
    Регион: "Республика Адыгея",
    Год: 2023,
    Показатель: 35,
  },
  {
    Регион: "Республика Алтай",
    Год: 2023,
    Показатель: 49,
  },
  {
    Регион: "Республика Башкортостан",
    Год: 2023,
    Показатель: 87,
  },
  {
    Регион: "Республика Бурятия",
    Год: 2023,
    Показатель: 96,
  },
  {
    Регион: "Республика Дагестан",
    Год: 2023,
    Показатель: 20,
  },
  {
    Регион: "Республика Ингушетия",
    Год: 2023,
    Показатель: 79,
  },
  {
    Регион: "Республика Калмыкия",
    Год: 2023,
    Показатель: 27,
  },
  {
    Регион: "Республика Карелия",
    Год: 2023,
    Показатель: 64,
  },
  {
    Регион: "Республика Коми",
    Год: 2023,
    Показатель: 51,
  },
  {
    Регион: "Республика Крым",
    Год: 2023,
    Показатель: 46,
  },
  {
    Регион: "Республика Марий Эл",
    Год: 2023,
    Показатель: 31,
  },
  {
    Регион: "Республика Мордовия",
    Год: 2023,
    Показатель: 193,
  },
  {
    Регион: "Республика Саха (Якутия)",
    Год: 2023,
    Показатель: 47,
  },
  {
    Регион: "Республика Северная Осетия - Алания",
    Год: 2023,
    Показатель: 25,
  },
  {
    Регион: "Республика Татарстан",
    Год: 2023,
    Показатель: 28,
  },
  {
    Регион: "Республика Тыва",
    Год: 2023,
    Показатель: 239,
  },
  {
    Регион: "Республика Хакасия",
    Год: 2023,
    Показатель: 50,
  },
  {
    Регион: "Ростовская область",
    Год: 2023,
    Показатель: 64,
  },
  {
    Регион: "Рязанская область",
    Год: 2023,
    Показатель: 43,
  },
  {
    Регион: "Самарская область",
    Год: 2023,
    Показатель: 54,
  },
  {
    Регион: "Саратовская область",
    Год: 2023,
    Показатель: 104,
  },
  {
    Регион: "Сахалинская область",
    Год: 2023,
    Показатель: 52,
  },
  {
    Регион: "Свердловская область",
    Год: 2023,
    Показатель: 66,
  },
  {
    Регион: "Смоленская область",
    Год: 2023,
    Показатель: 30,
  },
  {
    Регион: "Ставропольский край",
    Год: 2023,
    Показатель: 36,
  },
  {
    Регион: "Тамбовская область",
    Год: 2023,
    Показатель: 150,
  },
  {
    Регион: "Тверская область",
    Год: 2023,
    Показатель: 31,
  },
  {
    Регион: "Томская область",
    Год: 2023,
    Показатель: 51,
  },
  {
    Регион: "Тульская область",
    Год: 2023,
    Показатель: 42,
  },
  {
    Регион: "Тюменская область",
    Год: 2023,
    Показатель: 92,
  },
  {
    Регион: "Удмуртская Республика",
    Год: 2023,
    Показатель: 41,
  },
  {
    Регион: "Ульяновская область",
    Год: 2023,
    Показатель: 44,
  },
  {
    Регион: "Хабаровский край",
    Год: 2023,
    Показатель: 65,
  },
  {
    Регион: "Ханты-Мансийский автономный округ - Югра",
    Год: 2023,
    Показатель: 121,
  },
  {
    Регион: "Челябинская область",
    Год: 2023,
    Показатель: 36,
  },
  {
    Регион: "Чеченская Республика",
    Год: 2023,
    Показатель: 28,
  },
  {
    Регион: "Чувашская Республика",
    Год: 2023,
    Показатель: 46,
  },
  {
    Регион: "Чукотский автономный округ",
    Год: 2023,
    Показатель: 110,
  },
  {
    Регион: "Ямало-Ненецкий автономный округ",
    Год: 2023,
    Показатель: 109,
  },
  {
    Регион: "Ярославская область",
    Год: 2023,
    Показатель: 30,
  },
];

export default data;
