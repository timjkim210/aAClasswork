class ApplicationController < ActionController::Base
  #crlll

  def login(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def current_user
    @current_user = User.find_by(session_token: session[:session_token])
  end

  def require_logged_in
    redirect_to new_session_url unless logged_in?
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil

    #redirect_to new_session_url  #can we do this? 
  end

  def logged_in?
    !!current_user
  end
end
