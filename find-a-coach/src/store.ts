import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";
import { Coach } from "./entities/coach";
import { Request } from "./entities/request";

export interface State {
    coaches: Array<Coach>;
    requests: Array<Request>;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
    state: {
        coaches: [
            new Coach(1, "Manuel Lorenz", 39, ["Frontend", "Backend"]),
            new Coach(2, "Maximilian Schwarzmüller", 29, ["Frontend"])
        ],
        requests: [],
    },
    mutations: {},
    getters: {
        getCoaches(state: State): Array<Coach> {
            return state.coaches;
        },
        getRequest(state: State): Array<Request> {
            return state.requests;
        },
    },
});

export function useStore() {
    return baseUseStore(key);
}
