require 'rails_helper'

RSpec.describe User, type: :model do
  # pending "add some examples to (or delete) #{__FILE__}"
  it { should validate_presence_of(:name) }
  it { should validate_uniqueness_of(:name) }
  it { should validate_presence_of(:email) }
  it { should validate_presence_of(:password_digest) }
  it { should validate_length_of(:password).is_at_least(6)}
  it { should have_many(:goals) }

  subject(:user) {User.new(name: "Bob", email: "bob@email.com", password: "123456")}

  describe "#is_password?" do
    it "verify a password" do 
      expect(user.is_password?("123456")).to be true
    end

    it "checks for wrong passwords" do
      expect(user.is_password?("654321")).to be false
    end
  end

  # begin
    
  # rescue => exception
    
  # end, maybe use this for password=?

  describe "#password=" do
    it "creates a password_digest" do
      expect(user.password_digest).not_to eq nil
    end

    it "does not save password to the database" do
      expect(user.password).to eq nil
    end
  end

  describe "::find_by_credentials" do
    it "checks for a user" do
      
    end
  end

  describe "::generate_session_token" do
    it "generate session token" do
      expect(User.generate_session_token).not_to eq nil 
    end
  
    describe "#ensure_session_token" do
      user.session_token ||= User.generate_session_token
      it "ensures a session token" do
        expect(user.session_token).not_to eq nil
      end
    end
  end


end
