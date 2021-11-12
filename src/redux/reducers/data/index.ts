interface IState {}

interface IAction {
	type: string;
}

const initialState: IState = {};

export const dataReducer = (state = initialState, action: IAction) => {
	switch (action.type) {
	}
};
