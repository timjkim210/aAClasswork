import {RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP} from '../actions/step_actions'

const stepsReducer = (prevState = {}, action) => {
    const nextState = Object.assign({}, prevState);
    switch(action.type) {
        case RECEIVE_STEPS:
            let newSteps = {};
            action.steps.forEach(step => {
                newSteps[step.id] = step;
            })
            return newSteps;
        case RECEIVE_STEP:
            nextState[action.step.id] = action.step;
            return nextState;
        case REMOVE_STEP:
            delete nextState[action.id];
            return nextState;
        default:
            return prevState;
    }
}

export default stepsReducer;