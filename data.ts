export const measures = {
    kg: {id: 'kg', title: 'килограмм', shortTitle: 'кг'},
    gr: {id: 'gr', title: 'грамм', shortTitle: 'г'},
    zub: {id: 'zub', title: 'зубчик', shortTitle: 'зубчик'},
    litr: {id: 'litr', title: 'литр', shortTitle: 'л'},
    tea: {id: 'tea', title: 'чайная ложка', shortTitle: 'ч. ложка'},
    count: {id: 'count', title: 'штук', shortTitle: 'шт'},
    spoon: {id: 'spoon', title: 'ложка', shortTitle: 'ложка'},
    ml: {id: 'ml', title: 'милилитры', shortTitle: 'мл'},
} as {[id: string]: {id: string; title: string; shortTitle: string}};

export const diets = [{id: '1', title: 'Средиземноморская'}];

export const cardsItems = {
    '1': {
        id: '1',
        title: 'Лазанья',
        desciption: `Лазанья классическая - вид итальянской пасты, представляющее из себя пласты теста их твёрдых сортов пшеницы, которые прослаивают разнообразной начинкой и запекают. Лазанья — это традиционное блюдо итальянской кухни, и существует множество вариантов его приготовления.`,
        difficultyLevel: 2,
        time: 40,
        calories: 115,
        diets: [],
        groceryList: {
            farsh: [
                {
                    title: 'Фарш мясной',
                    measure: 'gr',
                    count: 800,
                },
                {title: 'Помидоры', measure: 'count', count: 2},
                {title: 'Лук (небольшой)', measure: 'count', count: 2},
                {title: 'Листы лазаньи', measure: 'count', count: 10},
                {title: 'Чеснок', measure: 'zub', count: 2},
                {title: 'Томатная паста', measure: 'spoon', count: 2},
                {title: 'Твёрдый сыр', measure: 'gr', count: 100},
                {title: 'Растительное масло', measure: 'spoon', count: 1},
                {title: 'Соль'},
            ],
            sauce: [
                {title: 'Сливочное масло', measure: 'gr', count: 50},
                {title: 'Молоко', measure: 'ml', count: 600},
                {title: 'Мука (без горки)', measure: 'spoon', count: 5},
                {title: 'Душистый перец'},
            ],
        },
        parts: {
            farsh: {
                id: 'farsh',
                title: 'Подготовить мясо',
                steps: [
                    {
                        title: 'Подготовить продукты.                        ',
                        text: `Подготовить продукты, необходимые для приготовления лазаньи с фаршем`,
                        images: [
                            'https://static.1000.menu/img/content-v2/19/17/44000/lazanya-klassicheskaya-s-farshem-v-duxovke_1583924369_2_max.jpg',
                        ],
                        order: 1,
                    },
                    {
                        title: 'Подготовить лук',
                        text: `Почистить лук, помыть его и нарезать произвольно некрупно.`,
                        images: [
                            'https://static.1000.menu/img/content-v2/19/17/44000/lazanya-klassicheskaya-s-farshem-v-duxovke_1584017693_3_max.jpg',
                        ],
                        order: 2,
                    },
                    {
                        title: 'Жарим мясо',
                        text: `1.В сковородке разогреть растительное масло, отправить туда фарш и лук. \n2.Обжарить всё около пяти минут, постоянно помешивая. Нужно постараться сделать так, чтоб из фарша не формировались комочки в процессе обжаривания.`,
                        images: [
                            'https://static.1000.menu/img/content-v2/19/17/44000/lazanya-klassicheskaya-s-farshem-v-duxovke_1583924369_4_max.jpg',
                        ],
                        order: 3,
                    },
                    {
                        title: 'Жарим овощи',
                        text: `1. Чеснок почистить и нарубить мелко. \n2.Помидоры помыть, нарезать кубиками. \n3.С помидора предварительно можно снять кожицу. Для этого сделать крестообразный надрез на помидоре, залить томаты кипятком на пару минут, затем горячую воду слить и без труда убрать кожуру. \n4.Добавить в сковородку с фаршем томатную пасту, помидоры, чеснок. Посолить по вкусу.`,
                        images: [
                            'https://static.1000.menu/img/content-v2/19/17/44000/lazanya-klassicheskaya-s-farshem-v-duxovke_1583924369_5_max.jpg',
                        ],
                        order: 2,
                    },
                    {
                        title: 'Тушить овощи и мясо',
                        text: `Всё хорошо перемешать, огонь убавить до среднего и тушить фарш под закрытой крышкой около 10 минут.`,
                        images: [
                            'https://static.1000.menu/img/content-v2/19/17/44000/lazanya-klassicheskaya-s-farshem-v-duxovke_1583924369_6_max.jpg',
                        ],
                        order: 2,
                    },
                ],
            },
            sauce: {
                id: 'sauce',
                title: 'Соус Бешамель',
                steps: [
                    {
                        title: 'Растопить масло',
                        text: 'Пока тушится фарш приготовить соус Бешамель. Для этого в сотейнике растопить сливочное масло.                        ',
                        images: [
                            'https://static.1000.menu/img/content-v2/19/17/44000/lazanya-klassicheskaya-s-farshem-v-duxovke_1583924369_7_max.jpg',
                        ],
                        order: 1,
                    },
                    {
                        title: 'Обжарить муку',
                        text: 'Всыпать муку и, непрерывно помешивая венчиком, слегка её обжарить.                        ',
                        images: [
                            'https://static.1000.menu/img/content-v2/19/17/44000/lazanya-klassicheskaya-s-farshem-v-duxovke_1583924369_8_max.jpg',
                        ],
                        order: 1,
                    },
                    {
                        title: 'Добавить молоко',
                        text: 'Постепенно влить молоко, продолжая перемешивать массу венчиком,чтоб не образовалось комочков. Довести до состояния густых сливок, снять с огня и остудить.',
                        images: [
                            'https://static.1000.menu/img/content-v2/19/17/44000/lazanya-klassicheskaya-s-farshem-v-duxovke_1583924369_9_max.jpg',
                        ],
                        order: 1,
                    },
                    {
                        title: 'Начать делать запекание',
                        text: 'Дно формы для запекания смазать растительным маслом или застелить пекарской бумагой. Залить дно соусом Бешамель.',
                        images: [
                            'https://static.1000.menu/img/content-v2/19/17/44000/lazanya-klassicheskaya-s-farshem-v-duxovke_1583924369_10_max.jpg',
                        ],
                        order: 1,
                    },
                    {
                        title: 'Выложить листы',
                        text: 'Выложить листы для лазаньи первым слоем. Если требует того инструкция, то листы предварительно отварить. Сверху листы снова полить соусом.',
                        images: [
                            'https://static.1000.menu/img/content-v2/19/17/44000/lazanya-klassicheskaya-s-farshem-v-duxovke_1583924369_11_max.jpg',
                        ],
                        order: 1,
                    },
                    {
                        title: 'Присыпать его слегка тёртым сыром',
                        text: 'Следующим слоем выложить фарш и присыпать его слегка тёртым сыром.                        ',
                        images: [
                            'https://static.1000.menu/img/content-v2/19/17/44000/lazanya-klassicheskaya-s-farshem-v-duxovke_1583924369_12_max.jpg',
                        ],
                        order: 1,
                    },
                    {
                        title: 'part-1',
                        text: '1.Залить фарш соусом. \n2.Повторить все слои пока не заполнится форма. \n3.Последний слой с листами нужно очень хорошо залить соусом, особенно края, иначе есть вероятность, что лист теста засохнет и пригорит в процессе приготовления.',
                        images: [
                            'https://static.1000.menu/img/content-v2/19/17/44000/lazanya-klassicheskaya-s-farshem-v-duxovke_1583924369_14_max.jpg',
                        ],
                        order: 1,
                    },
                    {
                        title: 'Завершающий слой',
                        text: 'Завершающим слоем сделать тёртый сыр.',
                        images: [
                            'https://static.1000.menu/img/content-v2/19/17/44000/lazanya-klassicheskaya-s-farshem-v-duxovke_1583924369_15_max.jpg',
                        ],
                        order: 1,
                    },
                    {
                        title: 'Запечь лазанью',
                        text: '1.Отправить лазанью в разогретую духовку на 30-35 минут при 190-200 градусах (ориентируйтесь на свою духовку, на лазанье должна образоваться аппетитная золотистая корочка). \n2.Готовое блюдо вынуть из духового шкафа и дать настояться около 10 минут. \n3.Разрезать лазанью на порции и разложить по тарелкам. \n4.Подавать горячей.                        ',
                        images: [
                            'https://static.1000.menu/img/content-v2/19/17/44000/lazanya-klassicheskaya-s-farshem-v-duxovke_1583911843_1_max.jpg',
                        ],
                        order: 1,
                    },
                ],
            },
        },
    },
} as {
    [id: string]: {
        id: string;
        title: string;
        desciption: string;
        difficultyLevel: number;
        time: number;
        calories: number;
        diets: string[];
        groceryList: {[id: string]: TgroceryListItem[]};
        parts: {
            [id: string]: {
                id: string;
                title: string;
                steps: TStep[];
            };
        };
    };
};

export type TStep = {
    title: string;
    text: string;
    images: string[];
    order: number;
};

export type TgroceryListItem = {
    title: string;
    measure?: string;
    count?: number;
};
