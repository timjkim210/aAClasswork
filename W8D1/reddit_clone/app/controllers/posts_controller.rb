class PostsController < ApplicationController
    def show
        @sub = Sub.find_by(params[:sub_id])
        render :show
    end
end
