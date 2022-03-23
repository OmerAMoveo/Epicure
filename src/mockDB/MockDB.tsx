// Types:
export type restaurant = {
    name: string,
    id: number,
    chef: string,
    opens: {
        openingTime: string,
        closingTime: string,
    },
    dished: string[],
    bigImage: string,
    smallImage: string,
    rating: number,
}

export enum Meal {
    Breakfest = 1,
    Lunch,
    Dinner,
}

export enum Comment {
    spicy = 1,
    vegeterian,
    vegan,
}

export type dish = {
    name: string,
    restaurantId: number,
    ingredients: string[],
    price: number,
    meal: Meal,
}

export type chef = {
    name: string,
    description: string,
    image: string,
}

export const Restaurants: restaurant[] = [
    {
        name: 'Claro',
        id: 1,
        chef: 'Ran Shmueli',
        opens: {
            openingTime: '12:00',
            closingTime: '22:00',
        },
        dished: [
            'Pad Ki Mao',
            'TA Ma-La-Ko',
            'Red Farm',
            'Pad Ki Mao',
        ],
        bigImage: '',
        smallImage: '',
        rating: 8.8,
    },

    {
        name: 'Lumina',
        id: 2,
        chef: 'Meir Adoni',
        opens: {
            openingTime: '11:30',
            closingTime: '23:00',
        },
        dished: [
            'Labrak',
            'Piree`',
        ],
        bigImage: '',
        smallImage: '',
        rating: 8.5,
    },

    {
        name: 'Tiger Lili',
        id: 3,
        chef: 'Yanir Green',
        opens: {
            openingTime: '11:30',
            closingTime: '21:30',
        },
        dished: [
            'Pad Kepao',
            'Sandwich Sushi',
        ],
        bigImage: '',
        smallImage: '',
        rating: 8.5,
    },

    {
        name: 'Popina',
        id: 4,
        chef: 'Orel Kimchi',
        opens: {
            openingTime: '11:30',
            closingTime: '23:00',
        },
        dished: [
            'Smoked Pizza',
            'Ravioli',
        ],
        bigImage: '',
        smallImage: '',
        rating: 9.4,
    }

]