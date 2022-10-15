import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import useAppDispatch from "../hooks/useAppDispatch";
import { ITodoFilter } from "../interfaces/Todo";
import { RootState } from "../store";
import { updateFilter } from "../store/reducers/todo";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
    const { items, filter } = useSelector((state: RootState) => state.todo);
    const dispatch = useAppDispatch();
    const filters: ITodoFilter[] = [
        { id: "all", text: "All" },
        { id: "open", text: "Open" },
        { id: "done", text: "Done" },
    ];

    const filteredItems = items.filter(x => {
        if (filter === "all") return true;
        else if (filter === "open") return x.isCompleted === false;
        else if (filter === "done") return x.isCompleted === true;
        else return true;
    })

    return (
        <div className="bg-white rounded-lg shadow-sm w-full lg:w-6/12 mx-auto mb-10">
            <div className="container">
                <div className="border-b border-gray-100 flex items-center">
                    {filters.map((x, i) => <div key={`filter-${x.id}`}
                        onClick={e => dispatch(updateFilter(x.id))}
                        className={`px-5 pt-5 pb-[calc(1.25rem-3px)] cursor-pointer border-b-2 hover:border-blue-500 ${filter === x.id ? 'border-blue-500' : 'border-transparent'}`}>{x.text}</div>)}
                </div>
                {filteredItems && filteredItems.length > 0 && <div className="p-5 max-h-64 overflow-auto">
                    {filteredItems.map((item, i) => <TodoItem item={item} key={`todo-${i}`} />)}
                </div>}
                <div className="p-5 text-center border-t border-gray-100">
                    Thats all folks!
                </div>
            </div>
        </div>
    )
}