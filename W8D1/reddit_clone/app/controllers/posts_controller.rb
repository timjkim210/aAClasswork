class PostsController < ApplicationController
    before_action :require_logged_in

    def show
        @post = Post.find(params[:id])
        render :show
    end

    def new
        @post = Post.new
        render :new
    end

    def create
        @post = Post.new(post_params)
        @post.author_id = current_user.id
        if
        else
        end
    end

    def post_params
        params.require(:post).permit(:title, :url, :content, :sub_id)
    end
end

