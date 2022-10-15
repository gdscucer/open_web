import { useRef, useState } from "react";
import useAppDispatch from "../hooks/useAppDispatch"
import { addTodo } from "../store/reducers/todo";

export const CreateTodo = () => {
    const dispatch = useAppDispatch();
    const [todo, setTodo] = useState("");

    const onAddTodo = (event: any) => {
        let value = String(todo).trim();
        if (!value) return;
        dispatch(addTodo(value))
        setTodo("")
    }
    return (
        <div className="bg-white rounded-lg shadow-sm w-full lg:w-6/12 mx-auto mb-10">
            <div className="container">
                <div className="border-b border-gray-100 p-5">
                    <h3 className="font-semibold">Add todo</h3>
                </div>
                <div className="flex justify-start items-center gap-x-3 p-5">
                    <input
                        type="text"
                        name="todo"
                        id="todo"
                        placeholder="Ex. Go for groceries..."
                        className="w-full py-2 border-b focus-visible:outline-none"
                        value={todo}
                        onChange={e => setTodo(e.target.value)}
                    />
                    <button
                        className="px-4 py-2 bg-blue-500 hover:bg-blue-800 ease-in-out duration-150 uppercase text-white rounded-sm"
                        onClick={onAddTodo}
                    >add</button>
                </div>
            </div>
        </div>
    )
}