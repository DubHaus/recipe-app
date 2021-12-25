export const measures = {
    kg: {id: 'kg', title: 'килограмм', shortTitle: 'кг'},
    gr: {id: 'gr', title: 'грамм', shortTitle: 'г'},
    zub: {id: 'zub', title: 'зубчик', shortTitle: 'зубчик'},
    litr: {id: 'litr', title: 'литр', shortTitle: 'л'},
    tea: {id: 'tea', title: 'чайная ложка', shortTitle: 'ч. ложка'},
    count: {id: 'count', title: 'штук', shortTitle: 'шт'},
    spoon: {id: 'spoon', title: 'ложка', shortTitle: 'ложка'},
    ml: {id: 'ml', title: 'милилитры', shortTitle: 'мл'},
    list: {id: 'list', title: 'листа', shortTitle: 'листа'},
    cup: {id: 'cup', title: 'кружка', shortTitle: 'кружка'},
} as {[id: string]: {id: string; title: string; shortTitle: string}};

export const diets = [{id: '1', title: 'Средиземноморская'}];

export const cardsItems: TRecipe[] = [
    {
        id: '1',
        title: 'Рождественская курочка (запеченная)',
        desciption: `Эта Рождественская курочка очень сочная и наполнена ароматами. Прекрасно запекается до золотистого цвета.\nЭта запеченная курочка будет лучшим выбором на вашем столе в это Рождество. 🎄🎁
        `,
        difficultyLevel: 3,
        time: 120,
        calories: 522,
        diets: [],
        images: [
            'https://www.thedinnerbite.com/wp-content/uploads/2020/12/christmas-chicken-roast-img-6.jpg',
            'https://www.thedinnerbite.com/wp-content/uploads/2020/12/christmas-chicken-roast-img-3.jpg',
            'https://www.thedinnerbite.com/wp-content/uploads/2020/12/christmas-chicken-roast-img-9.jpg',
        ],
        parts: [
            {
                id: 'chicken',
                title: 'Курочка',
                groceryList: [
                    {
                        title: 'Курочка',
                        measure: 'kg',
                        count: 2,
                    },
                    {title: 'Цедра одного большого апельсина'},
                    {title: 'Масло', measure: 'gr', count: 100},
                    {title: 'Апельсины', measure: 'count', count: 3},
                    {title: 'Лимон', measure: 'count', count: 1},
                    {title: 'Морковь', measure: 'count', count: 2},
                    {title: 'Большой лук', measure: 'count', count: 1},
                    {title: 'Головка чеснока', measure: 'count', count: 1},
                    {title: 'Весенний розмарин', measure: 'count', count: 1},
                    {title: 'Шалфей', measure: 'list', count: 3},
                    {title: 'Весенний тимьян', measure: 'list', count: 3},
                    {title: 'горсть петрушки'},
                    {title: 'Соль'},
                    {title: 'Перец'},
                    {title: 'куриный бульон', measure: 'cup', count: 1},
                ],
                steps: [
                    {
                        title: 'Подготовить курицу',
                        text: `Подержите курицу в комнатной температуре полтора часа. Промокните курицу кухнным полотнецем, чтобы она высохола.`,
                        images: [
                            'https://www.thedinnerbite.com/wp-content/uploads/2020/12/christmas-chicken-roast-img-11.jpg',
                        ],
                        timer: 90,
                    },
                    {
                        title: 'Подготовить духовку',
                        text: `Поставьте грется духовку на 200C`,
                        images: [],
                    },
                    {
                        title: 'Подготовить кожицу курицы',
                        text: `Осторожно ослабьте кожицу с куриной грудки, проводя пальцами под кожей или тыльной стороной ложки. Приправьте курицу, включая полость, солью и черным перцем.`,
                        images: [
                            'https://www.thedinnerbite.com/wp-content/uploads/2020/12/christmas-chicken-roast-img-15.jpg',
                        ],
                    },
                    {
                        title: 'Подготовьте овощи',
                        text: `Нарежьте морковь на куски, головку чеснока разрежьте пополам, затем лук, апельсины и лимон разрежьте на четвертинки и поместите в противень. Оставьте 2 дольки апельсина и лимон на потом.`,
                        images: [
                            'https://www.thedinnerbite.com/wp-content/uploads/2020/12/christmas-chicken-roast-img-11.jpg',
                        ],
                    },
                    {
                        title: 'Подготовить зелень и приправы',
                        text: `Мелко нарезать зелень (розмарин, шалфей, тимьян и петрушку) и добавить сливочное масло, затем перемешать и смешать с цедрой апельсина. Если масло все еще твердое, поместите его в микроволновую печь примерно на 10 секунд, чтобы оно стало мягким.`,
                        images: [
                            'https://www.thedinnerbite.com/wp-content/uploads/2020/12/christmas-chicken-roast-img-14.jpg',
                        ],
                    },
                    {
                        title: 'Нанести зелень и приправы',
                        text: `Сначала натрите маслом с зеленью спину курицы, а затем выложите его на овощную подстилку в противне грудкой вверх. Втирайте масло с травами под ослабленную кожу птицы и по всей ее поверхности, включая полость. Наполните полость оставшимися дольками лимона и апельсина.`,
                        images: [
                            'https://www.thedinnerbite.com/wp-content/uploads/2020/12/christmas-chicken-roast-img-16.jpg',
                        ],
                    },
                    {
                        title: 'Залить бульон',
                        text: `Вылейте куриный бульон на дно формы для запекания.`,
                        images: [],
                    },
                    {
                        title: 'Запечь курицу',
                        text: `Поместите курицу в духовку и запекайте, пока внутренняя температура самой толстой части птицы не станет 165 °C. Для курицы моего размера я жарил около 2 часов, то есть 30 минут на каждые 0,5 кг птицы.`,
                        images: [
                            'https://www.thedinnerbite.com/wp-content/uploads/2020/12/christmas-chicken-roast-img-18.jpg',
                        ],
                        timer: 120,
                    },
                ],
            },
        ],
    },
];

export type TRecipe = {
    id: string;
    title: string;
    desciption: string;
    difficultyLevel: number;
    time: number;
    calories: number;
    diets: string[];
    parts: TPart[];
    images: string[];
};

export type TPart = {
    id: string;
    title: string;
    steps: TStep[];
    groceryList: TgroceryListItem[];
};

export type TStep = {
    title: string;
    text: string;
    images: string[];
    timer?: number;
    done?: boolean;
};

export type TgroceryListItem = {
    title: string;
    measure?: string;
    count?: number;
};
