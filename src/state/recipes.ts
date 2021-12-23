import {atom, atomFamily, selectorFamily} from 'recoil';
import {TPart, TRecipe, TStep} from '../data';

const recipesState = atom<TRecipe[]>({key: 'recipesState', default: []});

export const recipeState = selectorFamily<TRecipe, string>({
    key: 'recipeState',
    get:
        id =>
        ({get}) => {
            const items = get(recipesState);
            const item = items.find(el => el.id === id) || items[0];
            return item;
        },
});

export const recipePartState = selectorFamily<
    TPart,
    {id: string; part: number}
>({
    key: 'recipePart',
    get:
        ({id, part}) =>
        ({get}) =>
            get(recipeState(id)).parts[part],
});

export const recipeStepState = selectorFamily<
    TStep,
    {id: string; part: number; step: number}
>({
    key: 'recipeStep/Default',
    get:
        ({id, part, step}) =>
        ({get}) => {
            const {steps} = get(recipePartState({id, part}));
            return steps[step];
        },
});

export const recipeStepAtom = atomFamily<TStep, {id: string; part: number; step: number}>({
    key: 'recipeStep',
    default: recipeStepState,
});

export default recipesState;
