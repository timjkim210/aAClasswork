class SubsController < ApplicationController
  before_action :require_logged_in

  def edit
    @sub = Sub.find(params[:id])
    render :edit
  end

  def update
    @sub = current_user.subs.find(params[:id]) #would be nil if sub is not found
    if @sub.update
      redirect_to sub_url(@sub)
    else

    end
  end
end
