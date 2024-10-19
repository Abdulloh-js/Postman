import { v4 } from "uuid"
const todo = [];

export const todoAdd = (req, res) => {
    const { title, desc }=(req.body);

console.log(title, desc);

    todo.push({ id: v4(), title, desc });
    res.status(200).json({success: true});
};

export const todoEdit  = (req, res =>{
    const { title, desc} = req.body;
    const {id} = req.params;

    const index = todo.findIndex((val) => val.id ===id);

    todo.splice(index, 1, { id, title, desc});

    res.status(200).json({success: true, todo});
})

export const todoGetid = (req, res) => {
    const { id} = req.params;

    const data =todo.find((val) => val.id === id);
    res.status(200).json({success: true});
}

export const todoGetall = (req, res) => {
    const {search} = req.query;

    const data = todo.includes(search);

console.log(data)

    res.status(200).json({success: true});
}

