import {atom, selector} from 'recoil';
import recipesState, {recipeStepState} from './recipes';

export type TRecipePageNavigation = {
    id: string;
    part: number;
    step: number;
};

export const recipePageNavigationState = atom<TRecipePageNavigation>({
    key: 'currentShowingRecipeState',
    default: {id: '', part: 0, step: 0},
});

// export const recipeIdNavigationState = selector<string>({
//     key: 'recipePartNavigationState',
//     get: ({get}) => get(recipePageNavigationState).id,
// });

// export const recipePartNavigationState = selector({
//     key: 'recipePartNavigationState',
//     get: ({get}) => get(recipePageNavigationState).part,
// });

// export const recipeStepNavigationState = selector({
//     key: 'recipePartNavigationState',
//     get: ({get}) => get(recipePageNavigationState).step,
// });

export const currentRecipeSelector = selector({
    key: 'recipeItemSelector',
    get: ({get}) => {
        const {id} = get(recipePageNavigationState);
        return get(recipesState).find(el => el.id === id);
    },
});

export const currentRecipeStepSelector = selector({
    key: 'currentRecipeStepSelector',
    get: ({get}) => {
        const {id, part} = get(recipePageNavigationState);
        return get(recipesState).find(el => el.id === id)?.parts[part];
    },
});
