class SubsController < ApplicationController
  before_action :require_logged_in, only: [:edit, :update]

  def edit
    @sub = Sub.find(params[:id])
    render :edit
  end

  def update
    @sub = current_user.subs.find(params[:id]) #would be nil if sub is not found
    if @sub.update(params.require(:sub).permit(:title, :description))
      redirect_to sub_url(@sub)
    else
      flash.now[:errors] = ['You need to be moderator to update this sub']
      render :edit
    end
  end

  def show
    @sub = Sub.find(params[:id])
    redirect_to sub_url(@sub)
  end

  def index
    @subs = Sub.all 
    render :index
  end

  def new
    @sub = Sub.new
    render :new
  end

  def create
    @user = current_user
    @sub = Sub.new(params.require(:sub).permit(:title, :description))
    if @user && @sub.save
      redirect_to sub_url(@sub)
    else
      flash.now[:errors] = @sub.errors.full_messages
      render :new
    end
  end

end
