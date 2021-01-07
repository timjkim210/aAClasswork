require 'rails_helper'

RSpec.describe UsersController, type: :controller do

    describe "GET #index" do
        it "renders all users" do
            get :index
            expect(response).to be_success
            expect(response).to render_template(:index)
        end
    end

end
