class Api::TodosController < ApplicationController
    def show
        render json: Todo.find(params[:id])
    end

    def index
        render json: Todo.all
    end

    def create
        todo = Todo.new(todo_params)
        if todo.save
            render json: todo
        else
            render json: todo.errors.full_messages
        end
    end

    def update
        todo = Todo.find_by_id(params[:id])
        if todo.update(todo_params)
            render json: todo
        else
            render json: "Invalid Params"
        end
    end

    def destroy
        todo = Todo.find_by_id(params[:id])
        todo.delete
        render json: todo
    end

    private

    def todo_params
        params.require(:todo).permit(:title, :body, :done)
    end
end
