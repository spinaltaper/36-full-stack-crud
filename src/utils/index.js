export default function autoBind(classComponent) {
    const classMethods = Object.getOwnPropertyNames(classComponent.prototype);
    classMethods.forEach((method) => {
        if (method.startsWith('handle')){
            this[method] = this[method].bind(this);
        }
    });
}

export const validateTodo = (payload) => {
    if(!payload._id){
        throw new Error('VALIDATION ERROR: no id on todo');
    }

    if(!payload.title){
        throw new Error('VALIDATION ERROR: no title on todo';)
    }
};