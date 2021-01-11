class UsersController < ApplicationController

    before_action :require_logged_in, only: [:show] #probably shouldn't allow random users to see all the users (index) but leaving for testing purposes

    def new
        @user = User.new
        render :new
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            redirect_to users_url
        else
            flash.now[:errors] = @user.errors.full_messages
            render :new
        end
    end

    def index
        @users = User.all
        render :index
    end

    def show
        @user = User.find(params[:id])
        render :show
    end

    def edit
        @user = User.find(params[:id])
        render :edit
    end

    def update
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

        if @user.update(user_params)
            redirect_to user_url(@user)
        else
            flash.now[:errors] = @user.errors.full_messages
            render :edit
        end
    end


    private
    def user_params
        params.require(:user).permit(:password, :username)
    end
end
