require 'rails_helper'

RSpec.describe UsersController, type: :controller do

    describe "GET #index" do
        it "renders all users" do
            get :index
            expect(response).to be_success
            expect(response).to render_template(:index)
        end
    end

    describe "GET #new" do
      it "renders new users page" do
        get :new
        expect(response).to be_success
        expect(response).to render_template(:new)
      end
    end

    describe "GET #show" do
      it "renders a user" do
        User.create!(name: "joe", email: "joe@email.com", password: "123456")
        get :show, id: 1
        expect(response).to be_success
        expect(response).to render_template(:show)
      end
    end

    describe "GET #edit" do
      it "renders a edit users page" do
        get :edit
        expect(response).to be_success
        expect(response).to render_template(:edit)
      end 
    end

    describe "POST #create" do
      context "with invalid params" do
        it "renders the new template" do

        end
      end

      context "with valid params" do

      end
    end

end
