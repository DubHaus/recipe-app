import {NavigatorScreenParams} from '@react-navigation/native';

export type RootStackParamList = {
    home: {};
    explore: {};
    saved: {};
    myRecipes: {};
    recipe: NavigatorScreenParams<RecipeStackParamList>;
};

export type RecipeStackParamList = {
    preview: {
        id: string;
    };
    process: NavigatorScreenParams<ProcessStackParamList>;
    congrats: {
        id: string;
    };
};

export type ProcessStackParamList = {
    groceryList: {
        id: string;
    };
    step: {
        id: string;
        step: number;
        part: number;
    };
};
